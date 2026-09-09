// spec: specs/phptravels-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('PHPTravels responsive coverage', () => {
  test('Homepage and key category pages remain usable on mobile and desktop sizes', async ({ page }) => {
    // 1. Test the homepage and key category pages in desktop and mobile viewport widths.
    const pages = ['/', '/stays', '/flights', '/visa', '/login'];

    for (const route of pages) {
      await page.setViewportSize({ width: 1440, height: 1100 });
      await page.goto(route);
      await expect(page.locator('body')).toContainText(/PHPTRAVELS|Stays|Flights|Visa|Login|Welcome Back/i);
      await expect(page.locator('body')).not.toContainText(/404|Not Found/i);

      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto(route);
      await expect(page.locator('body')).toContainText(/PHPTRAVELS|Stays|Flights|Visa|Login|Welcome Back/i);
      const noticeButton = page.getByRole('button', { name: /I Understand & Continue/i });
      if (await noticeButton.isVisible().catch(() => false)) {
        await noticeButton.click();
      }
    }
  });
});
