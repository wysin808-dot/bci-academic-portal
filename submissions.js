// ── Student Submission Module ────────────────────────────────
// Handles the submission modal, question rendering, essay stages,
// auto-save drafts, file attachments, and submission history.

(function () {
  const DRAFT_KEY = "bci_submission_drafts";
  let currentAssignment = null;
  let currentStage = "single";
  let attachedFiles = [];
  let autoSaveTimer = null;

  const el = (id) => document.getElementById(id);

  // ── Draft persistence (localStorage) ──────────────────────

  function loadAllDrafts() {
    try { return JSON.parse(localStorage.getItem(DRAFT_KEY)) || {}; } catch { return {}; }
  }

  function saveDraft() {
    if (!currentAssignment) return;
    const key = currentAssignment.id;
    const drafts = loadAllDrafts();
    drafts[key] = {
      stage: currentStage,
      answers: collectAnswers(),
      savedAt: new Date().toISOString(),
    };
    localStorage.setItem(DRAFT_KEY, JSON.stringify(drafts));
    const status = el("sub-draft-status");
    if (status) {
      status.style.display = "";
      status.querySelector(".badge").textContent = "Draft saved " + new Date().toLocaleTimeString("en-SG", { hour: "2-digit", minute: "2-digit" });
    }
  }

  function loadDraft(assignmentId) {
    return loadAllDrafts()[assignmentId] || null;
  }

  function clearDraft(assignmentId) {
    const drafts = loadAllDrafts();
    delete drafts[assignmentId];
    localStorage.setItem(DRAFT_KEY, JSON.stringify(drafts));
  }

  function startAutoSave() {
    stopAutoSave();
    autoSaveTimer = setInterval(saveDraft, 10000);
  }

  function stopAutoSave() {
    if (autoSaveTimer) { clearInterval(autoSaveTimer); autoSaveTimer = null; }
  }

  // ── Time helpers ──────────────────────────────────────────

  function getRemainingTime(dueStr) {
    if (!dueStr) return { days: 0, hours: 0, minutes: 0, isLate: false, text: "No due date" };
    const due = new Date(dueStr);
    if (isNaN(due.getTime())) {
      const parts = String(dueStr).match(/(\w+)\s+(\d+)\s*(\d{1,2}:\d{2})?/);
      if (parts) {
        const year = new Date().getFullYear();
        const parsed = new Date(`${parts[1]} ${parts[2]}, ${year} ${parts[3] || "23:59"}`);
        if (!isNaN(parsed.getTime())) return getRemainingTime(parsed.toISOString());
      }
      return { days: 0, hours: 0, minutes: 0, isLate: false, text: dueStr };
    }
    const diff = due - new Date();
    const isLate = diff < 0;
    const abs = Math.abs(diff);
    const days = Math.floor(abs / 86400000);
    const hours = Math.floor((abs % 86400000) / 3600000);
    const minutes = Math.floor((abs % 3600000) / 60000);
    let text;
    if (isLate) {
      text = days > 0 ? `${days}d ${hours}h overdue` : hours > 0 ? `${hours}h ${minutes}m overdue` : `${minutes}m overdue`;
    } else {
      text = days > 0 ? `${days}d ${hours}h left` : hours > 0 ? `${hours}h ${minutes}m left` : `${minutes}m left`;
    }
    return { days, hours, minutes, isLate, text };
  }

  // ── Render questions for student ──────────────────────────

  function escHtml(s) {
    const d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  function renderQuestionForStudent(q, idx, savedAnswer) {
    const badge = `<span class="question-badge ${q.type}">${({ mcq: "MCQ", multi: "Multi", fill: "Fill", reading: "Reading", open: "Open" })[q.type] || q.type}</span>`;
    const marksLabel = q.marks ? ` <span style="color:var(--muted);font-size:0.8rem">(${q.marks} marks)</span>` : "";
    let body = "";

    if (q.type === "mcq") {
      body = `<div class="sub-mcq-options">${(q.options || []).map((opt, oi) =>
        `<label><input type="radio" name="sub-q-${idx}" value="${oi}" ${savedAnswer == oi ? "checked" : ""} /> <span class="opt-letter">${String.fromCharCode(65 + oi)}</span> ${escHtml(opt)}</label>`
      ).join("")}</div>`;
    } else if (q.type === "multi") {
      body = `<div class="sub-mcq-options">${(q.options || []).map((opt, oi) =>
        `<label><input type="checkbox" name="sub-q-${idx}" value="${oi}" ${Array.isArray(savedAnswer) && savedAnswer.includes(oi) ? "checked" : ""} /> <span class="opt-letter">${String.fromCharCode(65 + oi)}</span> ${escHtml(opt)}</label>`
      ).join("")}</div>`;
    } else if (q.type === "fill") {
      body = `<input type="text" class="sub-fill-input" data-qidx="${idx}" placeholder="Type your answer" value="${escHtml(savedAnswer || "")}" style="width:100%" />`;
    } else if (q.type === "reading") {
      body = `<div class="reading-passage" style="font-size:0.85rem;margin-bottom:8px">${escHtml(q.passage || "")}</div>`;
      body += (q.subQuestions || []).map((sq, si) => {
        const subSaved = Array.isArray(savedAnswer) ? savedAnswer[si] : "";
        return `<div style="margin-bottom:6px"><strong style="font-size:0.85rem">Q${idx + 1}.${si + 1}: ${escHtml(sq.question || "")}</strong>
          <input type="text" class="sub-reading-input" data-qidx="${idx}" data-sidx="${si}" placeholder="Your answer" value="${escHtml(subSaved || "")}" style="width:100%;margin-top:4px" /></div>`;
      }).join("");
    } else if (q.type === "open") {
      body = `<textarea class="sub-open-input" data-qidx="${idx}" rows="4" placeholder="Write your response...">${escHtml(savedAnswer || "")}</textarea>`;
    }

    return `<div class="sub-question-card">
      <div class="sub-question-head">${badge} Q${idx + 1}${marksLabel}</div>
      <div style="font-size:0.9rem;margin-bottom:8px">${escHtml(q.question || q.stem || "")}</div>
      ${body}
    </div>`;
  }

  // ── Collect current answers ───────────────────────────────

  function collectAnswers() {
    const result = {};
    if (!currentAssignment) return result;
    const type = currentAssignment.type;

    if (["worksheet", "quiz"].includes(type) && currentAssignment.questions?.length) {
      result.questions = currentAssignment.questions.map((q, i) => {
        if (q.type === "mcq") {
          const checked = document.querySelector(`input[name="sub-q-${i}"]:checked`);
          return checked ? Number(checked.value) : null;
        }
        if (q.type === "multi") {
          return Array.from(document.querySelectorAll(`input[name="sub-q-${i}"]:checked`)).map((c) => Number(c.value));
        }
        if (q.type === "fill") {
          const inp = document.querySelector(`.sub-fill-input[data-qidx="${i}"]`);
          return inp ? inp.value.trim() : "";
        }
        if (q.type === "reading") {
          return Array.from(document.querySelectorAll(`.sub-reading-input[data-qidx="${i}"]`)).map((inp) => inp.value.trim());
        }
        if (q.type === "open") {
          const ta = document.querySelector(`.sub-open-input[data-qidx="${i}"]`);
          return ta ? ta.value.trim() : "";
        }
        return null;
      });
    }

    if (type === "essay") {
      result.essayText = el("sub-essay-text")?.value || "";
      result.stage = currentStage;
    }

    if (["practical", "project", "presentation", "reflection", "exam"].includes(type)) {
      const prompts = document.querySelectorAll("#sub-generic-prompts textarea");
      result.responses = Array.from(prompts).map((t) => t.value.trim());
    }

    const genericText = el("sub-generic-text");
    if (genericText && genericText.style.display !== "none") {
      result.text = genericText.value || "";
    }

    result.files = attachedFiles.map((f) => f.name);
    return result;
  }

  // ── Open submission modal ─────────────────────────────────

  function openSubmissionModal(assignment) {
    if (!assignment) return;
    currentAssignment = assignment;
    currentStage = "single";
    attachedFiles = [];

    el("sub-eyebrow").textContent = assignment.subject || "Assignment";
    el("sub-title").textContent = assignment.title || "Submit Assignment";
    el("sub-subject").textContent = assignment.subject || "";
    el("sub-type").textContent = assignment.type || "worksheet";
    el("sub-due").textContent = assignment.due || "";
    el("sub-marks").textContent = assignment.marks ? String(assignment.marks) : "—";
    el("sub-teacher").textContent = assignment.assignedBy || "Teacher";
    el("sub-instructions").textContent = assignment.instructions || assignment.note || "Complete the assignment as instructed.";

    // countdown
    const remaining = getRemainingTime(assignment.due);
    const countdown = el("sub-countdown");
    countdown.textContent = remaining.text;
    countdown.className = "badge " + (remaining.isLate ? "red" : "amber");
    countdown.style.display = "";

    // late warning
    el("sub-late-warning").style.display = remaining.isLate ? "" : "none";
    el("sub-late-warning").textContent = remaining.isLate ? "This submission will be marked as late." : "";

    // submit button label
    const submitBtn = el("sub-submit");
    submitBtn.textContent = remaining.isLate ? "Submit Late" : "Submit";

    // teacher attachments
    const teacherFiles = el("sub-teacher-files");
    if (assignment.attachments?.length) {
      teacherFiles.style.display = "";
      el("sub-teacher-file-list").innerHTML = assignment.attachments.map((f) =>
        `<span class="attach-chip">${typeof f === "string" ? f : f.name}</span>`
      ).join("");
    } else {
      teacherFiles.style.display = "none";
    }

    // file upload area
    el("sub-file-list").innerHTML = "";

    // reset areas
    el("sub-questions-area").style.display = "none";
    el("sub-essay-area").style.display = "none";
    el("sub-generic-area").style.display = "none";
    el("sub-essay-tabs").style.display = "none";
    el("sub-draft-status").style.display = "none";
    el("sub-history").style.display = "none";

    const type = assignment.type || "worksheet";
    const draft = loadDraft(assignment.id);
    const savedAnswers = draft?.answers || {};

    if (["worksheet", "quiz"].includes(type) && assignment.questions?.length) {
      el("sub-questions-area").style.display = "";
      el("sub-questions-area").innerHTML = assignment.questions.map((q, i) =>
        renderQuestionForStudent(q, i, savedAnswers.questions?.[i])
      ).join("");
    } else if (type === "essay") {
      el("sub-essay-area").style.display = "";
      const essay = assignment.essay;
      if (essay?.stages && essay.stages !== "single") {
        el("sub-essay-tabs").style.display = "";
        currentStage = savedAnswers.stage || "outline";
        updateStageTabs();
      }
      el("sub-essay-text").value = savedAnswers.essayText || "";
      updateWordCount();
      const range = essay ? `(${essay.minWords || 300}–${essay.maxWords || 800} words)` : "";
      el("sub-word-range").textContent = range;
    } else if (["practical", "project", "presentation", "reflection", "exam"].includes(type)) {
      el("sub-generic-area").style.display = "";
      renderGenericPrompts(assignment, savedAnswers);
    } else {
      el("sub-generic-area").style.display = "";
      el("sub-generic-prompts").innerHTML = "";
      el("sub-generic-text").value = savedAnswers.text || "";
    }

    // submission history
    renderSubmissionHistory(assignment);

    // open
    const modal = el("submission-modal");
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    startAutoSave();
  }

  function renderGenericPrompts(assignment, savedAnswers) {
    const type = assignment.type;
    let prompts = [];

    if (type === "reflection" && assignment.reflection?.prompts?.length) {
      prompts = assignment.reflection.prompts;
    } else if (type === "practical") {
      prompts = ["Aim & Hypothesis", "Materials & Method", "Results & Analysis", "Conclusion & Evaluation"];
    } else if (type === "project") {
      prompts = ["Project Description", "Research & Findings", "Reflection on Process"];
    } else if (type === "presentation") {
      prompts = ["Presentation Topic & Outline"];
    }

    if (prompts.length) {
      el("sub-generic-prompts").innerHTML = prompts.map((p, i) => {
        const saved = savedAnswers.responses?.[i] || "";
        return `<div class="sub-generic-prompt-block"><label>${i + 1}. ${escHtml(p)}</label><textarea rows="3" placeholder="Your response...">${escHtml(saved)}</textarea></div>`;
      }).join("");
      el("sub-generic-text").style.display = "none";
    } else {
      el("sub-generic-prompts").innerHTML = "";
      el("sub-generic-text").style.display = "";
      el("sub-generic-text").value = savedAnswers.text || "";
    }
  }

  function renderSubmissionHistory(assignment) {
    if (!window.appState?.assignmentSubmissions) return;
    const subs = window.appState.assignmentSubmissions.filter((s) => s.assignmentId === assignment.id);
    if (!subs.length) { el("sub-history").style.display = "none"; return; }
    el("sub-history").style.display = "";
    el("sub-history-list").innerHTML = subs.map((s) =>
      `<div class="sub-history-row">
        <span>${s.submittedAt || "—"}</span>
        <span class="badge ${s.status === "Submitted" ? "green" : s.status === "Returned" ? "blue" : "amber"}">${s.status}</span>
        <span>${s.fileName || "—"}</span>
        ${s.score ? `<span class="badge green">${s.score}</span>` : ""}
      </div>`
    ).join("");
  }

  function updateStageTabs() {
    document.querySelectorAll("#sub-essay-tabs .scope-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.stage === currentStage);
    });
  }

  function updateWordCount() {
    const text = el("sub-essay-text")?.value || "";
    const count = text.trim() ? text.trim().split(/\s+/).length : 0;
    el("sub-word-count").textContent = String(count);
  }

  function closeSubmissionModal() {
    stopAutoSave();
    const modal = el("submission-modal");
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    currentAssignment = null;
  }

  // ── Submit ────────────────────────────────────────────────

  async function doSubmit() {
    if (!currentAssignment) return;
    const assignmentRef = currentAssignment;
    const assignmentId = assignmentRef.id;
    const answers = collectAnswers();
    const remaining = getRemainingTime(assignmentRef.due);

    // Create submission locally first, then attach answers
    if (typeof submitAssignmentLocally === "function") {
      submitAssignmentLocally(assignmentRef);
    }

    // Attach student answers to the submission
    if (window.appState?.assignmentSubmissions) {
      const sub = window.appState.assignmentSubmissions.find((s) => s.assignmentId === assignmentId);
      if (sub) {
        sub.answers = answers;
        sub.isLate = remaining.isLate;
        sub.stage = currentStage;
        if (attachedFiles.length) {
          sub.fileNames = attachedFiles.map((f) => f.name);
        }
      }
    }

    // Try cloud sync (non-blocking)
    if (typeof cloudConfigured === "function" && cloudConfigured()) {
      try {
        const submission = window.appState.assignmentSubmissions.find((s) => s.assignmentId === assignmentId);
        await window.AcademicDataAdapter.submitAssignment({
          assignmentId: assignmentRef.cloudAssignmentId || assignmentId,
          studentId: assignmentRef.cloudStudentId || submission?.cloudStudentId,
          fileName: submission?.fileName,
        });
      } catch (e) {
        // Cloud sync failed — local submission is still valid
      }
    }

    clearDraft(assignmentId);
    if (typeof saveState === "function") saveState();
    closeSubmissionModal();
    if (typeof renderPortal === "function") renderPortal(currentRole, currentModule);
    if (typeof showToast === "function") {
      showToast(remaining.isLate ? "Assignment submitted (late)" : "Assignment submitted successfully");
    }
  }

  // ── File handling ─────────────────────────────────────────

  function handleFiles(files) {
    const allowed = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png"];
    const maxSize = 20 * 1024 * 1024;
    for (const f of files) {
      if (!allowed.includes(f.type) && !f.name.match(/\.(pdf|docx?|jpe?g|png)$/i)) {
        if (typeof showToast === "function") showToast(`File type not allowed: ${f.name}`);
        continue;
      }
      if (f.size > maxSize) {
        if (typeof showToast === "function") showToast(`File too large (max 20MB): ${f.name}`);
        continue;
      }
      attachedFiles.push(f);
    }
    renderFileList();
  }

  function renderFileList() {
    el("sub-file-list").innerHTML = attachedFiles.map((f, i) =>
      `<span class="attach-chip">${f.name} <button type="button" data-rm="${i}">×</button></span>`
    ).join("");
  }

  // ── Event listeners ───────────────────────────────────────

  if (el("sub-close")) el("sub-close").onclick = closeSubmissionModal;
  if (el("sub-cancel")) el("sub-cancel").onclick = closeSubmissionModal;

  if (el("sub-save-draft")) el("sub-save-draft").onclick = () => {
    saveDraft();
    if (typeof showToast === "function") showToast("Draft saved");
  };

  const submitBtn = el("sub-submit");
  if (submitBtn) {
    const handler = async () => { await doSubmit(); };
    submitBtn.onclick = handler;
  }

  el("sub-essay-text")?.addEventListener("input", updateWordCount);

  el("sub-essay-tabs")?.addEventListener("click", (e) => {
    const btn = e.target.closest(".scope-btn[data-stage]");
    if (!btn) return;
    currentStage = btn.dataset.stage;
    updateStageTabs();
  });

  el("sub-attach-zone")?.addEventListener("click", () => el("sub-file-input")?.click());

  el("sub-file-input")?.addEventListener("change", (e) => {
    handleFiles(Array.from(e.target.files || []));
    e.target.value = "";
  });

  el("sub-file-list")?.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-rm]");
    if (btn) {
      attachedFiles.splice(Number(btn.dataset.rm), 1);
      renderFileList();
    }
  });

  // drag & drop
  const zone = el("sub-attach-zone");
  if (zone) {
    zone.addEventListener("dragover", (e) => { e.preventDefault(); zone.style.borderColor = "var(--primary)"; });
    zone.addEventListener("dragleave", () => { zone.style.borderColor = ""; });
    zone.addEventListener("drop", (e) => { e.preventDefault(); zone.style.borderColor = ""; handleFiles(Array.from(e.dataTransfer.files)); });
  }

  // ── Expose globally ───────────────────────────────────────

  window.openSubmissionModal = openSubmissionModal;
  window.closeSubmissionModal = closeSubmissionModal;
  window.getRemainingTime = getRemainingTime;
})();
