import { actionPresets, skillCategories, skillPresets } from '../data/coachingPresets';
import {
  academicStreamPresets,
  caseGoalPresets,
  careerGuideFor,
  decisionSignalOptions,
  evidenceTemplatePresets,
  guidedCareerCategories,
  guidedCareerPresets,
  noteTemplatePresets,
  progressUpdatePresets,
  skillPackItems,
  skillPlanItem,
} from '../data/coachingPlaybooks';
import {
  careerCardHtml,
  careerGuidePreviewHtml,
  careerLibraryMatches,
  careerLibraryResultsHtml,
  interestSignalsFor,
  decisionSignalFor,
  decisionSignalLabel,
  evidenceStrengthFor,
  getSkillPack,
  skillPackMatches,
  skillPackPreviewHtml,
  skillPackResultsHtml,
  skillRecommendationsHtml,
  skillRoadmapHtml,
  skillScopeFor,
  skillSummaryHtml,
} from './coachingDecisionUI';
import {
  cohortUpcomingCount,
  getCohortById,
  getCohortSessionsForStudent,
  getVisibleCohorts,
  getStudentCohort,
  getNextCohortSession,
  loadCohortWorkspace,
  refreshCohortWorkspace,
  renderCohortWorkspace,
} from './cohortWorkspace';
import {
  createWorkspacePaginationState,
  paginateWorkspaceRows,
  renderWorkspacePagination,
  resetWorkspacePagination,
} from './workspacePagination';

type Row = Record<string, any>;

export type CoachingContext = {
  client: any;
  user: Row;
  profile: Row;
  profiles: Row[];
  branches: Row[];
  selectedStudentId: string | null;
  setSelectedStudentId: (studentId: string | null) => void;
  openView: (view: string) => void;
  setWorkspaceStatus: (message: string, isError?: boolean) => void;
  escapeHtml: (value: unknown) => string;
  formatDate: (value: unknown, includeTime?: boolean) => string;
  formatRole: (value: unknown) => string;
  formatStatus: (value: unknown) => string;
  initials: (value: unknown) => string;
  profileById: (id: unknown) => Row | null;
  branchById: (id: unknown) => Row | null;
  renderCoachNotes: (notes: Row[]) => void;
  renderOverview: () => void;
};

type CoachingState = {
  cases: Row[];
  careers: Row[];
  skills: Row[];
  evidence: Row[];
  sessions: Row[];
  actions: Row[];
  skillReviews: Row[];
  advice: Row[];
  assessments: Row[];
  academic: Row | null;
  constraints: Row | null;
  notes: Row[];
  schemaReady: boolean;
  partialFailures: string[];
  recordTab: string;
  planTab: string;
};

const coaching: CoachingState = {
  cases: [], careers: [], skills: [], evidence: [], sessions: [], actions: [], skillReviews: [], advice: [], assessments: [],
  academic: null, constraints: null, notes: [], schemaReady: true, recordTab: 'summary', planTab: 'options',
  partialFailures: [],
};

let ctx: CoachingContext | null = null;
let bound = false;
let selectedCareerGuideKey = '';
let comparedCareerGuideKeys: string[] = [];
let pendingCareerSaveMessage = '';
let coachingLoadGeneration = 0;
let detailLoadGeneration = 0;
const caseloadPagination = createWorkspacePaginationState('fcs-workspace-caseload-page');
// The catalogue is complete, but the screen should only render one bounded
// page at a time. This keeps the decision workspace usable on phones and
// avoids making a learner scan hundreds of cards before they can act.
function initialCareerLibraryPage() {
  if (typeof window === 'undefined') return 1;
  const value = Number(new URLSearchParams(window.location.search).get('careerPage'));
  return Number.isInteger(value) && value > 0 ? value : 1;
}

let careerLibraryPage = initialCareerLibraryPage();
const CAREER_PAGE_SIZE_KEY = 'fcs-career-library-page-size';
let selectedSkillPackKey = '';

function qs<T extends Element>(selector: string) {
  return document.querySelector(selector) as T | null;
}

function qsa<T extends Element>(selector: string) {
  return Array.from(document.querySelectorAll(selector)) as T[];
}

function setText(selector: string, value: unknown) {
  const element = qs<HTMLElement>(selector);
  if (element) element.textContent = String(value ?? '');
}

function activeStudentId() {
  if (!ctx) return null;
  return ctx.profile.role === 'student' ? ctx.profile.id : ctx.selectedStudentId;
}

function currentCase(studentId = activeStudentId()) {
  return coaching.cases.find((row) => row.student_id === studentId) ?? null;
}

function rowsFor<T extends Row>(rows: T[], key: string, studentId = activeStudentId()) {
  return rows.filter((row) => row[key] === studentId);
}

function isMissingSchema(error: any) {
  const text = `${error?.code ?? ''} ${error?.message ?? ''}`.toLowerCase();
  return ['42p01', 'pgrst205', 'pgrst204', '42703'].some((code) => text.includes(code))
    || text.includes('schema cache')
    || text.includes('does not exist');
}

function friendlyWorkspaceError(error: unknown, fallback: string) {
  const value = error as { message?: string; code?: string; status?: number } | null;
  const message = String(value?.message ?? '');
  const lower = message.toLowerCase();
  if (lower.includes('failed to fetch') || lower.includes('network') || value?.status === 0) {
    return 'We could not reach the coaching workspace. Check your connection and try again.';
  }
  if (lower.includes('row-level security') || value?.code === '42501') {
    return 'You do not have permission to change this record. Ask the student’s assigned coach or administrator.';
  }
  if (isMissingSchema(error)) {
    return 'The coaching database upgrade is not active yet. Ask an administrator to apply the included Supabase migrations.';
  }
  if (lower.includes('duplicate') || lower.includes('unique constraint')) {
    return 'A record with these details already exists. Open the existing record and update it instead.';
  }
  if (lower.includes('check constraint') || lower.includes('violates check')) {
    return 'One or more values are outside the allowed range. Check the field guidance and try again.';
  }
  if (lower.includes('foreign key')) {
    return 'This record refers to something that is no longer available. Refresh the workspace and try again.';
  }
  return message && message.length < 240 ? message : fallback;
}

function setBusy(button: HTMLButtonElement | null, busy: boolean, label = 'Saving...') {
  if (!button) return;
  if (busy) {
    button.dataset.originalLabel = button.innerHTML;
    button.textContent = label;
    button.disabled = true;
  } else {
    if (button.dataset.originalLabel) button.innerHTML = button.dataset.originalLabel;
    button.disabled = false;
  }
}

function setModalStatus(selector: string, message: string, isError = false) {
  const status = qs<HTMLElement>(selector);
  if (!status) return;
  status.textContent = message;
  status.classList.toggle('is-error', isError);
}

function textValue(value: FormDataEntryValue | null) {
  return String(value ?? '').trim();
}

function numberValue(value: FormDataEntryValue | null) {
  const text = textValue(value);
  if (!text) return null;
  const number = Number(text);
  return Number.isFinite(number) ? number : null;
}

function linesValue(value: FormDataEntryValue | null) {
  return textValue(value).split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
}

function toLocalInput(value: unknown) {
  if (!value) return '';
  const date = new Date(String(value));
  if (Number.isNaN(date.getTime())) return '';
  const offset = date.getTimezoneOffset() * 60_000;
  return new Date(date.getTime() - offset).toISOString().slice(0, 16);
}

function dueState(value: unknown) {
  if (!value) return '';
  const due = new Date(`${String(value)}T23:59:59`);
  const now = new Date();
  if (due < now) return 'overdue';
  const days = Math.ceil((due.getTime() - now.getTime()) / 86_400_000);
  return days <= 3 ? 'soon' : '';
}

function setFormValues(form: HTMLFormElement, values: Row) {
  Object.entries(values).forEach(([name, value]) => {
    // `namedItem` can return a RadioNodeList when a form contains more than
    // one control with the same name. Resolve that list to an actual control
    // so preset actions always write to the intended field.
    const named = form.elements.namedItem(name);
    const field = (typeof RadioNodeList !== 'undefined' && named instanceof RadioNodeList ? named[0] : named) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
    if (!field) return;
    if (name.endsWith('_at') && field.type === 'datetime-local') field.value = toLocalInput(value);
    else if (Array.isArray(value)) field.value = value.join('\n');
    else field.value = value === null || value === undefined ? '' : String(value);
  });
}

async function queryRows(table: string, configure?: (query: any) => any) {
  if (!ctx) return [];
  const pageSize = 1000;
  const rows: Row[] = [];
  for (let offset = 0; ; offset += pageSize) {
    let query = ctx.client.from(table).select('*');
    if (configure) query = configure(query);
    const { data, error } = await query.range(offset, offset + pageSize - 1);
    if (error) throw error;
    const page = (data ?? []) as Row[];
    rows.push(...page);
    if (page.length < pageSize) break;
  }
  return rows;
}

function careerReviewState(value: unknown) {
  if (!value) return '';
  const review = new Date(`${String(value)}T23:59:59`);
  if (Number.isNaN(review.getTime())) return '';
  const days = Math.ceil((review.getTime() - Date.now()) / 86_400_000);
  return days < 0 ? 'overdue' : days <= 14 ? 'soon' : '';
}

function sessionNoticeState(value: unknown) {
  if (!value) return '';
  const starts = new Date(String(value)).getTime();
  if (!Number.isFinite(starts)) return '';
  const days = Math.ceil((starts - Date.now()) / 86_400_000);
  return days < 0 ? '' : days <= 7 ? 'soon' : '';
}

/**
 * Supabase REST filters are sent in the request URL. Keep large operational
 * caseloads reliable by splitting student/skill ID filters into bounded
 * batches instead of generating one oversized request.
 */
async function queryRowsByIds(table: string, column: string, ids: string[], configure?: (query: any) => any) {
  const batchSize = 100;
  const rows: Row[] = [];
  for (let offset = 0; offset < ids.length; offset += batchSize) {
    const batch = ids.slice(offset, offset + batchSize);
    rows.push(...await queryRows(table, (query) => {
      const filtered = query.in(column, batch);
      return configure ? configure(filtered) : filtered;
    }));
  }
  return rows;
}

function activeStudents() {
  if (!ctx) return [];
  return ctx.profiles.filter((profile) => profile.role === 'student' && profile.account_status === 'active');
}

async function loadCoreData() {
  if (!ctx) return;
  const generation = ++coachingLoadGeneration;
  // Keep records for inactive students available to authorised staff so a suspended
  // account can still be reviewed without losing its coaching history. Operational
  // caseload metrics and attention lists use activeStudents() below.
  const students = ctx.profiles.filter((profile) => profile.role === 'student');
  const studentIds = students.map((profile) => profile.id);
  if (!studentIds.length) {
    coaching.partialFailures = [];
    coaching.cases = [];
    coaching.careers = [];
    coaching.skills = [];
    coaching.evidence = [];
    coaching.sessions = [];
    coaching.actions = [];
    coaching.skillReviews = [];
    coaching.advice = [];
    coaching.assessments = [];
    coaching.notes = [];
    coaching.schemaReady = true;
    return;
  }

  try {
    // Load each workspace collection independently. A missing optional table
    // or a transient request failure must not blank every other part of a
    // student's plan until the next reload.
    const results = await Promise.allSettled([
      queryRowsByIds('student_cases', 'student_id', studentIds),
      queryRowsByIds('career_paths', 'user_id', studentIds, (q) => q.order('sort_order').order('updated_at', { ascending: false })),
      queryRowsByIds('student_skills', 'student_id', studentIds, (q) => q.order('priority').order('updated_at', { ascending: false })),
      queryRowsByIds('coaching_sessions', 'student_id', studentIds, (q) => q.order('scheduled_at', { ascending: false })),
      queryRowsByIds('action_items', 'user_id', studentIds, (q) => q.order('status').order('due_date')),
      queryRowsByIds('coach_notes', 'student_id', studentIds, (q) => q.order('created_at', { ascending: false })),
      queryRowsByIds('skill_reviews', 'student_id', studentIds, (q) => q.order('updated_at', { ascending: false }).order('created_at', { ascending: false })),
      queryRowsByIds('student_advice', 'student_id', studentIds, (q) => q.order('advice_date', { ascending: false }).order('created_at', { ascending: false })),
      queryRowsByIds('assessment_results', 'user_id', studentIds, (q) => q.order('completed_at', { ascending: false }).limit(50)),
    ]);
    if (generation !== coachingLoadGeneration || !ctx) return;
    const coreResults = results.slice(0, 8);
    const assessmentResult = results[8];
    const rejected = coreResults.filter((result): result is PromiseRejectedResult => result.status === 'rejected');
    // Keep successful collections available for every role. A temporary
    // failure in one optional table should not blank an entire staff caseload
    // or force the authenticated user back to the sign-in screen.
    if (rejected.length) console.warn('Some coaching collections could not be loaded.', rejected.map((item) => item.reason));
    const collectionNames = ['case details', 'career options', 'skills', 'coaching sessions', 'actions', 'coach notes', 'skill feedback', 'coach advice'];
    coaching.partialFailures = rejected.map((result) => collectionNames[results.indexOf(result)] ?? 'some coaching information');
    const rowsAt = (index: number) => {
      const result = results[index];
      return result.status === 'fulfilled' ? (result.value as Row[]) : [];
    };
    coaching.cases = rowsAt(0);
    coaching.careers = rowsAt(1);
    coaching.skills = rowsAt(2);
    coaching.sessions = rowsAt(3);
    coaching.actions = rowsAt(4);
    coaching.notes = rowsAt(5);
    coaching.skillReviews = dedupeSkillReviews(rowsAt(6));
    coaching.advice = rowsAt(7);
    coaching.assessments = assessmentResult.status === 'fulfilled' ? assessmentResult.value as Row[] : [];
    const skillIds = coaching.skills.map((skill: Row) => skill.id);
    try {
    coaching.evidence = skillIds.length
        ? await queryRowsByIds('skill_evidence', 'skill_id', skillIds, (q) => q.order('evidence_date', { ascending: false }))
        : [];
      if (generation !== coachingLoadGeneration || !ctx) return;
    } catch (evidenceError) {
      if (generation !== coachingLoadGeneration || !ctx) return;
      coaching.evidence = [];
      coaching.partialFailures = [...coaching.partialFailures, 'skill evidence'];
      console.warn('Skill evidence could not be loaded.', evidenceError);
    }
    coaching.schemaReady = rejected.length === 0;
  } catch (error) {
    if (generation !== coachingLoadGeneration || !ctx) return;
    // A student must still be able to enter the dashboard when one optional
    // coaching table is unavailable or briefly rejects a scoped read. Keep
    // the session, show the schema warning, and allow the rest of the plan to
    // load instead of turning a valid sign-in into a misleading login error.
    if (!isMissingSchema(error)) console.warn('Coaching data could not be fully loaded.', error);
    coaching.schemaReady = false;
    coaching.partialFailures = ['coaching information'];
    coaching.cases = students.map((student) => ({
      student_id: student.id,
      coaching_stage: 'intake',
      case_status: 'active',
      priority: 'standard',
      goal_summary: '',
      progress_note: '',
      review_cadence_days: 14,
      decision_deadline: null,
      next_review_at: null,
    }));
    coaching.careers = [];
    coaching.skills = [];
    coaching.evidence = [];
    coaching.sessions = [];
    coaching.actions = [];
    coaching.notes = [];
    coaching.skillReviews = [];
    coaching.advice = [];
    coaching.assessments = [];
  }
}

export async function loadCoachingWorkspace(context: CoachingContext) {
  ctx = context;
  await loadCoreData();
  // Keep the learner-wide foundation layer complete. Career-specific skills
  // still require a saved direction; only curated portable foundations are
  // synchronised here, and the insert is idempotent by skill name.
  if (ctx.profile.role === 'student') {
    try {
      await ensureFoundationSkillsForStudent(ctx.profile.id);
      // Existing career options may have been saved before automatic
      // career-linked skill creation was introduced. Reconcile those rows on
      // load as well as on save so the learner's roadmap is never silently
      // incomplete after an upgrade or a refresh.
      await ensureHardSkillsForStudent(ctx.profile.id);
    } catch (error) { console.warn('Career and foundation skills could not be synchronised.', error); }
  }
  await loadCohortWorkspace(context);
  bindEvents();
  renderCoachingWorkspace();
}

export async function refreshCoachingWorkspace(context: CoachingContext) {
  ctx = context;
  await loadCoreData();
  if (ctx.profile.role === 'student') {
    try {
      await ensureFoundationSkillsForStudent(ctx.profile.id);
      await ensureHardSkillsForStudent(ctx.profile.id);
    } catch (error) { console.warn('Career and foundation skills could not be synchronised.', error); }
  }
  await refreshCohortWorkspace(context);
  renderCoachingWorkspace();
}

function needsAttention(studentId: string) {
  const caseRow = currentCase(studentId);
  const actions = rowsFor(coaching.actions, 'user_id', studentId);
  const skills = activeSkillsForStudent(studentId);
  const overdue = actions.some((item) => item.status !== 'done' && dueState(item.due_date) === 'overdue');
  const noCohort = !getStudentCohort(studentId);
  const noSession = !noCohort && !getNextCohortSession(studentId);
  const coreGap = skills.some((skill) => skill.priority === 'core' && skill.current_level < skill.target_level);
  return { overdue, noCohort, noSession, coreGap };
}

function nextSession(studentId: string) {
  return getNextCohortSession(studentId);
}

function activeSkillsForStudent(studentId: string) {
  const activeCareerIds = new Set(rowsFor(coaching.careers, 'user_id', studentId)
    .filter((career) => !['ruled-out', 'paused'].includes(String(career.status || '').toLowerCase()))
    .map((career) => String(career.id)));
  const active = rowsFor(coaching.skills, 'student_id', studentId)
    .filter((skill) => !['archived', 'removed'].includes(String(skill.status || '').toLowerCase())
      && (!skill.linked_career_path_id || activeCareerIds.has(String(skill.linked_career_path_id)))
      // Legacy rows created before career links were stored cannot be
      // attributed safely after the last direction is removed. Keep shared
      // foundation work, but do not let orphaned specialist rows survive as
      // active plan items or inflate the student's counts.
      && (activeCareerIds.size > 0 || ['foundation', 'employability'].includes(String(skill.skill_scope || '').toLowerCase())));
  return active
    .filter((skill) => activeCareerIds.size > 0 || !(/^[^:]{2,80}:\s+/.test(String(skill.skill_name || ''))))
    .map((skill) => (/^[^:]{2,80}:\s+/.test(String(skill.skill_name || '')) && skill.linked_career_path_id
      ? { ...skill, skill_scope: 'career-specific' }
      : skill));
}

// Keep dashboard counters aligned with visible roadmap cards when older
// installations contain duplicate skill rows.
function uniqueSkillRowsForStudent(studentId: string) {
  const seen = new Set<string>();
  return activeSkillsForStudent(studentId).filter((skill) => {
    const key = String(skill.skill_name || '').trim().toLowerCase();
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

export function coachingOverviewMetrics() {
  if (!ctx || ctx.profile.role === 'student') return null;
  const students = activeStudents();
  const flags = students.map((student) => needsAttention(student.id));
  return {
    activeCases: students.filter((student) => currentCase(student.id)?.case_status !== 'completed').length,
    attention: flags.filter((flag) => flag.overdue || flag.noCohort || flag.noSession || flag.coreGap).length,
    upcomingSessions: cohortUpcomingCount(),
    overdueActions: coaching.actions.filter((row) => row.status !== 'done' && dueState(row.due_date) === 'overdue').length,
  };
}

export function studentOverviewMetrics(studentId: string) {
  const actions = rowsFor(coaching.actions, 'user_id', studentId);
  const careers = rowsFor(coaching.careers, 'user_id', studentId);
  const skills = uniqueSkillRowsForStudent(studentId);
  const advice = rowsFor(coaching.advice, 'student_id', studentId);
  const cohort = getStudentCohort(studentId);
  const nextReview = careers
    .filter((row) => row.decision_deadline && !['ruled-out', 'paused'].includes(row.status))
    .sort((a, b) => new Date(String(a.decision_deadline)).getTime() - new Date(String(b.decision_deadline)).getTime())[0] ?? null;
  const nextAction = actions
    .filter((row) => row.status !== 'done' && row.due_date)
    .sort((a, b) => new Date(String(a.due_date)).getTime() - new Date(String(b.due_date)).getTime())[0] ?? null;
  const upcomingSession = nextSession(studentId);
  return {
    careers: careers.filter((row) => !['ruled-out', 'paused'].includes(row.status)).length,
    shortlisted: careers.filter((row) => ['shortlisted', 'testing', 'selected'].includes(row.status)).length,
    skills: skills.length,
    skillGaps: skills.filter((row) => row.current_level < row.target_level).length,
    actions: actions.length,
    openActions: actions.filter((row) => row.status !== 'done').length,
    guidance: advice.filter((row) => row.status !== 'archived').length,
    cohort,
    nextReview,
    reviewState: careerReviewState(nextReview?.decision_deadline),
    nextAction,
    actionDueState: dueState(nextAction?.due_date),
    nextSession: upcomingSession,
    sessionNoticeState: sessionNoticeState(upcomingSession?.starts_at),
    caseRow: currentCase(studentId),
  };
}

export function coachingAttentionItems(limit = 5) {
  if (!ctx || ctx.profile.role === 'student') return [];
  const students = activeStudents();
  const items: { student: Row; title: string; detail: string; severity: number; tab: string }[] = [];
  students.forEach((student) => {
    const flags = needsAttention(student.id);
    if (flags.overdue) items.push({ student, title: `${student.full_name} has overdue follow-through`, detail: 'Open the action plan and reset the next commitment.', severity: 4, tab: 'actions' });
    if (flags.noCohort) items.push({ student, title: `${student.full_name} is not in an active cohort`, detail: 'Place the student in the right cohort before planning group delivery.', severity: 3, tab: 'sessions' });
    else if (flags.noSession) items.push({ student, title: `${student.full_name} has no cohort session announced`, detail: 'Open the cohort and communicate the next coaching session.', severity: 2, tab: 'sessions' });
    if (flags.coreGap) items.push({ student, title: `${student.full_name} has a core skill gap`, detail: 'Connect development work to a career option.', severity: 1, tab: 'skills' });
  });
  return items.sort((a, b) => b.severity - a.severity).slice(0, limit);
}

function renderCaseload() {
  if (!ctx || ctx.profile.role === 'student') return;
  const body = qs<HTMLElement>('#caseload-table-body');
  const empty = qs<HTMLElement>('#caseload-empty');
  const summary = qs<HTMLElement>('#caseload-summary');
  if (!body || !empty || !summary) return;
  const search = qs<HTMLInputElement>('#caseload-search')?.value.trim().toLowerCase() ?? '';
  const stage = qs<HTMLSelectElement>('#caseload-stage-filter')?.value ?? 'all';
  const cohortFilter = qs<HTMLSelectElement>('#caseload-cohort-filter');
  const selectedCohort = cohortFilter?.value ?? 'all';
  if (cohortFilter) {
    const current = selectedCohort;
    const options = getVisibleCohorts().sort((a, b) => String(a.name).localeCompare(String(b.name)));
    cohortFilter.innerHTML = `<option value="all">All cohorts</option><option value="none">No active cohort</option>${options.map((cohort) => `<option value="${ctx!.escapeHtml(cohort.id)}">${ctx!.escapeHtml(cohort.name)}</option>`).join('')}`;
    cohortFilter.value = [ 'all', 'none', ...options.map((cohort) => cohort.id) ].includes(current) ? current : 'all';
  }
  const activeCohortFilter = cohortFilter?.value ?? 'all';
  const attention = qs<HTMLSelectElement>('#caseload-attention-filter')?.value ?? 'all';
  const students = activeStudents().filter((profile) => {
    const caseRow = currentCase(profile.id);
    const flags = needsAttention(profile.id);
    if (search && !`${profile.full_name} ${profile.email}`.toLowerCase().includes(search)) return false;
    if (stage !== 'all' && caseRow?.coaching_stage !== stage) return false;
    const cohort = getStudentCohort(profile.id);
    if (activeCohortFilter === 'none' && cohort) return false;
    if (!['all', 'none'].includes(activeCohortFilter) && cohort?.id !== activeCohortFilter) return false;
    if (attention === 'needs-attention' && !Object.values(flags).some(Boolean)) return false;
    if (attention === 'overdue' && !flags.overdue) return false;
    if (attention === 'no-cohort' && !flags.noCohort) return false;
    if (attention === 'no-session' && !flags.noSession) return false;
    if (attention === 'skill-gaps' && !flags.coreGap) return false;
    return true;
  });

  const page = paginateWorkspaceRows(students, caseloadPagination);
  const allStudents = activeStudents();
  if (allStudents.length === 0) {
    empty.innerHTML = '<strong>No active students yet.</strong><span>Approved students will appear here after they are assigned within your coaching scope.</span>';
  } else {
    empty.textContent = 'No students match this view.';
  }
  const active = allStudents.filter((student) => currentCase(student.id)?.case_status !== 'completed').length;
  const flagged = allStudents.filter((student) => Object.values(needsAttention(student.id)).some(Boolean)).length;
  const upcoming = cohortUpcomingCount();
  const selected = coaching.careers.filter((row) => row.status === 'selected').length;
  summary.innerHTML = [
    ['Active cases', active, 'In coaching'],
    ['Need attention', flagged, 'Review or follow-through'],
    ['Upcoming sessions', upcoming, 'Visible scope'],
    ['Decisions made', selected, 'Selected career options'],
  ].map(([label, value, note]) => `<span><small>${ctx!.escapeHtml(label)}</small><strong>${value}</strong><em>${ctx!.escapeHtml(note)}</em></span>`).join('');

  body.innerHTML = page.rows.map((student) => {
    const caseRow = currentCase(student.id) ?? {};
    const careers = rowsFor(coaching.careers, 'user_id', student.id);
    const options = careers.filter((row) => !['ruled-out', 'paused'].includes(row.status));
    const shortlisted = careers.filter((row) => ['shortlisted', 'testing', 'selected'].includes(row.status));
    const skills = activeSkillsForStudent(student.id);
    const skillGaps = skills.filter((row) => row.current_level < row.target_level);
    const actions = rowsFor(coaching.actions, 'user_id', student.id);
    const open = actions.filter((row) => row.status !== 'done');
    const overdue = open.filter((row) => dueState(row.due_date) === 'overdue');
    const session = nextSession(student.id);
    const coach = ctx!.profileById(student.supervisor_id);
    const cohort = getStudentCohort(student.id);
    return `<tr>
      <td data-label="Student"><span class="person-cell"><span class="avatar small">${ctx!.escapeHtml(ctx!.initials(student.full_name))}</span><span><strong>${ctx!.escapeHtml(student.full_name || 'Student')}</strong><small>${ctx!.escapeHtml(coach?.full_name ? `Coach: ${coach.full_name}` : student.email)}${cohort ? ` · ${ctx!.escapeHtml(cohort.name)}` : ' · No active cohort'}</small></span></span></td>
      <td data-label="Coaching stage"><span class="stage-badge" data-stage="${ctx!.escapeHtml(caseRow.coaching_stage || 'intake')}">${ctx!.escapeHtml(ctx!.formatStatus(caseRow.coaching_stage || 'intake'))}</span><small class="cell-note">${ctx!.escapeHtml(ctx!.formatStatus(caseRow.priority || 'standard'))} priority</small></td>
      <td data-label="Decision work"><strong>${options.length} option${options.length === 1 ? '' : 's'}</strong><small class="cell-note">${shortlisted.length} shortlisted or testing</small></td>
      <td data-label="Skills"><strong>${skills.length} tracked</strong><small class="cell-note${skillGaps.length ? ' is-warning' : ''}">${skillGaps.length} open gap${skillGaps.length === 1 ? '' : 's'}</small></td>
      <td data-label="Follow-through"><strong>${open.length} open</strong><small class="cell-note${overdue.length ? ' is-danger' : ''}">${overdue.length ? `${overdue.length} overdue` : 'On track'}</small></td>
      <td data-label="Next contact"><strong>${ctx!.escapeHtml(session ? ctx!.formatDate(session.starts_at, true) : 'Not announced')}</strong><small class="cell-note">${ctx!.escapeHtml(session?.topic || 'No session planned')}</small></td>
      <td data-label="Open"><button class="table-action" type="button" data-student-id="${ctx!.escapeHtml(student.id)}">Open coaching record</button></td>
    </tr>`;
  }).join('');
  empty.hidden = students.length > 0;
  const count = qs<HTMLElement>('#caseload-nav-count');
  if (count) count.textContent = String(allStudents.length);
  renderWorkspacePagination(qs<HTMLElement>('#caseload-pagination'), page, caseloadPagination, 'student', renderCaseload);
}

function decisionUiContext() {
  if (!ctx) return null;
  return {
    escapeHtml: ctx.escapeHtml,
    formatDate: ctx.formatDate,
    formatStatus: ctx.formatStatus,
    userId: ctx.user.id,
    viewerRole: ctx.profile.role,
    skillReviews: coaching.skillReviews,
    profileById: ctx.profileById,
  };
}

function careerHtml(path: Row, editable = true, skills: Row[] = []) {
  const ui = decisionUiContext();
  return ui ? careerCardHtml(path, ui, editable, skills) : '';
}

/** Clear account-scoped coaching state before a different user signs in. */
export function clearCoachingWorkspace() {
  coachingLoadGeneration += 1;
  detailLoadGeneration += 1;
  coaching.cases = [];
  coaching.careers = [];
  coaching.skills = [];
  coaching.evidence = [];
  coaching.sessions = [];
  coaching.actions = [];
  coaching.skillReviews = [];
  coaching.advice = [];
  coaching.notes = [];
  // Assessment history is optional, but it is still account-scoped. Clear it
  // with the rest of the coaching state so switching users cannot briefly
  // expose the previous account's linked results while the next load starts.
  coaching.assessments = [];
  coaching.academic = null;
  coaching.constraints = null;
  coaching.partialFailures = [];
  coaching.schemaReady = true;
  // These selections are also account-scoped. A new sign-in should start at
  // the useful default panes instead of inheriting the previous account's
  // record tab, catalogue page, career preview, or skill pack.
  coaching.recordTab = 'summary';
  coaching.planTab = 'options';
  careerLibraryPage = 1;
  selectedCareerGuideKey = '';
  comparedCareerGuideKeys = [];
  pendingCareerSaveMessage = '';
  selectedSkillPackKey = '';
}

// Read the student's reviews back after a write.  The insert response confirms
// the database accepted the score; this additional query keeps the card in
// step with the same RLS-filtered data that is shown after a normal reload.
async function refreshSkillReviewsForStudent(studentId: string, savedReview?: Row | null) {
  if (!ctx) return;
  const generation = detailLoadGeneration;
  const response = await ctx.client
    .from('skill_reviews')
    .select('*')
    .eq('student_id', studentId)
    .order('updated_at', { ascending: false })
    .order('created_at', { ascending: false });
  if (response.error) throw response.error;
  if (generation !== detailLoadGeneration || !ctx || activeStudentId() !== studentId) return;
  const visibleReviews = [
    ...coaching.skillReviews.filter((item) => item.student_id !== studentId),
    ...(response.data || []),
  ];
  // Keep the confirmed write in the local view even if the read immediately
  // after it briefly comes from a stale replica. The next normal reload will
  // reconcile it with Supabase again.
  if (savedReview?.id) {
    // Inline feedback is an insert, so an immediate read can contain both the
    // previous review and the newly confirmed row. Give the confirmed row a
    // local ordering marker as well as its database id; this prevents a tie in
    // timestamps from making the card render the older score again.
    savedReview.__client_saved_at = Date.now();
    const savedIndex = visibleReviews.findIndex((item) => item.id === savedReview.id);
    if (savedIndex >= 0) visibleReviews[savedIndex] = savedReview;
    else visibleReviews.push(savedReview);
  }
  coaching.skillReviews = dedupeSkillReviews(visibleReviews);
}

function dedupeSkillReviews(rows: Row[]) {
  const newest = new Map<string, Row>();
  const timestamp = (row: Row) => Math.max(Number(row.__client_saved_at) || 0, new Date(String(row.updated_at || row.created_at || 0)).getTime() || 0);
  rows.forEach((row) => {
    const key = `${row.skill_id}:${row.student_id}:${row.coach_id || 'student'}`;
    const current = newest.get(key);
    if (!current || timestamp(row) >= timestamp(current)) newest.set(key, row);
  });
  return Array.from(newest.values());
}

function keepSavedSkillReview(studentId: string, savedReview: Row) {
  // The write response is authoritative for the interaction that just
  // completed. Keep it visible even if the immediate read is delayed or
  // rejected by a restrictive read policy.
  const withoutCurrent = coaching.skillReviews.filter((item) => !(item.student_id === studentId && item.id === savedReview.id));
  savedReview.__client_saved_at = Date.now();
  coaching.skillReviews = [...withoutCurrent, savedReview];
}

function actionWeeklyHours(item: Row) {
  const details = String(item.details ?? '');
  const match = details.match(/(?:^|\n\n)Weekly time available:\s*([0-9]+(?:\.[0-9]+)?)\s*hours?\s*$/i);
  return match ? Number(match[1]) : 0;
}

/** Map the editable action categories to a simple coaching progression. */
function actionMilestone(category: string) {
  return ({
    explore: 'Decide',
    decide: 'Decide',
    learn: 'Start',
    build: 'Build',
    apply: 'Publish or apply',
    connect: 'Connect',
  } as Record<string, string>)[category] ?? 'Next step';
}

function prepareActionSkillOptions() {
  if (!ctx) return;
  const studentId = activeStudentId();
  const skills = studentId
    ? activeSkillsForStudent(studentId).slice().sort((a, b) => String(a.skill_name || '').localeCompare(String(b.skill_name || '')))
    : [];
  qsa<HTMLSelectElement>('[data-action-skill]').forEach((select) => {
    const selected = select.value;
    select.innerHTML = `<option value="">No specific skill</option>${skills.map((skill) => `<option value="${ctx!.escapeHtml(skill.id)}">${ctx!.escapeHtml(skill.skill_name || 'Unnamed skill')}</option>`).join('')}`;
    if (selected && skills.some((skill) => String(skill.id) === selected)) select.value = selected;
  });
}

function actionHtml(item: Row) {
  if (!ctx) return '';
  const due = dueState(item.due_date);
  const assigned = ctx.profileById(item.assigned_by);
  const canRemove = ctx.profile.role !== 'student' || !item.assigned_by || item.assigned_by === ctx.user.id;
  const canToggle = true;
  const completion = item.status === 'done' && item.completed_at ? ` · Completed ${ctx.formatDate(item.completed_at)}` : '';
  const rawDetails = String(item.details ?? '');
  const weeklyMatch = rawDetails.match(/(?:^|\n\n)Weekly time available:\s*([0-9]+(?:\.[0-9]+)?)\s*hours?\s*$/i);
  const weeklyHours = weeklyMatch?.[1] ?? '';
  const visibleDetails = weeklyMatch ? rawDetails.replace(weeklyMatch[0], '').trim() : rawDetails;
  const preset = actionPresets.find((candidate) => candidate.key === item.preset_key || candidate.title === item.title);
  const milestone = item.milestone || preset?.milestone || actionMilestone(String(item.category || ''));
  const effort = item.estimated_minutes || preset?.estimatedMinutes;
  const evidenceHint = item.evidence_hint || preset?.evidenceHint;
  const linkedSkill = coaching.skills.find((skill) => String(skill.id) === String(item.skill_id));
  return `<article class="coaching-action-row${item.status === 'done' ? ' is-done' : ''}" data-due-state="${due}">
    ${canToggle ? `<button class="task-check" type="button" data-state="${item.status === 'done' ? 'done' : 'open'}" data-toggle-coaching-action="${ctx.escapeHtml(item.id)}" aria-label="${item.status === 'done' ? 'Mark incomplete' : 'Mark complete'}" title="${item.status === 'done' ? 'Mark incomplete' : 'Mark complete'}"><span class="task-check-mark" aria-hidden="true">${item.status === 'done' ? '✓' : ''}</span></button>` : ''}
    <div class="action-copy"><header><strong>${ctx.escapeHtml(item.title)}</strong><span class="priority-label" data-priority="${ctx.escapeHtml(item.priority)}">${ctx.escapeHtml(ctx.formatStatus(item.priority))}</span></header><div class="action-meta"><span>${ctx.escapeHtml(ctx.formatStatus(item.category))}</span><span class="action-milestone">Stage: ${ctx.escapeHtml(String(milestone))}</span>${linkedSkill ? `<span>Skill: ${ctx.escapeHtml(linkedSkill.skill_name)}</span>` : ''}${effort ? `<span>About ${ctx.escapeHtml(String(effort))} minutes</span>` : ''}${item.due_date ? `<span>Due ${ctx.escapeHtml(ctx.formatDate(item.due_date))}</span>` : ''}${weeklyHours ? `<span>${ctx.escapeHtml(weeklyHours)} hours/week</span>` : ''}${assigned ? `<span>Assigned by ${ctx.escapeHtml(assigned.full_name)}</span>` : ''}${completion ? `<span>${ctx.escapeHtml(completion.replace(/^ · /, ''))}</span>` : ''}</div>${visibleDetails ? `<p>${ctx.escapeHtml(visibleDetails)}</p>` : ''}${evidenceHint ? `<small class="action-evidence-hint"><b>Evidence:</b> ${ctx.escapeHtml(String(evidenceHint))}</small>` : ''}</div>
    ${canRemove ? `<div class="action-controls"><button class="table-action" type="button" data-delete-coaching-action="${ctx.escapeHtml(item.id)}">Remove</button></div>` : ''}
  </article>`;
}

function careerFocusSummaryHtml(rows: Row[]) {
  if (!ctx) return '';
  const active = rows.filter((row) => !['ruled-out', 'paused'].includes(row.status));
  const primary = active.filter((row) => row.option_type === 'primary');
  const secondary = active.filter((row) => row.option_type !== 'primary');
  return `<div class="focus-summary-copy"><span><small>Primary career options</small><strong>${primary.length ? `${primary.length} in your plan` : 'None chosen yet'}</strong><em>${primary.length ? 'Explore seriously' : 'Add any that fit'}</em></span><span><small>Secondary career options</small><strong>${secondary.length ? `${secondary.length} kept open` : 'None yet'}</strong><em>${secondary.length ? 'Revisit when useful' : 'Add when relevant'}</em></span><span data-allocation-state="ready"><small>Your plan</small><strong>${active.length} career option${active.length === 1 ? '' : 's'} saved</strong><em>Choose your own level of focus</em></span></div><p>Keep any number of primary and secondary career options. Update them as your interests, evidence, and circumstances become clearer.</p>`;
}

function actionProgressHtml(rows: Row[]) {
  const stages = ['Decide', 'Start', 'Build', 'Publish or apply', 'Connect', 'Evaluate'];
  const done = new Set(rows.filter((row) => row.status === 'done').map((row) => String(row.milestone || actionMilestone(String(row.category || '')))));
  const active = new Set(rows.filter((row) => !['done', 'archived'].includes(String(row.status))).map((row) => String(row.milestone || actionMilestone(String(row.category || '')))));
  const progress = Math.min(stages.length, done.size);
  return `<section class="action-progression" aria-labelledby="action-progression-title"><div class="action-progression-heading"><div><strong id="action-progression-title">Your progress pathway</strong><span>Six useful stages—not a rigid sequence</span></div><em>${progress} of ${stages.length} evidenced</em></div><progress max="${stages.length}" value="${progress}" aria-label="${progress} of ${stages.length} action stages evidenced"></progress><ol class="action-progression-steps">${stages.map((stage, index) => {
    const state = done.has(stage) ? 'complete' : active.has(stage) ? 'current' : 'upcoming';
    const stateLabel = state === 'complete' ? 'Evidence added' : state === 'current' ? 'In progress' : 'When useful';
    return `<li class="action-progression-step is-${state}"${state === 'current' ? ' aria-current="step"' : ''}><b aria-hidden="true">${String(index + 1).padStart(2, '0')}</b><span><strong>${ctx!.escapeHtml(stage)}</strong><small>${stateLabel}</small></span></li>`;
  }).join('')}</ol><p class="field-help">Move at a pace that fits your time. You can work on more than one stage and return to an earlier one when new evidence changes the plan.</p></section>`;
}

function renderCareerLists(studentId: string) {
  if (!ctx) return;
  const sourceRows = rowsFor(coaching.careers, 'user_id', studentId)
    .slice()
    .sort((a, b) => String(b.updated_at || b.created_at || '').localeCompare(String(a.updated_at || a.created_at || '')));
  // Older saves could leave the same career in the plan more than once. Keep
  // the newest record for each direction/type so the learner sees one clear
  // card while still being free to keep multiple different primary options.
  const seenDirections = new Set<string>();
  const rows = sourceRows.filter((row) => {
    const key = `${String(row.option_type || 'primary')}::${String(row.title || '').trim().toLowerCase()}::${String(row.career_category || '').trim().toLowerCase()}`;
    if (seenDirections.has(key)) return false;
    seenDirections.add(key);
    return true;
  }).sort((a, b) => (a.option_type === 'primary' ? -1 : b.option_type === 'primary' ? 1 : 0) || String(b.updated_at || '').localeCompare(String(a.updated_at || '')));
  const skills = activeSkillsForStudent(studentId);
  const primary = rows.filter((row) => row.option_type === 'primary');
  const alternatives = rows.filter((row) => row.option_type !== 'primary');
  const directionActions = (optionType: 'primary' | 'alternative') => optionType === 'primary' ? '<span class="career-direction-actions" aria-label="Add a primary career option"><button class="secondary-button" type="button" data-open-career-dialog data-career-option-type="primary">Add primary option</button></span>' : '<span class="career-direction-actions" aria-label="Add a secondary career option"><button class="secondary-button" type="button" data-open-career-dialog data-career-option-type="alternative">Add secondary option</button></span>';
  const html = rows.length ? `<section class="career-option-group primary-group"><header><div><p class="eyebrow">Career options to explore seriously</p><h3>Primary career options</h3></div><div class="career-group-heading-actions"><span>Choose as many as fit</span>${directionActions('primary')}</div></header>${primary.map((row) => careerHtml(row, true, skills)).join('') || '<div class="career-group-empty"><strong>No primary career options yet</strong><span>Save every career option you want to explore seriously right now.</span></div>'}</section><section class="career-option-group alternative-group"><header><div><p class="eyebrow">Career options to keep open</p><h3>Secondary career options</h3></div><div class="career-group-heading-actions"><span>Explore when useful</span>${directionActions('alternative')}</div></header>${alternatives.map((row) => careerHtml(row, true, skills)).join('') || '<div class="career-group-empty"><strong>No secondary career options yet</strong><span>Add routes you may want to test or return to later.</span></div>'}</section>` : `<div class="empty-state coaching-empty"><strong>No career options yet.</strong><span>Start with any career option you want to explore. You can keep more than one primary or secondary option in your plan.</span><div class="career-group-actions"><button class="primary-button" type="button" data-open-career-dialog data-career-option-type="primary">Add primary option</button><button class="secondary-button" type="button" data-open-career-dialog data-career-option-type="alternative">Add secondary option</button></div></div>`;
  const record = qs<HTMLElement>('#record-career-list');
  const student = qs<HTMLElement>('#student-career-list');
  const recordSummary = qs<HTMLElement>('#record-career-focus-summary');
  const studentSummary = qs<HTMLElement>('#student-career-focus-summary');
  if (record) record.innerHTML = html;
  if (student) student.innerHTML = html;
  if (recordSummary) recordSummary.innerHTML = careerFocusSummaryHtml(rows);
  if (studentSummary) studentSummary.innerHTML = careerFocusSummaryHtml(rows);
}

function renderSkillLists(studentId: string) {
  if (!ctx) return;
  // Preserve the learner's current group when a rating, reflection, or linked
  // skill save redraws the roadmap. Rebuilding the cards is necessary to show
  // the saved state, but silently jumping back to Core skills makes the other
  // tabs appear unreliable and loses the user's place.
  const readSkillScope = (kind: 'record' | 'student') => {
    try { return window.sessionStorage.getItem(`fcs-skill-scope-${kind}-${studentId}`) || undefined; }
    catch { return undefined; }
  };
  const previousRecordScope = qs<HTMLElement>('#record-skill-list .skill-scope-panels')?.dataset.activeSkillScope || readSkillScope('record');
  const previousStudentScope = qs<HTMLElement>('#student-skill-list .skill-scope-panels')?.dataset.activeSkillScope || readSkillScope('student');
  const sourceRows = activeSkillsForStudent(studentId)
    .slice()
    .sort((a, b) => String(b.updated_at || b.created_at || '').localeCompare(String(a.updated_at || a.created_at || '')));
  const seenSkills = new Set<string>();
  const rows = sourceRows.filter((row) => {
    // A capability belongs once in the learner's roadmap even when more than
    // one career direction requests it. Keep the first record for evidence
    // continuity, while preventing shared skills from being shown twice.
    const key = String(row.skill_name || '').trim().toLowerCase();
    if (seenSkills.has(key)) return false;
    seenSkills.add(key);
    return true;
  });
  const careers = rowsFor(coaching.careers, 'user_id', studentId);
  const primaryCategories = careers.filter((row) => row.option_type === 'primary').map((row) => String(row.career_category || '')).filter(Boolean);
  const ui = decisionUiContext();
  if (!ui) return;
  const html = skillRoadmapHtml(rows, coaching.evidence, careers, ui);
  const summary = skillSummaryHtml(rows, coaching.evidence, ctx.escapeHtml);
  const recommendations = skillRecommendationsHtml(primaryCategories, ctx.escapeHtml);
  const record = qs<HTMLElement>('#record-skill-list');
  const student = qs<HTMLElement>('#student-skill-list');
  const recordSummary = qs<HTMLElement>('#record-skill-summary');
  const studentSummary = qs<HTMLElement>('#student-skill-summary');
  const recordRecommendations = qs<HTMLElement>('#record-skill-recommendations');
  const studentRecommendations = qs<HTMLElement>('#student-skill-recommendations');
  if (record) record.innerHTML = html;
  if (student) student.innerHTML = html;
  const defaultScope = rows.some((row) => skillScopeFor(row) === 'foundation') ? 'foundation' : rows.some((row) => skillScopeFor(row) === 'career-specific') ? 'career-specific' : rows.some((row) => skillScopeFor(row) === 'future-ready') ? 'future-ready' : 'all';
  if (record) {
    const paginationKey = `fcs-skill-pagination-record-${studentId}`;
    showSkillScopeTab(previousRecordScope || defaultScope, record);
    wireSkillPagination(record, paginationKey);
    wireAllSkillPagination(record, `${paginationKey}-all`);
  }
  if (student) {
    const paginationKey = `fcs-skill-pagination-student-${studentId}`;
    showSkillScopeTab(previousStudentScope || defaultScope, student);
    wireSkillPagination(student, paginationKey);
    wireAllSkillPagination(student, `${paginationKey}-all`);
  }
  if (recordSummary) recordSummary.innerHTML = summary;
  if (studentSummary) studentSummary.innerHTML = summary;
  if (recordRecommendations) recordRecommendations.innerHTML = recommendations;
  if (studentRecommendations) studentRecommendations.innerHTML = ctx.profile.role === 'student'
    ? '<p class="field-help">Your coaching team keeps this skill plan focused. Core skills stay portable; career-specific skills follow saved career options; Skills for change help you adapt as tools and work evolve.</p>'
    : recommendations;
}

function renderSessionLists(_studentId: string) {
  renderCohortWorkspace();
}

function renderActionLists(studentId: string) {
  const rows = rowsFor(coaching.actions, 'user_id', studentId);
  const openRows = rows.filter((row) => !['done', 'archived'].includes(String(row.status)));
  const weeklyTotal = openRows.reduce((sum, row) => sum + actionWeeklyHours(row), 0);
  const weeklySummary = rows.length
    ? `<div class="action-capacity-summary"><strong>${weeklyTotal ? `${weeklyTotal} hours/week planned` : 'Set weekly time for your open actions'}</strong><span>${openRows.length} open action${openRows.length === 1 ? '' : 's'}</span><p>${weeklyTotal ? 'Keep this total realistic alongside the student’s other commitments.' : 'Choose a weekly amount when creating or updating an action so the plan stays realistic.'}</p></div>`
    : '';
  const html = actionProgressHtml(rows) + weeklySummary + (rows.map(actionHtml).join('') || '<div class="empty-state coaching-empty"><strong>No actions yet.</strong><span>Turn one open question into a specific next move.</span><button class="primary-button" type="button" data-focus-action-form>Add your first action</button></div>');
  const record = qs<HTMLElement>('#record-action-list');
  const student = qs<HTMLElement>('#student-action-list');
  if (record) record.innerHTML = html;
  if (student) student.innerHTML = html;
}

function renderStudentGuidance(studentId: string) {
  if (!ctx) return;
  const container = qs<HTMLElement>('#student-guidance-list');
  if (!container) return;
  const notes = rowsFor(coaching.notes, 'student_id', studentId).filter((note) => note.visibility === 'student');
  const advice = rowsFor(coaching.advice, 'student_id', studentId);
  const guidanceTab = qs<HTMLButtonElement>('#plan-guidance-tab');
  if (guidanceTab) {
    const total = notes.length + advice.length;
    let count = guidanceTab.querySelector<HTMLElement>('[data-guidance-count]');
    if (total > 0) {
      if (!count) {
        count = document.createElement('span');
        count.dataset.guidanceCount = 'true';
        count.className = 'nav-tab-count';
        guidanceTab.appendChild(count);
      }
      count.textContent = String(total);
      guidanceTab.setAttribute('aria-label', `Coach guidance, ${total} item${total === 1 ? '' : 's'}`);
    } else if (count) {
      count.remove();
      guidanceTab.removeAttribute('aria-label');
    }
  }
  const noteCards = notes.map((note) => {
    const author = ctx!.profileById(note.author_id);
    const label = note.note_type === 'suggestion' ? 'Suggestion' : ctx!.formatStatus(note.note_type || 'Guidance');
    return `<article class="guidance-card"><header><span class="guidance-label">${ctx!.escapeHtml(label)}</span><time>${ctx!.escapeHtml(ctx!.formatDate(note.created_at, true))}</time></header><p>${ctx!.escapeHtml(note.content)}</p><footer><span>Shared by ${ctx!.escapeHtml(author?.full_name || 'your coaching team')}</span><span>For your next step</span></footer></article>`;
  });
  const adviceCards = advice.map((item) => {
    const cohort = item.cohort_id ? getCohortById(item.cohort_id) : null;
    const cohortLabel = cohort ? ` · ${ctx!.escapeHtml(cohort.name)}` : '';
    return `<article class="guidance-card advice-card" data-advice-status="${ctx!.escapeHtml(item.status)}"><header><span class="guidance-label">Coach guidance</span><time>${ctx!.escapeHtml(ctx!.formatDate(item.advice_date))}</time></header><h4>${ctx!.escapeHtml(item.title)}</h4><p>${ctx!.escapeHtml(item.advice)}</p><footer><span>Shared by ${ctx!.escapeHtml(ctx!.profileById(item.author_id)?.full_name || 'your coaching team')}${cohortLabel}</span><span>${item.due_date ? `Due ${ctx!.escapeHtml(ctx!.formatDate(item.due_date))}` : ctx!.escapeHtml(ctx!.formatStatus(item.status))}</span></footer>${ctx!.profile.role === 'student' ? `<button class="table-action advice-status-toggle" type="button" data-toggle-advice="${ctx!.escapeHtml(item.id)}">${item.status === 'done' ? 'Reopen guidance' : 'Mark complete'}</button>` : ''}</article>`;
  });
  container.innerHTML = [...adviceCards, ...noteCards].join('') || '<div class="empty-state coaching-empty"><strong>No guidance shared yet.</strong><span>Your coaching team can add recommendations and next steps here.</span></div>';
}

function renderAdviceList(studentId: string) {
  if (!ctx) return;
  const container = qs<HTMLElement>('#student-advice-list');
  if (!container) return;
  const rows = rowsFor(coaching.advice, 'student_id', studentId);
  container.innerHTML = rows.map((item) => {
    const own = item.author_id === ctx!.user.id;
    const cohort = item.cohort_id ? getCohortById(item.cohort_id) : null;
    const cohortLabel = cohort ? ` · ${ctx!.escapeHtml(cohort.name)}` : '';
    return `<article class="advice-row" data-advice-status="${ctx!.escapeHtml(item.status)}"><header><span><strong>${ctx!.escapeHtml(item.title)}</strong><small>${ctx!.escapeHtml(ctx!.formatDate(item.advice_date))}${item.due_date ? ` · Due ${ctx!.escapeHtml(ctx!.formatDate(item.due_date))}` : ''}</small></span><span class="status-badge" data-status="${ctx!.escapeHtml(item.status)}">${ctx!.escapeHtml(ctx!.formatStatus(item.status))}</span></header><p>${ctx!.escapeHtml(item.advice)}</p><footer><span>By ${ctx!.escapeHtml(ctx!.profileById(item.author_id)?.full_name || 'Coach')}${cohortLabel}</span><span class="row-actions"><button class="table-action" type="button" data-edit-advice="${ctx!.escapeHtml(item.id)}">Edit</button>${own ? `<button class="table-action" type="button" data-delete-advice="${ctx!.escapeHtml(item.id)}">Remove</button>` : '<small class="permission-note">Only the author can remove</small>'}</span></footer></article>`;
  }).join('') || '<div class="empty-state coaching-empty"><strong>No coach guidance yet.</strong><span>Add a dated next move the student can act on.</span></div>';
}

function renderStudentGrowthPlan(studentId: string) {
  if (!ctx) return;
  const container = qs<HTMLElement>('#student-growth-content');
  if (!container) return;
  const escape = ctx.escapeHtml;
  const careers = rowsFor(coaching.careers, 'user_id', studentId)
    .filter((row) => !['ruled-out', 'paused'].includes(String(row.status)));
  const skills = uniqueSkillRowsForStudent(studentId);
  const evidence = coaching.evidence.filter((item) => skills.some((skill) => skill.id === item.skill_id));
  const actions = rowsFor(coaching.actions, 'user_id', studentId)
    .filter((row) => !['done', 'archived'].includes(String(row.status)));
  const careerSkill = skills.find((skill) => skillScopeFor(skill) === 'career-specific');
  const foundationSkill = skills.find((skill) => skillScopeFor(skill) === 'foundation');
  const hasProof = evidence.length > 0;
  const hasIncomeAction = actions.some((row) => ['money-safety-check', 'salary-demand-check', 'network-map'].includes(String(row.preset_key)));
  const card = (step: string, title: string, copy: string, status: 'ready' | 'next' | 'open', actionKey: string, actionLabel: string) => `<article class="growth-path-card growth-path-card-${status}"><div class="growth-path-card-top"><span class="growth-path-step">${step}</span><span class="growth-path-status">${status === 'ready' ? 'In progress' : status === 'next' ? 'Next useful step' : 'Keep open'}</span></div><h4>${escape(title)}</h4><p>${escape(copy)}</p><button class="secondary-button" type="button" data-growth-action="${escape(actionKey)}">${escape(actionLabel)}</button></article>`;
  const careerCopy = careers.length
    ? `${careers.length} saved career option${careers.length === 1 ? '' : 's'} to test with evidence.`
    : 'Start with one or two career options and compare the ordinary work before committing.';
  const skillCopy = careerSkill
    ? `Current career skill: ${String(careerSkill.skill_name)}. Add one multiplier after you can show this skill in practice.`
    : foundationSkill
      ? `Start from ${String(foundationSkill.skill_name)} and choose one role-relevant skill to practise next.`
      : 'Choose one useful skill to practise before collecting more course certificates.';
  const proofCopy = hasProof
    ? `${evidence.length} evidence item${evidence.length === 1 ? '' : 's'} connected to your skills.`
    : 'No evidence is connected yet. A small finished project or real task is enough to begin.';
  const incomeCopy = hasIncomeAction
    ? 'You have a practical money or opportunity check open. Review the result with your coach.'
    : 'Treat a first job, internship, client task, or apprenticeship as a bridge. Check cost, timing, and reversibility.';
  container.innerHTML = `<section class="growth-path-intro"><div><p class="eyebrow">A practical progression</p><h4>From career option to greater financial choice</h4><p>Build one capability deeply, show proof, learn what the market values, and only then add a multiplier or independent earning experiment. There is no promise of a particular salary; the dashboard helps you make the next decision with better evidence.</p></div><span class="growth-path-note">Assessments are optional</span></section><div class="growth-path-grid">${card('01', 'Choose career options you can test', careerCopy, careers.length ? 'ready' : 'next', 'career-reality-check', careers.length ? 'Review the evidence' : 'Check the work first')}${card('02', 'Build one high-value skill', skillCopy, skills.length ? 'ready' : 'next', 'two-hour-role-task', 'Test the skill')}${card('03', 'Create visible proof', proofCopy, hasProof ? 'ready' : 'next', 'portfolio-piece', hasProof ? 'Build another proof item' : 'Create first proof')}${card('04', 'Connect skill to income safely', incomeCopy, hasIncomeAction ? 'ready' : 'open', 'money-safety-check', hasIncomeAction ? 'Review money safety' : 'Make a money plan')}</div><section class="growth-stack-card"><div><p class="eyebrow">The skill stack</p><h4>Capability → multiplier → earning or ownership</h4><p>Use the first skill to become useful, the multiplier to increase your value, and a later earning skill such as client communication, teaching, consulting, or product thinking to create more options. Add each layer only after the previous layer has evidence.</p></div><div class="growth-stack-steps"><span><b>1</b><strong>Main skill</strong><small>Become useful at a real task.</small></span><span><b>2</b><strong>Multiplier</strong><small>Add technology, data, domain, or communication depth.</small></span><span><b>3</b><strong>Value delivery</strong><small>Show an outcome for a person, team, or customer.</small></span></div></section><section class="growth-checkpoint-card"><div><p class="eyebrow">Next review checkpoint</p><h4>Ask these four questions before making a large commitment</h4></div><ol><li>What ordinary work did I actually test?</li><li>What can I show someone else today?</li><li>What skill would make this work more valuable?</li><li>What is the safest next step for my time, money, and circumstances?</li></ol></section>`;
}

function renderStudentPlan() {
  if (!ctx || ctx.profile.role !== 'student') return;
  const studentId = ctx.profile.id;
  const caseRow = currentCase(studentId) ?? {};
  const cohort = getStudentCohort(studentId);
  const metrics = studentOverviewMetrics(studentId);
  const nextAction = rowsFor(coaching.actions, 'user_id', studentId)
    .filter((row) => row.status !== 'done' && row.status !== 'archived')
    .sort((a, b) => String(a.due_date || '9999-12-31').localeCompare(String(b.due_date || '9999-12-31')))[0];
  const studentCareers = rowsFor(coaching.careers, 'user_id', studentId).filter((row) => !['ruled-out', 'paused'].includes(String(row.status)));
  const hasPrimary = studentCareers.some((row) => row.option_type === 'primary');
  const skillCount = uniqueSkillRowsForStudent(studentId).length;
  const startCopy = !hasPrimary
    ? 'Choose one or more career options to explore. You can keep other options open and change your plan as you learn.'
    : !skillCount
      ? 'Turn your chosen career option into a small skill plan. Start with the one or two abilities you need to practise next.'
      : !nextAction
        ? 'Choose one small action with a date. A clear next step makes the plan easier to use between coaching sessions.'
        : 'Your plan is ready to use. Choose the area that matters most today and record what you learn.';
  const startCopyElement = qs<HTMLElement>('#student-plan-start-copy');
  if (startCopyElement) startCopyElement.textContent = startCopy;
  const summary = qs<HTMLElement>('#student-plan-summary');
  if (summary) {
    summary.innerHTML = `<span><small>Your stage</small><strong>${ctx.escapeHtml(ctx.formatStatus(caseRow.coaching_stage || 'intake'))}</strong></span><span><small>Your goal</small><strong>${ctx.escapeHtml(caseRow.goal_summary || 'Set with your coach')}</strong></span><span><small>Cohort community</small><strong>${ctx.escapeHtml(cohort ? 'Open feed available' : 'Join a cohort when ready')}</strong></span><span><small>Actions in progress</small><strong>${metrics.openActions ? `${metrics.openActions} to follow through` : 'None yet'}</strong></span>`;
  }
  renderAssessmentHistory(studentId, '#student-assessment-list');
  renderCareerLists(studentId);
  renderSkillLists(studentId);
  renderStudentGrowthPlan(studentId);
  renderSessionLists(studentId);
  renderActionLists(studentId);
  renderStudentGuidance(studentId);
}

function renderDecisionSummary(studentId: string) {
  if (!ctx) return;
  const container = qs<HTMLElement>('#record-decision-summary');
  if (!container) return;
  const careers = rowsFor(coaching.careers, 'user_id', studentId);
  const skills = activeSkillsForStudent(studentId);
  const actions = rowsFor(coaching.actions, 'user_id', studentId);
  const primaryDirections = careers.filter((row) => row.option_type === 'primary');
  const evidenceCount = coaching.evidence.filter((evidence) => skills.some((skill) => skill.id === evidence.skill_id)).length;
  const priorityGap = skills
    .filter((row) => Number(row.current_level) < Number(row.target_level))
    .sort((a, b) => (a.priority === 'core' ? -1 : b.priority === 'core' ? 1 : 0))[0];
  const open = actions.filter((row) => row.status !== 'done');
  const directionLabel = primaryDirections.length
    ? `${primaryDirections.slice(0, 2).map((row) => row.title).join(', ')}${primaryDirections.length > 2 ? ` + ${primaryDirections.length - 2} more` : ''}`
    : 'Choose a primary career option';
  const promptItems = [
    primaryDirections.length ? 'What evidence has the student actually produced for the current career option?' : 'Which career option should the student test first, and what would count as useful evidence?',
    priorityGap ? `Is “${String(priorityGap.skill_name)}” a skill gap, a follow-through problem, or a poor-fit signal?` : 'What is the smallest useful capability to practise next?',
    open.length ? 'Which open action is the one commitment worth protecting this week?' : 'What single action should be agreed before the next review?',
    'What should be ruled out, referred, or supported differently?',
    'What changed since the last coaching review, and what decision follows from that change?',
    'Has the student checked three useful sources or people before asking for a conclusion?',
    'Would the student accept the routine, less visible 80% of this work—not just the appealing parts?',
  ];
  const escape = ctx.escapeHtml;
  container.innerHTML = `<article><small>Career options</small><strong>${escape(directionLabel)}</strong><span>${escape(primaryDirections.length ? `${primaryDirections.length} primary · ${careers.filter((row) => row.option_type !== 'primary').length} secondary` : `${careers.length} option${careers.length === 1 ? '' : 's'} mapped`)}</span></article><article><small>Priority capability</small><strong>${escape(priorityGap?.skill_name || 'Add a balanced skill plan')}</strong><span>${evidenceCount} proof item${evidenceCount === 1 ? '' : 's'} across ${skills.length} skills</span></article><article><small>Follow-through</small><strong>${open.length} open action${open.length === 1 ? '' : 's'}</strong><span>${open.filter((row) => dueState(row.due_date) === 'overdue').length} overdue</span></article><article><small>Cohort community</small><strong>Shared feed</strong><span>Read updates, ask for help, and follow group commitments.</span></article><section class="coach-review-prompts"><div><small>Coach review prompts</small><strong>Use the evidence to choose the next conversation</strong></div><ul>${promptItems.map((item) => `<li>${escape(item)}</li>`).join('')}</ul></section>`;
}

function renderTimeline(studentId: string) {
  if (!ctx) return;
  const container = qs<HTMLElement>('#record-timeline');
  if (!container) return;
  const events: { at: string; label: string; detail: string; type: string }[] = [];
  getCohortSessionsForStudent(studentId).forEach((row) => events.push({ at: row.starts_at, label: row.topic, detail: row.student_summary || row.agenda || ctx!.formatStatus(row.status), type: row.status }));
  rowsFor(coaching.careers, 'user_id', studentId).forEach((row) => events.push({ at: row.updated_at || row.created_at, label: `${row.title}: ${ctx!.formatStatus(row.status)}`, detail: row.next_step || 'Career option updated', type: 'career' }));
  const studentSkillIds = new Set(activeSkillsForStudent(studentId).map((row) => row.id));
  coaching.evidence.filter((row) => studentSkillIds.has(row.skill_id)).forEach((row) => events.push({ at: row.evidence_date || row.created_at, label: `Evidence added: ${row.title}`, detail: ctx!.formatStatus(row.evidence_type), type: 'evidence' }));
  coaching.skillReviews.filter((row) => row.student_id === studentId).forEach((row) => events.push({ at: row.updated_at || row.coach_reviewed_on || row.student_feedback_on, label: row.coach_feedback ? 'Coach reviewed a skill' : 'Student shared skill feedback', detail: row.coach_feedback || row.student_feedback || 'Skill feedback recorded', type: 'review' }));
  coaching.advice.filter((row) => row.student_id === studentId).forEach((row) => events.push({ at: row.advice_date || row.created_at, label: `Advice: ${row.title}`, detail: row.advice, type: 'advice' }));
  rowsFor(coaching.actions, 'user_id', studentId).filter((row) => row.status === 'done').forEach((row) => events.push({ at: row.completed_at || row.updated_at, label: `Completed: ${row.title}`, detail: ctx!.formatStatus(row.category), type: 'done' }));
  container.innerHTML = events.sort((a, b) => new Date(b.at).getTime() - new Date(a.at).getTime()).slice(0, 8).map((event) => `<article><time>${ctx!.escapeHtml(ctx!.formatDate(event.at, true))}</time><span class="timeline-marker" data-type="${ctx!.escapeHtml(event.type)}"></span><span><strong>${ctx!.escapeHtml(event.label)}</strong><small>${ctx!.escapeHtml(event.detail)}</small></span></article>`).join('') || '<div class="empty-state">No coaching movement recorded yet.</div>';
}

function renderAssessmentHistory(studentId: string, selector = '#record-assessment-list') {
  if (!ctx) return;
  const container = qs<HTMLElement>(selector);
  if (!container) return;
  const results = rowsFor(coaching.assessments, 'user_id', studentId)
    .slice()
    .sort((a, b) => new Date(String(b.completed_at || b.created_at || 0)).getTime() - new Date(String(a.completed_at || a.created_at || 0)).getTime());
  if (!results.length) {
    container.innerHTML = '<div class="empty-state"><strong>No saved assessment results yet.</strong><span>Assessments are optional. You can use your coaching plan without taking one. Anonymous results stay on their assessment page; a result appears here only after it has been explicitly saved to this account.</span></div>';
    return;
  }
  container.innerHTML = results.map((row) => {
    const date = row.completed_at || row.created_at;
    const summary = String(row.summary || '').trim();
    const score = String(row.score_label || '').trim();
    const slug = String(row.assessment_slug || '').trim();
    const assessmentHref = slug ? `/services/assessments/${slug.replace(/^\/+|\/+$/g, '').split('/').map((part) => encodeURIComponent(part)).join('/')}/` : '';
    return `<article class="assessment-history-card"><div class="assessment-history-card-heading"><div><p class="eyebrow">Completed assessment</p><h4>${ctx!.escapeHtml(row.assessment_title || row.assessment_slug || 'Assessment')}</h4></div><time>${ctx!.escapeHtml(ctx!.formatDate(date, true))}</time></div>${score ? `<strong class="assessment-score">${ctx!.escapeHtml(score)}</strong>` : ''}${summary ? `<p>${ctx!.escapeHtml(summary)}</p>` : ''}${assessmentHref ? `<footer><a class="text-button" href="${assessmentHref}" target="_blank" rel="noopener noreferrer">Open assessment</a></footer>` : ''}</article>`;
  }).join('');
}

function renderAssessmentOverview(studentId: string) {
  if (!ctx) return;
  const copy = qs<HTMLElement>('#record-assessment-overview-copy');
  if (!copy) return;
  const count = rowsFor(coaching.assessments, 'user_id', studentId).length;
  copy.textContent = count
    ? `${count} saved assessment result${count === 1 ? '' : 's'} available to review. Use them alongside the student's evidence and experience.`
    : 'No saved assessment results yet. Assessments are optional, and the coaching plan works without one. Anonymous results are not linked to a student account automatically.';
}

function fillCaseForm(studentId: string) {
  const form = qs<HTMLFormElement>('#student-case-form');
  if (!form) return;
  form.reset();
  const caseRow = currentCase(studentId);
  if (caseRow) setFormValues(form, caseRow);
  const saved = qs<HTMLElement>('#student-case-saved-at');
  if (saved) saved.textContent = caseRow?.updated_at && ctx ? `Updated ${ctx.formatDate(caseRow.updated_at, true)}` : '';
}

function renderStudentRecord() {
  if (!ctx || ctx.profile.role === 'student' || !ctx.selectedStudentId) return;
  const studentId = ctx.selectedStudentId;
  const student = ctx.profileById(studentId);
  if (!student) return;
  const branch = ctx.branchById(student.branch_id);
  const supervisor = ctx.profileById(student.supervisor_id);
  const caseRow = currentCase(studentId) ?? {};
  const title = qs<HTMLElement>('#student-record-heading');
  const meta = qs<HTMLElement>('#student-record-meta');
  const stage = qs<HTMLElement>('#student-record-stage');
  const status = qs<HTMLElement>('#student-record-status');
  if (title) title.textContent = student.full_name || 'Student';
  if (meta) meta.textContent = `${student.email} · ${branch?.name || 'No branch'} · Coach: ${supervisor?.full_name || 'Not assigned'}`;
  if (stage) { stage.textContent = ctx.formatStatus(caseRow.coaching_stage || 'intake'); stage.dataset.stage = caseRow.coaching_stage || 'intake'; }
  if (status) { status.textContent = ctx.formatStatus(caseRow.case_status || 'active'); status.dataset.status = caseRow.case_status || 'active'; }
  fillCaseForm(studentId);
  renderDecisionSummary(studentId);
  renderAssessmentOverview(studentId);
  renderTimeline(studentId);
  renderAssessmentHistory(studentId);
  renderCareerLists(studentId);
  renderSkillLists(studentId);
  renderSessionLists(studentId);
  renderActionLists(studentId);
  renderAdviceList(studentId);
  ctx.renderCoachNotes(coaching.notes);
}

export function renderCoachingWorkspace() {
  if (!ctx) return;
  qsa<HTMLElement>('[data-staff-only]').forEach((element) => { element.hidden = ctx!.profile.role === 'student'; });
  renderCaseload();
  renderStudentPlan();
  renderStudentRecord();
  renderCohortWorkspace();
  const warning = qs<HTMLElement>('#coaching-schema-warning');
  if (warning) {
    warning.hidden = coaching.schemaReady;
    const copy = warning.querySelector('span');
    if (copy && coaching.partialFailures.length) {
      copy.textContent = `Some ${coaching.partialFailures.join(', ')} could not be loaded just now. Your saved records are safe; refresh the workspace to try again.`;
    }
  }
}

// Keep the coaching module's context snapshot aligned when the parent
// workspace restores a selected student after a full page refresh.
export function setSelectedStudentForWorkspace(studentId: string | null) {
  if (ctx) ctx.selectedStudentId = studentId;
}

async function loadStudentDetail(studentId: string) {
  if (!ctx) return;
  const generation = ++detailLoadGeneration;
  ctx.setWorkspaceStatus('Loading coaching record...');
  try {
    const [academicResult, notesResult, constraintsResult, assessmentsResult] = await Promise.allSettled([
      ctx.client.from('student_academic_records').select('*').eq('student_id', studentId).maybeSingle(),
      queryRows('coach_notes', (query) => query.eq('student_id', studentId).order('created_at', { ascending: false })),
      ctx.client.from('student_constraints').select('*').eq('student_id', studentId).maybeSingle(),
      queryRows('assessment_results', (query) => query.eq('user_id', studentId).order('completed_at', { ascending: false }).limit(50)),
    ]);
    if (generation !== detailLoadGeneration || !ctx || ctx.selectedStudentId !== studentId) return;
    if (academicResult.status === 'fulfilled' && academicResult.value.error && ctx.profile.role !== 'student') throw academicResult.value.error;
    if (academicResult.status === 'rejected' && ctx.profile.role !== 'student') throw academicResult.reason;
    if (notesResult.status === 'rejected' && ctx.profile.role !== 'student') throw notesResult.reason;
    if (constraintsResult.status === 'rejected' && ctx.profile.role !== 'student') throw constraintsResult.reason;
    const academicAvailable = academicResult.status === 'fulfilled' && !academicResult.value.error;
    const notesAvailable = notesResult.status === 'fulfilled';
    coaching.academic = academicAvailable
      ? academicResult.value.data ?? null
      : null;
    coaching.notes = notesAvailable ? notesResult.value : [];
    coaching.assessments = assessmentsResult.status === 'fulfilled' ? assessmentsResult.value : coaching.assessments;
    coaching.constraints = constraintsResult.status === 'fulfilled' && !constraintsResult.value.error
      ? constraintsResult.value.data ?? null
      : null;
    renderContext();
    renderAssessmentHistory(studentId);
    const constraintsAvailable = constraintsResult.status === 'fulfilled' && !constraintsResult.value.error;
    ctx.setWorkspaceStatus(academicAvailable && notesAvailable && constraintsAvailable ? '' : 'Some record details could not be loaded. The available information is shown; refresh to try again.', true);
  } catch (error) {
    ctx.setWorkspaceStatus(friendlyWorkspaceError(error, 'Could not load the coaching record. Refresh and try again.'), true);
  }
}

function renderContext() {
  if (!ctx) return;
  const definition = qs<HTMLElement>('#record-profile');
  if (definition) {
    const student = activeStudentId() ? ctx.profileById(activeStudentId()!) : null;
    const fields = [
      ['Student name', student?.full_name || 'Not set'],
    ];
    definition.innerHTML = fields.map(([label, value]) => `<dl class="definition-item"><dt>${ctx!.escapeHtml(label)}</dt><dd>${ctx!.escapeHtml(String(value || 'Not set'))}</dd></dl>`).join('');
  }
  const form = qs<HTMLFormElement>('#academic-form');
  if (form) {
    form.reset();
    const academic = coaching.academic ?? {};
    setFormValues(form, { ...academic, exam_targets: (academic.exam_targets ?? []).join(', ') });
  }
  const context = qs<HTMLElement>('#record-constraints');
  if (context) {
    const constraints = coaching.constraints ?? {};
    const list = [
      ['Income timeframe', constraints.education_timeline || 'Not recorded'],
      ['Learning time each week', constraints.available_hours_per_week != null ? `${constraints.available_hours_per_week} hours` : 'Not recorded'],
      ['Device access', ctx!.formatStatus(constraints.device_access || 'not-set')],
      ['Internet access', ctx!.formatStatus(constraints.internet_access || 'not-set')],
      ['Interests', Array.isArray(constraints.interest_themes) && constraints.interest_themes.length ? constraints.interest_themes.join(', ') : 'Not recorded'],
      ['Non-negotiables or limits', Array.isArray(constraints.non_negotiables) && constraints.non_negotiables.length ? constraints.non_negotiables.join(' · ') : 'Not recorded'],
    ];
    context.innerHTML = list.map(([label, value]) => `<dl class="definition-item"><dt>${ctx!.escapeHtml(label)}</dt><dd>${ctx!.escapeHtml(String(value))}</dd></dl>`).join('');
  }
}

export async function openCoachingRecord(studentId: string) {
  if (!ctx) return;
  const student = ctx.profileById(studentId);
  if (!student || student.role !== 'student') return;
  ctx.selectedStudentId = studentId;
  ctx.setSelectedStudentId(studentId);
  // Detail fields belong to the selected student, not to the shared caseload
  // cache. Clear them before the first render so a slow request cannot show
  // the previous student's context, notes, or assessment history in the new
  // record shell.
  coaching.academic = null;
  coaching.constraints = null;
  coaching.notes = [];
  coaching.assessments = [];
  // Opening a record is read-only. Do not silently seed the student's plan
  // with default skills; recommendations must be explicitly chosen by the
  // student or coach so the roadmap reflects a real decision.
  coaching.recordTab = 'summary';
  showRecordTab('summary');
  ctx.openView('student-record');
  renderStudentRecord();
  await loadStudentDetail(studentId);
  renderStudentRecord();
}

export function backToCaseload() {
  if (ctx) {
    ctx.selectedStudentId = null;
    ctx.setSelectedStudentId(null);
  }
  try {
    sessionStorage.removeItem('fcs-dashboard-student');
    sessionStorage.removeItem('fcs-dashboard-student-profile');
    const previous = window.history.state && typeof window.history.state === 'object'
      ? window.history.state as Record<string, unknown>
      : {};
    if ('studentId' in previous) {
      const next = { ...previous };
      delete next.studentId;
      const cleanUrl = new URL(window.location.href);
      cleanUrl.searchParams.delete('studentId');
      cleanUrl.searchParams.set('view', 'caseload');
      window.history.replaceState(next, document.title, cleanUrl.pathname + cleanUrl.search + cleanUrl.hash);
    }
  } catch { /* storage/history may be unavailable */ }
  ctx?.openView('caseload');
}

function showRecordTab(tab: string) {
  if (tab !== coaching.recordTab) ctx?.setWorkspaceStatus('');
  coaching.recordTab = tab;
  qsa<HTMLButtonElement>('[data-record-tab]').forEach((button) => {
    const active = button.dataset.recordTab === tab;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-selected', String(active));
  });
  qsa<HTMLElement>('[data-record-pane]').forEach((pane) => {
    const active = pane.dataset.recordPane === tab;
    pane.hidden = !active;
    pane.classList.toggle('is-active', active);
  });
}

function showPlanTab(tab: string, updateHistory = false) {
  // History state and session storage are user-controlled browser data. A
  // stale value must never leave every plan pane hidden; fall back to the
  // first useful section when the requested tab is no longer available.
  const availableTabs = new Set(['options', 'skills', 'growth', 'actions', 'sessions', 'guidance']);
  const selectedTab = availableTabs.has(tab) ? tab : 'options';
  // Plan tabs are real destinations for learners. Keeping them in the
  // browser history means Back/Forward returns to the section they were
  // actually using instead of jumping to the overview.
  if (updateHistory && ctx?.profile.role === 'student' && !window.location.pathname.endsWith('/career-decision') && selectedTab !== coaching.planTab) {
    const previous = window.history.state && typeof window.history.state === 'object'
      ? window.history.state as Record<string, unknown>
      : {};
    window.history.pushState({ ...previous, dashboardView: 'career', planTab: selectedTab }, '', window.location.href);
  }
  if (selectedTab !== coaching.planTab) ctx?.setWorkspaceStatus('');
  coaching.planTab = selectedTab;
  // A reload should continue the section the learner was actually using. Keep
  // this separate from the workspace view because all plan sections share the
  // same career pane. Fresh sign-in clears the marker with the rest of the
  // account-scoped coaching state in the parent workspace.
  if (ctx?.profile.role === 'student') {
    try { sessionStorage.setItem('fcs-dashboard-plan-tab', selectedTab); } catch { /* storage may be unavailable */ }
  }
  const workspace = qs<HTMLElement>('#hierarchy-workspace');
  if (workspace) workspace.dataset.activePlanTab = selectedTab;
  qsa<HTMLButtonElement>('[data-plan-tab]').forEach((button) => {
    const active = button.dataset.planTab === selectedTab;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-selected', String(active));
  });
  qsa<HTMLElement>('[data-plan-pane]').forEach((pane) => {
    const active = pane.dataset.planPane === selectedTab;
    pane.hidden = !active;
    pane.classList.toggle('is-active', active);
  });
}

function requireSchema() {
  // Individual reads may be unavailable while the rest of the workspace is
  // usable. Let the requested action proceed; its own Supabase response will
  // provide the precise error instead of silently disabling every workflow.
  return Boolean(ctx);
}

/** Restore the student's last plan section after the workspace has rendered. */
export function restoreStudentPlanTab(preferredTab = '') {
  if (!ctx || ctx.profile.role !== 'student') return;
  let remembered = preferredTab;
  if (!remembered) {
    try { remembered = sessionStorage.getItem('fcs-dashboard-plan-tab') ?? ''; } catch { /* storage may be unavailable */ }
  }
  if (remembered) showPlanTab(remembered);
}

const recommendedSkillKeys = new Set([
  'clear-writing', 'active-listening', 'critical-thinking', 'learning-how-to-learn',
  'time-management', 'reliability', 'digital-collaboration', 'self-awareness',
  // Durable foundations identified in the reference dashboards. These are
  // learner-wide capabilities, not skills owned by a selected career.
  'internet-search', 'security-and-privacy-basics', 'web-literacy',
  'project-habits-and-finishing-things', 'high-agency', 'project-management',
  'selling-and-persuasion',
]);

function addPresetOptions(select: HTMLSelectElement | null, html: string) {
  if (!select || select.dataset.prepared === 'true') return;
  select.insertAdjacentHTML('beforeend', html);
  select.dataset.prepared = 'true';
}

export function openStudentPlanTab(tab: string) {
  if (!ctx || ctx.profile.role !== 'student') return;
  showPlanTab(tab);
}

export function openStudentRecordTab(tab: string) {
  if (!ctx || ctx.profile.role === 'student') return;
  showRecordTab(tab);
}

type SkillPaginationState = { pageSize: number; page: number };
const skillPageSizes = new Set([5, 7, 10, 15, 20, 25, 50]);

function readSkillPaginationState(key: string): SkillPaginationState | null {
  try {
    const raw = window.sessionStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<SkillPaginationState>;
    const pageSize = Number(parsed.pageSize);
    const page = Number(parsed.page);
    if (!skillPageSizes.has(pageSize) || !Number.isFinite(page) || page < 1) return null;
    return { pageSize, page: Math.floor(page) };
  } catch { return null; }
}

function writeSkillPaginationState(key: string, state: SkillPaginationState) {
  try { window.sessionStorage.setItem(key, JSON.stringify(state)); } catch { /* storage may be unavailable */ }
}

function wireSkillPagination(container: HTMLElement | null, storagePrefix = '') {
  if (!container) return;
  container.querySelectorAll<HTMLElement>('[data-skill-pagination]').forEach((control) => {
    const panel = control.closest<HTMLElement>('[data-skill-scope-panel]');
    if (!panel || control.dataset.paginationWired === 'true') return;
    control.dataset.paginationWired = 'true';
    const storageKey = storagePrefix ? `${storagePrefix}-${panel.dataset.skillScopePanel || 'group'}` : '';
    if (storageKey && panel.dataset.paginationRestored !== 'true') {
      const saved = readSkillPaginationState(storageKey);
      if (saved) {
        panel.dataset.skillPageSize = String(saved.pageSize);
        panel.dataset.skillPage = String(saved.page);
      }
      panel.dataset.paginationRestored = 'true';
    }
    const render = () => {
      const items = Array.from(panel.querySelectorAll<HTMLElement>('[data-skill-page-item]'));
      const pageSize = Math.max(1, Number(panel.dataset.skillPageSize || 5));
      const pages = Math.max(1, Math.ceil(items.length / pageSize));
      const page = Math.min(Math.max(Number(panel.dataset.skillPage || 1), 1), pages);
      panel.dataset.skillPage = String(page);
      if (storageKey) writeSkillPaginationState(storageKey, { pageSize, page });
      panel.querySelectorAll<HTMLSelectElement>('[data-skill-page-size-select]').forEach((select) => { select.value = String(pageSize); });
      items.forEach((item, index) => { item.hidden = index < (page - 1) * pageSize || index >= page * pageSize; });
      panel.querySelectorAll<HTMLElement>('[data-skill-page-indicator]').forEach((el) => { el.textContent = items.length ? `Showing ${(page - 1) * pageSize + 1}–${Math.min(page * pageSize, items.length)} of ${items.length} skills` : 'No skills'; });
      panel.querySelectorAll<HTMLButtonElement>('[data-skill-page-action="previous"]').forEach((button) => { button.disabled = page <= 1; });
      panel.querySelectorAll<HTMLButtonElement>('[data-skill-page-action="first"]').forEach((button) => { button.disabled = page <= 1; });
      panel.querySelectorAll<HTMLButtonElement>('[data-skill-page-action="next"]').forEach((button) => { button.disabled = page >= pages; });
      panel.querySelectorAll<HTMLButtonElement>('[data-skill-page-action="last"]').forEach((button) => { button.disabled = page >= pages; });
      panel.querySelectorAll<HTMLElement>('[data-skill-page-numbers]').forEach((numbers) => {
        const start = Math.max(1, Math.min(page - 2, pages - 4));
        const end = Math.min(pages, start + 4);
        numbers.innerHTML = Array.from({ length: end - start + 1 }, (_, i) => start + i).map((n) => `<button class="skill-page-number${n === page ? ' is-current' : ''}" type="button" data-skill-page-number="${n}" aria-label="Go to skill page ${n}"${n === page ? ' aria-current="page"' : ''}>${n}</button>`).join('');
      });
    };
    control.querySelector<HTMLSelectElement>('[data-skill-page-size-select]')?.addEventListener('change', (event) => {
      const select = event.currentTarget as HTMLSelectElement;
      panel.dataset.skillPageSize = select.value;
      panel.dataset.skillPage = '1';
      render();
    });
    control.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const action = target.closest<HTMLElement>('[data-skill-page-action]')?.dataset.skillPageAction;
      const number = Number(target.closest<HTMLElement>('[data-skill-page-number]')?.dataset.skillPageNumber || 0);
      const pageSize = Math.max(1, Number(panel.dataset.skillPageSize || 5));
      const pages = Math.max(1, Math.ceil(panel.querySelectorAll('[data-skill-page-item]').length / pageSize));
      const current = Number(panel.dataset.skillPage || 1);
      if (number) panel.dataset.skillPage = String(number);
      else if (action === 'next') panel.dataset.skillPage = String(Math.min(pages, current + 1));
      else if (action === 'previous') panel.dataset.skillPage = String(Math.max(1, current - 1));
      else if (action === 'first') panel.dataset.skillPage = '1';
      else if (action === 'last') panel.dataset.skillPage = String(pages);
      else return;
      render();
    });
    render();
  });
}

function wireAllSkillPagination(container: HTMLElement | null, storageKey = '') {
  const root = container?.querySelector<HTMLElement>('.skill-scope-panels');
  const controls = root ? Array.from(root.querySelectorAll<HTMLElement>('[data-all-skill-pagination]')) : [];
  if (!root || !controls.length || controls.every((control) => control.dataset.paginationWired === 'true')) return;
  const saved = storageKey ? readSkillPaginationState(storageKey) : null;
  if (saved) {
    root.dataset.allSkillPageSize = String(saved.pageSize);
    root.dataset.allSkillPage = String(saved.page);
  }
  root.dataset.allSkillPageSize = root.dataset.allSkillPageSize || controls[0].dataset.allSkillPageSize || '5';
  const render = () => {
    const items = Array.from(root.querySelectorAll<HTMLElement>('[data-skill-page-item]'));
    const pageSize = Math.max(1, Number(root.dataset.allSkillPageSize || 5));
    const pages = Math.max(1, Math.ceil(items.length / pageSize));
    const page = Math.min(Math.max(Number(root.dataset.allSkillPage || 1), 1), pages);
    root.dataset.allSkillPage = String(page);
    if (storageKey) writeSkillPaginationState(storageKey, { pageSize, page });
    if (root.dataset.activeSkillScope !== 'all') return;
    items.forEach((item, index) => { item.hidden = index < (page - 1) * pageSize || index >= page * pageSize; });
    controls.forEach((control) => {
      control.querySelectorAll<HTMLSelectElement>('[data-all-skill-page-size-select]').forEach((select) => { select.value = String(pageSize); });
      control.querySelectorAll<HTMLElement>('[data-all-skill-page-indicator]').forEach((el) => { el.textContent = items.length ? `Showing ${(page - 1) * pageSize + 1}–${Math.min(page * pageSize, items.length)} of ${items.length} skills · page ${page} of ${pages}` : 'No skills'; });
      control.querySelectorAll<HTMLButtonElement>('[data-all-skill-page-action="first"], [data-all-skill-page-action="previous"]').forEach((button) => { button.disabled = page <= 1; });
      control.querySelectorAll<HTMLButtonElement>('[data-all-skill-page-action="next"], [data-all-skill-page-action="last"]').forEach((button) => { button.disabled = page >= pages; });
      control.querySelectorAll<HTMLElement>('[data-all-skill-page-numbers]').forEach((numbers) => {
        // Keep a large plan usable: show a compact window around the current
        // page with explicit first/last pages and inert ellipses instead of
        // rendering dozens of buttons in one row.
        const pageNumbers: Array<number | 'ellipsis'> = [];
        const windowSize = 2;
        const firstVisible = Math.max(1, page - windowSize);
        const lastVisible = Math.min(pages, page + windowSize);
        if (firstVisible > 1) pageNumbers.push(1);
        if (firstVisible > 2) pageNumbers.push('ellipsis');
        for (let current = firstVisible; current <= lastVisible; current += 1) pageNumbers.push(current);
        if (lastVisible < pages - 1) pageNumbers.push('ellipsis');
        if (lastVisible < pages) pageNumbers.push(pages);
        numbers.innerHTML = pageNumbers.map((n) => n === 'ellipsis'
          ? '<span class="skill-page-ellipsis" aria-hidden="true">…</span>'
          : `<button class="skill-page-number${n === page ? ' is-current' : ''}" type="button" data-all-skill-page-number="${n}" aria-label="Go to all skills page ${n}"${n === page ? ' aria-current="page"' : ''}>${n}</button>`).join('');
      });
    });
  };
  controls.forEach((control) => {
    if (control.dataset.paginationWired === 'true') return;
    control.dataset.paginationWired = 'true';
    control.querySelector<HTMLSelectElement>('[data-all-skill-page-size-select]')?.addEventListener('change', (event) => {
      root.dataset.allSkillPageSize = (event.currentTarget as HTMLSelectElement).value;
      root.dataset.allSkillPage = '1';
      render();
    });
    control.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const action = target.closest<HTMLElement>('[data-all-skill-page-action]')?.dataset.allSkillPageAction;
      const number = Number(target.closest<HTMLElement>('[data-all-skill-page-number]')?.dataset.allSkillPageNumber || 0);
      const pageSize = Math.max(1, Number(root.dataset.allSkillPageSize || 5));
      const pages = Math.max(1, Math.ceil(root.querySelectorAll('[data-skill-page-item]').length / pageSize));
      const current = Number(root.dataset.allSkillPage || 1);
      if (number) root.dataset.allSkillPage = String(number);
      else if (action === 'next') root.dataset.allSkillPage = String(Math.min(pages, current + 1));
      else if (action === 'previous') root.dataset.allSkillPage = String(Math.max(1, current - 1));
      else if (action === 'first') root.dataset.allSkillPage = '1';
      else if (action === 'last') root.dataset.allSkillPage = String(pages);
      else return;
      render();
    });
  });
  root.addEventListener('skill-scope-changed', render);
  render();
}

function showSkillScopeTab(scope: string, origin?: Element) {
  const container = origin?.closest<HTMLElement>('.skill-matrix') ?? qs<HTMLElement>('.skill-matrix');
  const root = container?.querySelector<HTMLElement>('.skill-scope-panels');
  if (!root) return;
  const valid = ['foundation', 'career-specific', 'future-ready', 'other', 'all'];
  const selected = valid.includes(scope) ? scope : 'foundation';
  root.dataset.activeSkillScope = selected;
  const list = container?.closest<HTMLElement>('#record-skill-list, #student-skill-list');
  const studentId = ctx?.profile.role === 'student' ? ctx.profile.id : activeStudentId();
  if (list?.id && studentId) {
    try { window.sessionStorage.setItem(`fcs-skill-scope-${list.id === 'student-skill-list' ? 'student' : 'record'}-${studentId}`, selected); }
    catch { /* storage may be unavailable */ }
  }
  root.classList.toggle('is-all-view', selected === 'all');
  Array.from(container?.querySelectorAll<HTMLButtonElement>('[data-skill-scope-tab]') ?? []).forEach((button) => {
    const active = button.dataset.skillScopeTab === selected;
    button.setAttribute('aria-selected', String(active));
    button.classList.toggle('is-active', active);
  });
  Array.from(container?.querySelectorAll<HTMLElement>('[data-skill-scope-panel]') ?? []).forEach((panel) => {
    const panelScope = panel.dataset.skillScopePanel || '';
    const visible = selected === 'all' || (selected === 'other' ? !['foundation', 'career-specific', 'future-ready'].includes(panelScope) : panelScope === selected);
    // A filter change starts each group at its first page. Otherwise switching
    // from a later Career-specific page to All could make the total look short
    // by retaining only that group's final page.
    const firstPage = panel.querySelector<HTMLElement>('[data-skill-page-number="1"]');
    if (firstPage) firstPage.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    panel.querySelectorAll<HTMLElement>('[data-skill-pagination]').forEach((nav) => { nav.hidden = selected === 'all'; });
    // Tabs are the source of truth at every viewport. The All tab is the
    // deliberate way to compare groups; otherwise users should never see a
    // second panel while believing a tab click did nothing.
    panel.hidden = !visible;
    panel.setAttribute('aria-hidden', String(panel.hidden));
  });
  root.querySelectorAll<HTMLElement>('[data-all-skill-pagination]').forEach((pagination) => { pagination.hidden = selected !== 'all'; });
  root.dispatchEvent(new CustomEvent('skill-scope-changed'));
}

function learnerFacingCareerFamily(category: string) {
  return category === 'Technology & Data' ? 'Technology & software' : category;
}

function selectedCareerInterests() {
  return qsa<HTMLElement>('[data-career-interest][aria-pressed="true"]').map((input) => input.dataset.careerInterest ?? '').filter(Boolean);
}

function sortCareerGuides(guides: ReturnType<typeof careerLibraryMatches>, sort: string) {
  const copy = guides.slice();
  if (sort === 'alphabetical') return copy.sort((a, b) => a.title.localeCompare(b.title));
  if (sort === 'quick-test') return copy.sort((a, b) => (a.starterTests?.[0]?.length ?? 999) - (b.starterTests?.[0]?.length ?? 999) || a.title.localeCompare(b.title));
  if (sort === 'future-ready') return copy.sort((a, b) => (b.futureSkills?.length ?? 0) - (a.futureSkills?.length ?? 0) || a.title.localeCompare(b.title));
  if (sort === 'independent') return copy.sort((a, b) => Number(/consulting|freelance|practice|business/i.test(b.independencePath)) - Number(/consulting|freelance|practice|business/i.test(a.independencePath)) || a.title.localeCompare(b.title));
  // Recommended starting points favour durable, growing work with a clear
  // entry route and a practical first test. This keeps the catalogue broad
  // while avoiding an arbitrary source-file order.
  return copy.map((guide, index) => ({ guide, index, score: (guide.outlook === 'growing' ? 4 : guide.outlook === 'evolving' ? 3 : guide.outlook === 'stable' ? 1 : 0) + Math.min(3, guide.futureSkills?.length ?? 0) + (guide.marketEvidence?.url ? 1 : 0) + (guide.starterTests?.length ? 1 : 0) }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .map(({ guide }) => guide);
}

function careerLibraryPageSize() {
  const phoneDefault = typeof window !== 'undefined' && window.matchMedia('(max-width: 760px)').matches ? 12 : 24;
  if (typeof window === 'undefined') return phoneDefault;
  let saved = 0;
  try { saved = Number(window.localStorage.getItem(CAREER_PAGE_SIZE_KEY)); } catch { /* storage may be unavailable */ }
  const allowed = careerPageSizeOptions();
  return allowed.includes(saved) ? saved : phoneDefault;
}

function careerPageSizeOptions() {
  return typeof window !== 'undefined' && window.matchMedia('(max-width: 760px)').matches ? [12, 24] : [12, 24, 48, 96];
}

function careerStageMatchesGuide(guide: ReturnType<typeof careerGuideFor>, stage: string) {
  if (!guide || stage === 'all') return true;
  if (guide.suitableStages?.includes(stage)) return true;
  const category = guide.category;
  if (stage === 'after-12th-maths' || stage === 'after-12th-pcm') return ['Technology & Data', 'Engineering & Built Environment', 'Commerce, Finance & Economics', 'Science, Research & Environment', 'Business, Marketing & Operations'].includes(category);
  if (stage === 'after-12th-biology' || stage === 'after-12th-pcb') return ['Health & Life Sciences', 'Science, Research & Environment', 'Agriculture, Food & Rural Careers', 'Education, Psychology & Social Impact'].includes(category);
  if (stage === 'after-12th-pcmb') return ['Technology & Data', 'Engineering & Built Environment', 'Health & Life Sciences', 'Science, Research & Environment', 'Agriculture, Food & Rural Careers'].includes(category);
  if (stage === 'after-12th-science') return ['Technology & Data', 'Engineering & Built Environment', 'Health & Life Sciences', 'Science, Research & Environment', 'Agriculture, Food & Rural Careers', 'Business, Marketing & Operations', 'Design, Media & Creative Arts', 'Education, Psychology & Social Impact'].includes(category);
  return false;
}

function preparePresetControls() {
  if (!ctx) return;
  const visibleCareerFamilies = Array.from(new Map(guidedCareerCategories.map((category) => [learnerFacingCareerFamily(category), category])).entries());
  // The career page already ships its canonical family options in the HTML.
  // Only populate this select for legacy markup that contains the three
  // starter options; otherwise appending the catalogue families creates a
  // confusing second copy of every area of work.
  const careerFamilySelect = qs<HTMLSelectElement>('#career-preset-category');
  if (careerFamilySelect && careerFamilySelect.options.length <= 3) {
    addPresetOptions(careerFamilySelect, visibleCareerFamilies.map(([label, value]) => `<option value="${ctx!.escapeHtml(value)}">${ctx!.escapeHtml(label)}</option>`).join(''));
  }
  addPresetOptions(qs<HTMLSelectElement>('#skill-preset-category'), skillCategories.map((category) => `<option value="${ctx!.escapeHtml(category)}">${ctx!.escapeHtml(ctx!.formatStatus(category))}</option>`).join(''));
  addPresetOptions(qs<HTMLSelectElement>('#case-goal-preset'), caseGoalPresets.map((preset) => `<option value="${preset.key}">${ctx!.escapeHtml(preset.label)}</option>`).join(''));
  addPresetOptions(qs<HTMLSelectElement>('#progress-update-preset'), progressUpdatePresets.map((preset) => `<option value="${preset.key}">${ctx!.escapeHtml(preset.label)}</option>`).join(''));
  addPresetOptions(qs<HTMLSelectElement>('#evidence-preset'), evidenceTemplatePresets.map((preset) => `<option value="${preset.key}">${ctx!.escapeHtml(preset.label)}</option>`).join(''));
  addPresetOptions(qs<HTMLSelectElement>('#note-template-preset'), noteTemplatePresets.map((preset) => `<option value="${preset.key}">${ctx!.escapeHtml(preset.label)}</option>`).join(''));
  prepareActionSkillOptions();
  addPresetOptions(qs<HTMLSelectElement>('#academic-stream-preset'), academicStreamPresets.map((stream) => `<option value="${ctx!.escapeHtml(stream)}">${ctx!.escapeHtml(stream)}</option>`).join(''));
  qsa<HTMLSelectElement>('[data-action-preset]').forEach((select) => {
    if (select.dataset.prepared === 'true') return;
    const groups = ['explore', 'learn', 'build', 'connect', 'apply', 'decide'];
    const milestoneFor = (category: string) => ({
      explore: 'Decide',
      decide: 'Decide',
      learn: 'Start',
      build: 'Build',
      apply: 'Publish or apply',
      connect: 'Connect',
    } as Record<string, string>)[category] ?? 'Next step';
    select.insertAdjacentHTML('beforeend', groups.map((group) => `<optgroup label="${ctx!.escapeHtml(ctx!.formatStatus(group))}">${actionPresets.filter((preset) => preset.category === group).map((preset) => `<option value="${preset.key}">${ctx!.escapeHtml(preset.title)} · ${ctx!.escapeHtml(preset.milestone || milestoneFor(group))} · about ${preset.estimatedMinutes ?? 60} minutes (${preset.dueDays} days)</option>`).join('')}</optgroup>`).join(''));
    select.dataset.prepared = 'true';
  });
}

function renderCareerPresetResults() {
  if (!ctx) return;
  const container = qs<HTMLElement>('#career-preset-results');
  const count = qs<HTMLElement>('#career-preset-count');
  const query = qs<HTMLInputElement>('#career-preset-search')?.value ?? '';
  const category = qs<HTMLSelectElement>('#career-preset-category')?.value ?? 'featured';
  const careerGroup = qs<HTMLSelectElement>('#career-preset-group')?.value ?? 'all';
  const stage = qs<HTMLSelectElement>('#career-study-stage')?.value ?? 'all';
  const sort = qs<HTMLSelectElement>('#career-preset-sort')?.value ?? 'recommended';
  const selectedInterests = selectedCareerInterests();
  const interest = selectedInterests.length ? selectedInterests.join(',') : 'all';
  if (!container) return;
  // Apply stage matching here rather than inside the catalogue helper so a
  // newly added stage such as broad science does not hide every route whose
  // older record lacks an explicit suitableStages tag.
  const catalogueMatches = careerLibraryMatches(query, category, interest, 'all').filter((guide) => careerGroup === 'all' || guide.careerGroup === careerGroup);
  const stageMatches = catalogueMatches.filter((guide) => careerStageMatchesGuide(guide, stage));
  // A broad or newly added catalogue may not carry a stage tag yet. Never
  // show an empty career page because of that metadata gap: retain the
  // learner's search and interest filters, then widen only the stage filter.
  const matches = sortCareerGuides(stageMatches.length || !catalogueMatches.length || stage === 'all'
    ? stageMatches
    : careerLibraryMatches(query, category, interest, 'all'), sort);
  // Keep the guide tied to an actual student action. If a search or filter
  // removes the previously selected route, select the first visible match;
  // on a fresh unfiltered page, show the orientation copy instead of implying
  // that the first catalogue entry is a recommendation.
  // “Good places to start” is the neutral default, not a learner choice.
  // Do not auto-select a career until the learner searches, chooses an
  // interest, changes the area, or selects a study stage.
  const hasDecisionSignal = Boolean(query.trim()) || interest !== 'all' || careerGroup !== 'all' || !['all', 'featured'].includes(category) || !['all', 'after-12th-science'].includes(stage);
  if (matches.length && !selectedCareerGuideKey && hasDecisionSignal) {
    // Do not silently choose a career on a fresh page. Once the learner has
    // searched or filtered, show the first matching guide as a helpful
    // starting point; otherwise keep the guide panel instructional.
    selectedCareerGuideKey = matches[0].key;
  } else if (matches.length && !matches.some((match) => match.key === selectedCareerGuideKey) && hasDecisionSignal) {
    selectedCareerGuideKey = matches[0].key;
  }
  // The library is complete and remains searchable. Pagination only controls
  // how many cards are rendered at once; it does not remove any route.
  const pageSize = careerLibraryPageSize();
  const totalPages = Math.max(1, Math.ceil(matches.length / pageSize));
  careerLibraryPage = Math.min(Math.max(careerLibraryPage, 1), totalPages);
  if (typeof window !== 'undefined' && window.history?.replaceState) {
    const url = new URL(window.location.href);
    if (careerLibraryPage > 1) url.searchParams.set('careerPage', String(careerLibraryPage));
    else url.searchParams.delete('careerPage');
    window.history.replaceState(window.history.state, '', url);
  }
  const offset = (careerLibraryPage - 1) * pageSize;
  const pageMatches = matches.slice(offset, offset + pageSize);
  // Keep the catalogue compact while showing enough nearby pages to orient
  // people who are browsing a large set of routes.
  // Keep enough nearby pages visible to make browsing feel predictable while
  // still avoiding a wall of hundreds of numbered controls. The first and
  // last page are always included below.
  // Show enough nearby pages to make a large catalogue easy to scan while
  // keeping the control compact. Phones get four nearby pages; wider screens
  // get six, with the first and last page always retained for orientation.
  // Keep a useful run of nearby pages available without forcing a long row of
  // hundreds of numbers. Eight nearby choices plus the final page gives real
  // orientation while keeping the control set compact on every viewport.
  const pageWindow = 7;
  const pageNumbers: Array<number | 'ellipsis'> = [];
  const firstVisible = Math.max(1, careerLibraryPage - pageWindow);
  const lastVisible = Math.min(totalPages, careerLibraryPage + pageWindow);
  if (firstVisible > 1) pageNumbers.push(1);
  if (firstVisible > 2) pageNumbers.push('ellipsis');
  for (let page = firstVisible; page <= lastVisible; page += 1) pageNumbers.push(page);
  if (lastVisible < totalPages - 1) pageNumbers.push('ellipsis');
  if (lastVisible < totalPages) pageNumbers.push(totalPages);
  const pageNumberHtml = pageNumbers.map((page, index) => page === 'ellipsis'
    ? `<span class="career-page-ellipsis" aria-hidden="true">…</span>`
    : `<button class="secondary-button career-page-number${page === careerLibraryPage ? ' is-current' : ''}" type="button" data-career-page-number="${page}" aria-label="Go to catalogue page ${page}"${page === careerLibraryPage ? ' aria-current="page"' : ''}>${page}</button>`).join('');
  const pageSizeOptions = careerPageSizeOptions();
  const pagination = totalPages > 1
    ? `<nav class="career-library-pagination" data-career-total-pages="${totalPages}" aria-label="Career catalogue pages"><span class="career-page-indicator" aria-live="polite">Showing ${offset + 1}–${Math.min(offset + pageSize, matches.length)} of ${matches.length} · page ${careerLibraryPage} of ${totalPages}</span><span class="career-page-actions"><button class="secondary-button" type="button" data-career-page="first" aria-label="First catalogue page" ${careerLibraryPage === 1 ? 'disabled' : ''}>First</button><button class="secondary-button" type="button" data-career-page="previous" aria-label="Previous catalogue page" ${careerLibraryPage === 1 ? 'disabled' : ''}>Previous</button><span class="career-page-numbers" aria-label="Choose a catalogue page">${pageNumberHtml}</span><label class="career-page-jump"><span>Go to</span><input type="number" min="1" max="${totalPages}" value="${careerLibraryPage}" inputmode="numeric" data-career-page-jump aria-label="Go to catalogue page" /><button class="secondary-button" type="button" data-career-page-go aria-label="Go to entered catalogue page">Go</button></label><label class="career-page-size"><span>Show</span><select data-career-page-size aria-label="Careers per page">${pageSizeOptions.map((size) => `<option value="${size}"${size === pageSize ? ' selected' : ''}>${size}</option>`).join('')}</select><span>per page</span></label><button class="secondary-button" type="button" data-career-page="next" aria-label="Next catalogue page" ${careerLibraryPage === totalPages ? 'disabled' : ''}>Next</button><button class="secondary-button" type="button" data-career-page="last" aria-label="Last catalogue page" ${careerLibraryPage === totalPages ? 'disabled' : ''}>Last</button></span></nav>`
    : '';
  const resultContent = matches.length
    ? careerLibraryResultsHtml(pageMatches, selectedCareerGuideKey, ctx.escapeHtml, pageSize, 0)
    : `<div class="empty-state career-library-empty" role="status"><strong>No career guides match these choices.</strong><span>Try a broader search or remove one of the filters. Your saved career options are unchanged.</span><button class="secondary-button" type="button" data-career-clear-filters>Clear filters</button></div>`;
  container.innerHTML = pagination + resultContent;
  qsa<HTMLInputElement>('[data-compare-career]').forEach((input) => { input.checked = comparedCareerGuideKeys.includes(input.dataset.compareCareer || ''); });
  if (count) count.textContent = `${matches.length} useful match${matches.length === 1 ? '' : 'es'}${totalPages > 1 ? ` · page ${careerLibraryPage} of ${totalPages}` : ''}`;
  const interestGuidance = qs<HTMLElement>('#career-interest-guidance');
  if (interestGuidance) {
    interestGuidance.textContent = selectedInterests.length
      ? `${matches.length} guide${matches.length === 1 ? '' : 's'} match your interests${stage !== 'all' ? ' and study stage' : ''}. The closest matches appear first; read the practical work and use a small test to check the fit.`
      : stage !== 'all'
        ? `${matches.length} guide${matches.length === 1 ? '' : 's'} suit this study stage. Choose one or two interests to make the shortlist more personal.`
        : 'Choose one or two interests or a study stage to narrow the catalogue. These are starting signals, not test results.';
  }
  const preview = qs<HTMLElement>('#career-guide-preview');
  const selectedGuide = selectedCareerGuideKey ? careerGuideFor(selectedCareerGuideKey) : null;
  if (preview) {
    preview.innerHTML = selectedGuide ? careerGuidePreviewHtml(selectedGuide, ctx.escapeHtml) : emptyCareerPreview();
    if (selectedGuide) wireCareerGuideActions(preview);
  }
  renderCareerComparePanel();
}

function applyCareerPageJump(input: HTMLInputElement | null) {
  if (!input) return;
  const max = Number(input.max || 1);
  const selectedPage = Math.min(Math.max(Number(input.value) || 1, 1), max);
  careerLibraryPage = selectedPage;
  renderCareerPresetResults();
  window.setTimeout(() => qs<HTMLInputElement>('[data-career-page-jump]')?.focus(), 0);
}

function renderCareerComparePanel() {
  if (!ctx) return;
  const panel = qs<HTMLElement>('#career-compare-panel');
  if (!panel) return;
  const guides = comparedCareerGuideKeys.map((key) => careerGuideFor(key)).filter((guide): guide is NonNullable<ReturnType<typeof careerGuideFor>> => Boolean(guide));
  if (guides.length < 2) { panel.hidden = true; panel.innerHTML = ''; return; }
  panel.hidden = false;
  panel.innerHTML = `<div class="career-compare-heading"><div><p class="eyebrow">Compare before choosing</p><h3 id="career-compare-heading">A short list of ${guides.length} career options</h3><p>Compare the ordinary work, entry route, local work context, and first test side by side. Keep the option that still looks useful after a small practical check.</p></div><button class="text-button" type="button" data-clear-career-compare>Clear comparison</button></div><div class="career-compare-grid">${guides.map((guide) => `<article><header><span><small>${ctx!.escapeHtml(learnerFacingCareerFamily(guide.category))}</small><h4>${ctx!.escapeHtml(guide.title)}</h4></span><button class="icon-button" type="button" data-remove-career-compare="${ctx!.escapeHtml(guide.key)}" aria-label="Remove ${ctx!.escapeHtml(guide.title)} from comparison">×</button></header><section><small>Interests this may suit</small><p>${ctx!.escapeHtml(interestSignalsFor(guide).slice(0, 2).join(' · '))}</p></section><section><small>Local work context</small><p>${ctx!.escapeHtml(guide.localContext)}</p></section><section><small>Competition</small><p>${ctx!.escapeHtml(guide.competitionNote)}</p></section><section><small>Independent path</small><p>${ctx!.escapeHtml(guide.independencePath)}</p></section><section><small>Practical work</small><p>${ctx!.escapeHtml(guide.dailyWork[0] || 'Read the practical work in the guide above.')}</p></section><section><small>First test</small><p>${ctx!.escapeHtml(guide.starterTests[0] || 'Choose a small task that creates evidence.')}</p></section><button class="secondary-button" type="button" data-career-preset="${ctx!.escapeHtml(guide.key)}">Read this guide</button></article>`).join('')}</div>`;
}

function toggleCareerCompare(key: string, checked: boolean) {
  qs<HTMLFormElement>('#career-option-form')?.setAttribute('data-dirty', 'true');
  if (checked) {
    if (!comparedCareerGuideKeys.includes(key)) {
      if (comparedCareerGuideKeys.length >= 3) {
        ctx?.setWorkspaceStatus('Compare up to three career options at a time. Remove one from the comparison before adding another.', true);
        renderCareerPresetResults();
        return;
      }
      comparedCareerGuideKeys = [...comparedCareerGuideKeys, key];
    }
  } else comparedCareerGuideKeys = comparedCareerGuideKeys.filter((value) => value !== key);
  renderCareerPresetResults();
}

function selectCareerGuide(key: string) {
  if (!ctx) return;
  const guide = careerGuideFor(key);
  const preview = qs<HTMLElement>('#career-guide-preview');
  if (!guide || !preview) return;
  selectedCareerGuideKey = key;
  renderCareerPresetResults();
  preview.innerHTML = careerGuidePreviewHtml(guide, ctx.escapeHtml);
  wireCareerGuideActions(preview);
  // The full guide is rendered in the preview pane, which can be below the
  // catalogue on narrow screens and beside it on desktop. Always bring that
  // pane into view after a card/action click so “View details and choose”
  // has a clear, predictable destination at every viewport width.
  window.setTimeout(() => {
    preview.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    preview.classList.add('is-recently-selected');
    window.setTimeout(() => preview.classList.remove('is-recently-selected'), 900);
  }, 0);
}

function wireCareerGuideActions(preview: HTMLElement) {
  Array.from(preview.querySelectorAll<HTMLButtonElement>('[data-choose-career]')).forEach((button) => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      chooseAndSaveCareerPreset(button.dataset.guideKey || '', (button.dataset.chooseCareer || 'primary') as 'primary' | 'alternative');
    });
  });
}

function renderSkillPresetResults() {
  if (!ctx) return;
  const container = qs<HTMLElement>('#skill-preset-results');
  const count = qs<HTMLElement>('#skill-preset-count');
  const query = qs<HTMLInputElement>('#skill-preset-search')?.value.trim().toLowerCase() ?? '';
  const category = qs<HTMLSelectElement>('#skill-preset-category')?.value ?? 'featured';
  if (!container) return;
  const matches = skillPresets.filter((preset) => {
    if (query && !`${preset.title} ${preset.category} ${preset.developmentGoal}`.toLowerCase().includes(query)) return false;
    if (category === 'featured') return query ? true : recommendedSkillKeys.has(preset.key);
    return category === 'all' || preset.category === category;
  });
  // Keep the complete skill catalog discoverable. Featured filters are only a
  // starting point; searches and category views must not hide valid skills.
  const limit = matches.length;
  container.innerHTML = matches.slice(0, limit).map((preset) => `<button type="button" data-skill-preset="${preset.key}"><strong>${ctx!.escapeHtml(preset.title)}</strong><small>${ctx!.escapeHtml(ctx!.formatStatus(preset.category))}</small><p>${ctx!.escapeHtml(preset.developmentGoal)}</p></button>`).join('') || '<div class="preset-empty">No matching skill. Enter a specific skill below.</div>';
  if (count) count.textContent = `${matches.length} match${matches.length === 1 ? '' : 'es'}${matches.length > limit ? ` / showing ${limit}` : ''}`;
}

function applyCareerPreset(key: string, choice: 'primary' | 'alternative' = 'primary') {
  const guide = careerGuideFor(key);
  const form = qs<HTMLFormElement>('#career-option-form');
  if (!guide || !form) return;
  const decisionSignal = choice === 'primary' ? 'ready-to-pursue' : 'deliberate-alternative';
  const optionType = choice === 'primary' ? 'primary' : 'alternative';
  setFormValues(form, {
    preset_key: guide.key,
    title: guide.title,
    career_category: guide.category,
    route_summary: guide.entryRoutes.join('\n'),
    entry_requirements: guide.entryRequirements,
    work_environment: guide.workStyles.join(' / '),
    next_step: guide.starterTests[0],
    tradeoffs: guide.watchOuts,
    decision_signal: decisionSignal,
    evidence_strength: 'none',
    future_outlook: guide.outlook,
    review_question: `What practical evidence would confirm or challenge ${guide.title} as the right career option?`,
    status: decisionSignalOptions.find((option) => option.value === decisionSignal)?.status || 'exploring',
  });
  form.querySelectorAll<HTMLInputElement>('input[name="option_type"]').forEach((input) => { input.checked = input.value === optionType; });
  updateCareerFocusControl();
}

function chooseAndSaveCareerPreset(key: string, choice: 'primary' | 'alternative' = 'primary') {
  // Catalogue choices already contain the title, route, work pattern,
  // outlook, watch-outs, and a useful first test. Saving directly here
  // removes the confusing second trip to the manual form. The separate
  // “Add your own career option” flow still collects a typed name and is
  // submitted through the footer after the learner reviews it.
  applyCareerPreset(key, choice);
  const form = qs<HTMLFormElement>('#career-option-form');
  if (!form || !textValue(new FormData(form).get('title'))) return;
  setModalStatus('#career-option-status', `Saving ${choice === 'alternative' ? 'secondary' : 'primary'} career option…`);
  form.requestSubmit();
}

function inferSkillScope(key: string, category: string) {
  if (recommendedSkillKeys.has(key)) return 'foundation';
  if (category === 'employability') return 'employability';
  if (/ai|automation|privacy|cybersecurity-awareness/.test(key)) return 'future-ready';
  return 'career-specific';
}

function applySkillPreset(key: string) {
  const preset = skillPresets.find((item) => item.key === key);
  const form = qs<HTMLFormElement>('#skill-form');
  if (!preset || !form) return;
  const scope = inferSkillScope(key, preset.category);
  const plan = skillPlanItem(key, scope);
  const primary = rowsFor(coaching.careers, 'user_id').find((row) => row.option_type === 'primary');
  const review = new Date();
  review.setDate(review.getDate() + 30);
  setFormValues(form, {
    preset_key: preset.key,
    skill_name: preset.title,
    category: preset.category,
    target_level: preset.targetLevel,
    priority: preset.priority,
    development_goal: preset.developmentGoal,
    skill_scope: scope,
    linked_career_path_id: scope === 'career-specific' ? primary?.id || '' : '',
    practice_method: plan?.practiceMethod || '',
    success_criteria: plan?.successCriteria || '',
    review_date: review.toISOString().slice(0, 10),
  });
  qsa<HTMLElement>('[data-skill-preset]').forEach((button) => button.classList.toggle('is-selected', button.dataset.skillPreset === key));
}

function currentPrimaryCareer() {
  return rowsFor(coaching.careers, 'user_id').find((row) => row.option_type === 'primary') ?? null;
}

function currentPrimaryCategories() {
  return Array.from(new Set(rowsFor(coaching.careers, 'user_id')
    .filter((row) => row.option_type === 'primary')
    .map((row) => String(row.career_category || '').trim())
    .filter(Boolean)));
}

function hardSkillKey(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 80);
}

async function addHardSkillsForCareer(path: Row) {
  // Use the career record's owner first. Staff can arrive here from a card
  // before the selected-student state has finished restoring; relying only on
  // activeStudentId made the button appear to do nothing in that case.
  const studentId = String(path?.user_id || activeStudentId() || '').trim();
  if (!ctx || !path?.id || !studentId) return 0;
  const workspaceCtx = ctx;
  // A manual career has no reliable preset mapping. Do not borrow the first
  // guide in its family: that would attach another role's specialist skills
  // and description to the learner's own wording. Manual directions receive
  // the generic starter set below; recognised presets receive curated skills.
  const guide = path.preset_key ? careerGuideFor(path.preset_key) : null;
  const careerTitle = String(path.title || path.career_category || 'this career option').trim();
  // Preset careers get their curated specialist skills. A manually entered or
  // newly added career still gets a useful starting point instead of silently
  // leaving the hard-skills section empty.
  const specialistSkills = guide?.specialistSkills?.length
    ? guide.specialistSkills.map((name) => ({ name, scope: 'career-specific', priority: 'important', target: 2 }))
    : [
      { name: `${careerTitle} tools and methods`, scope: 'career-specific', priority: 'important', target: 2 },
      { name: `Practical experience in ${careerTitle}`, scope: 'career-specific', priority: 'important', target: 2 },
      { name: `${careerTitle} standards and workflows`, scope: 'career-specific', priority: 'important', target: 2 },
      { name: `${careerTitle}: clear communication and evidence`, scope: 'career-specific', priority: 'important', target: 2 },
      { name: `${careerTitle}: digital and AI tool judgement`, scope: 'future-ready', priority: 'useful', target: 1 },
    ];
  // Career guides also carry portable foundation skills. Keep these as
  // genuinely shared skills so they remain useful when a direction is later
  // removed and so adding a second direction does not create duplicates.
  // Foundational skills are learner-wide, not properties of a selected
  // career. Do not add a new core skill set every time a direction changes;
  // otherwise the shared count grows or shifts with the catalogue choice.
  const futureSkills = guide?.futureSkills?.slice(0, 2).map((name) => ({ name, scope: 'future-ready', priority: 'useful', target: 1 })) ?? [];
  // Always leave a useful starter plan, even when a student's
  // existing core skills overlap with a guide's specialist recommendations.
  // The fallback skills are deliberately portable rather than pretending to
  // be role-specific expertise.
  const starterFallbacks = [
    { name: 'Clear communication and evidence', scope: 'foundation', priority: 'core', target: 2 },
    { name: 'Problem framing', scope: 'foundation', priority: 'core', target: 2 },
    { name: 'Quality checking', scope: 'foundation', priority: 'important', target: 2 },
    { name: `${careerTitle}: digital and AI tool judgement`, scope: 'future-ready', priority: 'useful', target: 1 },
  ];
  // Keep the first recommendation set small enough to use, while making sure
  // every direction gets more than narrow job-specific skills. A student
  // should see a balanced starter plan with specialist ability, portable
  // foundation skills, and future-ready judgement. More skills remain
  // available in the library and every item remains removable.
  const take = <T>(items: T[], count: number) => items.slice(0, count);
  const foundationRecommendations = skillPresets
    .filter((preset) => recommendedSkillKeys.has(preset.key))
    .map((preset) => ({ name: preset.title, scope: 'foundation', priority: preset.priority, target: preset.targetLevel }));
  const skillsToAdd = [
    ...take(specialistSkills, 4),
    // Ensure the learner-wide foundation set is complete. Existing names are
    // filtered by the idempotency check below, so a second career never adds
    // another copy or changes an existing skill.
    ...foundationRecommendations,
    ...starterFallbacks.filter((item) => item.scope === 'foundation'),
    ...take(futureSkills, 1),
    ...take(starterFallbacks.filter((item) => item.scope === 'future-ready'), 1),
  ];
  // The database keeps one skill name per student.  Keep this operation
  // idempotent: a shared foundation skill must not be inserted again when a
  // second career direction is added or when the student signs in again.
  const activeCareerIds = new Set(coaching.careers
    .filter((career) => career.user_id === studentId && !['ruled-out', 'paused'].includes(String(career.status || '').toLowerCase()))
    .map((career) => String(career.id)));
  const existing = new Set(rowsFor(coaching.skills, 'student_id')
    .filter((skill) => !['archived', 'removed'].includes(String(skill.status || '').toLowerCase())
      // Shared foundation names remain global even if an older record was
      // created with a stale career link. This prevents a second copy being
      // inserted when another direction is added later.
      && (!skill.linked_career_path_id
        || activeCareerIds.has(String(skill.linked_career_path_id))
        || skillScopeFor(skill) === 'foundation'))
    .map((skill) => String(skill.skill_name).trim().toLowerCase()));
  const pending = new Set<string>();
  const review = new Date();
  review.setDate(review.getDate() + 30);
  const preparedSkills = skillsToAdd
    .map((item) => ({ ...item, name: String(item.name).trim() }))
    .filter((item) => {
      const key = item.name.toLowerCase();
      if (item.name.length < 2 || existing.has(key) || pending.has(key)) return false;
      pending.add(key);
      return true;
    });
  // A new direction must always start with a useful, visible plan. If the
  // student's existing skills overlap every curated recommendation, add
  // clearly labelled direction-specific practice prompts rather than leaving
  // the new career with only a partial mapping.
  const usefulFallbacks = ['Research and source checking', 'Clear written communication', 'Planning and prioritisation', 'Quality checking', 'Reflective learning'];
  let fallbackAttempts = 0;
  while (preparedSkills.length < Math.min(8, skillsToAdd.length + usefulFallbacks.length) && fallbackAttempts < usefulFallbacks.length * 3) {
    const index = fallbackAttempts++;
    const name = `${careerTitle}: ${usefulFallbacks[index % usefulFallbacks.length]}`;
    const key = name.toLowerCase();
    if (!existing.has(key) && !pending.has(key)) {
      pending.add(key);
      preparedSkills.push({ name, scope: 'career-specific', priority: 'important', target: 2 });
    }
  }
  const rows = preparedSkills
    .map((item) => ({
      student_id: studentId,
      preset_key: `${hardSkillKey(path.preset_key || careerTitle)}--${item.scope}--${hardSkillKey(item.name)}`.slice(0, 120),
      skill_name: item.name,
      // `skill_scope` carries the roadmap grouping. `category` is an older
      // constrained field in Supabase, so future-ready skills use the valid
      // digital category while remaining visibly grouped as future-ready.
      category: item.scope === 'future-ready' ? 'digital' : item.scope === 'foundation' ? 'employability' : 'domain',
      skill_scope: item.scope,
      // Portable foundation skills belong to the learner, while specialist
      // and future-ready skills belong to the direction that suggested them.
      linked_career_path_id: item.scope === 'foundation' ? null : path.id,
      current_level: 0,
      target_level: item.target,
      priority: item.priority,
      status: 'identified',
      development_goal: `Build a practical working foundation in ${item.name} for ${careerTitle}.`,
      practice_method: `Complete one small ${item.name} task related to ${careerTitle}, then review the result with your coach.`,
      success_criteria: `A dated work sample or explanation showing how you used ${item.name} in a realistic task.`,
      review_date: review.toISOString().slice(0, 10),
      created_by: workspaceCtx.user.id,
      updated_by: workspaceCtx.user.id,
    }));
  if (!rows.length) return 0;
  const response = await workspaceCtx.client.from('student_skills').insert(rows).select('*');
  if (response.error) {
    // Another tab/session may have inserted the same recommendation between
    // the read and insert.  Treat the unique conflict as an already-complete
    // operation, then re-read the student's skills.  Other errors still need
    // to surface to the user.
    const conflict = response.error.code === '23505' || response.status === 409 || /duplicate|unique/i.test(response.error.message || '');
    if (!conflict) throw response.error;
    const refreshed = await workspaceCtx.client.from('student_skills').select('*').eq('student_id', studentId);
    if (refreshed.error) throw refreshed.error;
    coaching.skills = Array.isArray(refreshed.data) ? refreshed.data : coaching.skills;
    return 0;
  }
  // Insert-select normally returns every row. Re-read the career-linked set as
  // a defensive fallback for projects whose REST/RLS configuration returns a
  // partial insert response; the plan must never look complete while its
  // linked skills are missing from the in-memory workspace.
  const returned = Array.isArray(response.data) ? response.data : [];
  const linked = await workspaceCtx.client
    .from('student_skills')
    .select('*')
    .eq('student_id', studentId)
    .eq('linked_career_path_id', path.id);
  // Some deployments enforce additional legacy constraints on a bulk insert
  // and may accept only part of the payload. Top up the direction-specific
  // plan with individual rows so it still has five usable starting skills.
  const linkedRows = !linked.error && Array.isArray(linked.data)
    ? linked.data.filter((skill) => String(skill.linked_career_path_id || '') === String(path.id))
    : [];
  let finalLinkedRows = linkedRows;
  if (!linked.error && Array.isArray(linked.data) && linkedRows.length < 8) {
    const existingLinked = new Set(linkedRows.map((skill) => String(skill.skill_name || '').toLowerCase()));
    const topUp: Row[] = [];
    const fallbackNames = ['Research and source checking', 'Clear written communication', 'Planning and prioritisation', 'Quality checking', 'Reflective learning'];
    for (let offset = 0; offset < fallbackNames.length && topUp.length < 8 - linkedRows.length; offset += 1) {
      const fallback = fallbackNames[(linkedRows.length + offset) % fallbackNames.length];
      const name = `${careerTitle}: ${fallback}`;
      const nameKey = name.toLowerCase();
      if (existingLinked.has(nameKey)) continue;
      existingLinked.add(nameKey);
      topUp.push({
        student_id: studentId,
        preset_key: `${hardSkillKey(path.preset_key || careerTitle)}--career-specific--${hardSkillKey(name)}`.slice(0, 120),
        skill_name: name,
        category: 'domain',
        skill_scope: 'career-specific',
        linked_career_path_id: path.id,
        current_level: 0,
        target_level: 2,
        priority: 'important',
        status: 'identified',
        development_goal: `Build a practical working foundation in ${name} for ${careerTitle}.`,
        practice_method: `Complete one small ${name} task related to ${careerTitle}, then review the result with your coach.`,
        success_criteria: `A dated work sample showing how you used ${name} in a realistic task.`,
        review_date: review.toISOString().slice(0, 10),
        created_by: workspaceCtx.user.id,
        updated_by: workspaceCtx.user.id,
      });
    }
    if (topUp.length) {
      const topUpResponse = await workspaceCtx.client.from('student_skills').insert(topUp).select('*');
      if (!topUpResponse.error && Array.isArray(topUpResponse.data)) finalLinkedRows = [...linkedRows, ...topUpResponse.data];
    }
  }
  const refreshed = finalLinkedRows.length ? finalLinkedRows : returned;
  const byId = new Map(coaching.skills.map((skill) => [String(skill.id), skill]));
  refreshed.forEach((skill) => byId.set(String(skill.id), skill));
  coaching.skills = Array.from(byId.values());
  return rows.length;
}

async function ensureHardSkillsForStudent(studentId: string) {
  if (!ctx || !studentId) return;
  const careers = coaching.careers.filter((career) => career.user_id === studentId && career.option_type && !['ruled-out', 'paused'].includes(String(career.status)));
  for (const career of careers) await addHardSkillsForCareer(career);
}

async function ensureFoundationSkillsForStudent(studentId: string) {
  if (!ctx || !studentId) return;
  const current = uniqueSkillRowsForStudent(studentId);
  // Seed the learner-wide starter set only for a genuinely empty foundation
  // layer. Do not recreate a Core skill that a learner or coach intentionally
  // removed; the skill library remains available for adding it again later.
  if (current.some((skill) => skillScopeFor(skill) === 'foundation')) return;
  const existing = new Set(current.map((skill) => String(skill.skill_name || '').trim().toLowerCase()));
  const missing = skillPresets
    .filter((preset) => recommendedSkillKeys.has(preset.key) && !existing.has(preset.title.toLowerCase()))
    .map((preset) => ({
      student_id: studentId,
      preset_key: preset.key,
      skill_name: preset.title,
      category: preset.category,
      skill_scope: 'foundation',
      linked_career_path_id: null,
      current_level: 0,
      target_level: preset.targetLevel,
      priority: preset.priority,
      status: 'identified',
      development_goal: preset.developmentGoal,
      practice_method: preset.starterTask,
      success_criteria: preset.evidenceHint,
      review_date: null,
      created_by: ctx!.user.id,
      updated_by: ctx!.user.id,
    }));
  if (!missing.length) return;
  const response = await ctx.client.from('student_skills').insert(missing).select('*');
  if (response.error) throw response.error;
  if (Array.isArray(response.data)) coaching.skills = [...coaching.skills, ...response.data];
}

function existingSkillNames() {
  const studentId = activeStudentId();
  const skills = studentId ? activeSkillsForStudent(studentId) : [];
  return new Set(skills.map((skill) => String(skill.skill_name).trim().toLowerCase()));
}

function renderSkillPackResults() {
  if (!ctx) return;
  const container = qs<HTMLElement>('#skill-pack-results');
  if (!container) return;
  const query = qs<HTMLInputElement>('#skill-pack-search')?.value ?? '';
  const group = qs<HTMLSelectElement>('#skill-pack-group')?.value ?? 'recommended';
  const matches = skillPackMatches(query, group, currentPrimaryCategories());
  container.innerHTML = skillPackResultsHtml(matches, selectedSkillPackKey, ctx.escapeHtml);
  const pack = getSkillPack(selectedSkillPackKey);
  const careerField = qs<HTMLElement>('#skill-pack-career-field');
  const careerSelect = qs<HTMLSelectElement>('#skill-pack-career');
  if (careerField && careerSelect) {
    careerField.hidden = pack?.scope !== 'career-specific';
    if (pack?.scope === 'career-specific' && !careerSelect.value) careerSelect.value = currentPrimaryCareer()?.id ?? '';
  }
}

function selectSkillPack(key: string) {
  if (!ctx) return;
  const pack = getSkillPack(key);
  const preview = qs<HTMLElement>('#skill-pack-preview');
  const submit = qs<HTMLButtonElement>('#add-skill-pack');
  if (!pack || !preview) return;
  selectedSkillPackKey = key;
  renderSkillPackResults();
  preview.innerHTML = skillPackPreviewHtml(pack, existingSkillNames(), ctx.escapeHtml);
  const available = skillPackItems(pack).some((item) => !existingSkillNames().has(item.title.toLowerCase()));
  if (submit) submit.disabled = !available;
}

function applyActionPreset(select: HTMLSelectElement) {
  const preset = actionPresets.find((item) => item.key === select.value);
  const form = select.closest<HTMLFormElement>('form');
  if (!preset || !form) return;
  const due = new Date();
  due.setDate(due.getDate() + preset.dueDays);
  setFormValues(form, { title: preset.title, category: preset.category, details: preset.details, due_date: due.toISOString().slice(0, 10) });
  updateActionTimeGuidance(form);
}

function updateActionTimeGuidance(form: HTMLFormElement) {
  const output = form.querySelector<HTMLElement>('[data-action-time-guidance]');
  if (!output) return;
  const preset = form.querySelector<HTMLSelectElement>('[data-action-preset]')?.value;
  const hoursSelect = form.querySelector<HTMLSelectElement>('[name="weekly_hours_preset"]');
  const hours = Number(hoursSelect?.value || 0);
  if (!hours) {
    output.textContent = 'Choose your weekly time below to see a realistic version of this action.';
    return;
  }
  const label = hours <= 3 ? 'limited time' : hours <= 8 ? 'a steady weekly rhythm' : 'more time for a deeper project';
  const selected = preset ? actionPresets.find((item) => item.key === preset) : null;
  const effort = selected?.estimatedMinutes ?? 0;
  const fitNote = selected && effort > hours * 60
    ? ` It is about ${effort} minutes overall, so split it across realistic weekly sessions.`
    : '';
  output.textContent = preset
    ? `This plan is sized for ${label} (${hours} hours/week). Keep the first version small and save evidence before adding more work.${fitNote}`
    : `You have selected ${hours} hours/week (${label}). Choose an action with a clear result that fits that commitment.`;
}

function applyCaseGoalPreset(select: HTMLSelectElement) {
  const preset = caseGoalPresets.find((item) => item.key === select.value);
  const form = qs<HTMLFormElement>('#student-case-form');
  if (!preset || !form) return;
  setFormValues(form, { coaching_stage: preset.stage, goal_summary: preset.value });
  select.value = '';
}

function applyProgressPreset(select: HTMLSelectElement) {
  const preset = progressUpdatePresets.find((item) => item.key === select.value);
  const form = qs<HTMLFormElement>('#student-case-form');
  if (!preset || !form) return;
  setFormValues(form, { progress_note: preset.value });
  select.value = '';
}

function applyEvidencePreset(select: HTMLSelectElement) {
  const preset = evidenceTemplatePresets.find((item) => item.key === select.value);
  const form = qs<HTMLFormElement>('#evidence-form');
  if (!preset || !form) return;
  setFormValues(form, { evidence_type: preset.evidenceType, title: preset.title, description: preset.description });
  select.value = '';
}

function applyNotePreset(select: HTMLSelectElement) {
  const preset = noteTemplatePresets.find((item) => item.key === select.value);
  const form = qs<HTMLFormElement>('#coach-note-form');
  if (!preset || !form) return;
  setFormValues(form, { note_type: preset.noteType, content: preset.value });
  select.value = '';
}

function applyAcademicStreamPreset(select: HTMLSelectElement) {
  const form = qs<HTMLFormElement>('#academic-form');
  if (!select.value || !form) return;
  setFormValues(form, { stream: select.value });
  select.value = '';
}

function updateCareerFocusControl() {
  const form = qs<HTMLFormElement>('#career-option-form');
  if (!form) return;
  const decision = form.elements.namedItem('decision_signal') as HTMLSelectElement;
  const mappedStatus = decisionSignalOptions.find((option) => option.value === decision.value)?.status || 'exploring';
  (form.elements.namedItem('status') as HTMLInputElement).value = mappedStatus;
}

function emptyCareerPreview() {
  return '<div class="career-guide-empty"><strong>Start with any career option that interests you</strong><span>Choose a career card to see the ordinary work, entry routes, skills, watch-outs, and useful first steps.</span><ol class="career-guide-start-list"><li><span class="career-step-number" aria-hidden="true">1</span><div><b>Read the ordinary work</b><span>Look beyond the job title.</span></div></li><li><span class="career-step-number" aria-hidden="true">2</span><div><b>Notice what fits you</b><span>Compare the interests, subjects, and working patterns.</span></div></li><li><span class="career-step-number" aria-hidden="true">3</span><div><b>Save what you want to explore</b><span>Choose a primary or secondary career option.</span></div></li></ol></div>';
}

function careerStageGuidance(stage: unknown) {
  const value = String(stage ?? '').toLowerCase();
  if (value.includes('10') || value.includes('school')) return 'For a school student, compare the kind of work and the subjects or routes it opens. A short observation or guided project is enough to start.';
  if (value.includes('11') || value.includes('12')) return 'For Class 11–12, compare course routes, entrance requirements, and the day-to-day work. Use a small project or practitioner conversation before committing.';
  if (value.includes('college') || value.includes('graduate')) return 'For college or early career, compare entry routes, proof of skill, and the first role you could realistically reach. Use a portfolio task or real conversation as evidence.';
  if (value.includes('professional') || value.includes('career-change') || value.includes('working')) return 'For a career change, compare transferable skills, income timing, and the smallest credible bridge into the new work. Test the bridge before making a large commitment.';
  return 'Start with what interests you. Read the practical work, then try one small task before saving a career option.';
}

function careerStageStart(stage: unknown) {
  const value = String(stage ?? '').toLowerCase();
  if (value.includes('10') || value.includes('school')) return { title: 'Start with the kind of work, not a final job title', copy: 'Compare the subjects and routes each option opens. A short observation or guided project is enough for your first check.' };
  if (value.includes('11') || value.includes('12')) return { title: 'Compare courses, entrance paths, and daily work', copy: 'Choose two or three realistic routes, then use a small project or practitioner conversation before committing.' };
  if (value.includes('college') || value.includes('graduate')) return { title: 'Test the first realistic role you could reach', copy: 'Compare entry requirements and build one small work sample that shows the skills that role expects.' };
  if (value.includes('professional') || value.includes('career-change') || value.includes('working')) return { title: 'Find the smallest credible bridge to the new work', copy: 'Compare transferable skills, income timing, and one low-risk test before making a large career move.' };
  return { title: 'Start with a small practical check', copy: 'Choose one or more career options to investigate, then learn from a small practical task before making a long commitment.' };
}

function careerStudyStageKey(stage: unknown) {
  const value = String(stage ?? '').toLowerCase();
  if (value.includes('10') || value.includes('school')) return 'after-10th';
  if (value.includes('11') || value.includes('12') || value.includes('science')) {
    if (value.includes('pcmb')) return 'after-12th-pcmb';
    if (value.includes('pcb') || value.includes('biology')) return 'after-12th-biology';
    if (value.includes('pcm') || value.includes('math')) return 'after-12th-maths';
    if (value.includes('commerce')) return 'after-12th-commerce';
    if (value.includes('humanities') || value.includes('arts')) return 'after-12th-humanities';
    return 'after-12th-science';
  }
  if (value.includes('college') || value.includes('graduate') || value.includes('undergraduate')) return 'college';
  if (value.includes('professional') || value.includes('career-change') || value.includes('working')) return 'working';
  return 'all';
}

function renderCareerDecisionCurrentPlan() {
  if (!ctx) return;
  const container = qs<HTMLElement>('#career-decision-current-plan');
  if (!container) return;
  const rows = rowsFor(coaching.careers, 'user_id', activeStudentId()).filter((row) => !['ruled-out', 'paused'].includes(row.status));
  const primary = rows.filter((row) => row.option_type === 'primary');
  const alternatives = rows.filter((row) => row.option_type !== 'primary');
  if (!rows.length) { container.hidden = true; container.innerHTML = ''; return; }
  container.hidden = false;
  const directionChip = (row: Row) => `<span class="career-plan-chip"><span><small>${row.option_type === 'primary' ? 'Primary career option' : 'Secondary career option'}</small><strong>${ctx!.escapeHtml(row.title)}</strong><em>${ctx!.escapeHtml(decisionSignalLabel(decisionSignalFor(row)))}</em></span><button type="button" class="text-button" data-edit-career="${ctx!.escapeHtml(row.id)}">Review</button></span>`;
  container.innerHTML = `<div class="career-plan-summary-head"><div><small>Saved career options</small><strong>${rows.length} career option${rows.length === 1 ? '' : 's'} in this plan</strong></div><span class="scope-note">Keep more than one option open while you gather evidence.</span></div><div class="career-plan-chip-grid">${rows.map(directionChip).join('')}</div>`;
}

function openCareerDialog(id = '') {
  // Opening the career workspace is a read and navigation action. It must
  // still work when an optional coaching table is unavailable; only saving a
  // direction needs the schema guard. Blocking the opener made the dedicated
  // career page fall back to the overview and look like a dead link.
  if (!ctx || !activeStudentId()) return;
  const openedFromDedicatedPage = window.location.pathname.endsWith('/career-decision');
  if (!openedFromDedicatedPage) {
    // Career decisions are a full page for every role. Preserve the staff
    // record they were working in so returning does not lose their place.
    if (ctx.profile.role !== 'student') {
      try {
        sessionStorage.setItem('fcs-career-return', JSON.stringify({ studentId: activeStudentId(), tab: 'careers' }));
      } catch { /* session storage may be unavailable in a restricted browser */ }
    }
    const editQuery = id ? `?edit=${encodeURIComponent(id)}` : '';
    window.location.assign(`/dashboard/career-decision${editQuery}`);
    return;
  }
  const form = qs<HTMLFormElement>('#career-option-form');
  const dialog = qs<HTMLElement>('#career-option-dialog');
  if (!form || !dialog) return;
  const isStudent = ctx.profile.role === 'student';
  setText('#career-dialog-eyebrow', isStudent ? 'Your career plan' : 'Student career plan');
  setText('#career-dialog-back', isStudent ? 'Back to my plan' : 'Back to student record');
  setModalStatus('#career-option-status', '');
  renderCareerDecisionCurrentPlan();
  const activeCase = coaching.cases.find((item) => item.student_id === activeStudentId());
  // A coaching stage says where the plan is in its process; the learner's
  // current year says which choices are realistic. Use both, so a Class 11–12
  // learner still sees course and entrance guidance while in option validation.
  const learnerProfile = ctx.profiles.find((profile) => profile.id === activeStudentId()) || ctx.profile;
  const decisionStage = [
    activeCase?.coaching_stage,
    coaching.academic?.current_class_or_year,
    coaching.academic?.stream_or_specialisation,
    learnerProfile?.stage,
  ].filter(Boolean).join(' ');
  // A learner may not have an academic record yet. Keep the chooser useful
  // in that first session by using the school-stage starting route rather
  // than silently reverting to an unfiltered catalogue.
  const effectiveDecisionStage = decisionStage || (isStudent ? 'class-11-12' : '');
  // Guidance can use the school-stage starting language when a learner has
  // not filled in academic details yet, but the catalogue itself must remain
  // open. Do not silently hide whole career families behind a guessed science
  // filter on a first visit.
  const initialCatalogueStage = decisionStage ? careerStudyStageKey(decisionStage) : 'all';
  const stageGuidance = qs<HTMLElement>('#career-stage-guidance');
  if (stageGuidance) stageGuidance.textContent = careerStageGuidance(effectiveDecisionStage);
  const stageStart = careerStageStart(effectiveDecisionStage);
  setText('#career-stage-start-title', stageStart.title);
  setText('#career-stage-start-copy', stageStart.copy);
  preparePresetControls();
  form.reset();
  const row = coaching.careers.find((item) => item.id === id);
  const guide = careerGuideFor(row?.preset_key);
  if (row) setFormValues(form, {
    ...row,
    reasons: (row.reasons ?? []).join('\n'),
    tradeoffs: (row.tradeoffs ?? []).join('\n'),
    decision_signal: decisionSignalFor(row),
    evidence_strength: evidenceStrengthFor(row),
    future_outlook: row.future_outlook || guide?.outlook || 'uncertain',
  });
  const idField = form.elements.namedItem('id') as HTMLInputElement;
  idField.value = row?.id ?? '';
  const type = row?.option_type || 'primary';
  form.querySelectorAll<HTMLInputElement>('input[name="option_type"]').forEach((input) => { input.checked = input.value === type; });
  const picker = qs<HTMLElement>('#career-preset-picker');
  // Keep the catalogue available while reviewing a saved direction. Hiding
  // it in edit mode made a normal review look like a failed or incomplete
  // library load and forced users to reload the page to browse again.
  if (picker) picker.hidden = false;
  const search = qs<HTMLInputElement>('#career-preset-search');
  const category = qs<HTMLSelectElement>('#career-preset-category');
  const careerGroup = qs<HTMLSelectElement>('#career-preset-group');
  const stage = qs<HTMLSelectElement>('#career-study-stage');
  if (search) search.value = '';
  qsa<HTMLElement>('[data-career-interest]').forEach((button) => { button.setAttribute('aria-pressed', 'false'); button.classList.remove('is-selected'); });
  comparedCareerGuideKeys = [];
  careerLibraryPage = 1;
  // Show the complete catalogue from every entry point. Students can narrow it
  // with interests or search, but should never have to discover the "all"
  // option before seeing the full set of possible directions.
  if (category) category.value = 'all';
  if (careerGroup) careerGroup.value = 'all';
  const sort = qs<HTMLSelectElement>('#career-preset-sort');
  if (sort) sort.value = 'recommended';
  if (stage) stage.value = initialCatalogueStage;
  selectedCareerGuideKey = row?.preset_key ?? '';
  renderCareerPresetResults();
  const preview = qs<HTMLElement>('#career-guide-preview');
  const initialGuide = guide ?? (selectedCareerGuideKey ? careerGuideFor(selectedCareerGuideKey) : null);
  if (preview) {
    preview.innerHTML = initialGuide ? careerGuidePreviewHtml(initialGuide, ctx.escapeHtml) : emptyCareerPreview();
    if (initialGuide) wireCareerGuideActions(preview);
  }
  updateCareerFocusControl();
  const title = qs<HTMLElement>('#career-dialog-title');
  if (title) title.textContent = row ? 'Edit career option' : 'Choose a career option';
  const detailFields = qs<HTMLDetailsElement>('#career-detail-fields');
  if (detailFields) {
    // Students need a clear first decision. Staff can open the richer record
    // fields when they are ready to document evidence and trade-offs.
    detailFields.hidden = isStudent;
    detailFields.open = !isStudent && Boolean(row);
  }
  const checklist = qs<HTMLElement>('#career-decision-checklist');
  if (checklist) checklist.hidden = isStudent;
  const studentGuide = qs<HTMLElement>('#career-decision-student-guide');
  if (studentGuide) studentGuide.hidden = !isStudent;
  const manualFamilyField = qs<HTMLElement>('#career-manual-family-field');
  if (manualFamilyField) manualFamilyField.hidden = isStudent;
  const careerSubmitLabel = qs<HTMLElement>('#career-save-label');
  if (careerSubmitLabel) careerSubmitLabel.textContent = row ? 'Save changes' : 'Save career option';
  qs<HTMLElement>('#career-route-fallback')?.setAttribute('hidden', 'true');
  // The dedicated route is a normal page in the dashboard shell, so the
  // chooser never traps a learner inside a modal from the dashboard.
  dialog.hidden = false;
  // Keep the page section's state explicit for assistive technology and for
  // older callers that treated the chooser as a dialog. It remains a normal
  // page on the dedicated route; `open` is simply its visible-state marker.
  dialog.setAttribute('open', '');
  // Review buttons live near the saved summary while the editable fields are
  // further down the page. Bring the user to the form so the action has an
  // immediate, visible result on both desktop and mobile.
  if (id) {
    window.requestAnimationFrame(() => {
      dialog.scrollIntoView({ behavior: 'smooth', block: 'start' });
      qs<HTMLInputElement>('#career-option-form input[name="title"]')?.focus();
    });
  }
}

function closeCareerDecisionDialog() {
  const dedicatedRoute = qs<HTMLElement>('#hierarchy-workspace')?.dataset.careerDecisionPage === 'true';
  const careerPage = qs<HTMLElement>('#career-option-dialog');
  if (careerPage) {
    careerPage.hidden = true;
    careerPage.removeAttribute('open');
  }
  if (dedicatedRoute) {
    // The dedicated career page has no dashboard shell behind it. Navigate
    // back to the real dashboard instead of only changing the URL and hiding
    // the planner, which previously left a blank page on Back.
    const message = pendingCareerSaveMessage;
    pendingCareerSaveMessage = '';
    let returnState: { studentId?: string; tab?: string } = {};
    try {
      const raw = sessionStorage.getItem('fcs-career-return');
      if (raw) returnState = JSON.parse(raw) as { studentId?: string; tab?: string };
      sessionStorage.removeItem('fcs-career-return');
    } catch { /* storage may be unavailable */ }
    try {
      sessionStorage.setItem('fcs-dashboard-return-overview', 'true');
      if (message || returnState.studentId || activeStudentId()) sessionStorage.setItem('fcs-career-return', JSON.stringify({ ...returnState, studentId: returnState.studentId || activeStudentId(), tab: returnState.tab || 'careers', message }));
      // Closing the dedicated planner is an intentional return to the
      // dashboard landing view. Do not let the planner's transient view state
      // reopen the career tab after the navigation completes.
      sessionStorage.removeItem('fcs-dashboard-view');
      sessionStorage.removeItem('fcs-dashboard-session-active');
      sessionStorage.removeItem('fcs-dashboard-plan-tab');
    } catch { /* storage may be unavailable */ }
    window.location.assign('/dashboard?view=overview');
    return;
  } else if (window.location.pathname.endsWith('/career-decision')) window.location.assign('/dashboard?view=overview');
}

function fillLinkedCareerOptions(select: HTMLSelectElement, selectedId = '') {
  if (!ctx) return;
  const careers = rowsFor(coaching.careers, 'user_id');
  select.innerHTML = `<option value="">Applies across careers</option>${careers.map((career) => `<option value="${ctx!.escapeHtml(career.id)}">${ctx!.escapeHtml(career.title)} / ${ctx!.escapeHtml(career.option_type === 'primary' ? 'Primary' : 'Secondary option')}</option>`).join('')}`;
  select.value = selectedId;
}

function openSkillDialog(id = '') {
  if (!ctx || !activeStudentId() || !requireSchema()) return;
  const form = qs<HTMLFormElement>('#skill-form');
  const dialog = qs<HTMLDialogElement>('#skill-dialog');
  const linkedCareer = qs<HTMLSelectElement>('#skill-linked-career');
  if (!form || !dialog || !linkedCareer) return;
  setModalStatus('#skill-status', '');
  preparePresetControls();
  form.reset();
  const row = coaching.skills.find((item) => item.id === id);
  fillLinkedCareerOptions(linkedCareer, row?.linked_career_path_id ?? '');
  if (row) setFormValues(form, row);
  else {
    const review = new Date();
    review.setDate(review.getDate() + 30);
    setFormValues(form, { review_date: review.toISOString().slice(0, 10), skill_scope: 'foundation' });
  }
  (form.elements.namedItem('id') as HTMLInputElement).value = row?.id ?? '';
  (form.elements.namedItem('preset_key') as HTMLInputElement).value = row?.preset_key ?? '';
  const picker = qs<HTMLElement>('#skill-preset-picker');
  if (picker) picker.hidden = Boolean(row);
  const search = qs<HTMLInputElement>('#skill-preset-search');
  const category = qs<HTMLSelectElement>('#skill-preset-category');
  if (search) search.value = '';
  if (category) category.value = 'featured';
  renderSkillPresetResults();
  const title = qs<HTMLElement>('#skill-dialog-title');
  if (title) title.textContent = row ? 'Edit skill plan item' : 'Add one skill';
  const detailFields = qs<HTMLDetailsElement>('#skill-detail-fields');
  if (detailFields) {
    detailFields.hidden = ctx.profile.role === 'student' && !row;
    detailFields.open = Boolean(row);
  }
  const intro = qs<HTMLElement>('#skill-dialog-intro');
  const isStudentNewSkill = ctx.profile.role === 'student' && !row;
  if (intro) intro.textContent = isStudentNewSkill
    ? 'Choose one skill you want to practise. The ability scale is ready for you; choose your current level only if you want to record it. You can add proof after saving.'
    : 'Start with the closest honest level: what the student can show today without guessing. Add a way to practise and a piece of proof so this becomes a useful plan, not just a label.';
  setText('#skill-name-label span', isStudentNewSkill ? 'Skill you want to practise' : 'Skill');
  setText('#skill-category-label span', isStudentNewSkill ? 'What kind of skill is it?' : 'Category');
  setText('#skill-current-label span', isStudentNewSkill ? 'Current ability (optional)' : 'Current ability');
  dialog.showModal();
}

function openSkillPlanDialog(initialKey = '') {
  if (!ctx || !activeStudentId() || !requireSchema()) return;
  const form = qs<HTMLFormElement>('#skill-plan-form');
  const dialog = qs<HTMLDialogElement>('#skill-plan-dialog');
  if (!form || !dialog) return;
  setModalStatus('#skill-plan-status', '');
  form.reset();
  const search = qs<HTMLInputElement>('#skill-pack-search');
  const group = qs<HTMLSelectElement>('#skill-pack-group');
  if (search) search.value = '';
  if (group) group.value = 'recommended';
  const primary = currentPrimaryCareer();
  const careerSelect = qs<HTMLSelectElement>('#skill-pack-career');
  if (careerSelect) {
    fillLinkedCareerOptions(careerSelect, primary?.id ?? '');
    careerSelect.options[0].textContent = 'Choose a career option';
  }
  const context = qs<HTMLElement>('#skill-plan-context');
  const primaryDirections = rowsFor(coaching.careers, 'user_id').filter((row) => row.option_type === 'primary');
  const primaryLabel = primaryDirections.length
    ? `${primaryDirections.slice(0, 2).map((row) => row.title).join(', ')}${primaryDirections.length > 2 ? ` + ${primaryDirections.length - 2} more` : ''}`
    : 'Not chosen yet';
  if (context) context.innerHTML = `<span><small>Primary career options</small><strong>${ctx.escapeHtml(primaryLabel)}</strong></span><span><small>Skills already planned</small><strong>${uniqueSkillRowsForStudent(activeStudentId()).length}</strong></span><span><small>How to build</small><strong>Start with foundations, then add what the selected career option needs</strong></span>`;
  const defaultPack = getSkillPack(initialKey) || skillPackMatches('', 'recommended', currentPrimaryCategories())[0] || null;
  selectedSkillPackKey = defaultPack?.key ?? '';
  renderSkillPackResults();
  const preview = qs<HTMLElement>('#skill-pack-preview');
  const submit = qs<HTMLButtonElement>('#add-skill-pack');
  if (defaultPack && preview) {
    preview.innerHTML = skillPackPreviewHtml(defaultPack, existingSkillNames(), ctx.escapeHtml);
    if (submit) submit.disabled = !skillPackItems(defaultPack).some((item) => !existingSkillNames().has(item.title.toLowerCase()));
  } else if (submit) submit.disabled = true;
  dialog.showModal();
}

function openEvidenceDialog(skillId: string, evidenceId = '') {
  if (!ctx || !requireSchema()) return;
  const skill = coaching.skills.find((row) => row.id === skillId);
  const form = qs<HTMLFormElement>('#evidence-form');
  const dialog = qs<HTMLDialogElement>('#evidence-dialog');
  if (!skill || !form || !dialog) return;
  setModalStatus('#evidence-status', '');
  form.reset();
  preparePresetControls();
  const evidence = coaching.evidence.find((row) => row.id === evidenceId);
  (form.elements.namedItem('id') as HTMLInputElement).value = evidence?.id ?? '';
  (form.elements.namedItem('skill_id') as HTMLInputElement).value = skillId;
  if (evidence) setFormValues(form, evidence);
  else (form.elements.namedItem('evidence_date') as HTMLInputElement).value = new Date().toISOString().slice(0, 10);
  const preset = qs<HTMLSelectElement>('#evidence-preset');
  if (preset) preset.value = '';
  const context = qs<HTMLElement>('#evidence-skill-name');
  if (context) context.textContent = skill.skill_name;
  const title = dialog.querySelector<HTMLElement>('h2');
  if (title) title.textContent = evidence ? 'Edit evidence' : 'Add evidence';
  const submitLabel = qs<HTMLElement>('#evidence-submit-label');
  if (submitLabel) submitLabel.textContent = evidence ? 'Save evidence' : 'Add evidence';
  dialog.showModal();
}

function openSkillReviewDialog(skillId: string, reviewId = '') {
  if (!ctx || !requireSchema()) return;
  const skill = coaching.skills.find((row) => row.id === skillId);
  const form = qs<HTMLFormElement>('#skill-review-form');
  const dialog = qs<HTMLDialogElement>('#skill-review-dialog');
  if (!skill || !form || !dialog) return;
  setModalStatus('#skill-review-status', '');
  form.reset();
  // A dialog form is reused for every skill. Clear the previous interaction
  // marker as well as the visible fields, otherwise a later review can inherit
  // the previous skill's "rating selected" state.
  delete form.dataset.ratingDirty;
  form.querySelectorAll<HTMLInputElement>('input[data-rating-slider]').forEach((input) => {
    delete input.dataset.ratingTouched;
  });
  const review = coaching.skillReviews.find((row) => row.id === reviewId) ?? null;
  if (ctx.profile.role === 'student' && review?.coach_id) {
    ctx.setWorkspaceStatus('Coach reviews are read-only for students. Add feedback from your own student review instead.', true);
    return;
  }
  (form.elements.namedItem('id') as HTMLInputElement).value = review?.id ?? '';
  (form.elements.namedItem('skill_id') as HTMLInputElement).value = skill.id;
  (form.elements.namedItem('coach_reviewed_on') as HTMLInputElement).value = review?.coach_reviewed_on ?? new Date().toISOString().slice(0, 10);
  (form.elements.namedItem('coach_feedback') as HTMLTextAreaElement).value = review?.coach_feedback ?? '';
  (form.elements.namedItem('coach_satisfaction') as HTMLInputElement).value = review?.coach_satisfaction !== null && review?.coach_satisfaction !== undefined ? String(review.coach_satisfaction) : '0';
  (form.elements.namedItem('next_focus') as HTMLInputElement).value = review?.next_focus ?? '';
  const context = qs<HTMLElement>('#skill-review-context');
  if (context) context.textContent = `${skill.skill_name} · ${ctx.profileById(activeStudentId()!)?.full_name || 'Student'}`;
  const scaleHelp = form.querySelector<HTMLElement>('.form-help');
  if (scaleHelp) scaleHelp.textContent = 'Use 0 for not started, 1–2 for just beginning, 3–4 for building with support, 5–6 for familiar work, 7–8 for reliable work, and 9–10 for confidence in a new situation.';
  qs<HTMLElement>('#coach-review-fields')!.hidden = ctx.profile.role === 'student';
  qs<HTMLElement>('#student-review-fields')!.hidden = ctx.profile.role !== 'student';
  if (ctx.profile.role === 'student' && review) {
    (form.elements.namedItem('student_satisfaction') as HTMLInputElement).value = review.student_satisfaction !== null && review.student_satisfaction !== undefined ? String(review.student_satisfaction) : '0';
    (form.elements.namedItem('student_feedback') as HTMLTextAreaElement).value = review.student_feedback ?? '';
  }
  const selectedScore = ctx.profile.role === 'student' ? review?.student_satisfaction : review?.coach_satisfaction;
  // The expanded editor keeps a hidden compatibility value with the same
  // field name as the visible range control. Always initialise the actual
  // slider; selecting the first input by name can otherwise update only the
  // hidden field and leave a saved score visually stuck at zero.
  const ratingField = ctx.profile.role === 'student' ? 'student_satisfaction' : 'coach_satisfaction';
  const ratingInput = form.querySelector<HTMLInputElement>(`input[type="range"][data-rating-slider][name="${ratingField}"]`)
    ?? form.querySelector<HTMLInputElement>(`input[name="${ratingField}"]`);
  const ratingShell = ratingInput?.closest<HTMLElement>('[data-rating-slider-shell]');
  const ratingPresence = ratingShell?.querySelector<HTMLInputElement>('[data-rating-presence]');
  if (ratingPresence) ratingPresence.value = selectedScore !== null && selectedScore !== undefined ? 'true' : 'false';
  if (ratingInput && selectedScore !== null && selectedScore !== undefined) {
    ratingInput.dispatchEvent(new Event('input', { bubbles: true }));
  } else if (ratingInput) {
    ratingShell?.style.setProperty('--rating-progress', '0%');
    ratingInput.setAttribute('aria-valuetext', 'No score selected');
    const output = ratingShell?.querySelector<HTMLOutputElement>('output[data-rating-output]');
    if (output) output.textContent = 'Choose a score';
  }
  dialog.showModal();
}

function openAdviceDialog(id = '') {
  if (!ctx || ctx.profile.role === 'student' || !activeStudentId() || !requireSchema()) return;
  const form = qs<HTMLFormElement>('#advice-form');
  const dialog = qs<HTMLDialogElement>('#advice-dialog');
  const cohort = qs<HTMLSelectElement>('#advice-cohort');
  if (!form || !dialog || !cohort) return;
  setModalStatus('#advice-status', '');
  form.reset();
  const studentId = activeStudentId()!;
  const currentCohort = getStudentCohort(studentId);
  const row = coaching.advice.find((item) => item.id === id);
  const historicalCohort = row?.cohort_id ? getCohortById(row.cohort_id) : null;
  const cohortOptions = [currentCohort, historicalCohort && historicalCohort.id !== currentCohort?.id ? historicalCohort : null].filter(Boolean) as Row[];
  cohort.innerHTML = `<option value="">No cohort link</option>${cohortOptions.map((item) => {
    const isCurrent = item.id === currentCohort?.id;
    const isHistoricalRecord = Boolean(row?.cohort_id && item.id === row.cohort_id && !isCurrent);
    return `<option value="${ctx!.escapeHtml(item.id)}"${isHistoricalRecord ? ' disabled' : ''}>${ctx!.escapeHtml(item.name)}${isCurrent ? ' · current cohort' : ' · historical record'}</option>`;
  }).join('')}`;
  if (row) setFormValues(form, row);
  else {
    const today = new Date().toISOString().slice(0, 10);
    (form.elements.namedItem('advice_date') as HTMLInputElement).value = today;
    cohort.value = currentCohort?.id ?? '';
  }
  (form.elements.namedItem('id') as HTMLInputElement).value = row?.id ?? '';
  dialog.showModal();
}

function openSessionDialog(id = '') {
  if (!ctx || ctx.profile.role === 'student' || !activeStudentId() || !requireSchema()) return;
  const form = qs<HTMLFormElement>('#session-form');
  const dialog = qs<HTMLDialogElement>('#session-dialog');
  const facilitator = qs<HTMLSelectElement>('#individual-session-facilitator');
  if (!form || !dialog || !facilitator) return;
  setModalStatus('#individual-session-status', '');
  form.reset();
  const student = ctx.profileById(activeStudentId());
  const staff = ctx.profiles.filter((profile) => {
    if (profile.role === 'student' || profile.account_status !== 'active') return false;
    if (ctx!.profile.role === 'admin') return true;
    if (ctx!.profile.role === 'coach') return profile.id === ctx!.user.id;
    if (ctx!.profile.role === 'head_coach') return profile.id === ctx!.user.id || (profile.role === 'coach' && profile.supervisor_id === ctx!.user.id);
    return profile.branch_id === student?.branch_id;
  });
  facilitator.innerHTML = staff.map((profile) => `<option value="${ctx!.escapeHtml(profile.id)}">${ctx!.escapeHtml(profile.full_name)} · ${ctx!.escapeHtml(ctx!.formatRole(profile.role))}</option>`).join('');
  const row = coaching.sessions.find((item) => item.id === id);
  if (row) setFormValues(form, row);
  else {
    facilitator.value = ctx.user.id;
    const next = new Date(Date.now() + 24 * 60 * 60 * 1000);
    next.setMinutes(0, 0, 0);
    (form.elements.namedItem('scheduled_at') as HTMLInputElement).value = toLocalInput(next.toISOString());
  }
  (form.elements.namedItem('id') as HTMLInputElement).value = row?.id ?? '';
  const title = qs<HTMLElement>('#session-dialog-title');
  if (title) title.textContent = row ? 'Update session' : 'Schedule session';
  dialog.showModal();
}

async function handleCaseSubmit(event: SubmitEvent) {
  event.preventDefault();
  if (!ctx || !ctx.selectedStudentId || !requireSchema()) return;
  const form = event.currentTarget as HTMLFormElement;
  const data = new FormData(form);
  const button = form.querySelector<HTMLButtonElement>('[type="submit"]');
  setBusy(button, true);
  const row = {
    student_id: ctx.selectedStudentId,
    coaching_stage: data.get('coaching_stage'),
    case_status: data.get('case_status'),
    priority: data.get('priority'),
    review_cadence_days: numberValue(data.get('review_cadence_days')) ?? 14,
    decision_deadline: textValue(data.get('decision_deadline')) || null,
    next_review_at: null,
    goal_summary: textValue(data.get('goal_summary')),
    progress_note: textValue(data.get('progress_note')),
    updated_by: ctx.user.id,
  };
  try {
    const response = await ctx.client.from('student_cases').upsert(row, { onConflict: 'student_id' }).select('*').single();
    if (response.error) throw response.error;
    coaching.cases = [...coaching.cases.filter((item) => item.student_id !== row.student_id), response.data];
    setModalStatus('#student-case-status', 'Saved. The coaching team will use this stage, priority, and progress note for follow-through.');
    ctx.setWorkspaceStatus('Coaching case saved.');
    renderCoachingWorkspace();
    ctx.renderOverview();
  } catch (error) {
    const message = friendlyWorkspaceError(error, 'Could not save the coaching case.');
    setModalStatus('#student-case-status', message, true);
    ctx.setWorkspaceStatus(message, true);
  } finally { setBusy(button, false); }
}

async function handleCareerSubmit(event: SubmitEvent) {
  event.preventDefault();
  if (!ctx || !activeStudentId() || !requireSchema()) return;
  const form = event.currentTarget as HTMLFormElement;
  const data = new FormData(form);
  const id = textValue(data.get('id'));
  const desiredType = textValue(data.get('option_type')) || 'alternative';
  const reviewDate = textValue(data.get('decision_deadline'));
  const decisionSignal = textValue(data.get('decision_signal')) || 'needs-evidence';
  const careerStatus = decisionSignalOptions.find((option) => option.value === decisionSignal)?.status || 'exploring';
  const baseRow: Row = {
    user_id: activeStudentId(),
    title: textValue(data.get('title')),
    status: careerStatus,
    decision_signal: decisionSignal,
    evidence_strength: textValue(data.get('evidence_strength')) || 'none',
    future_outlook: textValue(data.get('future_outlook')) || 'uncertain',
    review_question: textValue(data.get('review_question')),
    career_category: textValue(data.get('career_category')) || 'Other',
    preset_key: textValue(data.get('preset_key')) || null,
    decision_deadline: reviewDate || null,
    route_summary: textValue(data.get('route_summary')),
    entry_requirements: textValue(data.get('entry_requirements')),
    work_environment: textValue(data.get('work_environment')),
    reasons: linesValue(data.get('reasons')),
    tradeoffs: linesValue(data.get('tradeoffs')),
    next_step: textValue(data.get('next_step')),
    updated_by: ctx.user.id,
    ...(id ? {} : { created_by: ctx.user.id }),
  };
  baseRow.option_type = desiredType;
  const button = form.querySelector<HTMLButtonElement>('[type="submit"]');
  setBusy(button, true);
  try {
    // A direction should appear once in a student's plan.  The database does
    // not have a unique constraint for this because the same title can be
    // used intentionally across different students, so guard the current
    // student's plan here before creating another copy.
    if (!id) {
      const normaliseTitle = (value: unknown) => String(value ?? '').trim().toLowerCase().replace(/\s+/g, ' ');
      const duplicate = coaching.careers.find((item) => item.user_id === activeStudentId()
        && !['ruled-out', 'paused'].includes(String(item.status))
        && ((baseRow.preset_key && item.preset_key === baseRow.preset_key)
          || (!baseRow.preset_key && normaliseTitle(item.title) === normaliseTitle(baseRow.title))));
      if (duplicate) {
        const existingType = duplicate.option_type === 'primary' ? 'primary' : 'secondary';
        setModalStatus('#career-option-status', `“${duplicate.title}” is already saved as a ${existingType} career option. Review the existing career option instead of adding it again.`);
        return;
      }
    }
    const query = id ? ctx.client.from('career_paths').update(baseRow).eq('id', id) : ctx.client.from('career_paths').insert(baseRow);
    const response = await query.select('*').single();
    if (response.error) throw response.error;
    const saved = response.data;
    coaching.careers = [...coaching.careers.filter((item) => item.id !== saved.id), saved];
    // Every saved direction gets a small, focused set of linked starter skills.
    // The operation is idempotent, so editing a direction never creates
    // duplicates; each skill remains removable from the skill plan.
    let linkedSkillCount = 0;
    if (!['ruled-out', 'paused'].includes(String(saved.status))) {
      try {
        linkedSkillCount = await addHardSkillsForCareer(saved);
      } catch (skillError) {
        // The career decision itself is already saved. Keep that success
        // visible and let the person use the skill library if a legacy skill
        // policy prevents the automatic starter set from being inserted.
        console.warn('Career saved but linked starter skills were unavailable.', skillError);
      }
    }
    if (window.location.pathname.endsWith('/career-decision') && ctx.profile.role !== 'student') {
      try {
        const rawReturn = sessionStorage.getItem('fcs-career-return');
        const returnState = rawReturn ? JSON.parse(rawReturn) as Record<string, unknown> : {};
        const message = id ? 'Career option updated.' : desiredType === 'primary' ? 'Primary career option saved.' : 'Secondary career option saved.';
        sessionStorage.setItem('fcs-career-return', JSON.stringify({ ...returnState, studentId: activeStudentId(), tab: 'careers', message }));
      } catch { /* ignore unavailable session storage */ }
    }
    const careerSaveMessage = `${desiredType === 'primary' ? 'Primary career option saved.' : id ? 'Career decision updated.' : 'Secondary career option added.'}${linkedSkillCount ? ` ${linkedSkillCount} linked starter skills are ready in Skills to practise.` : ''}`;
    pendingCareerSaveMessage = careerSaveMessage;
    closeCareerDecisionDialog();
    renderCoachingWorkspace();
    ctx.renderOverview();
    // Rendering the overview rebuilds several panels and can clear the shared
    // status node. Set the confirmation last so the person sees it reliably.
    ctx.setWorkspaceStatus(careerSaveMessage);
    window.setTimeout(() => ctx?.setWorkspaceStatus(careerSaveMessage), 0);
  } catch (error) { const message = friendlyWorkspaceError(error, 'Could not save the career decision.'); setModalStatus('#career-option-status', message, true); ctx.setWorkspaceStatus(message, true); }
  finally { setBusy(button, false); }
}

async function handleSkillSubmit(event: SubmitEvent) {
  event.preventDefault();
  if (!ctx || !activeStudentId() || !requireSchema()) return;
  const form = event.currentTarget as HTMLFormElement;
  const data = new FormData(form);
  const id = textValue(data.get('id'));
  const row = {
    student_id: activeStudentId(),
    preset_key: textValue(data.get('preset_key')) || null,
    skill_name: textValue(data.get('skill_name')),
    category: textValue(data.get('category')) || 'employability',
    // Students see a deliberately shorter form. Keep the roadmap record
    // complete when those staff-only detail fields are not present in the
    // submitted FormData.
    skill_scope: textValue(data.get('skill_scope')) || 'foundation',
    linked_career_path_id: textValue(data.get('linked_career_path_id')) || null,
    current_level: numberValue(data.get('current_level')) ?? 0,
    target_level: numberValue(data.get('target_level')) ?? 2,
    priority: textValue(data.get('priority')) || 'important',
    status: textValue(data.get('status')) || 'identified',
    development_goal: textValue(data.get('development_goal')),
    practice_method: textValue(data.get('practice_method')),
    success_criteria: textValue(data.get('success_criteria')),
    review_date: textValue(data.get('review_date')) || null,
    updated_by: ctx.user.id,
    ...(id ? {} : { created_by: ctx.user.id }),
  };
  const button = form.querySelector<HTMLButtonElement>('[type="submit"]');
  setBusy(button, true);
  try {
    const query = id ? ctx.client.from('student_skills').update(row).eq('id', id) : ctx.client.from('student_skills').insert(row);
    const response = await query.select('*').single();
    if (response.error) throw response.error;
    coaching.skills = [...coaching.skills.filter((item) => item.id !== id), response.data];
    qs<HTMLDialogElement>('#skill-dialog')?.close();
    ctx.setWorkspaceStatus(id ? 'Skill plan item updated.' : 'Skill added to the roadmap.');
    renderCoachingWorkspace();
    ctx.renderOverview();
  } catch (error) { const message = friendlyWorkspaceError(error, 'Could not save the skill.'); setModalStatus('#skill-status', message, true); ctx.setWorkspaceStatus(message, true); }
  finally { setBusy(button, false); }
}

async function handleSkillPlanSubmit(event: SubmitEvent) {
  event.preventDefault();
  if (!ctx || !activeStudentId() || !requireSchema()) return;
  const form = event.currentTarget as HTMLFormElement;
  const pack = getSkillPack(selectedSkillPackKey);
  if (!pack) return;
  const selectedKeys = new Set(new FormData(form).getAll('skill_keys').map(String));
  const existing = existingSkillNames();
  const items = skillPackItems(pack).filter((item) => selectedKeys.has(item.key) && !existing.has(item.title.toLowerCase()));
  if (!items.length) {
    setModalStatus('#skill-plan-status', 'Choose at least one skill that is not already in the roadmap.', true);
    ctx.setWorkspaceStatus('Choose at least one skill that is not already in the roadmap.', true);
    return;
  }
  const primary = currentPrimaryCareer();
  const careerLink = qs<HTMLSelectElement>('#skill-pack-career')?.value || primary?.id || '';
  if (pack.scope === 'career-specific' && !careerLink) {
    setModalStatus('#skill-plan-status', 'Choose the career option these skills support.', true);
    ctx.setWorkspaceStatus('Choose the career option these skills support.', true);
    return;
  }
  const actorId = ctx.user.id;
  const studentId = activeStudentId();
  const review = new Date();
  review.setDate(review.getDate() + 30);
  const rows = items.map((item) => ({
    student_id: studentId,
    preset_key: item.key,
    skill_name: item.title,
    category: item.category,
    skill_scope: pack.scope,
    linked_career_path_id: pack.scope === 'career-specific' ? careerLink : null,
    current_level: 0,
    target_level: item.targetLevel,
    priority: item.priority,
    status: 'identified',
    development_goal: item.developmentGoal,
    practice_method: item.practiceMethod,
    success_criteria: item.successCriteria,
    review_date: review.toISOString().slice(0, 10),
    created_by: actorId,
    updated_by: actorId,
  }));
  const button = qs<HTMLButtonElement>('#add-skill-pack');
  setBusy(button, true, 'Adding plan...');
  try {
    const response = await ctx.client.from('student_skills').insert(rows).select('*');
    if (response.error) throw response.error;
    coaching.skills.push(...(response.data ?? []));
    qs<HTMLDialogElement>('#skill-plan-dialog')?.close();
    ctx.setWorkspaceStatus(`${rows.length} skills added from ${pack.title}.`);
    renderCoachingWorkspace();
    ctx.renderOverview();
  } catch (error) { const message = friendlyWorkspaceError(error, 'Could not add the skill plan.'); setModalStatus('#skill-plan-status', message, true); ctx.setWorkspaceStatus(message, true); }
  finally { setBusy(button, false); }
}

async function handleEvidenceSubmit(event: SubmitEvent) {
  event.preventDefault();
  if (!ctx || !requireSchema()) return;
  const form = event.currentTarget as HTMLFormElement;
  const data = new FormData(form);
  const id = textValue(data.get('id'));
  const button = form.querySelector<HTMLButtonElement>('[type="submit"]');
  const rawLinks = textValue(data.get('source_url'));
  const links = rawLinks.split(/\r?\n/).map((value) => value.trim()).filter(Boolean);
  for (const link of links) {
    try {
      const parsed = new URL(link);
      if (!['http:', 'https:'].includes(parsed.protocol)) throw new Error('Unsupported protocol');
    } catch {
      setModalStatus('#evidence-status', `This link is not valid: ${link}. Use a complete address beginning with https://.`, true);
      return;
    }
  }
  setBusy(button, true);
  try {
    const row = {
      skill_id: data.get('skill_id'), title: textValue(data.get('title')) || 'Skill evidence', evidence_type: data.get('evidence_type') || 'work-sample',
      description: textValue(data.get('description')), source_url: Array.from(new Set(links)).join('\n'),
      observed_level: numberValue(data.get('observed_level')), evidence_date: data.get('evidence_date') || new Date().toISOString().slice(0, 10), added_by: ctx.user.id,
    };
    const query = id ? ctx.client.from('skill_evidence').update(row).eq('id', id) : ctx.client.from('skill_evidence').insert(row);
    const response = await query.select('*').single();
    if (response.error) throw response.error;
    coaching.evidence = [...coaching.evidence.filter((item) => item.id !== response.data.id), response.data];
    qs<HTMLDialogElement>('#evidence-dialog')?.close();
    ctx.setWorkspaceStatus(id ? 'Skill evidence updated.' : 'Skill evidence added.');
    renderCoachingWorkspace();
  } catch (error) { const message = friendlyWorkspaceError(error, 'Could not add the evidence.'); setModalStatus('#evidence-status', message, true); ctx.setWorkspaceStatus(message, true); }
  finally { setBusy(button, false); }
}

async function handleSkillReviewSubmit(event: SubmitEvent) {
  event.preventDefault();
  if (!ctx || !requireSchema()) return;
  const form = event.currentTarget as HTMLFormElement;
  const data = new FormData(form);
  const id = textValue(data.get('id'));
  const studentId = activeStudentId();
  if (!studentId) return;
  const isStudent = ctx.profile.role === 'student';
  // The range control is the source of truth.  Do not depend on a separate
  // hidden flag: after a redraw that flag could lag behind the visible value,
  // making a valid score look like an empty score.  Zero is a deliberate,
  // useful rating and must be saved as zero.
  const scoreFieldName = isStudent ? 'student_satisfaction' : 'coach_satisfaction';
  // The compact and expanded editors both carry a range control. FormData
  // returns the first field when names are repeated, so read the visible
  // slider explicitly before falling back to the form payload. This prevents
  // a dragged score being replaced by the hidden compatibility value.
  const visibleSlider = form.querySelector<HTMLInputElement>(`input[type="range"][name="${scoreFieldName}"]`);
  const scoreValue = numberValue(visibleSlider?.value ?? data.get(scoreFieldName));
  const hasSelectedRating = textValue(data.get(`${scoreFieldName}_set`)) === 'true'
    || form.querySelector<HTMLInputElement>(`input[name="${scoreFieldName}"]`)?.dataset.ratingTouched === 'true'
    || form.dataset.ratingDirty === 'true'
    // A non-zero range value is itself an explicit selection. This fallback
    // also covers keyboard/test automation that changes the native control
    // without emitting the delegated input event.
    || (Number.isFinite(scoreValue) && scoreValue !== 0);
  const row: Row = isStudent
    ? { skill_id: data.get('skill_id'), student_id: studentId, student_feedback: textValue(data.get('student_feedback')), student_satisfaction: hasSelectedRating ? scoreValue : null, student_feedback_on: new Date().toISOString().slice(0, 10), updated_at: new Date().toISOString() }
    : { skill_id: data.get('skill_id'), student_id: studentId, coach_id: ctx.user.id, coach_reviewed_on: data.get('coach_reviewed_on'), coach_feedback: textValue(data.get('coach_feedback')), coach_satisfaction: hasSelectedRating ? scoreValue : null, next_focus: textValue(data.get('next_focus')), updated_at: new Date().toISOString() };
  if (isStudent && !row.student_feedback && (row.student_satisfaction === null || row.student_satisfaction === undefined)) {
    setModalStatus('#skill-review-status', 'Add a rating or a reflection before saving.', true);
    return;
  }
  if (!isStudent && !row.coach_feedback && !row.next_focus && (row.coach_satisfaction === null || row.coach_satisfaction === undefined)) {
    setModalStatus('#skill-review-status', 'Add feedback, a next step, or a rating before saving.', true);
    return;
  }
  const button = form.querySelector<HTMLButtonElement>('[type="submit"]');
  setBusy(button, true);
  try {
    // A full coach note is an observation history, not a single mutable field:
    // keep each dated note so the student and coaching team can see progress
    // over time. The compact score form remains an update of the latest row so
    // dragging a rating does not create a new empty review on every save.
    let reviewId = id;
    if (!isStudent && form.matches('[data-inline-skill-review]')) reviewId = '';
    // The card already carries the learner's review id when one exists. Do
    // not replace an empty learner id with an unscoped lookup response: older
    // PostgREST proxies can return the first visible review even when filters
    // are present, which would update a different skill. A new learner
    // reflection is therefore inserted directly; the database uniqueness
    // rule remains the final guard against duplicates.
    if (!reviewId && (!isStudent && !form.matches('[data-inline-skill-review]'))) {
      const existingQuery = isStudent
        ? ctx.client.from('skill_reviews').select('id').eq('skill_id', row.skill_id).eq('student_id', studentId).is('coach_id', null).order('updated_at', { ascending: false }).limit(1)
        : ctx.client.from('skill_reviews').select('id').eq('skill_id', row.skill_id).eq('student_id', studentId).eq('coach_id', ctx.user.id).order('updated_at', { ascending: false }).limit(1);
      const existing = await existingQuery;
      if (Array.isArray(existing.data) && existing.data[0]?.id) reviewId = String(existing.data[0].id);
    }
    let response: any;
    if (reviewId) {
      // A learner can have older duplicate review rows. Returning a bounded
      // list keeps an update reliable instead of making maybeSingle() fail
      // with a 406 response before the score reaches the database.
      const updated = await ctx.client.from('skill_reviews').update(row).eq('id', reviewId).select('*').limit(1);
      response = { ...updated, data: updated.data?.[0] ?? null };
    } else {
      response = await ctx.client.from('skill_reviews').insert(row).select('*').single();
    }
    // Older sessions can hold a review id that is no longer visible after an
    // RLS refresh. Retry as a new review rather than silently losing the
    // rating; the saved score is still confirmed from the returned row.
    if (reviewId && !response.error && !response.data) {
      // Some PostgREST/RLS combinations acknowledge an UPDATE but return no
      // row when `select` is applied.  Do not immediately INSERT here: the
      // database deliberately prevents duplicate reviews. Re-resolve the
      // reviewer row and update it, inserting only when no row exists.
      const existingAfterUpdate = isStudent
        ? await ctx.client.from('skill_reviews').select('id').eq('skill_id', row.skill_id).eq('student_id', studentId).is('coach_id', null).order('updated_at', { ascending: false }).limit(1)
        : await ctx.client.from('skill_reviews').select('id').eq('skill_id', row.skill_id).eq('student_id', studentId).eq('coach_id', ctx.user.id).order('updated_at', { ascending: false }).limit(1);
      const resolvedId = existingAfterUpdate.data?.[0]?.id;
      if (resolvedId) {
        const retried = await ctx.client.from('skill_reviews').update(row).eq('id', resolvedId).select('*').limit(1);
        response = { ...retried, data: retried.data?.[0] ?? null };
      } else {
        response = await ctx.client.from('skill_reviews').insert(row).select('*').single();
      }
    }
    if (response.error) throw response.error;
    // PostgREST can acknowledge an UPDATE but return no row when the write is
    // allowed while the accompanying SELECT is filtered by RLS. Keep the
    // exact row that was sent so the saved score is not redrawn as zero. A
    // subsequent refresh will replace this client-confirmed copy when the row
    // becomes readable again.
    const savedReview = response.data ?? (reviewId ? { ...row, id: reviewId } : null);
    if (!savedReview) throw new Error('The feedback could not be confirmed. Please try saving it again.');
    const scoreField = isStudent ? 'student_satisfaction' : 'coach_satisfaction';
    const expectedScore = row[scoreField];
    const savedScore = savedReview[scoreField];
    if (expectedScore !== null && expectedScore !== undefined && Number(savedScore) !== Number(expectedScore)) {
      throw new Error('The satisfaction score was not confirmed. Please try saving it again.');
    }
    keepSavedSkillReview(studentId, savedReview as Row);
    try { await refreshSkillReviewsForStudent(studentId, savedReview as Row); }
    catch (refreshError) { console.warn('Saved skill review could not be reloaded immediately.', refreshError); }
    dialogClose('skill-review-dialog');
    const scoreConfirmation = expectedScore !== null && expectedScore !== undefined ? ` Satisfaction score saved: ${savedScore}/10.` : '';
    ctx.setWorkspaceStatus(`${isStudent ? 'Skill feedback saved.' : 'Coach feedback saved.'}${scoreConfirmation}`);
    renderCoachingWorkspace();
  } catch (error) { const message = friendlyWorkspaceError(error, 'Could not save the skill review.'); setModalStatus('#skill-review-status', message, true); ctx.setWorkspaceStatus(message, true); }
  finally { setBusy(button, false); }
}

async function handleInlineSkillReviewSubmit(event: SubmitEvent) {
  event.preventDefault();
  if (!ctx || !requireSchema()) return;
  const form = ((event.target as Element | null)?.closest<HTMLFormElement>('[data-inline-skill-review], [data-quick-skill-rating]'));
  if (!form) return;
  // An async save can finish after the learner has moved to another plan tab.
  // Keep confirmations attached to the tab where the action started instead
  // of reintroducing a stale message over the newly opened section.
  const submittedPlanTab = coaching.planTab;
  const pendingRatingTimer = Number(form.dataset.ratingAutosaveTimer || 0);
  if (pendingRatingTimer) {
    window.clearTimeout(pendingRatingTimer);
    delete form.dataset.ratingAutosaveTimer;
  }
  const data = new FormData(form);
  const id = textValue(data.get('id'));
  const studentId = activeStudentId();
  const skillId = textValue(data.get('skill_id'));
  if (!studentId || !skillId) return;
  const isStudent = ctx.profile.role === 'student';
  // Read the visible range directly so redraws cannot reset the saved score.
  // A value of zero is valid and must remain distinguishable from “missing”.
  const scoreFieldName = isStudent ? 'student_satisfaction' : 'coach_satisfaction';
  const visibleSlider = form.querySelector<HTMLInputElement>(`input[type="range"][name="${scoreFieldName}"]`);
  const scoreValue = numberValue(visibleSlider?.value ?? data.get(scoreFieldName));
  const hasSelectedRating = textValue(data.get(`${scoreFieldName}_set`)) === 'true'
    || form.querySelector<HTMLInputElement>(`input[name="${scoreFieldName}"]`)?.dataset.ratingTouched === 'true'
    || form.dataset.ratingDirty === 'true'
    || (Number.isFinite(scoreValue) && scoreValue !== 0);
  const row: Row = isStudent
    ? { skill_id: skillId, student_id: studentId, student_feedback: textValue(data.get('student_feedback')), student_satisfaction: hasSelectedRating ? scoreValue : null, student_feedback_on: new Date().toISOString().slice(0, 10), updated_at: new Date().toISOString() }
    : { skill_id: skillId, student_id: studentId, coach_id: ctx.user.id, coach_reviewed_on: textValue(data.get('coach_reviewed_on')) || new Date().toISOString().slice(0, 10), coach_feedback: textValue(data.get('coach_feedback')), coach_satisfaction: hasSelectedRating ? scoreValue : null, next_focus: textValue(data.get('next_focus')), updated_at: new Date().toISOString() };
  if (isStudent && !row.student_feedback && (row.student_satisfaction === null || row.student_satisfaction === undefined)) {
    const status = form.querySelector<HTMLElement>('[data-inline-review-status]');
    if (status) status.textContent = 'Add a rating or a reflection before saving.';
    return;
  }
  if (!isStudent && !row.coach_feedback && !row.next_focus && (row.coach_satisfaction === null || row.coach_satisfaction === undefined)) {
    const status = form.querySelector<HTMLElement>('[data-inline-review-status]');
    if (status) status.textContent = 'Add feedback, a next step, or a rating before saving.';
    return;
  }
  const button = form.querySelector<HTMLButtonElement>('[type="submit"]');
  setBusy(button, true, 'Saving...');
  try {
    let reviewId = id;
    // Preserve a dated coach observation when it is submitted from the
    // expanded card editor. Only the compact score row should update the
    // latest review in place.
    if (!isStudent && form.matches('[data-inline-skill-review]')) reviewId = '';
    if (!reviewId && (!isStudent && !form.matches('[data-inline-skill-review]'))) {
      const existingQuery = isStudent
        ? ctx.client.from('skill_reviews').select('id').eq('skill_id', skillId).eq('student_id', studentId).is('coach_id', null).order('updated_at', { ascending: false }).limit(1)
        : ctx.client.from('skill_reviews').select('id').eq('skill_id', skillId).eq('student_id', studentId).eq('coach_id', ctx.user.id).order('updated_at', { ascending: false }).limit(1);
      const existing = await existingQuery;
      if (Array.isArray(existing.data) && existing.data[0]?.id) reviewId = String(existing.data[0].id);
    }
    let response: any;
    if (reviewId) {
      const updated = await ctx.client.from('skill_reviews').update(row).eq('id', reviewId).select('*').limit(1);
      response = { ...updated, data: updated.data?.[0] ?? null };
    } else {
      response = await ctx.client.from('skill_reviews').insert(row).select('*').single();
    }
    if (reviewId && !response.error && !response.data) {
      // Resolve the existing row before inserting so an RLS response with no
      // returned data cannot create a duplicate-review conflict.
      const existingAfterUpdate = isStudent
        ? await ctx.client.from('skill_reviews').select('id').eq('skill_id', skillId).eq('student_id', studentId).is('coach_id', null).order('updated_at', { ascending: false }).limit(1)
        : await ctx.client.from('skill_reviews').select('id').eq('skill_id', skillId).eq('student_id', studentId).eq('coach_id', ctx.user.id).order('updated_at', { ascending: false }).limit(1);
      const resolvedId = existingAfterUpdate.data?.[0]?.id;
      if (resolvedId) {
        const retried = await ctx.client.from('skill_reviews').update(row).eq('id', resolvedId).select('*').limit(1);
        response = { ...retried, data: retried.data?.[0] ?? null };
      } else {
        response = await ctx.client.from('skill_reviews').insert(row).select('*').single();
      }
    }
    if (response.error) throw response.error;
    const savedReview = response.data ?? (reviewId ? { ...row, id: reviewId } : null);
    if (!savedReview) throw new Error('The feedback could not be confirmed. Please try saving it again.');
    const scoreField = isStudent ? 'student_satisfaction' : 'coach_satisfaction';
    const expectedScore = row[scoreField];
    const savedScore = savedReview[scoreField];
    if (expectedScore !== null && expectedScore !== undefined && Number(savedScore) !== Number(expectedScore)) {
      throw new Error('The satisfaction score was not confirmed. Please try saving it again.');
    }
    keepSavedSkillReview(studentId, savedReview as Row);
    try { await refreshSkillReviewsForStudent(studentId, savedReview as Row); }
    catch (refreshError) { console.warn('Saved skill review could not be reloaded immediately.', refreshError); }
    const scoreConfirmation = expectedScore !== null && expectedScore !== undefined ? ` Satisfaction score saved: ${savedScore}/10.` : '';
    if (coaching.planTab === submittedPlanTab) {
      ctx.setWorkspaceStatus(`${isStudent ? 'Your skill reflection was saved.' : 'Coach feedback was saved.'}${scoreConfirmation}`);
    }
    // Let the submit click finish before replacing the card that originated
    // it. This avoids a detached-button race on slower mobile browsers and
    // keeps the confirmation and selected skill group stable.
    window.setTimeout(() => {
      if (ctx) renderCoachingWorkspace();
    }, 0);
  } catch (error) {
    const message = friendlyWorkspaceError(error, 'Could not save this feedback.');
    const status = form.querySelector<HTMLElement>('[data-inline-review-status]');
    if (status) status.textContent = message;
    ctx.setWorkspaceStatus(message, true);
  } finally { setBusy(button, false); }
}

async function handleAdviceSubmit(event: SubmitEvent) {
  event.preventDefault();
  if (!ctx || ctx.profile.role === 'student' || !activeStudentId() || !requireSchema()) return;
  const form = event.currentTarget as HTMLFormElement;
  const data = new FormData(form);
  const id = textValue(data.get('id'));
  const adviceDate = textValue(data.get('advice_date'));
  const dueDate = textValue(data.get('due_date'));
  if (adviceDate && dueDate && dueDate < adviceDate) {
    setModalStatus('#advice-status', 'The due date must be on or after the advice date.', true);
    ctx.setWorkspaceStatus('The due date must be on or after the advice date.', true);
    return;
  }
  const row = {
    student_id: activeStudentId(), cohort_id: textValue(data.get('cohort_id')) || null,
    advice_date: adviceDate, title: textValue(data.get('title')),
    advice: textValue(data.get('advice')), due_date: dueDate || null,
    status: data.get('status'), ...(id ? {} : { author_id: ctx.user.id }),
  };
  const button = form.querySelector<HTMLButtonElement>('[type="submit"]');
  setBusy(button, true, 'Saving...');
  try {
    const query = id ? ctx.client.from('student_advice').update(row).eq('id', id) : ctx.client.from('student_advice').insert(row);
    const response = await query.select('*').single();
    if (response.error) throw response.error;
    coaching.advice = [...coaching.advice.filter((item) => item.id !== response.data.id), response.data];
    dialogClose('advice-dialog');
    ctx.setWorkspaceStatus(id ? 'Coach guidance updated.' : 'Coach guidance shared with the student.');
    renderCoachingWorkspace();
  } catch (error) { const message = friendlyWorkspaceError(error, 'Could not save the advice.'); setModalStatus('#advice-status', message, true); ctx.setWorkspaceStatus(message, true); }
  finally { setBusy(button, false); }
}

function dialogClose(id: string) { qs<HTMLDialogElement>(`#${id}`)?.close(); }

async function handleSessionSubmit(event: SubmitEvent) {
  event.preventDefault();
  if (!ctx || !activeStudentId() || ctx.profile.role === 'student' || !requireSchema()) return;
  const form = event.currentTarget as HTMLFormElement;
  const data = new FormData(form);
  const id = textValue(data.get('id'));
  const scheduledAt = textValue(data.get('scheduled_at'));
  const parsedScheduledAt = new Date(scheduledAt);
  if (!scheduledAt || Number.isNaN(parsedScheduledAt.getTime())) {
    setModalStatus('#individual-session-status', 'Choose a valid date and time for the session.', true);
    ctx.setWorkspaceStatus('Choose a valid date and time for the session.', true);
    return;
  }
  const row = {
    student_id: activeStudentId(), facilitator_id: data.get('facilitator_id'),
    scheduled_at: parsedScheduledAt.toISOString(),
    duration_minutes: numberValue(data.get('duration_minutes')) ?? 45,
    session_type: data.get('session_type'), status: data.get('status'), agenda: textValue(data.get('agenda')),
    student_summary: textValue(data.get('student_summary')), decisions: textValue(data.get('decisions')),
    ...(id ? {} : { created_by: ctx.user.id }),
  };
  const button = form.querySelector<HTMLButtonElement>('[type="submit"]');
  setBusy(button, true);
  try {
    const query = id ? ctx.client.from('coaching_sessions').update(row).eq('id', id) : ctx.client.from('coaching_sessions').insert(row);
    const response = await query.select('*').single();
    if (response.error) throw response.error;
    coaching.sessions = [...coaching.sessions.filter((item) => item.id !== id), response.data];
    qs<HTMLDialogElement>('#session-dialog')?.close();
    ctx.setWorkspaceStatus(id ? 'Session updated.' : 'Session scheduled.');
    renderCoachingWorkspace();
    ctx.renderOverview();
  } catch (error) { const message = friendlyWorkspaceError(error, 'Could not save the session.'); setModalStatus('#individual-session-status', message, true); ctx.setWorkspaceStatus(message, true); }
  finally { setBusy(button, false); }
}

async function handleActionSubmit(event: SubmitEvent) {
  event.preventDefault();
  if (!ctx || !activeStudentId() || !requireSchema()) return;
  const form = event.currentTarget as HTMLFormElement;
  const data = new FormData(form);
  const localStatus = form.id === 'student-action-form' ? '#student-action-status' : '#record-action-status';
  setModalStatus(localStatus, '');
  const weeklyPreset = textValue(data.get('weekly_hours_preset'));
  const weeklyCustom = textValue(data.get('weekly_hours_custom'));
  const selectedPresetKey = form.querySelector<HTMLSelectElement>('[data-action-preset]')?.value ?? '';
  const selectedPreset = actionPresets.find((preset) => preset.key === selectedPresetKey);
  const linkedCareerPathId = currentPrimaryCareer()?.id ?? null;
  if (weeklyPreset === 'custom' && (!weeklyCustom || Number(weeklyCustom) <= 0)) {
    setModalStatus(localStatus, 'Enter the weekly hours you can realistically maintain, or choose one of the five-hour options.', true);
    form.querySelector<HTMLInputElement>('input[name="weekly_hours_custom"]')?.focus();
    return;
  }
  const button = form.querySelector<HTMLButtonElement>('[type="submit"]');
  setBusy(button, true, 'Adding...');
  try {
    const weeklyHours = weeklyPreset === 'custom' ? weeklyCustom : weeklyPreset;
    const baseDetails = textValue(data.get('details'));
    const details = weeklyHours ? `${baseDetails}${baseDetails ? '\n\n' : ''}Weekly time available: ${weeklyHours} hours` : baseDetails;
    const response = await ctx.client.from('action_items').insert({
      user_id: activeStudentId(), title: textValue(data.get('title')), category: data.get('category') || 'learn',
      priority: data.get('priority') || 'normal', due_date: textValue(data.get('due_date')) || null,
      details, assigned_by: ctx.user.id,
      preset_key: selectedPreset?.key ?? null,
      milestone: selectedPreset?.milestone ?? null,
      estimated_minutes: selectedPreset?.estimatedMinutes ?? null,
      evidence_hint: selectedPreset?.evidenceHint ?? null,
      career_path_id: linkedCareerPathId,
      skill_id: textValue(data.get('skill_id')) || null,
    }).select('*').single();
    if (response.error) throw response.error;
    coaching.actions.push(response.data);
    form.reset();
    const customHours = form.querySelector<HTMLElement>('[data-weekly-hours-custom]');
    if (customHours) customHours.hidden = true;
    const customHoursInput = form.querySelector<HTMLInputElement>('input[name="weekly_hours_custom"]');
    if (customHoursInput) {
      customHoursInput.required = false;
      customHoursInput.value = '';
    }
    setModalStatus(localStatus, 'Action added.');
    ctx.setWorkspaceStatus('Action added.');
    renderCoachingWorkspace();
    ctx.renderOverview();
  } catch (error) {
    const message = friendlyWorkspaceError(error, 'Could not add the action.');
    setModalStatus(localStatus, message, true);
    ctx.setWorkspaceStatus(message, true);
  }
  finally { setBusy(button, false); }
}

async function toggleAction(id: string) {
  if (!ctx || !requireSchema()) return;
  const row = coaching.actions.find((item) => item.id === id);
  if (!row) return;
  const status = row.status === 'done' ? 'todo' : 'done';
  try {
    // Keep the local view consistent with the database trigger that records
    // when an action was completed. This also makes mocked/offline previews
    // show the same completion history as the live workspace.
    const response = ctx.profile.role === 'student'
      ? await ctx.client.rpc('set_action_completion', { target_action_id: id, target_status: status })
      : await ctx.client.from('action_items').update({
        status,
        completed_at: status === 'done' ? new Date().toISOString() : null,
      }).eq('id', id).select('*').single();
    if (response.error) throw response.error;
    const saved = response.data ?? { ...row, status, completed_at: status === 'done' ? new Date().toISOString() : null };
    coaching.actions = coaching.actions.map((item) => item.id === id ? saved : item);
    ctx.setWorkspaceStatus(status === 'done' ? 'Action marked complete.' : 'Action reopened.');
    renderCoachingWorkspace();
    ctx.renderOverview();
  } catch (error) {
    ctx.setWorkspaceStatus(friendlyWorkspaceError(error, 'Could not update the action. Please try again.'), true);
  }
}

async function toggleAdvice(id: string) {
  if (!ctx || ctx.profile.role !== 'student' || !requireSchema()) return;
  const row = coaching.advice.find((item) => item.id === id);
  if (!row) return;
  const status = row.status === 'done' ? 'open' : 'done';
  try {
    const response = await ctx.client.from('student_advice').update({ status }).eq('id', id).select('*').single();
    if (response.error) throw response.error;
    coaching.advice = coaching.advice.map((item) => item.id === id ? (response.data ?? { ...item, status }) : item);
    ctx.setWorkspaceStatus(status === 'done' ? 'Advice marked complete.' : 'Advice reopened.');
    renderCoachingWorkspace();
  } catch (error) {
    ctx.setWorkspaceStatus(friendlyWorkspaceError(error, 'Could not update the guidance. Please try again.'), true);
  }
}

type CoachingCollection = 'careers' | 'skills' | 'evidence' | 'sessions' | 'actions' | 'advice';

async function deleteRow(table: string, id: string, rows: CoachingCollection, message: string) {
  if (!ctx || !requireSchema()) return;
  const target = (coaching[rows] as Row[]).find((row) => row.id === id);
  const label = target?.title || target?.skill_name || target?.name || 'this record';
  const prompt = table === 'student_skills'
    ? `Remove “${label}” from this student's skill plan? Any linked evidence will also be removed.`
    : `Remove ${label}? This cannot be undone.`;
  if (!window.confirm(prompt)) return;
  try {
    const response = await ctx.client.from(table).delete().eq('id', id);
    if (response.error) throw response.error;
    (coaching[rows] as Row[]) = (coaching[rows] as Row[]).filter((row) => row.id !== id);
    if (table === 'student_skills') coaching.evidence = coaching.evidence.filter((row) => row.skill_id !== id);
    ctx.setWorkspaceStatus(message);
    renderCoachingWorkspace();
    ctx.renderOverview();
  } catch (error) {
    ctx.setWorkspaceStatus(friendlyWorkspaceError(error, 'Could not remove this record. Please try again.'), true);
  }
}

async function deleteCareerPath(id: string) {
  if (!ctx || !requireSchema()) return;
  const target = coaching.careers.find((row) => String(row.id) === String(id));
  if (!target) return;
  if (!window.confirm(`Remove ${target.title || 'this career option'}? Its career-specific skills will also be removed; shared Core skills will stay.`)) return;
  const linkedIds = coaching.skills
    .filter((skill) => String(skill.linked_career_path_id || '') === String(id))
    .map((skill) => String(skill.id));
  try {
    // Delete linked roadmap rows before the career. The database FK uses
    // ON DELETE SET NULL for safety, so deleting the career first would turn
    // these into orphaned skills that could leak into another direction.
    if (linkedIds.length) {
      const skillResponse = await ctx.client.from('student_skills').delete().eq('linked_career_path_id', id);
      if (skillResponse.error) throw skillResponse.error;
      coaching.skills = coaching.skills.filter((skill) => !linkedIds.includes(String(skill.id)));
      coaching.evidence = coaching.evidence.filter((evidence) => !linkedIds.includes(String(evidence.skill_id)));
    }
    const careerResponse = await ctx.client.from('career_paths').delete().eq('id', id);
    if (careerResponse.error) throw careerResponse.error;
    coaching.careers = coaching.careers.filter((career) => String(career.id) !== String(id));
    ctx.setWorkspaceStatus('Career option and its linked skills were removed.');
    renderCoachingWorkspace();
    ctx.renderOverview();
  } catch (error) {
    ctx.setWorkspaceStatus(friendlyWorkspaceError(error, 'Could not remove this career option. Please try again.'), true);
  }
}

async function downloadStudentBrief(options: {
  rootSelector?: string;
  buttonSelector?: string;
  filePrefix?: string;
  successMessage?: string;
} = {}) {
  if (!ctx || !activeStudentId()) return;
  const record = qs<HTMLElement>(options.rootSelector || '[data-workspace-view="student-record"]');
  const student = ctx.profileById(activeStudentId());
  if (!record || !student) return;
  const button = qs<HTMLButtonElement>(options.buttonSelector || '#download-student-brief');
  setBusy(button, true, 'Preparing...');
  try {
    const rawLines = (record.innerText || '')
      .split(/\r?\n/)
      .map((line) => line.replace(/\s+/g, ' ').trim())
      .filter((line) => line && !['Caseload', 'Print coaching brief', 'Download coaching brief', 'Download my plan'].includes(line));
    const lines = Array.from(new Set(rawLines)).slice(0, 240);
    if (!lines.length) throw new Error('No coaching record content is available.');
    const { jsPDF } = await import('jspdf');
    const pdf = new jsPDF({ unit: 'mm', format: 'a4' });
    const margin = 16;
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    let y = 18;
    const addText = (value: string, size: number, weight: 'normal' | 'bold' = 'normal', gap = 5) => {
      pdf.setFont('helvetica', weight);
      pdf.setFontSize(size);
      const wrapped = pdf.splitTextToSize(value, pageWidth - margin * 2) as string[];
      if (y + wrapped.length * (size * 0.42) + gap > pageHeight - 16) { pdf.addPage(); y = 18; }
      pdf.text(wrapped, margin, y);
      y += wrapped.length * (size * 0.42) + gap;
    };
    addText(`Future Career School · ${options.filePrefix === 'coaching-plan' ? 'Coaching plan' : 'Coaching brief'}`, 9, 'bold', 7);
    addText(String(student.full_name || student.email || 'Student'), 19, 'bold', 5);
    addText(`${ctx.formatRole(student.role)} · ${student.email || ''}`, 9, 'normal', 9);
    const heading = /^(Student coaching record|Coaching plan|Recent coaching activity|Career decisions|Skills and evidence|Cohort community|Follow-through|Student profile|Planning context|Verified by staff|Coaching record)/i;
    lines.forEach((line) => addText(line, heading.test(line) ? 11 : 8.5, heading.test(line) ? 'bold' : 'normal', 3.2));
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(7);
    pdf.text(`Generated ${new Date().toLocaleDateString('en-IN')}`, margin, pageHeight - 10);
    const safeName = String(student.full_name || 'student').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'student';
    pdf.save(`${options.filePrefix || 'coaching-brief'}-${safeName}.pdf`);
    ctx.setWorkspaceStatus(options.successMessage || 'Coaching brief downloaded.');
  } catch (error) {
    ctx.setWorkspaceStatus(friendlyWorkspaceError(error, 'Could not create the coaching brief.'), true);
  } finally {
    setBusy(button, false);
  }
}

function bindEvents() {
  if (bound) return;
  bound = true;
  const updateRatingSlider = (input: HTMLInputElement, selected = false) => {
    const shell = input.closest<HTMLElement>('[data-rating-slider-shell]');
    const output = shell?.querySelector<HTMLOutputElement>('output[data-rating-output]')
      || (input.dataset.ratingOutput ? document.getElementById(input.dataset.ratingOutput) as HTMLOutputElement | null : null);
    const presence = shell?.querySelector<HTMLInputElement>('[data-rating-presence]');
    const isSelected = selected || presence?.value === 'true';
    if (selected) {
      input.dataset.ratingTouched = 'true';
      if (presence) presence.value = 'true';
      input.closest<HTMLFormElement>('form')?.setAttribute('data-rating-dirty', 'true');
    }
    const minimum = Number(input.min || 0);
    const maximum = Number(input.max || 10);
    const numericValue = Number(input.value);
    const progress = Number.isFinite(numericValue) && maximum > minimum
      ? Math.max(0, Math.min(100, ((numericValue - minimum) / (maximum - minimum)) * 100))
      : 0;
    if (shell) {
      shell.style.setProperty('--rating-progress', `${progress}%`);
      shell.toggleAttribute('data-rating-empty', !isSelected);
    }
    input.setAttribute('aria-valuetext', isSelected ? `${input.value} out of 10` : 'No score selected');
    if (output) output.textContent = isSelected ? `${input.value}/10` : 'Choose a score';
  };
  const syncRatingSliders = () => qsa<HTMLInputElement>('input[data-rating-slider]').forEach((input) => updateRatingSlider(input));
  syncRatingSliders();
  // Skill cards are rendered after the workspace loads, so keep rating output
  // updates delegated instead of relying only on the initial query above.
  const handleRatingInput = (event: Event) => {
    const input = (event.target as Element | null)?.closest<HTMLInputElement>('input[data-rating-slider]');
    if (!input) return;
    updateRatingSlider(input, true);
    // The expanded reflection form keeps a visually compact compatibility
    // slider for keyboard and assistive technology users. Keep its canonical
    // hidden value in sync so FormData cannot read the stale score field first.
    if (input.classList.contains('legacy-rating-sync')) {
      const form = input.closest<HTMLFormElement>('form');
      const canonical = form?.querySelector<HTMLInputElement>(`input[type="hidden"][name="${input.name}"]`);
      if (canonical) canonical.value = input.value;
    }
    // A quick score may be followed immediately by Save guidance. Mirror it
    // into the expanded form as well, so that submission cannot redraw the
    // card before the debounced score request and lose the chosen value.
    if (input.closest('[data-quick-skill-rating]')) {
      const row = input.closest<HTMLElement>('.skill-roadmap-row, .skill-card');
      const legacy = row?.querySelector<HTMLInputElement>(`[data-inline-skill-review] input.legacy-rating-sync[name="${input.name}"]`);
      if (legacy) {
        legacy.value = input.value;
        legacy.dataset.ratingTouched = 'true';
        const canonical = legacy.closest<HTMLFormElement>('form')?.querySelector<HTMLInputElement>(`input[type="hidden"][name="${input.name}"]`);
        if (canonical) canonical.value = input.value;
      }
    }
    // Quick card ratings are deliberately saveable without opening the full
    // reflection editor. Debounce both input and change events so dragging,
    // clicking, or using the keyboard all persist the final value without a
    // request for every intermediate position.
    if ((event.type === 'input' || event.type === 'change') && input.closest('[data-quick-skill-rating]')) {
      const form = input.closest<HTMLFormElement>('[data-quick-skill-rating]');
      if (form) {
        const previousTimer = Number(form.dataset.ratingAutosaveTimer || 0);
        if (previousTimer) window.clearTimeout(previousTimer);
        const timer = window.setTimeout(() => {
          delete form.dataset.ratingAutosaveTimer;
          if (!form.matches(':disabled') && !form.querySelector<HTMLButtonElement>('[type="submit"]:disabled')) form.requestSubmit();
        }, 500);
        form.dataset.ratingAutosaveTimer = String(timer);
      }
    }
  };
  // Keep the compact score form and the expanded written-guidance form in
  // sync. Coaches often enter an observation and then adjust the score before
  // saving; the score request must not silently discard that observation.
  document.addEventListener('input', (event) => {
    const field = (event.target as Element | null)?.closest<HTMLInputElement | HTMLTextAreaElement>('[data-inline-skill-review] textarea, [data-inline-skill-review] input[name="coach_feedback"], [data-inline-skill-review] input[name="student_feedback"], [data-inline-skill-review] input[name="next_focus"]');
    if (!field) return;
    const row = field.closest<HTMLElement>('.skill-roadmap-row, .skill-card');
    const quick = row?.querySelector<HTMLFormElement>('[data-quick-skill-rating]');
    if (!quick) return;
    const name = field.name;
    const mirror = quick.querySelector<HTMLInputElement>(`input[type="hidden"][name="${name}"]`);
    if (mirror) mirror.value = field.value;
  });
  document.addEventListener('input', handleRatingInput);
  document.addEventListener('change', handleRatingInput);
  // A range already positioned at zero emits no input event when the user
  // clicks its left end. Pointer and keyboard activation make zero an
  // explicit, saveable rating just like every other value.
  document.addEventListener('pointerdown', handleRatingInput);
  document.addEventListener('click', handleRatingInput);
  document.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End', 'PageUp', 'PageDown'].includes(event.key)) return;
    handleRatingInput(event);
  });
  window.addEventListener('career-decision-page-ready', () => {
    const editId = new URLSearchParams(window.location.search).get('edit') || '';
    if (ctx && ctx.profile.role !== 'student' && !ctx.selectedStudentId) {
      try {
        const rawReturn = sessionStorage.getItem('fcs-career-return');
        const returnState = rawReturn ? JSON.parse(rawReturn) as { studentId?: string } : null;
        if (returnState?.studentId) {
          ctx.selectedStudentId = returnState.studentId;
          ctx.setSelectedStudentId(returnState.studentId);
        }
      } catch { /* ignore unavailable or malformed return state */ }
    }
    // A staff member may open the dedicated route directly (for example from
    // a bookmark) without a student record in context. Showing an empty
    // chooser in that case is misleading; return them to the caseload where
    // they can choose a student before opening career planning.
    if (ctx && ctx.profile.role !== 'student' && !ctx.selectedStudentId) {
      window.location.replace('/dashboard?view=caseload');
      return;
    }
    openCareerDialog(editId);
  });
  // The dashboard and coaching modules load asynchronously. If the ready
  // event fires before this module has a usable coaching context, keep the
  // dedicated route from appearing blank by opening it once the context is
  // available.
  const root = qs<HTMLElement>('#hierarchy-workspace');
  if (root?.dataset.careerDecisionPage === 'true') {
    let attempts = 0;
    const opener = window.setInterval(() => {
      attempts += 1;
      const dialog = qs<HTMLElement>('#career-option-dialog');
      if (ctx && dialog && dialog.hidden) {
        window.clearInterval(opener);
        if (ctx.profile.role !== 'student' && !ctx.selectedStudentId) {
          window.location.replace('/dashboard?view=caseload');
          return;
        }
        const editId = new URLSearchParams(window.location.search).get('edit') || '';
        openCareerDialog(editId);
      } else if (attempts >= 100 || dialog && !dialog.hidden) {
        window.clearInterval(opener);
      }
    }, 100);
  }
  window.addEventListener('career-decision-return', async (event) => {
    const detail = (event as CustomEvent<{ studentId?: string; tab?: string; message?: string }>).detail;
    if (!ctx || ctx.profile.role === 'student' || !detail?.studentId) return;
    await openCoachingRecord(detail.studentId);
    if (detail.tab) showRecordTab(detail.tab);
    if (detail.message) ctx.setWorkspaceStatus(detail.message);
  });
  window.addEventListener('popstate', () => {
    const dialog = qs<HTMLElement>('#career-option-dialog');
    if (dialog && !dialog.hidden && !window.location.pathname.endsWith('/career-decision')) dialog.hidden = true;
  });
  preparePresetControls();
  qs<HTMLFormElement>('#student-case-form')?.addEventListener('submit', handleCaseSubmit);
  qs<HTMLFormElement>('#career-option-form')?.addEventListener('submit', handleCareerSubmit);
  qs<HTMLFormElement>('#skill-form')?.addEventListener('submit', handleSkillSubmit);
  qs<HTMLFormElement>('#skill-plan-form')?.addEventListener('submit', handleSkillPlanSubmit);
  qs<HTMLFormElement>('#evidence-form')?.addEventListener('submit', handleEvidenceSubmit);
  qs<HTMLFormElement>('#skill-review-form')?.addEventListener('submit', handleSkillReviewSubmit);
  document.addEventListener('submit', (event) => {
    const form = (event.target as Element | null)?.closest<HTMLFormElement>('[data-inline-skill-review], [data-quick-skill-rating]');
    if (form) void handleInlineSkillReviewSubmit(event as SubmitEvent);
  });
  qs<HTMLFormElement>('#advice-form')?.addEventListener('submit', handleAdviceSubmit);
  qs<HTMLFormElement>('#session-form')?.addEventListener('submit', handleSessionSubmit);
  qsa<HTMLFormElement>('[data-coaching-action-form]').forEach((form) => form.addEventListener('submit', handleActionSubmit));
  document.addEventListener('click', (event) => {
    const featured = (event.target as Element | null)?.closest<HTMLButtonElement>('[data-action-featured]');
    if (!featured) return;
    const form = featured.closest<HTMLFormElement>('[data-coaching-action-form]');
    const select = form?.querySelector<HTMLSelectElement>('[data-action-preset]');
    if (!select) return;
    select.value = featured.dataset.actionFeatured || '';
    applyActionPreset(select);
    select.dispatchEvent(new Event('change', { bubbles: true }));
    form?.querySelector<HTMLInputElement>('[name="title"]')?.focus();
  });
  document.addEventListener('click', (event) => {
    const growthAction = (event.target as Element | null)?.closest<HTMLButtonElement>('[data-growth-action]');
    if (!growthAction || ctx?.profile.role !== 'student') return;
    const presetKey = growthAction.dataset.growthAction || '';
    showPlanTab('actions', true);
    const form = qs<HTMLFormElement>('#student-action-form');
    const select = form?.querySelector<HTMLSelectElement>('[data-action-preset]');
    if (!select || !presetKey) return;
    select.value = presetKey;
    applyActionPreset(select);
    select.dispatchEvent(new Event('change', { bubbles: true }));
    form?.querySelector<HTMLInputElement>('[name="title"]')?.focus();
  });
  // Give the plan tablist the expected keyboard behaviour as well as click
  // support. Arrow keys move between tabs; Home/End jump to the first/last.
  qsa<HTMLElement>('.student-plan-tabs[role="tablist"]').forEach((tablist) => {
    tablist.addEventListener('keydown', (event) => {
      const key = (event as KeyboardEvent).key;
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(key)) return;
      const tabs = Array.from(tablist.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
      if (!tabs.length) return;
      const current = Math.max(0, tabs.indexOf(document.activeElement as HTMLButtonElement));
      const next = key === 'Home' ? 0 : key === 'End' ? tabs.length - 1
        : (current + (key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      event.preventDefault();
      const tab = tabs[next];
      tab.focus();
      showPlanTab(tab.dataset.planTab ?? 'options', true);
    });
  });
  qsa<HTMLSelectElement>('[data-coaching-action-form] select[name="weekly_hours_preset"]').forEach((select) => select.addEventListener('change', () => {
    const custom = select.form?.querySelector<HTMLElement>('[data-weekly-hours-custom]');
    const input = select.form?.querySelector<HTMLInputElement>('input[name="weekly_hours_custom"]');
    const isCustom = select.value === 'custom';
    if (custom) custom.hidden = !isCustom;
    if (input) {
      input.required = isCustom;
      if (!isCustom) input.value = '';
    }
  }));
  qsa<HTMLSelectElement>('[data-action-preset]').forEach((select) => select.addEventListener('change', () => applyActionPreset(select)));
  qsa<HTMLSelectElement>('[name="weekly_hours_preset"]').forEach((select) => select.addEventListener('change', () => {
    const form = select.closest<HTMLFormElement>('form');
    if (form) updateActionTimeGuidance(form);
  }));
  qs<HTMLSelectElement>('#case-goal-preset')?.addEventListener('change', (event) => applyCaseGoalPreset(event.currentTarget as HTMLSelectElement));
  qs<HTMLSelectElement>('#progress-update-preset')?.addEventListener('change', (event) => applyProgressPreset(event.currentTarget as HTMLSelectElement));
  qs<HTMLSelectElement>('#evidence-preset')?.addEventListener('change', (event) => applyEvidencePreset(event.currentTarget as HTMLSelectElement));
  qs<HTMLSelectElement>('#note-template-preset')?.addEventListener('change', (event) => applyNotePreset(event.currentTarget as HTMLSelectElement));
  qs<HTMLSelectElement>('#academic-stream-preset')?.addEventListener('change', (event) => applyAcademicStreamPreset(event.currentTarget as HTMLSelectElement));
  const resetCaseloadPageAndRender = () => { resetWorkspacePagination(caseloadPagination); renderCaseload(); };
  qs<HTMLInputElement>('#caseload-search')?.addEventListener('input', resetCaseloadPageAndRender);
  qs<HTMLSelectElement>('#caseload-stage-filter')?.addEventListener('change', resetCaseloadPageAndRender);
  qs<HTMLSelectElement>('#caseload-cohort-filter')?.addEventListener('change', resetCaseloadPageAndRender);
  qs<HTMLSelectElement>('#caseload-attention-filter')?.addEventListener('change', resetCaseloadPageAndRender);
  const resetCareerPageAndRender = () => { careerLibraryPage = 1; renderCareerPresetResults(); };
  qs<HTMLInputElement>('#career-preset-search')?.addEventListener('input', resetCareerPageAndRender);
  qsa<HTMLButtonElement>('[data-career-interest]').forEach((button) => button.addEventListener('click', (event) => { event.preventDefault(); event.stopPropagation(); const selected = button.getAttribute('aria-pressed') === 'true'; const next = !selected; button.setAttribute('aria-pressed', String(next)); button.classList.toggle('is-selected', next); resetCareerPageAndRender(); }));
  qsa<HTMLElement>('[data-career-interest][role="button"]').forEach((button) => button.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); button.click(); } }));
  qsa<HTMLButtonElement>('[data-career-lens]').forEach((button) => button.addEventListener('click', () => {
    const selected = new Set((button.dataset.careerLens || '').split(',').map((value) => value.trim()).filter(Boolean));
    qsa<HTMLElement>('[data-career-interest]').forEach((button) => { const value = button.dataset.careerInterest ?? ''; const active = selected.has(value); button.setAttribute('aria-pressed', String(active)); button.classList.toggle('is-selected', active); });
    resetCareerPageAndRender();
  }));
  qs<HTMLSelectElement>('#career-study-stage')?.addEventListener('change', resetCareerPageAndRender);
  qs<HTMLSelectElement>('#career-preset-category')?.addEventListener('change', resetCareerPageAndRender);
  qs<HTMLSelectElement>('#career-preset-group')?.addEventListener('change', resetCareerPageAndRender);
  qs<HTMLSelectElement>('#career-preset-sort')?.addEventListener('change', resetCareerPageAndRender);
  const clearCareerFilters = () => {
    const search = qs<HTMLInputElement>('#career-preset-search');
    const category = qs<HTMLSelectElement>('#career-preset-category');
    const stage = qs<HTMLSelectElement>('#career-study-stage');
    const sort = qs<HTMLSelectElement>('#career-preset-sort');
    if (search) search.value = '';
    if (category) category.value = 'all';
    if (stage) stage.value = 'all';
    if (sort) sort.value = 'recommended';
    qsa<HTMLElement>('[data-career-interest]').forEach((button) => { button.setAttribute('aria-pressed', 'false'); button.classList.remove('is-selected'); });
    selectedCareerGuideKey = '';
    careerLibraryPage = 1;
    renderCareerPresetResults();
    search?.focus();
  };
  qs<HTMLButtonElement>('#career-clear-filters')?.addEventListener('click', clearCareerFilters);
  qs<HTMLButtonElement>('#career-open-custom')?.addEventListener('click', () => {
    const panel = qs<HTMLElement>('#career-custom-entry');
    const trigger = qs<HTMLButtonElement>('#career-open-custom');
    if (!panel || !trigger) return;
    const opening = panel.hidden;
    panel.hidden = !opening;
    trigger.setAttribute('aria-expanded', String(opening));
    if (opening) qs<HTMLInputElement>('#career-custom-name')?.focus();
  });
  qs<HTMLButtonElement>('#career-use-custom')?.addEventListener('click', () => {
    const name = qs<HTMLInputElement>('#career-custom-name');
    const category = qs<HTMLInputElement>('#career-custom-category');
    const title = qs<HTMLInputElement>('#career-option-form input[name="title"]');
    const family = qs<HTMLInputElement>('#career-option-form input[name="career_category"]');
    if (!name || !title || !family || !name.value.trim()) { name?.focus(); return; }
    title.value = name.value.trim();
    family.value = category?.value.trim() || 'Other';
    const preset = qs<HTMLInputElement>('#career-option-form input[name="preset_key"]');
    if (preset) preset.value = '';
    qs<HTMLElement>('#career-custom-entry')?.setAttribute('hidden', 'true');
    qs<HTMLButtonElement>('#career-open-custom')?.setAttribute('aria-expanded', 'false');
    document.getElementById('career-save-choice')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    qs<HTMLButtonElement>('#career-save-submit')?.focus();
  });
  qs<HTMLInputElement>('#skill-preset-search')?.addEventListener('input', renderSkillPresetResults);
  qs<HTMLSelectElement>('#skill-preset-category')?.addEventListener('change', renderSkillPresetResults);
  qs<HTMLInputElement>('#skill-pack-search')?.addEventListener('input', renderSkillPackResults);
  qs<HTMLSelectElement>('#skill-pack-group')?.addEventListener('change', () => {
    selectedSkillPackKey = '';
    renderSkillPackResults();
    const submit = qs<HTMLButtonElement>('#add-skill-pack');
    if (submit) submit.disabled = true;
  });
  qsa<HTMLInputElement>('#career-option-form input[name="option_type"]').forEach((input) => input.addEventListener('change', updateCareerFocusControl));
  qs<HTMLSelectElement>('#career-option-form select[name="decision_signal"]')?.addEventListener('change', updateCareerFocusControl);
  qs<HTMLButtonElement>('#print-student-brief')?.addEventListener('click', () => window.print());
  qs<HTMLButtonElement>('#download-student-brief')?.addEventListener('click', () => { void downloadStudentBrief(); });
  qs<HTMLButtonElement>('#download-student-plan')?.addEventListener('click', () => { void downloadStudentBrief({ rootSelector: '[data-workspace-view="career"]', buttonSelector: '#download-student-plan', filePrefix: 'coaching-plan', successMessage: 'Your coaching plan was downloaded.' }); });
  const backToTop = qs<HTMLButtonElement>('#career-back-to-top');
  if (backToTop) {
    const updateBackToTop = () => { backToTop.hidden = window.scrollY < 520; };
    window.addEventListener('scroll', updateBackToTop, { passive: true });
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    updateBackToTop();
  }
  document.addEventListener('click', (event) => {
    const target = event.target as Element;
    const careerAnchor = target.closest<HTMLElement>('[data-career-anchor]');
    if (careerAnchor) {
      const section = document.getElementById(careerAnchor.dataset.careerAnchor || '');
      section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    const reviewShortcut = target.closest<HTMLElement>('[data-career-review-days]');
    if (reviewShortcut) {
      const dateField = qs<HTMLInputElement>('#career-option-form input[name="decision_deadline"]');
      const days = Number(reviewShortcut.dataset.careerReviewDays || 0);
      if (dateField && days > 0) {
        const date = new Date();
        date.setHours(12, 0, 0, 0);
        date.setDate(date.getDate() + days);
        dateField.value = date.toISOString().slice(0, 10);
        dateField.dispatchEvent(new Event('change', { bubbles: true }));
      }
      return;
    }
    const careerPageGo = target.closest<HTMLElement>('[data-career-page-go]');
    if (careerPageGo) {
      applyCareerPageJump(careerPageGo.closest<HTMLElement>('[data-career-library-pagination], .career-library-pagination')?.querySelector<HTMLInputElement>('[data-career-page-jump]') ?? qs<HTMLInputElement>('[data-career-page-jump]'));
      return;
    }
    const careerPage = target.closest<HTMLElement>('[data-career-page]');
    if (careerPage) {
      if ((careerPage as HTMLButtonElement).disabled) return;
      const pageAction = careerPage.dataset.careerPage || ''; const totalPages = Number(careerPage.closest<HTMLElement>('[data-career-total-pages]')?.dataset.careerTotalPages || 1); careerLibraryPage = pageAction === 'first' ? 1 : pageAction === 'last' ? totalPages : careerLibraryPage + (pageAction === 'next' ? 1 : -1); careerLibraryPage = Math.max(1, Math.min(totalPages, careerLibraryPage));
      renderCareerPresetResults();
      qs<HTMLButtonElement>(`[data-career-page="${careerPage.dataset.careerPage || 'previous'}"]`)?.focus();
      return;
    }
    const careerPageNumber = target.closest<HTMLElement>('[data-career-page-number]');
    if (careerPageNumber) {
      const selectedPage = Number(careerPageNumber.dataset.careerPageNumber);
      if (Number.isFinite(selectedPage) && selectedPage > 0) {
        careerLibraryPage = selectedPage;
        renderCareerPresetResults();
        qs<HTMLButtonElement>(`[data-career-page-number="${selectedPage}"]`)?.focus();
      }
      return;
    }
    const careerPreset = target.closest<HTMLElement>('[data-career-preset]');
    if (careerPreset) { selectCareerGuide(careerPreset.dataset.careerPreset || ''); return; }
    if (target.closest('[data-career-clear-filters]')) {
      qs<HTMLButtonElement>('#career-clear-filters')?.click();
      return;
    }
    const compareCareer = target.closest<HTMLInputElement>('[data-compare-career]');
    if (compareCareer) { toggleCareerCompare(compareCareer.dataset.compareCareer || '', compareCareer.checked); return; }
    const removeCompared = target.closest<HTMLElement>('[data-remove-career-compare]');
    if (removeCompared) { toggleCareerCompare(removeCompared.dataset.removeCareerCompare || '', false); return; }
    if (target.closest('[data-clear-career-compare]')) { comparedCareerGuideKeys = []; renderCareerPresetResults(); return; }
    const chooseCareer = target.closest<HTMLElement>('[data-choose-career]');
    if (chooseCareer) { chooseAndSaveCareerPreset(chooseCareer.dataset.guideKey || '', (chooseCareer.dataset.chooseCareer || 'primary') as 'primary' | 'alternative'); return; }
    const addCareerSkills = target.closest<HTMLElement>('[data-add-career-skills]');
    if (addCareerSkills) {
      const career = coaching.careers.find((row) => row.id === addCareerSkills.dataset.addCareerSkills);
      if (!career) {
        ctx?.setWorkspaceStatus('This career option is no longer available. Refresh the student record and try again.', true);
        return;
      }
      const button = addCareerSkills as HTMLButtonElement;
      setBusy(button, true, 'Adding...');
      ctx?.setWorkspaceStatus('Adding a focused starter skill set for this career option...');
      void addHardSkillsForCareer(career).then((count) => {
        ctx?.setWorkspaceStatus(count ? 'Suggested skills added. You can edit or remove any of them from Skills to practise.' : 'Those suggested skills are already in this plan. You can edit or remove them from Skills to practise.');
        renderCoachingWorkspace();
      }).catch((error) => {
        setBusy(button, false);
        ctx?.setWorkspaceStatus(friendlyWorkspaceError(error, 'Could not add suggested skills.'), true);
      });
      return;
    }
    const skillPreset = target.closest<HTMLElement>('[data-skill-preset]');
    if (skillPreset) { applySkillPreset(skillPreset.dataset.skillPreset || ''); return; }
    const skillPack = target.closest<HTMLElement>('[data-skill-pack]');
    if (skillPack) { selectSkillPack(skillPack.dataset.skillPack || ''); return; }
    const openSkillPlan = target.closest<HTMLElement>('[data-open-skill-plan]');
    if (openSkillPlan) { openSkillPlanDialog(openSkillPlan.dataset.openSkillPlan || ''); return; }
    const recordTab = target.closest<HTMLElement>('[data-record-tab]');
    if (recordTab) { showRecordTab(recordTab.dataset.recordTab ?? 'summary'); return; }
    const skillScopeTab = target.closest<HTMLElement>('[data-skill-scope-tab]');
    if (skillScopeTab) { showSkillScopeTab(skillScopeTab.dataset.skillScopeTab ?? 'foundation', skillScopeTab); return; }
    const feedbackToggle = target.closest<HTMLButtonElement>('[data-toggle-skill-feedback]');
    if (feedbackToggle) {
      const editor = feedbackToggle.closest<HTMLElement>('.skill-feedback-editor');
      const panel = editor?.querySelector<HTMLElement>('[data-skill-feedback-panel]');
      if (panel) {
        const opening = panel.hidden;
        panel.hidden = !opening;
        feedbackToggle.setAttribute('aria-expanded', String(opening));
        if (opening) {
          window.setTimeout(() => panel.querySelector<HTMLInputElement | HTMLTextAreaElement>('input:not([type="hidden"]), textarea')?.focus(), 0);
        }
      }
      return;
    }
    const planStart = target.closest<HTMLElement>('[data-plan-start]');
    if (planStart) { showPlanTab(planStart.dataset.planStart ?? 'options'); return; }
    const planTab = target.closest<HTMLElement>('[data-plan-tab]');
    if (planTab) { showPlanTab(planTab.dataset.planTab ?? 'options', true); return; }
    if (target.closest('[data-focus-action-form]')) {
      if (ctx?.profile.role === 'student') showPlanTab('actions');
      else showRecordTab('actions');
      const selector = ctx?.profile.role === 'student' ? '#student-action-form input[name="title"]' : '#record-action-form input[name="title"]';
      qs<HTMLInputElement>(selector)?.focus();
      return;
    }
    const openCareer = target.closest<HTMLElement>('[data-open-career-dialog]');
    if (openCareer) {
      openCareerDialog();
      const desiredType = openCareer.dataset.careerOptionType;
      if (desiredType) {
        qsa<HTMLInputElement>('#career-option-form input[name="option_type"]').forEach((input) => { input.checked = input.value === desiredType; });
        updateCareerFocusControl();
      }
      return;
    }
    if (target.closest('[data-open-skill-dialog]')) { openSkillDialog(); return; }
    if (target.closest('[data-open-session-dialog]')) { openSessionDialog(); return; }
    const editCareer = target.closest<HTMLElement>('[data-edit-career]');
    if (editCareer) { openCareerDialog(editCareer.dataset.editCareer); return; }
    const deleteCareer = target.closest<HTMLElement>('[data-delete-career]');
    if (deleteCareer) { void deleteCareerPath(deleteCareer.dataset.deleteCareer!); return; }
    const editSkill = target.closest<HTMLElement>('[data-edit-skill]');
    if (editSkill) { openSkillDialog(editSkill.dataset.editSkill); return; }
    const deleteSkill = target.closest<HTMLElement>('[data-delete-skill]');
    if (deleteSkill) { void deleteRow('student_skills', deleteSkill.dataset.deleteSkill!, 'skills', 'Skill removed.'); return; }
    const addEvidence = target.closest<HTMLElement>('[data-add-evidence]');
    if (addEvidence) { openEvidenceDialog(addEvidence.dataset.addEvidence!); return; }
    const editEvidence = target.closest<HTMLElement>('[data-edit-evidence]');
    if (editEvidence) {
      const evidence = coaching.evidence.find((item) => item.id === editEvidence.dataset.editEvidence);
      if (evidence) openEvidenceDialog(evidence.skill_id, evidence.id);
      return;
    }
    const deleteEvidence = target.closest<HTMLElement>('[data-delete-evidence]');
    if (deleteEvidence) { void deleteRow('skill_evidence', deleteEvidence.dataset.deleteEvidence!, 'evidence', 'Evidence removed.'); return; }
    if (target.closest('[data-open-advice-dialog]')) { openAdviceDialog(); return; }
    const editAdvice = target.closest<HTMLElement>('[data-edit-advice]');
    if (editAdvice) { openAdviceDialog(editAdvice.dataset.editAdvice); return; }
    const deleteAdvice = target.closest<HTMLElement>('[data-delete-advice]');
    if (deleteAdvice) { void deleteRow('student_advice', deleteAdvice.dataset.deleteAdvice!, 'advice' as CoachingCollection, 'Coach guidance removed.'); return; }
    const editSession = target.closest<HTMLElement>('[data-edit-session]');
    if (editSession) { openSessionDialog(editSession.dataset.editSession); return; }
    const toggle = target.closest<HTMLElement>('[data-toggle-coaching-action]');
    if (toggle) { void toggleAction(toggle.dataset.toggleCoachingAction!); return; }
    const toggleAdviceButton = target.closest<HTMLElement>('[data-toggle-advice]');
    if (toggleAdviceButton) { void toggleAdvice(toggleAdviceButton.dataset.toggleAdvice!); return; }
    const removeAction = target.closest<HTMLElement>('[data-delete-coaching-action]');
    if (removeAction) void deleteRow('action_items', removeAction.dataset.deleteCoachingAction!, 'actions', 'Action removed.');
  });
  document.addEventListener('change', (event) => {
    const pageSizeSelect = (event.target as Element | null)?.closest<HTMLSelectElement>('[data-career-page-size]');
    if (pageSizeSelect) {
      const size = Number(pageSizeSelect.value);
      if (careerPageSizeOptions().includes(size)) {
        try { window.localStorage.setItem(CAREER_PAGE_SIZE_KEY, String(size)); } catch { /* storage may be unavailable */ }
        careerLibraryPage = 1;
        renderCareerPresetResults();
      }
      return;
    }
    const jump = (event.target as Element | null)?.closest<HTMLInputElement>('[data-career-page-jump]');
    if (!jump) return;
    applyCareerPageJump(jump);
  });
  document.addEventListener('keydown', (event) => {
    const jump = (event.target as Element | null)?.closest<HTMLInputElement>('[data-career-page-jump]');
    if (!jump || event.key !== 'Enter') return;
    // This input lives inside the career decision form. Preventing the parent
    // form submit keeps Enter focused on catalogue navigation rather than
    // accidentally saving an incomplete career choice or reloading the page.
    event.preventDefault();
    applyCareerPageJump(jump);
  });
}
