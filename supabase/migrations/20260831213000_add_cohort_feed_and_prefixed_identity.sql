create sequence if not exists public.cohort_serial_seq;

alter table public.cohorts add column if not exists serial_number bigint;

do $$
declare
  next_serial bigint;
begin
  update public.cohorts
  set serial_number = nextval('public.cohort_serial_seq')
  where serial_number is null;
  select coalesce(max(serial_number), 0) into next_serial from public.cohorts;
  if next_serial > 0 then
    perform setval('public.cohort_serial_seq', next_serial, true);
  end if;
end $$;

alter table public.cohorts alter column serial_number set default nextval('public.cohort_serial_seq');
alter table public.cohorts alter column serial_number set not null;
create unique index if not exists cohorts_serial_number_uidx on public.cohorts(serial_number);

create or replace function private.set_cohort_identity()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  prefix text;
  label text;
begin
  if tg_op = 'UPDATE' then
    new.serial_number := old.serial_number;
    new.code := old.code;
  else
    if new.serial_number is null then new.serial_number := nextval('public.cohort_serial_seq'); end if;
    new.code := 'COH-' || lpad(new.serial_number::text, 4, '0');
  end if;
  prefix := new.code || ' · ';
  label := regexp_replace(trim(coalesce(new.name, 'Cohort')), '^COH-[0-9]+ · ', '', 'i');
  new.name := left(prefix || nullif(label, ''), 120);
  return new;
end $$;

drop trigger if exists cohorts_identity_trigger on public.cohorts;
create trigger cohorts_identity_trigger
before insert or update on public.cohorts
for each row execute function private.set_cohort_identity();

create table if not exists public.cohort_posts (
  id uuid primary key default gen_random_uuid(),
  cohort_id uuid not null references public.cohorts(id) on delete cascade,
  author_id uuid not null references public.profiles(id) on delete restrict,
  post_type text not null default 'update' check (post_type in ('update', 'reflection', 'question', 'resource')),
  content text not null check (char_length(trim(content)) between 1 and 5000),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists cohort_posts_cohort_created_idx on public.cohort_posts(cohort_id, created_at desc);
create index if not exists cohort_posts_author_created_idx on public.cohort_posts(author_id, created_at desc);
alter table public.cohort_posts enable row level security;

drop policy if exists cohort_posts_scope_select on public.cohort_posts;
create policy cohort_posts_scope_select on public.cohort_posts for select to authenticated
using (
  (select private.can_manage_cohort(cohort_id))
  or exists (
    select 1 from public.cohort_memberships membership
    where membership.cohort_id = cohort_posts.cohort_id
      and membership.student_id = (select auth.uid())
      and membership.membership_status = 'active'
  )
);

drop policy if exists cohort_posts_scope_insert on public.cohort_posts;
create policy cohort_posts_scope_insert on public.cohort_posts for insert to authenticated
with check (
  author_id = (select auth.uid())
  and (
    (select private.can_manage_cohort(cohort_id))
    or exists (select 1 from public.cohort_memberships membership where membership.cohort_id = cohort_posts.cohort_id and membership.student_id = (select auth.uid()) and membership.membership_status = 'active')
  )
);

drop policy if exists cohort_posts_scope_update on public.cohort_posts;
create policy cohort_posts_scope_update on public.cohort_posts for update to authenticated
using (author_id = (select auth.uid()) or (select private.can_manage_cohort(cohort_id)))
with check (author_id = (select auth.uid()) or (select private.can_manage_cohort(cohort_id)));

drop policy if exists cohort_posts_scope_delete on public.cohort_posts;
create policy cohort_posts_scope_delete on public.cohort_posts for delete to authenticated
using (author_id = (select auth.uid()) or (select private.can_manage_cohort(cohort_id)));

grant select, insert, update, delete on public.cohort_posts to authenticated;
