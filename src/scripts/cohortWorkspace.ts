import { cohortPresets, sessionPresets } from '../data/coachingPresets';
import {
  createWorkspacePaginationState,
  paginateWorkspaceRows,
  renderWorkspacePagination,
  resetWorkspacePagination,
} from './workspacePagination';

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
  tasks: Row[];
  posts: Row[];
  comments: Row[];
  selectedCohortId: string | null;
  schemaReady: boolean;
};

const state: CohortState = {
  cohorts: [], memberships: [], sessions: [], attendance: [], tasks: [], posts: [], comments: [], selectedCohortId: null, schemaReady: true,
};

let ctx: CohortContext | null = null;
let realtimeChannel: { on: (...args: any[]) => any; subscribe: (callback?: (status: string) => void) => any } | null = null;
let realtimeRefreshTimer: number | null = null;
let cohortPollingTimer: number | null = null;
let bound = false;
let cohortLoadGeneration = 0;
const cohortIndexPagination = createWorkspacePaginationState('fcs-workspace-cohorts-page');

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

function friendlyWorkspaceError(error: unknown, fallback: string) {
  const value = error as { message?: string; code?: string; status?: number } | null;
  const message = String(value?.message ?? '');
  const lower = message.toLowerCase();
  if (lower.includes('failed to fetch') || lower.includes('network') || value?.status === 0) {
    return 'We could not reach the cohort workspace. Check your connection and try again.';
  }
  if (lower.includes('row-level security') || value?.code === '42501') {
    return 'You do not have permission to change this cohort record. Ask an administrator or the cohort lead.';
  }
  if (isMissingSchema(error)) {
    return 'The cohort database upgrade is not active yet. Ask an administrator to apply the included Supabase migrations.';
  }
  if (lower.includes('duplicate') || lower.includes('unique constraint')) {
    return 'That cohort record already exists. Refresh the workspace and update the existing record.';
  }
  if (lower.includes('check constraint') || lower.includes('violates check')) {
    return 'One or more values are outside the allowed range. Check the field guidance and try again.';
  }
  if (lower.includes('foreign key')) {
    return 'This cohort record refers to something that is no longer available. Refresh and try again.';
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

function setFormStatus(selector: string, message: string, isError = false) {
  const status = qs<HTMLElement>(selector);
  if (!status) return;
  status.textContent = message;
  status.classList.toggle('is-error', isError);
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

function setUpCohortPostComposer(form: HTMLFormElement) {
  if (form.dataset.composerReady === 'true') return;
  const taskToggle = form.elements.namedItem('is_task') as HTMLInputElement | null;
  const content = form.elements.namedItem('content') as HTMLTextAreaElement | null;
  if (!taskToggle || !content) return;

  form.dataset.composerReady = 'true';
  const dueField = (form.elements.namedItem('task_due_on') as HTMLInputElement | null)?.closest('label');
  const relatedTaskField = (form.elements.namedItem('cohort_task_id') as HTMLSelectElement | null)?.closest('label');
  // Give a new group commitment its own short title. The post message remains
  // the detailed brief, so task lists stay scannable and useful on mobile.
  let taskTitleField = form.elements.namedItem('task_title') as HTMLInputElement | null;
  if (!taskTitleField) {
    const label = document.createElement('label');
    label.className = 'cohort-task-title-field';
    label.hidden = true;
    label.innerHTML = '<span>Group task title</span><input name="task_title" maxlength="180" placeholder="For example: Share one career route you tested" /><small class="field-help">Give the shared task a short name. Your message can include the full detail.</small>';
    taskToggle.closest('label')?.insertAdjacentElement('afterend', label);
    taskTitleField = label.querySelector<HTMLInputElement>('input[name="task_title"]');
  }
  const guidance = document.createElement('p');
  guidance.className = 'field-help cohort-post-guidance';
  content.closest('label')?.insertAdjacentElement('afterend', guidance);
  // Reuse server-rendered mode controls when available so the composer never
  // flashes the legacy checkbox before JavaScript finishes loading.
  const modeSwitch = form.querySelector<HTMLElement>('.cohort-compose-modes') ?? document.createElement('div');
  if (!modeSwitch.parentElement) {
    modeSwitch.className = 'cohort-compose-modes';
    modeSwitch.setAttribute('role', 'group');
    modeSwitch.setAttribute('aria-label', 'Choose what you want to share');
    modeSwitch.innerHTML = '<button type="button" class="cohort-compose-mode is-active" data-cohort-mode="update">Share an update</button><button type="button" class="cohort-compose-mode" data-cohort-mode="task">Create a group task</button>';
    content.closest('label')?.insertAdjacentElement('beforebegin', modeSwitch);
  }
  const legacyToggleLabel = taskToggle.closest('label');
  // Keep the accessible checkbox as the form's native value, but present a
  // clear two-choice control so participants understand whether they are
  // sharing information or starting a group commitment.
  if (legacyToggleLabel) {
    legacyToggleLabel.hidden = true;
    legacyToggleLabel.querySelector('span')!.textContent = 'Post this as a group task';
  }
  modeSwitch.hidden = false;
  const counter = document.createElement('small');
  counter.className = 'cohort-post-counter';
  counter.setAttribute('aria-live', 'polite');
  content.closest('label')?.append(counter);
  const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  if (!form.elements.namedItem('resource_url')) {
    const linkLabel = document.createElement('label');
    linkLabel.innerHTML = '<span>Useful link <em>(optional)</em></span><input name="resource_url" type="url" inputmode="url" maxlength="1000" placeholder="https://example.com" /><small class="field-help">Add one link if your post includes a resource for the cohort.</small>';
    content.closest('label')?.insertAdjacentElement('afterend', linkLabel);
  }

  const sync = () => {
    const isTask = taskToggle.checked;
    modeSwitch.querySelectorAll<HTMLButtonElement>('[data-cohort-mode]').forEach((modeButton) => {
      const active = (modeButton.dataset.cohortMode === 'task') === isTask;
      modeButton.classList.toggle('is-active', active);
      modeButton.setAttribute('aria-pressed', String(active));
    });
    if (taskTitleField) {
      taskTitleField.closest('label')!.hidden = !isTask;
      // Match the server-side validation in the browser so a participant gets
      // immediate guidance when switching a post into a group task.
      taskTitleField.required = isTask;
      taskTitleField.setAttribute('aria-required', String(isTask));
    }
    if (dueField) dueField.hidden = !isTask;
    // Keep the link to an existing task available for ordinary updates too.
    // Previously it disappeared unless the post was creating a new task,
    // which made task-specific progress updates impossible to publish.
    if (relatedTaskField) relatedTaskField.hidden = false;
    content.placeholder = isTask
      ? 'Describe the shared task, what everyone should do, and what completion looks like.'
      : 'Share a useful update, question, resource, link, idea, or lesson with the cohort.';
    guidance.textContent = isTask
      ? 'This will appear in the cohort’s open commitments as well as the activity feed.'
      : 'Use this space for progress, questions, ideas, resources, or encouragement. You can link the post to an existing group task below.';
    if (submit) submit.textContent = isTask ? 'Create group task' : 'Publish to cohort';
    counter.textContent = `${content.value.length}/5000 characters`;
  };

  taskToggle.addEventListener('change', sync);
  modeSwitch.querySelectorAll<HTMLButtonElement>('[data-cohort-mode]').forEach((modeButton) => {
    modeButton.addEventListener('click', () => {
      taskToggle.checked = modeButton.dataset.cohortMode === 'task';
      taskToggle.dispatchEvent(new Event('change', { bubbles: true }));
    });
  });
  content.addEventListener('input', sync);
  form.addEventListener('reset', () => window.setTimeout(sync, 0));
  sync();
}

async function queryRows(table: string, configure?: (query: any) => any) {
  if (!ctx) return [];
  const pageSize = 1000;
  const rows: Row[] = [];
  for (let offset = 0; ; offset += pageSize) {
    let query = ctx.client.from(table).select('*');
    if (configure) query = configure(query);
    const response = await query.range(offset, offset + pageSize - 1);
    if (response.error) throw response.error;
    const page = (response.data ?? []) as Row[];
    rows.push(...page);
    if (page.length < pageSize) break;
  }
  return rows;
}

async function loadRows() {
  if (!ctx) return;
  const generation = ++cohortLoadGeneration;
  try {
    // Keep the community usable when one optional resource is unavailable.
    // A failed comments or tasks query must not remove the cohort roster and
    // schedule from the screen.
    const results = await Promise.allSettled([
      queryRows('cohorts', (query) => query.order('status').order('name')),
      queryRows('cohort_memberships', (query) => query.order('joined_on', { ascending: false })),
      queryRows('cohort_sessions', (query) => query.order('starts_at', { ascending: false })),
      queryRows('cohort_session_attendance', (query) => query.order('created_at', { ascending: false })),
      queryRows('cohort_tasks', (query) => query.order('added_on', { ascending: false }).order('created_at', { ascending: false })).catch((error) => {
        // A student may be allowed to read posts while a deployment is still
        // rolling out task permissions. Keep the independent feed usable.
        if (isMissingSchema(error) || ctx?.profile.role === 'student') return [];
        throw error;
      }),
      queryRows('cohort_posts', (query) => query.order('created_at', { ascending: false })).catch((error) => {
        if (isMissingSchema(error) || ctx?.profile.role === 'student') return [];
        throw error;
      }),
      queryRows('cohort_post_comments', (query) => query.order('created_at', { ascending: true })).catch((error) => {
        if (isMissingSchema(error) || ctx?.profile.role === 'student') return [];
        throw error;
      }),
    ]);
    if (generation !== cohortLoadGeneration || !ctx) return;
    const rejected = results.filter((result): result is PromiseRejectedResult => result.status === 'rejected');
    // Keep the roster, feed, schedule, and tasks independently usable. A
    // temporary failure in one optional cohort resource must not blank the
    // entire community for staff or students.
    if (rejected.length) {
      console.warn('Some cohort resources could not be loaded.', rejected.map((item) => item.reason));
      ctx.setWorkspaceStatus('Some cohort information is temporarily unavailable. The rest of your community is still shown; refresh when you are ready.', true);
    }
    const rowsAt = (index: number) => {
      const result = results[index];
      return result.status === 'fulfilled' ? (result.value as Row[]) : [];
    };
    state.cohorts = rowsAt(0);
    state.memberships = rowsAt(1);
    state.sessions = rowsAt(2);
    state.attendance = rowsAt(3);
    state.tasks = rowsAt(4);
    state.posts = rowsAt(5);
    state.comments = rowsAt(6);
    state.schemaReady = rejected.length === 0;
    if (state.selectedCohortId && !state.cohorts.some((cohort) => cohort.id === state.selectedCohortId)) state.selectedCohortId = null;
  } catch (error) {
    if (generation !== cohortLoadGeneration || !ctx) return;
    // Keep every role's workspace usable if a cohort sub-resource is
    // unavailable; the rest of the coaching plan should remain accessible.
    if (!isMissingSchema(error)) console.warn('Cohort data could not be fully loaded.', error);
    state.cohorts = [];
    state.memberships = [];
    state.sessions = [];
    state.attendance = [];
    state.tasks = [];
    state.posts = [];
    state.comments = [];
    state.schemaReady = false;
  }
}

function stopCohortRealtime() {
  if (realtimeRefreshTimer !== null) {
    window.clearTimeout(realtimeRefreshTimer);
    realtimeRefreshTimer = null;
  }
  if (realtimeChannel && ctx?.client && typeof (ctx.client as any).removeChannel === 'function') {
    try { void (ctx.client as any).removeChannel(realtimeChannel); } catch { /* realtime is optional */ }
  }
  realtimeChannel = null;
  if (cohortPollingTimer !== null) {
    window.clearInterval(cohortPollingTimer);
    cohortPollingTimer = null;
  }
}

function scheduleCohortRefresh() {
  if (realtimeRefreshTimer !== null || !ctx) return;
  realtimeRefreshTimer = window.setTimeout(() => {
    realtimeRefreshTimer = null;
    if (ctx) void refreshCohortWorkspace(ctx);
  }, 350);
}

/** Keep the shared cohort feed current for all participants without turning
 * realtime into a hard dependency for older deployments or test clients. */
function startCohortRealtime() {
  stopCohortRealtime();
  const client = ctx?.client as any;
  // Polling is the safe baseline while a deployment has not opted into the
  // Supabase Realtime publication. It keeps the shared feed reasonably fresh
  // without exposing additional tables through a websocket publication.
  cohortPollingTimer = window.setInterval(() => {
    if (document.visibilityState === 'visible') scheduleCohortRefresh();
  }, 60_000);
  if (!client || typeof client.channel !== 'function') return;
  try {
    const channel = client.channel(`cohort-community-${ctx?.profile.id ?? 'workspace'}`);
    const tables = ['cohort_posts', 'cohort_post_comments', 'cohort_tasks', 'cohort_sessions'];
    tables.forEach((table) => {
      channel.on('postgres_changes', { event: '*', schema: 'public', table }, scheduleCohortRefresh);
    });
    channel.subscribe((status: string) => {
      if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') {
        console.warn('Cohort live updates are temporarily unavailable; manual refresh remains available.');
      }
    });
    realtimeChannel = channel;
  } catch (error) {
    // A missing Realtime publication must never prevent the cohort workspace
    // from loading its normal REST data.
    console.warn('Cohort live updates could not be started.', error);
  }
}

export async function loadCohortWorkspace(context: CohortContext) {
  ctx = context;
  const legacyPane = qs<HTMLElement>('#plan-sessions-pane');
  if (legacyPane?.querySelector('.pane-heading')) {
    legacyPane.innerHTML = '<section class="cohort-community-hub student-community-hub"><header class="community-hero"><div><p class="eyebrow">Your cohort community</p><h3>Share, ask, and follow through together</h3><p>This is the shared space for useful information, honest progress updates, questions, and group commitments.</p></div></header><div class="community-columns"><section class="community-compose"><div class="section-heading"><div><p class="eyebrow">Share with the cohort</p><h4>Share an update, ask for help, or offer an idea</h4></div></div><form id="student-cohort-post-form" class="cohort-post-form" data-cohort-post-form><input type="hidden" name="id" /><input type="hidden" name="cohort_id" /><label><span>Message</span><textarea name="content" rows="5" maxlength="5000" required placeholder="Ask a question, request help, share an idea, post a useful link, or tell the cohort what you learned."></textarea></label><div class="cohort-compose-modes" role="group" aria-label="Choose what you want to share"><button type="button" class="cohort-compose-mode is-active" data-cohort-mode="update" aria-pressed="true">Share an update</button><button type="button" class="cohort-compose-mode" data-cohort-mode="task" aria-pressed="false">Create a group task</button></div><label class="checkbox-field" hidden><input name="is_task" type="checkbox" /> <span>Post this as a group task</span></label><label><span>Commitment due date <em>(optional)</em></span><input name="task_due_on" type="date" /></label><label><span>Related group task <em>(optional)</em></span><select name="cohort_task_id"><option value="">No specific task</option></select><small class="field-help">Link your update to an existing task so everyone can see the progress in context.</small></label><div class="form-actions"><button class="secondary-button" type="reset">Clear</button><button class="primary-button" type="submit">Publish to cohort</button></div><div data-cohort-post-status class="form-status" aria-live="polite"></div></form></section><section class="community-tasks"><div class="section-heading"><div><p class="eyebrow">Group accountability</p><h4>Open commitments</h4><p class="field-help">Tasks started by students or coaches appear here for everyone.</p></div></div><div id="student-community-task-list" class="cohort-post-list"></div></section></div><section class="community-feed"><div class="section-heading"><div><p class="eyebrow">Cohort activity</p><h4>Everything shared by the group</h4></div></div><div id="student-cohort-post-list" class="cohort-post-list"></div></section><section class="community-schedule"><div class="section-heading"><div><p class="eyebrow">Upcoming together</p><h4>Community schedule</h4><p class="field-help">See announced meet-ups and what to prepare before you join.</p></div></div><div id="student-session-list" class="cohort-post-list"></div></section></section>';
    // The shared bindEvents() call below owns the submit listener for this
    // initial form. Prepare the composer here, but do not bind it twice.
    const studentComposer = qs<HTMLFormElement>('#student-cohort-post-form');
    if (studentComposer) setUpCohortPostComposer(studentComposer);
  }
  await loadRows();
  bindEvents();
  preparePresetSelects();
  renderCohortWorkspace();
  startCohortRealtime();
}

export async function refreshCohortWorkspace(context: CohortContext) {
  ctx = context;
  await loadRows();
  renderCohortWorkspace();
}

export function cohortSchemaReady() {
  return state.schemaReady;
}

/** Clear account-scoped cohort state before a different user signs in. */
export function clearCohortWorkspace() {
  cohortLoadGeneration += 1;
  stopCohortRealtime();
  state.cohorts = [];
  state.memberships = [];
  state.sessions = [];
  state.attendance = [];
  state.tasks = [];
  state.posts = [];
  state.comments = [];
  state.selectedCohortId = null;
  state.schemaReady = true;
}

function activeMembership(studentId: string) {
  return state.memberships.find((row) => row.student_id === studentId && row.membership_status === 'active') ?? null;
}

export function getStudentCohort(studentId: string) {
  const membership = activeMembership(studentId);
  return membership ? state.cohorts.find((cohort) => cohort.id === membership.cohort_id) ?? null : null;
}

export function getCohortById(cohortId: string) {
  return state.cohorts.find((cohort) => cohort.id === cohortId) ?? null;
}

/** Cohorts already filtered by Supabase RLS to the signed-in person's scope. */
export function getVisibleCohorts() {
  return [...state.cohorts];
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
  const ownAttendanceLabel = ctx.profile.role === 'student' && ownAttendance
    ? `<small>Your attendance: ${ctx.escapeHtml(ctx.formatStatus(ownAttendance.attendance_status))}</small>`
    : '';
  return `<article class="session-studio-card cohort-session-row" data-status="${ctx.escapeHtml(session.status)}"><div class="studio-card-top"><span class="status-badge" data-status="${ctx.escapeHtml(session.status)}">${ctx.escapeHtml(ctx.formatStatus(session.status))}</span><span class="studio-card-date">${ctx.escapeHtml(new Date(session.starts_at).toLocaleDateString(undefined, { weekday: 'short', day: 'numeric', month: 'short' }))} · ${ctx.escapeHtml(new Date(session.starts_at).toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' }))}</span></div><h4>${ctx.escapeHtml(session.topic)}</h4><p class="studio-card-purpose">${ctx.escapeHtml(session.agenda || 'The facilitator will share the session focus before the meeting.')}</p><div class="studio-card-grid"><span><small>Facilitator</small><strong>${ctx.escapeHtml(facilitator?.full_name || 'Coach')}</strong></span><span><small>Format</small><strong>${session.duration_minutes} min · ${ctx.escapeHtml(ctx.formatStatus(session.delivery_mode))}</strong></span><span><small>Prepare</small><strong>${ctx.escapeHtml(session.preparation || 'Nothing added yet')}</strong></span><span><small>Afterwards</small><strong>${ctx.escapeHtml(session.student_summary || 'Outcome will be added after the session')}</strong></span></div>${ownAttendanceLabel ? `<div class="session-attendance-note">${ownAttendanceLabel}</div>` : ''}<footer class="studio-card-actions">${editable ? `<span class="session-attendance-summary">${recorded ? `${present}/${recorded} present` : 'Attendance pending'}</span><button class="secondary-button" type="button" data-edit-cohort-session="${ctx.escapeHtml(session.id)}">Edit plan</button><button class="primary-button" type="button" data-open-attendance="${ctx.escapeHtml(session.id)}" aria-label="Attendance">Record attendance</button>` : link ? `<a class="primary-button" href="${ctx.escapeHtml(link)}" target="_blank" rel="noopener noreferrer">Join session</a>` : ''}</footer></article>`;
}

function cohortTaskHtml(task: Row, editable: boolean, canComplete = editable) {
  if (!ctx) return '';
  const creator = ctx.profileById(task.created_by);
  const done = task.status === 'done';
  const completionControl = canComplete
    ? `<button class="task-check" type="button" data-toggle-cohort-task="${ctx.escapeHtml(task.id)}" aria-label="${done ? 'Mark task open' : 'Mark task complete'}">${done ? '✓' : ''}</button>`
    : `<span class="task-check task-check-readonly" aria-label="${done ? 'Task complete' : 'Task status'}">${done ? '✓' : ''}</span>`;
  return `<article class="cohort-task-row${done ? ' is-done' : ''}" data-task-status="${ctx.escapeHtml(task.status)}">${completionControl}<div class="cohort-task-copy"><header><strong>${ctx.escapeHtml(task.title)}</strong><span class="status-badge" data-status="${ctx.escapeHtml(task.status)}">${ctx.escapeHtml(ctx.formatStatus(task.status))}</span></header><div class="cohort-task-meta"><span>${ctx.escapeHtml(ctx.formatStatus(task.task_type))}</span><span>Added ${ctx.escapeHtml(ctx.formatDate(task.added_on))}</span>${task.due_date ? `<span>Due ${ctx.escapeHtml(ctx.formatDate(task.due_date))}</span>` : ''}${creator ? `<span>By ${ctx.escapeHtml(creator.full_name)}</span>` : ''}</div>${task.details ? `<p>${ctx.escapeHtml(task.details)}</p>` : ''}</div>${editable ? `<div class="action-controls"><button class="table-action" type="button" data-edit-cohort-task="${ctx.escapeHtml(task.id)}">Edit</button><button class="table-action danger-action" type="button" data-delete-cohort-task="${ctx.escapeHtml(task.id)}">Remove</button></div>` : ''}</article>`;
}

function cohortPostTaskHtml(post: Row, editable = false) {
  if (!ctx) return '';
  const author = ctx.profileById(post.author_id);
  const authorName = author?.full_name || 'Cohort member';
  const done = post.task_status === 'done';
  const canEdit = editable || post.author_id === ctx.user.id;
  const title = String(post.content || 'Group commitment').split(/[.!?\n]/, 1)[0].trim().slice(0, 180) || 'Group commitment';
  return `<article class="cohort-task-row${done ? ' is-done' : ''}" data-task-status="${done ? 'done' : 'open'}"><button class="task-check" type="button" data-complete-cohort-post="${ctx.escapeHtml(post.id)}" aria-label="${done ? 'Task complete' : 'Mark task complete'}">${done ? '✓' : ''}</button><div class="cohort-task-copy"><header><strong>${ctx.escapeHtml(title)}</strong><span class="status-badge" data-status="${done ? 'completed' : 'open'}">${done ? 'Completed' : 'Open'}</span></header><div class="cohort-task-meta"><span>Group task</span><span>Added ${ctx.escapeHtml(ctx.formatDate(post.created_at))}</span>${post.task_due_on ? `<span>Due ${ctx.escapeHtml(ctx.formatDate(post.task_due_on))}</span>` : ''}<span>By ${ctx.escapeHtml(authorName)}</span></div><p>${ctx.escapeHtml(post.content || '')}</p></div>${canEdit ? `<div class="action-controls"><button class="table-action" type="button" data-edit-cohort-post="${ctx.escapeHtml(post.id)}">Edit</button><button class="table-action danger-action" type="button" data-delete-cohort-post="${ctx.escapeHtml(post.id)}">Remove</button></div>` : ''}</article>`;
}

function communityPostTasks(cohortId: string) {
  return state.posts.filter((post) => post.cohort_id === cohortId && post.is_task && !post.cohort_task_id && post.task_status !== 'done');
}

function openCommunityTaskCount(cohortId?: string) {
  const tableTasks = state.tasks.filter((task) => (!cohortId || task.cohort_id === cohortId) && !['done', 'archived'].includes(String(task.status))).length;
  const postTasks = state.posts.filter((post) => (!cohortId || post.cohort_id === cohortId) && post.is_task && !post.cohort_task_id && post.task_status !== 'done').length;
  return tableTasks + postTasks;
}

function cohortPostHtml(post: Row, editable = false) {
  if (!ctx) return '';
  const author = ctx.profileById(post.author_id);
  const authorName = author?.full_name || 'Cohort member';
  const authorInitials = authorName.split(/\s+/).filter(Boolean).slice(0, 2).map((part: string) => part[0]).join('').toUpperCase();
  const canEdit = editable || post.author_id === ctx.user.id;
  const task = state.tasks.find((row) => row.id === post.cohort_task_id);
  const taskStatus = task?.status ?? post.task_status ?? 'open';
  const taskDueDate = task?.due_date ?? post.task_due_on;
  const taskLabel = post.is_task ? `<span class="status-badge" data-status="${taskStatus === 'done' ? 'completed' : 'open'}">${taskStatus === 'done' ? 'Completed commitment' : 'Open commitment'}${taskDueDate ? ` · Due ${ctx.escapeHtml(ctx.formatDate(taskDueDate))}` : ''}</span>` : task ? `<span class="status-badge">About task: ${ctx.escapeHtml(task.title)}</span>` : '';
  const linkedContent = ctx.escapeHtml(post.content).replace(/(https?:\/\/[^\s<]+)/gi, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');
  const resourceLink = post.resource_url ? `<a class="cohort-resource-link" href="${ctx.escapeHtml(post.resource_url)}" target="_blank" rel="noopener noreferrer">Open shared resource</a>` : '';
  const completion = post.is_task && taskStatus !== 'done' ? `<button class="secondary-button" type="button" data-complete-cohort-post="${ctx.escapeHtml(post.id)}">Mark complete</button>` : post.is_task ? '<small class="cohort-post-completed">Completed by the cohort</small>' : '';
  const comments = state.comments.filter((comment) => comment.post_id === post.id);
  const commentsHtml = comments.slice(0, 3).map((comment) => {
    const commentAuthor = ctx!.profileById(comment.author_id);
    const canRemoveComment = comment.author_id === ctx!.user.id || editable;
    return `<li><strong>${ctx!.escapeHtml(commentAuthor?.full_name || 'Cohort member')}</strong><span>${ctx!.escapeHtml(comment.content)}</span><time>${ctx!.escapeHtml(ctx!.formatDate(comment.created_at, true))}</time>${canRemoveComment ? `<button class="cohort-comment-remove" type="button" data-delete-cohort-comment="${ctx!.escapeHtml(comment.id)}" aria-label="Remove response">Remove</button>` : ''}</li>`;
  }).join('');
  const renderComment = (comment: Row) => {
    const commentAuthor = ctx!.profileById(comment.author_id);
    const canRemoveComment = comment.author_id === ctx!.user.id || editable;
    return `<li><strong>${ctx!.escapeHtml(commentAuthor?.full_name || 'Cohort member')}</strong><span>${ctx!.escapeHtml(comment.content)}</span><time>${ctx!.escapeHtml(ctx!.formatDate(comment.created_at, true))}</time>${canRemoveComment ? `<button class="cohort-comment-remove" type="button" data-delete-cohort-comment="${ctx!.escapeHtml(comment.id)}" aria-label="Remove response">Remove</button>` : ''}</li>`;
  };
  const olderComments = comments.length > 3 ? `<details class="cohort-comment-history"><summary>View ${comments.length - 3} earlier response${comments.length - 3 === 1 ? '' : 's'}</summary><ul>${comments.slice(3).map(renderComment).join('')}</ul></details>` : '';
  const commentsBlock = `<section class="cohort-comments" aria-label="Responses"><div class="cohort-comments-heading"><strong>${comments.length ? `${comments.length} response${comments.length === 1 ? '' : 's'}` : 'Responses'}</strong></div>${commentsHtml ? `<ul>${comments.slice(0, 3).map(renderComment).join('')}</ul>${olderComments}` : '<p class="cohort-comments-empty">No responses yet.</p>'}<form class="cohort-comment-form" data-cohort-comment-form><input type="hidden" name="post_id" value="${ctx.escapeHtml(post.id)}" /><label><span class="sr-only">Write a response</span><input name="content" maxlength="3000" required placeholder="Add a response or useful follow-up" /></label><button class="secondary-button" type="submit">Respond</button><span class="form-status" data-cohort-comment-status aria-live="polite"></span></form></section>`;
  return `<article class="cohort-post${post.is_task ? ' is-task-post' : ''}${taskStatus === 'done' ? ' is-completed-post' : ''}"><header><span class="cohort-post-author"><i class="cohort-post-avatar" aria-hidden="true">${ctx.escapeHtml(authorInitials || 'C')}</i><span><strong>${ctx.escapeHtml(authorName)}</strong><small>${ctx.escapeHtml(ctx.formatRole(author?.role || 'student'))}</small></span></span><span class="cohort-post-meta">${taskLabel}<time datetime="${ctx.escapeHtml(post.created_at)}">${ctx.escapeHtml(ctx.formatDate(post.created_at, true))}</time></span></header>${post.is_task ? '<strong class="cohort-post-task-heading">Action for the cohort</strong>' : ''}<p>${linkedContent}</p>${resourceLink}${post.is_task || canEdit ? `<footer>${completion}${canEdit ? `<button class="table-action" type="button" data-edit-cohort-post="${ctx.escapeHtml(post.id)}">Edit</button><button class="table-action danger-action" type="button" data-delete-cohort-post="${ctx.escapeHtml(post.id)}">Remove</button>` : ''}</footer>` : ''}${commentsBlock}</article>`;
}

function renderCohortPosts(cohortId: string | null, listSelector: string, formSelector?: string, editable = false) {
  if (!ctx) return;
  const workspaceCtx = ctx;
  const list = qs<HTMLElement>(listSelector);
  if (!list) return;
  let search = list.parentElement?.querySelector<HTMLInputElement>('[data-cohort-feed-search]');
  if (!search) {
    search = document.createElement('input');
    search.type = 'search';
    search.placeholder = 'Search this cohort feed';
    search.setAttribute('aria-label', 'Search this cohort feed');
    search.dataset.cohortFeedSearch = 'true';
    search.className = 'cohort-feed-search';
    list.insertAdjacentElement('beforebegin', search);
    search.addEventListener('input', () => renderCohortPosts(cohortId, listSelector, formSelector, editable));
  }
  const searchTerm = search.value.trim().toLowerCase();
  const posts = cohortId ? state.posts.filter((post) => post.cohort_id === cohortId) : [];
  const filtered = searchTerm ? posts.filter((post) => {
    const author = workspaceCtx.profileById(post.author_id);
    const linkedTask = post.cohort_task_id
      ? state.tasks.find((task) => task.id === post.cohort_task_id)
      : null;
    return `${post.content ?? ''} ${author?.full_name ?? ''} ${author?.role ?? ''} ${linkedTask?.title ?? ''} ${post.resource_url ?? ''}`
      .toLowerCase()
      .includes(searchTerm);
  }) : posts;
  list.innerHTML = filtered.map((post) => cohortPostHtml(post, editable)).join('') || `<div class="empty-state coaching-empty"><strong>${searchTerm ? 'No matching contributions.' : 'No contributions yet.'}</strong><span>${searchTerm ? 'Try a different word or clear the search.' : 'Share a useful update, reflection, question, or resource for the cohort.'}</span></div>`;
  const form = formSelector ? qs<HTMLFormElement>(formSelector) : null;
  const cohortField = form?.elements.namedItem('cohort_id') as HTMLInputElement | null;
  if (cohortField) cohortField.value = cohortId || '';
  const taskSelect = form?.elements.namedItem('cohort_task_id') as HTMLSelectElement | null;
  if (taskSelect && cohortId) {
    const current = taskSelect.value;
    taskSelect.innerHTML = '<option value="">No specific task</option>' + state.tasks.filter((task) => task.cohort_id === cohortId && task.status !== 'archived').map((task) => `<option value="${workspaceCtx.escapeHtml(task.id)}">${workspaceCtx.escapeHtml(task.title)}</option>`).join('');
    taskSelect.value = current;
  }
}

function renderCommunityHub(cohortId: string | null, postListSelector: string, taskListSelector: string, formSelector: string, editable = false) {
  renderCohortPosts(cohortId, postListSelector, formSelector, editable);
  const taskList = qs<HTMLElement>(taskListSelector);
  if (!taskList || !ctx) return;
  const tasks = cohortId ? state.tasks.filter((task) => task.cohort_id === cohortId && task.status !== 'done' && task.status !== 'archived') : [];
  const taskMarkup = tasks.map((task) => cohortTaskHtml(task, editable, true)).join('') + (cohortId ? communityPostTasks(cohortId).map((post) => cohortPostTaskHtml(post, editable)).join('') : '');
  taskList.innerHTML = taskMarkup || `<div class="empty-state coaching-empty"><strong>No group commitments yet.</strong><span>Anyone in the cohort can start one from the message box.</span><button class="secondary-button" type="button" data-focus-cohort-composer>Start a group task</button></div>`;
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
  const page = paginateWorkspaceRows(rows, cohortIndexPagination);
  const active = state.cohorts.filter((cohort) => cohort.status === 'active').length;
  const placed = new Set(state.memberships.filter((row) => row.membership_status === 'active').map((row) => row.student_id)).size;
  summary.innerHTML = [
    ['Active cohorts', active, 'Coaching groups'], ['Students placed', placed, 'One active cohort each'],
    ['Community posts', state.posts.filter((post) => state.cohorts.some((cohort) => cohort.id === post.cohort_id)).length, 'Shared updates'],
    ['Open commitments', openCommunityTaskCount(), 'Group follow-through'],
  ].map(([label, value, note]) => `<span><small>${ctx!.escapeHtml(label)}</small><strong>${value}</strong><em>${ctx!.escapeHtml(note)}</em></span>`).join('');
  body.innerHTML = page.rows.map((cohort) => {
    const branch = ctx!.branchById(cohort.branch_id);
    const lead = ctx!.profileById(cohort.lead_id);
    const members = cohortMemberships(cohort.id).length;
    const latestPost = state.posts.filter((post) => post.cohort_id === cohort.id).sort((a, b) => String(b.created_at || '').localeCompare(String(a.created_at || '')))[0];
    return `<tr><td data-label="Cohort"><strong>${ctx!.escapeHtml(cohort.name)}</strong><small class="cell-note">${ctx!.escapeHtml(cohort.code)}</small></td><td data-label="Programme"><span class="stage-badge" data-stage="${ctx!.escapeHtml(cohort.coaching_stage)}">${ctx!.escapeHtml(ctx!.formatStatus(cohort.coaching_stage))}</span><small class="cell-note">${ctx!.escapeHtml(ctx!.formatStatus(cohort.program_track))}</small></td><td data-label="Lead"><strong>${ctx!.escapeHtml(lead?.full_name || 'Not assigned')}</strong><small class="cell-note">${ctx!.escapeHtml(ctx!.formatStatus(cohort.delivery_mode))}</small></td><td data-label="Students"><strong>${members}/${cohort.capacity}</strong><small class="cell-note">Active students</small></td><td data-label="Latest activity"><strong>${ctx!.escapeHtml(latestPost ? ctx!.formatDate(latestPost.created_at, true) : 'No contributions yet')}</strong><small class="cell-note">${ctx!.escapeHtml(latestPost ? 'Open the community feed to continue' : 'Invite the cohort to share an update')}</small></td><td data-label="Actions"><button class="table-action" type="button" data-open-cohort="${ctx!.escapeHtml(cohort.id)}">Open cohort</button></td></tr>`;
  }).join('');
  empty.hidden = rows.length > 0;
  const count = qs<HTMLElement>('#cohort-nav-count');
  if (count) count.textContent = String(state.cohorts.filter((cohort) => cohort.status === 'active').length);
  renderWorkspacePagination(qs<HTMLElement>('#cohort-pagination'), page, cohortIndexPagination, 'cohort', renderCohortIndex);
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
  // The community hub replaces the former session/task bands entirely.
  detail.querySelector<HTMLElement>('.cohort-feed-band')?.remove();
  detail.querySelector<HTMLElement>('.cohort-task-band')?.remove();
  const branch = ctx.branchById(cohort.branch_id);
  const lead = ctx.profileById(cohort.lead_id);
  const members = cohortMemberships(cohort.id);
  const sessions = cohortSessions(cohort.id);
  const name = qs<HTMLElement>('#cohort-detail-name');
  const meta = qs<HTMLElement>('#cohort-detail-meta');
  const stage = qs<HTMLElement>('#cohort-detail-stage');
  const status = qs<HTMLElement>('#cohort-detail-status');
  if (name) name.textContent = cohort.name;
  if (meta) meta.textContent = `${cohort.code} · Lead: ${lead?.full_name || 'Not assigned'} · ${ctx.formatStatus(cohort.delivery_mode)}`;
  if (stage) { stage.textContent = ctx.formatStatus(cohort.coaching_stage); stage.dataset.stage = cohort.coaching_stage; }
  if (status) { status.textContent = ctx.formatStatus(cohort.status); status.dataset.status = cohort.status; }
  const announceButton = qs<HTMLButtonElement>('#announce-session-button');
  const closed = ['completed', 'archived'].includes(cohort.status);
  if (announceButton) {
    announceButton.disabled = closed;
    announceButton.title = closed ? 'Closed cohorts cannot receive new session announcements.' : 'Announce a cohort session';
  }
  const summary = qs<HTMLElement>('#cohort-detail-summary');
  const completedSessionIds = new Set(sessions.filter((session) => session.status === 'completed').map((session) => session.id));
  const expectedAttendance = completedSessionIds.size * members.length;
  const recordedAttendance = state.attendance.filter((row) => completedSessionIds.has(row.session_id) && row.attendance_status && row.attendance_status !== 'not-recorded').length;
  const attendanceSummary = expectedAttendance ? `${recordedAttendance}/${expectedAttendance} recorded` : 'No completed session';
  const latestPost = state.posts
    .filter((post) => post.cohort_id === cohort.id)
    .sort((a, b) => String(b.created_at || '').localeCompare(String(a.created_at || '')))[0];
  const openCommitments = openCommunityTaskCount(cohort.id);
  const latestActivity = latestPost ? ctx.formatDate(latestPost.created_at, true) : 'No contributions yet';
  if (summary) summary.innerHTML = `<span><small>Students</small><strong>${members.length}/${cohort.capacity}</strong></span><span><small>Latest activity</small><strong>${ctx.escapeHtml(latestActivity)}</strong></span><span><small>Open commitments</small><strong>${openCommitments}</strong></span><span><small>Attendance</small><strong>${ctx.escapeHtml(attendanceSummary)}</strong></span><span><small>Programme</small><strong>${ctx.escapeHtml(ctx.formatStatus(cohort.program_track))}</strong></span>`;
  const roster = qs<HTMLElement>('#cohort-roster');
  if (roster) roster.innerHTML = members.map((membership) => {
    const student = ctx!.profileById(membership.student_id);
    const coach = ctx!.profileById(student?.supervisor_id);
    return `<article><span class="avatar small">${ctx!.escapeHtml((student?.full_name || 'S').split(/\s+/).slice(0, 2).map((part: string) => part[0]).join('').toUpperCase())}</span><span><strong>${ctx!.escapeHtml(student?.full_name || 'Student')}</strong><small>${ctx!.escapeHtml(coach?.full_name ? `Coach: ${coach.full_name}` : student?.email || '')}</small></span><button class="table-action" type="button" data-student-id="${ctx!.escapeHtml(membership.student_id)}">Open record</button></article>`;
  }).join('') || '<div class="empty-state"><strong>No students in this cohort yet.</strong><span>Place an active student here so community updates and group commitments stay connected.</span><button class="secondary-button" type="button" data-open-cohort-membership>Add the first student</button></div>';
  const sessionList = qs<HTMLElement>('#cohort-session-list');
  const sessionFilter = qs<HTMLSelectElement>('#cohort-session-filter')?.value || 'all';
  const visibleSessions = sessions.filter((session) => sessionFilter === 'all' || session.status === sessionFilter);
  if (sessionList) sessionList.innerHTML = visibleSessions.map((session) => sessionHtml(session, true)).join('') || '<div class="empty-state coaching-empty"><strong>No announcements in this view.</strong><span>Change the filter or share a community update. You can add an optional cohort announcement when useful.</span><button class="primary-button" type="button" data-open-cohort-session>Announce a session</button></div>';
  renderCommunityHub(cohort.id, '#cohort-post-list', '#cohort-community-task-list', '#cohort-post-form', true);
  const taskList = qs<HTMLElement>('#cohort-task-list');
  const cohortTasks = state.tasks.filter((task) => task.cohort_id === cohort.id && task.status !== 'archived');
  if (taskList) taskList.innerHTML = cohortTasks.map((task) => cohortTaskHtml(task, true)).join('') || '<div class="empty-state coaching-empty"><strong>No shared tasks yet.</strong><span>Add the first practical task for this cohort.</span></div>';
  const taskForm = qs<HTMLFormElement>('#cohort-task-form');
  const taskIdField = taskForm?.elements.namedItem('id') as HTMLInputElement | null;
  if (taskForm && !taskIdField?.value) (taskForm.elements.namedItem('added_on') as HTMLInputElement).value ||= new Date().toISOString().slice(0, 10);
}

function renderStudentDelivery(studentId: string) {
  if (!ctx) return;
  const studentPane = qs<HTMLElement>('#plan-sessions-pane');
  const oldHeading = studentPane?.querySelector<HTMLElement>('.pane-heading');
  if (studentPane && oldHeading && !studentPane.querySelector('.student-community-hub')) {
    studentPane.innerHTML = '<section class="cohort-community-hub student-community-hub"><header class="community-hero"><div><p class="eyebrow">Your cohort community</p><h3>Share, ask, and follow through together</h3><p>This is the shared space for useful information, honest progress updates, questions, and group commitments.</p></div></header><div class="community-columns"><section class="community-compose"><div class="section-heading"><div><p class="eyebrow">Share with the cohort</p><h4>Share an update, ask for help, or offer an idea</h4></div></div><form id="student-cohort-post-form" class="cohort-post-form" data-cohort-post-form><input type="hidden" name="id" /><input type="hidden" name="cohort_id" /><label><span>Message</span><textarea name="content" rows="5" maxlength="5000" required placeholder="Ask a question, request help, share an idea, post a useful link, or tell the cohort what you learned."></textarea></label><div class="cohort-compose-modes" role="group" aria-label="Choose what you want to share"><button type="button" class="cohort-compose-mode is-active" data-cohort-mode="update" aria-pressed="true">Share an update</button><button type="button" class="cohort-compose-mode" data-cohort-mode="task" aria-pressed="false">Create a group task</button></div><label class="checkbox-field" hidden><input name="is_task" type="checkbox" /><span>Post this as a group task</span></label><label><span>Commitment due date <em>(optional)</em></span><input name="task_due_on" type="date" /></label><label><span>Related group task <em>(optional)</em></span><select name="cohort_task_id"><option value="">No specific task</option></select><small class="field-help">Link your update to an existing task so everyone can see the progress in context.</small></label><div class="form-actions"><button class="secondary-button" type="reset">Clear</button><button class="primary-button" type="submit">Publish to cohort</button></div><div data-cohort-post-status class="form-status" aria-live="polite"></div></form></section><section class="community-tasks"><div class="section-heading"><div><p class="eyebrow">Group accountability</p><h4>Open commitments</h4><p class="field-help">Tasks started by students or coaches appear here for everyone.</p></div></div><div id="student-community-task-list" class="cohort-post-list"></div></section></div><section class="community-feed"><div class="section-heading"><div><p class="eyebrow">Cohort activity</p><h4>Everything shared by the group</h4></div></div><div id="student-cohort-post-list" class="cohort-post-list"></div></section></section>';
    const generatedStudentComposer = qs<HTMLFormElement>('#student-cohort-post-form');
    if (generatedStudentComposer) {
      setUpCohortPostComposer(generatedStudentComposer);
      generatedStudentComposer.addEventListener('submit', handleCohortPostSubmit);
    }
  }
  // The record view is a cohort feed first. Session announcements remain
  // available in cohort management, but are not injected as a separate
  // session-first panel into an individual student record.
  const cohort = getStudentCohort(studentId);
  const cohortPostCount = cohort ? state.posts.filter((post) => post.cohort_id === cohort.id).length : 0;
  const cohortTaskCount = cohort ? openCommunityTaskCount(cohort.id) : 0;
  const cohortDates = cohort
    ? (cohort.starts_on || cohort.ends_on
      ? `${cohort.starts_on ? ctx.formatDate(cohort.starts_on) : 'Any start'} to ${cohort.ends_on ? ctx.formatDate(cohort.ends_on) : 'No end date'}`
      : 'Dates to be confirmed')
    : '';
  const cohortSessions = cohort
    ? state.sessions.filter((session) => session.cohort_id === cohort.id).sort((a, b) => new Date(String(a.starts_at || 0)).getTime() - new Date(String(b.starts_at || 0)).getTime())
    : [];
  // Do not label a completed announcement as the next community date. A
  // quiet cohort should show no upcoming date instead of surfacing its last
  // historical session as if it were still ahead.
  const nextCommunityDate = cohortSessions.find((session) =>
    session.status === 'announced' && new Date(String(session.starts_at || 0)).getTime() >= Date.now()
  );
  const nextCommunityLabel = nextCommunityDate?.starts_at ? ctx.formatDate(nextCommunityDate.starts_at, true) : '';
  const staffContextHtml = cohort
    ? `<span><small>Your cohort</small><strong>${ctx.escapeHtml(cohort.name)}</strong></span><span><small>Group code</small><strong>${ctx.escapeHtml(cohort.code)}</strong></span><span><small>Programme dates</small><strong>${ctx.escapeHtml(cohortDates)}</strong></span>${nextCommunityLabel ? `<span><small>Next community date</small><strong>${ctx.escapeHtml(nextCommunityLabel)}</strong></span>` : ''}<span><small>Shared updates</small><strong>${cohortPostCount}</strong></span><span><small>Open commitments</small><strong>${cohortTaskCount}</strong></span>`
    : '<span><small>Cohort</small><strong>Placement pending</strong></span><span><small>Next step</small><strong>Your coaching team will assign your group.</strong></span>';
  const studentContextHtml = cohort
    ? `<span><small>Your cohort</small><strong>${ctx.escapeHtml(cohort.name)}</strong></span><span><small>Group code</small><strong>${ctx.escapeHtml(cohort.code)}</strong></span><span><small>Programme dates</small><strong>${ctx.escapeHtml(cohortDates)}</strong></span>${nextCommunityLabel ? `<span><small>Next community date</small><strong>${ctx.escapeHtml(nextCommunityLabel)}</strong></span>` : ''}<span><small>Shared updates</small><strong>${cohortPostCount}</strong></span><span><small>Open commitments</small><strong>${cohortTaskCount}</strong></span>`
    : '<span><small>Your cohort</small><strong>Placement pending</strong></span><span><small>Next step</small><strong>Your coaching team will assign your group.</strong></span>';
  const studentContext = qs<HTMLElement>('#student-cohort-context');
  const recordContext = qs<HTMLElement>('#record-cohort-context');
  if (ctx.profile.role === 'student' && studentContext) studentContext.innerHTML = studentContextHtml;
  if (ctx.profile.role !== 'student' && recordContext) recordContext.innerHTML = staffContextHtml;
  if (ctx.profile.role === 'student') {
    renderCommunityHub(cohort?.id || null, '#student-cohort-post-list', '#student-community-task-list', '#student-cohort-post-form', false);
    // Do not present a working-looking publisher before a student has a
    // cohort. Keep the community visible so the reason is clear, but disable
    // every control until there is a group to publish to.
    if (!cohort) {
      const composer = qs<HTMLFormElement>('#student-cohort-post-form');
      if (composer) {
        composer.classList.add('is-cohort-pending');
        composer.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | HTMLButtonElement>('input, textarea, select, button').forEach((control) => {
          control.disabled = true;
        });
        if (!composer.querySelector('.cohort-placement-notice')) {
          const notice = document.createElement('p');
          notice.className = 'cohort-placement-notice';
          notice.textContent = 'Your cohort will appear here once your coaching team places you in a group. You can then share updates, ask for help, and join group commitments.';
          composer.prepend(notice);
        }
      }
    } else {
      const composer = qs<HTMLFormElement>('#student-cohort-post-form');
      if (composer) {
        composer.classList.remove('is-cohort-pending');
        composer.querySelector('.cohort-placement-notice')?.remove();
        composer.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | HTMLButtonElement>('input, textarea, select, button').forEach((control) => {
          control.disabled = false;
        });
      }
    }
  }
  else {
    renderCohortPosts(cohort?.id || null, '#record-cohort-post-list', undefined, true);
    const recordSessionList = qs<HTMLElement>('#record-session-list');
    if (recordSessionList) {
      const sessions = cohort
        ? state.sessions
          .filter((session) => session.cohort_id === cohort.id)
          .sort((a, b) => new Date(String(a.starts_at || 0)).getTime() - new Date(String(b.starts_at || 0)).getTime())
        : [];
      recordSessionList.innerHTML = sessions.map((session) => sessionHtml(session, false)).join('')
        || '<div class="empty-state coaching-empty"><strong>No cohort meet-ups announced.</strong><span>Announcements made in the cohort community will appear here.</span></div>';
    }
  }
  const studentTasks = qs<HTMLElement>('#student-cohort-task-list');
  // Keep announced meet-ups visible inside the learner's community feed. The
  // activity stream is the primary experience, but a small schedule prevents
  // important dates from being lost among posts and group commitments.
  let studentSessionList = qs<HTMLElement>('#student-session-list');
  const studentSessions = cohort
    ? state.sessions.filter((session) => session.cohort_id === cohort.id)
    : [];
  // The feed is the primary student experience. Only add the optional dates
  // panel when there is an actual announcement to show; an empty schedule
  // card makes a new or quiet cohort look unfinished.
  if (!studentSessionList && studentPane && studentSessions.length > 0) {
    studentPane.querySelector('.student-community-hub')?.insertAdjacentHTML('beforeend', '<section class="community-schedule"><div class="section-heading"><div><p class="eyebrow">Upcoming together</p><h4>Community schedule</h4><p class="field-help">See announced meet-ups and what to prepare before you join.</p></div></div><div id="student-session-list" class="cohort-post-list"></div></section>');
    studentSessionList = qs<HTMLElement>('#student-session-list');
  }
  if (studentSessionList) {
    const sessions = studentSessions.sort((a, b) => new Date(String(a.starts_at || 0)).getTime() - new Date(String(b.starts_at || 0)).getTime());
    studentSessionList.innerHTML = sessions.map((session) => sessionHtml(session, false)).join('');
    if (!sessions.length) studentSessionList.closest('.community-schedule')?.remove();
  }
  // Students can mark a shared commitment complete themselves. The third
  // argument enables only the completion control; edit/remove controls remain
  // staff-scoped because the second argument is still false.
  if (studentTasks) {
    const sharedTasks = cohort ? state.tasks.filter((task) => task.cohort_id === cohort.id && task.status !== 'archived').map((task) => cohortTaskHtml(task, false, true)).join('') : '';
    const postedTasks = cohort ? communityPostTasks(cohort.id).map((post) => cohortPostTaskHtml(post, false)).join('') : '';
    studentTasks.innerHTML = cohort ? sharedTasks + postedTasks || '<div class="empty-state coaching-empty"><strong>No shared tasks yet.</strong><span>Anyone in your cohort can start one from the composer above when the group needs a clear commitment.</span><button class="secondary-button" type="button" data-focus-cohort-composer>Start a group task</button></div>' : '<div class="empty-state coaching-empty"><strong>Cohort placement pending.</strong><span>Shared tasks will appear after your coaching team places you in a cohort.</span></div>';
  }
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

function updateCohortSubmitState() {
  const form = qs<HTMLFormElement>('#cohort-form');
  const branch = qs<HTMLSelectElement>('#cohort-branch');
  const lead = qs<HTMLSelectElement>('#cohort-lead');
  const submit = form?.querySelector<HTMLButtonElement>('[type="submit"]');
  if (!submit || !branch) return;
  const hasBranch = Boolean(branch.options.length && branch.value);
  const hasRequiredLead = !lead?.required || Boolean(lead.value);
  submit.disabled = !hasBranch || !hasRequiredLead;
  const status = qs<HTMLElement>('#cohort-form-status');
  if (status && !hasBranch) status.textContent = 'Create or activate a branch before creating a cohort.';
  else if (status && !hasRequiredLead) status.textContent = 'Assign an active cohort lead before saving this cohort.';
  else if (status && !status.classList.contains('is-error')) status.textContent = '';
}

function openCohortDialog(id = '') {
  if (!ctx || !isStaff()) return;
  const form = qs<HTMLFormElement>('#cohort-form');
  const dialog = qs<HTMLDialogElement>('#cohort-dialog');
  const branch = qs<HTMLSelectElement>('#cohort-branch');
  if (!form || !dialog || !branch) return;
  setFormStatus('#cohort-form-status', '');
  form.reset();
  const row = state.cohorts.find((cohort) => cohort.id === id);
  branch.innerHTML = branchOptions(row?.branch_id || ctx.profile.branch_id || ctx.branches[0]?.id || '');
  if (row) setFormValues(form, row);
  const branchId = row?.branch_id || branch.value;
  populateLeadOptions(branchId, row?.lead_id || ctx.user.id);
  (form.elements.namedItem('id') as HTMLInputElement).value = row?.id || '';
  const title = qs<HTMLElement>('#cohort-dialog-title');
  if (title) title.textContent = row ? 'Edit cohort' : 'New cohort';
  updateCohortSubmitState();
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
  if (!ctx || !isStaff() || !state.selectedCohortId) return;
  const cohort = state.cohorts.find((row) => row.id === state.selectedCohortId);
  const form = qs<HTMLFormElement>('#cohort-session-form');
  const dialog = qs<HTMLDialogElement>('#cohort-session-dialog');
  const facilitator = qs<HTMLSelectElement>('#session-facilitator');
  if (!cohort || !form || !dialog || !facilitator) return;
  setFormStatus('#session-status', '');
  form.reset();
  const startsInput = form.elements.namedItem('starts_at') as HTMLInputElement | null;
  if (startsInput) {
    startsInput.min = cohort.starts_on ? `${cohort.starts_on}T00:00` : '';
    startsInput.max = cohort.ends_on ? `${cohort.ends_on}T23:59` : '';
  }
  const row = state.sessions.find((session) => session.id === id);
  const facilitators = staffForSession(cohort);
  facilitator.innerHTML = facilitators.map((profile) => `<option value="${ctx!.escapeHtml(profile.id)}">${ctx!.escapeHtml(profile.full_name)} · ${ctx!.escapeHtml(ctx!.formatRole(profile.role))}</option>`).join('');
  (form.elements.namedItem('cohort_id') as HTMLInputElement).value = cohort.id;
  if (row) setFormValues(form, row);
  else {
    const next = new Date();
    next.setDate(next.getDate() + 7);
    next.setHours(17, 0, 0, 0);
    (form.elements.namedItem('starts_at') as HTMLInputElement).value = toLocalInput(next.toISOString());
    facilitator.value = facilitators.some((profile) => profile.id === ctx!.user.id) ? ctx.user.id : cohort.lead_id || facilitator.value;
  }
  (form.elements.namedItem('id') as HTMLInputElement).value = row?.id || '';
  const context = qs<HTMLElement>('#cohort-session-context');
  if (context) context.textContent = `${cohort.name}${cohort.starts_on || cohort.ends_on ? ` · ${cohort.starts_on ? ctx.formatDate(cohort.starts_on) : 'Any start'} to ${cohort.ends_on ? ctx.formatDate(cohort.ends_on) : 'No end date'}` : ''}`;
  const title = qs<HTMLElement>('#cohort-session-dialog-title');
  if (title) title.textContent = row ? 'Update cohort announcement' : 'Share a cohort announcement';
  const submit = form.querySelector<HTMLButtonElement>('[type="submit"]');
  if (submit) submit.disabled = facilitators.length === 0;
  const sessionStatus = qs<HTMLElement>('#session-status');
  if (sessionStatus) sessionStatus.textContent = facilitators.length ? '' : 'No active facilitator is available in your scope. Ask an Admin or Head Coach to assign one before announcing a session.';
  dialog.showModal();
}

function openMembershipDialog() {
  if (!ctx || !state.selectedCohortId) return;
  const cohort = state.cohorts.find((row) => row.id === state.selectedCohortId);
  const form = qs<HTMLFormElement>('#cohort-membership-form');
  const dialog = qs<HTMLDialogElement>('#cohort-membership-dialog');
  const select = qs<HTMLSelectElement>('#membership-student');
  if (!cohort || !form || !dialog || !select) return;
  setFormStatus('#membership-status', '');
  form.reset();
  (form.elements.namedItem('cohort_id') as HTMLInputElement).value = cohort.id;
  // A suspended or archived account keeps its history, but must not be placed
  // into a live cohort. Membership changes are operational work for active
  // students only; the database remains the final permission boundary.
  const students = ctx.profiles.filter((profile) => profile.role === 'student' && profile.account_status === 'active' && profile.branch_id === cohort.branch_id && activeMembership(profile.id)?.cohort_id !== cohort.id);
  const atCapacity = cohortMemberships(cohort.id).length >= Number(cohort.capacity || 0);
  select.innerHTML = students.map((student) => {
    const current = getStudentCohort(student.id);
    return `<option value="${ctx!.escapeHtml(student.id)}">${ctx!.escapeHtml(student.full_name)}${current ? ` · from ${ctx!.escapeHtml(current.name)}` : ''}</option>`;
  }).join('');
  const context = qs<HTMLElement>('#membership-context');
  if (context) context.textContent = atCapacity
    ? `${cohort.name} is at its ${cohort.capacity}-student capacity. Increase capacity or choose another cohort before adding someone.`
    : students.length ? `Place a student in ${cohort.name}. Their previous membership will be closed.` : 'No active student in this branch is available to add right now.';
  const submit = form.querySelector<HTMLButtonElement>('[type="submit"]');
  if (submit) submit.disabled = students.length === 0 || atCapacity;
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
  setFormStatus('#attendance-status', '');
  form.reset();
  (form.elements.namedItem('session_id') as HTMLInputElement).value = session.id;
  const context = qs<HTMLElement>('#attendance-context');
  if (context) context.textContent = `${session.topic} · ${ctx.formatDate(session.starts_at, true)}`;
  roster.innerHTML = cohortMemberships(cohort.id).map((membership) => {
    const student = ctx!.profileById(membership.student_id);
    const existing = state.attendance.find((row) => row.session_id === session.id && row.student_id === membership.student_id);
    return `<label class="attendance-row" data-attendance-student="${ctx!.escapeHtml(membership.student_id)}"><span><strong>${ctx!.escapeHtml(student?.full_name || 'Student')}</strong><small>${ctx!.escapeHtml(student?.email || '')}</small></span><select data-attendance-status aria-label="Attendance for ${ctx!.escapeHtml(student?.full_name || 'student')}"><option value="not-recorded">Not recorded</option><option value="present">Present</option><option value="late">Late</option><option value="absent">Absent</option><option value="excused">Excused</option></select><input data-attendance-note aria-label="Participation note for ${ctx!.escapeHtml(student?.full_name || 'student')}" maxlength="1000" placeholder="Participation note" value="${ctx!.escapeHtml(existing?.participation_note || '')}" /></label>`;
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

function nextCohortCode() {
  const numbers = state.cohorts.map((cohort) => Number(String(cohort.code || '').match(/(?:COH-)?(\d+)/i)?.[1] || 0));
  return `COH-${String(Math.max(0, ...numbers) + 1).padStart(4, '0')}`;
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
  const startsOn = textValue(data.get('starts_on'));
  const endsOn = textValue(data.get('ends_on'));
  const status = qs<HTMLElement>('#cohort-form-status');
  if (!branchId || !branch) {
    if (status) status.textContent = 'Choose an active branch before saving the cohort.';
    return;
  }
  if (qs<HTMLSelectElement>('#cohort-lead')?.required && !textValue(data.get('lead_id'))) {
    if (status) status.textContent = 'Assign an active cohort lead before saving the cohort.';
    return;
  }
  if (startsOn && endsOn && endsOn < startsOn) {
    if (status) status.textContent = 'The end date must be on or after the start date.';
    return;
  }
  const code = id ? (state.cohorts.find((cohort) => cohort.id === id)?.code || '') : nextCohortCode();
  const rawName = textValue(data.get('name')).replace(/^COH-\d+\s*·\s*/i, '').trim();
  const row = {
    branch_id: branchId, name: `${code} · ${rawName || 'Cohort'}`.slice(0, 120),
    ...(id ? {} : { code }),
    program_track: data.get('program_track'), coaching_stage: data.get('coaching_stage'), delivery_mode: data.get('delivery_mode'),
    status: data.get('status'), lead_id: textValue(data.get('lead_id')) || null, capacity: numberValue(data.get('capacity'), 30),
    starts_on: startsOn || null, ends_on: endsOn || null,
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
  } catch (error) { const message = friendlyWorkspaceError(error, 'Could not save the cohort.'); setFormStatus('#cohort-form-status', message, true); ctx.setWorkspaceStatus(message, true); }
  finally { setBusy(button, false); }
}

async function handleSessionSubmit(event: SubmitEvent) {
  event.preventDefault();
  if (!ctx) return;
  const form = event.currentTarget as HTMLFormElement;
  const data = new FormData(form);
  const id = textValue(data.get('id'));
  const startsAt = textValue(data.get('starts_at'));
  const status = qs<HTMLElement>('#session-status');
  const parsedStartsAt = new Date(startsAt);
  if (!startsAt || Number.isNaN(parsedStartsAt.getTime())) {
    if (status) status.textContent = 'Choose a valid date and time for the session.';
    return;
  }
  const cohort = state.cohorts.find((item) => item.id === textValue(data.get('cohort_id')));
  const sessionDay = startsAt.slice(0, 10);
  if (cohort?.starts_on && sessionDay < cohort.starts_on) {
    if (status) status.textContent = `Choose a session date on or after the cohort start (${ctx.formatDate(cohort.starts_on)}).`;
    return;
  }
  if (cohort?.ends_on && sessionDay > cohort.ends_on) {
    if (status) status.textContent = `Choose a session date on or before the cohort end (${ctx.formatDate(cohort.ends_on)}).`;
    return;
  }
  const row = {
    cohort_id: data.get('cohort_id'), facilitator_id: data.get('facilitator_id'),
    starts_at: parsedStartsAt.toISOString(), duration_minutes: numberValue(data.get('duration_minutes'), 60),
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
  } catch (error) { const message = friendlyWorkspaceError(error, 'Could not save the announcement.'); setFormStatus('#session-status', message, true); ctx.setWorkspaceStatus(message, true); }
  finally { setBusy(button, false); }
}

async function handleCohortTaskSubmit(event: SubmitEvent) {
  event.preventDefault();
  if (!ctx || !state.selectedCohortId || !isStaff()) return;
  const form = event.currentTarget as HTMLFormElement;
  const data = new FormData(form);
  const id = textValue(data.get('id'));
  const addedOn = textValue(data.get('added_on')) || new Date().toISOString().slice(0, 10);
  const dueDate = textValue(data.get('due_date'));
  const status = qs<HTMLElement>('#cohort-task-status');
  if (dueDate && dueDate < addedOn) { if (status) status.textContent = 'The due date must be on or after the task date.'; return; }
  const row = {
    cohort_id: state.selectedCohortId, title: textValue(data.get('title')), details: textValue(data.get('details')),
    task_type: textValue(data.get('task_type')) || 'follow-up', priority: 'normal', status: id ? (textValue(data.get('status')) || 'open') : 'open',
    added_on: addedOn, due_date: dueDate || null, updated_by: ctx.user.id,
    ...(id ? {} : { created_by: ctx.user.id }),
  };
  const button = form.querySelector<HTMLButtonElement>('[type="submit"]');
  setBusy(button, true);
  try {
    const query = id ? ctx.client.from('cohort_tasks').update(row).eq('id', id) : ctx.client.from('cohort_tasks').insert(row);
    const response = await query.select('*').single();
    if (response.error) throw response.error;
    form.reset();
    (form.elements.namedItem('added_on') as HTMLInputElement).value = new Date().toISOString().slice(0, 10);
    await reloadAndRender(id ? 'Cohort task updated.' : 'Cohort task added.');
  } catch (error) { const message = friendlyWorkspaceError(error, 'Could not save the cohort task.'); setFormStatus('#cohort-task-status', message, true); ctx.setWorkspaceStatus(message, true); }
  finally { setBusy(button, false); }
}

async function toggleCohortTask(id: string) {
  if (!ctx) return;
  const task = state.tasks.find((row) => row.id === id);
  if (!task) return;
  try {
    if (ctx.profile.role === 'student') {
      if (task.status === 'done') return;
      const completed = await ctx.client.rpc('complete_cohort_task', { target_task_id: id });
      if (completed.error) throw completed.error;
      await reloadAndRender('Shared task marked complete.');
      return;
    }
    if (!isStaff()) return;
    const nextStatus = task.status === 'done' ? 'open' : 'done';
    const response = await ctx.client.from('cohort_tasks').update({ status: nextStatus, updated_by: ctx.user.id }).eq('id', id);
    if (response.error) throw response.error;
    await reloadAndRender(nextStatus === 'done' ? 'Cohort task marked complete.' : 'Cohort task reopened.');
  } catch (error) {
    ctx.setWorkspaceStatus(friendlyWorkspaceError(error, 'Could not update the cohort task. Please try again.'), true);
  }
}

async function deleteCohortTask(id: string) {
  if (!ctx || !isStaff()) return;
  const task = state.tasks.find((row) => row.id === id);
  if (!window.confirm(`Remove the group task “${task?.title || 'this task'}”? This cannot be undone.`)) return;
  try {
    const response = await ctx.client.from('cohort_tasks').delete().eq('id', id);
    if (response.error) throw response.error;
    await reloadAndRender('Cohort task removed.');
  } catch (error) {
    ctx.setWorkspaceStatus(friendlyWorkspaceError(error, 'Could not remove the cohort task. Please try again.'), true);
  }
}

function editCohortTask(id: string) {
  const task = state.tasks.find((row) => row.id === id);
  const form = qs<HTMLFormElement>('#cohort-task-form');
  if (!task || !form) return;
  setFormValues(form, task);
  form.scrollIntoView({ behavior: 'smooth', block: 'center' });
  (form.elements.namedItem('title') as HTMLInputElement)?.focus();
}

async function handleCohortPostSubmit(event: SubmitEvent) {
  event.preventDefault();
  if (!ctx) return;
  const form = event.currentTarget as HTMLFormElement;
  const data = new FormData(form);
  const id = textValue(data.get('id'));
  const cohortId = textValue(data.get('cohort_id'));
  const content = textValue(data.get('content'));
  const status = form.querySelector<HTMLElement>('[data-cohort-post-status]');
  if (!cohortId) { if (status) status.textContent = 'This participant is not placed in a cohort yet.'; return; }
  if (!content) { if (status) status.textContent = 'Write a message before posting.'; return; }
  const taskId = textValue(data.get('cohort_task_id')) || null;
  const isTask = data.get('is_task') === 'on';
  const dueDate = textValue(data.get('task_due_on')) || null;
  const requestedTaskTitle = textValue(data.get('task_title'));
  if (isTask && !requestedTaskTitle) {
    if (status) status.textContent = 'Add a short title for the group task so everyone can recognise it.';
    return;
  }
  const taskTitle = requestedTaskTitle || content.slice(0, 180);
  const resourceUrl = textValue(data.get('resource_url')) || null;
  if (resourceUrl) {
    try {
      const parsed = new URL(resourceUrl);
      if (!['http:', 'https:'].includes(parsed.protocol)) throw new Error('Unsupported protocol');
    } catch {
      if (status) status.textContent = 'Use a complete web address beginning with https:// (optional).';
      return;
    }
  }
  const button = form.querySelector<HTMLButtonElement>('[type="submit"]');
  setBusy(button, true, id ? 'Saving...' : 'Posting...');
  let createdTaskId: string | null = null;
  try {
    let linkedTaskId = taskId;
    if (isTask && !linkedTaskId) {
      const taskResponse = await ctx.client.from('cohort_tasks').insert({
        cohort_id: cohortId,
        title: taskTitle,
        details: content,
        task_type: 'other',
        priority: 'normal',
        status: 'open',
        added_on: new Date().toISOString().slice(0, 10),
        due_date: dueDate,
        created_by: ctx.user.id,
        updated_by: ctx.user.id,
      }).select('*').single();
      if (taskResponse.error) {
        const deniedForStudent = ctx.profile.role === 'student'
          && (taskResponse.error.code === '42501' || /row-level security|permission denied/i.test(taskResponse.error.message || ''));
        if (!deniedForStudent) throw taskResponse.error;
        // Students can always publish cohort posts. When the optional task
        // table is staff-managed, keep the commitment in the post itself so
        // it remains visible and completable rather than failing silently.
      } else {
        linkedTaskId = taskResponse.data.id;
        createdTaskId = linkedTaskId;
      }
    }
    const row = { cohort_id: cohortId, cohort_task_id: linkedTaskId, is_task: isTask, ...(isTask ? { task_due_on: dueDate, task_status: 'open' } : {}), resource_url: resourceUrl, content, updated_at: new Date().toISOString(), ...(id ? {} : { author_id: ctx.user.id }) };
    if (id && linkedTaskId) {
      const taskUpdate = isTask
        ? { title: taskTitle, details: content, due_date: dueDate, updated_by: ctx.user.id, updated_at: new Date().toISOString() }
        : { status: 'archived', updated_by: ctx.user.id, updated_at: new Date().toISOString() };
      const taskResponse = await ctx.client.from('cohort_tasks').update(taskUpdate).eq('id', linkedTaskId);
      if (taskResponse.error) throw taskResponse.error;
    }
    const response = id ? await ctx.client.from('cohort_posts').update(row).eq('id', id) : await ctx.client.from('cohort_posts').insert(row);
    if (response.error) throw response.error;
    form.reset();
    await reloadAndRender(id ? 'Cohort contribution updated.' : 'Contribution shared with the cohort.');
  } catch (error) {
    if (createdTaskId) {
      // Do not leave a task visible in the task centre when its originating
      // contribution could not be published.
      await ctx.client.from('cohort_tasks').delete().eq('id', createdTaskId);
    }
    const message = friendlyWorkspaceError(error, 'Could not save the cohort contribution.');
    if (status) status.textContent = message;
    ctx.setWorkspaceStatus(message, true);
  }
  finally { setBusy(button, false); }
}

async function handleCohortCommentSubmit(event: SubmitEvent) {
  event.preventDefault();
  if (!ctx) return;
  const form = (event.target as Element | null)?.closest<HTMLFormElement>('[data-cohort-comment-form]');
  if (!form) return;
  const postId = textValue((form.elements.namedItem('post_id') as HTMLInputElement | null)?.value as any);
  const content = textValue((form.elements.namedItem('content') as HTMLInputElement | null)?.value as any);
  const button = form.querySelector<HTMLButtonElement>('[type="submit"]');
  if (!postId || !content) return;
  setBusy(button, true, 'Posting...');
  try {
    const response = await ctx.client.from('cohort_post_comments').insert({ post_id: postId, author_id: ctx.user.id, content, updated_at: new Date().toISOString() });
    if (response.error) throw response.error;
    await reloadAndRender('Response added to the cohort feed.');
  } catch (error) {
    ctx.setWorkspaceStatus(friendlyWorkspaceError(error, 'Could not add the response.'), true);
  } finally { setBusy(button, false); }
}

async function deleteCohortComment(id: string) {
  if (!ctx || !id) return;
  const comment = state.comments.find((row) => row.id === id);
  if (!window.confirm(`Remove this response${comment?.content ? `: “${comment.content.slice(0, 60)}${comment.content.length > 60 ? '…' : ''}”` : ''}?`)) return;
  try {
    const response = await ctx.client.from('cohort_post_comments').delete().eq('id', id);
    if (response.error) throw response.error;
    await reloadAndRender('Response removed from the cohort feed.');
  } catch (error) {
    ctx.setWorkspaceStatus(friendlyWorkspaceError(error, 'Could not remove the response. Please try again.'), true);
  }
}

function editCohortPost(id: string) {
  const post = state.posts.find((row) => row.id === id);
  const preferredFormId = ctx?.profile.role === 'student' ? '#student-cohort-post-form' : '#cohort-post-form';
  const form = qs<HTMLFormElement>(preferredFormId) || qsa<HTMLFormElement>('[data-cohort-post-form]').find((candidate) => !candidate.hidden);
  if (!post || !form) return;
  setFormValues(form, post);
  const taskToggle = form.elements.namedItem('is_task') as HTMLInputElement | null;
  if (taskToggle) taskToggle.checked = Boolean(post.is_task);
  const taskTitle = form.elements.namedItem('task_title') as HTMLInputElement | null;
  const linkedTask = post.cohort_task_id ? state.tasks.find((row) => row.id === post.cohort_task_id) : null;
  if (taskTitle) taskTitle.value = linkedTask?.title ?? '';
  taskToggle?.dispatchEvent(new Event('change'));
  form.scrollIntoView({ behavior: 'smooth', block: 'center' });
  (form.elements.namedItem('content') as HTMLTextAreaElement)?.focus();
}

function focusCohortComposer() {
  const preferredFormId = ctx?.profile.role === 'student' ? '#student-cohort-post-form' : '#cohort-post-form';
  const form = qs<HTMLFormElement>(preferredFormId) || qsa<HTMLFormElement>('[data-cohort-post-form]').find((candidate) => !candidate.hidden);
  if (!form) return;
  const taskMode = form.querySelector<HTMLButtonElement>('[data-cohort-mode="task"]');
  if (taskMode) taskMode.click();
  else {
    const toggle = form.elements.namedItem('is_task') as HTMLInputElement | null;
    if (toggle && !toggle.checked) {
      toggle.checked = true;
      toggle.dispatchEvent(new Event('change', { bubbles: true }));
    }
  }
  form.scrollIntoView({ behavior: 'smooth', block: 'center' });
  (form.elements.namedItem('task_title') as HTMLInputElement | null)?.focus();
}

async function deleteCohortPost(id: string) {
  if (!ctx) return;
  const post = state.posts.find((row) => row.id === id);
  if (!window.confirm(`Remove this cohort contribution${post?.content ? `: “${post.content.slice(0, 60)}${post.content.length > 60 ? '…' : ''}”` : ''}? This cannot be undone.`)) return;
  try {
    const response = await ctx.client.from('cohort_posts').delete().eq('id', id);
    if (response.error) throw response.error;
    await reloadAndRender('Contribution removed.');
  } catch (error) {
    ctx.setWorkspaceStatus(friendlyWorkspaceError(error, 'Could not remove the contribution. Please try again.'), true);
  }
}

async function completeCohortPost(id: string) {
  if (!ctx) return;
  const post = state.posts.find((item) => item.id === id);
  const completedAt = new Date().toISOString();
  try {
    const response = await ctx.client.from('cohort_posts').update({ task_status: 'done', task_completed_by: ctx.user.id, task_completed_at: completedAt, updated_at: completedAt }).eq('id', id).eq('is_task', true);
    if (response.error) throw response.error;
    if (post?.cohort_task_id) {
      const taskResponse = await ctx.client.rpc('complete_cohort_task', { target_task_id: post.cohort_task_id });
      if (taskResponse.error) throw new Error(`The contribution was updated, but the linked group task could not be updated: ${taskResponse.error.message || 'try again.'}`);
    }
    await reloadAndRender('Group commitment marked complete.');
  } catch (error) {
    ctx.setWorkspaceStatus(friendlyWorkspaceError(error, 'Could not mark the commitment complete. Please try again.'), true);
  }
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
  } catch (error) { const message = friendlyWorkspaceError(error, 'Could not update the membership.'); setFormStatus('#membership-status', message, true); ctx.setWorkspaceStatus(message, true); }
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
  } catch (error) { const message = friendlyWorkspaceError(error, 'Could not save attendance.'); setFormStatus('#attendance-status', message, true); ctx.setWorkspaceStatus(message, true); }
  finally { setBusy(button, false); }
}

function bindEvents() {
  if (bound) return;
  bound = true;
  qs<HTMLFormElement>('#cohort-form')?.addEventListener('submit', handleCohortSubmit);
  qs<HTMLFormElement>('#cohort-session-form')?.addEventListener('submit', handleSessionSubmit);
  qs<HTMLFormElement>('#cohort-task-form')?.addEventListener('submit', handleCohortTaskSubmit);
  qsa<HTMLFormElement>('[data-cohort-post-form]').forEach((form) => {
    setUpCohortPostComposer(form);
    form.addEventListener('submit', handleCohortPostSubmit);
  });
  qs<HTMLFormElement>('#cohort-membership-form')?.addEventListener('submit', handleMembershipSubmit);
  qs<HTMLFormElement>('#attendance-form')?.addEventListener('submit', handleAttendanceSubmit);
  const resetCohortPageAndRender = () => { resetWorkspacePagination(cohortIndexPagination); renderCohortIndex(); };
  qs<HTMLInputElement>('#cohort-search')?.addEventListener('input', resetCohortPageAndRender);
  qs<HTMLSelectElement>('#cohort-status-filter')?.addEventListener('change', resetCohortPageAndRender);
  qs<HTMLSelectElement>('#cohort-session-filter')?.addEventListener('change', renderCohortWorkspace);
  qs<HTMLSelectElement>('#student-session-filter')?.addEventListener('change', renderCohortWorkspace);
  qs<HTMLSelectElement>('#record-session-filter')?.addEventListener('change', renderCohortWorkspace);
  qs<HTMLSelectElement>('#cohort-branch')?.addEventListener('change', (event) => {
    populateLeadOptions((event.currentTarget as HTMLSelectElement).value, ctx?.user.id);
    updateCohortSubmitState();
  });
  qs<HTMLSelectElement>('#cohort-lead')?.addEventListener('change', updateCohortSubmitState);
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
  document.addEventListener('submit', (event) => {
    const form = (event.target as Element | null)?.closest<HTMLFormElement>('[data-cohort-comment-form]');
    if (form) void handleCohortCommentSubmit(event as SubmitEvent);
  });
  document.addEventListener('click', (event) => {
    const target = event.target as Element;
    const deleteComment = target.closest<HTMLElement>('[data-delete-cohort-comment]');
    if (deleteComment) { void deleteCohortComment(deleteComment.dataset.deleteCohortComment || ''); return; }
    if (target.closest('#new-cohort-button')) { openCohortDialog(); return; }
    if (target.closest('#edit-cohort-button')) { openCohortDialog(state.selectedCohortId || ''); return; }
    if (target.closest('#cohort-detail-back')) { state.selectedCohortId = null; renderCohortWorkspace(); return; }
     if (target.closest('#announce-session-button')) { openSessionDialog(); return; }
     if (target.closest('#move-student-button')) { openMembershipDialog(); return; }
     if (target.closest('[data-open-cohort-membership]')) { openMembershipDialog(); return; }
     if (target.closest('[data-open-cohort-session]')) { openSessionDialog(); return; }
    if (target.closest('[data-open-student-cohort]')) {
      const studentId = ctx?.profile.role === 'student' ? ctx.profile.id : ctx?.selectedStudentId;
      if (studentId) openStudentCohort(studentId);
      return;
    }
    if (target.closest('[data-focus-cohort-composer]')) { focusCohortComposer(); return; }
    const cohort = target.closest<HTMLElement>('[data-open-cohort]');
    if (cohort) { state.selectedCohortId = cohort.dataset.openCohort || null; renderCohortWorkspace(); return; }
    const session = target.closest<HTMLElement>('[data-edit-cohort-session]');
    if (session) { openSessionDialog(session.dataset.editCohortSession || ''); return; }
    const attendance = target.closest<HTMLElement>('[data-open-attendance]');
    if (attendance) openAttendanceDialog(attendance.dataset.openAttendance || '');
    const taskToggle = target.closest<HTMLElement>('[data-toggle-cohort-task]');
    if (taskToggle) { void toggleCohortTask(taskToggle.dataset.toggleCohortTask || ''); return; }
    const taskDelete = target.closest<HTMLElement>('[data-delete-cohort-task]');
    if (taskDelete) { void deleteCohortTask(taskDelete.dataset.deleteCohortTask || ''); return; }
    const taskEdit = target.closest<HTMLElement>('[data-edit-cohort-task]');
    if (taskEdit) { editCohortTask(taskEdit.dataset.editCohortTask || ''); return; }
    const postEdit = target.closest<HTMLElement>('[data-edit-cohort-post]');
    if (postEdit) { editCohortPost(postEdit.dataset.editCohortPost || ''); return; }
    const postDelete = target.closest<HTMLElement>('[data-delete-cohort-post]');
    if (postDelete) { void deleteCohortPost(postDelete.dataset.deleteCohortPost || ''); return; }
    const postComplete = target.closest<HTMLElement>('[data-complete-cohort-post]');
    if (postComplete) { void completeCohortPost(postComplete.dataset.completeCohortPost || ''); return; }
    if (target.closest('[data-reset-cohort-task]')) {
      const form = qs<HTMLFormElement>('#cohort-task-form');
      form?.reset();
      if (form) (form.elements.namedItem('added_on') as HTMLInputElement).value = new Date().toISOString().slice(0, 10);
    }
  });
}
