
create schema if not exists private;
revoke all on schema private from public, anon, authenticated;

create table public.branches (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  code text not null unique check (code ~ '^[A-Z0-9][A-Z0-9-]{1,19}$'),
  city text not null default '',
  status text not null default 'active'
    check (status in ('active', 'inactive')),
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

alter table public.profiles
  add column email text not null default '',
  add column role text not null default 'student',
  add column account_status text not null default 'pending',
  add column branch_id uuid references public.branches(id) on delete restrict,
  add column supervisor_id uuid references public.profiles(id) on delete set null,
  add column created_by uuid references auth.users(id) on delete set null,
  add column approved_by uuid references auth.users(id) on delete set null,
  add column approved_at timestamptz,
  add column must_change_password boolean not null default false,
  add column last_active_at timestamptz;

update public.profiles
set
  email = coalesce((select lower(email) from auth.users where id = public.profiles.id), ''),
  role = 'admin',
  account_status = 'active',
  approved_by = id,
  approved_at = timezone('utc', now()),
  onboarding_completed = true,
  updated_at = timezone('utc', now())
where id = (select id from auth.users order by created_at asc limit 1)
  and (select count(*) from auth.users) = 1;

alter table public.profiles
  add constraint profiles_email_check
    check (email = '' or (email = lower(email) and position('@' in email) > 1)),
  add constraint profiles_role_check
    check (role in ('admin', 'branch_head', 'head_coach', 'coach', 'student')),
  add constraint profiles_account_status_check
    check (account_status in ('pending', 'active', 'rejected', 'suspended', 'archived')),
  add constraint profiles_role_branch_check
    check (role = 'admin' or branch_id is not null),
  add constraint profiles_supervisor_check
    check (role = 'admin' or supervisor_id is not null),
  add constraint profiles_not_own_supervisor_check
    check (supervisor_id is null or supervisor_id <> id);

create unique index profiles_email_unique_idx
  on public.profiles (lower(email))
  where email <> '';
create unique index profiles_one_branch_head_idx
  on public.profiles (branch_id)
  where role = 'branch_head' and account_status not in ('rejected', 'archived');
create index profiles_branch_role_status_idx
  on public.profiles (branch_id, role, account_status);
create index profiles_supervisor_status_idx
  on public.profiles (supervisor_id, account_status)
  where supervisor_id is not null;
create index profiles_created_by_idx
  on public.profiles (created_by)
  where created_by is not null;
create index profiles_approved_by_idx
  on public.profiles (approved_by)
  where approved_by is not null;

insert into public.branches (name, code, city, created_by)
select 'Main Branch', 'MAIN', coalesce(city, ''), id
from public.profiles
where role = 'admin'
order by created_at
limit 1
on conflict (code) do nothing;

create table public.account_requests (
  id uuid primary key default gen_random_uuid(),
  email text not null check (email = lower(email) and position('@' in email) > 1),
  full_name text not null check (length(trim(full_name)) between 2 and 100),
  requested_role text not null
    check (requested_role in ('branch_head', 'head_coach', 'coach', 'student')),
  branch_id uuid not null references public.branches(id) on delete restrict,
  supervisor_id uuid not null references public.profiles(id) on delete restrict,
  requested_by uuid not null references public.profiles(id) on delete restrict,
  status text not null default 'pending'
    check (status in ('pending', 'approved', 'rejected', 'cancelled')),
  reviewed_by uuid references public.profiles(id) on delete set null,
  reviewed_at timestamptz,
  review_note text not null default '',
  resulting_user_id uuid references public.profiles(id) on delete set null,
  is_test_account boolean not null default false,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create unique index account_requests_pending_email_idx
  on public.account_requests (lower(email))
  where status = 'pending';
create index account_requests_status_created_idx
  on public.account_requests (status, created_at desc);
create index account_requests_branch_status_idx
  on public.account_requests (branch_id, status, created_at desc);
create index account_requests_requested_by_idx
  on public.account_requests (requested_by, created_at desc);
create index account_requests_supervisor_idx
  on public.account_requests (supervisor_id)
  where status = 'pending';

create table public.student_constraints (
  student_id uuid primary key references public.profiles(id) on delete cascade,
  budget_range text not null default 'not-set'
    check (budget_range in ('not-set', 'very-limited', 'limited', 'moderate', 'flexible')),
  available_hours_per_week integer
    check (available_hours_per_week is null or available_hours_per_week between 0 and 100),
  max_commute_minutes integer
    check (max_commute_minutes is null or max_commute_minutes between 0 and 360),
  willing_to_relocate boolean,
  relocation_preferences text[] not null default '{}'::text[],
  family_expectations text not null default '',
  work_or_care_responsibilities text not null default '',
  preferred_languages text[] not null default '{}'::text[],
  device_access text not null default 'not-set'
    check (device_access in ('not-set', 'shared-phone', 'personal-phone', 'shared-computer', 'personal-computer')),
  internet_access text not null default 'not-set'
    check (internet_access in ('not-set', 'limited', 'mobile-only', 'reliable')),
  accessibility_support text not null default '',
  schedule_or_health_considerations text not null default '',
  education_timeline text not null default '',
  risk_tolerance smallint
    check (risk_tolerance is null or risk_tolerance between 1 and 5),
  study_abroad_interest text not null default 'not-sure'
    check (study_abroad_interest in ('not-sure', 'no', 'maybe', 'yes')),
  non_negotiables text[] not null default '{}'::text[],
  student_notes text not null default '',
  updated_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create index student_constraints_updated_by_idx
  on public.student_constraints (updated_by)
  where updated_by is not null;

create table public.student_academic_records (
  student_id uuid primary key references public.profiles(id) on delete cascade,
  institution text not null default '',
  board_or_university text not null default '',
  class_or_year text not null default '',
  stream text not null default '',
  subjects jsonb not null default '[]'::jsonb,
  marks_summary jsonb not null default '{}'::jsonb,
  attendance_percent numeric(5,2)
    check (attendance_percent is null or attendance_percent between 0 and 100),
  exam_targets text[] not null default '{}'::text[],
  verified_by uuid references public.profiles(id) on delete set null,
  verified_at timestamptz,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create index student_academic_records_verified_by_idx
  on public.student_academic_records (verified_by)
  where verified_by is not null;

create table public.coach_notes (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  author_id uuid not null references public.profiles(id) on delete cascade,
  note_type text not null default 'observation'
    check (note_type in ('observation', 'constraint', 'academic', 'family-context', 'follow-up', 'risk')),
  visibility text not null default 'staff'
    check (visibility in ('staff', 'head-coach-and-above')),
  content text not null check (length(trim(content)) between 1 and 5000),
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create index coach_notes_student_created_idx
  on public.coach_notes (student_id, created_at desc);
create index coach_notes_author_created_idx
  on public.coach_notes (author_id, created_at desc);

create table public.audit_events (
  id bigint generated always as identity primary key,
  actor_id uuid references public.profiles(id) on delete set null,
  action text not null,
  target_user_id uuid references public.profiles(id) on delete set null,
  branch_id uuid references public.branches(id) on delete set null,
  entity_type text not null default '',
  entity_id uuid,
  details jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default timezone('utc', now())
);

create index audit_events_actor_created_idx
  on public.audit_events (actor_id, created_at desc)
  where actor_id is not null;
create index audit_events_target_created_idx
  on public.audit_events (target_user_id, created_at desc)
  where target_user_id is not null;
create index audit_events_branch_created_idx
  on public.audit_events (branch_id, created_at desc)
  where branch_id is not null;

create table public.system_settings (
  key text primary key,
  value jsonb not null,
  updated_at timestamptz not null default timezone('utc', now())
);

insert into public.system_settings (key, value)
values ('role_lab_enabled', 'false'::jsonb)
on conflict (key) do nothing;

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
    and account_status = 'active';
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

  if not found then
    return false;
  end if;

  if viewer.account_status <> 'active' then
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

create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

create trigger profiles_set_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();
create trigger branches_set_updated_at
before update on public.branches
for each row execute function public.set_updated_at();
create trigger account_requests_set_updated_at
before update on public.account_requests
for each row execute function public.set_updated_at();
create trigger student_constraints_set_updated_at
before update on public.student_constraints
for each row execute function public.set_updated_at();
create trigger student_academic_records_set_updated_at
before update on public.student_academic_records
for each row execute function public.set_updated_at();
create trigger coach_notes_set_updated_at
before update on public.coach_notes
for each row execute function public.set_updated_at();

alter table public.branches enable row level security;
alter table public.account_requests enable row level security;
alter table public.student_constraints enable row level security;
alter table public.student_academic_records enable row level security;
alter table public.coach_notes enable row level security;
alter table public.audit_events enable row level security;
alter table public.system_settings enable row level security;

drop policy if exists profiles_owned_by_user on public.profiles;
drop policy if exists assessment_results_owned_by_user on public.assessment_results;
drop policy if exists career_paths_owned_by_user on public.career_paths;
drop policy if exists action_items_owned_by_user on public.action_items;
drop policy if exists saved_resources_owned_by_user on public.saved_resources;

create policy profiles_hierarchy_select
  on public.profiles for select to authenticated
  using ((select private.can_access_user(id)));

create policy profiles_self_update
  on public.profiles for update to authenticated
  using (id = (select auth.uid()) and (select private.is_active()))
  with check (id = (select auth.uid()) and (select private.is_active()));

create policy branches_hierarchy_select
  on public.branches for select to authenticated
  using ((select private.can_access_branch(id)));

create policy account_requests_hierarchy_select
  on public.account_requests for select to authenticated
  using (
    requested_by = (select auth.uid())
    or (select private.current_role()) = 'admin'
    or (
      (select private.current_role()) = 'branch_head'
      and (select private.can_access_branch(branch_id))
    )
  );

create policy student_constraints_hierarchy_select
  on public.student_constraints for select to authenticated
  using ((select private.can_access_user(student_id)));

create policy student_constraints_hierarchy_insert
  on public.student_constraints for insert to authenticated
  with check ((select private.can_edit_student(student_id)));

create policy student_constraints_hierarchy_update
  on public.student_constraints for update to authenticated
  using ((select private.can_edit_student(student_id)))
  with check ((select private.can_edit_student(student_id)));

create policy student_academic_records_hierarchy_select
  on public.student_academic_records for select to authenticated
  using ((select private.can_access_user(student_id)));

create policy student_academic_records_staff_insert
  on public.student_academic_records for insert to authenticated
  with check ((select private.can_staff_edit_student(student_id)));

create policy student_academic_records_staff_update
  on public.student_academic_records for update to authenticated
  using ((select private.can_staff_edit_student(student_id)))
  with check ((select private.can_staff_edit_student(student_id)));

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
  );

create policy coach_notes_staff_insert
  on public.coach_notes for insert to authenticated
  with check (
    author_id = (select auth.uid())
    and (select private.can_staff_edit_student(student_id))
  );

create policy coach_notes_author_update
  on public.coach_notes for update to authenticated
  using (author_id = (select auth.uid()) and (select private.is_active()))
  with check (
    author_id = (select auth.uid())
    and (select private.can_staff_edit_student(student_id))
  );

create policy coach_notes_author_delete
  on public.coach_notes for delete to authenticated
  using (author_id = (select auth.uid()) and (select private.is_active()));

create policy audit_events_leadership_select
  on public.audit_events for select to authenticated
  using (
    (select private.current_role()) = 'admin'
    or (
      (select private.current_role()) = 'branch_head'
      and branch_id is not null
      and (select private.can_access_branch(branch_id))
    )
  );

create policy assessment_results_hierarchy_select
  on public.assessment_results for select to authenticated
  using ((select private.can_access_user(user_id)));
create policy assessment_results_hierarchy_insert
  on public.assessment_results for insert to authenticated
  with check ((select private.can_edit_student(user_id)));
create policy assessment_results_hierarchy_update
  on public.assessment_results for update to authenticated
  using ((select private.can_edit_student(user_id)))
  with check ((select private.can_edit_student(user_id)));
create policy assessment_results_hierarchy_delete
  on public.assessment_results for delete to authenticated
  using ((select private.can_edit_student(user_id)));

create policy career_paths_hierarchy_select
  on public.career_paths for select to authenticated
  using ((select private.can_access_user(user_id)));
create policy career_paths_hierarchy_insert
  on public.career_paths for insert to authenticated
  with check ((select private.can_edit_student(user_id)));
create policy career_paths_hierarchy_update
  on public.career_paths for update to authenticated
  using ((select private.can_edit_student(user_id)))
  with check ((select private.can_edit_student(user_id)));
create policy career_paths_hierarchy_delete
  on public.career_paths for delete to authenticated
  using ((select private.can_edit_student(user_id)));

create policy action_items_hierarchy_select
  on public.action_items for select to authenticated
  using ((select private.can_access_user(user_id)));
create policy action_items_hierarchy_insert
  on public.action_items for insert to authenticated
  with check ((select private.can_edit_student(user_id)));
create policy action_items_hierarchy_update
  on public.action_items for update to authenticated
  using ((select private.can_edit_student(user_id)))
  with check ((select private.can_edit_student(user_id)));
create policy action_items_hierarchy_delete
  on public.action_items for delete to authenticated
  using ((select private.can_edit_student(user_id)));

create policy saved_resources_hierarchy_select
  on public.saved_resources for select to authenticated
  using ((select private.can_access_user(user_id)));
create policy saved_resources_hierarchy_insert
  on public.saved_resources for insert to authenticated
  with check ((select private.can_edit_student(user_id)));
create policy saved_resources_hierarchy_update
  on public.saved_resources for update to authenticated
  using ((select private.can_edit_student(user_id)))
  with check ((select private.can_edit_student(user_id)));
create policy saved_resources_hierarchy_delete
  on public.saved_resources for delete to authenticated
  using ((select private.can_edit_student(user_id)));

revoke all on table public.branches from anon, authenticated;
revoke all on table public.account_requests from anon, authenticated;
revoke all on table public.student_constraints from anon, authenticated;
revoke all on table public.student_academic_records from anon, authenticated;
revoke all on table public.coach_notes from anon, authenticated;
revoke all on table public.audit_events from anon, authenticated;
revoke all on table public.system_settings from anon, authenticated;
revoke all on table public.profiles from anon, authenticated;

grant select on table public.branches to authenticated;
grant select on table public.account_requests to authenticated;
grant select on table public.profiles to authenticated;
grant update (
  full_name,
  stage,
  city,
  target_outcome,
  avatar_seed,
  onboarding_completed,
  last_active_at,
  updated_at
) on table public.profiles to authenticated;
grant select, insert, update on table public.student_constraints to authenticated;
grant select, insert, update on table public.student_academic_records to authenticated;
grant select, insert, update, delete on table public.coach_notes to authenticated;
grant select on table public.audit_events to authenticated;

grant select, insert, update, delete on table public.branches to service_role;
grant select, insert, update, delete on table public.account_requests to service_role;
grant select, insert, update, delete on table public.profiles to service_role;
grant select, insert, update, delete on table public.student_constraints to service_role;
grant select, insert, update, delete on table public.student_academic_records to service_role;
grant select, insert, update, delete on table public.coach_notes to service_role;
grant select, insert on table public.audit_events to service_role;
grant select, insert, update, delete on table public.system_settings to service_role;
grant usage, select on sequence public.audit_events_id_seq to service_role;

grant select, insert, update, delete on table public.assessment_results to authenticated;
grant select, insert, update, delete on table public.career_paths to authenticated;
grant select, insert, update, delete on table public.action_items to authenticated;
grant select, insert, update, delete on table public.saved_resources to authenticated;

revoke execute on function public.set_updated_at() from public, anon, authenticated;



