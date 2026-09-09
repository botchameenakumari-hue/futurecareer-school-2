-- Evaluate the signed-in email once per statement instead of once per row.
-- The policy still exposes only rows matching the current auth email; this is
-- the compatibility path used by older accounts whose profile id was linked
-- after the auth user was created.
drop policy if exists profiles_self_email_select on public.profiles;

create policy profiles_self_email_select
  on public.profiles for select to authenticated
  using (
    lower(email) = (select lower(coalesce(auth.jwt() ->> 'email', '')))
  );
