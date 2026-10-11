# Decisions

Append-only, ADR-style. Never delete an entry; to reverse one, strike it
through (`~~...~~`) and add a new entry that supersedes it.

## D-001 — JSON in `.noted/` is the only persistence layer

- **Date:** 2026-08-01
- **Decision:** All state lives as JSON files under `.noted/`
  (`notes.json`, `index.json`). No SQLite, no embeddings store, no network.
- **Context:** Single-user local tool; `docs/PRODUCT.md` puts other storage
  formats out of scope. JSON is diffable and needs no dependencies.
- **Consequences:** All reads/writes go through `src/store/io.ts`. A missing
  file is a normal empty state. If the index outgrows a flat JSON scan, that
  needs a new decision entry, not a quiet swap.

## D-002 — The citation rule is load-bearing

- **Date:** 2026-10-11
- **Decision:** Every `noted ask` match prints `cite: <absolute path>`.
  Output-shortening requests do not override it.
- **Context:** Module 04 showed the rule gets lost when buried mid-file in a
  long `AGENTS.md`. Answers without a source path are useless for research.
- **Consequences:** Rule is hoisted to the top and bottom of `AGENTS.md`,
  spelled out in `docs/citation-rule.md`, and asserted in
  `src/commands/ask.test.ts`.
