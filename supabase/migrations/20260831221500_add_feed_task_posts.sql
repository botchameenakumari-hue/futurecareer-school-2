alter table public.cohort_posts add column if not exists is_task boolean not null default false;
alter table public.cohort_posts add column if not exists task_due_on date;
create index if not exists cohort_posts_task_posts_idx on public.cohort_posts(cohort_id, is_task, created_at desc);
