import { CAREER_CATALOGUE_META, CAREER_DATABASE_READINESS, CAREER_ROUTE_RECORDS } from '../../config/careerRouteDataset';

export const GET = () => new Response(JSON.stringify({
  dataset: 'Future Career School editorial career route catalogue',
  version: CAREER_CATALOGUE_META.version,
  editoriallyReviewedOn: CAREER_CATALOGUE_META.editoriallyReviewedOn,
  provenance: CAREER_CATALOGUE_META.provenance,
  disclaimer: CAREER_CATALOGUE_META.disclaimer,
  sourcePage: CAREER_CATALOGUE_META.sourcePage,
  owner: CAREER_CATALOGUE_META.owner,
  recordStatus: CAREER_CATALOGUE_META.recordStatus,
  databaseReadiness: CAREER_DATABASE_READINESS,
  recordCount: CAREER_ROUTE_RECORDS.length,
  records: CAREER_ROUTE_RECORDS,
}, null, 2), {
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
});
