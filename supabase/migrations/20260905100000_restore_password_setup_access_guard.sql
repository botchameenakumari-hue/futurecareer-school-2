begin;

-- Accounts that still need their first password must not reach coaching data
-- through access policies while the password setup flow is in progress.
create or replace function private.can_access_user(target_user_id uuid)
returns boolean
language plpgsql
stable
security definer
set search_path = ''
as $$
declare
  viewer public.profiles%rowtype;
  subject public.profiles%rowtype;
begin
  select * into viewer
  from public.profiles
  where id = (select auth.uid());

  if not found
    or viewer.account_status <> 'active'
    or viewer.must_change_password then
    return false;
  end if;

  if target_user_id = viewer.id then
    return true;
  end if;

  select * into subject
  from public.profiles
  where id = target_user_id;

  if not found then
    return false;
  end if;

  if viewer.role = 'admin' then
    return true;
  end if;

  if viewer.role = 'branch_head' then
    return subject.branch_id = viewer.branch_id
      and subject.role in ('head_coach', 'coach', 'student');
  end if;

  if viewer.role = 'head_coach' then
    if subject.supervisor_id = viewer.id
      and subject.role in ('coach', 'student') then
      return true;
    end if;

    return subject.role = 'student'
      and exists (
        select 1
        from public.profiles coach
        where coach.id = subject.supervisor_id
          and coach.role = 'coach'
          and coach.supervisor_id = viewer.id
      );
  end if;

  if viewer.role = 'coach' then
    return subject.role = 'student'
      and subject.supervisor_id = viewer.id;
  end if;

  return false;
end;
$$;

revoke execute on function private.can_access_user(uuid) from public, anon;
grant execute on function private.can_access_user(uuid) to authenticated;

commit;
