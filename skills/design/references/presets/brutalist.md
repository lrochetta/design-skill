# Preset — Brutalist / Swiss (beta)

Load only if the brief wants raw, high-contrast, mechanical, typographic. Overrides dials
toward `VARIANCE 8 / MOTION 4 / DENSITY 6`. **A11y is NOT negotiable here** — brutalism is often
used as an excuse to fail contrast and focus; it must still pass `20`–`23`.

## The look

Raw structure made visible. High-contrast, mono or near-mono, big confident type, visible grid,
hard edges, minimal-to-no radius, functional not decorative. Swiss/International-style rigor:
type and grid are the design.

## Rules

1. **High contrast, restrained palette.** Often black/white + one loud accent. Contrast is the
   aesthetic — which conveniently helps a11y *if* you still verify ratios (`11`).
2. **Type is the hero.** Large, tight, confident. Grotesque/mono families. Strong scale jumps
   are allowed here (the one place size-driven hierarchy fits).
3. **Visible grid, hard edges.** Little/no border radius, exposed structure, asymmetric but grid-
   locked layouts (`13`). Rules and dividers as design elements.
4. **Function over decoration.** No gradients, no soft shadows, no glass. Ornament is the borders
   and the type themselves.
5. **Motion is mechanical** (`40`): snappy, sometimes stark; still tokenized and reduced-motion
   safe (`23`).

## Avoid the failure mode

Brutalism ≠ inaccessible. Keep: focus rings (`22`), contrast ratios (`11`/`20`), target sizes
(`20`), readable measure (`12`). "Raw" is a visual choice, not a licence to ship broken UI. If
the high-contrast look pushes text below 4.5:1 (e.g. mid-gray on white), it fails — fix it.
