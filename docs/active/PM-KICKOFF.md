# NKP4 Website PM Kickoff

Status: TAKEN — PM nkp4-design-decisions on rcDBNull-800
Role: design-decision PM; do not implement, commit, push, merge, or deploy without separate owner approval.

## Current state

- The approved NKP4 alignment plan is in `docs/active/plans/01-nkp4-website-alignment/`.
- An unmerged implementation exists at `origin/01-nkp4-website-alignment` (`23cee3a`). It needs content/design review and rebasing onto current `main` before it is mergeable.
- Owner decision: **DigitalMocean is intentional**. Treat older plan/source references to the public company name “NKP4 Technology” as superseded. Confirm the desired company route below.
- Pi's official questionnaire extension was installed globally at `~/.pi/agent/extensions/questionnaire.ts`. Restart Pi or run `/reload` before continuing.

## Next questionnaire

Ask all questions through the `questionnaire` tool, with the recommended option first where noted and custom answers enabled.

1. **Company URL**
   - `/companies/digitalmocean` (recommended)
   - Keep `/companies/nkp4-technology`

2. **Overall visual direction**
   - Refine the warm editorial design (recommended)
   - More minimal/corporate
   - More founder-led and personal
   - Explore a new direction

3. **Homepage portfolio filter**
   - Keep homepage simple; filters only on `/companies` (recommended)
   - Add interactive industry filters to the homepage
   - Remove filters everywhere until the portfolio grows

4. **Founder presentation**
   - Prominent founder story with progression and quote (recommended)
   - Short founder introduction only
   - Keep NKP4 institutional; founder content mainly on `/about`

5. **Founder imagery**
   - No photo for this release (recommended)
   - Reserve a photo position for later
   - Use the existing generated portrait temporarily

6. **Portfolio company marks**
   - Typographic initials until real logos are supplied (recommended)
   - Company names only
   - Use available real company logos now

7. **Homepage density**
   - Concise, approximately 6–7 sections (recommended)
   - Richer story with more detail
   - Very minimal homepage; move detail to supporting pages

8. **Existing implementation branch**
   - Salvage, clean up, and rebase onto current `main` (recommended)
   - Rebuild from the approved plan
   - Pause implementation and create wireframes first

9. **Next deliverable**
   - Produce a design review and proposed wireframe first (recommended)
   - Implement immediately
   - Create 2–3 visual concepts before coding

## Owner decisions (recorded 2026-08-27, PM nkp4-design-decisions on rcDBNull-800)

All nine questions answered with the recommended option:

1. **Company URL** → `/companies/digitalmocean`
2. **Overall visual direction** → Refine the warm editorial design
3. **Homepage portfolio filter** → Keep homepage simple; filters only on `/companies`
4. **Founder presentation** → Prominent founder story with progression and quote
5. **Founder imagery** → No photo for this release
6. **Portfolio company marks** → Typographic initials until real logos are supplied
7. **Homepage density** → Concise, approximately 6–7 sections
8. **Existing implementation branch** → Salvage, clean up, and rebase onto current `main`
9. **Next deliverable** → Produce a design review and proposed wireframe first

Status after decisions: gathering complete. No implementation, commit, push, merge, or deploy performed. Next deliverable (per decision 9) is a design review + proposed wireframe, to be undertaken in a separate session with owner approval before any code.

## Successor prompt

```text
Model: pi/gpt-5.6-sol (PM design-decision session)   ·   Run in: ~/Dev/personal/nkp4-website
Session name: PM nkp4-design-decisions

Run `hostname -s` first. Mark this prompt TAKEN in docs/active/PM-KICKOFF.md.
Read ONLY docs/active/PM-KICKOFF.md and docs/active/00-BUILD-QUEUE.md.
Next action: use the questionnaire tool to ask the nine saved design questions.
DigitalMocean is intentional; do not reopen that naming decision.
Do not implement, commit, push, merge, or deploy while gathering decisions.
At ~150k context: run /handoff, then stop.
```
