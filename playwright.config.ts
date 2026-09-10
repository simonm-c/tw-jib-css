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
  // A BUILT site, not `vitepress dev`: on the dev server a worker navigating to a
  // new page makes Tailwind rebuild the shared stylesheet, Vite pushes it to every
  // open page, and a worker reading computed styles reads them mid-swap.
  webServer: [
    {
      command: 'pnpm exec vitepress preview docs --port 5173',
      url: 'http://localhost:5173/tw-jib-css/',
      reuseExistingServer: !process.env.CI,
    },
    {
      command: 'pnpm exec vitepress preview docs-experimental --port 5174',
      url: 'http://localhost:5174/tw-jib-css/experimental/',
      reuseExistingServer: !process.env.CI,
    },
  ],
});

export const EXPERIMENTAL_BASE = 'http://localhost:5174/tw-jib-css/experimental/';
