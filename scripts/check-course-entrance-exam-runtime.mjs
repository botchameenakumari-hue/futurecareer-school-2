import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
import { chromium } from '@playwright/test';

const baseUrl = 'http://127.0.0.1:4321';
const route = '/tools/course-entrance-exam-finder/';
const preview = spawn(process.execPath, ['node_modules/astro/astro.js', 'preview', '--host', '127.0.0.1', '--port', '4321'], {
  stdio: 'ignore',
  windowsHide: true,
});

async function waitForPreview() {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const response = await fetch(baseUrl + route);
      if (response.ok) return;
    } catch {}
    await delay(250);
  }
  throw new Error('Astro preview did not become available for the entrance-exam runtime contract.');
}

try {
  await waitForPreview();
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.goto(baseUrl + route, { waitUntil: 'domcontentloaded', timeout: 15_000 });
    if (!(await page.locator('#course-eligibility-finder').isVisible())) throw new Error('Entrance-exam finder shell was not visible.');
    const allCount = await page.locator('.cef-card').count();
    if (allCount !== 15) throw new Error(`Expected 15 dated route cards, received ${allCount}.`);
    const exam = page.locator('[data-cef="exam"]');
    if (!(await exam.locator('option', { hasText: 'NEET UG' }).count())) throw new Error('NEET UG was not exposed as an exam filter.');
    await exam.selectOption({ label: 'NEET UG' });
    const filteredCount = await page.locator('.cef-card').count();
    const filteredTitles = await page.locator('.cef-card h3').allTextContents();
    if (filteredCount !== 2 || !filteredTitles.some((title) => title.includes('MBBS')) || !filteredTitles.some((title) => title.includes('Nursing'))) throw new Error(`Exam filter returned ${filteredCount} unexpected cards.`);
    await exam.selectOption('');
    if (await page.locator('.cef-card').count() !== 15) throw new Error('Clearing the exam filter did not restore all cards.');
  } finally {
    await browser.close();
  }
  console.log('Course entrance-exam finder runtime contract passed in Chromium.');
} finally {
  preview.kill();
}
