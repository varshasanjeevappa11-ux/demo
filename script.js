const sections = [
  {
    title: "Personal information",
    questions: [
      { key: "fullName", title: "What is your full name?", type: "text", placeholder: "e.g. Alex Morgan" },
      { key: "preferredName", title: "What would you like us to call you?", type: "text", placeholder: "Your preferred name" },
      { key: "age", title: "How old are you?", type: "number", placeholder: "Age", min: 13, max: 99 },
      { key: "dateOfBirth", title: "When is your birthday?", type: "date" },
      { key: "gender", title: "How do you describe your gender?", type: "select", options: ["Woman", "Man", "Non-binary", "Prefer to self-describe", "Prefer not to say"] },
      { key: "email", title: "What email address can we reach you at?", type: "email", placeholder: "you@example.com" },
      { key: "phone", title: "What phone number should we use?", type: "tel", placeholder: "Phone number" },
      { key: "city", title: "Which city do you call home?", type: "text", placeholder: "City or town" },
    ],
  },
  {
    title: "Education",
    questions: [
      { key: "school", title: "Where are you studying?", type: "text", placeholder: "College or school name" },
      { key: "course", title: "What course are you enrolled in?", type: "text", placeholder: "e.g. BSc Computer Science" },
      { key: "department", title: "Which department or branch are you in?", type: "text", placeholder: "Department or branch" },
      { key: "year", title: "What year of your course are you in?", type: "select", options: ["First year", "Second year", "Third year", "Fourth year", "Other"] },
      { key: "semester", title: "Which semester are you currently in?", type: "select", options: ["Semester 1", "Semester 2", "Semester 3", "Semester 4", "Semester 5", "Semester 6", "Semester 7", "Semester 8", "Other"] },
      { key: "studentId", title: "What is your student ID?", type: "text", placeholder: "College-issued student ID" },
      { key: "grade", title: "What is your current CGPA or percentage?", type: "text", placeholder: "e.g. 8.4 CGPA or 82%" },
    ],
  },
  {
    title: "Academic life",
    questions: [
      { key: "favoriteSubjects", title: "Which subjects do you enjoy the most?", type: "multi", options: ["Mathematics", "Computer science", "Physics", "Chemistry", "Biology", "Literature", "Business", "Other"] },
      { key: "difficultSubject", title: "Which subject challenges you the most?", type: "text", placeholder: "Subject name" },
      { key: "studyingSubjects", title: "What subjects are you studying this term?", type: "multi", options: ["Programming", "Data structures", "Mathematics", "Physics", "Communication", "Database systems", "Electronics", "Other"] },
      { key: "studyHours", title: "On an average day, how long do you study?", type: "select", options: ["Less than 1 hour", "1–2 hours", "2–3 hours", "3–5 hours", "More than 5 hours"] },
      { key: "learningMethods", title: "How do you prefer to learn?", type: "multi", options: ["Videos", "Books", "Practical projects", "Classroom teaching", "Online courses", "Group study"] },
      { key: "academicConfidence", title: "How confident do you feel about your studies?", type: "range", min: 1, max: 5, help: "Choose a number from 1 (not very confident) to 5 (very confident)." },
    ],
  },
  {
    title: "Technical skills",
    questions: [
      { key: "languages", title: "Which programming languages have you tried?", type: "multi", options: ["C", "C++", "Java", "Python", "JavaScript", "SQL", "Other"] },
      { key: "technicalSkills", title: "Which technical skills have you picked up?", type: "multi", options: ["Web development", "Backend development", "Database", "AI/ML", "Data science", "Cybersecurity", "Cloud", "Git/GitHub", "UI/UX"] },
      { key: "strongestSkill", title: "What is your strongest technical skill?", type: "text", placeholder: "A tool, language, or area" },
      { key: "nextTechnology", title: "What technology would you like to learn next?", type: "text", placeholder: "Something you are curious about" },
      { key: "technicalLevel", title: "How would you describe your overall technical skill level?", type: "select", options: ["Beginner", "Intermediate", "Advanced"] },
    ],
  },
  {
    title: "College activities",
    questions: [
      { key: "clubs", title: "Which college clubs are you a part of?", type: "multi", options: ["Coding club", "Technical club", "Cultural club", "Sports club", "Music club", "Robotics club", "Other"] },
      { key: "hackathons", title: "Have you taken part in any hackathons?", type: "yesno" },
      { key: "workshops", title: "Have you attended any workshops?", type: "yesno" },
      { key: "competitions", title: "Have you participated in any competitions?", type: "yesno" },
      { key: "certifications", title: "Do you have any certifications to share?", type: "repeat", recordType: "certification", fields: [{ key: "name", label: "Certification name", placeholder: "e.g. Web Development Fundamentals" }, { key: "organization", label: "Issuing organization", placeholder: "Organization" }, { key: "year", label: "Year", type: "number", placeholder: "2025" }] },
      { key: "achievements", title: "Is there an achievement you are proud of?", type: "repeat", recordType: "achievement", fields: [{ key: "title", label: "Achievement title", placeholder: "What did you accomplish?" }, { key: "type", label: "Type", placeholder: "e.g. Academic, sports" }, { key: "year", label: "Year", type: "number", placeholder: "2025" }, { key: "description", label: "A little about it", placeholder: "A short description", multiline: true }] },
    ],
  },
  {
    title: "Interests & preferences",
    questions: [
      { key: "hobbies", title: "What do you enjoy doing in your free time?", type: "multi", options: ["Reading", "Photography", "Gaming", "Cooking", "Travel", "Music", "Sports", "Drawing", "Volunteering", "Other"] },
      { key: "interestArea", title: "Which area interests you most right now?", type: "select", options: ["Technology", "Music", "Sports", "Art", "Business", "Research", "Design", "Other"] },
      { key: "careerFields", title: "Which career fields would you like to explore?", type: "multi", options: ["Software development", "Data and AI", "Design", "Business", "Research", "Education", "Healthcare", "Public service", "Other"] },
    ],
  },
  {
    title: "Future goals",
    questions: [
      { key: "career", title: "What kind of career can you picture yourself in?", type: "text", placeholder: "A role or direction you are considering" },
      { key: "goalSkill", title: "What skill or technology do you most want to learn?", type: "text", placeholder: "What is next on your learning list?" },
      { key: "twoYearGoal", title: "What is a goal you would like to reach in the next two years?", type: "textarea", placeholder: "It can be big, small, or still taking shape." },
      { key: "organization", title: "Where would you like to work someday?", type: "select", options: ["Startup", "Product company", "Service company", "Government", "Research", "Entrepreneurship", "Not sure yet"] },
      { key: "selfImprovement", title: "What is one thing you would like to improve about yourself?", type: "textarea", placeholder: "Something you would like to grow or get better at." },
    ],
  },
];

const questions = sections.flatMap((section, sectionIndex) => section.questions.map((question, questionInSection) => ({
  ...question,
  sectionIndex,
  questionInSection,
  sectionQuestionCount: section.questions.length,
})));

const milestones = {
  8: "Great! We've got your basic information.",
  15: "Now let's learn about your academic life.",
  25: "We're getting a much clearer picture of you.",
  35: "Almost there...",
  37: "3 questions remaining",
};

const answers = {};
let currentQuestion = 0;
let showingMilestone = false;
let toastTimer;
let savedProfileId = null;
let saveError = null;
let saveSucceeded = false;
let excelSaved = false;
let allExcelSaved = false;
let account = null;
let authMode = "login";
let authEmail = "";
let authError = null;
const app = document.querySelector("#app");

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function header() {
  return `<header class="site-header">
    <a class="brand" href="#home" aria-label="Student profile home"><span class="brand-mark" aria-hidden="true">✳</span><span>Student profile</span></a>
    <div class="header-note"><span aria-hidden="true"></span> A thoughtful little profile, just for you</div>
  </header>`;
}

function renderLanding() {
  app.innerHTML = `${header()}
    <section class="landing" aria-labelledby="landing-title">
      <div class="landing-copy">
        <p class="eyebrow">${account ? "Your student profile" : "Your next chapter starts here"}</p>
        <h1 id="landing-title">${account ? "Welcome back" : "Student Profile Registration"}</h1>
        <p class="landing-subtitle">${account ? escapeHtml(account.email) : "Let's get to know you better."}</p>
        <p class="landing-description">${account
          ? account.profileId ? "Your saved profile is connected to this account. You can view it or make updates." : "Your account is ready. Start creating your student profile when you are ready."
          : "Sign in to continue to your student profile, or create an account to get started."}</p>
        ${account ? `<div class="account-actions">
          ${account.profileId
            ? `<button class="primary-button" type="button" data-action="view-profile">Profile Details <span aria-hidden="true">→</span></button>`
            : `<button class="primary-button" type="button" data-action="start">Start Registration <span aria-hidden="true">→</span></button>`}
          ${account.profileId ? `<a class="secondary-button" href="/api/profiles/excel" download>Download Excel</a>` : ""}
          <button class="text-button" type="button" data-action="logout">Log out</button>
        </div>` : `<form class="auth-form" data-auth-form>
          <div class="field-group"><label class="field-label" for="auth-email">Email address</label><input class="field-control" id="auth-email" name="email" type="email" autocomplete="email" required maxlength="254" value="${escapeHtml(authEmail)}"></div>
          <div class="field-group"><label class="field-label" for="auth-password">Password</label><input class="field-control" id="auth-password" name="password" type="password" autocomplete="${authMode === "register" ? "new-password" : "current-password"}" required minlength="12" maxlength="128"></div>
          ${authError ? `<p class="auth-error" role="alert">${escapeHtml(authError)}</p>` : ""}
          <button class="primary-button" type="submit">${authMode === "register" ? "Create Account" : "Log In"} <span aria-hidden="true">→</span></button>
          <button class="text-button auth-switch" type="button" data-action="toggle-auth">${authMode === "register" ? "Already have an account? Log in" : "New here? Create an account"}</button>
          ${authMode === "register" ? `<p class="quiet-note">Choose a password with at least 12 characters.</p>` : ""}
        </form>`}
        <p class="privacy-note">This is a demonstration website. Please use fictional information and avoid sensitive personal details.</p>
      </div>
      <div class="hero-visual" role="img" aria-label="Illustration of two students sharing a book on campus">
        <div class="illustration-sky"><span class="campus-sun"></span><span class="campus-window window-one"></span><span class="campus-window window-two"></span><span class="campus-window window-three"></span><span class="campus-door"></span></div>
        <div class="campus-arch"></div>
        <div class="student student-one"><span class="student-hair"></span><span class="student-head"></span><span class="student-neck"></span><span class="student-body"></span><span class="student-book"></span></div>
        <div class="student student-two"><span class="student-hair"></span><span class="student-head"></span><span class="student-neck"></span><span class="student-body"></span><span class="student-book"></span></div>
        <div class="illustration-book"></div>
        <div class="photo-stamp">A profile that's all you</div>
        <div class="photo-caption"><p>Every good story has a first page.</p><span aria-hidden="true">↗</span></div>
      </div>
    </section>`;
}

function useAccount(data) {
  account = { id: data.id, email: data.email, profileId: data.profileId };
  Object.keys(answers).forEach((key) => delete answers[key]);
  if (data.profile) Object.assign(answers, data.profile);
  answers.email = account.email;
  savedProfileId = account.profileId;
  saveSucceeded = false;
  excelSaved = false;
  allExcelSaved = false;
  saveError = null;
  authError = null;
  authEmail = account.email;
  renderLanding();
}

async function restoreAccount() {
  try {
    const response = await fetch("/api/me");
    if (response.ok) {
      useAccount(await response.json());
    } else if (response.status !== 401) {
      const result = await response.json().catch(() => ({}));
      authError = result.detail ?? "Could not check your account. Please try again.";
      renderLanding();
    }
  } catch {
    authError = "Could not reach the sign-in service. Refresh the page to try again.";
    renderLanding();
  }
}

function sectionNavigation() {
  return sections.map((section, index) => {
    const active = index === questions[currentQuestion].sectionIndex;
    const done = index < questions[currentQuestion].sectionIndex;
    return `<div class="section-item${active ? " active" : ""}${done ? " done" : ""}"${active ? ' aria-current="step"' : ""}>
      <span class="section-number">${done ? "✓" : index + 1}</span><span>${escapeHtml(section.title)}</span>
    </div>`;
  }).join("");
}

function renderControl(question) {
  const value = answers[question.key];
  const id = `answer-${question.key}`;
  if (question.type === "multi") {
    const selected = Array.isArray(value) ? value : [];
    return `<div class="option-grid" role="group" aria-label="${escapeHtml(question.title)}">${question.options.map((option) => {
      const checked = selected.includes(option);
      return `<label class="option-chip"><input type="checkbox" name="${escapeHtml(question.key)}" value="${escapeHtml(option)}"${checked ? " checked" : ""}><span class="option-check" aria-hidden="true">✓</span>${escapeHtml(option)}</label>`;
    }).join("")}</div>`;
  }
  if (question.type === "select") {
    return `<select id="${id}" class="field-control" data-field="${question.key}"><option value="">Choose an option</option>${question.options.map((option) => `<option value="${escapeHtml(option)}"${value === option ? " selected" : ""}>${escapeHtml(option)}</option>`).join("")}</select>`;
  }
  if (question.type === "yesno") {
    return `<div class="option-grid" role="group" aria-label="${escapeHtml(question.title)}">${["Yes", "No"].map((option) => `<label class="option-chip"><input type="radio" name="${question.key}" value="${option}"${value === option ? " checked" : ""}><span class="option-check" aria-hidden="true">✓</span>${option}</label>`).join("")}</div>`;
  }
  if (question.type === "range") {
    const rangeValue = value ?? 3;
    return `<div class="range-wrap"><input id="${id}" type="range" min="${question.min}" max="${question.max}" value="${rangeValue}" data-field="${question.key}" aria-label="Academic confidence"><output class="range-value" for="${id}">${rangeValue}</output></div>`;
  }
  if (question.type === "repeat") {
    const records = answers[question.key] ?? [{}];
    return `<div class="record-list">${records.map((record, recordIndex) => `<article class="record-card">
      <p class="record-heading">${escapeHtml(question.recordType)} ${recordIndex + 1}</p>
      <div class="record-grid">${question.fields.map((field) => `<div class="field-group">
        <label class="field-label" for="${question.key}-${recordIndex}-${field.key}">${escapeHtml(field.label)}</label>
        ${field.multiline
          ? `<textarea id="${question.key}-${recordIndex}-${field.key}" class="field-control" data-record-field="${question.key}" data-index="${recordIndex}" data-name="${field.key}" placeholder="${escapeHtml(field.placeholder)}">${escapeHtml(record[field.key])}</textarea>`
          : `<input id="${question.key}-${recordIndex}-${field.key}" class="field-control" type="${field.type ?? "text"}" data-record-field="${question.key}" data-index="${recordIndex}" data-name="${field.key}" placeholder="${escapeHtml(field.placeholder)}" value="${escapeHtml(record[field.key])}">`}
      </div>`).join("")}</div>
      ${recordIndex > 0 ? `<button class="remove-button" type="button" data-action="remove-record" data-key="${question.key}" data-index="${recordIndex}">Remove this ${escapeHtml(question.recordType)}</button>` : ""}
    </article>`).join("")}</div>
    <div class="record-actions"><span class="quiet-note">Add as many as you need.</span><button class="add-button" type="button" data-action="add-record" data-key="${question.key}"><span aria-hidden="true">＋</span> Add another ${escapeHtml(question.recordType)}</button></div>`;
  }
  if (question.type === "textarea") {
    return `<textarea id="${id}" class="field-control" data-field="${question.key}" placeholder="${escapeHtml(question.placeholder)}">${escapeHtml(value)}</textarea>`;
  }
  const numberAttributes = question.type === "number" ? ` min="${question.min}" max="${question.max}" inputmode="numeric"` : "";
  return `<input id="${id}" class="field-control" type="${question.type}" data-field="${question.key}" placeholder="${escapeHtml(question.placeholder ?? "")}" value="${escapeHtml(value)}"${numberAttributes}>`;
}

function renderQuestion() {
  const question = questions[currentQuestion];
  const section = sections[question.sectionIndex];
  const atEndOfSection = question.questionInSection === question.sectionQuestionCount - 1;
  const isFinalQuestion = currentQuestion === questions.length - 1;
  const progress = currentQuestion / questions.length * 100;
  app.innerHTML = `${header()}
    <section class="form-shell" aria-label="Student profile questionnaire">
      <aside class="form-sidebar">
        <div class="sidebar-top"><p class="eyebrow">Your profile</p><h2>Let's make it yours.</h2><p>Take it one question at a time. Skip anything you would rather not share.</p></div>
        <nav class="section-list" aria-label="Registration sections">${sectionNavigation()}</nav>
        <p class="sidebar-privacy">Your profile is saved to the configured PostgreSQL database when you complete the form. Use fictional information for this demonstration.</p>
      </aside>
      <div class="form-main">
        <div class="form-topline"><span><strong>Step ${question.sectionIndex + 1} of ${sections.length}</strong> &nbsp;·&nbsp; ${escapeHtml(section.title)}</span><span>Question <strong>${currentQuestion + 1} / ${questions.length}</strong></span></div>
        <div class="progress-track" role="progressbar" aria-label="Profile completion" aria-valuemin="0" aria-valuemax="${questions.length}" aria-valuenow="${currentQuestion}"><div class="progress-fill" style="width:${progress}%"></div></div>
        <div class="question-area" key="${question.key}">
          <p class="eyebrow">${escapeHtml(section.title)} &nbsp;·&nbsp; ${question.questionInSection + 1} of ${question.sectionQuestionCount}</p>
          <h1>${escapeHtml(question.title)}</h1>
          ${question.help ? `<p class="question-help">${escapeHtml(question.help)}</p>` : `<p class="question-help">Share as much or as little as you like.</p>`}
          <div class="answer-area">${renderControl(question)}</div>
        </div>
        <footer class="form-footer">
          <button class="text-button" type="button" data-action="back"${currentQuestion === 0 ? " disabled" : ""}>← &nbsp; Back</button>
          <div class="footer-right">
            <button class="text-button skip-button" type="button" data-action="skip" aria-label="Skip question" title="Skip this question"><span class="skip-long">Skip question</span><span class="skip-short" aria-hidden="true">Skip</span></button>
            ${atEndOfSection && !isFinalQuestion ? `<button class="primary-button" type="button" data-action="next">Save &amp; Continue <span aria-hidden="true">→</span></button>` : `<button class="primary-button" type="button" data-action="next">${isFinalQuestion ? "Complete profile" : "Next"} <span aria-hidden="true">→</span></button>`}
          </div>
        </footer>
      </div>
    </section>`;
  bindAnswerEvents(question);
}

function bindAnswerEvents(question) {
  app.querySelectorAll("[data-field]").forEach((control) => {
    control.addEventListener("input", () => {
      answers[control.dataset.field] = control.type === "range" ? Number(control.value) : control.value;
      if (control.type === "range") control.parentElement.querySelector("output").value = control.value;
    });
    control.addEventListener("change", () => { answers[control.dataset.field] = control.value; });
  });
  app.querySelectorAll(`input[name="${question.key}"]`).forEach((control) => {
    control.addEventListener("change", () => {
      if (question.type === "multi") {
        answers[question.key] = [...app.querySelectorAll(`input[name="${question.key}"]:checked`)].map((item) => item.value);
      } else {
        answers[question.key] = control.value;
      }
    });
  });
  app.querySelectorAll("[data-record-field]").forEach((control) => {
    control.addEventListener("input", () => {
      const records = answers[control.dataset.recordField] ?? [{}];
      const index = Number(control.dataset.index);
      records[index] = { ...records[index], [control.dataset.name]: control.value };
      answers[control.dataset.recordField] = records;
    });
  });
}

function captureCurrentAnswer() {
  const question = questions[currentQuestion];
  const active = app.querySelector("[data-field]");
  if (active && (active.type !== "range" || answers[active.dataset.field] !== undefined)) {
    answers[active.dataset.field] = active.type === "range" ? Number(active.value) : active.value;
  }
  if (question.type === "multi") {
    answers[question.key] = [...app.querySelectorAll(`input[name="${question.key}"]:checked`)].map((item) => item.value);
  }
  if (question.type === "yesno") {
    answers[question.key] = app.querySelector(`input[name="${question.key}"]:checked`)?.value ?? answers[question.key];
  }
  if (question.type === "repeat") {
    app.querySelectorAll(`[data-record-field="${question.key}"]`).forEach((control) => {
      const index = Number(control.dataset.index);
      const records = answers[question.key] ?? [{}];
      records[index] = { ...records[index], [control.dataset.name]: control.value };
      answers[question.key] = records;
    });
  }
}

function advance() {
  captureCurrentAnswer();
  moveForward();
}

function skipCurrentQuestion() {
  const question = questions[currentQuestion];
  delete answers[question.key];
  if (currentQuestion === questions.length - 1) {
    saveProfile(false);
    return;
  }
  moveForward();
}

function moveForward() {
  if (currentQuestion === questions.length - 1) {
    saveProfile(false);
    return;
  }
  currentQuestion += 1;
  const milestone = milestones[currentQuestion];
  if (milestone) {
    showingMilestone = true;
    renderMilestone(milestone);
  } else {
    renderQuestion();
  }
}

async function saveProfile(captureAnswer = true) {
  if (captureAnswer) captureCurrentAnswer();
  renderSaving();
  try {
    const response = await fetch("/api/profiles", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(answers),
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.detail ?? `Save failed (${response.status}).`);
    savedProfileId = result.id;
    saveSucceeded = true;
    excelSaved = Boolean(result.excelSaved);
    allExcelSaved = Boolean(result.allExcelSaved);
    account.profileId = result.id;
    saveError = null;
  } catch (error) {
    saveSucceeded = false;
    excelSaved = false;
    allExcelSaved = false;
    saveError = error instanceof Error ? error.message : "The profile could not be saved.";
  }
  renderCompletion();
}

function renderSaving() {
  app.innerHTML = `${header()}<section class="completion"><div class="saving-indicator" role="status">Saving your profile...</div></section>`;
}

function renderMilestone(message) {
  const remaining = questions.length - currentQuestion;
  app.innerHTML = `${header()}<section class="interstitial"><div class="interstitial-card">
    <div class="milestone-mark" aria-hidden="true">${currentQuestion >= 35 ? "✦" : "✓"}</div>
    <p class="eyebrow">Step ${questions[currentQuestion].sectionIndex + 1} of ${sections.length}</p>
    <h1>${escapeHtml(message)}</h1>
    <p>${currentQuestion === 37 ? "Only three more to go. Keep going at your own pace; you can skip any question." : currentQuestion === 35 ? "You're on the home stretch. Just a few more to go." : "You've made a lovely start. Keep going at your own pace; you can skip any question."}</p>
    <footer class="form-footer milestone-footer">
      <button class="text-button" type="button" data-action="milestone-back">← &nbsp; Back</button>
      <button class="primary-button" type="button" data-action="milestone-continue">Continue <span aria-hidden="true">→</span></button>
    </footer>
  </div></section>`;
}

function valueCount(value) {
  if (Array.isArray(value)) return value.reduce((total, item) => total + (typeof item === "object" ? Object.values(item).filter(isFilled).length : isFilled(item) ? 1 : 0), 0);
  return isFilled(value) ? 1 : 0;
}

function isFilled(value) {
  if (value === null || value === undefined || value === "") return false;
  if (Array.isArray(value)) return value.length > 0;
  if (typeof value === "object") return Object.values(value).some(isFilled);
  return true;
}

function countSection(sectionIndex) {
  return sections[sectionIndex].questions.reduce((sum, question) => sum + valueCount(answers[question.key]), 0);
}

function renderCompletion() {
  const labels = ["Personal information", "Education", "Academics", "Technical skills", "Activities", "Interests", "Future goals"];
  const counts = labels.map((label, index) => ({ label, count: countSection(index) }));
  const total = counts.reduce((sum, category) => sum + category.count, 0);
  app.innerHTML = `${header()}<section class="completion">
    <p class="eyebrow">All seven sections, all yours</p>
    <div class="milestone-mark" aria-hidden="true">✦</div>
    <h1>Profile Completed!</h1>
    <p class="completion-copy">You've completed your student profile. Here's a quick look at everything you shared.</p>
    ${saveSucceeded
      ? `<p class="save-status" role="status">Profile saved to PostgreSQL · Profile #${savedProfileId}</p>`
      : `<div class="save-status error" role="alert"><strong>Profile not saved.</strong><br>${escapeHtml(saveError ?? "The database is not configured.")}</div>
        <div class="save-actions"><button class="secondary-button" type="button" data-action="retry-save">Retry save</button></div>`}
    ${saveSucceeded ? `<a class="secondary-button excel-download" href="/api/profiles/excel" download>Download Excel workbook <span aria-hidden="true">↓</span></a>
      <p class="quiet-note excel-note">${excelSaved ? "Your individual workbook was updated." : "The individual workbook can be regenerated from your saved profile."} ${allExcelSaved ? "All completed student profiles were also added to exports/all_student_profiles.xlsx." : "The all-students workbook could not be refreshed; the profiles are still saved in PostgreSQL."}</p>` : ""}
    <div class="summary-table" aria-label="Information shared by category">
      ${counts.map((category) => `<div class="summary-row"><span>${category.label}</span><strong>${category.count}</strong></div>`).join("")}
      <div class="summary-row total"><span>Total information</span><strong>${total}</strong></div>
    </div>
    <p class="completion-quote">"That's a lot of information for just ONE student."</p>
    <button class="primary-button" type="button" data-action="view-profile">${saveSucceeded ? "Continue" : "Continue without saving"} <span aria-hidden="true">→</span></button>
    <p class="privacy-note" style="margin-right:auto;margin-left:auto">Use fictional information. This demonstration does not request passwords, financial details, or government ID numbers.</p>
  </section>`;
}

function display(value) {
  if (Array.isArray(value)) {
    const values = value.filter(isFilled);
    return values.length ? values.join(", ") : "Not provided";
  }
  return isFilled(value) ? String(value) : "Not provided";
}

function fieldMarkup(label, value, wide = false) {
  return `<div class="profile-field${wide ? " wide" : ""}"><dt>${escapeHtml(label)}</dt><dd${!isFilled(value) ? ' class="empty-value"' : ""}>${escapeHtml(display(value))}</dd></div>`;
}

function listMarkup(items, titleKey, detailKeys) {
  const filled = (items ?? []).filter((item) => Object.values(item).some(isFilled));
  if (!filled.length) return `<p class="empty-value">No entries added</p>`;
  return `<div class="profile-list">${filled.map((item) => `<div class="profile-list-item"><strong>${escapeHtml(display(item[titleKey]))}</strong><span>${detailKeys.map((key) => item[key]).filter(isFilled).map(escapeHtml).join(" · ") || " "}</span></div>`).join("")}</div>`;
}

function profileCard(title, symbol, fields, wide = false) {
  return `<article class="profile-card"${wide ? ' style="grid-column:1/-1"' : ""}><h2><span class="card-symbol" aria-hidden="true">${symbol}</span>${title}</h2><dl class="profile-fields">${Array.isArray(fields) ? fields.join("") : fields}</dl></article>`;
}

function renderProfile() {
  app.innerHTML = `${header()}<section class="profile-page">
    <div class="profile-heading"><div><p class="eyebrow">Your profile at a glance</p><h1>${escapeHtml(answers.preferredName || answers.fullName || "Student profile")}</h1><p>A little collection of the things that make you, you.</p></div><div class="profile-header-actions"><a class="secondary-button" href="/api/profiles/excel" download>Download Excel</a><button class="secondary-button" type="button" data-action="start">Edit this profile <span aria-hidden="true">↗</span></button></div></div>
    <div class="profile-grid">
      ${profileCard("Personal", "01", [fieldMarkup("Full name", answers.fullName), fieldMarkup("Preferred name", answers.preferredName), fieldMarkup("Age", answers.age), fieldMarkup("Date of birth", answers.dateOfBirth), fieldMarkup("Gender", answers.gender), fieldMarkup("Email", answers.email, true), fieldMarkup("Phone", answers.phone), fieldMarkup("City", answers.city)])}
      ${profileCard("Education", "02", [fieldMarkup("College / school", answers.school, true), fieldMarkup("Course", answers.course), fieldMarkup("Department", answers.department), fieldMarkup("Year", answers.year), fieldMarkup("Semester", answers.semester), fieldMarkup("Student ID", answers.studentId), fieldMarkup("CGPA / percentage", answers.grade)])}
      ${profileCard("Academics", "03", [fieldMarkup("Favorite subjects", answers.favoriteSubjects, true), fieldMarkup("Most difficult subject", answers.difficultSubject), fieldMarkup("Currently studying", answers.studyingSubjects, true), fieldMarkup("Study hours per day", answers.studyHours), fieldMarkup("Learning preferences", answers.learningMethods, true), fieldMarkup("Academic confidence", answers.academicConfidence)])}
      ${profileCard("Skills", "04", [fieldMarkup("Programming languages", answers.languages, true), fieldMarkup("Technical skills", answers.technicalSkills, true), fieldMarkup("Strongest skill", answers.strongestSkill), fieldMarkup("Next technology", answers.nextTechnology), fieldMarkup("Skill level", answers.technicalLevel)])}
      ${profileCard("Activities", "05", [fieldMarkup("Clubs", answers.clubs, true), fieldMarkup("Hackathons", answers.hackathons), fieldMarkup("Workshops", answers.workshops), fieldMarkup("Competitions", answers.competitions)])}
      ${profileCard("Interests", "06", [fieldMarkup("Hobbies", answers.hobbies, true), fieldMarkup("Area of interest", answers.interestArea), fieldMarkup("Career fields", answers.careerFields, true)])}
      ${profileCard("Certifications", "07", listMarkup(answers.certifications, "name", ["organization", "year"]), true)}
      ${profileCard("Achievements", "08", listMarkup(answers.achievements, "title", ["type", "year", "description"]), true)}
      ${profileCard("Goals", "09", [fieldMarkup("Career interest", answers.career, true), fieldMarkup("Skill to learn", answers.goalSkill, true), fieldMarkup("Two-year goal", answers.twoYearGoal, true), fieldMarkup("Organization type", answers.organization), fieldMarkup("Personal growth", answers.selfImprovement, true)], true)}
    </div>
    <div class="profile-actions"><button class="secondary-button" type="button" data-action="account-home">Back to account</button></div>
  </section>`;
}

function toast(message) {
  clearTimeout(toastTimer);
  app.querySelector(".toast")?.remove();
  const element = document.createElement("div");
  element.className = "toast";
  element.setAttribute("role", "status");
  element.textContent = message;
  document.body.append(element);
  toastTimer = setTimeout(() => element.remove(), 2300);
}

app.addEventListener("submit", async (event) => {
  const form = event.target.closest("[data-auth-form]");
  if (!form) return;
  event.preventDefault();

  const formData = new FormData(form);
  authEmail = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const button = form.querySelector('button[type="submit"]');
  button.disabled = true;
  button.textContent = authMode === "register" ? "Creating account..." : "Signing in...";

  try {
    const response = await fetch(`/api/${authMode === "register" ? "register" : "login"}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
      body: JSON.stringify({ email: authEmail, password }),
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      const detail = result.detail;
      const message = typeof detail === "string" ? detail : Array.isArray(detail) ? detail.map((item) => item.msg).join(" ") : "Sign-in failed. Please try again.";
      throw new Error(message);
    }
    useAccount(result);
  } catch (error) {
    authError = error instanceof Error ? error.message : "Sign-in failed. Please try again.";
    renderLanding();
  }
});

app.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const action = button.dataset.action;
  if (action === "start") { currentQuestion = 0; renderQuestion(); }
  if (action === "toggle-auth") {
    authEmail = app.querySelector("#auth-email")?.value ?? authEmail;
    authMode = authMode === "login" ? "register" : "login";
    authError = null;
    renderLanding();
  }
  if (action === "back" || action === "milestone-back") {
    if (app.querySelector(".question-area")) captureCurrentAnswer();
    if (showingMilestone) showingMilestone = false;
    if (currentQuestion > 0) currentQuestion -= 1;
    renderQuestion();
  }
  if (action === "next") advance();
  if (action === "skip") skipCurrentQuestion();
  if (action === "retry-save") saveProfile();
  if (action === "milestone-continue") { showingMilestone = false; renderQuestion(); }
  if (action === "view-profile") renderProfile();
  if (action === "account-home") renderLanding();
  if (action === "logout") {
    try { await fetch("/api/logout", { method: "POST", credentials: "same-origin" }); } catch {}
    account = null;
    savedProfileId = null;
    saveSucceeded = false;
    authMode = "login";
    Object.keys(answers).forEach((key) => delete answers[key]);
    renderLanding();
  }
  if (action === "start-over") {
    Object.keys(answers).forEach((key) => delete answers[key]);
    currentQuestion = 0;
    savedProfileId = null;
    saveError = null;
    renderLanding();
  }
  if (action === "add-record") {
    captureCurrentAnswer();
    const key = button.dataset.key;
    answers[key] = [...(answers[key] ?? [{}]), {}];
    renderQuestion();
  }
  if (action === "remove-record") {
    captureCurrentAnswer();
    const key = button.dataset.key;
    answers[key].splice(Number(button.dataset.index), 1);
    renderQuestion();
  }
});

app.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.target.matches("input:not([type=checkbox]):not([type=radio]):not([type=range])")) {
    event.preventDefault();
    app.querySelector('[data-action="next"]')?.click();
  }
});

renderLanding();
restoreAccount();