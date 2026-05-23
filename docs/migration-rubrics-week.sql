-- ============================================================
-- BCI Academic Portal — Migration: Rubrics + Week Number
-- Adds marking key / rubric tables and week_number to assignments
-- ============================================================

-- ────────────────────────────────────────────────────────────
-- 1. Add week_number to assignments
-- ────────────────────────────────────────────────────────────

ALTER TABLE assignments
  ADD COLUMN IF NOT EXISTS week_number SMALLINT;

COMMENT ON COLUMN assignments.week_number IS 'WACE term week (1–10), makes time-based scheduling more intuitive than due_at alone';

-- ────────────────────────────────────────────────────────────
-- 2. Rubrics — marking key / scoring criteria per task
-- A rubric can attach to an assignment or a WACE outline.
-- ────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS rubrics (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  assignment_id UUID REFERENCES assignments(id) ON DELETE CASCADE,
  outline_id    UUID REFERENCES wace_assessment_outlines(id) ON DELETE CASCADE,
  title         TEXT NOT NULL,
  total_marks   NUMERIC NOT NULL DEFAULT 0,
  created_by    UUID REFERENCES teachers(id),
  status        TEXT NOT NULL DEFAULT 'draft'
                  CHECK (status IN ('draft', 'active', 'archived')),
  created_at    TIMESTAMPTZ DEFAULT now(),
  updated_at    TIMESTAMPTZ DEFAULT now(),
  CONSTRAINT rubric_has_parent
    CHECK (assignment_id IS NOT NULL OR outline_id IS NOT NULL)
);

CREATE INDEX IF NOT EXISTS idx_rubrics_assignment ON rubrics(assignment_id) WHERE assignment_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_rubrics_outline    ON rubrics(outline_id)    WHERE outline_id IS NOT NULL;

-- ────────────────────────────────────────────────────────────
-- 3. Rubric criteria — individual marking rows
-- ────────────────────────────────────────────────────────────

CREATE TABLE IF NOT EXISTS rubric_criteria (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  rubric_id   UUID NOT NULL REFERENCES rubrics(id) ON DELETE CASCADE,
  criterion   TEXT NOT NULL,
  description TEXT,
  max_marks   NUMERIC NOT NULL DEFAULT 0,
  sort_order  INTEGER NOT NULL DEFAULT 0,
  descriptors JSONB DEFAULT '[]'::JSONB,
  created_at  TIMESTAMPTZ DEFAULT now()
);

COMMENT ON COLUMN rubric_criteria.descriptors IS
  'Grade-level descriptors array: [{"level":"Excellent","marks_from":8,"marks_to":10,"descriptor":"..."},...]';

CREATE INDEX IF NOT EXISTS idx_rubric_criteria_rubric ON rubric_criteria(rubric_id);

-- ────────────────────────────────────────────────────────────
-- 4. RLS policies
-- ────────────────────────────────────────────────────────────

ALTER TABLE rubrics ENABLE ROW LEVEL SECURITY;
ALTER TABLE rubric_criteria ENABLE ROW LEVEL SECURITY;

CREATE POLICY rubrics_read_all ON rubrics
  FOR SELECT USING (true);

CREATE POLICY rubrics_write_teachers ON rubrics
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role IN ('teacher', 'admin', 'academic_director', 'super_admin'))
  );

CREATE POLICY rubric_criteria_read_all ON rubric_criteria
  FOR SELECT USING (true);

CREATE POLICY rubric_criteria_write_teachers ON rubric_criteria
  FOR ALL USING (
    EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role IN ('teacher', 'admin', 'academic_director', 'super_admin'))
  );

-- ────────────────────────────────────────────────────────────
-- 5. Seed: sample rubric for Physics Kinematics Problem Set
-- ────────────────────────────────────────────────────────────

INSERT INTO rubrics (id, assignment_id, title, total_marks, created_by, status) VALUES
  ('f0000000-0000-0000-0000-000000000001',
   '11000000-0000-0000-0000-000000000001',
   'Physics Kinematics Problem Set — Marking Key',
   20,
   'd0000000-0000-0000-0000-000000000001',
   'active')
ON CONFLICT DO NOTHING;

INSERT INTO rubric_criteria (id, rubric_id, criterion, description, max_marks, sort_order, descriptors) VALUES
  ('fc000000-0000-0000-0000-000000000001',
   'f0000000-0000-0000-0000-000000000001',
   'Knowledge & Understanding',
   'Correct application of kinematic equations and concepts',
   8, 1,
   '[{"level":"Excellent","marks_from":7,"marks_to":8,"descriptor":"Consistently applies all kinematic equations with full accuracy"},{"level":"Good","marks_from":5,"marks_to":6,"descriptor":"Applies most equations correctly with minor errors"},{"level":"Satisfactory","marks_from":3,"marks_to":4,"descriptor":"Basic understanding with some conceptual gaps"},{"level":"Limited","marks_from":0,"marks_to":2,"descriptor":"Significant gaps in understanding"}]'::JSONB),
  ('fc000000-0000-0000-0000-000000000002',
   'f0000000-0000-0000-0000-000000000001',
   'Problem Solving & Processing',
   'Logical working, correct substitution, algebraic manipulation',
   7, 2,
   '[{"level":"Excellent","marks_from":6,"marks_to":7,"descriptor":"Clear logical steps, correct algebra throughout"},{"level":"Good","marks_from":4,"marks_to":5,"descriptor":"Mostly logical with minor processing errors"},{"level":"Satisfactory","marks_from":2,"marks_to":3,"descriptor":"Attempts correct method but frequent errors"},{"level":"Limited","marks_from":0,"marks_to":1,"descriptor":"Unable to set up or process problems"}]'::JSONB),
  ('fc000000-0000-0000-0000-000000000003',
   'f0000000-0000-0000-0000-000000000001',
   'Communication & Presentation',
   'Units, significant figures, diagrams, clear layout',
   5, 3,
   '[{"level":"Excellent","marks_from":4,"marks_to":5,"descriptor":"All units correct, clear diagrams, well-presented"},{"level":"Good","marks_from":3,"marks_to":3,"descriptor":"Mostly correct units and presentation"},{"level":"Satisfactory","marks_from":1,"marks_to":2,"descriptor":"Some units missing, basic layout"},{"level":"Limited","marks_from":0,"marks_to":0,"descriptor":"Poor presentation, missing units"}]'::JSONB)
ON CONFLICT DO NOTHING;

-- Update existing assignments with week numbers
UPDATE assignments SET week_number = 8 WHERE id = '11000000-0000-0000-0000-000000000001';
UPDATE assignments SET week_number = 9 WHERE id = '11000000-0000-0000-0000-000000000002';
UPDATE assignments SET week_number = 10 WHERE id = '11000000-0000-0000-0000-000000000003';

-- Return summary
SELECT 'rubrics' AS table_name, COUNT(*) AS rows FROM rubrics
UNION ALL
SELECT 'rubric_criteria', COUNT(*) FROM rubric_criteria
UNION ALL
SELECT 'assignments_with_week', COUNT(*) FROM assignments WHERE week_number IS NOT NULL;
