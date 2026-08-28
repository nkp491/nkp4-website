# NKP4 Website Audit Findings

Date: 2026-08-28
Status: Active
Scope: Current repository and website implementation audited against the NKP4 source-of-truth packet.

## Source Of Truth

The requested root path `docs/nkp4-site/` was not present. The NKP4 documentation packet was found and read from:

`docs/NKP4-Website-Context/docs/nkp4-site/`

Files reviewed:

- `00-README.md`
- `01-WEBSITE-BRIEF.md`
- `02-FOUNDER-STORY.md`
- `03-COMPANY-STRUCTURE.md`
- `04-OPERATING-PHILOSOPHY.md`
- `05-PORTFOLIO.md`
- `06-DESIGN-REFERENCES.md`
- `07-CONTENT-RULES.md`
- `08-HOMEPAGE-ARCHITECTURE.md`
- `09-OPEN-QUESTIONS.md`
- `10-CODEX-HANDOFF-PROMPT.md`
- `11-RAW-SOURCE-NOTES.md`

## Executive Summary

The current site has the right broad direction: a small Next.js site with a portfolio-first homepage, structured company data, and primary routes for home, companies, about, and contact.

The main issue is that the implementation still carries legacy personal-site and design-experiment residue. It also misses several source-of-truth requirements, especially Manifest Network, the `Build. Operate. Equip. Invest.` framework, the operating philosophy, and a more accurate founder story.

Before doing a full redesign, the next implementation pass should clean the foundation, align the data model and content with the docs, then polish layout and mobile behavior.

## Current Tech Stack And Architecture

- Framework: Next.js `16.1.1` using the App Router.
- Runtime UI: React `19.2.3`.
- Language: TypeScript with strict mode enabled.
- Package manager: npm with `package-lock.json`.
- Styling: Tailwind is installed and imported, but current UI relies mostly on custom global CSS.
- Data model: Portfolio entries are centralized in `data/portfolio.ts`.
- Dev server: `npm run dev` uses webpack and a separate `.next-dev` dist directory on port `3001`.
- Build script: `next build --webpack`.
- Lint script risk: `next lint` is still present even though this setup should use an ESLint command directly.

## Current Pages And Navigation

Current primary routes:

- `/`
- `/companies`
- `/companies/[slug]`
- `/about`
- `/contact`

Current legacy or out-of-scope routes:

- `/links`
- `/secret`

Current primary navigation:

- Companies
- About
- Contact

This navigation is broadly aligned with the docs. The legacy routes are not aligned with the first-version IA and should either be removed, hidden intentionally, or separated from the public NKP4 experience.

## Current Homepage Sections

The homepage currently contains:

- Sticky navigation
- Hero with NKP4 positioning
- Holding-company structure panel
- Portfolio section with future filter chips
- Build / Operate / Invest section
- Founder section
- Contact routing section
- Footer

This is directionally close, but the section content needs to be updated to match the source packet.

## Reusable Components And Assets

Strong reusable foundation:

- `data/portfolio.ts`

Potentially reusable after refactor:

- Company card markup currently repeated on homepage and companies page
- Header/nav markup currently repeated across pages
- Contact route card pattern

Not reusable as-is:

- `components/Hero.tsx`
- `components/About.tsx`
- `components/Portfolio.tsx`
- `components/Blog.tsx`
- `components/Contact.tsx`
- `components/Footer.tsx`

Those components still reflect a generic personal portfolio site with placeholder copy and default blue styling.

Assets to review:

- `public/og-card.svg` uses the outdated `Build. Operate. Invest.` line.
- `public/designer-coder-portrait.png` appears to be an old generated asset and is not aligned with the current NKP4 direction.

## Content Conflicts With NKP4 Docs

### Missing Portfolio Entry

Manifest Network is listed in the documentation as a current known portfolio item:

- Relationship: Investment
- Industry: Web3 / Proof of Authority
- Website: `https://manifest.network/`

It is currently missing from `data/portfolio.ts` and the visible portfolio.

### Core Framework Is Incomplete

The site currently uses:

`Build. Operate. Invest.`

The docs specify:

`Build. Operate. Equip. Invest.`

The missing `Equip` concept matters because NKP4 is not only a holding vehicle. It also represents reusable systems, operating knowledge, technology leverage, and resources that can support founders and operators.

### Founder Story Is Too Thin

The docs say Nielsen's story should be presented as:

`Bay Area -> technology -> operator -> founder -> NKP4`

The current About and homepage founder sections are accurate at a high level but too generic. They do not yet capture the builder/operator story, the systems mindset, or the line:

`I sit, observe, immerse myself, then build the thing that gives people their time back.`

### Operating Philosophy Is Missing

The docs identify the operating sequence:

`Accountability -> Predictability -> Profitability -> Scalability`

This is currently not represented on the homepage or About page.

### SureHelp Relationship Should Be Clearer

SureHelp is currently represented as `Founded` with `Founder / Operator` as a separate field. The docs prefer clearly communicating:

`Founder & Operator`

The current model should make that relationship visible without implying passive ownership or purely financial investment.

### NKP4 Technology Copy Needs Guardrails

The NKP4 Technology copy includes a definitive service list. The docs say service areas are directional and should be confirmed before publishing as a firm service menu.

Recommended adjustment: keep the public copy high-level until the exact service offer is confirmed.

### Placeholder Contact Information

The site still includes placeholders such as:

- `hello@nkp4.com`
- `your.email@example.com`
- `yourusername`

The docs list contact details as an open question. These should be marked temporary or replaced only with confirmed details.

### Legacy Personal-Site Copy

Legacy components still include:

- `Hi, I'm NKP4`
- `About Me`
- `Project One`
- sample blog posts
- fake social/profile links

These conflict with the positioning rule that NKP4 should not become a resume, LinkedIn clone, or generic personal portfolio.

## Design And CSS Findings

### Global CSS Needs Cleanup

`app/globals.css` is currently large and contains multiple visual systems:

- Early terminal/editor UI
- PICO screenshot-inspired UI
- Tokyo-night designer/coder layout
- Current holding-company HQ layout

The file also redefines `body` multiple times. The final definition currently wins, but the cascade is fragile and makes spacing, borders, and mobile debugging harder.

### Current Visual Direction

The current HQ design is closer to Exor-style editorial restraint than Mark Cuban Companies-style portfolio discovery. That can work, but the docs weight MCC at 55%, meaning the portfolio should carry more of the page's visual and structural priority.

### Mobile Risks

Current breakpoints exist, but risk remains around:

- Very large serif hero type on small screens
- Tall fixed company cards
- Sticky nav consuming vertical space
- Portfolio not appearing quickly enough on mobile
- Contact not being prominent enough within the first few screens

The source docs are explicit that mobile is critical because the site will often be opened immediately after networking or an introduction.

## What Should Stay

- Next.js App Router foundation.
- Primary route set: `/`, `/companies`, `/about`, `/contact`.
- Dynamic company detail route.
- Structured portfolio data model.
- Relationship labels on portfolio entries.
- Small primary navigation.
- Portfolio-first homepage direction.
- Dev server stability changes using webpack and `.next-dev`.

## What Should Change

- Add Manifest Network to structured portfolio data.
- Update core framework to `Build. Operate. Equip. Invest.`
- Add the operating philosophy section.
- Rewrite founder content around the documented arc.
- Convert repeated header/footer/card markup into shared components.
- Remove or isolate legacy personal-site components and routes.
- Clean `app/globals.css` down to one coherent NKP4 design system.
- Replace or label temporary contact information.
- Update OpenGraph copy and image.
- Fix the lint script.
- Run responsive verification after cleanup.

## Proposed Homepage Narrative And Section Order

1. Navigation
2. Hero: NKP4 as Nielsen Aragon's founder-led holding company and professional headquarters
3. Portfolio: NKP4 Technology, SureHelp Inc., Manifest Network
4. What NKP4 does: Build, Operate, Equip, Invest
5. Founder arc: Bay Area -> technology -> operator -> founder -> NKP4
6. Operating philosophy: Accountability -> Predictability -> Profitability -> Scalability
7. Contact routing by intent
8. Footer

## Proposed Information Architecture

Initial IA:

- `/`
- `/companies`
- `/companies/nkp4-technology`
- `/companies/surehelp`
- `/companies/manifest-network`
- `/about`
- `/contact`

Future-ready IA, not for immediate build:

- `/investments`
- `/ventures`
- `/current`
- `/notes`

## Implementation Plan

### Phase 1: Foundation Cleanup

- Remove or quarantine legacy personal-site components.
- Remove or quarantine legacy `/links` and `/secret` routes if they are not intentionally public.
- Clean `app/globals.css` into one coherent NKP4 visual system.
- Preserve dev-server stability settings.

### Phase 2: Data And Content Alignment

- Add Manifest Network.
- Update relationship taxonomy and display labels.
- Add `Equip`.
- Tone down unverified service claims.
- Mark unresolved contact details as temporary or replace with confirmed details.

### Phase 3: Shared Components

- Build shared navigation, footer, portfolio card, contact card, and page shell components.
- Remove duplicated markup across primary routes.

### Phase 4: Homepage Rebuild

- Implement the approved section order.
- Make portfolio visually central.
- Add operating philosophy.
- Improve founder story without making the page a resume.

### Phase 5: Supporting Pages

- Update `/companies`.
- Update company detail pages.
- Update `/about`.
- Update `/contact`.

### Phase 6: Metadata, Mobile, And Verification

- Update metadata and OpenGraph.
- Test responsive behavior at mobile widths.
- Run build and lint/type verification.
- Prepare for preview branch/deployment only after approval.

## Decision Required Before Implementation

Approval is needed before moving from audit to implementation, especially for:

- Whether `/links` and `/secret` should remain.
- What contact email or contact destination should be public.
- Whether Manifest Network should link directly to its website in version one.
- Whether to keep the current warm editorial design direction or move closer to a portfolio-grid-first structure.
