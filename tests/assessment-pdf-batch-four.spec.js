import { test, expect } from '@playwright/test';
import { readFile, writeFile } from 'node:fs/promises';
const reportFileName = 'future-career-school-big-5-career-personality-report.pdf';

test('big-five result and PDF audit', async ({ page }, testInfo) => {
  const pageErrors = [];
  page.on('pageerror', (error) => pageErrors.push(error.message));

  await page.goto(
    'http://localhost:4321/services/assessments/big-5-personality-test-careers/'
  );
  await page.locator('.audience-option').first().click();
  await page.locator('#start-button').click();

  for (let step = 0; step < 40; step += 1) {
    const options = page.locator('#scale-options button');
    await options.nth(step % 5).click();
    await expect(page.locator('#next-button')).toBeEnabled();
    await page.locator('#next-button').click();
  }

  await expect(page.locator('#result-shell')).toBeVisible();
  const resultStructure = await page.locator('#result-shell').evaluate((container) => ({
    headings: Array.from(container.querySelectorAll('h1,h2,h3,h4,h5,h6'))
      .map((heading) => heading.textContent?.replace(/\s+/g, ' ').trim())
      .filter(Boolean),
    paragraphs: container.querySelectorAll('p').length,
    listItems: container.querySelectorAll('li').length,
    articles: container.querySelectorAll('article').length,
    traitResults: container.querySelectorAll('.trait-result').length,
    facetCards: container.querySelectorAll('.facet-card').length,
    responseRows: container.querySelectorAll('.response-row').length,
    textLength: container.innerText.length,
  }));

  expect(resultStructure.traitResults).toBe(5);
  expect(resultStructure.facetCards).toBe(20);
  expect(resultStructure.responseRows).toBe(40);
  await writeFile(
    testInfo.outputPath('big-five-structure.json'),
    JSON.stringify(resultStructure, null, 2)
  );

  const downloadPromise = page.waitForEvent('download');
  await page.locator('[data-download-assessment-report]').click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe(reportFileName);

  const pdfPath = testInfo.outputPath(reportFileName);
  await download.saveAs(pdfPath);
  const pdfBytes = await readFile(pdfPath);
  expect(pdfBytes.subarray(0, 5).toString()).toBe('%PDF-');
  expect(pdfBytes.length).toBeGreaterThan(1000);
  expect(pageErrors).toEqual([]);
});
