-- A profile row contains both personal context and security/organisation
-- state. RLS identifies who may touch the row, while this trigger prevents a
-- user from changing their own role, approval, reporting line, or password
-- lifecycle through a direct table update.
create or replace function private.protect_profile_hierarchy_fields()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  -- Service-role account management has no auth.uid(); it must be able to
  -- apply approved changes. Authenticated self-service is limited below.
  if (select auth.uid()) is not null and new.id = (select auth.uid()) then
    if new.role is distinct from old.role
      or new.account_status is distinct from old.account_status
      or new.branch_id is distinct from old.branch_id
      or new.supervisor_id is distinct from old.supervisor_id
      or new.created_by is distinct from old.created_by
      or new.approved_by is distinct from old.approved_by
      or new.approved_at is distinct from old.approved_at
      or new.must_change_password is distinct from old.must_change_password
      or new.setup_email_sent_at is distinct from old.setup_email_sent_at
      or new.temporary_password_issued_at is distinct from old.temporary_password_issued_at
      or new.password_set_at is distinct from old.password_set_at then
      raise exception 'Account security and organisation fields are managed by the school.';
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists protect_profile_hierarchy_fields on public.profiles;
create trigger protect_profile_hierarchy_fields
before update on public.profiles
for each row execute function private.protect_profile_hierarchy_fields();
