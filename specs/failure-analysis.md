# Failure Analysis

## Purpose
This document captures the process for classifying Playwright test failures so that issues are routed correctly to the appropriate remediation path.

## Failure Categories
1. Automation issue
2. Environment or infrastructure issue
3. Test data issue
4. Application defect
5. Flaky or unstable test
6. Missing or incorrect validation

## Investigation Checklist
- Reproduce the failure with the current test code.
- Inspect the stack trace, assertions, and page state.
- Check whether selectors or locators changed.
- Verify the test data and environment configuration.
- Determine whether the issue is product behavior or test design.

## Outcome Rules
- If a locator is stale or the DOM changed, route to the self-healing or automation path.
- If the failure occurs intermittently across reruns, route to flaky-test analysis.
- If the product behavior differs from the expected outcome, create a bug report only after validation.
- If an assertion is too strict or incorrect, fix the test rather than weakening it.

## Example Classification
- Selector mismatch on a form field → automation issue / self-healing candidate
- Browser timeout in CI due to missing dependency → environment issue
- Search result mismatch caused by invalid test data → test data issue
- Product page showing incorrect pricing text → confirmed application defect
