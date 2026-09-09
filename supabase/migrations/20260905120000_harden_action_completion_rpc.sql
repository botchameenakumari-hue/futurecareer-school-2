begin;

-- Action completion already has an RLS policy limiting the update to the
-- authenticated student's own action. Running this RPC as the caller keeps
-- that policy in force instead of bypassing it through SECURITY DEFINER.
create or replace function public.set_action_completion(target_action_id uuid, target_status text)
returns public.action_items
language plpgsql
security invoker
set search_path = ''
as $$
declare updated_row public.action_items;
begin
  if (select private.current_role()) <> 'student'
     or not (select private.is_active())
     or target_status not in ('todo', 'done') then
    raise exception 'Only an active student can update action completion.';
  end if;

  update public.action_items
  set status = target_status
  where id = target_action_id
    and user_id = (select auth.uid());

  if not found then
    raise exception 'That action is not available for completion.';
  end if;

  select * into updated_row
  from public.action_items
  where id = target_action_id;
  return updated_row;
end;
$$;

revoke all on function public.set_action_completion(uuid, text) from public;
grant execute on function public.set_action_completion(uuid, text) to authenticated;

commit;
