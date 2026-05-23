-- ============================================================
-- BCI Academic Portal — Admin: Create Student / Teacher RPCs
-- Allows admin portal to create full user records in one call.
-- ============================================================

-- ────────────────────────────────────────────────────────────
-- RPC: admin_create_student
-- Creates auth.users + auth.identities + profiles + students
-- Only callable by admin / super_admin roles.
-- ────────────────────────────────────────────────────────────

CREATE OR REPLACE FUNCTION admin_create_student(
  p_email       TEXT,
  p_password    TEXT,
  p_full_name   TEXT,
  p_year_level  TEXT DEFAULT 'Year 11',
  p_programme   TEXT DEFAULT 'WACE'
)
RETURNS JSONB AS $$
DECLARE
  v_caller_role TEXT;
  v_user_id     UUID := gen_random_uuid();
  v_now         TIMESTAMPTZ := now();
  v_student_code TEXT;
BEGIN
  SELECT role INTO v_caller_role FROM profiles WHERE id = auth.uid();
  IF v_caller_role NOT IN ('admin', 'super_admin') THEN
    RAISE EXCEPTION 'Only admin can create students';
  END IF;

  IF EXISTS (SELECT 1 FROM auth.users WHERE email = p_email) THEN
    RAISE EXCEPTION 'Email already exists: %', p_email;
  END IF;

  v_student_code := 'BCI-' || to_char(CURRENT_DATE, 'YYYY') || '-' || lpad(nextval('student_code_seq')::TEXT, 3, '0');

  INSERT INTO auth.users (
    id, instance_id, aud, role, email, encrypted_password,
    email_confirmed_at, confirmed_at, confirmation_token, confirmation_sent_at,
    recovery_token, email_change_token_new, email_change, email_change_token_current,
    email_change_confirm_status, phone_change, phone_change_token, reauthentication_token,
    raw_app_meta_data, raw_user_meta_data,
    is_super_admin, is_sso_user, is_anonymous, created_at, updated_at
  ) VALUES (
    v_user_id, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated',
    p_email, crypt(p_password, gen_salt('bf')),
    v_now, v_now, '', NULL,
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

  RETURN jsonb_build_object(
    'user_id', v_user_id,
    'email', p_email,
    'full_name', p_full_name,
    'student_code', v_student_code,
    'role', 'student'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ────────────────────────────────────────────────────────────
-- RPC: admin_create_teacher
-- Creates auth.users + auth.identities + profiles + teachers
-- + teacher_subjects for selected subjects.
-- ────────────────────────────────────────────────────────────

CREATE OR REPLACE FUNCTION admin_create_teacher(
  p_email        TEXT,
  p_password     TEXT,
  p_full_name    TEXT,
  p_department   TEXT DEFAULT '',
  p_subject_ids  UUID[] DEFAULT '{}'
)
RETURNS JSONB AS $$
DECLARE
  v_caller_role TEXT;
  v_user_id     UUID := gen_random_uuid();
  v_now         TIMESTAMPTZ := now();
  v_sid         UUID;
BEGIN
  SELECT role INTO v_caller_role FROM profiles WHERE id = auth.uid();
  IF v_caller_role NOT IN ('admin', 'super_admin') THEN
    RAISE EXCEPTION 'Only admin can create teachers';
  END IF;

  IF EXISTS (SELECT 1 FROM auth.users WHERE email = p_email) THEN
    RAISE EXCEPTION 'Email already exists: %', p_email;
  END IF;

  INSERT INTO auth.users (
    id, instance_id, aud, role, email, encrypted_password,
    email_confirmed_at, confirmed_at, confirmation_token, confirmation_sent_at,
    recovery_token, email_change_token_new, email_change, email_change_token_current,
    email_change_confirm_status, phone_change, phone_change_token, reauthentication_token,
    raw_app_meta_data, raw_user_meta_data,
    is_super_admin, is_sso_user, is_anonymous, created_at, updated_at
  ) VALUES (
    v_user_id, '00000000-0000-0000-0000-000000000000', 'authenticated', 'authenticated',
    p_email, crypt(p_password, gen_salt('bf')),
    v_now, v_now, '', NULL,
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
    (v_user_id, p_email, p_full_name, 'teacher', 'active');

  INSERT INTO teachers (id, full_name, department, status) VALUES
    (v_user_id, p_full_name, p_department, 'active');

  FOREACH v_sid IN ARRAY p_subject_ids LOOP
    INSERT INTO teacher_subjects (teacher_id, subject_id, permission_level, can_create_assignments, can_enter_marks, can_manage_outline, status)
    VALUES (v_user_id, v_sid, 'teach', true, true, false, 'active')
    ON CONFLICT (teacher_id, subject_id) DO NOTHING;
  END LOOP;

  RETURN jsonb_build_object(
    'user_id', v_user_id,
    'email', p_email,
    'full_name', p_full_name,
    'department', p_department,
    'role', 'teacher',
    'subject_count', array_length(p_subject_ids, 1)
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ────────────────────────────────────────────────────────────
-- Sequence for auto-generating student codes
-- ────────────────────────────────────────────────────────────

CREATE SEQUENCE IF NOT EXISTS student_code_seq START WITH 100;

-- Set sequence past existing students
SELECT setval('student_code_seq', GREATEST(100, (
  SELECT COALESCE(MAX(NULLIF(regexp_replace(student_code, '[^0-9]', '', 'g'), '')::INT), 100)
  FROM students
)));
