# 22 — Keyboard & focus management

## Why agents fail here by default

They remove focus outlines for looks, never test tab order, trap focus in overlays (or fail
to trap it in modals), and lose focus into the void after a route change or dialog close.

## Rules (enforceable)

1. **Tab order follows visual/reading order.** Don't reorder with positive `tabindex`. Use
   DOM order + CSS. Positive `tabindex` (>0) is almost always a bug.
2. **`tabindex="0"`** to add a custom widget to the tab sequence; **`tabindex="-1"`** to make
   an element programmatically focusable (e.g. to move focus to it) but not tab-reachable.
3. **Roving tabindex** for composite widgets (menus, tabs, toolbars, grids): exactly one
   stop enters the group, arrows move within. Never leave 10 menu items each tab-stoppable.
4. **Focus is always visible** (`:focus-visible`), via box-shadow ring, ≥3:1 contrast. Never
   `outline: none` without an equal-or-better replacement.
5. **Modal dialogs trap focus**: Tab cycles inside, Esc closes, focus returns to the element
   that opened it. Use `<dialog>` or a headless Dialog (Radix/Base UI) — do not hand-roll the
   trap. Background is `inert` / `aria-hidden` while open.
6. **Non-modal overlays (popover, menu, combobox)** do NOT trap focus but DO close on Esc and
   on outside interaction, returning focus sensibly.
7. **Route changes move focus.** In an SPA, on navigation move focus to the new page's `<h1>`
   or main landmark (`tabindex="-1"` + `.focus()`), or announce via a live region. Otherwise
   focus sits on a stale element and screen-reader users are lost.
8. **Skip link.** First focusable element is a "Skip to content" link that jumps to `<main>`.
9. **Don't steal focus** on load or scroll. Autofocus only the primary field of a
   single-purpose screen (login), never mid-page.
10. **Disabled vs read-only:** a truly disabled control is not focusable and has no tooltip
    (tooltips on disabled buttons are inaccessible — prefer enabled + explain on activation).

## The keyboard map (baseline)

| Key | Expectation |
|---|---|
| Tab / Shift+Tab | move between stops, visible focus |
| Enter | activate button/link, submit form |
| Space | activate button, toggle checkbox/switch |
| Esc | close overlay, cancel edit |
| Arrows | move within composite widget (menu, tabs, slider, grid) |
| Home / End | first / last in a set |

## Delivery checklist

- [ ] Full flow operable keyboard-only, focus always visible
- [ ] Logical tab order, no positive tabindex, roving where needed
- [ ] Modals trap + restore focus; overlays close on Esc
- [ ] Route change moves/announces focus
- [ ] Skip link present
- [ ] No focus stealing, no disabled-button tooltips
