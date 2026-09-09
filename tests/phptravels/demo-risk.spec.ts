// spec: specs/phptravels-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('PHPTravels demo environment and risk coverage', () => {
  test('Demo notice and critical routes remain available', async ({ page }) => {
    // 1. Confirm the demo-environment notice communicates simulated pricing and non-production behavior.
    await page.goto('/');
    await expect(page).toHaveTitle(/PHPTRAVELS/i);

    const notice = page.getByRole('heading', { name: /Important Notice: Demo Environment/i });
    if (await notice.isVisible().catch(() => false)) {
      await expect(page.locator('body')).toContainText(/demo|simulated|testing|non-production|pricing/i);
      await page.getByRole('button', { name: /I Understand & Continue/i }).click();
    }

    // 2. Check critical navigation paths for stale or error pages.
    for (const route of ['/stays', '/flights', '/visa', '/login']) {
      await page.goto(route);
      await expect(page.locator('body')).not.toContainText(/404|500|Not Found|Internal Server Error/i);
      await expect(page.locator('body')).toContainText(/PHPTRAVELS|Stays|Flights|Visa|Login|Welcome Back/i);
    }
  });
});
