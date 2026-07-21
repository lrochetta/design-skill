# 38 — Mobile, responsive & native

## Why agents fail here by default

Desktop-first thinking shrunk down, tap targets too small, hover-only affordances that don't
exist on touch, ignoring safe areas, and web patterns forced onto native.

## Responsive web rules (enforceable)

1. **Mobile-first.** Design the small screen first, enhance up. Base styles = mobile; media/
   container queries add complexity for larger viewports (`13`).
2. **Touch targets ≥ 44×44 CSS px**, spaced ≥8px apart. Expand hit area if the visual is
   smaller (`20`). Thumbs are imprecise.
3. **No hover-only affordances.** Anything revealed on hover must have a tap/focus equivalent.
   Tooltips, hover menus, hover actions all need a touch path.
4. **Inputs ≥16px font-size** to prevent iOS auto-zoom (`12`); correct `inputmode`/
   `autocomplete` for the mobile keyboard (`33`).
5. **Reachability.** Primary actions within thumb reach (bottom of the screen on tall phones);
   bottom tab bar / bottom sheet over top-only nav for core actions.
6. **Respect safe areas** (`env(safe-area-inset-*)`) for notches/home indicators; don't put
   controls under system UI.
7. **Reflow at 320px** with no horizontal scroll (`20`); test the smallest realistic width.
8. **Performance is a mobile design constraint:** heavy images/motion hurt more here; lazy-load,
   size images, respect data/reduced-motion.

## Native (iOS / Android) rules

1. **Follow the platform.** iOS → Apple Human Interface Guidelines; Android → Material Design 3.
   Don't ship an iOS app that looks like Android or vice versa. Native users expect native
   navigation, gestures, and controls.
2. **Use platform components** (native date pickers, action sheets, tab bars, system fonts:
   SF Pro / Roboto) rather than reimplementing them.
3. **Gestures & transitions** match the platform (iOS edge-swipe back, Material shared-axis).
4. **Native a11y:** VoiceOver / TalkBack labels, Dynamic Type / font scaling, sufficient
   contrast, respect system reduced-motion and dark mode.
5. **Cross-platform frameworks** (React Native, Flutter, Expo) still adapt per platform — don't
   flatten both into one generic look. `borderCurve: 'continuous'` with radius on RN for iOS.

## Responsive vs adaptive

- Responsive (fluid, one layout reflows) is the default for web.
- Adaptive (distinct layouts per breakpoint) when mobile and desktop tasks genuinely differ —
  don't just hide columns, rethink the primary action for the context.

## Delivery checklist

- [ ] Mobile-first; reflow at 320px, no h-scroll
- [ ] Touch targets ≥44px, spaced; no hover-only affordances
- [ ] Inputs ≥16px, correct mobile keyboard
- [ ] Thumb-reachable primary actions; safe areas respected
- [ ] Native: correct platform (HIG/Material), platform components, native a11y
