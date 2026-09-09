-- Advice may be edited by authorised staff, but its student and author are
-- part of the coaching record and must remain immutable.
create or replace function private.validate_student_advice()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not exists (select 1 from public.profiles where id = new.student_id and role = 'student') then
    raise exception 'Advice can only be attached to a student.';
  end if;
  if not exists (select 1 from public.profiles where id = new.author_id and account_status = 'active' and role in ('admin', 'branch_head', 'head_coach', 'coach')) then
    raise exception 'Advice requires an active coach.';
  end if;
  if tg_op = 'UPDATE' and (new.student_id is distinct from old.student_id or new.author_id is distinct from old.author_id) then
    raise exception 'Advice attribution cannot be changed.';
  end if;
  if (tg_op = 'INSERT' or new.cohort_id is distinct from old.cohort_id)
    and new.cohort_id is not null and not exists (
    select 1 from public.cohort_memberships m
    where m.cohort_id = new.cohort_id and m.student_id = new.student_id and m.membership_status = 'active'
  ) then
    raise exception 'Advice cohort must be the student''s active cohort.';
  end if;
  if (select private.current_role()) = 'student' then
    if new.student_id is distinct from (select auth.uid())
      or new.author_id is distinct from old.author_id
      or new.advice_date is distinct from old.advice_date
      or new.title is distinct from old.title
      or new.advice is distinct from old.advice
      or new.cohort_id is distinct from old.cohort_id
      or new.due_date is distinct from old.due_date then
      raise exception 'Students can only update advice status.';
    end if;
  end if;
  new.updated_at := timezone('utc', now());
  return new;
end;
$$;

drop trigger if exists validate_student_advice on public.student_advice;
create trigger validate_student_advice
before insert or update on public.student_advice
for each row execute function private.validate_student_advice();
