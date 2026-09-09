alter table public.student_constraints
  add column if not exists interest_themes text[] not null default '{}'::text[];

comment on column public.student_constraints.interest_themes is
  'Broad interest signals used to make career exploration easier to personalise.';
