import { test, expect } from '@playwright/test';

const assessments = [
  {
    route: '/services/assessments/class-10-and-below/',
    resultSelector: '#results-container',
    quizSelector: '#quiz-container',
    optionSelector: '#q-opts .opt-btn, #q-opts .opt-label',
    nextSelector: '#btn-next',
    counterSelector: '#q-counter',
    kind: 'legacy',
  },
  {
    route: '/services/assessments/class-11-to-12/',
    resultSelector: '#results-container',
    quizSelector: '#quiz-container',
    optionSelector: '#q-opts .opt-btn, #q-opts .opt-label',
    nextSelector: '#btn-next',
    counterSelector: '#q-counter',
    kind: 'legacy',
  },
  {
    route: '/services/assessments/graduates-and-early-professionals/',
    resultSelector: '#results-container',
    quizSelector: '#quiz-container',
    optionSelector: '#q-opts .opt-btn, #q-opts .opt-label',
    nextSelector: '#btn-next',
    counterSelector: '#q-counter',
    kind: 'legacy',
  },
  {
    route: '/services/assessments/working-professionals-and-career-changers/',
    resultSelector: '#results-container',
    quizSelector: '#quiz-container',
    optionSelector: '#q-opts .opt-btn, #q-opts .opt-label',
    nextSelector: '#btn-next',
    counterSelector: '#q-counter',
    kind: 'legacy',
  },
  {
    route: '/services/assessments/stream-selector-test-after-10th/',
    resultSelector: '#results-container',
    quizSelector: '#quiz-container',
    optionSelector: '#q-opts .opt-btn, #q-opts .opt-label',
    nextSelector: '#btn-next',
    counterSelector: '#q-counter',
    kind: 'legacy',
  },
  {
    route: '/services/assessments/stream-selector-test-after-12th/',
    resultSelector: '#results-container',
    quizSelector: '#quiz-container',
    optionSelector: '#q-opts .opt-btn, #q-opts .opt-label',
    nextSelector: '#btn-next',
    counterSelector: '#q-counter',
    kind: 'legacy',
  },
  {
    route: '/services/assessments/career-aptitude-test-after-10th/',
    resultSelector: '#results-container',
    quizSelector: '#quiz-container',
    optionSelector: '#q-opts .opt-btn, #q-opts .opt-label',
    nextSelector: '#btn-next',
    counterSelector: '#q-counter',
    kind: 'legacy',
  },
  {
    route: '/services/assessments/career-aptitude-test-after-12th/',
    resultSelector: '#results-container',
    quizSelector: '#quiz-container',
    optionSelector: '#q-opts .opt-btn, #q-opts .opt-label',
    nextSelector: '#btn-next',
    counterSelector: '#q-counter',
    kind: 'legacy',
  },
  {
    route: '/services/assessments/placement-aptitude-test/',
    resultSelector: '#result-shell',
    quizSelector: '#quiz-shell',
    optionSelector: '#option-list .answer-option',
    nextSelector: '#next-button',
    counterSelector: '#question-counter',
    kind: 'detailed',
  },
  {
    route: '/services/assessments/numerical-reasoning-test/',
    resultSelector: '#result-shell',
    quizSelector: '#quiz-shell',
    optionSelector: '#option-list .answer-option',
    nextSelector: '#next-button',
    counterSelector: '#question-counter',
    kind: 'detailed',
    audience: 'school',
  },
  {
    route: '/services/assessments/verbal-reasoning-test/',
    resultSelector: '#result-shell',
    quizSelector: '#quiz-shell',
    optionSelector: '#option-list .answer-option',
    nextSelector: '#next-button',
    counterSelector: '#question-counter',
    kind: 'detailed',
    audience: 'school',
  },
  {
    route: '/services/assessments/myers-briggs-career-test/',
    resultSelector: '#result-shell',
    quizSelector: '#quiz-shell',
    optionSelector: '#scale-options button',
    nextSelector: '#next-button',
    counterSelector: '#question-counter',
    kind: 'detailed',
    audience: 'school',
  },
  {
    route: '/services/assessments/big-5-personality-test-careers/',
    resultSelector: '#result-shell',
    quizSelector: '#quiz-shell',
    optionSelector: '#scale-options button',
    nextSelector: '#next-button',
    counterSelector: '#question-counter',
    kind: 'detailed',
    audience: 'school',
  },
];

async function startAssessment(page, assessment) {
  if (!assessment.audience) return;

  await page.locator(`[data-audience="${assessment.audience}"]`).click();
  await page.locator('#start-button').click();
}

async function completeAssessment(page, assessment) {
  const result = page.locator(assessment.resultSelector);

  for (let step = 0; step < 50; step += 1) {
    if (await result.isVisible()) return;

    const options = page.locator(assessment.optionSelector);
    const optionCount = await options.count();
    expect(optionCount).toBeGreaterThan(0);
    await options.nth(step % optionCount).click();

    const next = page.locator(assessment.nextSelector);
    await expect(next).toBeEnabled();
    await next.click();
  }

  throw new Error(`${assessment.route} did not finish within the guard limit.`);
}

async function expectNarrowResult(page, assessment) {
  const result = page.locator(assessment.resultSelector);
  await expect(result).toBeVisible();
  await expect(result.locator(':scope > .assessment-report-actions--top')).toHaveCount(1);

  const layoutProblems = await result
    .locator(
      '[style*="display:grid"], [style*="display: grid"], .result-head, .result-metrics, .insight-grid, .indicator-grid, .facet-grid, .axis-grid, .experiment-grid, .diagnostic-grid, .plan-grid, .practice-allocation'
    )
    .evaluateAll((elements) => {
      return elements
        .filter((element) => {
          if (!element.getClientRects().length) return false;
          return getComputedStyle(element).gridTemplateColumns.trim().split(/\s+/).length > 1;
        })
        .map((element) => element.textContent?.trim().slice(0, 80));
    });

  expect(layoutProblems).toEqual([]);
  expect(
    await result.evaluate((element) => element.scrollWidth <= element.clientWidth + 1)
  ).toBe(true);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= document.documentElement.clientWidth
    )
  ).toBe(true);
}

async function retakeAssessment(page, assessment) {
  const result = page.locator(assessment.resultSelector);

  if (assessment.kind === 'detailed') {
    await result.locator('#retake-button').click();
  } else {
    await result.getByRole('button', { name: /retake|take test again/i }).click();
  }

  await expect(result).not.toBeVisible();
  await expect(page.locator(assessment.quizSelector)).toBeVisible();
  await expect(page.locator(assessment.counterSelector)).toContainText('1');
  await expect(page.locator(assessment.optionSelector).first()).toBeVisible();

  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= document.documentElement.clientWidth
    )
  ).toBe(true);
}

test.describe('assessment narrow-mobile retake coverage', () => {
  for (const assessment of assessments) {
    test(`${assessment.route} stays readable and resets cleanly`, async ({ page }) => {
      const pageErrors = [];
      page.on('pageerror', (error) => pageErrors.push(error.message));

      await page.setViewportSize({ width: 360, height: 800 });
      await page.goto(`http://localhost:4321${assessment.route}`);
      await startAssessment(page, assessment);
      await completeAssessment(page, assessment);
      await expectNarrowResult(page, assessment);
      await retakeAssessment(page, assessment);

      expect(pageErrors).toEqual([]);
    });
  }
});
