alter table public.profiles
  add column if not exists setup_email_sent_at timestamptz,
  add column if not exists temporary_password_issued_at timestamptz,
  add column if not exists password_set_at timestamptz;

comment on column public.profiles.must_change_password is
  'True while an approved account must choose or replace its password before entering the workspace.';
comment on column public.profiles.setup_email_sent_at is
  'The most recent time an Admin-triggered password setup or recovery email was accepted by Supabase Auth.';
comment on column public.profiles.temporary_password_issued_at is
  'The most recent time an Admin generated a one-time temporary password. The password itself is never stored here.';
comment on column public.profiles.password_set_at is
  'The most recent time the account completed the in-app password setup flow.';

update public.profiles as profile
set
  must_change_password = false,
  password_set_at = coalesce(profile.password_set_at, profile.approved_at, profile.created_at)
from auth.users as auth_user
where auth_user.id = profile.id
  and length(coalesce(auth_user.encrypted_password, '')) > 0
  and (profile.role = 'admin' or profile.email like '%@fcs.test');

update public.profiles as profile
set
  must_change_password = true,
  password_set_at = null
from auth.users as auth_user
where auth_user.id = profile.id
  and profile.role <> 'admin'
  and profile.email not like '%@fcs.test'
  and length(coalesce(auth_user.encrypted_password, '')) = 0;
