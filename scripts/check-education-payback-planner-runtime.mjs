import { spawn } from 'node:child_process';
import { setTimeout as delay } from 'node:timers/promises';
import { chromium } from '@playwright/test';

const baseUrl = 'http://127.0.0.1:4321';
const route = '/tools/education-cost-payback-planner/';
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
  throw new Error('Astro preview did not become available for the runtime contract.');
}

try {
  await waitForPreview();
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage();
    await page.goto(baseUrl + route, { waitUntil: 'domcontentloaded', timeout: 15_000 });
    if (!(await page.locator('#education-payback-planner').isVisible())) throw new Error('Planner shell was not visible.');
    if (!(await page.locator('.epp-note').textContent()).includes('Nothing is saved or sent')) throw new Error('Privacy copy was missing.');

    const values = { fees: '120000', living: '10000', years: '2', opportunity: '5000', aid: '20000', income: '50000', essentials: '30000' };
    for (const [field, value] of Object.entries(values)) await page.locator(`[data-epp="${field}"]`).fill(value);
    await page.getByRole('button', { name: 'Calculate my planning range' }).click();

    const expected = { direct: '₹3,40,000', opportunity: '₹1,20,000', exposure: '₹4,60,000', surplus: '₹20,000' };
    for (const [result, value] of Object.entries(expected)) {
      const actual = await page.locator(`[data-epp-result="${result}"]`).textContent();
      if (!actual.includes(value)) throw new Error(`${result} expected ${value}, received ${actual}`);
    }
    await page.getByRole('button', { name: 'Reset' }).click();
    if (await page.locator('.epp-results').isVisible()) throw new Error('Reset did not hide the results.');
  } finally {
    await browser.close();
  }
  console.log('Education payback planner runtime contract passed in Chromium.');
} finally {
  preview.kill();
}
