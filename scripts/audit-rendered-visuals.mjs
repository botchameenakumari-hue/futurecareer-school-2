import { chromium } from '@playwright/test';
import { readdir, readFile, mkdir, writeFile } from 'node:fs/promises';
import { join, relative, dirname } from 'node:path';

const base = process.env.VISUAL_AUDIT_BASE ?? 'http://127.0.0.1:4322';
const outFile = process.env.VISUAL_AUDIT_REPORT ?? 'C:/Users/Jack Sparrow/.codex/.chatgpt-projects/g-p-6aa561b035748191b9430f4d23e8bef8/visual-audit-rendered.json';
const dist = 'dist';
const viewports = (process.env.VISUAL_AUDIT_VIEWPORTS ?? '390x844,768x1024,1280x900,1440x900,1920x1080')
  .split(',')
  .map((value) => {
    const [width, height] = value.split('x').map(Number);
    return { width, height };
  })
  .filter(({ width, height }) => width > 0 && height > 0);

async function walk(dir) {
  const result = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = join(dir, entry.name);
    if (entry.isDirectory()) result.push(...await walk(file));
    else if (entry.name === 'index.html') result.push(file);
  }
  return result;
}

const routes = (await walk(dist)).map((file) => {
  const path = relative(dist, file).replaceAll('\\', '/');
  return `/${path.replace(/index\.html$/, '')}`;
}).filter((route) => !route.startsWith('/_'));

const browser = await chromium.launch({ headless: true });
const findings = [];
const workerCount = Number(process.env.VISUAL_AUDIT_WORKERS ?? 6);
async function auditRoute(page, route) {
  const pageFindings = [];
  for (const viewport of viewports) {
    await page.setViewportSize(viewport);
    let status = 0;
    try {
      const response = await page.goto(`${base}${route}`, { waitUntil: 'networkidle', timeout: 45000 });
      await page.waitForLoadState('load', { timeout: 10000 }).catch(() => {});
      await page.waitForTimeout(80);
      status = response?.status() ?? 0;
      await page.evaluate(async () => {
        for (const img of document.images) img.loading = 'eager';
        for (let y = 0; y < document.documentElement.scrollHeight; y += Math.max(innerHeight - 120, 320)) {
          scrollTo(0, y);
          await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
        }
        scrollTo(0, 0);
        await Promise.all([...document.images].map((img) => img.complete && img.naturalWidth > 0
          ? Promise.resolve()
          : new Promise((resolve) => { img.addEventListener('load', resolve, { once: true }); img.addEventListener('error', resolve, { once: true }); setTimeout(resolve, 2500); })));
      });
      await page.waitForTimeout(20);
      const result = await page.evaluate(() => {
        const localBroken = [];
        const missingAlt = [];
        const missingTitle = [];
        const missingCaption = [];
        const images = [...document.images].map((img) => {
          const src = img.currentSrc || img.src;
          const item = { src, alt: img.alt, title: img.title, naturalWidth: img.naturalWidth, naturalHeight: img.naturalHeight };
          if (!img.complete || img.naturalWidth === 0) localBroken.push(src);
          if (!img.alt?.trim()) missingAlt.push(src);
          if (!img.title?.trim()) missingTitle.push(src);
          const figure = img.closest('figure');
          if (figure && !figure.querySelector('figcaption') && !/author|avatar|thumb/i.test(src)) missingCaption.push(src);
          return item;
        });
        return {
          statusText: document.title,
          overflow: Math.max(0, document.documentElement.scrollWidth - innerWidth),
          imageCount: images.length,
          images,
          localBroken,
          missingAlt,
          missingTitle,
          missingCaption,
          figureCount: document.querySelectorAll('figure').length,
          visualCount: document.querySelectorAll('figure img, img.bofu-image, img.blog-visual').length,
        };
      });
      pageFindings.push({ viewport: viewport.width, status, ...result });
    } catch (error) {
      pageFindings.push({ viewport: viewport.width, status, error: String(error) });
    }
  }
  return { route, viewports: pageFindings };
}
let next = 0;
async function worker() {
  const page = await browser.newPage({ viewport: viewports[0] });
  while (true) {
    const index = next++;
    if (index >= routes.length) break;
    findings[index] = await auditRoute(page, routes[index]);
    if ((index + 1) % 25 === 0) console.error(`Rendered ${index + 1}/${routes.length}`);
  }
  await page.close();
}
await Promise.all(Array.from({ length: Math.min(workerCount, routes.length) }, () => worker()));
await browser.close();
await mkdir(dirname(outFile), { recursive: true }).catch(() => {});
await writeFile(outFile, JSON.stringify({ base, routes: routes.length, findings }, null, 2));
const summary = { routes: routes.length, failed: 0, overflow: 0, brokenImages: 0, missingAlt: 0, missingTitle: 0, missingCaption: 0 };
for (const item of findings) for (const view of item.viewports) {
  if (view.error || view.status >= 400 || view.status === 0) summary.failed += 1;
  if (view.overflow > 0) summary.overflow += 1;
  summary.brokenImages += view.localBroken?.length ?? 0;
  summary.missingAlt += view.missingAlt?.length ?? 0;
  summary.missingTitle += view.missingTitle?.length ?? 0;
  summary.missingCaption += view.missingCaption?.length ?? 0;
}
console.log(JSON.stringify(summary, null, 2));
