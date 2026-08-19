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

create or replace function private.can_access_branch(target_branch_id uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.profiles viewer
    where viewer.id = (select auth.uid())
      and viewer.account_status = 'active'
      and viewer.must_change_password is false
      and (
        viewer.role = 'admin'
        or viewer.branch_id = target_branch_id
      )
  );
$$;

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

create or replace function private.can_edit_student(target_user_id uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.profiles viewer
    join public.profiles student on student.id = target_user_id
    where viewer.id = (select auth.uid())
      and viewer.account_status = 'active'
      and viewer.must_change_password is false
      and student.role = 'student'
      and (
        (viewer.id = student.id and viewer.role = 'student')
        or (
          viewer.role in ('admin', 'branch_head', 'head_coach', 'coach')
          and (select private.can_access_user(student.id))
        )
      )
  );
$$;

create or replace function private.can_staff_edit_student(target_user_id uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.profiles viewer
    join public.profiles student on student.id = target_user_id
    where viewer.id = (select auth.uid())
      and viewer.account_status = 'active'
      and viewer.must_change_password is false
      and viewer.role in ('admin', 'branch_head', 'head_coach', 'coach')
      and student.role = 'student'
      and (select private.can_access_user(student.id))
  );
$$;

revoke execute on function private.current_role() from public, anon;
revoke execute on function private.is_active() from public, anon;
revoke execute on function private.can_access_branch(uuid) from public, anon;
revoke execute on function private.can_access_user(uuid) from public, anon;
revoke execute on function private.can_edit_student(uuid) from public, anon;
revoke execute on function private.can_staff_edit_student(uuid) from public, anon;

grant execute on function private.current_role() to authenticated;
grant execute on function private.is_active() to authenticated;
grant execute on function private.can_access_branch(uuid) to authenticated;
grant execute on function private.can_access_user(uuid) to authenticated;
grant execute on function private.can_edit_student(uuid) to authenticated;
grant execute on function private.can_staff_edit_student(uuid) to authenticated;

drop policy if exists profiles_setup_self_select on public.profiles;
create policy profiles_setup_self_select
  on public.profiles for select to authenticated
  using (id = (select auth.uid()));

drop policy if exists account_requests_hierarchy_select on public.account_requests;
create policy account_requests_hierarchy_select
  on public.account_requests for select to authenticated
  using (
    (select private.is_active())
    and (
      requested_by = (select auth.uid())
      or (select private.current_role()) = 'admin'
      or (
        (select private.current_role()) = 'branch_head'
        and (select private.can_access_branch(branch_id))
      )
    )
  );

commit;
