import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve('src/pages/blog');
const keywordStopWords = new Set([
  'a',
  'an',
  'and',
  'after',
  'at',
  'best',
  'career',
  'for',
  'from',
  'how',
  'in',
  'india',
  'is',
  'of',
  'or',
  'the',
  'to',
  'vs',
  'what',
  'which',
  'with',
]);

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const absolute = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(absolute) : [absolute];
  });
}

function plainText(value) {
  return value
    .replace(/<[^>]+>/g, ' ')
    .replace(/\{[^{}]*\}/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function wordCount(value) {
  const text = plainText(value);
  return text ? text.split(/\s+/).length : 0;
}

function relative(file) {
  return path.relative(process.cwd(), file).replaceAll('\\', '/');
}

const files = walk(root).filter((file) => {
  const rel = relative(file);
  return (
    rel.endsWith('/index.astro') &&
    rel !== 'src/pages/blog/index.astro' &&
    !rel.includes('/[category]/')
  );
});

const articles = files.map((file) => {
  const source = fs.readFileSync(file, 'utf8');
  const rel = relative(file);
  const parts = rel.split('/');
  const category = parts[3];
  const summaryMatch = source.match(
    /<div class="key-takeaways"[^>]*>([\s\S]*?)<\/div>/,
  );
  const summary = summaryMatch?.[1] ?? '';
  const bullets = [...summary.matchAll(/<li(?:\s|>)[\s\S]*?<\/li>/g)];
  const tables = [...source.matchAll(/<table(?:\s|>)[\s\S]*?<\/table>/g)];
  const tableProblems = tables
    .map((match, index) => {
      const table = match[0];
      const tdCount = [...table.matchAll(/<td(?:\s|>)/g)].length;
      const labelCount = [...table.matchAll(/<td\s+[^>]*data-label=/g)].length;
      const before = source.slice(Math.max(0, match.index - 160), match.index);
      return {
        index: index + 1,
        tdCount,
        labelCount,
        hasNearbyWrapper:
          /class="[^"]*(?:table-wrap|table-scroll|table-shell)[^"]*"[^>]*>\s*$/.test(
            before,
          ),
      };
    })
    .filter(
      (table) =>
        table.tdCount !== table.labelCount || !table.hasNearbyWrapper,
    );

  const keyIndex = source.indexOf('<div class="key-takeaways"');
  const leadMatch = source.match(
    /<p[^>]*class="[^"]*(?:\blead-para\b|\bstrong\b)[^"]*"[^>]*>/,
  );
  const leadIndex = leadMatch?.index ?? -1;
  const leadTextMatch = source.match(
    /<p[^>]*class="[^"]*(?:\blead-para\b|\bstrong\b)[^"]*"[^>]*>([\s\S]*?)<\/p>/,
  );
  const leadText = plainText(leadTextMatch?.[1] ?? '');
  const primaryKeyword =
    source.match(/const primaryKeyword\s*=\s*['"]([^'"]+)['"]/)?.[1] ?? '';
  const keywordTokens = [
    ...new Set(
      primaryKeyword
        .toLowerCase()
        .split(/[^a-z0-9+]+/)
        .filter(
          (token) =>
            token.length > 2 && !keywordStopWords.has(token),
        ),
    ),
  ];
  const leadKeywordMatches = keywordTokens.filter((token) =>
    leadText.toLowerCase().includes(token),
  );
  const navIndex = source.indexOf('<nav class="jump-nav"');
  const ctaIndex = source.indexOf('class="cta-pair"');
  const layoutIndex = source.indexOf('<BlogPostLayout');
  const hasFaqItems = /const faqItems\s*=/.test(source);
  const hasFaqSchema =
    /['"]@type['"]\s*:\s*['"]FAQPage['"]/.test(source);
  const hasFaqRender = /faq-accordion|faqItems\.map/.test(source);
  const hasTitle =
    /const (?:title|seoTitle)\s*=/.test(source) ||
    /<(?:BaseLayout|BlogPostLayout)\b[^>]*\btitle=/.test(source);
  const hasDescription =
    /const (?:description|seoDescription)\s*=/.test(source) ||
    /<(?:BaseLayout|BlogPostLayout)\b[^>]*\bdescription=/.test(source);
  const hasCanonical = /const canonical\s*=/.test(source);

  return {
    file: rel,
    category,
    source,
    summary,
    summaryBullets: bullets.length,
    summaryWords: wordCount(summary),
    summaryBulletTexts: bullets.map((match) => plainText(match[0])),
    leadText,
    primaryKeyword,
    leadKeywordMatches,
    hasSummary: Boolean(summaryMatch),
    placementIssue:
      !summaryMatch
        ? 'missing summary'
        : navIndex >= 0 && keyIndex > navIndex
          ? 'summary after jump navigation'
          : ctaIndex >= 0 && keyIndex > ctaIndex
            ? 'summary after an opening CTA'
          : leadIndex >= 0 && keyIndex < leadIndex
            ? 'summary before lead'
            : layoutIndex >= 0 && leadIndex < 0
              ? 'BlogPostLayout article has no lead paragraph class'
              : '',
    tableProblems,
    faqIssue:
      hasFaqItems && (!hasFaqSchema || !hasFaqRender)
        ? `FAQ items without ${!hasFaqSchema ? 'schema' : 'rendered accordion'}`
        : '',
    metadataIssue:
      !hasTitle || !hasDescription || !hasCanonical
        ? [
            !hasTitle && 'title',
            !hasDescription && 'description',
            !hasCanonical && 'canonical',
          ]
            .filter(Boolean)
            .join(', ')
        : '',
  };
});

const perspectiveRules = [
  {
    name: 'AI and future of work',
    categories: ['ai-future'],
    signals: [
      /\bAI\b|artificial intelligence/i,
      /domain|workflow|judg|verify|privacy|human edge/i,
      /proof|result|outcome|portfolio|project/i,
    ],
  },
  {
    name: 'career, course, degree, and skill decisions',
    categories: [
      'career-options',
      'college-degrees',
      'skill-roadmaps',
      'skills',
    ],
    signals: [
      /skill|portfolio|proof|project|licen[cs]e|clinical/i,
      /income|growth|ceiling|scal|consult|freelanc|business|ownership|private practice/i,
    ],
  },
  {
    name: 'study abroad risk',
    categories: ['study-abroad'],
    signals: [
      /loan|debt|cost|budget|financial|funding/i,
      /visa|job|income|fallback|downside|local|return to India/i,
    ],
  },
  {
    name: 'medical and allied-health runway',
    categories: ['medical-careers'],
    signals: [
      /training|degree|licen[cs]e|registration|credential|certification|clinical/i,
      /runway|years|long|experience|setup|patient|speciali[sz]/i,
    ],
  },
  {
    name: 'stream-selection fit',
    categories: ['stream-selection'],
    signals: [
      /\bPCM\b|\bPCB\b|math|biology/i,
      /interest|ability|fit|eligibility|backup|cost|income/i,
    ],
  },
  {
    name: 'government-exam opportunity cost',
    categories: ['government-jobs'],
    signals: [
      /selection|attempt|competition|odds|prepar/i,
      /backup|skill|proof|employability|income/i,
    ],
  },
];

const byCategory = Object.groupBy(articles, (article) => article.category);
const summaryStats = Object.entries(byCategory)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([category, group]) => ({
    category,
    articles: group.length,
    minBullets: Math.min(...group.map((article) => article.summaryBullets)),
    maxBullets: Math.max(...group.map((article) => article.summaryBullets)),
    averageBullets: (
      group.reduce((sum, article) => sum + article.summaryBullets, 0) /
      group.length
    ).toFixed(1),
    maxWords: Math.max(...group.map((article) => article.summaryWords)),
  }));

const longSummaries = articles
  .filter(
    (article) =>
      article.summaryBullets > 7 || article.summaryWords > 260,
  )
  .sort((a, b) => b.summaryWords - a.summaryWords)
  .map(({ file, summaryBullets, summaryWords }) => ({
    file,
    summaryBullets,
    summaryWords,
  }));

const structuralIssues = articles
  .filter(
    (article) =>
      article.placementIssue ||
      article.tableProblems.length ||
      article.faqIssue ||
      article.metadataIssue,
  )
  .map((article) => ({
    file: article.file,
    placement: article.placementIssue,
    tables: article.tableProblems,
    faq: article.faqIssue,
    metadata: article.metadataIssue,
  }));

const bulletLocations = new Map();
for (const article of articles) {
  for (const bullet of article.summaryBulletTexts) {
    const normalized = bullet.toLowerCase();
    if (normalized.length < 60) continue;
    const locations = bulletLocations.get(normalized) ?? [];
    locations.push(article.file);
    bulletLocations.set(normalized, locations);
  }
}

const duplicateBullets = [...bulletLocations.entries()]
  .filter(([, locations]) => locations.length > 1)
  .sort((a, b) => b[1].length - a[1].length)
  .map(([text, locations]) => ({ count: locations.length, text, locations }));

const possibleLeadAnswerGaps = articles
  .filter(
    (article) =>
      article.primaryKeyword &&
      article.leadKeywordMatches.length <
        Math.min(2, new Set(
          article.primaryKeyword
            .toLowerCase()
            .split(/[^a-z0-9+]+/)
            .filter(
              (token) =>
                token.length > 2 && !keywordStopWords.has(token),
            ),
        ).size),
  )
  .map((article) => ({
    file: article.file,
    keyword: article.primaryKeyword,
    lead: article.leadText,
    matchedKeywordTerms: article.leadKeywordMatches,
  }));

const perspectiveCoverageGaps = perspectiveRules.flatMap((rule) =>
  articles
    .filter((article) => rule.categories.includes(article.category))
    .filter(
      (article) =>
        !rule.signals.every((signal) => signal.test(article.source)),
    )
    .map((article) => ({
      perspective: rule.name,
      file: article.file,
    })),
);

console.log(`Articles audited: ${articles.length}`);
console.log('\nSummary statistics by category');
console.table(summaryStats);
console.log(`Long answer summaries flagged: ${longSummaries.length}`);
if (longSummaries.length) console.table(longSummaries);
console.log(`Structural issues flagged: ${structuralIssues.length}`);
if (structuralIssues.length) {
  console.dir(structuralIssues, { depth: null, maxArrayLength: null });
}
console.log(`Duplicate summary bullets flagged: ${duplicateBullets.length}`);
if (duplicateBullets.length) {
  console.dir(duplicateBullets, { depth: null, maxArrayLength: null });
}
console.log(
  `Possible lead-answer keyword gaps flagged: ${possibleLeadAnswerGaps.length}`,
);
if (possibleLeadAnswerGaps.length) {
  console.dir(possibleLeadAnswerGaps, { depth: null, maxArrayLength: null });
}
console.log(
  `Parent-perspective coverage gaps flagged: ${perspectiveCoverageGaps.length}`,
);
if (perspectiveCoverageGaps.length) {
  console.dir(perspectiveCoverageGaps, {
    depth: null,
    maxArrayLength: null,
  });
}

const issueCount =
  longSummaries.length +
  structuralIssues.length +
  duplicateBullets.length +
  possibleLeadAnswerGaps.length +
  perspectiveCoverageGaps.length;

if (issueCount > 0) {
  process.exitCode = 1;
}
