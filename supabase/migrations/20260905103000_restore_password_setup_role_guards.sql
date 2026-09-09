begin;

create or replace function private.current_role()
returns text
language sql
stable
security definer
set search_path = ''
as $$
  select role
  from public.profiles
  where id = (select auth.uid())
    and account_status = 'active'
    and must_change_password is false;
$$;

create or replace function private.is_active()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.profiles
    where id = (select auth.uid())
      and account_status = 'active'
      and must_change_password is false
  );
$$;

revoke execute on function private.current_role() from public, anon;
revoke execute on function private.is_active() from public, anon;
grant execute on function private.current_role() to authenticated;
grant execute on function private.is_active() to authenticated;

commit;
