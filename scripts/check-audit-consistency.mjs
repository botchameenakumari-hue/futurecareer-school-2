import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const read = (file) => fs.readFileSync(file, 'utf8');
const walk = (dir, predicate) => {
  let count = 0;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) count += walk(full, predicate);
    else if (predicate(full)) count += 1;
  }
  return count;
};
const audit = read('docs/current-main-feature-audit-2026-10-11.md');
const chart = read('src/config/careerChartAfter12th.mjs');
const chartBody = chart.slice(chart.indexOf('export const chartRows = ['), chart.indexOf('export const scienceCards = ['));
const chartRoutes = (chartBody.match(/^\s+route:/gm) || []).length;
const sourcePages = walk('src/pages', (file) => /\.(astro|html|ts)$/.test(file));
const htmlPages = walk('dist', (file) => file.endsWith('.html'));
const sitemapLocations = fs.existsSync('dist/sitemap.xml')
  ? (read('dist/sitemap.xml').match(/<loc>/g) || []).length
  : 0;
const assessmentEntries = fs.readdirSync('src/pages/services/assessments').filter((entry) => fs.statSync(path.join('src/pages/services/assessments', entry)).isDirectory()).length;
const toolPages = fs.readdirSync('src/pages/tools').filter((file) => file.endsWith('.astro')).length;
const remoteSha = execFileSync('git', ['rev-parse', 'origin/main'], { encoding: 'utf8' }).trim();
const headSha = execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
const fmt = (value) => value.toLocaleString('en-US');
const words = { 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen', 20: 'twenty', 21: 'twenty-one', 22: 'twenty-two', 23: 'twenty-three', 24: 'twenty-four', 25: 'twenty-five' };

const checks = [
  ['checked-out main matches origin/main', remoteSha === headSha && audit.includes('remote `origin/main` SHA matched the checked-out `main` branch')],
  [`source page count ${sourcePages}`, audit.includes(`${fmt(sourcePages)} page entry files`)],
  [`HTML page count ${htmlPages}`, audit.includes(`${fmt(htmlPages)} HTML files`)],
  [`sitemap location count ${sitemapLocations}`, audit.includes(`${fmt(sitemapLocations)} sitemap locations`)],
  [`assessment entry count ${assessmentEntries}`, audit.includes(`${fmt(assessmentEntries)} assessment entries`)],
  [`tool page count ${toolPages}`, audit.includes(`${words[toolPages] || toolPages} tool-page entries`)],
  [`Class 12 route count ${chartRoutes}`, audit.includes(`${chartRoutes} route records`)],
  ['current non-claims', audit.includes('does not claim that all 118 proposed new tools exist')],
  ['data strategy record', audit.includes('docs/data-strategy-decision-record-2026-10-11.md')],
  ['historical objective reconciliation', audit.includes('Historical-objective reconciliation') && audit.includes('Seven editorial datasets are published')],
  ['social-skills assessment evidence', audit.includes('/services/assessments/social-skills-self-assessment/') && audit.includes('25-question, five-domain')],
  ['career route finder evidence', audit.includes('/tools/career-route-finder/') && audit.includes('612-record editorial catalogue')],
  ['student business calculator evidence', audit.includes('/tools/student-business-idea-feasibility-calculator/') && audit.includes('14-day test plan')],
  ['degree pathway planner evidence', audit.includes('/tools/degree-career-project-planner/') && audit.includes('four subject families')],
  ['verification workbench evidence', audit.includes('/tools/career-database-verification-workbench/') && audit.includes('verification workbench')],
  ['course verification workbench evidence', audit.includes('/tools/course-eligibility-verification-workbench/') && audit.includes('Course-rule verification workflow') && audit.includes('15-record queue')],
  ['career decision journal evidence', audit.includes('/tools/career-decision-journal/') && audit.toLowerCase().includes('career decision journal')],
  ['stale false-positive reconciliation', audit.includes('separate false-positive review') && audit.includes('not as missing products')],
  ['tracker limitation disclosure', audit.includes('Cross-device tracker persistence') || audit.includes('cross-device tracker persistence')],
  ['validation execution protocol evidence', audit.includes('ready-to-run session sheet') && audit.includes('field testing is still not conducted')],
  ['full-sheet keyword evidence', fs.existsSync('docs/keyword-opportunity-analysis-2026-10-11.md') && read('docs/keyword-opportunity-analysis-2026-10-11.md').includes('106,558') && read('docs/keyword-opportunity-analysis-2026-10-11.md').includes('98,069')],
  ['privacy-safe tracker sharing evidence', audit.includes('Privacy-safe tracker sharing') && audit.includes('no name, notes, files or evidence URLs')],
  ['study-abroad planner evidence', audit.includes('/tools/study-abroad-readiness-planner/') && audit.includes('does not verify admission, visas, migration, costs or employment outcomes')],
  ['skill-to-service mapper evidence', audit.includes('/tools/skill-to-service-mapper/') && audit.includes('does not promise clients, demand, income or professional eligibility')],
  ['career experiment planner evidence', audit.includes('/tools/career-experiment-planner/') && audit.includes('One experiment cannot prove career fit, future income or placement')],
  ['rendered scan counts', audit.includes(`Internal URL check across ${fmt(htmlPages - 1)} pages`) && audit.includes('Page-media check across 763 pages') && audit.includes('Strict image audit across 725 pages')],
];
for (const [label, ok] of checks) if (!ok) throw new Error(`Audit consistency failed: ${label}`);
console.log(`Audit consistency passed: remote ${remoteSha.slice(0, 8)}, ${fmt(sourcePages)} source pages, ${fmt(htmlPages)} HTML pages, ${toolPages} tool pages, ${chartRoutes} Class 12 routes.`);
