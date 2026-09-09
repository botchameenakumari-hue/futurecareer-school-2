import { test, expect } from '@playwright/test';

test('numerical reasoning assessment completes and downloads its report', async ({ page }, testInfo) => {
  await page.goto('http://localhost:4321/services/assessments/numerical-reasoning-test/');
  await expect(page).toHaveTitle(/Numerical Reasoning Test/);
  await expect(page.locator('.audience-option')).toHaveCount(4);

  await page.locator('[data-audience="job"]').click();
  await page.locator('#start-button').click();

  for (let index = 0; index < 24; index += 1) {
    if (index === 0) {
      await page.locator('.answer-option').nth(1).click();
    }
    await page.locator('.answer-option').first().click();
    await page.locator('#next-button').click();
  }

  await expect(page.locator('#result-shell')).toBeVisible();
  await expect(page.locator('#result-shell')).toContainText('Job seeker result');
  await expect(page.locator('.domain-row')).toHaveCount(6);
  await expect(page.locator('.diagnostic-card')).toHaveCount(9);
  await expect(page.locator('.pace-row')).toHaveCount(6);
  await expect(page.locator('.review-item')).toHaveCount(24);
  await expect(page.locator('#result-shell')).toContainText('Commercial numeracy');
  await expect(page.locator('#result-shell')).toContainText('Difficulty transfer and consistency');
  await expect(page.locator('#result-shell')).toContainText('1 changes improved an answer');
  await expect(page.locator('#result-shell')).toContainText('Where to use the skill now');
  await expect(page.locator('#result-shell')).toContainText('How to retake without fooling yourself');

  const downloadPromise = page.waitForEvent('download');
  await page.locator('#download-button').click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe('future-career-school-numerical-reasoning-report.pdf');
  await download.saveAs(testInfo.outputPath('numerical-reasoning-report.pdf'));
});

test('numerical reasoning page stays within a mobile viewport', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:4321/services/assessments/numerical-reasoning-test/');
  await page.locator('[data-audience="job"]').click();
  await page.locator('#start-button').click();
  for (let index = 0; index < 24; index += 1) {
    await page.locator('.answer-option').first().click();
    await page.locator('#next-button').click();
  }
  await expect(page.locator('#result-shell')).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)).toBe(false);
});
