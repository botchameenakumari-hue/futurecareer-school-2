-- Some early account records were created with the correct email but before
-- the auth user id was copied into profiles.id. Let that user recover their
-- own profile while keeping every other profile protected by the hierarchy
-- policy. This is intentionally limited to the authenticated user's email.
drop policy if exists profiles_self_email_select on public.profiles;

create policy profiles_self_email_select
  on public.profiles for select to authenticated
  using (
    lower(email) = lower(coalesce((select auth.jwt() ->> 'email'), ''))
  );
