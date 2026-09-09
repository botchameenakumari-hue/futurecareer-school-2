begin;

create unique index if not exists cohort_memberships_one_active_student_idx
  on public.cohort_memberships (student_id)
  where membership_status = 'active';

commit;
