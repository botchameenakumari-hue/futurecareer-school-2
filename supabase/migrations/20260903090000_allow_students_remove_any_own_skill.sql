-- Students may curate their own roadmap.  A skill's creator (a coach, a
-- preset, or the student) must not prevent the student from removing it.
drop policy if exists student_skills_scope_delete on public.student_skills;
create policy student_skills_scope_delete
  on public.student_skills for delete to authenticated
  using (
    (select private.can_edit_student(student_id))
    and ((select private.current_role()) <> 'student' or student_id = (select auth.uid()))
  );
