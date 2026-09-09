-- Keep all workspace authorization helpers consistent while a user is completing
-- first-time password setup. Such accounts may only use the password setup flow.

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

revoke execute on function private.can_access_branch(uuid) from public, anon;
revoke execute on function private.can_edit_student(uuid) from public, anon;
revoke execute on function private.can_staff_edit_student(uuid) from public, anon;
grant execute on function private.can_access_branch(uuid) to authenticated;
grant execute on function private.can_edit_student(uuid) to authenticated;
grant execute on function private.can_staff_edit_student(uuid) to authenticated;
