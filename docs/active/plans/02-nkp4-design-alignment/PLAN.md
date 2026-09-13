# Plan 02: NKP4 Design Alignment (salvage amendment to Plan 01)

Status: **Audited 2026-09-12 — GO WITH CHANGES.** Amendments folded in the final section, which is binding. Phase 6 gated on D2 (docs PR merged).
Run order: 02
Date: 2026-09-12
Type: Amendment. Plan 01 stays in place as provenance; this plan supersedes only its conflicting
assumptions (see §2).
Tech spec (owner-approved Phase 3): [`nkp4-design-review.md`](./nkp4-design-review.md). Section
references below (“spec §5.5”) point to it.
Owner decisions: [`DESIGN-DECISIONS.md`](../../DESIGN-DECISIONS.md) (decisions 1–9) and D-10
(spec §9).
Provenance: [Plan 01](../01-nkp4-website-alignment/PLAN.md) and the unmerged implementation
`origin/01-nkp4-website-alignment` at `23cee3a`.
Release checks script: [`verify-design.sh`](./verify-design.sh) (bash 3.2; `--selftest` passes).

> This plan authorizes nothing by itself. Commit, push, PR, merge, and deploy each still need the
> explicit owner approval required by the project instructions. The Phase 6 kickoff `PROMPT.md` is
> written by Phase 5 from the audited version of this plan.

---

## 1. Goal

Ship the NKP4 site that Plan 01 described, in the design the owner approved in the Phase 3 design
review. Concretely:

1. Salvage the Plan 01 implementation (`23cee3a`) onto current `main` without rebuilding it
   (decision 8).
2. Apply the design review: DigitalMocean at `/companies/digitalmocean`, a single warm editorial
   CSS system, a static homepage portfolio with the filter only on `/companies`, a prominent
   founder band with a progression and the verbatim quote, no photo or photo-shaped tile, quiet
   typographic company marks, and a six-section homepage (decisions 1–7).
3. Point every “Work with DigitalMocean” link at `mailto:contact@nkp4.com` (D-10).
4. Prove all of the above with reproducible gates (§7) before any preview or production step.

**Settled — do not reopen:** DigitalMocean is the public company name; decisions 1–9; D-10. If the
code contradicts this plan mid-build, follow the `phase6-build` divergence protocol. Do not settle
a product question by inference.

## 2. Relationship to Plan 01 — supersession rule

**Rule.** (1) Where Plan 02 and Plan 01 conflict, **Plan 02 wins**. (2) Where Plan 02 is silent,
Plan 01's final section **“Audit amendments — 2026-08-27 (owner decisions closed)”** stays
binding. (3) Everything else in Plan 01 is provenance only: its original owner-gate list, the wave
text, the first gated audit amendment, `PROMPT.md`, and the build notes and `PROGRESS.md` that
exist only on `origin/01-nkp4-website-alignment`. Plan 01's files are not edited. The PM records
the supersession in the build queue.

### 2.1 Plan 01 requirements that remain binding

| Plan 01 requirement (final amendment) | Where Plan 02 enforces it |
|---|---|
| Public framework heading `Build. Operate. Equip. Invest.` | T5.1, G4 |
| Manifest: published as `Investment`, description exactly “An outside investment in a Web3 company focused on Proof of Authority.”, CTA to `https://manifest.network/` in a new tab | T4.1, T5.3, G4 |
| Labels `Operating Company` (now DigitalMocean) and `Founder & Operator` (SureHelp). Industry stays separate from relationship. Nothing implies ownership of Manifest. | T4.1, T4.6 |
| Filter options and results come from `data/portfolio.ts` only. The client component is used only for filter state. | T4.8 |
| Partnerships → owner-approved Google Calendar URL, new tab, `rel="noopener noreferrer"`. Nielsen → `mailto:contact@nkp4.com`. | T4.2, G4 |
| The “seeds” line stays internal. | T5.1 copy table, G3 scan |
| Founder copy limited to the progression and the builder/operator quote. No named employers, consulting clients, failed startup, or funding. | T4.4, T5.4, G5 copy review |
| Warm editorial direction, text-only NKP4 wordmark, no portrait or photography, only subtle hover/focus motion | W3, T4.3, G4 |
| `/links`, `/secret`, `LinkCard`, and the dormant personal-site components removed; `README.md` rewritten for NKP4 | W1 (carried from `23cee3a`), T6.2, G4 |
| High-level company descriptions only: no service menu, product list, metrics, or ownership claims | T4.1, G5 copy review |
| ESLint 9 flat config, `npm run lint` = `eslint .`, `npm run typecheck` = `tsc --noEmit` | W1 (carried), G1 |
| `/links` and `/secret` return 404 | G4 |
| `typecheck`, `lint`, `build`, and the scoped stale-content scan | G1–G3 (scan extended) |
| Approval boundary: separate owner approval for commit and push; production deploy not authorized | §6, §9 |
| Preview/staging verification before any production action | W7 |

### 2.2 Plan 01 assumptions that Plan 02 supersedes

| Plan 01 said | Superseded by | Plan 02 requirement |
|---|---|---|
| “NKP4 Technology” as a public company name (goal, acceptance criteria, approved scope) | DESIGN-DECISIONS standing context | “DigitalMocean” everywhere public. `NKP4 Technology` is added to the stale scan. |
| Release route `/companies/nkp4-technology` (final amendment, refinement 4; `PROMPT.md`) | Decision 1 | `/companies/digitalmocean` returns 200; `/companies/nkp4-technology` returns 404. No redirect, because the old slug never shipped. |
| “One mixed portfolio grid with an interactive industry filter” (unscoped) | Decision 3 | Homepage grid is static. The filter exists only on `/companies`. |
| Homepage contact routing as a single link to `/contact` (branch) | Decision 7, spec §5.7 | Four inline contact routes shared with `/contact` through `data/contact.ts` |
| Contact “Technology” route → DigitalMocean detail page (branch) | D-10 | `mailto:contact@nkp4.com`, same tab, on `/`, `/contact`, and `/companies/digitalmocean` |
| Founder arc as a short paragraph plus a monogram tile (branch) | Decisions 4–5 | Full-width founder band: `<ol>` progression, verbatim `<blockquote>`, no image, no tile |
| “Revise or replace `public/og-card.svg`” | Spec §3.3 | A 1200×630 PNG `public/og-card.png` is the `og:image`/Twitter image; the SVG is removed |
| “Review `public/designer-coder-portrait.png`” | Decision 5 | Not carried onto the Plan 02 branch |
| Multi-value `industry` array (branch data) | Decision 3, spec §6.1 | One display label per company; filter is All + 3 |
| `PROMPT.md` and `phase6-build …/01-nkp4-website-alignment/` as the build entry point | Decision 9, this plan | Build runs from Plan 02's Phase 5 `PROMPT.md` only. **Do not run Phase 6 on Plan 01.** |
| Wave 0 “confirm owner gates” | Closed by decisions 1–9 and D-10 | No open owner gates (spec §9) |

## 3. Dependencies and preconditions

| # | Dependency | Owner | Blocks |
|---|---|---|---|
| D1 | Phase 5 audit of this plan returns GO (or GO WITH CHANGES, folded in), and Phase 5 writes `PROMPT.md` | Phase 5 lane | Phase 6 start |
| D2 | The docs branch `nkp4-design-review` (DESIGN-DECISIONS, handoff, this plan folder) is merged to `main` through a PR, with owner approval, **before** the build branch is cut. The build branch then carries its own plan. | PM + owner | W1 |
| D3 | `origin/01-nkp4-website-alignment` still resolves to `23cee3a` and is not deleted or force-pushed before Plan 02 closes out. It is the salvage source and the rollback reference. | PM | W1, rollback |
| D4 | Since `b462ad1`, `main` has changed only `package-lock.json` and `docs/` (checked in G0). If other paths changed, stop and re-plan the salvage. | Phase 6 lane | W1 |
| D5 | PM records the Plan 02 build-queue row (§10). This lane does not write `00-BUILD-QUEUE.md`. | PM | Visibility only |
| D6 | Tools on the build machine: Node ≥ 20 (Air has v24.6.0), `rg`, `perl`, `curl`, `rsvg-convert` (Homebrew `librsvg`; present on `rcDBNull-800`) | Phase 6 lane | W6, G3–G4 |

## 4. Branch strategy

- **Build branch:** `02-nkp4-design-alignment`, cut from `origin/main` after D2.
- **Salvage method: path checkout, not an in-place rebase of `01-nkp4-website-alignment`.**
  `23cee3a` is one commit on top of `b462ad1`, and `main` has moved only in
  `package-lock.json`/`docs/`. Checking out the non-doc paths from `23cee3a` onto the new branch
  gives exactly what a rebase would. It also leaves out the three things the rebase must not
  carry: the Plan 01 doc edits (provenance stays on the old branch), the unreferenced portrait
  PNG, and a stale lock file. It also avoids force-pushing the provenance branch, which preserves
  decision 8's “salvage and rebase onto current `main`” outcome while keeping the original
  recoverable.
- `origin/01-nkp4-website-alignment` is left untouched. Phase 7 close-out deletes it after Plan 02
  ships.
- **One commit per wave (W1–W6)** with conventional-commit subjects (listed per wave), each made
  only with owner approval as `PROMPT.md` states. W2 (reformat) must be its own commit so the
  design diff can be reviewed alone (spec §7 item 9).
- One PR from `02-nkp4-design-alignment` to `main`. A preview deployment, if the hosting
  integration creates one for the PR, is where W7's manual checks run. Production deploy is out
  of scope for this plan.

## 5. Wave map and file-level tasks

Paths are repository-relative. “Branch” means `23cee3a`. Every wave ends at a gate from §7, and
a later wave does not start until the earlier gate passes.

### W0 — Preconditions and baseline (no file changes)

- **T0.1** Run gate **G0** (§7). If it fails, stop and report. Do not improvise a rebase.
- **T0.2** Create the branch: `git switch -c 02-nkp4-design-alignment origin/main`.

### W1 — Salvage `23cee3a` onto `main` · commit `chore: salvage Plan 01 implementation onto main`

- **T1.1** Bring the implementation paths over byte-for-byte:

  ```bash
  git checkout 23cee3a -- .gitignore README.md eslint.config.mjs next.config.ts package.json tsconfig.json \
    app/globals.css app/layout.tsx app/page.tsx app/about/page.tsx app/contact/page.tsx \
    app/companies/page.tsx 'app/companies/[slug]/page.tsx' \
    components/ContactRouteCard.tsx components/PageShell.tsx components/PortfolioCard.tsx \
    components/PortfolioFilter.tsx components/SiteFooter.tsx components/SiteNav.tsx \
    data/portfolio.ts public/og-card.svg
  ```

- **T1.2** Apply the branch's deletions:

  ```bash
  git rm -q app/links/page.tsx app/secret/page.tsx components/About.tsx components/Blog.tsx \
    components/Contact.tsx components/Footer.tsx components/Hero.tsx components/LinkCard.tsx \
    components/Navigation.tsx components/Portfolio.tsx
  ```

- **T1.3** Do **not** bring over `public/designer-coder-portrait.png` (decision 5),
  `docs/active/plans/01-nkp4-website-alignment/{PLAN,PROGRESS}.md` (provenance), or the branch's
  lock file (it has none; `main`'s lock stays).
- **T1.4** Remove the legacy `.eslintrc.json`. ESLint 9 flat config ignores it, and Plan 01's audit
  amendment 4 names it as legacy: `git rm -q .eslintrc.json`.
- **T1.5** `npm ci`. The lock file must stay unchanged (the dependency ranges on the branch equal
  `main`'s; only the scripts differ).
- **Why safe:** the resulting tree matches a build that already passed typecheck, lint, build, and
  route checks on 2026-08-27 (branch `PROGRESS.md`). The only difference is the newer dependency
  lock that `main` already ships.
- **Gate:** G1.

### W2 — Reformat, no behavior change · commit `style: reformat salvaged routes and components`

- **T2.1** Reformat the one-line files into conventional multi-line TSX (one JSX element per line,
  two-space indent, top-level `const` data blocks on their own lines):
  `app/page.tsx`, `app/about/page.tsx`, `app/contact/page.tsx`, `app/companies/page.tsx`,
  `app/companies/[slug]/page.tsx`, `components/{ContactRouteCard,PageShell,PortfolioCard,PortfolioFilter,SiteFooter,SiteNav}.tsx`,
  `data/portfolio.ts`. Do not rename identifiers, reorder JSX, or change strings or classes.
- **Why safe:** whitespace-only in TSX. The rendered HTML is compared before and after.
- **Gate:** G2.

### W3 — One CSS system · commit `refactor: collapse globals.css to the warm editorial system`

All in `app/globals.css`. Line numbers refer to the salvaged file (1,981 lines) and are confirmed
before editing.

- **T3.1** Keep line 1 `@import "tailwindcss";`. **Delete lines 2–1353** (dark `:root`, terminal,
  PICO, and designer systems). *Phase 4 refinement:* the spec says “1–1353”, but line 1 is the
  Tailwind import that supplies the base reset, so it stays.
- **T3.2** Move the `.hq-site` custom properties (branch `:1360-1368`) to `:root`. Rename and adjust
  them to the spec §4.2 token table: `--paper #f5f0e8`, `--paper-soft #ebe3d6`, `--ink #141414`,
  `--muted-ink #5f5a52`, `--line-ink rgba(20,20,20,.14)`, `--accent-rust #9a4a26`. Add
  `color-scheme: light`. Keep exactly one `body` rule.
- **T3.3** Delete `.hq-structure-*` (`:1546-1567`, `:1958+` media block), every `.hq-founder-mark`
  rule (`:1655`, `:1760-1766`), and `.hq-hero-panel` with its responsive overrides (`:1520-1545`,
  `:1896-1897`).
- **T3.4** Apply the spec §4.2 type scale, spacing rhythm, 64px nav, and motion rules:
  - `h1` in the hero and page hero: `clamp(2.6rem, 7vw, 6rem)`, `line-height .95`, `max-width 14ch`
  - section `h2`: `clamp(1.9rem, 4vw, 3.2rem)`; card `h3`: `clamp(1.5rem, 2.4vw, 2.2rem)`
  - section padding: `clamp(56px, 8vw, 112px)` / `clamp(18px, 5vw, 72px)`; content max 1200px;
    prose max 64ch
  - motion only on `:hover` and `:focus-visible` (border color, translate ≤ 2px), wrapped in
    `@media (prefers-reduced-motion: no-preference)`
  - remove `.hq-company-card { min-height: 360px }` (`:1905-1907`)
- **T3.5** Focus and contrast. *Phase 4 refinement from measured ratios:*
  - Rust `#9a4a26` passes as text on `--paper` (5.47:1) and `--paper-soft` (4.88:1), but on the ink
    band it is only 2.97:1.
  - On the ink founder band, links and focus rings use `--paper`; rust may appear only as the
    decorative quote rule.
  - On paper grounds, `:focus-visible` is a 2px `--accent-rust` outline with a 3px offset.
- **Why safe:** after W1 the only classes in `app/` and `components/` are `hq-*` and `is-active`
  (G3 check). Nothing consumes the deleted blocks.
- **Gate:** G3 (static part). Do a visual sanity check of all routes on the local server.

### W4 — Data and shared primitives · commit `feat: add design-review data model and primitives`

- **T4.1 `data/portfolio.ts`**
  - `slug: "digitalmocean"` for DigitalMocean.
  - `industry: string` (one label): DigitalMocean `AI & Technology`, SureHelp `Insurtech`, Manifest
    `Web3`.
  - `accent`: DigitalMocean `#8a6a3a`, SureHelp `#7a4632`, Manifest `#6c5a42`.
  - Add `href?: string` (CTA destination, separate from `website`). DigitalMocean
    `href: "mailto:contact@nkp4.com"`; SureHelp none; Manifest keeps `website` and has no `href`.
  - Add an optional `logo?: string` type field (unused this release; spec §4.3).
  - `getPortfolioIndustries()` returns `["All", ...unique industry]` (4 values).
  - Descriptions, names, labels, and CTAs are unchanged from the branch.
- **T4.2 `data/contact.ts` (new).** Export `type ContactRoute = { label; title; href; external?:
  boolean }`, `calendarUrl` (the value moved verbatim from the branch's `app/contact/page.tsx`), and
  `contactRoutes`, in this order:
  - `Technology` · `Work with DigitalMocean` · `mailto:contact@nkp4.com`
  - `Insurance` · `Explore SureHelp` · `/companies/surehelp`
  - `Partnerships` · `Book a conversation` · `calendarUrl` · `external: true`
  - `Nielsen` · `contact@nkp4.com` · `mailto:contact@nkp4.com`

  Also export `contactEmail = "contact@nkp4.com"`, used by the footer.
- **T4.3 `components/CompanyMark.tsx` (new, server).** Props `{ company, size: "card" | "detail" }`.
  - Renders an `aria-hidden` square: 64px on cards, 96px on detail pages, 48px at ≤640px.
  - 1px `--line-ink` border, background `color-mix(in srgb, var(--accent) 14%, var(--paper))`, ink
    initials from `logoText`.
  - If `logo` is set, render `<img alt="">` in the same box. Never set this release (G4 asserts no
    `<img>`).
- **T4.4 `components/FounderProgression.tsx` (new, server).** Props
  `{ variant: "band" | "full" }`. One exported `founderSteps` array renders as an `<ol>`, with
  arrows drawn in CSS.
  - `band` captions (spec §5.5, ≤6 words, no employers/dates/titles):
    - Bay Area — “raised in Silicon Valley”
    - Technology — “learned inside fast-growing companies”
    - Operator — “finds the friction, builds systems”
    - Founder — “built his own companies”
    - NKP4 — “one home for what comes next”
  - `full` adds one 2–3 sentence paragraph per step, written only from
    `02-FOUNDER-STORY.md` §1 (Bay Area), §2 lessons list (no employer names), §4 operator pattern,
    §5 first sentence only (no failure or funding), and §7 NKP4. Phase 5 and G5 review this copy.
  - Must not render `<section>`, because the homepage section count is asserted.
- **T4.5 `components/FormulaSequence.tsx` (new, server).** Renders the four terms as an ordered
  sequence (no boxes), each with its line:
  - Accountability — “Own the outcome.”
  - Predictability — “Make results reliable.”
  - Profitability — “Build durable value.”
  - Scalability — “Repeat what works.”

  Arrows are CSS; they rotate downward below 640px. No `<section>`.
- **T4.6 `components/RelationshipChip.tsx` (new, server).** Renders the relationship label as text.
  `Operating Company` and `Founder & Operator` get a filled ink chip; `Investment` gets an outlined
  chip. Color is never the only signal. Used by both the card and the detail page, so the treatment
  cannot drift.
- **T4.7 `components/PortfolioCard.tsx`.** Order: `CompanyMark` (card) → industry → `h3` name →
  description → `RelationshipChip` → “View →”. The whole card links to `/companies/<slug>`, and
  there is no inline `style` beyond `--accent`.
- **T4.8 `components/PortfolioFilter.tsx`.** Match on `company.industry === selected`. Wrap the
  chip row in a horizontally scrollable container. Add
  `<p aria-live="polite">Showing {visible.length} of {companies.length}</p>`. Keep `aria-pressed`
  and the “All” initial state, so server HTML shows all cards.
- **T4.9 `components/ContactRouteCard.tsx`.** Import the type from `data/contact.ts`. For `external`
  routes, append `↗` (`aria-hidden`) and `<span className="hq-visually-hidden">(opens in new
  tab)</span>`, keeping `target="_blank" rel="noopener noreferrer"`. Non-external routes (including
  every `mailto:`) get no `target`.
- **T4.10 `components/SiteNav.tsx`, `components/PageShell.tsx`.** `PageShell` accepts
  `current?: "companies" | "about" | "contact"` and passes it to `SiteNav`, which sets
  `aria-current="page"` on the matching link. *Phase 4 refinement:* this keeps both server
  components; `usePathname` would make the nav a client island.
- **T4.11 `components/SiteFooter.tsx`.** Add a `mailto:` link showing `contactEmail`. No LinkedIn.
- **T4.12 `app/globals.css`.** Add styles for `hq-mark`, `hq-chip` (filled/outline), `hq-progression`
  (horizontal ≥960px, vertical rule + dots <960px), `hq-formula`, `hq-filter-scroll`, and
  `hq-visually-hidden`.
- **Why safe:** the data shape changes in one module, and `tsc` catches every consumer. The new
  components are presentational server components with no client state. `PortfolioFilter` stays
  the only client island.
- **Gate:** G3 (static).

### W5 — Routes to the wireframe · commit `feat: rebuild homepage and routes to the design review`

- **T5.1 `app/page.tsx`.** Exactly six `<section>` elements inside `PageShell`, in order, using the
  strings below. Copy is verbatim from the spec or source; the hero `h1` is the spec's PM proposal
  and gets copy review in Phase 5.

  | # | `id` | Content |
  |---|---|---|
  | 1 | `hero` | Eyebrow “Founded by Nielsen Aragon”. h1 “The holding company for what Nielsen Aragon builds.” Lead: “NKP4 is the business home for companies, technology, investments, and ideas built or backed by Nielsen Aragon.” Primary link “Explore the portfolio” → `#portfolio`; text link “Let's connect →” → `#connect`. Framework rule line “Build · Operate · Equip · Invest”. No `<aside>`. |
  | 2 | `portfolio` | Eyebrow “Portfolio”. h2 “What NKP4 builds, operates, and backs.” Summary “Every entry states its relationship to NKP4.” `portfolioCompanies.map(PortfolioCard)` (**no `PortfolioFilter`, no `<button>`**). “All companies →” → `/companies`. |
  | 3 | `framework` | Eyebrow “What NKP4 does”. h2 “Build. Operate. Equip. Invest.” Four numbered unboxed columns, copy verbatim from `08-HOMEPAGE-ARCHITECTURE.md:79-89`: Build “Create companies, products, software, and new ventures.” · Operate “Help businesses build stronger systems and execute consistently.” · Equip “Give founders and operators access to modern technology, operating knowledge, and resources.” · Invest “Participate in opportunities where NKP4 can contribute more than capital.” |
  | 4 | `founder` | Full-bleed ink band. Eyebrow “Founder”. h2 “Nielsen Aragon — builder and operator.” `<FounderProgression variant="band" />`. `<figure><blockquote>I sit, observe, immerse myself, then build the thing that gives people their time back.</blockquote><figcaption>— Nielsen Aragon</figcaption></figure>`. Link “Read the story →” → `/about`. |
  | 5 | `philosophy` | `--paper-soft` band. Eyebrow “Operating philosophy”. h2 “Accountability → Predictability → Profitability → Scalability”. `<FormulaSequence />`. The branch heading “Make the work stronger at every step.” is removed. |
  | 6 | `connect` | Eyebrow “Connect”. h2 “Let's connect.” Line “Choose the path that fits the conversation.” `contactRoutes.map(ContactRouteCard)` in a 2×2 grid. |

- **T5.2 `app/companies/page.tsx`.** `PageShell current="companies"`. Keep the h1/lede and
  `PortfolioFilter`. The h1 wraps to ≤3 lines at 390px (G5).
- **T5.3 `app/companies/[slug]/page.tsx`.** Order:
  - “← All companies” (`/companies`)
  - `CompanyMark` (detail), industry eyebrow, `h1` name
  - `RelationshipChip` directly under the name
  - description rendered **once**
  - CTA

  Remove `.hq-detail-grid`, the second description, and the second relationship. The CTA renders
  when `company.href ?? company.website` is set; `target="_blank" rel="noopener noreferrer"` only
  when that destination starts with `http`. SureHelp therefore has no CTA,
  `/companies/digitalmocean` shows the mailto link in the same tab, and Manifest opens in a new
  tab. `generateStaticParams` and `notFound()` are unchanged, so an unknown slug returns 404.
  *Phase 4 refinement:* spec §6.2's “NKP4 relationship · one factual line” is **not** rendered,
  because no approved per-company relationship sentence exists; the chip carries the relationship.
- **T5.4 `app/about/page.tsx`.** `PageShell current="about"`. Page hero with the eyebrow “About
  Nielsen” and a mobile-safe h1 (≤3 lines at 390px), followed by:
  - `<FounderProgression variant="full" />`
  - the same `<figure><blockquote>` quote
  - `<FormulaSequence />`
  - a contact CTA to `/contact`

  Delete the “keeps the institution first…” sentence and `.hq-story-grid`. No `<img>`.
- **T5.5 `app/contact/page.tsx`.** `PageShell current="contact"`. Keep the h1 “Start with the right
  door.” Render `contactRoutes` from `data/contact.ts` and remove the inline `routes` and
  `calendarUrl`.
- **T5.6 `app/globals.css`.** In the same commit, delete the rules whose markup W5 removes:
  `.hq-pillars`, `.hq-pillar-grid`, `.hq-story-grid`, `.hq-detail-grid`, `.hq-contact-band`, and
  any leftover `.hq-founder-mark` or `.hq-hero-panel`. Add the section treatments: unboxed
  framework columns, the ink founder band, and the paper-soft philosophy band.
- **Why safe:** routes compose W4 primitives; the route set and static generation are unchanged
  except the slug. G4 asserts every structural decision.
- **Gate:** G3 + G4.

### W6 — Assets and developer docs · commit `chore: PNG OG card and NKP4 README routes`

- **T6.1 OG image.**

  ```bash
  rsvg-convert -w 1200 -h 630 -f png -o public/og-card.png public/og-card.svg
  git rm -q public/og-card.svg
  ```

  In `app/layout.tsx`, set `openGraph.images[0].url` and `twitter.images[0]` to `/og-card.png`
  (also set `type: "image/png"`) and keep `alt`. Open the PNG and confirm the serif headline
  rendered (not a fallback box). If `rsvg-convert` falls back to the wrong font, stop and report;
  do not add a dependency.
- **T6.2 `README.md`.** Update the route list to `/companies/digitalmocean`, and note
  `verify-design.sh` as the release check.
- **Gate:** G3 + G4 (OG checks).

### W7 — Verification, PR, and preview (no production action)

- **T7.1** Run G3, G4, and G5 in full on the final tree. Record results in the Plan 02
  `PROGRESS.md` (created by Phase 6).
- **T7.2** After owner approval, push with `git push origin 02-nkp4-design-alignment` and open one
  PR to `main` that states the Plan 02 supersession rule and G-gate results.
- **T7.3** If the PR gets a preview deployment, repeat G4 against it
  (`verify-design.sh https://<preview-host>`) and the G5 manual checks there. Production deploy and
  merge need separate owner approval and are **not** part of this plan.

## 6. File-level change map (final tree vs `origin/main`)

| Action | Path | Wave |
|---|---|---|
| Carry from `23cee3a` | `.gitignore`, `eslint.config.mjs`, `next.config.ts`, `package.json`, `tsconfig.json` | W1 |
| Carry, then modify | `README.md`, `app/globals.css`, `app/layout.tsx`, `app/page.tsx`, `app/about/page.tsx`, `app/contact/page.tsx`, `app/companies/page.tsx`, `app/companies/[slug]/page.tsx`, `components/{ContactRouteCard,PageShell,PortfolioCard,PortfolioFilter,SiteFooter,SiteNav}.tsx`, `data/portfolio.ts` | W1→W2–W6 |
| Add | `data/contact.ts`, `components/CompanyMark.tsx`, `components/FounderProgression.tsx`, `components/FormulaSequence.tsx`, `components/RelationshipChip.tsx`, `public/og-card.png` | W4, W6 |
| Delete | `.eslintrc.json`, `app/links/page.tsx`, `app/secret/page.tsx`, `components/{About,Blog,Contact,Footer,Hero,LinkCard,Navigation,Portfolio}.tsx` | W1 |
| Carry then delete | `public/og-card.svg` | W1→W6 |
| Never add | `public/designer-coder-portrait.png`; any `docs/active/plans/01-*` edits | — |
| Unchanged | `package-lock.json` (must stay `main`'s), `postcss.config.js`, `tailwind.config.ts`, all `docs/` outside the Plan 02 folder | — |

## 7. Verification gates (reproducible)

Run from the repository root. A failing gate stops the wave.

**G0 — preconditions**

```bash
git fetch origin
test "$(git rev-parse origin/01-nkp4-website-alignment)" = "$(git rev-parse 23cee3a)"
git diff --quiet b462ad1 origin/main -- . ':(exclude)docs' ':(exclude)package-lock.json'
git ls-tree --name-only origin/main docs/active/plans/02-nkp4-design-alignment/PLAN.md | grep -q PLAN.md
```

**G1 — salvage parity and health**

```bash
git diff --exit-code 23cee3a -- .gitignore README.md eslint.config.mjs next.config.ts package.json tsconfig.json app components data public/og-card.svg
test -z "$(git ls-files public/designer-coder-portrait.png .eslintrc.json app/links app/secret)"
git diff --exit-code origin/main -- package-lock.json
rm -rf .next .next-dev && npm run typecheck && npm run lint && npm run build
```

`rm -rf` clears stale generated Next types from the removed routes (Plan 01 build note).

**G2 — reformat parity.** Before and after W2, on the production server (see G4 for the start
command), save the text of every route and diff it:

```bash
OUT="$TMPDIR/g2/before"   # set to "$TMPDIR/g2/after" for the second run
mkdir -p "$OUT"
for r in / /companies /companies/nkp4-technology /companies/surehelp /companies/manifest-network /about /contact; do
  curl -s "http://127.0.0.1:3002$r" | perl -0777 -pe 's/<script\b.*?<\/script>//gs; s/<link\b[^>]*>//g' > "$OUT/$(echo "$r" | tr / _).html"
done
```

Run the loop once before W2 and once after it (rebuild and restart the server in between), then
`diff -r "$TMPDIR/g2/before" "$TMPDIR/g2/after"`. The diff must be empty. The slug is still `nkp4-technology` at W2; it changes in W4. Also run G1's
typecheck/lint/build.

**G3 — static checks (W3 onward; full run at W7)**

```bash
rm -rf .next && npm run typecheck && npm run lint && npm run build
rg -n 'hello@nkp4\.com|your\.email@example\.com|yourusername|Build\. Operate\. Invest\.|nkp4-technology|NKP4 Technology|designer-coder-portrait|Sell the seeds' app components data public README.md   # expect no output
test "$(rg -c '^body \{' app/globals.css)" = "1"
rg -n 'color-scheme: dark|hq-structure|hq-founder-mark|hq-hero-panel|gradient\(' app/globals.css   # W3+: expect no output
rg -n 'hq-founder-mark|hq-hero-panel|hq-story-grid|hq-detail-grid|hq-pillar' app components         # W5+: expect no output
rg -n 'className=' app components | rg -v 'hq-|is-active'   # expect no output
```

If the last check matches, the line uses a non-`hq-` class. Give it a rule or remove it. Between W3
and W5, the salvaged homepage still renders the unstyled `hq-founder-mark` and `hq-hero-panel`
markup. That is expected; W5 removes it.

**G4 — rendered-HTML release checks (W5 onward)**

```bash
bash docs/active/plans/02-nkp4-design-alignment/verify-design.sh --selftest
npm run build && npm run start -- --hostname 127.0.0.1 --port 3002 &   # separate terminal is fine
bash docs/active/plans/02-nkp4-design-alignment/verify-design.sh http://127.0.0.1:3002
```

The script must end `0 failed`. It asserts:

- the 200/404 route set
- D-10 mailto, same tab, on `/`, `/contact`, and `/companies/digitalmocean`
- no old-slug links
- six homepage sections, `#portfolio` with no `<button>`, `#connect` present
- no `<img>`, an `<ol>` progression, the verbatim `<blockquote>` quote, and no monogram tile on `/`
  and `/about`
- `/companies` has 4 chips with `aria-pressed` and an `aria-live` count
- Manifest CTA is a new tab with `noopener noreferrer`; the Calendar route is present
- `og:image` is `/og-card.png`, served as `image/png`

Also check `sips -g pixelWidth -g pixelHeight public/og-card.png` → 1200 × 630.

**G5 — manual and browser checks.** Use the local production server and, in W7, the preview.
Viewports 390×844 and 1440×900.

1. At 390×844, the `#portfolio` h2 is visible without scrolling. The hero h1 is ≤3 lines.
2. At 390×844, the founder quote and `#connect` are reached within about 5 screen-heights
   (`document.querySelector('#connect').offsetTop / innerHeight ≤ 5`).
3. There is no horizontal page overflow: `document.documentElement.scrollWidth <= innerWidth` on
   every route. On `/companies`, only the chip row scrolls.
4. Keyboard: tab order runs nav → content → footer. Rust focus rings are visible on paper; paper
   rings are visible on the founder band. Filter chips toggle with Space/Enter, and the count
   updates.
5. The current nav link has `aria-current="page"` on `/companies`, `/about`, and `/contact`.
6. Mouse and keyboard: the Calendar route opens a new tab; every mailto opens in the same tab;
   Manifest opens a new tab.
7. Contrast spot-checks with the §4.2 tokens: muted ink on `--paper-soft` 5.37:1; rust links on
   paper 5.47:1 and on `--paper-soft` 4.88:1; paper on ink 16.24:1. No rust text on ink.
8. Copy review against `07-CONTENT-RULES.md`: no employers, clients, dates, failure, funding, seeds
   line, service menu, metrics, or labels such as “visionary”. Manifest description is verbatim.
9. Homepage framework, founder band, and formula look visually distinct (no repeated card grid).

**G6 — PR hygiene (W7).** Commits follow the conventional subjects above with the required
`Co-Authored-By` trailer. The PR diff contains no `docs/active/plans/01-*`, lock, or portrait
changes (`git diff --stat origin/main...HEAD`).

## 8. Acceptance criteria

| # | Criterion | Decision | Proven by |
|---|---|---|---|
| AC1 | DigitalMocean lives at `/companies/digitalmocean`; `/companies/nkp4-technology` is 404; no public “NKP4 Technology” or old-slug reference | 1 | G3 scan, G4 |
| AC2 | One warm editorial CSS system: one `body`, light `color-scheme`, §4.2 tokens, no gradients or scroll effects, only hover/focus motion under reduced-motion guard | 2 | G3, G5.9 |
| AC3 | Homepage portfolio is static with an “All companies” link; `/companies` has the only filter (All + 3), with `aria-pressed` and a live count | 3 | G4 |
| AC4 | Homepage founder band is full-bleed and contains an `<ol>` 5-step progression and the verbatim quote in `<blockquote>`; `/about` expands the same arc | 4 | G4, G5.8 |
| AC5 | No `<img>` or monogram tile on `/` and `/about`; the portrait PNG is not in the tree | 5 | G1, G4 |
| AC6 | One `CompanyMark` on cards and detail pages; relationship chip is filled or outlined by type and always printed as text | 6 | G5 visual, code review |
| AC7 | Exactly six homepage content sections in the §5 order with distinct treatments; no “working on now” section | 7 | G4, G5.9 |
| AC8 | Salvaged from `23cee3a` onto current `main` (not rebuilt); provenance branch intact; lock is `main`'s | 8 | G0, G1, G6 |
| AC9 | Every “Work with DigitalMocean” link is `mailto:contact@nkp4.com`, same tab, on `/`, `/contact`, and the detail page | D-10 | G4 |
| AC10 | All §2.1 Plan 01 binding requirements hold (Manifest, labels, Calendar/mailto behavior, seeds internal, legacy routes 404) | Plan 01 | G3, G4, G5 |
| AC11 | Mobile: portfolio heading on screen 1; quote and connect within about 5 screens; no page overflow | 7, source mobile rule | G5.1–3 |
| AC12 | `og:image` and Twitter image are a 1200×630 PNG with alt text | spec §3.3 | G4 |
| AC13 | `typecheck`, `lint`, and `build` pass; `verify-design.sh` reports 0 failed | — | G3, G4 |

## 9. Rollback

- **Before merge (all waves):** nothing reaches `main` or production. To discard one wave, run
  `git revert <wave-commit>` on the branch; each wave is a single commit. To abandon entirely, stop
  the PR. `origin/01-nkp4-website-alignment@23cee3a` still holds the original implementation, and
  `main` is untouched. Do not delete either branch before Phase 7.
- **Mid-build owner change or divergence:** stop at the current gate, keep the passed waves, and
  return to Phase 4/5 to amend this plan. Do not patch around a failed gate.
- **After an approved merge (outside this plan's authority):** revert the merge commit on `main`
  through a PR (`git revert -m 1 <merge-sha>`). This restores the placeholder site that production
  reflects today. No data, redirects, or external systems are involved: the site is static, and no
  old URL shipped.
- Never delete source-of-truth docs, the Plan 01 folder, or this plan folder as part of rollback.

## 10. Build-queue update for the PM (this lane does not write the queue)

- Plan 01 row → state `superseded in part — provenance`, gated on `do not build; see Plan 02`.
- Plan 02 row → `| 02 | [NKP4 Design Alignment](plans/02-nkp4-design-alignment/) | drafted — not
  audited | Phase 5 audit; docs PR (D2) merged before Phase 6 |`.
- Next action → `phase5-audit-plan docs/active/plans/02-nkp4-design-alignment/`.

## 11. Out of scope

CMS, photography, real logos, LinkedIn, a “working on now” section, new routes, redirects, a
contact form, dependency additions or upgrades, a production deploy, and any change to Plan 01's
files or the source packet.

## 12. Notes for the Phase 5 audit

Phase 4 refinements to the spec, each flagged inline above:

- (a) keep the Tailwind import on CSS line 1
- (b) no rust text or focus ring on the ink band (2.97:1)
- (c) `aria-current` through a `PageShell` prop, not a client hook
- (d) spec §6.2's relationship line is omitted for lack of approved copy
- (e) `ContactRouteCard` gains the new-tab affordance required by spec §5.7, even though spec §4.1
  lists it as unchanged
- (f) `.eslintrc.json` is removed
- (g) salvage uses a path checkout onto a new branch instead of rebasing the provenance branch in
  place

None reopens an owner decision. Copy that still needs review, none of it an owner gate:

- the hero `h1` proposal
- the `/about` step paragraphs (T4.4)
- the `/about` page `h1`

---

## Audit amendments — 2026-09-12

**Verdict: GO WITH CHANGES.** Confidence: high. Every change below is resolvable by amendment;
none reopens an owner decision (1–9, D-10) or the settled list in §1. Auditor: Phase 5 lane
(`nkp4-phase5-audit` and `nkp4-phase5-audit-2`, Fable) on `rcDBNull-800`, worktree
`~/Dev/personal/nkp4-website-design-review`, branch `nkp4-design-review`.

**Binding rule.** This section is part of the plan. Where it conflicts with §1–§12, this section
wins. Task numbers below amend the named tasks in place; new task numbers (T3.6, T4.13) are
added to their waves. Phase 6 builds from the plan *as amended*. `file:line` references are to the
salvaged tree at `23cee3a` (the same numbering W3 uses) unless another file is named.

### A. Evidence the verdict rests on

| Check | Result |
|---|---|
| G0 today | Passes. `origin/01-nkp4-website-alignment` = `23cee3a`; since `b462ad1`, `main` moved only in `package-lock.json` (and `docs/`). |
| W1 rehearsal (scratchpad: `git archive 23cee3a` + `main`'s lock) | `npm ci` leaves the lock unchanged; `typecheck` ok; `lint` 0 errors / 4 `@next/next/no-html-link-for-pages` warnings; `next build --webpack` ok on next 16.3.5. |
| `verify-design.sh --selftest` | 7/7 pass on bash 3.2. |
| `verify-design.sh` against the `23cee3a` build | 19 pass / 20 fail; every failure is the expected pre-design state (old slug 200, new slug 404, buttons in `#portfolio`, no `<ol>`/`<blockquote>`, SVG OG image). No false positives. |
| OG meta rendering | `<meta property="og:image" content="https://nkp4.com/…"/>`, so the G4 substring match is correct. |
| Section count | 6 with and without the RSC payload stripped, so `count_tag` is stable. |
| G2 loop | Works as written (route text captured, scripts/links stripped). |
| Tools on the Air | `rg`, `perl`, `curl`, `rsvg-convert`, `sips`, node 24.6.0 all present (D6 satisfied). |
| CI / DB | No `.github/` in the repo, no database or migrations: the CI and data rungs of the audit are N/A. |

### B. Findings and binding amendments (F1–F13)

**F1 [MED] — G3 stale scan cannot pass at the W3/W4/W5 gates as sequenced.** After T4.1 renames
the slug, `nkp4-technology` still lives in `README.md:22` (until W6), `data/portfolio.ts:5` (fixed
by T4.1), and `app/contact/page.tsx:5` (until T5.5). Any old-slug link is also a dead link from W4
on.
- *Amendment.* New **T4.13 (W4)**: change `README.md:22` to `/companies/digitalmocean`, and change
  the `href` on `app/contact/page.tsx:5` from the old slug to `mailto:contact@nkp4.com` (D-10).
  T5.5 still replaces the whole inline block in W5; T6.2 keeps only the `verify-design.sh` note.
- *Gate.* The G3 scan line is asserted **from the W4 gate on**. At the W3 gate it may match only
  those three lines; anything else is a failure.

**F2 [MED] — Two gradients survive W3.** `app/globals.css:1442-1443` (`.hq-hero` grid overlay)
and `:1638` (`.hq-company-card` highlight). G3 rejects `gradient\(`, but no task removes them, and
spec §3.2 row 2 (“no gradients” on the branch) is false.
- *Amendment.* New **T3.6 (W3)**: delete the `.hq-hero` overlay pseudo-element rules at
  `:1442-1443` and replace the `:1638` background with flat `var(--paper)`. No `gradient(` remains.

**F3 [MED] — The nav is sticky.** `.hq-nav` is `position: sticky; top: 0; z-index: 20`
(`:1380-1382`); spec §4.2 says non-sticky and Plan 01 W3.2 said prevent sticky.
- *Amendment.* **T3.4** also removes those three declarations; the nav sits in normal flow.
- *Gate.* G3 (W3+) adds: `rg -n 'position: sticky' app/globals.css` → expect no output.

**F4 [MED] — OG headline clips.** Rendering `public/og-card.svg` with `rsvg-convert` (Georgia at
80px) pushes the headline past the right edge of the 1200px canvas.
- *Amendment.* **T6.1**: before converting, set the headline `font-size` in `public/og-card.svg` to
  `64`, convert, open the PNG, and confirm all four headline words are fully visible with a right
  margin. The SVG edit is a working-tree step only; the same W6 commit removes the SVG and adds
  the PNG. `sips` must still report 1200 × 630.

**F5 [MED] — The hero h1 cannot meet G5.1.** “The holding company for what Nielsen Aragon builds.”
(51 chars) at `max-width: 14ch` (~15 chars/line) is 4 lines at 390px.
- *Amendment.* **T5.1 row 1** h1 is **“The home for what Nielsen Aragon builds.”** (40 chars,
  ≤3 lines at 14ch). The lead stays the verbatim line from `08-HOMEPAGE-ARCHITECTURE.md:33`
  (“NKP4 is the business home for companies, technology, investments, and ideas built or backed by
  Nielsen Aragon.”); the builder confirms it is byte-identical to that line. Copy review of the
  h1 is closed by this amendment.

**F6 [LOW] — T1.3 misstates the lock.** `23cee3a` does carry a `package-lock.json`, identical to
`b462ad1`'s (older than `main`'s).
- *Amendment.* **T1.3** reads: do not bring over the branch's `package-lock.json` (it equals
  `b462ad1`'s; `main`'s newer lock stays). T1.1 already omits it; T1.5 and G1 are unchanged.

**F7 [LOW] — `.hq-site` defines two more tokens.** `--line-light` (`:1366`) and `--charcoal`
(`:1367`). `.hq-pillar-grid` (`:1724`) consumes `--line-light` until W5 deletes it. The nav uses
literals `#101010` / `#fffaf2`.
- *Amendment.* **T3.2**: keep `--line-light` in `:root` through W4; **T5.6** deletes it together
  with `.hq-pillar-grid`. Drop `--charcoal` in W3. Replace `#101010` with `var(--ink)` and
  `#fffaf2` with `var(--paper)`.
- *Gate.* G3 adds (W3+): `rg -n -- '--charcoal|#101010|#fffaf2' app/globals.css` → none;
  (W5+): `rg -n -- '--line-light' app/globals.css` → none.

**F8 [LOW] — `--accent` has no source on the detail page.** T5.3 drops the inline style, so
`CompanyMark` would render with no accent there.
- *Amendment.* **T4.3**: `CompanyMark` sets `style={{ "--accent": company.accent }}` on its own
  root element (typed via `React.CSSProperties` cast). **T4.7**: `PortfolioCard` has **no** inline
  `style` at all. T5.3 is unchanged (no inline style on the page).

**F9 [LOW] — Nav is on ink, so T3.5's ink rules apply to it.** Spec §5.1's rust `aria-current`
indicator would be 2.97:1.
- *Amendment.* **T3.5**: the `aria-current="page"` indicator is a 2px `--paper` underline; nav
  focus rings are `--paper`; secondary text on any ink ground (nav, founder band) is `--paper` at
  ≥72% alpha (`color-mix(in srgb, var(--paper) 72%, transparent)` or the rgba equivalent). Rust
  never appears as text or ring on ink (refinement (b) extended to the nav).

**F10 [LOW] — Founder copy.** The band caption “raised in Silicon Valley” contradicts the source
(`02-FOUNDER-STORY.md:24` says Bay Area). The `/about` h1 and step paragraphs were undefined.
- *Amendment.* **T4.4** band caption 1 is **“raised in the Bay Area”**. **T5.4** h1 is
  **“From the Bay Area to NKP4.”** (2 lines at 14ch). The `full` variant paragraphs are the
  reviewed copy in §D below, verbatim.

**F11 [LOW] — More `min-height` rules on the card.** Besides `:1905-1907`, `.hq-company-card`
has `min-height: 440px` (`:1633`) and `min-height: 0` overrides (`:1966-1968`).
- *Amendment.* **T3.4** removes all three; cards size to content.

**F12 [INFO] — T1.4 citation.** `.eslintrc.json` is named legacy in Plan 01's *first* audit
amendment, item 4 (Plan 01 `PLAN.md:249-250`), which §2 clause (3) classes as provenance only.
- *Amendment.* **T1.4** cites Plan 02 refinement (f) as the authority for the removal and the
  Plan 01 lines as provenance. The action is unchanged.

**F13 [INFO] — Optional gate strengthening; lint warnings.**
- *Amendment.* `verify-design.sh` now also asserts `aria-current="page"` on `/companies`, `/about`,
  and `/contact` (T4.10) and that `twitter:image` is `/og-card.png` (T6.1). Selftest count is
  unchanged (7). The 4 `no-html-link-for-pages` warnings are non-blocking: `npm run lint` passes
  at 0 errors, and no wave converts `<a>` to `<Link>` this release (W2 parity, §11 scope).

### C. Coverage matrix (complete)

Status is ADDRESSED, N/A, or OPEN. **Open rows: none.**

| # | Source rule / requirement | Where the plan enforces it | Status |
|---|---|---|---|
| 00-H1 | Source-packet authority: no product question settled by inference | §1 settled list; refinement (d) omits unapproved relationship copy; §D copy adds no facts | ADDRESSED |
| 03/07-H2 | Relationship labels exact (`Operating Company`, `Founder & Operator`, `Investment`); industry separate; nothing implies ownership of Manifest | T4.1 unchanged labels/descriptions, T4.6 chip as text, §2.1, G4 Manifest CTA | ADDRESSED |
| 05-H3 | High-level descriptions only: no service menu, product list, metrics, ownership claims | T4.1 descriptions unchanged from the branch, G5.8 | ADDRESSED |
| 09-H4 | Do not invent contact channels or brand assets | T4.2 approved destinations only (Calendar URL moved verbatim, `mailto:contact@nkp4.com`), no LinkedIn (T4.11), no form/logos/photography (§11), D-10 | ADDRESSED |
| D1–D7 | Design decisions 1–7 | AC1–AC7, G3–G5 | ADDRESSED |
| D8 | Salvage, don't rebuild | §4 path checkout, G0, G1, G6, AC8 | ADDRESSED |
| D9 | Build from Plan 02 only | §2.2 last-but-one row, `PROMPT.md` (Phase 5) | ADDRESSED |
| D-10 | Every “Work with DigitalMocean” → mailto, same tab | T4.2, T4.13, T5.3, G4 `check_dm_cta`, AC9 | ADDRESSED |
| P01 | Plan 01 final-amendment requirements (§2.1, 15 rows) | §2.1 table, AC10 | ADDRESSED |
| CR-1 | Founder copy: no employers, clients, dates, failure, funding, “visionary” labels | T4.4 (as amended), §D, G5.8 | ADDRESSED |
| CR-2 | “Seeds” line internal; Manifest description verbatim | G3 scan, T4.1, G5.8 | ADDRESSED |
| MOB | Mobile rule: portfolio heading on screen 1, quote + connect ≤ ~5 screens, no overflow, h1 ≤3 lines | G5.1–3, F5 h1, F10 h1, AC11 | ADDRESSED |
| A11Y | Contrast, focus, keyboard, `aria-current`, `aria-pressed`, `aria-live`, reduced motion | T3.5 (+F9), T4.8, T4.10, G4 (+F13), G5.4–7 | ADDRESSED |
| OG | 1200×630 PNG with alt, both OG and Twitter | T6.1 (+F4), G4 (+F13), AC12 | ADDRESSED |
| STALE | No stale content or old slug anywhere public | G3 scan (+F1 timing), G4 old-slug check | ADDRESSED |
| CSS | One system: one `body`, light scheme, no gradients, no sticky, only hover/focus motion | T3.1–T3.6 (+F2, F3, F7, F11), G3 (+new lines), AC2 | ADDRESSED |
| GATES | Each wave ends at a reproducible gate; no wave starts on a failed gate | §5 gate lines, §7, `verify-design.sh` | ADDRESSED |
| APPR | Owner approval for every commit, push, PR, merge, deploy; production out of scope | Header note, §4, §6 of Plan 01 carried, W7, `PROMPT.md` | ADDRESSED |
| RB | Rollback path per wave and post-merge | §9 | ADDRESSED |
| CI | CI configuration / pipeline changes | No `.github/` in the repo | N/A |
| DATA | Database, migrations, external systems | Static site, none | N/A |
| QUEUE | Build-queue row and supersession recorded | §10 as amended below; PM-owned | ADDRESSED (PM action) |

**§10 as amended.** Plan 01 row → `superseded in part — provenance; do not build`. Plan 02 row →
`audited GO WITH CHANGES — amendments folded; gated on D2 docs PR merge`. Next action →
`phase6-build docs/active/plans/02-nkp4-design-alignment/`. The PM writes the queue; this lane
does not.

### D. Reviewed `/about` copy (T4.4 `full` variant, T5.4)

Constraints under which this copy was written: it uses only facts already fixed in this plan (the
five band captions as amended, the hero lead, the verbatim quote, the framework and formula
lines). It names no employer, client, title, date, failed venture, funding, or consulting work.
The audit lane's read-set did not include `02-FOUNDER-STORY.md`, so **G5.8 compares each
paragraph against §1, §2 (lessons), §4, §5 (first sentence), §7 and lines 11–15 of that file and
may only trim a sentence or replace it with a verbatim sentence from those sections. Nothing may be
added.** One paragraph per step, in the `founderSteps` order:

1. **Bay Area** — “Nielsen Aragon was raised in the Bay Area. Observing before building is a habit
   that started there, and it still shapes how he works.”
2. **Technology** — “He learned his craft inside fast-growing technology companies. Those years
   showed him how products, software, and teams behave at speed.”
3. **Operator** — “As an operator, he finds the friction and builds the systems that remove it.
   The pattern is consistent: sit with the work, see where time is lost, and give it back.”
4. **Founder** — “He went on to build his own companies. Founding taught him to own the outcome,
   make results reliable, and repeat what works.”
5. **NKP4** — “NKP4 is the business home for the companies, technology, investments, and ideas he
   builds or backs. It is one home for what comes next.”

Page order on `/about` is unchanged from T5.4: hero (eyebrow “About Nielsen”, h1 “From the Bay
Area to NKP4.”), `<FounderProgression variant="full" />`, the `<figure><blockquote>` quote,
`<FormulaSequence />`, contact CTA to `/contact`.

### E. Copy review status

All three items listed in §12 are closed: hero h1 (F5), `/about` h1 (F10), `/about` paragraphs
(§D, subject to the G5.8 trim-only rule). No owner gate is open. Phase 6 entry point:
`PROMPT.md` in this folder.
