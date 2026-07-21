# 41 — Motion on the web (implementation)

Implements `40-motion-system.md` with 2026 web APIs and libraries, under the a11y constraints
of `23-motion-a11y.md`.

## Choose the tool

| Need | Use |
|---|---|
| Simple hover/state transitions | CSS transitions (cheapest, best) |
| Enter/exit of React components, gestures, springs | Framer Motion (`motion`) / Motion One |
| Complex timeline / scroll choreography | GSAP (+ ScrollTrigger) |
| Page-to-page continuity (MPA or SPA) | View Transitions API |
| Scroll-linked effects, natively | CSS scroll-driven animations |

Default to **CSS first**; reach for a library only when CSS can't express it. Don't pull GSAP
for a fade.

## 2026 web APIs (prefer native)

1. **View Transitions API** — animate between DOM states / pages with `document.startViewTransition()`
   (SPA) or the cross-document MPA form. Gives shared-element continuity cheaply. Provide a
   reduced-motion path and a no-support fallback (it degrades to an instant swap).
2. **CSS scroll-driven animations** (`animation-timeline: scroll()/view()`) — scroll-linked
   effects on the compositor, no JS scroll listeners. Far cheaper than JS parallax. Gate
   decorative uses behind reduced-motion.
3. **`@starting-style` + `transition-behavior: allow-discrete`** — animate elements entering
   from `display:none` and animate the top-layer (popover/dialog) enter/exit in pure CSS.
4. **Popover API + Anchor positioning** (`71-css-2026.md`) handle overlay show/hide with
   native transitions — less JS, correct top-layer behavior.

## Performance budget (motion is a perf concern)

1. **Animate only `transform`/`opacity`.** Anything triggering layout/paint per frame drops
   frames. Promote with `will-change` sparingly, remove after.
2. **60fps or don't ship it.** Test on a mid-range device, not your machine. Jank reads as
   broken, not premium.
3. **Lazy-load animation libraries** and heavy scroll setups; don't block first paint for a
   hero animation.
4. **Kill infinite background animation off-screen** (IntersectionObserver / `animation-play-state`)
   to save battery/CPU.
5. **Scroll-driven and parallax setups gate on** `matchMedia('(prefers-reduced-motion: no-preference)')`
   so they never initialize for reduced-motion users (`23`).

## Library notes

- **Framer Motion:** `useReducedMotion()` to branch variants; `AnimatePresence` for exits;
  `layout` prop for shared layout animation (cheap FLIP). Great default for React product UI.
- **GSAP:** best for timelines/scroll storytelling (marketing). Wrap ScrollTrigger in a
  reduced-motion guard; clean up on unmount.
- **Motion One:** tiny, uses the Web Animations API; good when bundle size matters.

## Delivery checklist

- [ ] CSS-first; library only where needed
- [ ] Native View Transitions / scroll-driven where they fit, with fallbacks
- [ ] transform/opacity only; 60fps on mid device
- [ ] Libraries + scroll setups lazy-loaded and reduced-motion-gated
- [ ] Off-screen loops paused
