# 80 — Pre-flight checklist (run before delivering any UI)

Non-negotiable. A piece of UI is not done until it passes this. It is mechanical — each item is
checkable, not a matter of taste. A failing pre-flight means the work is unfinished, regardless
of how it looks. Fail closed: if you can't verify an item, treat it as failing.

## A. Foundations

- [ ] Colors are OKLCH semantic tokens, no raw hex/rgb in components (`11`, `10`)
- [ ] Contrast: all text ≥4.5:1 (large ≥3:1), UI/graphics ≥3:1; checked with APCA/WCAG (`11`, `20`)
- [ ] ≤2 font families, not Inter-by-default; type from a fixed scale; body measure 45–75ch (`12`)
- [ ] Spacing on the 4px scale, no arbitrary px; `gap` not `space-*`; consistent rhythm (`13`)
- [ ] Radius from scale, nested corners concentric; ≤3 elevation levels, no heavy shadows (`14`)

## B. Accessibility (blockers — any fail blocks delivery)

- [ ] Semantic HTML; non-native widgets use headless libs implementing APG (`21`)
- [ ] Full keyboard operability, logical tab order, no traps; focus visible (box-shadow ring) (`22`)
- [ ] Every input labelled; icon buttons named; errors tied via `aria-describedby` (`20`, `33`)
- [ ] Target size ≥24px (mobile ≥44px); info never by color alone (`20`)
- [ ] Reflows at 320px, text to 200%, no h-scroll (`20`)
- [ ] `prefers-reduced-motion` respected; nothing flashes >3×/s (`23`)
- [ ] One `<h1>`, headings nest, landmarks present, `<html lang>` set, images have alt (`20`)
- [ ] Focus not obscured by sticky UI; route changes move focus (`22`)

## C. States (the most-forgotten section)

- [ ] Empty (first-run) designed with a CTA (`35`)
- [ ] No-results (filter) distinct from empty (`35`)
- [ ] Loading = skeleton matching layout, not a collapsing spinner (`35`)
- [ ] Error states have a plain message + retry; input preserved (`35`, `33`)
- [ ] Success/confirmation shown; no layout shift between states (`35`)

## C2. Assets (if the UI uses icons/images)

- [ ] Single icon set, SVG (not icon font); decorative `aria-hidden`, icon-buttons `aria-label` (`15`)
- [ ] Images purposeful (no filler/blob art), sized (no CLS), correct `alt`, art-directed (`16`, `81`)

## D. Content

- [ ] Buttons name actions ("Create account", not "Submit"); labels sentence case (`60`)
- [ ] Errors: cause + fix, no blame (`60`)
- [ ] Plain language, consistent terms, link text describes destination (`60`)
- [ ] Strings externalized; layout survives ~40% expansion; logical props for RTL (`61`)

## E. Motion

- [ ] Every animation has a stated purpose; durations/easings tokenized (`40`)
- [ ] transform/opacity only; 60fps on a mid device; reduced-motion variant exists (`40`, `23`)

## F. Anti-defaults (the AI-slop scan)

- [ ] Run `81-anti-defaults.md` — no tells present (centered-hero-at-high-variance, 3 equal
      cards, Inter default, gradient-everywhere, div-art, reused house palette, etc.)

## F2. Ethics & consent (if the UI has choices, pricing, or tracking)

- [ ] No dark pattern (opt-out as easy as opt-in; no confirmshaming; cancel ≤ signup depth) (`83`)
- [ ] Consent UI: "Reject all" equals "Accept all"; no pre-consent tracking; no pre-ticked boxes (`83`)
- [ ] Commerce: total incl. fees before payment; guest checkout; renewal terms explicit (`3B`)

## G. Implementation reality

- [ ] Real design-system package installed where named; not hand-recreated (`70`)
- [ ] One component system, composed not re-styled per-primitive (`70`)
- [ ] Native platform features (dialog/popover/anchor/view-transitions) with fallbacks (`71`)
- [ ] Font-CLS handled; images sized; CWV within budget (`71`, `82`)
- [ ] Design→code parity: no untokenized values that have tokens; all interaction states present (`73`)

## H. Responsive

- [ ] Mobile-first; touch targets ≥44px; no hover-only affordances; inputs ≥16px (`38`)
- [ ] Safe areas respected; thumb-reachable primary actions (`38`)

## Sign-off

Only when A–H pass. If gating in CI, wire `82-quality-gates.md` so B/E/G are enforced
automatically, not just self-attested.
