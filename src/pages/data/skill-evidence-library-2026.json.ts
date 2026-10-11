import { SKILL_EVIDENCE_DATASET_META, SKILL_EVIDENCE_RECORDS } from '../../config/skillEvidenceDataset';

export const GET = () => new Response(JSON.stringify({
  dataset: 'Future Career School editorial skill evidence project library',
  version: SKILL_EVIDENCE_DATASET_META.version,
  provenance: SKILL_EVIDENCE_DATASET_META.provenance,
  purpose: SKILL_EVIDENCE_DATASET_META.purpose,
  limits: SKILL_EVIDENCE_DATASET_META.limits,
  sourcePage: SKILL_EVIDENCE_DATASET_META.sourcePage,
  owner: SKILL_EVIDENCE_DATASET_META.owner,
  participantDataIncluded: false,
  records: SKILL_EVIDENCE_RECORDS,
}, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
