alter table public.cohort_posts add column if not exists task_status text not null default 'open' check (task_status in ('open', 'done'));
alter table public.cohort_posts add column if not exists task_completed_by uuid references public.profiles(id) on delete set null;
alter table public.cohort_posts add column if not exists task_completed_at timestamptz;
create index if not exists cohort_posts_open_tasks_idx on public.cohort_posts(cohort_id, task_status, created_at desc) where is_task = true;

drop policy if exists cohort_posts_scope_update on public.cohort_posts;
create policy cohort_posts_scope_update on public.cohort_posts for update to authenticated
using (author_id = (select auth.uid()) or (select private.can_manage_cohort(cohort_id)))
with check (
  (select private.can_manage_cohort(cohort_id))
  or (author_id = (select auth.uid()) and exists (
    select 1 from public.cohort_memberships membership
    where membership.cohort_id = cohort_posts.cohort_id
      and membership.student_id = (select auth.uid())
      and membership.membership_status = 'active'
  ))
);
