begin;

-- Each student account owns a living coaching case.
create table public.student_cases (
  student_id uuid primary key references public.profiles(id) on delete cascade,
  coaching_stage text not null default 'intake'
    check (coaching_stage in ('intake', 'self-discovery', 'career-exploration', 'option-validation', 'decision', 'execution', 'follow-up')),
  case_status text not null default 'active'
    check (case_status in ('active', 'on-hold', 'completed')),
  priority text not null default 'standard'
    check (priority in ('standard', 'high', 'urgent')),
  goal_summary text not null default '' check (length(goal_summary) <= 2000),
  progress_note text not null default '' check (length(progress_note) <= 2000),
  decision_deadline date,
  next_review_at timestamptz,
  review_cadence_days smallint not null default 14
    check (review_cadence_days between 1 and 180),
  updated_by uuid references public.profiles(id) on delete set null,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table public.student_skills (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  skill_name text not null check (length(trim(skill_name)) between 2 and 120),
  category text not null default 'employability'
    check (category in ('technical', 'digital', 'communication', 'analytical', 'creative', 'leadership', 'domain', 'language', 'employability')),
  current_level smallint not null default 0 check (current_level between 0 and 4),
  target_level smallint not null default 2 check (target_level between 1 and 4),
  priority text not null default 'important'
    check (priority in ('core', 'important', 'useful')),
  status text not null default 'identified'
    check (status in ('identified', 'developing', 'demonstrated')),
  development_goal text not null default '' check (length(development_goal) <= 1200),
  created_by uuid not null references public.profiles(id) on delete restrict,
  updated_by uuid not null references public.profiles(id) on delete restrict,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create unique index student_skills_student_name_unique_idx
  on public.student_skills (student_id, lower(skill_name));
create index student_skills_student_priority_idx
  on public.student_skills (student_id, priority, status, updated_at desc);
create index student_skills_created_by_idx on public.student_skills (created_by);
create index student_skills_updated_by_idx on public.student_skills (updated_by);

create table public.skill_evidence (
  id uuid primary key default gen_random_uuid(),
  skill_id uuid not null references public.student_skills(id) on delete cascade,
  title text not null check (length(trim(title)) between 2 and 180),
  evidence_type text not null default 'work-sample'
    check (evidence_type in ('project', 'course', 'experience', 'certificate', 'feedback', 'work-sample')),
  description text not null default '' check (length(description) <= 3000),
  source_url text not null default '' check (length(source_url) <= 1000),
  observed_level smallint check (observed_level is null or observed_level between 0 and 4),
  evidence_date date not null default current_date,
  added_by uuid not null references public.profiles(id) on delete restrict,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create index skill_evidence_skill_date_idx
  on public.skill_evidence (skill_id, evidence_date desc, created_at desc);
create index skill_evidence_added_by_idx on public.skill_evidence (added_by);

create table public.coaching_sessions (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  facilitator_id uuid not null references public.profiles(id) on delete restrict,
  scheduled_at timestamptz not null,
  duration_minutes smallint not null default 45 check (duration_minutes between 15 and 240),
  session_type text not null default 'career-review'
    check (session_type in ('intake', 'career-review', 'skill-planning', 'option-research', 'decision', 'follow-up')),
  status text not null default 'scheduled'
    check (status in ('scheduled', 'completed', 'cancelled', 'no-show')),
  agenda text not null default '' check (length(agenda) <= 3000),
  student_summary text not null default '' check (length(student_summary) <= 5000),
  decisions text not null default '' check (length(decisions) <= 3000),
  created_by uuid not null references public.profiles(id) on delete restrict,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create index coaching_sessions_student_scheduled_idx
  on public.coaching_sessions (student_id, scheduled_at desc);
create index coaching_sessions_facilitator_scheduled_idx
  on public.coaching_sessions (facilitator_id, scheduled_at desc);
create index coaching_sessions_status_scheduled_idx
  on public.coaching_sessions (status, scheduled_at)
  where status = 'scheduled';
create index coaching_sessions_created_by_idx on public.coaching_sessions (created_by);

alter table public.career_paths
  drop constraint if exists career_paths_status_check;
alter table public.career_paths
  add constraint career_paths_status_check
    check (status in ('exploring', 'shortlisted', 'testing', 'selected', 'ruled-out', 'paused')),
  add column route_summary text not null default '' check (length(route_summary) <= 3000),
  add column entry_requirements text not null default '' check (length(entry_requirements) <= 3000),
  add column work_environment text not null default '' check (length(work_environment) <= 1200),
  add column confidence smallint check (confidence is null or confidence between 1 and 5),
  add column decision_deadline date,
  add column created_by uuid references public.profiles(id) on delete set null,
  add column updated_by uuid references public.profiles(id) on delete set null;

create index career_paths_user_status_updated_idx
  on public.career_paths (user_id, status, updated_at desc);
create index career_paths_created_by_idx on public.career_paths (created_by)
  where created_by is not null;
create index career_paths_updated_by_idx on public.career_paths (updated_by)
  where updated_by is not null;

alter table public.action_items
  add column details text not null default '' check (length(details) <= 2000),
  add column assigned_by uuid references public.profiles(id) on delete set null,
  add column session_id uuid references public.coaching_sessions(id) on delete set null,
  add column completed_at timestamptz;

create index action_items_user_due_open_idx
  on public.action_items (user_id, due_date, priority)
  where status <> 'done';
create index action_items_assigned_by_idx on public.action_items (assigned_by)
  where assigned_by is not null;
create index action_items_session_idx on public.action_items (session_id)
  where session_id is not null;
create index student_cases_status_review_idx
  on public.student_cases (case_status, priority, next_review_at);
create index student_cases_updated_by_idx on public.student_cases (updated_by)
  where updated_by is not null;

insert into public.student_cases (student_id, goal_summary, updated_by)
select id, target_outcome, coalesce(approved_by, created_by, id)
from public.profiles
where role = 'student'
on conflict (student_id) do nothing;

create or replace function private.validate_student_record()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  student_role text;
  facilitator_role text;
begin
  select role into student_role from public.profiles where id = new.student_id;
  if student_role is distinct from 'student' then
    raise exception 'Coaching records can only be attached to student profiles.';
  end if;

  if tg_table_name = 'coaching_sessions' then
    select role into facilitator_role
    from public.profiles
    where id = new.facilitator_id and account_status = 'active';
    if facilitator_role is null or facilitator_role not in ('admin', 'branch_head', 'head_coach', 'coach') then
      raise exception 'A coaching session requires an active staff facilitator.';
    end if;
  end if;
  return new;
end;
$$;

create or replace function private.create_student_case_on_profile()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if new.role = 'student' then
    insert into public.student_cases (student_id, goal_summary, updated_by)
    values (new.id, new.target_outcome, coalesce(new.approved_by, new.created_by, new.id))
    on conflict (student_id) do nothing;
  end if;
  return new;
end;
$$;

create or replace function private.sync_action_completion()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  if new.status = 'done' then
    if tg_op = 'INSERT' then
      new.completed_at = timezone('utc', now());
    elsif old.status is distinct from 'done' or new.completed_at is null then
      new.completed_at = timezone('utc', now());
    end if;
  elsif new.status <> 'done' then
    new.completed_at = null;
  end if;
  return new;
end;
$$;

create or replace function private.audit_coaching_change()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  payload jsonb;
  target_student_id uuid;
  target_entity_id uuid;
  target_branch_id uuid;
  actor_user_id uuid;
begin
  payload := case when tg_op = 'DELETE' then to_jsonb(old) else to_jsonb(new) end;
  target_student_id := coalesce(
    nullif(payload ->> 'student_id', '')::uuid,
    nullif(payload ->> 'user_id', '')::uuid
  );
  if target_student_id is null and tg_table_name = 'skill_evidence' then
    select student_id into target_student_id
    from public.student_skills
    where id = nullif(payload ->> 'skill_id', '')::uuid;
  end if;
  target_entity_id := coalesce(nullif(payload ->> 'id', '')::uuid, target_student_id);
  actor_user_id := coalesce(
    (select auth.uid()),
    nullif(payload ->> 'updated_by', '')::uuid,
    nullif(payload ->> 'created_by', '')::uuid,
    nullif(payload ->> 'assigned_by', '')::uuid,
    nullif(payload ->> 'added_by', '')::uuid
  );
  select branch_id into target_branch_id from public.profiles where id = target_student_id;
  insert into public.audit_events (
    actor_id, action, target_user_id, branch_id, entity_type, entity_id, details
  ) values (
    actor_user_id,
    'coaching_' || lower(tg_op),
    target_student_id,
    target_branch_id,
    tg_table_name,
    target_entity_id,
    jsonb_strip_nulls(jsonb_build_object(
      'status', payload ->> 'status',
      'title', coalesce(payload ->> 'title', payload ->> 'skill_name'),
      'coaching_stage', payload ->> 'coaching_stage'
    ))
  );
  return case when tg_op = 'DELETE' then old else new end;
end;
$$;

revoke all on function private.validate_student_record() from public, anon, authenticated;
revoke all on function private.create_student_case_on_profile() from public, anon, authenticated;
revoke all on function private.sync_action_completion() from public, anon, authenticated;
revoke all on function private.audit_coaching_change() from public, anon, authenticated;

create trigger profiles_create_student_case
  after insert or update of role on public.profiles
  for each row execute function private.create_student_case_on_profile();
create trigger student_cases_validate_student
  before insert or update on public.student_cases
  for each row execute function private.validate_student_record();
create trigger student_skills_validate_student
  before insert or update on public.student_skills
  for each row execute function private.validate_student_record();
create trigger coaching_sessions_validate_student
  before insert or update on public.coaching_sessions
  for each row execute function private.validate_student_record();

create trigger student_cases_set_updated_at before update on public.student_cases
  for each row execute function public.set_updated_at();
create trigger student_skills_set_updated_at before update on public.student_skills
  for each row execute function public.set_updated_at();
create trigger skill_evidence_set_updated_at before update on public.skill_evidence
  for each row execute function public.set_updated_at();
create trigger coaching_sessions_set_updated_at before update on public.coaching_sessions
  for each row execute function public.set_updated_at();
create trigger career_paths_set_updated_at before update on public.career_paths
  for each row execute function public.set_updated_at();
create trigger action_items_set_updated_at before update on public.action_items
  for each row execute function public.set_updated_at();
create trigger action_items_sync_completion before insert or update of status on public.action_items
  for each row execute function private.sync_action_completion();

create trigger student_cases_audit_change after insert or update on public.student_cases
  for each row execute function private.audit_coaching_change();
create trigger student_skills_audit_change after insert or update or delete on public.student_skills
  for each row execute function private.audit_coaching_change();
create trigger skill_evidence_audit_change after insert or update or delete on public.skill_evidence
  for each row execute function private.audit_coaching_change();
create trigger coaching_sessions_audit_change after insert or update or delete on public.coaching_sessions
  for each row execute function private.audit_coaching_change();
create trigger career_paths_audit_change after insert or update or delete on public.career_paths
  for each row execute function private.audit_coaching_change();
create trigger action_items_audit_change after insert or update or delete on public.action_items
  for each row execute function private.audit_coaching_change();

alter table public.student_cases enable row level security;
alter table public.student_skills enable row level security;
alter table public.skill_evidence enable row level security;
alter table public.coaching_sessions enable row level security;

create policy student_cases_scope_select on public.student_cases for select to authenticated
  using ((select private.can_access_user(student_id)));
create policy student_cases_staff_insert on public.student_cases for insert to authenticated
  with check (
    (select private.can_staff_edit_student(student_id))
    and updated_by = (select auth.uid())
  );
create policy student_cases_staff_update on public.student_cases for update to authenticated
  using ((select private.can_staff_edit_student(student_id)))
  with check (
    (select private.can_staff_edit_student(student_id))
    and updated_by = (select auth.uid())
  );

create policy student_skills_scope_select on public.student_skills for select to authenticated
  using ((select private.can_access_user(student_id)));
create policy student_skills_scope_insert on public.student_skills for insert to authenticated
  with check (
    (select private.can_edit_student(student_id))
    and created_by = (select auth.uid())
    and updated_by = (select auth.uid())
  );
create policy student_skills_scope_update on public.student_skills for update to authenticated
  using ((select private.can_edit_student(student_id)))
  with check ((select private.can_edit_student(student_id)) and updated_by = (select auth.uid()));
create policy student_skills_scope_delete on public.student_skills for delete to authenticated
  using ((select private.can_edit_student(student_id)));

create policy skill_evidence_scope_select on public.skill_evidence for select to authenticated
  using (exists (
    select 1 from public.student_skills skill
    where skill.id = skill_evidence.skill_id
      and (select private.can_access_user(skill.student_id))
  ));
create policy skill_evidence_scope_insert on public.skill_evidence for insert to authenticated
  with check (
    added_by = (select auth.uid())
    and exists (
      select 1 from public.student_skills skill
      where skill.id = skill_evidence.skill_id
        and (select private.can_edit_student(skill.student_id))
    )
  );
create policy skill_evidence_author_update on public.skill_evidence for update to authenticated
  using (added_by = (select auth.uid()))
  with check (
    added_by = (select auth.uid())
    and exists (
      select 1 from public.student_skills skill
      where skill.id = skill_evidence.skill_id
        and (select private.can_edit_student(skill.student_id))
    )
  );
create policy skill_evidence_author_delete on public.skill_evidence for delete to authenticated
  using (added_by = (select auth.uid()));

create policy coaching_sessions_scope_select on public.coaching_sessions for select to authenticated
  using ((select private.can_access_user(student_id)));
create policy coaching_sessions_staff_insert on public.coaching_sessions for insert to authenticated
  with check (created_by = (select auth.uid()) and (select private.can_staff_edit_student(student_id)));
create policy coaching_sessions_staff_update on public.coaching_sessions for update to authenticated
  using ((select private.can_staff_edit_student(student_id)))
  with check ((select private.can_staff_edit_student(student_id)));
create policy coaching_sessions_staff_delete on public.coaching_sessions for delete to authenticated
  using ((select private.can_staff_edit_student(student_id)));

revoke all on table public.student_cases from anon, authenticated;
revoke all on table public.student_skills from anon, authenticated;
revoke all on table public.skill_evidence from anon, authenticated;
revoke all on table public.coaching_sessions from anon, authenticated;
grant select, insert, update on table public.student_cases to authenticated;
grant select, insert, update, delete on table public.student_skills to authenticated;
grant select, insert, update, delete on table public.skill_evidence to authenticated;
grant select, insert, update, delete on table public.coaching_sessions to authenticated;
grant select, insert, update, delete on table public.student_cases to service_role;
grant select, insert, update, delete on table public.student_skills to service_role;
grant select, insert, update, delete on table public.skill_evidence to service_role;
grant select, insert, update, delete on table public.coaching_sessions to service_role;


-- Record ownership and scope are immutable from the browser.
create or replace function private.validate_coaching_ownership()
returns trigger
language plpgsql
security invoker
set search_path = ''
as $$
declare
  actor_role text;
  student_branch_id uuid;
  facilitator_branch_id uuid;
  facilitator_role text;
  facilitator_supervisor_id uuid;
begin
  select role into actor_role
  from public.profiles
  where id = (select auth.uid())
    and account_status = 'active'
    and must_change_password is false;

  if tg_op = 'UPDATE' then
    if new.created_at is distinct from old.created_at then
      raise exception 'Record creation time cannot be changed.';
    end if;

    if tg_table_name = 'student_cases' then
      if new.student_id is distinct from old.student_id then
        raise exception 'Case ownership cannot be changed.';
      end if;
    elsif tg_table_name = 'student_skills' then
      if new.student_id is distinct from old.student_id or new.created_by is distinct from old.created_by then
        raise exception 'Skill ownership cannot be changed.';
      end if;
    elsif tg_table_name = 'skill_evidence' then
      if new.skill_id is distinct from old.skill_id or new.added_by is distinct from old.added_by then
        raise exception 'Evidence ownership cannot be changed.';
      end if;
    elsif tg_table_name = 'coaching_sessions' then
      if new.student_id is distinct from old.student_id or new.created_by is distinct from old.created_by then
        raise exception 'Session ownership cannot be changed.';
      end if;
    elsif tg_table_name = 'career_paths' then
      if new.user_id is distinct from old.user_id or new.created_by is distinct from old.created_by then
        raise exception 'Career option ownership cannot be changed.';
      end if;
    elsif tg_table_name = 'action_items' then
      if new.user_id is distinct from old.user_id or new.assigned_by is distinct from old.assigned_by then
        raise exception 'Action ownership cannot be changed.';
      end if;
    end if;

    if tg_table_name = 'action_items' then
      if new.completed_at is distinct from old.completed_at and new.status is not distinct from old.status then
        raise exception 'Action completion time is controlled by its status.';
      end if;

      if actor_role = 'student'
        and (
          new.title is distinct from old.title
          or new.category is distinct from old.category
          or new.priority is distinct from old.priority
          or new.due_date is distinct from old.due_date
          or new.details is distinct from old.details
          or new.session_id is distinct from old.session_id
          or new.sort_order is distinct from old.sort_order
        ) then
        raise exception 'Students can update the completion status of assigned actions, but not rewrite the assignment.';
      end if;
    end if;
  end if;

  if tg_table_name = 'coaching_sessions' then
    select branch_id into student_branch_id from public.profiles where id = new.student_id;
    select branch_id, role, supervisor_id
      into facilitator_branch_id, facilitator_role, facilitator_supervisor_id
    from public.profiles
    where id = new.facilitator_id;
    if actor_role <> 'admin' then
      if facilitator_branch_id is distinct from student_branch_id then
        raise exception 'The session facilitator must belong to the student branch.';
      elsif actor_role = 'head_coach'
        and new.facilitator_id is distinct from (select auth.uid())
        and not (
          facilitator_role = 'coach'
          and facilitator_supervisor_id = (select auth.uid())
        ) then
        raise exception 'A Head Coach can facilitate the session or assign one of their coaches.';
      elsif actor_role = 'coach'
        and new.facilitator_id is distinct from (select auth.uid()) then
        raise exception 'A Coach can only schedule themselves as facilitator.';
      end if;
    end if;
  end if;
  return new;
end;
$$;

revoke all on function private.validate_coaching_ownership() from public, anon, authenticated;

create trigger student_cases_validate_ownership
  before update on public.student_cases
  for each row execute function private.validate_coaching_ownership();
create trigger student_skills_validate_ownership
  before insert or update on public.student_skills
  for each row execute function private.validate_coaching_ownership();
create trigger skill_evidence_validate_ownership
  before insert or update on public.skill_evidence
  for each row execute function private.validate_coaching_ownership();
create trigger coaching_sessions_validate_ownership
  before insert or update on public.coaching_sessions
  for each row execute function private.validate_coaching_ownership();
create trigger career_paths_validate_ownership
  before insert or update on public.career_paths
  for each row execute function private.validate_coaching_ownership();
create trigger action_items_validate_ownership
  before insert or update on public.action_items
  for each row execute function private.validate_coaching_ownership();

drop policy if exists career_paths_hierarchy_insert on public.career_paths;
drop policy if exists career_paths_hierarchy_update on public.career_paths;
drop policy if exists career_paths_hierarchy_delete on public.career_paths;
create policy career_paths_coaching_insert on public.career_paths for insert to authenticated
  with check (
    (select private.can_edit_student(user_id))
    and created_by = (select auth.uid())
    and updated_by = (select auth.uid())
  );
create policy career_paths_coaching_update on public.career_paths for update to authenticated
  using (
    (select private.can_edit_student(user_id))
    and ((select private.current_role()) <> 'student' or coalesce(created_by, user_id) = (select auth.uid()))
  )
  with check (
    (select private.can_edit_student(user_id))
    and updated_by = (select auth.uid())
    and ((select private.current_role()) <> 'student' or coalesce(created_by, user_id) = (select auth.uid()))
  );
create policy career_paths_coaching_delete on public.career_paths for delete to authenticated
  using (
    (select private.can_edit_student(user_id))
    and ((select private.current_role()) <> 'student' or coalesce(created_by, user_id) = (select auth.uid()))
  );

drop policy if exists action_items_hierarchy_insert on public.action_items;
drop policy if exists action_items_hierarchy_delete on public.action_items;
create policy action_items_coaching_insert on public.action_items for insert to authenticated
  with check (
    (select private.can_edit_student(user_id))
    and assigned_by = (select auth.uid())
  );
create policy action_items_coaching_delete on public.action_items for delete to authenticated
  using (
    (select private.can_edit_student(user_id))
    and ((select private.current_role()) <> 'student' or coalesce(assigned_by, user_id) = (select auth.uid()))
  );

drop policy if exists student_skills_scope_update on public.student_skills;
drop policy if exists student_skills_scope_delete on public.student_skills;
create policy student_skills_scope_update on public.student_skills for update to authenticated
  using (
    (select private.can_edit_student(student_id))
    and ((select private.current_role()) <> 'student' or created_by = (select auth.uid()))
  )
  with check (
    (select private.can_edit_student(student_id))
    and updated_by = (select auth.uid())
    and ((select private.current_role()) <> 'student' or created_by = (select auth.uid()))
  );
create policy student_skills_scope_delete on public.student_skills for delete to authenticated
  using (
    (select private.can_edit_student(student_id))
    and ((select private.current_role()) <> 'student' or created_by = (select auth.uid()))
  );

create view public.student_case_dashboard
with (security_invoker = true)
as
select
  student.id as student_id,
  student.full_name,
  student.email,
  student.branch_id,
  student.supervisor_id,
  student.stage as education_stage,
  student.target_outcome,
  coalesce(case_record.coaching_stage, 'intake') as coaching_stage,
  coalesce(case_record.case_status, 'active') as case_status,
  coalesce(case_record.priority, 'standard') as priority,
  coalesce(case_record.goal_summary, student.target_outcome, '') as goal_summary,
  case_record.progress_note,
  case_record.decision_deadline,
  case_record.next_review_at,
  case_record.review_cadence_days,
  case_record.updated_at as case_updated_at,
  coalesce(career_stats.option_count, 0)::integer as career_option_count,
  coalesce(career_stats.shortlist_count, 0)::integer as shortlist_count,
  career_stats.selected_option,
  coalesce(action_stats.open_count, 0)::integer as open_action_count,
  coalesce(action_stats.overdue_count, 0)::integer as overdue_action_count,
  action_stats.next_due_date,
  coalesce(skill_stats.skill_count, 0)::integer as skill_count,
  coalesce(skill_stats.core_gap_count, 0)::integer as core_skill_gap_count,
  session_stats.next_session_at,
  session_stats.last_session_at,
  case
    when constraints.student_id is null then 0
    else 10 * (
      (constraints.budget_range <> 'not-set')::integer
      + (constraints.available_hours_per_week is not null)::integer
      + (constraints.max_commute_minutes is not null)::integer
      + (constraints.willing_to_relocate is not null)::integer
      + (constraints.device_access <> 'not-set')::integer
      + (constraints.internet_access <> 'not-set')::integer
      + (constraints.family_expectations <> '')::integer
      + (constraints.education_timeline <> '')::integer
      + (constraints.risk_tolerance is not null)::integer
      + (cardinality(constraints.non_negotiables) > 0)::integer
    )
  end as context_score
from public.profiles student
left join public.student_cases case_record on case_record.student_id = student.id
left join public.student_constraints constraints on constraints.student_id = student.id
left join lateral (
  select count(*) as option_count,
    count(*) filter (where path.status in ('shortlisted', 'testing', 'selected')) as shortlist_count,
    max(path.title) filter (where path.status = 'selected') as selected_option
  from public.career_paths path where path.user_id = student.id
) career_stats on true
left join lateral (
  select count(*) filter (where item.status <> 'done') as open_count,
    count(*) filter (where item.status <> 'done' and item.due_date < current_date) as overdue_count,
    min(item.due_date) filter (where item.status <> 'done') as next_due_date
  from public.action_items item where item.user_id = student.id
) action_stats on true
left join lateral (
  select count(*) as skill_count,
    count(*) filter (where skill.priority = 'core' and skill.current_level < skill.target_level) as core_gap_count
  from public.student_skills skill where skill.student_id = student.id
) skill_stats on true
left join lateral (
  select min(session.scheduled_at) filter (where session.status = 'scheduled' and session.scheduled_at >= now()) as next_session_at,
    max(session.scheduled_at) filter (where session.status = 'completed') as last_session_at
  from public.coaching_sessions session where session.student_id = student.id
) session_stats on true
where student.role = 'student';

revoke all on table public.student_case_dashboard from anon, authenticated;
grant select on table public.student_case_dashboard to authenticated;
grant select on table public.student_case_dashboard to service_role;

commit;
