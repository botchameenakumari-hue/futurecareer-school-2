import { test, expect } from '@playwright/test';

const legacyPages = [
  {
    route: '/services/assessments/class-10-and-below/',
    title: /Class 10/,
    resultText: 'Your Career Profile',
  },
  {
    route: '/services/assessments/class-11-to-12/',
    title: /Class 11 and 12/,
    resultText: 'Your Career Profile',
  },
  {
    route: '/services/assessments/graduates-and-early-professionals/',
    title: /Graduates.*Early Professionals/,
    resultText: 'Your Career Type',
  },
  {
    route: '/services/assessments/working-professionals-and-career-changers/',
    title: /Working Professionals and Career Changers/,
    resultText: 'Your Primary Profile',
  },
  {
    route: '/services/assessments/stream-selector-test-after-10th/',
    title: /Stream Selector Test After 10th/,
    resultText: 'Your Best-Fit Stream',
  },
  {
    route: '/services/assessments/stream-selector-test-after-12th/',
    title: /Career Test After 12th/,
    resultText: 'Your Best-Fit Career Path',
  },
  {
    route: '/services/assessments/career-aptitude-test-after-10th/',
    title: /Career Aptitude Test After 10th/,
    resultText: 'Your Strongest Skill',
  },
  {
    route: '/services/assessments/career-aptitude-test-after-12th/',
    title: /Career Aptitude Test After 12th/,
    resultText: 'Your Strongest Skill',
  },
];

async function completeLegacyAssessment(page) {
  const nextButton = page.locator('#btn-next');
  let guard = 0;

  while (guard < 45) {
    guard += 1;

    const resultsVisible = await page.locator('#results-container').evaluate((element) => {
      return getComputedStyle(element).display !== 'none';
    });
    if (resultsVisible) {
      return;
    }

    const options = page.locator('#q-opts .opt-btn, #q-opts .opt-label');
    const optionCount = await options.count();
    expect(optionCount).toBeGreaterThan(0);

    await options.nth(Math.min((guard - 1) % optionCount, optionCount - 1)).click();
    await expect(nextButton).toBeEnabled();
    await nextButton.click();
  }

  throw new Error('Legacy assessment did not finish within the guard limit.');
}

test.describe('legacy assessments', () => {
  for (const pageConfig of legacyPages) {
    test(`${pageConfig.route} advances and renders results`, async ({ page }) => {
      const pageErrors = [];
      page.on('pageerror', (error) => pageErrors.push(error.message));

      await page.goto(`http://localhost:4321${pageConfig.route}`);
      await expect(page).toHaveTitle(pageConfig.title);

      const firstCounter = await page.locator('#q-counter, #q-num').first().textContent();
      await page.locator('#q-opts .opt-btn, #q-opts .opt-label').first().click();
      await page.locator('#btn-next').click();
      const secondCounter = await page.locator('#q-counter, #q-num').first().textContent();
      expect(secondCounter).not.toBe(firstCounter);

      await completeLegacyAssessment(page);

      await expect(page.locator('#results-container')).toBeVisible();
      await expect(page.locator('#results-container')).toContainText(pageConfig.resultText);
      expect(pageErrors).toEqual([]);
    });
  }
});
