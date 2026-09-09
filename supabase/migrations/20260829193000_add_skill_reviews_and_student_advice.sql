begin;

create table if not exists public.skill_reviews (
  id uuid primary key default gen_random_uuid(),
  skill_id uuid not null references public.student_skills(id) on delete cascade,
  student_id uuid not null references public.profiles(id) on delete cascade,
  coach_id uuid references public.profiles(id) on delete set null,
  coach_reviewed_on date,
  coach_feedback text not null default '' check (length(coach_feedback) <= 5000),
  coach_satisfaction smallint check (coach_satisfaction is null or coach_satisfaction between 1 and 5),
  student_feedback text not null default '' check (length(student_feedback) <= 3000),
  student_feedback_on date,
  student_satisfaction smallint check (student_satisfaction is null or student_satisfaction between 1 and 5),
  next_focus text not null default '' check (length(next_focus) <= 1200),
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now()),
  constraint skill_reviews_student_skill_match check (student_id is not null)
);

create index if not exists skill_reviews_skill_date_idx
  on public.skill_reviews (skill_id, updated_at desc);
create index if not exists skill_reviews_student_date_idx
  on public.skill_reviews (student_id, updated_at desc);

create table if not exists public.student_advice (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  cohort_id uuid references public.cohorts(id) on delete set null,
  author_id uuid not null references public.profiles(id) on delete restrict,
  advice_date date not null default current_date,
  title text not null check (length(trim(title)) between 2 and 180),
  advice text not null check (length(trim(advice)) between 2 and 5000),
  due_date date,
  status text not null default 'open' check (status in ('open', 'in-progress', 'done', 'archived')),
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create index if not exists student_advice_student_date_idx
  on public.student_advice (student_id, advice_date desc, created_at desc);
create index if not exists student_advice_cohort_date_idx
  on public.student_advice (cohort_id, advice_date desc)
  where cohort_id is not null;

create or replace function private.validate_skill_review()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare skill_student uuid;
begin
  select student_id into skill_student from public.student_skills where id = new.skill_id;
  if skill_student is null or skill_student is distinct from new.student_id then
    raise exception 'A skill review must belong to the skill student.';
  end if;
  if new.coach_id is not null and not exists (
    select 1 from public.profiles p
    where p.id = new.coach_id and p.account_status = 'active'
      and p.role in ('admin', 'branch_head', 'head_coach', 'coach')
  ) then
    raise exception 'A skill review coach must be active staff.';
  end if;
  if (select private.current_role()) = 'student' then
    if new.student_id is distinct from (select auth.uid()) then
      raise exception 'Students can only update their own skill feedback.';
    end if;
    if new.coach_id is distinct from old.coach_id
      or new.coach_reviewed_on is distinct from old.coach_reviewed_on
      or new.coach_feedback is distinct from old.coach_feedback
      or new.coach_satisfaction is distinct from old.coach_satisfaction
      or new.next_focus is distinct from old.next_focus then
      raise exception 'Students cannot edit coach-owned skill review fields.';
    end if;
    new.student_feedback_on := current_date;
  end if;
  new.updated_at := timezone('utc', now());
  return new;
end;
$$;

drop trigger if exists validate_skill_review on public.skill_reviews;
create trigger validate_skill_review
before insert or update on public.skill_reviews
for each row execute function private.validate_skill_review();

create or replace function private.validate_student_advice()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not exists (select 1 from public.profiles where id = new.student_id and role = 'student') then
    raise exception 'Advice can only be attached to a student.';
  end if;
  if not exists (select 1 from public.profiles where id = new.author_id and account_status = 'active' and role in ('admin', 'branch_head', 'head_coach', 'coach')) then
    raise exception 'Advice requires an active coach.';
  end if;
  if new.cohort_id is not null and not exists (
    select 1 from public.cohort_memberships m
    where m.cohort_id = new.cohort_id and m.student_id = new.student_id and m.membership_status = 'active'
  ) then
    raise exception 'Advice cohort must be the student''s active cohort.';
  end if;
  if (select private.current_role()) = 'student' then
    if new.student_id is distinct from (select auth.uid())
      or new.author_id is distinct from old.author_id
      or new.advice_date is distinct from old.advice_date
      or new.title is distinct from old.title
      or new.advice is distinct from old.advice
      or new.cohort_id is distinct from old.cohort_id
      or new.due_date is distinct from old.due_date then
      raise exception 'Students can only update advice status.';
    end if;
  end if;
  new.updated_at := timezone('utc', now());
  return new;
end;
$$;

drop trigger if exists validate_student_advice on public.student_advice;
create trigger validate_student_advice
before insert or update on public.student_advice
for each row execute function private.validate_student_advice();

alter table public.skill_reviews enable row level security;
alter table public.student_advice enable row level security;

create policy skill_reviews_scope_select on public.skill_reviews
  for select to authenticated using ((select private.can_access_user(student_id)));
create policy skill_reviews_staff_insert on public.skill_reviews
  for insert to authenticated
  with check ((select private.can_staff_edit_student(student_id)) and coach_id = (select auth.uid()));
create policy skill_reviews_staff_update on public.skill_reviews
  for update to authenticated
  using ((select private.can_staff_edit_student(student_id)))
  with check ((select private.can_staff_edit_student(student_id)));
create policy skill_reviews_student_update on public.skill_reviews
  for update to authenticated
  using (student_id = (select auth.uid()) and (select private.is_active()))
  with check (student_id = (select auth.uid()) and (select private.is_active()));
create policy skill_reviews_staff_delete on public.skill_reviews
  for delete to authenticated using ((select private.can_staff_edit_student(student_id)) and coach_id = (select auth.uid()));

create policy student_advice_scope_select on public.student_advice
  for select to authenticated using ((select private.can_access_user(student_id)));
create policy student_advice_staff_insert on public.student_advice
  for insert to authenticated
  with check ((select private.can_staff_edit_student(student_id)) and author_id = (select auth.uid()));
create policy student_advice_staff_update on public.student_advice
  for update to authenticated
  using ((select private.can_staff_edit_student(student_id)))
  with check ((select private.can_staff_edit_student(student_id)));
create policy student_advice_student_update on public.student_advice
  for update to authenticated
  using (student_id = (select auth.uid()) and (select private.is_active()))
  with check (student_id = (select auth.uid()) and (select private.is_active()));
create policy student_advice_staff_delete on public.student_advice
  for delete to authenticated using ((select private.can_staff_edit_student(student_id)) and author_id = (select auth.uid()));

revoke all on function private.validate_skill_review() from public, anon, authenticated;
revoke all on function private.validate_student_advice() from public, anon, authenticated;

commit;
