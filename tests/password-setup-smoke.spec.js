import { expect, test } from '@playwright/test';

test.use({ channel: 'chrome' });

const projectUrl = 'https://txlbmbslaayxuwxcksxo.supabase.co';
const storageKey = 'fcs-txlbmbslaayxuwxcksxo-auth-v1';
const userId = '11111111-1111-4111-8111-111111111111';
const branchId = '22222222-2222-4222-8222-222222222222';
const adminId = '33333333-3333-4333-8333-333333333333';

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile', width: 390, height: 844 },
];

function authUser() {
  const timestamp = new Date().toISOString();
  return {
    id: userId,
    aud: 'authenticated',
    role: 'authenticated',
    email: 'branch.head@example.test',
    email_confirmed_at: timestamp,
    confirmed_at: timestamp,
    app_metadata: { provider: 'email', providers: ['email'] },
    user_metadata: { full_name: 'Sirisha Branch Head' },
    identities: [],
    created_at: timestamp,
    updated_at: timestamp,
  };
}

function profile() {
  const timestamp = new Date().toISOString();
  return {
    id: userId,
    email: 'branch.head@example.test',
    full_name: 'Sirisha Branch Head',
    role: 'branch_head',
    account_status: 'active',
    branch_id: branchId,
    supervisor_id: adminId,
    stage: null,
    city: null,
    target_outcome: null,
    onboarding_completed: false,
    must_change_password: true,
    setup_email_sent_at: timestamp,
    password_set_at: null,
    created_at: timestamp,
    updated_at: timestamp,
  };
}

function fakeAccessToken(user, expiresAt) {
  const encode = (value) => Buffer.from(JSON.stringify(value)).toString('base64url');
  const header = encode({ alg: 'HS256', typ: 'JWT' });
  const payload = encode({ aud: 'authenticated', exp: expiresAt, sub: user.id, email: user.email, role: 'authenticated' });
  return `${header}.${payload}.test-signature`;
}

async function mockApprovedInvite(page) {
  const now = Math.floor(Date.now() / 1000);
  const user = authUser();
  await page.addInitScript(({ key, session }) => {
    window.localStorage.setItem(key, JSON.stringify(session));
  }, {
    key: storageKey,
    session: {
      access_token: fakeAccessToken(user, now + 3600),
      refresh_token: 'test-refresh-token',
      expires_in: 3600,
      expires_at: now + 3600,
      token_type: 'bearer',
      user,
    },
  });

  await page.route(`${projectUrl}/**`, async (route) => {
    const request = route.request();
    const url = new URL(request.url());
    const headers = {
      'access-control-allow-origin': '*',
      'access-control-allow-headers': 'authorization, x-client-info, apikey, content-type, prefer',
      'access-control-allow-methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
      'access-control-expose-headers': 'Content-Range',
      'content-type': 'application/json',
      'content-range': '0-0/1',
    };

    if (request.method() === 'OPTIONS') {
      await route.fulfill({ status: 204, headers, body: '' });
      return;
    }

    if (url.pathname === '/auth/v1/user') {
      await route.fulfill({ status: 200, headers, body: JSON.stringify(user) });
      return;
    }

    if (url.pathname === '/rest/v1/profiles') {
      const wantsObject = (request.headers().accept ?? '').includes('application/vnd.pgrst.object+json');
      await route.fulfill({ status: 200, headers, body: JSON.stringify(wantsObject ? profile() : [profile()]) });
      return;
    }

    if (url.pathname === '/rest/v1/branches') {
      await route.fulfill({
        status: 200,
        headers,
        body: JSON.stringify([{ id: branchId, name: 'Test Branch', code: 'TEST', city: 'Local', status: 'active' }]),
      });
      return;
    }

    if (url.pathname === '/functions/v1/manage-accounts') {
      const payload = request.postDataJSON();
      expect(payload.action).toBe('complete-password-setup');
      expect(payload.newPassword).toBe('open-safe');
      await route.fulfill({
        status: 200,
        headers,
        body: JSON.stringify({ message: 'Password setup completed.', completedAt: new Date().toISOString() }),
      });
      return;
    }

    if (url.pathname.startsWith('/rest/v1/')) {
      await route.fulfill({ status: 200, headers, body: '[]' });
      return;
    }

    await route.fulfill({ status: 200, headers, body: '{}' });
  });
}

for (const viewport of viewports) {
  test(`approved invitation sets the first password on ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await mockApprovedInvite(page);
    await page.goto('http://127.0.0.1:4321/dashboard#type=invite', { waitUntil: 'domcontentloaded' });

    await expect(page.locator('#password-setup-panel')).toBeVisible({ timeout: 10_000 });
    await expect(page.getByRole('heading', { name: 'Create your password' })).toBeVisible();
    await expect(page.locator('#sign-in-form')).toBeHidden();

    await page.locator('#new-password').fill('123');
    await page.locator('#confirm-password').fill('123');
    await page.locator('#password-setup-submit').click();
    await expect(page.locator('#password-setup-status')).toHaveText('Use at least 8 characters. Any characters are fine.');

    await page.locator('#new-password').fill('open-safe');
    await expect(page.locator('[data-password-check].is-met')).toHaveCount(1);
    await page.locator('#confirm-password').fill('nope');
    await page.locator('#password-setup-submit').click();
    await expect(page.locator('#password-setup-status')).toHaveText('The two passwords do not match.');

    await page.locator('#confirm-password').fill('open-safe');
    await page.locator('#password-setup-submit').click();
    await expect(page.locator('#workspace-shell')).toBeVisible();
    await expect(page.locator('#workspace-status')).toContainText('Password saved.');

    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    expect(overflow).toBe(0);
  });
}

test('a temporary password cannot open the workspace until it is replaced', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await mockApprovedInvite(page);
  await page.goto('http://127.0.0.1:4321/dashboard', { waitUntil: 'domcontentloaded' });

  await expect(page.locator('#password-setup-panel')).toBeVisible({ timeout: 10_000 });
  await expect(page.getByRole('heading', { name: 'Replace your temporary password' })).toBeVisible();
  await expect(page.locator('#workspace-shell')).toBeHidden();
  await expect(page.locator('#password-setup-email')).toHaveValue('branch.head@example.test');

  await page.locator('#new-password').fill('abc');
  await page.locator('#confirm-password').fill('abc');
  await page.locator('#password-setup-submit').click();
  await expect(page.locator('#password-setup-status')).toHaveText('Use at least 8 characters. Any characters are fine.');

  await page.locator('#new-password').fill('open-safe');
  await page.locator('#confirm-password').fill('open-safe');
  await page.locator('#password-setup-submit').click();
  await expect(page.locator('#workspace-shell')).toBeVisible();
  await expect(page.locator('#workspace-status')).toContainText('Password saved. Your account is ready.');
});
