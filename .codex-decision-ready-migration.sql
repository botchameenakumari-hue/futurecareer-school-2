begin;

alter table public.career_paths
  add column decision_signal text not null default 'needs-evidence'
    check (decision_signal in ('ready-to-pursue', 'promising-to-test', 'deliberate-alternative', 'needs-evidence', 'not-now')),
  add column evidence_strength text not null default 'none'
    check (evidence_strength in ('none', 'early', 'moderate', 'strong')),
  add column future_outlook text not null default 'uncertain'
    check (future_outlook in ('growing', 'evolving', 'stable', 'niche', 'uncertain')),
  add column review_question text not null default ''
    check (length(review_question) <= 300);

update public.career_paths
set
  decision_signal = case status
    when 'selected' then 'ready-to-pursue'
    when 'testing' then 'promising-to-test'
    when 'shortlisted' then 'deliberate-alternative'
    when 'paused' then 'not-now'
    when 'ruled-out' then 'not-now'
    else 'needs-evidence'
  end,
  evidence_strength = case
    when confidence >= 5 then 'strong'
    when confidence >= 3 then 'moderate'
    when confidence >= 1 then 'early'
    else 'none'
  end;

create index career_paths_user_decision_signal_idx
  on public.career_paths (user_id, decision_signal, updated_at desc);
create index career_paths_future_outlook_idx
  on public.career_paths (future_outlook, updated_at desc);

alter table public.student_skills
  add column preset_key text
    check (preset_key is null or length(preset_key) <= 120),
  add column skill_scope text not null default 'career-specific'
    check (skill_scope in ('foundation', 'career-specific', 'future-ready', 'employability', 'personal-effectiveness')),
  add column linked_career_path_id uuid references public.career_paths(id) on delete set null,
  add column practice_method text not null default ''
    check (length(practice_method) <= 1200),
  add column success_criteria text not null default ''
    check (length(success_criteria) <= 1200),
  add column review_date date;

update public.student_skills
set skill_scope = case
  when category = 'employability' then 'employability'
  when category in ('communication', 'analytical', 'language') then 'foundation'
  else 'career-specific'
end;

create index student_skills_linked_career_idx
  on public.student_skills (linked_career_path_id, priority, status)
  where linked_career_path_id is not null;
create index student_skills_scope_review_idx
  on public.student_skills (student_id, skill_scope, review_date, priority);
create index student_skills_preset_key_idx
  on public.student_skills (preset_key)
  where preset_key is not null;

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

  if tg_table_name = 'student_skills' and new.linked_career_path_id is not null and not exists (
    select 1
    from public.career_paths
    where id = new.linked_career_path_id
      and user_id = new.student_id
  ) then
    raise exception 'A skill can only be linked to this student career plan.';
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

revoke all on function private.validate_student_record() from public, anon, authenticated;

comment on column public.career_paths.decision_signal is 'Plain-language coaching decision derived from evidence, separate from primary or alternative focus.';
comment on column public.career_paths.evidence_strength is 'Strength of real-world evidence supporting the current career decision.';
comment on column public.student_skills.skill_scope is 'Roadmap layer: durable foundation, career-specific, future-ready, employability, or personal effectiveness.';
comment on column public.student_skills.linked_career_path_id is 'Optional career decision that this skill specifically supports.';

commit;
