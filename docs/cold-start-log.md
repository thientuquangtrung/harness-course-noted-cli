# Cold-start log

## 2026-08-01 (after Module 03)

Ran the cold-start test. Q1, Q2, Q3 answered fully from files. Q4 and Q5
have placeholders pending Module 05 (`PROGRESS.md`) and Module 08
(`feature_list.json`).

Knowledge visibility gap (5 questions, 2 placeholders): 40%. Target by end
of Module 08: 0%.

## 2026-10-11 (after Module 04)

Split the routing file. The bloated variant (kept at
`course-runs/M04-bloated-AGENTS.md`, 133 lines) buries the Citations rule at
line 66 of an "Implementation Notes" section — exactly where lost-in-the-middle
predicts it gets skipped. The split `AGENTS.md` is 54 lines with the rule in
the hard constraints at both the top and bottom; the full text and rationale
live in `docs/citation-rule.md`. `ask.test.ts` now asserts the cite line, so
a session that drops it fails `pnpm test` instead of slipping through.

A/B run (3 fresh sessions per arm, other safeguards stripped): the cite
line survived in 6/6 runs, so the bloated file did NOT reproduce the failure
at 133 lines. The split arm resolved the conflict on its own (2 refusals with
alternatives, 1 partial change keeping cite); the bloated arm stopped and
asked 3/3 times. Details: `course-runs/M04-results.md`.

## 2026-10-11 (after Module 05)

Added `PROGRESS.md` (Current State / Session Log / Next Action),
`DECISIONS.md` (D-001, D-002) and `noted status`.

Rebuild cost: **30 s.** A fresh `claude -p` session on a clean clone
followed the AGENTS.md clock-in (read PROGRESS/DECISIONS, `git log`,
`pnpm test`, `./bin/noted status`), changed no files, and correctly reported
verified state, active feature, known issues, D-001/D-002 and the exact Next
Action (`course-runs/M05-clockin-transcript.md`). Target < 3 min: met.
Not measured: a human read-aloud clock-in.

Knowledge visibility gap: Q4 (what is the current state / next step?) is now
answered by `PROGRESS.md` and `noted status`. Q5 (feature state) still waits
on `feature_list.json` in Module 08 — 1 of 5 open, 20% (was 40%).
