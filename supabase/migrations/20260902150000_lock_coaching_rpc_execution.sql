begin;

-- These RPCs contain their own role and ownership checks, but they should
-- never be callable anonymously. Keep access limited to signed-in users and
-- the service role used by controlled administration tasks.
revoke execute on function public.move_student_to_cohort(uuid, uuid) from anon;
revoke execute on function public.set_action_completion(uuid, text) from anon;
grant execute on function public.move_student_to_cohort(uuid, uuid) to authenticated;
grant execute on function public.set_action_completion(uuid, text) to authenticated;

commit;
