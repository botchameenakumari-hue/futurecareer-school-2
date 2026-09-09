import { isSupabaseConfigured, supabase } from '../lib/supabase';
import {
  backToCaseload,
  coachingAttentionItems,
  coachingOverviewMetrics,
  clearCoachingWorkspace,
  loadCoachingWorkspace,
  openCoachingRecord,
  openStudentPlanTab,
  restoreStudentPlanTab,
  openStudentRecordTab,
  renderCoachingWorkspace,
  setSelectedStudentForWorkspace,
  studentOverviewMetrics,
} from './coachingWorkspace';
import { clearCohortWorkspace } from './cohortWorkspace';
import { examTargetPresets } from '../data/coachingPresets';

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
  studentConstraints: RecordRow | null;
  selectedStudentId: string | null;
  activeView: string;
  credentials: TestCredential[];
};

const ROLE_LAB_KEY = 'fcs_role_lab_credentials_v2';
const PROFILE_SELECT = 'id,email,full_name,role,account_status,branch_id,supervisor_id,stage,onboarding_completed,must_change_password,setup_email_sent_at,temporary_password_issued_at,password_set_at,created_at,updated_at';

const roleLabels: Record<Role, string> = {
  admin: 'Admin',
  branch_head: 'Branch Head',
  head_coach: 'Head Coach',
  coach: 'Coach',
  student: 'Student',
};
const creationMatrix: Record<Role, Role[]> = {
  admin: ['admin', 'branch_head', 'head_coach', 'coach', 'student'],
  branch_head: ['head_coach', 'coach', 'student'],
  head_coach: ['coach', 'student'],
  coach: ['student'],
  student: [],
};
const supervisorMatrix: Record<Role, Role[]> = {
  admin: [],
  branch_head: ['admin'],
  head_coach: ['branch_head'],
  coach: ['head_coach'],
  student: ['head_coach', 'coach'],
};

const viewMeta: Record<string, { eyebrow: string; title: string; subtitle: string; guide: string }> = {
  overview: { eyebrow: 'Coaching overview', title: 'Overview', subtitle: 'What needs attention, what is coming up, and how coaching is moving.', guide: 'Start with Needs attention. Open the linked item, make one clear update, and agree the next practical step.' },
  caseload: { eyebrow: 'Coaching operations', title: 'Caseload', subtitle: 'Prioritise decisions, development, cohort delivery, and follow-through.', guide: 'Search for a student, use the attention filter, then open the record to update evidence or agree the next action.' },
  cohorts: { eyebrow: 'Group coaching community', title: 'Cohorts', subtitle: 'Shared updates, group commitments, useful information, and progress across your scope.', guide: 'Open a cohort to check the roster, share something useful, create a group commitment, or announce an optional group conversation.' },
  people: { eyebrow: 'Organisation', title: 'People & access', subtitle: 'Reporting lines, account readiness, and student records inside your scope.', guide: 'Use this view to confirm each person has the right branch, manager, and account status before coaching starts.' },
  accounts: { eyebrow: 'Access control', title: 'Account requests', subtitle: 'Requests, approvals, and account history.', guide: 'Review the requested role and reporting line. Admin approval is required before an account can sign in.' },
  branches: { eyebrow: 'Organisation', title: 'Branches', subtitle: 'Branch ownership and staffing at a glance.', guide: 'Keep each branch’s name, code, city, and staffing current so records stay in the right operating scope.' },
  activity: { eyebrow: 'Accountability', title: 'Activity log', subtitle: 'Account and coaching changes you can review.', guide: 'Use the log to see who changed access or coaching records, and when.' },
  career: { eyebrow: 'Your coaching plan', title: 'My coaching plan', subtitle: 'Your career options, skills, cohort activity, and next steps.', guide: 'Choose the career options you want to explore, build the skills that matter, and take one useful next step.' },
  profile: { eyebrow: 'Your details', title: 'Your profile', subtitle: 'Keep your name and planning context current so your coaching team can support you clearly.', guide: 'Keep your name and practical planning context up to date. Your goals and weekly time belong in your plan and actions.' },
  'student-record': { eyebrow: 'Coaching workspace', title: 'Student record', subtitle: 'A working record of career options, evidence, skills, cohort activity, profile, and follow-through.', guide: 'Read the Summary first, then use the tabs to update one area. Keep private notes separate from student-visible guidance.' },
  'role-lab': { eyebrow: 'Access preview', title: 'Preview access by role', subtitle: 'Check the dashboard from each role’s point of view.', guide: 'Create temporary preview accounts, then sign in as each role to check what that person can see and change.' },
};

// Navigation is a second line of defence after the visible role-scoped menu.
// Keep this map close to the view metadata so a stale history entry or an
// outdated shortcut cannot reveal another role's workspace pane.
const viewRoles: Record<string, Role[] | 'all'> = {
  overview: 'all',
  caseload: ['admin', 'branch_head', 'head_coach', 'coach'],
  cohorts: ['admin', 'branch_head', 'head_coach', 'coach'],
  people: ['admin', 'branch_head', 'head_coach', 'coach'],
  accounts: ['admin', 'branch_head', 'head_coach', 'coach'],
  branches: ['admin'],
  activity: ['admin', 'branch_head'],
  career: ['student'],
  profile: ['student'],
  'student-record': ['admin', 'branch_head', 'head_coach', 'coach'],
  'role-lab': ['admin'],
};

const state: WorkspaceState = {
  user: null,
  profile: null,
  profiles: [],
  branches: [],
  requests: [],
  activity: [],
  studentConstraints: null,
  selectedStudentId: null,
  activeView: 'overview',
  credentials: [],
};

let mobileNavMediaQuery: MediaQueryList | null = null;

function defaultViewForRole(role: unknown) {
  // Every account should arrive on its overview after sign-in.  Students can
  // then choose My coaching plan intentionally, rather than landing part-way
  // through a previously used planning screen.
  return 'overview';
}

const client = supabase as any;

/** Turn provider errors into next steps a person can act on. Keep raw errors out of the UI. */
function friendlyAuthError(error: unknown, fallback: string) {
  const value = error as { message?: string; code?: string; status?: number } | null;
  const message = String(value?.message ?? '').toLowerCase();
  const code = String(value?.code ?? '').toLowerCase();
  if (message.includes('failed to fetch') || message.includes('network') || message.includes('fetch') || code === 'network_error') {
    return 'We could not reach the workspace. Check your internet connection and try again.';
  }
  if (message.includes('rate limit') || message.includes('too many') || value?.status === 429) {
    return 'Too many attempts were made. Wait a few minutes, then try again.';
  }
  if (message.includes('email not confirmed')) {
    return 'This account still needs approval. Ask your administrator to approve it before signing in.';
  }
  if (message.includes('this account is pending') || message.includes('this account is suspended') || message.includes('this account is rejected')) {
    return 'This account is not active yet. Ask your administrator to approve or restore it before signing in.';
  }
  if (message.includes('approved workspace profile')) {
    return 'This email is not linked to an approved dashboard account. Check the email address or ask your administrator to review the account.';
  }
  if (message.includes('invalid login') || message.includes('invalid credentials') || message.includes('invalid password')) {
    return 'The email or password was not recognised. Check both and try again. If this account was just created, ask the Admin to approve it and provide the one-time password or setup link.';
  }
  if (message.includes('expired') || message.includes('otp')) {
    return 'This secure link has expired. Request a new password setup email and try again.';
  }
  return fallback;
}

function friendlyWorkspaceError(error: unknown, fallback: string) {
  const value = error as { message?: string; code?: string; status?: number } | null;
  const message = String(value?.message ?? '');
  const lower = message.toLowerCase();
  if (lower.includes('failed to fetch') || lower.includes('network') || value?.status === 0) {
    return 'We could not reach the workspace. Check your connection and try again.';
  }
  if (lower.includes('row-level security') || value?.code === '42501') {
    return 'You do not have permission to make that change. Ask an administrator if you think this is wrong.';
  }
  if (lower.includes('duplicate') || lower.includes('unique constraint')) {
    return 'That record already exists. Refresh the workspace and update the existing record.';
  }
  if (lower.includes('check constraint') || lower.includes('violates check')) {
    return 'One or more values are outside the allowed range. Check the field guidance and try again.';
  }
  return message && message.length < 240 ? message : fallback;
}

function readPasswordSetupModeFromUrl(): PasswordSetupMode | null {
  const hash = new URLSearchParams(window.location.hash.slice(1));
  const query = new URLSearchParams(window.location.search);
  const type = hash.get('type') ?? query.get('type');
  return type === 'invite' || type === 'recovery' ? type : null;
}

let passwordSetupMode = readPasswordSetupModeFromUrl();
let authEntryMode: AuthEntryMode = 'sign-in';
// Supabase can deliver the SIGNED_OUT event from a previous session after a
// replacement sign-in has already completed. Keep that stale event from
// hiding a valid workspace, especially when switching between staff and
// student accounts in the same browser tab.
let authTransitionInProgress = false;
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
  if (!text) return 'Unknown';
  // Keep user-facing copy in British English while preserving the database
  // enum value (`practice`) used by existing records and policies.
  const readable = text.replace(/[_-]+/g, ' ').replace(/^practice$/i, 'practise');
  return readable[0].toUpperCase() + readable.slice(1);
}

function formatDate(value: unknown, includeTime = false) {
  if (!value) return 'Not set';
  const raw = String(value);
  // Date-only coaching fields represent a calendar day, not midnight UTC.
  // Construct them locally so users in negative UTC offsets do not see the
  // previous day for advice, due dates, reviews, or cohort boundaries.
  const dateOnly = /^(\d{4})-(\d{2})-(\d{2})$/.exec(raw);
  const date = dateOnly
    ? new Date(Number(dateOnly[1]), Number(dateOnly[2]) - 1, Number(dateOnly[3]))
    : new Date(raw);
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

function closeDialogSafely(id: string) {
  const dialog = qs<HTMLElement>(`#${id}`);
  if (!dialog) return;
  const form = dialog.querySelector<HTMLFormElement>('form');
  if (form?.dataset.dirty === 'true' && !window.confirm('Discard the changes you have started?')) return;
  if (dialog instanceof HTMLDialogElement) dialog.close();
  else dialog.hidden = true;
  if (id === 'career-option-dialog' && document.querySelector<HTMLElement>('#hierarchy-workspace')?.dataset.careerDecisionPage === 'true') {
    try {
      sessionStorage.setItem('fcs-dashboard-return-overview', 'true');
      sessionStorage.removeItem('fcs-dashboard-view');
      sessionStorage.removeItem('fcs-dashboard-session-active');
      sessionStorage.removeItem('fcs-dashboard-plan-tab');
    } catch { /* storage may be unavailable */ }
    window.location.assign('/dashboard?view=overview');
  } else if (id === 'career-option-dialog' && window.location.pathname.endsWith('/career-decision')) {
    window.location.assign('/dashboard?view=overview');
  }
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

async function loadPagedRows(table: string, configure?: (query: any) => any, selection = '*') {
  const pageSize = 1000;
  const rows: RecordRow[] = [];
  for (let offset = 0; ; offset += pageSize) {
    let query = client.from(table).select(selection);
    if (configure) query = configure(query);
    const response = await withTimeout<any>(query.range(offset, offset + pageSize - 1));
    if (response.error) throw response.error;
    const page = (response.data ?? []) as RecordRow[];
    rows.push(...page);
    if (page.length < pageSize) break;
  }
  return rows;
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
  qs<HTMLElement>('.auth-entry-inner')?.classList.remove('is-loading-fallback');
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
  qs<HTMLElement>('#hierarchy-workspace')?.classList.remove('workspace-ready');
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
    length: password.length >= 8,
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
  qs<HTMLElement>('#hierarchy-workspace')?.classList.remove('workspace-ready');
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
  qs<HTMLElement>('#hierarchy-workspace')?.classList.add('workspace-ready');
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


function allowedForRole(roles: string, role: Role) {
  return roles === 'all' || roles.split(',').includes(role);
}

function localRoleLabEnabled() {
  return import.meta.env.DEV || ['localhost', '127.0.0.1', '::1'].includes(window.location.hostname);
}

function syncRoleVisibility() {
  if (!state.profile) return;
  const role = state.profile.role as Role;
  qsa<HTMLElement>('[data-roles]').forEach((element) => {
    element.hidden = !allowedForRole(element.dataset.roles ?? '', role) || (element.dataset.localOnly === 'true' && !localRoleLabEnabled());
  });
  buildMobileNav();
}

function buildMobileNav() {
  const mobile = qs<HTMLElement>('#mobile-nav');
  if (!mobile) return;
  const isCompactViewport = window.matchMedia('(max-width: 820px)').matches;
  if (!isCompactViewport) {
    mobile.innerHTML = '';
    mobile.removeAttribute('data-nav-density');
    return;
  }
  mobile.dataset.navDensity = state.profile?.role === 'student' ? 'student' : 'staff';
  const allowed = qsa<HTMLButtonElement>('.workspace-nav .nav-item').filter((item) => !item.hidden);
  // Keep the fixed phone bar calm and scannable. The slide-out menu still
  // contains every permitted destination, so this is a shortcut bar rather
  // than a second, horizontally scrolling navigation system.
  const role = state.profile?.role === 'student' ? 'student' : 'staff';
  const priority = role === 'student' ? ['overview', 'career', 'profile'] : ['overview', 'caseload', 'cohorts', 'people'];
  const byView = new Map(allowed.map((item) => [item.dataset.viewTarget ?? '', item]));
  const selected = priority.map((view) => byView.get(view)).filter((item): item is HTMLButtonElement => Boolean(item));
  const active = byView.get(state.activeView);
  if (active && !selected.includes(active)) selected[selected.length - 1] = active;
  const compactLabels: Record<string, string> = {
    people: 'People',
    accounts: 'Requests',
    activity: 'Activity',
    'role-lab': 'Preview',
  };
  mobile.innerHTML = selected.map((item) => {
    const icon = item.querySelector('svg')?.outerHTML ?? '';
    const label = item.querySelector('span')?.textContent ?? '';
    const view = item.dataset.viewTarget ?? '';
    const mobileLabel = compactLabels[view] ?? label;
    const active = item.dataset.viewTarget === state.activeView ? ' is-active' : '';
    const current = active ? ' aria-current="page"' : '';
    return `<button class="${active}" type="button" data-view-target="${escapeHtml(view)}" aria-label="${escapeHtml(label)}" title="${escapeHtml(label)}"${current}>${icon}<span>${escapeHtml(mobileLabel)}</span></button>`;
  }).join('');
}

function watchMobileNavigation() {
  if (mobileNavMediaQuery) return;
  mobileNavMediaQuery = window.matchMedia('(max-width: 820px)');
  mobileNavMediaQuery.addEventListener?.('change', () => buildMobileNav());
}

function dashboardViewPath(view: string) {
  const url = new URL(window.location.href);
  if (url.pathname.endsWith('/career-decision')) return `${url.pathname}${url.search}${url.hash}`;
  // Keep the view in history.state rather than the visible URL. This gives
  // Back/Forward a real destination without making a page reload reopen a
  // transient tab instead of the normal dashboard landing screen.
  url.searchParams.delete('view');
  return `${url.pathname}${url.search}${url.hash}`;
}

/** Keep the clean URL and the dashboard destination in the same history entry.
 * URL cleanup used to replace the whole state object, which erased the last
 * workspace view and made Back unexpectedly return to overview. */
function replaceDashboardHistory(path: string, view = state.activeView) {
  const previous = window.history.state && typeof window.history.state === 'object'
    ? window.history.state as Record<string, unknown>
    : {};
  const next = { ...previous, dashboardView: view } as Record<string, unknown>;
  // A plan-tab destination belongs only to the career workspace. Remove a
  // stale tab when a fresh sign-in or redirect lands on another view so a
  // later Back action cannot resurrect another user's old section.
  if (view !== 'career') delete next.planTab;
  window.history.replaceState(next, document.title, path);
}

function openView(view: string, updateHistory = true) {
  const target = qs<HTMLElement>(`[data-workspace-view="${view}"]`);
  const role = state.profile?.role as Role | undefined;
  const permitted = !role || viewRoles[view] === 'all' || viewRoles[view]?.includes(role);
  if (!permitted) {
    setStatus(qs<HTMLElement>('#workspace-status'), 'You do not have access to that workspace section.', true);
    return;
  }
  if (!target) {
    // Keep navigation failures visible. A missing pane should never make a
    // correctly labelled dashboard action appear to do nothing, especially
    // after a partial deployment or an outdated saved shortcut.
    setStatus(
      qs<HTMLElement>('#workspace-status'),
      'That workspace section is temporarily unavailable. Refresh the dashboard and try again.',
      true,
    );
    return;
  }
  // A save message belongs to the view where it was made. Clear it when the
  // user moves elsewhere so an old confirmation does not look like a warning
  // or result for the newly opened screen.
  if (view !== state.activeView) setStatus(qs<HTMLElement>('#workspace-status'), '');
  const changedView = view !== state.activeView;
  if (updateHistory && changedView && !window.location.pathname.endsWith('/career-decision')) {
    // Preserve unrelated state owned by the current dashboard session. Older
    // navigation discarded it, so Back/Forward could lose the selected
    // record or resurrect a plan tab from a different view.
    const previous = window.history.state && typeof window.history.state === 'object'
      ? window.history.state as Record<string, unknown>
      : {};
    const next = { ...previous, dashboardView: view } as Record<string, unknown>;
    if (view !== 'career') delete next.planTab;
    window.history.pushState(next, '', dashboardViewPath(view));
  }
  state.activeView = view;
  // Keep the current dashboard destination across a refresh. The URL remains
  // clean, while session storage preserves the user's place within this tab.
  try {
    sessionStorage.setItem('fcs-dashboard-view', view);
    sessionStorage.setItem('fcs-dashboard-session-active', 'true');
    if (view !== 'career') sessionStorage.removeItem('fcs-dashboard-plan-tab');
  } catch { /* storage may be unavailable */ }
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
  const studentOverview = state.profile?.role === 'student' && view === 'overview';
  // Keep the browser tab and assistive technology context aligned with the
  // pane that just opened. This also makes Back/Forward history easier to
  // understand when several workspace sections are open in separate tabs.
  document.title = `${studentOverview ? 'Your coaching overview' : meta.title} | Future Career School`;
  setText('#view-eyebrow', studentOverview ? 'Your coaching overview' : meta.eyebrow);
  setText('#view-title', studentOverview ? 'Your coaching overview' : meta.title);
  setText('#view-subtitle', studentOverview ? 'See your career options, skills, actions, and cohort community in one place.' : meta.subtitle);
  setText('#view-guide-copy', studentOverview
    ? 'Start with one area of your plan: choose a career option, practise a skill, review an action, or join the cohort conversation.'
    : meta.guide);
  const viewGuide = qs<HTMLElement>('#view-guide');
  if (viewGuide) viewGuide.hidden = state.profile?.role === 'student' && ['career', 'profile'].includes(view);
  buildMobileNav();
  qs<HTMLElement>('#hierarchy-workspace')?.classList.remove('is-menu-open');
  qs<HTMLButtonElement>('#mobile-menu-button')?.setAttribute('aria-expanded', 'false');
  // Switch views immediately. Smooth scrolling can leave the sticky header
  // over the first panel while the new screen is still moving, especially on
  // a phone where the content is long.
  if (changedView) {
    window.scrollTo({ top: 0, behavior: 'auto' });
    // A view renderer may finish its DOM update after the synchronous scroll
    // above. Repeat on the next frame so a long previous pane cannot leave the
    // newly opened dashboard section part-way down the page.
    window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'auto' }));
  }
}

function viewFromUrl(role: Role) {
  const requested = new URLSearchParams(window.location.search).get('view');
  let forcedOverview = false;
  let remembered = '';
  try {
    forcedOverview = sessionStorage.getItem('fcs-dashboard-return-overview') === 'true';
    if (forcedOverview) sessionStorage.removeItem('fcs-dashboard-return-overview');
    // Restore the last in-dashboard destination after a refresh, but only for
    // an already active session. signIn() clears this marker before a fresh
    // login so one person's previous tab can never become another person's
    // landing screen.
    if (sessionStorage.getItem('fcs-dashboard-session-active') === 'true') {
      remembered = sessionStorage.getItem('fcs-dashboard-view') ?? '';
    }
  } catch { /* storage may be unavailable */ }
  if (forcedOverview) return 'overview';
  // A refresh is a continuation of the current dashboard session, not a new
  // sign-in. Restore the last view for every role; signIn() clears the session
  // marker first, so a genuinely fresh login still starts at the overview.
  const candidate = requested || remembered;
  if (!candidate) return defaultViewForRole(role);
  const target = qs<HTMLElement>(`[data-workspace-view="${candidate}"]`);
  const navigation = qs<HTMLButtonElement>(`.workspace-nav [data-view-target="${candidate}"]`);
  // Some authorised views are deliberately internal destinations (for
  // example, a staff member's Student record) and therefore have no sidebar
  // button. Resolve those against the same role map instead of treating the
  // missing navigation item as an invalid view.
  const permitted = navigation
    ? allowedForRole(navigation.dataset.roles ?? 'all', role)
    : (viewRoles[candidate] === 'all' || viewRoles[candidate]?.includes(role));
  return target && permitted
    ? candidate
    : defaultViewForRole(role);
}

function restoreSelectedStudentForSession() {
  if (!state.profile || state.profile.role === 'student') return;
  let candidate = '';
  try {
    const historyStudent = window.history.state && typeof window.history.state === 'object'
      ? (window.history.state as Record<string, unknown>).studentId
      : '';
    const urlStudent = new URLSearchParams(window.location.search).get('studentId') ?? '';
    candidate = typeof historyStudent === 'string' && historyStudent
      ? historyStudent
      : urlStudent || sessionStorage.getItem('fcs-dashboard-student') || '';
  } catch { /* storage may be unavailable */ }
  let student = candidate ? profileById(candidate) : null;
  // Keep a small, non-sensitive display snapshot so a refresh can paint the
  // selected record while the profile list request is still settling. The
  // snapshot is never used to grant access; protected detail queries still
  // use the selected id and Supabase RLS.
  if (!student && candidate) {
    try {
      const cached = JSON.parse(sessionStorage.getItem('fcs-dashboard-student-profile') ?? 'null');
      if (cached && cached.id === candidate && cached.role === 'student' && cached.full_name) {
        student = cached as RecordRow;
        state.profiles = [...state.profiles, student];
      }
      if (!student) {
        const history = window.history.state && typeof window.history.state === 'object'
          ? window.history.state as Record<string, unknown>
          : {};
        const historyName = typeof history.studentName === 'string' ? history.studentName.trim() : '';
        if (historyName) {
          student = {
            id: candidate,
            full_name: historyName,
            email: typeof history.studentEmail === 'string' ? history.studentEmail : '',
            role: 'student',
            account_status: 'active',
          } as RecordRow;
          state.profiles = [...state.profiles, student];
        }
      }
    } catch { /* ignore malformed or unavailable cache */ }
  }
  state.selectedStudentId = student?.role === 'student' ? student.id : null;
  setSelectedStudentForWorkspace(state.selectedStudentId);
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
  let profileResponse = await withTimeout<any>(client
    .from('profiles')
    .select(PROFILE_SELECT)
    .eq('id', user.id)
    .single());

  // Older account-creation flows could create the profile row before the
  // auth user was linked, leaving a valid account with a different profile
  // id.  The email is the stable identifier users actually sign in with, so
  // use it as a guarded fallback when the id lookup finds no row.
  if ((profileResponse.error || !profileResponse.data) && user.email) {
    const byEmail = await withTimeout<any>(client
      .from('profiles')
      .select(PROFILE_SELECT)
      .ilike('email', String(user.email).trim())
      .limit(1));
    if (byEmail.data?.[0]) profileResponse = { ...byEmail, data: byEmail.data[0] };
    else if (byEmail.error && (byEmail.error.code === '42703' || byEmail.error.code === 'PGRST204' || String(byEmail.error.message ?? '').toLowerCase().includes('column'))) {
      profileResponse = await withTimeout<any>(client
        .from('profiles')
        .select('id,email,full_name,role,account_status,branch_id,supervisor_id,stage,onboarding_completed,created_at,updated_at')
        .ilike('email', String(user.email).trim())
        .limit(1));
      if (profileResponse.data?.[0]) profileResponse = { ...profileResponse, data: profileResponse.data[0] };
    }
  }

  // Keep sign-in usable while a deployment is finishing a profile-field
  // migration. The core identity fields are enough to establish access;
  // newer fields are optional until the next refresh. Do not use this for
  // arbitrary errors, only the PostgREST "column does not exist" shape.
  const profileErrorText = String(profileResponse.error?.message ?? '').toLowerCase();
  if (profileResponse.error && (profileResponse.error.code === '42703' || profileResponse.error.code === 'PGRST204' || profileErrorText.includes('column') && profileErrorText.includes('does not exist'))) {
    profileResponse = await withTimeout<any>(client
      .from('profiles')
      .select('id,email,full_name,role,account_status,branch_id,supervisor_id,stage,onboarding_completed,created_at,updated_at')
      .eq('id', user.id)
      .single());
  }

  // Some early account records were linked by email while auth migrations
  // were still in progress. If the reduced id lookup also misses, use the
  // same reduced shape by email so an otherwise valid student can still sign in.
  if ((profileResponse.error || !profileResponse.data) && user.email) {
    const reducedByEmail = await withTimeout<any>(client
      .from('profiles')
      .select('id,email,full_name,role,account_status,branch_id,supervisor_id,stage,onboarding_completed,created_at,updated_at')
      .ilike('email', String(user.email).trim())
      .limit(1));
    if (reducedByEmail.data?.[0]) profileResponse = { ...reducedByEmail, data: reducedByEmail.data[0] };
  }

  if (profileResponse.error || !profileResponse.data) {
    throw new Error('This login does not have an active, approved profile.');
  }
  if (profileResponse.data.account_status !== 'active') {
    throw new Error(`This account is ${profileResponse.data.account_status}. Ask the Admin to review it.`);
  }
  const currentProfile = profileResponse.data as RecordRow;
  state.profile = currentProfile;
  state.studentConstraints = null;

  const includeActivity = ['admin', 'branch_head'].includes(currentProfile.role);
  // A student's dashboard only needs its own profile, branch, and coaching
  // records. Treat unrelated operational reads as optional for that role so
  // a restrictive policy on one administrative table cannot block sign-in.
  const optionalStudentRead = <T>(read: () => Promise<T>, fallback: T) => read().catch((error) => {
    if (currentProfile.role !== 'student') throw error;
    console.warn('Optional student workspace data was unavailable.', error);
    return fallback;
  });
  const [profiles, branches, requests, activity] = await withTimeout<any[]>(Promise.all([
    optionalStudentRead(() => loadPagedRows('profiles', (query) => query.order('full_name'), PROFILE_SELECT), [currentProfile]),
    optionalStudentRead(() => loadPagedRows('branches', (query) => query.order('name')), []),
    optionalStudentRead(() => loadPagedRows('account_requests', (query) => query.order('created_at', { ascending: false })), []),
    includeActivity ? loadPagedRows('audit_events', (query) => query.order('created_at', { ascending: false }).limit(100)) : Promise.resolve([]),
  ]));
  state.profiles = profiles;
  state.branches = branches;
  state.requests = requests;
  state.activity = activity;

  if (currentProfile.role === 'student') {
    try {
      const constraints = await client
        .from('student_constraints')
        .select('student_id,budget_range,available_hours_per_week,max_commute_minutes,willing_to_relocate,device_access,internet_access,family_expectations,education_timeline,risk_tolerance,non_negotiables,interest_themes,updated_at')
        .eq('student_id', currentProfile.id)
        .maybeSingle();
      if (!constraints.error) state.studentConstraints = constraints.data ?? null;
    } catch (error) {
      console.warn('Student planning context could not be loaded.', error);
    }
  }

  try {
    await loadCoachingWorkspace(coachingContext());
  } catch (error) {
    // A student's sign-in must not depend on every optional coaching table
    // being available at the same moment. Keep the authenticated profile and
    // open the plan; the workspace can be refreshed once the affected table
    // or policy is repaired. Staff still receive the original error so an
    // operational data problem is not silently hidden from them.
    if (currentProfile.role !== 'student') throw error;
    console.warn('Student coaching data could not be fully loaded.', error);
    setStatus(qs<HTMLElement>('#workspace-status'), 'Your account is signed in. Some coaching information is temporarily unavailable; refresh this page to try again.', true);
  }
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
  const studentView = state.profile.role === 'student';
  setText('#sidebar-brand-label', studentView ? 'My coaching plan' : 'Coaching workspace');
  setText('#mobile-brand-label', studentView ? 'My coaching plan' : 'Coaching workspace');
  if (studentView) setText('#student-profile-heading', name);
  setText('#sidebar-initials', value);
  setText('#mobile-initials', value);
  setText('#sidebar-branch-name', scopeName);
  setText('#sidebar-branch-code', scopeCode);
  setText('#workspace-branch-name', scopeName);
  setText('#workspace-branch-code', scopeCode);
  const accountLabel = state.profile.role === 'admin' ? 'Create account' : 'Request account';
  setText('#new-account-label', accountLabel);
}

function metricHtml(label: string, value: string | number, note: string, view = '', planTab = '') {
  const target = view ? ` data-open-view="${escapeHtml(view)}"${planTab ? ` data-plan-shortcut-tab="${escapeHtml(planTab)}"` : ''}` : '';
  const tag = view ? 'button' : 'div';
  const typeAttr = view ? ' type="button"' : '';
  const aria = view ? ` aria-label="${escapeHtml(`${label}: ${value}. ${note}`)}"` : '';
  return `<${tag} class="metric-item${view ? ' metric-link' : ''}"${typeAttr}${aria}${target}><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong><small>${escapeHtml(note)}</small>${view ? '<span class="metric-arrow" aria-hidden="true">→</span>' : ''}</${tag}>`;
}

function attentionHtml(title: string, detail: string, action = '', view = '', studentId = '', tab = '') {
  const attrs = studentId
    ? `data-student-id="${escapeHtml(studentId)}"${tab ? ` data-open-record-tab="${escapeHtml(tab)}"` : ''}`
    : view ? `data-open-view="${escapeHtml(view)}"${tab ? ` data-plan-shortcut-tab="${escapeHtml(tab)}"` : ''}` : '';
  return `<div class="attention-item"><span class="attention-dot"></span><span><strong>${escapeHtml(title)}</strong><small>${escapeHtml(detail)}</small></span>${action ? `<button class="inline-link-button" type="button" aria-label="${escapeHtml(`${action}: ${title}`)}" ${attrs}>${escapeHtml(action)}</button>` : ''}</div>`;
}

function renderOverview() {
  if (!state.profile) return;
  const role = state.profile.role as Role;
  const orientationCopy: Record<Role, string> = {
    admin: 'Use this workspace to keep approval, reporting lines, branches, and coaching coverage aligned. Start with attention items, then open the linked operational view.',
    branch_head: 'Use this workspace to keep your branch staffed, students assigned, cohorts active, and coaching follow-through visible.',
    head_coach: 'Use this workspace to review coaching quality, unblock cases, support coaches, and keep cohort delivery moving.',
    coach: 'Use this workspace one student at a time: understand context, agree a career option, build skills and evidence, then set the next dated action.',
    student: 'Use your coaching plan to choose a career option, practise useful skills, and bring evidence back to your coaching team.',
  };
  setText('#orientation-copy', orientationCopy[role]);
  if (role === 'student') {
    // The visible career pane is keyed as `options` in the plan tabs. Normalise
    // any static overview shortcut that still carries the older label so every
    // entry point lands on the same pane instead of reopening the last tab.
    qsa<HTMLElement>('[data-open-view="career"][data-plan-shortcut-tab="careers"]').forEach((button) => { button.dataset.planShortcutTab = 'options'; });
    setText('#orientation-title', 'Move forward one step at a time');
    setText('#orientation-step-one-title', 'Choose career options to explore');
    setText('#orientation-step-one-copy', 'Choose one or more career options to explore seriously, and keep useful alternatives open.');
    setText('#orientation-step-two-title', 'Take one small next step');
    setText('#orientation-step-two-copy', 'Set a date and record what you actually did.');
    setText('#orientation-step-three-title', 'Bring proof to your coach');
    setText('#orientation-step-three-copy', 'Add skill evidence or feedback when you have something real to share.');
  }
  const people = state.profiles.filter((profile) => profile.id !== state.profile?.id);
  const students = state.profiles.filter((profile) => profile.role === 'student' && profile.account_status === 'active');
  const pending = state.requests.filter((request) => request.status === 'pending');
  const setupPending = people.filter((profile) => profile.account_status === 'active' && profile.must_change_password);
  const metric = qs<HTMLElement>('#overview-metrics');
  const attention = qs<HTMLElement>('#attention-list');
  const structure = qs<HTMLElement>('#structure-list');
  if (!metric || !attention || !structure) return;

  if (role === 'student') {
    const plan = studentOverviewMetrics(state.profile.id);
      metric.innerHTML = [
      metricHtml('Career options', plan.careers, 'Options you are considering', 'career', 'options'),
      metricHtml('Career options being tested', plan.shortlisted, 'Options with a small test or useful evidence', 'career', 'options'),
      metricHtml('Skills to practise', plan.skillGaps, 'Skills still building', 'career', 'skills'),
      metricHtml('Open actions', plan.openActions, plan.openActions ? 'Dated steps still to complete' : 'No open steps yet', 'career', 'actions'),
      metricHtml('Coach guidance', plan.guidance, plan.guidance ? 'Notes shared with you' : 'No guidance shared yet', 'career', 'guidance'),
      metricHtml('Cohort', plan.cohort ? 'Joined' : 'Not set', plan.cohort ? 'Your shared coaching community' : 'Ask your coach to place you in a cohort', 'career', 'sessions'),
    ].join('');

    const items: string[] = [];
    if (!plan.careers) items.push(attentionHtml('Choose a career option to explore', 'Start with one course, role, or route worth investigating.', 'Open plan', 'career', '', 'options'));
    if (!plan.cohort) items.push(attentionHtml('Join your coaching cohort', 'Ask your coaching team to place you in the right group so you can take part in shared progress.', 'Open community', 'career', '', 'sessions'));
    if (plan.actionDueState === 'overdue' && plan.nextAction) {
      items.push(attentionHtml(`Action overdue`, `${plan.nextAction.title || 'An open action'} was due ${formatDate(plan.nextAction.due_date)}. Update it or choose the next realistic step.`, 'Open actions', 'career', '', 'actions'));
    } else if (plan.actionDueState === 'soon' && plan.nextAction) {
      items.push(attentionHtml(`Action due soon`, `${plan.nextAction.title || 'An open action'} is due by ${formatDate(plan.nextAction.due_date)}.`, 'Open actions', 'career', '', 'actions'));
    }
    if (plan.sessionNoticeState === 'soon' && plan.nextSession) {
      items.push(attentionHtml(`Cohort session coming up`, `${plan.nextSession.topic || 'Your next cohort session'} is scheduled for ${formatDate(plan.nextSession.starts_at, true)}.`, 'Open community', 'career', '', 'sessions'));
    }
    if (!plan.skills) items.push(attentionHtml('Choose your first skills to practise', 'Start with a foundation skill plan, then add skills for your primary career option.', 'Review skills', 'career', '', 'skills'));
    else if (plan.skillGaps) items.push(attentionHtml(`${plan.skillGaps} skill${plan.skillGaps === 1 ? '' : 's'} still need evidence`, 'Choose one skill to practise and add proof when you have something real to show.', 'Review skills', 'career', '', 'skills'));
    attention.innerHTML = items.slice(0, 5).join('') || attentionHtml('Your plan is moving', 'Keep adding evidence and completing the next useful action.');

    const steps = [
      ['Career options', plan.careers > 0],
      ['Skills to practise', plan.skills > 0],
      ['Cohort community', Boolean(plan.cohort)],
      ['Coach guidance', plan.guidance > 0],
    ];
    structure.innerHTML = steps.map(([label, done], index) => `<div class="structure-row"><span class="structure-index">0${index + 1}</span><span>${escapeHtml(label)}</span><strong>${done ? 'Ready' : 'Open'}</strong></div>`).join('');
    setText('#attention-title', 'What to work on');
    setText('#structure-title', 'Your plan at a glance');
    const focus = qs<HTMLElement>('#student-focus');
    if (focus) focus.hidden = false;
    const button = qs<HTMLButtonElement>('#student-focus-action');
    if (!plan.careers) {
      setText('#student-focus-title', 'Choose your first career option');
      setText('#student-focus-copy', 'Add the first career, course, or route worth exploring and record how you will test it.');
      if (button) button.innerHTML = 'Choose a career option <span aria-hidden="true">→</span>';
      if (button) { button.dataset.openView = 'career'; button.dataset.planShortcutTab = 'options'; }
    } else {
      setText('#student-focus-title', 'Continue your coaching plan');
      setText('#student-focus-copy', 'Choose the area that is most useful today: career options, skills, actions, or your cohort community.');
      if (button) button.innerHTML = 'Open coaching plan <span aria-hidden="true">→</span>';
      if (button) { button.dataset.openView = 'career'; button.dataset.planShortcutTab = 'options'; }
    }
    return;
  }

  const operations = coachingOverviewMetrics() ?? { activeCases: students.length, attention: 0, upcomingSessions: 0, overdueActions: 0 };
  metric.innerHTML = [
    metricHtml('Active cases', operations.activeCases, `${students.length} visible students`, 'caseload'),
    metricHtml('Need attention', operations.attention, 'Review, session, skill, or action', 'caseload'),
    metricHtml('Upcoming sessions', operations.upcomingSessions, 'Scheduled in your scope', 'cohorts'),
    metricHtml('Overdue actions', operations.overdueActions, 'Follow-through at risk', 'caseload'),
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
  coachingAttentionItems(5).forEach((item) => items.push(attentionHtml(item.title, item.detail, 'Open record', '', item.student.id, item.tab)));
  if (role === 'admin') {
    state.branches.filter((branch) => !state.profiles.some((profile) => profile.role === 'branch_head' && profile.branch_id === branch.id && profile.account_status === 'active'))
      .slice(0, 1).forEach((branch) => items.push(attentionHtml(`${branch.name} has no active Branch Head`, 'Assign branch ownership before expanding the team.', 'Open people', 'people')));
  }
  attention.innerHTML = items.slice(0, 6).join('') || attentionHtml('No urgent items', 'The visible coaching operation is up to date.');
  const coverage = [
    ['Students in scope', students.length],
    ['Active coaching cases', operations.activeCases],
    ['Pending approvals', pending.length],
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
      <td data-label="Person"><span class="person-cell"><span class="avatar small">${escapeHtml(initials(profile.full_name))}</span><span><strong title="${escapeHtml(profile.full_name || 'Unnamed')}">${escapeHtml(profile.full_name || 'Unnamed')}</strong><small title="${escapeHtml(profile.email)}">${escapeHtml(profile.email)}</small></span></span></td>
      <td data-label="Role"><span class="role-badge">${escapeHtml(formatRole(profile.role))}</span></td>
      <td data-label="Branch"><span class="branch-cell"><strong title="${escapeHtml(branch?.name || 'Not assigned')}">${escapeHtml(branch?.name || 'Not assigned')}</strong>${branch?.code ? `<code>${escapeHtml(branch.code)}</code>` : ''}</span></td>
      <td data-label="Reports to" title="${escapeHtml(supervisor?.full_name || 'Admin')}">${escapeHtml(supervisor?.full_name || 'Admin')}</td>
      <td data-label="Status"><span class="status-badge" data-status="${escapeHtml(accessStatus)}">${escapeHtml(isSetupPending ? 'Setup pending' : formatStatus(profile.account_status))}</span></td>
      <td data-label="Actions"><span class="row-actions">${studentAction}${manageAction}${passwordActions}${statusAction}</span></td>
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
  empty.innerHTML = isAdmin
    ? '<strong>No account requests to review.</strong><span>When a team member requests access, it will appear here for approval or rejection.</span>'
    : '<strong>No account requests yet.</strong><span>Use Request account when you need to add someone within your allowed hierarchy. An Admin must approve it.</span>';
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
  }).join('') || '<div class="empty-state"><strong>No branches yet.</strong><span>An Admin can create the first branch from the New branch button above.</span></div>';
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

function fillStudentProfileForm() {
  if (!state.profile) return;
  const form = qs<HTMLFormElement>('#student-profile-form');
  if (!form) return;
  const fields: Record<string, unknown> = {
    full_name: state.profile.full_name ?? '',
    education_timeline: state.studentConstraints?.education_timeline ?? '',
    available_hours_per_week: state.studentConstraints?.available_hours_per_week ?? '',
    device_access: state.studentConstraints?.device_access ?? '',
    internet_access: state.studentConstraints?.internet_access ?? '',
    interest_themes: Array.isArray(state.studentConstraints?.interest_themes) ? state.studentConstraints.interest_themes.join(', ') : state.studentConstraints?.interest_themes ?? '',
    non_negotiables: Array.isArray(state.studentConstraints?.non_negotiables) ? state.studentConstraints.non_negotiables.join('\n') : state.studentConstraints?.non_negotiables ?? '',
  };
  Object.entries(fields).forEach(([name, value]) => {
    const field = form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement | null;
    if (field) field.value = String(value ?? '');
  });
  setText('#student-profile-saved-at', state.profile.updated_at ? `Last saved ${formatDate(state.profile.updated_at, true)}` : 'Not saved yet');
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
    renderCoachNotes,
    renderOverview,
  };
}

async function openStudentRecord(studentId: string) {
  state.selectedStudentId = studentId;
  try {
    sessionStorage.setItem('fcs-dashboard-student', studentId);
    const selected = profileById(studentId);
    if (selected) sessionStorage.setItem('fcs-dashboard-student-profile', JSON.stringify({
      id: selected.id,
      full_name: selected.full_name,
      email: selected.email,
      role: selected.role,
      branch_id: selected.branch_id,
      supervisor_id: selected.supervisor_id,
      account_status: selected.account_status,
    }));
    const previous = window.history.state && typeof window.history.state === 'object'
      ? window.history.state as Record<string, unknown>
      : {};
    const recordUrl = new URL(window.location.href);
    recordUrl.searchParams.set('view', 'student-record');
    recordUrl.searchParams.set('studentId', studentId);
    window.history.replaceState({
      ...previous,
      studentId,
      studentName: selected?.full_name ?? '',
      studentEmail: selected?.email ?? '',
    }, document.title, recordUrl.pathname + recordUrl.search + recordUrl.hash);
  } catch { /* storage/history may be unavailable */ }
  await openCoachingRecord(studentId);
}

function renderCoachNotes(notes: RecordRow[]) {
  const container = qs<HTMLElement>('#coach-note-list');
  if (!container) return;
  // The caseload cache contains notes for every visible student. The record
  // pane must render only the currently selected student's notes, including
  // during the brief interval before the scoped detail query completes.
  const visibleNotes = state.selectedStudentId
    ? notes.filter((note) => note.student_id === state.selectedStudentId)
    : [];
  container.innerHTML = visibleNotes.map((note) => {
    const author = profileById(note.author_id);
    return `<article class="note-item"><span><strong>${escapeHtml(author?.full_name || 'Coach')}</strong><small>${escapeHtml(formatRole(note.note_type))} · ${escapeHtml(formatDate(note.created_at, true))}</small></span><p>${escapeHtml(note.content)}</p><span class="status-badge">${escapeHtml(note.visibility === 'staff' ? 'Coaching staff' : note.visibility === 'student' ? 'Student dashboard' : 'Head Coach+')}</span></article>`;
  }).join('') || '<div class="empty-state coaching-empty"><strong>No coaching notes yet.</strong><span>Add a private observation for staff, or share a clear suggestion with the student when there is a useful next step.</span></div>';
}

function renderQuickRoleAccess() {
  const section = qs<HTMLElement>('#quick-role-access');
  const container = qs<HTMLElement>('#quick-role-buttons');
  if (!section || !container || !localRoleLabEnabled()) return;
  state.credentials = readCredentials();
  section.hidden = authEntryMode !== 'sign-in' || !state.credentials.length;
  container.innerHTML = state.credentials.map((credential) => `<button class="quick-role-button" type="button" data-test-login-email="${escapeHtml(credential.email)}"><strong>${escapeHtml(formatRole(credential.role))}</strong><small>${escapeHtml(credential.email)}</small></button>`).join('');
}

function renderRoleLab() {
  const container = qs<HTMLElement>('#role-lab-credentials');
  if (!container || !localRoleLabEnabled()) return;
  state.credentials = readCredentials();
  container.innerHTML = state.credentials.map((credential) => `<article class="credential-row"><span><strong>${escapeHtml(credential.fullName)}</strong><code>${escapeHtml(credential.email)}</code><small>${escapeHtml(credential.password)}</small></span><button class="secondary-button" type="button" data-test-login-email="${escapeHtml(credential.email)}">Sign in</button></article>`).join('') || '<div class="empty-state">Prepare the lab to create private test logins.</div>';
}

function renderAll() {
  const root = qs<HTMLElement>('#hierarchy-workspace');
  if (root && state.profile?.role) root.dataset.userRole = state.profile.role;
  renderIdentity();
  syncRoleVisibility();
  renderOverview();
  renderPeople();
  renderRequests();
  renderBranches();
  renderActivity();
  renderCoachingWorkspace();
  fillStudentProfileForm();
  renderRoleLab();
  openView(state.activeView);
  if (state.profile?.role === 'student' && state.activeView === 'career') {
    const historyTab = window.history.state && typeof window.history.state === 'object'
      ? String((window.history.state as Record<string, unknown>).planTab ?? '')
      : '';
    restoreStudentPlanTab(historyTab);
  }
}

async function refreshWorkspace(message = '') {
  if (!state.user) return;
  const root = qs<HTMLElement>('#hierarchy-workspace');
  const button = qs<HTMLButtonElement>('#refresh-button');
  root?.setAttribute('aria-busy', 'true');
  setBusy(button, true, 'Refreshing…');
  try {
    await loadWorkspaceData(state.user);
    renderAll();
    if (message) setStatus(qs<HTMLElement>('#workspace-status'), message);
  } catch (error) {
    setStatus(qs<HTMLElement>('#workspace-status'), friendlyWorkspaceError(error, 'Could not refresh the workspace.'), true);
  } finally {
    setBusy(button, false);
    root?.removeAttribute('aria-busy');
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

function syncAccountAssignmentFields() {
  const role = qs<HTMLSelectElement>('#account-role')?.value as Role;
  const branch = qs<HTMLSelectElement>('#account-branch');
  const supervisor = qs<HTMLSelectElement>('#account-supervisor');
  const branchLabel = qs<HTMLElement>('#account-branch-label');
  const supervisorLabel = qs<HTMLElement>('#account-supervisor-label');
  const cohortNote = qs<HTMLElement>('#account-cohort-note');
  const isAdmin = role === 'admin';
  if (branch) {
    branch.required = !isAdmin;
    if (isAdmin) {
      branch.innerHTML = '<option value="">Organisation-wide</option>';
      branch.value = '';
      branch.disabled = true;
    } else {
      branch.disabled = false;
    }
  }
  if (supervisor) {
    supervisor.required = !isAdmin;
    if (isAdmin) {
      supervisor.innerHTML = '<option value="">No supervisor (organisation admin)</option>';
      supervisor.value = '';
      supervisor.disabled = true;
    }
  }
  if (branchLabel) branchLabel.textContent = isAdmin ? 'Branch (optional for Admin)' : 'Branch';
  if (supervisorLabel) supervisorLabel.textContent = isAdmin ? 'Reports to (not required)' : 'Reports to';
  if (cohortNote) {
    cohortNote.hidden = role !== 'student';
    cohortNote.textContent = role === 'student'
      ? 'Every student account is placed in the branch’s general cohort automatically. A coach can move the student to the right cohort afterwards.'
      : '';
  }
}

function populateSupervisors() {
  if (!state.profile) return;
  const role = qs<HTMLSelectElement>('#account-role')?.value as Role;
  const branchId = qs<HTMLSelectElement>('#account-branch')?.value;
  const select = qs<HTMLSelectElement>('#account-supervisor');
  const submit = qs<HTMLButtonElement>('#account-submit');
  if (!select || !role) return;
  if (role === 'admin') {
    syncAccountAssignmentFields();
    if (submit) submit.disabled = false;
    setStatus(qs<HTMLElement>('#account-form-status'), 'Admin accounts work across the organisation and do not need a branch or supervisor.');
    return;
  }
  syncAccountAssignmentFields();
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
  // Supabase treats email addresses case-insensitively, but normalising here
  // avoids a surprising failure when an account was created with mixed-case
  // text or copied from an invitation. Trim the password only nowhere: spaces
  // may be part of a user's password.
  const normalizedEmail = email.trim().toLowerCase();
  if (!normalizedEmail) throw new Error('Enter the email address for your approved account.');
  if (!password) throw new Error('Enter your password.');
  // If the browser still has another account's session, explicitly hand it
  // off before signing in. Supabase normally replaces sessions, but the old
  // auth event can otherwise race the profile load and make a student appear
  // to be returned to the wrong workspace.
  authTransitionInProgress = true;
  try {
    sessionStorage.removeItem('fcs-dashboard-view');
    sessionStorage.removeItem('fcs-dashboard-session-active');
    sessionStorage.removeItem('fcs-dashboard-plan-tab');
    sessionStorage.removeItem('fcs-dashboard-student');
    sessionStorage.removeItem('fcs-dashboard-student-profile');
    const previous = window.history.state && typeof window.history.state === 'object'
      ? window.history.state as Record<string, unknown>
      : {};
    if ('studentId' in previous) {
      const next = { ...previous };
      delete next.studentId;
      window.history.replaceState(next, document.title, window.location.href);
    }
  } catch { /* storage may be unavailable */ }
  try {
    const existing = await client.auth.getSession();
    const existingEmail = String(existing?.data?.session?.user?.email ?? '').trim().toLowerCase();
    if (existingEmail && existingEmail !== normalizedEmail) await client.auth.signOut();
  } catch {
    // A stale-session cleanup is helpful but must never block a normal sign-in.
  }
  const { data, error } = await client.auth.signInWithPassword({ email: normalizedEmail, password });
  if (error) throw error;
  if (!data.user) throw new Error('Supabase did not return a signed-in user.');
  // Reset only after authentication succeeds. A mistyped password must not
  // blank a still-valid session; once the new identity is accepted, no stale
  // profile or account-scoped records may survive into the next load.
  state.profile = null;
  state.activeView = 'overview';
  state.profiles = [];
  state.branches = [];
  state.requests = [];
  state.activity = [];
  state.selectedStudentId = null;
  clearCoachingWorkspace();
  clearCohortWorkspace();
  state.user = data.user;
  // Newly created accounts are active but must replace their temporary
  // password before protected coaching tables can be loaded. Fetch only the
  // self profile first so the user reaches password setup reliably.
  let setupProfileResponse = await client
    .from('profiles')
    .select(PROFILE_SELECT)
    .eq('id', data.user.id)
    .single();
  const setupErrorText = String(setupProfileResponse.error?.message ?? '').toLowerCase();
  if (setupProfileResponse.error && (setupProfileResponse.error.code === '42703' || setupProfileResponse.error.code === 'PGRST204' || setupErrorText.includes('column') && setupErrorText.includes('does not exist'))) {
    setupProfileResponse = await client
      .from('profiles')
      .select('id,email,full_name,role,account_status,branch_id,supervisor_id,stage,onboarding_completed,created_at,updated_at')
      .eq('id', data.user.id)
      .single();
  }
  if ((setupProfileResponse.error || !setupProfileResponse.data) && data.user.email) {
    // A few early account-creation records used the email as the stable link
    // before the auth user id was copied across. Try the reduced shape here
    // too, after the schema compatibility retry above.
    const byEmail = await client
      .from('profiles')
      .select('id,email,full_name,role,account_status,branch_id,supervisor_id,stage,onboarding_completed,created_at,updated_at')
      .ilike('email', String(data.user.email).trim())
      .limit(1)
    if (byEmail.data?.[0]) setupProfileResponse = { ...byEmail, data: byEmail.data[0] };
  }
  if ((setupProfileResponse.error || !setupProfileResponse.data) && data.user.email) {
    const byEmail = await client
      .from('profiles')
      .select(PROFILE_SELECT)
      .ilike('email', String(data.user.email).trim())
      .limit(1)
    if (byEmail.data?.[0]) setupProfileResponse = { ...byEmail, data: byEmail.data[0] };
    else if (byEmail.error && (byEmail.error.code === '42703' || byEmail.error.code === 'PGRST204' || String(byEmail.error.message ?? '').toLowerCase().includes('column'))) {
      // Keep older deployments usable while profile migrations are rolling out.
      // The identity and role fields are sufficient to complete sign-in.
      setupProfileResponse = await client
        .from('profiles')
        .select('id,email,full_name,role,account_status,branch_id,supervisor_id,stage,onboarding_completed,created_at,updated_at')
        .ilike('email', String(data.user.email).trim())
        .limit(1);
      if (setupProfileResponse.data?.[0]) setupProfileResponse = { ...setupProfileResponse, data: setupProfileResponse.data[0] };
    }
  }
  // An approval writes Auth and the profile in the same edge-function request,
  // but a newly signed-in browser can briefly read from a replica that has not
  // caught up. Retry the guarded self lookup before showing a misleading
  // “profile missing” message to a student who has just been approved.
  if ((setupProfileResponse.error || !setupProfileResponse.data) && data.user.email) {
    for (let attempt = 0; attempt < 2 && (setupProfileResponse.error || !setupProfileResponse.data); attempt += 1) {
      await new Promise((resolve) => window.setTimeout(resolve, 300));
      const retry = await client
        .from('profiles')
        .select(PROFILE_SELECT)
        .eq('id', data.user.id)
        .limit(1);
      if (retry.data?.[0]) {
        setupProfileResponse = { ...retry, data: retry.data[0] };
        break;
      }
      const retryByEmail = await client
        .from('profiles')
        .select(PROFILE_SELECT)
        .ilike('email', String(data.user.email).trim())
        .limit(1);
      if (retryByEmail.data?.[0]) setupProfileResponse = { ...retryByEmail, data: retryByEmail.data[0] };
    }
  }
  if (setupProfileResponse.error || !setupProfileResponse.data) {
    const profileErrorMessage = String(setupProfileResponse.error?.message ?? '').toLowerCase();
    const profileErrorCode = String(setupProfileResponse.error?.code ?? '').toLowerCase();
    const transientProfileRead = Boolean(setupProfileResponse.error)
      && (profileErrorCode.startsWith('5')
        || profileErrorMessage.includes('fetch')
        || profileErrorMessage.includes('network')
        || profileErrorMessage.includes('timeout')
        || profileErrorMessage.includes('temporar'));
    // Give a brief API hiccup one final chance before ending the session. This
    // avoids forcing a student to repeat sign-in when Auth succeeded but the
    // profile request briefly failed.
    if (transientProfileRead) {
      await new Promise((resolve) => window.setTimeout(resolve, 350));
      const retry = await client
        .from('profiles')
        .select(PROFILE_SELECT)
        .eq('id', data.user.id)
        .limit(1);
      if (retry.data?.[0]) setupProfileResponse = { ...retry, data: retry.data[0] };
    }
  }
  if (setupProfileResponse.error || !setupProfileResponse.data) {
    state.user = null;
    try { await client.auth.signOut(); } catch { /* keep the sign-in screen usable */ }
    if (setupProfileResponse.error?.code === 'PGRST116') {
      // An Auth user can exist before the matching profile is provisioned
      // (for example while an account request is still awaiting approval).
      // Explain that state directly instead of making a valid password look
      // like a credentials failure.
      throw new Error('Your password was accepted, but this account is not linked to an approved workspace profile yet. Ask the Admin to approve the student account and check that the profile email matches the sign-in email.');
    }
    throw new Error('Your password was accepted, but the workspace account could not be loaded. Ask your administrator to check the account, then try again.');
  }
  const setupProfile = setupProfileResponse.data as RecordRow;
  state.profile = setupProfile;
  state.activeView = defaultViewForRole(setupProfile.role);
  if (setupProfile.account_status !== 'active') {
    state.user = null;
    state.profile = null;
    try { await client.auth.signOut(); } catch { /* keep the sign-in screen usable */ }
    throw new Error(`This account is ${setupProfile.account_status}. Ask the Admin to review it.`);
  }
  if (setupProfile.must_change_password) {
    authTransitionInProgress = false;
    showPasswordSetup('temporary');
    return;
  }
  try {
    await loadWorkspaceData(data.user);
  } catch (workspaceError) {
    // Authentication has already succeeded and the profile is available even
    // when an optional coaching read times out. Never turn a transient data
    // request failure into a sign-out for any role: keep the signed-in shell
    // usable and offer a clear retry path instead.
    if (!state.profile) throw workspaceError;
    setStatus(qs<HTMLElement>('#workspace-status'), 'You are signed in. Some workspace information could not be loaded yet; refresh to try again.', true);
  }
  // Resolve the destination after the profile is known. A fresh sign-in must
  // always land on the role overview; refreshes are handled by the existing
  // authenticated-session path, which restores the current view separately.
  state.activeView = defaultViewForRole(state.profile?.role);
  if (!window.location.pathname.endsWith('/career-decision')) {
    // Start a fresh, explicit history destination for the newly signed-in
    // account so Back cannot reuse another user's previous workspace state.
    replaceDashboardHistory(window.location.pathname + window.location.search + window.location.hash);
  }
  if (state.profile?.must_change_password) {
    authTransitionInProgress = false;
    showPasswordSetup('temporary');
  } else {
    // A sign-in that starts from a stale deep link should always land on the
    // person's home overview. The career planner is a deliberate in-session
    // destination, but it should not become the apparent home screen simply
    // because the browser happened to retain its URL from an earlier visit.
    if (document.querySelector<HTMLElement>('#hierarchy-workspace')?.dataset.careerDecisionPage === 'true') {
      // Replace the stale planner entry rather than adding another history
      // entry. This prevents Back immediately returning a newly signed-in
      // user to the deep link that happened to be open before authentication.
      window.location.replace('/dashboard?view=overview');
      return;
    }
    showWorkspace();
    renderAll();
    authTransitionInProgress = false;
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
    // Authentication can succeed before the profile and coaching workspace
    // loads. Preserve the useful workspace error in that case; otherwise a
    // data or permission problem is misleadingly shown as a bad password.
    const workspaceMessage = friendlyWorkspaceError(error, 'Could not load your workspace after signing in. Refresh and try again.');
    const authMessage = friendlyAuthError(error, workspaceMessage);
    setStatus(qs<HTMLElement>('#auth-status'), authMessage, true);
    // Newly provisioned students often have a temporary password or an
    // invitation link rather than a password they chose themselves. Make the
    // recovery route immediately available after a failed password attempt,
    // with the email carried across, instead of leaving them stranded on the
    // sign-in form wondering what to do next.
    const rawAuthMessage = String((error as { message?: string } | null)?.message ?? '').toLowerCase();
    if (rawAuthMessage.includes('invalid login') || rawAuthMessage.includes('invalid credentials') || rawAuthMessage.includes('invalid password')) {
      const email = String(data.get('email') ?? '').trim().toLowerCase();
      const recoveryEmail = qs<HTMLInputElement>('#recovery-email');
      if (recoveryEmail && email) recoveryEmail.value = email;
      // Put the recovery route directly in front of someone who has just
      // failed first sign-in. New accounts do not have a password chosen by
      // the student; they need the secure setup link or a fresh one-time
      // password. Leaving them on a blank sign-in form made a valid account
      // look as though it had not been created.
      const recoveryTab = qs<HTMLButtonElement>('#auth-recovery-tab');
      const recoveryStatus = qs<HTMLElement>('#recovery-status');
      if (recoveryTab && email) {
        recoveryTab.classList.add('is-attention');
        recoveryTab.click();
        setStatus(recoveryStatus, 'If this account has been approved, email a secure link here to choose a password.', true);
      }
      setStatus(qs<HTMLElement>('#auth-status'), `${authMessage} Use “Set or reset password” above if this is a newly created account or you no longer have the temporary password.`, true);
      if (recoveryTab) recoveryTab.setAttribute('aria-label', 'Set or reset your password for this account');
    }
    // Never leave a rejected password sitting in the form. Keeping it there
    // makes it easy to submit the same value again and is especially confusing
    // when a student has just received a replacement one-time password.
    const passwordInput = qs<HTMLInputElement>('#sign-in-password');
    if (passwordInput) {
      passwordInput.value = '';
      window.setTimeout(() => passwordInput.focus(), 0);
    }
  } finally {
    authTransitionInProgress = false;
    setBusy(button, false);
  }
}

async function handleRecoveryRequest(event: SubmitEvent) {
  event.preventDefault();
  const form = event.currentTarget as HTMLFormElement;
  const email = String(new FormData(form).get('email') ?? '').trim().toLowerCase();
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
    setStatus(status, friendlyAuthError(error, 'Could not send the secure link. Check your connection and try again.'), true);
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
    setStatus(status, 'Use at least 8 characters. Any characters are fine.', true);
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
    replaceDashboardHistory(`${cleanUrl.pathname}${cleanUrl.search}`);
    if (!state.user) throw new Error('The updated account session is missing. Sign in again.');
    await loadWorkspaceData(state.user);
    showWorkspace();
    renderAll();
    setStatus(qs<HTMLElement>('#workspace-status'), 'Password saved. Your account is ready.');
  } catch (error) {
    setStatus(status, friendlyAuthError(error, 'Could not save the password. Check your connection and try again.'), true);
  } finally {
    setBusy(button, false);
  }
}

async function signOut() {
  passwordSetupMode = null;
  await client?.auth.signOut();
  try {
    sessionStorage.removeItem('fcs-dashboard-view');
    sessionStorage.removeItem('fcs-dashboard-session-active');
    sessionStorage.removeItem('fcs-dashboard-plan-tab');
    sessionStorage.removeItem('fcs-dashboard-student');
    sessionStorage.removeItem('fcs-dashboard-student-profile');
    const previous = window.history.state && typeof window.history.state === 'object'
      ? window.history.state as Record<string, unknown>
      : {};
    if ('studentId' in previous) {
      const next = { ...previous };
      delete next.studentId;
      window.history.replaceState(next, document.title, window.location.href);
    }
  } catch { /* storage may be unavailable */ }
  state.user = null;
  state.profile = null;
  state.profiles = [];
  state.branches = [];
  state.requests = [];
  state.activity = [];
  clearCoachingWorkspace();
  clearCohortWorkspace();
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
    // Keep the identity written to Auth, profiles, and account requests
    // consistent. Sign-in is case-insensitive, but an account created with
    // stray spaces or mixed-case text can otherwise be linked to a different
    // profile row and look like a failed student login.
    const accountEmail = String(data.get('email') ?? '').trim().toLowerCase();
    const payload = await invokeAccountAction({
      action: 'request-account',
      fullName: data.get('fullName'),
      email: accountEmail,
      role: data.get('role'),
      branchId: data.get('branchId'),
      supervisorId: data.get('supervisorId'),
      approveNow: state.profile.role === 'admin' ? data.get('approveNow') === 'on' : false,
    });
    if (payload.testPassword) {
      saveCredentials([{ email: accountEmail, password: payload.testPassword, fullName: String(data.get('fullName')), role: data.get('role') as Role }]);
    }
    qs<HTMLDialogElement>('#account-dialog')?.close();
    await refreshWorkspace(payload.message ?? 'Account request submitted.');
    openView(state.profile.role === 'admin' && payload.userId ? 'people' : 'accounts');
    if (!payload.userId && state.profile.role !== 'admin') {
      setStatus(qs<HTMLElement>('#workspace-status'), 'The account request is pending Admin approval. The new student cannot sign in until approval is complete.', true);
    }
    // Keep the credential hand-off with the person who created the account.
    // Every approved account gets a one-time password; limiting this dialog
    // to Admins left students created by a Branch Head or Head Coach without
    // a usable first sign-in when the setup email was missed or unavailable.
    if (payload.userId && (payload.temporaryPassword || payload.setupEmailSent === false)) {
      try {
        const temporary = payload.temporaryPassword
          ? { fullName: data.get('fullName'), email: accountEmail, temporaryPassword: payload.temporaryPassword }
          : await invokeAccountAction({ action: 'create-temporary-password', userId: payload.userId });
        setText('#temporary-password-name', temporary.fullName ?? 'Account holder');
        setText('#temporary-password-email', temporary.email ?? accountEmail);
        setText('#temporary-password-value', temporary.temporaryPassword ?? '');
        setStatus(qs<HTMLElement>('#temporary-password-status'), '');
        qs<HTMLDialogElement>('#temporary-password-dialog')?.showModal();
      } catch (temporaryError) {
        setStatus(qs<HTMLElement>('#workspace-status'), friendlyWorkspaceError(temporaryError, 'The account was created. Open People and issue a one-time password before sharing access.'), true);
      }
    }
  } catch (error) {
    setStatus(qs<HTMLElement>('#account-form-status'), friendlyWorkspaceError(error, 'Could not submit the request.'), true);
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
    if (payload.userId && (payload.temporaryPassword || payload.setupEmailSent === false)) {
      try {
        const temporary = payload.temporaryPassword
          ? { fullName: request?.full_name, email: request?.email, temporaryPassword: payload.temporaryPassword }
          : await invokeAccountAction({ action: 'create-temporary-password', userId: payload.userId });
        setText('#temporary-password-name', temporary.fullName ?? request?.full_name ?? 'Account holder');
        setText('#temporary-password-email', temporary.email ?? request?.email ?? '');
        setText('#temporary-password-value', temporary.temporaryPassword ?? '');
        setStatus(qs<HTMLElement>('#temporary-password-status'), '');
        qs<HTMLDialogElement>('#temporary-password-dialog')?.showModal();
      } catch (temporaryError) {
        setStatus(qs<HTMLElement>('#workspace-status'), friendlyWorkspaceError(temporaryError, 'The account was approved. Open People and issue a one-time password before sharing access.'), true);
      }
    }
  } catch (error) {
    setStatus(qs<HTMLElement>('#workspace-status'), friendlyWorkspaceError(error, 'Could not approve the account.'), true);
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
    setStatus(qs<HTMLElement>('#reject-form-status'), friendlyWorkspaceError(error, 'Could not reject the request.'), true);
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
    setStatus(qs<HTMLElement>('#branch-form-status'), friendlyWorkspaceError(error, 'Could not save the branch.'), true);
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
    setStatus(qs<HTMLElement>('#manage-account-status'), friendlyWorkspaceError(error, 'Could not update the account.'), true);
  } finally {
    setBusy(button, false);
  }
}

async function changeAccountStatus(userId: string, status: string, button: HTMLButtonElement) {
  const target = profileById(userId);
  if (status !== 'active' && !window.confirm(`Suspend ${target?.full_name || 'this account'}? They will not be able to sign in until restored.`)) return;
  setBusy(button, true, status === 'active' ? 'Restoring...' : 'Suspending...');
  try {
    const payload = await invokeAccountAction({ action: 'set-account-status', userId, status });
    await refreshWorkspace(payload.message ?? 'Account updated.');
    openView('people');
  } catch (error) {
    setStatus(qs<HTMLElement>('#workspace-status'), friendlyWorkspaceError(error, 'Could not update the account.'), true);
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
    setStatus(qs<HTMLElement>('#workspace-status'), friendlyWorkspaceError(error, 'Could not send the setup email.'), true);
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
    setStatus(qs<HTMLElement>('#workspace-status'), friendlyWorkspaceError(error, 'Could not create a one-time password.'), true);
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

async function handleStudentProfileSubmit(event: SubmitEvent) {
  event.preventDefault();
  if (!state.user || !state.profile || state.profile.role !== 'student') return;
  const form = event.currentTarget as HTMLFormElement;
  const data = new FormData(form);
  const button = form.querySelector<HTMLButtonElement>('[type="submit"]');
  setBusy(button, true, 'Saving...');
  try {
    const response = await client.from('profiles').update({
      full_name: String(data.get('full_name') ?? '').trim(),
    }).eq('id', state.user.id).select(PROFILE_SELECT).single();
    if (response.error) throw response.error;
    state.profile = response.data;
    state.profiles = state.profiles.map((profile) => profile.id === response.data.id ? response.data : profile);
    const cleanList = (value: FormDataEntryValue | null, separator: RegExp) => String(value ?? '').split(separator).map((item) => item.trim()).filter(Boolean);
    const contextResponse = await client.from('student_constraints').upsert({
      student_id: state.user.id,
      education_timeline: String(data.get('education_timeline') ?? '').trim(),
      available_hours_per_week: data.get('available_hours_per_week') ? Number(data.get('available_hours_per_week')) : null,
      device_access: String(data.get('device_access') ?? '').trim() || 'not-set',
      internet_access: String(data.get('internet_access') ?? '').trim() || 'not-set',
      interest_themes: cleanList(data.get('interest_themes'), /[,\n]/),
      non_negotiables: cleanList(data.get('non_negotiables'), /\n/),
      updated_by: state.user.id,
    }, { onConflict: 'student_id' }).select('student_id,budget_range,available_hours_per_week,max_commute_minutes,willing_to_relocate,device_access,internet_access,family_expectations,education_timeline,risk_tolerance,non_negotiables,interest_themes,updated_at').single();
    if (contextResponse.error) throw contextResponse.error;
    state.studentConstraints = contextResponse.data;
    fillStudentProfileForm();
    renderIdentity();
    renderOverview();
    setStatus(qs<HTMLElement>('#student-profile-status'), 'Your details were saved.');
  } catch (error) {
    const message = friendlyWorkspaceError(error, 'Could not save your details.');
    setStatus(qs<HTMLElement>('#student-profile-status'), message, true);
    setStatus(qs<HTMLElement>('#workspace-status'), message, true);
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
    setStatus(qs<HTMLElement>('#academic-status'), 'Saved. This verified record is now attached to the student.');
    setStatus(qs<HTMLElement>('#workspace-status'), 'Verified academic record saved.');
  } catch (error) {
    const message = friendlyWorkspaceError(error, 'Could not save the academic record.');
    setStatus(qs<HTMLElement>('#academic-status'), message, true);
    setStatus(qs<HTMLElement>('#workspace-status'), message, true);
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
    setStatus(qs<HTMLElement>('#coach-note-status'), 'Saved. Check the visibility setting to confirm who can see it.');
    setStatus(qs<HTMLElement>('#workspace-status'), 'Coaching note added.');
  } catch (error) {
    const message = friendlyWorkspaceError(error, 'Could not add the note.');
    setStatus(qs<HTMLElement>('#coach-note-status'), message, true);
    setStatus(qs<HTMLElement>('#workspace-status'), message, true);
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
    setStatus(qs<HTMLElement>('#workspace-status'), friendlyWorkspaceError(error, 'Could not prepare the Role Lab.'), true);
  } finally {
    setBusy(button, false);
  }
}

async function signInTestRole(email: string, button: HTMLButtonElement) {
  const credential = readCredentials().find((item) => item.email.trim().toLowerCase() === email.trim().toLowerCase());
  if (!credential) return;
  setBusy(button, true, 'Opening...');
  try {
    await signIn(credential.email, credential.password);
  } catch (error) {
    setStatus(qs<HTMLElement>('#auth-status'), friendlyAuthError(error, 'Could not sign in to the test role.'), true);
  } finally {
    setBusy(button, false);
  }
}

async function handleDelegatedClick(event: MouseEvent) {
  const target = event.target as Element;
  const viewButton = target.closest<HTMLElement>('[data-view-target], [data-open-view]');
  if (viewButton) {
    const view = viewButton.dataset.viewTarget ?? viewButton.dataset.openView;
    if (view) {
      // Career exploration is a dedicated decision workspace. Route the
      // student's overview shortcut there instead of opening the old tabbed
      // panel in place; skills, actions, and community shortcuts still open
      // their matching plan tab below.
      const planTab = viewButton.dataset.planTab ?? viewButton.dataset.planShortcutTab;
      if (view === 'career' && planTab === 'options' && state.profile?.role === 'student') {
        window.location.assign('/dashboard/career-decision');
        return;
      }
      openView(view);
      if (view === 'career' && planTab) openStudentPlanTab(planTab);
    }
    return;
  }
  const closeButton = target.closest<HTMLElement>('[data-close-dialog]');
  if (closeButton) {
    // Dialog close actions are delegated by both workspace modules. Stop the
    // event after the shared handler so the career planner cannot run a second
    // competing redirect during the same click.
    if (closeButton.dataset.closeDialog) closeDialogSafely(closeButton.dataset.closeDialog);
    event.stopImmediatePropagation();
    return;
  }
  const studentButton = target.closest<HTMLButtonElement>('[data-student-id]');
  if (studentButton?.dataset.studentId) {
    await openStudentRecord(studentButton.dataset.studentId);
    if (studentButton.dataset.openRecordTab) openStudentRecordTab(studentButton.dataset.openRecordTab);
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
  const reportUnexpectedFailure = (message: string, detail?: unknown) => {
    // Keep the diagnostic in the console for development while presenting a
    // useful, non-technical recovery path in the dashboard itself.
    if (detail) console.warn(message, detail);
    const status = qs<HTMLElement>('#workspace-status');
    if (status && state.user) setStatus(status, 'This part of the workspace could not finish loading. Check your connection and try again; unsent changes may need to be entered again.', true);
  };
  window.addEventListener('unhandledrejection', (event) => {
    reportUnexpectedFailure('Unexpected workspace request failure.', event.reason);
  });
  window.addEventListener('error', (event) => {
    reportUnexpectedFailure('Unexpected workspace error.', event.error || event.message);
  });
  window.addEventListener('popstate', () => {
    if (!state.profile || window.location.pathname.endsWith('/career-decision')) return;
    const historyState = window.history.state as { dashboardView?: string; planTab?: string } | null;
    const historyView = typeof historyState?.dashboardView === 'string' ? historyState.dashboardView : '';
    const nextView = historyView || viewFromUrl(state.profile.role);
    openView(nextView, false);
    if (state.profile.role === 'student' && nextView === 'career' && historyState?.planTab) {
      openStudentPlanTab(historyState.planTab);
    }
  });
  qsa<HTMLDialogElement>('dialog').forEach((dialog) => {
    dialog.addEventListener('close', () => {
      dialog.querySelector<HTMLFormElement>('form')?.removeAttribute('data-dirty');
    });
    dialog.addEventListener('cancel', (event) => {
      const form = dialog.querySelector<HTMLFormElement>('form');
      if (form?.dataset.dirty === 'true' && !window.confirm('Discard the changes you have started?')) event.preventDefault();
    });
    dialog.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>('input, select, textarea').forEach((field) => {
      field.addEventListener('input', () => { field.form?.dataset && (field.form.dataset.dirty = 'true'); });
      field.addEventListener('change', () => { field.form?.dataset && (field.form.dataset.dirty = 'true'); });
    });
  });
  qs<HTMLFormElement>('#sign-in-form')?.addEventListener('submit', handleSignIn);
  qs<HTMLButtonElement>('#password-toggle')?.addEventListener('click', () => {
    const input = qs<HTMLInputElement>('#sign-in-password');
    if (!input) return;
    input.type = input.type === 'password' ? 'text' : 'password';
  });
  qs<HTMLButtonElement>('#sign-in-recovery-link')?.addEventListener('click', () => {
    const signInEmail = qs<HTMLInputElement>('#sign-in-email');
    const recoveryEmail = qs<HTMLInputElement>('#recovery-email');
    if (recoveryEmail && signInEmail?.value) recoveryEmail.value = signInEmail.value.trim().toLowerCase();
    setStatus(qs<HTMLElement>('#auth-status'), 'Enter your account email and we will send a secure password link.', false);
    showAuthMode('recovery');
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
  qs<HTMLButtonElement>('#help-button')?.addEventListener('click', () => qs<HTMLDialogElement>('#help-dialog')?.showModal());
  qs<HTMLButtonElement>('#refresh-button')?.addEventListener('click', () => refreshWorkspace('Workspace refreshed.'));
  qs<HTMLButtonElement>('#coaching-schema-retry')?.addEventListener('click', () => refreshWorkspace('Trying the unavailable workspace data again.'));
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
  const syncMobileMenuState = () => {
    const shell = qs<HTMLElement>('#hierarchy-workspace');
    const button = qs<HTMLButtonElement>('#mobile-menu-button');
    const open = Boolean(shell?.classList.contains('is-menu-open'));
    button?.setAttribute('aria-expanded', String(open));
    button?.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    if (button) button.title = open ? 'Close navigation' : 'Navigation';
  };
  const toggleMobileMenu = () => {
    qs<HTMLElement>('#hierarchy-workspace')?.classList.toggle('is-menu-open');
    syncMobileMenuState();
  };
  qs<HTMLButtonElement>('#mobile-menu-button')?.setAttribute('aria-expanded', 'false');
  qs<HTMLButtonElement>('#mobile-menu-button')?.addEventListener('click', toggleMobileMenu);
  qs<HTMLButtonElement>('.mobile-menu-scrim')?.addEventListener('click', () => {
    qs<HTMLElement>('#hierarchy-workspace')?.classList.remove('is-menu-open');
    syncMobileMenuState();
  });
  // The career planner is rendered as a page section rather than a native
  // dialog. Bind its return action directly so it cannot be missed when the
  // section is moved or a second delegated listener is present.
  qs<HTMLButtonElement>('#career-dialog-back')?.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    closeDialogSafely('career-option-dialog');
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      qs<HTMLElement>('#hierarchy-workspace')?.classList.remove('is-menu-open');
      qs<HTMLButtonElement>('#mobile-menu-button')?.setAttribute('aria-expanded', 'false');
    }
  });
  qs<HTMLSelectElement>('#account-role')?.addEventListener('change', populateSupervisors);
  qs<HTMLSelectElement>('#account-branch')?.addEventListener('change', populateSupervisors);
  qs<HTMLInputElement>('#people-search')?.addEventListener('input', renderPeople);
  qs<HTMLSelectElement>('#people-role-filter')?.addEventListener('change', renderPeople);
  qs<HTMLSelectElement>('#exam-target-preset')?.addEventListener('change', (event) => appendGuidedListPreset(event.currentTarget as HTMLSelectElement, '#academic-form input[name="exam_targets"]'));
  qs<HTMLFormElement>('#account-form')?.addEventListener('submit', handleAccountSubmit);
  qs<HTMLFormElement>('#branch-form')?.addEventListener('submit', handleBranchSubmit);
  qs<HTMLFormElement>('#manage-account-form')?.addEventListener('submit', handleManageAccountSubmit);
  qs<HTMLFormElement>('#reject-form')?.addEventListener('submit', handleRejectSubmit);
  qs<HTMLFormElement>('#student-profile-form')?.addEventListener('submit', handleStudentProfileSubmit);
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
  watchMobileNavigation();

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
          // Keep an intentional career-decision deep link intact. The normal
          // sign-in entry still opens the overview; only a learner who chose
          // the career planner should remain on that dedicated page.
          restoreSelectedStudentForSession();
          // A valid session on a normal page is a refresh/continuation, so
          // restore the last authorised dashboard destination. Fresh sign-in
          // explicitly clears the session marker and still starts at Overview
          // in handleSignIn(). Forcing students to Overview here made a
          // refresh silently discard an intentional Skills, Actions, or
          // Career options view.
          state.activeView = viewFromUrl(state.profile?.role);
          if (!window.location.pathname.endsWith('/career-decision')) {
            replaceDashboardHistory(window.location.pathname + window.location.search + window.location.hash);
          }
          showWorkspace();
          renderAll();
          const savedMessage = new URLSearchParams(window.location.search).get('career_saved');
          if (savedMessage) {
            setStatus(qs<HTMLElement>('#workspace-status'), savedMessage);
            replaceDashboardHistory('/dashboard');
          }
          if (root.dataset.careerDecisionPage !== 'true') {
            try {
              const rawReturn = sessionStorage.getItem('fcs-career-return');
              if (rawReturn) {
                sessionStorage.removeItem('fcs-career-return');
                const returnState = JSON.parse(rawReturn) as { studentId?: string; tab?: string; message?: string };
                if (returnState.studentId && state.profile?.role !== 'student') {
                  if (returnState.message) setStatus(qs<HTMLElement>('#workspace-status'), returnState.message);
                  window.setTimeout(() => window.dispatchEvent(new CustomEvent('career-decision-return', { detail: returnState })), 0);
                }
              }
            } catch { /* ignore unavailable or malformed return state */ }
          }
          if (root.dataset.careerDecisionPage === 'true') {
            window.setTimeout(() => window.dispatchEvent(new CustomEvent('career-decision-page-ready')), 0);
          }
        }
      } catch (error) {
        // A refresh can hit a transient or optional coaching read after the
        // session is already valid. Never destroy a valid auth session just
        // because workspace data was temporarily unavailable: doing so made
        // navigation appear to sign users out and forced an unnecessary
        // second login. Keep the signed-in shell when a profile is available;
        // otherwise leave the session intact and show a retryable auth state.
        if (state.profile) {
          // A refresh can fail after authentication but before the shared
          // profile list arrives. Retry that read before restoring an
          // internal student-record route; otherwise the record shell renders
          // with the generic "Student" heading even though the session is valid.
          let needsProfileRecovery = state.profiles.length === 0;
          if (!needsProfileRecovery) {
            try {
              const storedStudent = window.history.state && typeof window.history.state === 'object'
                ? (window.history.state as Record<string, unknown>).studentId
                : null;
              const sessionStudent = sessionStorage.getItem('fcs-dashboard-student');
              const candidate = typeof storedStudent === 'string' && storedStudent
                ? storedStudent
                : sessionStudent;
              needsProfileRecovery = Boolean(candidate) && !profileById(candidate);
            } catch { /* history may be unavailable */ }
          }
          if (needsProfileRecovery) {
            try { await loadWorkspaceData(data.session.user); } catch { /* retain the signed-in shell below */ }
          }
          showWorkspace();
          restoreSelectedStudentForSession();
          const historyView = typeof window.history.state?.dashboardView === 'string'
            ? window.history.state.dashboardView
            : '';
          state.activeView = historyView || viewFromUrl(state.profile.role as Role);
          setStatus(qs<HTMLElement>('#workspace-status'), 'You are signed in. Some workspace information could not be loaded yet; refresh to try again.', true);
          renderAll();
        } else {
          // A valid Supabase session can briefly arrive before the profile
          // query is ready (particularly after a refresh or a mobile network
          // hand-off). Retry once before showing the sign-in shell so a
          // transient read does not look like a forced sign-out.
          try {
            await new Promise((resolve) => window.setTimeout(resolve, 450));
            await loadWorkspaceData(data.session.user);
            const recoveredProfile = state.profile as RecordRow | null;
            if (passwordSetupMode) {
              showPasswordSetup(passwordSetupMode);
            } else if (recoveredProfile?.must_change_password) {
              showPasswordSetup('temporary');
            } else {
              restoreSelectedStudentForSession();
              state.activeView = viewFromUrl(recoveredProfile?.role as Role);
              showWorkspace();
              renderAll();
            }
          } catch (retryError) {
            showAuth(friendlyAuthError(retryError ?? error, 'Could not load this workspace. Check the account details and try again.'));
          }
        }
      }
    }
  } catch (error) {
    showAuth(friendlyAuthError(error, 'Could not open the workspace. Check your connection and try again.'));
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
      // Ignore a stale sign-out notification while replacing an existing
      // session. The follow-up sign-in may already have returned a valid
      // student session by the time this event is delivered.
      if (authTransitionInProgress) return;
      window.setTimeout(async () => {
        if (authTransitionInProgress) return;
        try {
          const current = await client.auth.getSession();
          if (current.data.session?.user) return;
        } catch {
          // Fall through to the sign-in screen when the session cannot be read.
        }
        showAuth();
      }, 0);
    }
  });
}
