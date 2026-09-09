begin;

create or replace function private.validate_cohort_session_window()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  cohort_record public.cohorts%rowtype;
  session_day date;
begin
  select * into cohort_record
  from public.cohorts
  where id = new.cohort_id;

  if not found then
    raise exception 'The selected cohort no longer exists.';
  end if;

  session_day := (new.starts_at at time zone 'UTC')::date;
  if cohort_record.starts_on is not null and session_day < cohort_record.starts_on then
    raise exception 'The session date cannot be before the cohort start date.';
  end if;
  if cohort_record.ends_on is not null and session_day > cohort_record.ends_on then
    raise exception 'The session date cannot be after the cohort end date.';
  end if;

  return new;
end;
$$;

revoke all on function private.validate_cohort_session_window() from public, anon, authenticated;

drop trigger if exists cohort_sessions_validate_window on public.cohort_sessions;
create trigger cohort_sessions_validate_window
  before insert or update of cohort_id, starts_at on public.cohort_sessions
  for each row execute function private.validate_cohort_session_window();

commit;
