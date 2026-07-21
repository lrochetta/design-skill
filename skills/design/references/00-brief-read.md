# 00 — Brief read (do this before anything)

The #1 failure mode of an AI building UI is skipping straight to code and emitting a
generic template. The fix is cheap: **read the brief, out loud, in one line, first.**

## The one-line design read

Fill this before writing code or opinions:

> **[page kind] for [audience], aesthetic family [X], primary job [Y].**

Examples:
- *Landing for a B2B dev-tool, aesthetic family technical-minimal, primary job "get a demo".*
- *Dashboard for finance ops, aesthetic family dense-utilitarian, primary job "spot anomalies fast".*
- *Onboarding for a consumer wellness app, aesthetic family soft-editorial, primary job "first win in 60s".*

If you cannot fill it, you do not understand the brief yet. Ask one sharp question.

## Set the dials

| Dial | Range | Marketing default | Product default | Read it from |
|---|---|---|---|---|
| `VARIANCE` | 1 safe → 10 bold | 7 | 3 | brand maturity, competitive noise, "make it stand out" cues |
| `MOTION` | 1 static → 10 kinetic | 5 | 3 | product energy, perf constraints, reduced-motion audience |
| `DENSITY` | 1 sparse → 10 packed | 4 | 7 | expertise of user, info volume, how often they use it |

**Density is the tell most agents get wrong.** Consumer marketing = sparse. Power-user
product (dashboards, tables, admin) = dense. Matching a sparse marketing aesthetic to a
data-heavy product is the single most common mismatch. Match the *surface*, not a taste.

## Aesthetic family → preset

If the brief implies a direction, load **one** preset and stop:
- restrained, editorial, text-forward → `presets/minimalist.md`
- raw, high-contrast, mechanical, Swiss → `presets/brutalist.md`
- warm, generous, layered depth, fluid → `presets/soft-editorial.md`
- dark, dense, keyboard-driven control plane → `presets/premium-dense.md`

If nothing is implied, do **not** pick one. Infer a direction from the aesthetic family
line and proceed; a wrong preset is worse than none.

## What to extract from the brief (checklist)

- [ ] Surface type (routes to a `3x-*.md` module)
- [ ] Audience expertise (drives density + copy register)
- [ ] Brand assets present? (tokens, logo, fonts) → if yes, honor them, do not invent
- [ ] Existing stack? (framework, Tailwind version, component lib) → drives `70/71/72`
- [ ] Constraints: perf budget, a11y level required, i18n/RTL, dark mode
- [ ] The one job the primary screen must accomplish (there is usually exactly one)

Only after this do you open a surface module and start building.
