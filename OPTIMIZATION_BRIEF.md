# BCI Academic Portal — Optimization Brief for Claude Code

> **如何使用这份文档**
> 把这个文件放到 repo 根目录，在 Claude Code 里说：
> > "Read OPTIMIZATION_BRIEF.md and start with Priority 0. Show me the verification result, then propose a plan for Priority 1 before writing any code."

---

## 0. Context

**Repo**: `wysin808-dot/bci-academic-portal`
**Stack**: Vanilla HTML/CSS/JS prototype（无打包工具），Supabase SDK 已加载，Vercel 已配置
**Current data source**: `defaultRecords + localStorage`（按 README）
**Target users**: BCI WACE Singapore——真实运营的国际高中，**不是 demo**，需要承载 EduTrust 审计要求
**System role**: AI-Powered International High School Academic OS（不是招生 CRM）

**关键文件清单**
- `index.html` — 600 行，单页，所有 modal 都在这里
- `app.js` — 主逻辑，77% 代码量都在这里（需要拆分）
- `config.js` — Supabase 配置
- `data-adapter.js` — Supabase 读写适配层（按 README 还没全部接上）
- `docs/supabase-schema.sql` — 完整 schema 设计
- `docs/supabase-setup.md` — 部署文档

**Working agreement（必须遵守）**
1. 每改一个文件，先运行 `python3 -m http.server 4180 --bind 127.0.0.1` 本地预览验证
2. 不要把 Supabase 真实 anon key / service key 提交到 `config.js`——用环境变量或占位符
3. 改 `app.js` 之前先看是否能拆模块，不要让单文件继续膨胀
4. 每完成一个 Priority 提交一次 commit，commit message 写清楚动了什么
5. 用户内容渲染**全部用 `textContent` 或 `escape`**，不要用 innerHTML，避免 XSS
6. 学生提交、教师评语这些用户输入字段，落库前必须 trim + 长度校验

---

## Priority 0 — 现状自查（先做这个，5 分钟）

在动任何代码之前，**先回答这五个问题**，把答案以 markdown 表格形式输出给我看：

| 检查项 | 命令 / 方法 | 结果 |
|---|---|---|
| Supabase URL 是否真实配置 | `cat config.js \| head -30` | ✅/❌ |
| `data-adapter.js` 实现了哪几张表的 CRUD | `grep -E "(from|insert\|update\|delete\|select)" data-adapter.js` | 列出表名 |
| `app.js` 哪些地方还在用 localStorage | `grep -n "localStorage" app.js` | 列出行号 |
| `app.js` 哪些地方已经在用 Supabase | `grep -n "supabase\|dataAdapter" app.js` | 列出行号 |
| `assignment_submissions` 表是否已接 | 看 `data-adapter.js` 是否有 `submitAssignment` 或类似方法 | ✅/❌ |

**输出后等待用户确认，再进 Priority 1。**

---

## Priority 1 — 学生提交闭环（最高优先级）

### 问题
`index.html` 里只有 `assignment-modal`（教师创建）和 `grading-modal`（教师批改），**没有学生提交作业的独立 modal**。教师端已经支持 Essay 三阶段（Outline → Draft → Final），但学生侧怎么走这三阶段没有 UI 体现。这是系统最大的功能阻断。

### 要做的事

**1.1 在 `index.html` 新增 `submission-modal`**

结构要求：
```html
<div class="modal" id="submission-modal" aria-hidden="true">
  <div class="modal-card modal-card-wide">
    <!-- header: 显示作业标题、科目、due time 倒计时 -->
    <!-- left col: 作业说明（只读）、附件（教师上传的资源） -->
    <!-- right col: 学生作答区 -->
    <!--   - MCQ/Multi-select/Fill-blank: 渲染交互题目 -->
    <!--   - Essay: textarea + 字数计数 + 阶段切换 tab(Outline/Draft/Final) -->
    <!--   - 文件上传区(支持 PDF/DOCX/JPG/PNG) -->
    <!-- footer: Save Draft / Submit / Submit Late(if late) -->
  </div>
</div>
```

样式参考已有的 `assignment-modal`，复用 `.modal`、`.modal-card-wide`、`.form-grid`、`.attach-zone` 这些 class。

**1.2 在 `app.js` 实现以下函数**

- `openSubmissionModal(assignmentId, studentId)` — 打开 modal，载入作业内容
- `renderQuestionForStudent(question)` — 根据题型渲染不同的作答控件
- `autoSaveDraft()` — 学生输入时每 10 秒自动存草稿（先存 localStorage，后续接 Supabase）
- `submitAssignment(payload)` — 提交，调用 `dataAdapter.submitAssignment`
- `getRemainingTime(dueAt)` — 返回 `{days, hours, minutes, isLate}`，用于倒计时

**1.3 在 `data-adapter.js` 新增方法**

```javascript
async function submitAssignment({
  assignment_id,
  student_id,
  stage,            // 'outline' | 'draft' | 'final' | 'single'
  content,          // 学生作答 JSON
  attachments,      // 文件 URL 数组
  submitted_at,     // ISO timestamp
  is_late           // boolean
}) {
  // 写入 assignment_submissions 表
  // 同时写一条 evidence_items（EduTrust 证据链，见 Priority 3）
  // 返回 { id, version }
}

async function getMySubmissions(studentId, assignmentId) {
  // 返回该学生在该作业下的所有版本
}

async function saveDraft({ ... }) {
  // upsert 草稿
}
```

**1.4 文件上传**

- 用 Supabase Storage（bucket 名：`submissions`，路径 `{student_id}/{assignment_id}/{version}/{filename}`）
- 单文件上限 20MB
- 允许的 MIME：`application/pdf`, `application/vnd.openxmlformats-officedocument.wordprocessingml.document`, `image/jpeg`, `image/png`
- 上传前先做客户端校验（大小 + 类型 + 文件名清洗，去掉特殊字符）

### 验收标准

- [ ] 学生角色登录后，作业列表里每条都有"开始作答" / "继续作答" / "已提交"三种状态按钮
- [ ] 点击进入 submission-modal，能完整完成 MCQ / Fill-blank / Essay 三种题型
- [ ] 关闭浏览器后重新打开，草稿还在
- [ ] 提交后能看到提交时间、版本号、是否迟交
- [ ] 重新打开同一作业能看到所有历史版本（resubmission）
- [ ] 提交时间超过 `due_at` 自动标 `is_late=true`
- [ ] 文件上传到 Supabase Storage，URL 入库

---

## Priority 2 — Supabase 数据库真正接上

### 问题
README 明确说"前端仍使用 `defaultRecords + localStorage`"。Supabase SDK 已在 `index.html` 加载，但 `data-adapter.js` 接入程度不明（自查时确认）。

### 要做的事

**2.1 验证 / 创建 Supabase 项目**

- 确认 `config.js` 里有真实 URL 和 anon key
- 如果还没建项目：
  - 去 supabase.com 新建一个项目（区域选 ap-southeast-1 / Singapore）
  - 把 `docs/supabase-schema.sql` 完整跑一遍
  - 把 URL 和 anon key 填入 `config.js`（**不要 commit 真实 key，用环境变量或 `.env.local` + `.gitignore`**）

**2.2 按这个顺序逐表迁移**（README 已经写好了优先级）

```
profiles → students/parents/teachers → programmes/subjects/classes
→ timetable_entries → attendance_sessions/records
→ assignments/targets/submissions
→ wace_assessment_outlines/tasks/marks/school_results
→ ai_interactions → evidence_items/audit_logs
```

**每接一张表的流程**：
1. 在 `data-adapter.js` 写 `fetchXxx` / `createXxx` / `updateXxx` / `deleteXxx`
2. 在 `app.js` 找到所有读写这张表对应 localStorage key 的地方
3. 替换为 `await dataAdapter.fetchXxx(...)`
4. 加一个 feature flag（比如 `window.USE_SUPABASE = true`）方便回滚测试
5. 测试该表所有 CRUD，确认无问题后再进下一张

**2.3 启用 Row Level Security (RLS)**

每张表都要写 RLS policy，避免任何学生通过浏览器直接调 Supabase API 拿别人的数据。最关键的几张表：

- `students`：学生只能 SELECT 自己，家长只能 SELECT 自己绑定的学生
- `assignment_submissions`：学生只能 INSERT/UPDATE 自己的，老师只能 SELECT 自己授课的
- `wace_task_marks`：分数只有老师和 Admin 能写，学生只读已发布的

**写完后用匿名 token 测一次**：用学生 A 的 token 试图查学生 B 的提交，必须返回空。

### 验收标准

- [ ] `config.js` 配的是真实 Supabase URL，不是占位符
- [ ] `localStorage` 不再作为主数据源（只能用于草稿暂存和 UI 偏好）
- [ ] 切换浏览器 / 设备登录，数据一致
- [ ] Network 面板能看到 `supabase.co/rest/v1/...` 请求
- [ ] 用学生 A 账号试图调用拿学生 B 的数据 → 返回空 / 403

---

## Priority 3 — EduTrust 证据链 + 审计

### 问题
BCI 是新加坡 EduTrust 认证学校，所有教学活动需要可追溯证据。当前系统看不到提交时间戳、IP、设备指纹、教师电子签名、不可篡改的成绩锁定这些字段的 UI / 落库逻辑。

### 要做的事

**3.1 `evidence_items` 表自动写入**

每次发生以下事件，都自动往 `evidence_items` 写一条记录（已经在 schema 里）：
- 学生提交作业 → `type: 'assignment_submission'`
- 教师批改完成 → `type: 'grading_complete'`
- 出勤打卡 → `type: 'attendance_record'`
- AI 介入学习 → `type: 'ai_interaction'`
- 学生成绩发布 → `type: 'wace_grade_published'`

字段包含：`event_type`、`actor_id`、`subject_id`、`payload`、`ip_hash`、`user_agent_hash`、`created_at`、`signature_hash`（可选 HMAC）。

**3.2 `audit_logs` 表写入关键管理操作**

- 新建学生 / 老师 / 家长账号
- 修改成绩
- 删除提交
- 修改作业 due date
- 角色权限变更

**3.3 成绩锁定 / 教师签名**

- `wace_task_marks` 加 `is_locked` 和 `locked_at` 字段
- 教师在 `grading-modal` 点"Finalize"后，调用 `dataAdapter.lockGrade()`，写入 `locked_at` 和教师 ID 的签名 hash
- 已锁定的成绩不能再改，要改必须管理员解锁（并自动写 audit_log）

**3.4 学生提交版本快照**

- `assignment_submissions` 表加 `version` 字段
- 每次重交不覆盖旧版本，新增一行 `version = previous + 1`
- 历史版本任何人都不能删（只有 super_admin 在审计需要时才能软删）

### 验收标准

- [ ] 任何一次作业提交，能在 `evidence_items` 里查到对应记录
- [ ] 任何一次管理操作，能在 `audit_logs` 里查到对应记录
- [ ] 已 lock 的成绩任何人都改不动（连老师自己也不行）
- [ ] 学生重交，旧版本保留可查

---

## Priority 4 — 代码架构清理

### 问题
- `app.js` 是 monolith，77% 代码量都在一个文件
- 没有打包工具，靠 `?v=18` 这种手工缓存破除
- 全局变量满天飞
- 无测试

### 要做的事（**不要一次性全做**，每次小步）

**4.1 拆分 `app.js` 为多个模块**

按职责切：
```
app.js (主入口，挂载事件)
├── auth.js          (登录、权限、role-switching)
├── ui-state.js      (modal 开关、当前角色、theme 切换)
├── render-*.js      (按 portal 拆: render-student.js, render-teacher.js, ...)
├── assignments.js   (作业创建、列表、状态)
├── submissions.js   (新加的学生提交)
├── grading.js       (批改逻辑)
├── ai.js            (AI Tutor、AI Grade)
└── utils.js         (escape, dateFormat, randomId, ...)
```

用 ES modules（`<script type="module">`）就行，不需要打包工具。

**4.2 XSS 修复**

全局 grep 一遍 `innerHTML = `，把所有渲染**用户输入**的地方换成 `textContent` 或 `escapeHtml()`。**这一项立刻就做**，不要等其他。

**4.3 加最小测试**

- 用 vitest 或 native node test runner
- 先覆盖 `utils.js`、`data-adapter.js` 的纯函数
- 不追求 100% 覆盖，但关键算法（迟交判定、成绩计算、字数统计）要有 case

**4.4 加 `.env.example` 和 README 部署文档**

```
SUPABASE_URL=https://xxxx.supabase.co
SUPABASE_ANON_KEY=xxxxxxxx
```
确认 `.env.local` 在 `.gitignore` 里。

### 验收标准

- [ ] `app.js` < 500 行（剩下的全在模块文件里）
- [ ] `grep -r "innerHTML" *.js` 不出现用户输入直接拼接
- [ ] 跑 `npm test`（或等价命令）能过
- [ ] `.env.example` 存在，真实 key 不在 git history 里

---

## Priority 5 — UX 改进（可以并行做）

**5.1 移动端**
- sidebar 在 < 768px 改成 bottom-nav 或 drawer
- assignment-modal、submission-modal 在移动端全屏占满
- 表格在移动端改成卡片列表

**5.2 学生工作台**
- 默认 landing 是"今天要交什么 + 进行中的草稿 + AI 建议"
- 不要让学生面对一个通用的 dashboard

**5.3 倒计时和通知**
- 作业卡片上显示"还有 3h 12min 截止"
- 截止前 24h / 1h 浏览器 Notification API 推送
- （未来）接 email：用 Supabase Edge Function + Resend / Mailgun

**5.4 公式 / 富文本**
- Math/Physics/Specialist 三科需要 LaTeX：装 `katex` 或 `mathjax`
- Essay 提交可以考虑 `tiptap` 或纯 textarea + Markdown 预览

---

## 不做 / 推迟（记录在这避免被带偏）

- ❌ 现在不换 Next.js / NestJS 等框架（README 是"后续技术方向"，不是现在）
- ❌ 不接付费 AI 抄袭检测（Turnitin），先用 OpenAI 自检 + 教师人工
- ❌ 不做手写 OCR（成本高，先用图片附件方式）
- ❌ 不做实时协作 essay（Y combinator 阶段产品别上 OT/CRDT）

---

## 推进节奏建议

```
Week 1: Priority 0 + Priority 1（学生提交闭环上线）
Week 2: Priority 2（Supabase 完整接入，至少把 assignments / submissions / profiles 三条线接通）
Week 3: Priority 3（EduTrust 证据 + 审计）
Week 4: Priority 4（代码拆分 + XSS + 测试）
持续:   Priority 5（UX 改进，按学生反馈滚动）
```

---

## 给 Claude Code 的具体指令

每次开始一个 Priority 时：
1. 先列出你要改的文件清单
2. 列出会动到的函数名 / DOM id
3. **等用户确认计划后再写代码**
4. 写完后给出 diff 总结 + 测试方法
5. 用 `git add` 暂存但不要直接 `git commit` 和 `git push`，让用户审阅

遇到不确定的设计决策（比如要不要保留某个旧字段）—— **问，不要猜**。
