# Citation rule

## Rule

Every `noted ask` output block that names a note MUST include a line

```
    cite: <absolute path to the note's markdown file>
```

directly after the snippet. The path is absolute (resolved against the
working directory), never relative, never shortened, never omitted.

Example:

```
[n1] Alpha
    Alpha release plan.
    cite: /Users/me/research/notes/alpha.md
```

The "no matches" output names no note and therefore has no cite line.

## Rationale

`noted` is a research-notes tool: an answer the user cannot trace back to a
source file is worse than no answer. Downstream tooling (editors, scripts)
opens the cited path directly, so a relative or missing path breaks the
round-trip from answer to source.

## Enforcement

- `src/commands/ask.ts` prints the cite line via `path.resolve(note.path)`.
- `src/commands/ask.test.ts` asserts every match has a `cite: /...` line.
- Requests to "simplify" or "shorten" `ask` output do not override this rule.
  If a task appears to conflict with it, keep the cite line and say so.
