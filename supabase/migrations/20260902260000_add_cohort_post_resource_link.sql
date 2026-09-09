alter table public.cohort_posts
  add column if not exists resource_url text;

alter table public.cohort_posts
  drop constraint if exists cohort_posts_resource_url_check;

alter table public.cohort_posts
  add constraint cohort_posts_resource_url_check
  check (resource_url is null or (char_length(trim(resource_url)) between 1 and 1000 and resource_url ~* '^https?://'));
