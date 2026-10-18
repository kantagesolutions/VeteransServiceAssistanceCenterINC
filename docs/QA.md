# Validation — October 18, 2026

## Result

Production build, TypeScript, content checks, internal links, asset loading, and exercised browser interactions passed. Six pages were tested in the Codex in-app browser against the exported production site at http://127.0.0.1:3000. No relevant local-app console errors or framework overlays were observed. Earlier errors in the reused tab belonged to the original Wix website and were excluded by timestamp.

## Automated checks

| Check | Result |
|---|---|
| `npm run build` | PASS — Next.js 16.4.2, Webpack, six static pages plus 404 |
| `npm run typecheck` | PASS |
| `npm test` | PASS — four tests; 241 entries, 12 categories, source phone pairings, six routes/assets, real donation URL |
| Production internal-link and asset audit | PASS — 203 local references, including anchors; no missing targets |
| `npm audit` | PASS — zero known vulnerabilities at test time |
| ZIP integrity | Checked with Python `ZipFile.testzip()` after packaging |

The default Turbopack build hit a local process/port restriction; the explicit Webpack build completed. The delivered scripts use the successful build path.

## Browser environment

Codex in-app browser (IAB), no external-browser fallback. Desktop viewport overrides: 1024×900 and 1440×1000, plus a 1024×1536 native-reference-size visual check. Mobile: 390×844 for all six pages; additional overflow checks at 320×740 for Home, Contact, and Resource Center. Overrides were reset after testing.

Page identity, meaningful content, image loading, and horizontal overflow were checked on all six pages. Desktop and mobile screenshots were visually inspected. This is responsive browser QA, not certification for every browser/device or formal WCAG conformance.

## Interaction proof

- Home → Resource Center: real navigation succeeds.
- Search “Golden Harvest” → exactly one result, Golden Harvest Food Bank.
- Keep that search and select Housing Resources → zero matches and meaningful empty-state guidance.
- Clear filters → all 241 entries available.
- Show More → rendered result count increases from 20 to 40.
- Select Food Resources → 18 results.
- Open `/resource-center/?category=Food%20Resources` → after client initialization, 18 results and selected category.
- Home search with “housing” → `/resource-center/?q=housing`, after client initialization 49 matching results.
- Mobile Menu → expanded navigation; choose Resource Center → route changes and menu closes.
- `/contact/?topic=Volunteering#connect` → Volunteering preselected.
- Complete local form with synthetic `qa@example.invalid` data → Prepare Email displays explicit draft-ready state and correctly encoded `mailto:vsainc18@gmail.com` link. Nothing sent.
- Get Assistance → `/contact/#assistance` with matching heading, real contact details, and resource pathways.
- Donation button inspected → matches live VSA PayPal destination `TJWX8HT7WPP8Q`. No donation submitted.

## Visual fidelity ledger

Layout concept: `design-reference.png`, 1024×1536. The full Home implementation is longer because it preserves all six real service areas, authentic longer copy, assistance, and involvement. The concept is an implementation reference for the user's approved direction, not a separately user-approved final screenshot. Both the reference and latest browser screenshots were inspected using `view_image`.

| Point | Reference and implementation evidence | Outcome |
|---|---|---|
| Palette | Navy header/mission, ivory base, gold CTA, restrained red resource links | Preserved approved direction |
| Typography | Editorial serif headings, plain sans-serif body, deliberate control text | Verified readable desktop/mobile |
| First viewport | Split heading/photo composition, paired assistance/resource CTAs | Preserved; real source copy length intentionally expands hero |
| Logo | Generated alternate logo in concept | Replaced with exact user-supplied logo as explicitly instructed |
| Imagery | Concept image placeholder | Replaced with live-site flag-patch photograph; no generated production photos |
| Service structure | Open columns, red line icons, editorial hierarchy | Six authentic services preserved; responsive 3/2/1-column layout |
| Mission | Dark full-width band, oversized heading, divided text | Preserved with actual mission wording |
| Content and footer | Concept contains invented copy/social/policy labels | Replaced by authentic text/contact details; no invented social or policy targets |
| Resource workflow | Search and ruled results | Functional directory on dedicated requested page; home search links into it |
| Mobile | Stacked sections, readable controls | No clipping or overflow in tested widths |

Above-the-fold copy audit: source heading and authentic introduction preserved verbatim except whitespace; approved nav/CTA labels used. The authentic dignity/respect/compassion line is a photo caption. No invented outcomes, partners, or decorative eyebrow copy. Intentional visual differences from the generated reference are listed above; the final website was verified against the approved navy/gold/ivory/red direction and the user's logo and live-image instructions. No material visual defects remain in the tested views.

## Limits and source caveats

- Email delivery, opening a native mail app, telephone calls, PayPal transactions, and original VSA form submission were not executed. Destinations and local email-draft construction were verified.
- Third-party directory destinations were retained from VSA; availability, eligibility, hours, and every external site's current health were not independently certified.
- The original site's incomplete EIN and alternate erroneous email link are documented in README; they are not silently presented as verified data.
- No new hosted email backend, account system, analytics, or payment processing was added. ZIP/static export delivery only; no public deployment was requested.
- Search/filter query parameters initialize after client hydration; the initial prerender can briefly show all resources before the query filter applies.

## Latest logo update

Replaced the shared header/footer logo with the latest user-supplied transparent PNG (1240×1268). Production build and TypeScript passed. Desktop (1440×1000) and mobile (390×844) screenshots confirm the replacement, both shared logo assets load, and mobile has no horizontal overflow. Updated the source, static export, and ZIP together.
