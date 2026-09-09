# Test Case Document

## Project: PHPTravels Demo Site
## URL: https://phptravels.net
## Scope: Homepage, travel category flows, login, support pages, and demo-environment validation

| Test ID | Scenario | Preconditions | Steps | Expected Result | Priority | Automation |
|---|---|---|---|---|---|---|
| TC-01 | Homepage loads successfully | User has internet access and opens the site | 1. Navigate to https://phptravels.net. 2. Observe page renders. | Page loads successfully; title contains PHPTRAVELS; hero section is visible. | P0 | Yes |
| TC-02 | Main navigation links are visible | Homepage is open | 1. Review the header navigation. | Stays, Flights, Visa, Login, and Signup links are visible and clickable. | P0 | Yes |
| TC-03 | Demo notice is displayed | Homepage is open | 1. Locate the warning banner or notice. | Demo environment warning is visible and clearly states pricing is simulated and payments are not real. | P1 | Yes |
| TC-04 | Hotel search works with valid data | User is on the homepage | 1. Click Stays. 2. Enter a valid destination and date range. 3. Submit search. | Search form accepts input and moves to a valid results or next-step page without runtime errors. | P0 | Yes |
| TC-05 | Hotel search blocks incomplete data | User is on the hotel search form | 1. Leave destination blank or use invalid date order. 2. Submit. | Submission is blocked or validation message appears; the user remains on the form. | P0 | Yes |
| TC-06 | Hotel room and guest selection updates correctly | User is on hotel search | 1. Open room/guest selector. 2. Increase/decrease adults/rooms. | Counts update correctly and match the selected configuration. | P1 | Yes |
| TC-07 | Flight search works with valid route | User is on the homepage | 1. Click Flights. 2. Enter valid route and date. 3. Submit. | Search proceeds to results or next-step page without error. | P0 | Yes |
| TC-08 | Flight search rejects invalid route/date data | User is on flight search form | 1. Submit incomplete or reversed trip data. | Validation message or blocked submit appears; page remains stable. | P0 | Yes |
| TC-09 | Visa page loads and accepts input | User is on the homepage | 1. Click Visa. 2. Review form fields. 3. Enter sample valid data. | Visa form loads with required fields and accepts valid input. | P1 | Yes |
| TC-10 | Visa form rejects incomplete details | User is on the visa form | 1. Submit missing required details. | User gets validation or graceful fallback without broken UI. | P1 | Yes |
| TC-11 | AI Trip Planner accepts valid prompt | User is on homepage | 1. Enter a realistic trip description. 2. Submit. | Planner accepts prompt and displays a response or planning workflow. | P1 | Yes |
| TC-12 | AI Trip Planner handles invalid/blank prompt | User is on trip planner | 1. Submit blank or nonsensical prompt. | System blocks or handles gracefully; no broken state appears. | P1 | Yes |
| TC-13 | User can access login page | Homepage is open | 1. Click Login. | Login page loads with email, password, and sign-in controls visible. | P0 | Yes |
| TC-14 | Valid login succeeds | User has valid credentials | 1. Enter valid login details. 2. Click Sign In. | User is redirected to the authenticated area and sees a logged-in state. | P0 | Yes |
| TC-15 | Invalid login shows error | User is on login page | 1. Enter incorrect email/password. 2. Submit. | Error message appears; user remains on the page; retry is possible. | P0 | Yes |
| TC-16 | Empty login fields are blocked | User is on login page | 1. Leave email or password empty and submit. | Validation prevents submission; required-field error is shown. | P0 | Yes |
| TC-17 | Repeated login failures are handled gracefully | User is on login page | 1. Attempt multiple invalid logins. | System behaves predictably, either by lockout/throttle or repeated error handling without crash. | P1 | Yes |
| TC-18 | Footer links navigate to legal/support pages | Homepage is open | 1. Click Privacy Policy, Terms of Use, Cookies Policy, Contact us, and About us. | Each page loads with correct content and headings. | P1 | Yes |
| TC-19 | Mobile app links are visible and valid | Homepage is open | 1. Review the app download section. | App Store and Google Play links are visible and open valid destinations. | P2 | Yes |
| TC-20 | Contact details are visible and valid | Homepage is open | 1. Review footer contact section. | Phone and email links are present and resolve correctly. | P2 | Yes |
| TC-21 | Desktop layout remains stable | Browser is set to desktop viewport | 1. Open homepage and key pages. 2. Scroll through sections. | Layout remains readable and aligned without overlap or clipped content. | P1 | Yes |
| TC-22 | Mobile layout remains stable | Browser is set to mobile viewport | 1. Open homepage and key pages. 2. Interact with navigation and forms. | Elements remain visible and usable; no broken or overlapping layout. | P1 | Yes |
| TC-23 | Keyboard navigation works for main controls | Page is open | 1. Use Tab and Enter to move through major links/buttons. | Focus is visible and order is logical; key actions can be triggered via keyboard. | P2 | Yes |
| TC-24 | Broken links or 404s are not found on critical pages | User navigates through site | 1. Check key navigation points and footer links. | No broken critical URLs or 404 pages appear on core entry points. | P1 | Yes |
| TC-25 | Demo environment notice appears consistently | Homepage and key flows are open | 1. Check the warning message across the site. | Demo notice remains visible and communicates simulated pricing and sandbox behavior. | P1 | Yes |
| TC-26 | Unsupported payment/booking flows are clearly treated as demo-only | User explores booking flow | 1. Review booking/payment interaction points. | Product warns about simulated pricing and non-production transactions; no real payment path is triggered. | P1 | Yes |
| TC-27 | Search results pages do not produce blank or broken states | User performs valid searches | 1. Execute hotel and flight searches with valid input. | Either results are displayed or the next logical step loads without crash. | P1 | Yes |
| TC-28 | Support pages remain accessible after navigation | User is on homepage | 1. Navigate to footer and legal pages repeatedly. | Pages load consistently, with stable headings and navigation. | P2 | Yes |

## Test Data Notes
- Valid destination examples: Dubai, Paris, London, New York
- Invalid destination examples: blank, special-only values, extremely long input
- Example valid login data: demo or known application credentials if admin/test account is available
- Invalid credentials examples: wrong password, random email, blank field
- Date sample: valid future date, invalid reversed date range

## Exit Criteria
- All P0 and P1 tests pass without critical defects on the demo site.
- All major flows (homepage, hotel, flight, visa, AI planner, login, legal/support visits) are validated.
- Any known demo-only limitations are documented as product risks or non-functional notes.
