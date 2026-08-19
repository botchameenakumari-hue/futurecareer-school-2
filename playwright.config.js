import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 120_000,
  expect: {
    timeout: 10_000,
  },
  fullyParallel: false,
  workers: 1,
  reporter: 'line',
  use: {
    acceptDownloads: true,
    channel: 'chrome',
    headless: true,
  },
  webServer: {
    command: 'corepack pnpm preview --host 127.0.0.1',
    port: 4321,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
