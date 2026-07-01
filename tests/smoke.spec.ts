import { test, expect } from '@playwright/test';

test('smoke: framework is wired up correctly', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
