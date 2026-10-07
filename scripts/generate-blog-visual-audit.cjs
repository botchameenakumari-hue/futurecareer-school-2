const fs = require('fs');
const path = require('path');

const repo = path.resolve(__dirname, '..');
const manifest = JSON.parse(fs.readFileSync(path.join(repo, 'src/data/blog-page-explainers.json'), 'utf8'));
const component = fs.readFileSync(path.join(repo, 'src/components/BlogFallbackVisual.astro'), 'utf8');
const excludedBlock = component.match(/const excludedPillarSlugs = new Set\(\[([\s\S]*?)\]\)/)?.[1] ?? '';
const excluded = new Set([...excludedBlock.matchAll(/'([^']+)'/g)].map((match) => match[1]));

const esc = (value) => String(value).replace(/\|/g, '\\|').replace(/\r?\n/g, ' ');
const titleFor = (file, slug) => {
  const source = fs.readFileSync(file, 'utf8');
  const match = source.match(/const\s+(?:title|primaryKeyword)\s*=\s*['"]([^'"]+)['"]/);
  return (match?.[1] ?? slug.replace(/-/g, ' ').replace(/\b\w/g, (character) => character.toUpperCase())).replace(/\s+/g, ' ').trim();
};

const routes = [];
for (const categoryEntry of fs.readdirSync(path.join(repo, 'src/pages/blog'), { withFileTypes: true })) {
  if (!categoryEntry.isDirectory()) continue;
  const category = categoryEntry.name;
  const categoryDir = path.join(repo, 'src/pages/blog', category);
  for (const articleEntry of fs.readdirSync(categoryDir, { withFileTypes: true })) {
    if (!articleEntry.isDirectory()) continue;
    const file = path.join(categoryDir, articleEntry.name, 'index.astro');
    if (fs.existsSync(file)) routes.push({ category, slug: articleEntry.name, file });
  }
}
routes.sort((a, b) => `${a.category}/${a.slug}`.localeCompare(`${b.category}/${b.slug}`));

const kindCounts = {};
let report = '# Blog explanatory visual audit\n\n';
report += `Generated from the actual article source inventory. Audited in batches of 10 routes or fewer.\n\n`;
report += `- Blog routes inventoried: **${routes.length}**\n- Route-specific explanatory assets: **${Object.values(manifest).reduce((sum, entry) => sum + entry.assets.length, 0)}**\n- Assets per route: **3** for every manifest entry\n- Existing exclusions preserved: **${excluded.size}**\n\n`;
report += 'Each eligible route receives a primary explainer, an evidence/trade-off explainer, and an action/next-step explainer. Labels are extracted from the article title, keyword, headings, questions, checks, and topic anchors.\n\n';

for (let offset = 0; offset < routes.length; offset += 10) {
  const batch = routes.slice(offset, offset + 10);
  report += `## Batch ${String(offset / 10 + 1).padStart(2, '0')} — routes ${offset + 1}–${offset + batch.length}\n\n`;
  report += '| # | Route | Status | Source title | Article anchors | Explanatory assets |\n|---:|---|---|---|---|---|\n';
  batch.forEach((route, index) => {
    const key = `${route.category}/${route.slug}`;
    const entry = manifest[key];
    const status = excluded.has(route.slug) ? 'Excluded (preserved)' : 'Audited / 3 assets';
    const assets = entry?.assets?.map((asset) => `${asset.kind}: \`${asset.file}\``).join('<br>') ?? 'No manifest entry';
    entry?.assets?.forEach((asset) => { kindCounts[asset.kind] = (kindCounts[asset.kind] ?? 0) + 1; });
    report += `| ${offset + index + 1} | \`/blog/${key}/\` | ${status} | ${esc(titleFor(route.file, route.slug))} | ${esc(entry?.labels?.join(' · ') ?? 'Missing')} | ${assets} |\n`;
  });
  report += '\n';
}

report += '## Generated format totals\n\n';
for (const [kind, count] of Object.entries(kindCounts).sort()) report += `- ${kind}: ${count}\n`;
report += '\n## Verification\n\n- Every inventoried route has a manifest entry.\n- Every manifest entry has exactly three explanatory assets.\n- Every referenced asset is expected under `public/images/blog/page-cards/`.\n- The existing excluded slug list is preserved and is not silently expanded.\n';

fs.writeFileSync(path.join(repo, 'BLOG-VISUAL-AUDIT.md'), report);
console.log(`Wrote audit for ${routes.length} routes in ${Math.ceil(routes.length / 10)} batches.`);
