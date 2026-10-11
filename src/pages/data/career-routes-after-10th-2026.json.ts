import { CHART_META, ROUTES } from '../../config/careerChartAfter10th.mjs';

const records = ROUTES.map((route) => ({
  id: route.id,
  family: route.family,
  label: route.label,
  short: route.short,
  length: route.length,
  entryGate: route.gate,
  opens: route.opens,
  closes: route.closes,
  yearsToWork: route.yearsToWork,
  bestFor: route.bestFor,
  watchOut: route.watchOut,
  firstMove: route.firstMove,
}));

export const GET = () => new Response(JSON.stringify({
  dataset: 'Future Career School editorial Class 10 route map',
  version: CHART_META.lastChecked,
  editoriallyReviewedOn: CHART_META.lastChecked,
  provenance: 'Editorial route descriptions from the published Future Career School Class 10 chart; not official classifications, admission rules, survey data or employment statistics.',
  sourcePage: CHART_META.pageUrl,
  disclaimer: CHART_META.disclaimer,
  records,
}, null, 2), {
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
});
