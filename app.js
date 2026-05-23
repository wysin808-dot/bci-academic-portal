const portalData = {
  admin: {
    label: "Admin / CEO Portal",
    title: "System Command Center",
    action: "Review System",
    focus: "Full system access",
    heroTitle: "Full Academic Portal oversight.",
    heroCopy: "Admin has CEO-level access across academic operations, users, timetable, WACE assessment, evidence and audit posture.",
    nav: ["Overview", "Users", "Programmes", "Students", "Teachers", "Timetable", "WACE Teacher Marks", "Evidence", "Audit Logs"],
    heroMetrics: [
      ["All", "Access"],
      ["7", "Roles"],
      ["Live", "System"],
    ],
    metrics: [
      ["Students", "3", "blue"],
      ["Teachers", "4", "blue"],
      ["Evidence", "38", "green"],
      ["Open gaps", "6", "amber"],
    ],
    primaryEyebrow: "System",
    primaryTitle: "Operational Summary",
    primaryAction: "Review System",
    primary: [
      ["Users", "Role coverage", "Admin / school / academic / teacher / parent / student", "Good"],
      ["WACE", "Assessment workflow", "Outlines, task marks, school results", "Review"],
      ["Timetable", "Student schedule matrix", "Conflicts visible to academic director", "Ready"],
      ["Evidence", "EduTrust evidence", "Attendance, assignment, WACE, AI logs", "Watch"],
    ],
    insightTitle: "Admin Boundary",
    insight: ["CEO-level role", "Admin can see and manage the full system. Operational roles should still be used for day-to-day work."],
    bars: [
      ["Academic data", 88],
      ["Evidence coverage", 82],
      ["Timetable health", 92],
      ["WACE readiness", 78],
    ],
    tableTitle: "System Areas",
    tableHead: ["Area", "Owner", "Scope", "Status"],
    table: [
      ["Users", "Admin", "Full role management", "Good"],
      ["Academic", "Academic Director", "Programmes, classes, timetable", "Ready"],
      ["WACE", "Teachers + Director", "Assessment outline and results", "Review"],
      ["QA", "QA / MR", "Evidence and audit", "Watch"],
    ],
  },
  student: {
    label: "Student Portal",
    title: "Learning Dashboard",
    action: "Ask AI Tutor",
    focus: "3 lessons · 2 assignments",
    heroTitle: "Good morning, Amanda.",
    heroCopy: "You have Accounting and Finance at 10:00, one Maths Applications task due today, and a new AI recommendation based on last week’s quiz.",
    nav: ["Dashboard", "Timetable", "Assignments", "Grades", "Attendance", "AI Tutor", "Files"],
    heroMetrics: [
      ["92%", "Attendance"],
      ["4", "Due tasks"],
      ["78", "Avg score"],
    ],
    metrics: [
      ["Attendance", "92%", "green"],
      ["Assignments done", "18/21", "blue"],
      ["AI study minutes", "146", "green"],
      ["Risk alerts", "1", "amber"],
    ],
    primaryEyebrow: "Today",
    primaryTitle: "Schedule & Tasks",
    primaryAction: "Open timetable",
    primary: [
      ["08:30", "EALD Writing", "Room 204", "Class"],
      ["10:00", "Accounting and Finance", "Room 302", "Class"],
      ["13:30", "Maths Applications due", "Financial maths practice", "Due"],
      ["15:20", "AI Tutor session", "Review quiz mistakes", "Recommended"],
    ],
    insightTitle: "Learning Recommendation",
    insight: ["Focus on financial maths", "Your Maths Applications quiz shows repeated mistakes in compound interest. Review worked examples, then complete 8 targeted practice questions."],
    bars: [
      ["Maths Applications", 84],
      ["EALD", 88],
      ["Accounting & Finance", 78],
      ["Economics", 74],
    ],
    tableTitle: "Recent Activity",
    tableHead: ["Date", "Subject", "Activity", "Status"],
    table: [
      ["May 23", "Maths Applications", "Financial maths practice submitted", "Marked"],
      ["May 22", "EALD", "AI Tutor: Essay structure", "Logged"],
      ["May 21", "Accounting", "Balance sheet feedback", "Returned"],
    ],
  },
  parent: {
    label: "Parent Portal",
    title: "Child Overview",
    action: "View AI Report",
    focus: "Weekly report ready",
    heroTitle: "Amanda is on track this week.",
    heroCopy: "Attendance is stable, assignments are mostly complete, and all ATAR subjects are progressing well.",
    nav: ["Overview", "Attendance", "Grades", "Assignments", "AI Weekly Report", "Teacher Feedback", "Warnings"],
    heroMetrics: [
      ["92%", "Attendance"],
      ["86%", "Work complete"],
      ["1", "Warning"],
    ],
    metrics: [
      ["This week attendance", "5/5", "green"],
      ["Late assignments", "1", "amber"],
      ["Teacher feedback", "3", "blue"],
      ["AI report", "Ready", "green"],
    ],
    primaryEyebrow: "Child Progress",
    primaryTitle: "This Week Summary",
    primaryAction: "Download report",
    primary: [
      ["Mon", "Strong EALD participation", "Teacher note added", "Positive"],
      ["Tue", "Accounting quiz above target", "Good financial literacy", "Positive"],
      ["Thu", "Maths Applications homework submitted", "Marked 84%", "Done"],
      ["Fri", "AI weekly report generated", "Parent summary ready", "Ready"],
    ],
    insightTitle: "Parent Summary",
    insight: ["On track overall", "Amanda is performing well across her ATAR subjects. EALD essay structure has improved notably this term."],
    bars: [
      ["Attendance", 92],
      ["Assignment completion", 86],
      ["Learning activity", 74],
      ["Teacher feedback", 88],
    ],
    tableTitle: "Teacher Feedback",
    tableHead: ["Date", "Teacher", "Subject", "Feedback"],
    table: [
      ["May 23", "Ms Tan", "EALD", "Essay structure improved"],
      ["May 22", "Ms Lau", "Accounting", "Good financial statement accuracy"],
      ["May 20", "Ms Wong", "Maths Applications", "Financial maths improving"],
    ],
  },
  teacher: {
    label: "Teacher Portal",
    title: "Teaching Dashboard",
    action: "Create Assignment",
    focus: "4 classes · 23 submissions",
    heroTitle: "Today’s teaching load is ready.",
    heroCopy: "You have two attendance sessions, one assignment to release, and 23 submissions waiting for review.",
    nav: ["Today Classes", "Attendance", "Assignments", "Grade Entry", "WACE Teacher Marks", "Materials", "AI Quiz Generator", "Class Analytics"],
    heroMetrics: [
      ["4", "Classes"],
      ["23", "To mark"],
      ["2", "Risk students"],
    ],
    metrics: [
      ["Attendance pending", "2", "amber"],
      ["Submissions", "23", "blue"],
      ["Marked today", "11", "green"],
      ["Risk flags", "2", "red"],
    ],
    primaryEyebrow: "Teaching",
    primaryTitle: "Classes & Marking Queue",
    primaryAction: "Open class list",
    primary: [
      ["08:30", "Y11 EALD", "Mark attendance", "Pending"],
      ["10:00", "Y11 Physics", "Lab session", "Ready"],
      ["12:10", "Release quiz", "Waves and energy", "Draft"],
      ["14:00", "Mark submissions", "23 waiting", "Action"],
    ],
    insightTitle: "AI Teaching Assistant",
    insight: ["Quiz suggestion", "Generate a 12-question formative quiz on wave behaviour with three difficulty bands and automatic worked solutions."],
    bars: [
      ["Y11 Physics", 72],
      ["Y11 EALD", 84],
      ["Y11 Maths Methods", 68],
      ["Y12 Chemistry", 81],
    ],
    tableTitle: "Risk Students",
    tableHead: ["Student", "Class", "Signal", "Next Action"],
    table: [
      ["Jason Ng", "Y11 Physics", "Quiz drop", "Assign practice set"],
      ["Jason Ng", "Y11 Maths Methods", "Low attendance", "Notify parent"],
      ["Priya Shah", "Y12 Chemistry", "Late work", "Check workload"],
    ],
  },
  academic_director: {
    label: "Academic Director",
    title: "Academic Overview",
    action: "Review Risks",
    focus: "12 risk flags · 3 programmes",
    heroTitle: "WACE ATAR programme oversight active.",
    heroCopy: "BCI offers 16 SCSA-approved ATAR subjects (11 NH + 5 SH-only). Year 11 Physics has the highest risk concentration this week, driven by quiz results and incomplete homework.",
    nav: ["Overview", "Programmes", "Subjects", "Classes", "Student Timetables", "WACE Teacher Marks", "At-risk Students", "Teacher Workload", "Assessment Calendar"],
    heroMetrics: [
      ["11", "ATAR Subjects"],
      ["2", "Risk flags"],
      ["87%", "Attendance"],
    ],
    metrics: [
      ["ATAR subjects active", "11", "blue"],
      ["At-risk students", "2", "red"],
      ["Attendance avg", "87%", "amber"],
      ["Assessments due", "6", "blue"],
    ],
    primaryEyebrow: "Academic Management",
    primaryTitle: "WACE ATAR Programme Signals",
    primaryAction: "Open analytics",
    primary: [
      ["Y11 Physics", "Quiz results under target", "Avg 71%", "Watch"],
      ["Y12 Chemistry", "ATAR outline pending approval", "Director review", "Review"],
      ["Y11 Maths Methods", "Stable performance", "Avg 65%", "Good"],
      ["Y11 EALD", "Writing improvement", "+6 pts", "Good"],
    ],
    insightTitle: "Director Insight",
    insight: ["Intervention needed", "Create a two-week Physics support block for Y11 students scoring below 75 and track AI Tutor activity against quiz recovery."],
    bars: [
      ["Y11 Physics", 72],
      ["Y11 Maths Methods", 68],
      ["Y12 Chemistry", 81],
      ["Y11 EALD", 88],
    ],
    tableTitle: "At-risk Students",
    tableHead: ["Student", "Programme", "Risk", "Owner"],
    table: [
      ["Jason Ng", "WACE Y11 ATAR", "Physics quiz decline", "Mr Lim"],
      ["Jason Ng", "WACE Y11 ATAR", "Attendance 72%", "Ms Tan"],
    ],
  },
  qa_mr: {
    label: "QA / MR Portal",
    title: "EduTrust Evidence",
    action: "Export Evidence",
    focus: "38 evidence items",
    heroTitle: "Compliance evidence is being collected automatically.",
    heroCopy: "Attendance records, assessment activity, teacher feedback and AI learning logs are ready for review and export.",
    nav: ["Evidence Dashboard", "Attendance Evidence", "Assessment Evidence", "WACE Teacher Marks", "AI Interaction Logs", "Audit Logs", "Compliance Checklist", "Exports"],
    heroMetrics: [
      ["38", "Evidence"],
      ["6", "Open gaps"],
      ["94%", "Logged"],
    ],
    metrics: [
      ["Attendance logs", "94%", "green"],
      ["Assessment evidence", "31", "blue"],
      ["AI interactions", "128", "blue"],
      ["Open gaps", "6", "amber"],
    ],
    primaryEyebrow: "EduTrust",
    primaryTitle: "Evidence Queue",
    primaryAction: "Export pack",
    primary: [
      ["APSO", "Attendance register uploaded", "Y11 WACE ATAR", "Complete"],
      ["Assessment", "Y11 Physics quiz evidence", "Rubric missing", "Gap"],
      ["Feedback", "Parent weekly summary", "Generated", "Complete"],
      ["AI Logs", "Tutor interactions archived", "128 records", "Complete"],
    ],
    insightTitle: "Compliance Insight",
    insight: ["Evidence gap", "Y11 Physics assessment records need rubric attachment before monthly export. Notify subject teacher and academic director."],
    bars: [
      ["Attendance", 94],
      ["Assessment", 82],
      ["Feedback", 76],
      ["AI Logs", 91],
    ],
    tableTitle: "Audit Trail",
    tableHead: ["Time", "User", "Action", "Evidence"],
    table: [
      ["09:12", "Mr Lim", "Marked attendance", "Y11 Physics"],
      ["10:44", "AI Tutor", "Logged interaction", "Amanda Lee"],
      ["11:20", "Ms Tan", "Uploaded feedback", "Y11 EALD writing"],
    ],
  },
};

const roleSelect = document.querySelector("#role-select");
const navList = document.querySelector("#nav-list");
const viewEyebrow = document.querySelector("#view-eyebrow");
const viewTitle = document.querySelector("#view-title");
const todayFocus = document.querySelector("#today-focus");
const quickAction = document.querySelector("#quick-action");
const heroTitle = document.querySelector("#hero-title");
const heroCopy = document.querySelector("#hero-copy");
const heroMetrics = document.querySelector("#hero-metrics");
const metricGrid = document.querySelector("#metric-grid");
const primaryEyebrow = document.querySelector("#primary-eyebrow");
const primaryTitle = document.querySelector("#primary-title");
const primaryAction = document.querySelector("#primary-action");
const primaryList = document.querySelector("#primary-list");
const insightTitle = document.querySelector("#insight-title");
const insightCard = document.querySelector("#insight-card");
const secondaryEyebrow = document.querySelector("#secondary-eyebrow");
const secondaryTitle = document.querySelector("#secondary-title");
const barList = document.querySelector("#bar-list");
const tableTitle = document.querySelector("#table-title");
const tableHead = document.querySelector("#table-head");
const tableBody = document.querySelector("#table-body");
const aiModal = document.querySelector("#ai-modal");
const aiAnswer = document.querySelector("#ai-answer");
const qrModal = document.querySelector("#qr-modal");
const qrCanvas = document.querySelector("#qr-canvas");
const qrTitle = document.querySelector("#qr-title");
const qrLink = document.querySelector("#qr-link");
const assignmentModal = document.querySelector("#assignment-modal");
const assignmentStudent = document.querySelector("#assignment-student");
const assignmentSubject = document.querySelector("#assignment-subject");
const assignmentClass = document.querySelector("#assignment-class");
const assignmentType = document.querySelector("#assignment-type");
const assignmentTitle = document.querySelector("#assignment-title");
const assignmentInstructions = document.querySelector("#assignment-instructions");
const assignmentMarks = document.querySelector("#assignment-marks");
const assignmentDue = document.querySelector("#assignment-due");
const assignmentDueTime = document.querySelector("#assignment-due-time");
const assignmentStatus = document.querySelector("#assignment-status");
const assignmentNote = document.querySelector("#assignment-note");
const assignmentWaceTask = document.querySelector("#assignment-wace-task");
const assignmentWaceType = document.querySelector("#assignment-wace-type");
let assignmentScope = "individual";
let assignmentAttachedFiles = [];
const STORAGE_KEY = "bci-academic-portal-state-v2";
const STATE_SCHEMA_VERSION = 5;
const CURRENT_STUDENT_NAME = "Amanda Lee";

const defaultRecords = {
  assignments: [
    { id: "a1", type: "worksheet", scope: "Individual", student: "Amanda Lee", className: "", subject: "Mathematics Applications", title: "Financial maths practice", due: "Today 13:30", status: "Due", score: "", assignedBy: "Ms Wong" },
    { id: "a2", type: "essay", scope: "Individual", student: "Amanda Lee", className: "", subject: "English as an Additional Language or Dialect", title: "Essay draft", due: "May 24", status: "Returned", score: "88", assignedBy: "Ms Tan", essay: { stages: "single", minWords: 300, maxWords: 600, essayType: "expository" } },
    { id: "a3", type: "worksheet", scope: "Individual", student: "Jason Ng", className: "", subject: "Physics", title: "Force diagram worksheet", due: "May 23", status: "Late", score: "", assignedBy: "Mr Lim" },
    { id: "a4", type: "reflection", scope: "Class", student: "", className: "Y11 Physics", subject: "Physics", title: "Lab safety reflection", due: "May 25", status: "Due", score: "", assignedBy: "Mr Lim", reflection: { prompts: ["What are the key lab safety rules you learned?", "Describe a situation where ignoring safety could be dangerous.", "How will you apply these rules in future practicals?"] } },
    { id: "a5", type: "worksheet", scope: "Individual", student: "Priya Shah", className: "", subject: "Chemistry", title: "Organic naming exercises", due: "May 26", status: "Due", score: "", assignedBy: "Mr Koh" },
    { id: "a6", type: "worksheet", scope: "Class", student: "", className: "Y11 Accounting", subject: "Accounting and Finance", title: "Balance sheet practice", due: "May 27", status: "Due", score: "", assignedBy: "Ms Lau" },
  ],
  assignmentSubmissions: [
    { id: "as1", assignmentId: "a2", student: "Amanda Lee", submittedAt: "May 23 11:10", status: "Returned", fileName: "eald-essay-draft-amanda.pdf", feedback: "Essay structure improved", score: "88" },
  ],
  attendance: [
    { id: "at1", student: "Amanda Lee", className: "Y11 EALD", date: "May 23", status: "Present" },
    { id: "at2", student: "Jason Ng", className: "Y11 Physics", date: "May 23", status: "Absent" },
    { id: "at3", student: "Priya Shah", className: "Y12 Chemistry", date: "May 23", status: "Present" },
    { id: "at4", student: "Amanda Lee", className: "Y11 Accounting", date: "May 23", status: "Present" },
  ],
  teacherSubjects: [
    { teacher: "Mr Lim", subject: "Physics", permission: "lead", canCreateAssignments: true, canEnterMarks: true },
    { teacher: "Ms Wong", subject: "Mathematics Methods", permission: "lead", canCreateAssignments: true, canEnterMarks: true },
    { teacher: "Ms Wong", subject: "Mathematics Applications", permission: "teach", canCreateAssignments: true, canEnterMarks: true },
    { teacher: "Ms Tan", subject: "English as an Additional Language or Dialect", permission: "lead", canCreateAssignments: true, canEnterMarks: true },
    { teacher: "Ms Tan", subject: "English", permission: "teach", canCreateAssignments: true, canEnterMarks: true },
    { teacher: "Mr Koh", subject: "Chemistry", permission: "lead", canCreateAssignments: true, canEnterMarks: true },
    { teacher: "Mr Koh", subject: "Human Biology", permission: "teach", canCreateAssignments: true, canEnterMarks: true },
    { teacher: "Ms Lau", subject: "Accounting and Finance", permission: "lead", canCreateAssignments: true, canEnterMarks: true },
    { teacher: "Ms Lau", subject: "Business Management and Enterprise", permission: "teach", canCreateAssignments: true, canEnterMarks: true },
    { teacher: "Ms Lau", subject: "Economics", permission: "teach", canCreateAssignments: true, canEnterMarks: true },
    { teacher: "Mr Ong", subject: "Psychology", permission: "lead", canCreateAssignments: true, canEnterMarks: true },
  ],
  studentTimetables: [
    { id: "tt1", student: "Amanda Lee", year: "Year 11", programme: "WACE ATAR", day: "Mon", time: "08:30", subject: "EALD", teacher: "Ms Tan", room: "204", status: "Scheduled" },
    { id: "tt2", student: "Amanda Lee", year: "Year 11", programme: "WACE ATAR", day: "Mon", time: "10:00", subject: "Accounting and Finance", teacher: "Ms Lau", room: "302", status: "Scheduled" },
    { id: "tt3", student: "Amanda Lee", year: "Year 11", programme: "WACE ATAR", day: "Tue", time: "08:30", subject: "Mathematics Applications", teacher: "Ms Wong", room: "301", status: "Scheduled" },
    { id: "tt4", student: "Amanda Lee", year: "Year 11", programme: "WACE ATAR", day: "Wed", time: "10:00", subject: "Economics", teacher: "Ms Lau", room: "302", status: "Scheduled" },
    { id: "tt5", student: "Jason Ng", year: "Year 11", programme: "WACE ATAR", day: "Mon", time: "10:00", subject: "Physics", teacher: "Mr Lim", room: "Lab 2", status: "Scheduled" },
    { id: "tt6", student: "Jason Ng", year: "Year 11", programme: "WACE ATAR", day: "Mon", time: "10:00", subject: "Mathematics Methods", teacher: "Ms Wong", room: "301", status: "Conflict" },
    { id: "tt7", student: "Jason Ng", year: "Year 11", programme: "WACE ATAR", day: "Wed", time: "11:20", subject: "Chemistry", teacher: "Mr Koh", room: "Lab 1", status: "Scheduled" },
    { id: "tt8", student: "Jason Ng", year: "Year 11", programme: "WACE ATAR", day: "Thu", time: "08:30", subject: "English", teacher: "Ms Tan", room: "204", status: "Scheduled" },
    { id: "tt9", student: "Priya Shah", year: "Year 12", programme: "WACE ATAR", day: "Tue", time: "09:20", subject: "Chemistry", teacher: "Mr Koh", room: "Lab 1", status: "Scheduled" },
    { id: "tt10", student: "Priya Shah", year: "Year 12", programme: "WACE ATAR", day: "Thu", time: "14:10", subject: "EALD", teacher: "Ms Tan", room: "205", status: "Scheduled" },
    { id: "tt11", student: "Priya Shah", year: "Year 12", programme: "WACE ATAR", day: "Fri", time: "10:00", subject: "Psychology", teacher: "Mr Ong", room: "303", status: "Scheduled" },
    { id: "tt12", student: "Priya Shah", year: "Year 12", programme: "WACE ATAR", day: "Fri", time: "13:30", subject: "Human Biology", teacher: "Mr Koh", room: "Lab 1", status: "Scheduled" },
  ],
  grades: [
    { id: "g1", student: "Amanda Lee", subject: "Mathematics Applications", assessment: "Financial maths quiz", score: 84, trend: "Stable" },
    { id: "g2", student: "Amanda Lee", subject: "EALD", assessment: "Essay draft", score: 88, trend: "Improving" },
    { id: "g3", student: "Jason Ng", subject: "Physics", assessment: "Forces quiz", score: 71, trend: "Risk" },
    { id: "g4", student: "Jason Ng", subject: "Mathematics Methods", assessment: "Functions test", score: 65, trend: "Stable" },
    { id: "g5", student: "Priya Shah", subject: "Chemistry", assessment: "Organic naming", score: 79, trend: "Improving" },
    { id: "g6", student: "Priya Shah", subject: "Psychology", assessment: "Research methods quiz", score: 82, trend: "Stable" },
  ],
  waceOutlines: [
    {
      id: "wo1",
      year: "Year 11",
      semester: "Units 1 & 2",
      course: "Physics",
      units: "ATAR Units 1 & 2",
      courseType: "ATAR",
      teacher: "Mr Lim",
      status: "Published",
      tasks: [
        { id: "t1", title: "Energy investigation", type: "Investigation", weight: 20, maxMark: 50, due: "Week 5", evidence: "Lab report + rubric" },
        { id: "t2", title: "Waves & thermodynamics test", type: "Test", weight: 30, maxMark: 60, due: "Week 8", evidence: "Marked test paper" },
        { id: "t3", title: "Semester examination", type: "Examination", weight: 50, maxMark: 100, due: "Exam week", evidence: "Exam script" },
      ],
    },
    {
      id: "wo2",
      year: "Year 11",
      semester: "Units 1 & 2",
      course: "Mathematics Methods",
      units: "ATAR Units 1 & 2",
      courseType: "ATAR",
      teacher: "Ms Wong",
      status: "Published",
      tasks: [
        { id: "t1", title: "Functions & calculus response", type: "Response", weight: 40, maxMark: 80, due: "Week 5", evidence: "Marked script" },
        { id: "t2", title: "Statistical investigation", type: "Investigation", weight: 20, maxMark: 50, due: "Week 8", evidence: "Investigation report" },
        { id: "t3", title: "Semester examination", type: "Examination", weight: 40, maxMark: 100, due: "Exam week", evidence: "Exam script" },
      ],
    },
    {
      id: "wo3",
      year: "Year 12",
      semester: "Units 3 & 4",
      course: "Chemistry",
      units: "ATAR Units 3 & 4",
      courseType: "ATAR",
      teacher: "Mr Koh",
      status: "Director review",
      tasks: [
        { id: "t1", title: "Equilibrium investigation", type: "Investigation", weight: 20, maxMark: 50, due: "Week 4", evidence: "Lab report + rubric" },
        { id: "t2", title: "Organic chemistry test", type: "Test", weight: 30, maxMark: 60, due: "Week 7", evidence: "Marked test paper" },
        { id: "t3", title: "Semester examination", type: "Examination", weight: 50, maxMark: 100, due: "Exam week", evidence: "Exam script" },
      ],
    },
    {
      id: "wo4",
      year: "Year 12",
      semester: "Units 3 & 4",
      course: "English as an Additional Language or Dialect",
      units: "ATAR Units 3 & 4",
      courseType: "ATAR",
      teacher: "Ms Tan",
      status: "Published",
      tasks: [
        { id: "t1", title: "Responding to texts", type: "Response", weight: 30, maxMark: 60, due: "Week 4", evidence: "Annotated essay" },
        { id: "t2", title: "Language production", type: "Production", weight: 30, maxMark: 60, due: "Week 8", evidence: "Student work sample" },
        { id: "t3", title: "Semester examination", type: "Examination", weight: 40, maxMark: 100, due: "Exam week", evidence: "Exam script" },
      ],
    },
    {
      id: "wo5",
      year: "Year 11",
      semester: "Units 1 & 2",
      course: "Accounting and Finance",
      units: "ATAR Units 1 & 2",
      courseType: "ATAR",
      teacher: "Ms Lau",
      status: "Published",
      tasks: [
        { id: "t1", title: "Financial literacy response", type: "Response", weight: 35, maxMark: 70, due: "Week 5", evidence: "Marked script" },
        { id: "t2", title: "Accounting test", type: "Test", weight: 25, maxMark: 50, due: "Week 8", evidence: "Marked test paper" },
        { id: "t3", title: "Semester examination", type: "Examination", weight: 40, maxMark: 100, due: "Exam week", evidence: "Exam script" },
      ],
    },
    {
      id: "wo6",
      year: "Year 11",
      semester: "Units 1 & 2",
      course: "Psychology",
      units: "ATAR Units 1 & 2",
      courseType: "ATAR",
      teacher: "Mr Ong",
      status: "Draft",
      tasks: [
        { id: "t1", title: "Research investigation", type: "Investigation", weight: 20, maxMark: 40, due: "Week 5", evidence: "Investigation report" },
        { id: "t2", title: "Theory response", type: "Response", weight: 30, maxMark: 60, due: "Week 8", evidence: "Marked script" },
        { id: "t3", title: "Semester examination", type: "Examination", weight: 50, maxMark: 100, due: "Exam week", evidence: "Exam script" },
      ],
    },
  ],
  waceResults: [
    { id: "wr1", outlineId: "wo1", student: "Jason Ng", marks: { t1: 38, t2: 45, t3: 72 }, status: "Teacher entered", released: false },
    { id: "wr2", outlineId: "wo1", student: "Daniel Ho", marks: { t1: 41, t2: 50, t3: 68 }, status: "Teacher entered", released: false },
    { id: "wr3", outlineId: "wo2", student: "Jason Ng", marks: { t1: 58, t2: 36, t3: 70 }, status: "Teacher entered", released: false },
    { id: "wr4", outlineId: "wo2", student: "Mei Chen", marks: { t1: 68, t2: 42, t3: 85 }, status: "Teacher entered", released: false },
    { id: "wr5", outlineId: "wo3", student: "Priya Shah", marks: { t1: 41, t2: 47, t3: 78 }, status: "Director review", released: false },
    { id: "wr6", outlineId: "wo3", student: "Liam Tan", marks: { t1: 35, t2: 40, t3: 65 }, status: "Director review", released: false },
    { id: "wr7", outlineId: "wo4", student: "Priya Shah", marks: { t1: 48, t2: 50, t3: 82 }, status: "Teacher entered", released: false },
    { id: "wr8", outlineId: "wo5", student: "Amanda Lee", marks: { t1: 55, t2: 40, t3: 78 }, status: "Teacher entered", released: false },
    { id: "wr9", outlineId: "wo5", student: "Daniel Ho", marks: { t1: 50, t2: 35, t3: 65 }, status: "Draft", released: false },
    { id: "wr10", outlineId: "wo6", student: "Mei Chen", marks: { t1: 32, t2: 48 }, status: "Draft", released: false },
  ],
  aiLogs: [
    { id: "ai1", time: "May 22 10:44", student: "Amanda Lee", subject: "Physics", prompt: "Newton's Laws", outcome: "Logged" },
  ],
  evidence: [
    { id: "e1", type: "Attendance", item: "Y11 Physics register", owner: "Mr Lim", status: "Complete" },
    { id: "e2", type: "Assessment", item: "Y11 Physics quiz rubric", owner: "Mr Lim", status: "Gap" },
    { id: "e3", type: "AI Logs", item: "Tutor interaction archive", owner: "System", status: "Complete" },
    { id: "e4", type: "Assessment", item: "Y12 Chemistry ATAR outline", owner: "Mr Koh", status: "Complete" },
    { id: "e5", type: "Attendance", item: "Y11 EALD register", owner: "Ms Tan", status: "Complete" },
  ],
  qrSessions: [
    { id: "qr1", className: "Y11 Physics", session: "10:00 Lesson", createdAt: "May 23 09:45", status: "Active", url: "http://127.0.0.1:4180/academic-portal/?checkin=qr1" },
  ],
  risks: [
    { id: "r1", student: "Jason Ng", programme: "WACE Y11 ATAR", signal: "Physics quiz decline", owner: "Mr Lim", status: "Open" },
    { id: "r2", student: "Jason Ng", programme: "WACE Y11 ATAR", signal: "Attendance 72%", owner: "Ms Tan", status: "Open" },
  ],
};

let appState = loadState();
window.appState = appState;
let currentRole = normalizeRole(appState.currentRole);
let currentModule = appState.currentModule || 0;
let authLockedRole = false;

function normalizeRole(role) {
  if (role === "director") return "academic_director";
  if (role === "qa") return "qa_mr";
  return role || "student";
}

function mergeStateWithDefaults(saved = {}) {
  const base = structuredClone(defaultRecords);
  const merged = { ...base, ...saved };
  Object.keys(base).forEach((key) => {
    if (Array.isArray(base[key]) && !Array.isArray(merged[key])) {
      merged[key] = base[key];
    }
  });
  if (!Array.isArray(merged.waceOutlines) || merged.waceOutlines.length === 0) merged.waceOutlines = base.waceOutlines;
  if (!Array.isArray(merged.waceResults) || merged.waceResults.length === 0) merged.waceResults = base.waceResults;
  if (!Array.isArray(merged.studentTimetables) || merged.studentTimetables.length === 0) merged.studentTimetables = base.studentTimetables;
  if (!Array.isArray(merged.assignmentSubmissions)) merged.assignmentSubmissions = base.assignmentSubmissions;
  merged.assignments = merged.assignments.map((item) => ({
    type: "worksheet",
    scope: item.scope || (item.student ? "Individual" : "Class"),
    className: item.className || "",
    assignedBy: item.assignedBy || "Teacher",
    ...item,
  }));
  merged.qrSessions = merged.qrSessions.map((item) => ({
    expiresAt: item.expiresAt || new Date(Date.now() + 15 * 60 * 1000).toISOString(),
    signature: item.signature || hashText(`${item.id}:${item.className}:${item.session}`).toString(16),
    ...item,
  }));
  merged.currentRole = normalizeRole(merged.currentRole);
  merged.currentModule = Number.isFinite(Number(merged.currentModule)) ? Number(merged.currentModule) : 0;
  merged.schemaVersion = STATE_SCHEMA_VERSION;
  return merged;
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? mergeStateWithDefaults(saved) : mergeStateWithDefaults();
  } catch (error) {
    return mergeStateWithDefaults();
  }
}

function saveState() {
  appState.currentRole = currentRole;
  appState.currentModule = currentModule;
  appState.schemaVersion = STATE_SCHEMA_VERSION;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState));
}

async function bootstrapCloudRole() {
  const configStatus = window.AcademicDataAdapter?.getConfigStatus?.();
  if (!configStatus?.configured) {
    appState.cloud = { configured: false, reason: configStatus?.reason || "Supabase adapter unavailable" };
    saveState();
    return;
  }
  try {
    const profile = await window.AcademicDataAdapter.getMyPortalRole();
    if (!profile?.role) return;
    const role = normalizeRole(profile.role);
    const roleBackend = await window.AcademicDataAdapter.loadRoleBackend(role);
    appState.cloud = window.AcademicDataAdapter.mapBackendToPrototypeState(role, roleBackend);
    authLockedRole = true;
    currentRole = role;
    currentModule = 0;
    roleSelect.value = role;
    roleSelect.disabled = true;
    saveState();
    renderPortal(currentRole, currentModule);
    showToast(`Logged in as ${profile.full_name || role}`);
  } catch (error) {
    console.warn("Supabase role bootstrap failed:", error);
    showToast("Cloud role unavailable; using demo data");
  }
}

function todayLabel() {
  return new Date().toLocaleDateString("en-SG", { month: "short", day: "numeric" });
}

function dateInputValue(daysFromToday = 1) {
  const date = new Date();
  date.setDate(date.getDate() + daysFromToday);
  return date.toISOString().slice(0, 10);
}

function displayDateFromInput(value) {
  if (!value) return todayLabel();
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-SG", { month: "short", day: "numeric" });
}

function isoFromDateInput(value) {
  if (!value) return null;
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day, 23, 59, 0).toISOString();
}

function showToast(message) {
  let toast = document.querySelector("#toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

function scoreAverage(records = appState.grades) {
  if (!records.length) return 0;
  return Math.round(records.reduce((sum, item) => sum + Number(item.score || 0), 0) / records.length);
}

function attendanceRate() {
  if (!appState.attendance.length) return 0;
  const present = appState.attendance.filter((item) => item.status === "Present").length;
  return Math.round((present / appState.attendance.length) * 100);
}

function openAssignmentsCount(role = currentRole) {
  return visibleAssignmentsForRole(role).filter((item) => canSubmitAssignment(item)).length;
}

function openRiskCount() {
  return appState.risks.filter((item) => item.status === "Open").length;
}

function waceAverage() {
  const aggregates = waceAggregates();
  if (!aggregates.length) return 0;
  return Math.round(aggregates.reduce((sum, item) => sum + item.schoolMark, 0) / aggregates.length);
}

function waceStatusCount(status) {
  return appState.waceResults.filter((item) => item.status === status).length;
}

const WACE_ASSESSMENT_TYPES = [
  "Investigation", "Response", "Examination", "Test",
  "EST", "Practical", "Portfolio", "Oral", "Production", "Performance",
];

const WACE_GRADE_THRESHOLDS = [
  { grade: "A", label: "Excellent", min: 75 },
  { grade: "B", label: "High", min: 65 },
  { grade: "C", label: "Satisfactory", min: 50 },
  { grade: "D", label: "Low", min: 35 },
  { grade: "E", label: "Inadequate", min: 0 },
];

const BCI_APPROVED_SUBJECTS = [
  { code: "AEACC", name: "Accounting and Finance", list: "A", hemisphere: "NH", courseType: "ATAR", atarTypes: [{ type: "Response", weight: [30, 40] }, { type: "Test", weight: [20, 30] }, { type: "Examination", weight: [35, 45] }] },
  { code: "AEBME", name: "Business Management and Enterprise", list: "A", hemisphere: "NH", courseType: "ATAR", atarTypes: [{ type: "Investigation", weight: [20, 30] }, { type: "Response", weight: [25, 35] }, { type: "Examination", weight: [35, 45] }] },
  { code: "AECHE", name: "Chemistry", list: "B", hemisphere: "NH", courseType: "ATAR", atarTypes: [{ type: "Investigation", weight: [15, 25] }, { type: "Test", weight: [25, 35] }, { type: "Examination", weight: [40, 55] }] },
  { code: "AEECO", name: "Economics", list: "A", hemisphere: "NH", courseType: "ATAR", atarTypes: [{ type: "Investigation", weight: [15, 25] }, { type: "Response", weight: [25, 35] }, { type: "Examination", weight: [40, 50] }] },
  { code: "AEENG", name: "English", list: "A", hemisphere: "NH", courseType: "ATAR", atarTypes: [{ type: "Response", weight: [25, 35] }, { type: "Production", weight: [25, 35] }, { type: "Examination", weight: [35, 45] }] },
  { code: "AEELD", name: "English as an Additional Language or Dialect", list: "A", hemisphere: "NH", courseType: "ATAR", atarTypes: [{ type: "Response", weight: [25, 35] }, { type: "Production", weight: [25, 35] }, { type: "Examination", weight: [35, 45] }] },
  { code: "AEHBY", name: "Human Biology", list: "B", hemisphere: "NH", courseType: "ATAR", atarTypes: [{ type: "Investigation", weight: [15, 25] }, { type: "Test", weight: [25, 35] }, { type: "Examination", weight: [40, 55] }] },
  { code: "AEMAA", name: "Mathematics Applications", list: "B", hemisphere: "NH", courseType: "ATAR", atarTypes: [{ type: "Response", weight: [35, 45] }, { type: "Investigation", weight: [15, 25] }, { type: "Examination", weight: [35, 45] }] },
  { code: "AEMAM", name: "Mathematics Methods", list: "B", hemisphere: "NH", courseType: "ATAR", atarTypes: [{ type: "Response", weight: [35, 45] }, { type: "Investigation", weight: [15, 25] }, { type: "Examination", weight: [35, 45] }] },
  { code: "AEPHY", name: "Physics", list: "B", hemisphere: "NH", courseType: "ATAR", atarTypes: [{ type: "Investigation", weight: [15, 25] }, { type: "Test", weight: [25, 35] }, { type: "Examination", weight: [40, 55] }] },
  { code: "AEPSY", name: "Psychology", list: "A", hemisphere: "NH", courseType: "ATAR", atarTypes: [{ type: "Investigation", weight: [15, 25] }, { type: "Response", weight: [25, 35] }, { type: "Examination", weight: [40, 50] }] },
  { code: "AEAIT", name: "Applied Information Technology", list: "B", hemisphere: "SH", courseType: "ATAR", atarTypes: [{ type: "Practical", weight: [25, 35] }, { type: "Response", weight: [20, 30] }, { type: "Examination", weight: [35, 45] }] },
  { code: "AEBLY", name: "Biology", list: "B", hemisphere: "SH", courseType: "ATAR", atarTypes: [{ type: "Investigation", weight: [15, 25] }, { type: "Test", weight: [25, 35] }, { type: "Examination", weight: [40, 55] }] },
  { code: "AECFL", name: "Chinese: First Language", list: "A", hemisphere: "SH", courseType: "ATAR", atarTypes: [{ type: "Response", weight: [25, 35] }, { type: "Oral", weight: [15, 25] }, { type: "Examination", weight: [40, 50] }] },
  { code: "AECSL", name: "Chinese: Second Language", list: "A", hemisphere: "SH", courseType: "ATAR", atarTypes: [{ type: "Response", weight: [25, 35] }, { type: "Oral", weight: [15, 25] }, { type: "Examination", weight: [40, 50] }] },
  { code: "AEMAS", name: "Mathematics Specialist", list: "B", hemisphere: "SH", courseType: "ATAR", atarTypes: [{ type: "Response", weight: [35, 45] }, { type: "Investigation", weight: [15, 25] }, { type: "Examination", weight: [35, 45] }] },
];

function subjectByCode(code) {
  return BCI_APPROVED_SUBJECTS.find((s) => s.code === code);
}

function subjectByName(name) {
  return BCI_APPROVED_SUBJECTS.find((s) => s.name === name);
}

function gradeFromMark(mark) {
  const entry = WACE_GRADE_THRESHOLDS.find((t) => mark >= t.min);
  return `${entry?.grade || "E"}*`;
}

function provisionalGradeNote() {
  return "Provisional grade pending grade-description review";
}

function legacyGradeFromMark(mark) {
  const entry = WACE_GRADE_THRESHOLDS.find((t) => mark >= t.min);
  return entry?.grade || "E";
}

function outlineById(id) {
  return appState.waceOutlines.find((outline) => outline.id === id);
}

function outlineWeightTotal(outline) {
  if (!outline) return 0;
  return outline.tasks.reduce((sum, task) => sum + Number(task.weight || 0), 0);
}

function outlineWeightsValid(outline) {
  return outlineWeightTotal(outline) === 100;
}

function outlineHasEst(outline) {
  return outline?.tasks.some((task) => task.isEst || task.type === "EST");
}

function outlineEstRequired(outline) {
  return outline?.courseType === "General" || outline?.courseType === "Foundation";
}

function outlineValidationErrors(outline) {
  const errors = [];
  if (!outlineWeightsValid(outline)) errors.push(`Weights sum to ${outlineWeightTotal(outline)}%, must be 100%`);
  if (outlineEstRequired(outline) && !outlineHasEst(outline)) errors.push("General/Foundation courses require an EST task");
  const types = new Set(outline?.tasks.map((t) => t.type) || []);
  if (types.size === 0) errors.push("No assessment tasks defined");
  const subj = subjectByName(outline?.course);
  if (subj && outline?.courseType === "ATAR") {
    const typeWeights = {};
    (outline.tasks || []).forEach((t) => { typeWeights[t.type] = (typeWeights[t.type] || 0) + Number(t.weight || 0); });
    subj.atarTypes.forEach((tmpl) => {
      const w = typeWeights[tmpl.type] || 0;
      if (w < tmpl.weight[0] || w > tmpl.weight[1]) {
        errors.push(`${tmpl.type} weight ${w}% outside SCSA range ${tmpl.weight[0]}-${tmpl.weight[1]}%`);
      }
    });
  }
  return errors;
}

function schoolMarkForResult(result) {
  const outline = outlineById(result.outlineId);
  if (!outline) return 0;
  const totalWeight = outline.tasks.reduce((sum, task) => sum + Number(task.weight || 0), 0) || 100;
  const weighted = outline.tasks.reduce((sum, task) => {
    const rawMark = Number(result.marks?.[task.id] || 0);
    const maxMark = Number(task.maxMark || 100);
    const pct = maxMark > 0 ? (rawMark / maxMark) * 100 : 0;
    return sum + pct * (Number(task.weight || 0) / totalWeight);
  }, 0);
  return Math.round(weighted);
}

function waceAggregates() {
  const rows = appState.waceResults.map((result) => {
    const outline = outlineById(result.outlineId);
    const schoolMark = schoolMarkForResult(result);
    return {
      ...result,
      outline,
      schoolMark,
      grade: gradeFromMark(schoolMark),
      rank: 0,
    };
  });

  appState.waceOutlines.forEach((outline) => {
    rows
      .filter((row) => row.outlineId === outline.id)
      .sort((a, b) => b.schoolMark - a.schoolMark)
      .forEach((row, index) => { row.rank = index + 1; });
  });

  return rows;
}

function waceCoveragePercent() {
  if (!appState.waceOutlines.length) return 0;
  const covered = appState.waceOutlines.filter((outline) => outlineValidationErrors(outline).length === 0).length;
  return Math.round((covered / appState.waceOutlines.length) * 100);
}

function timetableStudents() {
  const map = new Map();
  appState.studentTimetables.forEach((item) => {
    if (!map.has(item.student)) {
      map.set(item.student, {
        student: item.student,
        year: item.year,
        programme: item.programme,
        lessons: 0,
        conflicts: 0,
        subjects: new Set(),
      });
    }
    const row = map.get(item.student);
    row.lessons += 1;
    row.subjects.add(item.subject);
    if (item.status === "Conflict") row.conflicts += 1;
  });
  return Array.from(map.values()).map((item) => ({
    ...item,
    subjects: Array.from(item.subjects),
  }));
}

function teacherCan(subject, capability) {
  const permission = appState.teacherSubjects.find((item) => item.subject === subject);
  if (!permission) return false;
  if (capability === "assign") return permission.canCreateAssignments;
  if (capability === "mark") return permission.canEnterMarks;
  return true;
}

function visibleAssignmentsForRole(role) {
  if (role !== "student") return appState.assignments;
  return appState.assignments.filter((item) => item.scope === "Class" || item.student === CURRENT_STUDENT_NAME);
}

function submissionForAssignment(assignment, student = CURRENT_STUDENT_NAME) {
  return appState.assignmentSubmissions.find((item) => item.assignmentId === assignment?.id && item.student === student);
}

function assignmentDisplayStatus(assignment, student = CURRENT_STUDENT_NAME) {
  const submission = submissionForAssignment(assignment, student);
  return submission?.status || assignment?.status || "Due";
}

function canSubmitAssignment(assignment, student = CURRENT_STUDENT_NAME) {
  const status = assignmentDisplayStatus(assignment, student);
  return ["Due", "Late", "Draft", "Published"].includes(status);
}

function submitAssignmentLocally(assignment, student = CURRENT_STUDENT_NAME) {
  if (!assignment) return false;
  if (!canSubmitAssignment(assignment, student)) return false;

  const submittedAt = new Date().toLocaleString("en-SG", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
  const existing = submissionForAssignment(assignment, student);
  if (existing) {
    existing.status = "Submitted";
    existing.submittedAt = submittedAt;
    existing.fileName = existing.fileName || `${assignment.subject.toLowerCase().replaceAll(" ", "-")}-submission.pdf`;
  } else {
    appState.assignmentSubmissions.push({
      id: `as${Date.now()}`,
      assignmentId: assignment.id,
      student,
      submittedAt,
      status: "Submitted",
      fileName: `${assignment.subject.toLowerCase().replaceAll(" ", "-")}-submission.pdf`,
      feedback: "",
      score: "",
    });
  }

  if (assignment.scope === "Individual" && assignment.student === student) {
    assignment.status = "Submitted";
  }
  appState.evidence.push({
    id: `e${Date.now()}`,
    type: "Assignment Submission",
    item: `${student} submitted ${assignment.subject} · ${assignment.title}`,
    owner: student,
    status: "Complete",
  });
  return true;
}

function cloudConfigured() {
  return Boolean(window.AcademicDataAdapter?.hasSupabaseConfig?.());
}

async function submitAssignmentRecord(assignment, student = CURRENT_STUDENT_NAME) {
  if (!assignment || !canSubmitAssignment(assignment, student)) return false;

  const localSubmitted = submitAssignmentLocally(assignment, student);
  const submission = submissionForAssignment(assignment, student);
  if (!cloudConfigured()) return localSubmitted;

  try {
    await window.AcademicDataAdapter.submitAssignment({
      assignmentId: assignment.cloudAssignmentId || assignment.id,
      studentId: assignment.cloudStudentId || submission?.cloudStudentId,
      fileName: submission?.fileName || `${assignment.subject.toLowerCase().replaceAll(" ", "-")}-submission.pdf`,
    });
    submission.cloudSynced = true;
    showToast("Assignment submitted to database");
  } catch (error) {
    console.warn("Cloud assignment submission failed:", error);
    submission.cloudSynced = false;
    showToast("Saved locally; database submit failed");
  }

  return localSubmitted;
}

function badgeClass(label) {
  const lower = String(label).toLowerCase();
  if (lower.includes("risk") || lower.includes("gap") || lower.includes("action") || lower.includes("warning")) return "red";
  if (lower.includes("pending") || lower.includes("watch") || lower.includes("due") || lower.includes("draft") || lower.includes("review")) return "amber";
  if (lower.includes("good") || lower.includes("ready") || lower.includes("done") || lower.includes("complete") || lower.includes("approved") || lower.includes("entered")) return "green";
  return "blue";
}

function statusButton(label, action, id) {
  return `<button class="mini-action" type="button" data-action="${action}" data-id="${id}">${label}</button>`;
}

function studentAssignmentButton(assignment, idx) {
  if (!assignment) return "";
  const status = assignmentDisplayStatus(assignment);
  if (status === "Submitted" || status === "Marked" || status === "Returned") return "";
  if (!canSubmitAssignment(assignment)) return "";
  try {
    const drafts = JSON.parse(localStorage.getItem("bci_submission_drafts") || "{}");
    const hasDraft = !!drafts[assignment.id];
    return statusButton(hasDraft ? "Continue" : "Start", "open-submission", idx);
  } catch { return statusButton("Start", "open-submission", idx); }
}

function buildDashboard(role) {
  const data = portalData[role];
  const avg = scoreAverage();
  const attendance = attendanceRate();
  const openAssignments = openAssignmentsCount(role);
  const risks = openRiskCount();

  const dynamic = {
    student: {
      heroMetrics: [[`${attendance}%`, "Attendance"], [`${openAssignments}`, "Open tasks"], [`${avg}`, "Avg score"]],
      metrics: [["Attendance", `${attendance}%`, attendance >= 90 ? "green" : "amber"], ["Assignments open", `${openAssignments}`, openAssignments > 2 ? "amber" : "blue"], ["AI sessions", `${appState.aiLogs.length}`, "green"], ["Risk alerts", `${risks}`, risks ? "amber" : "green"]],
      table: appState.aiLogs.slice(-4).reverse().map((log) => [log.time, log.subject, log.prompt, log.outcome]),
    },
    parent: {
      heroMetrics: [[`${attendance}%`, "Attendance"], [`${Math.max(0, 100 - openAssignments * 7)}%`, "Work complete"], [`${risks}`, "Warnings"]],
      metrics: [["This week attendance", `${attendance}%`, attendance >= 90 ? "green" : "amber"], ["Open assignments", `${openAssignments}`, openAssignments ? "amber" : "green"], ["Teacher feedback", "3", "blue"], ["AI logs", `${appState.aiLogs.length}`, "green"]],
      table: appState.risks.map((risk) => [risk.student, risk.programme, risk.signal, risk.status]),
    },
    teacher: {
      heroMetrics: [["4", "Classes"], [`${appState.assignments.length}`, "Assignments"], [`${risks}`, "Risk students"]],
      metrics: [["Authorised subjects", `${appState.teacherSubjects.length}`, "blue"], ["Open submissions", `${openAssignments}`, "amber"], ["Marked grades", `${appState.grades.length}`, "green"], ["Risk flags", `${risks}`, risks ? "red" : "green"]],
      table: appState.risks.map((risk) => [risk.student, risk.programme, risk.signal, risk.status]),
    },
    admin: {
      heroMetrics: [["3", "Students"], ["4", "Teachers"], [`${appState.evidence.length}`, "Evidence"]],
      metrics: [["Students", "3", "blue"], ["Teachers", "4", "blue"], ["WACE results", `${appState.waceResults.length}`, "blue"], ["Evidence gaps", `${appState.evidence.filter((item) => item.status === "Gap").length}`, "amber"]],
      table: appState.evidence.map((item) => [item.type, item.item, item.owner, item.status]),
    },
    academic_director: {
      heroMetrics: [["3", "Programmes"], [`${risks}`, "Risk flags"], [`${attendance}%`, "Attendance"]],
      metrics: [["Programme health", `${Math.round((avg + attendance) / 2)}%`, "blue"], ["At-risk students", `${risks}`, risks ? "red" : "green"], ["Attendance avg", `${attendance}%`, attendance >= 90 ? "green" : "amber"], ["AI interventions", `${appState.aiLogs.length}`, "blue"]],
      table: appState.risks.map((risk) => [risk.student, risk.programme, risk.signal, risk.owner]),
    },
    qa_mr: {
      heroMetrics: [[`${appState.evidence.length}`, "Evidence"], [`${appState.evidence.filter((item) => item.status === "Gap").length}`, "Open gaps"], [`${attendance}%`, "Logged"]],
      metrics: [["Attendance logs", `${attendance}%`, attendance >= 90 ? "green" : "amber"], ["Evidence items", `${appState.evidence.length}`, "blue"], ["AI interactions", `${appState.aiLogs.length}`, "blue"], ["Open gaps", `${appState.evidence.filter((item) => item.status === "Gap").length}`, "amber"]],
      table: appState.evidence.map((item) => [item.type, item.item, item.owner, item.status]),
    },
  }[role];

  return {
    ...data,
    heroMetrics: dynamic.heroMetrics,
    metrics: dynamic.metrics,
    table: dynamic.table,
  };
}

function buildModuleView(role, moduleName) {
  const dashboard = buildDashboard(role);
  if (["Dashboard", "Overview", "Today Classes", "Evidence Dashboard"].includes(moduleName)) return dashboard;

  if (moduleName.includes("WACE Teacher Marks") && !["admin", "teacher", "academic_director", "qa_mr"].includes(role)) {
    return buildModuleView(role, "Grades");
  }

  if (moduleName.includes("Timetable") || moduleName.includes("Today Classes")) {
    return {
      ...dashboard,
      primaryEyebrow: "Class Sessions",
      primaryTitle: "Attendance QR Sessions",
      primaryAction: "Generate attendance QR",
      primary: appState.qrSessions.map((item) => [item.createdAt, item.className, item.session, item.status]),
      insightTitle: "QR Check-in",
      insight: ["Fast classroom attendance", "Teachers can generate a session QR. Students scan it, and the resulting check-in is stored as attendance evidence."],
      tableTitle: "QR Sessions",
      tableHead: ["Created", "Class", "Session", "Status"],
      table: appState.qrSessions.map((item) => [item.createdAt, item.className, item.session, item.status]),
    };
  }

  if (moduleName.includes("Attendance")) {
    return {
      ...dashboard,
      primaryEyebrow: "Attendance",
      primaryTitle: role === "teacher" ? "Mark Attendance" : "Attendance Records",
      primaryAction: role === "teacher" ? "Mark all present" : "Refresh records",
      primary: appState.attendance.map((item) => [item.date, item.student, item.className, item.status]),
      insightTitle: "Attendance Signal",
      insight: ["Attendance is evidence", "Every marked class becomes both a student record and an EduTrust evidence item."],
      tableTitle: "Attendance Log",
      tableHead: ["Date", "Student", "Class", "Status"],
      table: appState.attendance.map((item) => [item.date, item.student, item.className, item.status]),
    };
  }

  if (moduleName.includes("Student Timetables")) {
    const students = timetableStudents();
    const conflictCount = appState.studentTimetables.filter((item) => item.status === "Conflict").length;
    const totalLessons = appState.studentTimetables.length;
    return {
      ...dashboard,
      heroTitle: "Student timetable oversight.",
      heroCopy: "Academic Director can review every student's weekly timetable, identify clashes, check teacher/room allocation and connect schedules to attendance evidence.",
      heroMetrics: [[`${students.length}`, "Students"], [`${totalLessons}`, "Lessons"], [`${conflictCount}`, "Conflicts"]],
      metrics: [["Students scheduled", `${students.length}`, "blue"], ["Weekly lessons", `${totalLessons}`, "blue"], ["Schedule conflicts", `${conflictCount}`, conflictCount ? "red" : "green"], ["Rooms used", `${new Set(appState.studentTimetables.map((item) => item.room)).size}`, "blue"]],
      primaryEyebrow: "Timetable Governance",
      primaryTitle: "Student Schedule Overview",
      primaryAction: "Resolve first conflict",
      primary: students.map((item) => [item.year, item.student, `${item.lessons} lessons · ${item.subjects.join(" / ")}`, item.conflicts ? `${item.conflicts} Conflict` : "Clear"]),
      insightTitle: "Scheduling Control",
      insight: ["Academic Director ownership", "This view is intentionally not exposed to students or parents; they see only their own timetable, while the academic director sees the full scheduling matrix."],
      tableTitle: "All Student Timetable Entries",
      tableHead: ["Student", "Day / Time", "Subject", "Teacher / Room"],
      table: appState.studentTimetables.map((item) => [item.student, `${item.day} ${item.time}`, `${item.subject} · ${item.status}`, `${item.teacher} · ${item.room}`]),
      bars: [
        ["Year 10 load", appState.studentTimetables.filter((item) => item.year === "Year 10").length * 20],
        ["Year 11 load", appState.studentTimetables.filter((item) => item.year === "Year 11").length * 20],
        ["Year 12 load", appState.studentTimetables.filter((item) => item.year === "Year 12").length * 20],
        ["Conflict free", Math.round(((totalLessons - conflictCount) / Math.max(1, totalLessons)) * 100)],
      ],
    };
  }

  if (moduleName.includes("Assignment") || moduleName.includes("Submissions")) {
    const assignments = visibleAssignmentsForRole(currentRole);
    const individualCount = assignments.filter((item) => item.scope === "Individual").length;
    const classCount = assignments.filter((item) => item.scope === "Class").length;
    const openCount = assignments.filter((item) => canSubmitAssignment(item)).length;
    return {
      ...dashboard,
      primaryEyebrow: "Assignments",
      primaryTitle: role === "teacher" ? "Individual & Class Assignments" : "My Assignments",
      primaryAction: role === "teacher" ? "Assign to one student" : role === "student" ? "Submit first due task" : "View assignment report",
      heroMetrics: [[`${assignments.length}`, "Assignments"], [`${individualCount}`, "Individual"], [`${classCount}`, "Class"]],
      metrics: [["Visible assignments", `${assignments.length}`, "blue"], ["Individual tasks", `${individualCount}`, individualCount ? "green" : "amber"], ["Class tasks", `${classCount}`, "blue"], ["Need submit", `${openCount}`, openCount ? "amber" : "green"]],
      primary: assignments.map((item) => [item.due, item.scope === "Individual" ? item.student : item.className, `${item.subject} · ${item.title}`, role === "student" ? assignmentDisplayStatus(item) : item.status]),
      insightTitle: "Assignment Insight",
      insight: role === "student"
        ? ["Submission linked to database", "When a student submits, the system creates an assignment_submissions record linked to the assignment and student."]
        : ["Differentiated work", "Teachers can assign work to a whole class or to one student for intervention, extension or catch-up support."],
      tableTitle: role === "student" ? "My Submission Records" : "Assignment Records",
      tableHead: role === "student" ? ["Due", "Assignment", "Submission", "Action"] : ["Due", "Assigned To", "Subject / Title", "Status"],
      table: role === "student"
        ? assignments.map((item) => {
          const submission = submissionForAssignment(item);
          return [
            item.due,
            `${item.subject} · ${item.title} · ${item.assignedBy || "Teacher"}`,
            submission ? `${submission.status} · ${submission.submittedAt}` : "Not submitted",
            canSubmitAssignment(item) ? "Submit" : assignmentDisplayStatus(item),
          ];
        })
        : assignments.map((item) => [item.due, item.scope === "Individual" ? item.student : item.className, `${item.subject} · ${item.title} · ${item.assignedBy || "Teacher"}`, item.status]),
    };
  }

  if (moduleName.includes("Grade") || moduleName.includes("Subjects") || moduleName.includes("Programmes") || moduleName.includes("Analytics")) {
    if (moduleName.includes("Subjects") && role === "teacher") {
      return {
        ...dashboard,
        primaryEyebrow: "Teacher Permissions",
        primaryTitle: "Authorised Subjects",
        primaryAction: "View subject policy",
        primary: appState.teacherSubjects.map((item) => [item.teacher, item.subject, `${item.permission} · assignments ${item.canCreateAssignments ? "yes" : "no"} · marks ${item.canEnterMarks ? "yes" : "no"}`, item.canEnterMarks ? "Active" : "Restricted"]),
        insightTitle: "Subject Authorisation",
        insight: ["Fixed subject access", "Teachers should only create assignments, enter marks and manage WACE tasks for subjects they are authorised to teach."],
        tableTitle: "Teacher Subject Permissions",
        tableHead: ["Teacher", "Subject", "Permission", "Status"],
        table: appState.teacherSubjects.map((item) => [item.teacher, item.subject, `${item.permission} · create assignments: ${item.canCreateAssignments}`, item.canEnterMarks ? "Can enter marks" : "No mark entry"]),
      };
    }
    return {
      ...dashboard,
      primaryEyebrow: "Academic Results",
      primaryTitle: "Grade Trends",
      primaryAction: role === "teacher" ? "Add grade" : "Review trend",
      primary: appState.grades.map((item) => [item.subject, item.student, item.assessment, `${item.score} · ${item.trend}`]),
      insightTitle: "Grade Signal",
      insight: ["Physics needs support", `Current average score is ${scoreAverage()}. Any score under 75 creates a risk flag for review.`],
      tableTitle: "Gradebook",
      tableHead: ["Subject", "Student", "Assessment", "Score"],
      table: appState.grades.map((item) => [item.subject, item.student, item.assessment, String(item.score)]),
    };
  }

  if (moduleName.includes("WACE Teacher Marks")) {
    const avg = waceAverage();
    const draftCount = waceStatusCount("Draft");
    const reviewCount = waceStatusCount("Director review");
    const aggregates = waceAggregates();
    const releasedCount = aggregates.filter((item) => item.released).length;
    const taskCount = appState.waceOutlines.reduce((sum, outline) => sum + outline.tasks.length, 0);
    return {
      ...dashboard,
      heroTitle: "WACE school-based assessment workflow.",
      heroCopy: "Assessment outlines define task type and weighting; teachers enter task marks; the system calculates school mark, rank and A-E grade before academic director review and release.",
      heroMetrics: [[`${avg}`, "Avg school mark"], [`${waceCoveragePercent()}%`, "Outline coverage"], [`${reviewCount}`, "For review"]],
      metrics: [["Assessment outlines", `${appState.waceOutlines.length}`, "blue"], ["Assessment tasks", `${taskCount}`, "blue"], ["Draft results", `${draftCount}`, draftCount ? "amber" : "green"], ["Released results", `${releasedCount}`, releasedCount ? "green" : "amber"]],
      primaryEyebrow: "WACE Assessment",
      primaryTitle: "Assessment Outline & Task Marks",
      primaryAction: currentRole === "teacher" ? "Enter next task mark" : (currentRole === "admin" || currentRole === "academic_director") ? "Approve reviewed marks" : "Export evidence pack",
      primary: aggregates.map((item) => {
        const outline = item.outline || {};
        const taskSummary = (outline.tasks || []).map((task) => {
          const rawMark = item.marks?.[task.id];
          const markDisplay = rawMark !== undefined ? `${rawMark}/${task.maxMark || 100}` : "—";
          return `${task.type} ${task.weight}% [${markDisplay}]`;
        }).join(" / ");
        return [`${outline.year} · ${outline.semester}`, `${outline.course} · ${outline.courseType} · Rank ${item.rank}`, `${item.student}: ${item.schoolMark} (${item.grade}) · ${taskSummary}`, item.status];
      }),
      insightTitle: "Assessment Rule",
      insight: ["Not a single mark field", `${provisionalGradeNote()}. School mark is calculated from the published assessment outline; final A-E must be confirmed against course grade descriptions.`],
      tableTitle: "Calculated School Marks",
      tableHead: ["Course / Unit", "Student", "School Mark", "Rank / Status"],
      table: aggregates.map((item) => {
        const outline = item.outline || {};
        return [`${outline.year} ${outline.semester} · ${outline.course}`, item.student, `${item.schoolMark} · Grade ${item.grade}`, `Rank ${item.rank} · ${item.status}${item.released ? " · Released" : ""}`];
      }),
      bars: [
        ["Outline coverage", waceCoveragePercent()],
        ["Avg school mark", avg],
        ["Director review", Math.round((reviewCount / Math.max(1, aggregates.length)) * 100)],
        ["Released", Math.round((releasedCount / Math.max(1, aggregates.length)) * 100)],
      ],
    };
  }

  if (moduleName.includes("AI")) {
    return {
      ...dashboard,
      primaryEyebrow: "AI Learning",
      primaryTitle: role === "teacher" ? "AI Quiz Generator" : "AI Tutor Activity",
      primaryAction: "Ask AI Tutor",
      primary: appState.aiLogs.map((item) => [item.time, item.subject, item.prompt, item.outcome]),
      insightTitle: "AI Learning Log",
      insight: ["Every prompt becomes data", "AI interactions are stored as academic activity and can feed weekly reports, risk detection and EduTrust evidence."],
      tableTitle: "AI Interaction Logs",
      tableHead: ["Time", "Subject", "Prompt", "Outcome"],
      table: appState.aiLogs.map((item) => [item.time, item.subject, item.prompt, item.outcome]),
    };
  }

  if (moduleName.includes("Risk") || moduleName.includes("Warnings")) {
    return {
      ...dashboard,
      primaryEyebrow: "Risk Management",
      primaryTitle: "Open Academic Risks",
      primaryAction: "Create intervention",
      primary: appState.risks.map((item) => [item.programme, item.student, item.signal, item.status]),
      insightTitle: "Risk Rule",
      insight: ["Intervention workflow", "Risk flags can be acknowledged, assigned to a teacher, and later closed when grades or attendance recover."],
      tableTitle: "Risk Register",
      tableHead: ["Student", "Programme", "Signal", "Owner"],
      table: appState.risks.map((item) => [item.student, item.programme, item.signal, item.owner]),
    };
  }

  if (moduleName.includes("Evidence") || moduleName.includes("Audit") || moduleName.includes("Compliance") || moduleName.includes("Export")) {
    return {
      ...dashboard,
      primaryEyebrow: "EduTrust",
      primaryTitle: "Evidence Records",
      primaryAction: "Resolve first gap",
      primary: appState.evidence.map((item) => [item.type, item.item, item.owner, item.status]),
      insightTitle: "Compliance Insight",
      insight: ["Evidence pack", "Attendance, assessment, teacher feedback and AI learning records can be exported as an audit-ready pack."],
      tableTitle: "Evidence Register",
      tableHead: ["Type", "Evidence", "Owner", "Status"],
      table: appState.evidence.map((item) => [item.type, item.item, item.owner, item.status]),
    };
  }

  if (moduleName === "Students") {
    const students = appState._cloudStudents || [];
    return {
      ...dashboard,
      heroTitle: `${students.length} students enrolled.`,
      heroCopy: "Manage student accounts, enrolment status and year levels.",
      primaryEyebrow: "Student Management",
      primaryTitle: "All Students",
      primaryAction: "Add student",
      primary: students.map((s) => [s.student_code || "—", s.full_name, `${s.year_level} · ${s.programme}`, s.enrollment_status || "active"]),
      insightTitle: "Enrolment",
      insight: ["Cloud-synced", "Student records are stored in Supabase. New students get an auth account, profile, and academic record in one step."],
      tableTitle: "Student Register",
      tableHead: ["Code", "Name", "Year / Programme", "Status"],
      table: students.map((s) => [s.student_code || "—", s.full_name, `${s.year_level} · ${s.programme}`, s.enrollment_status || "active"]),
    };
  }

  if (moduleName === "Teachers") {
    const teachers = appState._cloudTeachers || [];
    return {
      ...dashboard,
      heroTitle: `${teachers.length} teachers on staff.`,
      heroCopy: "Manage teacher accounts, departments and subject authorisations.",
      primaryEyebrow: "Teacher Management",
      primaryTitle: "All Teachers",
      primaryAction: "Add teacher",
      primary: teachers.map((t) => [t.department || "—", t.full_name, t.department || "General", t.status || "active"]),
      insightTitle: "Subject Access",
      insight: ["Permission-based", "Teachers can only create assignments and enter marks for subjects they are authorised to teach."],
      tableTitle: "Teacher Register",
      tableHead: ["Name", "Department", "Status", "Actions"],
      table: teachers.map((t) => [t.full_name, t.department || "—", t.status || "active", "View"]),
    };
  }

  return dashboard;
}

function renderPortal(role, moduleIndex = currentModule) {
  const safeRole = portalData[normalizeRole(role)] ? normalizeRole(role) : "student";
  const nav = portalData[safeRole].nav;
  currentRole = safeRole;
  currentModule = Math.min(moduleIndex, nav.length - 1);
  const moduleName = nav[currentModule];
  const data = buildModuleView(safeRole, moduleName);

  viewEyebrow.textContent = data.label;
  viewTitle.textContent = currentModule === 0 ? data.title : moduleName;
  todayFocus.textContent = data.focus;
  quickAction.textContent = data.action;
  heroTitle.textContent = data.heroTitle;
  heroCopy.textContent = data.heroCopy;
  primaryEyebrow.textContent = data.primaryEyebrow;
  primaryTitle.textContent = data.primaryTitle;
  primaryAction.textContent = data.primaryAction;
  insightTitle.textContent = data.insightTitle;
  secondaryEyebrow.textContent = role === "qa_mr" ? "Coverage" : "Progress";
  secondaryTitle.textContent = role === "admin" ? "System Health" : role === "academic_director" ? "Programme Health" : role === "qa_mr" ? "Evidence Coverage" : "Performance";
  tableTitle.textContent = data.tableTitle;

  navList.innerHTML = nav.map((item, idx) => `<button class="nav-item ${idx === currentModule ? "active" : ""}" type="button" data-module="${idx}">${item}</button>`).join("");
  heroMetrics.innerHTML = data.heroMetrics.map(([value, label]) => `<div class="hero-metric"><strong>${value}</strong><span>${label}</span></div>`).join("");
  metricGrid.innerHTML = data.metrics.map(([label, value, color]) => `<article class="metric-card"><span>${label}</span><strong class="${color}">${value}</strong></article>`).join("");
  primaryList.innerHTML = data.primary.map(([time, title, detail, status], idx) => `
    <div class="timeline-item" data-row="${idx}">
      <time>${time}</time>
      <div><strong>${title}</strong><small>${detail}</small></div>
      <div class="row-actions">
        <span class="badge ${badgeClass(status)}">${status}</span>
        ${moduleName.includes("Attendance") && role === "teacher" ? statusButton("Toggle", "toggle-attendance", idx) : ""}
        ${moduleName.includes("Assignment") && role === "teacher" ? statusButton("Grade", "grade-assignment", idx) + statusButton("Advance", "advance-assignment", idx) : ""}
        ${moduleName.includes("Assignment") && role === "student" ? studentAssignmentButton(visibleAssignmentsForRole(role)[idx], idx) : ""}
        ${moduleName.includes("WACE Teacher Marks") && role === "teacher" ? statusButton("Submit", "submit-wace-result", idx) : ""}
        ${moduleName.includes("WACE Teacher Marks") && (role === "admin" || role === "academic_director") ? statusButton("Approve/Release", "approve-wace-result", idx) : ""}
        ${moduleName.includes("Student Timetables") && (role === "admin" || role === "academic_director") && String(status).includes("Conflict") ? statusButton("Resolve", "resolve-timetable-conflict", idx) : ""}
        ${moduleName.includes("Risk") || moduleName.includes("Warnings") ? statusButton("Close", "close-risk", idx) : ""}
        ${moduleName.includes("Evidence") || moduleName.includes("Compliance") ? statusButton("Resolve", "resolve-evidence", idx) : ""}
      </div>
    </div>
  `).join("");
  insightCard.innerHTML = `<strong>${data.insight[0]}</strong><span>${data.insight[1]}</span>`;
  barList.innerHTML = data.bars.map(([label, value]) => `
    <div class="bar-row">
      <header><span>${label}</span><strong>${value}%</strong></header>
      <div class="bar-track"><div class="bar-fill" style="width:${value}%"></div></div>
    </div>
  `).join("");
  tableHead.innerHTML = `<tr>${data.tableHead.map((h) => `<th>${h}</th>`).join("")}</tr>`;
  tableBody.innerHTML = data.table.map((row, rowIndex) => `<tr>${row.map((cell, idx) => {
    const isLastCell = idx === row.length - 1;
    if (moduleName.includes("Assignment") && role === "student" && isLastCell) {
      const a = visibleAssignmentsForRole("student")[rowIndex];
      if (a && canSubmitAssignment(a)) {
        const hasDraft = localStorage.getItem("bci_submission_drafts") && JSON.parse(localStorage.getItem("bci_submission_drafts") || "{}")[a.id];
        const label = hasDraft ? "Continue" : "Start";
        return `<td>${statusButton(label, "open-submission", rowIndex)}</td>`;
      }
    }
    return isLastCell ? `<td><span class="badge ${badgeClass(cell)}">${cell}</span></td>` : `<td>${cell}</td>`;
  }).join("")}</tr>`).join("");
  if (moduleName.includes("WACE Teacher Marks")) {
    const subjectListHtml = BCI_APPROVED_SUBJECTS.map((s) => `<span class="badge blue">${s.name} · List ${s.list}</span>`).join(" ");
    tableBody.innerHTML += `
      <tr><td colspan="${data.tableHead.length}"><div class="subtable-title">Assessment Outline Requirements</div></td></tr>
      ${appState.waceOutlines.map((outline) => {
        const errors = outlineValidationErrors(outline);
        const weightLabel = outlineWeightsValid(outline) ? "100%" : `${outlineWeightTotal(outline)}%`;
        const subj = subjectByName(outline.course);
        const listTag = subj ? ` · List ${subj.list}` : "";
        const templateHint = subj ? subj.atarTypes.map((t) => `${t.type} ${t.weight[0]}-${t.weight[1]}%`).join(", ") : "";
        const errorHtml = errors.length ? `<br><span class="badge red">${errors.join("; ")}</span>` : "";
        const templateLine = templateHint ? `<br><small>SCSA template: ${templateHint}</small>` : "";
        return `
          <tr>
            <td>${outline.year} ${outline.semester} · ${outline.courseType}${listTag}</td>
            <td>${outline.course}</td>
            <td>${outline.tasks.map((task) => `${task.type} ${task.weight}%${task.isEst ? " (EST)" : ""}`).join(" / ")} · Total: ${weightLabel}${templateLine}${errorHtml}</td>
            <td><span class="badge ${badgeClass(outline.status)}">${outline.status}</span></td>
          </tr>
        `;
      }).join("")}
      <tr><td colspan="${data.tableHead.length}"><div class="subtable-title">WACE Grade Scale: A ≥ 75 · B ≥ 65 · C ≥ 50 · D ≥ 35 · E &lt; 35</div></td></tr>
      <tr><td colspan="${data.tableHead.length}"><div class="subtable-title">BCI Approved ATAR Subjects (NH): ${subjectListHtml}</div></td></tr>
    `;
  }
  saveState();
}

async function handlePrimaryAction() {
  const moduleName = portalData[currentRole].nav[currentModule];

  if (moduleName === "Students") { openAddStudentModal(); return; }
  if (moduleName === "Teachers") { openAddTeacherModal(); return; }

  if (moduleName.includes("AI")) {
    aiModal.classList.add("active");
    aiModal.setAttribute("aria-hidden", "false");
    return;
  }

  if (moduleName.includes("WACE Teacher Marks")) {
    if (currentRole === "teacher") {
      const target = appState.waceResults.find((item) => item.status === "Draft") || appState.waceResults[0];
      const outline = outlineById(target.outlineId);
      if (!teacherCan(outline?.course, "mark")) {
        showToast(`No mark-entry permission for ${outline?.course || "this subject"}`);
        return;
      }
      const task = outline?.tasks.find((entry) => target.marks[entry.id] === undefined) || outline?.tasks[0];
      if (target && task) {
        target.marks[task.id] = Math.min(100, Number(target.marks[task.id] || 70) + 3);
        target.status = "Teacher entered";
      }
      appState.evidence.push({
        id: `e${Date.now()}`,
        type: "Assessment",
        item: `${outline?.year || "WACE"} ${outline?.course || "course"} task mark entered`,
        owner: outline?.teacher || "Teacher",
        status: "Complete",
      });
      showToast("Task mark entered from assessment outline");
    } else if (currentRole === "admin" || currentRole === "academic_director") {
      appState.waceResults.filter((item) => item.status === "Director review").forEach((item) => { item.status = "Approved"; });
      showToast("Reviewed WACE marks approved");
    } else if (currentRole === "qa_mr") {
      showToast("Evidence pack ready for export");
    } else {
      showToast("WACE teacher marks refreshed");
    }
    renderPortal(currentRole, currentModule);
    return;
  }

  if (moduleName.includes("Student Timetables")) {
    const conflict = appState.studentTimetables.find((item) => item.status === "Conflict");
    if (conflict) {
      conflict.time = "15:20";
      conflict.status = "Scheduled";
      appState.evidence.push({
        id: `e${Date.now()}`,
        type: "Timetable",
        item: `${conflict.student} schedule conflict resolved`,
        owner: "Academic Director",
        status: "Complete",
      });
      showToast("First timetable conflict resolved");
    } else {
      showToast("No timetable conflicts");
    }
    renderPortal(currentRole, currentModule);
    return;
  }

  if (moduleName.includes("Timetable") || moduleName.includes("Today Classes")) {
    if (currentRole === "admin" || currentRole === "teacher" || currentRole === "academic_director") {
      openQrModal();
    } else {
      showToast("Timetable refreshed");
    }
    return;
  }

  if (moduleName.includes("Assignment") && currentRole === "teacher") {
    openAssignmentModal();
    return;
  } else if (moduleName.includes("Assignment") && currentRole === "student") {
    const item = visibleAssignmentsForRole("student").find((entry) => canSubmitAssignment(entry));
    if (item && typeof openSubmissionModal === "function") {
      openSubmissionModal(item);
    } else {
      showToast("No due assignment to submit");
    }
  } else if (moduleName.includes("Attendance")) {
    if (currentRole === "teacher") {
      appState.attendance.forEach((item) => { item.status = "Present"; });
      showToast("Attendance marked present");
    } else {
      showToast("Attendance refreshed");
    }
  } else if (moduleName.includes("Risk")) {
    appState.risks.unshift({
      id: `r${Date.now()}`,
      student: "Jason Ng",
      programme: "WACE Y11 ATAR",
      signal: "Physics support block assigned",
      owner: "Mr Lim",
      status: "Open",
    });
    showToast("Intervention created");
  } else if (moduleName.includes("Evidence") || currentRole === "qa_mr") {
    const gap = appState.evidence.find((item) => item.status === "Gap");
    if (gap) gap.status = "Complete";
    showToast(gap ? "Evidence gap resolved" : "No open evidence gaps");
  } else {
    showToast("View refreshed");
  }

  renderPortal(currentRole, currentModule);
}

roleSelect.value = currentRole;

roleSelect.addEventListener("change", () => {
  if (authLockedRole) {
    roleSelect.value = currentRole;
    showToast("Role is controlled by login");
    return;
  }
  currentModule = 0;
  renderPortal(roleSelect.value, 0);
});

navList.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-module]");
  if (!button) return;
  const idx = Number(button.dataset.module);
  const moduleName = portalData[currentRole]?.nav?.[idx];
  if (moduleName === "Students" || moduleName === "Teachers") {
    await loadCloudLists();
  }
  renderPortal(currentRole, idx);
});

primaryAction.addEventListener("click", handlePrimaryAction);

document.querySelector("#theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

quickAction.addEventListener("click", () => {
  aiModal.classList.add("active");
  aiModal.setAttribute("aria-hidden", "false");
});

function openQrModal() {
  qrModal.classList.add("active");
  qrModal.setAttribute("aria-hidden", "false");
}

async function openAssignmentModal() {
  assignmentTitle.value = "";
  assignmentInstructions.value = "";
  assignmentMarks.value = "";
  assignmentDue.value = dateInputValue(1);
  assignmentDueTime.value = "23:59";
  assignmentStatus.value = "published";
  assignmentType.value = "worksheet";
  assignmentNote.value = "";
  assignmentWaceTask.innerHTML = '<option value="">— None —</option>';
  assignmentWaceType.value = "";
  assignmentAttachedFiles = [];
  assignmentQuestions = [];
  document.getElementById("assignment-attach-list").innerHTML = "";
  document.getElementById("assignment-publish-label").style.display = "none";
  document.getElementById("questions-builder").style.display = "none";
  document.getElementById("question-list").innerHTML = "";
  document.getElementById("question-count").textContent = "0 questions · 0 marks";
  document.getElementById("essay-builder").style.display = "none";
  resetEssayBuilder();
  hideAllTypePanels();
  resetPracticalBuilder();
  resetProjectBuilder();
  resetPresentationBuilder();
  resetExamBuilder();
  resetReflectionBuilder();
  setAssignmentScope("individual");

  let populated = false;
  if (cloudConfigured()) {
    try {
      const [mySubjects, students] = await Promise.all([
        window.AcademicDataAdapter.listMyTeacherSubjects(),
        window.AcademicDataAdapter.listStudents(),
      ]);
      if (mySubjects.length) {
        assignmentSubject.innerHTML = mySubjects.map((s) =>
          `<option value="${s.subjectName}">${s.subjectName}</option>`
        ).join("");
        populated = true;
      }
      if (students.length) {
        assignmentStudent.innerHTML = students.map((s) =>
          `<option value="${s.full_name}">${s.full_name}</option>`
        ).join("");
      }
    } catch (e) {
      console.warn("Failed to load teacher subjects / students:", e);
    }
  }
  if (!populated) {
    const mySubjects = appState.teacherSubjects.filter((ts) => ts.canCreateAssignments);
    if (mySubjects.length) {
      assignmentSubject.innerHTML = mySubjects.map((s) =>
        `<option value="${s.subject}">${s.subject}</option>`
      ).join("");
    }
    const localStudents = [...new Set(appState.assignments.map((a) => a.student).filter(Boolean))];
    if (localStudents.length) {
      assignmentStudent.innerHTML = localStudents.map((s) =>
        `<option value="${s}">${s}</option>`
      ).join("");
    }
  }

  populateAssignmentClasses();
  populateWaceTasks();

  assignmentModal.classList.add("active");
  assignmentModal.setAttribute("aria-hidden", "false");
  assignmentTitle.focus();
}

function setAssignmentScope(scope) {
  assignmentScope = scope;
  document.querySelectorAll(".scope-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.scope === scope);
  });
  document.getElementById("assignment-student-label").style.display = scope === "individual" ? "" : "none";
  document.getElementById("assignment-class-label").style.display = scope === "class" ? "" : "none";
}

function populateAssignmentClasses() {
  const classes = [...new Set(appState.assignments.filter((a) => a.className).map((a) => a.className))];
  const timetableClasses = [...new Set(appState.studentTimetables.map((t) => `Y${t.year.replace("Year ", "")} ${t.subject}`))];
  const allClasses = [...new Set([...classes, ...timetableClasses])].sort();
  if (allClasses.length) {
    assignmentClass.innerHTML = allClasses.map((c) => `<option value="${c}">${c}</option>`).join("");
  } else {
    assignmentClass.innerHTML = '<option>Y11 Physics</option><option>Y11 EALD</option><option>Y11 Maths Methods</option><option>Y12 Chemistry</option>';
  }
}

function populateWaceTasks() {
  const subject = assignmentSubject.value;
  const outlines = appState.waceOutlines?.filter((o) => o.course === subject) || [];
  let html = '<option value="">— None —</option>';
  outlines.forEach((o) => {
    (o.tasks || []).forEach((t) => {
      html += `<option value="${o.id}:${t.id}">${o.year} ${o.semester} · ${t.type} (${t.weight}%)</option>`;
    });
  });
  assignmentWaceTask.innerHTML = html;
}

function closeAssignmentModal() {
  assignmentModal.classList.remove("active");
  assignmentModal.setAttribute("aria-hidden", "true");
}

async function createIndividualAssignmentFromModal() {
  const scope = assignmentScope;
  const student = scope === "individual" ? assignmentStudent.value : "";
  const className = scope === "class" ? assignmentClass.value : "";
  const subject = assignmentSubject.value;
  const type = assignmentType.value;
  const title = assignmentTitle.value.trim();
  const instructions = assignmentInstructions.value.trim();
  const marks = assignmentMarks.value ? Number(assignmentMarks.value) : null;
  const due = displayDateFromInput(assignmentDue.value);
  const dueTime = assignmentDueTime.value || "23:59";
  const statusVal = assignmentStatus.value;
  const status = statusVal === "draft" ? "Draft" : "Due";
  const note = assignmentNote.value.trim();
  const waceTaskRef = assignmentWaceTask.value;
  const waceType = assignmentWaceType.value;
  const permission = appState.teacherSubjects.find((item) => item.subject === subject);

  if (!title) {
    showToast("Please enter a title");
    assignmentTitle.focus();
    return;
  }
  if (!assignmentDue.value) {
    showToast("Please choose a due date");
    assignmentDue.focus();
    return;
  }
  if (scope === "individual" && !student) {
    showToast("Please select a student");
    return;
  }
  if (!teacherCan(subject, "assign")) {
    showToast(`No assignment permission for ${subject}`);
    return;
  }

  const assignment = {
    id: `a${Date.now()}`,
    scope: scope === "class" ? "Class" : "Individual",
    student,
    className,
    subject,
    title,
    type,
    instructions,
    marks,
    due: `${due} ${dueTime}`,
    status,
    score: "",
    assignedBy: permission?.teacher || "Teacher",
    note,
    waceTaskRef,
    waceType,
    attachments: assignmentAttachedFiles.map((f) => f.name),
    questions: assignmentQuestions.length ? [...assignmentQuestions] : undefined,
    essay: type === "essay" ? {
      essayType: document.getElementById("essay-type")?.value,
      prompt: document.getElementById("essay-prompt")?.value,
      minWords: Number(document.getElementById("essay-min-words")?.value) || 300,
      maxWords: Number(document.getElementById("essay-max-words")?.value) || 800,
      stages: document.getElementById("essay-stages")?.value,
      references: document.getElementById("essay-references")?.value,
      extra: document.getElementById("essay-extra")?.value,
      outline: {
        intro: document.getElementById("outline-intro")?.value,
        body: Array.from(document.querySelectorAll(".outline-body-input")).map((el) => el.value).filter(Boolean),
        conclusion: document.getElementById("outline-conclusion")?.value,
      },
      rubric: [...essayRubricCriteria],
    } : undefined,
    practical: type === "practical" ? collectPracticalData() : undefined,
    project: type === "project" ? collectProjectData() : undefined,
    presentation: type === "presentation" ? collectPresentationData() : undefined,
    exam: type === "exam" ? collectExamData() : undefined,
    reflection: type === "reflection" ? collectReflectionData() : undefined,
  };

  const target = scope === "class" ? className : student;

  if (cloudConfigured() && scope === "individual") {
    try {
      const cloudResult = await window.AcademicDataAdapter.createIndividualAssignment({
        studentName: student,
        subjectName: subject,
        title,
        description: instructions || note,
        dueAt: isoFromDateInput(assignmentDue.value),
        status: statusVal,
      });
      assignment.id = cloudResult.assignment.id;
      assignment.cloudAssignmentId = cloudResult.assignment.id;
      assignment.cloudStudentId = cloudResult.targetStudentId;
      assignment.cloudSynced = true;
    } catch (error) {
      console.warn("Cloud assignment create failed:", error);
      assignment.cloudSynced = false;
      showToast("Saved locally; database create failed");
    }
  }

  appState.assignments.unshift(assignment);
  appState.evidence.push({
    id: `e${Date.now()}`,
    type: "Assignment",
    item: `${subject} ${type} ${scope === "class" ? "assigned to " + className : "created for " + student}`,
    owner: permission?.teacher || "Teacher",
    status: "Complete",
  });
  saveState();
  closeAssignmentModal();
  renderPortal(currentRole, currentModule);
  if (assignment.cloudSynced) {
    showToast(`${type} assigned to ${target} and saved to database`);
  } else {
    showToast(`${type} assigned to ${target}`);
  }
}

document.querySelector("#modal-close").addEventListener("click", () => {
  aiModal.classList.remove("active");
  aiModal.setAttribute("aria-hidden", "true");
});

document.querySelector("#qr-close").addEventListener("click", () => {
  qrModal.classList.remove("active");
  qrModal.setAttribute("aria-hidden", "true");
});

document.querySelector("#assignment-close").addEventListener("click", closeAssignmentModal);
document.querySelector("#assignment-cancel")?.addEventListener("click", closeAssignmentModal);

document.querySelector("#assignment-create").addEventListener("click", createIndividualAssignmentFromModal);

document.getElementById("scope-toggle")?.addEventListener("click", (e) => {
  const btn = e.target.closest(".scope-btn");
  if (btn) setAssignmentScope(btn.dataset.scope);
});

assignmentSubject?.addEventListener("change", () => populateWaceTasks());

assignmentStatus?.addEventListener("change", () => {
  const show = assignmentStatus.value === "scheduled";
  document.getElementById("assignment-publish-label").style.display = show ? "" : "none";
});

document.getElementById("assignment-attach-zone")?.addEventListener("click", () => {
  document.getElementById("assignment-file")?.click();
});

document.getElementById("assignment-file")?.addEventListener("change", (e) => {
  const files = Array.from(e.target.files || []);
  files.forEach((f) => assignmentAttachedFiles.push(f));
  renderAttachList();
  e.target.value = "";
});

function renderAttachList() {
  const list = document.getElementById("assignment-attach-list");
  list.innerHTML = assignmentAttachedFiles.map((f, i) =>
    `<span class="attach-chip">${f.name} <button type="button" data-idx="${i}">×</button></span>`
  ).join("");
}

document.getElementById("assignment-attach-list")?.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-idx]");
  if (btn) {
    assignmentAttachedFiles.splice(Number(btn.dataset.idx), 1);
    renderAttachList();
  }
});

document.getElementById("assignment-ai-btn")?.addEventListener("click", () => {
  const subject = assignmentSubject.value;
  const type = assignmentType.value;
  const typeLabel = assignmentType.options[assignmentType.selectedIndex]?.text || type;
  assignmentTitle.value = assignmentTitle.value || `${subject} — AI-Generated ${typeLabel}`;
  assignmentInstructions.value = `AI-generated ${typeLabel.toLowerCase()} for ${subject}.\n\nThis practice set covers key topics from recent lessons. Students should attempt all questions independently before checking answers.\n\nEstimated time: 30–45 minutes.`;
  showToast(`AI practice content generated for ${subject}`);
});

// ── Question Builder ──────────────────────────────────────
let assignmentQuestions = [];

const questionTypeLabels = { mcq: "Multiple Choice", multi: "Multiple Select", fill: "Fill in Blank", reading: "Reading", open: "Open Response" };
const questionTypeBadge = { mcq: "MCQ", multi: "Multi", fill: "Fill", reading: "Reading", open: "Open" };

function showQuestionsBuilder() {
  const builder = document.getElementById("questions-builder");
  if (builder) builder.style.display = "";
  hideAllTypePanels();
}

const typePanelIds = ["practical-builder", "project-builder", "presentation-builder", "exam-builder", "reflection-builder"];

function hideAllTypePanels() {
  typePanelIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
  });
}

function showTypePanel(panelId) {
  hideAllTypePanels();
  document.getElementById("questions-builder").style.display = "none";
  hideEssayBuilder();
  const el = document.getElementById(panelId);
  if (el) el.style.display = "";
}

assignmentType?.addEventListener("change", () => {
  const type = assignmentType.value;
  hideAllTypePanels();
  if (type === "essay") {
    showEssayBuilder();
  } else if (["worksheet", "quiz"].includes(type)) {
    hideEssayBuilder();
    showQuestionsBuilder();
  } else if (type === "practical") {
    showTypePanel("practical-builder");
  } else if (type === "project") {
    showTypePanel("project-builder");
  } else if (type === "presentation") {
    showTypePanel("presentation-builder");
  } else if (type === "exam") {
    showTypePanel("exam-builder");
  } else if (type === "reflection") {
    showTypePanel("reflection-builder");
  } else {
    document.getElementById("questions-builder").style.display = "none";
    hideEssayBuilder();
  }
});

function renderQuestionList() {
  const list = document.getElementById("question-list");
  const countEl = document.getElementById("question-count");
  const totalMarks = assignmentQuestions.reduce((s, q) => s + (q.marks || 0), 0);
  countEl.textContent = `${assignmentQuestions.length} question${assignmentQuestions.length !== 1 ? "s" : ""} · ${totalMarks} marks`;

  list.innerHTML = assignmentQuestions.map((q, i) => {
    const badge = `<span class="question-badge ${q.type}">${questionTypeBadge[q.type]}</span>`;
    const num = `<span class="question-num">Q${i + 1}</span>`;
    const actions = `<div class="question-card-actions">
      ${i > 0 ? `<button type="button" data-action="up" data-idx="${i}" title="Move up">↑</button>` : ""}
      ${i < assignmentQuestions.length - 1 ? `<button type="button" data-action="down" data-idx="${i}" title="Move down">↓</button>` : ""}
      <button type="button" data-action="delete" data-idx="${i}" title="Delete">×</button>
    </div>`;
    const head = `<div class="question-card-head">${badge}${num}${actions}</div>`;

    let body = "";
    if (q.type === "mcq") {
      body = renderMcqBody(q, i);
    } else if (q.type === "multi") {
      body = renderMultiBody(q, i);
    } else if (q.type === "fill") {
      body = renderFillBody(q, i);
    } else if (q.type === "reading") {
      body = renderReadingBody(q, i);
    } else {
      body = renderOpenBody(q, i);
    }

    return `<div class="question-card">${head}${body}</div>`;
  }).join("");
}

function renderMcqBody(q, idx) {
  const options = (q.options || ["", "", "", ""]).map((opt, oi) => {
    const letter = String.fromCharCode(65 + oi);
    const isCorrect = q.correctAnswer === oi;
    return `<div class="mcq-option-row">
      <span class="opt-letter ${isCorrect ? "correct" : ""}" data-idx="${idx}" data-opt="${oi}" title="Click to set correct answer">${letter}</span>
      <input type="text" value="${escAttr(opt)}" placeholder="Option ${letter}" data-idx="${idx}" data-opt="${oi}" data-field="option" />
    </div>`;
  }).join("");
  return `
    <label>Question <input type="text" value="${escAttr(q.question)}" data-idx="${idx}" data-field="question" placeholder="e.g. What is the SI unit of force?" /></label>
    <div class="mcq-options">${options}</div>
    <div class="form-grid" style="margin-top:8px">
      <label>Marks <input type="number" class="question-marks-input" value="${q.marks || 1}" min="1" max="50" data-idx="${idx}" data-field="marks" /></label>
      <label>Explanation (optional) <input type="text" value="${escAttr(q.explanation || "")}" data-idx="${idx}" data-field="explanation" placeholder="Why this answer is correct" /></label>
    </div>`;
}

function renderMultiBody(q, idx) {
  const correctSet = new Set(q.correctAnswers || []);
  const options = (q.options || ["", "", "", ""]).map((opt, oi) => {
    const letter = String.fromCharCode(65 + oi);
    const isCorrect = correctSet.has(oi);
    return `<div class="mcq-option-row">
      <input type="checkbox" class="opt-check" ${isCorrect ? "checked" : ""} data-idx="${idx}" data-opt="${oi}" data-field="multi-correct" title="Check if correct" />
      <span class="opt-letter" style="border:none;cursor:default">${letter}</span>
      <input type="text" value="${escAttr(opt)}" placeholder="Option ${letter}" data-idx="${idx}" data-opt="${oi}" data-field="option" />
    </div>`;
  }).join("");
  return `
    <label>Question (select ALL correct answers) <input type="text" value="${escAttr(q.question)}" data-idx="${idx}" data-field="question" placeholder="e.g. Which of the following are vector quantities?" /></label>
    <div class="mcq-options">${options}</div>
    <div class="form-grid" style="margin-top:8px">
      <label>Marks <input type="number" class="question-marks-input" value="${q.marks || 2}" min="1" max="50" data-idx="${idx}" data-field="marks" /></label>
      <label>Explanation (optional) <input type="text" value="${escAttr(q.explanation || "")}" data-idx="${idx}" data-field="explanation" placeholder="Why these answers are correct" /></label>
    </div>`;
}

function renderFillBody(q, idx) {
  return `
    <label>Question (use ___ for blanks) <input type="text" value="${escAttr(q.question)}" data-idx="${idx}" data-field="question" placeholder="e.g. The acceleration due to gravity is ___ m/s²" /></label>
    <div class="form-grid" style="margin-top:8px">
      <label>Correct answer(s) <input type="text" value="${escAttr(q.answer || "")}" data-idx="${idx}" data-field="answer" placeholder="e.g. 9.8 or 9.81" /></label>
      <label>Marks <input type="number" class="question-marks-input" value="${q.marks || 1}" min="1" max="50" data-idx="${idx}" data-field="marks" /></label>
    </div>`;
}

function renderReadingBody(q, idx) {
  const subQs = (q.subQuestions || [""]).map((sq, si) =>
    `<div class="reading-sub-q">
      <span>(${si + 1})</span>
      <input type="text" value="${escAttr(sq)}" data-idx="${idx}" data-sub="${si}" data-field="subq" placeholder="Question about the passage" />
    </div>`
  ).join("");
  return `
    <div class="reading-passage">
      <label>Reading passage <textarea rows="3" data-idx="${idx}" data-field="passage" placeholder="Paste or type the reading material here…">${escHtml(q.passage || "")}</textarea></label>
    </div>
    <div class="reading-sub-questions">
      ${subQs}
      <button type="button" class="ghost-button" data-action="add-sub" data-idx="${idx}" style="font-size:12px;padding:4px 10px;align-self:flex-start">+ Add sub-question</button>
    </div>
    <div class="form-grid" style="margin-top:8px">
      <label>Marks (total for passage) <input type="number" class="question-marks-input" value="${q.marks || 5}" min="1" max="100" data-idx="${idx}" data-field="marks" /></label>
    </div>`;
}

function renderOpenBody(q, idx) {
  return `
    <label>Question <input type="text" value="${escAttr(q.question)}" data-idx="${idx}" data-field="question" placeholder="e.g. Explain the relationship between force and acceleration." /></label>
    <div class="form-grid" style="margin-top:8px">
      <label>Expected answer / rubric hint <input type="text" value="${escAttr(q.answer || "")}" data-idx="${idx}" data-field="answer" placeholder="Key points to look for" /></label>
      <label>Marks <input type="number" class="question-marks-input" value="${q.marks || 3}" min="1" max="50" data-idx="${idx}" data-field="marks" /></label>
    </div>`;
}

function escAttr(s) { return String(s || "").replace(/"/g, "&quot;").replace(/</g, "&lt;"); }
function escHtml(s) { return String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }

function addQuestion(type) {
  showQuestionsBuilder();
  const q = { type, question: "", marks: type === "reading" ? 5 : type === "open" ? 3 : type === "multi" ? 2 : 1 };
  if (type === "mcq") { q.options = ["", "", "", ""]; q.correctAnswer = 0; }
  if (type === "multi") { q.options = ["", "", "", ""]; q.correctAnswers = []; }
  if (type === "fill") { q.answer = ""; }
  if (type === "reading") { q.passage = ""; q.subQuestions = [""]; }
  if (type === "open") { q.answer = ""; }
  assignmentQuestions.push(q);
  renderQuestionList();
  const card = document.querySelector(".question-card:last-child");
  if (card) card.scrollIntoView({ behavior: "smooth", block: "center" });
}

document.getElementById("add-mcq-btn")?.addEventListener("click", () => addQuestion("mcq"));
document.getElementById("add-multi-btn")?.addEventListener("click", () => addQuestion("multi"));
document.getElementById("add-fill-btn")?.addEventListener("click", () => addQuestion("fill"));
document.getElementById("add-reading-btn")?.addEventListener("click", () => addQuestion("reading"));
document.getElementById("add-open-btn")?.addEventListener("click", () => addQuestion("open"));

document.getElementById("question-list")?.addEventListener("input", (e) => {
  const el = e.target;
  const idx = Number(el.dataset.idx);
  const field = el.dataset.field;
  const q = assignmentQuestions[idx];
  if (!q || !field) return;
  if (field === "question") q.question = el.value;
  else if (field === "answer") q.answer = el.value;
  else if (field === "passage") q.passage = el.value;
  else if (field === "explanation") q.explanation = el.value;
  else if (field === "marks") { q.marks = Number(el.value) || 0; updateQuestionCount(); }
  else if (field === "option") { q.options[Number(el.dataset.opt)] = el.value; }
  else if (field === "multi-correct") {
    const oi = Number(el.dataset.opt);
    if (!q.correctAnswers) q.correctAnswers = [];
    if (el.checked) { if (!q.correctAnswers.includes(oi)) q.correctAnswers.push(oi); }
    else { q.correctAnswers = q.correctAnswers.filter((x) => x !== oi); }
  }
  else if (field === "subq") {
    if (!q.subQuestions) q.subQuestions = [];
    q.subQuestions[Number(el.dataset.sub)] = el.value;
  }
});

document.getElementById("question-list")?.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-action]");
  if (!btn) return;
  const action = btn.dataset.action;
  const idx = Number(btn.dataset.idx);

  if (action === "delete") {
    assignmentQuestions.splice(idx, 1);
    renderQuestionList();
  } else if (action === "up" && idx > 0) {
    [assignmentQuestions[idx - 1], assignmentQuestions[idx]] = [assignmentQuestions[idx], assignmentQuestions[idx - 1]];
    renderQuestionList();
  } else if (action === "down" && idx < assignmentQuestions.length - 1) {
    [assignmentQuestions[idx], assignmentQuestions[idx + 1]] = [assignmentQuestions[idx + 1], assignmentQuestions[idx]];
    renderQuestionList();
  } else if (action === "add-sub") {
    const q = assignmentQuestions[idx];
    if (q && q.type === "reading") {
      if (!q.subQuestions) q.subQuestions = [];
      q.subQuestions.push("");
      renderQuestionList();
    }
  }

  const optLetter = e.target.closest(".opt-letter");
  if (optLetter) {
    const qi = Number(optLetter.dataset.idx);
    const oi = Number(optLetter.dataset.opt);
    if (assignmentQuestions[qi]) {
      assignmentQuestions[qi].correctAnswer = oi;
      renderQuestionList();
    }
  }
});

function updateQuestionCount() {
  const countEl = document.getElementById("question-count");
  const totalMarks = assignmentQuestions.reduce((s, q) => s + (q.marks || 0), 0);
  countEl.textContent = `${assignmentQuestions.length} question${assignmentQuestions.length !== 1 ? "s" : ""} · ${totalMarks} marks`;
}

document.getElementById("ai-gen-questions-btn")?.addEventListener("click", () => {
  const subject = assignmentSubject.value;
  assignmentQuestions = [
    { type: "mcq", question: `Which of the following best describes Newton's First Law?`, options: ["An object accelerates when a net force acts on it", "An object at rest stays at rest unless acted upon by an external force", "Every action has an equal and opposite reaction", "Force equals mass times acceleration"], correctAnswer: 1, marks: 2, explanation: "Newton's First Law is the law of inertia." },
    { type: "mcq", question: `What is the SI unit of energy?`, options: ["Newton", "Joule", "Watt", "Pascal"], correctAnswer: 1, marks: 2 },
    { type: "mcq", question: `A 5 kg object has an acceleration of 3 m/s². What is the net force?`, options: ["8 N", "15 N", "2 N", "1.67 N"], correctAnswer: 1, marks: 2 },
    { type: "fill", question: `The formula for kinetic energy is Ek = ½ × ___ × v²`, answer: "m (mass)", marks: 1 },
    { type: "fill", question: `When a ball is thrown upward, at the highest point its velocity is ___`, answer: "zero / 0", marks: 1 },
    { type: "fill", question: `The unit of frequency is ___, which is equivalent to s⁻¹`, answer: "Hertz / Hz", marks: 1 },
    { type: "reading", passage: `A physics class conducted an experiment to measure the acceleration due to gravity. They dropped a steel ball from different heights (0.5 m, 1.0 m, 1.5 m, 2.0 m) and recorded the time taken to reach the ground using a photogate timer. The results showed consistent values close to 9.8 m/s², with minor variations attributed to air resistance and measurement uncertainty.`, subQuestions: ["What is the independent variable in this experiment?", "Why did the students use a steel ball instead of a paper ball?", "Calculate the expected time for the ball to fall from 2.0 m (use g = 9.8 m/s²)."], marks: 6 },
    { type: "open", question: `Explain why astronauts experience weightlessness on the International Space Station, even though gravity still acts on them.`, answer: "They are in free fall / orbital motion provides continuous free fall — gravity provides centripetal force for orbit, not felt as weight.", marks: 5 },
  ];
  showQuestionsBuilder();
  renderQuestionList();
  const totalMarks = assignmentQuestions.reduce((s, q) => s + (q.marks || 0), 0);
  assignmentMarks.value = totalMarks;
  assignmentTitle.value = assignmentTitle.value || `${subject} — Practice Questions`;
  showToast(`AI generated ${assignmentQuestions.length} questions for ${subject}`);
});

// ── Essay Builder ──────────────────────────────────────
let essayRubricCriteria = [];

function renderEssayRubric() {
  const list = document.getElementById("essay-rubric-list");
  const totalMarks = essayRubricCriteria.reduce((s, c) => s + (c.marks || 0), 0);
  document.getElementById("essay-total-marks").textContent = `${totalMarks} marks`;

  list.innerHTML = essayRubricCriteria.map((c, i) => `
    <div class="rubric-row">
      <label>Criterion <input type="text" value="${escAttr(c.name)}" data-ridx="${i}" data-rfield="name" placeholder="e.g. Content & Ideas" /></label>
      <label>Weight <select data-ridx="${i}" data-rfield="weight">
        <option value="high" ${c.weight === "high" ? "selected" : ""}>High</option>
        <option value="medium" ${c.weight === "medium" ? "selected" : ""}>Medium</option>
        <option value="low" ${c.weight === "low" ? "selected" : ""}>Low</option>
      </select></label>
      <label>Marks <input type="number" value="${c.marks || 0}" min="0" max="100" data-ridx="${i}" data-rfield="marks" style="text-align:center" /></label>
      <button type="button" class="rubric-del" data-ridx="${i}" title="Delete">×</button>
    </div>
  `).join("");
}

function addEssayRubricRow(name = "", marks = 5, weight = "medium") {
  essayRubricCriteria.push({ name, marks, weight });
  renderEssayRubric();
}

document.getElementById("add-rubric-btn")?.addEventListener("click", () => addEssayRubricRow());

document.getElementById("essay-rubric-list")?.addEventListener("input", (e) => {
  const el = e.target;
  const idx = Number(el.dataset.ridx);
  const field = el.dataset.rfield;
  const c = essayRubricCriteria[idx];
  if (!c || !field) return;
  if (field === "name") c.name = el.value;
  else if (field === "marks") { c.marks = Number(el.value) || 0; renderEssayRubric(); }
  else if (field === "weight") c.weight = el.value;
});

document.getElementById("essay-rubric-list")?.addEventListener("click", (e) => {
  const btn = e.target.closest(".rubric-del");
  if (btn) {
    essayRubricCriteria.splice(Number(btn.dataset.ridx), 1);
    renderEssayRubric();
  }
});

document.getElementById("add-body-para")?.addEventListener("click", () => {
  const list = document.getElementById("outline-body-list");
  const count = list.querySelectorAll("input").length + 1;
  const input = document.createElement("input");
  input.type = "text";
  input.className = "outline-body-input";
  input.placeholder = `Body ¶${count}: Additional point or evidence`;
  list.appendChild(input);
});

document.getElementById("ai-gen-essay-btn")?.addEventListener("click", () => {
  const subject = assignmentSubject.value;
  const essayType = document.getElementById("essay-type").value;

  essayRubricCriteria = [
    { name: "Content & Ideas", marks: 10, weight: "high" },
    { name: "Structure & Organisation", marks: 8, weight: "high" },
    { name: "Language & Style", marks: 8, weight: "medium" },
    { name: "Grammar & Mechanics", marks: 4, weight: "low" },
  ];
  renderEssayRubric();

  const prompts = {
    argumentative: `Should artificial intelligence be used to grade student essays? Take a clear position and support your argument with evidence from at least two sources. Address potential counter-arguments.`,
    narrative: `Write a narrative about a moment that changed your perspective on learning. Use descriptive language and literary techniques to engage the reader.`,
    descriptive: `Describe a place that holds significant personal meaning to you. Use sensory details to create a vivid picture for the reader.`,
    expository: `Explain how climate change affects marine ecosystems. Use specific examples and data to support your explanation.`,
    analytical: `Analyse the techniques used by the author to convey their message in the text studied in class. Consider language features, structure, and context.`,
    reflective: `Reflect on a challenge you faced during a group project. What did you learn about collaboration and how would you approach it differently?`,
  };
  document.getElementById("essay-prompt").value = prompts[essayType] || prompts.argumentative;

  document.getElementById("outline-intro").value = "Hook + context + clear thesis statement";
  const bodyList = document.getElementById("outline-body-list");
  bodyList.innerHTML = "";
  const bodyParagraphs = [
    "Body ¶1: First supporting argument with evidence",
    "Body ¶2: Second point or counter-argument analysis",
    "Body ¶3: Additional evidence or synthesis of ideas",
  ];
  bodyParagraphs.forEach((p) => {
    const input = document.createElement("input");
    input.type = "text";
    input.className = "outline-body-input";
    input.value = p;
    bodyList.appendChild(input);
  });
  document.getElementById("outline-conclusion").value = "Restate thesis + summarise arguments + final reflection or call to action";

  const totalMarks = essayRubricCriteria.reduce((s, c) => s + (c.marks || 0), 0);
  assignmentMarks.value = totalMarks;
  assignmentTitle.value = assignmentTitle.value || `${subject} — ${essayType.charAt(0).toUpperCase() + essayType.slice(1)} Essay`;
  showToast(`AI generated essay rubric and outline for ${subject}`);
});

function showEssayBuilder() {
  document.getElementById("essay-builder").style.display = "";
  document.getElementById("questions-builder").style.display = "none";
  hideAllTypePanels();
}

function hideEssayBuilder() {
  document.getElementById("essay-builder").style.display = "none";
}

function resetEssayBuilder() {
  essayRubricCriteria = [];
  document.getElementById("essay-type").value = "argumentative";
  document.getElementById("essay-prompt").value = "";
  document.getElementById("essay-min-words").value = "300";
  document.getElementById("essay-max-words").value = "800";
  document.getElementById("essay-stages").value = "single";
  document.getElementById("essay-references").value = "";
  document.getElementById("essay-extra").value = "";
  document.getElementById("outline-intro").value = "";
  document.getElementById("outline-conclusion").value = "";
  document.getElementById("outline-body-list").innerHTML =
    '<input type="text" class="outline-body-input" placeholder="Body P1: Topic sentence + evidence + analysis" />' +
    '<input type="text" class="outline-body-input" placeholder="Body P2: Counter-argument or second point" />' +
    '<input type="text" class="outline-body-input" placeholder="Body P3: Supporting evidence or third point" />';
  document.getElementById("essay-rubric-list").innerHTML = "";
  document.getElementById("essay-total-marks").textContent = "0 marks";
}

// ── Type-specific panel logic ────────────────────────────────

function resetPracticalBuilder() {
  const el = (id) => document.getElementById(id);
  if (el("prac-aim")) el("prac-aim").value = "";
  if (el("prac-hypothesis")) el("prac-hypothesis").value = "";
  if (el("prac-method")) el("prac-method").value = "";
  if (el("prac-data-table")) el("prac-data-table").value = "yes";
  if (el("prac-graph")) el("prac-graph").value = "yes";
  if (el("prac-conclusion")) el("prac-conclusion").value = "";
  if (el("prac-safety")) el("prac-safety").value = "";
  if (el("prac-room")) el("prac-room").selectedIndex = 0;
}

function collectPracticalData() {
  return {
    aim: document.getElementById("prac-aim")?.value || "",
    hypothesis: document.getElementById("prac-hypothesis")?.value || "",
    method: document.getElementById("prac-method")?.value || "",
    dataTable: document.getElementById("prac-data-table")?.value || "yes",
    graph: document.getElementById("prac-graph")?.value || "yes",
    conclusion: document.getElementById("prac-conclusion")?.value || "",
    safety: document.getElementById("prac-safety")?.value || "",
    room: document.getElementById("prac-room")?.value || "",
  };
}

document.getElementById("ai-gen-prac-btn")?.addEventListener("click", () => {
  const subject = assignmentSubject.value;
  document.getElementById("prac-aim").value = `Investigate the effect of temperature on the rate of reaction in ${subject}`;
  document.getElementById("prac-hypothesis").value = "If temperature increases, then the rate of reaction will increase due to higher kinetic energy of particles";
  document.getElementById("prac-method").value = "Equipment: 250ml beakers, thermometer, stopwatch, hydrochloric acid, sodium thiosulfate\n\n1. Prepare 50ml sodium thiosulfate solution in a beaker\n2. Heat to target temperature (20°C, 30°C, 40°C, 50°C, 60°C)\n3. Add 10ml hydrochloric acid and start stopwatch\n4. Record time for cross beneath beaker to disappear\n5. Repeat each temperature 3 times for reliability";
  document.getElementById("prac-conclusion").value = "Analyse the relationship between temperature and reaction time. Discuss sources of error and suggest improvements.";
  document.getElementById("prac-safety").value = "Wear safety goggles and gloves. Handle acid with care. Ensure adequate ventilation.";
  assignmentTitle.value = assignmentTitle.value || `${subject} — Practical Investigation`;
  showToast(`AI generated practical template for ${subject}`);
});

function resetProjectBuilder() {
  const el = (id) => document.getElementById(id);
  if (el("proj-mode")) el("proj-mode").value = "individual";
  if (el("proj-group-size")) el("proj-group-size").value = "4";
  if (el("proj-deliverables")) el("proj-deliverables").value = "";
  const list = document.getElementById("proj-milestones");
  if (list) {
    list.innerHTML = [
      ["Proposal / Topic Selection", ""],
      ["Research & Data Collection", ""],
      ["Draft / Prototype", ""],
      ["Final Submission & Presentation", ""],
    ].map((m, i) =>
      `<div class="milestone-row"><span class="milestone-num">${i + 1}</span><input type="text" class="milestone-input" placeholder="${m[0]}" /><input type="date" class="milestone-date" /></div>`
    ).join("");
  }
}

function collectProjectData() {
  const milestones = Array.from(document.querySelectorAll("#proj-milestones .milestone-row")).map((row) => ({
    name: row.querySelector(".milestone-input")?.value || "",
    date: row.querySelector(".milestone-date")?.value || "",
  })).filter((m) => m.name);
  return {
    mode: document.getElementById("proj-mode")?.value || "individual",
    groupSize: Number(document.getElementById("proj-group-size")?.value) || 4,
    milestones,
    deliverables: document.getElementById("proj-deliverables")?.value || "",
  };
}

document.getElementById("add-milestone-btn")?.addEventListener("click", () => {
  const list = document.getElementById("proj-milestones");
  const count = list.querySelectorAll(".milestone-row").length + 1;
  const row = document.createElement("div");
  row.className = "milestone-row";
  row.innerHTML = `<span class="milestone-num">${count}</span><input type="text" class="milestone-input" placeholder="Milestone ${count}" /><input type="date" class="milestone-date" />`;
  list.appendChild(row);
});

function collectPresentationData() {
  const selectedFiles = Array.from(document.getElementById("pres-files")?.selectedOptions || []).map((o) => o.text);
  return {
    format: document.getElementById("pres-format")?.value || "live",
    minMinutes: Number(document.getElementById("pres-min-min")?.value) || 3,
    maxMinutes: Number(document.getElementById("pres-max-min")?.value) || 8,
    acceptedFiles: selectedFiles,
    criteria: document.getElementById("pres-criteria")?.value || "",
    topic: document.getElementById("pres-topic")?.value || "",
  };
}

function resetPresentationBuilder() {
  const el = (id) => document.getElementById(id);
  if (el("pres-format")) el("pres-format").value = "live";
  if (el("pres-min-min")) el("pres-min-min").value = "3";
  if (el("pres-max-min")) el("pres-max-min").value = "8";
  if (el("pres-criteria")) el("pres-criteria").value = "";
  if (el("pres-topic")) el("pres-topic").value = "";
  const filesEl = document.getElementById("pres-files");
  if (filesEl) Array.from(filesEl.options).forEach((o, i) => { o.selected = i < 2; });
}

function collectExamData() {
  return {
    examType: document.getElementById("exam-type")?.value || "class_test",
    duration: Number(document.getElementById("exam-duration")?.value) || 120,
    openTime: document.getElementById("exam-open")?.value || "",
    closeTime: document.getElementById("exam-close")?.value || "",
    materials: document.getElementById("exam-materials")?.value || "closed",
    lock: document.getElementById("exam-lock")?.value || "auto",
    shuffle: document.getElementById("exam-shuffle")?.checked || false,
    onePage: document.getElementById("exam-one-page")?.checked || false,
    noBack: document.getElementById("exam-no-back")?.checked || false,
    monitor: document.getElementById("exam-monitor")?.checked || false,
  };
}

function resetExamBuilder() {
  const el = (id) => document.getElementById(id);
  if (el("exam-type")) el("exam-type").value = "class_test";
  if (el("exam-duration")) el("exam-duration").value = "120";
  if (el("exam-open")) el("exam-open").value = "";
  if (el("exam-close")) el("exam-close").value = "";
  if (el("exam-materials")) el("exam-materials").value = "closed";
  if (el("exam-lock")) el("exam-lock").value = "auto";
  if (el("exam-shuffle")) el("exam-shuffle").checked = false;
  if (el("exam-one-page")) el("exam-one-page").checked = false;
  if (el("exam-no-back")) el("exam-no-back").checked = false;
  if (el("exam-monitor")) el("exam-monitor").checked = false;
}

function collectReflectionData() {
  const prompts = Array.from(document.querySelectorAll("#reflect-prompts .reflect-prompt-input")).map((el) => el.value).filter(Boolean);
  return {
    reflectionType: document.getElementById("reflect-type")?.value || "learning",
    frequency: document.getElementById("reflect-freq")?.value || "once",
    prompts,
    visibility: document.getElementById("reflect-visibility")?.value || "teacher",
    minWords: Number(document.getElementById("reflect-min-words")?.value) || 100,
  };
}

function resetReflectionBuilder() {
  const el = (id) => document.getElementById(id);
  if (el("reflect-type")) el("reflect-type").value = "learning";
  if (el("reflect-freq")) el("reflect-freq").value = "once";
  if (el("reflect-visibility")) el("reflect-visibility").value = "teacher";
  if (el("reflect-min-words")) el("reflect-min-words").value = "100";
  const list = document.getElementById("reflect-prompts");
  if (list) {
    list.innerHTML = [
      "What did I learn this week that surprised me?",
      "What concept do I still find challenging?",
      "What strategy will I try differently next time?",
    ].map((p, i) =>
      `<div class="reflect-prompt-row"><span>${i + 1}.</span><input type="text" class="reflect-prompt-input" placeholder="${p}" /></div>`
    ).join("");
  }
}

document.getElementById("add-reflect-prompt")?.addEventListener("click", () => {
  const list = document.getElementById("reflect-prompts");
  const count = list.querySelectorAll(".reflect-prompt-row").length + 1;
  const row = document.createElement("div");
  row.className = "reflect-prompt-row";
  row.innerHTML = `<span>${count}.</span><input type="text" class="reflect-prompt-input" placeholder="Prompt ${count}" />`;
  list.appendChild(row);
});

document.getElementById("ai-gen-reflect-btn")?.addEventListener("click", () => {
  const subject = assignmentSubject.value;
  const prompts = [
    `What was the most important concept I learned in ${subject} this week?`,
    "How does this connect to something I already knew?",
    "What did I find most challenging, and what steps did I take to overcome it?",
    "How confident am I in applying this knowledge to a new problem? Why?",
    "What is one specific goal I will set for next week's learning?",
  ];
  const list = document.getElementById("reflect-prompts");
  list.innerHTML = prompts.map((p, i) =>
    `<div class="reflect-prompt-row"><span>${i + 1}.</span><input type="text" class="reflect-prompt-input" value="${escAttr(p)}" /></div>`
  ).join("");
  assignmentTitle.value = assignmentTitle.value || `${subject} — Learning Reflection`;
  showToast(`AI generated ${prompts.length} reflection prompts for ${subject}`);
});

document.querySelector("#ai-generate").addEventListener("click", () => {
  const subject = document.querySelector("#ai-subject").value;
  const question = document.querySelector("#ai-question").value.trim() || "I need help reviewing today’s weak points.";
  const prompt = question.length > 58 ? `${question.slice(0, 58)}...` : question;
  appState.aiLogs.push({
    id: `ai${Date.now()}`,
    time: new Date().toLocaleString("en-SG", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }),
    student: "Amanda Lee",
    subject,
    prompt,
    outcome: "Logged",
  });
  appState.evidence.push({
    id: `e${Date.now()}`,
    type: "AI Logs",
    item: `${subject} tutor interaction`,
    owner: "System",
    status: "Complete",
  });
  saveState();
  aiAnswer.classList.add("active");
  aiAnswer.innerHTML = `<strong>${subject} Tutor Guidance</strong><br />Start by identifying the concept being tested, then solve one worked example step by step. Based on your question: “${question}”, I would generate a short explanation, 3 scaffolded practice questions, and one reflection prompt for your learning log.`;
  renderPortal(currentRole, currentModule);
});

primaryList.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const idx = Number(button.dataset.id);
  const action = button.dataset.action;

  if (action === "toggle-attendance") {
    const item = appState.attendance[idx];
    item.status = item.status === "Present" ? "Absent" : "Present";
    showToast(`Attendance changed to ${item.status}`);
  }
  if (action === "grade-assignment") {
    const assignments = visibleAssignmentsForRole("teacher");
    const assignment = assignments[idx];
    if (assignment) openGradingModal(assignment);
    return;
  }
  if (action === "advance-assignment") {
    const moduleName = portalData[currentRole].nav[currentModule];
    const visibleAssignments = moduleName.includes("Assignment") && currentRole === "student"
      ? appState.assignments.filter((entry) => entry.scope === "Class" || entry.student === "Amanda Lee")
      : appState.assignments;
    const visibleItem = visibleAssignments[idx];
    const item = appState.assignments.find((entry) => entry.id === visibleItem?.id);
    if (!item) return;
    const flow = ["Draft", "Due", "Submitted", "Marked"];
    item.status = flow[(flow.indexOf(item.status) + 1) % flow.length] || "Submitted";
    showToast(`Assignment is now ${item.status}`);
  }
  if (action === "open-submission") {
    const moduleName = portalData[currentRole].nav[currentModule];
    const visibleAssignments = moduleName.includes("Assignment") && currentRole === "student"
      ? visibleAssignmentsForRole("student")
      : appState.assignments;
    const visibleItem = visibleAssignments[idx];
    const item = appState.assignments.find((entry) => entry.id === visibleItem?.id);
    if (item && typeof openSubmissionModal === "function") {
      openSubmissionModal(item);
    } else {
      showToast("Cannot open this assignment");
    }
    return;
  }
  if (action === "submit-assignment") {
    const moduleName = portalData[currentRole].nav[currentModule];
    const visibleAssignments = moduleName.includes("Assignment") && currentRole === "student"
      ? visibleAssignmentsForRole("student")
      : [];
    const visibleItem = visibleAssignments[idx];
    const item = appState.assignments.find((entry) => entry.id === visibleItem?.id);
    if (await submitAssignmentRecord(item)) {
      if (!cloudConfigured()) showToast("Assignment submitted and linked");
    } else {
      showToast("This assignment cannot be submitted");
    }
  }
  if (action === "submit-wace-result" || action === "approve-wace-result") {
    const aggregates = waceAggregates();
    const row = aggregates[idx];
    const item = appState.waceResults.find((result) => result.id === row?.id);
    const outline = outlineById(item?.outlineId);
    if (item) {
      if (action === "submit-wace-result") item.status = "Director review";
      if (action === "approve-wace-result" && item.status === "Approved") item.released = true;
      else if (action === "approve-wace-result") item.status = "Approved";
      appState.evidence.push({
        id: `e${Date.now()}`,
        type: "Assessment",
        item: `${outline?.year || "WACE"} ${outline?.course || "course"} school mark ${item.released ? "released" : item.status}`,
        owner: (currentRole === "admin" || currentRole === "academic_director") ? "Academic Director" : outline?.teacher || "Teacher",
        status: "Complete",
      });
      showToast(item.released ? "WACE school mark released" : `WACE result is now ${item.status}`);
    }
  }
  if (action === "resolve-timetable-conflict") {
    const studentRows = timetableStudents();
    const targetStudent = studentRows[idx]?.student;
    const conflict = appState.studentTimetables.find((item) => item.student === targetStudent && item.status === "Conflict");
    if (conflict) {
      conflict.time = "15:20";
      conflict.status = "Scheduled";
      appState.evidence.push({
        id: `e${Date.now()}`,
        type: "Timetable",
        item: `${targetStudent} timetable conflict resolved`,
        owner: "Academic Director",
        status: "Complete",
      });
      showToast("Timetable conflict resolved");
    }
  }
  if (action === "close-risk") {
    const item = appState.risks[idx];
    if (item) item.status = "Closed";
    showToast("Risk closed");
  }
  if (action === "resolve-evidence") {
    const item = appState.evidence[idx];
    if (item) item.status = "Complete";
    showToast("Evidence resolved");
  }

  renderPortal(currentRole, currentModule);
});

aiModal.addEventListener("click", (event) => {
  if (event.target === aiModal) {
    aiModal.classList.remove("active");
    aiModal.setAttribute("aria-hidden", "true");
  }
});

qrModal.addEventListener("click", (event) => {
  if (event.target === qrModal) {
    qrModal.classList.remove("active");
    qrModal.setAttribute("aria-hidden", "true");
  }
});

assignmentModal.addEventListener("click", (event) => {
  if (event.target === assignmentModal) {
    closeAssignmentModal();
  }
});

function hashText(text) {
  let hash = 2166136261;
  for (let i = 0; i < text.length; i += 1) {
    hash ^= text.charCodeAt(i);
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
  }
  return hash >>> 0;
}

function createSecureToken(prefix = "qr") {
  const bytes = new Uint8Array(16);
  if (window.crypto && window.crypto.getRandomValues) {
    window.crypto.getRandomValues(bytes);
  } else {
    bytes.forEach((_, index) => { bytes[index] = Math.floor(Math.random() * 256); });
  }
  return `${prefix}_${Array.from(bytes).map((byte) => byte.toString(16).padStart(2, "0")).join("")}`;
}

function drawFinder(ctx, x, y, cell) {
  ctx.fillStyle = "#111";
  ctx.fillRect(x * cell, y * cell, cell * 7, cell * 7);
  ctx.fillStyle = "#fff";
  ctx.fillRect((x + 1) * cell, (y + 1) * cell, cell * 5, cell * 5);
  ctx.fillStyle = "#111";
  ctx.fillRect((x + 2) * cell, (y + 2) * cell, cell * 3, cell * 3);
}

function drawPrototypeQr(text) {
  if (window.QRCode && typeof window.QRCode.toCanvas === "function") {
    window.QRCode.toCanvas(qrCanvas, text, { width: 220, margin: 2 }, (error) => {
      if (error) console.warn("Standard QR rendering failed, using fallback pattern.", error);
    });
    return;
  }
  const ctx = qrCanvas.getContext("2d");
  const size = 29;
  const cell = Math.floor(qrCanvas.width / size);
  const offset = Math.floor((qrCanvas.width - cell * size) / 2);
  const seed = hashText(text);

  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, qrCanvas.width, qrCanvas.height);
  ctx.save();
  ctx.translate(offset, offset);
  drawFinder(ctx, 1, 1, cell);
  drawFinder(ctx, 21, 1, cell);
  drawFinder(ctx, 1, 21, cell);
  ctx.fillStyle = "#111";

  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const inFinder =
        (x >= 1 && x <= 7 && y >= 1 && y <= 7) ||
        (x >= 21 && x <= 27 && y >= 1 && y <= 7) ||
        (x >= 1 && x <= 7 && y >= 21 && y <= 27);
      if (inFinder) continue;
      const bit = ((seed >> ((x + y * 3) % 24)) ^ (x * 31 + y * 17 + seed)) & 1;
      if (bit && (x + y) % 3 !== 0) ctx.fillRect(x * cell, y * cell, cell, cell);
    }
  }

  ctx.restore();
}

function generateQrSession() {
  const className = document.querySelector("#qr-class").value;
  const session = document.querySelector("#qr-session").value;
  const id = createSecureToken("qr");
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000);
  const signature = hashText(`${id}:${className}:${session}:${expiresAt.toISOString()}`).toString(16);
  const url = `${window.location.origin}${window.location.pathname}?checkin=${id}&sig=${signature}`;
  const createdAt = new Date().toLocaleString("en-SG", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
  const record = { id, className, session, createdAt, expiresAt: expiresAt.toISOString(), signature, status: "Active", url };

  appState.qrSessions.unshift(record);
  appState.evidence.push({
    id: `e${Date.now()}`,
    type: "Attendance",
    item: `${className} ${session} QR generated`,
    owner: "System",
    status: "Complete",
  });
  saveState();
  drawPrototypeQr(url);
  qrTitle.textContent = `${className} · ${session}`;
  qrLink.textContent = `${url} · expires ${expiresAt.toLocaleTimeString("en-SG", { hour: "2-digit", minute: "2-digit" })}`;
  showToast("Attendance QR generated");
  renderPortal(currentRole, currentModule);
}

document.querySelector("#qr-generate").addEventListener("click", generateQrSession);

renderPortal(currentRole, currentModule);

// ── Grading Modal ──────────────────────────────────────────
const gradingModal = document.getElementById("grading-modal");
let gradingState = { assignment: null, students: [] };

function openGradingModal(assignment) {
  gradingState.assignment = assignment;
  gradingState.students = generateStudentAnswers(assignment);

  document.getElementById("grading-title").textContent = `Grade: ${assignment.title}`;
  renderGradingSummary();
  renderGradingBody();
  gradingModal.classList.add("active");
  gradingModal.setAttribute("aria-hidden", "false");
}

function closeGradingModal() {
  gradingModal.classList.remove("active");
  gradingModal.setAttribute("aria-hidden", "true");
}

document.getElementById("grading-close")?.addEventListener("click", closeGradingModal);
document.getElementById("grading-cancel")?.addEventListener("click", closeGradingModal);

function generateStudentAnswers(assignment) {
  const questions = assignment.questions || [];
  if (!questions.length) return [];
  const studentNames = assignment.scope === "Class"
    ? [...new Set(appState.assignments.map((a) => a.student).filter(Boolean))]
    : [assignment.student].filter(Boolean);
  if (!studentNames.length) studentNames.push("Amanda Lee", "Jason Ng", "Priya Shah");

  return studentNames.map((name) => {
    const answers = questions.map((q) => {
      const correct = Math.random() > 0.3;
      if (q.type === "mcq") {
        return { answer: correct ? q.correctAnswer : (q.correctAnswer + 1 + Math.floor(Math.random() * 3)) % 4, scored: null };
      }
      if (q.type === "multi") {
        const ca = q.correctAnswers || [];
        return { answer: correct ? [...ca] : ca.length ? [ca[0]] : [0], scored: null };
      }
      if (q.type === "fill") {
        return { answer: correct ? q.answer : "wrong answer", scored: null };
      }
      if (q.type === "reading") {
        return { answer: (q.subQuestions || []).map(() => correct ? "Correct response" : "Partial answer"), scored: null };
      }
      return { answer: correct ? "Full correct response with reasoning" : "Incomplete answer", scored: null };
    });
    return { name, answers, total: null, graded: false };
  });
}

function autoGradeObjective() {
  const questions = gradingState.assignment?.questions || [];
  gradingState.students.forEach((student) => {
    student.answers.forEach((a, qi) => {
      const q = questions[qi];
      if (!q) return;
      if (q.type === "mcq") {
        a.scored = a.answer === q.correctAnswer ? q.marks : 0;
      } else if (q.type === "multi") {
        const ca = new Set(q.correctAnswers || []);
        const sa = new Set(a.answer || []);
        const correct = ca.size === sa.size && [...ca].every((x) => sa.has(x));
        const partial = [...sa].some((x) => ca.has(x));
        a.scored = correct ? q.marks : partial ? Math.round(q.marks * 0.5) : 0;
      } else if (q.type === "fill") {
        const correctAns = (q.answer || "").toLowerCase().split(/[\/|,]/).map((s) => s.trim());
        const studentAns = (a.answer || "").toLowerCase().trim();
        a.scored = correctAns.some((c) => studentAns.includes(c)) ? q.marks : 0;
      }
    });
    recalcStudentTotal(student, questions);
  });
  renderGradingSummary();
  renderGradingBody();
  showToast("Objective questions auto-graded (MCQ, Multi-select, Fill-in)");
}

function aiGradeAll() {
  const questions = gradingState.assignment?.questions || [];
  gradingState.students.forEach((student) => {
    student.answers.forEach((a, qi) => {
      const q = questions[qi];
      if (!q) return;
      if (a.scored !== null) return;
      if (q.type === "reading") {
        a.scored = Math.round(q.marks * (0.5 + Math.random() * 0.5));
      } else if (q.type === "open") {
        a.scored = Math.round(q.marks * (0.4 + Math.random() * 0.6));
      } else if (a.scored === null) {
        a.scored = Math.round(q.marks * (0.5 + Math.random() * 0.5));
      }
    });
    recalcStudentTotal(student, questions);
  });
  renderGradingSummary();
  renderGradingBody();
  showToast("AI grading complete for all subjective questions");
}

function recalcStudentTotal(student, questions) {
  const allScored = student.answers.every((a) => a.scored !== null);
  student.total = student.answers.reduce((s, a) => s + (a.scored || 0), 0);
  student.graded = allScored;
}

function renderGradingSummary() {
  const questions = gradingState.assignment?.questions || [];
  const totalPossible = questions.reduce((s, q) => s + (q.marks || 0), 0);
  const gradedCount = gradingState.students.filter((s) => s.graded).length;
  const avgScore = gradedCount ? Math.round(gradingState.students.filter((s) => s.graded).reduce((s, st) => s + st.total, 0) / gradedCount) : "—";
  const highest = gradedCount ? Math.max(...gradingState.students.filter((s) => s.graded).map((s) => s.total)) : "—";

  document.getElementById("grading-summary").innerHTML = `
    <div class="grade-stat"><strong>${gradingState.students.length}</strong><span>Students</span></div>
    <div class="grade-stat"><strong>${gradedCount}/${gradingState.students.length}</strong><span>Graded</span></div>
    <div class="grade-stat"><strong>${totalPossible}</strong><span>Total Marks</span></div>
    <div class="grade-stat"><strong>${avgScore}</strong><span>Average</span></div>
    <div class="grade-stat"><strong>${highest}</strong><span>Highest</span></div>
    <div class="grade-stat"><strong>${questions.length}</strong><span>Questions</span></div>
  `;
}

function renderGradingBody() {
  const questions = gradingState.assignment?.questions || [];
  const totalPossible = questions.reduce((s, q) => s + (q.marks || 0), 0);

  document.getElementById("grading-body").innerHTML = gradingState.students.map((student, si) => {
    const scoreDisplay = student.graded ? `${student.total}/${totalPossible}` : student.total !== null ? `${student.total}/…` : "—";
    const scoreClass = student.graded ? "graded" : "pending";

    const rows = questions.map((q, qi) => {
      const a = student.answers[qi];
      const studentAns = formatStudentAnswer(q, a);
      const correctAns = formatCorrectAnswer(q);
      const scoreVal = a.scored !== null ? `${a.scored}/${q.marks}` : "—";
      const scoreClass = a.scored === q.marks ? "full" : a.scored === 0 ? "zero" : a.scored !== null ? "partial" : "";
      return `<div class="grade-q-row">
        <span class="grade-q-num">Q${qi + 1}</span>
        <span>${correctAns}</span>
        <span class="${a.scored === q.marks ? "grade-q-correct" : a.scored === 0 ? "grade-q-wrong" : ""}">${studentAns}</span>
        <span class="grade-q-score ${scoreClass}">${scoreVal}</span>
      </div>`;
    }).join("");

    return `<div class="grade-student-card">
      <div class="grade-student-head" data-student="${si}">
        <strong>${student.name}</strong>
        <span class="grade-student-score ${scoreClass}">${scoreDisplay}</span>
      </div>
      <div class="grade-student-body" id="grade-body-${si}">
        <div class="grade-q-row" style="font-weight:700;color:var(--muted);border-bottom:2px solid var(--line)">
          <span>#</span><span>Correct Answer</span><span>Student Answer</span><span style="text-align:center">Score</span>
        </div>
        ${rows}
      </div>
    </div>`;
  }).join("");
}

function formatStudentAnswer(q, a) {
  if (q.type === "mcq") return String.fromCharCode(65 + (a.answer ?? 0));
  if (q.type === "multi") return (a.answer || []).map((i) => String.fromCharCode(65 + i)).join(", ") || "—";
  if (q.type === "fill") return escHtml(String(a.answer || "—"));
  if (q.type === "reading") return (a.answer || []).map((r, i) => `(${i + 1}) ${escHtml(String(r).substring(0, 30))}`).join(" ");
  return escHtml(String(a.answer || "—").substring(0, 50));
}

function formatCorrectAnswer(q) {
  if (q.type === "mcq") return `${String.fromCharCode(65 + (q.correctAnswer ?? 0))}: ${escHtml((q.options || [])[q.correctAnswer] || "").substring(0, 40)}`;
  if (q.type === "multi") return (q.correctAnswers || []).map((i) => String.fromCharCode(65 + i)).join(", ");
  if (q.type === "fill") return escHtml(q.answer || "—");
  if (q.type === "reading") return `${(q.subQuestions || []).length} sub-questions`;
  return escHtml((q.answer || "—").substring(0, 40));
}

document.getElementById("grading-body")?.addEventListener("click", (e) => {
  const head = e.target.closest(".grade-student-head");
  if (head) {
    const si = head.dataset.student;
    const body = document.getElementById(`grade-body-${si}`);
    if (body) body.classList.toggle("open");
  }
});

document.getElementById("grading-auto-btn")?.addEventListener("click", autoGradeObjective);
document.getElementById("grading-ai-btn")?.addEventListener("click", aiGradeAll);

// ── Auth UI ──────────────────────────────────────────────

const loginModal = document.getElementById("login-modal");
const loginClose = document.getElementById("login-close");
const loginForm = document.getElementById("login-form");
const loginInfo = document.getElementById("login-info");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginSubmit = document.getElementById("login-submit");
const loginSignout = document.getElementById("login-signout");
const loginError = document.getElementById("login-error");
const loginUserName = document.getElementById("login-user-name");
const loginUserRole = document.getElementById("login-user-role");
const loginHeader = document.getElementById("login-header");
const authButton = document.getElementById("auth-button");

function updateAuthButton(session) {
  if (!authButton) return;
  if (session) {
    const meta = session.user?.user_metadata;
    authButton.textContent = meta?.full_name || session.user?.email || "Signed in";
  } else {
    authButton.textContent = "Sign in";
  }
}

function showLoginModal() {
  const client = window.AcademicDataAdapter?.createAcademicClient?.();
  if (!client) { showToast("Supabase not configured"); return; }

  client.auth.getSession().then(({ data }) => {
    if (data.session) {
      loginForm.style.display = "none";
      loginInfo.style.display = "";
      loginHeader.textContent = "Signed in";
      loginUserName.textContent = data.session.user.user_metadata?.full_name || data.session.user.email;
      loginUserRole.textContent = "Role: " + (currentRole || "loading...");
    } else {
      loginForm.style.display = "";
      loginInfo.style.display = "none";
      loginHeader.textContent = "Sign in to BCI Portal";
      loginError.textContent = "";
    }
  });
  loginModal.classList.add("active");
}

if (authButton) authButton.addEventListener("click", showLoginModal);
if (loginClose) loginClose.addEventListener("click", () => loginModal.classList.remove("active"));
loginModal.addEventListener("click", (event) => {
  if (event.target === loginModal) loginModal.classList.remove("active");
});

if (loginSubmit) loginSubmit.addEventListener("click", async () => {
  const email = loginEmail.value.trim();
  const password = loginPassword.value;
  if (!email || !password) { loginError.textContent = "Please enter email and password"; return; }

  loginSubmit.disabled = true;
  loginSubmit.textContent = "Signing in...";
  loginError.textContent = "";

  try {
    const client = window.AcademicDataAdapter.createAcademicClient();
    const { data, error } = await client.auth.signInWithPassword({ email, password });
    if (error) throw error;

    loginModal.classList.remove("active");
    updateAuthButton(data.session);
    showToast("Signed in as " + (data.user?.user_metadata?.full_name || email));
    await bootstrapCloudRole();
  } catch (err) {
    loginError.textContent = err.message || "Sign in failed";
    loginError.style.color = "var(--danger, #e53e3e)";
  } finally {
    loginSubmit.disabled = false;
    loginSubmit.textContent = "Sign in";
  }
});

if (loginSignout) loginSignout.addEventListener("click", async () => {
  try {
    const client = window.AcademicDataAdapter.createAcademicClient();
    await client.auth.signOut();
    authLockedRole = false;
    roleSelect.disabled = false;
    appState.cloud = null;
    updateAuthButton(null);
    loginModal.classList.remove("active");
    saveState();
    showToast("Signed out");
    renderPortal(currentRole, currentModule);
  } catch (err) {
    showToast("Sign out failed: " + err.message);
  }
});

// Check existing session on load
(async () => {
  const client = window.AcademicDataAdapter?.createAcademicClient?.();
  if (!client) return;
  const { data } = await client.auth.getSession();
  if (data.session) {
    updateAuthButton(data.session);
    await bootstrapCloudRole();
  }
})();

// ── Admin: Add Student / Teacher ─────────────────────────

const addStudentModal = document.getElementById("add-student-modal");
const addTeacherModal = document.getElementById("add-teacher-modal");

async function loadCloudLists() {
  try {
    const [students, teachers] = await Promise.all([
      window.AcademicDataAdapter.listStudents(),
      window.AcademicDataAdapter.listTeachers(),
    ]);
    appState._cloudStudents = students;
    appState._cloudTeachers = teachers;
  } catch (e) {
    console.warn("Failed to load cloud lists:", e);
  }
}

function openAddStudentModal() {
  document.getElementById("add-student-name").value = "";
  document.getElementById("add-student-email").value = "";
  document.getElementById("add-student-password").value = "BCI2025test";
  document.getElementById("add-parent-name").value = "";
  document.getElementById("add-parent-email").value = "";
  document.getElementById("add-parent-password").value = "BCI2025parent";
  document.getElementById("add-parent-phone").value = "";
  document.getElementById("add-student-error").textContent = "";
  addStudentModal.classList.add("active");
}

async function openAddTeacherModal() {
  document.getElementById("add-teacher-name").value = "";
  document.getElementById("add-teacher-email").value = "";
  document.getElementById("add-teacher-password").value = "BCI2025test";
  document.getElementById("add-teacher-error").textContent = "";
  const subjectsGrid = document.getElementById("add-teacher-subjects");
  if (subjectsGrid) {
    if (!appState._cloudSubjects?.length) {
      try {
        appState._cloudSubjects = await window.AcademicDataAdapter.listSubjects();
      } catch { /* cloud unavailable */ }
    }
    const subjects = appState._cloudSubjects?.length
      ? appState._cloudSubjects
      : BCI_APPROVED_SUBJECTS.map((s) => ({ id: s.code, name: s.name }));
    subjectsGrid.innerHTML = subjects.map((s) =>
      `<label><input type="checkbox" value="${s.id}" /> ${s.name}</label>`
    ).join("");
  }
  addTeacherModal.classList.add("active");
}

document.getElementById("add-student-close")?.addEventListener("click", () => addStudentModal.classList.remove("active"));
document.getElementById("add-teacher-close")?.addEventListener("click", () => addTeacherModal.classList.remove("active"));
addStudentModal?.addEventListener("click", (e) => { if (e.target === addStudentModal) addStudentModal.classList.remove("active"); });
addTeacherModal?.addEventListener("click", (e) => { if (e.target === addTeacherModal) addTeacherModal.classList.remove("active"); });

document.getElementById("add-student-submit")?.addEventListener("click", async () => {
  const name = document.getElementById("add-student-name").value.trim();
  const email = document.getElementById("add-student-email").value.trim();
  const password = document.getElementById("add-student-password").value;
  const year = document.getElementById("add-student-year").value;
  const parentName = document.getElementById("add-parent-name").value.trim();
  const parentEmail = document.getElementById("add-parent-email").value.trim();
  const parentPassword = document.getElementById("add-parent-password").value;
  const parentPhone = document.getElementById("add-parent-phone").value.trim();
  const errorEl = document.getElementById("add-student-error");
  if (!name || !email) { errorEl.textContent = "Name and email are required"; return; }

  const btn = document.getElementById("add-student-submit");
  btn.disabled = true;
  btn.textContent = "Creating...";
  try {
    const result = await window.AcademicDataAdapter.adminCreateStudent({
      email, password, fullName: name, yearLevel: year,
      parentName, parentEmail, parentPassword, parentPhone,
    });
    addStudentModal.classList.remove("active");
    const msg = result?.parent_status ? `Student ${name} + parent created` : `Student ${name} created`;
    showToast(msg);
    await loadCloudLists();
    renderPortal(currentRole, currentModule);
  } catch (err) {
    errorEl.textContent = err.message || "Failed to create student";
    errorEl.style.color = "var(--danger, #e53e3e)";
  } finally {
    btn.disabled = false;
    btn.textContent = "Create student + parent accounts";
  }
});

document.getElementById("add-teacher-submit")?.addEventListener("click", async () => {
  const name = document.getElementById("add-teacher-name").value.trim();
  const email = document.getElementById("add-teacher-email").value.trim();
  const password = document.getElementById("add-teacher-password").value;
  const checkedBoxes = document.querySelectorAll("#add-teacher-subjects input:checked");
  const subjectIds = Array.from(checkedBoxes).map((cb) => cb.value);
  const subjectNames = Array.from(checkedBoxes).map((cb) => cb.parentElement.textContent.trim());
  const dept = subjectNames.join(", ");
  const errorEl = document.getElementById("add-teacher-error");
  if (!name || !email) { errorEl.textContent = "Name and email are required"; return; }
  if (subjectIds.length === 0) { errorEl.textContent = "Please select at least one subject"; return; }

  const btn = document.getElementById("add-teacher-submit");
  btn.disabled = true;
  btn.textContent = "Creating...";
  try {
    await window.AcademicDataAdapter.adminCreateTeacher({ email, password, fullName: name, department: dept, subjectIds });
    addTeacherModal.classList.remove("active");
    showToast(`Teacher ${name} created`);
    await loadCloudLists();
    renderPortal(currentRole, currentModule);
  } catch (err) {
    errorEl.textContent = err.message || "Failed to create teacher";
    errorEl.style.color = "var(--danger, #e53e3e)";
  } finally {
    btn.disabled = false;
    btn.textContent = "Create teacher account";
  }
});

