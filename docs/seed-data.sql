-- ============================================================
-- BCI Academic Portal — Seed Data
-- Populates base academic structure for portal testing.
-- Run AFTER the main schema and portal-views.sql.
-- ============================================================

-- ────────────────────────────────────────────────────────────
-- Programme
-- ────────────────────────────────────────────────────────────

INSERT INTO programmes (id, name, description, status) VALUES
  ('a0000000-0000-0000-0000-000000000001', 'WACE', 'Western Australian Certificate of Education — ATAR pathway', 'active')
ON CONFLICT (name) DO NOTHING;

-- ────────────────────────────────────────────────────────────
-- Subjects (16 BCI-approved WACE ATAR subjects)
-- ────────────────────────────────────────────────────────────

INSERT INTO subjects (id, programme_id, code, name, course_type, list_type, hemisphere, status) VALUES
  ('b0000000-0000-0000-0000-000000000001', 'a0000000-0000-0000-0000-000000000001', 'AEACC', 'Accounting and Finance', 'WACE_ATAR', 'A', 'NH', 'active'),
  ('b0000000-0000-0000-0000-000000000002', 'a0000000-0000-0000-0000-000000000001', 'AEBME', 'Business Management and Enterprise', 'WACE_ATAR', 'A', 'NH', 'active'),
  ('b0000000-0000-0000-0000-000000000003', 'a0000000-0000-0000-0000-000000000001', 'AECHE', 'Chemistry', 'WACE_ATAR', 'B', 'NH', 'active'),
  ('b0000000-0000-0000-0000-000000000004', 'a0000000-0000-0000-0000-000000000001', 'AEECO', 'Economics', 'WACE_ATAR', 'A', 'NH', 'active'),
  ('b0000000-0000-0000-0000-000000000005', 'a0000000-0000-0000-0000-000000000001', 'AEENG', 'English', 'WACE_ATAR', 'A', 'NH', 'active'),
  ('b0000000-0000-0000-0000-000000000006', 'a0000000-0000-0000-0000-000000000001', 'AEELD', 'English as an Additional Language or Dialect', 'WACE_ATAR', 'A', 'NH', 'active'),
  ('b0000000-0000-0000-0000-000000000007', 'a0000000-0000-0000-0000-000000000001', 'AEHBY', 'Human Biology', 'WACE_ATAR', 'B', 'NH', 'active'),
  ('b0000000-0000-0000-0000-000000000008', 'a0000000-0000-0000-0000-000000000001', 'AEMAA', 'Mathematics Applications', 'WACE_ATAR', 'B', 'NH', 'active'),
  ('b0000000-0000-0000-0000-000000000009', 'a0000000-0000-0000-0000-000000000001', 'AEMAM', 'Mathematics Methods', 'WACE_ATAR', 'B', 'NH', 'active'),
  ('b0000000-0000-0000-0000-000000000010', 'a0000000-0000-0000-0000-000000000001', 'AEPHY', 'Physics', 'WACE_ATAR', 'B', 'NH', 'active'),
  ('b0000000-0000-0000-0000-000000000011', 'a0000000-0000-0000-0000-000000000001', 'AEPSY', 'Psychology', 'WACE_ATAR', 'A', 'NH', 'active'),
  ('b0000000-0000-0000-0000-000000000012', 'a0000000-0000-0000-0000-000000000001', 'AEAIT', 'Applied Information Technology', 'WACE_ATAR', 'B', 'SH', 'active'),
  ('b0000000-0000-0000-0000-000000000013', 'a0000000-0000-0000-0000-000000000001', 'AEBLY', 'Biology', 'WACE_ATAR', 'B', 'SH', 'active'),
  ('b0000000-0000-0000-0000-000000000014', 'a0000000-0000-0000-0000-000000000001', 'AECFL', 'Chinese: First Language', 'WACE_ATAR', 'A', 'SH', 'active'),
  ('b0000000-0000-0000-0000-000000000015', 'a0000000-0000-0000-0000-000000000001', 'AECSL', 'Chinese: Second Language', 'WACE_ATAR', 'A', 'SH', 'active'),
  ('b0000000-0000-0000-0000-000000000016', 'a0000000-0000-0000-0000-000000000001', 'AEMAS', 'Mathematics Specialist', 'WACE_ATAR', 'B', 'SH', 'active')
ON CONFLICT (programme_id, name) DO NOTHING;

-- ────────────────────────────────────────────────────────────
-- Students (6 demo students matching index.html dropdowns)
-- ────────────────────────────────────────────────────────────

INSERT INTO students (id, student_code, full_name, preferred_name, year_level, programme, enrollment_status) VALUES
  ('c0000000-0000-0000-0000-000000000001', 'BCI-2025-001', 'Amanda Lee', 'Amanda', 'Year 11', 'WACE', 'active'),
  ('c0000000-0000-0000-0000-000000000002', 'BCI-2025-002', 'Jason Ng', 'Jason', 'Year 11', 'WACE', 'active'),
  ('c0000000-0000-0000-0000-000000000003', 'BCI-2025-003', 'Priya Shah', 'Priya', 'Year 11', 'WACE', 'active'),
  ('c0000000-0000-0000-0000-000000000004', 'BCI-2025-004', 'Daniel Ho', 'Daniel', 'Year 12', 'WACE', 'active'),
  ('c0000000-0000-0000-0000-000000000005', 'BCI-2025-005', 'Mei Chen', 'Mei', 'Year 12', 'WACE', 'active'),
  ('c0000000-0000-0000-0000-000000000006', 'BCI-2025-006', 'Liam Tan', 'Liam', 'Year 12', 'WACE', 'active')
ON CONFLICT (student_code) DO NOTHING;

-- ────────────────────────────────────────────────────────────
-- Teachers (4 demo teachers)
-- ────────────────────────────────────────────────────────────

INSERT INTO teachers (id, full_name, department, status) VALUES
  ('d0000000-0000-0000-0000-000000000001', 'Ms Rachel Wong', 'Sciences', 'active'),
  ('d0000000-0000-0000-0000-000000000002', 'Mr James Mitchell', 'Mathematics', 'active'),
  ('d0000000-0000-0000-0000-000000000003', 'Ms Sarah Lin', 'Humanities & English', 'active'),
  ('d0000000-0000-0000-0000-000000000004', 'Mr David Tan', 'Business & IT', 'active')
ON CONFLICT DO NOTHING;

-- ────────────────────────────────────────────────────────────
-- Teacher-Subject assignments
-- ────────────────────────────────────────────────────────────

INSERT INTO teacher_subjects (teacher_id, subject_id, permission_level, can_create_assignments, can_enter_marks, can_manage_outline, status) VALUES
  -- Ms Rachel Wong: Physics, Chemistry, Human Biology, Biology
  ('d0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000010', 'lead', true, true, true, 'active'),
  ('d0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000003', 'teach', true, true, false, 'active'),
  ('d0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000007', 'teach', true, true, false, 'active'),
  ('d0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000013', 'teach', true, true, false, 'active'),
  -- Mr James Mitchell: Maths Methods, Maths Applications, Maths Specialist
  ('d0000000-0000-0000-0000-000000000002', 'b0000000-0000-0000-0000-000000000009', 'lead', true, true, true, 'active'),
  ('d0000000-0000-0000-0000-000000000002', 'b0000000-0000-0000-0000-000000000008', 'lead', true, true, true, 'active'),
  ('d0000000-0000-0000-0000-000000000002', 'b0000000-0000-0000-0000-000000000016', 'teach', true, true, false, 'active'),
  -- Ms Sarah Lin: English, EALD, Psychology
  ('d0000000-0000-0000-0000-000000000003', 'b0000000-0000-0000-0000-000000000005', 'lead', true, true, true, 'active'),
  ('d0000000-0000-0000-0000-000000000003', 'b0000000-0000-0000-0000-000000000006', 'lead', true, true, true, 'active'),
  ('d0000000-0000-0000-0000-000000000003', 'b0000000-0000-0000-0000-000000000011', 'teach', true, true, false, 'active'),
  -- Mr David Tan: Accounting, BME, Economics, Applied IT
  ('d0000000-0000-0000-0000-000000000004', 'b0000000-0000-0000-0000-000000000001', 'lead', true, true, true, 'active'),
  ('d0000000-0000-0000-0000-000000000004', 'b0000000-0000-0000-0000-000000000002', 'lead', true, true, true, 'active'),
  ('d0000000-0000-0000-0000-000000000004', 'b0000000-0000-0000-0000-000000000004', 'teach', true, true, false, 'active'),
  ('d0000000-0000-0000-0000-000000000004', 'b0000000-0000-0000-0000-000000000012', 'teach', true, true, false, 'active')
ON CONFLICT (teacher_id, subject_id) DO NOTHING;

-- ────────────────────────────────────────────────────────────
-- Classes (matching index.html QR dropdown)
-- ────────────────────────────────────────────────────────────

INSERT INTO classes (id, subject_id, teacher_id, class_name, year_level, room, status) VALUES
  ('e0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000010', 'd0000000-0000-0000-0000-000000000001', 'Y11 Physics', 'Year 11', 'Lab 1', 'active'),
  ('e0000000-0000-0000-0000-000000000002', 'b0000000-0000-0000-0000-000000000006', 'd0000000-0000-0000-0000-000000000003', 'Y11 EALD', 'Year 11', 'Room 201', 'active'),
  ('e0000000-0000-0000-0000-000000000003', 'b0000000-0000-0000-0000-000000000009', 'd0000000-0000-0000-0000-000000000002', 'Y11 Maths Methods', 'Year 11', 'Room 105', 'active'),
  ('e0000000-0000-0000-0000-000000000004', 'b0000000-0000-0000-0000-000000000001', 'd0000000-0000-0000-0000-000000000004', 'Y11 Accounting', 'Year 11', 'Room 302', 'active'),
  ('e0000000-0000-0000-0000-000000000005', 'b0000000-0000-0000-0000-000000000003', 'd0000000-0000-0000-0000-000000000001', 'Y12 Chemistry', 'Year 12', 'Lab 2', 'active'),
  ('e0000000-0000-0000-0000-000000000006', 'b0000000-0000-0000-0000-000000000006', 'd0000000-0000-0000-0000-000000000003', 'Y12 EALD', 'Year 12', 'Room 201', 'active'),
  ('e0000000-0000-0000-0000-000000000007', 'b0000000-0000-0000-0000-000000000011', 'd0000000-0000-0000-0000-000000000003', 'Y12 Psychology', 'Year 12', 'Room 204', 'active'),
  -- Additional classes for broader coverage
  ('e0000000-0000-0000-0000-000000000008', 'b0000000-0000-0000-0000-000000000005', 'd0000000-0000-0000-0000-000000000003', 'Y11 English', 'Year 11', 'Room 202', 'active'),
  ('e0000000-0000-0000-0000-000000000009', 'b0000000-0000-0000-0000-000000000008', 'd0000000-0000-0000-0000-000000000002', 'Y11 Maths Applications', 'Year 11', 'Room 106', 'active'),
  ('e0000000-0000-0000-0000-000000000010', 'b0000000-0000-0000-0000-000000000002', 'd0000000-0000-0000-0000-000000000004', 'Y12 BME', 'Year 12', 'Room 303', 'active')
ON CONFLICT DO NOTHING;

-- ────────────────────────────────────────────────────────────
-- Class-Student enrollments
-- ────────────────────────────────────────────────────────────

INSERT INTO class_students (class_id, student_id, status) VALUES
  -- Y11 students: Amanda, Jason, Priya
  ('e0000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000001', 'active'), -- Amanda → Y11 Physics
  ('e0000000-0000-0000-0000-000000000002', 'c0000000-0000-0000-0000-000000000001', 'active'), -- Amanda → Y11 EALD
  ('e0000000-0000-0000-0000-000000000003', 'c0000000-0000-0000-0000-000000000001', 'active'), -- Amanda → Y11 Maths Methods
  ('e0000000-0000-0000-0000-000000000004', 'c0000000-0000-0000-0000-000000000001', 'active'), -- Amanda → Y11 Accounting
  ('e0000000-0000-0000-0000-000000000008', 'c0000000-0000-0000-0000-000000000001', 'active'), -- Amanda → Y11 English
  ('e0000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000002', 'active'), -- Jason → Y11 Physics
  ('e0000000-0000-0000-0000-000000000003', 'c0000000-0000-0000-0000-000000000002', 'active'), -- Jason → Y11 Maths Methods
  ('e0000000-0000-0000-0000-000000000009', 'c0000000-0000-0000-0000-000000000002', 'active'), -- Jason → Y11 Maths Apps
  ('e0000000-0000-0000-0000-000000000008', 'c0000000-0000-0000-0000-000000000002', 'active'), -- Jason → Y11 English
  ('e0000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000003', 'active'), -- Priya → Y11 Physics
  ('e0000000-0000-0000-0000-000000000002', 'c0000000-0000-0000-0000-000000000003', 'active'), -- Priya → Y11 EALD
  ('e0000000-0000-0000-0000-000000000004', 'c0000000-0000-0000-0000-000000000003', 'active'), -- Priya → Y11 Accounting
  ('e0000000-0000-0000-0000-000000000008', 'c0000000-0000-0000-0000-000000000003', 'active'), -- Priya → Y11 English
  -- Y12 students: Daniel, Mei, Liam
  ('e0000000-0000-0000-0000-000000000005', 'c0000000-0000-0000-0000-000000000004', 'active'), -- Daniel → Y12 Chemistry
  ('e0000000-0000-0000-0000-000000000006', 'c0000000-0000-0000-0000-000000000004', 'active'), -- Daniel → Y12 EALD
  ('e0000000-0000-0000-0000-000000000007', 'c0000000-0000-0000-0000-000000000004', 'active'), -- Daniel → Y12 Psychology
  ('e0000000-0000-0000-0000-000000000010', 'c0000000-0000-0000-0000-000000000004', 'active'), -- Daniel → Y12 BME
  ('e0000000-0000-0000-0000-000000000005', 'c0000000-0000-0000-0000-000000000005', 'active'), -- Mei → Y12 Chemistry
  ('e0000000-0000-0000-0000-000000000006', 'c0000000-0000-0000-0000-000000000005', 'active'), -- Mei → Y12 EALD
  ('e0000000-0000-0000-0000-000000000007', 'c0000000-0000-0000-0000-000000000005', 'active'), -- Mei → Y12 Psychology
  ('e0000000-0000-0000-0000-000000000005', 'c0000000-0000-0000-0000-000000000006', 'active'), -- Liam → Y12 Chemistry
  ('e0000000-0000-0000-0000-000000000007', 'c0000000-0000-0000-0000-000000000006', 'active'), -- Liam → Y12 Psychology
  ('e0000000-0000-0000-0000-000000000010', 'c0000000-0000-0000-0000-000000000006', 'active')  -- Liam → Y12 BME
ON CONFLICT DO NOTHING;

-- ────────────────────────────────────────────────────────────
-- Parents + guardians
-- ────────────────────────────────────────────────────────────

INSERT INTO parents (id, full_name, email, phone) VALUES
  ('f0000000-0000-0000-0000-000000000001', 'Mrs Jennifer Lee', 'jennifer.lee@email.com', '+65 9123 4567'),
  ('f0000000-0000-0000-0000-000000000002', 'Mr Kevin Ng', 'kevin.ng@email.com', '+65 9234 5678'),
  ('f0000000-0000-0000-0000-000000000003', 'Mrs Anita Shah', 'anita.shah@email.com', '+65 9345 6789')
ON CONFLICT DO NOTHING;

INSERT INTO student_guardians (student_id, parent_id, relationship, can_view_reports, can_receive_alerts) VALUES
  ('c0000000-0000-0000-0000-000000000001', 'f0000000-0000-0000-0000-000000000001', 'mother', true, true),
  ('c0000000-0000-0000-0000-000000000002', 'f0000000-0000-0000-0000-000000000002', 'father', true, true),
  ('c0000000-0000-0000-0000-000000000003', 'f0000000-0000-0000-0000-000000000003', 'mother', true, true)
ON CONFLICT (student_id, parent_id) DO NOTHING;

-- ────────────────────────────────────────────────────────────
-- Sample timetable entries (Monday = 1)
-- ────────────────────────────────────────────────────────────

INSERT INTO timetable_entries (class_id, student_id, day_of_week, start_time, end_time, room, status) VALUES
  -- Amanda's Monday
  ('e0000000-0000-0000-0000-000000000008', 'c0000000-0000-0000-0000-000000000001', 1, '08:30', '09:50', 'Room 202', 'scheduled'),
  ('e0000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000001', 1, '10:00', '11:20', 'Lab 1', 'scheduled'),
  ('e0000000-0000-0000-0000-000000000003', 'c0000000-0000-0000-0000-000000000001', 1, '13:30', '14:50', 'Room 105', 'scheduled'),
  -- Amanda's Tuesday
  ('e0000000-0000-0000-0000-000000000002', 'c0000000-0000-0000-0000-000000000001', 2, '08:30', '09:50', 'Room 201', 'scheduled'),
  ('e0000000-0000-0000-0000-000000000004', 'c0000000-0000-0000-0000-000000000001', 2, '10:00', '11:20', 'Room 302', 'scheduled'),
  ('e0000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000001', 2, '13:30', '14:50', 'Lab 1', 'scheduled'),
  -- Daniel's Monday
  ('e0000000-0000-0000-0000-000000000005', 'c0000000-0000-0000-0000-000000000004', 1, '08:30', '09:50', 'Lab 2', 'scheduled'),
  ('e0000000-0000-0000-0000-000000000007', 'c0000000-0000-0000-0000-000000000004', 1, '10:00', '11:20', 'Room 204', 'scheduled'),
  ('e0000000-0000-0000-0000-000000000010', 'c0000000-0000-0000-0000-000000000004', 1, '13:30', '14:50', 'Room 303', 'scheduled')
ON CONFLICT DO NOTHING;

-- ────────────────────────────────────────────────────────────
-- Sample grades
-- ────────────────────────────────────────────────────────────

INSERT INTO grades (student_id, subject_id, assessment_name, score, max_score, grade_label, trend, visible_to_student, visible_to_parent) VALUES
  -- Amanda
  ('c0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000010', 'Physics Term 1 Test', 78, 100, 'A', 'up', true, true),
  ('c0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000010', 'Physics Investigation 1', 72, 100, 'B', 'stable', true, true),
  ('c0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000009', 'Maths Methods Test 1', 85, 100, 'A', 'up', true, true),
  ('c0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000005', 'English Response 1', 70, 100, 'B', 'stable', true, true),
  ('c0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000006', 'EALD Production 1', 68, 100, 'B', 'up', true, true),
  ('c0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000001', 'Accounting Response 1', 82, 100, 'A', 'up', true, true),
  -- Jason
  ('c0000000-0000-0000-0000-000000000002', 'b0000000-0000-0000-0000-000000000010', 'Physics Term 1 Test', 65, 100, 'B', 'stable', true, true),
  ('c0000000-0000-0000-0000-000000000002', 'b0000000-0000-0000-0000-000000000009', 'Maths Methods Test 1', 58, 100, 'C', 'down', true, true),
  ('c0000000-0000-0000-0000-000000000002', 'b0000000-0000-0000-0000-000000000008', 'Maths Apps Investigation 1', 72, 100, 'B', 'up', true, true),
  -- Daniel (Y12)
  ('c0000000-0000-0000-0000-000000000004', 'b0000000-0000-0000-0000-000000000003', 'Chemistry Test 1', 76, 100, 'A', 'up', true, true),
  ('c0000000-0000-0000-0000-000000000004', 'b0000000-0000-0000-0000-000000000011', 'Psychology Investigation 1', 81, 100, 'A', 'stable', true, true),
  ('c0000000-0000-0000-0000-000000000004', 'b0000000-0000-0000-0000-000000000002', 'BME Response 1', 69, 100, 'B', 'up', true, true),
  -- Mei (Y12)
  ('c0000000-0000-0000-0000-000000000005', 'b0000000-0000-0000-0000-000000000003', 'Chemistry Test 1', 88, 100, 'A', 'up', true, true),
  ('c0000000-0000-0000-0000-000000000005', 'b0000000-0000-0000-0000-000000000011', 'Psychology Investigation 1', 92, 100, 'A', 'up', true, true)
ON CONFLICT DO NOTHING;

-- ────────────────────────────────────────────────────────────
-- Sample assignments
-- ────────────────────────────────────────────────────────────

INSERT INTO assignments (id, class_id, subject_id, title, description, scope, due_at, assigned_by, status) VALUES
  ('11000000-0000-0000-0000-000000000001', 'e0000000-0000-0000-0000-000000000001', 'b0000000-0000-0000-0000-000000000010', 'Physics Kinematics Problem Set', 'Complete kinematics practice problems Ch.3', 'class', NOW() + INTERVAL '3 days', 'd0000000-0000-0000-0000-000000000001', 'published'),
  ('11000000-0000-0000-0000-000000000002', 'e0000000-0000-0000-0000-000000000003', 'b0000000-0000-0000-0000-000000000009', 'Maths Methods Calculus Task', 'Differentiation practice worksheet', 'class', NOW() + INTERVAL '5 days', 'd0000000-0000-0000-0000-000000000002', 'published'),
  ('11000000-0000-0000-0000-000000000003', 'e0000000-0000-0000-0000-000000000005', 'b0000000-0000-0000-0000-000000000003', 'Chemistry Lab Report', 'Write up the titration experiment', 'class', NOW() + INTERVAL '7 days', 'd0000000-0000-0000-0000-000000000001', 'published')
ON CONFLICT DO NOTHING;

INSERT INTO assignment_targets (assignment_id, student_id) VALUES
  -- Physics assignment → all Y11 Physics students
  ('11000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000001'),
  ('11000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000002'),
  ('11000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000003'),
  -- Maths Methods → Amanda, Jason
  ('11000000-0000-0000-0000-000000000002', 'c0000000-0000-0000-0000-000000000001'),
  ('11000000-0000-0000-0000-000000000002', 'c0000000-0000-0000-0000-000000000002'),
  -- Chemistry → Daniel, Mei, Liam
  ('11000000-0000-0000-0000-000000000003', 'c0000000-0000-0000-0000-000000000004'),
  ('11000000-0000-0000-0000-000000000003', 'c0000000-0000-0000-0000-000000000005'),
  ('11000000-0000-0000-0000-000000000003', 'c0000000-0000-0000-0000-000000000006')
ON CONFLICT DO NOTHING;

-- ────────────────────────────────────────────────────────────
-- Sample attendance
-- ────────────────────────────────────────────────────────────

INSERT INTO attendance_sessions (id, class_id, session_date, starts_at, ends_at, status) VALUES
  ('12000000-0000-0000-0000-000000000001', 'e0000000-0000-0000-0000-000000000001', CURRENT_DATE - INTERVAL '1 day', NOW() - INTERVAL '25 hours', NOW() - INTERVAL '23.5 hours', 'closed'),
  ('12000000-0000-0000-0000-000000000002', 'e0000000-0000-0000-0000-000000000005', CURRENT_DATE - INTERVAL '1 day', NOW() - INTERVAL '25 hours', NOW() - INTERVAL '23.5 hours', 'closed')
ON CONFLICT DO NOTHING;

INSERT INTO attendance_records (attendance_session_id, student_id, status, check_in_method, check_in_at) VALUES
  ('12000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000001', 'present', 'qr', NOW() - INTERVAL '25 hours'),
  ('12000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000002', 'present', 'teacher', NOW() - INTERVAL '24.9 hours'),
  ('12000000-0000-0000-0000-000000000001', 'c0000000-0000-0000-0000-000000000003', 'late', 'teacher', NOW() - INTERVAL '24.5 hours'),
  ('12000000-0000-0000-0000-000000000002', 'c0000000-0000-0000-0000-000000000004', 'present', 'qr', NOW() - INTERVAL '25 hours'),
  ('12000000-0000-0000-0000-000000000002', 'c0000000-0000-0000-0000-000000000005', 'present', 'qr', NOW() - INTERVAL '24.9 hours'),
  ('12000000-0000-0000-0000-000000000002', 'c0000000-0000-0000-0000-000000000006', 'absent', 'teacher', NULL)
ON CONFLICT DO NOTHING;

-- ────────────────────────────────────────────────────────────
-- Evidence items
-- ────────────────────────────────────────────────────────────

INSERT INTO evidence_items (evidence_type, title, related_table, status) VALUES
  ('Assessment Outline', 'Y11 Physics ATAR Assessment Outline 2025', 'wace_assessment_outlines', 'complete'),
  ('Assessment Outline', 'Y11 Maths Methods ATAR Assessment Outline 2025', 'wace_assessment_outlines', 'complete'),
  ('Assessment Outline', 'Y11 English ATAR Assessment Outline 2025', 'wace_assessment_outlines', 'gap'),
  ('Assessment Outline', 'Y12 Chemistry ATAR Assessment Outline 2025', 'wace_assessment_outlines', 'complete'),
  ('Assessment Outline', 'Y12 Psychology ATAR Assessment Outline 2025', 'wace_assessment_outlines', 'review'),
  ('Teacher Qualification', 'Ms Rachel Wong — Physics teaching qualification', 'teachers', 'complete'),
  ('Teacher Qualification', 'Mr James Mitchell — Mathematics teaching qualification', 'teachers', 'complete'),
  ('Attendance Record', 'Term 1 Week 8 attendance summary', 'attendance_sessions', 'complete'),
  ('SCSA Compliance', 'BCI Combined Curriculum Agreement 2025', NULL, 'complete'),
  ('SCSA Compliance', 'WACE Manual compliance checklist', NULL, 'review')
ON CONFLICT DO NOTHING;
