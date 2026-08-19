import { actionPresets, skillCategories, skillPresets } from '../data/coachingPresets';
import {
  academicStreamPresets,
  caseGoalPresets,
  careerGuideFor,
  decisionSignalOptions,
  evidenceTemplatePresets,
  guidedCareerCategories,
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
  decisionSignalFor,
  evidenceStrengthFor,
  getSkillPack,
  skillPackMatches,
  skillPackPreviewHtml,
  skillPackResultsHtml,
  skillRecommendationsHtml,
  skillRoadmapHtml,
  skillSummaryHtml,
} from './coachingDecisionUI';
import {
  cohortUpcomingCount,
  getCohortSessionsForStudent,
  getNextCohortSession,
  loadCohortWorkspace,
  refreshCohortWorkspace,
  renderCohortWorkspace,
} from './cohortWorkspace';

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
  constraintByStudent: (id: unknown) => Row | null;
  constraintValue: (value: unknown, fallback?: string) => string;
  constraintsScore: (constraint: Row | null) => number;
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
  academic: Row | null;
  notes: Row[];
  schemaReady: boolean;
  recordTab: string;
  planTab: string;
};

const coaching: CoachingState = {
  cases: [], careers: [], skills: [], evidence: [], sessions: [], actions: [],
  academic: null, notes: [], schemaReady: true, recordTab: 'summary', planTab: 'options',
};

let ctx: CoachingContext | null = null;
let bound = false;
let selectedCareerGuideKey = '';
let selectedSkillPackKey = '';

function qs<T extends Element>(selector: string) {
  return document.querySelector(selector) as T | null;
}

function qsa<T extends Element>(selector: string) {
  return Array.from(document.querySelectorAll(selector)) as T[];
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
    const field = form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
    if (!field) return;
    if (name.endsWith('_at') && field.type === 'datetime-local') field.value = toLocalInput(value);
    else if (Array.isArray(value)) field.value = value.join('\n');
    else field.value = value === null || value === undefined ? '' : String(value);
  });
}

async function queryRows(table: string, configure?: (query: any) => any) {
  if (!ctx) return [];
  let query = ctx.client.from(table).select('*');
  if (configure) query = configure(query);
  const { data, error } = await query;
  if (error) throw error;
  return data ?? [];
}

async function loadCoreData() {
  if (!ctx) return;
  const students = ctx.profiles.filter((profile) => profile.role === 'student');
  const studentIds = students.map((profile) => profile.id);
  if (!studentIds.length) {
    coaching.cases = [];
    coaching.careers = [];
    coaching.skills = [];
    coaching.evidence = [];
    coaching.sessions = [];
    coaching.actions = [];
    coaching.schemaReady = true;
    return;
  }

  try {
    const [cases, careers, skills, sessions, actions] = await Promise.all([
      queryRows('student_cases', (q) => q.in('student_id', studentIds)),
      queryRows('career_paths', (q) => q.in('user_id', studentIds).order('sort_order').order('updated_at', { ascending: false })),
      queryRows('student_skills', (q) => q.in('student_id', studentIds).order('priority').order('updated_at', { ascending: false })),
      queryRows('coaching_sessions', (q) => q.in('student_id', studentIds).order('scheduled_at', { ascending: false })),
      queryRows('action_items', (q) => q.in('user_id', studentIds).order('status').order('due_date')),
    ]);
    coaching.cases = cases;
    coaching.careers = careers;
    coaching.skills = skills;
    coaching.sessions = sessions;
    coaching.actions = actions;
    const skillIds = skills.map((skill: Row) => skill.id);
    coaching.evidence = skillIds.length
      ? await queryRows('skill_evidence', (q) => q.in('skill_id', skillIds).order('evidence_date', { ascending: false }))
      : [];
    coaching.schemaReady = true;
  } catch (error) {
    if (!isMissingSchema(error)) throw error;
    coaching.schemaReady = false;
    coaching.cases = students.map((student) => ({
      student_id: student.id,
      coaching_stage: 'intake',
      case_status: 'active',
      priority: 'standard',
      goal_summary: student.target_outcome ?? '',
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
  }
}

export async function loadCoachingWorkspace(context: CoachingContext) {
  ctx = context;
  await loadCoreData();
  await loadCohortWorkspace(context);
  bindEvents();
  renderCoachingWorkspace();
}

export async function refreshCoachingWorkspace(context: CoachingContext) {
  ctx = context;
  await loadCoreData();
  await refreshCohortWorkspace(context);
  renderCoachingWorkspace();
}

function needsAttention(studentId: string) {
  const caseRow = currentCase(studentId);
  const actions = rowsFor(coaching.actions, 'user_id', studentId);
  const skills = rowsFor(coaching.skills, 'student_id', studentId);
  const overdue = actions.some((item) => item.status !== 'done' && dueState(item.due_date) === 'overdue');
  const noSession = !getNextCohortSession(studentId);
  const reviewOverdue = caseRow?.next_review_at && new Date(caseRow.next_review_at) < new Date();
  const coreGap = skills.some((skill) => skill.priority === 'core' && skill.current_level < skill.target_level);
  return { overdue, noSession, reviewOverdue: Boolean(reviewOverdue), coreGap };
}

function nextSession(studentId: string) {
  return getNextCohortSession(studentId);
}

export function coachingOverviewMetrics() {
  if (!ctx || ctx.profile.role === 'student') return null;
  const students = ctx.profiles.filter((profile) => profile.role === 'student');
  const flags = students.map((student) => needsAttention(student.id));
  return {
    activeCases: students.filter((student) => currentCase(student.id)?.case_status !== 'completed').length,
    attention: flags.filter((flag) => flag.overdue || flag.noSession || flag.reviewOverdue || flag.coreGap).length,
    upcomingSessions: cohortUpcomingCount(),
    overdueActions: coaching.actions.filter((row) => row.status !== 'done' && dueState(row.due_date) === 'overdue').length,
  };
}

export function studentOverviewMetrics(studentId: string) {
  const actions = rowsFor(coaching.actions, 'user_id', studentId);
  const careers = rowsFor(coaching.careers, 'user_id', studentId);
  const skills = rowsFor(coaching.skills, 'student_id', studentId);
  return {
    careers: careers.filter((row) => !['ruled-out', 'paused'].includes(row.status)).length,
    shortlisted: careers.filter((row) => ['shortlisted', 'testing', 'selected'].includes(row.status)).length,
    skillGaps: skills.filter((row) => row.current_level < row.target_level).length,
    openActions: actions.filter((row) => row.status !== 'done').length,
    nextSession: nextSession(studentId),
    caseRow: currentCase(studentId),
  };
}

export function coachingAttentionItems(limit = 5) {
  if (!ctx || ctx.profile.role === 'student') return [];
  const students = ctx.profiles.filter((profile) => profile.role === 'student');
  const items: { student: Row; title: string; detail: string; severity: number }[] = [];
  students.forEach((student) => {
    const flags = needsAttention(student.id);
    const caseRow = currentCase(student.id);
    if (flags.overdue) items.push({ student, title: `${student.full_name} has overdue follow-through`, detail: 'Open the action plan and reset the next commitment.', severity: 4 });
    if (flags.reviewOverdue) items.push({ student, title: `${student.full_name} is due for review`, detail: `Review was due ${ctx?.formatDate(caseRow?.next_review_at)}.`, severity: 3 });
    if (flags.noSession) items.push({ student, title: `${student.full_name} has no cohort session announced`, detail: 'Open the cohort and communicate the next coaching session.', severity: 2 });
    if (flags.coreGap) items.push({ student, title: `${student.full_name} has a core skill gap`, detail: 'Connect development work to a career option.', severity: 1 });
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
  const attention = qs<HTMLSelectElement>('#caseload-attention-filter')?.value ?? 'all';
  const students = ctx.profiles.filter((profile) => {
    if (profile.role !== 'student') return false;
    const caseRow = currentCase(profile.id);
    const flags = needsAttention(profile.id);
    if (search && !`${profile.full_name} ${profile.email}`.toLowerCase().includes(search)) return false;
    if (stage !== 'all' && caseRow?.coaching_stage !== stage) return false;
    if (attention === 'needs-attention' && !Object.values(flags).some(Boolean)) return false;
    if (attention === 'overdue' && !flags.overdue) return false;
    if (attention === 'no-session' && !flags.noSession) return false;
    if (attention === 'skill-gaps' && !flags.coreGap) return false;
    return true;
  });

  const allStudents = ctx.profiles.filter((profile) => profile.role === 'student');
  const active = allStudents.filter((student) => currentCase(student.id)?.case_status !== 'completed').length;
  const flagged = allStudents.filter((student) => Object.values(needsAttention(student.id)).some(Boolean)).length;
  const upcoming = cohortUpcomingCount();
  const selected = coaching.careers.filter((row) => row.status === 'selected').length;
  summary.innerHTML = [
    ['Active cases', active, 'In coaching'],
    ['Need attention', flagged, 'Review or follow-through'],
    ['Upcoming sessions', upcoming, 'Visible scope'],
    ['Decisions made', selected, 'Selected directions'],
  ].map(([label, value, note]) => `<span><small>${ctx!.escapeHtml(label)}</small><strong>${value}</strong><em>${ctx!.escapeHtml(note)}</em></span>`).join('');

  body.innerHTML = students.map((student) => {
    const caseRow = currentCase(student.id) ?? {};
    const careers = rowsFor(coaching.careers, 'user_id', student.id);
    const options = careers.filter((row) => !['ruled-out', 'paused'].includes(row.status));
    const shortlisted = careers.filter((row) => ['shortlisted', 'testing', 'selected'].includes(row.status));
    const skills = rowsFor(coaching.skills, 'student_id', student.id);
    const skillGaps = skills.filter((row) => row.current_level < row.target_level);
    const actions = rowsFor(coaching.actions, 'user_id', student.id);
    const open = actions.filter((row) => row.status !== 'done');
    const overdue = open.filter((row) => dueState(row.due_date) === 'overdue');
    const session = nextSession(student.id);
    const coach = ctx!.profileById(student.supervisor_id);
    return `<tr>
      <td><span class="person-cell"><span class="avatar small">${ctx!.escapeHtml(ctx!.initials(student.full_name))}</span><span><strong>${ctx!.escapeHtml(student.full_name || 'Student')}</strong><small>${ctx!.escapeHtml(coach?.full_name ? `Coach: ${coach.full_name}` : student.email)}</small></span></span></td>
      <td><span class="stage-badge" data-stage="${ctx!.escapeHtml(caseRow.coaching_stage || 'intake')}">${ctx!.escapeHtml(ctx!.formatStatus(caseRow.coaching_stage || 'intake'))}</span><small class="cell-note">${ctx!.escapeHtml(ctx!.formatStatus(caseRow.priority || 'standard'))} priority</small></td>
      <td><strong>${options.length} option${options.length === 1 ? '' : 's'}</strong><small class="cell-note">${shortlisted.length} shortlisted or testing</small></td>
      <td><strong>${skills.length} tracked</strong><small class="cell-note${skillGaps.length ? ' is-warning' : ''}">${skillGaps.length} open gap${skillGaps.length === 1 ? '' : 's'}</small></td>
      <td><strong>${open.length} open</strong><small class="cell-note${overdue.length ? ' is-danger' : ''}">${overdue.length ? `${overdue.length} overdue` : 'On track'}</small></td>
      <td><strong>${ctx!.escapeHtml(session ? ctx!.formatDate(session.starts_at, true) : 'Not announced')}</strong><small class="cell-note">${ctx!.escapeHtml(session?.topic || (caseRow.next_review_at ? `Review ${ctx!.formatDate(caseRow.next_review_at)}` : 'No review date'))}</small></td>
      <td><button class="table-action" type="button" data-student-id="${ctx!.escapeHtml(student.id)}">Open coaching record</button></td>
    </tr>`;
  }).join('');
  empty.hidden = students.length > 0;
  const count = qs<HTMLElement>('#caseload-nav-count');
  if (count) count.textContent = String(allStudents.length);
}

function decisionUiContext() {
  if (!ctx) return null;
  return {
    escapeHtml: ctx.escapeHtml,
    formatDate: ctx.formatDate,
    formatStatus: ctx.formatStatus,
    userId: ctx.user.id,
    viewerRole: ctx.profile.role,
  };
}

function careerHtml(path: Row, editable = true) {
  const ui = decisionUiContext();
  return ui ? careerCardHtml(path, ui, editable) : '';
}

function sessionHtml(session: Row, editable: boolean) {
  if (!ctx) return '';
  const facilitator = ctx.profileById(session.facilitator_id);
  return `<article class="session-row" data-status="${ctx.escapeHtml(session.status)}">
    <time datetime="${ctx.escapeHtml(session.scheduled_at)}"><strong>${ctx.escapeHtml(ctx.formatDate(session.scheduled_at, true))}</strong><small>${session.duration_minutes} minutes</small></time>
    <span class="session-copy"><span><span class="status-badge" data-status="${ctx.escapeHtml(session.status)}">${ctx.escapeHtml(ctx.formatStatus(session.status))}</span><strong>${ctx.escapeHtml(ctx.formatStatus(session.session_type))}</strong></span><p>${ctx.escapeHtml(session.agenda || 'Agenda not recorded')}</p>${session.student_summary ? `<small>Outcome: ${ctx.escapeHtml(session.student_summary)}</small>` : ''}${session.decisions ? `<small>Decision: ${ctx.escapeHtml(session.decisions)}</small>` : ''}</span>
    <span class="session-owner"><strong>${ctx.escapeHtml(facilitator?.full_name || 'Coach')}</strong>${editable ? `<button class="table-action" type="button" data-edit-session="${ctx.escapeHtml(session.id)}">Edit</button>` : ''}</span>
  </article>`;
}

function actionHtml(item: Row) {
  if (!ctx) return '';
  const due = dueState(item.due_date);
  const assigned = ctx.profileById(item.assigned_by);
  const canRemove = ctx.profile.role !== 'student' || !item.assigned_by || item.assigned_by === ctx.user.id;
  return `<article class="coaching-action-row${item.status === 'done' ? ' is-done' : ''}" data-due-state="${due}">
    <button class="task-check" type="button" data-toggle-coaching-action="${ctx.escapeHtml(item.id)}" aria-label="${item.status === 'done' ? 'Mark incomplete' : 'Mark complete'}">${item.status === 'done' ? '✓' : ''}</button>
    <span><strong>${ctx.escapeHtml(item.title)}</strong><small>${ctx.escapeHtml(ctx.formatStatus(item.category))}${item.due_date ? ` · ${ctx.escapeHtml(ctx.formatDate(item.due_date))}` : ''}${assigned ? ` · Assigned by ${ctx.escapeHtml(assigned.full_name)}` : ''}</small>${item.details ? `<p>${ctx.escapeHtml(item.details)}</p>` : ''}</span>
    <span class="row-actions"><span class="priority-label" data-priority="${ctx.escapeHtml(item.priority)}">${ctx.escapeHtml(ctx.formatStatus(item.priority))}</span>${canRemove ? `<button class="table-action" type="button" data-delete-coaching-action="${ctx.escapeHtml(item.id)}">Remove</button>` : ''}</span>
  </article>`;
}

function careerFocusSummaryHtml(rows: Row[]) {
  if (!ctx) return '';
  const active = rows.filter((row) => !['ruled-out', 'paused'].includes(row.status));
  const primary = active.find((row) => row.option_type === 'primary');
  const primaryFocus = Number(primary?.focus_percentage ?? 0);
  const alternativeFocus = active.filter((row) => row.option_type !== 'primary').reduce((sum, row) => sum + Number(row.focus_percentage ?? 0), 0);
  const total = primaryFocus + alternativeFocus;
  const remaining = 100 - total;
  const stateLabel = !primary ? 'Choose one primary direction' : total > 100 ? `${total - 100}% over allocated` : `${remaining}% available`;
  return `<div class="focus-summary-copy"><span><small>Primary</small><strong>${ctx.escapeHtml(primary?.title || 'Not selected')}</strong><em>${primaryFocus}%</em></span><span><small>Alternatives</small><strong>${active.filter((row) => row.option_type !== 'primary').length} active</strong><em>${alternativeFocus}%</em></span><span data-allocation-state="${total > 100 ? 'over' : 'ready'}"><small>Allocation</small><strong>${ctx.escapeHtml(stateLabel)}</strong><em>${total}% total</em></span></div><div class="focus-allocation-bar" aria-label="${total}% of time and energy allocated"><i data-focus="primary" style="width:${Math.min(primaryFocus, 100)}%"></i><i data-focus="alternative" style="width:${Math.min(alternativeFocus, Math.max(0, 100 - primaryFocus))}%"></i><i data-focus="unallocated" style="width:${Math.max(0, remaining)}%"></i></div><p>Keep 50-90% of available time and energy on the primary direction. Alternatives should use only the deliberate remainder.</p>`;
}

function renderCareerLists(studentId: string) {
  if (!ctx) return;
  const rows = rowsFor(coaching.careers, 'user_id', studentId).sort((a, b) => (a.option_type === 'primary' ? -1 : b.option_type === 'primary' ? 1 : Number(b.focus_percentage ?? 0) - Number(a.focus_percentage ?? 0)));
  const primary = rows.filter((row) => row.option_type === 'primary');
  const alternatives = rows.filter((row) => row.option_type !== 'primary');
  const html = rows.length ? `<section class="career-option-group primary-group"><header><div><p class="eyebrow">Main commitment</p><h3>Primary direction</h3></div><span>50-90% focus</span></header>${primary.map((row) => careerHtml(row)).join('') || '<div class="career-group-empty"><strong>No primary direction yet</strong><span>Choose the option that deserves most of the current effort.</span></div>'}</section><section class="career-option-group alternative-group"><header><div><p class="eyebrow">Risk-managed exploration</p><h3>Alternatives</h3></div><span>Share the remainder</span></header>${alternatives.map((row) => careerHtml(row)).join('') || '<div class="career-group-empty"><strong>No alternatives yet</strong><span>Add only options worth testing or preserving.</span></div>'}</section>` : '<div class="empty-state coaching-empty"><strong>No career options yet.</strong><span>Add the first direction worth investigating. A title alone is enough to begin.</span></div>';
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
  const rows = rowsFor(coaching.skills, 'student_id', studentId);
  const careers = rowsFor(coaching.careers, 'user_id', studentId);
  const primary = careers.find((row) => row.option_type === 'primary');
  const ui = decisionUiContext();
  if (!ui) return;
  const html = skillRoadmapHtml(rows, coaching.evidence, careers, ui);
  const summary = skillSummaryHtml(rows, coaching.evidence, ctx.escapeHtml);
  const recommendations = skillRecommendationsHtml(primary?.career_category, ctx.escapeHtml);
  const record = qs<HTMLElement>('#record-skill-list');
  const student = qs<HTMLElement>('#student-skill-list');
  const recordSummary = qs<HTMLElement>('#record-skill-summary');
  const studentSummary = qs<HTMLElement>('#student-skill-summary');
  const recordRecommendations = qs<HTMLElement>('#record-skill-recommendations');
  const studentRecommendations = qs<HTMLElement>('#student-skill-recommendations');
  if (record) record.innerHTML = html;
  if (student) student.innerHTML = html;
  if (recordSummary) recordSummary.innerHTML = summary;
  if (studentSummary) studentSummary.innerHTML = summary;
  if (recordRecommendations) recordRecommendations.innerHTML = recommendations;
  if (studentRecommendations) studentRecommendations.innerHTML = recommendations;
}

function renderSessionLists(_studentId: string) {
  renderCohortWorkspace();
}

function renderActionLists(studentId: string) {
  const rows = rowsFor(coaching.actions, 'user_id', studentId);
  const html = rows.map(actionHtml).join('') || '<div class="empty-state coaching-empty"><strong>No actions yet.</strong><span>Turn one open question into a specific next move.</span></div>';
  const record = qs<HTMLElement>('#record-action-list');
  const student = qs<HTMLElement>('#student-action-list');
  if (record) record.innerHTML = html;
  if (student) student.innerHTML = html;
}

function renderStudentPlan() {
  if (!ctx || ctx.profile.role !== 'student') return;
  const studentId = ctx.profile.id;
  const caseRow = currentCase(studentId) ?? {};
  const metrics = studentOverviewMetrics(studentId);
  const summary = qs<HTMLElement>('#student-plan-summary');
  if (summary) {
    summary.innerHTML = `<span><small>Coaching stage</small><strong>${ctx.escapeHtml(ctx.formatStatus(caseRow.coaching_stage || 'intake'))}</strong></span><span><small>Goal</small><strong>${ctx.escapeHtml(caseRow.goal_summary || ctx.profile.target_outcome || 'Set with your coach')}</strong></span><span><small>Next session</small><strong>${ctx.escapeHtml(metrics.nextSession ? ctx.formatDate(metrics.nextSession.starts_at, true) : 'Not announced')}</strong></span><span><small>Decision deadline</small><strong>${ctx.escapeHtml(caseRow.decision_deadline ? ctx.formatDate(caseRow.decision_deadline) : 'Not set')}</strong></span>`;
  }
  renderCareerLists(studentId);
  renderSkillLists(studentId);
  renderSessionLists(studentId);
  renderActionLists(studentId);
}

function renderDecisionSummary(studentId: string) {
  if (!ctx) return;
  const container = qs<HTMLElement>('#record-decision-summary');
  if (!container) return;
  const careers = rowsFor(coaching.careers, 'user_id', studentId);
  const skills = rowsFor(coaching.skills, 'student_id', studentId);
  const actions = rowsFor(coaching.actions, 'user_id', studentId);
  const primary = careers.find((row) => row.option_type === 'primary');
  const session = nextSession(studentId);
  const signal = decisionSignalOptions.find((option) => option.value === decisionSignalFor(primary ?? {}));
  const evidenceCount = coaching.evidence.filter((evidence) => skills.some((skill) => skill.id === evidence.skill_id)).length;
  const priorityGap = skills
    .filter((row) => Number(row.current_level) < Number(row.target_level))
    .sort((a, b) => (a.priority === 'core' ? -1 : b.priority === 'core' ? 1 : 0))[0];
  const open = actions.filter((row) => row.status !== 'done');
  container.innerHTML = `<article><small>Primary direction</small><strong>${ctx.escapeHtml(primary?.title || 'Choose a primary direction')}</strong><span>${ctx.escapeHtml(primary ? signal?.label || 'Needs evidence' : `${careers.length} option${careers.length === 1 ? '' : 's'} mapped`)}</span></article><article><small>Priority capability</small><strong>${ctx.escapeHtml(priorityGap?.skill_name || 'Add a balanced skill plan')}</strong><span>${evidenceCount} proof item${evidenceCount === 1 ? '' : 's'} across ${skills.length} skills</span></article><article><small>Follow-through</small><strong>${open.length} open action${open.length === 1 ? '' : 's'}</strong><span>${open.filter((row) => dueState(row.due_date) === 'overdue').length} overdue</span></article><article><small>Next cohort session</small><strong>${ctx.escapeHtml(session ? ctx.formatDate(session.starts_at, true) : 'Not announced')}</strong><span>${ctx.escapeHtml(session?.topic || 'Open the cohort to announce')}</span></article>`;
}

function renderTimeline(studentId: string) {
  if (!ctx) return;
  const container = qs<HTMLElement>('#record-timeline');
  if (!container) return;
  const events: { at: string; label: string; detail: string; type: string }[] = [];
  getCohortSessionsForStudent(studentId).forEach((row) => events.push({ at: row.starts_at, label: row.topic, detail: row.student_summary || row.agenda || ctx!.formatStatus(row.status), type: row.status }));
  rowsFor(coaching.careers, 'user_id', studentId).forEach((row) => events.push({ at: row.updated_at || row.created_at, label: `${row.title}: ${ctx!.formatStatus(row.status)}`, detail: row.next_step || 'Career option updated', type: 'career' }));
  rowsFor(coaching.actions, 'user_id', studentId).filter((row) => row.status === 'done').forEach((row) => events.push({ at: row.completed_at || row.updated_at, label: `Completed: ${row.title}`, detail: ctx!.formatStatus(row.category), type: 'done' }));
  container.innerHTML = events.sort((a, b) => new Date(b.at).getTime() - new Date(a.at).getTime()).slice(0, 8).map((event) => `<article><time>${ctx!.escapeHtml(ctx!.formatDate(event.at, true))}</time><span class="timeline-marker" data-type="${ctx!.escapeHtml(event.type)}"></span><span><strong>${ctx!.escapeHtml(event.label)}</strong><small>${ctx!.escapeHtml(event.detail)}</small></span></article>`).join('') || '<div class="empty-state">No coaching movement recorded yet.</div>';
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
  renderTimeline(studentId);
  renderCareerLists(studentId);
  renderSkillLists(studentId);
  renderSessionLists(studentId);
  renderActionLists(studentId);
  ctx.renderCoachNotes(coaching.notes);
}

export function renderCoachingWorkspace() {
  if (!ctx) return;
  renderCaseload();
  renderStudentPlan();
  renderStudentRecord();
  renderCohortWorkspace();
  const warning = qs<HTMLElement>('#coaching-schema-warning');
  if (warning) warning.hidden = coaching.schemaReady;
}

async function loadStudentDetail(studentId: string) {
  if (!ctx) return;
  ctx.setWorkspaceStatus('Loading coaching record...');
  try {
    const [constraintResponse, academicResponse, noteResponse] = await Promise.all([
      ctx.client.from('student_constraints').select('*').eq('student_id', studentId).maybeSingle(),
      ctx.client.from('student_academic_records').select('*').eq('student_id', studentId).maybeSingle(),
      ctx.client.from('coach_notes').select('*').eq('student_id', studentId).order('created_at', { ascending: false }),
    ]);
    const error = [constraintResponse.error, academicResponse.error, noteResponse.error].find(Boolean);
    if (error) throw error;
    const constraint = constraintResponse.data ?? null;
    const existing = ctx.constraintByStudent(studentId);
    if (constraint && existing) Object.assign(existing, constraint);
    coaching.academic = academicResponse.data ?? null;
    coaching.notes = noteResponse.data ?? [];
    renderContext(studentId, constraint);
    ctx.setWorkspaceStatus('');
  } catch (error) {
    ctx.setWorkspaceStatus(error instanceof Error ? error.message : 'Could not load the coaching record.', true);
  }
}

function renderContext(studentId: string, constraint: Row | null) {
  if (!ctx) return;
  const definition = qs<HTMLElement>('#record-constraints');
  if (definition) {
    const fields = [
      ['Context completeness', `${ctx.constraintsScore(constraint)}%`],
      ['Budget', constraint?.budget_range], ['Hours per week', constraint?.available_hours_per_week],
      ['Maximum commute', constraint?.max_commute_minutes ? `${constraint.max_commute_minutes} minutes` : null], ['Relocate', constraint?.willing_to_relocate],
      ['Device access', constraint?.device_access], ['Internet access', constraint?.internet_access],
      ['Family expectations', constraint?.family_expectations], ['Responsibilities', constraint?.work_or_care_responsibilities],
      ['Education timeline', constraint?.education_timeline], ['Risk comfort', constraint?.risk_tolerance],
      ['Study abroad', constraint?.study_abroad_interest], ['Non-negotiables', constraint?.non_negotiables],
      ['Accessibility', constraint?.accessibility_support], ['Health or schedule', constraint?.schedule_or_health_considerations],
    ];
    definition.innerHTML = fields.map(([label, value]) => `<dl class="definition-item"><dt>${ctx!.escapeHtml(label)}</dt><dd>${ctx!.escapeHtml(ctx!.constraintValue(value))}</dd></dl>`).join('');
  }
  const form = qs<HTMLFormElement>('#academic-form');
  if (form) {
    form.reset();
    const academic = coaching.academic ?? {};
    setFormValues(form, { ...academic, exam_targets: (academic.exam_targets ?? []).join(', ') });
  }
}

export async function openCoachingRecord(studentId: string) {
  if (!ctx) return;
  const student = ctx.profileById(studentId);
  if (!student || student.role !== 'student') return;
  ctx.selectedStudentId = studentId;
  ctx.setSelectedStudentId(studentId);
  coaching.recordTab = 'summary';
  showRecordTab('summary');
  ctx.openView('student-record');
  renderStudentRecord();
  await loadStudentDetail(studentId);
  renderStudentRecord();
}

export function backToCaseload() {
  ctx?.openView('caseload');
}

function showRecordTab(tab: string) {
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

function showPlanTab(tab: string) {
  coaching.planTab = tab;
  qsa<HTMLButtonElement>('[data-plan-tab]').forEach((button) => {
    const active = button.dataset.planTab === tab;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-selected', String(active));
  });
  qsa<HTMLElement>('[data-plan-pane]').forEach((pane) => {
    const active = pane.dataset.planPane === tab;
    pane.hidden = !active;
    pane.classList.toggle('is-active', active);
  });
}

function requireSchema() {
  if (coaching.schemaReady) return true;
  ctx?.setWorkspaceStatus('The coaching database upgrade is prepared locally but has not been applied to Supabase yet.', true);
  return false;
}

const recommendedSkillKeys = new Set([
  'clear-writing', 'presentation-skills', 'critical-thinking', 'problem-framing',
  'spreadsheet-fundamentals', 'digital-collaboration', 'career-research', 'time-management',
  'professional-networking', 'learning-how-to-learn', 'self-awareness', 'reliability',
]);

function addPresetOptions(select: HTMLSelectElement | null, html: string) {
  if (!select || select.dataset.prepared === 'true') return;
  select.insertAdjacentHTML('beforeend', html);
  select.dataset.prepared = 'true';
}

function preparePresetControls() {
  if (!ctx) return;
  addPresetOptions(qs<HTMLSelectElement>('#career-preset-category'), guidedCareerCategories.map((category) => `<option value="${ctx!.escapeHtml(category)}">${ctx!.escapeHtml(category)}</option>`).join(''));
  addPresetOptions(qs<HTMLSelectElement>('#skill-preset-category'), skillCategories.map((category) => `<option value="${ctx!.escapeHtml(category)}">${ctx!.escapeHtml(ctx!.formatStatus(category))}</option>`).join(''));
  addPresetOptions(qs<HTMLSelectElement>('#case-goal-preset'), caseGoalPresets.map((preset) => `<option value="${preset.key}">${ctx!.escapeHtml(preset.label)}</option>`).join(''));
  addPresetOptions(qs<HTMLSelectElement>('#progress-update-preset'), progressUpdatePresets.map((preset) => `<option value="${preset.key}">${ctx!.escapeHtml(preset.label)}</option>`).join(''));
  addPresetOptions(qs<HTMLSelectElement>('#evidence-preset'), evidenceTemplatePresets.map((preset) => `<option value="${preset.key}">${ctx!.escapeHtml(preset.label)}</option>`).join(''));
  addPresetOptions(qs<HTMLSelectElement>('#note-template-preset'), noteTemplatePresets.map((preset) => `<option value="${preset.key}">${ctx!.escapeHtml(preset.label)}</option>`).join(''));
  addPresetOptions(qs<HTMLSelectElement>('#academic-stream-preset'), academicStreamPresets.map((stream) => `<option value="${ctx!.escapeHtml(stream)}">${ctx!.escapeHtml(stream)}</option>`).join(''));
  qsa<HTMLSelectElement>('[data-action-preset]').forEach((select) => {
    if (select.dataset.prepared === 'true') return;
    const groups = ['explore', 'learn', 'build', 'connect', 'apply', 'decide'];
    select.insertAdjacentHTML('beforeend', groups.map((group) => `<optgroup label="${ctx!.escapeHtml(ctx!.formatStatus(group))}">${actionPresets.filter((preset) => preset.category === group).map((preset) => `<option value="${preset.key}">${ctx!.escapeHtml(preset.title)} (${preset.dueDays} days)</option>`).join('')}</optgroup>`).join(''));
    select.dataset.prepared = 'true';
  });
}

function renderCareerPresetResults() {
  if (!ctx) return;
  const container = qs<HTMLElement>('#career-preset-results');
  const count = qs<HTMLElement>('#career-preset-count');
  const query = qs<HTMLInputElement>('#career-preset-search')?.value ?? '';
  const category = qs<HTMLSelectElement>('#career-preset-category')?.value ?? 'featured';
  if (!container) return;
  const matches = careerLibraryMatches(query, category);
  const limit = query ? 40 : category === 'featured' ? 18 : 30;
  container.innerHTML = careerLibraryResultsHtml(matches, selectedCareerGuideKey, ctx.escapeHtml, limit);
  if (count) count.textContent = `${matches.length} useful match${matches.length === 1 ? '' : 'es'}${matches.length > limit ? ` / showing ${limit}` : ''}`;
}

function selectCareerGuide(key: string) {
  if (!ctx) return;
  const guide = careerGuideFor(key);
  const preview = qs<HTMLElement>('#career-guide-preview');
  if (!guide || !preview) return;
  selectedCareerGuideKey = key;
  renderCareerPresetResults();
  preview.innerHTML = careerGuidePreviewHtml(guide, ctx.escapeHtml);
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
  const limit = query ? 40 : category === 'featured' ? 12 : 30;
  container.innerHTML = matches.slice(0, limit).map((preset) => `<button type="button" data-skill-preset="${preset.key}"><strong>${ctx!.escapeHtml(preset.title)}</strong><small>${ctx!.escapeHtml(ctx!.formatStatus(preset.category))}</small><p>${ctx!.escapeHtml(preset.developmentGoal)}</p></button>`).join('') || '<div class="preset-empty">No matching skill. Enter a specific skill below.</div>';
  if (count) count.textContent = `${matches.length} match${matches.length === 1 ? '' : 'es'}${matches.length > limit ? ` / showing ${limit}` : ''}`;
}

function applyCareerPreset(key: string, choice: 'primary' | 'testing' | 'alternative' = 'testing') {
  const guide = careerGuideFor(key);
  const form = qs<HTMLFormElement>('#career-option-form');
  if (!guide || !form) return;
  const decisionSignal = choice === 'primary' ? 'ready-to-pursue' : choice === 'alternative' ? 'deliberate-alternative' : 'promising-to-test';
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
    review_question: `What real-world evidence would confirm or challenge ${guide.title} as the right direction?`,
    status: decisionSignalOptions.find((option) => option.value === decisionSignal)?.status || 'exploring',
  });
  form.querySelectorAll<HTMLInputElement>('input[name="option_type"]').forEach((input) => { input.checked = input.value === optionType; });
  const range = qs<HTMLInputElement>('#career-focus-range');
  if (range) range.value = optionType === 'primary' ? '70' : '15';
  updateCareerFocusControl();
  form.querySelector<HTMLInputElement>('input[name="title"]')?.focus();
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

function existingSkillNames() {
  return new Set(rowsFor(coaching.skills, 'student_id').map((skill) => String(skill.skill_name).toLowerCase()));
}

function renderSkillPackResults() {
  if (!ctx) return;
  const container = qs<HTMLElement>('#skill-pack-results');
  if (!container) return;
  const query = qs<HTMLInputElement>('#skill-pack-search')?.value ?? '';
  const group = qs<HTMLSelectElement>('#skill-pack-group')?.value ?? 'recommended';
  const matches = skillPackMatches(query, group, currentPrimaryCareer()?.career_category);
  container.innerHTML = skillPackResultsHtml(matches, selectedSkillPackKey, ctx.escapeHtml);
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

function availableAlternativeFocus(editingId = '') {
  const studentId = activeStudentId();
  if (!studentId) return 0;
  const used = rowsFor(coaching.careers, 'user_id', studentId)
    .filter((row) => row.id !== editingId && !['ruled-out', 'paused'].includes(row.status))
    .reduce((sum, row) => sum + Number(row.focus_percentage ?? 0), 0);
  return Math.max(0, 100 - used);
}

function updateCareerFocusControl() {
  const form = qs<HTMLFormElement>('#career-option-form');
  const range = qs<HTMLInputElement>('#career-focus-range');
  const output = qs<HTMLOutputElement>('#career-focus-output');
  const guidance = qs<HTMLElement>('#career-focus-guidance');
  if (!form || !range || !output || !guidance) return;
  const type = (form.elements.namedItem('option_type') as RadioNodeList).value || 'alternative';
  const decision = form.elements.namedItem('decision_signal') as HTMLSelectElement;
  if (type === 'primary') {
    range.min = '50';
    range.max = '90';
    if (Number(range.value) < 50) range.value = '70';
    guidance.textContent = 'Put most available time and energy here: usually 50-80%, and up to 90% when the evidence is strong.';
    Array.from(decision.options).forEach((option) => { option.disabled = ['deliberate-alternative', 'not-now'].includes(option.value); });
    if (['deliberate-alternative', 'not-now'].includes(decision.value)) decision.value = 'needs-evidence';
  } else {
    const maxFocus = Math.min(50, availableAlternativeFocus((form.elements.namedItem('id') as HTMLInputElement).value));
    range.min = '0';
    range.max = String(maxFocus);
    if (Number(range.value) > maxFocus) range.value = String(Math.min(15, maxFocus));
    guidance.textContent = `${maxFocus}% remains available for this alternative after the other active options.`;
    Array.from(decision.options).forEach((option) => { option.disabled = false; });
  }
  output.value = `${range.value}%`;
  const mappedStatus = decisionSignalOptions.find((option) => option.value === decision.value)?.status || 'exploring';
  (form.elements.namedItem('status') as HTMLInputElement).value = mappedStatus;
  if (decision.value === 'not-now' && type === 'alternative') range.value = '0';
  output.value = `${range.value}%`;
}

function emptyCareerPreview() {
  return '<div class="career-guide-empty"><strong>Choose a career to see the real work</strong><span>Daily tasks, entry routes, future change, skill requirements, watch-outs, and practical tests appear here.</span></div>';
}

function openCareerDialog(id = '') {
  if (!ctx || !activeStudentId() || !requireSchema()) return;
  const form = qs<HTMLFormElement>('#career-option-form');
  const dialog = qs<HTMLDialogElement>('#career-option-dialog');
  if (!form || !dialog) return;
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
  const type = row?.option_type || (rowsFor(coaching.careers, 'user_id', activeStudentId()).some((item) => item.option_type === 'primary') ? 'alternative' : 'primary');
  form.querySelectorAll<HTMLInputElement>('input[name="option_type"]').forEach((input) => { input.checked = input.value === type; });
  const range = qs<HTMLInputElement>('#career-focus-range');
  if (range) range.value = String(row?.focus_percentage ?? (type === 'primary' ? 70 : 15));
  const picker = qs<HTMLElement>('#career-preset-picker');
  if (picker) picker.hidden = Boolean(row);
  const search = qs<HTMLInputElement>('#career-preset-search');
  const category = qs<HTMLSelectElement>('#career-preset-category');
  if (search) search.value = '';
  if (category) category.value = 'featured';
  selectedCareerGuideKey = row?.preset_key ?? '';
  renderCareerPresetResults();
  const preview = qs<HTMLElement>('#career-guide-preview');
  if (preview) preview.innerHTML = guide ? careerGuidePreviewHtml(guide, ctx.escapeHtml) : emptyCareerPreview();
  updateCareerFocusControl();
  const title = qs<HTMLElement>('#career-dialog-title');
  if (title) title.textContent = row ? 'Edit career decision' : 'Add career decision';
  dialog.showModal();
}

function fillLinkedCareerOptions(select: HTMLSelectElement, selectedId = '') {
  if (!ctx) return;
  const careers = rowsFor(coaching.careers, 'user_id');
  select.innerHTML = `<option value="">Applies across careers</option>${careers.map((career) => `<option value="${ctx!.escapeHtml(career.id)}">${ctx!.escapeHtml(career.title)} / ${ctx!.escapeHtml(career.option_type === 'primary' ? 'Primary' : 'Alternative')}</option>`).join('')}`;
  select.value = selectedId;
}

function openSkillDialog(id = '') {
  if (!ctx || !activeStudentId() || !requireSchema()) return;
  const form = qs<HTMLFormElement>('#skill-form');
  const dialog = qs<HTMLDialogElement>('#skill-dialog');
  const linkedCareer = qs<HTMLSelectElement>('#skill-linked-career');
  if (!form || !dialog || !linkedCareer) return;
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
  dialog.showModal();
}

function openSkillPlanDialog(initialKey = '') {
  if (!ctx || !activeStudentId() || !requireSchema()) return;
  const form = qs<HTMLFormElement>('#skill-plan-form');
  const dialog = qs<HTMLDialogElement>('#skill-plan-dialog');
  if (!form || !dialog) return;
  form.reset();
  const search = qs<HTMLInputElement>('#skill-pack-search');
  const group = qs<HTMLSelectElement>('#skill-pack-group');
  if (search) search.value = '';
  if (group) group.value = 'recommended';
  const primary = currentPrimaryCareer();
  const context = qs<HTMLElement>('#skill-plan-context');
  if (context) context.innerHTML = `<span><small>Primary direction</small><strong>${ctx.escapeHtml(primary?.title || 'Not chosen yet')}</strong></span><span><small>Current roadmap</small><strong>${rowsFor(coaching.skills, 'student_id').length} skills</strong></span><span><small>Approach</small><strong>Foundation + specialist + future-ready</strong></span>`;
  const defaultPack = getSkillPack(initialKey) || skillPackMatches('', 'recommended', primary?.career_category)[0] || null;
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

function openEvidenceDialog(skillId: string) {
  if (!ctx || !requireSchema()) return;
  const skill = coaching.skills.find((row) => row.id === skillId);
  const form = qs<HTMLFormElement>('#evidence-form');
  const dialog = qs<HTMLDialogElement>('#evidence-dialog');
  if (!skill || !form || !dialog) return;
  form.reset();
  preparePresetControls();
  (form.elements.namedItem('skill_id') as HTMLInputElement).value = skillId;
  (form.elements.namedItem('evidence_date') as HTMLInputElement).value = new Date().toISOString().slice(0, 10);
  const preset = qs<HTMLSelectElement>('#evidence-preset');
  if (preset) preset.value = '';
  const context = qs<HTMLElement>('#evidence-skill-name');
  if (context) context.textContent = skill.skill_name;
  dialog.showModal();
}

function openSessionDialog(id = '') {
  if (!ctx || ctx.profile.role === 'student' || !activeStudentId() || !requireSchema()) return;
  const form = qs<HTMLFormElement>('#session-form');
  const dialog = qs<HTMLDialogElement>('#session-dialog');
  const facilitator = qs<HTMLSelectElement>('#session-facilitator');
  if (!form || !dialog || !facilitator) return;
  form.reset();
  const staff = ctx.profiles.filter((profile) => profile.role !== 'student' && profile.account_status === 'active');
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
    next_review_at: textValue(data.get('next_review_at')) ? new Date(textValue(data.get('next_review_at'))).toISOString() : null,
    goal_summary: textValue(data.get('goal_summary')),
    progress_note: textValue(data.get('progress_note')),
    updated_by: ctx.user.id,
  };
  try {
    const response = await ctx.client.from('student_cases').upsert(row, { onConflict: 'student_id' }).select('*').single();
    if (response.error) throw response.error;
    coaching.cases = [...coaching.cases.filter((item) => item.student_id !== row.student_id), response.data];
    ctx.setWorkspaceStatus('Coaching case saved.');
    renderCoachingWorkspace();
    ctx.renderOverview();
  } catch (error) {
    ctx.setWorkspaceStatus(error instanceof Error ? error.message : 'Could not save the coaching case.', true);
  } finally { setBusy(button, false); }
}

async function handleCareerSubmit(event: SubmitEvent) {
  event.preventDefault();
  if (!ctx || !activeStudentId() || !requireSchema()) return;
  const form = event.currentTarget as HTMLFormElement;
  const data = new FormData(form);
  const id = textValue(data.get('id'));
  const desiredType = textValue(data.get('option_type')) || 'alternative';
  const desiredFocus = numberValue(data.get('focus_percentage')) ?? (desiredType === 'primary' ? 70 : 15);
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
    decision_deadline: textValue(data.get('decision_deadline')) || null,
    route_summary: textValue(data.get('route_summary')),
    entry_requirements: textValue(data.get('entry_requirements')),
    work_environment: textValue(data.get('work_environment')),
    reasons: linesValue(data.get('reasons')),
    tradeoffs: linesValue(data.get('tradeoffs')),
    next_step: textValue(data.get('next_step')),
    updated_by: ctx.user.id,
    ...(id ? {} : { created_by: ctx.user.id }),
  };
  if (desiredType === 'alternative') {
    baseRow.option_type = 'alternative';
    const available = availableAlternativeFocus(id);
    baseRow.focus_percentage = careerStatus === 'paused' ? 0 : Math.max(0, Math.min(50, available, desiredFocus));
  } else if (!id) {
    baseRow.option_type = 'alternative';
    baseRow.focus_percentage = 0;
  }
  const button = form.querySelector<HTMLButtonElement>('[type="submit"]');
  setBusy(button, true);
  try {
    const query = id ? ctx.client.from('career_paths').update(baseRow).eq('id', id) : ctx.client.from('career_paths').insert(baseRow);
    const response = await query.select('*').single();
    if (response.error) throw response.error;
    let saved = response.data;
    if (desiredType === 'primary') {
      const promoted = await ctx.client.rpc('set_primary_career_path', { target_path_id: saved.id, target_focus: Math.max(50, Math.min(90, desiredFocus)) });
      if (promoted.error) throw promoted.error;
      saved = Array.isArray(promoted.data) ? promoted.data[0] : promoted.data;
      const refreshed = await ctx.client.from('career_paths').select('*').eq('user_id', activeStudentId()).order('sort_order').order('updated_at', { ascending: false });
      if (refreshed.error) throw refreshed.error;
      coaching.careers = refreshed.data ?? [];
    } else {
      coaching.careers = [...coaching.careers.filter((item) => item.id !== saved.id), saved];
    }
    qs<HTMLDialogElement>('#career-option-dialog')?.close();
    ctx.setWorkspaceStatus(desiredType === 'primary' ? 'Primary career direction saved.' : id ? 'Career decision updated.' : 'Alternative added.');
    renderCoachingWorkspace();
    ctx.renderOverview();
  } catch (error) { ctx.setWorkspaceStatus(error instanceof Error ? error.message : 'Could not save the career decision.', true); }
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
    category: data.get('category'),
    skill_scope: data.get('skill_scope'),
    linked_career_path_id: textValue(data.get('linked_career_path_id')) || null,
    current_level: numberValue(data.get('current_level')) ?? 0,
    target_level: numberValue(data.get('target_level')) ?? 2,
    priority: data.get('priority'),
    status: data.get('status'),
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
  } catch (error) { ctx.setWorkspaceStatus(error instanceof Error ? error.message : 'Could not save the skill.', true); }
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
    ctx.setWorkspaceStatus('Choose at least one skill that is not already in the roadmap.', true);
    return;
  }
  const primary = currentPrimaryCareer();
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
    linked_career_path_id: pack.scope === 'career-specific' ? primary?.id || null : null,
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
  } catch (error) { ctx.setWorkspaceStatus(error instanceof Error ? error.message : 'Could not add the skill plan.', true); }
  finally { setBusy(button, false); }
}

async function handleEvidenceSubmit(event: SubmitEvent) {
  event.preventDefault();
  if (!ctx || !requireSchema()) return;
  const form = event.currentTarget as HTMLFormElement;
  const data = new FormData(form);
  const button = form.querySelector<HTMLButtonElement>('[type="submit"]');
  setBusy(button, true);
  try {
    const response = await ctx.client.from('skill_evidence').insert({
      skill_id: data.get('skill_id'), title: textValue(data.get('title')), evidence_type: data.get('evidence_type'),
      description: textValue(data.get('description')), source_url: textValue(data.get('source_url')),
      observed_level: numberValue(data.get('observed_level')), evidence_date: data.get('evidence_date'), added_by: ctx.user.id,
    }).select('*').single();
    if (response.error) throw response.error;
    coaching.evidence.push(response.data);
    qs<HTMLDialogElement>('#evidence-dialog')?.close();
    ctx.setWorkspaceStatus('Skill evidence added.');
    renderCoachingWorkspace();
  } catch (error) { ctx.setWorkspaceStatus(error instanceof Error ? error.message : 'Could not add the evidence.', true); }
  finally { setBusy(button, false); }
}

async function handleSessionSubmit(event: SubmitEvent) {
  event.preventDefault();
  if (!ctx || !activeStudentId() || ctx.profile.role === 'student' || !requireSchema()) return;
  const form = event.currentTarget as HTMLFormElement;
  const data = new FormData(form);
  const id = textValue(data.get('id'));
  const row = {
    student_id: activeStudentId(), facilitator_id: data.get('facilitator_id'),
    scheduled_at: new Date(textValue(data.get('scheduled_at'))).toISOString(),
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
  } catch (error) { ctx.setWorkspaceStatus(error instanceof Error ? error.message : 'Could not save the session.', true); }
  finally { setBusy(button, false); }
}

async function handleActionSubmit(event: SubmitEvent) {
  event.preventDefault();
  if (!ctx || !activeStudentId() || !requireSchema()) return;
  const form = event.currentTarget as HTMLFormElement;
  const data = new FormData(form);
  const button = form.querySelector<HTMLButtonElement>('[type="submit"]');
  setBusy(button, true, 'Adding...');
  try {
    const response = await ctx.client.from('action_items').insert({
      user_id: activeStudentId(), title: textValue(data.get('title')), category: data.get('category'),
      priority: data.get('priority'), due_date: textValue(data.get('due_date')) || null,
      details: textValue(data.get('details')), assigned_by: ctx.user.id,
    }).select('*').single();
    if (response.error) throw response.error;
    coaching.actions.push(response.data);
    form.reset();
    ctx.setWorkspaceStatus('Action added.');
    renderCoachingWorkspace();
    ctx.renderOverview();
  } catch (error) { ctx.setWorkspaceStatus(error instanceof Error ? error.message : 'Could not add the action.', true); }
  finally { setBusy(button, false); }
}

async function toggleAction(id: string) {
  if (!ctx || !requireSchema()) return;
  const row = coaching.actions.find((item) => item.id === id);
  if (!row) return;
  const status = row.status === 'done' ? 'todo' : 'done';
  const response = await ctx.client.from('action_items').update({ status }).eq('id', id).select('*').single();
  if (response.error) { ctx.setWorkspaceStatus(response.error.message, true); return; }
  coaching.actions = coaching.actions.map((item) => item.id === id ? response.data : item);
  renderCoachingWorkspace();
  ctx.renderOverview();
}

type CoachingCollection = 'careers' | 'skills' | 'evidence' | 'sessions' | 'actions';

async function deleteRow(table: string, id: string, rows: CoachingCollection, message: string) {
  if (!ctx || !requireSchema()) return;
  if (!window.confirm('Remove this record?')) return;
  const response = await ctx.client.from(table).delete().eq('id', id);
  if (response.error) { ctx.setWorkspaceStatus(response.error.message, true); return; }
  (coaching[rows] as Row[]) = (coaching[rows] as Row[]).filter((row) => row.id !== id);
  if (table === 'student_skills') coaching.evidence = coaching.evidence.filter((row) => row.skill_id !== id);
  ctx.setWorkspaceStatus(message);
  renderCoachingWorkspace();
  ctx.renderOverview();
}

async function deleteCareerPath(id: string) {
  const path = coaching.careers.find((row) => row.id === id);
  const hasOtherOptions = path && coaching.careers.some((row) => row.user_id === path.user_id && row.id !== id);
  if (path?.option_type === 'primary' && hasOtherOptions) {
    ctx?.setWorkspaceStatus('Choose another primary direction before removing this one.', true);
    return;
  }
  await deleteRow('career_paths', id, 'careers', 'Career option removed.');
}

function bindEvents() {
  if (bound) return;
  bound = true;
  preparePresetControls();
  qs<HTMLFormElement>('#student-case-form')?.addEventListener('submit', handleCaseSubmit);
  qs<HTMLFormElement>('#career-option-form')?.addEventListener('submit', handleCareerSubmit);
  qs<HTMLFormElement>('#skill-form')?.addEventListener('submit', handleSkillSubmit);
  qs<HTMLFormElement>('#skill-plan-form')?.addEventListener('submit', handleSkillPlanSubmit);
  qs<HTMLFormElement>('#evidence-form')?.addEventListener('submit', handleEvidenceSubmit);
  qs<HTMLFormElement>('#session-form')?.addEventListener('submit', handleSessionSubmit);
  qsa<HTMLFormElement>('[data-coaching-action-form]').forEach((form) => form.addEventListener('submit', handleActionSubmit));
  qsa<HTMLSelectElement>('[data-action-preset]').forEach((select) => select.addEventListener('change', () => applyActionPreset(select)));
  qs<HTMLSelectElement>('#case-goal-preset')?.addEventListener('change', (event) => applyCaseGoalPreset(event.currentTarget as HTMLSelectElement));
  qs<HTMLSelectElement>('#progress-update-preset')?.addEventListener('change', (event) => applyProgressPreset(event.currentTarget as HTMLSelectElement));
  qs<HTMLSelectElement>('#evidence-preset')?.addEventListener('change', (event) => applyEvidencePreset(event.currentTarget as HTMLSelectElement));
  qs<HTMLSelectElement>('#note-template-preset')?.addEventListener('change', (event) => applyNotePreset(event.currentTarget as HTMLSelectElement));
  qs<HTMLSelectElement>('#academic-stream-preset')?.addEventListener('change', (event) => applyAcademicStreamPreset(event.currentTarget as HTMLSelectElement));
  qs<HTMLInputElement>('#caseload-search')?.addEventListener('input', renderCaseload);
  qs<HTMLSelectElement>('#caseload-stage-filter')?.addEventListener('change', renderCaseload);
  qs<HTMLSelectElement>('#caseload-attention-filter')?.addEventListener('change', renderCaseload);
  qs<HTMLInputElement>('#career-preset-search')?.addEventListener('input', renderCareerPresetResults);
  qs<HTMLSelectElement>('#career-preset-category')?.addEventListener('change', renderCareerPresetResults);
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
  qs<HTMLInputElement>('#career-focus-range')?.addEventListener('input', updateCareerFocusControl);
  qs<HTMLSelectElement>('#career-option-form select[name="decision_signal"]')?.addEventListener('change', updateCareerFocusControl);
  qs<HTMLButtonElement>('#print-student-brief')?.addEventListener('click', () => window.print());
  document.addEventListener('click', (event) => {
    const target = event.target as Element;
    const careerPreset = target.closest<HTMLElement>('[data-career-preset]');
    if (careerPreset) { selectCareerGuide(careerPreset.dataset.careerPreset || ''); return; }
    const chooseCareer = target.closest<HTMLElement>('[data-choose-career]');
    if (chooseCareer) { applyCareerPreset(chooseCareer.dataset.guideKey || '', (chooseCareer.dataset.chooseCareer || 'testing') as 'primary' | 'testing' | 'alternative'); return; }
    const skillPreset = target.closest<HTMLElement>('[data-skill-preset]');
    if (skillPreset) { applySkillPreset(skillPreset.dataset.skillPreset || ''); return; }
    const skillPack = target.closest<HTMLElement>('[data-skill-pack]');
    if (skillPack) { selectSkillPack(skillPack.dataset.skillPack || ''); return; }
    const openSkillPlan = target.closest<HTMLElement>('[data-open-skill-plan]');
    if (openSkillPlan) { openSkillPlanDialog(openSkillPlan.dataset.openSkillPlan || ''); return; }
    const recordTab = target.closest<HTMLElement>('[data-record-tab]');
    if (recordTab) { showRecordTab(recordTab.dataset.recordTab ?? 'summary'); return; }
    const planTab = target.closest<HTMLElement>('[data-plan-tab]');
    if (planTab) { showPlanTab(planTab.dataset.planTab ?? 'options'); return; }
    if (target.closest('[data-open-career-dialog]')) { openCareerDialog(); return; }
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
    const editSession = target.closest<HTMLElement>('[data-edit-session]');
    if (editSession) { openSessionDialog(editSession.dataset.editSession); return; }
    const toggle = target.closest<HTMLElement>('[data-toggle-coaching-action]');
    if (toggle) { void toggleAction(toggle.dataset.toggleCoachingAction!); return; }
    const removeAction = target.closest<HTMLElement>('[data-delete-coaching-action]');
    if (removeAction) void deleteRow('action_items', removeAction.dataset.deleteCoachingAction!, 'actions', 'Action removed.');
  });
}
