# NKP4 Website Alignment — Technical Specification

Status: Proposed  
Source finding: [`nkp4-website-audit-findings.md`](./nkp4-website-audit-findings.md)  
Phase: 3 — Tech Spec  
Date: 2026-08-28

## Executive summary

The NKP4 site has a viable Next.js App Router foundation, but its public experience is not yet aligned with the NKP4 source-of-truth packet: the portfolio omits Manifest Network, the four-part operating framework is incomplete, the founder story is generic, the operating philosophy is absent, and legacy personal-site code and visual systems remain in the repository. The proposed approach is a focused alignment pass that preserves the existing route structure and centralized data model, introduces shared site primitives, rewrites only source-approved content, and consolidates the visual system before responsive verification. This keeps the site a small, credible portfolio headquarters while leaving future investments, notes, and ventures extensible without building them prematurely.

## Goals

- Make NKP4 understandable as Nielsen Aragon’s founder-led holding company and professional business home.
- Make the three known portfolio relationships factual and visually distinct: NKP4 Technology, SureHelp, and Manifest Network.
- Establish `Build. Operate. Equip. Invest.` as the public framework, subject to owner approval of final wording.
- Present the founder as a builder/operator through an arc rather than a résumé timeline.
- Add the accountability operating formula without turning the site into a long philosophy essay.
- Make the primary mobile experience quickly answer who Nielsen is, what NKP4 contains, and how to connect.
- Remove public-facing placeholder and legacy personal-site content.

## Non-goals

- Building `/investments`, `/ventures`, `/current`, `/notes`, or a blog/editorial system.
- Turning the About page into a chronological career résumé.
- Publishing an unverified NKP4 Technology service menu, SureHelp product lineup, or Manifest Network investment details.
- Introducing a CMS, database, API, authentication, or client-side filtering before the portfolio requires it.
- Replacing the existing framework, build tooling, or stable webpack development configuration.

## Technical architecture

### Application shape

Keep the current static, server-rendered App Router architecture. The public information architecture remains:

- `/` — narrative homepage and primary networking URL
- `/companies` — portfolio index
- `/companies/[slug]` — generated static company detail pages
- `/about` — founder and holding-company story
- `/contact` — intent-based contact routing

The homepage order should be navigation, hero, portfolio, four-part framework, founder arc, operating philosophy, contact routing, and footer. Portfolio content must appear early enough on mobile to function as evidence of the positioning, while contact remains a primary section rather than footer-only housekeeping.

### Data model

Continue using `data/portfolio.ts` as the single source for portfolio entries. Extend the existing model only where needed to represent the documented relationships accurately:

- Add Manifest Network with slug `manifest-network`, relationship `Investment`, Web3 / Proof of Authority industry language, and the documented website URL.
- Represent SureHelp’s public relationship as `Founder & Operator` in the displayed relationship language; do not rely on `Founded` plus a separate role to communicate the relationship.
- Keep relationship, status, industry, description, relationship detail, CTA, and optional website fields structured so the index, homepage, and detail route render the same facts.
- Treat `portfolioFilters` as presentation labels for a future/static taxonomy, not as an interactive filter feature in this pass unless separately approved.

The data layer must not imply that every listed company is owned or controlled by NKP4. Relationship labels are the boundary between founded/operated businesses, services, and outside investments.

### Shared presentation primitives

Create a small set of shared site-level primitives for the repeated patterns currently embedded in route files:

- site navigation and footer
- page shell
- portfolio/company card
- contact route card
- optional framework/philosophy content blocks where reuse improves consistency

These should remain server components and accept typed content/data props. Route-level files should compose sections and own page narrative; they should not duplicate navigation, card structure, or footer markup.

### Content architecture

Use source-approved copy from the NKP4 packet as the content boundary:

- Hero: identify NKP4 as the holding company and business home for companies, technology, investments, and ideas built or backed by Nielsen Aragon.
- Framework: Build, Operate, Equip, Invest; define Equip as access to technology, operating knowledge, and resources.
- Founder: use the progression `Bay Area → Technology → Operator → Founder → NKP4` and the approved observation/building line, without creating a job-history timeline.
- Philosophy: use `Accountability → Predictability → Profitability → Scalability` with brief explanations; optionally include “Don’t just sell the apple. Sell the seeds.” only after confirming it is public-facing.
- NKP4 Technology: describe the company at a high level and avoid publishing directional service categories as a definitive menu until approved.
- SureHelp: use Founder & Operator language and route visitors to the appropriate destination rather than duplicating its operating-company site.
- Manifest Network: publish only the documented outside-investment, Web3, and Proof of Authority facts.

### Styling and responsive behavior

Consolidate `app/globals.css` into one NKP4 design system with one authoritative base/body treatment, shared tokens, typography, layout primitives, interaction states, and responsive rules. Retain the current warm editorial direction as the baseline while increasing portfolio prominence in the composition. The design must avoid depending on animation for comprehension.

Responsive behavior should specifically address small screens: constrain hero type, avoid fixed/tall cards where content determines height, keep sticky navigation from dominating the viewport, surface the portfolio within the first few screens, and keep contact routing easy to reach. The final visual direction remains an owner decision where it conflicts with the source references’ portfolio-grid emphasis.

### Metadata and assets

Update root metadata and OpenGraph/Twitter copy to include the approved four-part framework or approved positioning. Replace or revise the outdated OG asset so it no longer says `Build. Operate. Invest.`. The old portrait asset should not be used unless its role and visual fit are explicitly approved.

### Legacy surface

The public NKP4 surface should not expose `/links` or `/secret` as part of the first-version information architecture. Their final disposition is an owner decision: remove them, isolate them from the public experience, or retain them intentionally with separate positioning. Generic components containing personal-site copy, sample blog content, fake profile links, or placeholder project content should be retired or quarantined rather than reused in the NKP4 pages.

## Documentation/code review

### Existing implementation

- `app/page.tsx:40-67` currently establishes a hero and structure panel, but the headline says “build, operate and invest” and the structure panel includes only NKP4 Technology and SureHelp.
- `app/page.tsx:69-119` renders the portfolio and a three-item framework; this is the primary homepage area to extend with Manifest Network, Equip, and the approved narrative order.
- `app/page.tsx:121-137` contains a high-level founder block but not the documented founder arc or source line.
- `app/page.tsx:139-152` already provides intent-based contact routing, which can be retained as the homepage contact pattern after destination approval.
- `app/companies/page.tsx:35-60` duplicates portfolio card markup from the homepage and currently derives the visible relationship from `founderRole ?? relationship`.
- `app/companies/[slug]/page.tsx:12-16` derives static detail routes from `portfolioCompanies`, so adding Manifest to the data model automatically extends the generated route set.
- `app/companies/[slug]/page.tsx:63-81` displays relationship, founder role, status, relationship detail, and CTA, making accurate taxonomy and safe public wording essential.
- `app/about/page.tsx:23-57` has the correct institutional direction but uses generic copy and omits the documented founder story and operating philosophy.
- `app/contact/page.tsx:3-24` already models intent-based routes, but both direct routes currently use `mailto:hello@nkp4.com`, which the audit identifies as unresolved placeholder contact information.
- `app/layout.tsx:4-33` defines root metadata and an OG alt string with the outdated three-part framework; it is the central metadata update point.
- `data/portfolio.ts:1-29` provides the typed relationship/status model, and `data/portfolio.ts:31-64` currently contains only NKP4 Technology and SureHelp.
- `app/globals.css:3-62` defines the active global tokens/body treatment, while the audit reports additional conflicting visual systems and repeated body rules elsewhere in the file that should be removed during cleanup.
- `package.json:4-11` preserves webpack build/dev scripts but still uses `next lint`, which should be replaced with a supported direct ESLint command for this dependency setup.

### Source-of-truth documentation

- `docs/NKP4-Website-Context/docs/nkp4-site/01-WEBSITE-BRIEF.md:22-61` defines the site as a credibility/networking destination and explicitly excludes résumé, generic consulting funnel, and logo-wall positioning.
- `docs/NKP4-Website-Context/docs/nkp4-site/01-WEBSITE-BRIEF.md:63-104` defines the founder-led narrative, approved working positioning, four-part framework, and “seeds” philosophy.
- `docs/NKP4-Website-Context/docs/nkp4-site/02-FOUNDER-STORY.md:9-21` identifies Nielsen as a builder/operator and supplies the source line about observing, immersing, and building systems that give people time back.
- `docs/NKP4-Website-Context/docs/nkp4-site/02-FOUNDER-STORY.md:23-50` requires the Bay Area → technology progression to be presented as story context rather than a résumé timeline.
- `docs/NKP4-Website-Context/docs/nkp4-site/03-COMPANY-STRUCTURE.md:13-31` defines the current NKP4 structure and distinguishes Manifest Network as an outside investment.
- `docs/NKP4-Website-Context/docs/nkp4-site/03-COMPANY-STRUCTURE.md:33-66` requires factual relationship labels and warns against implying NKP4 owns or controls every portfolio item.
- `docs/NKP4-Website-Context/docs/nkp4-site/04-OPERATING-PHILOSOPHY.md:45-85` defines the accountability formula and reusable “seeds” capabilities that should inform the philosophy section.
- `docs/NKP4-Website-Context/docs/nkp4-site/05-PORTFOLIO.md:7-42` defines NKP4 Technology and warns that its service areas are directional until confirmed.
- `docs/NKP4-Website-Context/docs/nkp4-site/05-PORTFOLIO.md:46-91` defines SureHelp as Founder & Operator and establishes the high-level routing role for the NKP4 site.
- `docs/NKP4-Website-Context/docs/nkp4-site/05-PORTFOLIO.md:95-114` defines Manifest Network’s safe public facts and recommended `Investment · Web3` label.
- `docs/NKP4-Website-Context/docs/nkp4-site/08-HOMEPAGE-ARCHITECTURE.md:47-119` specifies the portfolio-first narrative, four-part framework, founder arc, and operating philosophy content.
- `docs/NKP4-Website-Context/docs/nkp4-site/08-HOMEPAGE-ARCHITECTURE.md:133-181` makes contact a primary feature and sets the mobile comprehension requirement.
- `docs/NKP4-Website-Context/docs/nkp4-site/09-OPEN-QUESTIONS.md:5-67` records unresolved brand, contact, founder, company, portfolio, and visual identity decisions; none should be invented during implementation.

## Proposed behavior and acceptance boundaries

The implementation is ready for Phase 4 planning when the following behavior is agreed:

1. The homepage and companies index render all three documented portfolio entries from the shared data source.
2. Every portfolio card and detail page visibly communicates the item’s factual NKP4 relationship.
3. SureHelp is presented as Founder & Operator; Manifest is presented as an outside Investment; no unsupported ownership or role claims appear.
4. The public framework has four items, including Equip, and the operating formula is present on the homepage or About page.
5. Homepage and About copy follow the documented founder arc and do not become a chronological résumé.
6. No public page contains known fake social links, sample blog/project copy, or unapproved definitive service claims.
7. The primary routes share navigation/footer/card patterns and render consistently at mobile and desktop widths.
8. Metadata and OG copy match the approved public positioning.
9. Type checking, production build, supported linting, and responsive/manual route verification pass before preview deployment.

## Open questions requiring owner decisions

These are intentionally unresolved and must be answered before Phase 4 locks implementation scope:

- Should `/links` and `/secret` be removed, isolated, or intentionally retained?
- What public email, LinkedIn profile, booking link, or contact form destination should be used?
- Is Manifest Network’s investment public, and is direct linking to `https://manifest.network/` approved for version one?
- What exact public relationship label should be used for each portfolio entry, especially the final SureHelp founder title?
- Is `Build. Operate. Equip. Invest.` the approved public framework, or should the working positioning line be used instead?
- Should “Don’t just sell the apple. Sell the seeds.” appear publicly at launch?
- Which founder career references, failed-startup details, and funding amount are approved for public display?
- Is the current warm editorial visual direction approved, or should the layout move more strongly toward a portfolio-grid-first treatment?
- What are the approved logo/mark, colors, photography treatment, and motion level?
- Should the initial portfolio use a single mixed relationship grid or separate operating companies and investments?

## Phase 4 handoff

Once the owner decisions above are resolved, Phase 4 can translate this architecture into an execution plan with ordered file-level tasks, content approval checkpoints, responsive verification, and preview deployment steps. No production deployment or commit is authorized by this specification.
