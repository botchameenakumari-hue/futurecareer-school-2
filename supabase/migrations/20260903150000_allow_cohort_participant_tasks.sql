-- Allow active cohort participants to start shared group tasks. Staff keep
-- management rights; participants cannot move a task into another cohort.
drop policy if exists cohort_tasks_staff_insert on public.cohort_tasks;
drop policy if exists cohort_tasks_member_insert on public.cohort_tasks;
create policy cohort_tasks_participant_insert on public.cohort_tasks
  for insert to authenticated
  with check (
    created_by = (select auth.uid())
    and updated_by = (select auth.uid())
    and (
      private.can_manage_cohort(cohort_id)
      or exists (
        select 1 from public.cohort_memberships membership
        where membership.cohort_id = cohort_tasks.cohort_id
          and membership.student_id = (select auth.uid())
          and membership.membership_status = 'active'
      )
    )
  );

drop policy if exists cohort_tasks_staff_update on public.cohort_tasks;
drop policy if exists cohort_tasks_member_update on public.cohort_tasks;
create policy cohort_tasks_participant_update on public.cohort_tasks
  for update to authenticated
  using (
    private.can_manage_cohort(cohort_id)
    or (
      created_by = (select auth.uid())
      and exists (
        select 1 from public.cohort_memberships membership
        where membership.cohort_id = cohort_tasks.cohort_id
          and membership.student_id = (select auth.uid())
          and membership.membership_status = 'active'
      )
    )
  )
  with check (
    private.can_manage_cohort(cohort_id)
    or (
      created_by = (select auth.uid())
      and updated_by = (select auth.uid())
      and exists (
        select 1 from public.cohort_memberships membership
        where membership.cohort_id = cohort_tasks.cohort_id
          and membership.student_id = (select auth.uid())
          and membership.membership_status = 'active'
      )
    )
  );

drop policy if exists cohort_tasks_staff_delete on public.cohort_tasks;
create policy cohort_tasks_participant_delete on public.cohort_tasks
  for delete to authenticated
  using (
    private.can_manage_cohort(cohort_id)
    or (
      created_by = (select auth.uid())
      and exists (
        select 1 from public.cohort_memberships membership
        where membership.cohort_id = cohort_tasks.cohort_id
          and membership.student_id = (select auth.uid())
          and membership.membership_status = 'active'
      )
    )
  );
