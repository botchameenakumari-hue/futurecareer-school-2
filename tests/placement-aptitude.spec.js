import { test, expect } from '@playwright/test';

async function completePlacementAssessment(page) {
  for (let index = 0; index < 20; index += 1) {
    if (index === 0) {
      await page.locator('.answer-option').nth(1).click();
    }
    await page.locator('.answer-option').first().click();
    await page.locator('#next-button').click();
  }
}

test('placement aptitude assessment provides diagnostic behaviour and a PDF', async ({ page }) => {
  await page.goto('http://localhost:4321/services/assessments/placement-aptitude-test/');
  await expect(page).toHaveTitle(/Placement Aptitude Test/);

  await completePlacementAssessment(page);

  await expect(page.locator('#result-shell')).toBeVisible();
  await expect(page.locator('.domain-row')).toHaveCount(5);
  await expect(page.locator('.review-item')).toHaveCount(20);
  await expect(page.locator('#result-shell')).toContainText('Accuracy and pacing by domain');
  await expect(page.locator('#result-shell')).toContainText('How you handled the assessment');
  await expect(page.locator('#result-shell')).toContainText('Answer revision quality');
  await expect(page.locator('#result-shell')).toContainText('Fast incorrect answers');
  await expect(page.locator('#result-shell')).toContainText('Suggested 10-hour practice split');

  await page.waitForTimeout(450);
  const resultTop = await page.locator('#result-shell').evaluate((element) => element.getBoundingClientRect().top);
  expect(resultTop).toBeGreaterThanOrEqual(70);
  expect(resultTop).toBeLessThan(150);

  const downloadPromise = page.waitForEvent('download');
  await page.locator('#download-button').click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe('future-career-school-placement-aptitude-report.pdf');
  await download.saveAs('test-results/placement-aptitude-report.pdf');
});

test('placement aptitude result stays usable on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:4321/services/assessments/placement-aptitude-test/');
  await completePlacementAssessment(page);

  await expect(page.locator('#result-shell')).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)).toBe(false);
  await expect(page.locator('#result-shell > .assessment-report-actions--top')).toHaveCount(1);
  await expect(page.locator('.assessment-report-actions--top button')).toBeVisible();
  await expect(page.locator('.result-actions > *')).toHaveCount(3);
  const narrowAction = await page
    .locator('.result-actions > *')
    .evaluateAll((items) => items.some((item) => item.getBoundingClientRect().width < 250));
  expect(narrowAction).toBe(false);
});
