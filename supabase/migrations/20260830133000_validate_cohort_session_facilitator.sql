-- A cohort announcement must always name an active staff facilitator who is
-- allowed to operate in the cohort's branch. Keep this invariant in the
-- database as well as in the dashboard picker.
create or replace function private.validate_cohort_session_facilitator()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  cohort_branch uuid;
  facilitator public.profiles%rowtype;
begin
  select branch_id into cohort_branch
  from public.cohorts
  where id = new.cohort_id;

  select * into facilitator
  from public.profiles
  where id = new.facilitator_id;

  if facilitator.id is null
    or facilitator.account_status is distinct from 'active'
    or facilitator.role = 'student'
    or (facilitator.role <> 'admin' and facilitator.branch_id is distinct from cohort_branch) then
    raise exception 'A cohort session requires an active staff facilitator in the cohort branch.';
  end if;

  return new;
end;
$$;

drop trigger if exists cohort_sessions_validate_facilitator on public.cohort_sessions;
create trigger cohort_sessions_validate_facilitator
before insert or update of cohort_id, facilitator_id
on public.cohort_sessions
for each row execute function private.validate_cohort_session_facilitator();

revoke all on function private.validate_cohort_session_facilitator() from public, anon, authenticated;
