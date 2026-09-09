# Bug Report Triage

## Decision

**No product bug raised.**

The latest Allure run contained two broken tests, but the evidence indicates live-site navigation, network, timing, and test-isolation problems. No confirmed application failure was observed.

## Candidate 1: Responsive Navigation Timeout

### Bug Title

Not raised: Responsive test timed out during live `/login` navigation

### Module

Responsive test execution and live-site navigation

### Environment

- Application: PHPTravels public demo site
- URL: `https://phptravels.net`
- Browser: Chromium
- Reporter: Allure
- Test timeout: 30 seconds

### Preconditions

- Playwright suite is configured against the public PHPTravels site.
- The responsive test loops through five routes at desktop and mobile viewport sizes.

### Steps to Reproduce

1. Run `tests/phptravels/responsive.spec.ts`.
2. Navigate through `/`, `/stays`, `/flights`, `/visa`, and `/login`.
3. Repeat each route at desktop and mobile viewport sizes.

### Expected Result

Each route loads successfully at both viewport sizes and the primary page content remains usable.

### Actual Result

Allure recorded a 30-second timeout and the navigation error:

```text
net::ERR_ABORTED; maybe frame was detached?
```

The captured page still displayed valid PHPTravels content, including the Visa page and footer.

### Severity

Not applicable: product defect not confirmed.

### Priority

Not applicable.

### Reproducibility

Unknown/intermittent.

### Evidence

- Allure result status: `broken`
- Error: `Test timeout of 30000ms exceeded`
- Error context: `allure-results/8352f0ce-64ac-492f-b9ff-90157a2282ee-attachment.md`
- Associated test: `tests/phptravels/responsive.spec.ts`

### Classification

Environment / API-network / timing-synchronization / automation test-isolation issue.

### Recommended Action

Split route and viewport combinations into independent tests, use fresh page state for each combination, and rerun the isolated `/login` mobile case. Raise a product bug only if the failure reproduces with a direct browser check and a stable network.

### Automation Test

`tests/phptravels/responsive.spec.ts`

### Bug Should Be Raised

**No.**

## Candidate 2: Demo-Risk Route Loop Timeout

### Bug Title

Not raised: Demo-risk route loop timed out during live navigation

### Module

Demo-risk critical-route smoke coverage

### Environment

- Application: PHPTravels public demo site
- URL: `https://phptravels.net`
- Browser: Chromium
- Reporter: Allure
- Test timeout: 30 seconds

### Preconditions

- Playwright runs `tests/phptravels/demo-risk.spec.ts` against the public site.
- The test sequentially navigates to `/stays`, `/flights`, `/visa`, and `/login`.

### Steps to Reproduce

1. Run `tests/phptravels/demo-risk.spec.ts`.
2. Open the homepage and handle the optional demo notice.
3. Navigate through the four critical routes in sequence.

### Expected Result

Each critical route loads without a 404, 500, or broken application state.

### Actual Result

Allure recorded a 30-second timeout during the route loop. The captured final page was a valid Login page with the expected form, navigation, and footer content.

### Severity

Not applicable: product defect not confirmed.

### Priority

Not applicable.

### Reproducibility

Unknown/intermittent.

### Evidence

- Allure result status: `broken`
- Error: `Test timeout of 30000ms exceeded`
- Error context: `allure-results/1b442c1a-df52-4628-bb00-5adc835a179e-attachment.md`
- Associated test: `tests/phptravels/demo-risk.spec.ts`

### Classification

Environment / API-network / timing-synchronization / automation test-isolation issue.

### Recommended Action

Split the route loop into independent tests, replace body-wide assertions with route-specific headings and titles, and rerun each route in isolation. Raise a product bug only if a specific route consistently returns an application error or incorrect page.

### Automation Test

`tests/phptravels/demo-risk.spec.ts`

### Bug Should Be Raised

**No.**

## Final Triage Summary

| Candidate | Allure Status | Classification | Bug Raised |
|---|---|---|---|
| Responsive navigation timeout | Broken | Network/timing/test isolation | No |
| Demo-risk route timeout | Broken | Network/timing/test isolation | No |

The latest Allure run was **10 passed, 2 broken, 0 skipped**. The failures do not contain sufficient evidence of an application defect for a Jira bug report.
