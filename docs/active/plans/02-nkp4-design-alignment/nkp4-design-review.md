# NKP4 Website — Design Review and Proposed Wireframe

Status: Approved — ready for Phase 4 (owner approved Phase 3 on 2026-09-12)
Phase: 3 — Tech Spec (design review), per owner decision 9
Date: 2026-09-12
Lane: 1 (`nkp4-design-review` worktree on `rcDBNull-800`)
Plan: [`PLAN.md`](./PLAN.md) (Plan 02 — this spec moved here in Phase 4)
Inputs: [`DESIGN-DECISIONS.md`](../../DESIGN-DECISIONS.md) ·
[Plan 01](../01-nkp4-website-alignment/PLAN.md) ·
[alignment spec](../01-nkp4-website-alignment/nkp4-website-alignment.md) ·
[audit findings](../01-nkp4-website-alignment/nkp4-website-audit-findings.md) ·
source packet `docs/NKP4-Website-Context/docs/nkp4-site/` ·
unmerged branch `origin/01-nkp4-website-alignment` (`23cee3a`)

> Binding: DigitalMocean is the public company name; every “NKP4 Technology” reference in the
> plan and source packet is superseded. The nine owner decisions are acceptance criteria and are
> not reopened here. This document proposes design only — no site code is changed.

---

## 1. Executive summary

`main` still ships the placeholder “editorial contact hub” (`app/page.tsx:1-240`), so the real
design lives on the unmerged branch `origin/01-nkp4-website-alignment`. That branch already
matches most of Plan 01's structure: shared shell, three portfolio entries, a filter only on
`/companies`, a six-section homepage, typographic marks, and no photo in use. Measured against
decisions 1–7, though, it has five gaps. (1) DigitalMocean still lives at
`/companies/nkp4-technology`. (2) The founder section is a short paragraph beside a large “NA”
block that looks like a photo placeholder. It has no progression and no verbatim quote.
(3) `globals.css` is 1,981 lines, and about 1,350 of them are leftover dark, terminal, and
“designer” styles, with `body` defined three times. (4) The homepage framework and philosophy
sections use the same four-card grid, so they look identical. (5) The display type is too big for
a 390px phone. The proposal keeps the branch (decision 8) and refines its warm paper-and-ink
editorial system instead of starting a new one (decision 2). It sets a six-section homepage
(decision 7) in which the founder story becomes a full-width band with a progression and the
quote (decisions 4–5). It moves DigitalMocean to `/companies/digitalmocean` (decision 1), keeps
the filter only on `/companies` with trimmed industry options (decision 3), and makes the
typographic marks quieter and consistent (decision 6). A rebuild was rejected: the branch's
component split and data model are sound, and `main` has changed only `package-lock.json` since
the branch point (see §6.3).

## 2. Decision acceptance matrix

| # | Decision | Design requirement this spec sets | Where |
|---|---|---|---|
| 1 | `/companies/digitalmocean` | Slug `digitalmocean`. All internal links, README route list, and verification route set use it. No redirect needed (the old slug never shipped). | §4.1, §6 |
| 2 | Refine warm editorial | One token set: paper `#f5f0e8`, ink `#141414`, serif display, sans body. Remove all non-HQ systems. No gradients, glass, or scroll effects. | §4.2 |
| 3 | Filters only on `/companies` | Homepage portfolio is a static 3-card grid plus “All companies →”. `/companies` keeps the client filter with trimmed industry options. | §5.3, §5.8 |
| 4 | Prominent founder story, progression + quote | A full-width homepage band: 5-step progression rail plus the verbatim quote, placed after the framework. `/about` expands the same arc. | §5.5, §5.9 |
| 5 | No founder photo | No image and no image-shaped placeholder: remove the 280px “NA” block. Drop the unreferenced `public/designer-coder-portrait.png` from salvage. | §5.5, §6.2 |
| 6 | Typographic initials | One `CompanyMark` treatment (initials on a quiet tile) shared by cards and detail pages. Swapping in a real logo later means changing only data. | §4.3 |
| 7 | Concise, ~6–7 sections | Six content sections between nav and footer. No optional “working on now” section. | §5 |

## 3. Current state review

### 3.1 `main` (what production reflects today)

- The homepage is template copy: “Add your company name” (`app/page.tsx:9-19`), fake email,
  LinkedIn, and phone (`app/page.tsx:22-41`), and a “Quick links” nav to `/links`
  (`app/page.tsx:43-48`).
- The metadata still says “Editorial Contact Hub … personal website” (`app/layout.tsx:5-24`).
- `main` has no `/companies`, `/about`, `/contact`, or `data/portfolio.ts`. Nothing about
  DigitalMocean has shipped yet, which is why decision 1 needs no redirect.
- It already has a warm palette (`app/globals.css:3-14`: `#f4efe6` ground, rust accent
  `#b04a1f`), but it also uses radial gradients and a grid overlay (`app/globals.css:26-50`),
  which the source packet's anti-patterns rule out (`06-DESIGN-REFERENCES.md:138-148`).

### 3.2 `origin/01-nkp4-website-alignment` against decisions 1–7

Branch paths are given as `branch:path:line`. Several route and component files are single
lines of JSX, so their citations point to line 1–7.

| # | Branch today | Verdict | Salvage action |
|---|---|---|---|
| 1 | `data/portfolio.ts:5` has `name: "DigitalMocean", slug: "nkp4-technology"`. The contact route links to `/companies/nkp4-technology` (`app/contact/page.tsx:5`), and `README.md:22` lists the old route. | **Gap** | Change the slug to `digitalmocean` and update both references. The `rg` stale scan must also match `nkp4-technology`. |
| 2 | The HQ system (`app/globals.css:1354-1981`) is warm paper/ink with a Georgia display face, close to the target. It is preceded by a dark monospace `:root` with `color-scheme: dark` (`:1-45`) and by terminal/PICO/designer systems (`:46-1353`). `body` is defined three times (`:28`, `:572`, `:1354`). There are no gradients in the HQ layer. | **Partial** | Delete lines 1–1353. Move the `.hq-site` tokens (`:1360-1368`) to `:root` with `color-scheme: light`. Remove unused `.hq-structure-*` rules (`:1546-1567`; no consumers). |
| 3 | The homepage maps `portfolioCompanies` to static `PortfolioCard`s (`app/page.tsx:6`) with no filter. `/companies` renders the client `PortfolioFilter` (`app/companies/page.tsx:6`, `components/PortfolioFilter.tsx:1-5`). | **Met** | Keep. Trim industry options and add a result announcement (§5.8). |
| 4 | The homepage founder section has only the heading “Builder, operator, founder.” and a third-person paraphrase (“Nielsen observes closely…”) (`app/page.tsx:6`). There is no progression and no verbatim quote. `/about` shows three of the five steps (Technology, Operator, NKP4) and includes internal brief language (“keeps the institution first…”) (`app/about/page.tsx:4`). | **Gap** | Rebuild both as specified in §5.5 and §5.9. |
| 5 | No `<img>` is used. However, `.hq-founder-mark` renders a 280px square “NA” tile (`app/globals.css:1760-1766`, `app/page.tsx:6`) that reads as a photo slot. `public/designer-coder-portrait.png` (452 KB) was added but is never referenced. | **Partial** | Remove the tile and do not bring the PNG onto the rebased branch. |
| 6 | `logoText` initials (`data/portfolio.ts:2-7`) appear on cards and detail pages as 112px filled squares (`app/globals.css:1653-1667`). Each company has an accent color, and DigitalMocean's is a cool blue `#2f5f8f` (`data/portfolio.ts:5`). Card titles scale up to `4.8rem` (`:1674-1680`). | **Met, needs refinement** | Keep the data. Restyle as a single `CompanyMark` (§4.3) and move accents into the warm range. |
| 7 | Six sections: hero, portfolio, framework, founder, philosophy, and a contact band (`app/page.tsx:6`). The framework and philosophy both use `.hq-pillars`/`.hq-pillar-grid`, so they look the same. The contact band is a single link to `/contact`. | **Met, needs refinement** | Keep six sections, re-order them, and give each a different component treatment (§5). |

### 3.3 Cross-cutting findings on the branch (not tied to one decision)

- **Mobile type overflow risk.** On phones, hero and page-hero `h1` elements are
  `clamp(3.6rem, 18vw, 5.2rem)` with `max-width: 11ch` (`app/globals.css:1461-1463`, `:1941-1944`).
  At 390px that is about 70px, so “The business home for what Nielsen builds.” wraps to 5–6 lines
  and pushes the portfolio below the second screen. That breaks the source's mobile rule
  (`08-HOMEPAGE-ARCHITECTURE.md:171-181`).
- **Tall cards.** `.hq-company-card { min-height: 360px }` applies up to 960px wide
  (`app/globals.css:1905-1907`), so three stacked cards take up more than three screens.
- **Copy has drifted from approved wording.** The framework items rewrite the source text
  (`app/page.tsx:4` vs `08-HOMEPAGE-ARCHITECTURE.md:79-89`). The philosophy heading “Make the work
  stronger at every step.” is invented (`app/page.tsx:6`).
- **The OG image is an SVG** (`app/layout.tsx:19-32`, `public/og-card.svg`). Major link-preview
  consumers do not render SVG `og:image`, so a site whose main use is being shared after a meeting
  gets no preview card. Export a 1200×630 PNG.
- **The DigitalMocean detail page is a dead end.** It has no `website`, so the CTA is hidden
  (`app/companies/[slug]/page.tsx:7`). Meanwhile the contact page's “Work with DigitalMocean” links
  to that same page (`app/contact/page.tsx:5`). Resolved by owner decision D-10 (§9): the CTA
  uses `mailto:contact@nkp4.com`.
- **Detail pages repeat themselves.** The description is rendered twice, as the summary and as
  “About”, and the relationship is also rendered twice (`app/companies/[slug]/page.tsx:7`).
- **Formatting.** Route and component files are minified one-liners, which makes rebase conflicts
  and review hard to read. Reformatting belongs to the salvage cleanup (decision 8).
- **Already met, keep:** `/links` and `/secret` removed; legacy components removed; ESLint 9 flat
  config (`eslint.config.mjs`); `typecheck` script; Calendar link opens in a new tab with
  `rel="noopener noreferrer"` (`components/ContactRouteCard.tsx:2`); root metadata uses the
  four-part framework (`app/layout.tsx:6`).

## 4. Proposed design system (refined warm editorial)

### 4.1 Architecture — what changes

Keep the branch's architecture: App Router, static generation, server components, one client
island. Changes, all within the existing file set:

- `data/portfolio.ts`
  - Slug becomes `digitalmocean`.
  - `industry` becomes a single display label per company, matching the source's two-part
    labels: `AI & Technology`, `Insurtech`, `Web3` (`08-HOMEPAGE-ARCHITECTURE.md:57,63,69`).
  - `accent` values are replaced with warm-range tokens (§4.3).
  - Add an optional `href` for the CTA destination, separate from `website`. This lets the
    DigitalMocean CTA exist without a company website: its `href` is `mailto:contact@nkp4.com`
    (D-10, §9).
- Shared route/contact data. The four contact routes move from `app/contact/page.tsx` into one
  typed module (for example `data/contact.ts`), so the homepage band and `/contact` render the
  same destinations.
- New presentational components, all server components:
  - `CompanyMark` — used by the card, the detail page, and a possible future logo swap.
  - `FounderProgression` — the progression rail used on the homepage and `/about`.
  - `FormulaSequence` — the philosophy sequence.
- Components removed: `.hq-founder-mark` usage and the `.hq-structure-*` rules.
- Unchanged: `PageShell`, `SiteNav`, `SiteFooter`, `ContactRouteCard`, `PortfolioFilter` (§5.8),
  and the metadata structure (PNG OG swap only).

### 4.2 Tokens and type

| Token | Value | Use |
|---|---|---|
| `--paper` | `#f5f0e8` | page ground (branch value, kept) |
| `--paper-soft` | `#ebe3d6` | alternating band, card hover |
| `--ink` | `#141414` | text, founder band ground |
| `--muted-ink` | `#5f5a52` | secondary text (darkened from `#666159` for ≥4.5:1 on `--paper-soft`) |
| `--line-ink` | `rgba(20,20,20,.14)` | rules, card borders |
| `--accent-rust` | `#9a4a26` | links, focus ring, active filter (warm; replaces blue) |

- **Display type.** Serif (Georgia stack, as on the branch). Scale:
  - Hero `clamp(2.6rem, 7vw, 6rem)`, `line-height 0.95`, `max-width 14ch`.
  - Section `h2`: `clamp(1.9rem, 4vw, 3.2rem)`.
  - Card `h3`: `clamp(1.5rem, 2.4vw, 2.2rem)`.
  - At 390px the hero is about 42px, so the headline fits in 3 lines.
- **Body and labels.** Sans (Avenir Next / Helvetica stack). Eyebrows stay uppercase with
  `0.18em` tracking.
- **Motion.** Only on hover and focus: border color changes and a translate of 2px or less,
  wrapped in `prefers-reduced-motion`. Nothing is animated on scroll.
- **Rhythm.** Section padding `clamp(56px, 8vw, 112px)` vertical, `clamp(18px, 5vw, 72px)`
  horizontal. Content max-width is 1200px, and prose is capped at 64ch.
- **Nav.** Keep the non-sticky dark bar, but at 64px tall instead of 86px. The mobile nav stays
  three inline links with no hamburger menu (only three items exist).

### 4.3 Company marks (decision 6)

`CompanyMark` shows the initials in a square tile: 64px on cards, 96px on detail pages, 48px at
≤640px. The tile has a 1px `--line-ink` border and a **light warm tint** of the company accent
behind ink-colored initials; it is no longer a solid saturated block. Warm-range tints:

- DigitalMocean: slate-ochre `#8a6a3a`
- SureHelp: rust `#7a4632`
- Manifest: olive-brown `#6c5a42`

The tile is `aria-hidden` because the company name follows it. Later, a `logo?: string` field
renders an `<img>` in the same box, so a real logo drops in without layout changes.

Relationship labels must look different by type so Manifest never reads as owned:

- `Operating Company` and `Founder & Operator` — filled ink chip
- `Investment` — outlined chip

The label is always printed as text, and color is never the only signal.

## 5. Proposed homepage wireframe (decision 7)

Six content sections sit between the nav and footer, which are chrome and not counted.

| # | Section | Job on the page | Mobile screen (390px) |
|---|---|---|---|
| — | Nav | wordmark + Companies · About · Contact | — |
| 1 | Hero | What NKP4 is, whose it is, where to go | screen 1 |
| 2 | Portfolio | Evidence: the three relationships | screens 1–2 |
| 3 | Build. Operate. Equip. Invest. | What NKP4 does | screen 3 |
| 4 | Founder story | Who Nielsen is: progression + quote | screens 3–4 |
| 5 | Operating philosophy | How the work is run | screen 4 |
| 6 | Let's connect | Contact routes inline | screen 5 |
| — | Footer | wordmark, nav, © | — |

**Why this order.**

- Portfolio first satisfies the MCC-weighted, portfolio-first rule
  (`06-DESIGN-REFERENCES.md:118-124`) and the mobile rule that the “main companies” appear early.
- The framework comes right before the founder story so that “Build” leads into the person who
  builds.
- The philosophy follows the founder story because it is his operating formula.
- Contact stays a primary section with real destinations, not a single link.

### 5.1 Nav (chrome)

```text
┌────────────────────────────────────────────────────────────────────────┐
│ [NKP4]                                   Companies   About   Contact   │  ink bar, 64px
└────────────────────────────────────────────────────────────────────────┘
```

- Wordmark is a text box (`.hq-wordmark`, kept) and links to `/`.
- The current page gets `aria-current="page"` and a rust underline.

### 5.2 Section 1 — Hero

```text
┌────────────────────────────────────────────────────────────────────────┐
│ FOUNDED BY NIELSEN ARAGON                                   (eyebrow)  │
│                                                                        │
│ The holding company for what                               (h1 serif)  │
│ Nielsen Aragon builds.                                                 │
│                                                                        │
│ NKP4 is the business home for companies, technology,        (lead p)   │
│ investments, and ideas built or backed by Nielsen Aragon.              │
│                                                                        │
│ [ Explore the portfolio ↓ ]   Let's connect →          (primary / text)│
│                                                                        │
│ ── Build · Operate · Equip · Invest ─────────────────────── (rule line)│
└────────────────────────────────────────────────────────────────────────┘
```

- **Hierarchy.** Eyebrow → h1 → lead → CTA pair → a framework rule line (a small-caps line,
  replacing the branch's 360px dark side panel at `app/globals.css:1520-1545`).
- **Component intent.**
  - Single column with no aside, which returns the vertical space the panel took on mobile.
  - The h1 wording is a PM copy proposal. The lead line is the source's supporting line
    (`08-HOMEPAGE-ARCHITECTURE.md:33`).
  - “Explore the portfolio” is an anchor to `#portfolio`. “Let's connect” anchors to `#connect`.
- **Responsive.**
  - ≥960px: h1 spans about 8 of 12 columns.
  - <640px: CTAs stack full-width (the branch's `.hq-hero-actions { display: grid }` is kept),
    and the rule line wraps to two lines.
  - Target: the section fits in one 844px-tall screen, and the portfolio heading is visible
    without scrolling on 390×844.

### 5.3 Section 2 — Portfolio (no filter)

```text
┌────────────────────────────────────────────────────────────────────────┐
│ PORTFOLIO                                                              │
│ What NKP4 builds, operates, and backs.         Every entry states its  │
│                                                relationship to NKP4.   │
│ ┌──────────────────────┐ ┌──────────────────────┐ ┌──────────────────────┐
│ │ [DM]                 │ │ [SH]                 │ │ [MN]                 │
│ │ AI & TECHNOLOGY      │ │ INSURTECH            │ │ WEB3                 │
│ │ DigitalMocean   (h3) │ │ SureHelp        (h3) │ │ Manifest Network (h3)│
│ │ One-sentence desc.   │ │ One-sentence desc.   │ │ An outside investment│
│ │                      │ │                      │ │ in a Web3 company …  │
│ │ ■ Operating Company  │ │ ■ Founder & Operator │ │ □ Investment         │
│ │              View →  │ │              View →  │ │              View →  │
│ └──────────────────────┘ └──────────────────────┘ └──────────────────────┘
│                                                   All companies →      │
└────────────────────────────────────────────────────────────────────────┘
```

- **Hierarchy.** Eyebrow + h2 (left) and a one-line summary (right) → cards → a text link to
  `/companies`.
- **Card content, in order:** mark → industry → name → description → relationship chip → “View →”.
- **Component intent.**
  - `PortfolioCard` is kept, and the whole card is one link to `/companies/<slug>`.
  - Card order follows data order.
  - **No filter chips on the homepage** (decision 3).
  - Manifest's description is the approved text verbatim (PLAN.md, approved public scope).
- **Responsive.**
  - Cards are 3-up at ≥1024px, 2+1 at 640–1023px, and a single column below that.
  - Remove `min-height: 360px`; content decides the height. The target card height on mobile is
    about 260px or less.
  - The mark shrinks to 48px and the h3 to about 1.6rem on phones.

### 5.4 Section 3 — Build. Operate. Equip. Invest.

```text
┌────────────────────────────────────────────────────────────────────────┐
│ WHAT NKP4 DOES                                                         │
│ Build. Operate. Equip. Invest.                                   (h2)  │
│ ──────────────────────────────────────────────────────────────────────  │
│ 01 Build        │ 02 Operate      │ 03 Equip        │ 04 Invest        │
│ Create companies│ Help businesses │ Give founders & │ Participate in   │
│ products, soft- │ build stronger  │ operators access│ opportunities    │
│ ware, and new   │ systems and     │ to modern tech, │ where NKP4 can   │
│ ventures.       │ execute …       │ knowledge, and …│ contribute more  │
│                 │                 │                 │ than capital.    │
└────────────────────────────────────────────────────────────────────────┘
```

- **Hierarchy.** Eyebrow → h2 (the approved framework heading) → four numbered columns.
- **Component intent.**
  - An unboxed editorial list: numbered columns separated by vertical rules, **with no cards**.
    This keeps it visually distinct from the portfolio above and the formula below.
  - Item copy is the source wording verbatim (`08-HOMEPAGE-ARCHITECTURE.md:79-89`).
- **Responsive.** 4-up at ≥1024px, 2×2 at 640–1023px, and a stacked list below 640px with
  horizontal rules between items.

### 5.5 Section 4 — Founder story (decisions 4 and 5)

```text
┌────────────────────────────────────────────────────────────────────────┐  ink band (full-bleed)
│ FOUNDER                                                   (paper text) │
│ Nielsen Aragon — builder and operator.                           (h2)  │
│                                                                        │
│  Bay Area ──▸ Technology ──▸ Operator ──▸ Founder ──▸ NKP4             │  progression rail
│  raised in   learned inside  finds the     built his    one home for   │  (one short caption
│  Silicon     fast-growing    friction,     own          what comes     │   per step)
│  Valley      companies       builds systems companies    next           │
│                                                                        │
│  “I sit, observe, immerse myself, then build the thing                 │  pull quote, serif,
│   that gives people their time back.”                                  │  large, rust rule at left
│                                             — Nielsen Aragon           │
│                                                                        │
│  Read the story →                                                      │
└────────────────────────────────────────────────────────────────────────┘
```

- **Hierarchy.** Eyebrow → h2 → progression rail → pull quote (the visual anchor) → link to
  `/about`.
- **Why it is prominent.** It is the only full-bleed dark band on the page, it uses the largest
  type after the hero, and it is placed at the midpoint of the page.
- **Component intent.**
  - `FounderProgression` renders the five steps from one array as an ordered `<ol>` (screen
    readers hear the sequence). Arrows are CSS, not text.
  - Step captions stay at 6 words or fewer and contain no employer names, dates, or titles. This
    matches the approved scope “Do not publish named employers…” (PLAN.md, approved public scope)
    and the no-résumé rule (`07-CONTENT-RULES.md:35-47`).
  - The quote is verbatim from `02-FOUNDER-STORY.md:19`, rendered as `<figure><blockquote>` with a
    `<figcaption>`.
  - **No image and no monogram tile** (decision 5). Typography carries the band.
- **Responsive.**
  - ≥960px: the rail is horizontal, five columns.
  - <960px: the rail becomes a vertical timeline with a left rule and dot markers, and captions
    sit beside each step.
  - Quote size is `clamp(1.5rem, 3.4vw, 2.6rem)` with a 28ch max width.

### 5.6 Section 5 — Operating philosophy

```text
┌────────────────────────────────────────────────────────────────────────┐  paper-soft band
│ OPERATING PHILOSOPHY                                                   │
│ Accountability → Predictability → Profitability → Scalability   (h2)   │
│                                                                        │
│ Own the outcome.  │ Make results     │ Build durable    │ Repeat what  │
│                   │ reliable.        │ value.           │ works.       │
└────────────────────────────────────────────────────────────────────────┘
```

- **Hierarchy.** Eyebrow → the formula as the heading (the source's “centerpiece”,
  `08-HOMEPAGE-ARCHITECTURE.md:107-111`) → one short line per term, aligned under each word.
- **Component intent.**
  - `FormulaSequence` presents the four terms as a sequence with no boxes, which avoids repeating
    the §5.4 grid. Explanation lines are 5 words or fewer.
  - The “seeds” line stays internal and does not appear (PLAN.md approved scope). The branch's
    invented heading “Make the work stronger at every step.” is dropped.
- **Responsive.** Below 640px the formula stacks into four rows (`term ↓ explanation`), with the
  arrows rotated downward.

### 5.7 Section 6 — Let's connect

```text
┌────────────────────────────────────────────────────────────────────────┐
│ CONNECT                                                                │
│ Let's connect.                                                   (h2)  │
│ Choose the path that fits the conversation.                            │
│ ┌──────────────────────────────┐ ┌──────────────────────────────┐      │
│ │ TECHNOLOGY                   │ │ INSURANCE                    │      │
│ │ Work with DigitalMocean   →  │ │ Explore SureHelp          →  │      │
│ └──────────────────────────────┘ └──────────────────────────────┘      │
│ ┌──────────────────────────────┐ ┌──────────────────────────────┐      │
│ │ PARTNERSHIPS                 │ │ NIELSEN                      │      │
│ │ Book a conversation       ↗  │ │ contact@nkp4.com          →  │      │
│ └──────────────────────────────┘ └──────────────────────────────┘      │
└────────────────────────────────────────────────────────────────────────┘
```

- **Hierarchy.** Eyebrow → h2 (source heading, `08-HOMEPAGE-ARCHITECTURE.md:139`) → one line →
  four route cards.
- **Component intent.**
  - `ContactRouteCard` is kept, and it reads from the shared contact data (§4.1), so this section
    and `/contact` never diverge.
  - External routes show `↗` plus visually hidden “(opens in new tab)” text.
  - The email route shows the address itself so it can be copied.
- **Responsive.** 2×2 at ≥640px and a single column below. Each card is at least 64px tall, which
  is a comfortable tap target.

### 5.8 Footer (chrome)

```text
[NKP4]    Companies · About · Contact    contact@nkp4.com    © NKP4
```

- The branch footer is kept, plus the approved email.
- LinkedIn is omitted because no approved URL exists (not an open question for this release).
- The footer stacks into a column below 640px, as on the branch today.

## 6. Supporting routes

### 6.1 `/companies` — the only place with filters (decision 3)

```text
PORTFOLIO
Companies and investments connected to NKP4.            (page h1, ≤3 lines on mobile)
Each entry shows what it is and how NKP4 is connected.

[ All ] [ AI & Technology ] [ Insurtech ] [ Web3 ]      (toggle buttons, aria-pressed)
Showing 3 of 3                                           (aria-live="polite")
┌ card ┐ ┌ card ┐ ┌ card ┐                              (same PortfolioCard as homepage)
```

- The industry options come from the single `industry` label per company, giving All plus three
  chips. On the branch today it is All plus five chips for three items (`data/portfolio.ts:5-7`,
  `:10`), which is more options than results.
- The server render shows all cards, so the page works without JavaScript. The filter is a
  progressive enhancement (the branch already initializes to “All”).
- No relationship filter is added; the relationship chip on each card covers that.
- **Responsive.** The chip row scrolls horizontally on phones (no wrapping into several rows), and
  the grid matches §5.3.

### 6.2 `/companies/digitalmocean` and the other detail pages (decisions 1, 6)

```text
← All companies
[DM]  (96px CompanyMark)
AI & TECHNOLOGY
DigitalMocean                                            (h1)
■ Operating Company                                       (relationship chip, directly under name)
Description paragraph (once).
NKP4 RELATIONSHIP  ·  One factual line from data (no ownership implication).
[ Work with DigitalMocean → ]                             (CTA → mailto:contact@nkp4.com, D-10)
```

- The duplicated description and relationship blocks (`app/companies/[slug]/page.tsx:7`) collapse
  into the structure above.
- The CTA renders whenever `href` or `website` is set. It opens in a new tab only for off-site
  destinations.
- A “← All companies” back link is added for visitors who arrive directly from a shared URL.
- The static params still come from data, so the release route set becomes `/companies/digitalmocean`,
  `/companies/surehelp`, and `/companies/manifest-network`.
- Nothing deployed uses `nkp4-technology` (§3.1), so no redirect is specified.

### 6.3 `/about` and `/contact`

- **`/about`** follows the same arc, going deeper than the homepage:
  - Page hero: the h1 is kept, shortened for mobile.
  - `FounderProgression`, full size, with a 2–3 sentence paragraph per step.
  - The quote.
  - The philosophy formula.
  - A contact CTA.
  - No employer names or dates (approved scope), and the internal “institution first” sentence is
    removed.
- **`/contact`** shows the same four routes from the shared contact data. The page h1 “Start with
  the right door.” may stay. The Technology route (“Work with DigitalMocean”) points to
  `mailto:contact@nkp4.com` (D-10) instead of back to the detail page.

## 7. Salvage and rebase scope (feeds decision 8)

**Drift from `main`.** Since the merge base `b462ad1`, `main` has changed only `package-lock.json`,
through `4f0a1ca` (npm audit / Next bump). The branch changes `package.json` scripts but not the
lock file. The rebase should therefore be mechanical: take `main`'s lock file, then run
`npm install` so the lock matches `package.json`.

**Keep as-is:**

- `components/PageShell.tsx`, `SiteNav.tsx`, `SiteFooter.tsx`, `ContactRouteCard.tsx`,
  `PortfolioFilter.tsx` (with §6.1 additions)
- `eslint.config.mjs`
- `package.json` scripts
- `next.config.ts` (`distDir` via `NEXT_DIST_DIR`)
- `.gitignore` (`.next-dev`)
- `tsconfig.json` includes
- Legacy route and component removals
- The Calendar URL and mail destination
- The root metadata text

**Change during salvage (the Phase 4 plan should list these as tasks):**

1. Change the slug to `digitalmocean` in `data/portfolio.ts`, `app/contact/page.tsx`, and
   `README.md`, and add `nkp4-technology` to the stale-content `rg` scan.
2. Delete the non-HQ CSS (`app/globals.css:1-1353`), move tokens to `:root`, set
   `color-scheme: light`, remove the `.hq-structure-*` and `.hq-founder-mark` rules, and apply the
   §4.2 scale.
3. Rebuild the homepage into the §5 sections: remove the hero panel, use static cards, add the
   framework list, founder band, formula sequence, and inline contact routes.
4. Add the `CompanyMark`, `FounderProgression`, and `FormulaSequence` components and a shared
   contact data module. Normalize `industry` to one label, add the optional CTA `href` (DigitalMocean: `mailto:contact@nkp4.com`, D-10), and use
   warm accents.
5. Collapse the detail-page duplication and add the back link (§6.2).
6. Rewrite `/about` to the §6.3 arc.
7. Do not carry `public/designer-coder-portrait.png` onto the rebased branch (decision 5).
8. Replace the SVG OG image with a PNG export and keep `alt` text.
9. Reformat the one-line route and component files (no behavior change) as a separate commit
   before the design changes, so the design diff can be reviewed on its own.

**Out of scope for salvage:** CMS, photography, real logos, a LinkedIn link, a “working on now”
section, and any new routes.

**Plan-document follow-ups (PM-owned, not edited by this lane):**

- `PLAN.md`'s approved release route set and verification text still name
  `/companies/nkp4-technology`.
- `PLAN.md`'s approved scope says “one mixed portfolio grid with an interactive industry filter”
  without limiting it to `/companies`. Decision 3 now narrows that.
- The alignment spec and source packet still say “NKP4 Technology”.

## 8. Verification additions (for Phase 4/5)

These extend PLAN.md's reproducible verification; they do not replace it.

- **Routes.**
  - HTTP 200: `/`, `/companies`, `/companies/digitalmocean`, `/companies/surehelp`,
    `/companies/manifest-network`, `/about`, `/contact`.
  - HTTP 404: `/companies/nkp4-technology`, `/links`, `/secret`.
- **Stale scan.** Extend the existing pattern with `|nkp4-technology|NKP4 Technology`.
- **DigitalMocean CTA (D-10).** Every “Work with DigitalMocean” link on `/`, `/contact`, and
  `/companies/digitalmocean` has `href="mailto:contact@nkp4.com"` and no `target="_blank"`.
- **Homepage checks.**
  - It contains no `button` elements inside `#portfolio` (no filter on the homepage).
  - It has six `<section>` elements inside `<main>`.
  - No `<img>` appears on `/` or `/about`.
- **Mobile checks at 390×844.**
  - The portfolio heading is visible on screen 1.
  - The founder quote and the connect section are reachable within about 5 screens.
  - No horizontal overflow except the `/companies` chip row.
- **Accessibility.**
  - Visible rust focus rings.
  - Filter chips expose `aria-pressed`, and the result count is announced.
  - The progression is an `<ol>`.
  - Text contrast is at least 4.5:1 on both paper tokens and on the ink band.

## 9. Owner decisions recorded here and open questions

**D-10 — DigitalMocean CTA destination (owner decision, 2026-09-12).** “Work with DigitalMocean”
uses `mailto:contact@nkp4.com` everywhere it appears:

- the DigitalMocean detail-page CTA (§6.2)
- the Technology route on the homepage connect section (§5.7)
- the Technology route on `/contact` (§6.3)

The link opens in the same tab (it is not off-site), and it does not loop back to the detail page.
Phase 3 was approved to advance at the same time.

**Owner-blocking open questions:** none.

Not blocking, with defaults applied unless the owner says otherwise:

- **Hero h1 wording.** The §5.2 line is a copy proposal and gets reviewed in Phase 5 with the rest
  of the copy. It is not a decision gate.
- **SureHelp external URL.** None is documented. By default, “Explore SureHelp” goes to its detail
  page with no outbound CTA until a URL is supplied.

## 10. Handoff

This design review is owner-approved. Phase 4 should now amend Plan 01 (or create
a successor plan folder, PM's call). It should turn §7's salvage list into ordered tasks on the
rebased `01-nkp4-website-alignment` branch and carry §8 into the verification section. Nothing in
this document authorizes implementation, commit, push, or deploy.
