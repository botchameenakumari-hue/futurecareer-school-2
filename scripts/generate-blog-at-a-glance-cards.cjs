const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const outputDir = path.resolve(__dirname, '../public/images/blog/category');
const cards = [
  ['ai-future', 'AI & WORK', 'The task mix is changing', ['ROUTINE TASKS', 'HUMAN JUDGMENT', 'PROOF OF WORK'], '#193b52', '#d6a85f'],
  ['career-guidance', 'CAREER GUIDANCE', 'Make the trade-offs visible', ['FIT', 'MARKET', 'SKILLS', 'MONEY'], '#24483f', '#d28b62'],
  ['career-change', 'CAREER CHANGE', 'Test the next move first', ['CURRENT ROLE', 'SKILL GAP', 'SMALL TEST', 'PROOF'], '#3c334d', '#d8a45d'],
  ['parents', 'PARENT SUPPORT', 'Replace pressure with evidence', ['LISTEN', 'COMPARE', 'TEST', 'SUPPORT'], '#4e3a32', '#d49b70'],
  ['career-options', 'CAREER OPTIONS', 'Compare the work, not the label', ['DAILY WORK', 'TRAINING', 'DEMAND', 'UPSIDE'], '#234c55', '#d5a461'],
  ['college-degrees', 'COLLEGE DECISIONS', 'A degree is one part of the chain', ['CREDENTIAL', 'CAPABILITY', 'PROJECT', 'OPPORTUNITY'], '#37455e', '#d39b67'],
  ['freelancing-business', 'FREELANCING', 'Turn capability into an offer', ['PROBLEM', 'OFFER', 'DELIVERY', 'REPEAT WORK'], '#4a3e2c', '#c99355'],
  ['job-search', 'JOB SEARCH', 'Connect the role to proof', ['TARGET ROLE', 'EVIDENCE', 'APPLY', 'LEARN'], '#25424f', '#d9a65e'],
  ['resume', 'RESUME PROOF', 'Make every claim inspectable', ['CLAIM', 'ACTION', 'RESULT', 'LINK'], '#3d3a53', '#d18b65'],
  ['skills', 'HIGH-VALUE SKILLS', 'Build capability that compounds', ['CORE SKILL', 'MULTIPLIER', 'PRACTICE', 'PROOF'], '#2d4d42', '#d5a45f'],
  ['skill-roadmaps', 'SKILL ROADMAP', 'Move from learning to evidence', ['BASELINE', 'SPRINT', 'ARTIFACT', 'REVIEW'], '#354968', '#d29a60'],
  ['study-abroad', 'STUDY ABROAD', 'Compare the whole decision', ['COST', 'OUTCOME', 'RISK', 'FIT'], '#3f4650', '#d7a260'],
  ['government-jobs', 'GOVERNMENT JOBS', 'Stability is not the only variable', ['STABILITY', 'TIME', 'INCOME', 'BACKUP'], '#4d4035', '#d39a5c'],
  ['medical-careers', 'HEALTHCARE PATHS', 'There is more than one route', ['PATIENT CARE', 'LAB', 'REHAB', 'HEALTH SYSTEM'], '#24504d', '#d49a67'],
  ['interviews', 'INTERVIEWS', 'Tell the story behind the work', ['PROJECT', 'DECISION', 'RESULT', 'LEARNING'], '#3d4254', '#d3a25e'],
  ['linkedin-networking', 'NETWORKING', 'Useful work creates a signal', ['WORK', 'SIGNAL', 'CONVERSATION', 'TRUST'], '#214b58', '#d39a62'],
  ['stream-selection', 'STREAM SELECTION', 'Choose a starting point, not a destiny', ['INTEREST', 'ABILITY', 'OPTIONS', 'EVIDENCE'], '#514231', '#d39b62'],
  ['portfolio-proof-of-work', 'PROOF OF WORK', 'Show how the work happened', ['BRIEF', 'PROCESS', 'FEEDBACK', 'OUTCOME'], '#354c4b', '#d8a45e'],
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const svg = ([slug, eyebrow, title, labels, ink, accent]) => {
  const rows = labels.map((label, i) => `<g transform="translate(815 ${260 + i * 128})"><rect width="570" height="88" rx="14" fill="#fffdf8" stroke="${accent}" stroke-width="2"/><circle cx="40" cy="44" r="12" fill="${accent}"/><text x="74" y="52" font-family="Arial, Helvetica, sans-serif" font-size="25" font-weight="700" letter-spacing="2" fill="${ink}">${esc(label)}</text></g>`).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000"><rect width="1600" height="1000" fill="#f1eadf"/><rect x="38" y="38" width="1524" height="924" rx="26" fill="#f8f4ec" stroke="#d8cdbd" stroke-width="3"/><path d="M90 150 C280 110 430 170 620 132" fill="none" stroke="${accent}" stroke-width="5" opacity=".65"/><text x="120" y="190" font-family="Arial, Helvetica, sans-serif" font-size="25" font-weight="700" letter-spacing="4" fill="${accent}">${esc(eyebrow)}</text><text x="120" y="300" font-family="Georgia, serif" font-size="46" font-weight="700" fill="${ink}">${esc(title)}</text><text x="120" y="390" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="#675f56">A quick visual guide for a clearer career decision</text><path d="M120 454 H650" stroke="${ink}" stroke-width="3" opacity=".25"/><text x="120" y="540" font-family="Georgia, serif" font-size="34" font-style="italic" fill="${ink}">Look at the work.</text><text x="120" y="595" font-family="Georgia, serif" font-size="34" font-style="italic" fill="${ink}">Then build the proof.</text><text x="120" y="850" font-family="Arial, Helvetica, sans-serif" font-size="20" letter-spacing="2" fill="#796f64">FUTURE CAREER SCHOOL  /  PRACTICAL GUIDE</text>${rows}</svg>`;
};

Promise.all(cards.map(([slug, ...rest]) => sharp(Buffer.from(svg([slug, ...rest]))).webp({ quality: 86 }).toFile(path.join(outputDir, `${slug}-at-a-glance.webp`)))).then(() => console.log(`Generated ${cards.length} at-a-glance cards.`));
