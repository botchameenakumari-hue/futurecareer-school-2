import { expect, test } from '@playwright/test';

test.use({ channel: 'chrome' });

test('a beginner can complete the compass and inspect a career comparison', async ({ page }) => {
  await page.goto('http://127.0.0.1:4321/career-skills-compass/direction', { waitUntil: 'domcontentloaded' });

  const choices = [
    ['stage', 1],
    ['goal', 1],
    ['interests', 2],
    ['values', 2],
    ['modes', 2],
  ];
  for (const [group, count] of choices) {
    await page.locator(`[data-step] [data-group="${group}"]`).first().click();
    if (count > 1) await page.locator(`[data-step] [data-group="${group}"]`).nth(1).click();
    await page.locator('#next-step').click();
  }

  await page.locator('[data-step="6"] [data-group="access"]').first().click();
  await page.locator('[data-step="6"] [data-group="pace"]').first().click();
  await page.locator('#show-matches').click();

  await expect(page.locator('#results')).toBeVisible();
  const visibleCards = page.locator('#match-grid .result-card:visible');
  await expect(visibleCards.first()).toBeVisible();
  await visibleCards.first().locator('[data-open]').click();
  await expect(page.locator('#role-dialog')).toBeVisible();
  await page.locator('[data-close-role]').click();

  await visibleCards.nth(0).locator('[data-compare]').click();
  await visibleCards.nth(1).locator('[data-compare]').click();
  await page.locator('#compare-shortlist').click();
  await expect(page.locator('#compare-dialog')).toBeVisible();
  await expect(page.locator('#compare-content')).toContainText('Compare the work');
});
