# Flaky Test Analysis

## Goal
Identify tests that are unreliable across repeated runs and separate real application regressions from intermittent automation problems.

## Signals of Flakiness
- Intermittent assertion failures on the same code path
- Rerun passes after one failure
- Browser timing differences between local and CI runs
- Inconsistent selectors or race conditions

## Investigation Steps
1. Run the same test multiple times.
2. Capture screenshots, traces, and logs for each failure.
3. Compare DOM state and network responses.
4. Determine whether the problem is locator instability, timing, or environment-specific behavior.
5. Record whether the root cause is a test design issue or a product defect.

## Stabilization Recommendations
- Prefer robust selectors over brittle CSS or text-only assumptions.
- Use Playwright auto-waiting patterns rather than hardcoded waits.
- Isolate test data and avoid shared state.
- Keep assertions meaningful and not overly dependent on demo-content specifics.

## Reporting Guidance
- Report flaky patterns along with reproduction frequency.
- Do not classify all intermittent failures as application defects.
- Include rerun evidence and the outcome of self-healing attempts where applicable.
