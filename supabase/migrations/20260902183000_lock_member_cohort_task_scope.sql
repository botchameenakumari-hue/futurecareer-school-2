begin;

drop policy if exists cohort_tasks_member_update on public.cohort_tasks;
create policy cohort_tasks_member_update on public.cohort_tasks
  for update to authenticated
  using (
    created_by = (select auth.uid())
    and exists (
      select 1 from public.cohort_memberships membership
      where membership.cohort_id = cohort_tasks.cohort_id
        and membership.student_id = (select auth.uid())
        and membership.membership_status = 'active'
    )
  )
  with check (
    created_by = (select auth.uid())
    and updated_by = (select auth.uid())
    and exists (
      select 1 from public.cohort_memberships membership
      where membership.cohort_id = cohort_tasks.cohort_id
        and membership.student_id = (select auth.uid())
        and membership.membership_status = 'active'
    )
  );

commit;
