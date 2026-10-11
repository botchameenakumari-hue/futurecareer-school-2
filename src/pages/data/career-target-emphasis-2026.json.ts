import { CAREER_TARGET_DATASET_META, CAREER_TARGET_RECORDS } from '../../config/careerTargetDataset';

export const GET = () => new Response(JSON.stringify({
  dataset: 'Future Career School editorial career-target skill-emphasis model',
  version: CAREER_TARGET_DATASET_META.version,
  provenance: CAREER_TARGET_DATASET_META.provenance,
  purpose: CAREER_TARGET_DATASET_META.purpose,
  limits: CAREER_TARGET_DATASET_META.limits,
  sourcePage: CAREER_TARGET_DATASET_META.sourcePage,
  owner: CAREER_TARGET_DATASET_META.owner,
  participantDataIncluded: false,
  records: CAREER_TARGET_RECORDS,
}, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
