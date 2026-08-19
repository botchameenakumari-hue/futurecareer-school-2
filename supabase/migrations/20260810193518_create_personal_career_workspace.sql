create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null default '',
  stage text not null default 'exploring'
    check (stage in ('exploring', 'class-10-below', 'class-11-12', 'college', 'graduate', 'professional', 'career-change')),
  city text not null default '',
  target_outcome text not null default '',
  avatar_seed text not null default '',
  onboarding_completed boolean not null default false,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table public.assessment_results (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  assessment_slug text not null,
  assessment_title text not null,
  summary text not null default '',
  score_label text not null default '',
  scores jsonb not null default '{}'::jsonb,
  result_payload jsonb not null default '{}'::jsonb,
  completed_at timestamptz not null default timezone('utc', now()),
  created_at timestamptz not null default timezone('utc', now())
);

create table public.career_paths (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  fit_score integer check (fit_score between 0 and 100),
  status text not null default 'exploring'
    check (status in ('exploring', 'shortlisted', 'testing', 'paused')),
  next_step text not null default '',
  reasons jsonb not null default '[]'::jsonb,
  tradeoffs jsonb not null default '[]'::jsonb,
  sort_order integer not null default 0,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table public.action_items (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  category text not null default 'explore'
    check (category in ('explore', 'learn', 'build', 'connect', 'apply', 'decide')),
  status text not null default 'todo'
    check (status in ('todo', 'doing', 'done')),
  priority text not null default 'normal'
    check (priority in ('normal', 'important')),
  due_date date,
  sort_order integer not null default 0,
  created_at timestamptz not null default timezone('utc', now()),
  updated_at timestamptz not null default timezone('utc', now())
);

create table public.saved_resources (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  path text not null,
  title text not null,
  category text not null default 'resource',
  created_at timestamptz not null default timezone('utc', now()),
  unique (user_id, path)
);

create index assessment_results_user_completed_idx
  on public.assessment_results (user_id, completed_at desc);
create index career_paths_user_sort_idx
  on public.career_paths (user_id, sort_order, created_at);
create index action_items_user_status_sort_idx
  on public.action_items (user_id, status, sort_order, created_at);
create index saved_resources_user_created_idx
  on public.saved_resources (user_id, created_at desc);

alter table public.profiles enable row level security;
alter table public.assessment_results enable row level security;
alter table public.career_paths enable row level security;
alter table public.action_items enable row level security;
alter table public.saved_resources enable row level security;

create policy "profiles_owned_by_user"
  on public.profiles for all to authenticated
  using ((select auth.uid()) = id)
  with check ((select auth.uid()) = id);

create policy "assessment_results_owned_by_user"
  on public.assessment_results for all to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create policy "career_paths_owned_by_user"
  on public.career_paths for all to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create policy "action_items_owned_by_user"
  on public.action_items for all to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create policy "saved_resources_owned_by_user"
  on public.saved_resources for all to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

revoke all on table public.profiles from anon;
revoke all on table public.assessment_results from anon;
revoke all on table public.career_paths from anon;
revoke all on table public.action_items from anon;
revoke all on table public.saved_resources from anon;

grant usage on schema public to authenticated;
grant select, insert, update, delete on table public.profiles to authenticated;
grant select, insert, update, delete on table public.assessment_results to authenticated;
grant select, insert, update, delete on table public.career_paths to authenticated;
grant select, insert, update, delete on table public.action_items to authenticated;
grant select, insert, update, delete on table public.saved_resources to authenticated;
