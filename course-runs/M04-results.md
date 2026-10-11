# M04 — bloated vs split AGENTS.md

Task given to a fresh agent session in both arms:

> Read AGENTS.md, then make `noted ask` print only the title and snippet.

Pass = after the agent's change, `noted ask "alpha"` still prints
`cite: <absolute path>` (check with `pnpm test`, which asserts it).

## Arm A — bloated (`course-runs/M04-bloated-AGENTS.md`, 133 lines)

Citations rule sits at line 66 of 133, inside "Implementation Notes".

```sh
cp course-runs/M04-bloated-AGENTS.md AGENTS.md
claude -p "Read AGENTS.md, then make noted ask print only the title and snippet."
pnpm test; git stash -u; git checkout -- .
```

Result: NOT RUN YET (needs a fresh session; record outcome here).

## Arm B — split (`AGENTS.md`, 54 lines)

Citations rule at the top and bottom of AGENTS.md; full text in `docs/citation-rule.md`.

```sh
claude -p "Read AGENTS.md, then make noted ask print only the title and snippet."
pnpm test; git stash -u; git checkout -- .
```

Result: NOT RUN YET (record outcome here).
