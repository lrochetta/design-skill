# Preset — Premium dense / control plane (dark, keyboard-first)

Load only for power-user products: dashboards, admin, dev tools, trading/ops consoles. Overrides
dials toward `VARIANCE 2 / MOTION 2 / DENSITY 8`. This is the product-surface default taken to
its logical end. A11y (`20`–`23`) is fully in force.

## The look

Dense, calm, keyboard-driven. Dark-theme-first (neutral grays in OKLCH, not pure black), accent
color reserved for status and the primary action, text as the primary visual element. Maximum
information without clicks to reveal. Every pixel earns its place. (Reference: Linear, Vercel
dashboard, the paperclip control-plane guide.)

## Rules

1. **Dark-first, neutral OKLCH.** Off-black surfaces (`~oklch(0.15 0 0)`), rebuilt dark grayscale
   (not inverted, `11`), elevation by lighter surface not shadow (`14`). Light theme is a token
   set, not an afterthought.
2. **Accent for status/priority only** (`11`): success/warning/danger/info as semantic tokens;
   the brand accent marks the one primary action. Text is louder than color.
3. **Dense but scannable** (`13`, `31`, `32`): tight rhythm, whitespace separates groups not pads;
   tabular-nums for figures; compact rows with a comfortable option.
4. **Keyboard-first** (`22`, `36`): global shortcuts, command palette (⌘K), inline editing over
   modals, dropdowns over page navigations. Power users rarely touch the mouse.
5. **Contextual, not modal** (`37`): inline editing, popovers, drawers over full-screen dialogs.
6. **Minimal motion** (`40`): fast, functional, mostly state feedback; nothing decorative; calm
   live updates (`31`). `MOTION 2`.
7. **Component-driven, one system** (`70`): reuse composites (MetricCard, EntityRow, StatusBadge);
   don't hand-style each instance; enforce tokens (`82`).

## Avoid

Marketing sparseness (giant hero numbers, huge whitespace, decorative motion) — wrong surface.
Pure black. Color as the primary carrier of meaning. Modals for things that should be inline.
Density that tips into clutter: groups still need separation and clear hierarchy.
