Clock-in complete. No files changed, baseline is healthy.

- **Verified state:** Module 05 closed; `pnpm test` 4/4 pass, `./bin/noted status` exits 0 and prints Next Action — matches `PROGRESS.md`.
- **Active feature:** none — last feature (M05) met Definition of Done; no feature currently in progress.
- **Known issues:** no `noted import`/`index` yet (fresh repo root has no `.noted/`, `ask` would exit 1); M04 A/B protocol run still pending; `init.sh`/`feature_list.json`/`verify.sh` (M06/08/09) don't exist yet, correctly skipped per AGENTS.md.
- **Load-bearing decisions:** D-001 JSON-only storage under `.noted/` (no DB/network); D-002 citation rule (`cite: <absolute path>` on every `ask` match) is hoisted and non-negotiable, even under output-shortening requests.
- **Next action:** Start Module 06 — add `./init.sh` (deps install + `pnpm test` + `./bin/noted status`) and switch AGENTS.md's clock-in step to depend on it; optionally run the M04 A/B protocol in `course-runs/M04-results.md` first.
