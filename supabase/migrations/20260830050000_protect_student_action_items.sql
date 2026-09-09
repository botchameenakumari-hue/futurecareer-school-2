-- Staff-owned action items are read-only to students. Students can still
-- complete or reopen actions they created for themselves.
drop policy if exists action_items_hierarchy_update on public.action_items;
create policy action_items_hierarchy_update on public.action_items
  for update to authenticated
  using (
    (select private.can_edit_student(action_items.user_id))
    and ((select private.current_role()) <> 'student'
      or coalesce(action_items.assigned_by, action_items.user_id) = (select auth.uid()))
  )
  with check (
    (select private.can_edit_student(action_items.user_id))
    and ((select private.current_role()) <> 'student'
      or coalesce(action_items.assigned_by, action_items.user_id) = (select auth.uid()))
  );
