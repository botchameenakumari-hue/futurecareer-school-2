begin;

-- Students may mark coach guidance complete or reopen it, but they must not
-- be able to rewrite the coach-owned message, dates, author, or cohort link.
-- RLS controls which rows a student can reach; this trigger controls which
-- columns may change on those rows.
create or replace function public.protect_staff_advice_fields()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if (select private.current_role()) = 'student' then
    if new.student_id is distinct from old.student_id
      or new.cohort_id is distinct from old.cohort_id
      or new.author_id is distinct from old.author_id
      or new.advice_date is distinct from old.advice_date
      or new.title is distinct from old.title
      or new.advice is distinct from old.advice
      or new.due_date is distinct from old.due_date
      or new.created_at is distinct from old.created_at then
      raise exception 'Students can only update the status of coach guidance';
    end if;
    new.updated_at := timezone('utc', now());
  end if;
  return new;
end;
$$;

drop trigger if exists protect_staff_advice_fields on public.student_advice;
create trigger protect_staff_advice_fields
before update on public.student_advice
for each row execute function public.protect_staff_advice_fields();

-- This is a trigger implementation detail, never an API callable function.
revoke all on function public.protect_staff_advice_fields() from public;
revoke all on function public.protect_staff_advice_fields() from anon;
revoke all on function public.protect_staff_advice_fields() from authenticated;

commit;
