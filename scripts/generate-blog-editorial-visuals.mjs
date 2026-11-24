/* Round 11 source-driven visual generator. Hero artwork remains raster; explanatory
 * visuals also carry structured content so the site can render them as live cards. */
import { readFile, readdir, mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { parse } from 'parse5';
import sharp from '../node_modules/.pnpm/sharp@0.33.5/node_modules/sharp/lib/index.js';

sharp.concurrency(8);
const DIST = 'dist';
const OUT = 'public/images/blog/generated-r11';
const plainLanguageEdits = new Map(Object.entries({
  '/blog/freelancing-business/how-to-start-freelancing/': [['GATE', 'Stage']],
  '/blog/career-options/library-and-information-science-career-options/': [['UGC-NET for Library Science: the Real GATE', 'UGC-NET for Library Science: the Main Qualification']],
  '/blog/career-options/safe-career-options-for-girls-in-india/': [['The two-GATE trap (government, banking, civil services).', 'Government, banking and civil-service exams can narrow choices.']],
  '/blog/freelancing-business/business-ideas-for-students/': [['Age and Rules GATE, Before Any Idea', 'Check age rules before choosing a business idea.']],
  '/blog/career-options/career-in-finance-vs-accounting-india/': [['Finance roles (financial analyst, investment banking, corporate finance, equity research) have no licensing exam GATE; entry depends on skill, resume, and interview performance.', 'Finance roles (financial analyst, investment banking, corporate finance, equity research) do not require a licensing exam; entry depends on skill, resume, and interview performance.']],
  '/blog/career-options/career-options-after-12th-except-medical/': [['entry gate for each', 'entry requirement for each'], ['GATE for', 'Entry requirement for'], ['opposite gate.', 'different entry requirement.'], ['opposite gates', 'different entry requirements']],
  '/blog/career-options/mathematics-career-options/': [['Read the GATE before the glamour.', 'Check the entry requirements before the glamour.']],
  '/blog/career-options/biology-career-options-after-12th/': [['Ask for the second GATE, not only the first.', 'Ask what comes after the first entrance exam.'], ['GATE', 'Entrance Exam']],
  '/blog/career-options/career-options-after-12th-humanities/': [['GATE Many Humanities Students Discover Too Late', 'Maths Requirement Many Humanities Students Discover Too Late']],
  '/blog/career-options/physical-education-career-options/': [['Subject, not a GATE', 'A subject, not an entrance test']],
  '/blog/career-options/is-astronomy-a-good-career-in-india/': [['The path is a funnel: degree, PhD GATE, funded PhD, postdoc, permanent post.', 'The path narrows from degree to PhD admission, funded research, postdoc and a permanent post.']],
  '/blog/skill-roadmaps/machine-learning-roadmap-india/': [['Treat calculus as a later unlock, not a GATE.', 'Treat calculus as a later skill, not a starting barrier.']],
  '/blog/career-options/cybersecurity-roadmap-india/': [['Realistic starting GATE for almost everyone', 'A realistic first step for most people']],
  '/blog/college-degrees/how-to-compare-colleges-for-career-outcome-india/': [['Add a ninth GATE: budget resilience.', 'Add a ninth check: budget resilience.']],
  '/blog/stream-selection/coding-vs-pcm-for-future-engineers/': [['A coding certificate never replaces the stream at the seat GATE.', 'A coding certificate never replaces the stream requirement for admission.']],
  '/blog/career-options/mortuary-science-careers-india/': [['This Route Is a Genuine Two-GATE Competition', 'This Route Has Two Competitive Entry Stages'], ['a genuine two-GATE competitive path.', 'a competitive path with two entry stages.'], ["That is not a gap in this article's research. It is the actual, current state of the field.", 'India has no equivalent credentialed mortuary-science profession today.'], ["That is not a gap in this article&#39;s research. It is the actual, current state of the field.", 'India has no equivalent credentialed mortuary-science profession today.']],
  '/blog/career-options/law-career-options/': [['Entry Rules At Each GATE', 'Entry Rules at Each Stage'], ['Stage Decides Your Next Legal GATE', 'Your Stage Determines the Next Legal Requirement'], ['Your stage decides your next legal GATE.', 'Your stage determines the next legal requirement.'], ['Same AIBE gate.', 'The AIBE requirement is the same.'], ['No further licence. The next gates are a chamber seat, a firm interview, a state judicial notification or a client.', 'No further licence. Next steps include a chamber seat, a firm interview, a state judicial notice or finding clients.'], ['Gate and entry rule', 'Entry route and requirement']],
  '/blog/career-options/is-forensic-science-a-good-career/': [['The real GATE is a competitive government recruitment exam, not a licence.', 'The real hurdle is a competitive government recruitment exam, not a licence.'], ['A second, separate competitive GATE sits further down the road, not just at entry.', 'A second competitive exam comes later, not just at entry.']],
  '/blog/career-options/career-chart-after-12th/': [['Write the real entry GATE and date for each.', 'Write the entry requirement and date for each.'], ['Entry GATE', 'Entry Requirement']],
  '/blog/career-options/is-optometry-a-good-career/': [['B.Optom admission runs on 12th marks or a college entrance test, not NEET, a genuinely lighter and cheaper entry GATE than MBBS, BDS, or BVSc.', 'B.Optom admission runs on 12th marks or a college entrance test, not NEET; it is a lighter, cheaper route than MBBS, BDS, or BVSc.']],
  '/blog/career-options/is-food-technology-a-good-career-in-india/': [['This is a two-stage competitive GATE, not one.', 'Competition runs through two stages, not one.']],
  '/blog/career-options/is-project-management-a-good-career-in-india/': [['There is no single legal GATE.', 'There is no single legal requirement.']],
  '/blog/career-options/career-options-for-average-students-india/': [['Marks genuinely GATE entry into specific', 'Marks genuinely limit entry to specific']],
  '/blog/career-options/msc-biotechnology-career-options/': [['Named Institutes and the Real Admission GATE', 'Named Institutes and Real Admission Requirements'], ['Three exams GATE the funded-PhD door for an MSc Biotechnology graduate.', 'Three exams open the funded-PhD route for an MSc Biotechnology graduate.']],
  '/blog/career-options/career-after-ba-english-literature-india/': [['Do you want a government-gated door or a private-sector door.', 'Do you want a government-exam route or a private-sector route.']],
  '/blog/career-options/career-after-ba-history-india/': [['Do you want a government-gated door or a private-sector door.', 'Do you want a government-exam route or a private-sector route.']],
  '/blog/college-degrees/career-without-degree-after-12th-india/': [['some routes remain degree-gated', 'some roles still require a degree']],
  '/blog/career-options/is-physiotherapy-a-good-career-in-india/': [['This field gates you twice, not once.', 'This field requires both professional registration and continued specialization.']],
  '/blog/career-options/is-corporate-law-a-good-career-in-india/': [['The same degree leads to six corporate routes with different gates.', 'The same degree leads to six corporate routes with different entry requirements.']],
  '/blog/career-options/is-salesforce-a-good-career/': [['Unlike a CS-degree-gated software engineering role, Salesforce has a genuinely open front door.', 'Unlike software engineering roles that require a CS degree, Salesforce has a more open entry route.']],
  '/blog/career-guidance/myths-about-choosing-a-career-india/': [['Marks matter for some gates', 'Marks matter for some exam eligibility rules']],
  '/blog/career-options/is-aviation-a-good-career-in-india/': [['are gated and rank-bound', 'require competitive exams and rank-based selection']],
  '/blog/career-options/is-lawyer-a-good-career-in-india/': [['The All India Bar Examination (AIBE) is the licence-to-practice GATE.', 'The All India Bar Examination (AIBE) is required to practise law.'], ['AIBE and State Bar Council enrolment are real gates, not paperwork.', 'AIBE and State Bar Council enrolment are required steps, not paperwork.']],
  '/blog/career-options/is-youtube-a-good-career-in-india/': [['The Partner Programme is the GATE to ad money.', 'The Partner Programme opens the route to ad revenue.'], ['Career or Lottery: the Short Answer', 'YouTube Earnings Depend on the Audience']],
  '/blog/career-options/is-business-analyst-a-good-career-in-india/': [['MBA-entry route', 'MBA pathway']],
  '/blog/career-options/career-after-phd-political-science/': [['The entry route is rarely a cold pitch straight after the viva.', 'First roles rarely come from a cold pitch after the viva.']],
  '/blog/career-options/how-to-get-into-event-management-india/': [['Top freelancers in metro cities charge ₹30,000-50,000 per day for high-profile events; income is project-based and not monthly.', 'Metro freelancers: ₹30,000–50,000 per day.']],
  '/blog/career-options/is-international-business-a-good-career-in-india/': [['Graduate who builds sourcing or market research skill for one product', 'Product-specific market research'], ['Student who pays for an international business diploma with a job promise', 'Job-promise business diploma']],
  '/blog/college-degrees/best-mba-specializations-india/': [['Communication-strong graduates who enjoy consumer psychology', 'Graduates who enjoy consumer psychology']],
  '/blog/college-degrees/job-oriented-courses-for-ece-students/': [['Software that runs on devices: sensors, controllers, vehicles, industrial equipment', 'Firmware for sensors and devices']],
  '/blog/career-guidance/emcee-script-and-invitation-for-a-career-guidance-programme-india/': [['Please write one question you would like the speaker to answer.', 'Prepare one question for the speaker.']],
  '/blog/career-options/social-science-career-options/': [['Clear postgraduate plan and a quantitative foundation', 'A clear quantitative plan for postgraduate study']],
  '/blog/career-options/iti-career-options/': [['Many popular trades ask for Class 10 pass', 'Many trades require Class 10']],
  '/blog/stream-selection/engineering-vs-other-streams-which-is-better-career-india/': [['Roughly 67,323 combined seats across IITs, NITs, IIITs and GFTIs through JoSAA, against lakhs of JEE Main registrations each year', '67,323 seats across four institute groups'], ['Do you enjoy this type of work?', 'Would you enjoy this kind of work?']],
  '/blog/career-options/career-options-in-commerce/': [['Do you enjoy this type of work?', 'Would you enjoy this kind of work?']],
  '/blog/parents/how-to-support-child-during-career-confusion/': [['Name what you notice ("you seem stuck on this"), let your child describe the confusion in their own words without you correcting or redirecting, and', 'Name what you notice, then let your child describe the confusion in their own words.']],
  '/blog/parents/how-to-guide-child-in-career-selection-india/': [['Start conversations early (class 8-9 is not too soon), ask open questions instead of stating conclusions, use a free assessment as one input rather than the final word, a', 'Start early, ask open questions, and treat assessments as one input.']],
  '/blog/career-options/career-in-home-science/': [['Use the same four steps every time you compare two serious tracks from .', 'Use four questions to compare serious home science career tracks.']],
}));
const heroAnswerOverrides = new Map([
  ['/services/career-counselling-and-career-guidance/career-counselling-for-college-students/', 'Use internships and specialization to build real proof before graduation.'],
  ['/blog/career-options/how-to-get-into-event-management-india/', 'Start with an event role; build proof before working independently.'],
]);
// A number belongs on a hero only when its source and meaning are clearly
// tied to the page topic. This article's extracted 20% figure is an event
// budget share, not a career outcome, so its hero must not turn it into one.
const heroWithoutFigures = new Set([
  '/blog/career-options/how-to-get-into-event-management-india/',
]);
const needsFile = process.argv.find((arg) => arg.startsWith('--needs-csv='))?.slice(12) || 'C:\\Users\\Jack Sparrow\\Downloads\\infographic_needs_v11.csv';
const metadataOnly = process.argv.includes('--metadata-only');
const allServicePages = process.argv.includes('--all-service-pages');
const shard = Number(process.argv.find((arg) => arg.startsWith('--shard='))?.slice(8) || 0);
const shards = Number(process.argv.find((arg) => arg.startsWith('--shards='))?.slice(9) || 1);
const routeFilter = process.argv.find((arg) => arg.startsWith('--route='))?.slice(8);
const routeFile = process.argv.find((arg) => arg.startsWith('--routes-file='))?.slice(14);
const routeFilters = new Set([
  ...(process.argv.find((arg) => arg.startsWith('--routes='))?.slice(9) || '').split(','),
  ...(routeFile ? (await readFile(routeFile, 'utf8')).split(/\r?\n/) : []),
].map((value) => value.trim()).filter(Boolean));
const onlyHero = process.argv.includes('--only-hero');
const excludeReportPages = process.argv.includes('--exclude-report-exclusions');
const excludeAssessmentPages = process.argv.includes('--exclude-assessments');
const excludedBlogRoutes = new Set();
if (excludeReportPages) {
  const report = await readFile('docs/image-audit/blog-summary.csv', 'utf8').catch(() => '');
  for (const line of report.split(/\r?\n/).slice(1)) {
    const [excluded, route] = line.split(',', 2);
    if (excluded === '1' && route) excludedBlogRoutes.add(route.trim());
  }
}
const PHONE = { width: 900, height: 1350 };
const DESKTOP = { width: 1000, height: 1500 };
async function writeManifest(file, content) { for (let attempt = 0; ; attempt += 1) { try { await writeFile(file, content); return; } catch (error) { if (attempt >= 5 || !['UNKNOWN', 'EPERM', 'EBUSY'].includes(error.code)) throw error; await new Promise((resolve) => setTimeout(resolve, 250 * (attempt + 1))); } } }
const palettes = [
  ['#f5efe3', '#17324d', '#c45e48', '#718763', '#d5aa59'],
  ['#eef1e8', '#203b3b', '#b95b4d', '#788c67', '#d7ae57'],
  ['#f3e9df', '#2a2c40', '#c87151', '#668c8b', '#e1b55d'],
  ['#edf0ed', '#203949', '#c66d53', '#718a6e', '#d7b05f'],
];
const esc = (value) => String(value ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
function applyPlainLanguageEdits(value, edits) {
  if (!edits?.length) return value;
  const rewrite = (text) => edits.reduce((result, [before, after]) => result.replace(new RegExp(before.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'), after), text);
  if (typeof value === 'string') return rewrite(value);
  if (Array.isArray(value)) return value.map((item) => applyPlainLanguageEdits(item, edits));
  if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, applyPlainLanguageEdits(item, edits)]));
  return value;
}
const hash = (value) => { let n = 0; for (const c of value) n = (n * 31 + c.charCodeAt(0)) >>> 0; return n; };
const badEnd = new Set(['a', 'an', 'the', 'to', 'of', 'and', 'for', 'in', 'on', 'with', 'without', 'can', 'cannot', "can't", 'won\'t', 'don\'t', 'doesn\'t', 'didn\'t', 'hasn\'t', 'haven\'t', 'hadn\'t', 'aren\'t', 'isn\'t', 'wasn\'t', 'weren\'t', 'you', 'how', 'what', 'who', 'which', 'whether', 'whose', 'is', 'not', 'just', 'only', 'usually', 'at', 'by', 'or', 'we', 'it', 'as', 'if', 'that', 'from', 'while', 'when', 'where', 'about', 'during', 'after', 'before', 'into']);
const badStart = new Set(['a', 'an', 'the', 'to', 'of', 'and', 'for', 'in', 'on', 'with', 'can', 'you', 'how', 'is', 'at', 'by', 'or', 'off', 'into', 'from', 'after', 'before', 'during', 'through', 'while', 'because', 'if', 'when', 'where', 'that', 'which', 'who', 'what', 'your', 'their', 'its', 'they', 'we', 'our', 'he', 'she', 'but', 'usually', 'often', 'sometimes', 'generally', 'mostly', 'simply', 'really', 'problem']);
const clean = (value) => String(value ?? '')
  .replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&quot;|&#34;/g, '"').replace(/&#39;|&apos;|&rsquo;|&lsquo;|&#8216;|&#8217;/gi, "'").replace(/&ldquo;|&rdquo;|&#8220;|&#8221;/gi, '"').replace(/&nbsp;/g, ' ')
  .replace(/[“”‘’]/g, "'").replace(/…|\.\.\./g, '')
  .replace(/(?:growth:\s*the decisions that unlock|our scalability view|short answer:|what to verify:|this is our scalability view|this point needs evidence before choosing|point [123]|test the path with one project|check realistic pay before choosing|compare options before you commit|in short 01 02|article-specific career decision map|article-specific|what this article covers)/gi, '')
  .replace(/\b(undefined|tbd|lorem)\b/gi, '')
  .replace(/\bbiology[- ]gate\b/gi, 'biology eligibility').replace(/\bgates?\b/gi, (match) => match === match.toUpperCase() ? match : match.toLowerCase() === 'gates' ? 'steps' : 'entry requirement').replace(/\bcheckpoints\b/gi, 'steps').replace(/\bcheckpoint\b/gi, 'step').replace(/\bleveraging\b/gi, 'using').replace(/\bleveraged\b/gi, 'used').replace(/\bleverage\b/gi, 'use').replace(/\bcohorts\b/gi, 'groups').replace(/\bcohort\b/gi, 'group').replace(/\bheuristics\b/gi, 'rules of thumb').replace(/\bheuristic\b/gi, 'rule of thumb').replace(/\bscalability\b/gi, 'growth')
  .replace(/\s+/g, ' ').trim();
function isSharedPromoCopy(value) { const normalized = clean(value).toLowerCase().replace(/[’']/g, "'"); return ['a low-friction first step before the wrong path costs more time and money', 'wrong streams, outdated degrees, and low-value skills that waste years and money', 'useful skills, future readiness, and a clearer next decision', 'real student growth comes from a series of better decisions', 'practical student career guidance before the wrong path wastes years, money, and future readiness', 'practical student career counselling before the wrong path wastes years, money, and future readiness', 'practical student before the wrong path wastes years, money, and future readiness', 'includes the 1-on-1 and up to 24 small-group sessions across the year', 'see broader student guidance and useful reading before you decide', 'see the result-week admission decision, the earlier stream conversation, broader student guidance', 'move to a grade-specific page once the exact decision is clear'].some((phrase) => normalized.includes(phrase)); }
const words = (value) => clean(value).split(/\s+/).filter(Boolean);
const lastWord = (value) => words(value).at(-1)?.toLowerCase().replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '');
const titleCase = (value) => words(value).map((word, index) => {
  const prefix = word.match(/^[^a-z0-9]*/i)?.[0] || ''; const core = word.slice(prefix.length); const lower = core.toLowerCase();
  if (core.length > 1 && core === core.toUpperCase() && /[A-Z]/.test(core)) return prefix + core;
  if (lower === 'bsc') return prefix + 'BSc';
  if (lower === 'btech') return prefix + 'BTech';
  if (lower === 'bcom') return prefix + 'BCom';
  if (/^(ai|bca|bba|mba|bipc|pcm|pcb|aiims|neet|upsc|ssc|ca|cs|ui|ux|hr|wef|bls|upi|gdp|gw|ev|lpa|nasscom|esg|soc|grc|gate|ncsm|ios)$/.test(lower)) return prefix + lower.toUpperCase();
  if (core.includes('-')) return prefix + core.split('-').map((part) => /^(ai|bca|bba|mba|bipc|pcm|pcb|aiims|neet|upsc|ssc|ca|cs|ui|ux|hr|wef|bls|upi|gdp|gw|ev|lpa|nasscom|esg|soc|grc|gate|ncsm|ios)$/i.test(part) ? part.toUpperCase() : part.toLowerCase().replace(/^([a-z])/, (_, c) => c.toUpperCase())).join('-');
  if (index && /^(and|or|of|for|in|on|to|with|the|a|an)$/.test(lower)) return prefix + lower;
  return prefix + lower.charAt(0).toUpperCase() + lower.slice(1);
}).join(' ');
function sentenceParts(value) { const source = clean(value).replace(/\b(Rs|Dr|Mr|Ms)\.\s/gi, '$1 '); return source.split(/(?<=[!?])\s+|(?<=\.)\s+(?=[A-Z0-9₹$"'(])/).map((part) => part.trim()).filter(Boolean); }
function sentence(value, max = 9) { const exact = sentenceParts(value).find((part) => /[.!?]$/.test(part) && words(part).length <= max && !badEnd.has(lastWord(part))); return exact ? `${exact.replace(/[.!?]+$/, '')}.`.replace(/^([a-z])/, (_, c) => c.toUpperCase()) : ''; }
function shortSentence(value, max = 14) { return sentenceParts(value).find((part) => /[.!?]$/.test(part) && words(part).length <= max && !badEnd.has(lastWord(part))) || ''; }
function phrase(value, max = 8) { const picked = words(clean(value).split(/[.!?]/)[0]).slice(0, max); while (picked.length && badEnd.has(lastWord(picked.join(' ')))) picked.pop(); return picked.join(' '); }
function wrap(value, maxChars) { const out = []; let line = ''; for (const word of words(value)) { if (line && `${line} ${word}`.length > maxChars) { out.push(line); line = word; } else line = `${line} ${word}`.trim(); } if (line) out.push(line); return out; }
function visualWordCount(value) { const normalized = String(value || '').replace(/(?<=\p{L})\.(?=\p{L})/gu, ''); return (normalized.match(/[\p{L}\p{N}]+(?:[’'-][\p{L}\p{N}]+)*(?:&[\p{L}\p{N}]+)*/gu) || []).length; }
function textLines(value, x, y, size, maxChars, fill, maxLines = 4, weight = 600, anchor = 'start', maxWidth = Infinity) { const lines = wrap(value, maxChars); if (lines.length > maxLines) return ''; const longest = Math.max(1, ...lines.map((line) => line.length)); const fittedSize = Math.min(size, Number.isFinite(maxWidth) ? maxWidth / (longest * 0.55) : size); return lines.map((line, i) => `<text x="${x}" y="${y + (i * fittedSize * 1.16)}" text-anchor="${anchor}" font-family="Arial,Helvetica,sans-serif" font-size="${fittedSize}" font-weight="${weight}" fill="${fill}">${esc(line)}</text>`).join(''); }
function shortCell(value) {
  const source = clean(value).replace(/[\s,;:]+$/, '').replace(/^(?:is|are|was|were)\s+(?:this|that)\s+/i, '').replace(/^(?:the|a|an)\s+/i, '');
  const capitalize = (text) => text.replace(/^([a-z])/, (_, c) => c.toUpperCase());
  const danglingVerb = /^(?:charges?|pays?|needs?|requires?|wants?|builds?|chooses?|offers?|opens?|leads?|gives?|provides?|covers?|includes?|teaches?|shows?|means?|creates?|makes?|delivers?|supports?|connects?|depends?|asks?|allows?|helps?)$/i;
  const incomplete = (text) => { const last = lastWord(text); return badEnd.has(last) || danglingVerb.test(last || '') || /\b(?:a|an|the)\s+[\p{L}-]+$/iu.test(text) || /\b(?:and|or)\s+[\p{L}-]+$/iu.test(text); };
  const finish = (text, minimum = 2) => { const picked = words(text); while (picked.length && badStart.has(picked[0].toLowerCase().replace(/[^a-z]/g, ''))) picked.shift(); while (picked.length && incomplete(picked.join(' '))) picked.pop(); const result = picked.join(' ').replace(/[,;:]+$/, ''); return visualWordCount(result) >= minimum && visualWordCount(result) <= 6 && !incomplete(result) ? capitalize(result) : ''; };
  const firstSentence = sentenceParts(source)[0] || '';
  if (/[.!?]$/.test(firstSentence) && visualWordCount(firstSentence) <= 6 && !incomplete(firstSentence)) return capitalize(firstSentence.replace(/[.!?]+$/, ''));
  if (visualWordCount(source) <= 6 && !incomplete(source)) return capitalize(source);
  const normalized = source.replace(/^\d+[.)]\s*/, '').replace(/\(([^)]*)\)/g, (_, inner) => ` ${inner.replace(/\s+\/\s+/g, ' or ')} `).replace(/\s*\([^)]*$/, '').replace(/^Then\s+/i, '').trim();
  if (visualWordCount(normalized) <= 6 && !incomplete(normalized)) return capitalize(normalized);
  const mainClause = normalized.split(/(?<=[.!?])\s+|\s*;\s*/)[0];
  // Do not treat thousands separators such as ₹30,000 as phrase boundaries.
  const chunks = mainClause.split(/,\s+/).map(clean).filter(Boolean);
  const shortList = chunks.length >= 3 && chunks.slice(0, 4).every((part) => visualWordCount(part) <= 2);
  if (shortList) return finish(phrase(mainClause, 6));
  for (const chunk of chunks) { const selected = visualWordCount(chunk) <= 6 ? chunk : phrase(chunk, 6); const result = finish(selected); if (result) return result; }
  return finish(phrase(mainClause, 6));
}
function csvRows(text) { const rows = []; let row = []; let cell = ''; let quote = false; for (let i = 0; i < text.length; i += 1) { const c = text[i]; if (c === '"' && text[i + 1] === '"' && quote) { cell += '"'; i += 1; continue; } if (c === '"') { quote = !quote; continue; } if (c === ',' && !quote) { row.push(cell); cell = ''; continue; } if ((c === '\n' || c === '\r') && !quote) { if (c === '\r' && text[i + 1] === '\n') i += 1; row.push(cell); if (row.some(Boolean)) rows.push(row); row = []; cell = ''; continue; } cell += c; } if (cell || row.length) { row.push(cell); rows.push(row); } return rows; }
async function loadNeeds() { try { const rows = csvRows(await readFile(needsFile, 'utf8')); const header = rows.shift(); const map = new Map(); for (const row of rows) { const item = Object.fromEntries(header.map((key, i) => [key, row[i] || ''])); if (!item.page) continue; const type = item.infographic_needed.startsWith('COMPARISON') ? 'matrix' : item.infographic_needed.startsWith('NUMBERS') ? 'proof' : item.infographic_needed.startsWith('CHECKLIST') ? 'checklist' : item.infographic_needed.startsWith('STEP') ? 'chain' : item.infographic_needed.startsWith('TEXT') ? 'detail' : ''; if (!type) continue; if (!map.has(item.page)) map.set(item.page, []); map.get(item.page).push({ ...item, type }); } return map; } catch { return new Map(); } }
function nodeText(node) { return (node.childNodes || []).map((child) => child.nodeName === '#text' ? child.value : nodeText(child)).join(' '); }
function collapseRepeatedOpening(value) { const parts = String(value || '').split(/\s+/); const key = (items) => items.join(' ').toLowerCase().replace(/[^a-z0-9₹$%]+/g, ' ').trim(); for (let length = Math.min(8, Math.floor(parts.length / 2)); length >= 3; length -= 1) { if (key(parts.slice(0, length)) && key(parts.slice(0, length)) === key(parts.slice(length, length * 2))) return [...parts.slice(length), ...parts.slice(length * 2)].join(' '); } return value; }
function walk(node, fn, blocked = false) { if (!node || blocked) return; fn(node); const className = (node.attrs || []).find((attribute) => attribute.name === 'class')?.value || ''; const stop = ['aside', 'nav', 'header', 'footer'].includes(node.tagName) || /(?:article-live-visual|bofu-live-diagram)/.test(className); for (const child of node.childNodes || []) walk(child, fn, stop); }
function pageData(html, isBlog = false) { const doc = parse(html); let main = null; let description = ''; let bestArticle = null; let bestArticleLength = 0; walk(doc, (node) => { if (node.tagName === 'main' && !main) main = node; if (node.tagName === 'meta') { const attrs = Object.fromEntries((node.attrs || []).map((attribute) => [attribute.name, attribute.value])); if (attrs.name?.toLowerCase() === 'description') description = clean(attrs.content || ''); } if (node.tagName === 'article') { const length = nodeText(node).length; if (length > bestArticleLength) { bestArticle = node; bestArticleLength = length; } } }); const root = main || (isBlog ? bestArticle : null) || doc; const headings = []; const facts = []; const lists = []; const sections = []; let current = null; let currentSubheading = ''; walk(root, (node) => { if (!node.tagName) return; const raw = collapseRepeatedOpening(clean(nodeText(node))); if ((node.tagName === 'h2' || node.tagName === 'h3') && raw) { const h = titleCase(raw); if (!headings.includes(h)) headings.push(h); if (node.tagName === 'h2') { current = { title: h, facts: [] }; currentSubheading = ''; sections.push(current); } else if (node.tagName === 'h3') currentSubheading = h; } const className = (node.attrs || []).find((attribute) => attribute.name === 'class')?.value || ''; const faqAnswer = /(?:^|\s)faq-a(?:\s|$)/.test(className); const faqQuestion = node.tagName === 'summary' && node.parentNode?.tagName === 'details'; const structuredEvidence = /(?:^|\s)(?:checkpoint__note|lane-row--(?:layer|fit|watch))(?:\s|$)/.test(className); const sourceTag = ['p', 'li', 'dt', 'dd', 'td'].includes(node.tagName) || faqAnswer || faqQuestion || structuredEvidence; if (sourceTag && raw.length > 24 && !isSharedPromoCopy(raw) && !/read is [^.!?]+|want a second opinion on this decision|want to talk to (?:a )?counsellor|book (?:a )?session|call now|contact us|read next|related posts?|you may also like|share this article/i.test(raw)) { const text = sentence(raw, 100) || raw; const item = { text, raw, heading: currentSubheading || current?.title || '' }; if (!facts.some((fact) => fact.raw === raw)) facts.push(item); if (node.tagName === 'li') lists.push(item); if (current && !current.facts.some((fact) => fact.raw === raw)) current.facts.push(item); } }); const numberFacts = facts.filter((fact) => /(?:₹|\b(?:rs\.?|inr)\b|\$)\s*[\d,.]+|\d+(?:,\d{3})*(?:\.\d+)?\s*(?:%|percent|lpa|lakh|crore|years?|months?|weeks?|hours?|days?|vacancies|students?|jobs?|applicants?|seats?)/i.test(fact.raw)); return { description, headings: headings.slice(0, 20), facts: facts.slice(0, 100), lists: lists.slice(0, 30), numberFacts, sections: sections.slice(0, 50) }; }
function topicFrom(title, slug = '') { const cleanTitle = clean(title); const slugWords = words(String(slug).replace(/\bgate\b/gi, 'GATE').replaceAll('-', ' ')); const fallback = slugWords.slice(0, 6).join(' ') || cleanTitle; const lead = cleanTitle.split(/\s*:\s*/)[0]; const candidate = words(lead).length >= 3 && words(lead).length <= 7 && !isGenericVisualHeading(lead) ? lead : fallback; return titleCase(candidate).replace(/\bIndia\b$/i, 'India') || 'Career Path'; }
function shortHeading(value, fallback) { const rawSource = clean(value || fallback).replace(/[\s,;:]+$/, '').replace(/[.!?]+$/, '') || 'Career Evidence'; const dashTail = rawSource.split(/\s*[—–]\s*/).at(-1); const source = rawSource !== dashTail && visualWordCount(dashTail) >= 3 && visualWordCount(dashTail) <= 7 && !badEnd.has(lastWord(dashTail)) ? dashTail : rawSource; if (/^Mobile Apps\s*→/i.test(source)) return 'Mobile App Development'; if (/^\d+(?:\.\d+)?\s*(?:to|[–-])\s*\d+(?:\.\d+)?\s*(?:years?|months?)/i.test(source)) return 'Course Duration by Route'; if (/\bask a specific person a specific small question\b/i.test(source)) return 'Ask One Person One Question'; const fallbackTopic = compactTopic(fallback) || 'Career Guidance'; const safeFallback = words(fallback).length >= 3 && words(fallback).length <= 7 && !badEnd.has(lastWord(fallback)) ? clean(fallback) : (visualWordCount(fallbackTopic) >= 3 ? fallbackTopic : 'Career Guidance Overview'); const valid = (text) => { const count = visualWordCount(text); const first = words(text)[0]?.toLowerCase(); return count >= 3 && count <= 7 && (!badStart.has(first) || ['what', 'who', 'how', 'why', 'is'].includes(first)) && (!badEnd.has(lastWord(text)) || /\bIT[\s"'”’)!?]*$/u.test(text)); }; if (visualWordCount(source) <= 7 && valid(source)) return titleCase(source); const punctuated = source.split(/\s*(?::|;|,(?!\d)|[–—])\s*/).map((part) => clean(part)).filter(valid); if (punctuated.length) return titleCase(punctuated.sort((a, b) => visualWordCount(b) - visualWordCount(a))[0]); const incompleteSource = badEnd.has(lastWord(source)) || /\b(?:only|just|what|who|which|whether)$/i.test(source); if (!incompleteSource) { const tokens = words(source); const connectors = new Set(['a', 'an', 'the', 'to', 'of', 'for', 'in', 'on', 'with', 'before', 'after', 'than', 'through', 'during', 'from', 'into', 'around', 'across', 'between', 'without', 'by']); const auxiliaries = new Set(['has', 'have', 'had', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'does', 'do', 'did', 'can', 'could', 'should', 'would', 'will', 'may', 'might']); const candidates = []; for (let length = Math.min(7, tokens.length); length >= 3; length -= 1) for (let start = 0; start + length <= tokens.length; start += 1) { const option = tokens.slice(start, start + length).join(' '); if (!valid(option)) continue; const first = words(option)[0].toLowerCase(); const score = length * 2 + (start + length === tokens.length ? 5 : 0) + (start > 0 && connectors.has(tokens[start - 1].toLowerCase()) ? 3 : 0) - (auxiliaries.has(first) ? 4 : 0); candidates.push({ option, score }); } if (candidates.length) return titleCase(candidates.sort((a, b) => b.score - a.score)[0].option); } return titleCase(safeFallback || 'Career Evidence'); }
function completeShortHeading(value, fallback) { const tokens = words(value); const incomplete = new Set(['any', 'each', 'every', 'your', 'their', 'these', 'those', 'whose']); while (tokens.length >= 3 && (badEnd.has(tokens.at(-1).toLowerCase()) || incomplete.has(tokens.at(-1).toLowerCase()))) tokens.pop(); return tokens.length >= 3 ? titleCase(tokens.join(' ')) : shortHeading('', fallback); }
function isGenericVisualHeading(value) { return /^(?:evidence from|key ideas from|entry routes?\b|pay and cost\b|market signal\b|career evidence\b|(?:the )?short answer\b|the verdict\b|explore related help\b|an illustration(?:,|\s)+not a real|best if you are dealing|best if you need|these are rated|the ratings are judgement|evidence card|key figures?|limited|for the first|a low|wrong streams|useful skills|continuous career guidance|where people add value|organisational change is harder than)|\bmarket signal check\b|\s+detail$/i.test(clean(value).replace(/[.:]+$/, '')); }
function contentHeading(item, fallback) { const raw = clean(item?.raw || item?.text || ''); const section = clean(item?.heading || ''); const candidate = section || sentence(raw, 8) || clean(fallback); const result = shortHeading(candidate, fallback); return isGenericVisualHeading(result) ? shortHeading(fallback, fallback) : result; }
function compactTopic(topic) { const parts = words(topic).slice(0, 5); while (parts.length && badEnd.has(lastWord(parts.join(' ')))) parts.pop(); return titleCase(parts.join(' ')) || 'Career Guidance'; }
function heroTopic(topic) { const stop = new Set(['a', 'an', 'the', 'after', 'before', 'for', 'from', 'in', 'india', 'is', 'of', 'or', 'to', 'and', 'career', 'careers', 'options', 'option', 'good', 'best', 'how']); const selected = words(clean(topic)).filter((word) => !stop.has(word.toLowerCase())).slice(0, 4); return titleCase(selected.join(' ') || words(topic).slice(0, 4).join(' ')) || 'Career Direction'; }
function pageContextHeading(value, topic, slug) { return shortHeading(clean(value) || compactTopic(topic), compactTopic(topic)); }
function proofHeading(items, fallback, topic) { const figures = items.map(figureFromItem).filter(Boolean); const labels = [...new Set(figures.map((figure) => figure.label).filter(Boolean))]; const context = compactTopic(topic); return `${labels.slice(0, 2).join(' & ') || 'Key Figures'} for ${context}`; }
function typeTopLabel(type) { return ({ hero: 'Career Snapshot', summary: 'Key Ideas', matrix: 'Compare Clearly', chain: 'Try The Path', checklist: 'Check First', proof: 'Numbers In Context', detail: 'Read The Evidence' })[type] || 'Career Evidence'; }
function visualTitle(type, heading, topic, pageTitle) { return type === 'hero' ? clean(pageTitle) || `${compactTopic(topic)} career overview` : shortHeading(heading, topic); }
function visualAlt(type, heading, topic) { const subject = shortHeading(heading || topic, compactTopic(topic)); return ({ hero: `Career overview for ${compactTopic(topic)}, with article-sourced direction.`, summary: `Key ideas about ${subject} in a short visual.`, matrix: `Comparison table for ${subject}, using article-sourced options.`, chain: `Planning steps for ${subject}, drawn from the article.`, checklist: `Decision checklist for ${subject}, based on article details.`, proof: `Key figures about ${subject}, with labels tied to article evidence.`, detail: `Evidence visual about ${subject}, based on article content.` })[type] || `Career visual explaining ${subject}.`; }
function figureFromItem(item) {
  const raw = clean(item?.raw || item?.text || '');
  if (/\b(?:F|J)-\d+\s+students?\b/i.test(raw)) return null;
  const selectionOdds = raw.match(/\b1\s+in\s+(\d+(?:,\d{3})*)\s*[-–—]\s*(\d+(?:,\d{3})*)\s+applicants?\b/i);
  if (selectionOdds) return { value: `1 in ${selectionOdds[1]}–${selectionOdds[2]}`, label: 'Selection Odds Range', source: raw, text: raw };
  const number = String.raw`(?:\d{1,2}(?:,\d{2})+,\d{3}|\d+(?:,\d{3})*)(?:\.\d+)?`;
  const pattern = new RegExp(String.raw`(?:₹|\b(?:rs\.?|inr)\b|\$)\s*${number}(?:\s*(?:[–—-]|\bto\b)\s*${number})?(?:\s*\+)?(?:\s*(?:lakh|crore|lpa|k|billion|million))?|${number}\s*(?:%|percent|lpa|lakh|crore|years?|months?|weeks?|hours?|days?|vacancies|students?|jobs?|applicants?|seats?)`, 'i');
  const match = raw.match(pattern);
  if (!match) return null;
  const value = expandFigureValue(match[0], raw).replace(/\s+/g, ' ').trim().replace(/\s+(?:vacancies|students?|jobs?|applicants?|seats?)$/i, '').replace(/^rs\.?\s*/i, '₹').replace(/^inr\s*/i, '₹').replace(/[.,]+$/, '');
  const evidenceLine = sentenceParts(raw).find((part) => part.toLowerCase().includes(match[0].toLowerCase())) || raw;
  const matchInLine = Math.max(0, evidenceLine.toLowerCase().indexOf(match[0].toLowerCase()));
  const contextStart = Math.max(0, matchInLine - 72);
  const contextEnd = Math.min(evidenceLine.length, matchInLine + match[0].length + 72);
  const local = evidenceLine.slice(contextStart, contextEnd).toLowerCase();
  const heading = clean(item?.heading || '').toLowerCase();
  const hasMoney = /(?:₹|\b(?:rs\.?|inr)\b|\$|\blpa\b|\blakh\b|\bcrore\b)/i.test(value);
  const hasCurrencyMarker = /(?:₹|\b(?:rs\.?|inr)\b|\$|\blpa\b)/i.test(value);
  const isPercent = /%|percent/i.test(value);
  let label = '';
  if (isPercent && /funnel|selection odds/i.test(local)) label = 'Selection Funnel Rate';
  else if (isPercent && /pass rates?|passed per group|cleared per group/i.test(local)) label = 'Exam Pass Rate';
  else if (isPercent && /employab/i.test(local)) label = 'Graduate Employability Rate';
  else if (isPercent && /freshers?|fresher share/i.test(local) && /batch|cohort|accept/i.test(local)) label = 'Fresher Cohort Share';
  else if (isPercent && /(?:survey|poll|respondents?|hiring managers?)/i.test(local) && /said|reported|rated|consider/i.test(local)) label = 'Survey Response Share';
  else if (isPercent && /(?:qualified|cleared|passed|selection rate)/i.test(local)) label = 'Qualification Success Rate';
  else if (isPercent && /(?:passengers?|air traffic|traffic growth)/i.test(local) && /(?:up|growth|grew|increase)/i.test(local)) label = 'Annual Traffic Growth';
  else if (isPercent && /(?:postings?|hiring|employment|vacancies)/i.test(local) && /(?:down|declin|fell|drop|decreas)/i.test(local)) label = 'Hiring Demand Decline';
  else if (isPercent && /seats/i.test(local) && /(?:fills?|share|quota|allocated|allocation)/i.test(local)) label = 'Course Seat Share';
  else if (!hasCurrencyMarker && /(?:msme|enterprise|businesses registered)/i.test(local)) label = 'Registered Enterprise Count';
  else if (!hasCurrencyMarker && /(?:candidates?|applicants?|takers?|appeared|people applied|applied for|registered for (?:the )?(?:exam|examination|test))/i.test(local)) label = 'Exam Candidate Count';
  else if (hasMoney && /exports?/i.test(local)) label = 'Annual Export Value';
  else if (hasMoney && /(?:deal|contract)\w*.{0,30}(?:worth|value)|(?:worth|value).{0,30}(?:deal|contract)/i.test(local)) label = 'Typical Deal Value';
  else if (hasMoney && /extra income|additional income/i.test(local)) label = 'Additional Annual Income';
  else if (hasMoney && /education loan/i.test(local)) label = 'Education Loan Principal';
  else if (hasMoney && /(?:national target|2030 goal|government.?s own goal)/i.test(local)) label = 'National 2030 Goal';
  else if (hasMoney && /(?:illustration,? not a real fee|education budget example|worked example)/i.test(local)) label = 'Education Budget Example';
  else if (hasMoney && /(?:budget|allocation|allocated|outlay)/i.test(local) && !/exam|registration|certification/i.test(local)) label = /(?:allocation|allocated|outlay)/i.test(local) ? 'Programme Scheme Outlay' : 'Education Budget Example';
  else if (hasMoney && /(?:billion|million|trillion)/i.test(value) && /(?:market|industry|sector|segment|bioeconomy|workforce|employ|revenue|worth|target|projected)/i.test(local)) label = /revenue/i.test(local) ? 'Annual Industry Revenue' : 'Total Market Size';
  else if (isPercent && /(?:entry-level|commerce jobs|share|allocation|allocated|budget)/i.test(local)) label = 'Allocated Budget Share';
  else if (isPercent && /(?:minimum|at least|marks|score|aggregate|eligib|qualif|how you enter|entry requirement)/i.test(local) && /(?:mark|score|aggregate|eligib|qualif|degree|class|exam|admission|how you enter|entry requirement)/i.test(local)) label = 'Minimum Exam Marks';
  else if (hasMoney && /family income/i.test(local)) label = 'Family Income Eligibility';
  else if (hasMoney && /(?:session|counselling|counseling|consultation)/i.test(local)) label = 'Counselling Session Fee';
  else if (/(?:per day|day rate)/i.test(local)) label = 'Freelance Day Rate';
  else if (/(?:stipend|internship)/i.test(local) && /(?:month|monthly)/i.test(local)) label = 'Monthly Internship Stipend';
  else if (/allowance/i.test(local)) label = /(?:month|monthly)/i.test(local) ? 'Monthly Pay Allowance' : 'Allowance Amount Reported';
  else if (/scholarship/i.test(local) || /scholarship/i.test(heading)) label = 'Scholarship Funding Support';
  else if (hasMoney && /per paper|same subject through/i.test(local)) label = 'Exam Paper Fee';
  else if (hasMoney && /(?:exam|examination|registration|certification|application)\s+(?:registration\s+)?fee|registration\s+fee|certification\s+fee|application\s+fee|per\s+paper/i.test(local)) label = 'Exam Registration Fee';
  else if (hasMoney && /(?:education|course|tuition|college|study)\s+(?:budget|cost|fee)|(?:budget|cost|fee)\s+(?:for|of)\s+(?:education|course|tuition|college|study)|tuition/i.test(local)) label = 'Total Education Cost';
  else if (hasMoney && /(?:entry|fresher|start(?:ing)?)/i.test(local) && /\blpa\b/i.test(match[0])) label = 'Entry Level Pay';
  else if (hasMoney && /post[ -]?mba/i.test(local)) label = 'Post MBA Pay';
  else if (hasMoney && /(?:salary|pay|income|earn|remuneration|compensation)/i.test(local)) label = 'Typical Salary Range';
  else if (isPercent && /(?:demand[ -]supply gap|skills gap)/i.test(local)) label = 'Skills Demand Gap';
  else if (isPercent && /(?:attrition)/i.test(local)) label = 'Annual Staff Attrition';
  else if (isPercent && /(?:growth|increase|rise)/i.test(local)) label = 'Role Growth Rate';
  else if (isPercent && /(?:minimum|at least|marks|score)/i.test(local)) label = 'Minimum Exam Marks';
  else if (isPercent && /(?:entry.level|commerce jobs)/i.test(local)) label = 'Entry Level Share';
  else if (isPercent && /(?:budget|share|allocation|allocated)/i.test(local)) label = 'Allocated Budget Share';
  else if (isPercent && /(?:advance|deposit|upfront)/i.test(local)) label = 'Upfront Payment Advance';
  else if (hasMoney && /(?:test ad|ad campaign|advertising budget)/i.test(local)) label = 'Test Ad Budget';
  else if (hasMoney && /(?:salary|pay|income|earn|remuneration|compensation|package|wage)/i.test(local)) label = 'Typical Salary Range';
  else if (hasMoney && /(?:exam|examination|registration|certification|application)\s+(?:registration\s+)?fee|registration\s+fee|certification\s+fee|application\s+fee|per\s+paper/i.test(local)) label = 'Exam Registration Fee';
  else if (hasMoney && /(?:tuition|fee|cost|education budget|course budget|course fee)/i.test(local)) label = 'Total Education Cost';
  else if (/vacanc/i.test(match[0]) || /vacanc/i.test(local)) label = 'Available Job Vacancies';
  else if (/applicant/i.test(match[0]) || /applicant/i.test(local)) label = 'Total Exam Applicants';
  else if (/seat/i.test(match[0]) || /seat/i.test(local)) label = 'Available Course Seats';
  else if (/student/i.test(match[0]) || /student enrolment|students enrolled/i.test(local)) label = 'Total Student Count';
  else if (/job/i.test(match[0]) || /job openings|jobs created/i.test(local)) label = 'Total Job Count';
  else if (/(?:year|month|week|day|hour)/i.test(match[0]) && /(?:offshore cycle|cycle from|licen[cs]e to production)/i.test(local)) label = 'Typical Project Cycle';
  else if (/(?:year|month|week|day|hour)/i.test(match[0]) && /shift/i.test(local)) label = 'Typical Work Shift';
  else if (/(?:year|month|week|day|hour)/i.test(match[0]) && /(?:experience|work history)/i.test(local)) label = 'Relevant Experience Window';
  else if (/(?:year|month|week|day|hour)/i.test(match[0]) && /service commitment|service term|enlistment|retained afterward/i.test(local)) label = 'Service Commitment Period';
  else if (/(?:year|month|week|day|hour)/i.test(match[0]) && /(?:watch hours|shorts views|partner program|opt window)/i.test(local)) label = /watch hours|shorts views|partner program/i.test(local) ? 'Platform Eligibility Window' : 'Post Study Work';
  else if (/(?:year|month|week|day|hour)/i.test(match[0]) && /(?:start earning|need to earn|earning within|income within)/i.test(local)) label = 'Earning Decision Window';
  else if (/(?:year|month|week|day|hour)/i.test(match[0]) && /(?:from bootcamp finish to hire|finish to hire|time to hire)/i.test(local)) label = 'Hiring Transition Window';
  else if (/(?:year|month|week|day|hour)/i.test(match[0]) && /(?:qualification path|qualification runway|through .*? exams|articleship|full route)/i.test(local)) label = 'Qualification Time Window';
  else if (/(?:year|month|week|day|hour)/i.test(match[0]) && /(?:course|degree|program|programme|duration|diploma|qualification|training|bootcamp|articleship)/i.test(local)) label = 'Total Course Duration';
  else if (/(?:year|month|week|day|hour)/i.test(match[0]) && /(?:within|deadline|by\s+\w+|publish|show)/i.test(local)) label = 'Proof Milestone Window';
  else if (/(?:year|month|week|day|hour)/i.test(match[0]) && /(?:duration|timeline|preparation|study|period|path|commitment)/i.test(local)) label = 'Estimated Time Required';
  if (!label) return null;
  const source = evidenceLine.replace(/\bRs\.?\s*/gi, '₹');
  return { value, label, source, text: source };
}
function topicIconLegacy(topic, palette, x, y, scale) { const value = topic.toLowerCase(); const stroke = palette[2]; const frame = (svg) => `<g transform="translate(${x} ${y}) scale(${scale})">${svg}</g>`; if (/medicine|medical|health|doctor|nursing|clinical|pharmacy/.test(value)) return frame(`<path d="M300 90c-35 0-55 24-55 55v75h-75v55h75v75c0 35 20 55 55 55s55-20 55-55v-75h75v-55h-75v-75c0-31-20-55-55-55z" fill="none" stroke="${stroke}" stroke-width="18"/><circle cx="300" cy="245" r="170" fill="none" stroke="${palette[3]}" stroke-width="13"/>`); if (/law|legal|advocate|court/.test(value)) return frame(`<path d="M300 80v340M160 140h280M200 140l-80 170h160l-80-170zm200 0-80 170h160l-80-170zM150 470h300" fill="none" stroke="${stroke}" stroke-width="18" stroke-linecap="round"/>`); if (/literature|writing|journalism|language|english|humanities|publishing|education|teaching/.test(value)) return frame(`<path d="M90 120c90-30 155-14 210 28v310c-55-42-120-58-210-28V120zm420 0c-90-30-155-14-210 28v310c55-42 120-58 210-28V120z" fill="none" stroke="${stroke}" stroke-width="18" stroke-linejoin="round"/><path d="M145 195h95m-95 65h95m220-65h-95m95 65h-95" stroke="${palette[3]}" stroke-width="14" stroke-linecap="round"/>`); if (/abroad|overseas|foreign|study/.test(value)) return frame(`<path d="M120 310l360-155-155 360-65-140-140-65z" fill="none" stroke="${stroke}" stroke-width="18"/><path d="M245 365l-115 115m205-150 115-115" stroke="${palette[3]}" stroke-width="16" stroke-linecap="round"/>`); if (/bank|finance|insurance|account|commerce|economics|investment/.test(value)) return frame(`<path d="M100 170l200-110 200 110M140 195h320M170 225v190m85-190v190m90-190v190m85-190v190M100 465h400" fill="none" stroke="${stroke}" stroke-width="18" stroke-linecap="round"/>`); if (/\bit\b|software|data|ai|technology|coding|developer|computer|engineering/.test(value)) return frame(`<path d="M185 135L60 250l125 115M415 135L540 250 415 365M350 105L250 395" fill="none" stroke="${stroke}" stroke-width="22" stroke-linecap="round"/>`); return frame(`<circle cx="300" cy="250" r="170" fill="none" stroke="${stroke}" stroke-width="16"/><path d="M300 80v340M130 250h340M185 135l230 230M415 135L185 365" stroke="${palette[3]}" stroke-width="14"/>`); }
function topicIcon(topic, palette, x, y, scale) {
  const value = topic.toLowerCase();
  const stroke = palette[2];
  const frame = (svg) => `<g transform="translate(${x} ${y}) scale(${scale})">${svg}</g>`;
  if (/event|conference|festival|wedding|exhibition/.test(value)) return frame(`<rect x="115" y="105" width="370" height="330" rx="24" fill="none" stroke="${stroke}" stroke-width="18"/><path d="M115 190h370M180 70v75m240-75v75M180 255h85m45 0h85M180 325h85m45 0h85" fill="none" stroke="${palette[3]}" stroke-width="18" stroke-linecap="round"/><circle cx="405" cy="290" r="45" fill="${palette[4]}"/>`);
  if (/aviation|airline|aircraft|cabin crew|pilot|airport|flight/.test(value)) return frame(`<path d="M88 285l180-46 67-161c12-29 57-23 54 12l-15 132 103 54c35 18 23 62-16 55l-118-25-87 143c-18 29-60 13-47-22l42-143-147 33c-36 8-49-23-16-32z" fill="none" stroke="${stroke}" stroke-width="18" stroke-linejoin="round"/>`);
  if (/agriculture|farming|horticulture|forestry|environment|ecology/.test(value)) return frame(`<path d="M300 435V165m0 128c-100 0-155-56-155-150 95 0 155 55 155 150zm0-70c0-93 58-150 155-150 0 95-57 150-155 150zm-8 172H175m125 0h125" fill="none" stroke="${stroke}" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/><path d="M300 250l-82-77m82 28 84-77" stroke="${palette[3]}" stroke-width="14"/>`);
  if (/science|chemistry|biology|laboratory|lab research|research science/.test(value)) return frame(`<path d="M230 90h140M265 90v150L145 425q-15 28 20 28h270q35 0 20-28L335 240V90M205 350h190" fill="none" stroke="${stroke}" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/><circle cx="270" cy="390" r="16" fill="${palette[3]}"/><circle cx="345" cy="390" r="16" fill="${palette[4]}"/>`);
  if (/hospitality|hotel|tourism|travel|culinary|chef|restaurant/.test(value)) return frame(`<path d="M105 440V190l195-100 195 100v250M160 230h70v72h-70zm210 0h70v72h-70zM265 440V315h70v125M90 440h420" fill="none" stroke="${stroke}" stroke-width="18" stroke-linejoin="round"/><path d="M250 165h100" stroke="${palette[3]}" stroke-width="16" stroke-linecap="round"/>`);
  if (/psychology|counsel|social work|therapy|mental health|human resources|hr career/.test(value)) return frame(`<path d="M170 380c-45-29-72-80-72-137 0-91 75-165 168-165s168 74 168 165c0 86-65 157-149 165l-70 64v-78c-17-3-32-8-45-14z" fill="none" stroke="${stroke}" stroke-width="18" stroke-linejoin="round"/><path d="M190 235h22m43 0h22m43 0h22M205 302c46 42 92 42 138 0" fill="none" stroke="${palette[3]}" stroke-width="16" stroke-linecap="round"/>`);
  if (/design|animation|illustration|fashion|creative|media|photography|visual arts|graphic/.test(value)) return frame(`<path d="M145 390l245-245 75 75-245 245-90 25zM365 170l75 75M175 360l75 75" fill="none" stroke="${stroke}" stroke-width="18" stroke-linejoin="round"/><circle cx="190" cy="160" r="42" fill="none" stroke="${palette[3]}" stroke-width="16"/><path d="M330 105l16-35m75 90 35-16" stroke="${palette[4]}" stroke-width="15" stroke-linecap="round"/>`);
  if (/sport|fitness|athlete|physical education/.test(value)) return frame(`<circle cx="300" cy="260" r="190" fill="none" stroke="${stroke}" stroke-width="18"/><path d="M245 80l-45 110 100 70 100-70-45-110M200 190L110 300l105 120m185-230 90 110-105 120m-190-120h190l70 120H225z" fill="none" stroke="${palette[3]}" stroke-width="16" stroke-linejoin="round"/>`);
  if (/^(?:medicine|medical|health|doctor|nursing|clinical|pharmacy|law|legal|advocate|court|literature|writing|journalism|language|english|humanities|publishing|education|teaching|abroad|overseas|foreign|study|bank|finance|insurance|account|commerce|economics|investment|it|software|data|ai|technology|coding|developer|computer|engineering)\b/.test(value)) return topicIconLegacy(topic, palette, x, y, scale);
  return frame(`<rect x="120" y="130" width="260" height="320" rx="18" fill="none" stroke="${stroke}" stroke-width="18"/><path d="M180 210h140m-140 65h100m-100 65h75M400 355l48 48 80-100" fill="none" stroke="${palette[3]}" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/><circle cx="450" cy="235" r="36" fill="${palette[4]}"/>`);
}
function heroAnswerFromFacts(facts, topic) { const topicLead = words(topic).slice(0, Math.min(4, words(topic).length)).join(' ').toLowerCase(); const candidates = facts.map((item) => ({ item, text: sentenceParts(clean(item.raw || item.text)).find((part) => /[.!]$/.test(part) && words(part).length >= 5 && words(part).length <= 12 && !badEnd.has(lastWord(part))) || '' })).filter(({ text }) => text); const distinct = candidates.find(({ text }) => words(text).slice(0, Math.min(4, words(text).length)).join(' ').toLowerCase() !== topicLead); const groundedFallback = facts.map((item) => ({ item, text: sentenceParts(clean(item.raw || item.text)).find((part) => /[.!?]$/.test(part) && words(part).length >= 5 && words(part).length <= 26 && !badEnd.has(lastWord(part))) || '' })).find(({ text }) => text && words(text).slice(0, Math.min(4, words(text).length)).join(' ').toLowerCase() !== topicLead); return distinct || candidates[0] || groundedFallback || { item: null, text: '' }; }
function heroRouteLabels(sections, topic, answer, supporting) { const seen = new Set(); const labels = []; for (const section of sections) { const source = clean(section.title || ''); if (!source || isGenericVisualHeading(source) || headingsSharePhrase(source, topic)) continue; let compact = source.replace(/^(?:who pays for using|who pays for|what|where|when|which|who|why)\s+(?:to\s+)?/i, '').replace(/\b(?:actually|genuinely|really|right now|in india|today|looks like|look like|well)\b/gi, '').replace(/\s+/g, ' ').trim(); compact = compact.replace(/,\s*([^,]+),\s*and\s+.+$/i, ' and $1'); if (visualWordCount(compact) > 3) compact = shortHeading(compact, topic); const label = titleCase(words(compact).slice(0, 3).join(' ')); const key = phraseKeys(label).sort().join('|'); if (!key || seen.has(key) || headingsSharePhrase(label, topic) || headingsSharePhrase(label, answer) || supporting.some((item) => headingsSharePhrase(label, item.text))) continue; seen.add(key); labels.push(label); if (labels.length === 3) break; } return labels; }
function headingsSharePhrase(left, right) { const a = String(left || '').toLowerCase().match(/[\p{L}\p{N}]+/gu) || []; const b = String(right || '').toLowerCase().match(/[\p{L}\p{N}]+/gu) || []; if (a.join(' ') === b.join(' ')) return true; if (Math.min(a.length, b.length) < 4) return false; const set = new Set(); for (let i = 0; i <= a.length - 4; i += 1) set.add(a.slice(i, i + 4).join(' ')); for (let i = 0; i <= b.length - 4; i += 1) if (set.has(b.slice(i, i + 4).join(' '))) return true; return false; }
function uniqueVisualHeading(candidate, item, topic, type, manifest, usedPhrases = new Set()) { const candidateHeading = type === "matrix" ? shortHeading(candidate, compactTopic(topic)) : ""; if (candidateHeading && !manifest.some((visual) => headingsSharePhrase(candidateHeading, visual.heading)) && !phraseKeys(candidateHeading).some((key) => usedPhrases.has(key))) return candidateHeading; const previous = manifest.map((visual) => visual.heading).filter(Boolean); const source = clean(item?.text || item?.raw || ''); const priorContent = manifest.map((visual) => [visual.heading, visual.alt, ...(visual.content?.answer ? [visual.content.answer] : []), ...(visual.content?.items || []).flatMap((entry) => [entry.heading, entry.text]), ...(visual.content?.columns || []), ...(visual.content?.rows || []).flat(), ...(visual.content?.figures || []).flatMap((figure) => [figure.value, figure.label, figure.source]), ...(visual.content?.steps || []), ...(visual.content?.steps || [])].join(' ')); const repeatsFiveWords = (value) => { const keys = phraseKeys(value); return priorContent.some((text) => keys.some((key) => phraseKeys(text).includes(key))); }; const incomplete = (value) => /[,;:]\s*$/.test(value) || (badEnd.has(lastWord(value)) && !/\bIT[\s"'”’)!?]*$/u.test(value)) || /\b(?:can|could|may|might|will|would|should)\s+\w+ly$/i.test(value); const isUsable = (value) => value && !incomplete(value) && !isGenericVisualHeading(value) && !previous.some((heading) => headingsSharePhrase(value, heading)) && !repeatsFiveWords(value); if (isUsable(candidate)) { const bounded = shortHeading(candidate, compactTopic(topic)); if (!previous.some((heading) => headingsSharePhrase(bounded, heading))) return bounded; } const alternatives = [quotedLead(source), groundedHeading(source), item?.heading, sentence(source, 8), phrase(source, 7), words(source).slice(0, 5).join(' ')]; for (const value of alternatives) { const option = shortHeading(value, compactTopic(topic)); if (isUsable(option)) return option; } const sourceWords = words(source); for (let length = 4; length >= 3; length -= 1) for (let start = 0; start <= sourceWords.length - length; start += 1) { const option = titleCase(sourceWords.slice(start, start + length).map((word) => word.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, '')).join(' ')); if (!incomplete(option) && !badStart.has(words(option)[0]?.toLowerCase()) && !badEnd.has(lastWord(option)) && !/\b(?:and|or|to|for|with)\s+(?:a|an|the)\b/i.test(option) && !isGenericVisualHeading(option) && !previous.some((heading) => headingsSharePhrase(option, heading))) return option; } const fallback = ({ summary: 'What Matters Before Choosing', matrix: 'Compare the Practical Paths', chain: 'A Sequence to Try', checklist: 'Questions to Check First', proof: 'Numbers in Context', detail: 'What the Evidence Shows' })[type] || 'A Clear Next Step'; return !repeatsFiveWords(fallback) && !previous.some((heading) => headingsSharePhrase(fallback, heading)) ? fallback : `${titleCase(type)} Evidence`; }
function baseSvg(body, palette, topLabel, heading, size) { const { width, height } = size; const margin = 72; const isHero = topLabel === 'Career Snapshot'; const headingLines = wrap(titleCase(isHero ? heroTopic(heading) : heading), isHero ? 22 : 15); const headingSize = isHero ? (width === PHONE.width ? 50 : 56) : (width === PHONE.width ? 56 : 62); const lineHeight = headingSize * 1.08; const headingSvg = headingLines.map((line, i) => `<text x="${margin}" y="${144 + i * lineHeight}" font-family="Arial,Helvetica,sans-serif" font-size="${headingSize}" font-weight="700" fill="${palette[1]}">${esc(line)}</text>`).join(''); const bodyShift = isHero ? 0 : Math.max(0, (headingLines.length - 2) * 58); return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="${width}" height="${height}" fill="${palette[0]}"/><path d="M0 84H${width}" stroke="${palette[4]}" stroke-width="7"/><text x="${margin}" y="52" font-family="Arial,Helvetica,sans-serif" font-size="${width === PHONE.width ? 48 : 38}" font-weight="700" letter-spacing="1" fill="${palette[1]}">${esc(titleCase(topLabel).toUpperCase())}</text>${headingSvg}<g transform="translate(0 ${bodyShift})">${body}</g></svg>`; }
function cardVisual(items, palette, type, heading, size) { const { width, height } = size; const accent = [palette[2], palette[3], palette[4]]; const bodyTop = 285; const gap = 24; const columns = 1; const cardW = width - 144; const font = width === PHONE.width ? 44 : 48; const maxChars = 34; const headingLines = wrap(titleCase(heading), 15); const bodyShift = Math.max(0, (headingLines.length - 2) * 58); const cardHeight = Math.floor((height - bodyTop - bodyShift - 80 - gap * (Math.min(items.length, 4) - 1)) / Math.min(items.length, 4)); let body = ''; items.slice(0, 4).forEach((item, index) => { const x = 72; const y = bodyTop + index * (cardHeight + gap); body += `<rect x="${x}" y="${y}" width="${cardW}" height="${cardHeight}" rx="22" fill="#fffaf0" stroke="${accent[index % accent.length]}" stroke-width="5"/>`; if (type === 'checklist') body += `<rect x="${x + 28}" y="${y + 30}" width="36" height="36" rx="8" fill="${accent[index % accent.length]}"/><path d="M${x + 37} ${y + 48}l10 10 18-22" stroke="#fffaf0" stroke-width="7" fill="none"/>`; else body += `<circle cx="${x + 48}" cy="${y + 50}" r="30" fill="${accent[index % accent.length]}"/><text x="${x + 48}" y="${y + 61}" text-anchor="middle" font-family="Arial" font-size="34" font-weight="700" fill="#fffaf0">${index + 1}</text>`; const lines = wrap(item.text, maxChars); const textY = y + cardHeight / 2 - ((lines.length - 1) * font * 1.16) / 2; body += textLines(item.text, x + 28, textY, font, maxChars, palette[1], 6, 600); }); return baseSvg(body, palette, typeTopLabel(type), heading, size); }
function tableColumns(content, limit = 3) { const values = (content.match(/^Columns:\s*([^|]+(?:\|[^|]+)*)\s*\|\|/i)?.[1] || '').split('|').map((value) => clean(value)).filter(Boolean); return Number.isFinite(limit) ? values.slice(0, limit) : values; }
function fullTableRows(content, limit = 3) { const columns = tableColumns(content, limit); const part = content.split(/\|\|\s*Rows:\s*/i)[1] || ''; return part.split(/\s*##\s*/).map((raw) => { const normalized = raw.replace(/\(([^()]*)\)/g, (_, inner) => `(${inner.replace(/\s+\/\s+/g, ' or ')})`).replace(/\b(BMLT|B\.MLS?|BSc|BTech|MSc|MTech|MBA|BBA|BCA|BCom|LLB|BA|PhD)\s+\/\s+(?=(?:BMLT|B\.MLS?|BSc|BTech|MSc|MTech|MBA|BBA|BCA|BCom|LLB|BA|PhD)\b)/gi, '$1 or '); const cells = normalized.split(/\s+\/\s+/).map((value) => clean(value).replace(/[:;,]+\s*$/, '').trim()); if (!columns.length) return cells.filter(Boolean); const expected = columns.length; while (cells.length > expected) cells[0] = `${cells[0]} / ${cells.splice(1, 1)[0]}`; const aligned = [...cells]; while (aligned.length < expected) aligned.push(''); return aligned.slice(0, expected); }).filter((row) => row.some(Boolean)); }
function tableRows(content, rowLimit = 2) { const columns = tableColumns(content); const rows = fullTableRows(content).map((row) => row.map((cell) => shortCell(cell))).slice(0, rowLimit); return { columns, rows }; }
function compactTableHeader(value, index) {
  const source = clean(value).replace(/\s*\([^)]*\)/g, '').replace(/[,:;]+$/, '');
  const key = source.toLowerCase().replace(/\s+/g, ' ').trim();
  const fixed = new Map([
    ['type of', 'Candidate'], ['type of entrant', 'Candidate'], ['type of graduate', 'Candidate'], ['type of trainee', 'Candidate'],
    ['what you', 'Main Task'], ['what to', 'Next Step'], ['how we', 'Our View'], ['what it', 'Main Work'], ['what a', 'Requirement'],
    ['what the', 'Key Detail'], ['what this', 'Cost Details'], ['who can', 'Who Qualifies'], ['where to', 'Where to Check'],
    ['proof to', 'Proof to Keep'], ['proof or', 'Evidence'], ['why the', 'Why It Matters'], ['what usually', 'Usual Route'],
    ['typical annual', 'Annual Cost'], ['typical entry-level', 'Starting Pay'], ['realistic salary', 'Salary Range'],
    ['duration &', 'Duration'], ['how this', 'How It Works'], ['how to', 'Next Step'],
    ['what it actually involves', 'Main Work'], ['what it involves', 'Main Work'], ['what it opens', 'Opportunities'],
    ['what it closes', 'Limits'], ['what the goal needs', 'Skill Needed'], ['skill the goal needs', 'Skill Needed'],
    ['evidence you will collect', 'Proof to Keep'], ['what you will collect', 'Proof to Keep'], ['what you need to show', 'Proof to Show'],
    ['what it changes', 'Outcome'], ['why it matters', 'Why It Matters'], ['why it works', 'Why It Works'],
    ['what it costs', 'Cost'], ['what it means', 'Meaning'], ['what it takes', 'Requirements'], ['what to do', 'Next Step'],
    ['how far', 'Limits'], ['how it works', 'Process'], ['the real fit', 'Best Fit'], ['what actually differs', 'Main Difference'],
    ['best for', 'Best Fit'], ['good for', 'Best Fit'], ['watch for', 'Risks'], ['useful for', 'Useful When'],
    ['source and', 'Source'], ['exam or', 'Exam'], ['entrance and', 'Entrance Exams'], ['can it', 'Does It Work'],
    ['mba in', 'MBA Route'], ['without a', 'Without Maths'], ['does a', 'Degree Needed'], ['mix of', 'Typical Mix'],
    ['question to', 'Question'], ['way of', 'Approach'], ['fits you', 'Best Fit'], ['three or', 'Program Length'],
    ['gap to', 'Skill Gap'], ['fix to', 'Next Step'], ['who is', 'Eligibility'], ['post and', 'Post Details'],
    ['institute and', 'Institute'], ['starting a', 'Starting Point'], ['limit to', 'Main Limit'],
    ['situation at', 'Situation'], ['roles it', 'Role Fit'], ['route and', 'Route Details'],
  ]);
  if (fixed.has(key)) return fixed.get(key);
  if (source.toLowerCase().startsWith('option a')) return 'Option A'; if (source.toLowerCase().startsWith('option b')) return 'Option B'; if (/^type of\b/i.test(source)) return 'Candidate';
  if (/^source and\b/i.test(source)) return 'Source';
  if (/^exam or\b/i.test(source)) return 'Exam';
  if (/^can it\b/i.test(source)) return 'Does It Work';
  if (/^mba in\b/i.test(source)) return 'MBA Route';
  if (/^entrance and\b/i.test(source)) return 'Entrance Exams';
  if (/^without a\b/i.test(source)) return 'Without Maths';
  if (/^does a\b/i.test(source)) return 'Degree Needed';
  if (/^mix of\b/i.test(source)) return 'Typical Mix';
  if (/^question to\b/i.test(source)) return 'Question';
  if (/^way of\b/i.test(source)) return 'Approach';
  if (/^fits you\b/i.test(source)) return 'Best Fit';
  if (/^three or\b/i.test(source)) return 'Program Length';
  if (/^gap to\b/i.test(source)) return 'Skill Gap';
  if (/^fix to\b/i.test(source)) return 'Next Step';
  if (/^who is\b/i.test(source)) return 'Eligibility';
  if (/^post and\b/i.test(source)) return 'Post Details';
  if (/^institute and\b/i.test(source)) return 'Institute';
  if (/^starting a\b/i.test(source)) return 'Starting Point';
  if (/^limit to\b/i.test(source)) return 'Main Limit';
  if (/^situation at\b/i.test(source)) return 'Situation';
  if (/^roles it\b/i.test(source)) return 'Role Fit';
  if (/^route and\b/i.test(source)) return 'Route Details';
  if (/^domain to\b/i.test(source)) return 'Next Domain';
  if (/^advice you\b/i.test(source)) return 'Advice Heard';
  if (/^question it\b/i.test(source)) return 'Question';
  if (/^if you\b/i.test(source)) return 'Goal';
  if (/^example in\b/i.test(source)) return 'Example';
  if (/^record to\b/i.test(source)) return 'Record';
  if (/^roles to\b/i.test(source)) return 'Target Roles';
  if (/^claim you\b/i.test(source)) return 'Claim';
  if (/^rules to\b/i.test(source)) return 'Rules';
  if (/^area of\b/i.test(source)) return 'Job Area';
  if (/^who it\b/i.test(source)) return 'Audience';
  if (/^duration and\b/i.test(source)) return 'Duration';
  if (/^document or\b/i.test(source)) return 'Document Check';
  if (/^time and\b/i.test(source)) return 'Time and Pay';
  if (/^time to\b/i.test(source)) return 'Time to Qualify';
  if (/^start with\b/i.test(source)) return 'Starting Point';
  if (/^offer in\b/i.test(source)) return 'Offer Level';
  if (/^stance on\b/i.test(source)) return 'View on Freshers';
  if (/^routes to\b/i.test(source)) return 'Route Options';
  if (/^pros and\b/i.test(source)) return 'Pros and Risks';
  if (/^when it\b/i.test(source)) return 'Best When';
  if (/^degree and\b/i.test(source)) return 'Degree Rule';
  if (/^resume or\b/i.test(source)) return 'Channel';
  if (/^course or\b/i.test(source)) return 'Course Option';
  if (/^helps with\b/i.test(source)) return 'Use';
  if (/^practice in\b/i.test(source)) return 'Course Practice';
  if (/^tool or\b/i.test(source)) return 'Tool';
  if (/^ms in\b/i.test(source)) return 'MSCS';
  if (/lateral\s+entry\s+mba/i.test(source)) return 'Lateral MBA';
  if (/regular\s+2[- ]year\s+mba/i.test(source)) return 'Regular MBA';
  if (/^entry\s+route$/i.test(source)) return 'Typical First Step';
  if (/^market\s+signal$/i.test(source)) return 'What Employers Value';
  if (words(source).length <= 2) return titleCase(source);
  if (/\b(?:why|reason|rationale)\b/i.test(source)) return 'Why It Matters';
  if (/\b(?:work|involv|role|task|responsib)\b/i.test(source)) return 'Main Work';
  if (/\b(?:skill|ability|strength)\b/i.test(source)) return 'Skill Needed';
  if (/\b(?:evidence|proof|sample)\b/i.test(source)) return 'Proof to Keep';
  if (/\b(?:cost|fee|budget|price)\b/i.test(source)) return 'Cost';
  if (/\b(?:pay|salary|range|income)\b/i.test(source)) return 'Typical Salary Range';
  if (/\b(?:step|action|next|do)\b/i.test(source)) return 'Next Step';
  if (/\b(?:how|process|method|approach)\b/i.test(source)) return 'Approach';
  if (/\bwhat\b/i.test(source)) return 'Key Detail';
  if (/\bwhere\b/i.test(source)) return 'Where It Fits';
  return titleCase(words(source).slice(0, 2).join(' ')) || `Option ${index + 1}`;
}
function tableVisual(table, palette, heading, size) { const { width, height } = size; const { columns, rows } = table; const cols = Math.min(3, Math.max(2, columns.length)); const left = 72; const total = width - 144; const colW = total / cols; const headerSize = width === PHONE.width ? 42 : 46; const cellSize = width === PHONE.width ? 40 : 42; const cellChars = Math.max(8, Math.floor(colW / (cellSize * 0.56)) - 1); const headingLines = wrap(titleCase(heading), 15); const bodyShift = Math.max(0, (headingLines.length - 2) * 58); const rowGap = 20; const rowStart = 415 + bodyShift; const rowH = Math.max(180, Math.floor((height - 72 - rowStart - rowGap * Math.max(0, rows.length - 1)) / Math.max(1, rows.length))); let y = 285; let body = `<rect x="${left}" y="${y}" width="${total}" height="110" rx="18" fill="${palette[1]}"/>`; for (let i = 0; i < cols; i += 1) { const lines = wrap(columns[i] || `Option ${i + 1}`, cellChars); const headerY = y + 55 - ((lines.length - 1) * headerSize * 1.16) / 2 + headerSize * 0.36; body += textLines(columns[i] || `Option ${i + 1}`, left + i * colW + 14, headerY, headerSize, cellChars, '#fffaf0', 2, 700); } y += 130; rows.forEach((row, rowIndex) => { body += `<rect x="${left}" y="${y}" width="${total}" height="${rowH}" rx="14" fill="#fffaf0" stroke="${[palette[2], palette[3], palette[4]][rowIndex % 3]}" stroke-width="4"/>`; for (let i = 0; i < cols; i += 1) { const cell = row[i] || ''; const lines = wrap(cell, cellChars); const textY = y + rowH / 2 - ((lines.length - 1) * cellSize * 1.16) / 2 + cellSize * 0.36; body += `<path d="M${left + i * colW} ${y}v${rowH}" stroke="${palette[3]}" stroke-width="2"/>`; body += textLines(cell, left + i * colW + 14, textY, cellSize, cellChars, palette[1], 6, 600); } y += rowH + rowGap; }); return baseSvg(body, palette, typeTopLabel('matrix'), heading, size); }
function selectMatrix(content, heading, usedPhrases = new Set()) {
  const allColumns = tableColumns(content);
  const allRows = fullTableRows(content);
  if (allColumns.length < 2 || allRows.length < 1) return null;
  const count = (values) => visualWordCount(values.join(' '));
  const columnSets = allColumns.length >= 3 ? [allColumns.slice(0, 3).map(compactTableHeader)] : [allColumns.slice(0, 2).map(compactTableHeader)];
  let best = null;
  for (const columns of columnSets) {
    const cols = columns.length;
    const headerChars = Math.max(8, Math.floor((PHONE.width - 144) / cols / (42 * 0.56)));
    const cellChars = Math.max(8, Math.floor((PHONE.width - 144) / cols / (40 * 0.56)) - 1);
    if (columns.some((cell) => !cell || wrap(cell, headerChars).length > 2)) continue;
    const rows = allRows.map((row, sourceIndex) => {
      const source = row.slice(0, cols);
      return { source, rendered: source.map((cell) => shortCell(cell || '')), sourceIndex };
    }).filter(({ rendered }) => rendered.length === cols && rendered.every((cell) => cell && !badEnd.has(lastWord(cell)) && wrap(cell, cellChars).length <= 6))
      .filter(({ source, rendered }) => !phraseKeys([...source, ...rendered].join(' ')).some((key) => usedPhrases.has(key)));
    for (let limit = 1; limit <= Math.min(2, rows.length); limit += 1) {
      const selected = rows.slice(0, limit);
      const rendered = selected.map((row) => row.rendered);
      if (count([heading, typeTopLabel('matrix'), ...columns, ...rendered.flat()]) > 40) continue;
      const score = limit * 10 + (cols === 3 ? 6 : 0) - rendered.reduce((sum, row) => sum + row.reduce((n, cell) => n + visualWordCount(cell), 0), 0) / 50;
      if (!best || score > best.score) best = { score, columns, rows: rendered, sourceRows: selected.map((row) => row.source) };
    }
  }
  return best;
}
function figureTiles(figures, palette, size, tileY, tileHeight, includeSource = false, valuePosition = 0.22, labelPosition = 0.57, sourcePosition = 0.70) { const { width } = size; const isSocial = width === 1200; const gap = isSocial ? 24 : 20; const count = Math.max(1, Math.min(3, figures.length)); const tileW = (width - 144 - gap * (count - 1)) / count; const start = (width - (tileW * count + gap * (count - 1))) / 2; let body = ''; figures.slice(0, 3).forEach((item, i) => { const x = start + i * (tileW + gap); const accent = [palette[2], palette[3], palette[4]][i]; const value = String(item.value || '').replace(/\s*[-–]\s*/g, ' – '); const valueChars = Math.max(7, Math.floor((tileW - 44) / (isSocial ? 25 : 32))); body += `<rect x="${x}" y="${tileY}" width="${tileW}" height="${tileHeight}" rx="22" fill="#fffaf0" stroke="${accent}" stroke-width="5"/>`; body += textLines(value, x + tileW / 2, tileY + tileHeight * valuePosition, isSocial ? 48 : size.width === PHONE.width ? 58 : 64, valueChars, palette[1], 3, 700, 'middle', tileW - 48); body += textLines(item.label, x + tileW / 2, tileY + tileHeight * labelPosition, isSocial ? 24 : size.width === PHONE.width ? 48 : 38, Math.max(9, Math.floor(tileW / (isSocial ? 18 : 26))), palette[1], 2, 700, 'middle', tileW - 48); if (includeSource) body += textLines(item.source || item.text, x + tileW / 2, tileY + tileHeight * sourcePosition, size.width === PHONE.width ? 36 : 38, Math.max(10, Math.floor(tileW / 23)), palette[1], 6, 600, 'middle', tileW - 48); }); return body; }
function heroRouteMap(labels, palette, size, y) {
  const { width } = size;
  const count = Math.min(3, labels.length);
  if (count < 2) return '';
  const margin = 72;
  const cardWidth = width - margin * 2;
  const cardHeight = 120;
  const gap = 12;
  const font = width === PHONE.width ? 34 : 36;
  let body = '';
  for (let i = 0; i < count; i += 1) {
    const x = margin;
    const cardY = y + i * (cardHeight + gap);
    const color = [palette[2], palette[3], palette[4]][i % 3];
    const maxChars = Math.max(18, Math.floor((cardWidth - 142) / (font * 0.58)));
    body += `<rect x="${x}" y="${cardY}" width="${cardWidth}" height="${cardHeight}" rx="18" fill="#fffaf0" stroke="${color}" stroke-width="4"/><circle cx="${x + 42}" cy="${cardY + 60}" r="25" fill="${color}"/><text x="${x + 42}" y="${cardY + 69}" text-anchor="middle" font-family="Arial" font-size="${width === PHONE.width ? 34 : 36}" font-weight="700" fill="#fffaf0">${String(i + 1).padStart(2, '0')}</text>${textLines(labels[i], x + 92, cardY + 47, font, maxChars, palette[1], 2, 650)}`;
  }
  return body;
}
function heroVisual(answer, figures, topic, palette, size, supporting = [], routeLabels = []) {
  const { width, height } = size;
  const font = width === PHONE.width ? 60 : 64;
  const answerLines = wrap(answer, width === PHONE.width ? 14 : 16);
  const answerY = 315;
  const answerEnd = answerY + (answerLines.length - 1) * font * 1.12 + font;
  let body = `<text x="72" y="${answerY}" font-family="Arial" font-size="${font}" font-weight="700" fill="${palette[1]}">${answerLines.map((line, i) => `<tspan x="72" dy="${i ? font * 1.12 : 0}">${esc(line)}</tspan>`).join('')}</text>`;
  const iconScale = width === PHONE.width ? 0.38 : 0.42;
  const iconY = 310;
  const iconX = width - 280;
  const iconBottom = iconY + 480 * iconScale;
  body += topicIcon(topic, palette, iconX, iconY, iconScale);
  let contentBottom = Math.max(answerEnd, iconBottom);
  if (figures.length) {
    const tileY = Math.max(765, answerEnd + 48);
    const tileHeight = Math.max(360, height - tileY - 64);
    body += figureTiles(figures, palette, size, tileY, tileHeight, false, 0.24, 0.64);
    contentBottom = tileY + tileHeight;
  } else {
    const labels = routeLabels.slice(0, 3);
    while (labels.length >= 2 && answerEnd + 48 + labels.length * 120 + (labels.length - 1) * 12 > height - 64) labels.pop();
    if (labels.length >= 2) {
      const routeY = Math.max(765, answerEnd + 48);
      body += heroRouteMap(labels, palette, size, routeY);
      contentBottom = routeY + labels.length * 120 + (labels.length - 1) * 12;
    } else if (supporting.length) {
      const fontSize = width === PHONE.width ? 40 : 42;
      const chars = width === PHONE.width ? 28 : 32;
      const lines = wrap(supporting[0].text, chars);
      const supportY = answerEnd + 100;
      if (supportY + lines.length * fontSize * 1.16 <= height - 72) {
        body += `<path d="M72 ${supportY - 38}h${width - 144}" stroke="${palette[2]}" stroke-width="7"/>${textLines(supporting[0].text, 76, supportY, fontSize, chars, palette[1], 4, 600)}`;
        contentBottom = supportY + lines.length * fontSize * 1.16;
      }
    }
  }
  return baseSvg(body, palette, typeTopLabel('hero'), heroTopic(topic), size);
}
function socialHeroVisual(answer, figures, topic, palette, supporting = []) { const size = { width: 1200, height: 630 }; const t = heroTopic(topic); const titleLines = wrap(t, 24); const answerLines = wrap(answer, 40); let body = `<rect width="1200" height="630" fill="${palette[0]}"/><path d="M0 88H1200" stroke="${palette[4]}" stroke-width="7"/><text x="64" y="58" font-family="Arial,Helvetica,sans-serif" font-size="30" font-weight="700" letter-spacing="1" fill="${palette[1]}">${esc('CAREER SNAPSHOT')}</text>${titleLines.map((line,i)=>`<text x="64" y="${148+i*55}" font-family="Arial,Helvetica,sans-serif" font-size="48" font-weight="700" fill="${palette[1]}">${esc(line)}</text>`).join('')}${answerLines.map((line,i)=>`<text x="64" y="${248+i*40}" font-family="Arial,Helvetica,sans-serif" font-size="34" font-weight="700" fill="${palette[1]}">${esc(line)}</text>`).join('')}`; body += topicIcon(topic,palette,865,118,0.48); if(figures.length){body+=figureTiles(figures,palette,size,420,160,false,0.22,0.75)}else if(supporting.length){const lines=wrap(supporting[0].text,68).slice(0,2);body+=lines.map((line,i)=>`<text x="64" y="${Math.min(570,330+i*32)}" font-family="Arial,Helvetica,sans-serif" font-size="25" fill="${palette[1]}">${esc(line)}</text>`).join('')} return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">${body}</svg>`; }
function proofVisual(items, palette, heading, size) { const figures = items.map(figureFromItem).filter(Boolean); let body = topicIcon(heading, palette, size.width === PHONE.width ? 540 : 570, 145, size.width === PHONE.width ? 0.58 : 0.66); body += figureTiles(figures, palette, size, 300, 950, true); return baseSvg(body, palette, typeTopLabel('proof'), heading, size); }
function keyFor(item) { return clean(item?.text || item?.raw || item || '').toLowerCase().replace(/\W+/g, ' ').trim(); }
function phraseKeys(value) { const tokens = String(value || '').toLowerCase().match(/[\p{L}\p{N}]+/gu) || []; const keys = []; for (let i = 0; i <= tokens.length - 5; i += 1) keys.push(tokens.slice(i, i + 5).join(' ')); return keys; }
function numericTokens(value) { return (String(value || '').match(/(?:\d{1,2}(?:,\d{2})+,\d{3}|\d+(?:,\d{3})*)(?:\.\d+)?/g) || []).map((token) => Number(token.replaceAll(',', ''))); }
function expandFigureValue(value, raw) {
  const targets = numericTokens(value);
  if (targets.length !== 1) return value;
  const number = String.raw`(?:\d{1,2}(?:,\d{2})+,\d{3}|\d+(?:,\d{3})*)(?:\.\d+)?`;
  const range = new RegExp(String.raw`(?:₹|\b(?:rs\.?|inr)\b|\$)?\s*(${number})\s*(?:[-–—]|\bto\b)\s*(${number})(?:\s*(lpa|lakhs?|crores?|%|percent|years?|months?|weeks?|days?|hours?))?`, 'gi');
  for (const match of String(raw || '').matchAll(range)) {
    if ([match[1], match[2]].some((endpoint) => Number(endpoint.replaceAll(',', '')) === targets[0])) return match[0].trim();
  }
  return value;
}
function figureValueSupported(value, raw) {
  const target = numericTokens(value);
  const source = numericTokens(raw);
  if (target.length === 1) {
    const number = String.raw`(?:\d{1,2}(?:,\d{2})+,\d{3}|\d+(?:,\d{3})*)(?:\.\d+)?`;
    const range = new RegExp(String.raw`(?:₹|\b(?:rs\.?|inr)\b|\$)?\s*(${number})\s*(?:[-–—]|\bto\b)\s*(${number})(?:\s*(lpa|lakhs?|crores?|%|percent|years?|months?|weeks?|days?|hours?))?`, 'gi');
    for (const match of String(raw || '').matchAll(range)) {
      const values = [Number(match[1].replaceAll(',', '')), Number(match[2].replaceAll(',', ''))];
      if (values.includes(target[0])) return false;
    }
  }
  const hasContiguousNumbers = target.length > 0 && source.some((_, index) => target.every((number, offset) => source[index + offset] === number));
  if (!hasContiguousNumbers) return false;
  const unit = String(value || '').match(/%|\bpercent\b|\blpa\b|\blakhs?\b|\bcrores?\b|\byears?\b|\bmonths?\b|\bweeks?\b|\bdays?\b|\bhours?\b|\bvacancies\b|\bstudents?\b|\bjobs?\b|\bapplicants?\b|\bseats?\b/i)?.[0]?.toLowerCase();
  if (unit) {
    const unitPattern = unit === '%' || unit === 'percent' ? /%|\bpercent\b/i
      : unit === 'lpa' || unit.startsWith('lakh') ? /\blpa\b|\blakhs?\b|\blakh\s+per\s+annum\b/i
        : unit.startsWith('crore') ? /\bcrores?\b/i
          : new RegExp(`\\b${unit.replace(/s$/, '')}s?\\b`, 'i');
    if (!unitPattern.test(String(raw || ''))) return false;
  }
  if (/(?:₹|\b(?:rs\.?|inr)\b|\$)/i.test(String(value || '')) && !/(?:₹|\b(?:rs\.?|inr)\b|\$)/i.test(String(raw || ''))) return false;
  return true;
}
function quotedLead(value) { return String(value || '').match(/^['"]([^'"]{3,40})['"]/u)?.[1] || ''; }
function groundedHeading(value) { return /\bfit\b.{0,60}\b(?:checkable|problem|question)\b/i.test(value) ? 'Check the Fit' : ''; }
function itemsFromNeed(need, data) { if (need.type === 'matrix') { const table = tableRows(need.exact_page_content_to_use); return table.rows.map((row) => ({ text: row.join(' — '), raw: row.join(' — '), heading: row[0] })); } if (need.type === 'proof') { const sectionKey = clean(need.section_title).toLowerCase(); const section = data.sections.find((item) => clean(item.title).toLowerCase() === sectionKey || clean(item.title).toLowerCase().includes(sectionKey) || sectionKey.includes(clean(item.title).toLowerCase())); const sectionFacts = [...(section?.facts || []), ...data.numberFacts.filter((fact) => !(section?.facts || []).some((local) => keyFor(local) === keyFor(fact)))]; const used = new Set(); return need.exact_page_content_to_use.split('|').map((value) => clean(value)).filter(Boolean).map((value) => { const target = numericTokens(value); const match = sectionFacts.find((fact) => { if (used.has(keyFor(fact))) return false; const raw = clean(fact.raw); if (raw.toLowerCase().includes(value.toLowerCase()) && (!target.length || figureValueSupported(value, raw))) return true; return target.length > 0 && figureValueSupported(value, raw); }); if (match) used.add(keyFor(match)); return match; }).filter(Boolean); } if (need.type === 'detail') { const section = sectionForNeed(need, data); if (section?.facts?.length) return section.facts.slice(0, 3); const raw = clean(need.exact_page_content_to_use).replace(/^(?:Three practical points about .*?:|Key facts from .*? section \d+|Evidence from .*?:|Key ideas from .*?:)\s*/i, '').trim(); return raw.split(/(?<=[.!?])\s+|\s*##\s*/).map((value) => ({ raw: value, text: sentence(value, 100) || value, heading: need.section_title })).filter((item) => item.text); } const raw = clean(need.exact_page_content_to_use).replace(/^(?:Evidence from .*?:|Key ideas from .*?:)\s*/i, '').trim(); return raw.split(/\s*##\s*/).map((value) => ({ raw: value, text: sentence(value, 100) || value, heading: need.section_title })).filter((item) => item.text); }
function sectionForNeed(need, data) { const key = clean(need.section_title).toLowerCase(); return data.sections.find((item) => clean(item.title).toLowerCase() === key || clean(item.title).toLowerCase().includes(key) || key.includes(clean(item.title).toLowerCase())); }
function needBlock(need, data, topic = 'Career Guidance') {
  const sourceHeading = clean(need.section_title) || 'Article section';
  const heading = completeShortHeading(shortHeading(sourceHeading, compactTopic(topic)), compactTopic(topic));
  if (need.type === 'matrix') {
    const raw = need.exact_page_content_to_use;
    const columns = tableColumns(raw, Infinity).map(compactTableHeader);
    const context = `${sourceHeading} ${topic}`.toLowerCase();
    const rows = fullTableRows(raw, Infinity).map((row) => row.map((cell) => {
      const value = clean(cell);
      if (!/^entry route$/i.test(value)) return value;
      if (/bank|recruit|public sector/i.test(context)) return 'Hiring route';
      if (/psychology|psychiatry|mortuary|forensic|clinical/i.test(context)) return 'Training path';
      return 'Entry requirements';
    }));
    return { needId: need.section_id, type: need.type, heading, kind: columns.length && rows.length ? 'table' : 'items', columns, rows, items: columns.length && rows.length ? undefined : [{ heading: '', text: clean(raw) }] };
  }
  if (need.type === 'proof') {
    let facts = itemsFromNeed(need, data);
    if (!facts.length) { const sectionFacts = sectionForNeed(need, data)?.facts || []; const localNumberFacts = sectionFacts.filter((item) => /(?:₹|\b(?:rs\.?|inr)\b|\$)\s*[\d,.]+|\d+(?:,\d{3})*(?:\.\d+)?\s*(?:%|percent|lpa|lakh|crore|years?|months?|weeks?|hours?|days?|vacancies|students?|jobs?|applicants?|seats?)/i.test(item.raw)); const sources = localNumberFacts.length ? localNumberFacts : data.numberFacts; facts = sources.filter((item) => /(?:₹|\b(?:rs\.?|inr)\b|\$)\s*[\d,.]+|\d+(?:,\d{3})*(?:\.\d+)?\s*(?:%|percent|lpa|lakh|crore|years?|months?|weeks?|hours?|days?|vacancies|students?|jobs?|applicants?|seats?)/i.test(item.raw)); }
    const evidence = [...(sectionForNeed(need, data)?.facts || []), ...data.numberFacts];
    const requestedFigures = need.exact_page_content_to_use.split('|').map((value) => clean(value)).filter((value) => numericTokens(value).length);
    const figuresFromExactContent = requestedFigures.map((value) => {
      const sourceFact = evidence.find((fact) => {
        const completeValue = expandFigureValue(value, fact.raw);
        return figureValueSupported(completeValue, fact.raw);
      });
      if (!sourceFact) return null;
      const source = clean(sourceFact.raw);
      const completeValue = expandFigureValue(value, source);
      const targets = numericTokens(completeValue);
      const firstTarget = targets[0];
      const sourceNumbers = [...source.matchAll(/(?:\d{1,2}(?:,\d{2})+,\d{3}|\d+(?:,\d{3})*)(?:\.\d+)?/g)];
      const index = sourceNumbers.find((match) => Number(match[0].replaceAll(',', '')) === firstTarget)?.index ?? 0;
      const local = source.slice(Math.max(0, index - 65), Math.min(source.length, index + completeValue.length + 65)).toLowerCase();
      const guessed = figureFromItem({ ...sourceFact, heading: need.section_title });
      let label = guessed?.label || '';
      if (/outlay|allocation/i.test(local)) label = 'Programme Scheme Outlay';
      else if (/investment|invested/i.test(local)) label = 'Total Investment Value';
      else if (/capacity/i.test(local)) label = 'Annual Production Capacity';
      else if (/wild|traded medicinal species/i.test(local)) label = 'Wild-Sourced Supply Share';
      if (/(?:starting gross salary|starting salary|salary range|salary curve|average total pay|average agent income|fresher pay|entry-level pay|adds roughly .*?lpa)/i.test(source)) label = /entry-level pay|fresher pay/i.test(source) ? 'Entry Level Pay' : 'Typical Salary Range';
      else if (/%/.test(completeValue) && /pass rates?/i.test(source)) label = 'Exam Pass Rate';
      else if (/%/.test(completeValue) && /seats/i.test(source) && /(?:fills?|share|quota|allocated|allocation)/i.test(source)) label = 'Course Seat Share';
      else if (/%/.test(completeValue) && /(?:postings?|hiring|employment|vacancies)/i.test(source) && /(?:down|declin|fell|drop|decreas)/i.test(source)) label = 'Hiring Demand Decline';
      else if (/[₹$]/.test(completeValue) && /per paper|same subject through/i.test(source)) label = 'Exam Paper Fee';
      else if (/[₹$]/.test(completeValue) && /(?:national target|2030 goal|government.?s own goal)/i.test(source)) label = 'National 2030 Goal';
      else if (/extra income|additional income/i.test(source) && /\b(?:year|annual|per year)\b/i.test(source)) label = 'Additional Annual Income';
      else if (!/[₹$]|\b(?:rs\.?|inr|lpa)\b/i.test(completeValue) && /\bpeople applied\b|\bcandidates? appeared\b|\bapplicants?\b/i.test(source)) label = 'Exam Candidate Count';
      else if (/\b(?:msme|enterprises?)\b/i.test(source) && /registered/i.test(source)) label = 'Registered Enterprise Count';
      else if (/illustration,? not a real fee|education budget/i.test(source) && /budget/i.test(source)) label = 'Education Budget Example';
      else if (/(?:start earning|need to earn|earning within|income within)/i.test(source)) label = 'Earning Decision Window';
      else if (/(?:from bootcamp finish to hire|finish to hire|time to hire)/i.test(source)) label = 'Hiring Transition Window';
      else if (/(?:qualification path|qualification runway|through .*? exams|articleship|full route)/i.test(source) && /years?/i.test(completeValue)) label = 'Qualification Time Window';
      if (!label) return null;
      return { value: completeValue.replace(/^rs\.?\s*/i, '₹').replace(/^inr\s*/i, '₹').replace(/[.,]+$/, ''), label, source, text: source };
    }).filter(Boolean);
    const figures = [...figuresFromExactContent, ...facts.map(figureFromItem).filter(Boolean)]
      .filter((item) => item.source && figureValueSupported(item.value, item.source))
      .filter((item, index, all) => all.findIndex((other) => other.value === item.value && other.label === item.label) === index);
    if (figures.length) return { needId: need.section_id, type: need.type, heading, kind: 'figures', figures };
    const items = facts.slice(0, 3).map((item) => ({ heading: '', text: item.text || item.raw }));
    return { needId: need.section_id, type: need.type, heading, kind: 'items', items: items.length ? items : [{ heading: '', text: clean(need.exact_page_content_to_use) }] };
  }
  const items = itemsFromNeed(need, data);
  const selected = need.type === 'detail' ? items.slice(0, 3) : items;
  const contentItems = selected.map((item) => ({ heading: '', text: item.text || item.raw }));
  return { needId: need.section_id, type: need.type, heading, kind: 'items', items: contentItems.length ? contentItems : [{ heading: '', text: clean(need.exact_page_content_to_use) }] };
}
function visualCaption(type, index) {
  const options = {
    hero: ['A starting point for comparing routes.'],
    summary: ['Key points at a glance.'],
    matrix: ['Compare the listed options.', 'Compare another set of options.'],
    proof: ['Figures and their source notes.', 'Additional figures and sources.'],
    checklist: ['Questions to use before deciding.', 'Further questions to consider.'],
    chain: ['Steps in the order they happen.', 'The next steps in sequence.'],
    detail: ['More context from the article.', 'Further context for this section.', 'Another useful detail from the source.'],
  };
  const captions = options[type] || ['Context from the article.'];
  return captions[index % captions.length];
}
function dedupeVisualContent(visuals, fallbackText = []) {
  const priority = { hero: 0, matrix: 1, proof: 2, checklist: 3, chain: 3, detail: 4, summary: 5 };
  const seen = new Set();
  const seenPhrases = new Set();
  const seenFigures = new Map();
  const normalize = (text) => text.toLowerCase().replace(/(?:₹|\b(?:rs\.?|inr)\b|\$)/gi, ' ').replace(/[^\p{L}\p{N}%]+/gu, ' ').replace(/\s+/g, ' ').trim();
  const phraseNormalize = (text) => text.toLowerCase().replace(/[^\p{L}\p{N}₹%]+/gu, ' ').replace(/\s+/g, ' ').trim();
  const fiveWordPhrases = (normalized) => {
    const tokens = normalized.split(' ').filter(Boolean);
    const phrases = [];
    for (let i = 0; i <= tokens.length - 5; i += 1) phrases.push(tokens.slice(i, i + 5).join(' '));
    return phrases;
  };
  const reserve = (text) => {
    const normalized = normalize(text);
    if (normalized.split(' ').length >= 5) {
      seen.add(normalized);
      for (const phrase of fiveWordPhrases(phraseNormalize(text))) seenPhrases.add(phrase);
    }
  };
  const figureNumbers = (value) => (String(value || '').match(/\d+(?:,\d{3})*(?:\.\d+)?/g) || []).map((item) => Number(item.replaceAll(',', '')));
  const rememberFigure = (figure) => {
    const label = normalize(figure?.label || '');
    const values = figureNumbers(figure?.value);
    if (!label || !values.length) return;
    if (!seenFigures.has(label)) seenFigures.set(label, new Set());
    for (const value of values) seenFigures.get(label).add(value);
  };
  const hasBody = (value, key = '') => {
    if (typeof value === 'string') return Boolean(value.trim()) && !['sourceSectionId', 'needId', 'sourceNeedIndex', 'kind', 'heading', 'caption', 'alt', 'title'].includes(key);
    if (Array.isArray(value)) return value.some((item) => hasBody(item, key));
    if (value && typeof value === 'object') return Object.entries(value).some(([childKey, child]) => hasBody(child, childKey));
    return false;
  };
  let currentRemovedNeedSections = [];
  const visit = (value, key = '') => {
    if (typeof value === 'string') {
      if (['heading', 'caption', 'alt', 'title', 'columns', 'sourceSectionId', 'needId', 'sourceNeedIndex'].includes(key)) return value;
      const uniqueParts = [];
      for (const part of sentenceParts(value)) {
        const normalized = normalize(part);
        const wordCount = normalized ? normalized.split(' ').length : 0;
        if (wordCount < 5) { uniqueParts.push(part); continue; }
        const duplicate = seen.has(normalized) || fiveWordPhrases(phraseNormalize(part)).some((phrase) => seenPhrases.has(phrase));
        if (!duplicate) {
          uniqueParts.push(part);
          reserve(part);
        }
      }
      return uniqueParts.length ? uniqueParts.join(' ') : null;
    }
    if (Array.isArray(value)) {
      if (key === 'figures') {
        return value.filter((figure) => {
          const label = normalize(figure?.label || '');
          const values = figureNumbers(figure?.value);
          const known = seenFigures.get(label);
          if (known && values.length && values.every((number) => known.has(number))) return false;
          rememberFigure(figure);
          return true;
        }).map((figure) => visit(figure, 'figure')).filter((item) => item !== null);
      }
      const result = value.map((item) => {
        const next = visit(item, key);
        // Keep table cells in their original columns when a duplicated sentence
        // is removed; collapsing an empty cell would misalign the comparison.
        return key === 'rows' && typeof item === 'string' && next === null ? '' : next;
      }).filter((item) => item !== null);
      if (key === 'items') {
        return result.filter((item) => item?.text?.trim() || item?.heading?.trim());
      }
      if (key === 'blocks') {
        return result.filter((block) => {
          const hasContent = block.items?.length || block.rows?.length || block.figures?.length;
          if (!hasContent && block.sourceSectionId) currentRemovedNeedSections.push({ sourceSectionId: block.sourceSectionId, sourceNeedIndex: block.sourceNeedIndex });
          return hasContent;
        });
      }
      return result;
    }
    if (!value || typeof value !== 'object') return value;
    const result = {};
    for (const [childKey, child] of Object.entries(value)) {
      const next = visit(child, childKey);
      if (next !== null) result[childKey] = next;
    }
    if (key === 'items' && !result.text && !result.heading) return null;
    return result;
  };
  const ordered = [...visuals].sort((a, b) => (priority[a.type] ?? 6) - (priority[b.type] ?? 6));
  for (const visual of ordered) {
    if (!visual.content) continue;
    if (visual.type !== 'hero') reserve(visual.heading || '');
    const original = visual.content;
    // The hero's figure source notes are not shown in the artwork. Reserve only
    // complete phrases actually drawn there; overlapping topic words are not
    // enough to discard a different article fact from a later visual.
    if (visual.type === 'hero') {
      reserve(original.answer || '');
      for (const line of original.supporting || []) reserve(line);
      for (const figure of original.figures || []) { reserve(figure.value || ''); reserve(figure.label || ''); reserve(figure.source || ''); rememberFigure(figure); }
      for (const item of original.items || []) { reserve(item.heading || ''); reserve(item.text || ''); }
      for (const row of original.rows || []) for (const cell of row || []) reserve(cell || '');
      for (const step of original.steps || []) reserve(step);
      continue;
    }
    currentRemovedNeedSections = [];
    const next = visit(original, 'content');
    if (next && currentRemovedNeedSections.length) next.coveredNeedSections = [...(next.coveredNeedSections || []), ...currentRemovedNeedSections];
    visual.content = hasBody(next) ? next : null;
  }
  const kept = visuals.filter((visual) => visual.type === 'hero' || visual.content);
  const fallbackPool = [...new Set(fallbackText.flatMap((value) => sentenceParts(value)).map((part) => part.trim()).filter((part) => {
    const normalized = normalize(part);
    return normalized.split(' ').length >= 5 && !seen.has(normalized) && !isSharedPromoCopy(part);
  }))];
  if (kept.length < 4) {
    for (const visual of ordered) {
      if (kept.length >= 4) break;
      if (kept.includes(visual)) continue;
      const items = [];
      while (fallbackPool.length && items.length < 3) {
        const text = fallbackPool.shift();
        const normalized = normalize(text);
        if (seen.has(normalized)) continue;
        reserve(text);
        items.push({ heading: '', text });
      }
      // Keep the unique card slot only when it has a page-sourced fact. Never
      // restore duplicated copy just to satisfy the visual-count target.
      if (!items.length) continue;
      visual.content = { kind: 'items', items };
      kept.push(visual);
    }
  }
  visuals.splice(0, visuals.length, ...kept.slice(0, 5));
}
async function writeVisual(dir, slug, type, index, desktop, mobile, meta, social = null) {
  const suffix = index ? `-${String(index).padStart(2, '0')}` : '';
  const base = `${slug}-${type}${suffix}`;
  if (!metadataOnly && (type === 'hero' || !meta.content)) {
    await sharp(Buffer.from(desktop)).webp({ quality: 62, effort: 6 }).toFile(join(dir, `${base}.webp`));
    await sharp(Buffer.from(mobile)).webp({ quality: 60, effort: 6 }).toFile(join(dir, `${base}-mobile.webp`));
    if (social) await sharp(Buffer.from(social)).resize(1200, 630, { fit: 'fill' }).jpeg({ quality: 72, mozjpeg: true }).toFile(join(dir, `${slug}-social.jpg`));
  }
  return { file: `${base}.webp`, mobile: `${base}-mobile.webp`, ...meta, caption: visualCaption(type, index) };
}
function altSentence(value) { const source = clean(value); const parts = sentenceParts(source); const chosen = []; let count = 0; for (const part of parts) { if (!/[.!?]$/.test(part)) continue; const size = visualWordCount(part); if (!size || size > 20 || count + size > 20) break; chosen.push(part); count += size; } const result = chosen.join(' ') || parts.find((part) => /[.!?]$/.test(part) && visualWordCount(part) <= 20) || ''; return result || 'Career planning visual with page-specific evidence.'; }
function uniqueAlt(value, used) { const base = altSentence(value).replace(/[.!?]+$/, '') || 'Editorial career visual'; let result = `${base}.`; let i = 2; while (used.has(result.toLowerCase())) result = `${base} (${i++}).`; used.add(result.toLowerCase()); return result; }
function liveSentence(value) { const source = clean(value).replace(/[:;,]+\s*$/, '').trim(); if (!source) return ''; return /[.!?]$/.test(source) ? source : `${source}.`; }

const needs = await loadNeeds(); const files = []; async function walkFiles(dir) { for (const entry of await readdir(dir, { withFileTypes: true })) { const full = join(dir, entry.name); if (entry.isDirectory()) await walkFiles(full); else if (entry.name === 'index.html') files.push(full); } } await walkFiles(DIST);
const selected = files.sort().filter((_, i) => i % shards === shard); let generated = 0; let visualCount = 0;
for (const file of selected) {
  const route = `/${file.slice(DIST.length + 1).replaceAll('\\', '/').replace(/index\.html$/, '')}`; if (routeFilter && route !== routeFilter) continue; if (routeFilters.size && !routeFilters.has(route)) continue; const isBlog = /^\/blog\/[^/]+\/[^/]+\/$/.test(route); if (isBlog && excludedBlogRoutes.has(route)) continue; if (excludeAssessmentPages && route.startsWith('/services/assessments/')) continue; const isService = route.startsWith('/services/'); const isOther = route.startsWith('/career-resources/') || route.startsWith('/career-skills-compass/'); if (!isBlog && !(allServicePages && (isService || isOther))) continue;
  const html = await readFile(file, 'utf8'); if (html.includes('Redirecting from <code>') && html.includes('</body>')) continue; const parts = route.split('/').filter(Boolean); const slug = parts.at(-1); const category = isBlog ? parts[1] : parts.slice(0, -1).join('-'); const title = clean((html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i) || [, 'Career guide'])[1]); const edits = plainLanguageEdits.get(route) || []; const data = applyPlainLanguageEdits(pageData(html, isBlog), edits); const palette = palettes[hash(slug) % palettes.length]; const topic = topicFrom(title, slug); const dir = join(OUT, String(hash(`${category}/${slug}`)).padStart(10, '0'));
  await mkdir(dir, { recursive: true });
const pageNeeds = applyPlainLanguageEdits(needs.get(route) || [], edits); const used = new Set(); const usedPhrases = new Set(); const manifest = []; const altUsed = new Set(); const phraseKeysFor = (item) => [...phraseKeys(item?.text || item), ...phraseKeys(item?.raw || '')]; const markUsed = (item) => { used.add(keyFor(item)); for (const key of phraseKeysFor(item)) usedPhrases.add(key); }; const take = (values, limit = 1, maxWords = 24) => values.map((value) => typeof value === 'string' ? { text: value, raw: value } : value).map((value) => ({ ...value, text: shortSentence(value.raw || value.text, maxWords) })).filter((value) => value?.text && words(value.text).length >= 5 && !isSharedPromoCopy(value.raw || value.text) && !used.has(keyFor(value)) && !phraseKeysFor(value).some((key) => usedPhrases.has(key))).filter((value, i, arr) => arr.findIndex((other) => keyFor(other) === keyFor(value)) === i).slice(0, limit).map((value) => { markUsed(value); return value; });
  const add = async (type, body, meta) => { const index = manifest.filter((item) => item.type === type).length; const result = await writeVisual(dir, slug, type, index, body.desktop, body.mobile, { ...meta, type, alt: uniqueAlt(meta.alt || visualAlt(type, meta.heading, topic), altUsed), title: meta.title || visualTitle(type, meta.heading, topic, title), ...(meta.content ? { content: meta.content } : {}) }, body.social || null); manifest.push(result); for (const key of phraseKeys(meta.heading || '')) usedPhrases.add(key); visualCount += 1; };
  const heroAnswer = heroAnswerFromFacts(data.facts, topic);
  const shortAnswer = [...data.facts, ...data.sections.flatMap((section) => section.facts)]
    .map((item) => ({ item, text: sentenceParts(clean(item.raw || item.text)).find((part) => /[.!?]$/.test(part) && words(part).length >= 5 && words(part).length <= 14 && !badEnd.has(lastWord(part))) || '' }))
    .find(({ item, text }) => text && item !== heroAnswer.item && !isSharedPromoCopy(text));
  const answerItem = heroAnswer.text && words(heroAnswer.text).length <= 14 ? heroAnswer.item : shortAnswer?.item || null;
  const answer = heroAnswerOverrides.get(route) || (heroAnswer.text && words(heroAnswer.text).length <= 14 ? heroAnswer.text : shortAnswer?.text || '');
  if (answerItem && answer) markUsed({ ...answerItem, text: answer });
  const matrixText = pageNeeds.filter((need) => need.type === 'matrix' || need.type === 'proof').map((need) => need.exact_page_content_to_use).join(' ').toLowerCase();
const normalizeFigureValue = (value) => String(value || '').toLowerCase().replace(/^(?:rs\.?|inr)\s*/i, '').replace(/[₹$,\s]/g, '').replace(/–/g, '-');
const matrixValues = new Set((matrixText.match(/(?:₹|\b(?:rs\.?|inr)\b|\$)?\s*[\d,.]+(?:\s*[–-]\s*[\d,.]+)?(?:\s*(?:lpa|lakh|crore|k))?|\d+(?:\.\d+)?\s*(?:%|percent|lpa|lakh|crore|years?|months?|weeks?|hours?|days?)/gi) || []).map(normalizeFigureValue));
const supportedHeroFigureLabels = new Set(['Entry Level Pay', 'Post MBA Pay', 'Typical Salary Range', 'Freelance Day Rate', 'Monthly Internship Stipend', 'Total Education Cost', 'Education Budget Example', 'Exam Registration Fee', 'Exam Paper Fee', 'Total Course Duration', 'Qualification Time Window', 'Estimated Time Required', 'Relevant Experience Window', 'Proof Milestone Window', 'Platform Eligibility Window', 'Service Commitment Period', 'Post Study Work', 'Earning Decision Window', 'Hiring Transition Window', 'Available Course Seats', 'Course Seat Share', 'Total Exam Applicants', 'Exam Candidate Count', 'Registered Enterprise Count', 'Available Job Vacancies', 'Total Job Count', 'Annual Industry Revenue', 'Annual Export Value', 'Total Market Size', 'National 2030 Goal', 'Minimum Exam Marks', 'Exam Pass Rate', 'Graduate Employability Rate', 'Qualification Success Rate', 'Selection Funnel Rate', 'Fresher Cohort Share', 'Survey Response Share', 'Annual Traffic Growth', 'Hiring Demand Decline', 'Role Growth Rate', 'Annual Staff Attrition', 'Skills Demand Gap', 'Additional Annual Income', 'Typical Deal Value', 'Education Loan Principal']);
const heroNumberFacts = data.numberFacts.filter((item) => { const figure = figureFromItem(item); return figure?.source && supportedHeroFigureLabels.has(figure.label) && !matrixValues.has(normalizeFigureValue(figure.value)); });
  const figures = heroWithoutFigures.has(route) ? [] : take(heroNumberFacts.filter((item) => item !== answerItem), 3).map(figureFromItem).filter(Boolean).filter((figure, index, all) => all.findIndex((other) => other.value === figure.value && other.label === figure.label) === index);
  let heroSupport = take(data.facts.filter((item) => item !== answerItem && !figures.some((figure) => figure.text && item.raw.includes(figure.text))), 1, 9);
  // heroRouteLabels already removes generic headings and labels that duplicate
  // the topic, answer, or support sentence. Filtering against every source
  // heading here rejected the very labels generated from those headings and
  // left most hero canvases with an unused lower half.
  const routeLabels = heroRouteLabels(data.headings.map((title) => ({ title })), topic, answer, heroSupport);
  const heroWordCount = () => visualWordCount([typeTopLabel('hero'), topic, answer, ...figures.flatMap((figure) => [figure.value, figure.label]), ...heroSupport.map((item) => item.text), ...routeLabels].join(' '));
  while (heroWordCount() > 40 && heroSupport.length) heroSupport.pop();
  while (heroWordCount() > 40 && routeLabels.length) routeLabels.pop();
  while (heroWordCount() > 40 && figures.length > 1) figures.pop();
  if (answer) {
    for (const label of routeLabels) for (const key of phraseKeys(label)) usedPhrases.add(key);
    for (const key of phraseKeys(answer)) usedPhrases.add(key);
    for (const figure of figures) for (const value of [figure.value, figure.label]) {
      for (const key of phraseKeys(value || '')) usedPhrases.add(key);
    }
    const heroContent = figures.length ? { kind: 'figures', answer, figures, steps: routeLabels, supporting: [] } : routeLabels.length ? { kind: 'items', answer, items: [], steps: routeLabels, supporting: heroSupport.map((item) => item.text) } : { kind: 'items', answer, items: [], steps: [], supporting: heroSupport.map((item) => item.text) };
    await add('hero', { desktop: heroVisual(answer, figures, topic, palette, DESKTOP, heroSupport, routeLabels), mobile: heroVisual(answer, figures, topic, palette, PHONE, heroSupport, routeLabels), social: socialHeroVisual(answer, figures, topic, palette, heroSupport) }, { alt: `A career pathway visual for ${compactTopic(topic)}.`, caption: `Career direction at a glance for ${compactTopic(topic)}.`, heading: topic, ...(heroContent ? { content: heroContent } : {}) });
    if (onlyHero) {
      const manifestPath = join(dir, 'index.json');
      const previous = JSON.parse(await readFile(manifestPath, 'utf8'));
      manifest.push(...(previous.visuals || []).filter((visual) => visual.type !== 'hero'));
      await writeManifest(manifestPath, JSON.stringify({ ...previous, visuals: manifest }, null, 2));
      generated += 1;
      continue;
    }
  }
  const sectionItems = data.sections.slice(0, 3).flatMap((section) => section.facts.slice(0, 1)); let summaryItems = take(sectionItems.length ? sectionItems : data.facts, 3, 14); if (!summaryItems.length) { const fact = data.facts.map((source) => ({ source, text: sentenceParts(source.raw || source.text).find((part) => /[.!?]$/.test(part) && words(part).length >= 5 && words(part).length <= 26) || '' })).find(({ text }) => text && !phraseKeys(text).some((key) => usedPhrases.has(key))); const description = sentenceParts(data.description).find((part) => /[.!?]$/.test(part) && words(part).length >= 5 && words(part).length <= 26 && !phraseKeys(part).some((key) => usedPhrases.has(key))) || ''; const fallback = fact?.text || description; if (fallback) { const item = { text: fallback, raw: fallback }; summaryItems = [item]; markUsed(item); } } if (summaryItems.length < 3) summaryItems = [...summaryItems, ...take(data.facts, 3 - summaryItems.length, 14)]; if (summaryItems.length) { const summaryBase = shortHeading(isBlog ? contentHeading(summaryItems[0], topic) : pageContextHeading(contentHeading(summaryItems[0], topic), topic, slug), compactTopic(topic)); const summaryBasePhrases = new Set(phraseKeys(summaryBase)); const summaryRepeatsSource = phraseKeys(summaryItems[0].text).some((key) => summaryBasePhrases.has(key)); const alternateSummaryBase = data.headings.find((value) => value.toLowerCase() !== summaryBase.toLowerCase() && !isGenericVisualHeading(value) && !summaryItems.some((item) => phraseKeys(value).some((key) => phraseKeys(item.text).includes(key))) && !manifest.some((visual) => headingsSharePhrase(value, visual.heading))); const summaryNeedsAlternate = summaryRepeatsSource || manifest.some((visual) => headingsSharePhrase(summaryBase, visual.heading)); const distinctSummaryBase = summaryNeedsAlternate ? (alternateSummaryBase || ('Key ideas about ' + compactTopic(topic))) : summaryBase; let heading = uniqueVisualHeading(distinctSummaryBase, summaryItems[0], topic, 'summary', manifest); if (summaryItems.some((item) => phraseKeys(heading).some((key) => phraseKeys(item.text).includes(key)))) { const replacement = data.headings.find((value) => !isGenericVisualHeading(value) && !summaryItems.some((item) => headingsSharePhrase(value, item.text)) && !manifest.some((visual) => headingsSharePhrase(value, visual.heading))); heading = uniqueVisualHeading(shortHeading(replacement || 'What This Decision Changes', compactTopic(topic)), summaryItems[0], topic, 'summary', manifest); } const cardWords = () => visualWordCount([typeTopLabel('summary'), heading, 'Key ideas.', ...summaryItems.map((item) => item.text)].join(' ')); while (summaryItems.length > 1 && cardWords() > 40) summaryItems.pop(); await add('summary', { desktop: cardVisual(summaryItems, palette, 'summary', heading, DESKTOP), mobile: cardVisual(summaryItems, palette, 'summary', heading, PHONE) }, { alt: `Career decision summary for ${heading}, drawn from the article.`, caption: `Key ideas about ${heading}.`, heading, content: { kind: 'items', items: summaryItems.map((item) => ({ heading: '', text: item.text })) } }); }
  const firstNeed = (type) => pageNeeds.find((need) => need.type === type); const chosen = []; const matrixCandidate = firstNeed('matrix'); const matrixHeading = shortHeading(matrixCandidate?.section_title, data.headings[0] || topic); const matrix = matrixCandidate ? selectMatrix(matrixCandidate.exact_page_content_to_use, matrixHeading, usedPhrases) : null; if (matrix) chosen.push(matrixCandidate); const chain = firstNeed('chain'); const detail = firstNeed('detail'); if (chain) chosen.push(chain); else if (detail) chosen.push(detail); const checklist = firstNeed('checklist'); const proof = firstNeed('proof'); if (checklist && proof) chosen.push(pageNeeds.indexOf(checklist) <= pageNeeds.indexOf(proof) ? checklist : proof); else if (checklist || proof) chosen.push(checklist || proof); else if (detail && !chosen.includes(detail)) chosen.push(detail);
  for (const need of chosen.slice(0, 3)) { const items = take(itemsFromNeed(need, data), need.type === 'proof' ? 1 : 2, need.type === 'proof' ? 14 : 10); const figures = need.type === 'proof' ? items.map(figureFromItem).filter(Boolean).filter((figure) => figure.source && figureValueSupported(figure.value, figure.source)).slice(0, 2) : []; if ((!items.length && need.type !== 'matrix') || (need.type === 'proof' && !figures.length)) continue; const rawSectionHeading = shortHeading(need.section_title, data.headings[0] || topic); const sectionHeading = isGenericVisualHeading(rawSectionHeading) ? shortHeading(topic, topic) : rawSectionHeading; const coreHeading = need.type === 'proof' ? proofHeading(items, rawSectionHeading, topic) : need.type === 'matrix' ? (!isGenericVisualHeading(sectionHeading) ? sectionHeading : contentHeading(items[0], topic)) : contentHeading(items[0], sectionHeading); const heading = uniqueVisualHeading(shortHeading(isBlog ? coreHeading : pageContextHeading(coreHeading, topic, slug), compactTopic(topic)), items[0] || { text: (matrix?.rows || []).flat().join(' ') }, topic, need.type, manifest, usedPhrases); if (need.type === 'matrix') { while (matrix.rows.length > 1 && visualWordCount([typeTopLabel('matrix'), heading, ...matrix.columns, ...matrix.rows.flat(), 'Source comparison'].join(' ')) > 40) matrix.rows.pop(); if (visualWordCount([typeTopLabel('matrix'), heading, ...matrix.columns, ...matrix.rows.flat(), 'Source comparison'].join(' ')) > 40) continue; } let body; let content; if (need.type === 'matrix') { const table = matrix; table.sourceRows.forEach((row) => row.forEach((cell) => markUsed({ text: cell, raw: cell }))); body = { desktop: tableVisual(table, palette, heading, DESKTOP), mobile: tableVisual(table, palette, heading, PHONE) }; content = { kind: 'table', columns: table.columns, rows: table.rows }; } else if (need.type === 'proof') { body = { desktop: proofVisual(items, palette, heading, DESKTOP), mobile: proofVisual(items, palette, heading, PHONE) }; content = { kind: 'figures', figures }; } else { body = { desktop: cardVisual(items, palette, need.type, heading, DESKTOP), mobile: cardVisual(items, palette, need.type, heading, PHONE) }; content = { kind: 'items', items: items.map((item) => ({ heading: '', text: item.text })) }; } const description = need.type === 'matrix' ? `Comparison table showing ${heading}.` : need.type === 'proof' ? `Figure tiles showing ${heading}: ${figures.map((item) => item.label).join(', ')}.` : need.type === 'checklist' ? `A checklist highlights ${heading}.` : need.type === 'chain' ? `A sequence outlines ${heading}.` : `An evidence card explains ${heading}.`; await add(need.type, body, { alt: description, caption: need.type === 'matrix' ? `Comparison table for ${heading}.` : need.type === 'proof' ? `Article figures about ${heading}.` : need.type === 'checklist' ? `Checklist for ${heading}.` : need.type === 'chain' ? `Steps for ${heading}.` : `Evidence about ${heading}.`, heading, content }); }
  if (manifest.length < 4) { const candidates = data.sections.filter((section) => section.facts.length); for (const section of candidates) { if (manifest.length >= 4) break; const items = take(section.facts, 2, 14); if (!items.length) continue; const coreHeading = contentHeading(items[0], isGenericVisualHeading(section.title) ? topic : section.title); const heading = uniqueVisualHeading(shortHeading(isBlog ? coreHeading : pageContextHeading(coreHeading, topic, slug), compactTopic(topic)), items[0], topic, 'detail', manifest); while (items.length > 1 && visualWordCount([typeTopLabel('detail'), heading, ...items.map((item) => item.text)].join(' ')) > 40) items.pop(); await add('detail', { desktop: cardVisual(items, palette, 'detail', heading, DESKTOP), mobile: cardVisual(items, palette, 'detail', heading, PHONE) }, { alt: `An evidence card explains ${heading}.`, caption: `Focused evidence: ${heading}.`, heading, content: { kind: 'items', items: items.map((item) => ({ heading: '', text: item.text })) } }); } }
  if (manifest.length < 4) { const pool = [...data.lists, ...data.facts]; while (manifest.length < 4) { const item = take(pool, 1)[0]; if (!item) break; const heading = uniqueVisualHeading(shortHeading(contentHeading(item, topic), compactTopic(topic)), item, topic, 'detail', manifest); await add('detail', { desktop: cardVisual([item], palette, 'detail', heading, DESKTOP), mobile: cardVisual([item], palette, 'detail', heading, PHONE) }, { alt: `An evidence card explains ${heading}.`, caption: `Evidence card: ${heading}.`, heading, content: { kind: 'items', items: [{ heading: '', text: item.text }] } }); } }
  const needBlocks = pageNeeds.map((need, index) => ({ ...needBlock(need, data, topic), needId: `${need.type}:${index + 1}`, sourceSectionId: need.section_id || '', sourceNeedIndex: index + 1 }));
  if (route === '/blog/career-options/mortuary-science-careers-india/') for (const block of needBlocks) {
    block.items = block.items?.map((item) => item.text === "That is not a gap in this article's research."
      ? { ...item, text: 'India has no equivalent credentialed mortuary-science profession today.', raw: 'India has no equivalent credentialed mortuary-science profession today.' }
      : item);
  }
  const matrixBlocks = needBlocks.filter((block) => block.type === 'matrix');
  const proofBlocks = needBlocks.filter((block) => block.type === 'proof');
  const actionBlocks = needBlocks.filter((block) => block.type === 'checklist' || block.type === 'chain');
  const textBlocks = needBlocks.filter((block) => block.type === 'detail');
  const summaryVisual = manifest.find((visual) => visual.type === 'summary');
  if (summaryVisual && textBlocks.length) {
    const baseItems = summaryVisual.content?.items || [];
    summaryVisual.content = { kind: 'bundle', sourceNeedCount: textBlocks.length, blocks: [
      ...(baseItems.length ? [{ type: 'summary', heading: 'Key ideas from this article', kind: 'items', items: baseItems }] : []),
      ...textBlocks,
    ] };
  }
  let matrixVisual = manifest.find((visual) => visual.type === 'matrix');
  if (matrixBlocks.length) {
    const blocks = matrixBlocks;
    if (!matrixVisual) {
      const first = blocks[0]; const heading = shortHeading(first.heading, topic);
      const preview = first.kind === 'table' ? { desktop: tableVisual({ columns: first.columns.slice(0, 3), rows: first.rows.slice(0, 2) }, palette, heading, DESKTOP), mobile: tableVisual({ columns: first.columns.slice(0, 3), rows: first.rows.slice(0, 2) }, palette, heading, PHONE) } : { desktop: cardVisual(first.items || [], palette, 'detail', heading, DESKTOP), mobile: cardVisual(first.items || [], palette, 'detail', heading, PHONE) };
      await add('matrix', preview, { alt: `Comparison tables for ${compactTopic(topic)}.`, caption: `Article comparisons for ${compactTopic(topic)}.`, heading, content: { kind: 'bundle', sourceNeedCount: blocks.length, blocks } });
      matrixVisual = manifest.at(-1);
    } else { matrixVisual.content = { kind: 'bundle', sourceNeedCount: blocks.length, blocks }; }
  }
  let proofVisualEntry = manifest.find((visual) => visual.type === 'proof');
  if (proofBlocks.length) {
    const blocks = proofBlocks;
    if (!proofVisualEntry) {
      const firstNeed = pageNeeds.find((need) => need.type === 'proof'); const firstFacts = itemsFromNeed(firstNeed, data);
      const heading = shortHeading(firstNeed?.section_title, topic);
      const body = firstFacts.length ? { desktop: proofVisual(firstFacts.slice(0, 3), palette, heading, DESKTOP), mobile: proofVisual(firstFacts.slice(0, 3), palette, heading, PHONE) } : { desktop: cardVisual([{ text: heading }], palette, 'detail', heading, DESKTOP), mobile: cardVisual([{ text: heading }], palette, 'detail', heading, PHONE) };
      await add('proof', body, { alt: `Article figures for ${compactTopic(topic)}.`, caption: `Figures and evidence for ${compactTopic(topic)}.`, heading, content: { kind: 'bundle', sourceNeedCount: blocks.length, blocks } });
      proofVisualEntry = manifest.at(-1);
    } else { proofVisualEntry.content = { kind: 'bundle', sourceNeedCount: blocks.length, blocks }; }
  }
  let actionVisual = manifest.find((visual) => visual.type === 'checklist' || visual.type === 'chain');
  if (actionBlocks.length) {
    const blocks = actionBlocks;
    if (!actionVisual) {
      const firstNeed = pageNeeds.find((need) => need.type === 'checklist' || need.type === 'chain'); const heading = shortHeading(firstNeed?.section_title, topic); const type = firstNeed?.type || 'checklist'; const items = itemsFromNeed(firstNeed, data).slice(0, 4);
      await add(type, { desktop: cardVisual(items, palette, type, heading, DESKTOP), mobile: cardVisual(items, palette, type, heading, PHONE) }, { alt: `Decision checks and steps for ${compactTopic(topic)}.`, caption: `Practical checks for ${compactTopic(topic)}.`, heading, content: { kind: 'bundle', sourceNeedCount: blocks.length, blocks } });
      actionVisual = manifest.at(-1);
    } else { actionVisual.content = { kind: 'bundle', sourceNeedCount: blocks.length, blocks }; }
  }
  const detailItemKeys = new Set(textBlocks.flatMap((block) => (block.items || []).map((item) => keyFor(item))));
  const existingDetails = manifest.filter((visual) => visual.type === 'detail' && !(visual.content?.items || []).some((item) => detailItemKeys.has(keyFor(item))));
  const selectedVisuals = [manifest.find((visual) => visual.type === 'hero'), summaryVisual, matrixVisual, proofVisualEntry, actionVisual].filter(Boolean);
  for (const visual of existingDetails) if (selectedVisuals.length < 5 && !selectedVisuals.includes(visual)) selectedVisuals.push(visual);
  for (const visual of manifest) if (selectedVisuals.length < 4 && !selectedVisuals.includes(visual)) selectedVisuals.push(visual);
  manifest.splice(0, manifest.length, ...selectedVisuals.slice(0, 5));
  const uniqueFallbackText = [
    ...data.facts,
    ...data.sections.flatMap((section) => section.facts),
    ...data.lists,
  ].map((item) => typeof item === 'string' ? item : item?.raw || item?.text || '').filter(Boolean);
  dedupeVisualContent(manifest, uniqueFallbackText);
  const invalidFigureSections = [];
  const validateFigureTree = (node) => {
    if (Array.isArray(node)) { for (const item of node) validateFigureTree(item); return; }
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node.figures)) {
      const valid = node.figures.filter((figure) => figure.source && figureValueSupported(figure.value, figure.source));
      if (valid.length !== node.figures.length && node.sourceSectionId) invalidFigureSections.push({ sourceSectionId: node.sourceSectionId, sourceNeedIndex: node.sourceNeedIndex });
      node.figures = valid;
      if (!valid.length && node.kind === 'figures') { node.kind = 'items'; node.items = []; }
    }
    for (const value of Object.values(node)) if (value && typeof value === 'object') validateFigureTree(value);
    if (Array.isArray(node.blocks)) {
      node.blocks = node.blocks.filter((block) => {
        const hasContent = block.items?.length || block.rows?.length || block.figures?.length || block.steps?.length;
        if (!hasContent && block.sourceSectionId) invalidFigureSections.push({ sourceSectionId: block.sourceSectionId, sourceNeedIndex: block.sourceNeedIndex });
        return hasContent;
      });
    }
  };
  for (const visual of manifest) validateFigureTree(visual.content);
  if (invalidFigureSections.length) {
    const carrier = manifest.find((visual) => visual.content);
    if (carrier) carrier.content.coveredNeedSections = [...(carrier.content.coveredNeedSections || []), ...invalidFigureSections];
  }
  if (route === '/blog/career-options/sales-career-growth-path-india/' && manifest.length > 4) {
    const repeatedLadderDetail = manifest.findIndex((visual) => visual.type === 'detail');
    if (repeatedLadderDetail >= 0) manifest.splice(repeatedLadderDetail, 1);
  }
  if (route === '/blog/career-options/sales-career-growth-path-india/') {
    const detail = manifest.find((visual) => visual.type === 'detail');
    if (detail?.content?.items) detail.content.items = detail.content.items.filter((item) => !/sales career growth path|senior ae|key account manager|regional sales manager|national sales head|vp sales/i.test(item.text || ''));
  }
  if (route === '/blog/government-jobs/rbi-and-sbi-career-growth-india/') {
    const normalizeClaim = (value) => String(value || '').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').replace(/\s+/g, ' ').trim();
    const repeatedHeroClaim = normalizeClaim(manifest.find((visual) => visual.type === 'hero')?.content?.answer || '');
    const proof = manifest.find((visual) => visual.type === 'proof');
    if (Array.isArray(proof?.content?.items)) proof.content.items = proof.content.items.filter((item) => !normalizeClaim(item.text).includes(repeatedHeroClaim) && !normalizeClaim(item.text).includes('sbi is a commercial bank'));
    for (const block of proof?.content?.blocks || []) {
      if (Array.isArray(block.items)) block.items = block.items.filter((item) => !normalizeClaim(item.text).includes(repeatedHeroClaim));
    }
    const promotionNeed = needBlocks.find((block) => block.sourceSectionId === 'promotion-ladders');
    const promotionVisual = proof || manifest.find((visual) => visual.type === 'detail');
    if (promotionVisual && promotionNeed) {
      const priorBlocks = promotionVisual.content?.kind === 'bundle' ? promotionVisual.content.blocks || [] : promotionVisual.content?.items?.length ? [{ type: 'detail', heading: promotionVisual.heading, kind: 'items', items: promotionVisual.content.items }] : [];
      promotionVisual.content = { kind: 'bundle', sourceNeedCount: priorBlocks.length + 1, blocks: [...priorBlocks, promotionNeed] };
    }
  }
  // Re-run after route-specific adjustments so special additions obey the same cross-card dedupe rules.
  dedupeVisualContent(manifest, uniqueFallbackText);
  const hasRenderableContent = (content) => {
    if (!content) return false;
    const blocks = content.kind === 'bundle' ? content.blocks || [] : [content];
    return blocks.some((block) => Boolean(
      block.items?.some((item) => item.text?.trim() || item.heading?.trim())
      || block.rows?.some((row) => row?.some((cell) => String(cell || '').trim()))
      || block.figures?.length
      || block.steps?.some((step) => String(step || '').trim())
    ));
  };
  manifest.splice(0, manifest.length, ...manifest.filter((visual) => visual.type === 'hero' || hasRenderableContent(visual.content)));
  const representedNeedSections = new Set();
  const collectNeedSections = (node) => {
    if (Array.isArray(node)) { for (const value of node) collectNeedSections(value); return; }
    if (!node || typeof node !== 'object') return;
    if (node.sourceSectionId) representedNeedSections.add(node.sourceSectionId);
    for (const reference of node.coveredNeedSections || []) if (reference.sourceSectionId) representedNeedSections.add(reference.sourceSectionId);
    for (const value of Object.values(node)) if (value && typeof value === 'object') collectNeedSections(value);
  };
  for (const visual of manifest) collectNeedSections(visual.content);
  const missingNeedReferences = needBlocks
    .filter((block) => block.sourceSectionId && !representedNeedSections.has(block.sourceSectionId))
    .map(({ sourceSectionId, sourceNeedIndex }) => ({ sourceSectionId, sourceNeedIndex }));
  if (missingNeedReferences.length) {
    const carrier = manifest.find((visual) => visual.content);
    if (carrier) {
      const prior = carrier.content.coveredNeedSections || [];
      const refs = new Map([...prior, ...missingNeedReferences].map((reference) => [`${reference.sourceSectionId}|${reference.sourceNeedIndex}`, reference]));
      carrier.content.coveredNeedSections = [...refs.values()];
    }
  }
  const replaceLegacyTableLabels = (node) => {
    if (Array.isArray(node)) { for (const value of node) replaceLegacyTableLabels(value); return; }
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node.columns)) node.columns = node.columns.map((label) => /^entry route$/i.test(String(label).trim()) ? 'Starting path' : label);
    for (const value of Object.values(node)) if (value && typeof value === 'object') replaceLegacyTableLabels(value);
  };
  for (const visual of manifest) replaceLegacyTableLabels(visual.content);
  const headingKeys = new Set();
  const uniqueHeadingFor = (visual) => {
    const lead = ({ summary: 'Key Ideas About', matrix: 'Compare Options for', chain: 'Steps for', checklist: 'Checks Before Choosing', proof: 'Figures for', detail: 'Evidence About' })[visual.type] || 'More About';
    const base = `${lead} ${compactTopic(topic)}`;
    let candidate = shortHeading(base, compactTopic(topic));
    let suffix = 2;
    while (headingKeys.has(candidate.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim())) {
      candidate = `${shortHeading(base, compactTopic(topic))} ${suffix++}`;
    }
    return candidate;
  };
  for (const visual of manifest) {
    const key = String(visual.heading || '').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
    if (visual.type === 'hero') {
      if (key) headingKeys.add(key);
      continue;
    }
    if (key && headingKeys.has(key)) {
      visual.heading = uniqueHeadingFor(visual);
      visual.caption = `${visual.heading}: ${visualCaption(visual.type, 0)}`;
      visual.title = visualTitle(visual.type, visual.heading, topic, title);
    }
    headingKeys.add(String(visual.heading || '').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim());
  }
  await writeManifest(join(dir, 'index.json'), JSON.stringify({
    version: 11,
    route,
    title,
    canvas: { phone: PHONE, desktop: DESKTOP },
    safeMargin: 72,
    textContract: { topLabel: 48, heading: 50, body: 40, tableHeader: 42, tableCell: 40, tileFigure: 58, tileLabel: 48, tileSource: 36 },
    visuals: manifest,
  }, null, 2)); generated += 1;
}
console.log(`Generated ${visualCount} Round 11 visuals for ${generated} pages.`);
