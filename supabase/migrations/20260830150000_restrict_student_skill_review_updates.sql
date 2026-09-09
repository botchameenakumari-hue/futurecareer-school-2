-- Students may maintain their own feedback, but must not edit a coach-owned
-- review. Staff can continue to update reviews for students they supervise.
drop policy if exists skill_reviews_update on public.skill_reviews;

create policy skill_reviews_update on public.skill_reviews
  for update to authenticated
  using (
    (select private.can_staff_edit_student(student_id))
    or (
      student_id = (select auth.uid())
      and (select private.is_active())
      and coach_id is null
    )
  )
  with check (
    (select private.can_staff_edit_student(student_id))
    or (
      student_id = (select auth.uid())
      and (select private.is_active())
      and coach_id is null
    )
  );
