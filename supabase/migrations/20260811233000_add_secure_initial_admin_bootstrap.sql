create or replace function private.bootstrap_initial_admin(
  p_admin_email text,
  p_full_name text,
  p_branch_name text default 'Main Branch',
  p_branch_code text default 'MAIN'
)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
  v_email text := lower(btrim(coalesce(p_admin_email, '')));
  v_full_name text := btrim(coalesce(p_full_name, ''));
  v_branch_name text := btrim(coalesce(p_branch_name, ''));
  v_branch_code text := upper(btrim(coalesce(p_branch_code, '')));
  v_user_id uuid;
  v_existing_admin_id uuid;
  v_branch_id uuid;
begin
  if v_email = '' or position('@' in v_email) <= 1 then
    raise exception 'Enter the email address of an existing Supabase Auth user.';
  end if;

  if v_full_name = '' then
    raise exception 'Admin name is required.';
  end if;

  if v_branch_name = '' then
    raise exception 'Branch name is required.';
  end if;

  if v_branch_code !~ '^[A-Z0-9][A-Z0-9-]{1,19}$' then
    raise exception 'Branch code must be 2-20 characters using A-Z, 0-9, or hyphens.';
  end if;

  select users.id
  into v_user_id
  from auth.users as users
  where lower(users.email) = v_email
  limit 1;

  if v_user_id is null then
    raise exception 'Create and confirm this user in Supabase Authentication first.';
  end if;

  select profiles.id
  into v_existing_admin_id
  from public.profiles as profiles
  where profiles.role = 'admin'
    and profiles.account_status = 'active'
  order by profiles.created_at
  limit 1;

  if v_existing_admin_id is not null and v_existing_admin_id <> v_user_id then
    raise exception 'An active Admin already exists. Use the Admin dashboard to manage additional accounts.';
  end if;

  if v_existing_admin_id = v_user_id then
    return v_user_id;
  end if;

  select branches.id
  into v_branch_id
  from public.branches as branches
  where branches.code = v_branch_code;

  if v_branch_id is null then
    insert into public.branches (name, code, created_by)
    values (v_branch_name, v_branch_code, v_user_id)
    returning id into v_branch_id;
  end if;

  insert into public.profiles (
    id,
    email,
    full_name,
    role,
    account_status,
    branch_id,
    supervisor_id,
    created_by,
    approved_by,
    approved_at,
    onboarding_completed,
    must_change_password
  )
  values (
    v_user_id,
    v_email,
    v_full_name,
    'admin',
    'active',
    v_branch_id,
    null,
    v_user_id,
    v_user_id,
    timezone('utc', now()),
    true,
    false
  )
  on conflict (id) do update
  set
    email = excluded.email,
    full_name = excluded.full_name,
    role = 'admin',
    account_status = 'active',
    branch_id = coalesce(public.profiles.branch_id, excluded.branch_id),
    supervisor_id = null,
    approved_by = excluded.approved_by,
    approved_at = excluded.approved_at,
    onboarding_completed = true,
    must_change_password = false,
    updated_at = timezone('utc', now());

  insert into public.audit_events (
    actor_id,
    action,
    target_user_id,
    branch_id,
    entity_type,
    entity_id,
    details
  )
  values (
    v_user_id,
    'initial_admin_bootstrapped',
    v_user_id,
    v_branch_id,
    'profile',
    v_user_id,
    jsonb_build_object('source', 'supabase_sql_editor')
  );

  return v_user_id;
end;
$$;

comment on function private.bootstrap_initial_admin(text, text, text, text) is
  'One-time database-owner bootstrap for the first Admin. Refuses to run after an active Admin exists.';

revoke all on function private.bootstrap_initial_admin(text, text, text, text)
  from public, anon, authenticated, service_role;
