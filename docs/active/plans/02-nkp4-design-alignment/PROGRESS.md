## Plan 02 — Phase 5 audit PROGRESS (interim; Phase 6 rewrites this file)
Session: nkp4-phase5-audit (Fable) on rcDBNull-800, worktree ~/Dev/personal/nkp4-website-design-review, branch nkp4-design-review. Last updated: 2026-09-12.

Done (Phase 5 complete — session nkp4-phase5-audit-2, 2026-09-12):
- PLAN.md status line → "Audited 2026-09-12 — GO WITH CHANGES"; final section "## Audit amendments — 2026-09-12" appended: evidence table, F1–F13 as binding amendments (new T3.6, T4.13; new G3 lines for sticky/tokens), complete coverage matrix (open rows: none), §10 override, reviewed /about copy (§D), copy-review status (§E).
- verify-design.sh: added aria-current checks on /companies, /about, /contact and a twitter:image check (F13). `--selftest` still 7/7; `bash -n` ok.
- PROMPT.md written: session-prompt contract header, points to `/phase6-build docs/active/plans/02-nkp4-design-alignment/`, states amendments folded + binding, open coverage rows = none.
- Note: /about paragraphs (§D) were composed from plan-fixed facts only, because this lane's read-set excluded 02-FOUNDER-STORY.md. G5.8 is bound to trim or verbatim-substitute, never add.

Earlier (read-only audit, session nkp4-phase5-audit):
- Verdict drafted: **GO WITH CHANGES** — every change is resolvable by amendment, no owner gate reopens. Confidence high.
- G0 passes today (23cee3a == origin/01-nkp4-website-alignment; main moved only in package-lock.json).
- W1 validated in scratchpad (git archive 23cee3a + main lock): `npm ci` leaves the lock unchanged; typecheck ok; lint 0 errors / 4 `no-html-link-for-pages` warnings; `next build --webpack` ok on next 16.3.5.
- verify-design.sh: selftest 7/7; run against the branch build 19 pass / 20 fail, every failure is the expected pre-design state; og:image renders as `<meta property="og:image" content="https://nkp4.com/…"/>`; section count 6 with and without RSC payload; G2 loop works. Tools present (rg, perl, curl, rsvg-convert, sips, node 24.6.0).

Findings to fold into PLAN.md as "Audit amendments — 2026-09-12" (file:line = branch 23cee3a unless noted):
- F1 [MED] G3 stale scan fails at the W3/W4/W5 gates as sequenced: `nkp4-technology` in README.md:22 until W6, data/portfolio.ts:5 + app/contact/page.tsx:5 until W4. Fix: move README slug edit into W4 (new T4.13); assert the scan from W4.
- F2 [MED] Two gradients in the HQ layer: app/globals.css:1442-1443 (.hq-hero grid overlay), :1638 (.hq-company-card highlight). G3 rejects `gradient\(` but no task removes them. Fix: T3.6 flat `var(--paper)` backgrounds. (Spec §3.2 row 2 "no gradients" is false.)
- F3 [MED] .hq-nav is `position: sticky; top:0; z-index:20` (:1380-1382); spec §4.2 says non-sticky, Plan 01 W3.2 says prevent sticky. Fix: T3.4 removes it; G3 adds `rg -n 'position: sticky' app/globals.css` expect none.
- F4 [MED] OG headline clips at the right edge of the 1200px canvas (rsvg test, Georgia at 80px). Fix: T6.1 sets the headline `font-size` to 64 before converting and confirms all four words visible.
- F5 [MED] Hero h1 (51 chars) cannot meet G5.1 "≤3 lines at 390px" with `max-width: 14ch` (~15 chars/line). Fix: h1 "The home for what Nielsen Aragon builds." (40 chars) and lead verbatim from 08-HOMEPAGE-ARCHITECTURE.md:33.
- F6 [LOW] T1.3 is wrong: 23cee3a carries package-lock.json identical to b462ad1. Outcome unchanged (T1.1 omits it); correct the text.
- F7 [LOW] `.hq-site` also defines `--line-light` (:1366) and `--charcoal` (:1367); `--line-light` is consumed by .hq-pillar-grid :1724 until W5. Fix: keep `--line-light` until T5.6; drop `--charcoal` in W3; nav literals #101010/#fffaf2 → `--ink`/`--paper`.
- F8 [LOW] CompanyMark `--accent` has no source on the detail page (T5.3 drops the inline style). Fix: CompanyMark sets `--accent` from `company.accent` itself; PortfolioCard has no inline style.
- F9 [LOW] Nav is ink, so T3.5 applies: `aria-current` indicator is a 2px `--paper` underline, not rust (spec §5.1). Ink-band secondary text: paper at ≥72% alpha.
- F10 [LOW] Caption "raised in Silicon Valley" → "raised in the Bay Area" (02-FOUNDER-STORY.md:24). `/about` h1 and step paragraphs are undefined: Phase 5 supplies reviewed copy (h1 "From the Bay Area to NKP4."; 5 paragraphs from 02 §1, §2 lessons, §4, §5 first sentence, §7, plus Core identity 02:11-15; no employers/failure/funding/consulting line).
- F11 [LOW] Also remove .hq-company-card min-height 440px (:1633) and min-height:0 (:1966-1968), not only :1905-1907.
- F12 [INFO] T1.4 citation: `.eslintrc.json` is named legacy by Plan 01's first audit amendment item 4 (Plan 01 PLAN.md:249-250), not the final amendment.
- F13 [INFO] Optional: G4 script could assert `aria-current="page"` on /companies, /about, /contact and `twitter:image`; lint warnings (`<a>` vs `<Link>`) are non-blocking.
- Coverage matrix drafted: HIGH rows (00 Authority / 03+07 relationship labels / 05 no service menu / 09 don't invent contact+brand) all ADDRESSED by T4.1 unchanged descriptions, T4.6 chip, refinement (d), T4.2 approved destinations, §11. No CI in repo (no .github); no DB → verify rung 2 N/A. STANDARD open rows: none.

In flight: nothing. Phase 5 is complete in the worktree (PLAN.md amended, verify-design.sh extended, PROMPT.md written).
Open: this whole folder is untracked (`?? docs/active/plans/02-nkp4-design-alignment/`); the PM must commit it on nkp4-design-review and open the D2 docs PR. No build-queue edits by this lane.

PM queue state needed after Phase 5 finishes: Plan 01 → `superseded in part — provenance; do not build`; Plan 02 → `audited GO WITH CHANGES — amendments folded; gated on D2 docs PR merge`; next action `phase6-build docs/active/plans/02-nkp4-design-alignment/`.

── PASTE INTO THE NEW SESSION ── **TAKEN** by nkp4-phase5-audit-2 (Fable) on rcDBNull-800, 2026-09-12
```
Model: Fable (plan audit, continuation)   ·   Run in: ~/Dev/personal/nkp4-website-design-review
Session name: /rename nkp4-phase5-audit-2

Run `hostname -s` first.  Mark this prompt TAKEN in docs/active/plans/02-nkp4-design-alignment/PROGRESS.md.
Read ONLY docs/active/plans/02-nkp4-design-alignment/PROGRESS.md, then PLAN.md and verify-design.sh in that folder.
Next action: append "## Audit amendments — 2026-09-12" to PLAN.md with verdict GO WITH CHANGES, findings F1–F13, the coverage matrix and the /about copy; then write PROMPT.md pointing to `/phase6-build docs/active/plans/02-nkp4-design-alignment/` (header per session-prompt contract, state amendments are folded in, list open coverage rows = none).
Own only docs/active/plans/02-nkp4-design-alignment/**. No build-queue, Plan 01, site-code, git or remote edits. Do not commit or push.
Report back in ≤20 lines with the PM queue state above; end with ✅ SAFE TO CLOSE or ⛔ DO NOT CLOSE.
At ~150k context: run /handoff, then stop.
```
