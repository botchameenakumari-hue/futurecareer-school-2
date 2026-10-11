import { CAREER_CATALOGUE_META, CAREER_DATABASE_REQUIRED_FIELDS, CAREER_DATABASE_VERIFICATION_QUEUE } from '../../config/careerRouteDataset';

export const GET = () => new Response(JSON.stringify({
  dataset: 'Future Career School career database verification queue',
  version: CAREER_CATALOGUE_META.version,
  status: 'not-published',
  owner: CAREER_CATALOGUE_META.owner,
  reviewCadence: CAREER_CATALOGUE_META.reviewCadence,
  requiredFields: CAREER_DATABASE_REQUIRED_FIELDS,
  note: 'This is a work queue, not a verified career database. Every record remains editorial-only until its required fields are independently checked.',
  records: CAREER_DATABASE_VERIFICATION_QUEUE,
}, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
