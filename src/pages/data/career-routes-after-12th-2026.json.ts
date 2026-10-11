import { chartRows, CHART12_META } from '../../config/careerChartAfter12th.mjs';
import {
  AI3,
  COST_BANDS,
  EXAM_LABELS,
  LEVEL3,
  OVERSEAS3,
  ROW_FILTERS,
  WFH3,
} from '../../config/chart12Filters';

const records = chartRows.map((row, index) => {
  const filter = ROW_FILTERS[index];
  if (!filter) throw new Error(`Missing filter for chart row ${index}: ${row.route}`);
  return {
    route: row.route,
    who: row.who,
    entrance: row.gate,
    duration: row.length,
    money: row.money,
    practicalNote: row.catch,
    streamFit: filter.streams,
    maths: filter.maths,
    biology: filter.biology,
    entranceExams: filter.exams.map((exam) => EXAM_LABELS[exam]),
    durationYears: filter.years,
    costBand: COST_BANDS[filter.cost[0]],
    costBandMaximum: COST_BANDS[filter.cost[1]],
    portfolio: filter.portfolio,
    employmentBand: LEVEL3[filter.employment],
    freelanceBand: LEVEL3[filter.freelance],
    governmentBand: LEVEL3[filter.government],
    overseasMobility: OVERSEAS3[filter.overseas],
    aiExposure: AI3[filter.ai],
    workFromHome: WFH3[filter.wfh],
    planningNotes: filter.notes,
    officialStartingPoints: filter.sources ?? [],
  };
});

export const GET = () => new Response(JSON.stringify({
  dataset: 'Future Career School editorial after-12th career-route planning bands',
  version: CHART12_META.lastChecked,
  editoriallyReviewedOn: CHART12_META.lastChecked,
  provenance: 'Editorial planning bands from the published Future Career School chart; not official classifications, survey data or employment statistics.',
  sourcePage: CHART12_META.pageUrl,
  disclaimer: CHART12_META.disclaimer,
  records,
}, null, 2), {
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
});
