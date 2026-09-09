import { test, expect } from '@playwright/test';

const reverseScoredStatements = new Set([
  3, 6, 7, 9, 10, 14, 16, 18, 20, 21,
  22, 24, 25, 28, 31, 32, 33, 35, 37, 39,
]);

test('Big Five career assessment completes with five traits, facets, and PDF', async ({ page }, testInfo) => {
  await page.goto('http://localhost:4321/services/assessments/big-5-personality-test-careers/');
  await expect(page).toHaveTitle(/Big 5 Personality Test for Careers/);
  await expect(page.locator('.audience-option')).toHaveCount(4);

  await page.locator('[data-audience="college"]').click();
  await page.locator('#start-button').click();

  for (let number = 1; number <= 40; number += 1) {
    const optionIndex = reverseScoredStatements.has(number) ? 0 : 4;
    await page.locator('#scale-options button').nth(optionIndex).click();
    await page.locator('#next-button').click();
  }

  await expect(page.locator('#result-shell')).toBeVisible();
  await expect(page.locator('.trait-result')).toHaveCount(5);
  await expect(page.locator('.trait-result')).toContainText(['100%']);
  await expect(page.locator('.response-row')).toHaveCount(40);
  await expect(page.locator('#result-shell')).toContainText('Your 20 trait facets');
  await expect(page.locator('.facet-card')).toHaveCount(20);
  await expect(page.locator('#result-shell')).toContainText('Trait support and hidden facet differences');
  await expect(page.locator('#result-shell')).toContainText('Evidence inside your own answers');
  await expect(page.locator('#result-shell')).toContainText('Four trait-combination patterns');
  await expect(page.locator('#result-shell')).toContainText('Your work-mode map');
  await expect(page.locator('#result-shell')).toContainText('Support priorities ranked from the same answers');
  await expect(page.locator('#result-shell')).toContainText('Your feedback and communication protocol');
  await expect(page.locator('#result-shell')).toContainText('Contribution and leadership modes to test');
  await expect(page.locator('#result-shell')).toContainText('Skill-building friction to design around');
  await expect(page.locator('#result-shell')).toContainText('Career transition safeguards for College student');
  await expect(page.locator('#result-shell')).toContainText('Your seven-day career field test');
  await expect(page.locator('#result-shell')).toContainText('Build an evidence-based career story');
  await expect(page.locator('#result-shell')).toContainText('Role and environment selection playbook');
  await expect(page.locator('#result-shell')).toContainText('Opportunity and career-capital playbook');
  await expect(page.locator('#result-shell')).toContainText('Pressure and decision-protection playbook');
  await expect(page.locator('#result-shell')).toContainText('Three proof projects selected from your work-mode map');
  await expect(page.locator('#result-shell')).toContainText('A trait score does not set a ceiling');
  await expect(page.locator('#result-shell')).toContainText('Four cross-trait career indicators');
  await expect(page.locator('#result-shell')).toContainText('A 30-day evidence plan');
  await expect(page.locator('#result-shell')).toContainText('Your 90-day development roadmap');
  await expect(page.locator('#result-shell')).toContainText('Not a percentile');

  const downloadPromise = page.waitForEvent('download');
  await page.locator('#download-button').click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe('future-career-school-big-5-career-personality-report.pdf');
  await download.saveAs(testInfo.outputPath('big-five-career-personality-report.pdf'));
});

test('Big Five assessment preserves a fully balanced profile honestly', async ({ page }) => {
  await page.goto('http://localhost:4321/services/assessments/big-5-personality-test-careers/');
  await page.locator('[data-audience="professional"]').click();
  await page.locator('#start-button').click();

  for (let index = 0; index < 40; index += 1) {
    await page.locator('#scale-options button').nth(2).click();
    await page.locator('#next-button').click();
  }

  await expect(page.locator('#result-shell')).toContainText('Broadly adaptable trait profile');
  await expect(page.locator('.trait-result')).toContainText(['50%']);
  await expect(page.locator('#result-shell')).toContainText('40/40');
  await expect(page.locator('#result-shell')).toContainText('Most context-sensitive trait');
});

test('Big Five assessment remains within a mobile viewport', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://localhost:4321/services/assessments/big-5-personality-test-careers/');
  expect(await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)).toBe(false);

  await page.locator('[data-audience="job"]').click();
  await page.locator('#start-button').click();
  for (let index = 0; index < 40; index += 1) {
    await page.locator('#scale-options button').nth(index % 5).click();
    await page.locator('#next-button').click();
  }

  await expect(page.locator('#result-shell')).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)).toBe(false);
});
