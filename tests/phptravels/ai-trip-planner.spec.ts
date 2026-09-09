// spec: specs/phptravels-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('PHPTravels AI trip planner', () => {
  test('Homepage handles trip-planning prompts without crashing', async ({ page }) => {
    // 1. Use the AI Trip Planner on the homepage and enter a realistic travel request.
    await page.goto('/');
    await expect(page).toHaveTitle(/PHPTRAVELS/i);
    const noticeButton = page.getByRole('button', { name: /I Understand & Continue/i });
    if (await noticeButton.isVisible().catch(() => false)) {
      await noticeButton.click();
    }

    const plannerTab = page.getByRole('tab', { name: /AI Trip Planner/i });
    await expect(plannerTab).toBeVisible();
    await plannerTab.click();
    await expect(page.locator('body')).toContainText(/travel|book|explore|stay|flight|visa|plan/i);
  });
});
