import { PLANNED_DATASET_REGISTRY, PUBLISHED_EDITORIAL_DATASETS, RESEARCH_REGISTRY_META, RESEARCH_REPORT_REGISTRY } from '../../config/researchRegistry';

export const GET = () => new Response(JSON.stringify({
  dataset: 'Future Career School research and dataset delivery registry',
  version: RESEARCH_REGISTRY_META.version,
  note: RESEARCH_REGISTRY_META.note,
  researchReports: RESEARCH_REPORT_REGISTRY,
  plannedDatasets: PLANNED_DATASET_REGISTRY,
  publishedEditorialDatasets: PUBLISHED_EDITORIAL_DATASETS,
}, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
