import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  globalSetup: './tests/playwright-global-setup.mjs',
  timeout: 120_000,
  expect: {
    timeout: 10_000,
  },
  fullyParallel: false,
  workers: 1,
  reporter: 'line',
  use: {
    acceptDownloads: true,
    headless: true,
    baseURL: 'http://127.0.0.1:4321',
  },
});
