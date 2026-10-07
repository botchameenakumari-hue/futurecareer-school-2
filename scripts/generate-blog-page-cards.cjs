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
const pageData = (file, slug) => {
  const source = fs.readFileSync(file, 'utf8');
  const titleMatch = source.match(/const\s+title\s*=\s*['"]([^'"]+)['"]/) ?? source.match(/<h1[^>]*>\s*([^<]+?)\s*<\/h1>/i);
  const keywordMatch = source.match(/const\s+primaryKeyword\s*=\s*['"]([^'"]+)['"]/);
  const topicText = `${slug.replace(/-/g, ' ')} ${keywordMatch?.[1] ?? ''}`.toLowerCase();
  const topicLabels = [
    [/salary|income|pay|earning/, 'INCOME / UPSIDE'],
    [/cost|fee|loan|spend|afford|budget/, 'TOTAL COST / RUNWAY'],
    [/scholarship|funding|financial aid/, 'FUNDING / ELIGIBILITY'],
    [/visa|abroad|canada|germany|australia|uk|usa|foreign|return to india/, 'MOBILITY / OUTCOME'],
    [/parent|child|teenager|family/, 'FAMILY DECISION'],
    [/confusion|confused|clarity|counsel/, 'CLARITY / QUESTIONS'],
    [/promot|management|manager|leadership/, 'ROLE / LEVERAGE'],
    [/creator|content|freelanc|consult|business|startup/, 'OFFER / CLIENT VALUE'],
    [/exam|upsc|bank|government|govt|defence/, 'PREPARATION / ALTERNATIVE'],
    [/resume|cv|linkedin|interview|job|placement|internship/, 'EVIDENCE / APPLICATION'],
    [/skill|roadmap|learn|programming|data|digital marketing|design/, 'SKILL / PROJECT PROOF'],
  ].filter(([pattern]) => pattern.test(topicText)).map(([, label]) => label);
  const headingLabels = [
    ...[...source.matchAll(/<h2[^>]*>\s*([^<]+?)\s*<\/h2>/g)].map((match) => match[1]),
    ...[...source.matchAll(/(?:label|check|tag|q|heading|sectionTitle):\s*['"]([^'"]+)['"]/g)].map((match) => match[1]),
  ];
  const labels = [...source.matchAll(/(?:label|check|tag|q):\s*['"]([^'"]+)['"]/g)]
    .map((match) => match[1].replace(/\s+/g, ' ').trim())
    .filter((label) => label.length >= 4 && label.length <= 48)
    .filter((label, index, all) => all.indexOf(label) === index)
    .slice(0, 6);
  return {
    title: (titleMatch?.[1] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())).replace(/\s+/g, ' ').trim(),
    labels: [...labels, ...headingLabels, ...topicLabels]
      .map((label) => label.replace(/\s+/g, ' ').trim())
      .filter((label) => label.length >= 4 && label.length <= 48)
      .filter((label, index, all) => all.indexOf(label) === index)
      .slice(0, 6),
  };
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
const kindFor = (slug, title) => {
  const text = `${slug} ${title}`.toLowerCase();
  if (/\b(vs|versus|compare|comparison|which|choose|choice|better|difference)\b/.test(text)) return 'comparison';
  if (/\b(cost|fee|loan|budget|spend|afford|tuition|expense|worth)\b/.test(text)) return 'table';
  if (/\b(salary|income|pay|earning|growth|demand|scope|market|statistics?|data)\b/.test(text)) return 'chart';
  if (/\b(job-search|job search|application|apply|client|creator|freelanc|marketing|network|placement|selection)\b/.test(text)) return 'funnel';
  if (/\b(fit|interest|personality|overlap|strengths?|aptitude|suitable|suited)\b/.test(text)) return 'venn';
  if (/\b(timeline|after-\d|after \d|at-\d|next-\d|growth|progression|stages?)\b/.test(text)) return 'timeline';
  if (/\b(roadmap|path|pathway|how-to-become|how-to-get|how-to-start|steps?|process)\b/.test(text)) return 'roadmap';
  if (/\b(tips?|prepare|preparation|checklist|skills?|what-to-do|how-to|mistakes?|interview|filter|advice|criteria|red-flags?)\b/.test(text)) return 'checklist';
  if (/\b(options?|courses?|fields?|speciali[sz]ations?|streams?)\b/.test(text)) return 'matrix';
  return 'framework';
};
const fallbackLabels = (category) => categoryLabels[category]?.[1] ?? ['WORK', 'SKILLS', 'PROOF'];
const cleanLabels = (labels, category) => {
  const base = labels.length >= 2 ? labels : fallbackLabels(category);
  return [...base, ...fallbackLabels(category)].filter((label, index, all) => all.indexOf(label) === index).slice(0, 4);
};
const shortLabel = (value) => value.length > 24 ? `${value.slice(0, 22).trim()}…` : value;
const xmlText = (x, y, value, size, fill, weight = 400, family = 'Arial, Helvetica, sans-serif') => `<text x="${x}" y="${y}" font-family="${family}" font-size="${size}" font-weight="${weight}" fill="${fill}">${esc(value)}</text>`;
const box = (x, y, w, h, fill, stroke, radius = 18) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${radius}" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`;

const detailKind = (kind) => ({ comparison: 'matrix', table: 'comparison', chart: 'table', funnel: 'framework', venn: 'matrix', matrix: 'comparison', timeline: 'framework', roadmap: 'comparison', checklist: 'matrix', framework: 'checklist' }[kind] ?? 'framework');
const actionKind = (kind) => ({ comparison: 'checklist', table: 'checklist', chart: 'roadmap', funnel: 'checklist', venn: 'checklist', matrix: 'checklist', timeline: 'roadmap', roadmap: 'checklist', checklist: 'roadmap', framework: 'roadmap' }[kind] ?? 'checklist');
const cardSvg = (category, title, labels, kind, index, lens = 'primary') => {
  const [eyebrow] = categoryLabels[category] ?? ['CAREER GUIDE'];
  const [ink, accent] = palettes[index % palettes.length];
  const [line1, line2] = linesFor(title);
  const tags = cleanLabels(labels, category).map(shortLabel);
  const lensLabel = lens === 'detail' ? 'evidence and trade-offs' : lens === 'action' ? 'next-step guide' : 'article explainer';
  const header = `${xmlText(120, 150, eyebrow, 24, accent, 700)}${xmlText(120, 245, line1, 48, ink, 700, 'Georgia, serif')}${xmlText(120, 305, line2, 48, ink, 700, 'Georgia, serif')}${xmlText(120, 365, `Visual explainer · ${kind} · ${lensLabel}`, 22, '#675f56')}<path d="M120 405 H1480" stroke="${ink}" stroke-width="2" opacity=".2"/>`;
  let body = '';
  if (kind === 'comparison') {
    body = `${box(120, 470, 600, 285, '#fffdf8', accent)}${box(880, 470, 600, 285, '#fffdf8', accent)}${xmlText(160, 525, tags[0], 30, ink, 700)}${xmlText(920, 525, tags[1], 30, ink, 700)}${xmlText(160, 600, 'WORK', 18, accent, 700)}${xmlText(920, 600, 'WORK', 18, accent, 700)}${xmlText(160, 660, tags[2] ?? 'FIT', 24, ink, 600)}${xmlText(920, 660, tags[3] ?? 'PROOF', 24, ink, 600)}${xmlText(160, 715, 'cost · time · evidence', 20, '#675f56')}${xmlText(920, 715, 'cost · time · evidence', 20, '#675f56')}${xmlText(120, 850, lens === 'action' ? 'Turn the comparison into a decision you can test.' : 'Compare the work, trade-offs, and proof before choosing.', 28, ink, 600, 'Georgia, serif')}`;
  } else if (kind === 'table') {
    const rows = [
      ['QUESTION', tags[0] ?? 'What changes?'],
      ['EVIDENCE', tags[1] ?? 'What should be checked?'],
      ['TRADE-OFF', tags[2] ?? 'What does it cost?'],
      ['NEXT TEST', tags[3] ?? 'What can you try?'],
    ];
    body = `${box(150, 470, 1300, 370, '#fffdf8', accent, 12)}${rows.map((row, i) => {
      const y = 545 + i * 78;
      return `${i > 0 ? `<path d="M180 ${y - 42} H1420" stroke="#d8cdbd" stroke-width="2"/>` : ''}${xmlText(200, y, row[0], 17, accent, 700)}${xmlText(500, y, row[1], 25, ink, 600)}`;
    }).join('')}${xmlText(120, 900, 'A decision becomes clearer when cost, evidence, and next test sit in the same view.', 26, ink, 600, 'Georgia, serif')}`;
  } else if (kind === 'chart') {
    const bars = tags.slice(0, 4).map((tag, i) => {
      const width = [720, 590, 470, 350][i];
      const y = 500 + i * 82;
      return `${xmlText(170, y + 30, tag, 23, ink, 700)}<rect x="510" y="${y}" width="${width}" height="42" rx="12" fill="${accent}" opacity="${0.95 - i * 0.14}"/><text x="${540 + width}" y="${y + 29}" font-family="Arial, Helvetica, sans-serif" font-size="18" fill="#675f56">lens ${i + 1}</text>`;
    }).join('');
    body = `${xmlText(170, 455, 'QUALITATIVE EVIDENCE LENSES', 18, accent, 700)}${bars}${xmlText(120, 900, 'This is a reading guide—not invented market data. Use the article’s sources for the numbers.', 25, ink, 600, 'Georgia, serif')}`;
  } else if (kind === 'funnel') {
    const stages = ['NOTICE', 'FILTER', 'TEST', 'COMMIT'];
    body = stages.map((stage, i) => {
      const w = 1120 - i * 220;
      const x = (1600 - w) / 2;
      const y = 470 + i * 92;
      return `${box(x, y, w, 62, '#fffdf8', accent, 12)}${xmlText(x + 35, y + 40, stage, 18, accent, 700)}${xmlText(x + 260, y + 40, tags[i] ?? stage, 24, ink, 600)}`;
    }).join('') + xmlText(120, 900, 'Narrow the decision by testing evidence before making the largest commitment.', 26, ink, 600, 'Georgia, serif');
  } else if (kind === 'venn') {
    body = `<circle cx="610" cy="625" r="190" fill="#d6a85f" opacity=".32" stroke="${accent}" stroke-width="3"/><circle cx="990" cy="625" r="190" fill="#8bb7a8" opacity=".34" stroke="${accent}" stroke-width="3"/><circle cx="800" cy="440" r="190" fill="#9aa9d6" opacity=".30" stroke="${accent}" stroke-width="3"/>${xmlText(495, 625, tags[0] ?? 'INTEREST', 23, ink, 700)}${xmlText(950, 625, tags[1] ?? 'ABILITY', 23, ink, 700)}${xmlText(730, 430, tags[2] ?? 'MARKET', 23, ink, 700)}${xmlText(720, 660, 'FIT + EVIDENCE', 22, accent, 700)}${xmlText(120, 900, 'The overlap is a hypothesis to test through real work—not a label to accept blindly.', 26, ink, 600, 'Georgia, serif')}`;
  } else if (kind === 'timeline') {
    const nodes = ['NOW', 'NEXT', 'BUILD', 'REVIEW'];
    const timeline = nodes.map((node, i) => {
      const x = 100 + i * 375;
      const connector = i < nodes.length - 1 ? `<path d="M${x + 280} 630 H${x + 375}" stroke="${accent}" stroke-width="8"/>` : '';
      return box(x, 540, 280, 180, '#fffdf8', accent) + `<circle cx="${x + 140}" cy="630" r="22" fill="${accent}"/>` + xmlText(x + 30, 590, node, 22, accent, 700) + xmlText(x + 30, 675, tags[i] ?? node, 23, ink, 600) + connector;
    }).join('');
    body = timeline + xmlText(120, 850, lens === 'action' ? 'Use the sequence to choose the next move.' : 'Make the sequence visible before making the commitment.', 28, ink, 600, 'Georgia, serif');
  } else if (kind === 'roadmap') {
    const steps = tags.map((tag, i) => {
      const connector = i < tags.length - 1 ? `<path d="M440 615 H485" stroke="${accent}" stroke-width="5"/>` : '';
      return box(150 + i * 350, 500, 290, 235, '#fffdf8', accent) + xmlText(185 + i * 350, 565, '0' + (i + 1), 30, accent, 700) + xmlText(185 + i * 350, 625, tag, 24, ink, 700) + xmlText(185 + i * 350, 685, ['understand', 'practise', 'show', 'review'][i], 20, '#675f56') + connector;
    }).join('');
    body = steps + xmlText(120, 850, lens === 'detail' ? 'Each stage should produce evidence someone can inspect.' : 'A practical path moves from a question to visible evidence.', 28, ink, 600, 'Georgia, serif');
  } else if (kind === 'checklist') {
    body = tags.map((tag, i) => `${box(180, 470 + i * 90, 1240, 64, '#fffdf8', accent, 12)}<circle cx="225" cy="${502 + i * 90}" r="15" fill="${accent}"/>${xmlText(270, 512 + i * 90, tag, 24, ink, 600)}${xmlText(1260, 512 + i * 90, 'CHECK', 16, accent, 700)}`).join('') + xmlText(120, 885, lens === 'detail' ? 'Use the checks to inspect the quality of the evidence.' : 'Use the checklist to turn advice into an action you can test.', 28, ink, 600, 'Georgia, serif');
  } else if (kind === 'matrix') {
    body = `${box(230, 475, 520, 150, '#fffdf8', accent)}${box(810, 475, 520, 150, '#fffdf8', accent)}${box(230, 665, 520, 150, '#fffdf8', accent)}${box(810, 665, 520, 150, '#fffdf8', accent)}${xmlText(270, 555, tags[0], 25, ink, 700)}${xmlText(850, 555, tags[1], 25, ink, 700)}${xmlText(270, 745, tags[2], 25, ink, 700)}${xmlText(850, 745, tags[3], 25, ink, 700)}${xmlText(120, 850, lens === 'action' ? 'Use the grid to decide what to research next.' : 'Compare the dimensions that matter—not only the label.', 28, ink, 600, 'Georgia, serif')}`;
  } else {
    body = tags.map((tag, i) => `${box(150 + i * 350, 520, 290, 180, '#fffdf8', accent)}${xmlText(185 + i * 350, 600, tag, 25, ink, 700)}${xmlText(185 + i * 350, 655, ['understand', 'build', 'show', 'learn'][i], 20, '#675f56')}`).join('') + xmlText(120, 850, lens === 'action' ? 'Connect the framework to a practical next step.' : 'Use the framework to connect the idea to a practical next step.', 28, ink, 600, 'Georgia, serif');
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000"><rect width="1600" height="1000" fill="#f1eadf"/><rect x="38" y="38" width="1524" height="924" rx="26" fill="#f8f4ec" stroke="#d8cdbd" stroke-width="3"/><path d="M90 120 C280 80 430 140 620 102" fill="none" stroke="${accent}" stroke-width="5" opacity=".65"/>${header}${body}${xmlText(120, 925, 'FUTURE CAREER SCHOOL  /  ARTICLE EXPLAINER', 18, '#796f64', 700)}</svg>`;
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
    const data = pageData(indexFile, article.name);
    const kind = kindFor(article.name, data.title);
    const vsIndex = article.name.indexOf('-vs-');
    const pretty = (value) => value.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    const versus = vsIndex > 0 ? [pretty(article.name.slice(0, vsIndex)), pretty(article.name.slice(vsIndex + 4))] : null;
    const labels = versus ? [versus[0].trim(), versus[1].trim(), ...data.labels] : data.labels;
    jobs.push({ category, slug: article.name, ...data, kind, labels: cleanLabels(labels, category), file: indexFile });
  }
}

const manifest = {};
Promise.all(jobs.map(async (job, index) => {
  const outputDir = path.join(outputRoot, job.category);
  fs.mkdirSync(outputDir, { recursive: true });
  const variants = [
    { suffix: '', kind: job.kind, lens: 'primary', label: 'primary explainer' },
    { suffix: '-detail', kind: detailKind(job.kind), lens: 'detail', label: 'evidence explainer' },
    { suffix: '-action', kind: actionKind(job.kind), lens: 'action', label: 'action explainer' },
  ];
  for (const [variantIndex, variant] of variants.entries()) {
    const output = path.join(outputDir, `${job.slug}${variant.suffix}.webp`);
    await sharp(Buffer.from(cardSvg(job.category, job.title, job.labels, variant.kind, index + variantIndex, variant.lens))).webp({ quality: 86 }).toFile(output);
  }
  manifest[`${job.category}/${job.slug}`] = {
    labels: job.labels,
    assets: variants.map((variant) => ({
      file: `${job.slug}${variant.suffix}.webp`,
      kind: variant.kind,
      alt: `${job.title}: ${variant.label} showing ${job.labels.slice(0, 3).join(', ')}`,
      title: `${job.title} — ${variant.label}`,
      caption: `A ${variant.kind} explaining ${job.labels.slice(0, 3).join(', ')} for this article.`,
    })),
  };
})).then(() => {
  fs.writeFileSync(path.join(repo, 'src/data/blog-page-explainers.json'), `${JSON.stringify(manifest, null, 2)}\n`);
  console.log(`Generated ${jobs.length * 3} page-specific explanatory cards across ${jobs.length} routes.`);
});
