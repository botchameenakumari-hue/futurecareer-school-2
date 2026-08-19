import { expect, test } from '@playwright/test';

test.use({ channel: 'chrome' });

const projectUrl = 'https://txlbmbslaayxuwxcksxo.supabase.co';
const storageKey = 'fcs-txlbmbslaayxuwxcksxo-auth-v1';
const branchId = '22222222-2222-4222-8222-222222222222';
const ids = {
  admin: '00000000-0000-4000-8000-000000000001',
  branchHead: '00000000-0000-4000-8000-000000000002',
  headCoach: '00000000-0000-4000-8000-000000000003',
  coach: '00000000-0000-4000-8000-000000000004',
  student: '00000000-0000-4000-8000-000000000005',
  staffCareer: '10000000-0000-4000-8000-000000000001',
  ownCareer: '10000000-0000-4000-8000-000000000002',
  staffSkill: '20000000-0000-4000-8000-000000000001',
  ownSkill: '20000000-0000-4000-8000-000000000002',
  staffAction: '30000000-0000-4000-8000-000000000001',
  ownAction: '30000000-0000-4000-8000-000000000002',
  doneAction: '30000000-0000-4000-8000-000000000003',
  cohort: '60000000-0000-4000-8000-000000000001',
  cohortMembership: '61000000-0000-4000-8000-000000000001',
  upcomingCohortSession: '62000000-0000-4000-8000-000000000001',
  completedCohortSession: '62000000-0000-4000-8000-000000000002',
};

const timestamp = '2026-08-13T08:00:00.000Z';
const generatedIds = {
  career_paths: '10000000-0000-4000-8000-000000000003',
  student_skills: '20000000-0000-4000-8000-000000000003',
  skill_evidence: '21000000-0000-4000-8000-000000000002',
  coaching_sessions: '40000000-0000-4000-8000-000000000003',
  cohort_sessions: '62000000-0000-4000-8000-000000000003',
  cohorts: '60000000-0000-4000-8000-000000000002',
  cohort_session_attendance: '63000000-0000-4000-8000-000000000002',
  action_items: '30000000-0000-4000-8000-000000000004',
};

function profile(id, role, fullName, email, supervisorId = null) {
  return {
    id,
    email,
    full_name: fullName,
    role,
    account_status: 'active',
    branch_id: role === 'admin' ? null : branchId,
    supervisor_id: supervisorId,
    stage: role === 'student' ? 'class-11-12' : null,
    city: 'Visakhapatnam',
    target_outcome: role === 'student' ? 'Choose a practical degree and career direction' : null,
    onboarding_completed: true,
    must_change_password: false,
    password_set_at: timestamp,
    created_at: timestamp,
    updated_at: timestamp,
  };
}

const profiles = [
  profile(ids.admin, 'admin', 'Vagdevi Admin', 'admin@example.test'),
  profile(ids.branchHead, 'branch_head', 'Sirisha Branch Head', 'branch.head@example.test', ids.admin),
  profile(ids.headCoach, 'head_coach', 'Harini Head Coach', 'head.coach@example.test', ids.branchHead),
  profile(ids.coach, 'coach', 'Nisha Coach', 'coach@example.test', ids.headCoach),
  profile(ids.student, 'student', 'Arjun Student', 'student@example.test', ids.coach),
];

const fixtures = {
  student_cases: [{
    student_id: ids.student,
    coaching_stage: 'option-validation',
    case_status: 'active',
    priority: 'high',
    goal_summary: 'Choose between design and engineering through real-world trials',
    progress_note: 'Ready to compare work environments and course routes.',
    review_cadence_days: 14,
    decision_deadline: '2026-12-15',
    next_review_at: '2026-08-01T09:00:00.000Z',
    updated_by: ids.coach,
    updated_at: timestamp,
  }],
  career_paths: [
    {
      id: ids.staffCareer,
      user_id: ids.student,
      title: 'Product Design',
      option_type: 'primary',
      focus_percentage: 70,
      career_category: 'Creative, Design & Media',
      preset_key: 'product-designer',
      status: 'selected',
      fit_score: 88,
      confidence: 4,
      route_summary: 'B.Des or a portfolio-led design programme',
      entry_requirements: 'Portfolio, design aptitude, and interviews',
      work_environment: 'Collaborative product teams and user research',
      reasons: ['Strong visual problem solving', 'Enjoys understanding people'],
      tradeoffs: ['Portfolio admissions need sustained preparation'],
      next_step: 'Complete a one-week redesign challenge',
      decision_deadline: '2026-12-15',
      sort_order: 1,
      created_by: ids.coach,
      updated_by: ids.coach,
      created_at: timestamp,
      updated_at: timestamp,
    },
    {
      id: ids.ownCareer,
      user_id: ids.student,
      title: 'Engineering Design',
      option_type: 'alternative',
      focus_percentage: 20,
      career_category: 'Engineering, Architecture & Built Environment',
      preset_key: null,
      status: 'testing',
      fit_score: 76,
      confidence: 3,
      route_summary: 'B.Tech followed by product development roles',
      entry_requirements: 'PCM entrance preparation',
      work_environment: 'Technical teams, prototyping, and systems work',
      reasons: ['Enjoys building and mathematics'],
      tradeoffs: ['Longer technical study route'],
      next_step: 'Interview an engineering design student',
      decision_deadline: '2026-12-15',
      sort_order: 2,
      created_by: ids.student,
      updated_by: ids.student,
      created_at: timestamp,
      updated_at: timestamp,
    },
  ],
  student_skills: [
    {
      id: ids.staffSkill,
      student_id: ids.student,
      skill_name: 'Data analysis',
      category: 'analytical',
      current_level: 1,
      target_level: 3,
      priority: 'core',
      status: 'developing',
      development_goal: 'Analyse survey data and explain one useful insight.',
      created_by: ids.coach,
      updated_by: ids.coach,
      created_at: timestamp,
      updated_at: timestamp,
    },
    {
      id: ids.ownSkill,
      student_id: ids.student,
      skill_name: 'Visual storytelling',
      category: 'creative',
      current_level: 2,
      target_level: 3,
      priority: 'important',
      status: 'developing',
      development_goal: 'Publish two clear case-study slides.',
      created_by: ids.student,
      updated_by: ids.student,
      created_at: timestamp,
      updated_at: timestamp,
    },
  ],
  skill_evidence: [{
    id: '21000000-0000-4000-8000-000000000001',
    skill_id: ids.staffSkill,
    title: 'School transport survey',
    evidence_type: 'project',
    description: 'Cleaned responses and created a chart.',
    source_url: '',
    observed_level: 1,
    evidence_date: '2026-08-10',
    added_by: ids.student,
    created_at: timestamp,
  }],
  coaching_sessions: [
    {
      id: '40000000-0000-4000-8000-000000000001',
      student_id: ids.student,
      facilitator_id: ids.coach,
      scheduled_at: '2027-08-20T10:00:00.000Z',
      duration_minutes: 45,
      session_type: 'career-review',
      status: 'scheduled',
      agenda: 'Review the design challenge and compare both routes.',
      student_summary: '',
      decisions: '',
      created_by: ids.coach,
      created_at: timestamp,
      updated_at: timestamp,
    },
    {
      id: '40000000-0000-4000-8000-000000000002',
      student_id: ids.student,
      facilitator_id: ids.coach,
      scheduled_at: '2026-08-05T10:00:00.000Z',
      duration_minutes: 60,
      session_type: 'option-research',
      status: 'completed',
      agenda: 'Compare daily work and study routes.',
      student_summary: 'Product design remains the leading direction.',
      decisions: 'Run a practical design sprint before finalising.',
      created_by: ids.coach,
      created_at: timestamp,
      updated_at: timestamp,
    },
  ],
  cohorts: [{
    id: ids.cohort,
    branch_id: branchId,
    name: 'Class 11-12 Career Direction',
    code: 'VSKP-C12-01',
    program_track: 'college-and-course',
    coaching_stage: 'option-validation',
    delivery_mode: 'hybrid',
    status: 'active',
    lead_id: ids.coach,
    capacity: 30,
    starts_on: '2026-07-01',
    ends_on: null,
    schedule_note: 'Two group sessions per month plus action follow-through.',
    description: 'Career option validation, course research, and practical evidence.',
    created_by: ids.admin,
    updated_by: ids.admin,
    created_at: timestamp,
    updated_at: timestamp,
  }],
  cohort_memberships: [{
    id: ids.cohortMembership,
    cohort_id: ids.cohort,
    student_id: ids.student,
    membership_status: 'active',
    joined_on: '2026-07-01',
    left_on: null,
    created_by: ids.admin,
    updated_by: ids.admin,
    created_at: timestamp,
    updated_at: timestamp,
  }],
  cohort_sessions: [
    {
      id: ids.upcomingCohortSession,
      cohort_id: ids.cohort,
      facilitator_id: ids.coach,
      starts_at: '2027-08-20T10:00:00.000Z',
      duration_minutes: 75,
      session_type: 'decision-planning',
      delivery_mode: 'hybrid',
      status: 'announced',
      topic: 'Career evidence and option review',
      venue_or_link: 'https://meet.example.test/cohort-review',
      agenda: 'Review the design challenge and compare both routes.',
      preparation: 'Update career options, focus allocation, and one skill proof.',
      student_summary: '',
      created_by: ids.coach,
      updated_by: ids.coach,
      created_at: timestamp,
      updated_at: timestamp,
    },
    {
      id: ids.completedCohortSession,
      cohort_id: ids.cohort,
      facilitator_id: ids.coach,
      starts_at: '2026-08-05T10:00:00.000Z',
      duration_minutes: 60,
      session_type: 'career-options',
      delivery_mode: 'online',
      status: 'completed',
      topic: 'Career reality and route comparison',
      venue_or_link: '',
      agenda: 'Compare daily work and study routes.',
      preparation: 'Bring one credible role source.',
      student_summary: 'Product design remains the leading direction.',
      created_by: ids.coach,
      updated_by: ids.coach,
      created_at: timestamp,
      updated_at: timestamp,
    },
  ],
  cohort_session_attendance: [{
    id: '63000000-0000-4000-8000-000000000001',
    session_id: ids.completedCohortSession,
    student_id: ids.student,
    attendance_status: 'present',
    participation_note: 'Contributed a useful route comparison.',
    recorded_by: ids.coach,
    created_at: timestamp,
    updated_at: timestamp,
  }],
  action_items: [
    {
      id: ids.staffAction,
      user_id: ids.student,
      title: 'Portfolio case study',
      category: 'build',
      priority: 'important',
      due_date: '2026-08-01',
      details: 'Document the problem, process, feedback, and revision.',
      status: 'todo',
      assigned_by: ids.coach,
      created_at: timestamp,
      updated_at: timestamp,
    },
    {
      id: ids.ownAction,
      user_id: ids.student,
      title: 'Interview a product designer',
      category: 'connect',
      priority: 'normal',
      due_date: '2027-09-01',
      details: 'Ask about daily work, entry routes, and trade-offs.',
      status: 'todo',
      assigned_by: ids.student,
      created_at: timestamp,
      updated_at: timestamp,
    },
    {
      id: ids.doneAction,
      user_id: ids.student,
      title: 'Compare three design colleges',
      category: 'explore',
      priority: 'normal',
      due_date: '2026-07-20',
      details: 'Compare curriculum, cost, and placement evidence.',
      status: 'done',
      assigned_by: ids.coach,
      completed_at: '2026-07-19T08:00:00.000Z',
      created_at: timestamp,
      updated_at: timestamp,
    },
  ],
  student_constraints: [{
    student_id: ids.student,
    budget_range: 'moderate',
    available_hours_per_week: 8,
    max_commute_minutes: 60,
    willing_to_relocate: true,
    device_access: 'personal-computer',
    internet_access: 'reliable',
    family_expectations: 'Family wants a degree with a clear employment route.',
    education_timeline: 'Begin undergraduate study in 2027.',
    risk_tolerance: 3,
    study_abroad_interest: 'maybe',
    non_negotiables: ['Practical learning', 'Affordable fees'],
    accessibility_support: '',
    schedule_or_health_considerations: '',
    work_or_care_responsibilities: '',
    student_notes: 'Wants to test the work before choosing a degree.',
    updated_at: timestamp,
  }],
  student_academic_records: [{
    student_id: ids.student,
    current_institution: 'Future Public School',
    current_class_or_year: 'Class 12',
    stream_or_specialisation: 'PCM',
    board_or_university: 'CBSE',
    latest_score: '82%',
    strong_subjects: 'Mathematics, English',
    challenging_subjects: 'Chemistry',
    exam_targets: ['UCEED', 'JEE Main'],
    education_notes: 'Strong project work when the brief is practical.',
  }],
  coach_notes: [{
    id: '50000000-0000-4000-8000-000000000001',
    student_id: ids.student,
    author_id: ids.coach,
    note_type: 'observation',
    visibility: 'staff',
    content: 'Student responds well to tangible trials and comparative evidence.',
    created_at: timestamp,
  }],
};

function authUser(currentProfile) {
  return {
    id: currentProfile.id,
    aud: 'authenticated',
    role: 'authenticated',
    email: currentProfile.email,
    email_confirmed_at: timestamp,
    app_metadata: { provider: 'email', providers: ['email'] },
    user_metadata: { full_name: currentProfile.full_name },
    identities: [],
    created_at: timestamp,
    updated_at: timestamp,
  };
}

function fakeAccessToken(user, expiresAt) {
  const encode = (value) => Buffer.from(JSON.stringify(value)).toString('base64url');
  return `${encode({ alg: 'HS256', typ: 'JWT' })}.${encode({ aud: 'authenticated', exp: expiresAt, sub: user.id, email: user.email, role: 'authenticated' })}.test-signature`;
}

async function mockWorkspace(page, role) {
  const currentProfile = profiles.find((item) => item.role === role);
  const user = authUser(currentProfile);
  const now = Math.floor(Date.now() / 1000);

  await page.addInitScript(({ key, session }) => {
    window.localStorage.setItem(key, JSON.stringify(session));
  }, {
    key: storageKey,
    session: {
      access_token: fakeAccessToken(user, now + 3600),
      refresh_token: 'test-refresh-token',
      expires_in: 3600,
      expires_at: now + 3600,
      token_type: 'bearer',
      user,
    },
  });

  await page.route(`${projectUrl}/**`, async (route) => {
    const request = route.request();
    const url = new URL(request.url());
    const wantsObject = (request.headers().accept ?? '').includes('application/vnd.pgrst.object+json');
    const headers = {
      'access-control-allow-origin': '*',
      'access-control-allow-headers': 'authorization, x-client-info, apikey, content-type, prefer',
      'access-control-allow-methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
      'access-control-expose-headers': 'Content-Range',
      'content-type': 'application/json',
      'content-range': '0-0/1',
    };

    if (request.method() === 'OPTIONS') {
      await route.fulfill({ status: 204, headers, body: '' });
      return;
    }
    if (url.pathname === '/auth/v1/user') {
      await route.fulfill({ status: 200, headers, body: JSON.stringify(user) });
      return;
    }
    if (url.pathname === '/rest/v1/profiles') {
      await route.fulfill({ status: 200, headers, body: JSON.stringify(wantsObject ? currentProfile : profiles) });
      return;
    }
    if (url.pathname === '/rest/v1/branches') {
      await route.fulfill({ status: 200, headers, body: JSON.stringify([{ id: branchId, name: 'Visakhapatnam', code: 'VSKP', city: 'Visakhapatnam', status: 'active' }]) });
      return;
    }
    if (url.pathname === '/rest/v1/account_requests' || url.pathname === '/rest/v1/audit_events') {
      await route.fulfill({ status: 200, headers, body: '[]' });
      return;
    }
    if (url.pathname.startsWith('/rest/v1/')) {
      const table = url.pathname.split('/').pop();
      const rows = fixtures[table] ?? [];
      if (request.method() === 'DELETE') {
        await route.fulfill({ status: 204, headers, body: '' });
        return;
      }
      if (request.method() !== 'GET') {
        const payload = request.postDataJSON();
        const values = Array.isArray(payload) ? payload[0] : payload;
        const filteredId = url.searchParams.get('id')?.replace(/^eq\./, '');
        const existing = rows.find((row) => row.id === filteredId) ?? {};
        const saved = {
          ...existing,
          ...values,
          id: existing.id ?? values.id ?? generatedIds[table] ?? '90000000-0000-4000-8000-000000000001',
          created_at: existing.created_at ?? values.created_at ?? timestamp,
          updated_at: timestamp,
        };
        await route.fulfill({
          status: 200,
          headers,
          body: JSON.stringify(wantsObject ? saved : [saved]),
        });
        return;
      }
      await route.fulfill({ status: 200, headers, body: JSON.stringify(wantsObject ? (rows[0] ?? null) : rows) });
      return;
    }
    await route.fulfill({ status: 200, headers, body: '{}' });
  });
}

test('staff can run a complete coaching case from caseload to private notes', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await mockWorkspace(page, 'admin');
  await page.goto('http://127.0.0.1:4321/dashboard', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#workspace-shell')).toBeVisible({ timeout: 10_000 });

  await page.locator('.workspace-nav > [data-view-target="caseload"]').click();
  await expect(page.locator('#caseload-summary')).toContainText('Active cases');
  await expect(page.locator('#caseload-summary')).toContainText('Need attention');
  const caseRow = page.locator('#caseload-table-body tr').filter({ hasText: 'Arjun Student' });
  await expect(caseRow).toContainText('Option validation');
  await expect(caseRow).toContainText('2 options');
  await expect(caseRow).toContainText('2 tracked');
  await expect(caseRow).toContainText('2 open');
  await expect(caseRow).toContainText('1 overdue');
  await page.screenshot({ path: testInfo.outputPath('staff-caseload.png'), fullPage: true });
  await caseRow.getByRole('button', { name: 'Open coaching record' }).click();

  await expect(page.locator('[data-workspace-view="student-record"]')).toBeVisible();
  await expect(page.locator('#student-record-heading')).toHaveText('Arjun Student');
  await expect(page.locator('#student-record-meta')).toContainText('Coach: Nisha Coach');
  await expect(page.locator('#student-record-stage')).toHaveText('Option validation');
  await expect(page.locator('#record-decision-summary')).toContainText('Product Design');
  await expect(page.locator('#record-decision-summary')).toContainText('Data analysis');

  await page.locator('[data-record-tab="careers"]').click();
  await expect(page.locator('#record-career-list')).toContainText('Product Design');
  await expect(page.locator('#record-career-list')).toContainText('Engineering Design');
  await expect(page.locator('#record-career-list')).toContainText('Portfolio admissions need sustained preparation');
  await page.screenshot({ path: testInfo.outputPath('staff-career-options.png'), fullPage: true });
  await page.locator('[data-record-pane="careers"]').getByRole('button', { name: 'Add option' }).click();
  const careerDialog = page.locator('#career-option-dialog');
  await expect(careerDialog.locator('#career-preset-count')).not.toHaveText('');
  await careerDialog.locator('#career-preset-search').fill('Marine Engineer');
  const marineGuide = careerDialog.getByRole('button', { name: /Marine Engineer/ });
  await expect(marineGuide).toBeVisible();
  await marineGuide.click();
  await expect(careerDialog.locator('#career-guide-preview')).toContainText('Future change');
  await expect(careerDialog.getByRole('button', { name: 'Choose as primary' })).toBeVisible();
  await careerDialog.screenshot({ path: testInfo.outputPath('staff-career-preset.png') });
  await careerDialog.locator('#career-preset-search').fill('');
  await expect(careerDialog.locator('#career-focus-guidance')).toContainText('10% remains available');
  await careerDialog.getByLabel('Career, course, or route').fill('Digital Product Research');
  await careerDialog.getByLabel('Decision now').selectOption('promising-to-test');
  await careerDialog.getByLabel('Education or entry routes').fill('Build a research portfolio through practical projects.');
  await careerDialog.getByLabel('Next real-world test').fill('Interview two product researchers');
  await careerDialog.getByRole('button', { name: 'Save decision' }).click();
  await expect(careerDialog).not.toBeVisible();
  await expect(page.locator('#workspace-status')).toHaveText('Alternative added.');
  await expect(page.locator('#record-career-list')).toContainText('Digital Product Research');

  await page.locator('[data-record-tab="skills"]').click();
  await expect(page.locator('#record-skill-list')).toContainText('Data analysis');
  await expect(page.locator('#record-skill-list')).toContainText('School transport survey');
  await expect(page.locator('#record-skill-list').getByRole('button', { name: 'Add evidence' }).first()).toBeVisible();
  await page.locator('[data-record-pane="skills"]').getByRole('button', { name: 'Add skill plan' }).click();
  const skillPlanDialog = page.locator('#skill-plan-dialog');
  await expect(skillPlanDialog).toBeVisible();
  await skillPlanDialog.locator('[data-skill-pack="ai-ready"]').click();
  await expect(skillPlanDialog.locator('#skill-pack-preview')).toContainText('AI-ready professional');
  await skillPlanDialog.getByRole('button', { name: 'Add selected skills' }).click();
  await expect(skillPlanDialog).not.toBeVisible();
  await expect(page.locator('#workspace-status')).toContainText('skills added from AI-ready professional');
  await expect(page.locator('#record-skill-list')).toContainText('AI tool literacy');

  await page.locator('[data-record-pane="skills"]').getByRole('button', { name: 'Add one skill' }).click();
  const skillDialog = page.locator('#skill-dialog');
  await skillDialog.locator('#skill-preset-search').fill('SQL fundamentals');
  await expect(skillDialog.getByRole('button', { name: /SQL fundamentals/ })).toBeVisible();
  await skillDialog.locator('#skill-preset-search').fill('');
  await skillDialog.getByLabel('Skill', { exact: true }).fill('Interview synthesis');
  await skillDialog.locator('select[name="category"]').selectOption('analytical');
  await skillDialog.getByLabel('Current ability').selectOption('1');
  await skillDialog.getByLabel('Required ability').selectOption('3');
  await skillDialog.getByLabel('Development outcome').fill('Summarise five interviews into defensible themes.');
  await skillDialog.getByRole('button', { name: 'Save skill' }).click();
  await expect(skillDialog).not.toBeVisible();
  await expect(page.locator('#workspace-status')).toHaveText('Skill added to the roadmap.');
  const newSkill = page.locator('#record-skill-list .skill-roadmap-row').filter({ hasText: 'Interview synthesis' });
  await expect(newSkill).toBeVisible();
  await newSkill.getByRole('button', { name: 'Add evidence' }).click();
  const evidenceDialog = page.locator('#evidence-dialog');
  await evidenceDialog.getByLabel('Evidence title').fill('Prototype interview notes');
  await evidenceDialog.getByLabel('Observed level').selectOption('2');
  await evidenceDialog.getByLabel('Description').fill('Grouped repeated observations into three useful themes.');
  await evidenceDialog.getByRole('button', { name: 'Add evidence' }).click();
  await expect(evidenceDialog).not.toBeVisible();
  await expect(page.locator('#workspace-status')).toHaveText('Skill evidence added.');
  await expect(newSkill).toContainText('Prototype interview notes');

  await page.locator('[data-record-tab="sessions"]').click();
  await expect(page.locator('#record-cohort-context')).toContainText('Class 11-12 Career Direction');
  await expect(page.locator('#record-session-list')).toContainText('Review the design challenge');
  await expect(page.locator('#record-session-list')).toContainText('Product design remains the leading direction');
  await expect(page.locator('#record-session-list').getByRole('button', { name: 'Edit' })).toHaveCount(0);
  await page.locator('[data-record-pane="sessions"]').getByRole('button', { name: 'Open cohort' }).click();
  await expect(page.locator('[data-workspace-view="cohorts"]')).toBeVisible();
  await expect(page.locator('#cohort-detail-name')).toHaveText('Class 11-12 Career Direction');
  await expect(page.locator('#cohort-roster')).toContainText('Arjun Student');
  await page.screenshot({ path: testInfo.outputPath('staff-cohort-workspace.png'), fullPage: true });
  await page.getByRole('button', { name: 'Announce session' }).click();
  const sessionDialog = page.locator('#cohort-session-dialog');
  await sessionDialog.getByLabel('Start from a session plan').selectOption('primary-alternative');
  const sessionTopic = sessionDialog.getByRole('textbox', { name: 'Topic', exact: true });
  await expect(sessionTopic).toHaveValue('Choose a primary direction and deliberate alternatives');
  await sessionTopic.fill('Primary direction evidence review');
  await sessionDialog.getByRole('button', { name: 'Save announcement' }).click();
  await expect(sessionDialog).not.toBeVisible();
  await expect(page.locator('#workspace-status')).toHaveText('Session announced to the cohort.');
  const completedSession = page.locator('#cohort-session-list .cohort-session-row').filter({ hasText: 'Career reality and route comparison' });
  await completedSession.getByRole('button', { name: 'Attendance' }).click();
  const attendanceDialog = page.locator('#attendance-dialog');
  await attendanceDialog.locator('[data-attendance-status]').selectOption('present');
  await attendanceDialog.locator('[data-attendance-note]').fill('Explained the comparison clearly.');
  await attendanceDialog.getByRole('button', { name: 'Save attendance' }).click();
  await expect(page.locator('#workspace-status')).toHaveText('Attendance saved.');
  await page.locator('#cohort-roster').getByRole('button', { name: 'Open record' }).click();
  await expect(page.locator('[data-workspace-view="student-record"]')).toBeVisible();

  await page.locator('[data-record-tab="actions"]').click();
  await expect(page.locator('#record-action-list')).toContainText('Portfolio case study');
  await expect(page.locator('#record-action-list')).toContainText('Interview a product designer');
  const actionForm = page.locator('#record-action-form');
  expect(await actionForm.getByLabel('Start from an action preset').locator('option').count()).toBeGreaterThan(20);
  await actionForm.getByLabel('Start from an action preset').selectOption('compare-entry-routes');
  await expect(actionForm.getByPlaceholder('Specific next action')).toHaveValue('Compare three entry routes');
  await actionForm.getByPlaceholder('Specific next action').fill('Map three undergraduate research routes');
  await actionForm.getByPlaceholder('Definition of done or useful detail').fill('Compare entry requirements, cost, and practical exposure.');
  await actionForm.getByRole('button', { name: 'Assign' }).click();
  await expect(page.locator('#workspace-status')).toHaveText('Action added.');
  await expect(page.locator('#record-action-list')).toContainText('Map three undergraduate research routes');

  await page.locator('[data-record-tab="context"]').click();
  await expect(page.locator('#record-constraints')).toContainText('Moderate');
  await expect(page.locator('#record-constraints')).toContainText('Family wants a degree with a clear employment route.');
  await page.locator('#exam-target-preset').selectOption('NEET UG');
  await expect(page.locator('#academic-form input[name="exam_targets"]')).toHaveValue(/NEET UG/);

  await page.locator('[data-record-tab="notes"]').click();
  await expect(page.locator('#coach-note-list')).toContainText('Student responds well to tangible trials');
  await expect(page.locator('[data-workspace-view="student-record"]')).not.toContainText(/assessment/i);
});

test('student plan is useful on mobile and preserves coach-owned records', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await mockWorkspace(page, 'student');
  await page.goto('http://127.0.0.1:4321/dashboard', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#workspace-shell')).toBeVisible({ timeout: 10_000 });
  await expect(page.locator('[data-view-target="caseload"]')).toBeHidden();

  await page.locator('#mobile-nav [data-view-target="career"]').click();
  await expect(page.locator('[data-workspace-view="career"]')).toBeVisible();
  await expect(page.locator('#student-plan-summary')).toContainText('Option validation');
  await expect(page.locator('#student-plan-summary')).toContainText('Choose between design and engineering');
  await expect(page.locator('#student-cohort-context')).toContainText('Class 11-12 Career Direction');
  await expect(page.locator('#student-cohort-context')).toContainText('VSKP-C12-01');
  await expect(page.locator('#student-career-focus-summary')).toContainText('70%');

  const staffCareer = page.locator('#student-career-list .career-option-row').filter({ hasText: 'Product Design' });
  const ownCareer = page.locator('#student-career-list .career-option-row').filter({ hasText: 'Engineering Design' });
  await expect(staffCareer.getByRole('button', { name: 'Edit' })).toHaveCount(0);
  await expect(staffCareer.getByRole('button', { name: 'Remove' })).toHaveCount(0);
  await expect(ownCareer.getByRole('button', { name: 'Edit' })).toBeVisible();
  await expect(ownCareer.getByRole('button', { name: 'Remove' })).toBeVisible();

  await page.locator('[data-plan-tab="skills"]').click();
  const staffSkill = page.locator('#student-skill-list .skill-row').filter({ hasText: 'Data analysis' });
  const ownSkill = page.locator('#student-skill-list .skill-row').filter({ hasText: 'Visual storytelling' });
  await expect(staffSkill.getByRole('button', { name: 'Add evidence' })).toBeVisible();
  await expect(staffSkill.getByRole('button', { name: 'Edit' })).toHaveCount(0);
  await expect(staffSkill.getByRole('button', { name: 'Remove' })).toHaveCount(0);
  await expect(ownSkill.getByRole('button', { name: 'Edit' })).toBeVisible();

  await page.locator('[data-plan-tab="actions"]').click();
  const staffAction = page.locator('#student-action-list .coaching-action-row').filter({ hasText: 'Portfolio case study' });
  const ownAction = page.locator('#student-action-list .coaching-action-row').filter({ hasText: 'Interview a product designer' });
  await expect(staffAction.getByRole('button', { name: 'Mark complete' })).toBeVisible();
  await expect(staffAction.getByRole('button', { name: 'Remove' })).toHaveCount(0);
  await expect(ownAction.getByRole('button', { name: 'Remove' })).toBeVisible();

  await page.locator('[data-plan-tab="sessions"]').click();
  await expect(page.locator('#student-session-list')).toContainText('Review the design challenge');
  await expect(page.locator('#student-session-list').getByRole('button', { name: 'Edit' })).toHaveCount(0);
  await expect(page.locator('[data-workspace-view="career"]')).not.toContainText(/assessment/i);
  await page.screenshot({ path: testInfo.outputPath('student-plan-mobile.png'), fullPage: true });
  await page.locator('#mobile-nav [data-view-target="constraints"]').click();
  await page.locator('#non-negotiable-preset').selectOption('Clear backup route');
  await expect(page.locator('#constraints-form input[name="non_negotiables"]')).toHaveValue(/Clear backup route/);
  await page.screenshot({ path: testInfo.outputPath('student-context-mobile.png'), fullPage: true });

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(overflow).toBeLessThanOrEqual(1);
});
