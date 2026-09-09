alter table public.cohort_posts add column if not exists cohort_task_id uuid references public.cohort_tasks(id) on delete set null;
create index if not exists cohort_posts_task_idx on public.cohort_posts(cohort_task_id, created_at desc);
