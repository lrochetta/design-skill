# 00 — Decision tree (which modules, build vs buy)

## Which modules do I load?

1. **Always:** `00-brief-read.md` (done first), then the foundations you touch
   (`11-color`, `12-typography`, `13-space-grid`) and `20-wcag22` for any interactive UI.
2. **One surface module** from the `3x` band matching what you build.
3. **`35-states.md` almost always** — real screens have empty/loading/error states, and
   forgetting them is a top-3 AI omission.
4. **Before delivery:** `80-preflight.md`. Non-negotiable.

## Build vs buy a component system

Decide this *before* writing a single component. Route to `70-component-libs.md` for the
full matrix; the short version:

```
Does the brief name or imply a design system / ecosystem?
├─ Shopify embedded app        → Polaris web components (s-* via CDN). React Polaris is DEPRECATED.
├─ Microsoft / enterprise .NET → Fluent 2 (@fluentui/react-components v9)
├─ IBM / enterprise data       → Carbon v11 (@carbon/react)
├─ Generic React product       → shadcn/ui + Radix (or Base UI) — copy-in, you own the code
├─ Full-featured React fast    → Mantine v9 (120+ components, MIT, needs React 19.2+)
└─ No system implied           → shadcn/ui + Radix is the safe default for React in 2026.

Then: INSTALL THE REAL PACKAGE. Never hand-recreate a named design system by eye.
```

## Two architectural ideas worth knowing (from the landscape)

- **Rules-as-a-service** (Vercel pattern): instead of freezing a ruleset into context,
  fetch it fresh at run time so it never goes stale. This skill embeds rules for offline
  determinism, but for the fast-moving `70`/`71` modules, prefer live sources:
  `vercel.com/design.md` (Geist, live Markdown), Mantine `llms-full.txt`,
  Carbon `carbondesignsystem.com/llms.txt`, and MCP servers (Carbon MCP, `@mantine/mcp-server`,
  `@shopify/dev-mcp`, shadcn `npx shadcn mcp`).
- **Taste-as-retrieval** (ui-ux-pro-max pattern): treat palettes / font pairings / style
  presets as a *queryable corpus*, not a fixed opinion. When you need a palette or pairing,
  derive it from `11-color`/`12-typography` rules for *this* brief rather than reusing a
  house look across projects (see `81-anti-defaults.md`, the "banned rotation" rule).

## When NOT to over-design

- Internal tools, admin panels: correctness and density beat polish. `VARIANCE 2-3`.
- If a mature component library exists for the stack, compose it; do not restyle every
  primitive. Restyling shadcn/Radix defaults with ad-hoc classes is a source of drift
  (`82-quality-gates.md`).
