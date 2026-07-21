# 11 — Color (OKLCH, contrast, dark mode)

## Why agents fail here by default

They reach for raw hex (`bg-blue-500`), build palettes with even HSL steps that look
muddy, invert light→dark naively, and never check contrast. Fix all four mechanically.

## Rules (enforceable)

1. **Work in OKLCH, not hex/HSL.** OKLCH is perceptually uniform: equal lightness steps
   look equal. Define tokens as `oklch(L C H)`. Ship as CSS variables. (Tailwind v4 and
   shadcn already emit OKLCH.)
2. **Semantic tokens only in components.** Never a raw value in a component. Use
   `--background`, `--foreground`, `--primary`, `--muted-foreground`, `--border`, `--ring`,
   `--destructive`. Raw values are a lint failure (`82-quality-gates.md`).
3. **Contrast: prefer APCA, floor at WCAG 2.2.** WCAG 2 AA is the legal floor (4.5:1 body,
   3:1 large text ≥24px or ≥18.66px bold, 3:1 UI/graphics). But WCAG 2's ratio is known to
   mis-rank on dark UIs — use **APCA** (apcacontrast.com) for actual legibility judgments and
   keep WCAG 2 AA as the pass/fail gate. Check every text-on-surface pair.
4. **3–5 colors total.** One brand hue + neutrals + one or two functional accents
   (success/warning/danger). More than 5 reads as unresolved. (v0's restraint rule; sound.)
5. **Never pure black text on white.** Use a dark grayscale foreground (e.g. `oklch(0.2 0 0)`),
   not `#000`. Pure black on pure white vibrates and reads cheap. (Toss.)
6. **Rebuild the dark-mode grayscale, do not invert.** Dark mode is not `filter: invert`.
   Neutrals need their own scale (slightly desaturated, non-pure-black surfaces ~`oklch(0.15 0 0)`,
   not `#000`). Elevation in dark = lighter surface, not bigger shadow. (Toss.)
7. **Tint neutrals toward the brand hue.** Borders, shadows, muted text, and surfaces should
   carry a few points of the background's hue (chroma ~0.005–0.02), not be dead gray. This is
   what separates a designed palette from a Bootstrap one. (Vercel/impeccable, converging.)
8. **State colors are semantic, not decorative.** success=green, warning=amber, danger=red,
   info=blue — consistent across the whole app. Encode in tokens, reference by meaning.

## Palette construction (fast, deterministic)

1. Pick the brand hue H. Set brand `oklch(0.55–0.65 0.15–0.22 H)` for the accent.
2. Neutrals: fix H, chroma ~0.01, sweep L in ~8 steps `0.98 → 0.15` (light) and rebuild for dark.
3. Functional hues at matched L/C so badges sit at equal weight.
4. Verify every foreground/background pair against APCA + WCAG AA before shipping.

## Dark mode checklist

- [ ] Separate neutral scale, not inverted
- [ ] Surfaces are off-black (`~oklch(0.15 0 0)`), text is off-white (`~oklch(0.95 0 0)`)
- [ ] Elevation via lighter surfaces, not heavier shadows
- [ ] Brand hue re-checked for contrast on dark (often needs +L)
- [ ] Every semantic pair re-verified in dark
