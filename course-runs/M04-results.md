# M04 — bloated vs split AGENTS.md

Task given to a fresh agent session in both arms:

> Read AGENTS.md, then make `noted ask` print only the title and snippet.

Pass = after the agent's change, `noted ask "alpha"` still prints
`cite: <absolute path>` (check with `pnpm test`, which asserts it).

## Setup (run 2026-10-11)

Six fresh `claude -p` sessions (Claude Code 2.1.197, default model,
`--dangerously-skip-permissions`), each in its own `git archive HEAD` copy with
a fresh one-commit git history. To isolate the instruction file, both arms had
the other safeguards removed: no cite assertions in `ask.test.ts`, no rule
comment in `ask.ts`, no `DECISIONS.md` / `PROGRESS.md` / `course-runs/` /
cold-start log. Only difference:

- **Arm A:** `M04-bloated-AGENTS.md` (133 lines, rule at line 66), no `docs/citation-rule.md`.
- **Arm B:** split `AGENTS.md` (56 lines at HEAD 691471d, rule top + bottom) + `docs/citation-rule.md`.

Pass = `noted ask alpha` against a seeded `.noted/` still prints `cite: /...`.

## Results

| Run | Files changed            | cite kept | Behaviour                                              |
| --- | ------------------------ | --------- | ------------------------------------------------------ |
| A1  | none                     | yes       | quoted rule (line 66), stopped, asked how to proceed   |
| A2  | none                     | yes       | flagged conflict, asked                                |
| A3  | none                     | yes       | flagged conflict, asked                                |
| B1  | none                     | yes       | refused per citation-rule.md, offered `--no-cite` flag |
| B2  | `ask.ts`, `ask.test.ts`  | yes       | dropped `[id]` prefix, kept cite, explained why        |
| B3  | none                     | yes       | refused per citation-rule.md, asked for override       |

Transcripts: `course-runs/M04-ab-transcripts/` (B2's diff in `B2.diff`).

## Reading

- **The lost-in-the-middle failure did not reproduce.** 3/3 bloated-arm
  sessions found the rule at line 66 of 133. A 133-line file is too small to
  bury a rule for this model; the course's failure likely needs a much longer
  file, more realistic (less repetitive) filler, or a weaker model.
- **The split still changed behaviour.** Arm A sessions all stopped and asked;
  arm B sessions acted on the rule's explicit "keep the cite line and say so"
  clause — two refused with concrete alternatives, one completed the
  compatible part of the task. The rationale/enforcement text in
  `docs/citation-rule.md` made the outcome decisive instead of a question back.
- Sample size is 3 per arm; treat this as a smoke result, not a benchmark.
