-- ============================================================
-- BCI Academic Portal — Parents & Parent-Student Linking
-- Creates parents table, parent_students link table,
-- and updated RPC to create student + parent in one call.
-- ============================================================

-- ────────────────────────────────────────────────────────────
-- Table: parents
-- ────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS parents (
  id            UUID PRIMARY KEY REFERENCES auth.users(id),
  full_name     TEXT NOT NULL,
  phone         TEXT DEFAULT '',
  relationship  TEXT DEFAULT 'parent',
  status        TEXT DEFAULT 'active',
  created_at    TIMESTAMPTZ DEFAULT now(),
  updated_at    TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE parents ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admin full access on parents"
  ON parents FOR ALL
  USING ((SELECT role FROM profiles WHERE id = auth.uid()) IN ('admin', 'super_admin'));

CREATE POLICY "Parents read own record"
  ON parents FOR SELECT
  USING (id = auth.uid());

-- ────────────────────────────────────────────────────────────
-- Table: parent_students (many-to-many link)
-- ────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS parent_students (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_id   UUID NOT NULL REFERENCES parents(id) ON DELETE CASCADE,
  student_id  UUID NOT NULL REFERENCES students(id) ON DELETE CASCADE,
  relationship TEXT DEFAULT 'parent',
  created_at  TIMESTAMPTZ DEFAULT now(),
  UNIQUE(parent_id, student_id)
);

ALTER TABLE parent_students ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Admin full access on parent_students"
  ON parent_students FOR ALL
  USING ((SELECT role FROM profiles WHERE id = auth.uid()) IN ('admin', 'super_admin'));

CREATE POLICY "Parents read own links"
  ON parent_students FOR SELECT
  USING (parent_id = auth.uid());

-- ────────────────────────────────────────────────────────────
-- RPC: admin_create_student (updated — now also creates parent)
-- ────────────────────────────────────────────────────────────

CREATE OR REPLACE FUNCTION admin_create_student(
  p_email           TEXT,
  p_password        TEXT,
  p_full_name       TEXT,
  p_year_level      TEXT DEFAULT 'Year 11',
  p_programme       TEXT DEFAULT 'WACE',
  p_parent_name     TEXT DEFAULT '',
  p_parent_email    TEXT DEFAULT '',
  p_parent_password TEXT DEFAULT '',
  p_parent_phone    TEXT DEFAULT ''
)
RETURNS JSONB AS $$
DECLARE
  v_caller_role    TEXT;
  v_user_id        UUID := gen_random_uuid();
  v_parent_id      UUID;
  v_now            TIMESTAMPTZ := now();
  v_student_code   TEXT;
  v_result         JSONB;
BEGIN
  SELECT role INTO v_caller_role FROM profiles WHERE id = auth.uid();
  IF v_caller_role NOT IN ('admin', 'super_admin') THEN
    RAISE EXCEPTION 'Only admin can create students';
  END IF;

  IF EXISTS (SELECT 1 FROM auth.users WHERE email = p_email) THEN
    RAISE EXCEPTION 'Email already exists: %', p_email;
  END IF;

  v_student_code := 'BCI-' || to_char(CURRENT_DATE, 'YYYY') || '-' || lpad(nextval('student_code_seq')::TEXT, 3, '0');

  -- Create student auth user
  INSERT INTO auth.users (
    id, instance_id, aud, role, email, encrypted_password,
    email_confirmed_at, confirmation_token, confirmation_sent_at,
    recovery_token, email_change_token_new, email_change, email_change_token_current,
    email_change_confirm_status, phone_change, phone_change_token, reauthentication_token,
    raw_app_meta_data, raw_user_meta_data,
    is_super_admin, is_sso_user, is_anonymous, created_at, updated_at
  ) VALUES (
    v_user_id, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated',
    p_email, crypt(p_password, gen_salt('bf')),
    v_now, '', NULL,
    '', '', '', '',
    0, '', '', '',
    '{"provider":"email","providers":["email"]}'::JSONB,
    jsonb_build_object('full_name', p_full_name),
    false, false, false, v_now, v_now
  );

  INSERT INTO auth.identities (
    id, user_id, provider_id, provider, identity_data, last_sign_in_at, created_at, updated_at
  ) VALUES (
    gen_random_uuid(), v_user_id, v_user_id::TEXT, 'email',
    jsonb_build_object('sub', v_user_id::TEXT, 'email', p_email, 'email_verified', true, 'full_name', p_full_name),
    v_now, v_now, v_now
  );

  INSERT INTO profiles (id, email, full_name, role, status) VALUES
    (v_user_id, p_email, p_full_name, 'student', 'active');

  INSERT INTO students (id, student_code, full_name, preferred_name, year_level, programme, enrollment_status) VALUES
    (v_user_id, v_student_code, p_full_name, split_part(p_full_name, ' ', 1), p_year_level, p_programme, 'active');

  v_result := jsonb_build_object(
    'user_id', v_user_id,
    'email', p_email,
    'full_name', p_full_name,
    'student_code', v_student_code,
    'role', 'student'
  );

  -- Create parent if parent email provided
  IF p_parent_email <> '' AND p_parent_name <> '' THEN
    IF EXISTS (SELECT 1 FROM auth.users WHERE email = p_parent_email) THEN
      -- Parent already exists — just link
      SELECT id INTO v_parent_id FROM auth.users WHERE email = p_parent_email;
      INSERT INTO parent_students (parent_id, student_id, relationship)
        VALUES (v_parent_id, v_user_id, 'parent')
        ON CONFLICT (parent_id, student_id) DO NOTHING;

      v_result := v_result || jsonb_build_object(
        'parent_id', v_parent_id,
        'parent_email', p_parent_email,
        'parent_status', 'linked_existing'
      );
    ELSE
      v_parent_id := gen_random_uuid();

      INSERT INTO auth.users (
        id, instance_id, aud, role, email, encrypted_password,
        email_confirmed_at, confirmation_token, confirmation_sent_at,
        recovery_token, email_change_token_new, email_change, email_change_token_current,
        email_change_confirm_status, phone_change, phone_change_token, reauthentication_token,
        raw_app_meta_data, raw_user_meta_data,
        is_super_admin, is_sso_user, is_anonymous, created_at, updated_at
      ) VALUES (
        v_parent_id, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated',
        p_parent_email, crypt(COALESCE(NULLIF(p_parent_password, ''), 'BCI2025parent'), gen_salt('bf')),
        v_now, '', NULL,
        '', '', '', '',
        0, '', '', '',
        '{"provider":"email","providers":["email"]}'::JSONB,
        jsonb_build_object('full_name', p_parent_name),
        false, false, false, v_now, v_now
      );

      INSERT INTO auth.identities (
        id, user_id, provider_id, provider, identity_data, last_sign_in_at, created_at, updated_at
      ) VALUES (
        gen_random_uuid(), v_parent_id, v_parent_id::TEXT, 'email',
        jsonb_build_object('sub', v_parent_id::TEXT, 'email', p_parent_email, 'email_verified', true, 'full_name', p_parent_name),
        v_now, v_now, v_now
      );

      INSERT INTO profiles (id, email, full_name, role, status) VALUES
        (v_parent_id, p_parent_email, p_parent_name, 'parent', 'active');

      INSERT INTO parents (id, full_name, phone, relationship, status) VALUES
        (v_parent_id, p_parent_name, p_parent_phone, 'parent', 'active');

      INSERT INTO parent_students (parent_id, student_id, relationship)
        VALUES (v_parent_id, v_user_id, 'parent');

      v_result := v_result || jsonb_build_object(
        'parent_id', v_parent_id,
        'parent_email', p_parent_email,
        'parent_name', p_parent_name,
        'parent_status', 'created'
      );
    END IF;
  END IF;

  RETURN v_result;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
