# 15 — Iconography

Almost every UI ships icons, and consistency + a11y are routinely botched. This is a foundation,
not decoration.

## Why agents fail here by default

Mixed icon sets, inconsistent stroke weights and sizes, icon fonts that break screen readers,
icon-only buttons with no accessible name, and decorative icons announced to AT.

## Rules (enforceable)

1. **One icon set, one grid, one stroke.** Pick a single family (Lucide, Phosphor, Radix Icons,
   Heroicons…) and stay in it. Consistent optical grid (e.g. 24px) and one stroke width. Mixing
   sets is an immediate tell.
2. **Deliver as inline SVG or an SVG sprite — not an icon font** for meaningful icons. Icon fonts
   fail for screen readers, break on font-load failure, and misalign. SVG is accessible and
   crisp.
3. **Decorative icons are hidden from AT:** `aria-hidden="true"` (and no title). An icon that
   merely accompanies visible text label is decorative.
4. **Icon-only controls have an accessible name:** `aria-label` (or visually-hidden text). A bare
   icon button is invisible to a screen reader (`20`, `21`).
5. **Size from the scale**, aligned to text: nav icons ~16–20px, inline ~14–16px, touch targets
   still ≥24/44px hit area even if the glyph is smaller (`20`, `38`).
6. **Color via `currentColor`** so icons inherit text color and theme (light/dark) automatically;
   don't hardcode icon fills.
7. **Optical sizing / alignment:** icons sit on the text baseline/centerline; nudge with the
   layout, don't eyeball per-instance. Filled vs outline used consistently (e.g. outline default,
   filled = active state), not randomly.
8. **Meaning is not universal.** A glyph alone can be ambiguous; pair with a label or tooltip for
   anything non-obvious. Never rely on an icon alone to convey a critical action.

## Delivery checklist

- [ ] Single set, one grid + stroke width
- [ ] SVG (inline/sprite), not icon font, for meaningful icons
- [ ] Decorative = `aria-hidden`; icon-only button = `aria-label`
- [ ] Sizes from scale; hit area ≥24/44px
- [ ] `currentColor` for theme inheritance
- [ ] Non-obvious icons paired with a label
