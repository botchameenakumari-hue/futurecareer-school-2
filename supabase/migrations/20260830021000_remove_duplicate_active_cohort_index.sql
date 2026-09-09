-- The original cohort migration and the later integrity migration created
-- identical partial unique indexes. Keep the canonical, descriptive name.
drop index if exists public.cohort_memberships_one_active_per_student_idx;
