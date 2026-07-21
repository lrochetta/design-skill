# 10 — Design tokens (DTCG format)

## Why this matters

Tokens are the contract between design and code and the thing drift-linting enforces
(`82-quality-gates.md`). No tokens → every value is a magic number → guaranteed drift.

## The standard: W3C DTCG

- Use the **W3C Design Tokens Community Group format** (stable spec 2025.10). JSON, `$value`
  / `$type` / `$description`, groups by nesting, aliases via `{group.token}`.
- Transform to platform output (CSS vars, Tailwind theme, iOS/Android) with **Style
  Dictionary 5.x** (+ `@tokens-studio/sd-transforms` if authoring in Tokens Studio).
- This is a Community Group Report, not a W3C Recommendation — stable enough to build on,
  and what Figma/Tokens Studio/Style Dictionary target.

## Three-tier token architecture

1. **Primitive / global** — the raw palette and scales. `color.blue.500 = oklch(...)`,
   `space.4 = 16px`. No meaning, just values. Components never reference these directly.
2. **Semantic / alias** — meaning-bearing, reference primitives. `color.background`,
   `color.text.muted`, `color.border.default`, `color.action.primary`. **This is the layer
   components consume.**
3. **Component** — optional, per-component overrides that reference semantic tokens.
   `button.primary.bg = color.action.primary`.

Rule: **components bind to semantic tokens, semantic tokens bind to primitives.** A
component that reaches a primitive (or a raw value) is a violation.

## What to tokenize

color (primitive + semantic) · typography (family, size scale, weight, line-height,
letter-spacing) · spacing scale · radius scale · border widths · shadow/elevation levels ·
motion (duration, easing) · z-index layers · breakpoints/container sizes.

## Theming & multi-brand (light/dark is the floor, not the ceiling)

- A **theme is a token set**, not a filter. Light/dark/high-contrast are separate semantic-token
  sets referencing the same primitives (or brand-specific primitives). Never invert.
- **Components bind to semantic tokens only** — this is what makes retheming and white-label /
  per-tenant branding possible with **zero component-code changes**. A component reaching a
  primitive breaks multi-brand.
- Runtime theme switching: swap the semantic layer (CSS variables under `[data-theme]` /
  `:root`), don't rebuild components. Verify every theme (incl. HC) passes contrast independently
  (`11`, `20`).

## Naming

- Semantic names describe **role**, not appearance: `text-muted` not `text-gray-400`,
  `action-primary` not `blue`.
- Consistent order: `category.role.variant.state` (`color.action.primary.hover`).
- Match an existing system's names if you adopt one (shadcn: `--background`/`--foreground`/
  `--primary`/`--muted`/`--accent`/`--destructive`/`--border`/`--ring`).

## Delivery checklist

- [ ] DTCG JSON source of truth (or a documented equivalent)
- [ ] Three tiers, components bind only to semantic
- [ ] Emitted as CSS variables (+ Tailwind theme if used)
- [ ] Dark mode = a token set, not inversion
- [ ] Lint enforces "no raw values" (`82`)
