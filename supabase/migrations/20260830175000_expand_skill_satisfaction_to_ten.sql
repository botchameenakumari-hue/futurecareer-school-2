-- Use a simple 0–10 scale for both student and coach skill views.
alter table public.skill_reviews
  drop constraint if exists skill_reviews_coach_satisfaction_check,
  drop constraint if exists skill_reviews_student_satisfaction_check;

alter table public.skill_reviews
  add constraint skill_reviews_coach_satisfaction_check
    check (coach_satisfaction is null or coach_satisfaction between 0 and 10),
  add constraint skill_reviews_student_satisfaction_check
    check (student_satisfaction is null or student_satisfaction between 0 and 10);
