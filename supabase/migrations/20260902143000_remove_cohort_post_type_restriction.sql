begin;

-- The cohort feed is intentionally free-form.  Tasks are represented by the
-- is_task/task_due_on fields; contributors should not be forced into a fixed
-- post category when sharing an update, question, resource, or idea.
alter table public.cohort_posts
  drop constraint if exists cohort_posts_post_type_check;

commit;
