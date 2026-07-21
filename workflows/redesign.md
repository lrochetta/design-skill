# Workflow — redesign

Refresh or overhaul an existing product without breaking what works. Callable as `/redesign`.
Drives the `redesign` skill.

## Steps

1. **Audit current state** (don't propose anything yet):
   - Extract tokens/brand/voice (`90`, `10`).
   - Map IA + key flows (`50`, `36`).
   - Inventory surfaces + states (`3x`, `35`).
   - Run the `design-review` workflow to separate "broken" from "merely dated".

2. **Decide mode**: preserve (visual refresh, keep IA/URLs) vs overhaul (rework IA/flows).
   Default preserve; justify overhaul against user goals (`50`). State the decision.

3. **Migration plan** — flag risks explicitly:
   - **SEO (#1 risk):** preserve URLs / 301s, keep semantics/metadata/structured data.
   - **A11y:** must not regress (`20`–`23`).
   - **Muscle memory:** don't move core actions without reason.
   - **Tokens:** migrate as a system, fix drift (`10`, `82`).

4. **Build** the new version via the `new-surface` workflow, reusing extracted brand tokens.

5. **Verify vs old**: `design-review` + `80` pre-flight + `82` gates; confirm no SEO/a11y/flow
   regressions.

## Success criteria

Audit done before proposing; mode justified; SEO + a11y explicitly checked for regression;
brand honored; pre-flight passes on the new version.
