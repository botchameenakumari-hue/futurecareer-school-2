begin;

-- Shared cohort tasks are separate from a student's private action plan. They
-- belong to the group and remain visible to every active member.
create table if not exists public.cohort_tasks (
  id uuid primary key default gen_random_uuid(),
  cohort_id uuid not null references public.cohorts(id) on delete cascade,
  title text not null check (length(trim(title)) between 2 and 180),
  details text not null default '' check (length(details) <= 3000),
  task_type text not null default 'follow-up'
    check (task_type in ('prepare', 'practice', 'research', 'follow-up', 'other')),
  priority text not null default 'normal'
    check (priority in ('normal', 'important')),
  status text not null default 'open'
    check (status in ('open', 'in-progress', 'done', 'archived')),
  added_on date not null default current_date,
  due_date date,
  created_by uuid not null references public.profiles(id) on delete restrict,
  updated_by uuid not null references public.profiles(id) on delete restrict,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  check (due_date is null or due_date >= added_on)
);

create index if not exists cohort_tasks_cohort_date_idx
  on public.cohort_tasks (cohort_id, status, due_date, added_on desc);
create index if not exists cohort_tasks_created_by_idx
  on public.cohort_tasks (created_by, created_at desc);

alter table public.cohort_tasks enable row level security;

drop policy if exists cohort_tasks_scope_select on public.cohort_tasks;
create policy cohort_tasks_scope_select on public.cohort_tasks
  for select to authenticated
  using (
    private.can_manage_cohort(cohort_id)
    or exists (
      select 1 from public.cohort_memberships membership
      where membership.cohort_id = cohort_tasks.cohort_id
        and membership.student_id = (select auth.uid())
        and membership.membership_status = 'active'
    )
  );

drop policy if exists cohort_tasks_staff_insert on public.cohort_tasks;
create policy cohort_tasks_staff_insert on public.cohort_tasks
  for insert to authenticated
  with check (private.can_manage_cohort(cohort_id) and created_by = (select auth.uid()) and updated_by = (select auth.uid()));

drop policy if exists cohort_tasks_staff_update on public.cohort_tasks;
create policy cohort_tasks_staff_update on public.cohort_tasks
  for update to authenticated
  using (private.can_manage_cohort(cohort_id))
  with check (private.can_manage_cohort(cohort_id));

drop policy if exists cohort_tasks_staff_delete on public.cohort_tasks;
create policy cohort_tasks_staff_delete on public.cohort_tasks
  for delete to authenticated
  using (private.can_manage_cohort(cohort_id));

revoke all on table public.cohort_tasks from anon, authenticated;
grant select, insert, update, delete on table public.cohort_tasks to authenticated;
grant select, insert, update, delete on table public.cohort_tasks to service_role;

commit;
