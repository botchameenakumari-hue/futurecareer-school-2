create or replace function private.prevent_duplicate_skill_review()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if exists (
    select 1 from public.skill_reviews existing
    where existing.skill_id = new.skill_id
      and existing.student_id = new.student_id
      and existing.coach_id is not distinct from new.coach_id
      and existing.id <> new.id
  ) then
    raise exception 'A review already exists for this skill and reviewer. Update that review instead.' using errcode = '23505';
  end if;
  return new;
end;
$$;

drop trigger if exists prevent_duplicate_skill_review on public.skill_reviews;
create trigger prevent_duplicate_skill_review
before insert on public.skill_reviews
for each row execute function private.prevent_duplicate_skill_review();

revoke execute on function private.prevent_duplicate_skill_review() from public, anon, authenticated;
