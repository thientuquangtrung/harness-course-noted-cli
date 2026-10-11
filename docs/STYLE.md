# Style

## TypeScript

- Node 20+, ESM (`"type": "module"`), run through `tsx`; no build step.
- `strict` mode is on. Avoid `any` and non-null `!`; narrow instead.
- Import local files with the `.ts` extension (`./store/io.ts`).
- Use `node:`-prefixed built-ins (`node:fs/promises`, `node:path`).
- Two-space indentation, double quotes, semicolons, trailing commas in
  multi-line literals.
- No runtime dependencies. Dev dependencies only (`tsx`, `typescript`).

## Naming

- One file per CLI verb: `src/commands/<verb>.ts` exporting `run<Verb>(...)`.
- Tests sit beside the code: `<name>.test.ts`, using `node:test` and
  `node:assert/strict`.
- Types for on-disk JSON live in `src/store/types.ts` and are named after the
  file they describe (`NotesFile`, `IndexFile`).
- On-disk JSON keys are `snake_case` (`note_ids`); TypeScript identifiers are
  `camelCase`.

## Exit codes and errors

- Command functions return a number; only `src/cli.ts` calls `process.exit`.
- `0` success (including "no matches"), `1` runtime failure (missing state,
  bad data), `2` usage error (unknown command, missing argument).
- Errors go to stderr via `console.error`, lowercase, no trailing period,
  and name the fix when there is one:
  `no index found; run \`noted index\` first`.
- Usage errors print the usage line: `usage: noted ask "<query>"`.

## File I/O

- All reads and writes of `.noted/` and repo artifacts go through
  `src/store/io.ts`. Command files never import `node:fs` directly.
- A missing file is a normal state: return `null` / an empty value, and let
  the command decide how to report it.
