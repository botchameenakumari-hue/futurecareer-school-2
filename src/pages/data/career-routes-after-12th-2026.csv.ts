import { chartRows, CHART12_META } from '../../config/careerChartAfter12th.mjs';
import { EXAM_LABELS, ROW_FILTERS } from '../../config/chart12Filters';

const quote = (value: unknown) => `"${String(value ?? '').replaceAll('"', '""')}"`;
const rows = chartRows.map((row, index) => {
  const filter = ROW_FILTERS[index];
  if (!filter) throw new Error(`Missing filter for chart row ${index}: ${row.route}`);
  return [
    row.route,
    row.who,
    row.gate,
    row.length,
    row.money,
    row.catch,
    filter.streams.PCM,
    filter.streams.PCB,
    filter.streams.PCMB,
    filter.streams.Commerce,
    filter.streams.Arts,
    filter.maths,
    filter.biology,
    filter.exams.map((exam) => EXAM_LABELS[exam]).join(' | '),
    filter.years?.[0] ?? '',
    filter.years?.[1] ?? '',
    filter.cost[0],
    filter.cost[1],
    filter.portfolio,
    filter.employment,
    filter.freelance,
    filter.government,
    filter.overseas,
    filter.ai,
    filter.wfh,
    (filter.sources ?? []).map((source) => source.url).join(' | '),
    CHART12_META.lastChecked,
  ];
});

const header = [
  'route', 'who', 'entrance', 'duration', 'money', 'practical_note',
  'stream_pcm', 'stream_pcb', 'stream_pcmb', 'stream_commerce', 'stream_arts',
  'maths', 'biology', 'entrance_exams', 'years_min', 'years_max',
  'cost_band_min', 'cost_band_max', 'portfolio', 'employment_band',
  'freelance_band', 'government_band', 'overseas_band', 'ai_exposure',
  'work_from_home', 'official_sources', 'editorially_reviewed_on',
];

export const GET = () => new Response([
  '# Dataset: Future Career School editorial after-12th career-route planning bands',
  `# Editorially reviewed: ${CHART12_META.lastChecked}`,
  '# Provenance: Editorial planning bands, not official classifications, survey data or employment statistics.',
  header.map(quote).join(','),
  ...rows.map((row) => row.map(quote).join(',')),
].join('\n') + '\n', {
  headers: { 'Content-Type': 'text/csv; charset=utf-8' },
});
