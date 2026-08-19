import { test, expect } from '@playwright/test';

async function completeAssessment(page) {
  const nextButton = page.locator('#btn-next');

  for (let step = 0; step < 45; step += 1) {
    if (await page.locator('#results-container').isVisible()) return;

    const options = page.locator('#q-opts .opt-btn, #q-opts .opt-label');
    const optionCount = await options.count();
    expect(optionCount).toBeGreaterThan(0);
    await options.nth(step % optionCount).click();
    await expect(nextButton).toBeEnabled();
    await nextButton.click();
  }

  throw new Error('Working Professionals assessment did not finish.');
}

async function assertSingleColumnGrid(grid) {
  await expect(grid).toBeVisible();

  const layout = await grid.evaluate((element) => {
    const columns = getComputedStyle(element).gridTemplateColumns.trim().split(/\s+/);
    const childWidths = Array.from(element.children)
      .filter((child) => child.getClientRects().length > 0)
      .map((child) => child.getBoundingClientRect().width);

    return {
      columns: columns.length,
      minimumChildWidth: Math.min(...childWidths),
    };
  });

  expect(layout.columns).toBe(1);
  expect(layout.minimumChildWidth).toBeGreaterThan(250);
}

test('working professional result fixes the exact reported mobile sections', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(
    'http://localhost:4321/services/assessments/working-professionals-and-career-changers/'
  );
  await completeAssessment(page);

  const result = page.locator('#results-container');
  await expect(result).toBeVisible();
  const topToolbar = result.locator(':scope > .assessment-report-actions--top');
  await expect(topToolbar).toHaveCount(1);
  await expect(topToolbar.locator('button')).toHaveText('Download PDF');

  const ruleOfThreeGrid = page
    .getByText('Research Options', { exact: true })
    .locator('..')
    .locator('..');
  await assertSingleColumnGrid(ruleOfThreeGrid);

  const leadershipGrid = page
    .getByText('IC/Specialist', { exact: true })
    .locator('..')
    .locator('..');
  await assertSingleColumnGrid(leadershipGrid);

  const multiColumnGrids = await result.locator('*').evaluateAll((elements) => {
    return elements
      .filter((element) => {
        const style = getComputedStyle(element);
        return (
          element.getClientRects().length > 0 &&
          style.display === 'grid' &&
          style.gridTemplateColumns.trim().split(/\s+/).length > 1
        );
      })
      .map((element) => element.textContent?.trim().slice(0, 80));
  });
  expect(multiColumnGrids).toEqual([]);

  await ruleOfThreeGrid.screenshot({ path: 'test-results/working-professional-rule-of-three.png' });
  await leadershipGrid.screenshot({
    path: 'test-results/working-professional-leadership-trajectory.png',
  });
  await topToolbar.screenshot({
    path: 'test-results/working-professional-top-pdf-toolbar.png',
  });
});
