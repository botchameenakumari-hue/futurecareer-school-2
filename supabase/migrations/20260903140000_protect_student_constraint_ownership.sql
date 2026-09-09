-- Students may update their own planning constraints, but ownership and audit
-- fields must remain tied to the authenticated student.
create or replace function private.protect_student_constraint_ownership()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if (select private.current_role()) = 'student' and auth.uid() = old.student_id then
    if new.student_id is distinct from old.student_id
       or new.updated_by is distinct from auth.uid()
       or new.created_at is distinct from old.created_at then
      raise exception 'Students can only update their own constraint information.' using errcode = '42501';
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists protect_student_constraint_ownership on public.student_constraints;
create trigger protect_student_constraint_ownership
before update on public.student_constraints
for each row execute function private.protect_student_constraint_ownership();

revoke execute on function private.protect_student_constraint_ownership() from public, anon, authenticated;
