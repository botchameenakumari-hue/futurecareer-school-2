import { expect, test } from '@playwright/test';

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
  skill_reviews: [
    {
      id: '22000000-0000-4000-8000-000000000001',
      skill_id: ids.staffSkill,
      student_id: ids.student,
      coach_id: ids.coach,
      coach_reviewed_on: '2026-08-11',
      coach_feedback: 'Good first pass. Explain the decision behind each chart.',
      coach_satisfaction: 4,
      next_focus: 'Explain one insight without notes.',
      student_feedback: null,
      student_satisfaction: null,
      updated_at: '2026-08-11T08:00:00.000Z',
    },
    {
      id: '22000000-0000-4000-8000-000000000002',
      skill_id: ids.staffSkill,
      student_id: ids.student,
      coach_id: null,
      coach_reviewed_on: null,
      coach_feedback: null,
      coach_satisfaction: null,
      next_focus: null,
      student_feedback: 'The examples made the next practice clear.',
      student_satisfaction: 5,
      student_feedback_on: '2026-08-12',
      updated_at: '2026-08-12T08:00:00.000Z',
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
      preparation: 'Update career directions and one skill proof.',
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
  }, {
    id: '50000000-0000-4000-8000-000000000002',
    student_id: ids.student,
    author_id: ids.coach,
    note_type: 'suggestion',
    visibility: 'student',
    content: 'This week, complete one small redesign challenge and write down what part of the work gave you energy.',
    created_at: timestamp,
  }],
  student_advice: [{
    id: '51000000-0000-4000-8000-000000000001',
    student_id: ids.student,
    cohort_id: ids.cohort,
    author_id: ids.coach,
    advice_date: '2026-08-12',
    title: 'Bring one route comparison',
    advice: 'Bring one credible course comparison to the next group session.',
    due_date: '2026-08-19',
    status: 'open',
    created_at: timestamp,
    updated_at: timestamp,
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

async function mockWorkspace(page, role, options = {}) {
  const currentProfile = profiles.find((item) => item.role === role);
  const user = authUser(currentProfile);
  const now = Math.floor(Date.now() / 1000);
  const localFixtures = structuredClone(fixtures);

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
    if (options.assessmentUnavailable && url.pathname === '/rest/v1/assessment_results') {
      await route.fulfill({ status: 503, headers, body: JSON.stringify({ code: 'ASSESSMENT_TABLE_UNAVAILABLE', message: 'Assessment results are temporarily unavailable.' }) });
      return;
    }
    if (url.pathname === '/rest/v1/account_requests' || url.pathname === '/rest/v1/audit_events') {
      await route.fulfill({ status: 200, headers, body: '[]' });
      return;
    }
    if (url.pathname.startsWith('/rest/v1/')) {
      const table = url.pathname.split('/').pop();
      const rows = localFixtures[table] ?? [];
      if (request.method() === 'DELETE') {
        await route.fulfill({ status: 204, headers, body: '' });
        return;
      }
      if (request.method() !== 'GET') {
        const payload = request.postDataJSON();
        const payloadRows = Array.isArray(payload) ? payload : [payload];
        const values = payloadRows[0];
        const filteredId = url.searchParams.get('id')?.replace(/^eq\./, '');
        const existing = rows.find((row) => row.id === filteredId) ?? {};
        const saved = {
          ...existing,
          ...values,
          id: existing.id ?? values.id ?? generatedIds[table] ?? '90000000-0000-4000-8000-000000000001',
          created_at: existing.created_at ?? values.created_at ?? timestamp,
          updated_at: timestamp,
        };
        // Career navigation intentionally reloads the page after saving. Keep
        // that table persistent in this mock; the other workflow fixtures use
        // the existing response-only behavior for composite updates.
        if (table === 'student_skills' && Array.isArray(payload)) {
          payloadRows.forEach((item, index) => {
            const row = { ...item, id: item.id ?? `${generatedIds.student_skills}-${index + 1}`, created_at: item.created_at ?? timestamp, updated_at: timestamp };
            rows.push(row);
          });
        } else if (table === 'career_paths' || table === 'skill_reviews') {
          const savedIndex = rows.findIndex((row) => row.id === saved.id);
          if (savedIndex >= 0) rows[savedIndex] = saved;
          else rows.push(saved);
        }
        const responseRows = table === 'student_skills' && Array.isArray(payload)
          ? payloadRows.map((item, index) => ({ ...item, id: item.id ?? `${generatedIds.student_skills}-${index + 1}`, created_at: item.created_at ?? timestamp, updated_at: timestamp }))
          : [saved];
        await route.fulfill({
          status: 200,
          headers,
          body: JSON.stringify(wantsObject ? (responseRows[0] ?? saved) : responseRows),
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
  const careerSkillInserts = [];
  page.on('request', (request) => {
    if (request.method() !== 'POST' || !request.url().includes('/rest/v1/student_skills')) return;
    try {
      const payload = request.postDataJSON();
      const rows = Array.isArray(payload) ? payload : [payload];
      if (rows.some((row) => row?.linked_career_path_id === generatedIds.career_paths)) careerSkillInserts.push(...rows);
    } catch { /* ignore non-JSON requests */ }
  });
  await mockWorkspace(page, 'admin');
  await page.goto('http://127.0.0.1:4321/dashboard', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#workspace-shell')).toBeVisible({ timeout: 10_000 });

  await page.locator('.workspace-nav > [data-view-target="caseload"]').click();
  await expect(page.locator('#caseload-summary')).toContainText('Active cases');
  await expect(page.locator('#caseload-summary')).toContainText('Need attention');
  const cohortFilter = page.locator('#caseload-cohort-filter');
  await expect(cohortFilter).toContainText('Class 11-12 Career Direction');
  await cohortFilter.selectOption(ids.cohort);
  await expect(page.locator('#caseload-table-body')).toContainText('Arjun Student');
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
  await expect(page.locator('#download-student-brief')).toBeVisible();
  const briefDownload = page.waitForEvent('download');
  await page.locator('#download-student-brief').click();
  expect((await briefDownload).suggestedFilename()).toMatch(/^coaching-brief-arjun-student\.pdf$/);
  await expect(page.locator('#record-decision-summary')).toContainText('Product Design');
  await expect(page.locator('#record-decision-summary')).toContainText('1 proof item across');

  await page.locator('[data-record-tab="careers"]').click();
  await expect(page.locator('#record-career-list')).toContainText('Product Design');
  await expect(page.locator('#record-career-list')).toContainText('Engineering Design');
  await expect(page.locator('#record-career-list')).toContainText('Portfolio admissions need sustained preparation');
  await page.screenshot({ path: testInfo.outputPath('staff-career-options.png'), fullPage: true });
  const productDesignRow = page.locator('#record-career-list .career-decision-row').filter({ hasText: 'Product Design' });
  await productDesignRow.getByRole('button', { name: 'Add suggested skills' }).click();
  await expect(page.locator('#workspace-status')).toContainText(/suggested skills added|already in this plan/i);
  await page.locator('#record-career-list .career-decision-row').filter({ hasText: 'Product Design' }).getByRole('button', { name: 'Edit' }).click();
  await expect(page).toHaveURL(new RegExp(`/dashboard/career-decision\\?edit=${ids.staffCareer}`));
  await expect(page.locator('#career-dialog-eyebrow')).toHaveText('Student career plan');
  await expect(page.locator('#career-dialog-back')).toHaveText('Back to student record');
  await expect(page.locator('#career-option-form input[name="title"]')).toHaveValue('Product Design');
  await page.locator('#career-dialog-back').click();
  await expect(page.locator('[data-workspace-view="student-record"]')).toBeVisible();
  await expect(page.locator('#record-career-list')).toContainText('Product Design');
  await page.locator('[data-record-pane="careers"]').getByRole('button', { name: 'Add option' }).click();
  const careerDialog = page.locator('#career-option-dialog');
  await expect(page).toHaveURL(/\/dashboard\/career-decision/);
  await expect(careerDialog).toBeVisible();
  await expect(careerDialog).toHaveAttribute('open', '');
  expect(await careerDialog.evaluate((element) => element.matches(':modal'))).toBe(false);
  await expect(careerDialog.locator('#career-preset-count')).not.toHaveText('');
  await careerDialog.locator('button[data-career-interest="systems"]').click();
  await expect(careerDialog.locator('#career-preset-results button')).not.toHaveCount(0);
  await careerDialog.locator('button[data-career-interest="systems"]').click();
  await careerDialog.locator('#career-preset-search').fill('Marine Engineer');
  const marineGuide = careerDialog.getByRole('button', { name: /Marine Engineer/ });
  await expect(marineGuide).toBeVisible();
  await marineGuide.click();
  await expect(careerDialog.locator('#career-guide-preview')).toContainText('Useful first tests');
  await expect(careerDialog.getByRole('button', { name: 'Choose as primary' })).toBeVisible();
  const careerLayout = await page.evaluate(() => {
    const dialog = document.querySelector('#career-option-dialog');
    const rect = dialog?.getBoundingClientRect();
    const footer = dialog?.querySelector('form > footer');
    return {
      documentOverflow: document.documentElement.scrollWidth - window.innerWidth,
      dialogOverflow: dialog ? dialog.scrollWidth - dialog.clientWidth : 999,
      dialogWidth: rect?.width ?? 0,
      viewportWidth: window.innerWidth,
      fillsViewport: Boolean(rect && rect.left >= -1 && rect.right <= window.innerWidth + 1 && rect.top >= -1 && rect.bottom <= window.innerHeight + 1),
      footerPosition: footer instanceof HTMLElement ? getComputedStyle(footer).position : 'missing',
    };
  });
  expect(careerLayout.documentOverflow).toBe(0);
  expect(careerLayout.dialogOverflow).toBe(0);
  expect(careerLayout.dialogWidth).toBeGreaterThan(careerLayout.viewportWidth - 2);
  expect(careerLayout.footerPosition).toBe('sticky');
  await careerDialog.screenshot({ path: testInfo.outputPath('staff-career-preset.png') });
  await careerDialog.locator('#career-preset-search').fill('');
  await careerDialog.getByText('Additional coach notes (optional)').click();
  await expect(careerDialog.locator('#career-focus-guidance')).toHaveCount(0);
  await expect(careerDialog.getByLabel('Rough effort focus percentage')).toHaveCount(0);
  // Custom career entry is intentionally collapsed until a learner or coach
  // asks for it, so catalogue choices do not compete with the main flow.
  await careerDialog.locator('#career-open-custom').click();
  await expect(careerDialog.locator('#career-custom-entry')).toBeVisible();
  await careerDialog.locator('#career-custom-name').fill('Digital Product Research');
  await careerDialog.locator('#career-use-custom').click();
  await expect(careerDialog.locator('#career-option-form input[name="title"]')).toHaveValue('Digital Product Research');
  await careerDialog.getByLabel('Decision now').selectOption('promising-to-test');
  await careerDialog.getByLabel('Education or entry routes').fill('Build a research portfolio through practical projects.');
  await careerDialog.getByLabel('Useful next step').fill('Interview two product researchers');
  await careerDialog.locator('#career-save-submit').click();
  await expect(careerDialog).not.toBeVisible();
  await expect(page.locator('#workspace-status')).toContainText('Primary career option saved.');
  await expect(page.locator('#workspace-status')).toContainText('8 linked starter skills are ready');
  await expect(page.locator('#record-career-list')).toContainText('Digital Product Research');
  expect(careerSkillInserts.length).toBeGreaterThanOrEqual(5);
  expect(careerSkillInserts.every((row) => row.linked_career_path_id === generatedIds.career_paths)).toBe(true);
  expect(careerSkillInserts.every((row) => ['technical', 'digital', 'communication', 'analytical', 'creative', 'leadership', 'domain', 'language', 'employability'].includes(row.category))).toBe(true);
  await expect(page.locator('#record-career-list .career-decision-row').filter({ hasText: 'Digital Product Research' })).toContainText(/skills mapped to this career option/i);

  await page.locator('[data-record-tab="skills"]').click();
  await expect(page.locator('#record-skill-list')).toContainText('Data analysis');
  await expect(page.locator('#record-skill-list')).toContainText('School transport survey');
  await expect(page.locator('#record-skill-list')).toContainText('Good first pass. Explain the decision behind each chart.');
  await expect(page.locator('#record-skill-list')).toContainText('The examples made the next practice clear.');
  await expect(page.locator('#record-skill-list')).toContainText('4/10 · Developing');
  await expect(page.locator('#record-skill-list')).toContainText('5/10 · On track');
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
  await expect(skillDialog.getByLabel('Target ability')).toHaveCount(0);
  await skillDialog.locator('#skill-detail-fields > summary').click();
  await skillDialog.getByLabel('Development outcome').fill('Summarise five interviews into defensible themes.');
  await skillDialog.getByRole('button', { name: 'Save skill' }).click();
  await expect(skillDialog).not.toBeVisible();
  await expect(page.locator('#workspace-status')).toHaveText('Skill added to the roadmap.');
  // The roadmap defaults to five cards per page. Move the active group to its
  // final page for this record-level assertion so the newly added skill is
  // intentionally brought into view instead of relying on an implementation-
  // specific sort.
  await page.locator('#record-skill-list [data-skill-scope-tab="foundation"]').click();
  await page.locator('#record-skill-list [data-skill-page-action="last"]:visible').first().click();
  const newSkill = page.locator('#record-skill-list .skill-roadmap-row').filter({ hasText: 'Interview synthesis' });
  await expect(newSkill).toBeVisible();
  await newSkill.getByRole('button', { name: 'Add evidence' }).click();
  const evidenceDialog = page.locator('#evidence-dialog');
  await evidenceDialog.getByLabel('Description').fill('Grouped repeated observations into three useful themes.');
  await evidenceDialog.getByLabel('Links to proof (optional)').fill('https://example.test/interview-notes\nhttps://example.test/interview-summary');
  await evidenceDialog.getByRole('button', { name: 'Add evidence' }).click();
  await expect(evidenceDialog).not.toBeVisible();
  await expect(page.locator('#workspace-status')).toHaveText('Skill evidence added.');
  await expect(newSkill).toContainText('Grouped repeated observations into three useful themes.');
  await newSkill.locator('details.skill-evidence-details > summary').click();
  await expect(newSkill.getByRole('link', { name: 'Open proof link' })).toHaveCount(2);
  await expect(newSkill.getByRole('button', { name: 'Remove skill' })).toBeVisible();
  await newSkill.getByRole('button', { name: /Add coach feedback|Update coach feedback/ }).click();
  const coachSkillFeedback = newSkill.locator('[data-inline-skill-review]');
  const coachQuickRating = newSkill.locator('[data-quick-skill-rating]');
  await expect(coachQuickRating.locator('input[type="range"]')).toBeVisible();
  await expect(coachQuickRating.locator('output')).toHaveText('Not rated');
  const coachRatingRequest = page.waitForRequest((request) => {
    if (!['POST', 'PATCH'].includes(request.method()) || new URL(request.url()).pathname !== '/rest/v1/skill_reviews') return false;
    return request.postDataJSON().coach_satisfaction === 7;
  });
  await coachQuickRating.getByLabel(/Coach satisfaction/).fill('7');
  await expect(coachQuickRating.locator('output')).toHaveText('7/10');
  await coachSkillFeedback.getByLabel('Feedback (optional)').fill('The synthesis is clear and ready to test with a coach.');
  await coachSkillFeedback.getByLabel('Next step (optional)').fill('Explain one theme aloud without reading notes.');
  await coachSkillFeedback.getByRole('button', { name: 'Save coach guidance' }).click();
  await coachRatingRequest;
  await expect(page.locator('#workspace-status')).toHaveText('Coach feedback was saved. Satisfaction score saved: 7/10.');
  await expect(newSkill).toContainText('Suggested next step: Explain one theme aloud without reading notes.');
  await newSkill.getByRole('button', { name: /Add coach feedback|Update coach feedback/ }).click();
  const zeroCoachFeedback = newSkill.locator('[data-quick-skill-rating]');
  await expect(zeroCoachFeedback.locator('output')).toHaveText('7/10');
  await expect(zeroCoachFeedback.locator('[data-rating-slider]')).toHaveValue('7');
  await expect(zeroCoachFeedback.locator('[data-rating-slider-shell]')).toHaveAttribute('style', /--rating-progress:\s*70%/);
  const zeroCoachSlider = zeroCoachFeedback.getByLabel(/Coach satisfaction/);
  // Selecting the left edge is an intentional score of zero, not an empty
  // rating. Use a real click because a range already at zero does not emit an
  // input event when the user chooses that same value again.
  await zeroCoachSlider.click({ position: { x: 1, y: 10 } });
  await expect(zeroCoachFeedback.locator('output')).toHaveText('0/10');
  await expect(zeroCoachSlider).toHaveAttribute('aria-valuetext', '0 out of 10');
  await expect(zeroCoachFeedback.locator('[data-rating-slider-shell]')).toHaveAttribute('style', /--rating-progress:\s*0%/);
  const zeroCoachRatingRequest = page.waitForRequest((request) => {
    if (!['POST', 'PATCH'].includes(request.method()) || new URL(request.url()).pathname !== '/rest/v1/skill_reviews') return false;
    return request.postDataJSON().coach_satisfaction === 0;
  });
  await zeroCoachFeedback.getByRole('button', { name: 'Save score' }).click();
  await zeroCoachRatingRequest;
  await expect(page.locator('#workspace-status')).toHaveText('Coach feedback was saved. Satisfaction score saved: 0/10.');
  await expect(newSkill).toContainText('0/10 · Not rated');

  await page.locator('[data-record-tab="sessions"]').click();
  await expect(page.locator('#record-cohort-context')).toContainText('Class 11-12 Career Direction');
  await expect(page.locator('#record-session-list')).toContainText('Review the design challenge');
  await expect(page.locator('#record-session-list')).toContainText('Product design remains the leading direction');
  await expect(page.locator('#record-session-list').getByRole('button', { name: 'Edit' })).toHaveCount(0);
  await page.locator('[data-record-pane="sessions"]').getByRole('button', { name: 'Open cohort' }).click();
  await expect(page.locator('[data-workspace-view="cohorts"]')).toBeVisible();
  await expect(page.locator('#cohort-detail-name')).toHaveText('Class 11-12 Career Direction');
  await expect(page.locator('#cohort-roster')).toContainText('Arjun Student');
  // The cohort hub has one authoritative composer and feed. Duplicate IDs
  // previously caused staff posts to target the wrong hidden section.
  await expect(page.locator('#cohort-post-form')).toHaveCount(1);
  await expect(page.locator('#cohort-post-list')).toHaveCount(1);
  await expect(page.locator('#cohort-community-task-list')).toHaveCount(1);
  // The legacy checkbox is intentionally hidden; the visible mode control is
  // the only discoverable way to create a group commitment.
  const cohortComposer = page.locator('#cohort-post-form');
  await expect(cohortComposer.locator('[data-cohort-mode="update"]')).toBeVisible();
  await cohortComposer.locator('[data-cohort-mode="task"]').click();
  await expect(cohortComposer.locator('input[name="task_title"]')).toBeVisible();
  await expect(cohortComposer.getByRole('button', { name: 'Create group task' })).toBeVisible();
  await cohortComposer.locator('[data-cohort-mode="update"]').click();
  await page.screenshot({ path: testInfo.outputPath('staff-cohort-workspace.png'), fullPage: true });
  await page.getByRole('button', { name: 'Announce a session' }).click();
  const sessionDialog = page.locator('#cohort-session-dialog');
  await sessionDialog.getByLabel('Start from a session plan').selectOption('primary-alternative');
  const sessionTopic = sessionDialog.getByRole('textbox', { name: 'Topic', exact: true });
  await expect(sessionTopic).toHaveValue('Choose serious career options and useful alternatives');
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
  await expect(page.locator('#cohort-detail-summary')).toContainText('1/1 recorded');
  await page.locator('#cohort-roster').getByRole('button', { name: 'Open record' }).click();
  await expect(page.locator('[data-workspace-view="student-record"]')).toBeVisible();

  await page.locator('[data-record-tab="actions"]').click();
  await expect(page.locator('#record-action-list')).toContainText('Portfolio case study');
  await expect(page.locator('#record-action-list')).toContainText('Interview a product designer');
  await expect(page.locator('#record-actions-pane .action-form-help')).toContainText('make the action specific');
  const actionForm = page.locator('#record-action-form');
  expect(await actionForm.getByLabel('Choose from suggested actions').locator('option').count()).toBeGreaterThan(20);
  await actionForm.getByLabel('Choose from suggested actions').selectOption('compare-entry-routes');
  await expect(actionForm.getByPlaceholder('For example: Compare two entry routes')).toHaveValue('Compare three entry routes');
  await actionForm.getByPlaceholder('For example: Compare two entry routes').fill('Map three undergraduate research routes');
  await actionForm.getByPlaceholder('Describe the result, proof, or next decision that will show progress.').fill('Compare entry requirements, cost, and practical exposure.');
  await actionForm.getByRole('button', { name: 'Assign' }).click();
  await expect(page.locator('#workspace-status')).toHaveText('Action added.');
  await expect(page.locator('#record-action-list')).toContainText('Map three undergraduate research routes');
  await expect(page.locator('#record-action-list')).toContainText('Set weekly time for your open actions');
  await expect(page.locator('#record-action-list')).toContainText('Choose a weekly amount when creating or updating an action');

  await page.locator('[data-record-tab="context"]').click();
  await expect(page.locator('#record-profile')).toContainText('Student name');
  await expect(page.locator('#record-profile')).toContainText('Arjun Student');
  await expect(page.locator('[data-record-pane="context"]')).toContainText('Planning context');
  await expect(page.locator('#record-constraints')).toContainText('8 hours');
  await expect(page.locator('#record-constraints')).toContainText('Practical learning');
  await page.locator('#exam-target-preset').selectOption('NEET UG');
  await expect(page.locator('#academic-form input[name="exam_targets"]')).toHaveValue(/NEET UG/);

  await page.locator('[data-record-tab="notes"]').click();
  await expect(page.locator('#coach-note-list')).toContainText('Student responds well to tangible trials');
  await expect(page.locator('#coach-note-list')).toContainText('Student dashboard');
  await expect(page.locator('#coach-note-form select[name="note_type"] option[value="suggestion"]')).toHaveText('Suggestion for student');
  await expect(page.locator('#coach-note-form select[name="visibility"] option[value="student"]')).toHaveText('Student dashboard');
  await expect(page.locator('[data-workspace-view="student-record"]')).toContainText('Assessment evidence');
  await expect(page.locator('#record-assessment-overview-copy')).toContainText('No saved assessment results yet');
  await expect(page.locator('#record-assessment-overview-copy')).toContainText('Assessments are optional');
  await page.getByRole('button', { name: 'Add guidance' }).click();
  const adviceDialog = page.locator('#advice-dialog');
  await expect(adviceDialog.locator('#advice-cohort')).toHaveValue(ids.cohort);
  await adviceDialog.getByLabel('Date shared').fill('2026-08-20');
  await adviceDialog.getByLabel('Short title').fill('Compare two course syllabi');
  await adviceDialog.getByLabel('Your guidance').fill('Compare entry requirements and costs for two realistic courses, then bring the notes to the next review.');
  await adviceDialog.getByLabel('Due date').fill('2026-08-27');
  await adviceDialog.getByRole('button', { name: 'Save guidance' }).click();
  await expect(adviceDialog).not.toBeVisible();
  await expect(page.locator('#workspace-status')).toHaveText('Coach guidance shared with the student.');
  await expect(page.locator('#student-advice-list')).toContainText('Compare two course syllabi');
});

test('student dashboard opens when assessment results are unavailable', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await mockWorkspace(page, 'student', { assessmentUnavailable: true });
  await page.goto('http://127.0.0.1:4321/dashboard', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#workspace-shell')).toBeVisible({ timeout: 10_000 });
  await expect(page.locator('[data-workspace-view="overview"]')).toBeVisible();
  await page.locator('#mobile-nav [data-view-target="career"]').click();
  await expect(page.locator('[data-workspace-view="career"]')).toBeVisible();
  await expect(page.locator('#student-assessment-list')).toContainText('Assessments are optional');
  await expect(page.locator('#plan-skills-pane')).toBeHidden();
  await page.locator('[data-plan-tab="skills"]').click();
  await expect(page.locator('#plan-skills-pane')).toBeVisible();
  await expect(page.locator('#plan-skills-pane')).toContainText('0–10 rating');
});

test('student plan is useful on mobile and preserves coach-owned records', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await mockWorkspace(page, 'student');
  await page.goto('http://127.0.0.1:4321/dashboard', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#workspace-shell')).toBeVisible({ timeout: 10_000 });
  await expect(page.locator('[data-view-target="caseload"]')).toBeHidden();
  await expect(page.locator('[data-workspace-view="overview"]')).toBeVisible();
  // Overview attention links must retain the destination plan tab they were
  // generated for; otherwise they reopen whichever coaching-plan tab was last
  // active and make the dashboard feel randomly mapped.
  await expect(page.locator('#attention-list [data-open-view="career"][data-plan-shortcut-tab="actions"]')).toBeVisible();
  await expect(page.locator('#attention-list [data-open-view="career"][data-plan-shortcut-tab="skills"]')).toBeVisible();
  await expect(page.locator('#attention-list')).not.toContainText(/next review|career review coming up/i);
  await page.locator('#attention-list [data-open-view="career"][data-plan-shortcut-tab="skills"]').click();
  await expect(page.locator('[data-workspace-view="career"]')).toBeVisible();
  await expect(page.locator('#plan-skills-pane')).toBeVisible();
  await expect(page.locator('#plan-skills-pane')).toContainText('0–10 rating');
  await expect(page.locator('#plan-skills-pane')).not.toContainText('0–10 view');
  await page.locator('#mobile-nav [data-view-target="overview"]').click();
  await expect(page.locator('[data-workspace-view="overview"]')).toBeVisible();

  await page.locator('#mobile-nav [data-view-target="career"]').click();
  await expect(page.locator('[data-workspace-view="career"]')).toBeVisible();
  await expect(page.locator('#download-student-plan')).toBeVisible();
  const planDownload = page.waitForEvent('download');
  await page.locator('#download-student-plan').click();
  expect((await planDownload).suggestedFilename()).toMatch(/^coaching-plan-arjun-student\.pdf$/);
  await page.locator('[data-plan-tab="options"]').click();
  await expect(page.locator('#student-plan-summary')).toContainText('Option validation');
  await expect(page.locator('#student-plan-summary')).toContainText('Choose between design and engineering');
  await expect(page.locator('#student-cohort-context')).toContainText('Class 11-12 Career Direction');
  await expect(page.locator('#student-cohort-context')).toContainText('VSKP-C12-01');
  await expect(page.locator('#student-cohort-context')).toContainText('20 Aug 2027');
  await expect(page.locator('#student-career-focus-summary')).toContainText('Primary career options');
  await expect(page.locator('#student-career-focus-summary')).toContainText('Choose your own level of focus');
  await expect(page.locator('.student-plan-start')).toContainText('Move your plan forward');
  await expect(page.locator('.student-plan-start')).toContainText('Choose a career option');
  await expect(page.locator('.student-plan-start')).toContainText('Add next action');
  const studentPlanOverflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(studentPlanOverflow).toBeLessThanOrEqual(1);
  const studentPlanTabsOverflow = await page.locator('.student-plan-tabs').evaluate((element) => element.scrollWidth - element.clientWidth);
  expect(studentPlanTabsOverflow).toBeLessThanOrEqual(1);
  await page.locator('.student-plan-start').getByRole('button', { name: 'Choose a career option' }).click();
  await expect(page).toHaveURL(/\/dashboard\/career-decision/);
  expect(await page.locator('#career-option-dialog').evaluate((element) => element.matches(':modal'))).toBe(false);
  await expect(page.locator('#career-stage-guidance')).toContainText('Class 11–12');
  await expect(page.locator('#career-stage-start-title')).toContainText('Compare courses');
  await expect(page.locator('#career-preset-category')).toHaveValue('all');
  await expect(page.locator('#career-study-stage')).toHaveValue('after-12th-science');
  expect(await page.locator('#career-preset-category option').count()).toBeGreaterThan(3);
  expect(await page.locator('#career-preset-results .career-library-result').count()).toBeLessThanOrEqual(24);
  await expect(page.locator('[data-career-page="next"]')).toBeVisible();
  await expect(page.locator('.career-interest-chips')).toContainText('Helping people');
  await expect(page.locator('#career-decision-checklist')).toContainText('Answer four practical questions');
  await expect(page.locator('#career-interest-guidance')).toContainText('Choose one or two interests');
  await expect(page.locator('#career-guide-preview')).toContainText('Choose a career card');
  await page.locator('#career-preset-results .career-library-result > button').first().click();
  await expect(page.locator('#career-guide-preview')).toContainText('Subjects and routes to consider');
  await expect(page.locator('#career-guide-preview')).toContainText('Earning context');
  await expect(page.locator('#career-guide-preview')).toContainText('What is changing');
  await page.locator('#career-study-stage').selectOption('after-12th-commerce');
  await expect(page.locator('#career-interest-guidance')).toContainText('study stage');
  expect(await page.locator('#career-preset-results .career-library-result').count()).toBeLessThanOrEqual(24);
  await expect(page.locator('[data-career-page="next"]')).toBeVisible();
  await page.locator('#career-study-stage').selectOption('after-12th-science');
  await page.locator('.career-interest-chips button[data-career-interest="creative"]').click();
  await expect(page.locator('#career-interest-guidance')).toContainText('guide');
  await expect(page.locator('#career-detail-fields')).toBeHidden();
  await expect(page.locator('#career-manual-family-field')).toBeHidden();
  await page.locator('#career-option-form .segmented-control label').filter({ hasText: 'Secondary career option' }).click();
  await expect(page.locator('#career-focus-range')).toHaveCount(0);
  await page.locator('#career-option-form .segmented-control label').filter({ hasText: 'Primary career option' }).click();
  await expect(page.locator('#career-focus-number')).toHaveCount(0);
  const compareOptions = page.locator('#career-preset-results input[data-compare-career]');
  await expect(compareOptions).not.toHaveCount(0);
  await compareOptions.nth(0).check();
  await compareOptions.nth(1).check();
  await expect(page.locator('#career-compare-panel')).toBeVisible();
  await expect(page.locator('#career-compare-panel')).toContainText('Compare before choosing');
  await expect(page.locator('#career-compare-panel .career-compare-grid article')).toHaveCount(2);
  const careerDialogOverflow = await page.evaluate(() => {
    const dialog = document.querySelector('#career-option-dialog');
    return dialog instanceof HTMLElement ? dialog.scrollWidth - dialog.clientWidth : 999;
  });
  expect(careerDialogOverflow).toBeLessThanOrEqual(1);
  const discardPrompt = page.waitForEvent('dialog').then((dialog) => dialog.accept());
  await page.locator('[data-close-dialog="career-option-dialog"]').first().click();
  await discardPrompt;
  await expect(page.locator('[data-workspace-view="overview"]')).toBeVisible();
  await page.locator('#mobile-nav [data-view-target="career"]').click();
  await expect(page.locator('[data-workspace-view="career"]')).toBeVisible();

  const staffCareer = page.locator('#student-career-list .career-decision-row').filter({ hasText: 'Product Design' });
  const ownCareer = page.locator('#student-career-list .career-decision-row').filter({ hasText: 'Engineering Design' });
  await expect(staffCareer.getByRole('button', { name: 'Edit' })).toHaveCount(0);
  await expect(staffCareer.getByRole('button', { name: 'Remove' })).toHaveCount(0);
  await expect(ownCareer.getByRole('button', { name: 'Edit' })).toBeVisible();
  await expect(ownCareer.getByRole('button', { name: 'Remove' })).toBeVisible();

  await page.locator('[data-plan-tab="skills"]').click();
  await expect(page.locator('.student-plan-start')).toBeHidden();
  await expect(page.locator('#student-plan-summary')).toBeHidden();
  await expect(page.locator('#student-cohort-context')).toBeHidden();
  const assertPlanTabFits = async () => {
    const result = await page.locator('[data-workspace-view="career"]').evaluate((view) => ({
      documentOverflow: document.documentElement.scrollWidth - window.innerWidth,
      viewOverflow: view.scrollWidth - view.clientWidth,
    }));
    expect(result.documentOverflow).toBeLessThanOrEqual(1);
    expect(result.viewOverflow).toBeLessThanOrEqual(1);
  };
  await assertPlanTabFits();
  await page.screenshot({ path: testInfo.outputPath('student-skills-mobile.png'), fullPage: true });
  await page.locator('#student-skill-list [data-skill-scope-tab="career-specific"]').click();
  const staffSkill = page.locator('#student-skill-list .skill-roadmap-row').filter({ hasText: 'Data analysis' });
  const ownSkill = page.locator('#student-skill-list .skill-roadmap-row').filter({ hasText: 'Visual storytelling' });
  const skillCardLayout = async () => ownSkill.evaluate((card) => {
    const bounds = card.getBoundingClientRect();
    const title = card.querySelector('.skill-card-heading strong');
    const meaning = card.querySelector('.skill-meaning');
    const abilityItems = Array.from(card.querySelectorAll('.skill-ability-copy > span')).map((item) => item.getBoundingClientRect());
    const actionItems = Array.from(card.querySelectorAll('.skill-action-preview > div')).map((item) => item.getBoundingClientRect());
    return {
      overflow: card.scrollWidth - card.clientWidth,
      titleSize: title ? Number.parseFloat(getComputedStyle(title).fontSize) : 0,
      meaningInset: meaning ? meaning.getBoundingClientRect().left - bounds.left : 0,
      abilitySideBySide: abilityItems.length > 1 && Math.abs(abilityItems[0].top - abilityItems[1].top) < 2,
      actionSideBySide: actionItems.length > 1 && Math.abs(actionItems[0].top - actionItems[1].top) < 2,
    };
  });
  const mobileSkillLayout = await skillCardLayout();
  expect(mobileSkillLayout.overflow).toBeLessThanOrEqual(1);
  expect(mobileSkillLayout.titleSize).toBeGreaterThanOrEqual(22);
  expect(mobileSkillLayout.meaningInset).toBeGreaterThanOrEqual(12);
  expect(mobileSkillLayout.abilitySideBySide).toBe(false);
  expect(mobileSkillLayout.actionSideBySide).toBe(false);
  await page.setViewportSize({ width: 1440, height: 900 });
  const desktopSkillLayout = await skillCardLayout();
  expect(desktopSkillLayout.overflow).toBeLessThanOrEqual(1);
  expect(desktopSkillLayout.titleSize).toBeGreaterThanOrEqual(25);
  expect(desktopSkillLayout.meaningInset).toBeGreaterThanOrEqual(12);
  expect(desktopSkillLayout.abilitySideBySide).toBe(true);
  expect(desktopSkillLayout.actionSideBySide).toBe(true);
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(ownSkill.locator('.skill-meaning')).toContainText('What this means');
  await expect(ownSkill.locator('.skill-ability-summary')).toContainText('Current ability');
  await expect(ownSkill.locator('.skill-action-preview')).toContainText('Start here');
  await expect(ownSkill.locator('.skill-action-preview')).toContainText('Proof to collect');
  await expect(ownSkill.locator('.skill-progression-details')).toHaveCount(1);
  // Evidence stays collapsed initially so a learner can scan several skills
  // without losing access to the underlying descriptions and links.
  await expect(staffSkill.locator('details.skill-evidence-details')).toHaveCount(1);
  await expect(staffSkill.locator('details.skill-evidence-details')).not.toHaveAttribute('open', '');
  await expect(staffSkill.getByRole('button', { name: 'Add evidence' })).toBeVisible();
  await expect(staffSkill.getByRole('button', { name: 'Edit skill', exact: true })).toHaveCount(0);
  // Students can remove any skill from their own plan, including a recommended
  // or coach-added starting skill, when it is no longer useful to practise.
  await expect(staffSkill.getByRole('button', { name: 'Remove skill', exact: true })).toBeVisible();
  await expect(ownSkill.getByRole('button', { name: 'Edit skill', exact: true })).toBeVisible();
  await expect(ownSkill.getByRole('button', { name: 'Remove skill', exact: true })).toBeVisible();
  // All skills is a real paged view as well, with the same page-size and
  // first/previous/next/last controls as each individual group.
  await page.locator('#student-skill-list [data-skill-scope-tab="all"]').click();
  const allSkillPagination = page.locator('#student-skill-list [data-all-skill-pagination]:visible').first();
  await expect(allSkillPagination).toBeVisible();
  await expect(allSkillPagination.locator('[data-all-skill-page-indicator]')).toContainText(/page 1 of/);
  await expect(allSkillPagination.locator('[data-all-skill-page-size-select]')).toHaveValue('5');
  const allSkillPageCount = await allSkillPagination.locator('[data-all-skill-page-number]').count();
  if (allSkillPageCount > 1) {
    await allSkillPagination.locator('[data-all-skill-page-number="2"]').click();
    await expect(allSkillPagination.locator('[data-all-skill-page-indicator]')).toContainText(/page 2 of/);
    await allSkillPagination.locator('[data-all-skill-page-action="first"]').click();
    await expect(allSkillPagination.locator('[data-all-skill-page-indicator]')).toContainText(/page 1 of/);
  }
  await page.locator('#student-skill-list [data-skill-scope-tab="career-specific"]').click();
  const studentSkillFeedback = ownSkill.locator('[data-quick-skill-rating]');
  const sliderAppearance = await studentSkillFeedback.locator('[data-rating-slider]').evaluate((element) => {
    const style = getComputedStyle(element);
    const output = element.closest('.rating-slider')?.querySelector('output');
    const outputStyle = output ? getComputedStyle(output) : null;
    return {
      type: element.getAttribute('type'),
      appearance: style.appearance,
      webkitAppearance: style.webkitAppearance,
      outputBorder: outputStyle?.borderStyle,
      outputBackground: outputStyle?.backgroundColor,
    };
  });
  expect(sliderAppearance.type).toBe('range');
  expect(sliderAppearance.appearance).toBe('none');
  expect(sliderAppearance.webkitAppearance).toBe('none');
  expect(sliderAppearance.outputBorder).toBe('none');
  await expect(studentSkillFeedback.locator('output')).toHaveText('Not rated');
  await studentSkillFeedback.getByLabel(/Your satisfaction/).fill('4');
  await expect(studentSkillFeedback.locator('output')).toHaveText('4/10');
  const studentRatingRequest = page.waitForRequest((request) => {
    if (!['POST', 'PATCH'].includes(request.method()) || new URL(request.url()).pathname !== '/rest/v1/skill_reviews') return false;
    return request.postDataJSON().student_satisfaction === 4;
  });
  await studentSkillFeedback.getByRole('button', { name: 'Save score' }).click();
  await studentRatingRequest;
  await expect(page.locator('#workspace-status')).toHaveText('Your skill reflection was saved. Satisfaction score saved: 4/10.');
  await expect(ownSkill).toContainText('4/10 · Developing');
  await expect(ownSkill.locator('[data-quick-skill-rating] [data-rating-slider]')).toHaveValue('4');
  await expect(ownSkill.locator('[data-quick-skill-rating] [data-rating-slider-shell]')).toHaveAttribute('style', /--rating-progress:\s*40%/);
  await page.reload({ waitUntil: 'domcontentloaded' });
  await expect(page.locator('#workspace-shell')).toBeVisible({ timeout: 10_000 });
  // Refresh continues the active career workspace and its Skills tab rather
  // than silently returning the learner to Overview.
  await expect(page.locator('[data-workspace-view="career"]')).toBeVisible();
  await expect(page.locator('[data-plan-tab="skills"]')).toHaveAttribute('aria-selected', 'true');
  const reloadedSkill = page.locator('#student-skill-list .skill-roadmap-row').filter({ hasText: 'Visual storytelling' });
  await expect(reloadedSkill).toContainText('4/10 · Developing');
  await expect(reloadedSkill.locator('[data-quick-skill-rating] [data-rating-slider]')).toHaveValue('4');
  await expect(reloadedSkill.locator('[data-quick-skill-rating] [data-rating-output]')).toHaveText('4/10');
  await expect(reloadedSkill.locator('[data-quick-skill-rating] [data-rating-slider-shell]')).toHaveAttribute('style', /--rating-progress:\s*40%/);
  // Zero is a deliberate rating, not an empty value. Confirm that moving the
  // card slider fully left is persisted and remains visually at 0%.
  const zeroRatingRequest = page.waitForRequest((request) => {
    if (!['POST', 'PATCH'].includes(request.method()) || new URL(request.url()).pathname !== '/rest/v1/skill_reviews') return false;
    return request.postDataJSON().student_satisfaction === 0;
  });
  const reloadedQuickRating = reloadedSkill.locator('[data-quick-skill-rating]');
  await reloadedQuickRating.getByLabel(/Your satisfaction/).fill('0');
  await reloadedQuickRating.getByRole('button', { name: 'Save score' }).click();
  await zeroRatingRequest;
  await expect(reloadedSkill.locator('[data-quick-skill-rating] [data-rating-output]')).toHaveText('0/10');
  await expect(reloadedSkill.locator('[data-quick-skill-rating] [data-rating-slider-shell]')).toHaveAttribute('style', /--rating-progress:\s*0%/);

  await page.locator('[data-plan-tab="actions"]').click();
  await assertPlanTabFits();
  await expect(page.locator('#workspace-status')).toHaveText('');
  await page.locator('.student-plan-start').getByRole('button', { name: 'Add next action' }).click();
  const weeklyHours = page.locator('#student-action-form select[name="weekly_hours_preset"]');
  await expect(weeklyHours).toBeHidden();
  await expect(page.locator('#student-action-form input[name="weekly_hours_custom"]')).toBeHidden();
  const staffAction = page.locator('#student-action-list .coaching-action-row').filter({ hasText: 'Portfolio case study' });
  const ownAction = page.locator('#student-action-list .coaching-action-row').filter({ hasText: 'Interview a product designer' });
  await expect(staffAction.getByRole('button', { name: 'Mark complete' })).toBeVisible();
  await expect(staffAction.getByRole('button', { name: 'Remove' })).toHaveCount(0);
  await expect(ownAction.getByRole('button', { name: 'Remove' })).toBeVisible();

  await page.locator('[data-plan-tab="guidance"]').click();
  await assertPlanTabFits();
  await expect(page.locator('#student-guidance-list')).toContainText('complete one small redesign challenge');
  await expect(page.locator('#student-guidance-list')).toContainText('Nisha Coach');
  await expect(page.locator('#student-guidance-list')).toContainText('Bring one route comparison');
  await expect(page.locator('#student-guidance-list')).toContainText('Class 11-12 Career Direction');

  await page.locator('[data-plan-tab="sessions"]').click();
  await assertPlanTabFits();
  await expect(page.locator('#student-session-list')).toContainText('Review the design challenge');
  await expect(page.locator('#student-session-list').getByRole('button', { name: 'Edit' })).toHaveCount(0);
  const cohortComposer = page.locator('#student-cohort-post-form');
  await expect(cohortComposer.locator('[name="post_intent"]')).toHaveCount(0);
  await expect(cohortComposer.getByRole('button', { name: 'Share an update' })).toBeVisible();
  await expect(cohortComposer.getByRole('button', { name: 'Create a group task' })).toBeVisible();
  await cohortComposer.getByRole('button', { name: 'Create a group task' }).click();
  await expect(cohortComposer.locator('input[name="task_due_on"]')).toBeVisible();
  await expect(cohortComposer.locator('input[name="task_title"]')).toBeVisible();
  await expect(cohortComposer.locator('input[name="resource_url"]')).toBeVisible();
  await cohortComposer.getByRole('button', { name: 'Share an update' }).click();
  await expect(cohortComposer.locator('input[name="task_due_on"]')).toBeHidden();
  await expect(page.locator('[data-workspace-view="career"]')).toContainText('Your assessment history');
  await expect(page.locator('[data-workspace-view="career"]')).not.toContainText(/time budget|location and access|personal context|comfort with uncertainty|study abroad interest/i);
  // Switching coaching-plan sections creates real browser destinations, so
  // Back/Forward returns to the section the learner was viewing.
  await page.goBack();
  await expect(page.locator('[data-plan-tab="guidance"]')).toHaveAttribute('aria-selected', 'true');
  await page.goForward();
  await expect(page.locator('[data-plan-tab="sessions"]')).toHaveAttribute('aria-selected', 'true');
  // A stale tab value from an older dashboard version must resolve to a real
  // pane instead of leaving the entire coaching plan hidden.
  await page.evaluate(() => {
    window.history.replaceState({ dashboardView: 'career', planTab: 'removed-tab' }, '', window.location.href);
    window.dispatchEvent(new PopStateEvent('popstate'));
  });
  await expect(page.locator('[data-plan-tab="options"]')).toHaveAttribute('aria-selected', 'true');
  await expect(page.locator('#plan-options-pane')).toBeVisible();
  await page.screenshot({ path: testInfo.outputPath('student-plan-mobile.png'), fullPage: true });
  await page.locator('#mobile-nav [data-view-target="profile"]').click();
  await expect(page.locator('#student-profile-form')).toBeVisible();
  await expect(page.locator('#workspace-status')).toHaveText('');
  await expect(page.locator('#student-profile-form input[name="full_name"]')).toBeVisible();
  await expect(page.locator('#student-profile-form input[name="full_name"]')).toBeVisible();
  await expect(page.locator('#student-profile-form input[name="available_hours_per_week"]')).toBeVisible();
  await expect(page.locator('#student-profile-form textarea[name="non_negotiables"]')).toBeVisible();
  await expect(page.locator('[data-workspace-view="profile"]')).toContainText('Your planning context');
  await page.locator('#student-profile-form select[name="education_timeline"]').selectOption('1 year');
  await page.locator('#student-profile-form input[name="available_hours_per_week"]').fill('8');
  await page.locator('#student-profile-form select[name="device_access"]').selectOption('personal-computer');
  await page.locator('#student-profile-form select[name="internet_access"]').selectOption('reliable');
  await page.locator('#student-profile-form input[name="interest_themes"]').fill('design, people');
  await page.locator('#student-profile-form textarea[name="non_negotiables"]').fill('Affordable fees\nPractical learning');
  await page.locator('#student-profile-form').getByRole('button', { name: 'Save profile' }).click();
  await expect(page.locator('#student-profile-status')).toHaveText('Your details were saved.');
  await page.screenshot({ path: testInfo.outputPath('student-context-mobile.png'), fullPage: true });

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  expect(overflow).toBeLessThanOrEqual(1);
});

test('student dashboard stays readable on desktop without undersized controls', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await mockWorkspace(page, 'student');
  await page.goto('http://127.0.0.1:4321/dashboard', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#workspace-shell')).toBeVisible({ timeout: 10_000 });
  await expect(page.locator('[data-workspace-view="overview"]')).toBeVisible();
  await page.locator('[data-view-target="career"]').last().click();
  await expect(page.locator('[data-workspace-view="career"]')).toBeVisible();
  const audit = await page.evaluate(() => {
    const root = document.querySelector('#hierarchy-workspace');
    const buttons = Array.from(document.querySelectorAll('#hierarchy-workspace button')).filter((button) => {
      const style = getComputedStyle(button);
      const rect = button.getBoundingClientRect();
      return !button.hidden && style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
    });
    const oversized = buttons.filter((button) => button.scrollWidth > button.clientWidth + 1 || button.scrollHeight > button.clientHeight + 1).map((button) => button.textContent?.trim());
    const undersized = buttons.filter((button) => button.getBoundingClientRect().height < 32).map((button) => button.textContent?.trim());
    const clippedFields = Array.from(document.querySelectorAll('#hierarchy-workspace input, #hierarchy-workspace select, #hierarchy-workspace textarea')).filter((field) => {
      const style = getComputedStyle(field);
      const rect = field.getBoundingClientRect();
      return !field.hidden && style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0 && field.scrollWidth > field.clientWidth + 1;
    }).map((field) => field.getAttribute('name') || field.id || field.tagName);
    return {
      overflow: document.documentElement.scrollWidth - window.innerWidth,
      rootWidth: root instanceof HTMLElement ? root.getBoundingClientRect().width : 0,
      viewportWidth: window.innerWidth,
      oversized,
      undersized,
      clippedFields,
    };
  });
  expect(audit.overflow).toBeLessThanOrEqual(1);
  expect(audit.rootWidth).toBeGreaterThan(audit.viewportWidth - 2);
  expect(audit.oversized).toEqual([]);
  expect(audit.undersized).toEqual([]);
  expect(audit.clippedFields).toEqual([]);
});

test('coach dashboard stays readable on a narrow mobile screen', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await mockWorkspace(page, 'coach');
  await page.goto('http://127.0.0.1:4321/dashboard', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#workspace-shell')).toBeVisible({ timeout: 10_000 });
  const audit = await page.evaluate(() => {
    const buttons = Array.from(document.querySelectorAll('#hierarchy-workspace button')).filter((button) => {
      const style = getComputedStyle(button);
      const rect = button.getBoundingClientRect();
      return !button.hidden && style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0;
    });
    return {
      overflow: document.documentElement.scrollWidth - window.innerWidth,
      undersized: buttons.filter((button) => button.getBoundingClientRect().height < 32).map((button) => button.textContent?.trim()),
      clipped: buttons.filter((button) => button.scrollWidth > button.clientWidth + 1 || button.scrollHeight > button.clientHeight + 1).map((button) => button.textContent?.trim()),
      clippedFields: Array.from(document.querySelectorAll('#hierarchy-workspace input, #hierarchy-workspace select, #hierarchy-workspace textarea')).filter((field) => {
        const style = getComputedStyle(field);
        const rect = field.getBoundingClientRect();
        return !field.hidden && style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0 && field.scrollWidth > field.clientWidth + 1;
      }).map((field) => field.getAttribute('name') || field.id || field.tagName),
    };
  });
  expect(audit.overflow).toBeLessThanOrEqual(1);
  expect(audit.undersized).toEqual([]);
  expect(audit.clipped).toEqual([]);
  expect(audit.clippedFields).toEqual([]);
});

test('dedicated career decision route behaves as a full dashboard page', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await mockWorkspace(page, 'student');
  await page.goto('http://127.0.0.1:4321/dashboard/career-decision', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#workspace-shell')).toBeVisible({ timeout: 10_000 });
  const careerPage = page.locator('#career-option-dialog');
  await expect(careerPage).toBeVisible({ timeout: 10_000 });
  const layout = await page.evaluate(() => {
    const root = document.querySelector('#hierarchy-workspace');
    const dialog = document.querySelector('#career-option-dialog');
    const body = document.querySelector('#career-option-dialog .dialog-body');
    const topbar = document.querySelector('.workspace-topbar');
    if (!(root instanceof HTMLElement) || !(dialog instanceof HTMLElement) || !(body instanceof HTMLElement)) throw new Error('Career page did not initialise.');
    const rect = dialog.getBoundingClientRect();
    const bodyRect = body.getBoundingClientRect();
    return {
      pageMode: root.dataset.careerDecisionPage === 'true',
      dialogPosition: getComputedStyle(dialog).position,
      dialogWidth: rect.width,
      bodyWidth: bodyRect.width,
      viewportWidth: window.innerWidth,
      topbarHidden: topbar instanceof HTMLElement && getComputedStyle(topbar).display === 'none',
      documentOverflow: document.documentElement.scrollWidth - window.innerWidth,
    };
  });
  expect(layout.pageMode).toBe(true);
  expect(layout.dialogPosition).toBe('relative');
  expect(layout.dialogWidth).toBeGreaterThan(layout.viewportWidth - 2);
  expect(layout.bodyWidth).toBeGreaterThan(layout.viewportWidth - 120);
  expect(layout.topbarHidden).toBe(true);
  expect(layout.documentOverflow).toBeLessThanOrEqual(1);
  const catalogueCount = await page.locator('#career-preset-count').textContent();
  expect(catalogueCount || '').toMatch(/\d{3,} useful matches/);
  // The saved-direction Review action must open the editor immediately; this
  // guards the common regression where the visible button has no delegated
  // handler after the planner is rendered as a full page.
  const reviewButton = page.locator('#career-decision-current-plan [data-edit-career]').first();
  if (await reviewButton.count()) {
    await reviewButton.click();
    await expect(page.locator('#career-dialog-title')).toHaveText('Edit career option');
    await expect(page.locator('#career-option-form input[name="title"]')).not.toHaveValue('');
  }
  const nextPage = page.locator('[data-career-page="next"]');
  await expect(nextPage).toBeVisible();
  const firstPageCards = await page.locator('#career-preset-results .career-library-result').count();
  expect(firstPageCards).toBeLessThanOrEqual(24);
  await nextPage.click();
  expect(await page.locator('#career-preset-results .career-library-result').count()).toBeLessThanOrEqual(24);
  const catalogueLayout = await page.locator('#career-preset-results').evaluate((container) => {
    const overflowing = Array.from(container.querySelectorAll('.career-library-result, .career-library-result > button, .career-result-meta, .career-result-meta em'))
      .filter((element) => element.scrollWidth > element.clientWidth + 1)
      .map((element) => `${element.className}:${Math.round(element.scrollWidth - element.clientWidth)}`);
    return { overflowing: overflowing.slice(0, 10), totalOverflowing: overflowing.length };
  });
  expect(catalogueLayout, JSON.stringify(catalogueLayout, null, 2)).toEqual({ overflowing: [], totalOverflowing: 0 });
  const incompleteCareerCards = await page.locator('#career-preset-results .career-library-result > button').evaluateAll((cards) => cards.filter((card) => {
    const summary = card.querySelector('p')?.textContent?.trim() || '';
    const metadata = card.querySelectorAll('.career-result-meta em').length;
    const skillsCue = Array.from(card.querySelectorAll('.career-result-meta em')).some((item) => item.textContent?.trim().startsWith('Skills:'));
    return summary.length < 20 || metadata < 4 || !skillsCue;
  }).length);
  expect(incompleteCareerCards).toBe(0);
  await page.locator('#career-preset-results .career-library-result > button').first().click();
  await expect(page.locator('#career-guide-preview')).toContainText('Subjects and routes');
});

test('catalogue career choices save directly without asking the learner to retype them', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await mockWorkspace(page, 'student');
  await page.goto('http://127.0.0.1:4321/dashboard/career-decision', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#career-option-dialog')).toBeVisible({ timeout: 10_000 });
  await page.locator('#career-preset-search').fill('Marine Engineer');
  const careerCard = page.locator('#career-preset-results .career-library-result > button').filter({ hasText: 'Marine Engineer' }).first();
  await expect(careerCard).toBeVisible();
  await careerCard.click();
  const preview = page.locator('#career-guide-preview');
  await expect(preview).toContainText('Marine Engineer');
  await expect(preview).toContainText('no typing is required');
  const careerRequest = page.waitForRequest((request) => request.method() === 'POST' && request.url().includes('/rest/v1/career_paths'));
  await preview.getByRole('button', { name: 'Choose as primary career option' }).click();
  const request = await careerRequest;
  const payload = request.postDataJSON();
  const saved = Array.isArray(payload) ? payload[0] : payload;
  expect(saved.title).toBe('Marine Engineer');
  expect(saved.option_type).toBe('primary');
  expect(saved.preset_key).toBeTruthy();
  await expect(page).toHaveURL(/\/dashboard\?view=overview/, { timeout: 10_000 });
});

test('dedicated career decision route stays usable on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await mockWorkspace(page, 'student');
  await page.goto('http://127.0.0.1:4321/dashboard/career-decision', { waitUntil: 'domcontentloaded' });
  const careerPage = page.locator('#career-option-dialog');
  await expect(careerPage).toBeVisible({ timeout: 10_000 });
  const layout = await page.evaluate(() => {
    const root = document.querySelector('#hierarchy-workspace');
    const dialog = document.querySelector('#career-option-dialog');
    if (!(root instanceof HTMLElement) || !(dialog instanceof HTMLElement)) throw new Error('Career page did not initialise.');
    const rect = dialog.getBoundingClientRect();
    return {
      pageMode: root.dataset.careerDecisionPage === 'true',
      dialogPosition: getComputedStyle(dialog).position,
      dialogWidth: rect.width,
      viewportWidth: window.innerWidth,
      documentOverflow: document.documentElement.scrollWidth - window.innerWidth,
      dialogOverflow: dialog.scrollWidth - dialog.clientWidth,
      undersizedButtons: [...dialog.querySelectorAll('button')]
        .filter((button) => {
          const style = getComputedStyle(button);
          const buttonRect = button.getBoundingClientRect();
          return style.display !== 'none' && style.visibility !== 'hidden' && !button.hidden && buttonRect.width > 0 && buttonRect.height > 0 && buttonRect.height < 32;
        })
        .map((button) => button.textContent?.trim().slice(0, 30) || 'button'),
    };
  });
  expect(layout.pageMode).toBe(true);
  expect(layout.dialogPosition).toBe('relative');
  expect(layout.dialogWidth).toBeGreaterThan(layout.viewportWidth - 2);
  expect(layout.documentOverflow).toBeLessThanOrEqual(1);
  expect(layout.dialogOverflow).toBeLessThanOrEqual(1);
  expect(layout.undersizedButtons).toEqual([]);
  const plannerChrome = await page.evaluate(() => {
    const heading = document.querySelector('.preset-picker-heading');
    const pagination = document.querySelector('.career-library-pagination');
    const visibleInterestInputs = [...document.querySelectorAll('.career-interest-filter input[type="checkbox"]')]
      .filter((input) => { const s = getComputedStyle(input); return s.display !== 'none' && s.visibility !== 'hidden' && s.opacity !== '0' && s.appearance !== 'none'; }).length;
    return {
      headingOverflow: heading ? heading.scrollWidth - heading.clientWidth : 0,
      paginationOverflow: pagination ? pagination.scrollWidth - pagination.clientWidth : 0,
      visibleInterestInputs,
    };
  });
  expect(plannerChrome.headingOverflow).toBeLessThanOrEqual(1);
  expect(plannerChrome.paginationOverflow).toBeLessThanOrEqual(1);
  expect(plannerChrome.visibleInterestInputs).toBe(0);
});

test('career pagination control stays available on desktop', async ({ page }) => {
  await page.setViewportSize({ width: 1365, height: 900 }); await mockWorkspace(page, 'student'); await page.goto('http://127.0.0.1:4321/dashboard/career-decision', { waitUntil:'domcontentloaded' });
  await expect(page.locator('[data-career-page="next"]')).toBeVisible();
  expect(await page.locator('#career-preset-results .career-library-result').count()).toBeLessThanOrEqual(24);
  // The catalogue shows a useful nearby page window without rendering all
  // 119 page numbers at once.
  expect(await page.locator('[data-career-page-number]').count()).toBeLessThanOrEqual(9);
  await expect(page.locator('[data-career-page-jump]')).toHaveAttribute('type', 'number');
  await expect(page.locator('[data-career-page-jump]')).toHaveValue('1');
  await expect(page.locator('select[data-career-page-jump]')).toHaveCount(0);
  await expect(page.locator('[data-career-page-size]')).toHaveValue('24');
  await expect(page.locator('.career-page-indicator')).toHaveAttribute('aria-live', 'polite');
  await page.locator('[data-career-page-size]').selectOption('48');
  await expect(page.locator('[data-career-page-size]')).toHaveValue('48');
  await expect(page.locator('.career-page-indicator')).toContainText('Showing 1–48');
  const pageJump = page.locator('[data-career-page-jump]');
  const finalPage = await pageJump.getAttribute('max');
  await pageJump.fill(finalPage || '1');
  await pageJump.dispatchEvent('change');
  await expect(page.locator('.career-page-indicator')).toContainText(`page ${finalPage} of ${finalPage}`);
  await expect(page.locator('[data-career-page-number][aria-current="page"]')).toHaveText(finalPage || '1');
});

test('career catalogue page jump works without submitting the decision form', async ({ page }) => {
  await page.setViewportSize({ width: 1365, height: 900 }); await mockWorkspace(page, 'student'); await page.goto('http://127.0.0.1:4321/dashboard/career-decision', { waitUntil:'domcontentloaded' });
  const jump = page.locator('[data-career-page-jump]');
  await jump.fill('2');
  await jump.press('Enter');
  await expect(page.locator('.career-page-indicator')).toContainText('page 2 of');
  await expect(page.locator('#career-option-dialog')).toBeVisible();
  await expect(page.locator('#career-option-form input[name="title"]')).toHaveValue('');
  await expect(page.locator('[data-career-page-go]')).toBeVisible();
});

test('career catalogue keeps a recoverable empty state when filters have no matches', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await mockWorkspace(page, 'student');
  await page.goto('http://127.0.0.1:4321/dashboard/career-decision', { waitUntil: 'domcontentloaded' });
  const search = page.locator('#career-preset-search');
  await search.fill('zzzz-no-career-match-9f7c');
  await expect(page.locator('#career-preset-count')).toContainText('0 useful matches');
  await expect(page.locator('#career-preset-results .career-library-empty')).toContainText('No career guides match these choices.');
  await page.locator('#career-preset-results [data-career-clear-filters]').click();
  await expect(search).toHaveValue('');
  await expect(page.locator('#career-preset-results .career-library-result').first()).toBeVisible();
});
