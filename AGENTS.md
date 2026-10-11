# AGENTS.md — noted-cli

Routing file for any agent session. Read the hard constraints, then open only
the topic docs your task needs.

## Hard constraints (read first)

1. **One feature at a time.** Do not start a second feature until the first
   meets the Definition of Done.
2. **Citations rule.** Every `noted ask` line that names a note is followed by
   `cite: <absolute path>`. Never remove or shorten it. See `docs/citation-rule.md`.
3. **Definition of Done** lives in `docs/PRODUCT.md`. A feature is not done
   because code was added; verification must have run and evidence must be recorded.

## Topics

| Topic          | File                     | Read when                                 |
| -------------- | ------------------------ | ----------------------------------------- |
| Architecture   | `docs/ARCHITECTURE.md`   | touching layout, data flow, boundaries    |
| Product scope  | `docs/PRODUCT.md`        | deciding scope, non-goals, done criteria  |
| Citation rule  | `docs/citation-rule.md`  | touching `noted ask` output               |
| Style          | `docs/STYLE.md`          | writing or reviewing TypeScript           |
| Session log    | `docs/cold-start-log.md` | measuring cold-start / rebuild cost       |

## Workflow

Clock-in:

1. `pwd` — confirm you are at the repo root.
2. Read `PROGRESS.md` (Module 05) — latest verified state and Next Action.
3. Read `feature_list.json` (Module 08) — pick the highest-priority unfinished feature.
4. `git log --oneline -5` — review recent commits.
5. Run `./init.sh` (Module 06), then `pnpm test`. If the baseline fails, fix
   that first; never stack new work on a broken start.

Clock-out:

1. Run `./verify.sh` (Module 09) or, until it exists, `pnpm test`.
2. Update `PROGRESS.md` and `feature_list.json`; record unresolved risks.
3. Commit with a descriptive message once the repo is in a safe state.

Items marked with a module number do not exist yet; skip them until that module lands.

## Working rules

- Keep changes inside the selected feature; a blocker may justify a narrow supporting fix.
- Do not silently change verification rules during implementation.
- Prefer durable repo artifacts over chat summaries.

## Hard constraints (repeated)

1. **One feature at a time.**
2. **Citations rule:** `noted ask` match lines keep `cite: <absolute path>` — `docs/citation-rule.md`.
3. **Definition of Done:** `docs/PRODUCT.md`.
