-- Keep student feedback and satisfaction student-owned. Staff can add or
-- update the coach portion of a review, but cannot rewrite the student's
-- reflection or rating through a direct table request.
create or replace function private.validate_skill_review()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  skill_student uuid;
  viewer_role text;
begin
  select student_id into skill_student from public.student_skills where id = new.skill_id;
  if skill_student is null or skill_student is distinct from new.student_id then
    raise exception 'A skill review must belong to the skill student.';
  end if;

  viewer_role := (select private.current_role());
  if new.coach_id is not null and not exists (
    select 1 from public.profiles p
    where p.id = new.coach_id and p.account_status = 'active'
      and p.role in ('admin', 'branch_head', 'head_coach', 'coach')
  ) then
    raise exception 'A skill review coach must be active staff.';
  end if;

  if tg_op = 'UPDATE' and (new.skill_id is distinct from old.skill_id or new.student_id is distinct from old.student_id) then
    raise exception 'A skill review cannot be moved to another skill or student.';
  end if;

  if viewer_role = 'student' then
    if new.student_id is distinct from (select auth.uid()) then
      raise exception 'Students can only update their own skill feedback.';
    end if;
    if tg_op = 'INSERT' then
      if new.coach_id is not null
        or coalesce(new.coach_feedback, '') <> ''
        or new.coach_reviewed_on is not null
        or new.coach_satisfaction is not null
        or coalesce(new.next_focus, '') <> '' then
        raise exception 'Students can only create student-owned skill feedback.';
      end if;
    elsif new.coach_id is distinct from old.coach_id
      or new.coach_reviewed_on is distinct from old.coach_reviewed_on
      or new.coach_feedback is distinct from old.coach_feedback
      or new.coach_satisfaction is distinct from old.coach_satisfaction
      or new.next_focus is distinct from old.next_focus then
      raise exception 'Students cannot edit coach-owned skill review fields.';
    end if;
    new.student_feedback_on := current_date;
  elsif viewer_role in ('admin', 'branch_head', 'head_coach', 'coach') then
    if tg_op = 'INSERT' and (coalesce(new.student_feedback, '') <> '' or new.student_satisfaction is not null or new.student_feedback_on is not null) then
      raise exception 'Staff cannot create student-owned skill feedback.';
    end if;
    if tg_op = 'UPDATE' and (
      new.student_feedback is distinct from old.student_feedback
      or new.student_satisfaction is distinct from old.student_satisfaction
      or new.student_feedback_on is distinct from old.student_feedback_on
    ) then
      raise exception 'Student feedback is owned by the student.';
    end if;
  end if;

  new.updated_at := timezone('utc', now());
  return new;
end;
$$;

drop trigger if exists validate_skill_review on public.skill_reviews;
create trigger validate_skill_review
before insert or update on public.skill_reviews
for each row execute function private.validate_skill_review();
