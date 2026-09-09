import { test, expect } from '@playwright/test';

async function completePreferenceAssessment(page, audience = 'college') {
  await page.locator(`[data-audience="${audience}"]`).click();
  await page.locator('#start-button').click();
  for (let index = 0; index < 32; index += 1) {
    await page.locator('#scale-options button').nth(index % 5).click();
    await page.locator('#next-button').click();
  }
}

test('career preference assessment produces a detailed evidence report and PDF', async ({ page }, testInfo) => {
  await page.goto('http://localhost:4321/services/assessments/myers-briggs-career-test/');
  await expect(page).toHaveTitle(/Myers Briggs Career Test/);
  await expect(page.locator('.audience-option')).toHaveCount(4);

  await completePreferenceAssessment(page);

  await expect(page.locator('#result-shell')).toBeVisible();
  await expect(page.locator('.axis-card')).toHaveCount(4);
  await expect(page.locator('.response-row')).toHaveCount(32);
  await expect(page.locator('#result-shell')).toContainText('Your working code, not a fixed label');
  await expect(page.locator('#result-shell')).toContainText('Letter-by-letter response support');
  await expect(page.locator('#result-shell')).toContainText('Evidence from your own answers');
  await expect(page.locator('#result-shell')).toContainText('Your practical operating manual');
  await expect(page.locator('#result-shell')).toContainText('A 30-day evidence plan');
  await expect(page.locator('#result-shell')).toContainText('What this result cannot tell you');

  const downloadPromise = page.waitForEvent('download');
  await page.locator('#download-button').click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe('future-career-school-career-preference-evidence-report.pdf');
  await download.saveAs(testInfo.outputPath('career-preference-evidence-report.pdf'));
});

test('career preference result stays within a mobile viewport', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:4321/services/assessments/myers-briggs-career-test/');
  await completePreferenceAssessment(page, 'professional');

  await expect(page.locator('#result-shell')).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)).toBe(false);
  await page.waitForTimeout(450);
  const resultTop = await page.locator('#result-shell').evaluate((element) => element.getBoundingClientRect().top);
  expect(resultTop).toBeGreaterThanOrEqual(70);
  expect(resultTop).toBeLessThan(150);
});
