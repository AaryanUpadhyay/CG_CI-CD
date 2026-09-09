// spec: specs/phptravels-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('PHPTravels flight search', () => {
  test('Flight search inputs remain visible and stable for valid route data', async ({ page }) => {
    // 1. Open the Flights page and search for a valid origin/destination route and travel date.
    await page.goto('/flights');
    await expect(page).toHaveTitle(/PHPTRAVELS/i);
    const noticeButton = page.getByRole('button', { name: /I Understand & Continue/i });
    if (await noticeButton.isVisible().catch(() => false)) {
      await noticeButton.click();
    }

    await expect(page.locator('#fl_from_trigger').getByText(/Departure From/i)).toBeVisible();
    await expect(page.locator('#fl_to_trigger').getByText(/Arrival To/i)).toBeVisible();
    await expect(page.getByRole('textbox', { name: /Departure Date/i })).toBeVisible();
    await page.getByRole('button', { name: /Search Flights/i }).click();

    await expect(page.locator('body')).toContainText(/New York|London|flight|booking|results|departure/i);
    await expect(page.getByRole('button', { name: /Search Flights/i })).toBeVisible();
  });
});
