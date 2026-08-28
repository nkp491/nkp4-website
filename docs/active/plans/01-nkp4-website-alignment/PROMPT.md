# Phase 6 Kickoff — NKP4 Website Alignment

Run `phase6-build docs/active/plans/01-nkp4-website-alignment/`.

Phase 5 is complete. The final authority for this build is `PLAN.md`,
especially **Audit amendments — 2026-08-27 (owner decisions closed)**. That
section supersedes the earlier gated amendment.

## Build scope

- Build the shared navigation/footer/shell/card/contact primitives and eliminate
  duplicated primary-route markup.
- Centralize all three portfolio entries in `data/portfolio.ts`. Render one
  mixed grid and an interactive, data-driven industry filter. Use a client
  component only for filter state; keep all other new presentation primitives
  server-first.
- Publish Manifest exactly once as `Investment`, with this description only:
  “An outside investment in a Web3 company focused on Proof of Authority.” Link
  its CTA to `https://manifest.network/`.
- Use `Operating Company` for NKP4 Technology and `Founder & Operator` for
  SureHelp. Keep high-level descriptions only: no fixed service menu, product
  list, metrics, or unsupported ownership claims.
- Build the approved four-part framework, founder progression and quote,
  operating philosophy, and public contact routing. Do not publish the seeds
  line, named employers, consulting clients, failed-startup details, or funding.
- Use the approved Calendar URL for Partnerships in a new tab with
  `rel="noopener noreferrer"`; use `mailto:contact@nkp4.com` for direct
  Nielsen contact.
- Retain warm editorial styling, text-only NKP4 branding, no portrait or other
  photography, and only subtle hover/focus motion. Do not invent a logo/photo.
- Remove `/links`, `/secret`, `LinkCard`, and the dormant personal-site
  components after a reference check; rewrite `README.md` for NKP4.
- Add ESLint 9 flat configuration; make `npm run lint` execute `eslint .` and
  add `npm run typecheck` for `tsc --noEmit`.

## Release checks

Run `npm run typecheck`, `npm run lint`, and `npm run build`. Verify the public
routes `/`, `/companies`, `/companies/nkp4-technology`, `/companies/surehelp`,
`/companies/manifest-network`, `/about`, and `/contact`; `/links` and `/secret`
must be 404. At desktop and 390px mobile widths, check navigation, keyboard
focus, filtering, relationship labels, Calendar new-tab behavior, and email.
Run the plan’s scoped stale-content scan before handoff.

## Project authorization boundaries

The owner approved the implementation scope but has **not** approved a commit
or push. Obtain separate explicit approval before either action. No production
deployment is authorized.
