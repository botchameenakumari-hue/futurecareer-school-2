-- Role-specific capabilities are not portable Core skills. Preserve every
-- record, but move legacy role-prefixed rows out of the foundation grouping.
-- Unlinked rows use employability so they remain visible under Other skills;
-- linked rows stay attached to the direction that requested them.
update public.student_skills
set skill_scope = case
  when linked_career_path_id is null then 'employability'
  else 'career-specific'
end
where skill_scope = 'foundation'
  and (
    skill_name ~ '^[^:]{2,80}:\s+'
    or skill_name ~* '\mfor\s+[A-Z]'
  );
