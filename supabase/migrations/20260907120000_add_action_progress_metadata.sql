-- Preserve the existing action model while storing the progression metadata
-- that the dashboard already displays for suggested actions.
alter table public.action_items
  add column if not exists preset_key text
    check (preset_key is null or length(preset_key) <= 120),
  add column if not exists milestone text
    check (milestone is null or milestone in ('Decide', 'Start', 'Build', 'Publish or apply', 'Connect', 'Evaluate')),
  add column if not exists estimated_minutes smallint
    check (estimated_minutes is null or estimated_minutes between 5 and 10080),
  add column if not exists evidence_hint text
    check (evidence_hint is null or length(evidence_hint) <= 1000),
  add column if not exists career_path_id uuid references public.career_paths(id) on delete set null,
  add column if not exists skill_id uuid references public.student_skills(id) on delete set null;

create index if not exists action_items_preset_key_idx
  on public.action_items (preset_key) where preset_key is not null;
create index if not exists action_items_career_path_idx
  on public.action_items (career_path_id) where career_path_id is not null;
create index if not exists action_items_skill_idx
  on public.action_items (skill_id) where skill_id is not null;
