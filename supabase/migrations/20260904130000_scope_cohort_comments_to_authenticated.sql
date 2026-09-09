begin;

-- Cohort comments are an authenticated coaching feature.  The existing
-- predicates already require auth.uid(), so keeping these policies on the
-- public role only adds unnecessary anonymous policy evaluation surface.
alter policy cohort_post_comments_select
  on public.cohort_post_comments to authenticated;
alter policy cohort_post_comments_insert
  on public.cohort_post_comments to authenticated;
alter policy cohort_post_comments_delete
  on public.cohort_post_comments to authenticated;

commit;
