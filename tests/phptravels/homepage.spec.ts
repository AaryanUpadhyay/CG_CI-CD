// spec: specs/phptravels-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('PHPTravels Core Functional Coverage', () => {
  test('Homepage and navigation smoke coverage', async ({ page }) => {
    // 1. Open the homepage at https://phptravels.net and confirm the page loads without fatal rendering issues.
    await page.goto('/');
    await expect(page).toHaveTitle(/PHPTRAVELS/i);

    // 2. Review the main travel categories, demo notice, and header CTA links.
    const noticeButton = page.getByRole('button', { name: /I Understand & Continue/i });
    if (await noticeButton.isVisible().catch(() => false)) {
      await noticeButton.click();
    }

    await expect(page.getByRole('tab', { name: /Stays/i })).toBeVisible();
    await expect(page.getByRole('tab', { name: /Flights/i })).toBeVisible();
    await expect(page.getByRole('tab', { name: /Visa/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Login/i }).first()).toBeVisible();
    await expect(page.getByRole('button', { name: /Signup/i }).first()).toBeVisible();

    await expect(page.locator('body')).toContainText(/Stays Booking|Flights Booking|Visa Booking/i);
    await expect(page.locator('body')).toContainText(/Privacy Policy|Terms of Use|Cookies Policy|Contact us|About us/i);
  });
});
