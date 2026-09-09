import { expect, test } from '@playwright/test';

test.use({ channel: 'chrome' });

const legacyRoutes = [
  '/coaches-dashboard',
  '/school-career-dashboard',
  '/intermediate-career-dashboard',
  '/parents-career-dashboard',
  '/student-career-dashboard',
  '/university-career-dashboard',
];

for (const route of legacyRoutes) {
  test(`${route} directs visitors to the current coaching workspace`, async ({ page }) => {
    await page.goto(`http://127.0.0.1:4321${route}`, { waitUntil: 'domcontentloaded' });
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
    const handoff = page.getByRole('link', { name: 'the Career Operations workspace' });
    await expect(handoff).toBeVisible();
    await expect(handoff).toHaveAttribute('href', '/dashboard');
  });
}

