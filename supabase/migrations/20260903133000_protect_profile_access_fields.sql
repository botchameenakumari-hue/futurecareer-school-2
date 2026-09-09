-- Self-service profile edits must never be able to change access control or
-- reporting lines. Personal details and onboarding progress remain editable.
create or replace function private.protect_profile_access_fields()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if auth.uid() = old.id and (select private.is_active()) then
    if new.id is distinct from old.id
       or new.email is distinct from old.email
       or new.role is distinct from old.role
       or new.account_status is distinct from old.account_status
       or new.branch_id is distinct from old.branch_id
       or new.supervisor_id is distinct from old.supervisor_id
       or new.created_by is distinct from old.created_by
       or new.approved_by is distinct from old.approved_by
       or new.approved_at is distinct from old.approved_at
       or new.must_change_password is distinct from old.must_change_password
       or new.setup_email_sent_at is distinct from old.setup_email_sent_at
       or new.temporary_password_issued_at is distinct from old.temporary_password_issued_at
       or new.password_set_at is distinct from old.password_set_at
       or new.last_active_at is distinct from old.last_active_at
       or new.created_at is distinct from old.created_at then
      raise exception 'Access and reporting fields can only be changed by an authorised account administrator.' using errcode = '42501';
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists protect_profile_access_fields on public.profiles;
create trigger protect_profile_access_fields
before update on public.profiles
for each row execute function private.protect_profile_access_fields();

revoke execute on function private.protect_profile_access_fields() from public, anon, authenticated;
