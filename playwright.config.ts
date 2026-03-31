import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/integration',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? 'github' : 'html',
  use: {
    baseURL: 'http://localhost:5173/tw-jib-css/',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
  webServer: {
    command: 'pnpm dev:docs',
    url: 'http://localhost:5173/tw-jib-css/',
    reuseExistingServer: !process.env.CI,
  },
});
