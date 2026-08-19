begin;

-- Paused options consume no current effort. Existing allocations are normalised
-- before the write-time guard is installed.
update public.career_paths
set focus_percentage = 0
where status in ('paused', 'ruled-out')
  and focus_percentage <> 0;

with focus_totals as (
  select
    user_id,
    coalesce(max(focus_percentage) filter (where option_type = 'primary'), 0) as primary_focus,
    coalesce(sum(focus_percentage) filter (where option_type = 'alternative'), 0) as alternative_focus
  from public.career_paths
  where status not in ('paused', 'ruled-out')
  group by user_id
), scaled as (
  select
    path.id,
    floor(
      path.focus_percentage::numeric
      * greatest(0, 100 - totals.primary_focus)::numeric
      / nullif(totals.alternative_focus, 0)
    )::smallint as focus_percentage
  from public.career_paths path
  join focus_totals totals on totals.user_id = path.user_id
  where path.option_type = 'alternative'
    and path.status not in ('paused', 'ruled-out')
    and totals.primary_focus + totals.alternative_focus > 100
)
update public.career_paths path
set focus_percentage = scaled.focus_percentage
from scaled
where scaled.id = path.id;

create or replace function private.validate_career_focus_budget()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  other_focus integer;
begin
  perform pg_advisory_xact_lock(hashtextextended(new.user_id::text, 0));

  if new.status in ('paused', 'ruled-out') then
    new.focus_percentage := 0;
  end if;

  if new.status not in ('paused', 'ruled-out') then
    select coalesce(sum(path.focus_percentage), 0)
    into other_focus
    from public.career_paths path
    where path.user_id = new.user_id
      and path.id is distinct from new.id
      and path.status not in ('paused', 'ruled-out');

    if other_focus + new.focus_percentage > 100 then
      raise exception 'Career focus exceeds 100%%. Reduce another option before saving.'
        using errcode = '23514';
    end if;
  end if;

  return new;
end;
$$;

create or replace function private.protect_primary_career_delete()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  perform pg_advisory_xact_lock(hashtextextended(old.user_id::text, 0));
  if old.option_type = 'primary' and exists (
    select 1 from public.career_paths path
    where path.user_id = old.user_id and path.id <> old.id
  ) then
    raise exception 'Choose another primary direction before removing this one.'
      using errcode = '23514';
  end if;
  return old;
end;
$$;

drop trigger if exists career_paths_validate_focus_budget on public.career_paths;
create trigger career_paths_validate_focus_budget
  before insert or update of user_id, option_type, focus_percentage, status
  on public.career_paths
  for each row execute function private.validate_career_focus_budget();

drop trigger if exists career_paths_protect_primary_delete on public.career_paths;
create trigger career_paths_protect_primary_delete
  before delete on public.career_paths
  for each row execute function private.protect_primary_career_delete();

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
  alternative_budget smallint;
  alternative_total integer;
begin
  if target_focus not between 50 and 90 then
    raise exception 'Primary focus must be between 50 and 90 percent.';
  end if;

  select * into target_path from public.career_paths where id = target_path_id;
  if not found then raise exception 'Career option not found.'; end if;
  perform pg_advisory_xact_lock(hashtextextended(target_path.user_id::text, 0));

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

  alternative_budget := 100 - target_focus;

  update public.career_paths
  set
    option_type = 'alternative',
    focus_percentage = least(20, alternative_budget),
    updated_by = actor_id
  where user_id = target_path.user_id
    and option_type = 'primary'
    and id <> target_path_id;

  select coalesce(sum(focus_percentage), 0)
  into alternative_total
  from public.career_paths
  where user_id = target_path.user_id
    and id <> target_path_id
    and status not in ('paused', 'ruled-out');

  if alternative_total > alternative_budget and alternative_total > 0 then
    update public.career_paths
    set
      focus_percentage = floor(
        focus_percentage::numeric * alternative_budget::numeric / alternative_total
      )::smallint,
      updated_by = actor_id
    where user_id = target_path.user_id
      and id <> target_path_id
      and status not in ('paused', 'ruled-out');
  end if;

  update public.career_paths
  set option_type = 'primary', focus_percentage = target_focus, updated_by = actor_id
  where id = target_path_id
  returning * into saved_path;

  return saved_path;
end;
$$;

revoke all on function private.validate_career_focus_budget() from public, anon, authenticated;
revoke all on function private.protect_primary_career_delete() from public, anon, authenticated;
revoke all on function public.set_primary_career_path(uuid, smallint) from public, anon;
grant execute on function public.set_primary_career_path(uuid, smallint) to authenticated, service_role;

commit;
