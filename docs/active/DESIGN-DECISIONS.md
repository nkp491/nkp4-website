# NKP4 Website — Owner Design Decisions

Recorded: 2026-08-27
Session: PM nkp4-design-decisions on `rcDBNull-800`
Source: nine saved design questions in `PM-KICKOFF.md`, asked via the questionnaire tool.

## Decisions

All nine questions were answered with the **recommended** option.

| # | Question | Decision |
|---|---|---|
| 1 | Company URL | `/companies/digitalmocean` |
| 2 | Overall visual direction | Refine the warm editorial design |
| 3 | Homepage portfolio filter | Keep homepage simple; filters only on `/companies` |
| 4 | Founder presentation | Prominent founder story with progression and quote |
| 5 | Founder imagery | No photo for this release |
| 6 | Portfolio company marks | Typographic initials until real logos are supplied |
| 7 | Homepage density | Concise, approximately 6–7 sections |
| 8 | Existing implementation branch | Salvage, clean up, and rebase onto current `main` |
| 9 | Next deliverable | Produce a design review and proposed wireframe first |

## Standing context

- **DigitalMocean is intentional.** Older plan/source references to “NKP4 Technology”
  as the public company name are superseded. Do not reopen the naming decision.
- The approved alignment plan lives in `docs/active/plans/01-nkp4-website-alignment/`.
- An unmerged implementation exists at `origin/01-nkp4-website-alignment` (`23cee3a`);
  per decision 8 it is to be salvaged, cleaned up, and rebased onto current `main`
  (not rebuilt from scratch).

## Implications for the build

- Decision 9 makes the **next deliverable a design review + proposed wireframe**, not
  implementation. Phase 6 build of Plan 01 is therefore gated behind that design-review
  cycle (its own phase 3 → 4 → 5) plus owner approval.
- Decisions 1–7 are the acceptance criteria the design review and any plan amendments
  must satisfy.

## Guardrails honored this session

No implementation, commit, push, merge, or deploy was performed while gathering decisions.
