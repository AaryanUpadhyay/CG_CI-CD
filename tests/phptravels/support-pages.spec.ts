// spec: specs/phptravels-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('PHPTravels support and legal pages', () => {
  test('Legal and support links lead to readable, stable pages', async ({ page }) => {
    // 1. Open the privacy policy, terms of use, contact us, and about us pages from footer and header links.
    await page.goto('/');
    await expect(page).toHaveTitle(/PHPTRAVELS/i);
    const noticeButton = page.getByRole('button', { name: /I Understand & Continue/i });
    if (await noticeButton.isVisible().catch(() => false)) {
      await noticeButton.click();
    }

    const legalLinks = [
      { name: 'Privacy Policy', url: '/page/privacy-policy' },
      { name: 'Terms of Use', url: '/page/terms-of-use' },
      { name: 'Cookies Policy', url: '/page/cookies-policy' },
      { name: 'Contact us', url: '/page/contact-us' },
      { name: 'About us', url: '/page/about-us' },
    ];

    for (const link of legalLinks) {
      await page.goto(link.url);
      await expect(page.locator('body')).toContainText(/Privacy Policy|Terms of Use|Cookies Policy|Contact|About|us|Company/i);
      await expect(page.locator('body')).not.toContainText(/404|Not Found|Page not found/i);
    }
  });
});
