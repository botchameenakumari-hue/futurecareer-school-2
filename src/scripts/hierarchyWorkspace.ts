import { isSupabaseConfigured, supabase } from '../lib/supabase';
import {
  backToCaseload,
  coachingAttentionItems,
  coachingOverviewMetrics,
  loadCoachingWorkspace,
  openCoachingRecord,
  renderCoachingWorkspace,
  studentOverviewMetrics,
} from './coachingWorkspace';
import { examTargetPresets, nonNegotiablePresets } from '../data/coachingPresets';

type Role = 'admin' | 'branch_head' | 'head_coach' | 'coach' | 'student';
type RecordRow = Record<string, any>;
type TestCredential = { email: string; password: string; fullName: string; role: Role };
type PasswordSetupMode = 'invite' | 'recovery' | 'temporary';
type AuthEntryMode = 'sign-in' | 'recovery';

type WorkspaceState = {
  user: RecordRow | null;
  profile: RecordRow | null;
  profiles: RecordRow[];
  branches: RecordRow[];
  requests: RecordRow[];
  activity: RecordRow[];
  constraints: RecordRow[];
  selectedStudentId: string | null;
  activeView: string;
  credentials: TestCredential[];
};

const ROLE_LAB_KEY = 'fcs_role_lab_credentials_v2';
const PROFILE_SELECT = 'id,email,full_name,role,account_status,branch_id,supervisor_id,stage,city,target_outcome,onboarding_completed,must_change_password,setup_email_sent_at,temporary_password_issued_at,password_set_at,created_at,updated_at';

const roleLabels: Record<Role, string> = {
  admin: 'Admin',
  branch_head: 'Branch Head',
  head_coach: 'Head Coach',
  coach: 'Coach',
  student: 'Student',
};
const roleOrder: Role[] = ['admin', 'branch_head', 'head_coach', 'coach', 'student'];
const creationMatrix: Record<Role, Role[]> = {
  admin: ['branch_head', 'head_coach', 'coach', 'student'],
  branch_head: ['head_coach', 'coach', 'student'],
  head_coach: ['coach', 'student'],
  coach: ['student'],
  student: [],
};
const supervisorMatrix: Record<Exclude<Role, 'admin'>, Role[]> = {
  branch_head: ['admin'],
  head_coach: ['branch_head'],
  coach: ['head_coach'],
  student: ['head_coach', 'coach'],
};

const viewMeta: Record<string, { eyebrow: string; title: string; subtitle: string }> = {
  overview: { eyebrow: 'Coaching operations', title: 'Overview', subtitle: 'Case movement, upcoming work, and business attention across your scope.' },
  caseload: { eyebrow: 'Coaching operations', title: 'Caseload', subtitle: 'Prioritise decisions, development, cohort delivery, and follow-through.' },
  cohorts: { eyebrow: 'Group coaching delivery', title: 'Cohorts', subtitle: 'Membership, session announcements, preparation, and attendance across your scope.' },
  people: { eyebrow: 'Organisation', title: 'People & access', subtitle: 'Reporting lines, account readiness, and student records inside your scope.' },
  accounts: { eyebrow: 'Access control', title: 'Account requests', subtitle: 'Requests, approvals, and account history.' },
  branches: { eyebrow: 'Organisation', title: 'Branches', subtitle: 'Branch ownership and staffing at a glance.' },
  activity: { eyebrow: 'Accountability', title: 'Activity log', subtitle: 'Security and operational changes inside your visible scope.' },
  career: { eyebrow: 'Student workspace', title: 'My coaching plan', subtitle: 'Your primary direction, alternatives, skills, cohort sessions, and next actions.' },
  constraints: { eyebrow: 'Student workspace', title: 'My context', subtitle: 'The real constraints that shape a practical career plan.' },
  'student-record': { eyebrow: 'Coaching workspace', title: 'Student record', subtitle: 'A working record of direction, evidence, skills, sessions, context, and follow-through.' },
  'role-lab': { eyebrow: 'Local testing', title: 'Role Lab', subtitle: 'Switch through the full hierarchy with isolated test identities.' },
};

const state: WorkspaceState = {
  user: null,
  profile: null,
  profiles: [],
  branches: [],
  requests: [],
  activity: [],
  constraints: [],
  selectedStudentId: null,
  activeView: 'overview',
  credentials: [],
};

const client = supabase as any;

function readPasswordSetupModeFromUrl(): PasswordSetupMode | null {
  const hash = new URLSearchParams(window.location.hash.slice(1));
  const query = new URLSearchParams(window.location.search);
  const type = hash.get('type') ?? query.get('type');
  return type === 'invite' || type === 'recovery' ? type : null;
}

let passwordSetupMode = readPasswordSetupModeFromUrl();
let authEntryMode: AuthEntryMode = 'sign-in';
let branchCodeManuallyEdited = false;

function qs<T extends Element>(selector: string, root: ParentNode = document) {
  return root.querySelector(selector) as T | null;
}

function qsa<T extends Element>(selector: string, root: ParentNode = document) {
  return Array.from(root.querySelectorAll(selector)) as T[];
}

function escapeHtml(value: unknown) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function initials(name: unknown) {
  const parts = String(name ?? '').trim().split(/\s+/).filter(Boolean);
  return (parts.slice(0, 2).map((part) => part[0]).join('') || 'FC').toUpperCase();
}

function formatRole(role: unknown) {
  return roleLabels[role as Role] ?? String(role ?? '').replaceAll('_', ' ');
}

function formatStatus(status: unknown) {
  const text = String(status ?? '');
  return text ? text[0].toUpperCase() + text.slice(1).replace(/[_-]+/g, ' ') : 'Unknown';
}

function formatDate(value: unknown, includeTime = false) {
  if (!value) return 'Not set';
  const date = new Date(String(value));
  if (Number.isNaN(date.getTime())) return 'Not set';
  return new Intl.DateTimeFormat('en-IN', includeTime
    ? { day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: '2-digit' }
    : { day: 'numeric', month: 'short', year: 'numeric' }).format(date);
}

function branchCodeSuggestion(name: unknown, city: unknown, currentBranchId = '') {
  const ignored = new Set(['BRANCH', 'CENTER', 'CENTRE', 'OFFICE', 'SCHOOL']);
  const words = `${String(city ?? '')} ${String(name ?? '')}`
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, ' ')
    .trim()
    .split(/\s+/)
    .filter((word) => word && !ignored.has(word))
    .filter((word, index, allWords) => allWords.indexOf(word) === index);
  const seed = (words.slice(0, 2).join('-') || 'BRANCH').slice(0, 20).replace(/-+$/g, '');
  let candidate = seed.length > 1 ? seed : `BR-${seed}`;
  let suffix = 2;
  while (state.branches.some((branch) => branch.id !== currentBranchId && branch.code === candidate)) {
    const ending = `-${suffix}`;
    candidate = `${seed.slice(0, 20 - ending.length).replace(/-+$/g, '')}${ending}`;
    suffix += 1;
  }
  return candidate;
}

function splitList(value: FormDataEntryValue | null) {
  return String(value ?? '').split(',').map((item) => item.trim()).filter(Boolean).slice(0, 30);
}

function prepareGuidedListPresets() {
  const nonNegotiables = qs<HTMLSelectElement>('#non-negotiable-preset');
  if (nonNegotiables && nonNegotiables.options.length === 1) {
    nonNegotiables.insertAdjacentHTML('beforeend', nonNegotiablePresets.map((item) => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`).join(''));
  }
  const exams = qs<HTMLSelectElement>('#exam-target-preset');
  if (exams && exams.options.length === 1) {
    exams.insertAdjacentHTML('beforeend', examTargetPresets.map((item) => `<option value="${escapeHtml(item)}">${escapeHtml(item)}</option>`).join(''));
  }
}

function appendGuidedListPreset(select: HTMLSelectElement, inputSelector: string) {
  const value = select.value.trim();
  const input = qs<HTMLInputElement>(inputSelector);
  if (!value || !input) return;
  const values = splitList(input.value);
  if (!values.some((item) => item.toLowerCase() === value.toLowerCase())) values.push(value);
  input.value = values.join(', ');
  select.value = '';
  input.dispatchEvent(new Event('input', { bubbles: true }));
}

function asNullableNumber(value: FormDataEntryValue | null) {
  const text = String(value ?? '').trim();
  if (!text) return null;
  const number = Number(text);
  return Number.isFinite(number) ? number : null;
}

function setText(selector: string, value: unknown) {
  const element = qs<HTMLElement>(selector);
  if (element) element.textContent = String(value ?? '');
}

function setStatus(element: HTMLElement | null, message: string, isError = false) {
  if (!element) return;
  element.textContent = message;
  element.classList.toggle('is-error', isError);
}

function setBusy(button: HTMLButtonElement | null, busy: boolean, busyLabel = 'Working...') {
  if (!button) return;
  if (busy) {
    button.dataset.originalHtml = button.innerHTML;
    button.textContent = busyLabel;
    button.disabled = true;
  } else {
    if (button.dataset.originalHtml) button.innerHTML = button.dataset.originalHtml;
    button.disabled = false;
  }
}

function withTimeout<T>(promise: Promise<T>, milliseconds = 12000): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) => window.setTimeout(() => reject(new Error('The workspace connection timed out.')), milliseconds)),
  ]);
}

function readCredentials() {
  if (!import.meta.env.DEV) return [];
  try {
    const parsed = JSON.parse(window.localStorage.getItem(ROLE_LAB_KEY) ?? '[]');
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item) => item?.email && item?.password && item?.role) as TestCredential[];
  } catch {
    return [];
  }
}

function saveCredentials(credentials: TestCredential[]) {
  if (!import.meta.env.DEV) return;
  const byEmail = new Map<string, TestCredential>();
  [...state.credentials, ...credentials].forEach((credential) => byEmail.set(credential.email, credential));
  state.credentials = Array.from(byEmail.values());
  window.localStorage.setItem(ROLE_LAB_KEY, JSON.stringify(state.credentials));
  renderQuickRoleAccess();
  renderRoleLab();
}

function markReady() {
  const root = qs<HTMLElement>('#hierarchy-workspace');
  if (root) root.dataset.ready = 'true';
  const boot = qs<HTMLElement>('#workspace-boot');
  if (boot) boot.hidden = true;
}

function showAuthMode(mode: AuthEntryMode) {
  authEntryMode = mode;
  const entry = qs<HTMLElement>('.auth-entry-inner');
  const signInPanel = qs<HTMLElement>('#sign-in-panel');
  const recoveryPanel = qs<HTMLElement>('#recovery-request-panel');
  const passwordPanel = qs<HTMLElement>('#password-setup-panel');
  entry?.classList.remove('is-password-setup');
  if (signInPanel) signInPanel.hidden = mode !== 'sign-in';
  if (recoveryPanel) recoveryPanel.hidden = mode !== 'recovery';
  if (passwordPanel) passwordPanel.hidden = true;
  qsa<HTMLButtonElement>('[data-auth-mode]').forEach((button) => {
    const active = button.dataset.authMode === mode;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-selected', String(active));
  });
  renderQuickRoleAccess();
  window.setTimeout(() => {
    const selector = mode === 'sign-in' ? '#sign-in-email' : '#recovery-email';
    qs<HTMLInputElement>(selector)?.focus();
  }, 0);
}

function showAuth(message = '') {
  markReady();
  const auth = qs<HTMLElement>('#auth-shell');
  const workspace = qs<HTMLElement>('#workspace-shell');
  const access = qs<HTMLElement>('#access-shell');
  if (auth) auth.hidden = false;
  if (workspace) workspace.hidden = true;
  if (access) access.hidden = true;
  setStatus(qs<HTMLElement>('#auth-status'), message, Boolean(message));
  setStatus(qs<HTMLElement>('#recovery-status'), '');
  showAuthMode('sign-in');
}

function passwordChecks(password: string) {
  return {
    length: password.length >= 4,
  };
}

function renderPasswordChecks() {
  const password = qs<HTMLInputElement>('#new-password')?.value ?? '';
  const checks = passwordChecks(password);
  qsa<HTMLElement>('[data-password-check]').forEach((element) => {
    const key = element.dataset.passwordCheck as keyof typeof checks;
    element.classList.toggle('is-met', Boolean(checks[key]));
  });
}

function showPasswordSetup(mode: PasswordSetupMode) {
  passwordSetupMode = mode;
  showAuth();
  const entry = qs<HTMLElement>('.auth-entry-inner');
  const passwordPanel = qs<HTMLElement>('#password-setup-panel');
  entry?.classList.add('is-password-setup');
  if (passwordPanel) passwordPanel.hidden = false;

  const copy = mode === 'invite'
    ? { eyebrow: 'Account approved', title: 'Create your password', note: 'Secure this account for future sign-ins.' }
    : mode === 'temporary'
      ? { eyebrow: 'First sign-in', title: 'Replace your temporary password', note: 'Choose a private password before entering the workspace.' }
      : { eyebrow: 'Account recovery', title: 'Choose a new password', note: 'Replace the password for this account.' };
  setText('#password-setup-eyebrow', copy.eyebrow);
  setText('#password-setup-title', copy.title);
  const emailInput = qs<HTMLInputElement>('#password-setup-email');
  if (emailInput) emailInput.value = state.user?.email ?? '';
  setText(
    '#password-setup-note',
    `${copy.note} ${state.user?.email ? `Account: ${state.user.email}` : ''}`.trim(),
  );
  setStatus(qs<HTMLElement>('#password-setup-status'), '');
  renderPasswordChecks();
  window.setTimeout(() => qs<HTMLInputElement>('#new-password')?.focus(), 0);
}

function showAccess(message: string) {
  markReady();
  const auth = qs<HTMLElement>('#auth-shell');
  const workspace = qs<HTMLElement>('#workspace-shell');
  const access = qs<HTMLElement>('#access-shell');
  if (auth) auth.hidden = true;
  if (workspace) workspace.hidden = true;
  if (access) access.hidden = false;
  setText('#access-message', message);
}

function showWorkspace() {
  markReady();
  const auth = qs<HTMLElement>('#auth-shell');
  const workspace = qs<HTMLElement>('#workspace-shell');
  const access = qs<HTMLElement>('#access-shell');
  if (auth) auth.hidden = true;
  if (workspace) workspace.hidden = false;
  if (access) access.hidden = true;
}

function profileById(id: unknown) {
  return state.profiles.find((profile) => profile.id === id) ?? null;
}

function branchById(id: unknown) {
  return state.branches.find((branch) => branch.id === id) ?? null;
}

function constraintByStudent(id: unknown) {
  return state.constraints.find((constraint) => constraint.student_id === id) ?? null;
}

function allowedForRole(roles: string, role: Role) {
  return roles === 'all' || roles.split(',').includes(role);
}

function syncRoleVisibility() {
  if (!state.profile) return;
  const role = state.profile.role as Role;
  qsa<HTMLElement>('[data-roles]').forEach((element) => {
    element.hidden = !allowedForRole(element.dataset.roles ?? '', role);
  });
  buildMobileNav();
}

function buildMobileNav() {
  const mobile = qs<HTMLElement>('#mobile-nav');
  if (!mobile) return;
  const allowed = qsa<HTMLButtonElement>('.workspace-nav .nav-item').filter((item) => !item.hidden);
  mobile.innerHTML = allowed.map((item) => {
    const icon = item.querySelector('svg')?.outerHTML ?? '';
    const label = item.querySelector('span')?.textContent ?? '';
    const active = item.dataset.viewTarget === state.activeView ? ' is-active' : '';
    return `<button class="${active}" type="button" data-view-target="${escapeHtml(item.dataset.viewTarget)}">${icon}<span>${escapeHtml(label)}</span></button>`;
  }).join('');
}

function openView(view: string) {
  const target = qs<HTMLElement>(`[data-workspace-view="${view}"]`);
  if (!target) return;
  state.activeView = view;
  qsa<HTMLElement>('[data-workspace-view]').forEach((section) => {
    const active = section.dataset.workspaceView === view;
    section.hidden = !active;
    section.classList.toggle('is-active', active);
  });
  qsa<HTMLButtonElement>('[data-view-target]').forEach((button) => {
    const active = button.dataset.viewTarget === view;
    button.classList.toggle('is-active', active);
    if (active) button.setAttribute('aria-current', 'page');
    else button.removeAttribute('aria-current');
  });
  const meta = viewMeta[view] ?? viewMeta.overview;
  setText('#view-eyebrow', meta.eyebrow);
  setText('#view-title', meta.title);
  setText('#view-subtitle', meta.subtitle);
  buildMobileNav();
  qs<HTMLElement>('#hierarchy-workspace')?.classList.remove('is-menu-open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function invokeAccountAction(body: Record<string, unknown>) {
  const { data, error } = await client.functions.invoke('manage-accounts', { body });
  if (error) {
    let message = error.message || 'The account service could not complete this action.';
    const context = error.context as Response | undefined;
    if (context && typeof context.clone === 'function') {
      try {
        const payload = await context.clone().json();
        if (payload?.error) message = payload.error;
      } catch {
        // Keep the function error message when the response has no JSON body.
      }
    }
    throw new Error(message);
  }
  if (data?.error) throw new Error(data.error);
  return data;
}

async function loadWorkspaceData(user: RecordRow) {
  const profileResponse = await withTimeout<any>(client
    .from('profiles')
    .select(PROFILE_SELECT)
    .eq('id', user.id)
    .single());

  if (profileResponse.error || !profileResponse.data) {
    throw new Error('This login does not have an active, approved profile.');
  }
  if (profileResponse.data.account_status !== 'active') {
    throw new Error(`This account is ${profileResponse.data.account_status}. Ask the Admin to review it.`);
  }
  const currentProfile = profileResponse.data as RecordRow;
  state.profile = currentProfile;

  const includeActivity = ['admin', 'branch_head'].includes(currentProfile.role);
  const [profilesResponse, branchesResponse, requestsResponse, constraintsResponse, activityResponse] = await withTimeout<any[]>(Promise.all([
    client.from('profiles').select(PROFILE_SELECT).order('full_name'),
    client.from('branches').select('*').order('name'),
    client.from('account_requests').select('*').order('created_at', { ascending: false }),
    client.from('student_constraints').select('*'),
    includeActivity ? client.from('audit_events').select('*').order('created_at', { ascending: false }).limit(100) : Promise.resolve({ data: [], error: null }),
  ]));
  const firstError = [profilesResponse.error, branchesResponse.error, requestsResponse.error, constraintsResponse.error, activityResponse.error].find(Boolean);
  if (firstError) throw firstError;
  state.profiles = profilesResponse.data ?? [];
  state.branches = branchesResponse.data ?? [];
  state.requests = requestsResponse.data ?? [];
  state.constraints = constraintsResponse.data ?? [];
  state.activity = activityResponse.data ?? [];

  await loadCoachingWorkspace(coachingContext());
}

function renderIdentity() {
  if (!state.profile || !state.user) return;
  const name = state.profile.full_name || state.user.email || 'Workspace member';
  const value = initials(name);
  const branch = branchById(state.profile.branch_id);
  const scopeName = state.profile.role === 'admin' ? 'All branches' : branch?.name || 'Branch not assigned';
  const scopeCode = state.profile.role === 'admin' ? 'ORG' : branch?.code || '---';
  setText('#sidebar-user-name', name);
  setText('#sidebar-role', roleLabels[state.profile.role as Role]);
  setText('#sidebar-initials', value);
  setText('#mobile-initials', value);
  setText('#sidebar-branch-name', scopeName);
  setText('#sidebar-branch-code', scopeCode);
  setText('#workspace-branch-name', scopeName);
  setText('#workspace-branch-code', scopeCode);
  const accountLabel = state.profile.role === 'admin' ? 'Create account' : 'Request account';
  setText('#new-account-label', accountLabel);
}

function constraintsScore(constraint: RecordRow | null) {
  if (!constraint) return 0;
  const checks = [
    constraint.budget_range && constraint.budget_range !== 'not-set',
    constraint.available_hours_per_week != null,
    constraint.max_commute_minutes != null,
    constraint.willing_to_relocate != null,
    constraint.device_access && constraint.device_access !== 'not-set',
    constraint.internet_access && constraint.internet_access !== 'not-set',
    Boolean(constraint.family_expectations),
    Boolean(constraint.education_timeline),
    constraint.risk_tolerance != null,
    Array.isArray(constraint.non_negotiables) && constraint.non_negotiables.length > 0,
  ];
  return Math.round((checks.filter(Boolean).length / checks.length) * 100);
}

function metricHtml(label: string, value: string | number, note: string) {
  return `<div class="metric-item"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong><small>${escapeHtml(note)}</small></div>`;
}

function attentionHtml(title: string, detail: string, action = '', view = '', studentId = '') {
  const attrs = studentId
    ? `data-student-id="${escapeHtml(studentId)}"`
    : view ? `data-open-view="${escapeHtml(view)}"` : '';
  return `<div class="attention-item"><span class="attention-dot"></span><span><strong>${escapeHtml(title)}</strong><small>${escapeHtml(detail)}</small></span>${action ? `<button class="inline-link-button" type="button" ${attrs}>${escapeHtml(action)}</button>` : ''}</div>`;
}

function renderOverview() {
  if (!state.profile) return;
  const role = state.profile.role as Role;
  const people = state.profiles.filter((profile) => profile.id !== state.profile?.id);
  const students = state.profiles.filter((profile) => profile.role === 'student');
  const pending = state.requests.filter((request) => request.status === 'pending');
  const setupPending = people.filter((profile) => profile.account_status === 'active' && profile.must_change_password);
  const metric = qs<HTMLElement>('#overview-metrics');
  const attention = qs<HTMLElement>('#attention-list');
  const structure = qs<HTMLElement>('#structure-list');
  if (!metric || !attention || !structure) return;

  if (role === 'student') {
    const contextScore = constraintsScore(constraintByStudent(state.profile.id));
    const plan = studentOverviewMetrics(state.profile.id);
    metric.innerHTML = [
      metricHtml('Career options', plan.careers, 'Directions under review'),
      metricHtml('Shortlisted', plan.shortlisted, 'Testing or selected'),
      metricHtml('Skill gaps', plan.skillGaps, 'Development priorities'),
      metricHtml('Open actions', plan.openActions, 'Practical next moves'),
    ].join('');

    const items: string[] = [];
    if (!plan.careers) items.push(attentionHtml('Map your first career option', 'Start with one course, role, or route worth investigating.', 'Open plan', 'career'));
    if (plan.skillGaps) items.push(attentionHtml(`${plan.skillGaps} skill gap${plan.skillGaps === 1 ? '' : 's'} need evidence`, 'Choose a development goal and add proof as you progress.', 'Review skills', 'career'));
    if (plan.openActions) items.push(attentionHtml(`${plan.openActions} action${plan.openActions === 1 ? '' : 's'} in progress`, 'Keep the next commitment specific and realistic.', 'Open actions', 'career'));
    if (!plan.nextSession) items.push(attentionHtml('No coaching session is booked', 'Your coach can schedule the next review from the shared record.', 'Open plan', 'career'));
    attention.innerHTML = items.slice(0, 5).join('') || attentionHtml('Your plan is moving', 'Keep adding evidence and completing the next useful action.');

    const steps = [
      ['Career context', contextScore >= 70],
      ['Career options', plan.careers > 0],
      ['Skills roadmap', plan.skillGaps > 0],
      ['Action plan', plan.openActions > 0],
      ['Next session', Boolean(plan.nextSession)],
    ];
    structure.innerHTML = steps.map(([label, done], index) => `<div class="structure-row"><span class="structure-index">0${index + 1}</span><span>${escapeHtml(label)}</span><strong>${done ? 'Ready' : 'Open'}</strong></div>`).join('');
    setText('#attention-title', 'What needs your attention');
    setText('#structure-title', 'Plan readiness');
    const focus = qs<HTMLElement>('#student-focus');
    if (focus) focus.hidden = false;
    const button = qs<HTMLButtonElement>('#student-focus-action');
    if (contextScore < 70) {
      setText('#student-focus-title', 'Complete your real-world context');
      setText('#student-focus-copy', 'Budget, time, travel, access, and family context help your coach build a plan you can actually use.');
      if (button) button.dataset.openView = 'constraints';
    } else if (!plan.careers) {
      setText('#student-focus-title', 'Start your decision workspace');
      setText('#student-focus-copy', 'Add the first career, course, or route worth exploring and record how you will test it.');
      if (button) button.dataset.openView = 'career';
    } else {
      setText('#student-focus-title', 'Move one decision forward');
      setText('#student-focus-copy', 'Review your options, update skill evidence, and close the next practical action.');
      if (button) button.dataset.openView = 'career';
    }
    return;
  }

  const operations = coachingOverviewMetrics() ?? { activeCases: students.length, attention: 0, upcomingSessions: 0, overdueActions: 0 };
  const contextReady = students.filter((student) => constraintsScore(constraintByStudent(student.id)) >= 70).length;
  metric.innerHTML = [
    metricHtml('Active cases', operations.activeCases, `${students.length} visible students`),
    metricHtml('Need attention', operations.attention, 'Review, session, skill, or action'),
    metricHtml('Upcoming sessions', operations.upcomingSessions, 'Scheduled in your scope'),
    metricHtml('Overdue actions', operations.overdueActions, 'Follow-through at risk'),
  ].join('');

  const items: string[] = [];
  if (role === 'admin') {
    pending.slice(0, 2).forEach((request) => items.push(attentionHtml(`${request.full_name} needs account approval`, `${formatRole(request.requested_role)} - ${request.email}`, 'Review', 'accounts')));
  }
  setupPending.slice(0, 2).forEach((profile) => items.push(attentionHtml(
    `${profile.full_name || profile.email} has not finished password setup`,
    profile.setup_email_sent_at ? `Setup email sent ${formatDate(profile.setup_email_sent_at)}` : 'No working password yet.',
    'Open people', 'people',
  )));
  coachingAttentionItems(5).forEach((item) => items.push(attentionHtml(item.title, item.detail, 'Open record', '', item.student.id)));
  if (role === 'admin') {
    state.branches.filter((branch) => !state.profiles.some((profile) => profile.role === 'branch_head' && profile.branch_id === branch.id && profile.account_status === 'active'))
      .slice(0, 1).forEach((branch) => items.push(attentionHtml(`${branch.name} has no active Branch Head`, 'Assign branch ownership before expanding the team.', 'Open people', 'people')));
  }
  attention.innerHTML = items.slice(0, 6).join('') || attentionHtml('No urgent items', 'The visible coaching operation is up to date.');
  const coverage = [
    ['Students in scope', students.length],
    ['Active coaching cases', operations.activeCases],
    ['Context substantially ready', contextReady],
    ['Cases needing attention', operations.attention],
  ];
  structure.innerHTML = coverage.map(([label, value], index) => `<div class="structure-row"><span class="structure-index">0${index + 1}</span><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>`).join('');
  const focus = qs<HTMLElement>('#student-focus');
  if (focus) focus.hidden = true;
  setText('#attention-title', role === 'admin' ? 'Business and coaching attention' : 'Coaching attention');
  setText('#structure-title', 'Coaching coverage');
}

function renderPeople() {
  if (!state.profile) return;
  const body = qs<HTMLElement>('#people-table-body');
  const empty = qs<HTMLElement>('#people-empty');
  if (!body || !empty) return;
  const search = qs<HTMLInputElement>('#people-search')?.value.trim().toLowerCase() ?? '';
  const roleFilter = qs<HTMLSelectElement>('#people-role-filter')?.value ?? 'all';
  const rows = state.profiles.filter((profile) => {
    if (profile.id === state.profile?.id) return false;
    if (roleFilter !== 'all' && profile.role !== roleFilter) return false;
    const haystack = `${profile.full_name} ${profile.email}`.toLowerCase();
    return !search || haystack.includes(search);
  });
  body.innerHTML = rows.map((profile) => {
    const branch = branchById(profile.branch_id);
    const supervisor = profileById(profile.supervisor_id);
    const isAdmin = state.profile?.role === 'admin';
    const isSetupPending = profile.account_status === 'active' && Boolean(profile.must_change_password);
    const accessStatus = isSetupPending ? 'setup_pending' : profile.account_status;
    const studentAction = profile.role === 'student' ? `<button class="table-action" type="button" data-student-id="${escapeHtml(profile.id)}">Open record</button>` : '';
    const canManagePassword = isAdmin && profile.account_status === 'active' && !String(profile.email).endsWith('@fcs.test');
    const passwordActions = canManagePassword
      ? `<button class="table-action" type="button" data-send-setup-email="${escapeHtml(profile.id)}">${isSetupPending ? 'Send setup link' : 'Reset link'}</button><button class="table-action" type="button" data-create-temporary-password="${escapeHtml(profile.id)}">One-time password</button>`
      : '';
    const manageAction = isAdmin
      ? `<button class="table-action" type="button" data-manage-account="${escapeHtml(profile.id)}">Manage</button>`
      : '';
    const statusAction = isAdmin
      ? profile.account_status === 'active'
        ? `<button class="table-action" type="button" data-user-status-id="${escapeHtml(profile.id)}" data-next-status="suspended">Suspend</button>`
        : `<button class="table-action" type="button" data-user-status-id="${escapeHtml(profile.id)}" data-next-status="active">Restore</button>`
      : '';
    return `<tr>
      <td><span class="person-cell"><span class="avatar small">${escapeHtml(initials(profile.full_name))}</span><span><strong>${escapeHtml(profile.full_name || 'Unnamed')}</strong><small>${escapeHtml(profile.email)}</small></span></span></td>
      <td><span class="role-badge">${escapeHtml(formatRole(profile.role))}</span></td>
      <td><span class="branch-cell"><strong>${escapeHtml(branch?.name || 'Not assigned')}</strong>${branch?.code ? `<code>${escapeHtml(branch.code)}</code>` : ''}</span></td>
      <td>${escapeHtml(supervisor?.full_name || 'Admin')}</td>
      <td><span class="status-badge" data-status="${escapeHtml(accessStatus)}">${escapeHtml(isSetupPending ? 'Setup pending' : formatStatus(profile.account_status))}</span></td>
      <td><span class="row-actions">${studentAction}${manageAction}${passwordActions}${statusAction}</span></td>
    </tr>`;
  }).join('');
  empty.hidden = rows.length > 0;
  setText('#people-nav-count', rows.length);
}

function renderRequests() {
  if (!state.profile) return;
  const container = qs<HTMLElement>('#request-list');
  const empty = qs<HTMLElement>('#request-empty');
  const summary = qs<HTMLElement>('#approval-summary');
  if (!container || !empty || !summary) return;
  const isAdmin = state.profile.role === 'admin';
  const requests = [...state.requests].sort((a, b) => {
    if (a.status === 'pending' && b.status !== 'pending') return -1;
    if (b.status === 'pending' && a.status !== 'pending') return 1;
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
  });
  const pending = requests.filter((request) => request.status === 'pending');
  summary.hidden = !isAdmin || !pending.length;
  summary.textContent = pending.length ? `${pending.length} account request${pending.length === 1 ? '' : 's'} require Admin review.` : '';
  setText('#account-scope-note', isAdmin ? 'Only the Admin can activate an account.' : 'Your submissions remain pending until Admin review.');
  setText('#request-nav-count', isAdmin ? pending.length : requests.length);
  container.innerHTML = requests.map((request) => {
    const branch = branchById(request.branch_id);
    const requester = profileById(request.requested_by);
    const supervisor = profileById(request.supervisor_id);
    const actions = isAdmin && request.status === 'pending'
      ? `<span class="request-actions"><button class="approve-button" type="button" data-approve-request="${escapeHtml(request.id)}">Approve</button><button class="reject-button" type="button" data-reject-request="${escapeHtml(request.id)}">Reject</button></span>`
      : `<span class="status-badge" data-status="${escapeHtml(request.status)}">${escapeHtml(formatStatus(request.status))}</span>`;
    return `<article class="request-row">
      <div class="request-person"><strong>${escapeHtml(request.full_name)}</strong><small>${escapeHtml(request.email)}</small></div>
      <div class="request-detail"><small>Role</small><strong>${escapeHtml(formatRole(request.requested_role))}</strong></div>
      <div class="request-detail request-branch"><small>Branch · supervisor</small><strong>${escapeHtml(branch?.name || 'Unknown')} · ${escapeHtml(supervisor?.full_name || 'Unknown')}</strong></div>
      <div class="request-detail request-date"><small>Requested by</small><strong>${escapeHtml(requester?.full_name || 'Account creator')}</strong><small>${escapeHtml(formatDate(request.created_at))}</small></div>
      ${actions}
    </article>`;
  }).join('');
  empty.hidden = requests.length > 0;
}

function renderBranches() {
  const container = qs<HTMLElement>('#branch-list');
  if (!container) return;
  container.innerHTML = state.branches.map((branch) => {
    const people = state.profiles.filter((profile) => profile.branch_id === branch.id && profile.account_status === 'active');
    const head = people.find((profile) => profile.role === 'branch_head');
    const students = people.filter((profile) => profile.role === 'student').length;
    const staff = people.filter((profile) => profile.role !== 'student').length;
    return `<article class="branch-row" data-status="${escapeHtml(branch.status)}">
      <header class="branch-card-header"><div><p class="eyebrow">${escapeHtml(branch.code)}</p><h3>${escapeHtml(branch.name)}</h3><p>${escapeHtml(branch.city || 'City not set')}</p></div><span class="status-badge" data-status="${escapeHtml(branch.status)}">${escapeHtml(formatStatus(branch.status))}</span></header>
      <div><small>Branch Head: ${escapeHtml(head?.full_name || 'Not assigned')}</small><div class="branch-stats"><span><strong>${staff}</strong><small>Staff</small></span><span><strong>${students}</strong><small>Students</small></span></div></div>
      <footer class="branch-card-footer"><span>${people.length} active accounts</span><button class="table-action" type="button" data-edit-branch="${escapeHtml(branch.id)}">Edit branch</button></footer>
    </article>`;
  }).join('') || '<div class="empty-state">No branches yet.</div>';
}

const activityLabels: Record<string, string> = {
  account_requested: 'Account requested',
  account_created_and_approved: 'Account created and approved',
  account_approved: 'Account approved',
  account_rejected: 'Account request rejected',
  account_status_changed: 'Account access changed',
  account_assignment_updated: 'Account assignment updated',
  branch_created: 'Branch created',
  branch_updated: 'Branch updated',
  password_setup_email_sent: 'Password setup email sent',
  temporary_password_issued: 'One-time password issued',
  password_setup_completed: 'Password setup completed',
  role_lab_seeded: 'Local Role Lab prepared',
};

function renderActivity() {
  const container = qs<HTMLElement>('#activity-list');
  const empty = qs<HTMLElement>('#activity-empty');
  if (!container || !empty) return;
  container.innerHTML = state.activity.map((event) => {
    const actor = profileById(event.actor_id);
    const target = profileById(event.target_user_id);
    const branch = branchById(event.branch_id);
    const details = event.details ?? {};
    const subject = target?.full_name || details.email || branch?.name || formatRole(details.role) || 'Workspace';
    const actorName = actor?.full_name || (event.actor_id ? 'Admin' : 'System');
    const scope = branch ? `${branch.name} (${branch.code})` : 'Organisation-wide';
    return `<article class="activity-row">
      <span class="activity-marker" aria-hidden="true"></span>
      <span class="activity-copy"><strong>${escapeHtml(activityLabels[event.action] || formatStatus(event.action))}</strong><small>${escapeHtml(subject)} · ${escapeHtml(scope)}</small></span>
      <span class="activity-by"><strong>${escapeHtml(actorName)}</strong><small>${escapeHtml(formatDate(event.created_at, true))}</small></span>
    </article>`;
  }).join('');
  empty.hidden = state.activity.length > 0;
}

function fillConstraintsForm() {
  if (!state.profile) return;
  const form = qs<HTMLFormElement>('#constraints-form');
  if (!form) return;
  const row = constraintByStudent(state.profile.id) ?? {};
  const values: Record<string, unknown> = {
    ...row,
    willing_to_relocate: row.willing_to_relocate === true ? 'true' : row.willing_to_relocate === false ? 'false' : '',
    relocation_preferences: (row.relocation_preferences ?? []).join(', '),
    preferred_languages: (row.preferred_languages ?? []).join(', '),
    non_negotiables: (row.non_negotiables ?? []).join(', '),
    risk_tolerance: row.risk_tolerance ?? 3,
  };
  Object.entries(values).forEach(([name, value]) => {
    const field = form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
    if (field && value !== null && value !== undefined) field.value = String(value);
  });
  setText('#risk-value', values.risk_tolerance ?? 3);
  setText('#constraints-saved-at', row.updated_at ? `Last saved ${formatDate(row.updated_at, true)}` : 'Not saved yet');
}

function constraintValue(value: unknown, fallback = 'Not recorded') {
  if (Array.isArray(value)) return value.length ? value.join(', ') : fallback;
  if (value === true) return 'Yes';
  if (value === false) return 'No';
  if (value === null || value === undefined || value === '' || value === 'not-set') return fallback;
  return formatStatus(value);
}

function coachingContext() {
  if (!state.user || !state.profile) throw new Error('The coaching workspace needs an active account.');
  return {
    client,
    user: state.user,
    profile: state.profile,
    profiles: state.profiles,
    branches: state.branches,
    selectedStudentId: state.selectedStudentId,
    setSelectedStudentId: (studentId: string | null) => { state.selectedStudentId = studentId; },
    openView,
    setWorkspaceStatus: (message: string, isError = false) => setStatus(qs<HTMLElement>('#workspace-status'), message, isError),
    escapeHtml,
    formatDate,
    formatRole,
    formatStatus,
    initials,
    profileById,
    branchById,
    constraintByStudent,
    constraintValue,
    constraintsScore,
    renderCoachNotes,
    renderOverview,
  };
}

async function openStudentRecord(studentId: string) {
  await openCoachingRecord(studentId);
}

function renderCoachNotes(notes: RecordRow[]) {
  const container = qs<HTMLElement>('#coach-note-list');
  if (!container) return;
  container.innerHTML = notes.map((note) => {
    const author = profileById(note.author_id);
    return `<article class="note-item"><span><strong>${escapeHtml(author?.full_name || 'Coach')}</strong><small>${escapeHtml(formatRole(note.note_type))} · ${escapeHtml(formatDate(note.created_at, true))}</small></span><p>${escapeHtml(note.content)}</p><span class="status-badge">${escapeHtml(note.visibility === 'staff' ? 'Coaching staff' : 'Head Coach+')}</span></article>`;
  }).join('') || '<div class="empty-state">No coaching notes yet.</div>';
}

function renderQuickRoleAccess() {
  const section = qs<HTMLElement>('#quick-role-access');
  const container = qs<HTMLElement>('#quick-role-buttons');
  if (!section || !container || !import.meta.env.DEV) return;
  state.credentials = readCredentials();
  section.hidden = authEntryMode !== 'sign-in' || !state.credentials.length;
  container.innerHTML = state.credentials.map((credential) => `<button class="quick-role-button" type="button" data-test-login-email="${escapeHtml(credential.email)}"><strong>${escapeHtml(formatRole(credential.role))}</strong><small>${escapeHtml(credential.email)}</small></button>`).join('');
}

function renderRoleLab() {
  const container = qs<HTMLElement>('#role-lab-credentials');
  if (!container || !import.meta.env.DEV) return;
  state.credentials = readCredentials();
  container.innerHTML = state.credentials.map((credential) => `<article class="credential-row"><span><strong>${escapeHtml(credential.fullName)}</strong><code>${escapeHtml(credential.email)}</code><small>${escapeHtml(credential.password)}</small></span><button class="secondary-button" type="button" data-test-login-email="${escapeHtml(credential.email)}">Sign in</button></article>`).join('') || '<div class="empty-state">Prepare the lab to create private test logins.</div>';
}

function renderAll() {
  renderIdentity();
  syncRoleVisibility();
  renderOverview();
  renderPeople();
  renderRequests();
  renderBranches();
  renderActivity();
  renderCoachingWorkspace();
  fillConstraintsForm();
  renderRoleLab();
  openView(state.activeView);
}

async function refreshWorkspace(message = '') {
  if (!state.user) return;
  const button = qs<HTMLButtonElement>('#refresh-button');
  setBusy(button, true, '...');
  try {
    await loadWorkspaceData(state.user);
    renderAll();
    if (message) setStatus(qs<HTMLElement>('#workspace-status'), message);
  } catch (error) {
    setStatus(qs<HTMLElement>('#workspace-status'), error instanceof Error ? error.message : 'Could not refresh the workspace.', true);
  } finally {
    setBusy(button, false);
  }
}

function openAccountDialog() {
  if (!state.profile) return;
  const dialog = qs<HTMLDialogElement>('#account-dialog');
  const form = qs<HTMLFormElement>('#account-form');
  if (!dialog || !form) return;
  form.reset();
  const roles = creationMatrix[state.profile.role as Role];
  const roleSelect = qs<HTMLSelectElement>('#account-role');
  if (roleSelect) roleSelect.innerHTML = roles.map((role) => `<option value="${role}">${escapeHtml(roleLabels[role])}</option>`).join('');
  const approveRow = qs<HTMLElement>('#approve-now-row');
  if (approveRow) approveRow.hidden = state.profile.role !== 'admin';
  const isAdmin = state.profile.role === 'admin';
  setText('#account-dialog-eyebrow', isAdmin ? 'Admin account creation' : 'Account request');
  setText('#account-dialog-title', isAdmin ? 'Create account' : 'Request account');
  setText('#account-submit-label', isAdmin ? 'Create account' : 'Request approval');
  const policy = qs<HTMLElement>('#account-dialog-policy span');
  if (policy) {
    policy.textContent = isAdmin
      ? 'Create an active account now or leave it pending for a separate review.'
      : 'The Admin must approve this request before the account can be used.';
  }
  populateAccountBranches();
  populateSupervisors();
  setStatus(qs<HTMLElement>('#account-form-status'), '');
  dialog.showModal();
}

function populateAccountBranches() {
  if (!state.profile) return;
  const select = qs<HTMLSelectElement>('#account-branch');
  if (!select) return;
  const branches = state.profile.role === 'admin'
    ? state.branches.filter((branch) => branch.status === 'active')
    : state.branches.filter((branch) => branch.id === state.profile?.branch_id);
  select.innerHTML = branches.map((branch) => `<option value="${escapeHtml(branch.id)}">${escapeHtml(branch.name)} (${escapeHtml(branch.code)})</option>`).join('');
  select.disabled = false;
}

function populateSupervisors() {
  if (!state.profile) return;
  const role = qs<HTMLSelectElement>('#account-role')?.value as Exclude<Role, 'admin'>;
  const branchId = qs<HTMLSelectElement>('#account-branch')?.value;
  const select = qs<HTMLSelectElement>('#account-supervisor');
  const submit = qs<HTMLButtonElement>('#account-submit');
  if (!select || !role) return;
  let supervisors = state.profiles.filter((profile) => profile.account_status === 'active' && !profile.must_change_password && supervisorMatrix[role]?.includes(profile.role));
  if (role !== 'branch_head') supervisors = supervisors.filter((profile) => profile.branch_id === branchId);
  if (state.profile.role === 'coach') supervisors = supervisors.filter((profile) => profile.id === state.profile?.id);
  if (state.profile.role === 'head_coach') supervisors = supervisors.filter((profile) => profile.id === state.profile?.id || profile.supervisor_id === state.profile?.id);
  select.innerHTML = supervisors.map((profile) => `<option value="${escapeHtml(profile.id)}">${escapeHtml(profile.full_name)} · ${escapeHtml(formatRole(profile.role))}</option>`).join('');
  select.disabled = !supervisors.length;
  if (submit) submit.disabled = !supervisors.length;
  setStatus(qs<HTMLElement>('#account-form-status'), supervisors.length ? '' : `Create an active ${formatRole(supervisorMatrix[role]?.[0])} first.`, !supervisors.length);
}
function openBranchDialog(branchId = '') {
  const dialog = qs<HTMLDialogElement>('#branch-dialog');
  const form = qs<HTMLFormElement>('#branch-form');
  if (!dialog || !form) return;
  const branch = state.branches.find((item) => item.id === branchId) ?? null;
  form.reset();
  branchCodeManuallyEdited = Boolean(branch);
  const idInput = qs<HTMLInputElement>('#branch-id');
  const nameInput = qs<HTMLInputElement>('#branch-name');
  const codeInput = qs<HTMLInputElement>('#branch-code');
  const cityInput = qs<HTMLInputElement>('#branch-city');
  const statusSelect = qs<HTMLSelectElement>('#branch-status');
  if (idInput) idInput.value = branch?.id ?? '';
  if (nameInput) nameInput.value = branch?.name ?? '';
  if (codeInput) codeInput.value = branch?.code ?? '';
  if (cityInput) cityInput.value = branch?.city ?? '';
  if (statusSelect) statusSelect.value = branch?.status ?? 'active';
  const editing = Boolean(branch);
  const statusRow = qs<HTMLElement>('#branch-status-row');
  if (statusRow) statusRow.hidden = !editing;
  setText('#branch-dialog-title', editing ? 'Edit branch' : 'New branch');
  setText('#branch-submit-label', editing ? 'Save branch' : 'Create branch');
  setStatus(qs<HTMLElement>('#branch-form-status'), '');
  dialog.showModal();
  window.setTimeout(() => nameInput?.focus(), 0);
}

function updateBranchCodeSuggestion() {
  if (branchCodeManuallyEdited) return;
  const codeInput = qs<HTMLInputElement>('#branch-code');
  if (!codeInput) return;
  codeInput.value = branchCodeSuggestion(
    qs<HTMLInputElement>('#branch-name')?.value,
    qs<HTMLInputElement>('#branch-city')?.value,
    qs<HTMLInputElement>('#branch-id')?.value,
  );
}

function managedSupervisorCandidates(target: RecordRow, branchId: string) {
  let supervisors = state.profiles.filter((profile) => (
    profile.id !== target.id
    && profile.account_status === 'active'
    && !profile.must_change_password
    && supervisorMatrix[target.role as Exclude<Role, 'admin'>]?.includes(profile.role)
  ));
  if (target.role !== 'branch_head') {
    supervisors = supervisors.filter((profile) => profile.branch_id === branchId);
  }
  return supervisors;
}

function populateManagedSupervisors(preferredId = '') {
  const userId = qs<HTMLInputElement>('#managed-user-id')?.value;
  const target = profileById(userId);
  const branchId = qs<HTMLSelectElement>('#managed-branch')?.value ?? '';
  const select = qs<HTMLSelectElement>('#managed-supervisor');
  const submit = qs<HTMLButtonElement>('#manage-account-submit');
  if (!target || !select) return;
  const supervisors = managedSupervisorCandidates(target, branchId);
  select.innerHTML = supervisors.map((profile) => `<option value="${escapeHtml(profile.id)}">${escapeHtml(profile.full_name)} - ${escapeHtml(formatRole(profile.role))}</option>`).join('');
  const selectedId = preferredId || target.supervisor_id;
  if (selectedId && supervisors.some((profile) => profile.id === selectedId)) select.value = selectedId;
  select.disabled = !supervisors.length;
  if (submit) submit.disabled = !supervisors.length;
  setStatus(qs<HTMLElement>('#manage-account-status'), supervisors.length ? '' : `No active ${formatRole(supervisorMatrix[target.role as Exclude<Role, 'admin'>]?.[0])} is available in this branch.`, !supervisors.length);
}

function openManageAccountDialog(userId: string) {
  if (state.profile?.role !== 'admin') return;
  const target = profileById(userId);
  const dialog = qs<HTMLDialogElement>('#manage-account-dialog');
  const form = qs<HTMLFormElement>('#manage-account-form');
  if (!target || target.role === 'admin' || !dialog || !form) return;
  form.reset();
  const userInput = qs<HTMLInputElement>('#managed-user-id');
  const nameInput = qs<HTMLInputElement>('#managed-full-name');
  const branchSelect = qs<HTMLSelectElement>('#managed-branch');
  if (userInput) userInput.value = target.id;
  if (nameInput) nameInput.value = target.full_name;
  setText('#managed-user-initials', initials(target.full_name));
  setText('#managed-user-heading', target.full_name || 'Account holder');
  setText('#managed-user-meta', `${formatRole(target.role)} - ${target.email}`);
  if (branchSelect) {
    const branches = state.branches.filter((branch) => branch.status === 'active' || branch.id === target.branch_id);
    branchSelect.innerHTML = branches.map((branch) => `<option value="${escapeHtml(branch.id)}">${escapeHtml(branch.name)} (${escapeHtml(branch.code)})</option>`).join('');
    branchSelect.value = target.branch_id ?? '';
  }
  populateManagedSupervisors(target.supervisor_id);
  setStatus(qs<HTMLElement>('#manage-account-status'), '');
  dialog.showModal();
}

async function signIn(email: string, password: string) {
  const { data, error } = await client.auth.signInWithPassword({ email, password });
  if (error) throw error;
  if (!data.user) throw new Error('Supabase did not return a signed-in user.');
  state.user = data.user;
  await loadWorkspaceData(data.user);
  state.activeView = 'overview';
  if (state.profile?.must_change_password) {
    showPasswordSetup('temporary');
  } else {
    showWorkspace();
    renderAll();
  }
}

async function handleSignIn(event: SubmitEvent) {
  event.preventDefault();
  passwordSetupMode = null;
  const form = event.currentTarget as HTMLFormElement;
  const data = new FormData(form);
  const button = qs<HTMLButtonElement>('#sign-in-submit');
  setStatus(qs<HTMLElement>('#auth-status'), '');
  setBusy(button, true, 'Signing in...');
  try {
    await signIn(String(data.get('email') ?? '').trim(), String(data.get('password') ?? ''));
  } catch (error) {
    setStatus(qs<HTMLElement>('#auth-status'), error instanceof Error ? error.message : 'Could not sign in.', true);
  } finally {
    setBusy(button, false);
  }
}

async function handleRecoveryRequest(event: SubmitEvent) {
  event.preventDefault();
  const form = event.currentTarget as HTMLFormElement;
  const email = String(new FormData(form).get('email') ?? '').trim();
  const status = qs<HTMLElement>('#recovery-status');
  const button = qs<HTMLButtonElement>('#recovery-submit');
  setStatus(status, '');
  if (!email) {
    setStatus(status, 'Enter the email address on your approved account.', true);
    return;
  }

  setBusy(button, true, 'Sending secure link...');
  try {
    const { error } = await client.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/dashboard`,
    });
    if (error) throw error;
    setStatus(status, 'If this is an approved account, a secure link is on its way. Check the inbox and spam folder.');
  } catch (error) {
    setStatus(status, error instanceof Error ? error.message : 'Could not send the secure link.', true);
  } finally {
    setBusy(button, false);
  }
}

async function handlePasswordSetupSubmit(event: SubmitEvent) {
  event.preventDefault();
  const form = event.currentTarget as HTMLFormElement;
  const formData = new FormData(form);
  const password = String(formData.get('password') ?? '');
  const confirmation = String(formData.get('confirmPassword') ?? '');
  const checks = passwordChecks(password);
  const status = qs<HTMLElement>('#password-setup-status');
  const button = qs<HTMLButtonElement>('#password-setup-submit');

  setStatus(status, '');
  if (!state.user) {
    setStatus(status, 'This secure link has expired. Request a new password setup email.', true);
    return;
  }
  if (!Object.values(checks).every(Boolean)) {
    setStatus(status, 'Use at least 4 characters. Any characters are fine.', true);
    return;
  }
  if (password !== confirmation) {
    setStatus(status, 'The two passwords do not match.', true);
    return;
  }

  setBusy(button, true, 'Saving password...');
  try {
    const { data, error } = await client.auth.updateUser({ password });
    if (error) throw error;
    if (data.user) state.user = data.user;
    await invokeAccountAction({ action: 'complete-password-setup', newPassword: password });
    passwordSetupMode = null;
    form.reset();
    renderPasswordChecks();
    const cleanUrl = new URL(window.location.href);
    cleanUrl.searchParams.delete('type');
    cleanUrl.hash = '';
    window.history.replaceState({}, document.title, `${cleanUrl.pathname}${cleanUrl.search}`);
    if (!state.user) throw new Error('The updated account session is missing. Sign in again.');
    await loadWorkspaceData(state.user);
    showWorkspace();
    renderAll();
    setStatus(qs<HTMLElement>('#workspace-status'), 'Password saved. Your account is ready.');
  } catch (error) {
    setStatus(status, error instanceof Error ? error.message : 'Could not save the password.', true);
  } finally {
    setBusy(button, false);
  }
}

async function signOut() {
  passwordSetupMode = null;
  await client?.auth.signOut();
  state.user = null;
  state.profile = null;
  state.activeView = 'overview';
  showAuth();
}

async function handleAccountSubmit(event: SubmitEvent) {
  event.preventDefault();
  if (!state.profile) return;
  const form = event.currentTarget as HTMLFormElement;
  const data = new FormData(form);
  const button = qs<HTMLButtonElement>('#account-submit');
  setBusy(button, true, 'Submitting...');
  setStatus(qs<HTMLElement>('#account-form-status'), '');
  try {
    const payload = await invokeAccountAction({
      action: 'request-account',
      fullName: data.get('fullName'),
      email: data.get('email'),
      role: data.get('role'),
      branchId: data.get('branchId'),
      supervisorId: data.get('supervisorId'),
      approveNow: state.profile.role === 'admin' ? data.get('approveNow') === 'on' : false,
    });
    if (payload.testPassword) {
      saveCredentials([{ email: String(data.get('email')).toLowerCase(), password: payload.testPassword, fullName: String(data.get('fullName')), role: data.get('role') as Role }]);
    }
    qs<HTMLDialogElement>('#account-dialog')?.close();
    await refreshWorkspace(payload.message ?? 'Account request submitted.');
    openView(state.profile.role === 'admin' && payload.userId ? 'people' : 'accounts');
  } catch (error) {
    setStatus(qs<HTMLElement>('#account-form-status'), error instanceof Error ? error.message : 'Could not submit the request.', true);
  } finally {
    setBusy(button, false);
  }
}

async function approveRequest(requestId: string, button: HTMLButtonElement) {
  const request = state.requests.find((item) => item.id === requestId);
  setBusy(button, true, 'Approving...');
  try {
    const payload = await invokeAccountAction({ action: 'approve-request', requestId });
    if (payload.testPassword && request) {
      saveCredentials([{ email: request.email, password: payload.testPassword, fullName: request.full_name, role: request.requested_role as Role }]);
    }
    await refreshWorkspace(payload.message ?? 'Account approved.');
    openView('accounts');
  } catch (error) {
    setStatus(qs<HTMLElement>('#workspace-status'), error instanceof Error ? error.message : 'Could not approve the account.', true);
  } finally {
    setBusy(button, false);
  }
}

async function handleRejectSubmit(event: SubmitEvent) {
  event.preventDefault();
  const form = event.currentTarget as HTMLFormElement;
  const data = new FormData(form);
  const button = form.querySelector<HTMLButtonElement>('[type="submit"]');
  setBusy(button, true, 'Rejecting...');
  try {
    const payload = await invokeAccountAction({ action: 'reject-request', requestId: data.get('requestId'), note: data.get('note') });
    qs<HTMLDialogElement>('#reject-dialog')?.close();
    await refreshWorkspace(payload.message ?? 'Request rejected.');
    openView('accounts');
  } catch (error) {
    setStatus(qs<HTMLElement>('#reject-form-status'), error instanceof Error ? error.message : 'Could not reject the request.', true);
  } finally {
    setBusy(button, false);
  }
}

async function handleBranchSubmit(event: SubmitEvent) {
  event.preventDefault();
  const form = event.currentTarget as HTMLFormElement;
  const data = new FormData(form);
  const branchId = String(data.get('branchId') ?? '');
  const editing = Boolean(branchId);
  const button = form.querySelector<HTMLButtonElement>('[type="submit"]');
  setBusy(button, true, editing ? 'Saving...' : 'Creating...');
  try {
    const payload = await invokeAccountAction({
      action: editing ? 'update-branch' : 'create-branch',
      branchId: branchId || undefined,
      name: data.get('name'),
      code: data.get('code'),
      city: data.get('city'),
      status: editing ? data.get('status') : undefined,
    });
    qs<HTMLDialogElement>('#branch-dialog')?.close();
    await refreshWorkspace(payload.message ?? (editing ? 'Branch updated.' : 'Branch created.'));
    openView('branches');
  } catch (error) {
    setStatus(qs<HTMLElement>('#branch-form-status'), error instanceof Error ? error.message : 'Could not save the branch.', true);
  } finally {
    setBusy(button, false);
  }
}

async function handleManageAccountSubmit(event: SubmitEvent) {
  event.preventDefault();
  const form = event.currentTarget as HTMLFormElement;
  const data = new FormData(form);
  const button = qs<HTMLButtonElement>('#manage-account-submit');
  setBusy(button, true, 'Saving...');
  setStatus(qs<HTMLElement>('#manage-account-status'), '');
  try {
    const payload = await invokeAccountAction({
      action: 'update-account',
      userId: data.get('userId'),
      fullName: data.get('fullName'),
      branchId: data.get('branchId'),
      supervisorId: data.get('supervisorId'),
    });
    qs<HTMLDialogElement>('#manage-account-dialog')?.close();
    await refreshWorkspace(payload.message ?? 'Account updated.');
    openView('people');
  } catch (error) {
    setStatus(qs<HTMLElement>('#manage-account-status'), error instanceof Error ? error.message : 'Could not update the account.', true);
  } finally {
    setBusy(button, false);
  }
}

async function changeAccountStatus(userId: string, status: string, button: HTMLButtonElement) {
  setBusy(button, true, status === 'active' ? 'Restoring...' : 'Suspending...');
  try {
    const payload = await invokeAccountAction({ action: 'set-account-status', userId, status });
    await refreshWorkspace(payload.message ?? 'Account updated.');
    openView('people');
  } catch (error) {
    setStatus(qs<HTMLElement>('#workspace-status'), error instanceof Error ? error.message : 'Could not update the account.', true);
  } finally {
    setBusy(button, false);
  }
}

async function sendAccountSetupEmail(userId: string, button: HTMLButtonElement) {
  setBusy(button, true, 'Sending...');
  try {
    const payload = await invokeAccountAction({ action: 'send-setup-email', userId });
    await refreshWorkspace(payload.message ?? 'Password setup email sent.');
    openView('people');
  } catch (error) {
    setStatus(qs<HTMLElement>('#workspace-status'), error instanceof Error ? error.message : 'Could not send the setup email.', true);
  } finally {
    setBusy(button, false);
  }
}

async function issueTemporaryPassword(userId: string, button: HTMLButtonElement) {
  const profile = profileById(userId);
  setBusy(button, true, 'Creating...');
  try {
    const payload = await invokeAccountAction({ action: 'create-temporary-password', userId });
    await refreshWorkspace('One-time password created.');
    setText('#temporary-password-name', payload.fullName ?? profile?.full_name ?? 'Account holder');
    setText('#temporary-password-email', payload.email ?? profile?.email ?? '');
    setText('#temporary-password-value', payload.temporaryPassword ?? '');
    setStatus(qs<HTMLElement>('#temporary-password-status'), '');
    qs<HTMLDialogElement>('#temporary-password-dialog')?.showModal();
    openView('people');
  } catch (error) {
    setStatus(qs<HTMLElement>('#workspace-status'), error instanceof Error ? error.message : 'Could not create a one-time password.', true);
  } finally {
    setBusy(button, false);
  }
}

async function copyTemporaryPassword() {
  const value = qs<HTMLElement>('#temporary-password-value')?.textContent ?? '';
  const status = qs<HTMLElement>('#temporary-password-status');
  if (!value) {
    setStatus(status, 'There is no password to copy.', true);
    return;
  }
  try {
    await navigator.clipboard.writeText(value);
    setStatus(status, 'Password copied.');
  } catch {
    setStatus(status, 'Copy was blocked by the browser. Select the password and copy it manually.', true);
  }
}

async function handleConstraintsSubmit(event: SubmitEvent) {
  event.preventDefault();
  if (!state.user) return;
  const form = event.currentTarget as HTMLFormElement;
  const data = new FormData(form);
  const button = qs<HTMLButtonElement>('#save-constraints');
  setBusy(button, true, 'Saving...');
  const relocate = String(data.get('willing_to_relocate') ?? '');
  const row = {
    student_id: state.user.id,
    budget_range: data.get('budget_range'),
    available_hours_per_week: asNullableNumber(data.get('available_hours_per_week')),
    max_commute_minutes: asNullableNumber(data.get('max_commute_minutes')),
    willing_to_relocate: relocate === '' ? null : relocate === 'true',
    relocation_preferences: splitList(data.get('relocation_preferences')),
    family_expectations: data.get('family_expectations'),
    work_or_care_responsibilities: data.get('work_or_care_responsibilities'),
    preferred_languages: splitList(data.get('preferred_languages')),
    device_access: data.get('device_access'),
    internet_access: data.get('internet_access'),
    accessibility_support: data.get('accessibility_support'),
    schedule_or_health_considerations: data.get('schedule_or_health_considerations'),
    education_timeline: data.get('education_timeline'),
    risk_tolerance: asNullableNumber(data.get('risk_tolerance')),
    study_abroad_interest: data.get('study_abroad_interest'),
    non_negotiables: splitList(data.get('non_negotiables')),
    student_notes: data.get('student_notes'),
    updated_by: state.user.id,
  };
  try {
    const { data: saved, error } = await client.from('student_constraints').upsert(row, { onConflict: 'student_id' }).select('*').single();
    if (error) throw error;
    state.constraints = [...state.constraints.filter((item) => item.student_id !== state.user?.id), saved];
    renderOverview();
    fillConstraintsForm();
    setStatus(qs<HTMLElement>('#workspace-status'), 'Career context saved.');
  } catch (error) {
    setStatus(qs<HTMLElement>('#workspace-status'), error instanceof Error ? error.message : 'Could not save your context.', true);
  } finally {
    setBusy(button, false);
  }
}

async function handleAcademicSubmit(event: SubmitEvent) {
  event.preventDefault();
  if (!state.selectedStudentId || !state.user) return;
  const form = event.currentTarget as HTMLFormElement;
  const data = new FormData(form);
  const button = form.querySelector<HTMLButtonElement>('[type="submit"]');
  setBusy(button, true, 'Saving...');
  try {
    const { error } = await client.from('student_academic_records').upsert({
      student_id: state.selectedStudentId,
      institution: data.get('institution'),
      board_or_university: data.get('board_or_university'),
      class_or_year: data.get('class_or_year'),
      stream: data.get('stream'),
      exam_targets: splitList(data.get('exam_targets')),
      attendance_percent: asNullableNumber(data.get('attendance_percent')),
      verified_by: state.user.id,
      verified_at: new Date().toISOString(),
    }, { onConflict: 'student_id' });
    if (error) throw error;
    await openStudentRecord(state.selectedStudentId);
    setStatus(qs<HTMLElement>('#workspace-status'), 'Verified academic record saved.');
  } catch (error) {
    setStatus(qs<HTMLElement>('#workspace-status'), error instanceof Error ? error.message : 'Could not save the academic record.', true);
  } finally {
    setBusy(button, false);
  }
}

async function handleNoteSubmit(event: SubmitEvent) {
  event.preventDefault();
  if (!state.selectedStudentId || !state.user) return;
  const form = event.currentTarget as HTMLFormElement;
  const data = new FormData(form);
  const button = form.querySelector<HTMLButtonElement>('[type="submit"]');
  setBusy(button, true, 'Adding...');
  try {
    const { error } = await client.from('coach_notes').insert({
      student_id: state.selectedStudentId,
      author_id: state.user.id,
      note_type: data.get('note_type'),
      visibility: data.get('visibility'),
      content: data.get('content'),
    });
    if (error) throw error;
    form.reset();
    await openStudentRecord(state.selectedStudentId);
    setStatus(qs<HTMLElement>('#workspace-status'), 'Coaching note added.');
  } catch (error) {
    setStatus(qs<HTMLElement>('#workspace-status'), error instanceof Error ? error.message : 'Could not add the note.', true);
  } finally {
    setBusy(button, false);
  }
}

async function seedRoleLab(button: HTMLButtonElement) {
  setBusy(button, true, 'Preparing roles...');
  try {
    const payload = await invokeAccountAction({ action: 'seed-role-lab', confirmation: 'prepare-local-role-lab' });
    const credentials = (payload.accounts ?? []).map((item: RecordRow) => ({ email: item.email, password: item.password, fullName: item.fullName, role: item.role as Role }));
    saveCredentials(credentials);
    await refreshWorkspace(payload.message ?? 'Role Lab ready.');
    openView('role-lab');
  } catch (error) {
    setStatus(qs<HTMLElement>('#workspace-status'), error instanceof Error ? error.message : 'Could not prepare the Role Lab.', true);
  } finally {
    setBusy(button, false);
  }
}

async function signInTestRole(email: string, button: HTMLButtonElement) {
  const credential = readCredentials().find((item) => item.email === email);
  if (!credential) return;
  setBusy(button, true, 'Opening...');
  try {
    await client.auth.signOut();
    await signIn(credential.email, credential.password);
  } catch (error) {
    setStatus(qs<HTMLElement>('#auth-status'), error instanceof Error ? error.message : 'Could not sign in to the test role.', true);
  } finally {
    setBusy(button, false);
  }
}

async function handleDelegatedClick(event: MouseEvent) {
  const target = event.target as Element;
  const viewButton = target.closest<HTMLElement>('[data-view-target], [data-open-view]');
  if (viewButton) {
    const view = viewButton.dataset.viewTarget ?? viewButton.dataset.openView;
    if (view) openView(view);
    return;
  }
  const closeButton = target.closest<HTMLElement>('[data-close-dialog]');
  if (closeButton) {
    qs<HTMLDialogElement>(`#${closeButton.dataset.closeDialog}`)?.close();
    return;
  }
  const studentButton = target.closest<HTMLButtonElement>('[data-student-id]');
  if (studentButton?.dataset.studentId) {
    await openStudentRecord(studentButton.dataset.studentId);
    return;
  }
  const approveButton = target.closest<HTMLButtonElement>('[data-approve-request]');
  if (approveButton?.dataset.approveRequest) {
    await approveRequest(approveButton.dataset.approveRequest, approveButton);
    return;
  }
  const rejectButton = target.closest<HTMLButtonElement>('[data-reject-request]');
  if (rejectButton?.dataset.rejectRequest) {
    const input = qs<HTMLInputElement>('#reject-request-id');
    if (input) input.value = rejectButton.dataset.rejectRequest;
    qs<HTMLFormElement>('#reject-form')?.reset();
    if (input) input.value = rejectButton.dataset.rejectRequest;
    setStatus(qs<HTMLElement>('#reject-form-status'), '');
    qs<HTMLDialogElement>('#reject-dialog')?.showModal();
    return;
  }
  const manageButton = target.closest<HTMLButtonElement>('[data-manage-account]');
  if (manageButton?.dataset.manageAccount) {
    openManageAccountDialog(manageButton.dataset.manageAccount);
    return;
  }
  const editBranchButton = target.closest<HTMLButtonElement>('[data-edit-branch]');
  if (editBranchButton?.dataset.editBranch) {
    openBranchDialog(editBranchButton.dataset.editBranch);
    return;
  }
  const statusButton = target.closest<HTMLButtonElement>('[data-user-status-id]');
  if (statusButton?.dataset.userStatusId && statusButton.dataset.nextStatus) {
    await changeAccountStatus(statusButton.dataset.userStatusId, statusButton.dataset.nextStatus, statusButton);
    return;
  }
  const setupEmailButton = target.closest<HTMLButtonElement>('[data-send-setup-email]');
  if (setupEmailButton?.dataset.sendSetupEmail) {
    await sendAccountSetupEmail(setupEmailButton.dataset.sendSetupEmail, setupEmailButton);
    return;
  }
  const temporaryPasswordButton = target.closest<HTMLButtonElement>('[data-create-temporary-password]');
  if (temporaryPasswordButton?.dataset.createTemporaryPassword) {
    await issueTemporaryPassword(temporaryPasswordButton.dataset.createTemporaryPassword, temporaryPasswordButton);
    return;
  }
  const testLogin = target.closest<HTMLButtonElement>('[data-test-login-email]');
  if (testLogin?.dataset.testLoginEmail) await signInTestRole(testLogin.dataset.testLoginEmail, testLogin);
}

function bindEvents() {
  qs<HTMLFormElement>('#sign-in-form')?.addEventListener('submit', handleSignIn);
  qs<HTMLButtonElement>('#password-toggle')?.addEventListener('click', () => {
    const input = qs<HTMLInputElement>('#sign-in-password');
    if (!input) return;
    input.type = input.type === 'password' ? 'text' : 'password';
  });
  qsa<HTMLButtonElement>('[data-auth-mode]').forEach((button) => button.addEventListener('click', () => {
    const mode = button.dataset.authMode as AuthEntryMode;
    const signInEmail = qs<HTMLInputElement>('#sign-in-email');
    const recoveryEmail = qs<HTMLInputElement>('#recovery-email');
    if (mode === 'recovery' && recoveryEmail && !recoveryEmail.value) recoveryEmail.value = signInEmail?.value ?? '';
    if (mode === 'sign-in' && signInEmail && !signInEmail.value) signInEmail.value = recoveryEmail?.value ?? '';
    setStatus(qs<HTMLElement>('#auth-status'), '');
    setStatus(qs<HTMLElement>('#recovery-status'), '');
    showAuthMode(mode);
  }));
  qs<HTMLFormElement>('#recovery-request-form')?.addEventListener('submit', handleRecoveryRequest);
  qs<HTMLButtonElement>('#copy-temporary-password')?.addEventListener('click', copyTemporaryPassword);
  qs<HTMLFormElement>('#password-setup-form')?.addEventListener('submit', handlePasswordSetupSubmit);
  qs<HTMLInputElement>('#new-password')?.addEventListener('input', renderPasswordChecks);
  qs<HTMLButtonElement>('#new-password-toggle')?.addEventListener('click', () => {
    const inputs = [qs<HTMLInputElement>('#new-password'), qs<HTMLInputElement>('#confirm-password')].filter(Boolean) as HTMLInputElement[];
    const reveal = inputs.some((input) => input.type === 'password');
    inputs.forEach((input) => { input.type = reveal ? 'text' : 'password'; });
    const button = qs<HTMLButtonElement>('#new-password-toggle');
    const label = reveal ? 'Hide passwords' : 'Show passwords';
    button?.setAttribute('aria-label', label);
    if (button) button.title = label;
  });
  qs<HTMLButtonElement>('#password-setup-sign-out')?.addEventListener('click', signOut);
  qs<HTMLButtonElement>('#reload-workspace')?.addEventListener('click', () => window.location.reload());
  qs<HTMLButtonElement>('#sign-out-button')?.addEventListener('click', signOut);
  qs<HTMLButtonElement>('#access-sign-out')?.addEventListener('click', signOut);
  qs<HTMLButtonElement>('#refresh-button')?.addEventListener('click', () => refreshWorkspace('Workspace refreshed.'));
  qs<HTMLButtonElement>('#new-account-button')?.addEventListener('click', openAccountDialog);
  qs<HTMLButtonElement>('#new-branch-button')?.addEventListener('click', () => openBranchDialog());
  qs<HTMLInputElement>('#branch-name')?.addEventListener('input', updateBranchCodeSuggestion);
  qs<HTMLInputElement>('#branch-city')?.addEventListener('input', updateBranchCodeSuggestion);
  qs<HTMLInputElement>('#branch-code')?.addEventListener('input', (event) => {
    branchCodeManuallyEdited = Boolean((event.currentTarget as HTMLInputElement).value.trim());
    if (!branchCodeManuallyEdited) updateBranchCodeSuggestion();
  });
  qs<HTMLSelectElement>('#managed-branch')?.addEventListener('change', () => populateManagedSupervisors());
  qs<HTMLButtonElement>('#student-record-back')?.addEventListener('click', backToCaseload);
  qs<HTMLButtonElement>('#mobile-menu-button')?.addEventListener('click', () => qs<HTMLElement>('#hierarchy-workspace')?.classList.toggle('is-menu-open'));
  qs<HTMLSelectElement>('#account-role')?.addEventListener('change', populateSupervisors);
  qs<HTMLSelectElement>('#account-branch')?.addEventListener('change', populateSupervisors);
  qs<HTMLInputElement>('#people-search')?.addEventListener('input', renderPeople);
  qs<HTMLSelectElement>('#people-role-filter')?.addEventListener('change', renderPeople);
  qs<HTMLInputElement>('#constraints-form input[name="risk_tolerance"]')?.addEventListener('input', (event) => setText('#risk-value', (event.target as HTMLInputElement).value));
  qs<HTMLSelectElement>('#non-negotiable-preset')?.addEventListener('change', (event) => appendGuidedListPreset(event.currentTarget as HTMLSelectElement, '#constraints-form input[name="non_negotiables"]'));
  qs<HTMLSelectElement>('#exam-target-preset')?.addEventListener('change', (event) => appendGuidedListPreset(event.currentTarget as HTMLSelectElement, '#academic-form input[name="exam_targets"]'));
  qs<HTMLFormElement>('#account-form')?.addEventListener('submit', handleAccountSubmit);
  qs<HTMLFormElement>('#branch-form')?.addEventListener('submit', handleBranchSubmit);
  qs<HTMLFormElement>('#manage-account-form')?.addEventListener('submit', handleManageAccountSubmit);
  qs<HTMLFormElement>('#reject-form')?.addEventListener('submit', handleRejectSubmit);
  qs<HTMLFormElement>('#constraints-form')?.addEventListener('submit', handleConstraintsSubmit);
  qs<HTMLFormElement>('#academic-form')?.addEventListener('submit', handleAcademicSubmit);
  qs<HTMLFormElement>('#coach-note-form')?.addEventListener('submit', handleNoteSubmit);
  qs<HTMLButtonElement>('#seed-role-lab')?.addEventListener('click', (event) => seedRoleLab(event.currentTarget as HTMLButtonElement));
  qs<HTMLElement>('#hierarchy-workspace')?.addEventListener('click', handleDelegatedClick);
}

export async function startHierarchyWorkspace() {
  const root = qs<HTMLElement>('#hierarchy-workspace');
  if (!root) return;
  state.credentials = readCredentials();
  prepareGuidedListPresets();
  bindEvents();

  if (!isSupabaseConfigured || !client) {
    showAuth();
    const warning = qs<HTMLElement>('#config-warning');
    if (warning) warning.hidden = false;
    qsa<HTMLButtonElement>('button', qs<HTMLElement>('#sign-in-form') ?? document).forEach((button) => { button.disabled = true; });
    return;
  }

  try {
    const sessionResponse = await withTimeout<any>(client.auth.getSession(), 7000);
    const { data, error } = sessionResponse;
    if (error) throw error;
    if (!data.session?.user) {
      showAuth();
    } else {
      state.user = data.session.user;
      try {
        await loadWorkspaceData(data.session.user);
        if (passwordSetupMode) {
          showPasswordSetup(passwordSetupMode);
        } else if (state.profile?.must_change_password) {
          showPasswordSetup('temporary');
        } else {
          showWorkspace();
          renderAll();
        }
      } catch (error) {
        showAccess(error instanceof Error ? error.message : 'This account is not active.');
      }
    }
  } catch (error) {
    showAuth(error instanceof Error ? error.message : 'Could not open the workspace.');
    const warning = qs<HTMLElement>('#load-warning');
    if (warning) warning.hidden = false;
  }

  client.auth.onAuthStateChange((event: string, session: RecordRow | null) => {
    if (event === 'PASSWORD_RECOVERY') {
      passwordSetupMode = 'recovery';
      if (session?.user) state.user = session.user;
      window.setTimeout(() => showPasswordSetup('recovery'), 0);
      return;
    }
    if (event === 'SIGNED_OUT') {
      passwordSetupMode = null;
      showAuth();
    }
  });
}
