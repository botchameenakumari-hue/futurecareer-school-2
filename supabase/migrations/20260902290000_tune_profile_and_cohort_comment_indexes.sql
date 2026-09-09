drop policy if exists profiles_self_email_select on public.profiles;
create policy profiles_self_email_select
  on public.profiles for select to authenticated
  using (
    lower(email) = lower(coalesce((select auth.jwt() ->> 'email'), ''))
  );

create index if not exists cohort_post_comments_author_idx
  on public.cohort_post_comments(author_id);
