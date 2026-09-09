-- Completing a cohort task is an authenticated dashboard action. Anonymous
-- callers must not be able to invoke the SECURITY DEFINER RPC directly.
revoke execute on function public.complete_cohort_task(uuid) from anon;
