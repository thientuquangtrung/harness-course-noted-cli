# Progress

Verified state only. No diary entries: what is true, what is broken, what
comes next. Durable design choices go in `DECISIONS.md`.

## Current State

- **Last verified checkpoint:** Module 05 — `module-05: continuity artifacts and noted status`
  (2026-10-11). `pnpm test` 4/4 pass; `./bin/noted status` exits 0 and prints
  the Next Action; M04 and M05 check scripts print `M04 OK` / `M05 OK`.
- **Active feature:** none (Module 05 closed).
- **Last command run:** `pnpm test && ./bin/noted status`.
- **Commands that exist:** `--help`, `version [--json]`, `ask "<query>"`, `status`.
- **Known issues:**
  - `noted import` and `noted index` do not exist yet, so a real `.noted/` can
    only be created by hand or by the test fixture (`src/test/fixture.ts`).
    `noted ask` in the repo root prints `no index found` and exits 1.
  - The fresh-session A/B run for Module 04 has not been run
    (`course-runs/M04-results.md` has the protocol and empty result slots).
  - Clock-in was timed as a scripted run, not a fresh human/agent read-through
    (see `docs/cold-start-log.md`).
  - `./init.sh` (Module 06), `feature_list.json` (Module 08) and `./verify.sh`
    (Module 09) are referenced by `AGENTS.md` but not created yet.
- **Definition of Done:** `docs/PRODUCT.md`.

## Session Log

- **2026-10-11 — Module 04.** Added `noted ask` with absolute-path cite lines,
  `src/store/{types,io}.ts`, and ask tests. Split `AGENTS.md` into a 54-line
  routing file plus `docs/citation-rule.md` and `docs/STYLE.md`. Commit
  `module-04: split AGENTS.md into routing + topic docs`.
- **2026-10-11 — Module 05.** Added `PROGRESS.md`, `DECISIONS.md` (D-001,
  D-002), and `noted status` with tests. Clock-in and clock-out practiced.
  Commit `module-05: continuity artifacts and noted status`.

## Next Action

Start Module 06: add `./init.sh` (install deps, run `pnpm test`, run
`./bin/noted status`) and switch the AGENTS.md clock-in step to rely on it.
Optional first: run the Module 04 A/B protocol in `course-runs/M04-results.md`.
