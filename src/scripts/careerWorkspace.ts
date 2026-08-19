import type { Session, User } from '@supabase/supabase-js';
import { isSupabaseConfigured, supabase } from '../lib/supabase';
import type { Json, Tables } from '../lib/supabase-types';

type Profile = Tables<'profiles'>;
type AssessmentResult = Tables<'assessment_results'>;
type CareerPath = Tables<'career_paths'>;
type ActionItem = Tables<'action_items'>;
type SavedResource = Tables<'saved_resources'>;

type WorkspaceView = 'overview' | 'assessments' | 'careers' | 'plan' | 'saved';
type FormStatusTone = 'error' | 'success' | 'neutral';

interface PendingAssessment {
  assessment_slug: string;
  assessment_title: string;
  summary: string;
  score_label?: string;
  scores?: Json;
  result_payload?: Json;
  completed_at?: string;
}

const PENDING_ASSESSMENT_KEY = 'fcs_pending_assessment';
const root = document.getElementById('career-workspace');

if (root) {
  const state: {
    user: User | null;
    profile: Profile | null;
    assessments: AssessmentResult[];
    careers: CareerPath[];
    actions: ActionItem[];
    saved: SavedResource[];
    activeView: WorkspaceView;
    loadingUserId: string;
  } = {
    user: null,
    profile: null,
    assessments: [],
    careers: [],
    actions: [],
    saved: [],
    activeView: 'overview',
    loadingUserId: '',
  };

  const qs = <T extends Element>(selector: string, parent: ParentNode = root): T | null =>
    parent.querySelector<T>(selector);
  const qsa = <T extends Element>(selector: string, parent: ParentNode = root): T[] =>
    Array.from(parent.querySelectorAll<T>(selector));

  const boot = qs<HTMLElement>('#workspace-boot');
  const authShell = qs<HTMLElement>('#auth-shell');
  const workspaceShell = qs<HTMLElement>('#workspace-shell');
  const authStatus = qs<HTMLElement>('#auth-status');

  function element<K extends keyof HTMLElementTagNameMap>(
    tag: K,
    className = '',
    text = ''
  ): HTMLElementTagNameMap[K] {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function icon(name: string): DocumentFragment {
    const template = qs<HTMLTemplateElement>(`#icon-${name}`);
    return template?.content.cloneNode(true) as DocumentFragment || document.createDocumentFragment();
  }

  function setFormStatus(
    target: HTMLElement | null,
    message = '',
    tone: FormStatusTone = 'neutral'
  ) {
    if (!target) return;
    target.textContent = message;
    target.classList.toggle('is-error', tone === 'error');
    target.classList.toggle('is-success', tone === 'success');
  }

  function setBusy(button: HTMLButtonElement | null, busy: boolean, busyLabel: string) {
    if (!button) return;
    if (busy) {
      button.dataset.label = button.textContent?.trim() || '';
      button.textContent = busyLabel;
      button.disabled = true;
      return;
    }
    button.disabled = false;
    if (button.dataset.label) button.textContent = button.dataset.label;
  }

  let toastTimer = 0;
  function showToast(message: string) {
    const toast = qs<HTMLElement>('#workspace-toast');
    if (!toast) return;
    window.clearTimeout(toastTimer);
    toast.textContent = message;
    toast.hidden = false;
    toastTimer = window.setTimeout(() => {
      toast.hidden = true;
    }, 3600);
  }

  function friendlyError(error: unknown, fallback: string) {
    const raw = error instanceof Error ? error.message : String(error || '');
    if (/invalid login credentials/i.test(raw)) return 'That email and password do not match.';
    if (/email not confirmed/i.test(raw)) return 'Confirm your email first, then sign in.';
    if (/user already registered/i.test(raw)) return 'An account already exists for that email. Try signing in.';
    if (/password/i.test(raw) && /least|short|weak/i.test(raw)) return 'Use a password with at least eight characters.';
    if (/rate limit|too many/i.test(raw)) return 'Too many attempts. Wait a moment and try again.';
    return raw || fallback;
  }

  function showAuth() {
    if (boot) boot.hidden = true;
    if (authShell) authShell.hidden = false;
    if (workspaceShell) workspaceShell.hidden = true;
  }

  function showWorkspace() {
    if (boot) boot.hidden = true;
    if (authShell) authShell.hidden = true;
    if (workspaceShell) workspaceShell.hidden = false;
  }

  function openDialog(dialog: HTMLDialogElement | null) {
    if (!dialog || dialog.open) return;
    dialog.showModal();
  }

  function closeDialog(dialog: HTMLDialogElement | null) {
    if (dialog?.open) dialog.close();
  }

  const stageLabels: Record<string, string> = {
    exploring: 'Still exploring',
    'class-10-below': 'Class 10 or below',
    'class-11-12': 'Class 11 or 12',
    college: 'In college',
    graduate: 'Graduate or fresher',
    professional: 'Working professional',
    'career-change': 'Changing career',
  };

  const stageAssessmentRoutes: Record<string, { href: string; title: string }> = {
    'class-10-below': {
      href: '/services/assessments/class-10-and-below/',
      title: 'Class 10 and Below Assessment',
    },
    'class-11-12': {
      href: '/services/assessments/class-11-to-12/',
      title: 'Class 11 and 12 Assessment',
    },
    college: {
      href: '/services/assessments/graduates-and-early-professionals/',
      title: 'Graduate and Early Career Assessment',
    },
    graduate: {
      href: '/services/assessments/graduates-and-early-professionals/',
      title: 'Graduate and Early Career Assessment',
    },
    professional: {
      href: '/services/assessments/working-professionals-and-career-changers/',
      title: 'Working Professional Assessment',
    },
    'career-change': {
      href: '/services/assessments/working-professionals-and-career-changers/',
      title: 'Career Change Assessment',
    },
    exploring: {
      href: '/services/assessments/',
      title: 'Career Assessment',
    },
  };

  function initials(name: string, email = '') {
    const parts = name.trim().split(/\s+/).filter(Boolean);
    if (parts.length > 1) return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return email.slice(0, 2).toUpperCase() || 'FC';
  }

  function firstName(name: string) {
    return name.trim().split(/\s+/)[0] || 'there';
  }

  function formatDate(value: string | null, options: Intl.DateTimeFormatOptions = {}) {
    if (!value) return 'No due date';
    const date = /^\d{4}-\d{2}-\d{2}$/.test(value)
      ? new Date(`${value}T12:00:00`)
      : new Date(value);
    return new Intl.DateTimeFormat('en-IN', {
      day: 'numeric',
      month: 'short',
      ...options,
    }).format(date);
  }

  function isoDateIn(days: number) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function jsonStringArray(value: Json): string[] {
    if (!Array.isArray(value)) return [];
    return value.filter((item): item is string => typeof item === 'string');
  }

  function linesFromTextarea(value: string) {
    return value
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
      .slice(0, 8);
  }

  function emptyState(
    container: HTMLElement | null,
    title: string,
    copy: string,
    actionLabel?: string,
    onAction?: () => void
  ) {
    if (!container) return;
    container.replaceChildren();
    const shell = element('div', 'empty-state');
    const content = element('div');
    content.append(element('strong', '', title), element('p', '', copy));
    if (actionLabel && onAction) {
      const button = element('button', 'text-action', actionLabel);
      button.type = 'button';
      button.addEventListener('click', onAction);
      content.append(button);
    }
    shell.append(content);
    container.append(shell);
  }

  function showView(view: WorkspaceView) {
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  async function ensureProfile(user: User) {
    if (!supabase) return;
    const fullName = String(user.user_metadata?.full_name || '').trim();
    const { error } = await supabase.from('profiles').upsert(
      {
        id: user.id,
        full_name: fullName,
        avatar_seed: initials(fullName, user.email),
      },
      { onConflict: 'id', ignoreDuplicates: true }
    );
    if (error) throw error;
  }

  async function loadWorkspaceData(user: User) {
    if (!supabase) return;
    const [profileResponse, assessmentResponse, careerResponse, actionResponse, savedResponse] =
      await Promise.all([
        supabase.from('profiles').select('*').eq('id', user.id).single(),
        supabase.from('assessment_results').select('*').order('completed_at', { ascending: false }).limit(30),
        supabase.from('career_paths').select('*').order('sort_order', { ascending: true }).order('created_at', { ascending: true }),
        supabase.from('action_items').select('*').order('sort_order', { ascending: true }).order('created_at', { ascending: true }),
        supabase.from('saved_resources').select('*').order('created_at', { ascending: false }),
      ]);

    const firstError = [
      profileResponse.error,
      assessmentResponse.error,
      careerResponse.error,
      actionResponse.error,
      savedResponse.error,
    ].find(Boolean);
    if (firstError) throw firstError;

    state.profile = profileResponse.data;
    state.assessments = assessmentResponse.data || [];
    state.careers = careerResponse.data || [];
    state.actions = actionResponse.data || [];
    state.saved = savedResponse.data || [];
  }

  async function processPendingAssessment() {
    if (!supabase || !state.user) return false;
    const raw = window.sessionStorage.getItem(PENDING_ASSESSMENT_KEY);
    if (!raw) return false;

    try {
      const pending = JSON.parse(raw) as PendingAssessment;
      if (!pending.assessment_slug || !pending.assessment_title) {
        window.sessionStorage.removeItem(PENDING_ASSESSMENT_KEY);
        return false;
      }
      const { error } = await supabase.from('assessment_results').insert({
        user_id: state.user.id,
        assessment_slug: pending.assessment_slug.slice(0, 180),
        assessment_title: pending.assessment_title.slice(0, 180),
        summary: (pending.summary || '').slice(0, 4000),
        score_label: (pending.score_label || '').slice(0, 180),
        scores: pending.scores || {},
        result_payload: pending.result_payload || {},
        completed_at: pending.completed_at || new Date().toISOString(),
      });
      if (error) throw error;
      window.sessionStorage.removeItem(PENDING_ASSESSMENT_KEY);
      showToast('Assessment saved to your workspace.');
      return true;
    } catch (error) {
      console.error('Could not save pending assessment:', error);
      showToast('Your assessment is still waiting to be saved. Try again shortly.');
      return false;
    }
  }

  async function handleSession(session: Session | null, force = false) {
    if (!session) {
      state.user = null;
      state.loadingUserId = '';
      showAuth();
      return;
    }

    if (!force && state.loadingUserId === session.user.id) return;
    state.loadingUserId = session.user.id;
    state.user = session.user;
    if (boot) boot.hidden = false;

    try {
      await ensureProfile(session.user);
      await loadWorkspaceData(session.user);
      const savedPending = await processPendingAssessment();
      if (savedPending) await loadWorkspaceData(session.user);
      renderWorkspace();
      showWorkspace();

      if (!state.profile?.onboarding_completed) {
        const nameInput = qs<HTMLInputElement>('#profile-name');
        if (nameInput) nameInput.value = state.profile?.full_name || String(session.user.user_metadata?.full_name || '');
        window.setTimeout(() => openDialog(qs<HTMLDialogElement>('#onboarding-dialog')), 100);
      }
    } catch (error) {
      console.error('Unable to load career workspace:', error);
      state.loadingUserId = '';
      showAuth();
      setFormStatus(authStatus, friendlyError(error, 'The workspace could not load. Please try again.'), 'error');
    }
  }

  function renderAccount() {
    if (!state.user) return;
    const name = state.profile?.full_name || String(state.user.user_metadata?.full_name || '');
    const email = state.user.email || '';
    qsa<HTMLElement>('[data-user-name]').forEach((node) => {
      node.textContent = name || 'Your account';
    });
    qsa<HTMLElement>('[data-user-email]').forEach((node) => {
      node.textContent = email;
    });
    qsa<HTMLElement>('[data-user-initials]').forEach((node) => {
      node.textContent = initials(name, email);
    });

    const hour = new Date().getHours();
    const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';
    const greetingNode = qs<HTMLElement>('#workspace-greeting');
    if (greetingNode) greetingNode.textContent = `${greeting}, ${firstName(name)}`;

    const dateNode = qs<HTMLElement>('#workspace-date');
    if (dateNode) {
      dateNode.textContent = new Intl.DateTimeFormat('en-IN', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
      }).format(new Date());
    }
  }

  function renderCounts() {
    const openTasks = state.actions.filter((item) => item.status !== 'done').length;
    const values: Array<[string, number]> = [
      ['#assessment-nav-count', state.assessments.length],
      ['#career-nav-count', state.careers.length],
      ['#task-nav-count', openTasks],
      ['#saved-nav-count', state.saved.length],
    ];
    values.forEach(([selector, value]) => {
      const node = qs<HTMLElement>(selector);
      if (node) node.textContent = String(value);
    });
  }

  function recommendedAssessment() {
    return stageAssessmentRoutes[state.profile?.stage || 'exploring'] || stageAssessmentRoutes.exploring;
  }

  function renderRecommendation() {
    const stage = state.profile?.stage || 'exploring';
    qsa<HTMLElement>('[data-assessment-stage]').forEach((card) => {
      const stages = (card.dataset.assessmentStage || '').split(/\s+/);
      card.classList.toggle('is-recommended', stages.includes(stage));
    });
    const label = qs<HTMLElement>('#recommended-stage-label');
    if (label) label.textContent = state.profile?.onboarding_completed
      ? `Recommended for: ${stageLabels[stage] || 'your stage'}`
      : 'Personalised after profile setup';
  }

  function renderProgressAndFocus() {
    const completedTasks = state.actions.filter((item) => item.status === 'done').length;
    const profileDone = Boolean(state.profile?.onboarding_completed);
    let progress = profileDone ? 25 : 0;
    if (state.assessments.length) progress += 25;
    if (state.careers.length >= 2) progress += 25;
    else if (state.careers.length === 1) progress += 12;
    if (state.actions.length) progress += 10;
    if (completedTasks) progress += 15;
    progress = Math.min(progress, 100);

    const meter = qs<HTMLProgressElement>('#workspace-progress');
    const value = qs<HTMLElement>('#workspace-progress-value');
    const copy = qs<HTMLElement>('#workspace-progress-copy');
    if (meter) meter.value = progress;
    if (value) value.textContent = `${progress}%`;
    if (copy) {
      copy.textContent = progress < 25
        ? 'Start with your stage and current goal.'
        : progress < 60
          ? 'Add evidence before narrowing your options.'
          : progress < 90
            ? 'Test the strongest path through a small action.'
            : 'You have enough structure. Keep moving and revise with evidence.';
    }

    const title = qs<HTMLElement>('#focus-title');
    const description = qs<HTMLElement>('#focus-description');
    const action = qs<HTMLButtonElement>('#focus-action');
    if (!title || !description || !action) return;

    const doing = state.actions.find((item) => item.status === 'doing');
    const nextTodo = state.actions.find((item) => item.status === 'todo');
    const recommended = recommendedAssessment();

    if (!profileDone) {
      title.textContent = 'Set your starting point';
      description.textContent = 'Your stage and 90-day goal determine which assessment and actions are most useful.';
      action.replaceChildren('Set up profile ', icon('chevron'));
      action.onclick = () => openDialog(qs<HTMLDialogElement>('#onboarding-dialog'));
    } else if (doing) {
      title.textContent = doing.title;
      description.textContent = 'This is already in progress. Finish it or break it into a smaller action.';
      action.replaceChildren('Open weekly plan ', icon('chevron'));
      action.onclick = () => showView('plan');
    } else if (!state.assessments.length) {
      title.textContent = `Take the ${recommended.title}`;
      description.textContent = 'Use the result as evidence for your shortlist, then test the strongest signal.';
      action.replaceChildren('Start assessment ', icon('chevron'));
      action.onclick = () => window.location.assign(recommended.href);
    } else if (nextTodo) {
      title.textContent = nextTodo.title;
      description.textContent = nextTodo.priority === 'important'
        ? 'You marked this as important. Give it a clear time slot before adding more.'
        : 'Move this into progress when you begin, then close it before adding more.';
      action.replaceChildren('Open weekly plan ', icon('chevron'));
      action.onclick = () => showView('plan');
    } else if (state.careers.length < 2) {
      title.textContent = 'Add two realistic career paths';
      description.textContent = 'A useful decision needs comparison. Add one likely path and one credible alternative.';
      action.replaceChildren('Add a path ', icon('chevron'));
      action.onclick = () => openCareerDialog();
    } else {
      title.textContent = 'Choose the next real-world test';
      description.textContent = 'Look at your two strongest paths and define one small action that creates new evidence.';
      action.replaceChildren('Compare paths ', icon('chevron'));
      action.onclick = () => showView('careers');
    }
  }

  function taskCompactRow(item: ActionItem) {
    const row = element('div', 'compact-row');
    const status = element('button', `row-status${item.status === 'done' ? ' is-done' : ''}`);
    status.type = 'button';
    status.setAttribute('aria-label', item.status === 'done' ? `Reopen ${item.title}` : `Complete ${item.title}`);
    status.append(item.status === 'done' ? icon('check') : document.createTextNode(String(state.actions.indexOf(item) + 1).padStart(2, '0')));
    status.addEventListener('click', () => void updateTaskStatus(item, item.status === 'done' ? 'todo' : 'done'));

    const main = element('div', 'compact-row-main');
    main.append(element('strong', '', item.title));
    const detail = item.due_date ? `Due ${formatDate(item.due_date)} · ${item.category}` : item.category;
    main.append(element('p', '', detail));

    const meta = element('span', 'row-meta', item.status === 'doing' ? 'In progress' : item.status === 'done' ? 'Done' : item.priority === 'important' ? 'Important' : 'Next');
    row.append(status, main, meta);
    return row;
  }

  function renderOverviewActions() {
    const container = qs<HTMLElement>('#overview-actions-list');
    if (!container) return;
    const ordered = [...state.actions].sort((a, b) => {
      const order = { doing: 0, todo: 1, done: 2 } as Record<string, number>;
      return (order[a.status] ?? 3) - (order[b.status] ?? 3);
    }).slice(0, 5);
    if (!ordered.length) {
      emptyState(container, 'No next steps yet', 'Add one action you can finish this week.', 'Add next step', openTaskDialog);
      return;
    }
    container.replaceChildren(...ordered.map(taskCompactRow));
  }

  function renderOverviewCareers() {
    const container = qs<HTMLElement>('#overview-career-list');
    if (!container) return;
    if (!state.careers.length) {
      emptyState(container, 'No paths to compare yet', 'Add two plausible options and record the next test for each.', 'Add a career path', openCareerDialog);
      return;
    }
    const rows = state.careers.slice(0, 3).map((path, index) => {
      const row = element('div', 'compact-row');
      row.append(element('span', 'row-index', String(index + 1).padStart(2, '0')));
      const main = element('div', 'compact-row-main');
      main.append(element('strong', '', path.title));
      main.append(element('p', '', path.next_step || 'Add a small test for this path.'));
      row.append(main, element('span', 'row-meta', path.fit_score == null ? 'Unscored' : `${path.fit_score}% fit`));
      return row;
    });
    container.replaceChildren(...rows);
  }

  function reportButton(result: AssessmentResult) {
    const button = element('button', 'row-action');
    button.type = 'button';
    button.title = 'View saved result';
    button.setAttribute('aria-label', `View ${result.assessment_title}`);
    button.append(icon('chevron'));
    button.addEventListener('click', () => openReport(result));
    return button;
  }

  function renderOverviewAssessments() {
    const container = qs<HTMLElement>('#overview-assessment-list');
    if (!container) return;
    if (!state.assessments.length) {
      emptyState(container, 'No saved results yet', 'Complete an assessment and use Save to workspace on the result screen.', 'Choose an assessment', () => showView('assessments'));
      return;
    }
    const rows = state.assessments.slice(0, 3).map((result, index) => {
      const row = element('div', 'compact-row');
      row.append(element('span', 'row-index', String(index + 1).padStart(2, '0')));
      const main = element('div', 'compact-row-main');
      main.append(element('strong', '', result.assessment_title));
      main.append(element('p', '', result.summary || `Completed ${formatDate(result.completed_at)}`));
      row.append(main, reportButton(result));
      return row;
    });
    container.replaceChildren(...rows);
  }

  function renderAssessmentHistory() {
    const container = qs<HTMLElement>('#assessment-history-list');
    const count = qs<HTMLElement>('#assessment-history-count');
    if (count) count.textContent = `${state.assessments.length} ${state.assessments.length === 1 ? 'result' : 'results'}`;
    if (!container) return;
    if (!state.assessments.length) {
      emptyState(container, 'Your history starts with one completed assessment', 'When your results appear, use Save to workspace. They will show up here on every device.');
      return;
    }
    const rows = state.assessments.map((result) => {
      const row = element('div', 'history-row');
      const main = element('div', 'history-main');
      main.append(element('strong', '', result.assessment_title));
      main.append(element('p', '', result.summary || 'Saved assessment result'));
      const meta = element('span', 'history-meta', formatDate(result.completed_at, { year: 'numeric' }));
      row.append(main, meta, reportButton(result));
      return row;
    });
    container.replaceChildren(...rows);
  }

  function renderCareerPaths() {
    const container = qs<HTMLElement>('#career-path-list');
    if (!container) return;
    if (!state.careers.length) {
      emptyState(container, 'Build a shortlist, not a fantasy list', 'Add two or three paths you could realistically test. Record fit evidence, trade-offs, and one next action.', 'Add first path', openCareerDialog);
      return;
    }

    const cards = state.careers.map((path) => {
      const card = element('article', 'career-path-card');
      const top = element('div', 'path-top');
      const heading = element('div');
      heading.append(element('span', '', path.status), element('h3', '', path.title));
      const score = element('span', 'path-score', path.fit_score == null ? '--' : String(path.fit_score));
      score.title = 'Current fit confidence';
      const remove = element('button', 'delete-action');
      remove.type = 'button';
      remove.title = 'Remove career path';
      remove.setAttribute('aria-label', `Remove ${path.title}`);
      remove.append(icon('trash'));
      remove.addEventListener('click', () => void deleteCareerPath(path));
      top.append(heading, score, remove);

      const body = element('div', 'path-body');
      const evidence = element('div', 'path-evidence');
      const reasonBox = element('div');
      reasonBox.append(element('h4', '', 'Why it may fit'));
      const reasons = jsonStringArray(path.reasons);
      if (reasons.length) {
        const list = element('ul');
        reasons.forEach((reason) => list.append(element('li', '', reason)));
        reasonBox.append(list);
      } else {
        reasonBox.append(element('p', 'report-line', 'No fit evidence recorded yet.'));
      }
      const tradeoffBox = element('div');
      tradeoffBox.append(element('h4', '', 'Trade-offs'));
      const tradeoffs = jsonStringArray(path.tradeoffs);
      if (tradeoffs.length) {
        const list = element('ul', 'tradeoffs');
        tradeoffs.forEach((tradeoff) => list.append(element('li', '', tradeoff)));
        tradeoffBox.append(list);
      } else {
        tradeoffBox.append(element('p', 'report-line', 'No trade-offs recorded yet.'));
      }
      evidence.append(reasonBox, tradeoffBox);

      const next = element('div', 'path-next');
      next.append(element('h4', '', 'Next real-world test'), element('p', '', path.next_step || 'Define one small test before committing.'));
      body.append(evidence, next);
      card.append(top, body);
      return card;
    });
    container.replaceChildren(...cards);
  }

  function taskCard(item: ActionItem) {
    const card = element('article', `task-card${item.priority === 'important' ? ' is-important' : ''}${item.status === 'done' ? ' is-done' : ''}`);
    const statusButton = element('button', 'task-check');
    statusButton.type = 'button';
    const nextStatus = item.status === 'todo' ? 'doing' : item.status === 'doing' ? 'done' : 'todo';
    const label = item.status === 'todo' ? 'Start' : item.status === 'doing' ? 'Complete' : 'Reopen';
    statusButton.title = `${label} task`;
    statusButton.setAttribute('aria-label', `${label} ${item.title}`);
    statusButton.append(item.status === 'done' ? icon('check') : icon('chevron'));
    statusButton.addEventListener('click', () => void updateTaskStatus(item, nextStatus));

    const copy = element('div', 'task-copy');
    copy.append(element('strong', '', item.title));
    const meta = element('div', 'task-meta');
    meta.append(element('span', '', item.category));
    if (item.due_date) {
      const due = element('span');
      due.append(icon('calendar'), document.createTextNode(formatDate(item.due_date)));
      meta.append(due);
    }
    copy.append(meta);

    const remove = element('button', 'delete-action');
    remove.type = 'button';
    remove.title = 'Delete task';
    remove.setAttribute('aria-label', `Delete ${item.title}`);
    remove.append(icon('trash'));
    remove.addEventListener('click', () => void deleteTask(item));
    card.append(statusButton, copy, remove);
    return card;
  }

  function renderPlan() {
    const board = qs<HTMLElement>('#plan-board');
    const meter = qs<HTMLProgressElement>('#plan-progress');
    const label = qs<HTMLElement>('#plan-completion-label');
    if (!board) return;
    const completed = state.actions.filter((item) => item.status === 'done').length;
    const percent = state.actions.length ? Math.round((completed / state.actions.length) * 100) : 0;
    if (meter) meter.value = percent;
    if (label) label.textContent = `${completed} of ${state.actions.length} done`;

    const columns: Array<{ status: ActionItem['status']; title: string }> = [
      { status: 'todo', title: 'To do' },
      { status: 'doing', title: 'In progress' },
      { status: 'done', title: 'Done' },
    ];
    const nodes = columns.map((column) => {
      const shell = element('section', 'plan-column');
      const items = state.actions.filter((item) => item.status === column.status);
      const heading = element('div', 'plan-column-header');
      heading.append(element('h3', '', column.title), element('span', '', String(items.length)));
      const list = element('div', 'plan-column-list');
      if (items.length) list.append(...items.map(taskCard));
      else list.append(element('p', 'plan-empty', column.status === 'todo' ? 'Add one concrete next step.' : column.status === 'doing' ? 'Move a task here when you start.' : 'Completed actions will collect here.'));
      shell.append(heading, list);
      return shell;
    });
    board.replaceChildren(...nodes);
  }

  function renderSavedResources() {
    const container = qs<HTMLElement>('#saved-resource-list');
    const count = qs<HTMLElement>('#saved-resource-count');
    if (count) count.textContent = `${state.saved.length} saved`;
    if (container) {
      if (!state.saved.length) {
        emptyState(container, 'Nothing saved yet', 'Save only resources tied to a current decision or action.');
      } else {
        const rows = state.saved.map((resource) => {
          const row = element('div', 'resource-row');
          const main = element('div', 'resource-main');
          const link = element('a');
          link.href = resource.path;
          link.append(element('strong', '', resource.title));
          main.append(link, element('p', '', resource.category));
          const open = element('a', 'row-action');
          open.href = resource.path;
          open.title = 'Open resource';
          open.setAttribute('aria-label', `Open ${resource.title}`);
          open.append(icon('external'));
          const remove = element('button', 'delete-action');
          remove.type = 'button';
          remove.title = 'Remove saved resource';
          remove.setAttribute('aria-label', `Remove ${resource.title}`);
          remove.append(icon('trash'));
          remove.addEventListener('click', () => void removeSavedResource(resource));
          row.append(main, open, remove);
          return row;
        });
        container.replaceChildren(...rows);
      }
    }

    const savedPaths = new Set(state.saved.map((resource) => resource.path));
    qsa<HTMLElement>('[data-resource-card]').forEach((card) => {
      const button = qs<HTMLButtonElement>('.save-resource-button', card);
      const saved = savedPaths.has(card.dataset.resourcePath || '');
      button?.classList.toggle('is-saved', saved);
      if (button) {
        button.title = saved ? 'Remove saved resource' : 'Save resource';
        button.setAttribute('aria-pressed', String(saved));
      }
    });
  }

  function renderWorkspace() {
    renderAccount();
    renderCounts();
    renderRecommendation();
    renderProgressAndFocus();
    renderOverviewActions();
    renderOverviewCareers();
    renderOverviewAssessments();
    renderAssessmentHistory();
    renderCareerPaths();
    renderPlan();
    renderSavedResources();
  }

  async function refreshWorkspace(message?: string) {
    if (!state.user) return;
    await loadWorkspaceData(state.user);
    renderWorkspace();
    if (message) showToast(message);
  }

  async function updateTaskStatus(item: ActionItem, status: string) {
    if (!supabase) return;
    const { error } = await supabase
      .from('action_items')
      .update({ status, updated_at: new Date().toISOString() })
      .eq('id', item.id);
    if (error) {
      showToast('That task could not be updated.');
      return;
    }
    await refreshWorkspace(status === 'done' ? 'Next step completed.' : 'Weekly plan updated.');
  }

  async function deleteTask(item: ActionItem) {
    if (!supabase || !window.confirm(`Delete “${item.title}”?`)) return;
    const { error } = await supabase.from('action_items').delete().eq('id', item.id);
    if (error) {
      showToast('That task could not be removed.');
      return;
    }
    await refreshWorkspace('Next step removed.');
  }

  async function deleteCareerPath(path: CareerPath) {
    if (!supabase || !window.confirm(`Remove “${path.title}” from your comparison?`)) return;
    const { error } = await supabase.from('career_paths').delete().eq('id', path.id);
    if (error) {
      showToast('That career path could not be removed.');
      return;
    }
    await refreshWorkspace('Career path removed.');
  }

  async function removeSavedResource(resource: SavedResource) {
    if (!supabase) return;
    const { error } = await supabase.from('saved_resources').delete().eq('id', resource.id);
    if (error) {
      showToast('That resource could not be removed.');
      return;
    }
    await refreshWorkspace('Resource removed from your library.');
  }

  async function toggleRecommendedResource(card: HTMLElement) {
    if (!supabase || !state.user) return;
    const path = card.dataset.resourcePath || '';
    const existing = state.saved.find((resource) => resource.path === path);
    if (existing) {
      await removeSavedResource(existing);
      return;
    }
    const { error } = await supabase.from('saved_resources').insert({
      user_id: state.user.id,
      path,
      title: card.dataset.resourceTitle || 'Career resource',
      category: card.dataset.resourceCategory || 'Resource',
    });
    if (error) {
      showToast('That resource could not be saved.');
      return;
    }
    await refreshWorkspace('Resource saved to your library.');
  }

  function openReport(result: AssessmentResult) {
    const title = qs<HTMLElement>('#report-dialog-title');
    const meta = qs<HTMLElement>('#report-dialog-meta');
    const content = qs<HTMLElement>('#report-dialog-content');
    if (title) title.textContent = result.assessment_title;
    if (meta) meta.textContent = `Completed ${formatDate(result.completed_at, { year: 'numeric' })}`;
    if (content) {
      content.replaceChildren();
      const payload = result.result_payload;
      let lines: Array<{ kind?: string; text: string }> = [];
      if (payload && typeof payload === 'object' && !Array.isArray(payload) && Array.isArray(payload.lines)) {
        lines = payload.lines
          .map((line) => {
            if (typeof line === 'string') return { text: line };
            if (line && typeof line === 'object' && !Array.isArray(line) && typeof line.text === 'string') {
              return { kind: typeof line.kind === 'string' ? line.kind : '', text: line.text };
            }
            return null;
          })
          .filter((line): line is { kind?: string; text: string } => Boolean(line?.text));
      }
      if (!lines.length && result.summary) lines = result.summary.split(/\r?\n/).filter(Boolean).map((text) => ({ text }));
      if (!lines.length) lines = [{ text: 'This saved result does not contain a readable summary yet.' }];
      lines.slice(0, 240).forEach((line) => {
        const heading = /heading/i.test(line.kind || '');
        content.append(element('p', `report-line${heading ? ' is-heading' : ''}`, line.text));
      });
    }
    openDialog(qs<HTMLDialogElement>('#report-dialog'));
  }

  function openCareerDialog() {
    const form = qs<HTMLFormElement>('#career-form');
    form?.reset();
    const slider = qs<HTMLInputElement>('#career-fit');
    const output = qs<HTMLOutputElement>('#career-fit-output');
    if (slider) slider.value = '65';
    if (output) output.value = '65%';
    setFormStatus(qs<HTMLElement>('#career-form-status'));
    openDialog(qs<HTMLDialogElement>('#career-dialog'));
  }

  function openTaskDialog() {
    const form = qs<HTMLFormElement>('#task-form');
    form?.reset();
    const date = qs<HTMLInputElement>('#task-due-date');
    if (date) date.value = isoDateIn(7);
    setFormStatus(qs<HTMLElement>('#task-form-status'));
    openDialog(qs<HTMLDialogElement>('#task-dialog'));
  }

  function openProfileDialog() {
    const profile = state.profile;
    const name = qs<HTMLInputElement>('#settings-name');
    const stage = qs<HTMLSelectElement>('#settings-stage');
    const outcome = qs<HTMLTextAreaElement>('#settings-outcome');
    const city = qs<HTMLInputElement>('#settings-city');
    const email = qs<HTMLElement>('#settings-email');
    if (name) name.value = profile?.full_name || '';
    if (stage) stage.value = profile?.stage || 'exploring';
    if (outcome) outcome.value = profile?.target_outcome || '';
    if (city) city.value = profile?.city || '';
    if (email) email.textContent = `Signed in as ${state.user?.email || ''}`;
    setFormStatus(qs<HTMLElement>('#profile-form-status'));
    openDialog(qs<HTMLDialogElement>('#profile-dialog'));
  }

  function wireAuthTabs() {
    const signInTab = qs<HTMLButtonElement>('#show-sign-in');
    const signUpTab = qs<HTMLButtonElement>('#show-sign-up');
    const signInForm = qs<HTMLFormElement>('#sign-in-form');
    const signUpForm = qs<HTMLFormElement>('#sign-up-form');
    const title = qs<HTMLElement>('#auth-form-title');
    const copy = qs<HTMLElement>('#auth-form-copy');

    const switchMode = (mode: 'sign-in' | 'sign-up') => {
      const signingIn = mode === 'sign-in';
      signInForm?.toggleAttribute('hidden', !signingIn);
      signUpForm?.toggleAttribute('hidden', signingIn);
      signInTab?.classList.toggle('is-active', signingIn);
      signUpTab?.classList.toggle('is-active', !signingIn);
      signInTab?.setAttribute('aria-selected', String(signingIn));
      signUpTab?.setAttribute('aria-selected', String(!signingIn));
      if (title) title.textContent = signingIn ? 'Welcome back' : 'Create your workspace';
      if (copy) copy.textContent = signingIn
        ? 'Continue from the decision or action you left open.'
        : 'Set up a private place for assessments, comparisons, and next steps.';
      setFormStatus(authStatus);
    };
    signInTab?.addEventListener('click', () => switchMode('sign-in'));
    signUpTab?.addEventListener('click', () => switchMode('sign-up'));
  }

  function wireStaticEvents() {
    wireAuthTabs();

    qsa<HTMLButtonElement>('[data-view-target]').forEach((button) => {
      button.addEventListener('click', () => showView(button.dataset.viewTarget as WorkspaceView));
    });
    qsa<HTMLButtonElement>('[data-open-task]').forEach((button) => button.addEventListener('click', openTaskDialog));
    qsa<HTMLButtonElement>('[data-open-career]').forEach((button) => button.addEventListener('click', openCareerDialog));
    qsa<HTMLButtonElement>('[data-open-profile]').forEach((button) => button.addEventListener('click', openProfileDialog));
    qsa<HTMLButtonElement>('[data-close-dialog]').forEach((button) => {
      button.addEventListener('click', () => closeDialog(button.closest('dialog')));
    });
    qsa<HTMLDialogElement>('dialog').forEach((dialog) => {
      dialog.addEventListener('click', (event) => {
        if (event.target === dialog && dialog.id !== 'onboarding-dialog' && dialog.id !== 'password-dialog') dialog.close();
      });
    });
    qsa<HTMLButtonElement>('[data-password-toggle]').forEach((button) => {
      button.addEventListener('click', () => {
        const input = document.getElementById(button.dataset.passwordToggle || '') as HTMLInputElement | null;
        if (!input) return;
        const showing = input.type === 'text';
        input.type = showing ? 'password' : 'text';
        button.setAttribute('aria-label', showing ? 'Show password' : 'Hide password');
        button.title = showing ? 'Show password' : 'Hide password';
      });
    });
    qsa<HTMLElement>('[data-resource-card]').forEach((card) => {
      qs<HTMLButtonElement>('.save-resource-button', card)?.addEventListener('click', () => void toggleRecommendedResource(card));
    });

    const fitSlider = qs<HTMLInputElement>('#career-fit');
    fitSlider?.addEventListener('input', () => {
      const output = qs<HTMLOutputElement>('#career-fit-output');
      if (output) output.value = `${fitSlider.value}%`;
    });
  }

  function wireForms() {
    qs<HTMLFormElement>('#sign-in-form')?.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (!supabase) return;
      const email = qs<HTMLInputElement>('#sign-in-email')?.value.trim() || '';
      const password = qs<HTMLInputElement>('#sign-in-password')?.value || '';
      const button = qs<HTMLButtonElement>('#sign-in-submit');
      setBusy(button, true, 'Signing in...');
      setFormStatus(authStatus);
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      setBusy(button, false, 'Sign in');
      if (error) {
        setFormStatus(authStatus, friendlyError(error, 'Sign in failed.'), 'error');
        return;
      }
      await handleSession(data.session, true);
    });

    qs<HTMLFormElement>('#sign-up-form')?.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (!supabase) return;
      const name = qs<HTMLInputElement>('#sign-up-name')?.value.trim() || '';
      const email = qs<HTMLInputElement>('#sign-up-email')?.value.trim() || '';
      const password = qs<HTMLInputElement>('#sign-up-password')?.value || '';
      const button = qs<HTMLButtonElement>('#sign-up-submit');
      setBusy(button, true, 'Creating workspace...');
      setFormStatus(authStatus);
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: name },
          emailRedirectTo: `${window.location.origin}/dashboard`,
        },
      });
      setBusy(button, false, 'Create my workspace');
      if (error) {
        setFormStatus(authStatus, friendlyError(error, 'Account creation failed.'), 'error');
        return;
      }
      if (data.session) {
        await handleSession(data.session, true);
      } else {
        setFormStatus(authStatus, 'Check your email to confirm the account, then return here to sign in.', 'success');
      }
    });

    qs<HTMLButtonElement>('#forgot-password')?.addEventListener('click', async () => {
      if (!supabase) return;
      const email = qs<HTMLInputElement>('#sign-in-email')?.value.trim() || '';
      if (!email) {
        setFormStatus(authStatus, 'Enter your email first, then request the reset link.', 'error');
        return;
      }
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/dashboard`,
      });
      if (error) {
        setFormStatus(authStatus, friendlyError(error, 'The reset email could not be sent.'), 'error');
        return;
      }
      setFormStatus(authStatus, 'Password reset link sent. Check your email.', 'success');
    });

    qs<HTMLFormElement>('#onboarding-form')?.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (!supabase || !state.user) return;
      const form = event.currentTarget as HTMLFormElement;
      const data = new FormData(form);
      const name = String(data.get('name') || '').trim();
      const stage = String(data.get('stage') || '');
      const outcome = String(data.get('outcome') || '').trim();
      const city = String(data.get('city') || '').trim();
      const status = qs<HTMLElement>('#onboarding-status');
      const submit = qs<HTMLButtonElement>('button[type="submit"]', form);
      if (!name || !stage || !outcome) {
        setFormStatus(status, 'Add your name, stage, and current goal.', 'error');
        return;
      }
      setBusy(submit, true, 'Building your plan...');
      const { error } = await supabase.from('profiles').update({
        full_name: name,
        stage,
        city,
        target_outcome: outcome,
        avatar_seed: initials(name, state.user.email),
        onboarding_completed: true,
        updated_at: new Date().toISOString(),
      }).eq('id', state.user.id);
      if (error) {
        setBusy(submit, false, 'Build my starting plan');
        setFormStatus(status, friendlyError(error, 'Your profile could not be saved.'), 'error');
        return;
      }

      if (!state.actions.length) {
        const assessment = stageAssessmentRoutes[stage] || stageAssessmentRoutes.exploring;
        const { error: taskError } = await supabase.from('action_items').insert([
          { user_id: state.user.id, title: `Complete the ${assessment.title}`, category: 'decide', status: 'todo', priority: 'important', due_date: isoDateIn(3), sort_order: 0 },
          { user_id: state.user.id, title: 'Add two realistic career paths to compare', category: 'explore', status: 'todo', priority: 'normal', due_date: isoDateIn(6), sort_order: 1 },
          { user_id: state.user.id, title: 'Run one 60-minute skill sample', category: 'build', status: 'todo', priority: 'normal', due_date: isoDateIn(9), sort_order: 2 },
        ]);
        if (taskError) console.error('Starter tasks could not be created:', taskError);
      }
      setBusy(submit, false, 'Build my starting plan');
      closeDialog(qs<HTMLDialogElement>('#onboarding-dialog'));
      await refreshWorkspace('Your starting plan is ready.');
    });

    qs<HTMLFormElement>('#career-form')?.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (!supabase || !state.user) return;
      const form = event.currentTarget as HTMLFormElement;
      const data = new FormData(form);
      const status = qs<HTMLElement>('#career-form-status');
      const submit = qs<HTMLButtonElement>('button[type="submit"]', form);
      setBusy(submit, true, 'Adding path...');
      const { error } = await supabase.from('career_paths').insert({
        user_id: state.user.id,
        title: String(data.get('title') || '').trim(),
        fit_score: Number(data.get('fit') || 0),
        status: 'shortlisted',
        next_step: String(data.get('nextStep') || '').trim(),
        reasons: linesFromTextarea(String(data.get('reasons') || '')),
        tradeoffs: linesFromTextarea(String(data.get('tradeoffs') || '')),
        sort_order: state.careers.length,
      });
      setBusy(submit, false, 'Add to comparison');
      if (error) {
        setFormStatus(status, friendlyError(error, 'That path could not be added.'), 'error');
        return;
      }
      closeDialog(qs<HTMLDialogElement>('#career-dialog'));
      await refreshWorkspace('Career path added to your comparison.');
      showView('careers');
    });

    qs<HTMLFormElement>('#task-form')?.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (!supabase || !state.user) return;
      const form = event.currentTarget as HTMLFormElement;
      const data = new FormData(form);
      const status = qs<HTMLElement>('#task-form-status');
      const submit = qs<HTMLButtonElement>('button[type="submit"]', form);
      setBusy(submit, true, 'Adding next step...');
      const { error } = await supabase.from('action_items').insert({
        user_id: state.user.id,
        title: String(data.get('title') || '').trim(),
        category: String(data.get('category') || 'explore'),
        due_date: String(data.get('dueDate') || '') || null,
        priority: data.get('important') ? 'important' : 'normal',
        sort_order: state.actions.length,
      });
      setBusy(submit, false, 'Add to weekly plan');
      if (error) {
        setFormStatus(status, friendlyError(error, 'That next step could not be added.'), 'error');
        return;
      }
      closeDialog(qs<HTMLDialogElement>('#task-dialog'));
      await refreshWorkspace('Next step added to your week.');
      showView('plan');
    });

    qs<HTMLFormElement>('#profile-form')?.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (!supabase || !state.user) return;
      const form = event.currentTarget as HTMLFormElement;
      const data = new FormData(form);
      const status = qs<HTMLElement>('#profile-form-status');
      const submit = qs<HTMLButtonElement>('button[type="submit"]', form);
      const name = String(data.get('name') || '').trim();
      setBusy(submit, true, 'Saving...');
      const { error } = await supabase.from('profiles').update({
        full_name: name,
        stage: String(data.get('stage') || 'exploring'),
        target_outcome: String(data.get('outcome') || '').trim(),
        city: String(data.get('city') || '').trim(),
        avatar_seed: initials(name, state.user.email),
        onboarding_completed: true,
        updated_at: new Date().toISOString(),
      }).eq('id', state.user.id);
      setBusy(submit, false, 'Save changes');
      if (error) {
        setFormStatus(status, friendlyError(error, 'Your profile could not be updated.'), 'error');
        return;
      }
      closeDialog(qs<HTMLDialogElement>('#profile-dialog'));
      await refreshWorkspace('Profile updated.');
    });

    qs<HTMLButtonElement>('#sign-out-button')?.addEventListener('click', async () => {
      if (!supabase) return;
      const { error } = await supabase.auth.signOut();
      if (error) {
        setFormStatus(qs<HTMLElement>('#profile-form-status'), friendlyError(error, 'Sign out failed.'), 'error');
        return;
      }
      closeDialog(qs<HTMLDialogElement>('#profile-dialog'));
      state.loadingUserId = '';
      showAuth();
    });

    qs<HTMLFormElement>('#password-form')?.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (!supabase) return;
      const form = event.currentTarget as HTMLFormElement;
      const password = qs<HTMLInputElement>('#new-password')?.value || '';
      const status = qs<HTMLElement>('#password-status');
      const submit = qs<HTMLButtonElement>('button[type="submit"]', form);
      setBusy(submit, true, 'Updating password...');
      const { error } = await supabase.auth.updateUser({ password });
      setBusy(submit, false, 'Update password');
      if (error) {
        setFormStatus(status, friendlyError(error, 'Your password could not be updated.'), 'error');
        return;
      }
      setFormStatus(status, 'Password updated. You can continue in your workspace.', 'success');
      window.setTimeout(() => closeDialog(qs<HTMLDialogElement>('#password-dialog')), 900);
    });

    qs<HTMLButtonElement>('#clear-completed')?.addEventListener('click', async () => {
      if (!supabase) return;
      const ids = state.actions.filter((item) => item.status === 'done').map((item) => item.id);
      if (!ids.length) {
        showToast('There are no completed actions to clear.');
        return;
      }
      const { error } = await supabase.from('action_items').delete().in('id', ids);
      if (error) {
        showToast('Completed actions could not be cleared.');
        return;
      }
      await refreshWorkspace('Completed actions cleared.');
    });
  }

  async function initialise() {
    wireStaticEvents();
    wireForms();

    if (!isSupabaseConfigured || !supabase) {
      showAuth();
      const warning = qs<HTMLElement>('#config-warning');
      if (warning) warning.hidden = false;
      qsa<HTMLButtonElement>('.auth-form button[type="submit"]').forEach((button) => {
        button.disabled = true;
      });
      return;
    }

    const { data, error } = await supabase.auth.getSession();
    if (error) {
      showAuth();
      setFormStatus(authStatus, friendlyError(error, 'Your account session could not be read.'), 'error');
    } else {
      await handleSession(data.session);
    }

    supabase.auth.onAuthStateChange((event, session) => {
      window.setTimeout(() => {
        if (event === 'PASSWORD_RECOVERY') {
          openDialog(qs<HTMLDialogElement>('#password-dialog'));
        }
        if (event === 'SIGNED_OUT') {
          state.loadingUserId = '';
          showAuth();
        } else if (session && session.user.id !== state.user?.id) {
          void handleSession(session, true);
        }
      }, 0);
    });
  }

  void initialise();
}
