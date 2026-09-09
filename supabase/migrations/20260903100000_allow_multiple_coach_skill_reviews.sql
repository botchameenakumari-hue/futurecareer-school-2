-- Coach feedback is an observation history: more than one dated review is
-- useful and must not be rejected. Keep the single-row rule only for the
-- student's own reflection, which is edited in place by the student.
create or replace function private.prevent_duplicate_skill_review()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if new.coach_id is null and exists (
    select 1 from public.skill_reviews existing
    where existing.skill_id = new.skill_id
      and existing.student_id = new.student_id
      and existing.coach_id is null
      and existing.id <> new.id
  ) then
    raise exception 'A student reflection already exists for this skill. Update that reflection instead.' using errcode = '23505';
  end if;
  return new;
end;
$$;

drop trigger if exists prevent_duplicate_skill_review on public.skill_reviews;
create trigger prevent_duplicate_skill_review
before insert on public.skill_reviews
for each row execute function private.prevent_duplicate_skill_review();

revoke execute on function private.prevent_duplicate_skill_review() from public, anon, authenticated;
