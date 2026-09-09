-- A student can complete or reopen a staff-assigned action, but cannot change
-- the action brief or its ownership.
create or replace function private.protect_staff_action_update()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if (select private.current_role()) = 'student'
     and auth.uid() = old.user_id
     and old.assigned_by is not null
     and old.assigned_by <> old.user_id then
    if new.user_id is distinct from old.user_id
       or new.assigned_by is distinct from old.assigned_by
       or new.session_id is distinct from old.session_id
       or new.title is distinct from old.title
       or new.category is distinct from old.category
       or new.priority is distinct from old.priority
       or new.due_date is distinct from old.due_date
       or new.sort_order is distinct from old.sort_order
       or new.details is distinct from old.details
       or new.created_at is distinct from old.created_at then
      raise exception 'Students can only update the completion status of staff-assigned actions.' using errcode = '42501';
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists protect_staff_action_update on public.action_items;
create trigger protect_staff_action_update
before update on public.action_items
for each row execute function private.protect_staff_action_update();

revoke execute on function private.protect_staff_action_update() from public, anon, authenticated;
