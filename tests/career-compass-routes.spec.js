import { expect, test } from '@playwright/test';

test.use({ channel: 'chrome' });

const routes = [
  ['/career-skills-compass', 'What are you trying to do today?'],
  ['/career-skills-compass/direction', 'Six short choices. A practical shortlist.'],
  ['/career-skills-compass/careers', 'Browse the work, not the hype.'],
  ['/career-skills-compass/transition', 'Start with the kind of work you have actually done.'],
  ['/career-skills-compass/skills', 'Build skills at your own pace'],
];

for (const [path, heading] of routes) {
  test(`public route ${path} explains its next step`, async ({ page }) => {
    const consoleErrors = [];
    page.on('console', (message) => {
      if (message.type() === 'error') consoleErrors.push(message.text());
    });
    await page.goto(`http://127.0.0.1:4321${path}`, { waitUntil: 'domcontentloaded' });
    await expect(page.getByText(heading, { exact: false }).first()).toBeVisible();
    await expect(page.locator('main.compass-page')).toBeVisible();
    expect(consoleErrors).toEqual([]);
  });
}

test('the direction route remains usable on a phone', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://127.0.0.1:4321/career-skills-compass/direction', { waitUntil: 'domcontentloaded' });
  const firstChoice = page.locator('[data-step="1"] [data-group="stage"]').first();
  await expect(firstChoice).toBeVisible();
  await firstChoice.click();
  await expect(page.locator('#next-step')).toBeVisible();
  await expect(page.locator('#next-step')).toBeEnabled();
  const overflowX = await page.locator('body').evaluate((body) => getComputedStyle(body).overflowX);
  expect(['hidden', 'clip']).toContain(overflowX);
});
