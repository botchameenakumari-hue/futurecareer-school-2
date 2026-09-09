begin;

drop policy if exists skill_reviews_staff_insert on public.skill_reviews;
drop policy if exists skill_reviews_student_insert on public.skill_reviews;

create policy skill_reviews_insert
  on public.skill_reviews for insert to authenticated
  with check (
    (
      (select private.can_staff_edit_student(student_id))
      and coach_id = (select auth.uid())
    )
    or (
      student_id = (select auth.uid())
      and (select private.is_active())
      and coach_id is null
    )
  );

commit;
