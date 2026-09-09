begin;

alter table public.student_advice
  drop constraint if exists student_advice_due_date_check;

alter table public.student_advice
  add constraint student_advice_due_date_check
  check (due_date is null or due_date >= advice_date);

commit;
