-- The participant policies supersede the earlier student-only policies.
-- Keep one permissive INSERT and UPDATE policy per action for predictable RLS.
drop policy if exists cohort_tasks_member_insert on public.cohort_tasks;
drop policy if exists cohort_tasks_member_update on public.cohort_tasks;
