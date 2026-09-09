import { test, expect } from '@playwright/test';

test('career decision route is a dedicated dashboard page', async ({ page }) => {
  await page.goto('http://127.0.0.1:4321/dashboard/career-decision', { waitUntil: 'domcontentloaded' });
  await expect(page).toHaveTitle(/Choose a career option/i);
  await expect(page.locator('#hierarchy-workspace')).toHaveAttribute('data-career-decision-page', 'true');
  await expect(page.locator('#career-option-dialog')).toHaveClass(/career-decision-screen/);
});

test('career decision starts with a clear manual option and functional catalogue controls', async ({ page }) => {
  await page.goto('http://127.0.0.1:4321/dashboard/career-decision', { waitUntil: 'domcontentloaded' });
  const order = await page.locator('#career-option-dialog .dialog-body').evaluate((body) => {
    const starter = body.querySelector('#career-stage-start');
    const library = body.querySelector('#career-preset-picker');
    const custom = body.querySelector('#career-custom-entry');
    return {
      starter: starter ? [...body.children].indexOf(starter) : -1,
      library: library ? [...body.children].indexOf(library) : -1,
      customInsideLibrary: Boolean(custom && library?.contains(custom)),
    };
  });
  expect(order.starter).toBeGreaterThanOrEqual(0);
  expect(order.starter).toBeLessThan(order.library);
  expect(order.customInsideLibrary).toBe(true);
  await expect(page.locator('.career-quick-nav [data-career-anchor]')).toHaveCount(3);
  await expect(page.locator('#career-custom-name')).toHaveAttribute('placeholder', /For example/i);
});
