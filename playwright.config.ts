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
  // Two instances, two servers. The experimental docs are a separate VitePress
  // instance because the experimental package overrides utilities the stable one
  // defines — see docs-experimental/.vitepress/theme/tailwind.css. Specs that
  // exercise experimental fixtures use EXPERIMENTAL_BASE below rather than
  // baseURL.
  webServer: [
    {
      command: 'pnpm dev:docs',
      url: 'http://localhost:5173/tw-jib-css/',
      reuseExistingServer: !process.env.CI,
    },
    {
      command: 'pnpm dev:docs:experimental',
      url: 'http://localhost:5174/tw-jib-css/experimental/',
      reuseExistingServer: !process.env.CI,
    },
  ],
});

/** Base URL of the experimental docs instance, for specs on its fixtures. */
export const EXPERIMENTAL_BASE = 'http://localhost:5174/tw-jib-css/experimental/';
