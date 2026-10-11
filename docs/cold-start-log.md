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

The fresh-session A/B run (steps 3 and 6) is still pending; protocol and
result slots are in `course-runs/M04-results.md`.
