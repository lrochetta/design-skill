# Workflow — design-review

Audit an existing interface and return prioritized, actionable findings. Callable as
`/design-review`. Drives the `design-review` skill.

## Steps

1. **Goal** — state what the screen is for, who for, what job (`00-brief-read.md`). Infer if
   unknown.

2. **Objective pass** (mechanical, first):
   - Accessibility: `20`–`23`. If code is runnable, execute `@axe-core/playwright` +
     Lighthouse (`82`) and record real violations. Else inspect against the checklists.
   - States: `35` — empty/loading/error/no-results present?
   - Foundations: contrast `11`, type `12`, space `13`, shape `14` — tokens vs raw values.
   - Anti-defaults: `81` — scan for tells.

3. **Subjective pass** — hierarchy, goal-fit, motion, content via `51-critique-rubric.md`.

4. **Rank** findings: blocker > major > minor. Each: `[severity] location — observation →
   impact → suggestion`.

5. **Report**: severity-ordered list + top-3 highest-impact changes + pass/fail on `80`.

6. **Offer to fix** via the `new-surface` workflow / `design` skill.

## Success criteria

Every accessibility blocker surfaced; findings actionable (name the mechanical change);
severity honest (blockers lead); tooling numbers cited when code was runnable.
