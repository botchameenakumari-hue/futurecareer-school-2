import path from 'node:path';
import fs from 'node:fs/promises';
import { spawn } from 'node:child_process';
import { chromium } from '@playwright/test';

const cases = [
  { slug: 'class-10-and-below', questions: 30, button: '[data-class-10-pdf-download]', file: 'class-10-career-assessment-report.pdf' },
  { slug: 'class-11-to-12', questions: 35, button: '[data-class-11-pdf-download]', file: 'class-11-12-career-assessment-report.pdf' },
  { slug: 'graduates-and-early-professionals', questions: 36, button: '[data-graduate-pdf-download]', file: 'graduate-career-assessment-report.pdf' },
  { slug: 'working-professionals-and-career-changers', questions: 40, button: '[data-working-professional-pdf-download]', file: 'working-professional-career-assessment-report.pdf' },
];

const port = 4321;
const base = `http://127.0.0.1:${port}`;
const server = spawn(process.execPath, [path.resolve('node_modules/astro/astro.js'), 'preview', '--host', '127.0.0.1', '--port', String(port)], { stdio: 'ignore' });
let browser;

async function complete(page, count) {
  for (let question = 0; question < count; question += 1) {
    if (await page.locator('#results-container').isVisible()) return;
    const options = page.locator('#q-opts .opt-btn, #q-opts .opt-label');
    const optionCount = await options.count();
    if (!optionCount) throw new Error(`No answer options at question ${question + 1}.`);
    await options.nth(question % optionCount).click();
    await page.locator('#btn-next').click();
  }
  if (!(await page.locator('#results-container').isVisible())) throw new Error('Assessment did not reach its result view.');
}

try {
  let ready = false;
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      if ((await fetch(`${base}/services/assessments/`)).ok) { ready = true; break; }
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  if (!ready) throw new Error('Astro preview did not become ready.');

  browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const failures = [];
  for (const item of cases) {
    try {
      await page.goto(`${base}/services/assessments/${item.slug}/`, { waitUntil: 'domcontentloaded', timeout: 20_000 });
      await complete(page, item.questions);
      const results = page.locator('#results-container');
      if ((await results.innerText()).length < 10_000) throw new Error('Result content was unexpectedly short.');
      const runtimeContract = await page.evaluate(() => {
        const container = document.querySelector('#results-container');
        const getExtras = window.__fcsReportExtras;
        const extras = typeof getExtras === 'function' ? getExtras() : null;
        return {
          marker: Boolean(container?.querySelector('#fcs-companion-marker')),
          frontSections: Array.isArray(extras?.front) ? extras.front.length : 0,
          backSections: Array.isArray(extras?.back) ? extras.back.length : 0,
          scoreFields: container?.querySelectorAll('[data-fcs-score-label][data-fcs-score-value]').length || 0,
        };
      });
      if (!runtimeContract.marker || runtimeContract.frontSections < 2 || runtimeContract.backSections < 2) {
        throw new Error(`Runtime report details were not populated: ${JSON.stringify(runtimeContract)}`);
      }
      if (runtimeContract.scoreFields < 2) {
        throw new Error(`Runtime stage score contract was not populated: ${JSON.stringify(runtimeContract)}`);
      }
      for (const selector of ['[data-download-assessment-report]', item.button]) {
        const button = results.locator(selector).first();
        if (!(await button.isVisible())) throw new Error(`PDF control not visible: ${selector}`);
        const [download] = await Promise.all([page.waitForEvent('download'), button.click()]);
        if (await download.failure()) throw new Error(`Download failed: ${await download.failure()}`);
        if (download.suggestedFilename() !== item.file) throw new Error(`Expected ${item.file}, got ${download.suggestedFilename()}.`);
        const pdfBytes = await fs.readFile(await download.path());
        const pageCount = (pdfBytes.toString('latin1').match(/\/Type\s*\/Page\b/g) || []).length;
        if (pageCount < 4) throw new Error(`Expected a multi-page report with front/body/back content, got ${pageCount} PDF pages.`);
      }
    } catch (error) {
      failures.push(`${item.slug}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
  if (failures.length) throw new Error(`Stage PDF runtime failures:\n${failures.join('\n')}`);
  console.log('Stage PDF runtime contract passed in Chromium: all four stage assessments reached results and both PDF controls downloaded successfully.');
} finally {
  await browser?.close();
  if (!server.killed) server.kill();
}
