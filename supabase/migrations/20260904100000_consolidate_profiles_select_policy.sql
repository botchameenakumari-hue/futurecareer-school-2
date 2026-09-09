-- Consolidate the two equivalent profile SELECT policies into one policy.
-- This preserves the hierarchy lookup and signed-in email fallback while
-- avoiding duplicate permissive-policy evaluation and auth init-plan work.
drop policy if exists profiles_hierarchy_select on public.profiles;
drop policy if exists profiles_self_email_select on public.profiles;

create policy profiles_scope_select on public.profiles
  for select to authenticated
  using (
    (select private.can_access_user(profiles.id))
    or lower(profiles.email) = lower(coalesce(((select auth.jwt()) ->> 'email'), ''))
  );
