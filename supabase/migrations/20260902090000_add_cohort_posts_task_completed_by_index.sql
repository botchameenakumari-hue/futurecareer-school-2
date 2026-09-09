-- Keep accountability-feed joins and participant completion updates efficient.
create index if not exists cohort_posts_task_completed_by_idx
  on public.cohort_posts (task_completed_by);
