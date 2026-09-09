// spec: specs/phptravels-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('PHPTravels authentication', () => {
  test('Login form validates visible fields and failed login attempts without breaking state', async ({ page }) => {
    // 1. Open the Login page and verify it contains email and password fields with a Sign In action.
    await page.goto('/login');
    await expect(page).toHaveTitle(/Login/i);
    const noticeButton = page.getByRole('button', { name: /I Understand & Continue/i });
    if (await noticeButton.isVisible().catch(() => false)) {
      await noticeButton.click();
    }

    await expect(page.getByText('Welcome Back')).toBeVisible();
    await expect(page.getByLabel(/Email Address/i)).toBeVisible();
    await expect(page.getByLabel(/Password/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /Sign In to your account/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Forgot Password/i })).toBeVisible();
    await expect(page.getByRole('link', { name: /Signup/i })).toBeVisible();

    // 2. Attempt login with invalid email/password and with empty required fields.
    await page.getByLabel(/Email Address/i).fill('invalid@example.com');
    await page.getByLabel(/Password/i).fill('wrongpassword');
    await page.getByRole('button', { name: /Sign In to your account/i }).click();

    await expect(page.locator('body')).toContainText(/invalid|error|incorrect|failed|wrong/i);
    await expect(page.getByRole('button', { name: /Sign In to your account/i })).toBeVisible();
  });
});
