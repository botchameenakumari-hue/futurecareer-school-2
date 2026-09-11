export const WORKSPACE_PAGE_SIZES = [10, 25, 50] as const;

export type WorkspacePaginationState = {
  page: number;
  pageSize: number;
  storageKey: string;
};

type PaginationSlice<T> = {
  rows: T[];
  page: number;
  pageSize: number;
  totalPages: number;
  from: number;
  to: number;
  total: number;
};

function positiveInteger(value: unknown, fallback: number) {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
}

function persist(state: WorkspacePaginationState) {
  if (typeof window === 'undefined') return;
  try {
    window.sessionStorage.setItem(state.storageKey, JSON.stringify({ page: state.page, pageSize: state.pageSize }));
  } catch {
    // Pagination still works when storage is unavailable.
  }
}

export function createWorkspacePaginationState(storageKey: string, defaultPageSize = 10): WorkspacePaginationState {
  const state = { page: 1, pageSize: defaultPageSize, storageKey };
  if (typeof window === 'undefined') return state;
  try {
    const saved = JSON.parse(window.sessionStorage.getItem(storageKey) || '{}');
    const pageSize = positiveInteger(saved.pageSize, defaultPageSize);
    state.pageSize = WORKSPACE_PAGE_SIZES.includes(pageSize as (typeof WORKSPACE_PAGE_SIZES)[number]) ? pageSize : defaultPageSize;
    state.page = positiveInteger(saved.page, 1);
  } catch {
    // Use predictable defaults if a stored value is malformed.
  }
  return state;
}

export function resetWorkspacePagination(state: WorkspacePaginationState) {
  state.page = 1;
  persist(state);
}

export function paginateWorkspaceRows<T>(items: T[], state: WorkspacePaginationState): PaginationSlice<T> {
  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / state.pageSize));
  state.page = Math.min(Math.max(1, state.page), totalPages);
  const offset = (state.page - 1) * state.pageSize;
  persist(state);
  return {
    rows: items.slice(offset, offset + state.pageSize),
    page: state.page,
    pageSize: state.pageSize,
    totalPages,
    from: total ? offset + 1 : 0,
    to: Math.min(total, offset + state.pageSize),
    total,
  };
}

function pageChoices(page: number, totalPages: number) {
  if (totalPages <= 7) return Array.from({ length: totalPages }, (_, index) => index + 1);
  const choices: Array<number | 'ellipsis'> = [1];
  const start = Math.max(2, page - 1);
  const end = Math.min(totalPages - 1, page + 1);
  if (start > 2) choices.push('ellipsis');
  for (let value = start; value <= end; value += 1) choices.push(value);
  if (end < totalPages - 1) choices.push('ellipsis');
  choices.push(totalPages);
  return choices;
}

export function renderWorkspacePagination(
  container: HTMLElement | null,
  slice: PaginationSlice<unknown>,
  state: WorkspacePaginationState,
  itemLabel: string,
  onChange: () => void,
) {
  if (!container) return;
  container.hidden = slice.total === 0;
  if (!slice.total) {
    container.replaceChildren();
    return;
  }
  const plural = slice.total === 1 ? itemLabel : itemLabel === 'person' ? 'people' : `${itemLabel}s`;
  const pageButtons = pageChoices(slice.page, slice.totalPages).map((choice) => choice === 'ellipsis'
    ? '<span class="workspace-page-ellipsis" aria-hidden="true">…</span>'
    : `<button class="table-action workspace-page-number" type="button" data-workspace-page="${choice}"${choice === slice.page ? ' aria-current="page"' : ''} aria-label="Go to page ${choice}">${choice}</button>`).join('');
  container.innerHTML = `<nav class="workspace-pagination" aria-label="${itemLabel} pages">
    <p class="workspace-page-summary" aria-live="polite">Showing ${slice.from}–${slice.to} of ${slice.total} ${plural} · page ${slice.page} of ${slice.totalPages}</p>
    <div class="workspace-page-controls">
      <label class="workspace-page-size"><span>Show</span><select aria-label="${itemLabel} per page" data-workspace-page-size>${WORKSPACE_PAGE_SIZES.map((size) => `<option value="${size}"${size === slice.pageSize ? ' selected' : ''}>${size}</option>`).join('')}</select><span>per page</span></label>
      <div class="workspace-page-actions">
        <button class="table-action" type="button" data-workspace-page="first"${slice.page === 1 ? ' disabled' : ''}>First</button>
        <button class="table-action" type="button" data-workspace-page="previous"${slice.page === 1 ? ' disabled' : ''}>Previous</button>
        <span class="workspace-page-numbers" aria-label="Choose a page">${pageButtons}</span>
        <button class="table-action" type="button" data-workspace-page="next"${slice.page === slice.totalPages ? ' disabled' : ''}>Next</button>
        <button class="table-action" type="button" data-workspace-page="last"${slice.page === slice.totalPages ? ' disabled' : ''}>Last</button>
      </div>
      <form class="workspace-page-jump" data-workspace-page-jump-form>
        <label><span>Go to</span><input type="number" min="1" max="${slice.totalPages}" value="${slice.page}" inputmode="numeric" aria-label="Go to page" data-workspace-page-jump /></label>
        <button class="table-action" type="submit">Go</button>
      </form>
    </div>
  </nav>`;

  const changePage = (next: number) => {
    state.page = Math.min(Math.max(1, next), slice.totalPages);
    persist(state);
    onChange();
  };
  container.querySelectorAll<HTMLButtonElement>('[data-workspace-page]').forEach((button) => button.addEventListener('click', () => {
    const action = button.dataset.workspacePage || '';
    if (action === 'first') changePage(1);
    else if (action === 'previous') changePage(slice.page - 1);
    else if (action === 'next') changePage(slice.page + 1);
    else if (action === 'last') changePage(slice.totalPages);
    else changePage(positiveInteger(action, slice.page));
  }));
  container.querySelector<HTMLSelectElement>('[data-workspace-page-size]')?.addEventListener('change', (event) => {
    state.pageSize = positiveInteger((event.currentTarget as HTMLSelectElement).value, 10);
    state.page = 1;
    persist(state);
    onChange();
  });
  container.querySelector<HTMLFormElement>('[data-workspace-page-jump-form]')?.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = (event.currentTarget as HTMLFormElement).querySelector<HTMLInputElement>('[data-workspace-page-jump]');
    changePage(positiveInteger(input?.value, slice.page));
  });
}
