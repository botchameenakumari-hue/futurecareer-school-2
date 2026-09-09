import { test, expect } from '@playwright/test';
import { readFile, writeFile } from 'node:fs/promises';

const assessments = [
  {
    route: '/services/assessments/placement-aptitude-test/',
    fileName: 'future-career-school-placement-aptitude-report.pdf',
    snapshotName: 'placement-aptitude',
    answerSelector: '#option-list .answer-option',
    chooseAudience: false,
  },
  {
    route: '/services/assessments/numerical-reasoning-test/',
    fileName: 'future-career-school-numerical-reasoning-report.pdf',
    snapshotName: 'numerical-reasoning',
    answerSelector: '#option-list .answer-option',
    chooseAudience: true,
  },
  {
    route: '/services/assessments/verbal-reasoning-test/',
    fileName: 'future-career-school-verbal-reasoning-report.pdf',
    snapshotName: 'verbal-reasoning',
    answerSelector: '#option-list .answer-option',
    chooseAudience: true,
  },
  {
    route: '/services/assessments/myers-briggs-career-test/',
    fileName: 'future-career-school-career-preference-evidence-report.pdf',
    snapshotName: 'career-preference',
    answerSelector: '#scale-options button',
    chooseAudience: true,
  },
];

async function completeAssessment(page, config) {
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

for (const assessment of assessments) {
  test(`${assessment.snapshotName} result and PDF audit`, async ({ page }, testInfo) => {
    const pageErrors = [];
    page.on('pageerror', (error) => pageErrors.push(error.message));

    await page.goto(`http://localhost:4321${assessment.route}`);
    await completeAssessment(page, assessment);

    const resultStructure = await page.locator('#result-shell').evaluate((container) => ({
      headings: Array.from(container.querySelectorAll('h1,h2,h3,h4,h5,h6'))
        .map((heading) => heading.textContent?.replace(/\s+/g, ' ').trim())
        .filter(Boolean),
      paragraphs: container.querySelectorAll('p').length,
      listItems: container.querySelectorAll('li').length,
      tables: container.querySelectorAll('table').length,
      articles: container.querySelectorAll('article').length,
      textLength: container.innerText.length,
    }));

    await writeFile(
      testInfo.outputPath(`${assessment.snapshotName}-structure.json`),
      JSON.stringify(resultStructure, null, 2)
    );

    const downloadPromise = page.waitForEvent('download');
    await page.locator('[data-download-assessment-report]').click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toBe(assessment.fileName);

    const pdfPath = testInfo.outputPath(assessment.fileName);
    await download.saveAs(pdfPath);
    const pdfBytes = await readFile(pdfPath);
    expect(pdfBytes.subarray(0, 5).toString()).toBe('%PDF-');
    expect(pdfBytes.length).toBeGreaterThan(1000);
    expect(pageErrors).toEqual([]);
  });
}
