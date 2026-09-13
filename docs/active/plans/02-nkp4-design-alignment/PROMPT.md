# Plan 02 — Phase 6 kickoff prompt

Written by Phase 5 on 2026-09-12 and re-audited on 2026-09-13. Verdict: **GO** after the
mobile amendment. All four `PLAN.md` audit sections are **binding**, including the latest “Audit
amendment — 2026-09-13 (final W7 mobile gate)”. Open coverage rows: **none**. Open owner gates:
**none**.

Precondition before pasting: D2 is done (the docs PR from `nkp4-design-review` is merged to
`main`, so `origin/main` carries this folder). G0 checks that.

── PASTE INTO THE NEW SESSION ──
```
Model: Fable (build)   ·   Run in: ~/Dev/personal/nkp4-website
Session name: /rename nkp4-plan02-build

Run `hostname -s` first. Mark this prompt TAKEN in docs/active/plans/02-nkp4-design-alignment/PROGRESS.md (create the file; it replaces the Phase 5 interim notes).

/phase6-build docs/active/plans/02-nkp4-design-alignment/

Read PLAN.md in that folder in full, including all four audit sections: 2026-09-12, the
2026-09-13 W4 type-migration amendment, the W5 rendered-gate-sequencing amendment, and the latest
final W7 mobile-gate amendment. All are binding; the latest applicable amendment wins. Open
coverage rows: none. Open owner gates: none. Do not reopen decisions 1–9 or D-10.

Build order: W0 (G0 must pass; if it fails, stop and report — do not improvise a rebase) → W1 → G1 → W2 → G2 → W3 → G3 → W4 (complete T4.1, T4.8, and T4.14 before its gate) → G3 in full, including typecheck → W5 → G3 in full + G4-W5-pre-OG → W6 → G3 + full G4 → W7 (G3, full G4, G5). Do not begin W5 unless W4's full G3 passes. Do not request the W5 commit or begin W6 unless W5 G3, the 7/0 selftest, and the exact assertion-matched G4-W5-pre-OG command in the latest amendment all pass.
One commit per wave with the subject the plan names, each only after explicit owner approval; W2 is its own commit.
Release checks: use the unchanged verify-design.sh. Only W5 uses the amendment's exact pre-OG subset; after W6 and at W7, the full rendered verifier must end "0 failed", and W6 must also pass the 1200×630 sips check.
At final W7, apply T7.1a exactly: change only the named spacing rules in `app/globals.css`'s existing `@media (max-width: 640px)` block. Do not edit markup or copy and do not weaken the `#connect` ≤5-screen criterion. Rebuild/restart, run the amendment's exact 390×844 Console assertion, then rerun G3, full G4, and all G5 checks at both viewports. G5 must finish 33 passed, 0 failed. If the exact CSS does not pass, stop and return to Phase 5; do not broaden scope.
Copy: hero h1 and /about h1 + paragraphs are fixed by amendments F5, F10 and §D. G5.8 may trim or substitute verbatim source sentences only; add nothing.

You own: the build branch 02-nkp4-design-alignment (cut from origin/main after D2), site code, and docs/active/plans/02-nkp4-design-alignment/PROGRESS.md.
Do not edit: Plan 01 files, DESIGN-DECISIONS.md, PM-KICKOFF, the source packet, 00-BUILD-QUEUE.md (PM-owned), package-lock.json (must stay main's).
Do not commit, push, open a PR, merge, or deploy without explicit owner approval for that specific action. Production deploy is out of scope.
If the code contradicts the plan mid-build, stop at the current gate and follow the phase6-build divergence protocol; do not patch around a failed gate.

Report back in ≤20 lines: waves completed, gate results (G-number: pass/fail with counts), commits made (sha + subject), anything blocked, and the PM queue row text.
End with exactly one of: ✅ SAFE TO CLOSE — <state> / ⛔ DO NOT CLOSE — pending: <specific thing>.
At ~150k context: run /handoff, then stop.
```
