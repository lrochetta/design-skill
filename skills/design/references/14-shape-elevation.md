# 14 — Shape & elevation (radius, borders, shadows)

## Why agents fail here by default

Random radii, mismatched nested corners, heavy drop shadows everywhere, and outlines for
focus that clip on rounded corners.

## Rules (enforceable)

1. **Radius is a fixed scale**, derived from one base token (e.g. `--radius: 0.625rem`):
   sm (inputs, pills) · md (buttons, inputs) · lg (cards, dialogs) · xl (large containers) ·
   full (badges, avatars, dots). No `rounded-[7px]`.
2. **Nested radii are concentric: child ≤ parent.** An inner element's radius must be ≤ its
   container's, and ideally `inner = outer − padding`. Mismatched nested corners are a
   precise, common tell. (Vercel.)
3. **Shadows are minimal and few.** Define ~3 elevation levels (xs outline, sm card, md
   overlay). No `shadow-2xl` on cards. Depth comes from restraint.
4. **In dark mode, elevate with lighter surfaces, not bigger shadows.** Shadows barely read
   on dark; a raised surface is a lighter neutral. (See `11-color.md`.)
5. **Tint shadows toward the background hue**, don't use pure black `rgba(0,0,0,x)`. A shadow
   carrying a few points of the surface hue integrates; pure black floats. (impeccable/Vercel.)
6. **Focus rings use box-shadow, not `outline`.** `outline` does not follow `border-radius`
   and clips on rounded elements. Use a two-layer box-shadow ring
   (`0 0 0 2px var(--background), 0 0 0 4px var(--ring)`) so the ring hugs the corner and stays
   visible on any surface. (Rauno / Geist.)
7. **Borders are a token too** (`--border`), tinted toward bg hue, ~1px. Hairline borders +
   subtle shadow beat heavy borders.

## Elevation scale (reference)

| Level | Use | Light | Dark |
|---|---|---|---|
| 0 | flush | none | none |
| 1 | card | `shadow-xs`/`sm`, hairline border | +1 surface lightness |
| 2 | overlay/popover | `shadow-md` | +2 surface lightness + hairline |
| 3 | modal | `shadow-lg`, backdrop | brightest surface + backdrop |

## Delivery checklist

- [ ] Radius from a fixed scale
- [ ] Nested corners concentric (child ≤ parent)
- [ ] ≤3 elevation levels, no heavy shadows
- [ ] Dark elevation via surface lightness
- [ ] Focus = box-shadow ring, never outline
- [ ] Shadows/borders tinted toward bg hue
