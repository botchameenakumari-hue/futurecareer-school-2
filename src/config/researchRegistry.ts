export const RESEARCH_REGISTRY_META = {
  version: '11 October 2026',
  policyUrl: '/data-policy/',
  note: 'This registry records delivery status. A planned report or dataset is not evidence, and no placeholder is presented as published research.',
};

export const RESEARCH_REPORT_REGISTRY = Array.from({ length: 20 }, (_, index) => ({
  id: `research-report-${String(index + 1).padStart(2, '0')}`,
  label: `Original benchmark report ${index + 1}`,
  status: 'not-published',
  blocker: 'First-party responses or records, documented consent and an agreed method are required.',
}));

export const PLANNED_DATASET_REGISTRY = Array.from({ length: 15 }, (_, index) => ({
  id: `planned-dataset-${String(index + 1).padStart(2, '0')}`,
  label: `Original public dataset ${index + 1}`,
  status: 'not-published',
  blocker: 'Source ownership, verification cadence and provenance must be agreed before publication.',
}));

export const PUBLISHED_EDITORIAL_DATASETS = [
  { label: 'Class 10 career-route planning map 2026', url: '/datasets/career-routes-after-10th-2026/', kind: 'editorial', note: 'Authored route descriptions from the Class 10 chart; not admission, salary or employment data.' },
  { label: 'Course eligibility and entrance routes 2026', url: '/datasets/course-eligibility-2026/', kind: 'editorial', note: 'Compiled from linked official starting pages; not an admission ruling.' },
  { label: 'After-12th career-route planning bands 2026', url: '/datasets/career-routes-after-12th-2026/', kind: 'editorial', note: 'Planning bands from the published chart; not statistics.' },
  { label: 'Career route catalogue 2026', url: '/datasets/career-route-catalogue-2026/', kind: 'editorial', note: 'Snapshot of the school’s own catalogue; not an occupation register.' },
  { label: 'Assessment methodology and domain map 2026', url: '/datasets/assessment-methodology-2026/', kind: 'editorial', note: 'Authored assessment structure only; contains no participant data, scores or validation results.' },
  { label: 'Skill evidence project library 2026', url: '/datasets/skill-evidence-library-2026/', kind: 'editorial', note: 'Authored practice prompts and evidence ideas; not employment or hiring-outcome data.' },
  { label: 'Career-target skill emphasis model 2026', url: '/datasets/career-target-emphasis-2026/', kind: 'editorial', note: 'Directional editorial bands for tracker comparisons; not hiring requirements or labour-market data.' },
];
