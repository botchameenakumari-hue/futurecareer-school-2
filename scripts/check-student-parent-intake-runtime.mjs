import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
import { chromium } from '@playwright/test';

const baseUrl = 'http://127.0.0.1:4322';
const route = '/tools/student-parent-career-intake/';
const preview = spawn(process.execPath, ['node_modules/astro/astro.js', 'preview', '--host', '127.0.0.1', '--port', '4322'], { stdio: 'ignore', windowsHide: true });

async function waitForPreview() {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try { if ((await fetch(baseUrl + route)).ok) return; } catch {}
    await delay(250);
  }
  throw new Error('Astro preview did not become available for the student-parent intake runtime contract.');
}

try {
  await waitForPreview();
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.goto(baseUrl + route, { waitUntil: 'domcontentloaded', timeout: 15_000 });
    if (!(await page.locator('#student-parent-career-intake').isVisible())) throw new Error('Intake shell was not visible.');
    if (!(await page.locator('.spi-note').textContent()).includes('does not send')) throw new Error('Privacy copy was missing.');
    await page.locator('[data-spi="stage"]').selectOption('after-12th');
    await page.locator('[data-spi="decision"]').selectOption('course');
    await page.locator('[data-spi="studentGoal"]').fill('Compare engineering and design routes');
    await page.locator('[data-spi="studentQuestion"]').fill('Which eligibility rules apply?');
    await page.locator('[data-spi="parentConcern"]').fill('Cost and location');
    await page.locator('[data-spi="evidence"]').fill('Official course and exam rules');
    await page.locator('[data-spi="nextStep"]').fill('Open the official source cards together');
    const summary = page.locator('.spi-summary');
    if (!(await summary.textContent()).includes('evidence-led next step')) throw new Error('Completed intake summary was missing.');
    if (await summary.locator('a').getAttribute('href') !== '/tools/course-entrance-exam-finder/') throw new Error('Course routing was incorrect.');
    await page.getByRole('button', { name: 'Save in this browser' }).click();
    if (!(await page.locator('#spi-status').textContent()).includes('Saved')) throw new Error('Local save status was missing.');
  } finally { await browser.close(); }
  console.log('Student-parent intake runtime contract passed in Chromium.');
} finally { preview.kill(); }
