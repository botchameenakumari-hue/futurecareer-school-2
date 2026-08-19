begin;

-- Career decisions have one protected primary direction and any number of alternatives.
alter table public.career_paths
  add column option_type text,
  add column focus_percentage smallint,
  add column career_category text not null default 'Other'
    check (length(trim(career_category)) between 2 and 80),
  add column preset_key text check (preset_key is null or length(preset_key) <= 120);

update public.career_paths
set
  option_type = 'alternative',
  focus_percentage = case when status in ('ruled-out', 'paused') then 0 else 10 end;

with ranked as (
  select id,
    row_number() over (
      partition by user_id
      order by
        case status
          when 'selected' then 1
          when 'testing' then 2
          when 'shortlisted' then 3
          else 4
        end,
        fit_score desc nulls last,
        updated_at desc
    ) as position
  from public.career_paths
  where status not in ('ruled-out', 'paused')
)
update public.career_paths path
set option_type = 'primary', focus_percentage = 70
from ranked
where ranked.id = path.id and ranked.position = 1;

alter table public.career_paths
  alter column option_type set default 'alternative',
  alter column option_type set not null,
  alter column focus_percentage set default 10,
  alter column focus_percentage set not null,
  add constraint career_paths_option_type_check
    check (option_type in ('primary', 'alternative')),
  add constraint career_paths_focus_percentage_check
    check (
      (option_type = 'primary' and focus_percentage between 50 and 90)
      or (option_type = 'alternative' and focus_percentage between 0 and 50)
    ),
  add constraint career_paths_primary_status_check
    check (option_type = 'alternative' or status not in ('ruled-out', 'paused'));

create unique index career_paths_one_primary_per_student_idx
  on public.career_paths (user_id)
  where option_type = 'primary';
create index career_paths_user_type_focus_idx
  on public.career_paths (user_id, option_type, focus_percentage desc, updated_at desc);
create index career_paths_preset_key_idx
  on public.career_paths (preset_key)
  where preset_key is not null;

-- Cohorts are the unit of coaching delivery. Sessions are announced to a cohort,
-- not booked by individual students.
create table public.cohorts (
  id uuid primary key default gen_random_uuid(),
  branch_id uuid not null references public.branches(id) on delete restrict,
  name text not null check (length(trim(name)) between 2 and 120),
  code text not null check (code ~ '^[A-Z0-9][A-Z0-9-]{1,31}$'),
  program_track text not null default 'career-foundations'
    check (program_track in (
      'career-foundations', 'stream-selection', 'college-and-course',
      'career-launch', 'career-transition', 'exam-and-alternatives', 'custom'
    )),
  coaching_stage text not null default 'mixed'
    check (coaching_stage in (
      'mixed', 'intake', 'self-discovery', 'career-exploration',
      'option-validation', 'decision', 'execution', 'follow-up'
    )),
  delivery_mode text not null default 'hybrid'
    check (delivery_mode in ('in-person', 'online', 'hybrid')),
  status text not null default 'active'
    check (status in ('upcoming', 'active', 'completed', 'archived')),
  lead_id uuid references public.profiles(id) on delete set null,
  capacity smallint not null default 30 check (capacity between 1 and 500),
  starts_on date,
  ends_on date,
  schedule_note text not null default '' check (length(schedule_note) <= 1000),
  description text not null default '' check (length(description) <= 2000),
  created_by uuid not null references public.profiles(id) on delete restrict,
  updated_by uuid not null references public.profiles(id) on delete restrict,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  unique (branch_id, code),
  check (ends_on is null or starts_on is null or ends_on >= starts_on)
);

create index cohorts_branch_status_idx
  on public.cohorts (branch_id, status, coaching_stage, name);
create index cohorts_lead_status_idx
  on public.cohorts (lead_id, status)
  where lead_id is not null;
create index cohorts_created_by_idx on public.cohorts (created_by);
create index cohorts_updated_by_idx on public.cohorts (updated_by);

create table public.cohort_memberships (
  id uuid primary key default gen_random_uuid(),
  cohort_id uuid not null references public.cohorts(id) on delete cascade,
  student_id uuid not null references public.profiles(id) on delete cascade,
  membership_status text not null default 'active'
    check (membership_status in ('active', 'completed', 'moved')),
  joined_on date not null default current_date,
  left_on date,
  created_by uuid not null references public.profiles(id) on delete restrict,
  updated_by uuid not null references public.profiles(id) on delete restrict,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  check (
    (membership_status = 'active' and left_on is null)
    or (membership_status <> 'active' and left_on is not null)
  )
);

create unique index cohort_memberships_one_active_per_student_idx
  on public.cohort_memberships (student_id)
  where membership_status = 'active';
create index cohort_memberships_cohort_status_idx
  on public.cohort_memberships (cohort_id, membership_status, joined_on);
create index cohort_memberships_student_history_idx
  on public.cohort_memberships (student_id, joined_on desc);
create index cohort_memberships_created_by_idx on public.cohort_memberships (created_by);
create index cohort_memberships_updated_by_idx on public.cohort_memberships (updated_by);

create table public.cohort_sessions (
  id uuid primary key default gen_random_uuid(),
  cohort_id uuid not null references public.cohorts(id) on delete cascade,
  facilitator_id uuid not null references public.profiles(id) on delete restrict,
  starts_at timestamptz not null,
  duration_minutes smallint not null default 60 check (duration_minutes between 15 and 240),
  session_type text not null default 'career-discovery'
    check (session_type in (
      'orientation', 'self-discovery', 'career-discovery', 'career-options',
      'skill-building', 'decision-planning', 'execution', 'industry-exposure',
      'parent-briefing', 'progress-review', 'other'
    )),
  delivery_mode text not null default 'online'
    check (delivery_mode in ('in-person', 'online', 'hybrid')),
  status text not null default 'announced'
    check (status in ('announced', 'completed', 'cancelled')),
  topic text not null check (length(trim(topic)) between 2 and 180),
  venue_or_link text not null default '' check (length(venue_or_link) <= 1000),
  agenda text not null default '' check (length(agenda) <= 3000),
  preparation text not null default '' check (length(preparation) <= 2000),
  student_summary text not null default '' check (length(student_summary) <= 5000),
  announced_at timestamptz not null default timezone('utc', now()),
  created_by uuid not null references public.profiles(id) on delete restrict,
  updated_by uuid not null references public.profiles(id) on delete restrict,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create index cohort_sessions_cohort_starts_idx
  on public.cohort_sessions (cohort_id, starts_at desc);
create index cohort_sessions_upcoming_idx
  on public.cohort_sessions (status, starts_at)
  where status = 'announced';
create index cohort_sessions_facilitator_idx
  on public.cohort_sessions (facilitator_id, starts_at desc);
create index cohort_sessions_created_by_idx on public.cohort_sessions (created_by);
create index cohort_sessions_updated_by_idx on public.cohort_sessions (updated_by);

create table public.cohort_session_attendance (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.cohort_sessions(id) on delete cascade,
  student_id uuid not null references public.profiles(id) on delete cascade,
  attendance_status text not null default 'not-recorded'
    check (attendance_status in ('not-recorded', 'present', 'late', 'absent', 'excused')),
  participation_note text not null default '' check (length(participation_note) <= 1000),
  recorded_by uuid not null references public.profiles(id) on delete restrict,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  unique (session_id, student_id)
);

create index cohort_session_attendance_session_status_idx
  on public.cohort_session_attendance (session_id, attendance_status);
create index cohort_session_attendance_student_idx
  on public.cohort_session_attendance (student_id, created_at desc);
create index cohort_session_attendance_recorded_by_idx
  on public.cohort_session_attendance (recorded_by);

create or replace function private.can_manage_cohort(target_cohort_id uuid)
returns boolean
language plpgsql
stable
security definer
set search_path = ''
as $$
declare
  viewer public.profiles%rowtype;
  target public.cohorts%rowtype;
begin
  select * into viewer
  from public.profiles
  where id = (select auth.uid());

  if not found
    or viewer.account_status <> 'active'
    or viewer.must_change_password
    or viewer.role = 'student' then
    return false;
  end if;

  select * into target from public.cohorts where id = target_cohort_id;
  if not found then return false; end if;

  if viewer.role = 'admin' then return true; end if;
  if viewer.branch_id is distinct from target.branch_id then return false; end if;
  if viewer.role = 'branch_head' then return true; end if;
  if target.lead_id = viewer.id then return true; end if;

  if viewer.role = 'head_coach' then
    if exists (
      select 1 from public.profiles lead_profile
      where lead_profile.id = target.lead_id
        and lead_profile.role = 'coach'
        and lead_profile.supervisor_id = viewer.id
    ) then return true; end if;

    return exists (
      select 1
      from public.cohort_memberships membership
      join public.profiles student on student.id = membership.student_id
      left join public.profiles coach on coach.id = student.supervisor_id
      where membership.cohort_id = target.id
        and membership.membership_status = 'active'
        and (
          student.supervisor_id = viewer.id
          or (coach.role = 'coach' and coach.supervisor_id = viewer.id)
        )
    );
  end if;

  if viewer.role = 'coach' then
    return exists (
      select 1
      from public.cohort_memberships membership
      join public.profiles student on student.id = membership.student_id
      where membership.cohort_id = target.id
        and membership.membership_status = 'active'
        and student.supervisor_id = viewer.id
    );
  end if;

  return false;
end;
$$;

create or replace function private.validate_cohort_record()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  target_cohort public.cohorts%rowtype;
  target_session public.cohort_sessions%rowtype;
  target_profile public.profiles%rowtype;
  actor_role text;
begin
  if tg_table_name = 'cohorts' then
    if tg_op = 'UPDATE' and new.branch_id is distinct from old.branch_id then
      raise exception 'A cohort cannot be moved to another branch.';
    end if;
    if new.lead_id is not null then
      select * into target_profile from public.profiles where id = new.lead_id;
      if not found
        or target_profile.role not in ('admin', 'branch_head', 'head_coach', 'coach')
        or target_profile.account_status <> 'active'
        or (target_profile.role <> 'admin' and target_profile.branch_id is distinct from new.branch_id) then
        raise exception 'The cohort lead must be active coaching staff in the same branch.';
      end if;
    end if;
  elsif tg_table_name = 'cohort_memberships' then
    if tg_op = 'UPDATE' and (
      new.cohort_id is distinct from old.cohort_id
      or new.student_id is distinct from old.student_id
    ) then
      raise exception 'Close the current membership before moving a student.';
    end if;
    select * into target_cohort from public.cohorts where id = new.cohort_id;
    select * into target_profile from public.profiles where id = new.student_id;
    if target_profile.role is distinct from 'student' then
      raise exception 'Only student profiles can join a cohort.';
    end if;
    if target_profile.branch_id is distinct from target_cohort.branch_id then
      raise exception 'A student and cohort must belong to the same branch.';
    end if;
  elsif tg_table_name = 'cohort_sessions' then
    if tg_op = 'UPDATE' and new.cohort_id is distinct from old.cohort_id then
      raise exception 'A session announcement cannot be moved to another cohort.';
    end if;
    select * into target_cohort from public.cohorts where id = new.cohort_id;
    select * into target_profile from public.profiles where id = new.facilitator_id;
    if not found
      or target_profile.role not in ('admin', 'branch_head', 'head_coach', 'coach')
      or target_profile.account_status <> 'active'
      or (target_profile.role <> 'admin' and target_profile.branch_id is distinct from target_cohort.branch_id) then
      raise exception 'The facilitator must be active coaching staff in the cohort branch.';
    end if;
    select role into actor_role from public.profiles where id = (select auth.uid());
    if actor_role = 'coach' and new.facilitator_id is distinct from (select auth.uid()) then
      raise exception 'A Coach can only announce a session they facilitate.';
    elsif actor_role = 'head_coach'
      and new.facilitator_id is distinct from (select auth.uid())
      and not (
        target_profile.role = 'coach'
        and target_profile.supervisor_id = (select auth.uid())
      ) then
      raise exception 'A Head Coach can assign themselves or one of their Coaches.';
    end if;
  elsif tg_table_name = 'cohort_session_attendance' then
    if tg_op = 'UPDATE' and (
      new.session_id is distinct from old.session_id
      or new.student_id is distinct from old.student_id
    ) then
      raise exception 'Attendance ownership cannot be changed.';
    end if;
    select * into target_session from public.cohort_sessions where id = new.session_id;
    if not exists (
      select 1 from public.cohort_memberships membership
      where membership.cohort_id = target_session.cohort_id
        and membership.student_id = new.student_id
    ) then
      raise exception 'Attendance can only be recorded for a cohort member.';
    end if;
  end if;
  return new;
end;
$$;

create or replace function private.audit_cohort_change()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  payload jsonb;
  target_cohort_id uuid;
  target_student_id uuid;
  target_branch_id uuid;
  target_entity_id uuid;
  actor_user_id uuid;
begin
  payload := case when tg_op = 'DELETE' then to_jsonb(old) else to_jsonb(new) end;
  target_student_id := nullif(payload ->> 'student_id', '')::uuid;

  if tg_table_name = 'cohorts' then
    target_cohort_id := nullif(payload ->> 'id', '')::uuid;
  elsif tg_table_name in ('cohort_memberships', 'cohort_sessions') then
    target_cohort_id := nullif(payload ->> 'cohort_id', '')::uuid;
  elsif tg_table_name = 'cohort_session_attendance' then
    select cohort_id into target_cohort_id
    from public.cohort_sessions
    where id = nullif(payload ->> 'session_id', '')::uuid;
  end if;

  select branch_id into target_branch_id
  from public.cohorts where id = target_cohort_id;
  target_entity_id := coalesce(nullif(payload ->> 'id', '')::uuid, target_cohort_id);
  actor_user_id := coalesce(
    (select auth.uid()),
    nullif(payload ->> 'updated_by', '')::uuid,
    nullif(payload ->> 'created_by', '')::uuid,
    nullif(payload ->> 'recorded_by', '')::uuid
  );

  insert into public.audit_events (
    actor_id, action, target_user_id, branch_id, entity_type, entity_id, details
  ) values (
    actor_user_id,
    'cohort_' || lower(tg_op),
    target_student_id,
    target_branch_id,
    tg_table_name,
    target_entity_id,
    jsonb_strip_nulls(jsonb_build_object(
      'name', payload ->> 'name',
      'topic', payload ->> 'topic',
      'status', coalesce(payload ->> 'status', payload ->> 'membership_status'),
      'cohort_id', target_cohort_id
    ))
  );
  return case when tg_op = 'DELETE' then old else new end;
end;
$$;

create or replace function private.ensure_default_cohort(
  target_branch_id uuid,
  actor_id uuid
)
returns uuid
language plpgsql
security definer
set search_path = ''
as $$
declare
  target_id uuid;
  branch_record public.branches%rowtype;
  owner_id uuid;
  lead_user_id uuid;
begin
  select * into branch_record from public.branches where id = target_branch_id;
  if not found then return null; end if;

  select id into target_id
  from public.cohorts
  where branch_id = target_branch_id and code = branch_record.code || '-GENERAL';
  if target_id is not null then return target_id; end if;

  select id into lead_user_id
  from public.profiles
  where branch_id = target_branch_id
    and role in ('branch_head', 'head_coach', 'coach')
    and account_status = 'active'
  order by case role when 'branch_head' then 1 when 'head_coach' then 2 else 3 end, created_at
  limit 1;

  owner_id := coalesce(
    actor_id,
    lead_user_id,
    (select id from public.profiles where role = 'admin' and account_status = 'active' order by created_at limit 1),
    (select id from public.profiles order by created_at limit 1)
  );

  insert into public.cohorts (
    branch_id, name, code, program_track, coaching_stage, delivery_mode,
    status, lead_id, capacity, schedule_note, description, created_by, updated_by
  ) values (
    target_branch_id,
    left(branch_record.name || ' General Coaching', 120),
    branch_record.code || '-GENERAL',
    'career-foundations', 'mixed', 'hybrid', 'active', lead_user_id, 100,
    'Regular cohort coaching rhythm',
    'Default cohort for students who have not yet been placed in a specialised group.',
    owner_id, owner_id
  )
  returning id into target_id;

  return target_id;
exception when unique_violation then
  select id into target_id
  from public.cohorts
  where branch_id = target_branch_id and code = branch_record.code || '-GENERAL';
  return target_id;
end;
$$;

create or replace function private.sync_student_default_cohort()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  target_cohort_id uuid;
  actor_id uuid;
begin
  actor_id := coalesce(new.approved_by, new.created_by, (select auth.uid()), new.id);

  if tg_op = 'UPDATE'
    and old.role = 'student'
    and (new.role is distinct from 'student' or new.branch_id is distinct from old.branch_id) then
    update public.cohort_memberships
    set membership_status = 'moved', left_on = current_date, updated_by = actor_id
    where student_id = new.id and membership_status = 'active';
  end if;

  if new.role = 'student' and new.branch_id is not null and (
    tg_op = 'INSERT'
    or old.role is distinct from 'student'
    or new.branch_id is distinct from old.branch_id
  ) then
    if not exists (
      select 1 from public.cohort_memberships
      where student_id = new.id and membership_status = 'active'
    ) then
      target_cohort_id := private.ensure_default_cohort(new.branch_id, actor_id);
      insert into public.cohort_memberships (
        cohort_id, student_id, membership_status, joined_on, created_by, updated_by
      ) values (
        target_cohort_id, new.id, 'active', current_date, actor_id, actor_id
      );
    end if;
  end if;
  return new;
end;
$$;

revoke all on function private.can_manage_cohort(uuid) from public, anon, authenticated;
revoke all on function private.validate_cohort_record() from public, anon, authenticated;
revoke all on function private.audit_cohort_change() from public, anon, authenticated;
revoke all on function private.ensure_default_cohort(uuid, uuid) from public, anon, authenticated;
revoke all on function private.sync_student_default_cohort() from public, anon, authenticated;
grant execute on function private.can_manage_cohort(uuid) to authenticated;

create trigger cohorts_validate before insert or update on public.cohorts
  for each row execute function private.validate_cohort_record();
create trigger cohort_memberships_validate before insert or update on public.cohort_memberships
  for each row execute function private.validate_cohort_record();
create trigger cohort_sessions_validate before insert or update on public.cohort_sessions
  for each row execute function private.validate_cohort_record();
create trigger cohort_session_attendance_validate before insert or update on public.cohort_session_attendance
  for each row execute function private.validate_cohort_record();

create trigger cohorts_set_updated_at before update on public.cohorts
  for each row execute function public.set_updated_at();
create trigger cohort_memberships_set_updated_at before update on public.cohort_memberships
  for each row execute function public.set_updated_at();
create trigger cohort_sessions_set_updated_at before update on public.cohort_sessions
  for each row execute function public.set_updated_at();
create trigger cohort_session_attendance_set_updated_at before update on public.cohort_session_attendance
  for each row execute function public.set_updated_at();

create trigger cohorts_audit_change after insert or update or delete on public.cohorts
  for each row execute function private.audit_cohort_change();
create trigger cohort_memberships_audit_change after insert or update or delete on public.cohort_memberships
  for each row execute function private.audit_cohort_change();
create trigger cohort_sessions_audit_change after insert or update or delete on public.cohort_sessions
  for each row execute function private.audit_cohort_change();
create trigger cohort_session_attendance_audit_change after insert or update or delete on public.cohort_session_attendance
  for each row execute function private.audit_cohort_change();

alter table public.cohorts enable row level security;
alter table public.cohort_memberships enable row level security;
alter table public.cohort_sessions enable row level security;
alter table public.cohort_session_attendance enable row level security;

create policy cohorts_scope_select on public.cohorts for select to authenticated
  using (
    (select private.can_manage_cohort(id))
    or exists (
      select 1 from public.cohort_memberships membership
      where membership.cohort_id = cohorts.id
        and membership.student_id = (select auth.uid())
        and membership.membership_status = 'active'
    )
  );
create policy cohorts_staff_insert on public.cohorts for insert to authenticated
  with check (
    (select private.current_role()) in ('admin', 'branch_head', 'head_coach', 'coach')
    and (select private.can_access_branch(branch_id))
    and created_by = (select auth.uid())
    and updated_by = (select auth.uid())
  );
create policy cohorts_staff_update on public.cohorts for update to authenticated
  using ((select private.can_manage_cohort(id)))
  with check (
    (select private.can_access_branch(branch_id))
    and updated_by = (select auth.uid())
  );
create policy cohorts_staff_delete on public.cohorts for delete to authenticated
  using ((select private.can_manage_cohort(id)));

create policy cohort_memberships_scope_select on public.cohort_memberships for select to authenticated
  using (
    student_id = (select auth.uid())
    or (select private.can_manage_cohort(cohort_id))
  );
create policy cohort_memberships_staff_insert on public.cohort_memberships for insert to authenticated
  with check (
    (select private.can_manage_cohort(cohort_id))
    and (select private.can_staff_edit_student(student_id))
    and created_by = (select auth.uid())
    and updated_by = (select auth.uid())
  );
create policy cohort_memberships_staff_update on public.cohort_memberships for update to authenticated
  using ((select private.can_manage_cohort(cohort_id)))
  with check (
    (select private.can_manage_cohort(cohort_id))
    and (select private.can_staff_edit_student(student_id))
    and updated_by = (select auth.uid())
  );
create policy cohort_memberships_staff_delete on public.cohort_memberships for delete to authenticated
  using ((select private.can_manage_cohort(cohort_id)));

create policy cohort_sessions_scope_select on public.cohort_sessions for select to authenticated
  using (
    (select private.can_manage_cohort(cohort_id))
    or exists (
      select 1 from public.cohort_memberships membership
      where membership.cohort_id = cohort_sessions.cohort_id
        and membership.student_id = (select auth.uid())
        and membership.membership_status = 'active'
    )
  );
create policy cohort_sessions_staff_insert on public.cohort_sessions for insert to authenticated
  with check (
    (select private.can_manage_cohort(cohort_id))
    and created_by = (select auth.uid())
    and updated_by = (select auth.uid())
  );
create policy cohort_sessions_staff_update on public.cohort_sessions for update to authenticated
  using ((select private.can_manage_cohort(cohort_id)))
  with check (
    (select private.can_manage_cohort(cohort_id))
    and updated_by = (select auth.uid())
  );
create policy cohort_sessions_staff_delete on public.cohort_sessions for delete to authenticated
  using ((select private.can_manage_cohort(cohort_id)));

create policy cohort_attendance_scope_select on public.cohort_session_attendance for select to authenticated
  using (
    student_id = (select auth.uid())
    or exists (
      select 1 from public.cohort_sessions session
      where session.id = cohort_session_attendance.session_id
        and (select private.can_manage_cohort(session.cohort_id))
    )
  );
create policy cohort_attendance_staff_insert on public.cohort_session_attendance for insert to authenticated
  with check (
    recorded_by = (select auth.uid())
    and exists (
      select 1 from public.cohort_sessions session
      where session.id = cohort_session_attendance.session_id
        and (select private.can_manage_cohort(session.cohort_id))
    )
  );
create policy cohort_attendance_staff_update on public.cohort_session_attendance for update to authenticated
  using (exists (
    select 1 from public.cohort_sessions session
    where session.id = cohort_session_attendance.session_id
      and (select private.can_manage_cohort(session.cohort_id))
  ))
  with check (
    recorded_by = (select auth.uid())
    and exists (
      select 1 from public.cohort_sessions session
      where session.id = cohort_session_attendance.session_id
        and (select private.can_manage_cohort(session.cohort_id))
    )
  );
create policy cohort_attendance_staff_delete on public.cohort_session_attendance for delete to authenticated
  using (exists (
    select 1 from public.cohort_sessions session
    where session.id = cohort_session_attendance.session_id
      and (select private.can_manage_cohort(session.cohort_id))
  ));

revoke all on table public.cohorts from anon, authenticated;
revoke all on table public.cohort_memberships from anon, authenticated;
revoke all on table public.cohort_sessions from anon, authenticated;
revoke all on table public.cohort_session_attendance from anon, authenticated;
grant select, insert, update, delete on table public.cohorts to authenticated;
grant select, insert, update, delete on table public.cohort_memberships to authenticated;
grant select, insert, update, delete on table public.cohort_sessions to authenticated;
grant select, insert, update, delete on table public.cohort_session_attendance to authenticated;
grant select, insert, update, delete on table public.cohorts to service_role;
grant select, insert, update, delete on table public.cohort_memberships to service_role;
grant select, insert, update, delete on table public.cohort_sessions to service_role;
grant select, insert, update, delete on table public.cohort_session_attendance to service_role;

-- Create a practical default cohort per branch and place every existing student.
do $$
declare
  branch_record record;
  default_cohort_id uuid;
  actor_id uuid;
begin
  for branch_record in select id, created_by from public.branches loop
    actor_id := coalesce(
      branch_record.created_by,
      (select id from public.profiles where role = 'admin' and account_status = 'active' order by created_at limit 1)
    );
    default_cohort_id := private.ensure_default_cohort(branch_record.id, actor_id);

    insert into public.cohort_memberships (
      cohort_id, student_id, membership_status, joined_on, created_by, updated_by
    )
    select
      default_cohort_id, student.id, 'active', current_date,
      coalesce(student.approved_by, student.created_by, actor_id, student.id),
      coalesce(student.approved_by, student.created_by, actor_id, student.id)
    from public.profiles student
    where student.role = 'student'
      and student.branch_id = branch_record.id
      and not exists (
        select 1 from public.cohort_memberships existing
        where existing.student_id = student.id
          and existing.membership_status = 'active'
      );
  end loop;
end;
$$;

create trigger profiles_sync_default_cohort
  after insert or update of role, branch_id on public.profiles
  for each row execute function private.sync_student_default_cohort();

create or replace function public.set_primary_career_path(
  target_path_id uuid,
  target_focus smallint
)
returns public.career_paths
language plpgsql
security definer
set search_path = ''
as $$
declare
  target_path public.career_paths%rowtype;
  saved_path public.career_paths%rowtype;
  actor_id uuid := (select auth.uid());
  actor_role text := (select private.current_role());
begin
  if target_focus not between 50 and 90 then
    raise exception 'Primary focus must be between 50 and 90 percent.';
  end if;

  select * into target_path from public.career_paths where id = target_path_id;
  if not found then raise exception 'Career option not found.'; end if;
  if not (select private.can_edit_student(target_path.user_id)) then
    raise exception 'You cannot change this student career plan.';
  end if;
  if target_path.status in ('ruled-out', 'paused') then
    raise exception 'A paused or ruled-out option cannot be the primary direction.';
  end if;
  if actor_role = 'student' and coalesce(target_path.created_by, target_path.user_id) is distinct from actor_id then
    raise exception 'Ask your Coach to change the primary direction created by the coaching team.';
  end if;
  if actor_role = 'student' and exists (
    select 1 from public.career_paths existing
    where existing.user_id = target_path.user_id
      and existing.option_type = 'primary'
      and existing.id <> target_path_id
      and coalesce(existing.created_by, existing.user_id) is distinct from actor_id
  ) then
    raise exception 'Ask your Coach to replace the current primary direction.';
  end if;

  update public.career_paths
  set
    option_type = 'alternative',
    focus_percentage = least(20, 100 - target_focus),
    updated_by = actor_id
  where user_id = target_path.user_id
    and option_type = 'primary'
    and id <> target_path_id;

  update public.career_paths
  set option_type = 'primary', focus_percentage = target_focus, updated_by = actor_id
  where id = target_path_id
  returning * into saved_path;

  return saved_path;
end;
$$;

create or replace function public.move_student_to_cohort(
  target_student_id uuid,
  target_cohort_id uuid
)
returns public.cohort_memberships
language plpgsql
security definer
set search_path = ''
as $$
declare
  actor_id uuid := (select auth.uid());
  target_cohort public.cohorts%rowtype;
  target_student public.profiles%rowtype;
  existing_membership public.cohort_memberships%rowtype;
  saved_membership public.cohort_memberships%rowtype;
begin
  if not (select private.can_staff_edit_student(target_student_id)) then
    raise exception 'You cannot manage this student.';
  end if;
  if not (select private.can_manage_cohort(target_cohort_id)) then
    raise exception 'You cannot manage this cohort.';
  end if;

  select * into target_cohort from public.cohorts where id = target_cohort_id;
  select * into target_student from public.profiles where id = target_student_id;
  if target_student.role is distinct from 'student' then
    raise exception 'Only a student can be placed in a cohort.';
  end if;
  if target_student.branch_id is distinct from target_cohort.branch_id then
    raise exception 'The student and cohort must belong to the same branch.';
  end if;

  select * into existing_membership
  from public.cohort_memberships
  where student_id = target_student_id and membership_status = 'active'
  for update;

  if found and existing_membership.cohort_id = target_cohort_id then
    return existing_membership;
  end if;

  if existing_membership.id is not null then
    update public.cohort_memberships
    set membership_status = 'moved', left_on = current_date, updated_by = actor_id
    where id = existing_membership.id;
  end if;

  insert into public.cohort_memberships (
    cohort_id, student_id, membership_status, joined_on, created_by, updated_by
  ) values (
    target_cohort_id, target_student_id, 'active', current_date, actor_id, actor_id
  ) returning * into saved_membership;

  return saved_membership;
end;
$$;

create or replace function private.protect_cohort_ownership()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if tg_table_name = 'cohorts' and (
    new.created_by is distinct from old.created_by or new.created_at is distinct from old.created_at
  ) then raise exception 'Cohort ownership cannot be changed.';
  elsif tg_table_name = 'cohort_memberships' and (
    new.created_by is distinct from old.created_by or new.created_at is distinct from old.created_at
  ) then raise exception 'Membership ownership cannot be changed.';
  elsif tg_table_name = 'cohort_sessions' and (
    new.created_by is distinct from old.created_by or new.created_at is distinct from old.created_at
    or new.announced_at is distinct from old.announced_at
  ) then raise exception 'Session announcement ownership cannot be changed.';
  elsif tg_table_name = 'cohort_session_attendance' and new.created_at is distinct from old.created_at then
    raise exception 'Attendance creation time cannot be changed.';
  end if;
  return new;
end;
$$;

revoke all on function public.set_primary_career_path(uuid, smallint) from public, anon;
revoke all on function public.move_student_to_cohort(uuid, uuid) from public, anon;
revoke all on function private.protect_cohort_ownership() from public, anon, authenticated;
grant execute on function public.set_primary_career_path(uuid, smallint) to authenticated, service_role;
grant execute on function public.move_student_to_cohort(uuid, uuid) to authenticated, service_role;

create trigger cohorts_protect_ownership before update on public.cohorts
  for each row execute function private.protect_cohort_ownership();
create trigger cohort_memberships_protect_ownership before update on public.cohort_memberships
  for each row execute function private.protect_cohort_ownership();
create trigger cohort_sessions_protect_ownership before update on public.cohort_sessions
  for each row execute function private.protect_cohort_ownership();
create trigger cohort_attendance_protect_ownership before update on public.cohort_session_attendance
  for each row execute function private.protect_cohort_ownership();

commit;
