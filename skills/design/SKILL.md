---
name: design
description: >
  Design engine for UI/UX work across any surface: landing pages, dashboards,
  data tables, forms, auth/onboarding, mobile, email. Use when building, styling,
  reviewing, or redesigning any interface, choosing a component library, setting up
  design tokens, colors, typography, spacing, motion, accessibility (WCAG 2.2 / ARIA),
  empty/loading/error states, or when the user mentions design, UI, UX, frontend,
  responsive, accessibility, layout, or "make it look good". This is a router: it
  loads focused reference modules on demand. Covers foundations, a11y, product
  surfaces, motion, UX process, UX writing, implementation reality, and quality gates.
license: MIT
metadata:
  project: atelier
  version: "0.1.0"
---

# Design — routing engine

You are building or reviewing an interface. This skill is a **router**, not a manual.
It holds three things: the **dials**, the **decision tree**, and the **routing table**.
Everything else lives in `references/` and you load it **only when the task needs it**.

**Prime directive:** taste is not vibes. Every rule in this system is *mechanically
checkable*. If you cannot verify a design decision against a rule, it is an opinion,
not a standard. Prefer the rule.

---

## STEP 0 — Always do this first (the design read)

Before writing any code or opinion, produce a **one-line design read** and set the dials.
Do not skip this. It prevents the #1 failure mode: defaulting to a generic AI template.

1. Read `references/00-brief-read.md`. State in one line: *page kind · audience · aesthetic family*.
2. Set the three **dials** (1–10). Infer from the brief; do not apply blind defaults.

| Dial | 1 | 10 | Default | Controls |
|---|---|---|---|---|
| `VARIANCE` | symmetric, safe | asymmetric, bold | **7** | layout architecture, hero shape |
| `MOTION` | static | choreographed | **5** | animation amount & intensity |
| `DENSITY` | gallery-sparse | cockpit-packed | **4** | info per screen |

Defaults lean artsy-kinetic for **marketing**. For **product surfaces** (dashboard, tables,
forms, settings) flip to `VARIANCE 3 / MOTION 3 / DENSITY 7` — density and calm win there.

3. Pick **at most one** aesthetic preset if the brief implies a direction:
`references/presets/{minimalist,brutalist,soft-editorial,premium-dense}.md`. Otherwise none.

---

## STEP 1 — Route by surface, then load

Match the task to a surface, load that module **plus** the always-relevant foundations.
Do not load modules you will not use — that is the whole point of the split.

### Decision tree

```
Is this a REVIEW / audit of existing UI?      → use the `design-review` skill instead.
Is this a REFONTE / redesign of a live site?  → use the `redesign` skill instead.
Otherwise (greenfield / new UI): continue.

What surface am I building?
├─ Marketing landing / portfolio / hero      → 30-landing.md
├─ Dashboard / analytics / metrics           → 31-dashboard-dataviz.md   (+ dataviz skill for charts)
├─ Data table / grid / list of records       → 32-data-tables.md
├─ Form / multi-step / settings form         → 33-forms.md
├─ Auth / signup / login / onboarding        → 34-auth-onboarding.md
├─ Any screen that can be empty/loading/error → 35-states.md   (almost always: load it)
├─ Nav / sidebar / search / command palette   → 36-nav-ia-search.md
├─ Toast / modal / dialog / popover           → 37-feedback-overlays.md
├─ Mobile / responsive / native (iOS/Android) → 38-mobile-native.md
├─ HTML email                                 → 39-email.md
├─ Chat / streaming / agentic / generative AI → 3A-ai-native-ui.md
├─ Pricing / cart / checkout / paywall        → 3B-commerce-checkout.md
└─ Settings / preferences / account / billing → 3C-settings-account.md
```

### Always load for real UI work (the foundations)

| When | Load |
|---|---|
| Any color decision | `references/11-color.md` (OKLCH, contrast) |
| Any type decision | `references/12-typography.md` |
| Any layout/spacing | `references/13-space-grid.md` |
| Setting up a token system | `references/10-tokens.md` + `14-shape-elevation.md` |
| Using icons / images | `references/15-iconography.md` / `16-imagery.md` |
| **Any** interactive UI | `references/20-wcag22.md` — a11y is not optional |

---

## STEP 2 — Full routing table

Load a file when its trigger matches. One level deep, relative paths.

| # | Module | Load when |
|---|---|---|
| 00 | `00-brief-read.md` | **Always, first** — design read + dials |
| 00 | `00-decision-tree.md` | Unsure which modules apply, or building vs buying a component lib |
| 10 | `10-tokens.md` | Establishing/normalizing a design-token system (DTCG format) |
| 11 | `11-color.md` | Any color, palette, dark mode, contrast decision |
| 12 | `12-typography.md` | Font choice, scale, pairing, line-height |
| 13 | `13-space-grid.md` | Spacing scale, grid, breakpoints, container queries |
| 14 | `14-shape-elevation.md` | Radius, borders, shadows/elevation, depth |
| 15 | `15-iconography.md` | Icons: set, grid, delivery (SVG), a11y |
| 16 | `16-imagery.md` | Photography/illustration direction, responsive images, CLS |
| 20 | `20-wcag22.md` | Any interactive UI — the WCAG 2.2 AA checks that bite |
| 21 | `21-aria-apg.md` | Building a widget (combobox, dialog, menu, tabs, disclosure…) |
| 22 | `22-keyboard-focus.md` | Focus order, focus-visible, skip links, focus traps |
| 23 | `23-motion-a11y.md` | Any animation — reduced-motion, vestibular safety |
| 30 | `30-landing.md` | Marketing landing / hero / portfolio |
| 31 | `31-dashboard-dataviz.md` | Dashboards, metrics, analytics (pair with `dataviz` skill) |
| 32 | `32-data-tables.md` | Tables, grids, sort/filter/pagination, dense records |
| 33 | `33-forms.md` | Forms, validation, multi-step, settings |
| 34 | `34-auth-onboarding.md` | Auth flows, signup, first-run onboarding |
| 35 | `35-states.md` | Empty / loading / error / skeleton / offline states |
| 36 | `36-nav-ia-search.md` | Navigation, sidebar, command palette, search, IA |
| 37 | `37-feedback-overlays.md` | Toasts, modals, dialogs, popovers, confirmations |
| 38 | `38-mobile-native.md` | Mobile, responsive, touch, native iOS/Android/Material |
| 39 | `39-email.md` | HTML email |
| 3A | `3A-ai-native-ui.md` | Chat, token streaming, agentic/tool UI, generative canvases |
| 3B | `3B-commerce-checkout.md` | Pricing, cart, checkout, payment, paywall/subscription |
| 3C | `3C-settings-account.md` | Settings, preferences, account, billing, danger zone |
| 40 | `40-motion-system.md` | Motion tokens (easing/duration), spring, choreography |
| 41 | `41-motion-web.md` | View transitions, scroll-driven, GSAP/Framer, perf budgets |
| 50 | `50-ux-research-flows.md` | Personas, JTBD, user flows, IA, Nielsen heuristics |
| 51 | `51-critique-rubric.md` | Running a structured design critique |
| 60 | `60-ux-writing.md` | Microcopy, error messages, button/label copy, tone |
| 61 | `61-i18n-rtl.md` | Internationalization, RTL, pseudo-localization |
| 70 | `70-component-libs.md` | Choosing shadcn/Radix/Base UI vs Mantine/Fluent/Carbon/Polaris |
| 71 | `71-css-2026.md` | Tailwind v4, container queries, :has, cascade layers, popover API, anchor pos |
| 72 | `72-frameworks.md` | React 19 / Next / Vue / Svelte design-impl specifics |
| 73 | `73-handoff-qa.md` | Design→code parity, token export, states-complete, codegen review |
| 80 | `80-preflight.md` | **Before delivering any UI** — the pre-flight checklist |
| 81 | `81-anti-defaults.md` | Avoiding the "AI slop" tells; forbidden defaults |
| 82 | `82-quality-gates.md` | axe / Lighthouse / CWV / visual regression / DS drift |
| 83 | `83-ethics-consent.md` | Dark-pattern avoidance + cookie/GDPR consent UI |
| 90 | `90-brand-kit.md` | Brand identity, logo, voice, brand kit |

---

## STEP 3 — Before you deliver (non-negotiable)

Every piece of UI passes `references/80-preflight.md` before you call it done.
It is mechanical: contrast ratios, font discipline, hero fit, motion justification,
a11y basics, anti-default scan. A failing pre-flight means the work is not finished,
regardless of how it looks.

---

## The dials in practice

- **VARIANCE** high → asymmetric split heroes, off-grid accents, editorial overlaps.
  Low → centered, symmetric, safe. High variance ≠ chaos: the grid still governs.
- **MOTION** every animation must justify itself in one sentence (hierarchy, feedback,
  storytelling, or state transition) or be removed. High motion ≠ everything moves.
- **DENSITY** high → more per screen, tighter rhythm, less whitespace-as-padding.
  Product surfaces are dense; marketing is sparse. Match the surface, not a preference.

## Sibling skills (load alongside, don't reinvent)

- **`dataviz`** — chart internals (form heuristic, palettes, marks, axes, legends, tooltips).
  `31-dashboard-dataviz.md` covers the dashboard frame; load `dataviz` for the charts themselves.
- **`frontend-design`** / **`artifact-design`** — visual polish passes; complementary to this
  engine's rules.

## Declared scope (so nothing is silently missing)

Covered in depth: foundations, accessibility, all common product surfaces (incl. AI-native,
commerce, settings), motion, UX process, content/i18n, implementation, quality gates, brand,
handoff/QA, ethics/consent. **Second-wave / lighter touch** (handle opportunistically, or say so
when out of scope): design-system *governance* (contribution/versioning/deprecation), *measurement*
(analytics/A-B/HEART), multi-brand theming at scale, notifications *channel strategy*, perceived-
performance timing psychology (noted in `35`), spatial/3D/XR, sound/haptics, canvas/game UI. If a
request centers on one of these, name the limit rather than pretending full coverage.

## Honesty rules (do not violate)

- If a real design system fits, **install the real package** — never hand-recreate
  Material/Fluent/Carbon/Polaris/shadcn by eye. See `70-component-libs.md`.
- No fake screenshots built from divs, no hand-rolled decorative SVG "product shots"
  unless explicitly requested. Real images or generated images.
- This skill is framework-aware, not framework-agnostic-by-pretending: examples are
  Tailwind v4 + CSS, with plain-CSS fallbacks noted. Say what stack you assume.
