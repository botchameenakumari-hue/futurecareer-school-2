-- Students may mark their own advice complete or reopen it, but cannot alter
-- the staff-authored guidance, ownership, dates, or cohort link.
create or replace function private.protect_student_advice_update()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if auth.uid() = old.student_id
     and (select private.current_role()) = 'student' then
    if new.student_id is distinct from old.student_id
       or new.author_id is distinct from old.author_id
       or new.cohort_id is distinct from old.cohort_id
       or new.advice_date is distinct from old.advice_date
       or new.title is distinct from old.title
       or new.advice is distinct from old.advice
       or new.due_date is distinct from old.due_date
       or new.created_at is distinct from old.created_at then
      raise exception 'Students can only update the completion status of staff advice.' using errcode = '42501';
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists protect_student_advice_update on public.student_advice;
create trigger protect_student_advice_update
before update on public.student_advice
for each row execute function private.protect_student_advice_update();

revoke execute on function private.protect_student_advice_update() from public, anon, authenticated;
