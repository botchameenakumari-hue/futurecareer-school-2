-- Individual coaching sessions must name an active staff member who belongs
-- to the student's branch (Admins may support any branch).
create or replace function private.validate_coaching_session_facilitator()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  student_branch uuid;
  facilitator public.profiles%rowtype;
begin
  select branch_id into student_branch
  from public.profiles
  where id = new.student_id and role = 'student';

  select * into facilitator
  from public.profiles
  where id = new.facilitator_id;

  if student_branch is null then
    raise exception 'A coaching session must belong to a student with a branch.';
  end if;
  if facilitator.id is null
    or facilitator.account_status is distinct from 'active'
    or facilitator.role = 'student'
    or (facilitator.role <> 'admin' and facilitator.branch_id is distinct from student_branch) then
    raise exception 'A coaching session requires an active staff facilitator in the student branch.';
  end if;
  return new;
end;
$$;

drop trigger if exists coaching_sessions_validate_facilitator on public.coaching_sessions;
create trigger coaching_sessions_validate_facilitator
before insert or update of student_id, facilitator_id
on public.coaching_sessions
for each row execute function private.validate_coaching_session_facilitator();

revoke all on function private.validate_coaching_session_facilitator() from public, anon, authenticated;
