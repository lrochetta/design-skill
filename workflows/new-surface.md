# Workflow — new-surface

Build a new UI surface from scratch, correctly, first time. Callable as `/new-surface` in
Antigravity, or run step-by-step by any agent. Orchestrates the `design` skill's modules.

## Steps

1. **Brief read** (`skills/design/references/00-brief-read.md`)
   Output the one-line design read; set VARIANCE / MOTION / DENSITY; pick ≤1 preset.

2. **Route to the surface** (`skills/design/SKILL.md` decision tree)
   Load the matching `3x` module + foundations (`11`/`12`/`13`) + `20-wcag22` + almost always
   `35-states`.

3. **Decide build-vs-buy** (`70-component-libs.md`)
   Pick the component system; pull current specifics from its llms.txt/MCP. Install the real
   package. Set up tokens (`10`) if none exist.

4. **Build** the happy path AND every state (`35`), following the surface module's rules and
   the chosen preset. Native platform features where they fit (`71`).

5. **Wire content** (`60-ux-writing.md`): action-named buttons, constructive errors, real
   empty-state copy. i18n-ready if relevant (`61`).

6. **Motion pass** (`40`/`41`): only justified motion, tokenized, reduced-motion safe (`23`).

7. **Pre-flight** (`80-preflight.md`): run the full A–H checklist. Fix every failure. Do not
   deliver on a failing pre-flight.

8. **(Optional) Gate** (`82-quality-gates.md`): if the project has CI, wire axe + Lighthouse +
   token lint + visual regression.

## Success criteria

All pre-flight sections pass; every state designed; real design system used; a11y is a blocker
that passed; no anti-default tells (`81`).
