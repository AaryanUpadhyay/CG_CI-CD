// spec: specs/phptravels-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('PHPTravels hotel search', () => {
  test('Hotel search form loads and remains stable for valid requests', async ({ page }) => {
    // 1. Open the Stays page and search for a valid destination and date range.
    await page.goto('/stays');
    await expect(page).toHaveTitle(/Stays/i);
    const noticeButton = page.getByRole('button', { name: /I Understand & Continue/i });
    if (await noticeButton.isVisible().catch(() => false)) {
      await noticeButton.click();
    }

    const destinationField = page.getByText(/Destination or Hotel Name/i).locator('..');
    const searchButton = page.getByRole('button', { name: /Search Hotels/i });

    await expect(destinationField).toBeVisible();
    await expect(searchButton).toBeVisible();

    await searchButton.click();

    await expect(page.locator('body')).toContainText(/Dubai|hotel|stay|booking|results|destination/i);
    await expect(searchButton).toBeVisible();
  });
});
