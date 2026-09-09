begin;

create or replace function public.move_student_to_cohort(
  target_student_id uuid,
  target_cohort_id uuid
)
returns public.cohort_memberships
language plpgsql
security definer
set search_path = ''
as $$
declare
  actor_id uuid := (select auth.uid());
  target_cohort public.cohorts%rowtype;
  target_student public.profiles%rowtype;
  existing_membership public.cohort_memberships%rowtype;
  saved_membership public.cohort_memberships%rowtype;
  active_members integer;
begin
  if not (select private.can_staff_edit_student(target_student_id)) then
    raise exception 'You cannot manage this student.';
  end if;
  if not (select private.can_manage_cohort(target_cohort_id)) then
    raise exception 'You cannot manage this cohort.';
  end if;

  select * into target_cohort from public.cohorts where id = target_cohort_id;
  select * into target_student from public.profiles where id = target_student_id;
  if target_student.role is distinct from 'student' then
    raise exception 'Only a student can be placed in a cohort.';
  end if;
  if target_student.branch_id is distinct from target_cohort.branch_id then
    raise exception 'The student and cohort must belong to the same branch.';
  end if;
  if target_cohort.status in ('completed', 'archived') then
    raise exception 'Completed or archived cohorts cannot accept new students.';
  end if;

  select * into existing_membership
  from public.cohort_memberships
  where student_id = target_student_id and membership_status = 'active'
  for update;

  if found and existing_membership.cohort_id = target_cohort_id then
    return existing_membership;
  end if;

  perform pg_advisory_xact_lock(hashtextextended(target_cohort_id::text, 0));
  select count(*)::integer into active_members
  from public.cohort_memberships
  where cohort_id = target_cohort_id and membership_status = 'active';
  if active_members >= target_cohort.capacity then
    raise exception 'This cohort is at capacity. Increase capacity or choose another cohort.';
  end if;

  if existing_membership.id is not null then
    update public.cohort_memberships
    set membership_status = 'moved', left_on = current_date, updated_by = actor_id
    where id = existing_membership.id;
  end if;

  insert into public.cohort_memberships (
    cohort_id, student_id, membership_status, joined_on, created_by, updated_by
  ) values (
    target_cohort_id, target_student_id, 'active', current_date, actor_id, actor_id
  ) returning * into saved_membership;

  return saved_membership;
end;
$$;

commit;
