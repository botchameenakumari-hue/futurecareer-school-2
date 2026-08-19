import { test, expect } from '@playwright/test';
import { readFile } from 'node:fs/promises';

const simplePages = [
  {
    route: '/services/assessments/class-10-and-below/',
    title: /Class 10/,
    fileName: 'class-10-career-assessment-report.pdf',
  },
  {
    route: '/services/assessments/class-11-to-12/',
    title: /Class 11 and 12/,
    fileName: 'class-11-12-career-assessment-report.pdf',
  },
  {
    route: '/services/assessments/graduates-and-early-professionals/',
    title: /Graduates.*Early Professionals/,
    fileName: 'graduate-career-assessment-report.pdf',
  },
  {
    route: '/services/assessments/working-professionals-and-career-changers/',
    title: /Working Professionals and Career Changers/,
    fileName: 'working-professional-career-assessment-report.pdf',
  },
  {
    route: '/services/assessments/stream-selector-test-after-10th/',
    title: /Stream Selector Test After 10th/,
    fileName: 'stream-selector-test-after-10th-report.pdf',
  },
  {
    route: '/services/assessments/stream-selector-test-after-12th/',
    title: /Career Test After 12th/,
    fileName: 'career-test-after-12th-report.pdf',
  },
  {
    route: '/services/assessments/career-aptitude-test-after-10th/',
    title: /Career Aptitude Test After 10th/,
    fileName: 'career-aptitude-test-after-10th-report.pdf',
  },
  {
    route: '/services/assessments/career-aptitude-test-after-12th/',
    title: /Career Aptitude Test After 12th/,
    fileName: 'career-aptitude-test-after-12th-report.pdf',
  },
];

const detailedPages = [
  {
    route: '/services/assessments/placement-aptitude-test/',
    title: /Placement Aptitude Test/,
    fileName: 'future-career-school-placement-aptitude-report.pdf',
    answerSelector: '#option-list .answer-option',
    chooseAudience: false,
  },
  {
    route: '/services/assessments/numerical-reasoning-test/',
    title: /Numerical Reasoning Test/,
    fileName: 'future-career-school-numerical-reasoning-report.pdf',
    answerSelector: '#option-list .answer-option',
    chooseAudience: true,
  },
  {
    route: '/services/assessments/verbal-reasoning-test/',
    title: /Verbal Reasoning Test/,
    fileName: 'future-career-school-verbal-reasoning-report.pdf',
    answerSelector: '#option-list .answer-option',
    chooseAudience: true,
  },
  {
    route: '/services/assessments/myers-briggs-career-test/',
    title: /Myers Briggs Career Test|Career Preference Test/,
    fileName: 'future-career-school-career-preference-evidence-report.pdf',
    answerSelector: '#scale-options button',
    chooseAudience: true,
  },
  {
    route: '/services/assessments/big-5-personality-test-careers/',
    title: /Big 5 Personality Test/,
    fileName: 'future-career-school-big-5-career-personality-report.pdf',
    answerSelector: '#scale-options button',
    chooseAudience: true,
  },
];

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

async function completeDetailedAssessment(page, config) {
  if (config.chooseAudience) {
    await page.locator('.audience-option').first().click();
    await page.locator('#start-button').click();
  }

  const nextButton = page.locator('#next-button');
  for (let step = 0; step < 50; step += 1) {
    if (await page.locator('#result-shell').isVisible()) return;

    const options = page.locator(config.answerSelector);
    const optionCount = await options.count();
    expect(optionCount).toBeGreaterThan(0);
    await options.nth(step % optionCount).click();
    await expect(nextButton).toBeEnabled();
    await nextButton.click();
  }

  throw new Error('Detailed assessment did not finish within the guard limit.');
}

async function capturePdfDownload(page) {
  await page.evaluate(() => {
    window.__assessmentPopupCount = 0;
    window.__assessmentPrintCount = 0;
    window.open = function () {
      window.__assessmentPopupCount += 1;
      return null;
    };
    window.print = function () {
      window.__assessmentPrintCount += 1;
    };
  });

  const downloadPromise = page.waitForEvent('download');
  await page.locator('[data-download-assessment-report]').click();
  return downloadPromise;
}

async function assertPdfDownload(page, expectedFileName, pageErrors) {
  await expect(page.locator('.assessment-report-actions--top')).toBeVisible();
  const download = await capturePdfDownload(page);
  expect(download.suggestedFilename()).toBe(expectedFileName);

  const downloadPath = await download.path();
  expect(downloadPath).not.toBeNull();
  const pdfBytes = await readFile(downloadPath);
  expect(pdfBytes.subarray(0, 5).toString()).toBe('%PDF-');
  expect(pdfBytes.length).toBeGreaterThan(1000);
  expect(await page.evaluate(() => window.__assessmentPopupCount)).toBe(0);
  expect(await page.evaluate(() => window.__assessmentPrintCount)).toBe(0);
  await expect(page.locator('[data-report-download-status]')).toContainText('downloaded');
  expect(pageErrors).toEqual([]);
}

test.describe('assessment report export', () => {
  for (const config of simplePages) {
    test(`${config.route} downloads a PDF without opening print`, async ({ page }) => {
      const pageErrors = [];
      page.on('pageerror', (error) => pageErrors.push(error.message));

      await page.goto(`http://localhost:4321${config.route}`);
      await expect(page).toHaveTitle(config.title);
      await completeSimpleAssessment(page);
      await assertPdfDownload(page, config.fileName, pageErrors);
    });
  }

  for (const config of detailedPages) {
    test(`${config.route} downloads its detailed PDF from the top action`, async ({ page }) => {
      const pageErrors = [];
      page.on('pageerror', (error) => pageErrors.push(error.message));

      await page.goto(`http://localhost:4321${config.route}`);
      await expect(page).toHaveTitle(config.title);
      await completeDetailedAssessment(page, config);
      await assertPdfDownload(page, config.fileName, pageErrors);
    });
  }
});
