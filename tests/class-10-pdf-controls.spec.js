import { test, expect } from '@playwright/test';

async function completeAssessment(page) {
  for (let question = 0; question < 30; question += 1) {
    const results = page.locator('#results-container');
    if (await results.isVisible()) return;

    const options = page.locator('#q-opts .opt-btn, #q-opts .opt-label');
    await expect(options.first()).toBeVisible();
    await options.nth(question % (await options.count())).click();
    await page.locator('#btn-next').click();
  }

  throw new Error('Class 10 assessment did not reach the results page.');
}

async function expectPdfDownload(page, button) {
  const downloadPromise = page.waitForEvent('download');
  await button.click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe('class-10-career-assessment-report.pdf');
  expect(await download.failure()).toBeNull();
}

test('Class 10 results preserve both PDF controls and both download the redesigned report', async ({ page }) => {
  const pageErrors = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));

  const baseUrl = process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:4321';
  await page.goto(`${baseUrl}/services/assessments/class-10-and-below/`);
  await completeAssessment(page);

  const results = page.locator('#results-container');
  await expect(results).toBeVisible();
  expect((await results.innerText()).length).toBeGreaterThan(20_000);

  const topActions = results.locator('.assessment-report-actions--top');
  const topDownload = topActions.locator('[data-download-assessment-report]');
  const bottomDownload = results.locator('[data-class-10-pdf-download]');

  await expect(topActions.locator('[data-save-assessment-result]')).toBeVisible();
  await expect(topDownload).toBeVisible();
  await expect(bottomDownload).toBeVisible();

  await expectPdfDownload(page, bottomDownload);
  await expect(topDownload).toBeEnabled({ timeout: 10_000 });
  await expectPdfDownload(page, topDownload);

  expect(pageErrors).toEqual([]);
});
