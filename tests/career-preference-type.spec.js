import { test, expect } from '@playwright/test';

test('career preference assessment completes and downloads its report', async ({ page }) => {
  await page.goto('http://localhost:4321/services/assessments/myers-briggs-career-test/');
  await expect(page).toHaveTitle(/Myers Briggs Career Test Alternative/);
  await expect(page.locator('.audience-option')).toHaveCount(4);

  await page.locator('[data-audience="college"]').click();
  await page.locator('#start-button').click();

  for (let index = 0; index < 32; index += 1) {
    if (index === 0) {
      await page.locator('#scale-options button').nth(1).click();
    }
    await page.locator('#scale-options button').first().click();
    await page.locator('#next-button').click();
  }

  await expect(page.locator('#result-shell')).toBeVisible();
  await expect(page.locator('.type-mark strong')).toHaveText('ESTJ');
  await expect(page.locator('.axis-card')).toHaveCount(4);
  await expect(page.locator('.response-row')).toHaveCount(32);
  await expect(page.locator('#result-shell')).toContainText('Role families worth investigating');
  await expect(page.locator('#result-shell')).toContainText('Four practical career experiments');
  await expect(page.locator('#result-shell')).toContainText('Build the opposite-side skills');
  await expect(page.locator('#result-shell')).toContainText('Your working code, not a fixed label');
  await expect(page.locator('#result-shell')).toContainText('Letter-by-letter response support');
  await expect(page.locator('#result-shell')).toContainText('Evidence from your own answers');
  await expect(page.locator('#result-shell')).toContainText('A 30-day evidence plan');
  await expect(page.locator('#result-shell')).toContainText('Research questions for college student');
  await expect(page.locator('#result-shell')).toContainText('Not the official MBTI assessment');

  const downloadPromise = page.waitForEvent('download');
  await page.locator('#download-button').click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe('future-career-school-career-preference-evidence-report.pdf');
  await download.saveAs('test-results/career-preference-report.pdf');
});

test('career preference assessment reports a fully balanced response pattern honestly', async ({ page }) => {
  await page.goto('http://localhost:4321/services/assessments/myers-briggs-career-test/');
  await page.locator('[data-audience="professional"]').click();
  await page.locator('#start-button').click();

  for (let index = 0; index < 32; index += 1) {
    await page.locator('#scale-options button').nth(2).click({ force: true });
    await page.locator('#next-button').click();
  }

  await expect(page.locator('#result-shell')).toContainText('Preference clarity: 0%');
  await expect(page.locator('#result-shell')).toContainText('32/32');
  await expect(page.locator('.type-mark strong')).toHaveText('MIXED');
  await expect(page.locator('#result-shell')).toContainText('Context-responsive profile');
  await expect(page.locator('#result-shell')).toContainText('Compare several task families');
  await expect(page.locator('#result-shell')).toContainText('E/I · S/N · T/F · J/P');
  await expect(page.locator('.axis-card')).toContainText(['Balanced']);
});

test('career preference page and result stay within a mobile viewport', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:4321/services/assessments/myers-briggs-career-test/');
  expect(await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)).toBe(false);

  await page.locator('[data-audience="job"]').click();
  await page.locator('#start-button').click();
  for (let index = 0; index < 32; index += 1) {
    await page.locator('#scale-options button').nth(index % 5).click();
    await page.locator('#next-button').click();
  }

  expect(await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)).toBe(false);
  await expect(page.locator('#result-shell')).toBeVisible();
});
