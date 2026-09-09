begin;

-- The dashboard uses a ten-point satisfaction scale.  The original table was
-- created with a 1–5 check, which rejected 0 and every score above 5 even
-- though the form appeared to accept them. Keep an unrated value as NULL and
-- allow the full, deliberate 0–10 range for both audiences.
alter table public.skill_reviews
  drop constraint if exists skill_reviews_coach_satisfaction_check,
  drop constraint if exists skill_reviews_student_satisfaction_check;

alter table public.skill_reviews
  add constraint skill_reviews_coach_satisfaction_check
    check (coach_satisfaction is null or coach_satisfaction between 0 and 10),
  add constraint skill_reviews_student_satisfaction_check
    check (student_satisfaction is null or student_satisfaction between 0 and 10);

commit;
