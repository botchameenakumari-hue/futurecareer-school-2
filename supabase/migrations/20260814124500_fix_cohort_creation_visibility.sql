-- Make cohort INSERT ... RETURNING work without broadening hierarchy access.
-- The original select policy called can_manage_cohort(id), which cannot see the
-- just-inserted row while PostgreSQL is evaluating its RETURNING clause.

create or replace function private.can_manage_cohort_record(
  target_branch_id uuid,
  target_lead_id uuid
)
returns boolean
language plpgsql
stable
security definer
set search_path = ''
as $$
declare
  viewer public.profiles%rowtype;
begin
  select * into viewer
  from public.profiles
  where id = (select auth.uid());

  if not found
    or viewer.account_status <> 'active'
    or viewer.must_change_password
    or viewer.role = 'student' then
    return false;
  end if;

  if viewer.role = 'admin' then
    return true;
  end if;

  if viewer.branch_id is distinct from target_branch_id then
    return false;
  end if;

  if viewer.role = 'branch_head' or target_lead_id = viewer.id then
    return true;
  end if;

  if viewer.role = 'head_coach' then
    return exists (
      select 1
      from public.profiles lead_profile
      where lead_profile.id = target_lead_id
        and lead_profile.role = 'coach'
        and lead_profile.account_status = 'active'
        and lead_profile.supervisor_id = viewer.id
        and lead_profile.branch_id = target_branch_id
    );
  end if;

  return false;
end;
$$;

revoke all on function private.can_manage_cohort_record(uuid, uuid)
  from public, anon, authenticated;
grant execute on function private.can_manage_cohort_record(uuid, uuid)
  to authenticated, service_role;

drop policy if exists cohorts_scope_select on public.cohorts;
create policy cohorts_scope_select
on public.cohorts
for select
to authenticated
using (
  (select private.can_manage_cohort_record(branch_id, lead_id))
  or (select private.can_manage_cohort(id))
  or exists (
    select 1
    from public.cohort_memberships membership
    where membership.cohort_id = cohorts.id
      and membership.student_id = (select auth.uid())
      and membership.membership_status = 'active'
  )
);

drop policy if exists cohorts_staff_insert on public.cohorts;
create policy cohorts_staff_insert
on public.cohorts
for insert
to authenticated
with check (
  (select private.can_manage_cohort_record(branch_id, lead_id))
  and created_by = (select auth.uid())
  and updated_by = (select auth.uid())
);

comment on function private.can_manage_cohort_record(uuid, uuid) is
  'Checks cohort branch and lead scope without querying the cohort row itself; safe for INSERT RETURNING policies.';
