begin;

-- The task completion RPC is intentionally available to signed-in users, but
-- it should resolve every object from an explicit schema. This keeps the
-- SECURITY DEFINER boundary resistant to search-path shadowing while retaining
-- the function's existing membership and role checks.
create or replace function public.complete_cohort_task(target_task_id uuid)
returns public.cohort_tasks
language plpgsql
security definer
set search_path = ''
as $$
declare result_row public.cohort_tasks;
begin
  if not exists (
    select 1 from public.cohort_tasks task
    where task.id = target_task_id
      and (private.can_manage_cohort(task.cohort_id) or exists (
        select 1 from public.cohort_memberships membership
        where membership.cohort_id = task.cohort_id
          and membership.student_id = (select auth.uid())
          and membership.membership_status = 'active'
      ))
  ) then
    raise exception 'You are not allowed to complete this cohort task';
  end if;
  update public.cohort_tasks
  set status = 'done', updated_by = (select auth.uid()), updated_at = timezone('utc', now())
  where id = target_task_id
  returning * into result_row;
  return result_row;
end;
$$;

revoke all on function public.complete_cohort_task(uuid) from public;
grant execute on function public.complete_cohort_task(uuid) to authenticated;

commit;
