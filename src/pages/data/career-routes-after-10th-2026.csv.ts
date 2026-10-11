import { CHART_META, ROUTES } from '../../config/careerChartAfter10th.mjs';

const quote = (value: unknown) => `"${String(value ?? '').replaceAll('"', '""')}"`;
const rows = ROUTES.map((route) => [
  route.id,
  route.family,
  route.label,
  route.short,
  route.length,
  route.gate,
  route.opens.join(' | '),
  route.closes.join(' | '),
  route.yearsToWork[0],
  route.yearsToWork[1],
  route.bestFor,
  route.watchOut,
  route.firstMove,
  CHART_META.lastChecked,
]);
const header = ['id', 'family', 'route', 'short_description', 'length', 'entry_gate', 'opens', 'closes', 'years_to_work_min', 'years_to_work_max', 'best_for', 'watch_out', 'first_move', 'editorially_reviewed_on'];

export const GET = () => new Response([
  '# Dataset: Future Career School editorial Class 10 route map',
  `# Editorially reviewed: ${CHART_META.lastChecked}`,
  '# Provenance: Editorial route descriptions, not official classifications, admission rules, survey data or employment statistics.',
  header.map(quote).join(','),
  ...rows.map((row) => row.map(quote).join(',')),
].join('\n') + '\n', {
  headers: { 'Content-Type': 'text/csv; charset=utf-8' },
});
