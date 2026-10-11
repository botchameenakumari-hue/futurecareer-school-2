import { ASSESSMENT_METHODOLOGY_META, ASSESSMENT_METHODOLOGY_RECORDS } from '../../config/assessmentMethodologyDataset';

export const GET = () => new Response(JSON.stringify({
  dataset: 'Future Career School editorial assessment methodology and domain map',
  version: ASSESSMENT_METHODOLOGY_META.version,
  provenance: ASSESSMENT_METHODOLOGY_META.provenance,
  disclaimer: ASSESSMENT_METHODOLOGY_META.disclaimer,
  sourcePage: ASSESSMENT_METHODOLOGY_META.sourcePage,
  owner: ASSESSMENT_METHODOLOGY_META.owner,
  participantDataIncluded: false,
  records: ASSESSMENT_METHODOLOGY_RECORDS,
}, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
