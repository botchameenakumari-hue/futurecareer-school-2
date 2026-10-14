import { test, expect } from '@playwright/test';

test('education payback planner calculates direct and opportunity cost locally', async ({ page }) => {
  test.setTimeout(30_000);
  await page.goto('/tools/education-cost-payback-planner/', { waitUntil: 'domcontentloaded', timeout: 15_000 });
  await expect(page.locator('#education-payback-planner')).toBeVisible();
  await expect(page.locator('.epp-note')).toContainText('Nothing is saved or sent');

  await page.locator('[data-epp="fees"]').fill('120000');
  await page.locator('[data-epp="living"]').fill('10000');
  await page.locator('[data-epp="years"]').fill('2');
  await page.locator('[data-epp="opportunity"]').fill('5000');
  await page.locator('[data-epp="aid"]').fill('20000');
  await page.locator('[data-epp="income"]').fill('50000');
  await page.locator('[data-epp="essentials"]').fill('30000');
  await page.getByRole('button', { name: 'Calculate my planning range' }).click();

  await expect(page.locator('[data-epp-result="direct"]')).toContainText('₹3,40,000');
  await expect(page.locator('[data-epp-result="opportunity"]')).toContainText('₹1,20,000');
  await expect(page.locator('[data-epp-result="exposure"]')).toContainText('₹4,60,000');
  await expect(page.locator('[data-epp-result="surplus"]')).toContainText('₹20,000');
  await expect(page.locator('.epp-results')).toBeVisible();

  await page.getByRole('button', { name: 'Reset' }).click();
  await expect(page.locator('.epp-results')).toBeHidden();
});

test('education payback planner does not expose a negative cost when aid exceeds fees', async ({ page }) => {
  await page.goto('/tools/education-cost-payback-planner/', { waitUntil: 'domcontentloaded', timeout: 15_000 });
  await page.locator('[data-epp="fees"]').fill('10000');
  await page.locator('[data-epp="living"]').fill('0');
  await page.locator('[data-epp="years"]').fill('1');
  await page.locator('[data-epp="aid"]').fill('20000');
  await page.locator('[data-epp="income"]').fill('10000');
  await page.locator('[data-epp="essentials"]').fill('10000');
  await page.getByRole('button', { name: 'Calculate my planning range' }).click();
  await expect(page.locator('[data-epp-result="direct"]')).toContainText('₹0');
  await expect(page.locator('[data-epp-result="direct-payback"]')).not.toContainText('-');
});
