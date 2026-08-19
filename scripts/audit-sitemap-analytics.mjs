import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distRoot = join(projectRoot, 'dist');
const sitemapPath = join(distRoot, 'sitemap.xml');
const reportPath = join(projectRoot, 'reports', 'sitemap-analytics-audit.json');
const measurementId = 'G-PBY7CTR2NF';
const batchSize = 50;

if (!existsSync(sitemapPath)) {
  throw new Error('dist/sitemap.xml is missing. Run the production build before this audit.');
}

const sitemap = await readFile(sitemapPath, 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);

const outputPathFor = (url) => {
  const pathname = new URL(url).pathname;
  if (pathname === '/') return join(distRoot, 'index.html');
  return join(distRoot, pathname.replace(/^\/|\/$/g, ''), 'index.html');
};

const count = (source, value) => source.split(value).length - 1;
const checksFor = async (url) => {
  const outputPath = outputPathFor(url);
  if (!existsSync(outputPath)) {
    return { url, outputPath, passed: false, failures: ['rendered HTML is missing'] };
  }

  const html = await readFile(outputPath, 'utf8');
  const defaultPosition = html.indexOf("window.gtag('consent', 'default'");
  const configPosition = html.indexOf("window.gtag('config'");
  const externalStaticTag = /<script[^>]+src=["']https:\/\/www\.googletagmanager\.com\/gtag\/js/i.test(html);
  const failures = [];

  if (count(html, measurementId) !== 1) failures.push(`measurement ID count is ${count(html, measurementId)}, expected 1`);
  if (defaultPosition === -1) failures.push('consent default is missing');
  if (configPosition === -1) failures.push('consent-aware Analytics config is missing');
  if (defaultPosition > configPosition) failures.push('consent default appears after Analytics config');
  if (!html.includes("analytics_storage: 'denied'")) failures.push('analytics_storage denied default is missing');
  if (!html.includes("ad_storage: 'denied'")) failures.push('ad_storage denied is missing');
  if (!html.includes("ad_user_data: 'denied'")) failures.push('ad_user_data denied is missing');
  if (!html.includes("ad_personalization: 'denied'")) failures.push('ad_personalization denied is missing');
  if (!html.includes('id="analytics-consent-banner"')) failures.push('consent banner is missing');
  if (!html.includes('id="analytics-consent-manage"')) failures.push('privacy choices control is missing');
  if (externalStaticTag) failures.push('Google tag is statically loaded before consent');

  return {
    url,
    outputPath,
    passed: failures.length === 0,
    failures
  };
};

const collectHtmlFiles = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const nestedFiles = await Promise.all(entries.map((entry) => {
    const entryPath = join(directory, entry.name);
    return entry.isDirectory() ? collectHtmlFiles(entryPath) : [entryPath];
  }));
  return nestedFiles.flat().filter((filePath) => filePath.endsWith('.html'));
};

const results = [];
for (let start = 0; start < urls.length; start += batchSize) {
  const batchNumber = Math.floor(start / batchSize) + 1;
  const batchUrls = urls.slice(start, start + batchSize);
  const batchResults = await Promise.all(batchUrls.map(checksFor));
  results.push(...batchResults);

  const passed = batchResults.filter((result) => result.passed).length;
  console.log(`Batch ${batchNumber}: ${passed}/${batchResults.length} pages passed`);
  for (const result of batchResults.filter((item) => !item.passed)) {
    console.log(`  FAIL ${result.url}: ${result.failures.join('; ')}`);
  }
}

const report = {
  generatedAt: new Date().toISOString(),
  sitemapPath,
  measurementId,
  consentMode: 'basic',
  batchSize,
  totalPages: results.length,
  passedPages: results.filter((result) => result.passed).length,
  failedPages: results.filter((result) => !result.passed).length,
  allGeneratedHtml: {},
  batches: Array.from({ length: Math.ceil(results.length / batchSize) }, (_, index) => {
    const pages = results.slice(index * batchSize, (index + 1) * batchSize);
    return {
      batch: index + 1,
      startPage: index * batchSize + 1,
      endPage: index * batchSize + pages.length,
      passedPages: pages.filter((page) => page.passed).length,
      failedPages: pages.filter((page) => !page.passed).length,
      pages
    };
  })
};

const allHtmlFiles = await collectHtmlFiles(distRoot);
const allHtmlResults = await Promise.all(allHtmlFiles.map(async (filePath) => {
  const html = await readFile(filePath, 'utf8');
  return {
    outputPath: filePath,
    hasConsentAnalytics: html.includes(measurementId),
    noindex: /<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html),
    redirect: /http-equiv=["']refresh["']/i.test(html) || /window\.location\.replace\(/.test(html)
  };
}));
const withoutConsentAnalytics = allHtmlResults.filter((page) => !page.hasConsentAnalytics);

report.allGeneratedHtml = {
  totalFiles: allHtmlResults.length,
  withConsentAnalytics: allHtmlResults.filter((page) => page.hasConsentAnalytics).length,
  withoutConsentAnalytics: withoutConsentAnalytics.length,
  withoutConsentAnalyticsAndIndexable: withoutConsentAnalytics.filter((page) => !page.noindex).length,
  excludedNoindexRedirects: withoutConsentAnalytics.filter((page) => page.noindex && page.redirect).length,
  excludedNoindexInternalOrDemoPages: withoutConsentAnalytics.filter((page) => page.noindex && !page.redirect).length,
  excludedPages: withoutConsentAnalytics
};

await mkdir(dirname(reportPath), { recursive: true });
await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`, 'utf8');
console.log(`Total: ${report.passedPages}/${report.totalPages} sitemap pages passed`);
console.log(
  `All generated HTML: ${report.allGeneratedHtml.withConsentAnalytics}/${report.allGeneratedHtml.totalFiles} include consent-aware Analytics`
);
console.log(
  `Indexable HTML without consent-aware Analytics: ${report.allGeneratedHtml.withoutConsentAnalyticsAndIndexable}`
);
console.log(
  `Explicit noindex exclusions: ${report.allGeneratedHtml.excludedNoindexRedirects} redirects and ${report.allGeneratedHtml.excludedNoindexInternalOrDemoPages} internal/demo pages`
);
console.log(`Report: ${reportPath}`);

if (report.failedPages > 0 || report.allGeneratedHtml.withoutConsentAnalyticsAndIndexable > 0) {
  process.exitCode = 1;
}
