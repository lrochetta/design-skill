---
name: design-review
description: >
  Audit an existing UI, screen, or frontend codebase for design and UX quality. Use when the
  user asks to review, critique, audit, or improve an existing interface, or asks "what's wrong
  with this design / is this accessible / does this look AI-generated". Produces a prioritized
  findings list (accessibility blockers first, then hierarchy, states, consistency, anti-slop
  tells). Reads the design engine's reference modules on demand. This is the review counterpart
  to the `design` skill (which builds new UI).
license: MIT
metadata:
  project: atelier
  version: "0.1.0"
---

# Design review — audit an existing interface

You are reviewing UI that already exists. Do not rebuild it; find what's wrong, ranked by
severity, with an actionable fix for each. Grounded in the same rules as the `design` skill —
load its reference modules (relative path `../design/references/`) as needed.

## Protocol

1. **State the goal.** What is this screen for, who for, what job? You cannot review against
   nothing (`../design/references/00-brief-read.md`). If unknown, infer and say so.

2. **Objective pass first** — run the mechanical checks before any aesthetic judgment. Most
   "feels off" is a mechanical miss. Load and apply:
   - Accessibility (blockers): `../design/references/20-wcag22.md`, `21-aria-apg.md`,
     `22-keyboard-focus.md`, `23-motion-a11y.md`. If you can run tooling, use
     `82-quality-gates.md` (axe/Playwright/Lighthouse) — report actual violations.
   - States: `35-states.md` — are empty/loading/error/no-results all handled?
   - Foundations: `11-color.md` (contrast), `12-typography.md`, `13-space-grid.md`,
     `14-shape-elevation.md` — tokens vs raw values, contrast, type/space discipline.
   - Anti-defaults: `81-anti-defaults.md` — scan for AI-slop tells.

3. **Subjective pass** — hierarchy, goal-fit, motion, content, using the rubric in
   `51-critique-rubric.md`.

4. **Rank and report.** Findings most-severe first. Each finding:
   `[severity] location — observation → impact → suggestion`
   Severity: **blocker** (a11y fail, broken flow) > **major** (confusing hierarchy, missing
   state) > **minor** (polish). Lead with blockers; never bury one under nitpicks.

5. **Close with the top 3** changes that would most improve the design, and whether it passes
   the `80-preflight.md` gate.

## Rules

- Review against the goal and the rules, not your personal taste.
- Every finding names a mechanical change ("make the secondary a ghost button"), never "make it
  pop".
- Accessibility failures are blockers, full stop.
- If you can execute code, run axe/Lighthouse and cite real numbers; otherwise inspect against
  the checklists and say the checks were manual.
- Do not rewrite the whole thing — propose the smallest set of high-impact fixes.

## Output

A findings list (severity-ranked) + the top-3 + a pass/fail on pre-flight. Offer to implement
the fixes (hand off to the `design` skill) if the user wants.
