import { readFile } from 'node:fs/promises';

const dataFile = 'src/config/courseEligibilityFinder.ts';
const componentFile = 'src/components/CourseEligibilityFinder.astro';
const jsonFile = 'src/pages/data/course-eligibility-2026.json.ts';
const csvFile = 'src/pages/data/course-eligibility-2026.csv.ts';
const queueJsonFile = 'src/pages/data/course-eligibility-verification-queue-2026.json.ts';
const queueCsvFile = 'src/pages/data/course-eligibility-verification-queue-2026.csv.ts';
const data = await readFile(dataFile, 'utf8');
const component = await readFile(componentFile, 'utf8');
const json = await readFile(jsonFile, 'utf8');
const csv = await readFile(csvFile, 'utf8');
const queueJson = await readFile(queueJsonFile, 'utf8');
const queueCsv = await readFile(queueCsvFile, 'utf8');

if (!data.includes('COURSE_FINDER_META') || !data.includes("editoriallyReviewedOn: '11 October 2026'") || !data.includes("recordStatus: 'source-mapped-not-independently-verified'") || !data.includes('sourceReview') || !data.includes('doesNotConfirm') || !data.includes('verificationGap') || !data.includes('COURSE_SCALE')) {
  throw new Error('Course finder is missing its explicit editorial review date.');
}

const records = [...data.matchAll(/^    id: '/gm)];
if (records.length < 15) {
  throw new Error(`Course finder has only ${records.length} records; expected the editorial route set.`);
}
const scaleIds = [...data.matchAll(/^  '([^']+)': \{ scale: '(?:high|mid|low)'/gm)].map((match) => match[1]);
const recordIds = [...data.matchAll(/^    id: '([^']+)'/gm)].map((match) => match[1]);
if (scaleIds.length !== recordIds.length || recordIds.some((id) => !scaleIds.includes(id))) {
  throw new Error(`Every course finder record needs one explicit scalability rating (${scaleIds.length}/${recordIds.length}).`);
}
if ((data.match(/^    examTags: /gm) || []).length !== records.length || !data.includes('examTags: []')) {
  throw new Error('Every course finder record needs explicit exam tags, including route-only records.');
}

const sourceBlocks = [...data.matchAll(/sources: \[([\s\S]*?)\],\n  \},/g)];
if (sourceBlocks.length !== records.length || sourceBlocks.some((match) => !match[1].includes('SOURCE.') && !match[1].includes('label:'))) {
  throw new Error('Every course finder record must carry at least one explicit official source.');
}

for (const needle of ['COURSE_ELIGIBILITY_RECORDS', 'COURSE_SCALE', 'scale: COURSE_SCALE', 'Scalable with a business layer', 'Not so scalable', 'meta.editoriallyReviewedOn', 'meta.recordStatus', 'Official starting pages', 'institute notice', 'commerce-no-maths', 'mpc', 'bipc', 'bipc-no-neet', 'excludeExam', 'data-cef="exam"', 'state.exam']) {
  if (!component.includes(needle)) throw new Error(`Course finder UI is missing: ${needle}`);
}
for (const needle of ['sourceReview', 'COURSE_FINDER_META.sourceReview']) {
  if (!json.includes(needle)) throw new Error(`Course finder JSON export is missing: ${needle}`);
  if (!csv.includes(needle)) throw new Error(`Course finder CSV export is missing: ${needle}`);
}
for (const needle of ['TG-EAPCET', 'knruhsNursing', 'bsc-nursing-telangana-state']) {
  if (!data.includes(needle)) throw new Error(`Course finder data is missing: ${needle}`);
}
for (const [label, text, needles] of [
  ['verification queue JSON', queueJson, ['COURSE_FINDER_VERIFICATION_QUEUE', 'not-published', 'requiredFields', 'COURSE_FINDER_META.recordStatus']],
  ['verification queue CSV', queueCsv, ['COURSE_FINDER_VERIFICATION_QUEUE', 'not verified admission data', 'required_fields']],
]) {
  for (const needle of needles) if (!text.includes(needle)) throw new Error(`${label} is missing: ${needle}`);
}

const noNeetPage = await readFile('src/pages/tools/pcb-career-options-without-neet.astro', 'utf8');
for (const needle of ['initialPreset="bipc-no-neet"', 'without NEET', 'Telangana state B.Sc. Nursing', 'not a guarantee']) {
  if (!noNeetPage.includes(needle)) throw new Error(`PCB without NEET route is missing: ${needle}`);
}

console.log(`Course eligibility finder passed: ${records.length} records with dated source blocks.`);
