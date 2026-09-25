import { test, expect } from '@playwright/test';

async function completeAssessment(page) {
  for (let question = 0; question < 40; question += 1) {
    if (await page.locator('#results-container').isVisible()) return;
    const options = page.locator('#q-opts .opt-btn, #q-opts .opt-label');
    const optionCount = await options.count();
    expect(optionCount).toBeGreaterThan(0);
    await options.nth(question % optionCount).click();
    await page.locator('#btn-next').click();
  }
  throw new Error('Working professionals assessment did not reach the results page.');
}

async function expectPdfDownload(page, button) {
  const downloadPromise = page.waitForEvent('download');
  await button.click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe('working-professional-career-assessment-report.pdf');
  expect(await download.failure()).toBeNull();
}

test('Working professionals preserves both PDF controls and exports the complete dedicated report', async ({ page }) => {
  const pageErrors = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));

  const baseUrl = process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:4321';
  await page.goto(`${baseUrl}/services/assessments/working-professionals-and-career-changers/`);
  await completeAssessment(page);

  const results = page.locator('#results-container');
  await expect(results).toBeVisible();
  expect((await results.innerText()).length).toBeGreaterThan(30_000);
  await expect(results).toContainText('Your Primary Profile');
  await expect(results).toContainText('Your Profile Across All Six Dimensions');
  await expect(results).toContainText('Readiness Assessment: Your Top 3 Career Moves');
  await expect(results).toContainText('Your Freedom Number Roadmap');
  await expect(results).toContainText('The Rule of 30');

  const displayedPercentiles = await results.locator('text=percentile').evaluateAll((labels) =>
    labels
      .map((label) => label.parentElement?.textContent || '')
      .map((text) => Number(text.match(/\d+/)?.[0]))
      .filter(Number.isFinite)
  );
  expect(displayedPercentiles.length).toBeGreaterThan(0);
  expect(displayedPercentiles.every((score) => score >= 0 && score <= 100)).toBe(true);

  const rangeBoundaries = await page.evaluate(() =>
    Object.fromEntries(
      Object.entries(DIMENSION_RANGES).map(([key, range]) => [
        key,
        {
          minimum: calculatePercentile(range.min, range.min, range.max, range.invert),
          maximum: calculatePercentile(range.max, range.min, range.max, range.invert),
        },
      ])
    )
  );
  expect(rangeBoundaries).toEqual({
    pivot: { minimum: 0, maximum: 100 },
    income: { minimum: 0, maximum: 100 },
    leadership: { minimum: 0, maximum: 100 },
    remote: { minimum: 0, maximum: 100 },
    ai: { minimum: 100, maximum: 0 },
    startup: { minimum: 0, maximum: 100 },
  });

  const topActions = results.locator('.assessment-report-actions--top');
  const topDownload = topActions.locator('[data-download-assessment-report]');
  const bottomDownload = results.locator('[data-working-professional-pdf-download]');
  await expect(topActions.locator('[data-save-assessment-result]')).toBeVisible();
  await expect(topDownload).toBeVisible();
  await expect(bottomDownload).toBeVisible();

  await expectPdfDownload(page, bottomDownload);
  await expect(topDownload).toBeEnabled({ timeout: 10_000 });
  await expectPdfDownload(page, topDownload);
  expect(pageErrors).toEqual([]);
});
