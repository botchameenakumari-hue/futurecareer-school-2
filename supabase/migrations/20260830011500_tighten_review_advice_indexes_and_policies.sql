begin;

create index if not exists skill_reviews_coach_idx on public.skill_reviews (coach_id, updated_at desc);
create index if not exists student_advice_author_idx on public.student_advice (author_id, advice_date desc);

drop policy if exists skill_reviews_staff_update on public.skill_reviews;
drop policy if exists skill_reviews_student_update on public.skill_reviews;
create policy skill_reviews_update on public.skill_reviews
  for update to authenticated
  using (
    (select private.can_staff_edit_student(student_id))
    or (student_id = (select auth.uid()) and (select private.is_active()))
  )
  with check (
    (select private.can_staff_edit_student(student_id))
    or (student_id = (select auth.uid()) and (select private.is_active()))
  );

drop policy if exists student_advice_staff_update on public.student_advice;
drop policy if exists student_advice_student_update on public.student_advice;
create policy student_advice_update on public.student_advice
  for update to authenticated
  using (
    (select private.can_staff_edit_student(student_id))
    or (student_id = (select auth.uid()) and (select private.is_active()))
  )
  with check (
    (select private.can_staff_edit_student(student_id))
    or (student_id = (select auth.uid()) and (select private.is_active()))
  );

commit;
