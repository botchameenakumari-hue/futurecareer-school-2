import { cohortPresets, sessionPresets } from '../data/coachingPresets';

type Row = Record<string, any>;

export type CohortContext = {
  client: any;
  user: Row;
  profile: Row;
  profiles: Row[];
  branches: Row[];
  selectedStudentId: string | null;
  openView: (view: string) => void;
  setWorkspaceStatus: (message: string, isError?: boolean) => void;
  escapeHtml: (value: unknown) => string;
  formatDate: (value: unknown, includeTime?: boolean) => string;
  formatRole: (value: unknown) => string;
  formatStatus: (value: unknown) => string;
  profileById: (id: unknown) => Row | null;
  branchById: (id: unknown) => Row | null;
};

type CohortState = {
  cohorts: Row[];
  memberships: Row[];
  sessions: Row[];
  attendance: Row[];
  selectedCohortId: string | null;
  schemaReady: boolean;
};

const state: CohortState = {
  cohorts: [], memberships: [], sessions: [], attendance: [], selectedCohortId: null, schemaReady: true,
};

let ctx: CohortContext | null = null;
let bound = false;

function qs<T extends Element>(selector: string) {
  return document.querySelector(selector) as T | null;
}

function qsa<T extends Element>(selector: string) {
  return Array.from(document.querySelectorAll(selector)) as T[];
}

function textValue(value: FormDataEntryValue | null) {
  return String(value ?? '').trim();
}

function numberValue(value: FormDataEntryValue | null, fallback: number) {
  const parsed = Number(textValue(value));
  return Number.isFinite(parsed) ? parsed : fallback;
}

function isMissingSchema(error: any) {
  const message = `${error?.code ?? ''} ${error?.message ?? ''}`.toLowerCase();
  return ['42p01', 'pgrst205', 'pgrst204', '42703'].some((code) => message.includes(code))
    || message.includes('schema cache')
    || message.includes('does not exist');
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

function toLocalInput(value: unknown) {
  if (!value) return '';
  const date = new Date(String(value));
  if (Number.isNaN(date.getTime())) return '';
  const offset = date.getTimezoneOffset() * 60_000;
  return new Date(date.getTime() - offset).toISOString().slice(0, 16);
}

function setFormValues(form: HTMLFormElement, values: Row) {
  Object.entries(values).forEach(([name, value]) => {
    const field = form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
    if (!field) return;
    if (name === 'starts_at' && field.type === 'datetime-local') field.value = toLocalInput(value);
    else field.value = value === null || value === undefined ? '' : String(value);
  });
}

async function queryRows(table: string, configure?: (query: any) => any) {
  if (!ctx) return [];
  let query = ctx.client.from(table).select('*');
  if (configure) query = configure(query);
  const response = await query;
  if (response.error) throw response.error;
  return response.data ?? [];
}

async function loadRows() {
  if (!ctx) return;
  try {
    const [cohorts, memberships, sessions, attendance] = await Promise.all([
      queryRows('cohorts', (query) => query.order('status').order('name')),
      queryRows('cohort_memberships', (query) => query.order('joined_on', { ascending: false })),
      queryRows('cohort_sessions', (query) => query.order('starts_at', { ascending: false })),
      queryRows('cohort_session_attendance', (query) => query.order('created_at', { ascending: false })),
    ]);
    state.cohorts = cohorts;
    state.memberships = memberships;
    state.sessions = sessions;
    state.attendance = attendance;
    state.schemaReady = true;
    if (state.selectedCohortId && !state.cohorts.some((cohort) => cohort.id === state.selectedCohortId)) state.selectedCohortId = null;
  } catch (error) {
    if (!isMissingSchema(error)) throw error;
    state.cohorts = [];
    state.memberships = [];
    state.sessions = [];
    state.attendance = [];
    state.schemaReady = false;
  }
}

export async function loadCohortWorkspace(context: CohortContext) {
  ctx = context;
  await loadRows();
  bindEvents();
  preparePresetSelects();
  renderCohortWorkspace();
}

export async function refreshCohortWorkspace(context: CohortContext) {
  ctx = context;
  await loadRows();
  renderCohortWorkspace();
}

export function cohortSchemaReady() {
  return state.schemaReady;
}

function activeMembership(studentId: string) {
  return state.memberships.find((row) => row.student_id === studentId && row.membership_status === 'active') ?? null;
}

export function getStudentCohort(studentId: string) {
  const membership = activeMembership(studentId);
  return membership ? state.cohorts.find((cohort) => cohort.id === membership.cohort_id) ?? null : null;
}

export function getCohortSessionsForStudent(studentId: string) {
  const cohort = getStudentCohort(studentId);
  return cohort ? state.sessions.filter((session) => session.cohort_id === cohort.id) : [];
}

export function getNextCohortSession(studentId: string) {
  const now = Date.now();
  return getCohortSessionsForStudent(studentId)
    .filter((session) => session.status === 'announced' && new Date(session.starts_at).getTime() >= now)
    .sort((a, b) => new Date(a.starts_at).getTime() - new Date(b.starts_at).getTime())[0] ?? null;
}

export function cohortUpcomingCount() {
  const now = Date.now();
  return state.sessions.filter((session) => session.status === 'announced' && new Date(session.starts_at).getTime() >= now).length;
}

function cohortMemberships(cohortId: string) {
  return state.memberships.filter((row) => row.cohort_id === cohortId && row.membership_status === 'active');
}

function cohortSessions(cohortId: string) {
  return state.sessions.filter((row) => row.cohort_id === cohortId)
    .sort((a, b) => new Date(b.starts_at).getTime() - new Date(a.starts_at).getTime());
}

function nextCohortSession(cohortId: string) {
  const now = Date.now();
  return cohortSessions(cohortId)
    .filter((session) => session.status === 'announced' && new Date(session.starts_at).getTime() >= now)
    .sort((a, b) => new Date(a.starts_at).getTime() - new Date(b.starts_at).getTime())[0] ?? null;
}

function attendanceForSession(sessionId: string) {
  return state.attendance.filter((row) => row.session_id === sessionId);
}

function isStaff() {
  return Boolean(ctx && ctx.profile.role !== 'student');
}

function safeLink(value: unknown) {
  const text = String(value ?? '').trim();
  if (!/^https?:\/\//i.test(text)) return null;
  try { return new URL(text).toString(); } catch { return null; }
}

function sessionHtml(session: Row, editable: boolean) {
  if (!ctx) return '';
  const facilitator = ctx.profileById(session.facilitator_id);
  const cohort = state.cohorts.find((row) => row.id === session.cohort_id);
  const attendance = attendanceForSession(session.id);
  const recorded = attendance.filter((row) => row.attendance_status !== 'not-recorded').length;
  const present = attendance.filter((row) => ['present', 'late'].includes(row.attendance_status)).length;
  const link = safeLink(session.venue_or_link);
  const venue = link
    ? `<a href="${ctx.escapeHtml(link)}" target="_blank" rel="noopener noreferrer">Open meeting link</a>`
    : ctx.escapeHtml(session.venue_or_link || ctx.formatStatus(session.delivery_mode));
  const studentId = ctx.profile.role === 'student' ? ctx.profile.id : ctx.selectedStudentId;
  const ownAttendance = attendance.find((row) => row.student_id === studentId);
  return `<article class="session-row cohort-session-row" data-status="${ctx.escapeHtml(session.status)}">
    <time datetime="${ctx.escapeHtml(session.starts_at)}"><strong>${ctx.escapeHtml(ctx.formatDate(session.starts_at, true))}</strong><small>${session.duration_minutes} minutes · ${ctx.escapeHtml(ctx.formatStatus(session.delivery_mode))}</small></time>
    <span class="session-copy"><span><span class="status-badge" data-status="${ctx.escapeHtml(session.status)}">${ctx.escapeHtml(ctx.formatStatus(session.status))}</span><strong>${ctx.escapeHtml(session.topic)}</strong></span><p>${ctx.escapeHtml(session.agenda || 'Agenda will be shared by the facilitator.')}</p>${session.preparation ? `<small>Prepare: ${ctx.escapeHtml(session.preparation)}</small>` : ''}${session.student_summary ? `<small>Outcome: ${ctx.escapeHtml(session.student_summary)}</small>` : ''}<small>${venue}${cohort ? ` · ${ctx.escapeHtml(cohort.name)}` : ''}</small></span>
    <span class="session-owner"><strong>${ctx.escapeHtml(facilitator?.full_name || 'Coach')}</strong>${ctx.profile.role === 'student' && ownAttendance ? `<small>${ctx.escapeHtml(ctx.formatStatus(ownAttendance.attendance_status))}</small>` : ''}${editable ? `<small>${recorded ? `${present}/${recorded} present` : 'Attendance not recorded'}</small><button class="table-action" type="button" data-edit-cohort-session="${ctx.escapeHtml(session.id)}">Edit</button><button class="table-action" type="button" data-open-attendance="${ctx.escapeHtml(session.id)}">Attendance</button>` : ''}</span>
  </article>`;
}

function renderCohortIndex() {
  if (!ctx || !isStaff()) return;
  const body = qs<HTMLElement>('#cohort-table-body');
  const empty = qs<HTMLElement>('#cohort-empty');
  const summary = qs<HTMLElement>('#cohort-summary');
  if (!body || !empty || !summary) return;
  const search = qs<HTMLInputElement>('#cohort-search')?.value.trim().toLowerCase() ?? '';
  const status = qs<HTMLSelectElement>('#cohort-status-filter')?.value ?? 'all';
  const rows = state.cohorts.filter((cohort) => {
    if (status !== 'all' && cohort.status !== status) return false;
    const branch = ctx!.branchById(cohort.branch_id);
    return !search || `${cohort.name} ${cohort.code} ${branch?.name ?? ''} ${cohort.program_track}`.toLowerCase().includes(search);
  });
  const active = state.cohorts.filter((cohort) => cohort.status === 'active').length;
  const placed = new Set(state.memberships.filter((row) => row.membership_status === 'active').map((row) => row.student_id)).size;
  const upcoming = cohortUpcomingCount();
  const attendanceDue = state.sessions.filter((session) => session.status === 'completed' && attendanceForSession(session.id).length < cohortMemberships(session.cohort_id).length).length;
  summary.innerHTML = [
    ['Active cohorts', active, 'Coaching groups'], ['Students placed', placed, 'One active cohort each'],
    ['Upcoming sessions', upcoming, 'Announcements'], ['Attendance due', attendanceDue, 'Completed sessions'],
  ].map(([label, value, note]) => `<span><small>${ctx!.escapeHtml(label)}</small><strong>${value}</strong><em>${ctx!.escapeHtml(note)}</em></span>`).join('');
  body.innerHTML = rows.map((cohort) => {
    const branch = ctx!.branchById(cohort.branch_id);
    const lead = ctx!.profileById(cohort.lead_id);
    const members = cohortMemberships(cohort.id).length;
    const next = nextCohortSession(cohort.id);
    return `<tr><td><strong>${ctx!.escapeHtml(cohort.name)}</strong><small class="cell-note">${ctx!.escapeHtml(cohort.code)} · ${ctx!.escapeHtml(branch?.name || 'Branch')}</small></td><td><span class="stage-badge" data-stage="${ctx!.escapeHtml(cohort.coaching_stage)}">${ctx!.escapeHtml(ctx!.formatStatus(cohort.coaching_stage))}</span><small class="cell-note">${ctx!.escapeHtml(ctx!.formatStatus(cohort.program_track))}</small></td><td><strong>${ctx!.escapeHtml(lead?.full_name || 'Not assigned')}</strong><small class="cell-note">${ctx!.escapeHtml(ctx!.formatStatus(cohort.delivery_mode))}</small></td><td><strong>${members}/${cohort.capacity}</strong><small class="cell-note">Active students</small></td><td><strong>${ctx!.escapeHtml(next ? ctx!.formatDate(next.starts_at, true) : 'Not announced')}</strong><small class="cell-note">${ctx!.escapeHtml(next?.topic || 'No upcoming session')}</small></td><td><button class="table-action" type="button" data-open-cohort="${ctx!.escapeHtml(cohort.id)}">Open cohort</button></td></tr>`;
  }).join('');
  empty.hidden = rows.length > 0;
  const count = qs<HTMLElement>('#cohort-nav-count');
  if (count) count.textContent = String(state.cohorts.filter((cohort) => cohort.status === 'active').length);
}

function renderCohortDetail() {
  if (!ctx || !isStaff()) return;
  const index = qs<HTMLElement>('#cohort-index-view');
  const detail = qs<HTMLElement>('#cohort-detail-view');
  const cohort = state.cohorts.find((row) => row.id === state.selectedCohortId);
  if (!index || !detail) return;
  index.hidden = Boolean(cohort);
  detail.hidden = !cohort;
  if (!cohort) return;
  const branch = ctx.branchById(cohort.branch_id);
  const lead = ctx.profileById(cohort.lead_id);
  const members = cohortMemberships(cohort.id);
  const sessions = cohortSessions(cohort.id);
  const next = nextCohortSession(cohort.id);
  const name = qs<HTMLElement>('#cohort-detail-name');
  const meta = qs<HTMLElement>('#cohort-detail-meta');
  const stage = qs<HTMLElement>('#cohort-detail-stage');
  const status = qs<HTMLElement>('#cohort-detail-status');
  if (name) name.textContent = cohort.name;
  if (meta) meta.textContent = `${cohort.code} · ${branch?.name || 'Branch'} · Lead: ${lead?.full_name || 'Not assigned'} · ${ctx.formatStatus(cohort.delivery_mode)}`;
  if (stage) { stage.textContent = ctx.formatStatus(cohort.coaching_stage); stage.dataset.stage = cohort.coaching_stage; }
  if (status) { status.textContent = ctx.formatStatus(cohort.status); status.dataset.status = cohort.status; }
  const summary = qs<HTMLElement>('#cohort-detail-summary');
  if (summary) summary.innerHTML = `<span><small>Students</small><strong>${members.length}/${cohort.capacity}</strong></span><span><small>Next session</small><strong>${ctx.escapeHtml(next ? ctx.formatDate(next.starts_at, true) : 'Not announced')}</strong></span><span><small>Programme</small><strong>${ctx.escapeHtml(ctx.formatStatus(cohort.program_track))}</strong></span><span><small>Coaching rhythm</small><strong>${ctx.escapeHtml(cohort.schedule_note || 'Not recorded')}</strong></span>`;
  const roster = qs<HTMLElement>('#cohort-roster');
  if (roster) roster.innerHTML = members.map((membership) => {
    const student = ctx!.profileById(membership.student_id);
    const coach = ctx!.profileById(student?.supervisor_id);
    return `<article><span class="avatar small">${ctx!.escapeHtml((student?.full_name || 'S').split(/\s+/).slice(0, 2).map((part: string) => part[0]).join('').toUpperCase())}</span><span><strong>${ctx!.escapeHtml(student?.full_name || 'Student')}</strong><small>${ctx!.escapeHtml(coach?.full_name ? `Coach: ${coach.full_name}` : student?.email || '')}</small></span><button class="table-action" type="button" data-student-id="${ctx!.escapeHtml(membership.student_id)}">Open record</button></article>`;
  }).join('') || '<div class="empty-state">No students are in this cohort yet.</div>';
  const sessionList = qs<HTMLElement>('#cohort-session-list');
  if (sessionList) sessionList.innerHTML = sessions.map((session) => sessionHtml(session, true)).join('') || '<div class="empty-state coaching-empty"><strong>No session announced.</strong><span>Announce the next cohort conversation when the time and topic are ready.</span></div>';
}

function renderStudentDelivery(studentId: string) {
  if (!ctx) return;
  const cohort = getStudentCohort(studentId);
  const sessions = getCohortSessionsForStudent(studentId).sort((a, b) => new Date(b.starts_at).getTime() - new Date(a.starts_at).getTime());
  const next = getNextCohortSession(studentId);
  const contextHtml = cohort
    ? `<span><small>Your cohort</small><strong>${ctx.escapeHtml(cohort.name)}</strong></span><span><small>Group code</small><strong>${ctx.escapeHtml(cohort.code)}</strong></span><span><small>Next session</small><strong>${ctx.escapeHtml(next ? ctx.formatDate(next.starts_at, true) : 'Not announced')}</strong></span><span><small>Prepare</small><strong>${ctx.escapeHtml(next?.preparation || 'No preparation shared')}</strong></span>`
    : '<span><small>Cohort</small><strong>Placement pending</strong></span><span><small>Next step</small><strong>Your coaching team will assign your group.</strong></span>';
  const studentContext = qs<HTMLElement>('#student-cohort-context');
  const recordContext = qs<HTMLElement>('#record-cohort-context');
  if (ctx.profile.role === 'student' && studentContext) studentContext.innerHTML = contextHtml;
  if (ctx.profile.role !== 'student' && recordContext) recordContext.innerHTML = contextHtml;
  const html = sessions.map((session) => sessionHtml(session, false)).join('') || '<div class="empty-state coaching-empty"><strong>No cohort sessions yet.</strong><span>The next coaching announcement will appear here.</span></div>';
  const studentList = qs<HTMLElement>('#student-session-list');
  const recordList = qs<HTMLElement>('#record-session-list');
  if (ctx.profile.role === 'student' && studentList) studentList.innerHTML = html;
  if (ctx.profile.role !== 'student' && recordList) recordList.innerHTML = html;
}

export function renderCohortWorkspace() {
  if (!ctx) return;
  renderCohortIndex();
  renderCohortDetail();
  const studentId = ctx.profile.role === 'student' ? ctx.profile.id : ctx.selectedStudentId;
  if (studentId) renderStudentDelivery(studentId);
}

export function openStudentCohort(studentId: string) {
  if (!ctx || !isStaff()) return;
  const cohort = getStudentCohort(studentId);
  if (!cohort) {
    ctx.setWorkspaceStatus('This student has not been placed in a cohort yet.', true);
    return;
  }
  state.selectedCohortId = cohort.id;
  ctx.openView('cohorts');
  renderCohortWorkspace();
}

function preparePresetSelects() {
  const cohortSelect = qs<HTMLSelectElement>('#cohort-preset');
  if (cohortSelect && cohortSelect.options.length === 1) {
    cohortSelect.insertAdjacentHTML('beforeend', cohortPresets.map((preset) => `<option value="${preset.key}">${preset.label}</option>`).join(''));
  }
  const sessionSelect = qs<HTMLSelectElement>('#session-preset');
  if (sessionSelect && sessionSelect.options.length === 1) {
    const groups = Array.from(new Set(sessionPresets.map((preset) => preset.group)));
    sessionSelect.insertAdjacentHTML('beforeend', groups.map((group) => `<optgroup label="${group}">${sessionPresets.filter((preset) => preset.group === group).map((preset) => `<option value="${preset.key}">${preset.topic}</option>`).join('')}</optgroup>`).join(''));
  }
}

function branchOptions(selected = '') {
  if (!ctx) return '';
  return ctx.branches.map((branch) => `<option value="${ctx!.escapeHtml(branch.id)}"${branch.id === selected ? ' selected' : ''}>${ctx!.escapeHtml(branch.name)} · ${ctx!.escapeHtml(branch.code)}</option>`).join('');
}

function eligibleLeads(branchId: string) {
  if (!ctx) return [];
  const activeStaff = ctx.profiles.filter((profile) => profile.role !== 'student' && profile.account_status === 'active');
  if (ctx.profile.role === 'admin' || ctx.profile.role === 'branch_head') {
    return activeStaff.filter((profile) => profile.role === 'admin' || profile.branch_id === branchId);
  }
  if (ctx.profile.role === 'head_coach') {
    return activeStaff.filter((profile) => profile.id === ctx!.user.id || (profile.role === 'coach' && profile.supervisor_id === ctx!.user.id && profile.branch_id === branchId));
  }
  return activeStaff.filter((profile) => profile.id === ctx!.user.id);
}

function populateLeadOptions(branchId: string, selected = '') {
  if (!ctx) return;
  const select = qs<HTMLSelectElement>('#cohort-lead');
  if (!select) return;
  const canLeaveUnassigned = ctx.profile.role === 'admin' || ctx.profile.role === 'branch_head';
  const leads = eligibleLeads(branchId);
  const selectedProfile = ctx.profiles.find((profile) => profile.id === selected && profile.account_status === 'active');
  if (selectedProfile && !leads.some((profile) => profile.id === selectedProfile.id)) leads.push(selectedProfile);
  select.innerHTML = (canLeaveUnassigned ? '<option value="">Not assigned</option>' : '')
    + leads.map((profile) => `<option value="${ctx!.escapeHtml(profile.id)}">${ctx!.escapeHtml(profile.full_name)} \u00b7 ${ctx!.escapeHtml(ctx!.formatRole(profile.role))}</option>`).join('');
  select.required = !canLeaveUnassigned;
  select.value = leads.some((profile) => profile.id === selected) ? selected : (leads[0]?.id || '');
}

function openCohortDialog(id = '') {
  if (!ctx || !isStaff() || !state.schemaReady) return;
  const form = qs<HTMLFormElement>('#cohort-form');
  const dialog = qs<HTMLDialogElement>('#cohort-dialog');
  const branch = qs<HTMLSelectElement>('#cohort-branch');
  if (!form || !dialog || !branch) return;
  form.reset();
  const row = state.cohorts.find((cohort) => cohort.id === id);
  branch.innerHTML = branchOptions(row?.branch_id || ctx.profile.branch_id || ctx.branches[0]?.id || '');
  if (row) setFormValues(form, row);
  const branchId = row?.branch_id || branch.value;
  populateLeadOptions(branchId, row?.lead_id || ctx.user.id);
  (form.elements.namedItem('id') as HTMLInputElement).value = row?.id || '';
  const title = qs<HTMLElement>('#cohort-dialog-title');
  if (title) title.textContent = row ? 'Edit cohort' : 'New cohort';
  dialog.showModal();
}

function staffForSession(cohort: Row) {
  if (!ctx) return [];
  const active = ctx.profiles.filter((profile) => profile.role !== 'student' && profile.account_status === 'active');
  if (ctx.profile.role === 'coach') return active.filter((profile) => profile.id === ctx!.user.id);
  if (ctx.profile.role === 'head_coach') return active.filter((profile) => profile.id === ctx!.user.id || (profile.role === 'coach' && profile.supervisor_id === ctx!.user.id));
  return active.filter((profile) => profile.role === 'admin' || profile.branch_id === cohort.branch_id);
}

function openSessionDialog(id = '') {
  if (!ctx || !isStaff() || !state.selectedCohortId || !state.schemaReady) return;
  const cohort = state.cohorts.find((row) => row.id === state.selectedCohortId);
  const form = qs<HTMLFormElement>('#cohort-session-form');
  const dialog = qs<HTMLDialogElement>('#cohort-session-dialog');
  const facilitator = qs<HTMLSelectElement>('#session-facilitator');
  if (!cohort || !form || !dialog || !facilitator) return;
  form.reset();
  const row = state.sessions.find((session) => session.id === id);
  facilitator.innerHTML = staffForSession(cohort).map((profile) => `<option value="${ctx!.escapeHtml(profile.id)}">${ctx!.escapeHtml(profile.full_name)} · ${ctx!.escapeHtml(ctx!.formatRole(profile.role))}</option>`).join('');
  (form.elements.namedItem('cohort_id') as HTMLInputElement).value = cohort.id;
  if (row) setFormValues(form, row);
  else {
    const next = new Date();
    next.setDate(next.getDate() + 7);
    next.setHours(17, 0, 0, 0);
    (form.elements.namedItem('starts_at') as HTMLInputElement).value = toLocalInput(next.toISOString());
    facilitator.value = staffForSession(cohort).some((profile) => profile.id === ctx!.user.id) ? ctx.user.id : cohort.lead_id || facilitator.value;
  }
  (form.elements.namedItem('id') as HTMLInputElement).value = row?.id || '';
  const context = qs<HTMLElement>('#cohort-session-context');
  if (context) context.textContent = cohort.name;
  const title = qs<HTMLElement>('#cohort-session-dialog-title');
  if (title) title.textContent = row ? 'Update session announcement' : 'Announce next session';
  dialog.showModal();
}

function openMembershipDialog() {
  if (!ctx || !state.selectedCohortId || !state.schemaReady) return;
  const cohort = state.cohorts.find((row) => row.id === state.selectedCohortId);
  const form = qs<HTMLFormElement>('#cohort-membership-form');
  const dialog = qs<HTMLDialogElement>('#cohort-membership-dialog');
  const select = qs<HTMLSelectElement>('#membership-student');
  if (!cohort || !form || !dialog || !select) return;
  form.reset();
  (form.elements.namedItem('cohort_id') as HTMLInputElement).value = cohort.id;
  const students = ctx.profiles.filter((profile) => profile.role === 'student' && profile.branch_id === cohort.branch_id && activeMembership(profile.id)?.cohort_id !== cohort.id);
  select.innerHTML = students.map((student) => {
    const current = getStudentCohort(student.id);
    return `<option value="${ctx!.escapeHtml(student.id)}">${ctx!.escapeHtml(student.full_name)}${current ? ` · from ${ctx!.escapeHtml(current.name)}` : ''}</option>`;
  }).join('');
  const context = qs<HTMLElement>('#membership-context');
  if (context) context.textContent = students.length ? `Place a student in ${cohort.name}. Their previous membership will be closed.` : 'Every visible student is already in this cohort.';
  const submit = form.querySelector<HTMLButtonElement>('[type="submit"]');
  if (submit) submit.disabled = students.length === 0;
  dialog.showModal();
}

function openAttendanceDialog(sessionId: string) {
  if (!ctx || !isStaff()) return;
  const session = state.sessions.find((row) => row.id === sessionId);
  const cohort = session ? state.cohorts.find((row) => row.id === session.cohort_id) : null;
  const form = qs<HTMLFormElement>('#attendance-form');
  const dialog = qs<HTMLDialogElement>('#attendance-dialog');
  const roster = qs<HTMLElement>('#attendance-roster');
  if (!session || !cohort || !form || !dialog || !roster) return;
  form.reset();
  (form.elements.namedItem('session_id') as HTMLInputElement).value = session.id;
  const context = qs<HTMLElement>('#attendance-context');
  if (context) context.textContent = `${session.topic} · ${ctx.formatDate(session.starts_at, true)}`;
  roster.innerHTML = cohortMemberships(cohort.id).map((membership) => {
    const student = ctx!.profileById(membership.student_id);
    const existing = state.attendance.find((row) => row.session_id === session.id && row.student_id === membership.student_id);
    return `<label class="attendance-row" data-attendance-student="${ctx!.escapeHtml(membership.student_id)}"><span><strong>${ctx!.escapeHtml(student?.full_name || 'Student')}</strong><small>${ctx!.escapeHtml(student?.email || '')}</small></span><select data-attendance-status><option value="not-recorded">Not recorded</option><option value="present">Present</option><option value="late">Late</option><option value="absent">Absent</option><option value="excused">Excused</option></select><input data-attendance-note maxlength="1000" placeholder="Participation note" value="${ctx!.escapeHtml(existing?.participation_note || '')}" /></label>`;
  }).join('');
  qsa<HTMLElement>('[data-attendance-student]').forEach((row) => {
    const existing = state.attendance.find((item) => item.session_id === session.id && item.student_id === row.dataset.attendanceStudent);
    const select = row.querySelector<HTMLSelectElement>('[data-attendance-status]');
    if (select) select.value = existing?.attendance_status || 'not-recorded';
  });
  dialog.showModal();
}

function slugCode(value: string) {
  return value.toUpperCase().replace(/[^A-Z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 22) || 'COHORT';
}

async function reloadAndRender(message: string) {
  await loadRows();
  renderCohortWorkspace();
  ctx?.setWorkspaceStatus(message);
}

async function handleCohortSubmit(event: SubmitEvent) {
  event.preventDefault();
  if (!ctx) return;
  const form = event.currentTarget as HTMLFormElement;
  const data = new FormData(form);
  const id = textValue(data.get('id'));
  const branchId = textValue(data.get('branch_id'));
  const branch = ctx.branchById(branchId);
  const row = {
    branch_id: branchId, name: textValue(data.get('name')),
    code: textValue(data.get('code')) || `${branch?.code || 'COHORT'}-${slugCode(textValue(data.get('name')))}`.slice(0, 32),
    program_track: data.get('program_track'), coaching_stage: data.get('coaching_stage'), delivery_mode: data.get('delivery_mode'),
    status: data.get('status'), lead_id: textValue(data.get('lead_id')) || null, capacity: numberValue(data.get('capacity'), 30),
    starts_on: textValue(data.get('starts_on')) || null, ends_on: textValue(data.get('ends_on')) || null,
    schedule_note: textValue(data.get('schedule_note')), description: textValue(data.get('description')), updated_by: ctx.user.id,
    ...(id ? {} : { created_by: ctx.user.id }),
  };
  const button = form.querySelector<HTMLButtonElement>('[type="submit"]');
  setBusy(button, true);
  try {
    const query = id ? ctx.client.from('cohorts').update(row).eq('id', id) : ctx.client.from('cohorts').insert(row);
    const response = await query.select('*').single();
    if (response.error) throw response.error;
    state.selectedCohortId = response.data.id;
    qs<HTMLDialogElement>('#cohort-dialog')?.close();
    await reloadAndRender(id ? 'Cohort updated.' : 'Cohort created.');
  } catch (error) { ctx.setWorkspaceStatus(error instanceof Error ? error.message : 'Could not save the cohort.', true); }
  finally { setBusy(button, false); }
}

async function handleSessionSubmit(event: SubmitEvent) {
  event.preventDefault();
  if (!ctx) return;
  const form = event.currentTarget as HTMLFormElement;
  const data = new FormData(form);
  const id = textValue(data.get('id'));
  const row = {
    cohort_id: data.get('cohort_id'), facilitator_id: data.get('facilitator_id'),
    starts_at: new Date(textValue(data.get('starts_at'))).toISOString(), duration_minutes: numberValue(data.get('duration_minutes'), 60),
    session_type: data.get('session_type'), delivery_mode: data.get('delivery_mode'), status: data.get('status'),
    topic: textValue(data.get('topic')), venue_or_link: textValue(data.get('venue_or_link')), agenda: textValue(data.get('agenda')),
    preparation: textValue(data.get('preparation')), student_summary: textValue(data.get('student_summary')), updated_by: ctx.user.id,
    ...(id ? {} : { created_by: ctx.user.id }),
  };
  const button = form.querySelector<HTMLButtonElement>('[type="submit"]');
  setBusy(button, true);
  try {
    const query = id ? ctx.client.from('cohort_sessions').update(row).eq('id', id) : ctx.client.from('cohort_sessions').insert(row);
    const response = await query.select('*').single();
    if (response.error) throw response.error;
    qs<HTMLDialogElement>('#cohort-session-dialog')?.close();
    await reloadAndRender(id ? 'Session announcement updated.' : 'Session announced to the cohort.');
  } catch (error) { ctx.setWorkspaceStatus(error instanceof Error ? error.message : 'Could not save the announcement.', true); }
  finally { setBusy(button, false); }
}

async function handleMembershipSubmit(event: SubmitEvent) {
  event.preventDefault();
  if (!ctx) return;
  const form = event.currentTarget as HTMLFormElement;
  const data = new FormData(form);
  const button = form.querySelector<HTMLButtonElement>('[type="submit"]');
  setBusy(button, true);
  try {
    const response = await ctx.client.rpc('move_student_to_cohort', {
      target_student_id: data.get('student_id'), target_cohort_id: data.get('cohort_id'),
    });
    if (response.error) throw response.error;
    qs<HTMLDialogElement>('#cohort-membership-dialog')?.close();
    await reloadAndRender('Student cohort membership updated.');
  } catch (error) { ctx.setWorkspaceStatus(error instanceof Error ? error.message : 'Could not update the membership.', true); }
  finally { setBusy(button, false); }
}

async function handleAttendanceSubmit(event: SubmitEvent) {
  event.preventDefault();
  if (!ctx) return;
  const form = event.currentTarget as HTMLFormElement;
  const sessionId = (form.elements.namedItem('session_id') as HTMLInputElement).value;
  const rows = qsa<HTMLElement>('#attendance-roster [data-attendance-student]').map((element) => ({
    session_id: sessionId,
    student_id: element.dataset.attendanceStudent,
    attendance_status: element.querySelector<HTMLSelectElement>('[data-attendance-status]')?.value || 'not-recorded',
    participation_note: element.querySelector<HTMLInputElement>('[data-attendance-note]')?.value.trim() || '',
    recorded_by: ctx!.user.id,
  }));
  const button = form.querySelector<HTMLButtonElement>('[type="submit"]');
  setBusy(button, true);
  try {
    const response = await ctx.client.from('cohort_session_attendance').upsert(rows, { onConflict: 'session_id,student_id' });
    if (response.error) throw response.error;
    qs<HTMLDialogElement>('#attendance-dialog')?.close();
    await reloadAndRender('Attendance saved.');
  } catch (error) { ctx.setWorkspaceStatus(error instanceof Error ? error.message : 'Could not save attendance.', true); }
  finally { setBusy(button, false); }
}

function bindEvents() {
  if (bound) return;
  bound = true;
  qs<HTMLFormElement>('#cohort-form')?.addEventListener('submit', handleCohortSubmit);
  qs<HTMLFormElement>('#cohort-session-form')?.addEventListener('submit', handleSessionSubmit);
  qs<HTMLFormElement>('#cohort-membership-form')?.addEventListener('submit', handleMembershipSubmit);
  qs<HTMLFormElement>('#attendance-form')?.addEventListener('submit', handleAttendanceSubmit);
  qs<HTMLInputElement>('#cohort-search')?.addEventListener('input', renderCohortIndex);
  qs<HTMLSelectElement>('#cohort-status-filter')?.addEventListener('change', renderCohortIndex);
  qs<HTMLSelectElement>('#cohort-branch')?.addEventListener('change', (event) => populateLeadOptions((event.currentTarget as HTMLSelectElement).value, ctx?.user.id));
  qs<HTMLSelectElement>('#cohort-preset')?.addEventListener('change', (event) => {
    const preset = cohortPresets.find((item) => item.key === (event.currentTarget as HTMLSelectElement).value);
    const form = qs<HTMLFormElement>('#cohort-form');
    if (preset && form) setFormValues(form, {
      name: preset.label, program_track: preset.programTrack, coaching_stage: preset.coachingStage,
      delivery_mode: preset.deliveryMode, capacity: preset.capacity, schedule_note: preset.scheduleNote, description: preset.description,
    });
  });
  qs<HTMLSelectElement>('#session-preset')?.addEventListener('change', (event) => {
    const preset = sessionPresets.find((item) => item.key === (event.currentTarget as HTMLSelectElement).value);
    const form = qs<HTMLFormElement>('#cohort-session-form');
    if (preset && form) setFormValues(form, {
      session_type: preset.sessionType, topic: preset.topic, agenda: preset.agenda,
      preparation: preset.preparation, duration_minutes: preset.durationMinutes,
    });
  });
  document.addEventListener('click', (event) => {
    const target = event.target as Element;
    if (target.closest('#new-cohort-button')) { openCohortDialog(); return; }
    if (target.closest('#edit-cohort-button')) { openCohortDialog(state.selectedCohortId || ''); return; }
    if (target.closest('#cohort-detail-back')) { state.selectedCohortId = null; renderCohortWorkspace(); return; }
    if (target.closest('#announce-session-button')) { openSessionDialog(); return; }
    if (target.closest('#move-student-button')) { openMembershipDialog(); return; }
    if (target.closest('[data-open-student-cohort]')) {
      const studentId = ctx?.profile.role === 'student' ? ctx.profile.id : ctx?.selectedStudentId;
      if (studentId) openStudentCohort(studentId);
      return;
    }
    const cohort = target.closest<HTMLElement>('[data-open-cohort]');
    if (cohort) { state.selectedCohortId = cohort.dataset.openCohort || null; renderCohortWorkspace(); return; }
    const session = target.closest<HTMLElement>('[data-edit-cohort-session]');
    if (session) { openSessionDialog(session.dataset.editCohortSession || ''); return; }
    const attendance = target.closest<HTMLElement>('[data-open-attendance]');
    if (attendance) openAttendanceDialog(attendance.dataset.openAttendance || '');
  });
}
