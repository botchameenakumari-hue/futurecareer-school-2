import { test, expect } from '@playwright/test';
import { readFile, writeFile } from 'node:fs/promises';

const assessments = [
  {
    route: '/services/assessments/stream-selector-test-after-10th/',
    fileName: 'stream-selector-test-after-10th-report.pdf',
    snapshotName: 'stream-selector-after-10th',
  },
  {
    route: '/services/assessments/stream-selector-test-after-12th/',
    fileName: 'career-test-after-12th-report.pdf',
    snapshotName: 'stream-selector-after-12th',
  },
  {
    route: '/services/assessments/career-aptitude-test-after-10th/',
    fileName: 'career-aptitude-test-after-10th-report.pdf',
    snapshotName: 'career-aptitude-after-10th',
  },
  {
    route: '/services/assessments/career-aptitude-test-after-12th/',
    fileName: 'career-aptitude-test-after-12th-report.pdf',
    snapshotName: 'career-aptitude-after-12th',
  },
];

async function completeAssessment(page) {
  const nextButton = page.locator('#btn-next');

  for (let step = 0; step < 45; step += 1) {
    if (await page.locator('#results-container').isVisible()) return;

    const options = page.locator('#q-opts .opt-btn, #q-opts .opt-label');
    const optionCount = await options.count();
    expect(optionCount).toBeGreaterThan(0);
    await options.nth(step % optionCount).click();
    await expect(nextButton).toBeEnabled();
    await nextButton.click();
  }

  throw new Error('Assessment did not finish within the guard limit.');
}

for (const assessment of assessments) {
  test(`${assessment.snapshotName} result and PDF audit`, async ({ page }, testInfo) => {
    const pageErrors = [];
    page.on('pageerror', (error) => pageErrors.push(error.message));

    await page.goto(`http://localhost:4321${assessment.route}`);
    await completeAssessment(page);

    const resultStructure = await page.locator('#results-container').evaluate((container) => ({
      headings: Array.from(container.querySelectorAll('h1,h2,h3,h4,h5,h6'))
        .map((heading) => heading.textContent?.replace(/\s+/g, ' ').trim())
        .filter(Boolean),
      paragraphs: container.querySelectorAll('p').length,
      listItems: container.querySelectorAll('li').length,
      tables: container.querySelectorAll('table').length,
      cards: container.querySelectorAll(
        '.res-card,.result-card,.score-card,.path-stage,.rule-step,.ap-mini,.insight-card'
      ).length,
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
