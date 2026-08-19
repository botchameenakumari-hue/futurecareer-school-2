import { test, expect } from '@playwright/test';

const reverseScoredBigFiveStatements = new Set([
  3, 6, 7, 9, 10, 14, 16, 18, 20, 21,
  22, 24, 25, 28, 31, 32, 33, 35, 37, 39,
]);

const suspiciousResultPatterns = [
  /\bNaN\b/i,
  /\bundefined\b/i,
  /\[object Object\]/i,
  /\bInfinity\b/i,
  /Loading question/i,
  /Loading\.\.\./i,
];

const legacyAssessments = [
  {
    route: '/services/assessments/class-10-and-below/',
    title: /Class 10/,
    anchor: 'Your Career Profile',
  },
  {
    route: '/services/assessments/class-11-to-12/',
    title: /Class 11 and 12/,
    anchor: 'Your Career Profile',
  },
  {
    route: '/services/assessments/graduates-and-early-professionals/',
    title: /Graduates.*Early Professionals/,
    anchor: 'Your Career Type',
  },
  {
    route: '/services/assessments/working-professionals-and-career-changers/',
    title: /Working Professionals and Career Changers/,
    anchor: 'Your Primary Profile',
  },
  {
    route: '/services/assessments/stream-selector-test-after-10th/',
    title: /Stream Selector Test After 10th/,
    anchor: 'Your Best-Fit Stream',
  },
  {
    route: '/services/assessments/stream-selector-test-after-12th/',
    title: /Career Test After 12th/,
    anchor: 'Your Best-Fit Career Path',
  },
  {
    route: '/services/assessments/career-aptitude-test-after-10th/',
    title: /Career Aptitude Test After 10th/,
    anchor: 'Your Strongest Skill',
  },
  {
    route: '/services/assessments/career-aptitude-test-after-12th/',
    title: /Career Aptitude Test After 12th/,
    anchor: 'Your Strongest Skill',
  },
];

const modernAssessments = [
  {
    route: '/services/assessments/placement-aptitude-test/',
    title: /Placement Aptitude Test/,
    anchor: 'Accuracy and pacing by domain',
    questionCount: 20,
    optionSelector: '.answer-option',
    nextSelector: '#next-button',
    choiceStrategy: ({ index }) => (index === 0 ? 1 : 0),
    resultSelector: '#result-shell',
    countChecks: [
      { selector: '.review-item', expected: 20 },
      { selector: '.domain-row', expected: 5 },
    ],
  },
  {
    route: '/services/assessments/numerical-reasoning-test/',
    title: /Numerical Reasoning Test/,
    audience: 'job',
    anchor: 'Difficulty transfer and consistency',
    questionCount: 24,
    optionSelector: '.answer-option',
    nextSelector: '#next-button',
    choiceStrategy: ({ index }) => (index === 0 ? 1 : 0),
    resultSelector: '#result-shell',
    countChecks: [
      { selector: '.review-item', expected: 24 },
      { selector: '.domain-row', expected: 6 },
    ],
  },
  {
    route: '/services/assessments/verbal-reasoning-test/',
    title: /Verbal Reasoning Test/,
    audience: 'professional',
    anchor: 'Three broader verbal indicators',
    questionCount: 24,
    optionSelector: '.answer-option',
    nextSelector: '#next-button',
    choiceStrategy: ({ index }) => (index === 0 ? 1 : 0),
    resultSelector: '#result-shell',
    countChecks: [
      { selector: '.review-item', expected: 24 },
      { selector: '.domain-row', expected: 6 },
    ],
  },
  {
    route: '/services/assessments/myers-briggs-career-test/',
    title: /Myers Briggs Career Test/,
    audience: 'college',
    anchor: 'Evidence from your own answers',
    questionCount: 32,
    optionSelector: '#scale-options button',
    nextSelector: '#next-button',
    choiceStrategy: ({ index }) => index % 5,
    resultSelector: '#result-shell',
    countChecks: [
      { selector: '.response-row', expected: 32 },
      { selector: '.axis-card', expected: 4 },
    ],
  },
  {
    route: '/services/assessments/big-5-personality-test-careers/',
    title: /Big 5 Personality Test for Careers/,
    audience: 'college',
    anchor: 'Your 20 trait facets',
    questionCount: 40,
    optionSelector: '#scale-options button',
    nextSelector: '#next-button',
    choiceStrategy: ({ questionNumber }) => (
      reverseScoredBigFiveStatements.has(questionNumber) ? 0 : 4
    ),
    resultSelector: '#result-shell',
    countChecks: [
      { selector: '.response-row', expected: 40 },
      { selector: '.trait-result', expected: 5 },
      { selector: '.facet-card', expected: 20 },
    ],
  },
];

function collectClientErrors(page) {
  const pageErrors = [];
  const consoleErrors = [];

  page.on('pageerror', (error) => pageErrors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') {
      consoleErrors.push(message.text());
    }
  });

  return { pageErrors, consoleErrors };
}

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

async function completeModernAssessment(page, assessment) {
  if (assessment.audience) {
    await page.locator(`[data-audience="${assessment.audience}"]`).click();
    await page.locator('#start-button').click();
  }

  for (let index = 0; index < assessment.questionCount; index += 1) {
    const optionIndex = assessment.choiceStrategy({
      index,
      questionNumber: index + 1,
    });
    await page.locator(assessment.optionSelector).nth(optionIndex).click();
    await page.locator(assessment.nextSelector).click();
  }
}

async function expectCleanResult(page, assessment, clientErrors) {
  const result = page.locator(assessment.resultSelector);
  await expect(result).toBeVisible();
  await expect(result).toContainText(assessment.anchor);

  if (assessment.countChecks) {
    for (const check of assessment.countChecks) {
      await expect(result.locator(check.selector)).toHaveCount(check.expected);
    }
  }

  const resultText = await result.innerText();
  expect(resultText.trim().length).toBeGreaterThan(180);

  for (const pattern of suspiciousResultPatterns) {
    expect(resultText).not.toMatch(pattern);
  }

  expect(clientErrors.pageErrors).toEqual([]);
  expect(clientErrors.consoleErrors).toEqual([]);
}

test.describe('assessment result integrity', () => {
  for (const assessment of legacyAssessments) {
    test(`${assessment.route} renders a clean calculated legacy result`, async ({ page }) => {
      const clientErrors = collectClientErrors(page);

      await page.goto(`http://localhost:4321${assessment.route}`);
      await expect(page).toHaveTitle(assessment.title);

      await completeLegacyAssessment(page);
      await expectCleanResult(
        page,
        {
          ...assessment,
          resultSelector: '#results-container',
        },
        clientErrors
      );
    });
  }

  for (const assessment of modernAssessments) {
    test(`${assessment.route} renders a clean calculated modern result`, async ({ page }) => {
      const clientErrors = collectClientErrors(page);

      await page.goto(`http://localhost:4321${assessment.route}`);
      await expect(page).toHaveTitle(assessment.title);

      await completeModernAssessment(page, assessment);
      await expectCleanResult(page, assessment, clientErrors);
    });
  }
});
