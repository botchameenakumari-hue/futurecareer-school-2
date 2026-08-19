import { test, expect } from '@playwright/test';

const analyticsRequest = /https:\/\/www\.googletagmanager\.com\/gtag\/js/;

test('Basic Consent Mode works across mobile and desktop', async ({ context, page }) => {
  const requestedAnalyticsScripts = [];
  await page.route(analyticsRequest, async (route) => {
    requestedAnalyticsScripts.push(route.request().url());
    await route.fulfill({ contentType: 'application/javascript', body: '' });
  });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://127.0.0.1:4321/');

  const banner = page.locator('#analytics-consent-banner');
  const manageButton = page.locator('#analytics-consent-manage');
  await expect(banner).toBeVisible();
  await expect(page.getByRole('button', { name: 'Allow analytics' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Decline' })).toBeVisible();
  expect(requestedAnalyticsScripts).toHaveLength(0);

  const initialState = await page.evaluate(() => ({
    choice: localStorage.getItem('fcs-analytics-consent-v1'),
    commands: window.dataLayer.map((entry) => Array.from(entry)),
    viewportWidth: window.innerWidth,
    documentWidth: document.documentElement.scrollWidth,
  }));
  expect(initialState.choice).toBeNull();
  expect(initialState.documentWidth).toBeLessThanOrEqual(initialState.viewportWidth);
  expect(initialState.commands).toContainEqual([
    'consent',
    'default',
    expect.objectContaining({
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    }),
  ]);
  expect(initialState.commands.some((command) => command[0] === 'config')).toBe(false);

  const mobileBounds = await banner.boundingBox();
  expect(mobileBounds.x).toBeGreaterThanOrEqual(0);
  expect(mobileBounds.x + mobileBounds.width).toBeLessThanOrEqual(390);

  const mobileButtonHeights = await banner.locator('button').evaluateAll((buttons) =>
    buttons.map((button) => button.getBoundingClientRect().height)
  );
  expect(Math.min(...mobileButtonHeights)).toBeGreaterThanOrEqual(44);

  await page.getByRole('button', { name: 'Allow analytics' }).click();
  await expect(manageButton).toBeVisible();
  await expect.poll(() => requestedAnalyticsScripts.length).toBe(1);
  await expect.poll(() =>
    page.evaluate(() => localStorage.getItem('fcs-analytics-consent-v1'))
  ).toBe('granted');

  const acceptedCommands = await page.evaluate(() =>
    window.dataLayer.map((entry) => Array.from(entry))
  );
  expect(acceptedCommands).toContainEqual([
    'consent',
    'update',
    expect.objectContaining({
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    }),
  ]);
  expect(acceptedCommands.some((command) => command[0] === 'config')).toBe(true);

  await manageButton.click();
  await expect(banner).toBeVisible();
  await page.getByRole('button', { name: 'Decline' }).click();
  await expect.poll(() =>
    page.evaluate(() => localStorage.getItem('fcs-analytics-consent-v1'))
  ).toBe('denied');

  const secondPage = await context.newPage();
  const secondPageRequests = [];
  await secondPage.route(analyticsRequest, async (route) => {
    secondPageRequests.push(route.request().url());
    await route.fulfill({ contentType: 'application/javascript', body: '' });
  });
  await secondPage.setViewportSize({ width: 1280, height: 800 });
  await secondPage.goto(
    'http://127.0.0.1:4321/blog/ai-future/ai-and-human-skills-needed-india/'
  );

  await expect(secondPage.locator('#analytics-consent-manage')).toBeVisible();
  await expect(secondPage.locator('#analytics-consent-banner')).toBeHidden();
  expect(secondPageRequests).toHaveLength(0);

  await secondPage.locator('#analytics-consent-manage').click();
  const desktopBanner = secondPage.locator('#analytics-consent-banner');
  await expect(desktopBanner).toBeVisible();
  const desktopBounds = await desktopBanner.boundingBox();
  expect(desktopBounds.x).toBeGreaterThanOrEqual(0);
  expect(desktopBounds.x + desktopBounds.width).toBeLessThanOrEqual(1280);
});
