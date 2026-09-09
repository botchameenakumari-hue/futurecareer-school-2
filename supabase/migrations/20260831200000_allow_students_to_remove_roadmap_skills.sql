begin;

-- Removing a skill from a student's roadmap is a personal planning action.
-- Students still cannot update staff-owned skill details, but they may remove
-- any skill from their own roadmap, including a core or career-linked skill.
drop policy if exists student_skills_scope_delete on public.student_skills;
create policy student_skills_scope_delete on public.student_skills for delete to authenticated
  using (
    (select private.can_edit_student(student_id))
    and ((select private.current_role()) <> 'student' or student_id = (select auth.uid()))
  );

commit;
