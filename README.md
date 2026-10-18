# VSA website

A complete six-page responsive website for Veteran Service & Assistance, Inc., built with Next.js App Router, TypeScript, React, and Tailwind CSS. Navy, gold, ivory, and red reflect the approved modern American heritage direction.

## Run locally

Requirements: Node.js 20.9 or newer (Node 22 LTS recommended) and npm.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3000. To use a different development port, run `npm run dev -- --port 3001`.

## Production build and preview

```sh
npm run build
npm start
```

The production-ready static website is generated in `out/`. A prebuilt copy is included in this ZIP. `npm start` serves that copy on http://127.0.0.1:3000. Set `PORT` to change the preview port. Open the website through a web server; opening HTML directly from Finder will not load absolute asset paths correctly.

Deploy the contents of `out/` to a static host, keeping the directory structure intact. Each route has an `index.html`; configure your host to serve directory indexes and use `404.html` for missing pages. Source can also be deployed to any host supporting Next.js static exports. No environment variables or API keys are required. Webpack is selected explicitly for reliable builds across restricted desktop environments.

## Pages and pathways

- `/` — Home
- `/about/` — founder story and mission
- `/services/` — six service areas, linked to relevant resources
- `/resource-center/` — all 241 published directory entries, keyword search, 12 category filters, progressive results, empty state, phone/email/website links
- `/get-involved/` — volunteering, partnership inquiries, and VSA's existing PayPal donation destination
- `/contact/` — contact details and email draft form
- `/contact/#assistance` — Get Assistance, phone/email contact, immediate help, and service-specific resource pathways

Resource queries can be shared with `?q=housing` and `?category=Housing%20Resources`. Searches match all typed words across name, description, category, and contact text, without case sensitivity.

## Contact form behavior

The local form validates required fields and prepares an email draft. Visitors explicitly open their mail app, review, and send it. The site does not claim a message has been delivered, send email, or store personal data. The existing live VSA contact form is linked as an alternative. Donation links go to the existing VSA PayPal destination; no new payment processing was created.

A self-contained hosted submission backend was not part of this ZIP. To add one later, implement a secured endpoint and appropriate delivery, spam protection, and privacy practices, then change `components/ContactForm.tsx` to use it.

## Authentic content and images

The supplied logo is used unchanged at `public/assets/vsa-approved-logo.png`. Photography and the original live logo were pulled from the current VSA site, not generated or substituted. Optimized WebP copies of live-site photographs are used in the website. Source originals are included. See `docs/SOURCES.md` for attribution and exact source URLs.

Service descriptions, the mission, the founder story, resource entries, donor text, testimonial, phone, address, email, and donation destination come from the live site checked October 18, 2026. The founder's 2,000-veteran statement appears only within the original attributed story; it is not a newly calculated result. No partners or new impact figures were invented.

Some published directory details contain inconsistent names, dated eligibility, or mismatched descriptions; these are retained as source content rather than silently replaced with guesses. Resource listings are not endorsements or partnership claims. The site's published EIN appears incomplete (`83-221570`), so it is preserved in the source notes rather than displayed as a verified identifier. Verify it before adding it to the public footer. The contact page includes an erroneous alternate `vsaince18` link; the rebuild uses the consistently displayed address `vsainc18@gmail.com`.

## Editing

- `lib/content.ts` — shared authentic text and contact details
- `lib/resources.json` — resource directory data
- `app/` — the six page layouts
- `components/` — navigation, directory, form, icons, shared sections
- `app/globals.css` — tokens, typography, responsive layouts
- `public/assets/` — logo and images

No remote fonts or runtime third-party assets are required. System Georgia and Arial/Helvetica fallbacks keep the ZIP self-contained. Tailwind is integrated through PostCSS; shared CSS implements the specific visual design.

## Checks

```sh
npm run typecheck
npm test
npm run build
npm audit
```

See `docs/QA.md` for the completed validation and remaining limits. The ZIP excludes `node_modules`, build caches, and machine-specific secrets. `package-lock.json` locks the tested dependency versions.
