# 23 — Motion accessibility

Motion can delight and it can make people physically ill (vestibular disorders). The line is
mechanical: respect the user's stated preference and cap the aggressive stuff.

## Rules (enforceable)

1. **Respect `prefers-reduced-motion: reduce`.** Wrap non-essential animation in the media
   query and provide a reduced (or no) alternative. This is not optional.
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, ::before, ::after {
       animation-duration: .01ms !important;
       animation-iteration-count: 1 !important;
       transition-duration: .01ms !important;
       scroll-behavior: auto !important;
     }
   }
   ```
   Then re-enable only genuinely essential motion (e.g. a loading spinner) deliberately.
2. **Essential vs decorative.** Essential motion conveys state/feedback (a spinner, a
   progress bar). Decorative motion (parallax, autoplay carousels, big scroll reveals) must
   fully stop under reduced-motion.
3. **No flashing > 3 times per second** (WCAG 2.3.1) — seizure risk. No exceptions.
4. **The worst offenders for vestibular triggers:** large parallax, spinning/zooming scroll
   effects, autoplaying background video, big directional slides across the viewport. Under
   reduced-motion, replace with a simple fade or nothing.
5. **Autoplay is pausable.** Carousels/video that move automatically need a visible
   pause/stop control (WCAG 2.2.2) and should not autoplay under reduced-motion.
6. **Keep interaction feedback fast.** ≤200ms for direct-manipulation feedback, ≤300ms for
   most UI transitions — long animations feel broken and increase exposure time for anyone
   motion-sensitive (`40-motion-system.md`).
7. **Prefer opacity/transform** (compositor-friendly) so even allowed motion is smooth and
   short, not janky.

## Framework note

- Framer Motion / Motion One expose reduced-motion hooks (`useReducedMotion`) — branch the
  variant, don't just shorten it.
- GSAP: gate ScrollTrigger/parallax setups behind a `matchMedia('(prefers-reduced-motion: no-preference)')`
  check so they never initialize for reduced-motion users.

## Delivery checklist

- [ ] Global reduced-motion media query in place
- [ ] Decorative motion fully stops under reduced-motion; essential motion still works
- [ ] Nothing flashes >3×/sec
- [ ] Autoplaying motion has a pause control and is off under reduced-motion
- [ ] Interaction feedback ≤200ms, transitions ≤300ms
