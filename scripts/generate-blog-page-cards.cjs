const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const repo = path.resolve(__dirname, '..');
const sourceRoot = path.join(repo, 'src/pages/blog');
const outputRoot = path.join(repo, 'public/images/blog/page-cards');
const categoryLabels = {
  'ai-future': ['AI FUTURE', ['TASK MIX', 'JUDGMENT', 'PROOF']],
  'career-change': ['CAREER CHANGE', ['REALITY', 'SKILL GAP', 'TEST']],
  'career-guidance': ['CAREER GUIDANCE', ['FIT', 'MARKET', 'SKILLS']],
  'career-options': ['CAREER OPTIONS', ['WORK', 'TRAINING', 'DEMAND']],
  'college-degrees': ['COLLEGE DECISIONS', ['COST', 'CAPABILITY', 'OUTCOME']],
  'freelancing-business': ['FREELANCING', ['PROBLEM', 'OFFER', 'PROOF']],
  'government-jobs': ['GOVERNMENT JOBS', ['STABILITY', 'TIME', 'BACKUP']],
  'interviews': ['INTERVIEWS', ['PROJECT', 'RESULT', 'LEARNING']],
  'job-search': ['JOB SEARCH', ['ROLE', 'EVIDENCE', 'APPLY']],
  'linkedin-networking': ['NETWORKING', ['WORK', 'SIGNAL', 'TRUST']],
  'medical-careers': ['HEALTHCARE', ['WORK', 'TRAINING', 'SETTING']],
  'parents': ['PARENT SUPPORT', ['LISTEN', 'COMPARE', 'TEST']],
  'portfolio-proof-of-work': ['PROOF OF WORK', ['BRIEF', 'PROCESS', 'OUTCOME']],
  'resume': ['RESUME PROOF', ['CLAIM', 'RESULT', 'LINK']],
  'skill-roadmaps': ['SKILL ROADMAP', ['BASELINE', 'SPRINT', 'REVIEW']],
  'skills': ['HIGH-VALUE SKILLS', ['CORE', 'PRACTICE', 'PROOF']],
  'stream-selection': ['STREAM SELECTION', ['INTEREST', 'ABILITY', 'OPTIONS']],
  'study-abroad': ['STUDY ABROAD', ['COST', 'RISK', 'FIT']],
};
const palettes = [['#193b52', '#d6a85f'], ['#24483f', '#d28b62'], ['#3c334d', '#d8a45d'], ['#4e3a32', '#d49b70']];

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const titleFrom = (file, slug) => {
  const source = fs.readFileSync(file, 'utf8');
  const match = source.match(/const\s+title\s*=\s*['"]([^'"]+)['"]/);
  if (match) return match[1].replace(/\s+/g, ' ').trim();
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
};
const linesFor = (title) => {
  const words = title.split(' ');
  const lines = ['', ''];
  for (const word of words) {
    const next = `${lines[0]} ${word}`.trim();
    if (next.length <= 30 || !lines[0]) lines[0] = next;
    else lines[1] = `${lines[1]} ${word}`.trim();
  }
  if (!lines[1]) lines[1] = lines[0].slice(0, 30);
  return lines;
};
const cardSvg = (category, title, index) => {
  const [eyebrow, labels] = categoryLabels[category] ?? ['CAREER GUIDE', ['WORK', 'SKILLS', 'PROOF']];
  const [ink, accent] = palettes[index % palettes.length];
  const [line1, line2] = linesFor(title);
  const rows = labels.map((label, i) => `<g transform="translate(900 ${285 + i * 150})"><rect width="510" height="96" rx="16" fill="#fffdf8" stroke="${accent}" stroke-width="2"/><circle cx="45" cy="48" r="13" fill="${accent}"/><text x="82" y="57" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="700" letter-spacing="2" fill="${ink}">${esc(label)}</text></g>`).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000"><rect width="1600" height="1000" fill="#f1eadf"/><rect x="38" y="38" width="1524" height="924" rx="26" fill="#f8f4ec" stroke="#d8cdbd" stroke-width="3"/><path d="M90 150 C280 110 430 170 620 132" fill="none" stroke="${accent}" stroke-width="5" opacity=".65"/><text x="120" y="190" font-family="Arial, Helvetica, sans-serif" font-size="25" font-weight="700" letter-spacing="4" fill="${accent}">${esc(eyebrow)}</text><text x="120" y="315" font-family="Georgia, serif" font-size="53" font-weight="700" fill="${ink}">${esc(line1)}</text><text x="120" y="380" font-family="Georgia, serif" font-size="53" font-weight="700" fill="${ink}">${esc(line2)}</text><path d="M120 455 H680" stroke="${ink}" stroke-width="3" opacity=".25"/><text x="120" y="540" font-family="Arial, Helvetica, sans-serif" font-size="25" fill="#675f56">A page-specific visual guide</text><text x="120" y="585" font-family="Georgia, serif" font-size="34" font-style="italic" fill="${ink}">Read the work. Test the path.</text><text x="120" y="850" font-family="Arial, Helvetica, sans-serif" font-size="20" letter-spacing="2" fill="#796f64">FUTURE CAREER SCHOOL  /  PRACTICAL GUIDE</text>${rows}</svg>`;
};

const jobs = [];
for (const file of fs.readdirSync(sourceRoot, { withFileTypes: true })) {
  if (!file.isDirectory() || file.name.startsWith('[')) continue;
  const category = file.name;
  const categoryDir = path.join(sourceRoot, category);
  for (const article of fs.readdirSync(categoryDir, { withFileTypes: true })) {
    if (!article.isDirectory() || article.name.startsWith('[')) continue;
    const indexFile = path.join(categoryDir, article.name, 'index.astro');
    if (!fs.existsSync(indexFile)) continue;
    jobs.push({ category, slug: article.name, title: titleFrom(indexFile, article.name), file: indexFile });
  }
}

Promise.all(jobs.map(async (job, index) => {
  const outputDir = path.join(outputRoot, job.category);
  fs.mkdirSync(outputDir, { recursive: true });
  const output = path.join(outputDir, `${job.slug}.webp`);
  await sharp(Buffer.from(cardSvg(job.category, job.title, index))).webp({ quality: 86 }).toFile(output);
})).then(() => console.log(`Generated ${jobs.length} page-specific cards.`));
