# Plan: NKP4 Website Alignment

Status: Execution-ready — Phase 5 complete; owner decisions recorded
Run order: 01  
Source: [nkp4-website-alignment.md](./nkp4-website-alignment.md)  
Finding: [nkp4-website-audit-findings.md](./nkp4-website-audit-findings.md)

## Goal

Align the public NKP4 Next.js site with the approved source-of-truth packet so
the site clearly presents NKP4 as Nielsen Aragon's founder-led holding company,
shows NKP4 Technology, SureHelp, and Manifest Network with factual relationship
labels, communicates `Build. Operate. Equip. Invest.`, and provides a coherent,
mobile-first portfolio headquarters.

The existing App Router, static rendering, webpack scripts, route structure, and
centralized portfolio data remain in place. This plan does not authorize a
production deployment or commit.

## Owner gates before implementation

Phase 5 should keep these as explicit gates rather than filling them in by
inference:

- Final public framework wording: `Build. Operate. Equip. Invest.` or an owner-approved alternative.
- Public contact destinations for partnerships and Nielsen; the current email is a placeholder.
- Whether Manifest Network's investment and direct `https://manifest.network/` link are public in version one.
- Final public relationship labels, especially SureHelp's `Founder & Operator` wording.
- Whether the “seeds” line is public-facing.
- Which founder details are approved for publication.
- Visual direction, brand assets, photography, and motion level.
- Final disposition of `/links` and `/secret`.
- Whether the portfolio is one mixed grid or separated into operating companies and investments.

Until the gates are resolved, implementation should use only the documented
safe facts and leave unresolved destinations/content behind typed, obvious
approval points.

## Wave map

### Wave 0 — approval and baseline

1. Confirm the owner gates above and record the decisions in the plan folder or
   an implementation note.
2. Capture a baseline of current routes and verification commands before
   changing the shared presentation layer.

Gate: no public claim, external destination, asset, or route disposition is
invented during the build.

### Wave 1 — data and shared primitives

1. Extend `data/portfolio.ts` with Manifest Network and the approved
   relationship/display fields; make SureHelp visibly `Founder & Operator`.
2. Add shared server components for navigation/footer, page shell, portfolio
   company cards, and contact route cards. Suggested files are:
   `components/SiteNav.tsx`, `components/SiteFooter.tsx`,
   `components/PageShell.tsx`, `components/PortfolioCard.tsx`, and
   `components/ContactRouteCard.tsx`.
3. Preserve typed props and keep route files responsible for page narrative and
   section composition.

Gate: all portfolio surfaces render the same relationship facts from the one
   data source; no route-specific duplicate card or navigation markup remains.

### Wave 2 — content and route alignment

1. Update `app/page.tsx` to the approved order: navigation, hero, portfolio,
   four-part framework, founder arc, operating philosophy, contact routing, and
   footer. Keep portfolio early on mobile.
2. Update `app/companies/page.tsx` and `app/companies/[slug]/page.tsx` to use
   the shared primitives and render the new Manifest static route.
3. Rewrite `app/about/page.tsx` around `Bay Area → Technology → Operator →
   Founder → NKP4` and the approved builder/operator observation line, without
   making a chronological résumé.
4. Update `app/contact/page.tsx` to use shared contact cards and only approved
   destinations.
5. Add the operating philosophy formula
   `Accountability → Predictability → Profitability → Scalability` with brief,
   approved explanations.

Gate: content review confirms no unsupported ownership, investment, service,
founder, or contact claims are public.

### Wave 3 — visual system and legacy surface

1. Consolidate `app/globals.css` into one authoritative NKP4 system: tokens,
   typography, layout, interaction states, and responsive rules. Remove obsolete
   terminal/editor/personal-site rules after confirming they have no remaining
   consumers.
2. Make the portfolio visually prominent, constrain mobile hero type, remove
   fixed/tall card assumptions, prevent sticky navigation from dominating, and
   keep contact reachable within the first few mobile screens.
3. Update `app/layout.tsx` metadata and OpenGraph/Twitter copy; replace or
   revise `public/og-card.svg` so it does not use the old three-part framework.
4. Review `public/designer-coder-portrait.png`; do not expose it unless its role
   and fit are approved.
5. Based on the owner gate, remove or quarantine `app/links/page.tsx`,
   `app/secret/page.tsx`, and `components/LinkCard.tsx`; do not leave fake
   contact or social links reachable from the public NKP4 experience.

Gate: the chosen visual direction and legacy-route disposition are explicitly
approved before deleting or exposing anything.

### Wave 4 — tooling, verification, and preview

1. Replace the unsupported `next lint` script in `package.json` with the
   supported direct ESLint command for the installed dependency setup; add or
   update the required ESLint configuration only if verification shows it is
   needed.
2. Run type checking, linting, and the webpack production build.
3. Verify `/`, `/companies`, all three company detail routes, `/about`, and
   `/contact` at desktop and small mobile widths, including keyboard focus and
   external-link behavior.
4. Confirm no placeholder strings remain in public routes or metadata.
5. After tests pass and the owner approves, push the work to a preview/staging
   branch and perform manual preview verification before any production action.

## Exact file-level change map

### Modify

- `data/portfolio.ts` — add Manifest Network, normalize relationship display
  fields, and keep safe public facts structured.
- `app/page.tsx` — compose the complete homepage narrative using shared data and
  primitives; add Equip, philosophy, and founder arc.
- `app/companies/page.tsx` — replace duplicated cards with the shared card and
  show all entries.
- `app/companies/[slug]/page.tsx` — use shared shell/navigation and retain
  generated static detail pages for every data entry.
- `app/about/page.tsx` — publish the approved founder-led story and philosophy.
- `app/contact/page.tsx` — use shared contact cards and approved destinations.
- `app/layout.tsx` — update root metadata, social descriptions, and image alt
  text to approved positioning.
- `app/globals.css` — consolidate the active design system and responsive rules.
- `package.json` — replace `next lint` with supported lint tooling.
- `public/og-card.svg` — revise the outdated framework text or replace the asset.

### Add

- `components/SiteNav.tsx` — shared primary navigation.
- `components/SiteFooter.tsx` — shared footer/navigation.
- `components/PageShell.tsx` — shared site shell for primary routes.
- `components/PortfolioCard.tsx` — typed portfolio card used by homepage and
  companies index.
- `components/ContactRouteCard.tsx` — typed contact-routing card.
- Any narrowly scoped content component needed for the framework or philosophy,
  only when it genuinely reduces repeated presentation markup.

### Conditional remove or quarantine

- `app/links/page.tsx` — resolve according to owner decision.
- `app/secret/page.tsx` — resolve according to owner decision.
- `components/LinkCard.tsx` — retire if both legacy routes are removed or
  quarantined and no consumer remains.
- Unused legacy CSS selectors and the portrait asset — remove only after a
  reference check and owner approval where applicable.

## Safety rationale

- The data model remains the single source of portfolio truth, reducing drift
  between index, homepage, and detail routes.
- Shared components are typed server components and do not add client state,
  data fetching, or runtime infrastructure.
- The current route structure and webpack development setup are preserved.
- Content gates prevent unsupported public claims and placeholder destinations.
- CSS cleanup is constrained to the active NKP4 surface and verified against all
  remaining consumers before obsolete rules are removed.
- Conditional legacy cleanup avoids deleting intentionally retained private or
  utility routes before their owner disposition is known.

## Acceptance criteria

- Homepage and companies index show NKP4 Technology, SureHelp, and Manifest
  Network from `data/portfolio.ts`.
- Cards and detail pages visibly communicate each item's factual NKP4
  relationship; SureHelp reads as `Founder & Operator`, and Manifest reads as an
  outside `Investment`.
- The approved four-part framework and operating philosophy are present.
- Founder copy follows the documented arc and does not become a résumé.
- No public primary or retained legacy route contains known fake social links,
  sample content, or unapproved definitive service claims.
- Primary routes share navigation, footer, shell, and card patterns and render
  coherently at desktop and mobile widths.
- Root and social metadata use approved positioning and the revised OG asset.
- Type checking, supported linting, production build, route checks, and
  responsive/manual verification pass.
- Preview/staging verification is complete before any production deployment.

## Rollback

Before implementation, preserve the current worktree state and make changes in
an implementation branch. Roll back by reverting the alignment commit(s),
restoring the prior route/component files and metadata, and removing only the
new shared primitives if they are no longer referenced. Do not delete the
source-of-truth docs or the plan folder. If an owner gate changes mid-build,
stop at the current wave, retain the approved work, and revise the plan before
continuing.

## Handoff

Next step: run `phase6-build docs/active/plans/01-nkp4-website-alignment/`.
The Phase 6 session must follow the final audit amendment below and the
plan-specific kickoff prompt.

## Audit amendments — 2026-08-27

**Phase 5 verdict:** GO WITH CHANGES — gated on the decisions and plan
amendments below. Do not create a Phase 6 kickoff prompt until the gates are
closed and this section is incorporated into the wave tasks.

### Required amendments

1. **Make Manifest publication a real scope branch.** The current plan both
   treats Manifest's public visibility as an owner gate and unconditionally
   requires its card and static detail page. Before Wave 1, record one of these
   choices:
   - **Public in v1:** add its documented facts and approved direct URL to the
     shared public portfolio data; generate and verify `/companies/manifest-network`.
   - **Not public in v1:** do not render the card, route, metadata, CTA, or
     external URL in the deployed public experience; revise the three-company
     acceptance and route-check requirements accordingly.
   The relationship must be displayed from one explicit public label field on
   every card and detail page; this field must distinguish `Founder & Operator`
   and the documented outside `Investment` label without implying ownership.

2. **Turn contact approval points into shipping decisions.** Before Wave 2,
   supply an approved destination for each public partnership/Nielsen contact
   route or remove that route from the public page. Do not ship a disabled,
   placeholder, or guessed destination. Record the external-link behavior
   (same tab vs. new tab) and the required security attributes for any
   new-tab external links, then verify the selected behavior by keyboard and
   mouse at both viewport sizes.

3. **Define the legacy-route release branch.** `/secret` is still a public
   route when deployed: `robots: noindex, nofollow` only controls indexing, not
   access. If either `/links` or `/secret` is to remain genuinely private,
   separately approve and plan access control (out of scope for the current
   static public site); otherwise remove it from the production route tree.
   Add all dormant personal-site components (`Navigation`, `Hero`, `About`,
   `Portfolio`, `Blog`, `Contact`, and `Footer`) plus `README.md` to the
   reference-check/retire-or-rewrite inventory. The README currently describes
   a personal site and gives the obsolete development URL, so leaving it
   unchanged would preserve a contradictory developer handoff.

4. **Make verification reproducible.** Add the exact type-check, lint, build,
   route, responsive, and placeholder-scan commands (including expected route
   set for the selected Manifest branch) to Wave 4. Add the affected ESLint
   configuration file to the change map: the repository has legacy
   `.eslintrc.json`, while `package.json` still invokes removed `next lint`.
   The implementation must establish the supported ESLint 9 configuration and
   direct command before treating lint as a release gate. Scope the placeholder
   scan to shipped public routes/assets so source-of-truth documentation and
   intentionally retired files do not create false failures.

### Audit findings

- **[High] Public Manifest scope contradicts its owner gate** —
  `PLAN.md:25-33`, `PLAN.md:71-72`, `PLAN.md:174-178`; the source packet keeps
  both the exact relationship language and whether the investment is public as
  separate concerns (`docs/NKP4-Website-Context/docs/nkp4-site/05-PORTFOLIO.md:95-114`,
  `docs/NKP4-Website-Context/docs/nkp4-site/09-OPEN-QUESTIONS.md:48-53`).
  Suggested guard: required amendment 1.
- **[High] The public-contact acceptance criterion cannot be proved without
  owner-supplied destinations** — `PLAN.md:25-37`, `PLAN.md:76-83`,
  `app/contact/page.tsx:15-23`. The source packet explicitly leaves public
  contact choices open (`docs/NKP4-Website-Context/docs/nkp4-site/09-OPEN-QUESTIONS.md:13-20`).
  Suggested guard: required amendment 2.
- **[Medium] “Quarantine” does not make `/secret` private** —
  `PLAN.md:98-103`, `app/secret/page.tsx:4-10`, `app/secret/page.tsx:28-71`.
  Suggested guard: required amendment 3.
- **[Medium] The verification plan is not yet runnable as written** —
  `PLAN.md:105-117`, `package.json:5-10`, `.eslintrc.json:1-3`. The plan names
  outcomes but no exact commands or ESLint migration target. Suggested guard:
  required amendment 4.
- **[Standard] Dormant legacy code and the repository handoff are outside the
  exact change inventory** — `PLAN.md:150-157`, `README.md:1-10`,
  `components/Hero.tsx:1-27`, `components/Navigation.tsx:1-59`. Suggested
  guard: required amendment 3.

### Coverage matrix

| # | Guardrail (source §) | Tier | Mark | Evidence |
|---|---|---|---|---|
| 1 | NKP4 is a founder-led holding-company/portfolio headquarters, not a generic holding company (§00 Primary rule) | STANDARD | UNRESOLVED | `PLAN.md:10-18` states the goal, but no Wave 2 content-review checklist tests the prohibited generic-holding-company framing. |
| 2 | Never invent factual portfolio relationships or ownership (§00 Authority) | HIGH | ADDRESSED | `PLAN.md:214-225` makes public/non-public Manifest a release branch and requires one public display-label mechanism before Wave 1. |
| 3 | Do not turn the site into a résumé, influencer page, generic funnel, or logo wall (§01 What the site is not) | STANDARD | UNRESOLVED | `PLAN.md:73-75` prohibits a chronological résumé, but it does not give the Wave 2 review a check for the other prohibited framings. |
| 4 | Use a progression, not career chronology (§01 Core narrative; §02 Purpose) | STANDARD | ADDRESSED | `PLAN.md:73-75` explicitly names the approved progression and prohibits a chronological résumé. |
| 5 | Do not make NKP4 appear larger or more institutional than it is (§01 What NKP4 is; §06 Visual anti-patterns) | STANDARD | UNRESOLVED | `PLAN.md:87-103` names visual-system work and owner approval but no acceptance/review criterion checks the scale or institutional-presentation boundary. |
| 6 | Preserve the builder/operator voice and avoid inflated founder labels (§02 Core identity; §02 Tone) | STANDARD | UNRESOLVED | `PLAN.md:73-80` names approved story material but has no copy-review prohibition on inflated founder labels. |
| 7 | Every portfolio item has a factual label that does not imply ownership (§03 Relationship taxonomy) | HIGH | ADDRESSED | `PLAN.md:223-225` requires one explicit public label field that distinguishes the documented relationships without implying ownership. |
| 8 | Do not publish a definitive NKP4 Technology service menu before confirmation (§05 Directional service areas) | STANDARD | ADDRESSED | `PLAN.md:82-83`, `PLAN.md:166-170` set a no-invention gate; the current directional list is confined to source docs. |
| 9 | Do not publish unverified SureHelp products, and route visitors rather than duplicate its site (§05 SureHelp) | STANDARD | UNRESOLVED | `PLAN.md:76-83` requires approved destinations and content review but does not explicitly prevent a detail page from expanding into an unverified product duplicate. |
| 10 | Do not publish unverified Manifest investment details (§05 Manifest Network) | HIGH | ADDRESSED | `PLAN.md:214-225` prevents any public Manifest card, route, metadata, CTA, or URL until the owner selects the public-v1 branch. |
| 11 | Keep the four-part framework and accountability formula within short, scannable content (§07 Preferred concepts; §08 What NKP4 does/Operating philosophy) | STANDARD | ADDRESSED | `PLAN.md:68-80`, `PLAN.md:179-180` specify both elements and brief explanations. |
| 12 | Keep navigation minimal, portfolio early, contact primary, and mobile comprehension within the first screens (§08 Navigation, Portfolio, Contact, Mobile) | STANDARD | ADDRESSED | `PLAN.md:68-70`, `PLAN.md:91-93`, `PLAN.md:111-114` explicitly require each behavior and its responsive verification. |
| 13 | Do not invent unresolved brand, contact, founder, company, visual, or portfolio decisions (§09 Open Questions) | HIGH | ADDRESSED | `PLAN.md:214-254` adds explicit branches for Manifest, contact, legacy routes, and verification; `PLAN.md:43-49` requires owner decisions to be recorded before work. |
| 14 | Do not copy reference-site branding, wording, structure, or distinctive execution (§06 Design References) | STANDARD | UNRESOLVED | `PLAN.md:85-103` requires an owner-approved visual direction but has no originality/reference-check criterion. |

Open coverage rows: #1 (generic-holding-company framing), #3 (other prohibited
site framings), #5 (institutional scale), #6 (inflated founder labels), #9
(SureHelp-detail scope), and #14 (reference-site originality). These are
STANDARD-tier additions to the Wave 2/3 content and design review checklists;
they do not change the gated GO WITH CHANGES verdict.

### Citation self-review

All five surfaced findings and every coverage-matrix citation were reopened
against the current repository. **CONFIRMED:** the cited plan, route, data,
configuration, README, and source-packet lines state the claims attached to
them. **FALSE POSITIVE:** none. **NEEDS MANUAL REVIEW:** owner approvals for
Manifest, contact destinations, legacy-route disposition, and final visual
assets; these are factual/business decisions not inferable from code.

## Audit amendments — 2026-08-27 (owner decisions closed)

**Phase 5 verdict:** GO. The owner resolved every blocking decision below;
this section supersedes the prior gated verdict where they differ.

### Approved public scope

- Use `Build. Operate. Equip. Invest.` as the public framework heading.
- Publish Manifest Network in v1 as one portfolio entry labeled `Investment`.
  Its approved description is: “An outside investment in a Web3 company focused
  on Proof of Authority.” Its card/detail CTA may link directly to
  `https://manifest.network/`.
- Display `Operating Company` for NKP4 Technology and `Founder & Operator` for
  SureHelp. Keep industry separate from relationship labels; do not imply
  ownership of Manifest.
- Use one mixed portfolio grid with an interactive industry filter. The filter
  must derive its options and results from the centralized portfolio data; it
  must not become a second hard-coded source of relationship facts.
- Partnerships routes to the owner-approved Google Calendar appointment URL in
  a new tab with `rel="noopener noreferrer"`. Direct Nielsen contact routes to
  `mailto:contact@nkp4.com`.
- Keep “Don’t just sell the apple. Sell the seeds.” internal; it may guide copy
  but must not appear in public routes or metadata.
- Founder copy may use only the approved progression and builder/operator
  observation quote. Do not publish named employers, consulting clients, the
  failed startup, or funding details.
- Retain the warm editorial direction, a text-only NKP4 wordmark, no portrait
  or photography, and only subtle hover/focus motion. A future owner-provided
  logo and photo are out of scope for this release.
- Remove `/links`, `/secret`, `LinkCard`, and the remaining dormant personal
  site components after a reference check. Rewrite `README.md` for the NKP4
  project rather than deleting it.
- Keep NKP4 Technology and SureHelp descriptions high-level. Do not publish a
  fixed service menu, product list, metrics, or unsupported ownership claims.

### Required implementation refinements

1. Add a narrowly scoped client component for the interactive industry filter;
   keep the surrounding page, shared shell, and portfolio data server-first.
2. Add `eslint.config.mjs` for ESLint 9 and change the lint command to
   `eslint .`. Add a `typecheck` script for `tsc --noEmit`.
3. Extend the change map to include `README.md` (rewrite), `eslint.config.mjs`
   (add), the industry-filter component (add), and the dormant personal-site
   components (conditional removal after reference checks).
4. Treat this route set as the public release surface: `/`, `/companies`,
   `/companies/nkp4-technology`, `/companies/surehelp`,
   `/companies/manifest-network`, `/about`, and `/contact`. `/links` and
   `/secret` must return 404 after removal.

### Reproducible verification

Run these commands after implementation:

```bash
npm run typecheck
npm run lint
npm run build
```

Start the webpack development server with `npm run dev`, then verify HTTP 200
responses for every public route in the release surface and HTTP 404 responses
for `/links` and `/secret`. At desktop and a 390px-wide mobile viewport, verify
the navigation, interactive industry filter, all card/detail relationship
labels, keyboard focus, Calendar new-tab behavior, and contact mail link.

Scan only shipped source/assets for stale public content:

```bash
rg -n 'hello@nkp4\.com|your\.email@example\.com|yourusername|Build\. Operate\. Invest\.' app components data public
```

The scan must return no matches after retired files are removed. Do not scan
source-of-truth documents or archived/retired files.

### Final coverage matrix

| # | Guardrail (source §) | Tier | Mark | Evidence |
|---|---|---|---|---|
| 1 | Founder-led portfolio headquarters, not a generic holding company (§00 Primary rule) | STANDARD | ADDRESSED | Approved public scope requires the four-part framework, portfolio-first presentation, and relationship labels. |
| 2 | Never invent portfolio relationships or ownership (§00 Authority) | HIGH | ADDRESSED | Manifest’s approved public wording and all three exact relationship labels are recorded above. |
| 3 | Not a résumé, funnel, influencer page, or logo wall (§01 What the site is not) | STANDARD | ADDRESSED | Founder scope is limited to the progression and quote; portfolio remains evidence, not a logo wall. |
| 4 | Do not appear larger or more institutional than NKP4 is (§01; §06) | STANDARD | ADDRESSED | Owner approved warm editorial, text-only branding, and no institutional photography or excessive motion. |
| 5 | Do not publish unverified service, product, investment, or founder claims (§05; §09) | HIGH | ADDRESSED | Approved public scope limits company copy and specifies the sole Manifest description. |
| 6 | Do not copy reference-site execution (§06) | STANDARD | ADDRESSED | Phase 6 retains the existing direction and uses the references only as constraints, not templates. |

### Citation self-review

**CONFIRMED:** the owner decisions above resolve the previously gated Manifest,
contact, legacy-route, copy, visual, and verification findings. **NEEDS MANUAL
REVIEW:** none before implementation; future logo/photo additions require their
own content and visual review.
