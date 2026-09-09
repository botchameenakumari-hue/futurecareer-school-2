begin;

-- Career planning no longer treats choices as a time budget. Keep the legacy
-- column for old integrations, but make it optional and remove all allocation
-- validation so multiple primary and secondary directions can be saved.
alter table public.career_paths
  alter column focus_percentage drop not null,
  alter column focus_percentage set default null;

alter table public.career_paths
  drop constraint if exists career_paths_focus_percentage_check;

drop trigger if exists career_paths_validate_focus_budget on public.career_paths;
drop function if exists private.validate_career_focus_budget();

commit;
