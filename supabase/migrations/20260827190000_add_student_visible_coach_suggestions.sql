-- Let staff share selected coaching guidance with the student dashboard.

alter table public.coach_notes
  drop constraint if exists coach_notes_note_type_check;

alter table public.coach_notes
  add constraint coach_notes_note_type_check
  check (note_type in ('observation', 'suggestion', 'constraint', 'academic', 'family-context', 'follow-up', 'risk'));

alter table public.coach_notes
  drop constraint if exists coach_notes_visibility_check;

alter table public.coach_notes
  add constraint coach_notes_visibility_check
  check (visibility in ('staff', 'student', 'head-coach-and-above'));

drop policy if exists coach_notes_staff_select on public.coach_notes;
create policy coach_notes_staff_select
  on public.coach_notes for select to authenticated
  using (
    ((select private.is_active()) and author_id = (select auth.uid()))
    or (
      (select private.can_staff_edit_student(student_id))
      and (
        visibility = 'staff'
        or (select private.current_role()) in ('admin', 'branch_head', 'head_coach')
      )
    )
    or (
      (select private.is_active())
      and student_id = (select auth.uid())
      and visibility = 'student'
    )
  );

create index if not exists coach_notes_student_visibility_created_idx
  on public.coach_notes (student_id, visibility, created_at desc);
