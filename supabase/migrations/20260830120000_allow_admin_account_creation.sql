-- Admins can create another organisation-wide Admin account. Lower roles
-- continue to require a branch and supervisor.
alter table public.account_requests
  drop constraint if exists account_requests_requested_role_check;

alter table public.account_requests
  add constraint account_requests_requested_role_check
  check (requested_role in ('admin', 'branch_head', 'head_coach', 'coach', 'student'));

alter table public.account_requests
  alter column branch_id drop not null,
  alter column supervisor_id drop not null;

alter table public.account_requests
  add constraint account_requests_assignment_check
  check (
    (requested_role = 'admin' and branch_id is null and supervisor_id is null)
    or (requested_role <> 'admin' and branch_id is not null and supervisor_id is not null)
  );
