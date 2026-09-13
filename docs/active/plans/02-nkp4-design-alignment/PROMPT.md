# Plan 02 — Phase 6 kickoff prompt

Written by Phase 5 on 2026-09-12 from the audited plan. Verdict: **GO WITH CHANGES**, amendments
folded into `PLAN.md` (“Audit amendments — 2026-09-12”) and **binding**. Open coverage rows:
**none**. Open owner gates: **none**.

Precondition before pasting: D2 is done (the docs PR from `nkp4-design-review` is merged to
`main`, so `origin/main` carries this folder). G0 checks that.

── PASTE INTO THE NEW SESSION ──
```
Model: Fable (build)   ·   Run in: ~/Dev/personal/nkp4-website
Session name: /rename nkp4-plan02-build

Run `hostname -s` first. Mark this prompt TAKEN in docs/active/plans/02-nkp4-design-alignment/PROGRESS.md (create the file; it replaces the Phase 5 interim notes).

/phase6-build docs/active/plans/02-nkp4-design-alignment/

Read PLAN.md in that folder in full, including the final section "Audit amendments — 2026-09-12".
The amendments are folded in and binding: where they conflict with the body, the amendments win.
Open coverage rows: none. Open owner gates: none. Do not reopen decisions 1–9 or D-10.

Build order: W0 (G0 must pass; if it fails, stop and report — do not improvise a rebase) → W1 → G1 → W2 → G2 → W3 → G3 → W4 → G3 → W5 → G3+G4 → W6 → G3+G4 → W7 (G3, G4, G5 in full).
One commit per wave with the subject the plan names, each only after explicit owner approval; W2 is its own commit.
Release checks: bash docs/active/plans/02-nkp4-design-alignment/verify-design.sh (selftest first, then against http://127.0.0.1:3002). Must end "0 failed".
Copy: hero h1 and /about h1 + paragraphs are fixed by amendments F5, F10 and §D. G5.8 may trim or substitute verbatim source sentences only; add nothing.

You own: the build branch 02-nkp4-design-alignment (cut from origin/main after D2), site code, and docs/active/plans/02-nkp4-design-alignment/PROGRESS.md.
Do not edit: Plan 01 files, DESIGN-DECISIONS.md, PM-KICKOFF, the source packet, 00-BUILD-QUEUE.md (PM-owned), package-lock.json (must stay main's).
Do not commit, push, open a PR, merge, or deploy without explicit owner approval for that specific action. Production deploy is out of scope.
If the code contradicts the plan mid-build, stop at the current gate and follow the phase6-build divergence protocol; do not patch around a failed gate.

Report back in ≤20 lines: waves completed, gate results (G-number: pass/fail with counts), commits made (sha + subject), anything blocked, and the PM queue row text.
End with exactly one of: ✅ SAFE TO CLOSE — <state> / ⛔ DO NOT CLOSE — pending: <specific thing>.
At ~150k context: run /handoff, then stop.
```
