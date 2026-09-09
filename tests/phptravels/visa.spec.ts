// spec: specs/phptravels-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('PHPTravels visa flow', () => {
  test('Visa page loads with the expected form fields and CTA', async ({ page }) => {
    // 1. Open the Visa page and review the visa search form fields such as destination, date, and traveler count.
    await page.goto('/visa');
    await expect(page).toHaveTitle(/Visa/i);
    const noticeButton = page.getByRole('button', { name: /I Understand & Continue/i });
    if (await noticeButton.isVisible().catch(() => false)) {
      await noticeButton.click();
    }

    await expect(page.getByRole('button', { name: /Check Visa/i })).toBeVisible();
    await expect(page.getByRole('textbox', { name: /Date/i })).toBeVisible();
    await expect(page.locator('#vfc_t').getByText(/From Country/i)).toBeVisible();
    await expect(page.locator('#vtc_t').getByText(/To Country/i)).toBeVisible();

    await expect(page.getByRole('button', { name: /Check Visa/i })).toBeVisible();
  });
});
