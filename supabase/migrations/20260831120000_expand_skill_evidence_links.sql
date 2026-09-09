begin;

-- Evidence links are stored one per line in source_url. Keep the existing
-- column so old records remain compatible, but allow a practical collection
-- of links for a single evidence note.
alter table public.skill_evidence
  drop constraint if exists skill_evidence_source_url_check;

alter table public.skill_evidence
  add constraint skill_evidence_source_url_check
  check (length(source_url) <= 8000);

commit;
