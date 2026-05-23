-- ============================================================
-- BCI Academic Portal — Portal Views & RPC Functions
-- These views power the role-based dashboards via data-adapter.js
-- ============================================================

-- ────────────────────────────────────────────────────────────
-- RPC: get_my_portal_role
-- Returns the authenticated user's profile role info.
-- Called by data-adapter.js to determine which portal to show.
-- ────────────────────────────────────────────────────────────

CREATE OR REPLACE FUNCTION get_my_portal_role()
RETURNS TABLE (
  profile_id UUID,
  email TEXT,
  full_name TEXT,
  role TEXT,
  status TEXT
) AS $$
  SELECT id, email, full_name, role, status
  FROM profiles
  WHERE id = auth.uid();
$$ LANGUAGE SQL SECURITY DEFINER STABLE;

-- ────────────────────────────────────────────────────────────
-- VIEW: student_portal_overview
-- Shows the logged-in student's subjects, grades, assignments,
-- attendance summary, and timetable.
-- ────────────────────────────────────────────────────────────

CREATE OR REPLACE VIEW student_portal_overview AS
SELECT
  s.id AS student_id,
  s.full_name AS student_name,
  s.year_level,
  s.programme,
  sub.id AS subject_id,
  sub.name AS subject_name,
  sub.code AS subject_code,
  sub.list_type,
  c.class_name,
  t.full_name AS teacher_name,
  COALESCE(g.avg_score, 0) AS average_score,
  wace_grade_from_mark(COALESCE(g.avg_score, 0)) AS current_grade,
  COALESCE(att.total_sessions, 0) AS total_sessions,
  COALESCE(att.present_count, 0) AS present_count,
  CASE WHEN att.total_sessions > 0
    THEN ROUND(att.present_count::NUMERIC / att.total_sessions * 100)
    ELSE 0
  END AS attendance_pct,
  COALESCE(asgn.pending_count, 0) AS pending_assignments
FROM students s
JOIN class_students cs ON cs.student_id = s.id AND cs.status = 'active'
JOIN classes c ON c.id = cs.class_id AND c.status = 'active'
JOIN subjects sub ON sub.id = c.subject_id
LEFT JOIN teachers t ON t.id = c.teacher_id
LEFT JOIN LATERAL (
  SELECT ROUND(AVG(gr.score)) AS avg_score
  FROM grades gr
  WHERE gr.student_id = s.id AND gr.subject_id = sub.id
) g ON true
LEFT JOIN LATERAL (
  SELECT
    COUNT(*) AS total_sessions,
    COUNT(*) FILTER (WHERE ar.status = 'present') AS present_count
  FROM attendance_records ar
  JOIN attendance_sessions asess ON asess.id = ar.attendance_session_id
  WHERE ar.student_id = s.id AND asess.class_id = c.id
) att ON true
LEFT JOIN LATERAL (
  SELECT COUNT(*) AS pending_count
  FROM assignment_targets atgt
  JOIN assignments a ON a.id = atgt.assignment_id
  LEFT JOIN assignment_submissions asub
    ON asub.assignment_id = a.id AND asub.student_id = s.id
  WHERE atgt.student_id = s.id
    AND a.subject_id = sub.id
    AND a.status = 'published'
    AND (asub.id IS NULL OR asub.status = 'not_submitted')
) asgn ON true
WHERE s.enrollment_status = 'active';

-- ────────────────────────────────────────────────────────────
-- VIEW: parent_portal_children_overview
-- Shows a parent's linked children with their academic summary.
-- ────────────────────────────────────────────────────────────

CREATE OR REPLACE VIEW parent_portal_children_overview AS
SELECT
  p.id AS parent_id,
  p.full_name AS parent_name,
  s.id AS student_id,
  s.full_name AS student_name,
  s.year_level,
  s.programme,
  s.enrollment_status,
  sg.relationship,
  sg.can_view_reports,
  COALESCE(g.avg_score, 0) AS overall_average,
  wace_grade_from_mark(COALESCE(g.avg_score, 0)) AS overall_grade,
  COALESCE(att.attendance_pct, 0) AS attendance_pct,
  COALESCE(asgn.pending_count, 0) AS pending_assignments
FROM parents p
JOIN student_guardians sg ON sg.parent_id = p.id
JOIN students s ON s.id = sg.student_id
LEFT JOIN LATERAL (
  SELECT ROUND(AVG(gr.score)) AS avg_score
  FROM grades gr
  WHERE gr.student_id = s.id AND gr.visible_to_parent = true
) g ON true
LEFT JOIN LATERAL (
  SELECT CASE WHEN COUNT(*) > 0
    THEN ROUND(COUNT(*) FILTER (WHERE ar.status = 'present')::NUMERIC / COUNT(*) * 100)
    ELSE 0
  END AS attendance_pct
  FROM attendance_records ar
  WHERE ar.student_id = s.id
) att ON true
LEFT JOIN LATERAL (
  SELECT COUNT(*) AS pending_count
  FROM assignment_targets atgt
  JOIN assignments a ON a.id = atgt.assignment_id
  LEFT JOIN assignment_submissions asub
    ON asub.assignment_id = a.id AND asub.student_id = s.id
  WHERE atgt.student_id = s.id
    AND a.status = 'published'
    AND (asub.id IS NULL OR asub.status = 'not_submitted')
) asgn ON true;

-- ────────────────────────────────────────────────────────────
-- VIEW: teacher_portal_overview
-- Shows a teacher's assigned classes with student counts,
-- upcoming assignments, and attendance stats.
-- ────────────────────────────────────────────────────────────

CREATE OR REPLACE VIEW teacher_portal_overview AS
SELECT
  t.id AS teacher_id,
  t.full_name AS teacher_name,
  t.department,
  c.id AS class_id,
  c.class_name,
  c.year_level,
  c.room,
  sub.id AS subject_id,
  sub.name AS subject_name,
  sub.code AS subject_code,
  COALESCE(cs_count.student_count, 0) AS student_count,
  COALESCE(asgn.active_assignments, 0) AS active_assignments,
  COALESCE(att.recent_attendance_pct, 0) AS recent_attendance_pct
FROM teachers t
JOIN classes c ON c.teacher_id = t.id AND c.status = 'active'
JOIN subjects sub ON sub.id = c.subject_id
LEFT JOIN LATERAL (
  SELECT COUNT(*) AS student_count
  FROM class_students
  WHERE class_id = c.id AND status = 'active'
) cs_count ON true
LEFT JOIN LATERAL (
  SELECT COUNT(*) AS active_assignments
  FROM assignments
  WHERE (class_id = c.id OR subject_id = sub.id)
    AND status = 'published'
    AND (due_at IS NULL OR due_at >= NOW())
) asgn ON true
LEFT JOIN LATERAL (
  SELECT CASE WHEN COUNT(*) > 0
    THEN ROUND(COUNT(*) FILTER (WHERE ar.status = 'present')::NUMERIC / COUNT(*) * 100)
    ELSE 0
  END AS recent_attendance_pct
  FROM attendance_records ar
  JOIN attendance_sessions asess ON asess.id = ar.attendance_session_id
  WHERE asess.class_id = c.id
    AND asess.session_date >= CURRENT_DATE - INTERVAL '14 days'
) att ON true
WHERE t.status = 'active';

-- ────────────────────────────────────────────────────────────
-- VIEW: teacher_portal_subject_permissions
-- Shows which subjects a teacher can teach/manage.
-- ────────────────────────────────────────────────────────────

CREATE OR REPLACE VIEW teacher_portal_subject_permissions AS
SELECT
  ts.teacher_id,
  t.full_name AS teacher_name,
  ts.subject_id,
  sub.name AS subject_name,
  sub.code AS subject_code,
  sub.list_type,
  sub.hemisphere,
  ts.permission_level,
  ts.can_create_assignments,
  ts.can_enter_marks,
  ts.can_manage_outline,
  ts.status
FROM teacher_subjects ts
JOIN teachers t ON t.id = ts.teacher_id
JOIN subjects sub ON sub.id = ts.subject_id
WHERE ts.status = 'active';

-- ────────────────────────────────────────────────────────────
-- VIEW: school_admin_portal_overview
-- High-level school KPIs: student/teacher counts, attendance,
-- academic performance, WACE progress.
-- ────────────────────────────────────────────────────────────

CREATE OR REPLACE VIEW school_admin_portal_overview AS
SELECT
  (SELECT COUNT(*) FROM students WHERE enrollment_status = 'active') AS total_students,
  (SELECT COUNT(*) FROM teachers WHERE status = 'active') AS total_teachers,
  (SELECT COUNT(*) FROM classes WHERE status = 'active') AS total_classes,
  (SELECT COUNT(*) FROM subjects WHERE status = 'active') AS total_subjects,
  (SELECT COALESCE(ROUND(AVG(gr.score)), 0) FROM grades gr) AS school_avg_score,
  (SELECT CASE WHEN COUNT(*) > 0
    THEN ROUND(COUNT(*) FILTER (WHERE ar.status = 'present')::NUMERIC / COUNT(*) * 100)
    ELSE 0
  END FROM attendance_records ar) AS school_attendance_pct,
  (SELECT COUNT(*) FROM assignments WHERE status = 'published') AS active_assignments,
  (SELECT COUNT(*) FROM wace_assessment_outlines WHERE status = 'approved') AS approved_outlines,
  (SELECT COUNT(*) FROM wace_assessment_outlines WHERE status = 'draft') AS draft_outlines,
  (SELECT COUNT(*) FROM evidence_items WHERE status = 'gap') AS evidence_gaps;

-- ────────────────────────────────────────────────────────────
-- VIEW: academic_director_portal_overview
-- Detailed academic oversight: per-subject performance,
-- outline statuses, teacher coverage.
-- ────────────────────────────────────────────────────────────

CREATE OR REPLACE VIEW academic_director_portal_overview AS
SELECT
  sub.id AS subject_id,
  sub.name AS subject_name,
  sub.code AS subject_code,
  sub.list_type,
  sub.hemisphere,
  sub.course_type,
  COALESCE(tc.teacher_count, 0) AS teacher_count,
  COALESCE(cls.class_count, 0) AS class_count,
  COALESCE(stu.student_count, 0) AS student_count,
  COALESCE(g.avg_score, 0) AS avg_score,
  wace_grade_from_mark(COALESCE(g.avg_score, 0)) AS avg_grade,
  COALESCE(ol.outline_count, 0) AS outline_count,
  COALESCE(ol.approved_count, 0) AS approved_outlines,
  COALESCE(ol.pending_count, 0) AS pending_outlines
FROM subjects sub
LEFT JOIN LATERAL (
  SELECT COUNT(DISTINCT teacher_id) AS teacher_count
  FROM teacher_subjects WHERE subject_id = sub.id AND status = 'active'
) tc ON true
LEFT JOIN LATERAL (
  SELECT COUNT(*) AS class_count
  FROM classes WHERE subject_id = sub.id AND status = 'active'
) cls ON true
LEFT JOIN LATERAL (
  SELECT COUNT(DISTINCT cs.student_id) AS student_count
  FROM class_students cs
  JOIN classes c ON c.id = cs.class_id
  WHERE c.subject_id = sub.id AND cs.status = 'active' AND c.status = 'active'
) stu ON true
LEFT JOIN LATERAL (
  SELECT ROUND(AVG(gr.score)) AS avg_score
  FROM grades gr WHERE gr.subject_id = sub.id
) g ON true
LEFT JOIN LATERAL (
  SELECT
    COUNT(*) AS outline_count,
    COUNT(*) FILTER (WHERE status = 'approved') AS approved_count,
    COUNT(*) FILTER (WHERE status IN ('draft', 'director_review')) AS pending_count
  FROM wace_assessment_outlines WHERE subject_id = sub.id
) ol ON true
WHERE sub.status = 'active';

-- ────────────────────────────────────────────────────────────
-- VIEW: academic_director_student_timetable_matrix
-- Cross-tab of student timetable entries for scheduling oversight.
-- ────────────────────────────────────────────────────────────

CREATE OR REPLACE VIEW academic_director_student_timetable_matrix AS
SELECT
  s.id AS student_id,
  s.full_name AS student_name,
  s.year_level,
  te.day_of_week,
  te.start_time,
  te.end_time,
  te.room,
  te.status AS timetable_status,
  c.class_name,
  sub.name AS subject_name,
  sub.code AS subject_code,
  t.full_name AS teacher_name
FROM timetable_entries te
JOIN classes c ON c.id = te.class_id
JOIN subjects sub ON sub.id = c.subject_id
LEFT JOIN teachers t ON t.id = c.teacher_id
LEFT JOIN students s ON s.id = te.student_id
WHERE te.status = 'scheduled';

-- ────────────────────────────────────────────────────────────
-- VIEW: qa_mr_portal_overview
-- Quality assurance / management representative dashboard.
-- Evidence tracking, audit trail, compliance status.
-- ────────────────────────────────────────────────────────────

CREATE OR REPLACE VIEW qa_mr_portal_overview AS
SELECT
  (SELECT COUNT(*) FROM evidence_items) AS total_evidence,
  (SELECT COUNT(*) FROM evidence_items WHERE status = 'complete') AS complete_evidence,
  (SELECT COUNT(*) FROM evidence_items WHERE status = 'gap') AS evidence_gaps,
  (SELECT COUNT(*) FROM evidence_items WHERE status = 'review') AS evidence_in_review,
  (SELECT COUNT(*) FROM audit_logs) AS total_audit_entries,
  (SELECT COUNT(*) FROM audit_logs WHERE created_at >= CURRENT_DATE - INTERVAL '7 days') AS recent_audit_entries,
  (SELECT COUNT(*) FROM wace_assessment_outlines WHERE status = 'approved') AS approved_outlines,
  (SELECT COUNT(*) FROM wace_assessment_outlines WHERE status IN ('draft', 'director_review')) AS pending_outlines,
  (SELECT COUNT(*) FROM wace_assessment_outlines) AS total_outlines,
  (SELECT COUNT(*) FROM wace_outline_templates) AS template_count,
  (SELECT COUNT(DISTINCT subject_code) FROM wace_outline_templates) AS subjects_with_templates;
