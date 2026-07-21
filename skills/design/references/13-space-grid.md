# 13 — Spacing, grid, breakpoints

## Why agents fail here by default

Arbitrary pixel values, inconsistent gaps, whitespace used as padding instead of as
separation, `space-x/space-y` utilities that break with flex-wrap, and no container-query
thinking so components only work at page width.

## Rules (enforceable)

1. **One spacing scale, powers/multiples of 4.** `0 4 8 12 16 24 32 40 48 64 80 96`. Use only
   these. No `mt-[13px]`. Tailwind's default 4px scale is fine — stay on it.
2. **Three-step rhythm.** ~8px inside a group, ~16px between groups, ~32–40px between
   sections. Consistent rhythm is what makes a layout feel designed. (Geist.)
3. **Whitespace separates, it does not pad.** Space communicates grouping (proximity =
   relatedness). Do not sprinkle uniform padding to "breathe"; use space to build hierarchy.
4. **Use `gap`, not `space-x-*`/`space-y-*`.** `flex gap-*` / `grid gap-*` survives wrapping
   and reordering; `space-*` utilities break. (shadcn convention.)
5. **Grid governs even at high VARIANCE.** Asymmetric/off-grid accents still align to an
   underlying grid. "Bold layout" ≠ "no grid".
6. **Container queries over page breakpoints for components.** A card should respond to *its
   container*, not the viewport. Use `@container` for reusable components; reserve viewport
   breakpoints for page-level layout. (CSS 2026 — see `71-css-2026.md`.)
7. **Standard viewport breakpoints:** 320 / 768 / 1024 / 1440 as the baseline set; add only
   with reason. (Osmani/Chrome.) Design mobile-first, enhance up.
8. **Max content width.** Long-form content caps around 65ch; app shells cap the readable
   zone even on ultrawide (don't let a form stretch to 2560px).

## Layout discipline (marketing surfaces)

- Hero top padding capped (~`pt-24`), not a full viewport of emptiness above the fold.
- Nav on one line at desktop, ≤ ~64–80px tall.
- One eyebrow/micro-label per ~3 sections, not on every block (mechanical audit rule).
- Sections have consistent vertical rhythm; don't randomize section padding.

## Delivery checklist

- [ ] All spacing on the 4px scale, no arbitrary px
- [ ] `gap` not `space-*`
- [ ] Three-step rhythm applied
- [ ] Components use container queries where reusable
- [ ] Mobile-first, standard breakpoints
- [ ] Content max-width enforced
