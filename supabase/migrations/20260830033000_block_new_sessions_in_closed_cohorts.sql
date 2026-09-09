begin;

create or replace function private.prevent_new_session_in_closed_cohort()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  cohort_status text;
begin
  select status into cohort_status from public.cohorts where id = new.cohort_id;
  if cohort_status in ('completed', 'archived') then
    raise exception 'Completed or archived cohorts cannot accept new session announcements.';
  end if;
  return new;
end;
$$;

drop trigger if exists prevent_new_session_in_closed_cohort on public.cohort_sessions;
create trigger prevent_new_session_in_closed_cohort
  before insert on public.cohort_sessions
  for each row execute function private.prevent_new_session_in_closed_cohort();

revoke all on function private.prevent_new_session_in_closed_cohort() from public, anon, authenticated;

commit;
