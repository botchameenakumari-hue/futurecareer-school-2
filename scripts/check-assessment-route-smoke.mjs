import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { chromium } from '@playwright/test';

const root = 'src/pages/services/assessments';
const ignored = new Set(['[slug]', 'aptitude', 'psychometric', 'skill-portfolio-tracker']);
const slugs = fs.readdirSync(root, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && !ignored.has(entry.name))
  .map((entry) => entry.name)
  .sort();

const port = 4321;
const base = `http://127.0.0.1:${port}`;
const astro = path.resolve('node_modules/astro/astro.js');
const server = spawn(process.execPath, [astro, 'preview', '--host', '127.0.0.1', '--port', String(port)], { stdio: 'ignore' });
let browser;

try {
  let ready = false;
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      const response = await fetch(`${base}/services/assessments/`);
      if (response.ok) { ready = true; break; }
    } catch {}
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  if (!ready) throw new Error('Astro preview did not become ready.');

  browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const failures = [];
  for (const slug of slugs) {
    const url = `${base}/services/assessments/${slug}/`;
    try {
      const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20_000 });
      const status = response?.status() ?? 0;
      const title = await page.title();
      const bodyLength = (await page.locator('body').innerText()).trim().length;
      const headingCount = await page.locator('h1').count();
      if (status !== 200 || (!title && headingCount === 0) || bodyLength < 200) failures.push(`${slug}: status=${status}, title=${Boolean(title)}, h1=${headingCount}, body=${bodyLength}`);
    } catch (error) {
      failures.push(`${slug}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
  if (failures.length) throw new Error(`Assessment route smoke failures:\n${failures.join('\n')}`);
  console.log(`Assessment route smoke passed in Chromium: ${slugs.length} concrete assessment routes rendered with HTTP 200 and non-empty document content.`);
} finally {
  await browser?.close();
  if (!server.killed) server.kill();
}
