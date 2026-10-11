import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
import { chromium } from '@playwright/test';

const baseUrl = 'http://127.0.0.1:4323';
const route = '/tools/resume-skills-evidence-builder/';
const preview = spawn(process.execPath, ['node_modules/astro/astro.js', 'preview', '--host', '127.0.0.1', '--port', '4323'], { stdio: 'ignore', windowsHide: true });
async function waitForPreview() { for (let i = 0; i < 60; i += 1) { try { if ((await fetch(baseUrl + route)).ok) return; } catch {} await delay(250); } throw new Error('Astro preview did not become available for the resume evidence runtime contract.'); }
try {
  await waitForPreview();
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.goto(baseUrl + route, { waitUntil: 'domcontentloaded', timeout: 15_000 });
    if (!(await page.locator('#resume-evidence-builder').isVisible())) throw new Error('Resume evidence builder was not visible.');
    await page.locator('[data-reb="skill"]').fill('Spreadsheet analysis');
    await page.locator('[data-reb="context"]').fill('a college event budget');
    await page.locator('[data-reb="action"]').fill('Analysed costs and organised the budget');
    await page.locator('[data-reb="outcome"]').fill('the team could compare three options');
    await page.locator('[data-reb="proof"]').fill('the spreadsheet and version history');
    const bullet = await page.locator('#reb-bullet').textContent();
    if (!bullet.includes('Analysed costs') || !bullet.includes('three options')) throw new Error(`Generated bullet was incomplete: ${bullet}`);
    await page.getByRole('button', { name: 'Save in this browser' }).click();
    if (!(await page.locator('#reb-status').textContent()).includes('Saved')) throw new Error('Local save status was missing.');
  } finally { await browser.close(); }
  console.log('Resume evidence builder runtime contract passed in Chromium.');
} finally { preview.kill(); }
