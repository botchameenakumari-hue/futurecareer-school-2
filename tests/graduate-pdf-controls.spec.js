import { test, expect } from '@playwright/test';

async function completeAssessment(page) {
  for (let question = 0; question < 36; question += 1) {
    if (await page.locator('#results-container').isVisible()) return;
    const options = page.locator('#q-opts .opt-btn, #q-opts .opt-label');
    const optionCount = await options.count();
    expect(optionCount).toBeGreaterThan(0);
    await options.nth(question % optionCount).click();
    await page.locator('#btn-next').click();
  }
  throw new Error('Graduates and early professionals assessment did not reach the results page.');
}

async function expectPdfDownload(page, button) {
  const downloadPromise = page.waitForEvent('download');
  await button.click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe('graduate-career-assessment-report.pdf');
  expect(await download.failure()).toBeNull();
}

test('Graduates and early professionals preserves both PDF controls and exports the complete dedicated report', async ({ page }) => {
  const pageErrors = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));

  const baseUrl = process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:4321';
  await page.goto(`${baseUrl}/services/assessments/graduates-and-early-professionals/`);
  await completeAssessment(page);

  const results = page.locator('#results-container');
  await expect(results).toBeVisible();
  expect((await results.innerText()).length).toBeGreaterThan(27_000);
  await expect(results).toContainText('Your RIASEC Interest Evidence');
  await expect(results).toContainText('not a population percentile');
  await expect(results).toContainText('Audience context, not inferred experience');
  await expect(results).toContainText('₹50,000/month × 12 × 30 = ₹1.8 crore');
  await expect(results).toContainText('Three Job-Search Routes to Test');
  await expect(results).not.toContainText('Response Conviction');
  await expect(results).not.toContainText('Adaptability Index');
  await expect(results).toContainText('The 4 Core Human Skills (Forever Valuable)');
  await expect(results).toContainText('The 4 Business Types (For Your Future)');

  const topActions = results.locator('.assessment-report-actions--top');
  const topDownload = topActions.locator('[data-download-assessment-report]');
  const bottomDownload = results.locator('[data-graduate-pdf-download]');
  await expect(topActions.locator('[data-save-assessment-result]')).toBeVisible();
  await expect(topDownload).toBeVisible();
  await expect(bottomDownload).toBeVisible();

  await expectPdfDownload(page, bottomDownload);
  await expect(topDownload).toBeEnabled({ timeout: 10_000 });
  await expectPdfDownload(page, topDownload);
  expect(pageErrors).toEqual([]);
});

