create index account_requests_resulting_user_idx
  on public.account_requests (resulting_user_id)
  where resulting_user_id is not null;

create index account_requests_reviewed_by_idx
  on public.account_requests (reviewed_by)
  where reviewed_by is not null;

create index branches_created_by_idx
  on public.branches (created_by)
  where created_by is not null;

create policy "system_settings_internal_only"
  on public.system_settings
  for all
  to authenticated
  using (false)
  with check (false);
