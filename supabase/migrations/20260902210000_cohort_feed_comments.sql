create table if not exists public.cohort_post_comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.cohort_posts(id) on delete cascade,
  author_id uuid not null references public.profiles(id) on delete cascade,
  content text not null check (char_length(btrim(content)) between 1 and 3000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists cohort_post_comments_post_idx on public.cohort_post_comments(post_id, created_at);
alter table public.cohort_post_comments enable row level security;
create policy cohort_post_comments_select on public.cohort_post_comments for select using (
  exists (select 1 from public.cohort_posts post where post.id = cohort_post_comments.post_id and (private.can_manage_cohort(post.cohort_id) or exists (select 1 from public.cohort_memberships membership where membership.cohort_id = post.cohort_id and membership.student_id = (select auth.uid()) and membership.membership_status = 'active')))
);
create policy cohort_post_comments_insert on public.cohort_post_comments for insert with check (
  author_id = (select auth.uid()) and exists (select 1 from public.cohort_posts post where post.id = cohort_post_comments.post_id and (private.can_manage_cohort(post.cohort_id) or exists (select 1 from public.cohort_memberships membership where membership.cohort_id = post.cohort_id and membership.student_id = (select auth.uid()) and membership.membership_status = 'active')))
);
create policy cohort_post_comments_delete on public.cohort_post_comments for delete using (
  author_id = (select auth.uid()) or exists (select 1 from public.cohort_posts post where post.id = cohort_post_comments.post_id and private.can_manage_cohort(post.cohort_id))
);
