import { test, expect } from '@playwright/test';

const simplePages = [
  {
    route: '/services/assessments/class-10-and-below/',
    title: /Class 10/,
    supportSelector: '#what-this-tests',
  },
  {
    route: '/services/assessments/class-11-to-12/',
    title: /Class 11 and 12/,
    supportSelector: '#what-this-tests',
  },
  {
    route: '/services/assessments/graduates-and-early-professionals/',
    title: /Graduates.*Early Professionals/,
    supportSelector: '#what-this-tests',
  },
  {
    route: '/services/assessments/working-professionals-and-career-changers/',
    title: /Working Professionals and Career Changers/,
    supportSelector: '#what-this-tests',
  },
  {
    route: '/services/assessments/stream-selector-test-after-10th/',
    title: /Stream Selector Test After 10th/,
    supportSelector: '#how',
  },
  {
    route: '/services/assessments/stream-selector-test-after-12th/',
    title: /Career Test After 12th/,
    supportSelector: '#how',
  },
  {
    route: '/services/assessments/career-aptitude-test-after-10th/',
    title: /Career Aptitude Test After 10th/,
    supportSelector: '#how',
  },
  {
    route: '/services/assessments/career-aptitude-test-after-12th/',
    title: /Career Aptitude Test After 12th/,
    supportSelector: '#how',
  },
];

const detailedPages = [
  {
    route: '/services/assessments/placement-aptitude-test/',
    title: /Placement Aptitude Test/,
    supportSelector: '#test-coverage',
    answerSelector: '#option-list .answer-option',
    questionSelector: '#question-text',
    chooseAudience: false,
  },
  {
    route: '/services/assessments/numerical-reasoning-test/',
    title: /Numerical Reasoning Test/,
    supportSelector: '.coverage-section',
    answerSelector: '#option-list .answer-option',
    questionSelector: '#question-text',
    chooseAudience: true,
  },
  {
    route: '/services/assessments/verbal-reasoning-test/',
    title: /Verbal Reasoning Test/,
    supportSelector: '.coverage-section',
    answerSelector: '#option-list .answer-option',
    questionSelector: '#question-text',
    chooseAudience: true,
  },
  {
    route: '/services/assessments/myers-briggs-career-test/',
    title: /Myers Briggs Career Test|Career Preference Test/,
    supportSelector: '.pair-section',
    answerSelector: '#scale-options button',
    questionSelector: '#question-prompt',
    chooseAudience: true,
  },
  {
    route: '/services/assessments/big-5-personality-test-careers/',
    title: /Big 5 Personality Test/,
    supportSelector: '.trait-section',
    answerSelector: '#scale-options button',
    questionSelector: '#question-prompt',
    chooseAudience: true,
  },
];

async function assertNoHorizontalOverflow(page) {
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= document.documentElement.clientWidth
    )
  ).toBe(true);
}

async function assertVisibleWithinViewport(locator, page) {
  await expect(locator).toBeVisible();
  const box = await locator.boundingBox();
  expect(box).not.toBeNull();
  const viewport = page.viewportSize();
  expect(viewport).not.toBeNull();
  expect(box.x).toBeGreaterThanOrEqual(0);
  expect(box.x + box.width).toBeLessThanOrEqual(viewport.width + 1);
}

async function assertQuestionFirst(page, supportSelector) {
  const assessmentBox = await page.locator('#assessment').boundingBox();
  const supportBox = await page.locator(supportSelector).boundingBox();
  expect(assessmentBox).not.toBeNull();
  expect(supportBox).not.toBeNull();
  expect(assessmentBox.y).toBeLessThan(supportBox.y);
}

async function completeSimpleAssessment(page) {
  const nextButton = page.locator('#btn-next');

  for (let step = 0; step < 45; step += 1) {
    const resultsVisible = await page.locator('#results-container').evaluate((element) => {
      return getComputedStyle(element).display !== 'none';
    });
    if (resultsVisible) return;

    const options = page.locator('#q-opts .opt-btn, #q-opts .opt-label');
    const optionCount = await options.count();
    expect(optionCount).toBeGreaterThan(0);
    await options.nth(step % optionCount).click();
    await expect(nextButton).toBeEnabled();
    await nextButton.click();
  }

  throw new Error('Simple assessment did not finish within the guard limit.');
}

async function startDetailedAssessment(page, config) {
  if (!config.chooseAudience) return;

  await page.locator('.audience-option').first().click();
  await expect(page.locator('#start-button')).toBeEnabled();
  await page.locator('#start-button').click();
}

async function assertMobileResults(page, resultSelector) {
  const result = page.locator(resultSelector);
  await expect(result).toBeVisible();
  await expect(result.locator('.assessment-report-actions--top')).toBeVisible();
  await expect(result.locator('[data-download-assessment-report]')).toHaveText('Download PDF');
  await expect(result.locator(':scope > .assessment-report-actions--top')).toHaveCount(1);

  const multiColumnResultGrids = await result
    .locator('[style*="display:grid"], [style*="display: grid"], .result-head, .result-metrics, .insight-grid, .indicator-grid, .facet-grid, .axis-grid, .experiment-grid, .diagnostic-grid, .plan-grid, .practice-allocation')
    .evaluateAll((grids) => {
      return grids.filter(
        (grid) => getComputedStyle(grid).gridTemplateColumns.trim().split(/\s+/).length > 1
      ).length;
    });

  expect(multiColumnResultGrids).toBe(0);

  const tableProblems = await result.locator('table').evaluateAll((tables) => {
    return tables.flatMap((table) => {
      const cells = Array.from(table.querySelectorAll('tbody td'));
      return cells
        .filter((cell) => {
          const display = getComputedStyle(cell).display;
          return !cell.dataset.label || !['grid', 'block'].includes(display);
        })
        .map((cell) => cell.textContent?.trim().slice(0, 60));
    });
  });
  expect(tableProblems).toEqual([]);

  const squeezedText = await result
    .locator('td, .apt-key strong, .air-4c-item h3, .ap-mini')
    .evaluateAll((elements) => {
      return elements
        .filter((element) => {
          const text = element.textContent?.trim() || '';
          return element.getClientRects().length > 0 && text.length >= 8 && element.getBoundingClientRect().width < 54;
        })
        .map((element) => element.textContent?.trim().slice(0, 60));
    });
  expect(squeezedText).toEqual([]);

  await assertNoHorizontalOverflow(page);
}

test.describe('assessment mobile layout', () => {
  for (const config of simplePages) {
    test(`${config.route} stays readable and usable on mobile`, async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto(`http://localhost:4321${config.route}`);
      await expect(page).toHaveTitle(config.title);
      await assertQuestionFirst(page, config.supportSelector);
      await assertNoHorizontalOverflow(page);
      await assertVisibleWithinViewport(page.locator('#q-text'), page);
      await assertVisibleWithinViewport(page.locator('#q-opts').first(), page);

      await completeSimpleAssessment(page);
      await assertMobileResults(page, '#results-container');
    });
  }

  for (const config of detailedPages) {
    test(`${config.route} keeps questions and detailed results mobile-friendly`, async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto(`http://localhost:4321${config.route}`);
      await expect(page).toHaveTitle(config.title);
      await assertQuestionFirst(page, config.supportSelector);
      await assertNoHorizontalOverflow(page);

      await startDetailedAssessment(page, config);
      await assertVisibleWithinViewport(page.locator(config.questionSelector), page);
      await assertVisibleWithinViewport(page.locator(config.answerSelector).first(), page);

      const nextButton = page.locator('#next-button');
      await page.locator(config.answerSelector).first().click();
      await expect(nextButton).toBeEnabled();
      await nextButton.click();
      await assertNoHorizontalOverflow(page);

      for (let step = 1; step < 50; step += 1) {
        if (await page.locator('#result-shell').isVisible()) break;
        const options = page.locator(config.answerSelector);
        await options.nth(step % (await options.count())).click();
        await nextButton.click();
      }

      await assertMobileResults(page, '#result-shell');
    });
  }
});
