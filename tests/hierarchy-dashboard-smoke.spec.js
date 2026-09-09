import { expect, test } from '@playwright/test';

test.use({ channel: 'chrome' });

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];

for (const viewport of viewports) {
  test(`hierarchy dashboard settles cleanly on ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    // Supabase appends redirect_to as a query string; include it in the glob
    // so the deterministic recovery response is intercepted in every browser.
    await page.route('**/auth/v1/recover**', async (route) => {
      await route.fulfill({
        status: 200,
        headers: {
          'access-control-allow-origin': '*',
          'content-type': 'application/json',
        },
        body: '{}',
      });
    });
    await page.goto('http://127.0.0.1:4321/dashboard', { waitUntil: 'domcontentloaded' });

    await expect(page.locator('#auth-shell')).toBeVisible({ timeout: 10_000 });
    await expect(page.locator('#workspace-boot')).toBeHidden();
    await expect(page.locator('#sign-in-email')).toBeVisible();
    await expect(page.locator('#sign-in-password')).toBeVisible();
    await expect(page.getByRole('tab', { name: 'Set or reset password' })).toBeVisible();
    await expect(page.locator('.hierarchy-preview')).toHaveCount(0);
    await expect(page.locator('.auth-entry')).not.toContainText('hierarchy');

    const unlabeledDialogs = await page.locator('dialog').evaluateAll((dialogs) => dialogs
      .filter((dialog) => {
        const labelledBy = dialog.getAttribute('aria-labelledby');
        return !labelledBy || !dialog.ownerDocument.getElementById(labelledBy);
      })
      .map((dialog) => dialog.id));
    expect(unlabeledDialogs).toEqual([]);

    await page.getByRole('tab', { name: 'Set or reset password' }).click();
    await expect(page.locator('#recovery-request-panel')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Set or reset password' })).toBeVisible();
    await expect(page.locator('#sign-in-panel')).toBeHidden();
    await page.locator('#recovery-email').fill('approved@example.com');
    const recoveryRequest = page.waitForRequest((request) => request.url().includes('/auth/v1/recover'));
    await page.locator('#recovery-submit').click();
    const sent = await recoveryRequest;
    expect(sent.postDataJSON().email).toBe('approved@example.com');
    await expect(page.locator('#recovery-status')).toContainText('If this is an approved account');

    await page.getByRole('tab', { name: 'Sign in' }).click();
    await expect(page.locator('#sign-in-panel')).toBeVisible();
    await expect(page.locator('#sign-in-email')).toHaveValue('approved@example.com');

    const decline = page.getByRole('button', { name: 'Decline', exact: true });
    if (await decline.isVisible().catch(() => false)) await decline.click();

    const overflow = await page.evaluate(() => {
      const viewportWidth = document.documentElement.clientWidth;
      const offenders = [...document.querySelectorAll('body *')]
        .filter((element) => {
          if (!(element instanceof HTMLElement) || element.hidden) return false;
          const style = window.getComputedStyle(element);
          if (style.position === 'fixed' || style.display === 'none') return false;
          const rect = element.getBoundingClientRect();
          return rect.width > 0 && (rect.left < -1 || rect.right > viewportWidth + 1);
        })
        .slice(0, 8)
        .map((element) => `${element.tagName.toLowerCase()}#${element.id}.${element.className}`);

      return {
        documentOverflow: document.documentElement.scrollWidth - viewportWidth,
        offenders,
      };
    });

    expect(overflow, JSON.stringify(overflow, null, 2)).toEqual({
      documentOverflow: 0,
      offenders: [],
    });
  });
}
