begin;

-- Career directions are labels for a learner's plan, not a fixed time budget.
-- Remove the single-primary and percentage-allocation rules while retaining the
-- column as an internal legacy field for existing records and integrations.
set local lock_timeout = '5s';

drop trigger if exists career_paths_validate_focus_budget on public.career_paths;
drop trigger if exists career_paths_protect_primary_delete on public.career_paths;

drop index if exists public.career_paths_one_primary_per_student_idx;
drop index if exists public.career_paths_user_type_focus_idx;

alter table public.career_paths
  drop constraint if exists career_paths_focus_percentage_check,
  drop constraint if exists career_paths_primary_status_check;

alter table public.career_paths
  alter column focus_percentage set default 0,
  add constraint career_paths_focus_percentage_check
    check (focus_percentage between 0 and 100);

update public.career_paths
set focus_percentage = 0
where focus_percentage <> 0;

create index if not exists career_paths_user_type_updated_idx
  on public.career_paths (user_id, option_type, updated_at desc);

drop function if exists public.set_primary_career_path(uuid, smallint);
drop function if exists private.validate_career_focus_budget();
drop function if exists private.protect_primary_career_delete();

commit;
