# 40 — Motion system (tokens, timing, choreography)

Motion is a system with tokens, not per-element magic numbers. See `23-motion-a11y.md` for
the accessibility floor (which is mandatory) and `41-motion-web.md` for web implementation.

## Why agents fail here by default

Random durations, ease-linear everything, animating everything at once, and motion with no
purpose. Motion that doesn't communicate is noise.

## Rules (enforceable)

1. **Every animation justifies itself in one sentence**: it conveys *hierarchy*, *feedback*,
   *state transition*, or *spatial continuity*. If you can't state which, remove it.
2. **Duration tokens, not literals.** Define a scale and use it:
   - instant ~100ms (micro feedback, hover)
   - fast ~150–200ms (buttons, toggles, small moves) — **interaction feedback ≤200ms**
   - base ~250–300ms (most UI transitions, enters/exits)
   - slow ~400–500ms (large surfaces, page-level)
   Anything >~500ms for UI feels broken. (Rauno: ≤200ms for interactions; Emil: sub-300ms.)
3. **Easing tokens by intent:**
   - `ease-out` for elements *entering* (decelerate into place) — the most common.
   - `ease-in` for elements *leaving* (accelerate away).
   - `ease-in-out` for moves between two on-screen states.
   - Never `linear` except for continuous loops (spinners, progress).
4. **Prefer spring physics for interactive/gesture-driven motion** (drag, reorder, sheets):
   springs feel responsive because they carry velocity. Use tuned springs (Framer Motion /
   Motion One), not arbitrary keyframes, for anything the user manipulates.
5. **Choreograph, don't detonate.** Stagger related elements (~20–50ms offsets) so a list
   reveals in sequence, not all at once. But keep total sequence short.
6. **Animate cheap properties:** `transform` and `opacity` (compositor-friendly). Avoid
   animating layout properties (width/height/top/left) — they jank.
7. **Motion reinforces spatial model:** things that are related move together; a panel slides
   from the edge it lives on; a modal scales from where it was triggered when feasible.
8. **Respect reduced-motion** at the system level (`23`): the motion tokens have a
   reduced-motion variant (near-zero duration / fade only).

## Motion tokens (reference shape)

```
--duration-instant: 100ms;  --duration-fast: 180ms;  --duration-base: 280ms;  --duration-slow: 450ms;
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in:  cubic-bezier(0.7, 0, 0.84, 0);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
```

## Delivery checklist

- [ ] Each animation has a stated purpose
- [ ] Durations/easings from tokens, not literals
- [ ] Enter=ease-out, leave=ease-in; no linear except loops
- [ ] Springs for interactive/gesture motion
- [ ] Staggered choreography, short totals
- [ ] transform/opacity only; reduced-motion variant exists
