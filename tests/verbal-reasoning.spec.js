import { test, expect } from '@playwright/test';

test('verbal reasoning assessment completes and downloads its report', async ({ page }) => {
  await page.goto('http://localhost:4321/services/assessments/verbal-reasoning-test/');
  await expect(page).toHaveTitle(/Verbal Reasoning Test/);
  await expect(page.locator('.audience-option')).toHaveCount(4);

  await page.locator('[data-audience="professional"]').click();
  await page.locator('#start-button').click();

  for (let index = 0; index < 24; index += 1) {
    if (index === 0) {
      await page.locator('.answer-option').nth(1).click();
    }
    await page.locator('.answer-option').first().click();
    await page.locator('#next-button').click();
  }

  await expect(page.locator('#result-shell')).toBeVisible();
  await expect(page.locator('#result-shell')).toContainText('Working professional result');
  await expect(page.locator('.domain-row')).toHaveCount(6);
  await expect(page.locator('.diagnostic-card')).toHaveCount(9);
  await expect(page.locator('.pace-row')).toHaveCount(6);
  await expect(page.locator('.review-item')).toHaveCount(24);
  await expect(page.locator('#result-shell')).toContainText('Three broader verbal indicators');
  await expect(page.locator('#result-shell')).toContainText('Difficulty transfer and consistency');
  await expect(page.locator('#result-shell')).toContainText('1 changes improved an answer');
  await expect(page.locator('#result-shell')).toContainText('Where to use it now');
  await expect(page.locator('#result-shell')).toContainText('Suggested 12-hour practice allocation');
  await expect(page.locator('#result-shell')).toContainText('Your verbal reasoning profile');
  await expect(page.locator('#result-shell')).toContainText('First-answer and revision quality');
  await expect(page.locator('#result-shell')).toContainText('Wrong-answer patterns most likely to cost you marks');
  await expect(page.locator('#result-shell')).toContainText('Safer verbal reasoning with AI-assisted work');
  await expect(page.locator('#result-shell')).toContainText('Practise with the time you actually have');

  const downloadPromise = page.waitForEvent('download');
  await page.locator('#download-button').click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe('future-career-school-verbal-reasoning-report.pdf');
  await download.saveAs('test-results/verbal-reasoning-report.pdf');
});

test('verbal reasoning page stays within a mobile viewport', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:4321/services/assessments/verbal-reasoning-test/');
  await page.locator('[data-audience="professional"]').click();
  await page.locator('#start-button').click();
  for (let index = 0; index < 24; index += 1) {
    await page.locator('.answer-option').first().click();
    await page.locator('#next-button').click();
  }
  await expect(page.locator('#result-shell')).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)).toBe(false);
});
