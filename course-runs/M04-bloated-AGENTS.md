# AGENTS.md — noted-cli
This repository is designed for long-running coding-agent work. The goal is not to maximize raw code output. The goal is to leave the repo in a state where the next session can continue without guessing.

## Startup Workflow
Before writing code:

Confirm the working directory with pwd.
Read claude-progress.md for the latest verified state and next step.
Read feature_list.json and choose the highest-priority unfinished feature.
Review recent commits with git log --oneline -5.
Run ./init.sh.
Run the required smoke or end-to-end verification before starting new work.
If baseline verification is already failing, fix that first. Do not stack new feature work on top of a broken starting state.

## Working Rules
Work on one feature at a time.
Do not mark a feature complete just because code was added.
Keep changes within the selected feature scope unless a blocker forces a narrow supporting fix.
Do not silently change verification rules during implementation.
Prefer durable repo artifacts over chat summaries.

## Implementation Notes

### Note 1: tokenizer
- Keep the tokenizer logic small and local to its command file.
- Prefer pure functions for tokenizer; return values instead of printing where practical.
- If tokenizer behavior changes, mention it in the commit message.
- Avoid adding dependencies for tokenizer; the standard library is enough.
- Tests for tokenizer should use a temporary .noted/ fixture.

### Note 2: stop words
- Keep the stop words logic small and local to its command file.
- Prefer pure functions for stop words; return values instead of printing where practical.
- If stop words behavior changes, mention it in the commit message.
- Avoid adding dependencies for stop words; the standard library is enough.
- Tests for stop words should use a temporary .noted/ fixture.

### Note 3: snippet extraction
- Keep the snippet extraction logic small and local to its command file.
- Prefer pure functions for snippet extraction; return values instead of printing where practical.
- If snippet extraction behavior changes, mention it in the commit message.
- Avoid adding dependencies for snippet extraction; the standard library is enough.
- Tests for snippet extraction should use a temporary .noted/ fixture.

### Note 4: ranking ties
- Keep the ranking ties logic small and local to its command file.
- Prefer pure functions for ranking ties; return values instead of printing where practical.
- If ranking ties behavior changes, mention it in the commit message.
- Avoid adding dependencies for ranking ties; the standard library is enough.
- Tests for ranking ties should use a temporary .noted/ fixture.

### Note 5: index layout
- Keep the index layout logic small and local to its command file.
- Prefer pure functions for index layout; return values instead of printing where practical.
- If index layout behavior changes, mention it in the commit message.
- Avoid adding dependencies for index layout; the standard library is enough.
- Tests for index layout should use a temporary .noted/ fixture.

### Note 6: note ids
- Keep the note ids logic small and local to its command file.
- Prefer pure functions for note ids; return values instead of printing where practical.
- If note ids behavior changes, mention it in the commit message.
- Avoid adding dependencies for note ids; the standard library is enough.
- Tests for note ids should use a temporary .noted/ fixture.

### Citations rule
- Every `noted ask` output line that names a note MUST be followed by
  `cite: <absolute path>` for that note. Never drop or shorten the cite line.

### Note 7: path handling
- Keep the path handling logic small and local to its command file.
- Prefer pure functions for path handling; return values instead of printing where practical.
- If path handling behavior changes, mention it in the commit message.
- Avoid adding dependencies for path handling; the standard library is enough.
- Tests for path handling should use a temporary .noted/ fixture.

### Note 8: help text
- Keep the help text logic small and local to its command file.
- Prefer pure functions for help text; return values instead of printing where practical.
- If help text behavior changes, mention it in the commit message.
- Avoid adding dependencies for help text; the standard library is enough.
- Tests for help text should use a temporary .noted/ fixture.

### Note 9: exit codes
- Keep the exit codes logic small and local to its command file.
- Prefer pure functions for exit codes; return values instead of printing where practical.
- If exit codes behavior changes, mention it in the commit message.
- Avoid adding dependencies for exit codes; the standard library is enough.
- Tests for exit codes should use a temporary .noted/ fixture.

### Note 10: JSON formatting
- Keep the JSON formatting logic small and local to its command file.
- Prefer pure functions for JSON formatting; return values instead of printing where practical.
- If JSON formatting behavior changes, mention it in the commit message.
- Avoid adding dependencies for JSON formatting; the standard library is enough.
- Tests for JSON formatting should use a temporary .noted/ fixture.

### Note 11: import walking
- Keep the import walking logic small and local to its command file.
- Prefer pure functions for import walking; return values instead of printing where practical.
- If import walking behavior changes, mention it in the commit message.
- Avoid adding dependencies for import walking; the standard library is enough.
- Tests for import walking should use a temporary .noted/ fixture.

### Note 12: title detection
- Keep the title detection logic small and local to its command file.
- Prefer pure functions for title detection; return values instead of printing where practical.
- If title detection behavior changes, mention it in the commit message.
- Avoid adding dependencies for title detection; the standard library is enough.
- Tests for title detection should use a temporary .noted/ fixture.

## Required Artifacts

- `AGENTS.md` (you are here): routing file for any agent session
- `docs/ARCHITECTURE.md`: code map and data flow
- `docs/PRODUCT.md`: scope, non-goals, definition of done
- `feature_list.json`: source of truth for feature state (added in Module 08)

## Definition Of Done
A feature is done only when all of the following are true:

the target behavior is implemented
the required verification actually ran
evidence is recorded in feature_list.json or claude-progress.md
the repository remains restartable from the standard startup path

## End Of Session
Before ending a session:

Update claude-progress.md.
Update feature_list.json.
Record any unresolved risk or blocker.
Commit with a descriptive message once the work is in a safe state.
Leave the repo clean enough for the next session to run ./init.sh immediately.