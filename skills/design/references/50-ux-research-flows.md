# 50 — UX process: research, flows, heuristics

The part "frontend design" skills skip entirely. Before you style a screen, know who it's for
and what job it does. This module is upstream of every surface module.

## Why agents fail here by default

They jump to visuals with no model of the user or the task, produce screens that look fine and
solve nothing, and never map the flow so dead-ends and missing states appear only at the end.

## Lightweight research (do the cheap version, always)

1. **Name the user and their expertise.** Novice vs power user changes density, copy, and
   affordances (`00-brief-read.md`). One sentence minimum.
2. **Jobs To Be Done.** "When [situation], I want to [motivation], so I can [outcome]." Frame
   the design around the job, not the feature. This keeps you from building UI nobody needs.
3. **Personas only if they change decisions.** A one-line "primary user + their goal + their
   constraint" beats a fictional bio. Don't over-produce.
4. **Assumptions are explicit.** State what you're assuming about the user; flag what should be
   validated. (Guardrail G1.)

## Information architecture & flows

1. **Map the user flow before screens.** Entry → steps → decision points → exits (success AND
   failure). A flow diagram surfaces missing states (`35`) and dead-ends before you build them.
2. **Every decision point has all branches designed** — including the unhappy ones (error,
   empty, permission-denied, offline).
3. **Minimize steps to the goal.** Count the clicks/fields to the primary outcome; cut every
   one you can (`33`, `34`).
4. **IA groups by task, user language** (`36`).

## Nielsen's 10 usability heuristics (evaluate against these)

1. Visibility of system status (feedback, `35`/`37`)
2. Match between system and the real world (user language, `60`)
3. User control and freedom (undo, back, escape hatches)
4. Consistency and standards (platform + internal, `38`)
5. Error prevention (constrain input before validating, `33`)
6. Recognition rather than recall (show options, don't make users remember)
7. Flexibility and efficiency (shortcuts, command palette `36`)
8. Aesthetic and minimalist design (signal over decoration)
9. Help users recognize, diagnose, recover from errors (`60`)
10. Help and documentation (contextual, `34`)

Use them as a review lens (`51-critique-rubric.md`), not a checklist to bolt on at the end.

## Delivery checklist

- [ ] User + expertise named; JTBD stated
- [ ] Assumptions explicit, validation flagged
- [ ] Full flow mapped incl. failure branches
- [ ] Steps-to-goal minimized
- [ ] Evaluated against Nielsen's 10
