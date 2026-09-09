begin;
create index if not exists cohort_tasks_updated_by_idx
  on public.cohort_tasks (updated_by, updated_at desc);
commit;
