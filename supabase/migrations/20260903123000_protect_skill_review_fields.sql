-- Keep coach observations and student reflections separate. RLS controls who
-- may reach a review; this trigger controls which side of the shared row they
-- are allowed to change.
create or replace function private.protect_skill_review_fields()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  actor_role text := (select private.current_role());
begin
  if tg_op = 'INSERT' then
    if actor_role = 'student' and auth.uid() = new.student_id then
      if new.coach_id is not null or coalesce(new.coach_feedback, '') <> '' or new.coach_satisfaction is not null or new.coach_reviewed_on is not null or coalesce(new.next_focus, '') <> '' then
        raise exception 'Students can only create their own satisfaction and reflection.' using errcode = '42501';
      end if;
    elsif actor_role in ('admin', 'branch_head', 'head_coach', 'coach') and new.coach_id = auth.uid() then
      if coalesce(new.student_feedback, '') <> '' or new.student_satisfaction is not null then
        raise exception 'Coaches cannot create a student satisfaction or reflection.' using errcode = '42501';
      end if;
    end if;
    return new;
  end if;
  if actor_role = 'student' and auth.uid() = new.student_id then
    if new.coach_id is not null
       or coalesce(new.coach_feedback, '') <> coalesce(old.coach_feedback, '')
       or new.coach_satisfaction is distinct from old.coach_satisfaction
       or new.coach_reviewed_on is distinct from old.coach_reviewed_on
       or coalesce(new.next_focus, '') <> coalesce(old.next_focus, '') then
      raise exception 'Students can only update their own satisfaction and reflection.' using errcode = '42501';
    end if;
  elsif actor_role in ('admin', 'branch_head', 'head_coach', 'coach')
        and new.coach_id = auth.uid() then
    if coalesce(new.student_feedback, '') <> coalesce(old.student_feedback, '')
       or new.student_satisfaction is distinct from old.student_satisfaction then
      raise exception 'Coaches cannot change a student satisfaction or reflection.' using errcode = '42501';
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists protect_skill_review_fields on public.skill_reviews;
create trigger protect_skill_review_fields
before insert or update on public.skill_reviews
for each row execute function private.protect_skill_review_fields();

revoke execute on function private.protect_skill_review_fields() from public, anon, authenticated;
