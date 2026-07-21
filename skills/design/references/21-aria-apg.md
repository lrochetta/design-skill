# 21 — ARIA & the APG patterns

## The first rule of ARIA

**No ARIA is better than bad ARIA.** A native element beats a re-implemented one every
time. Use ARIA only to build a widget that has no native equivalent, and when you do, follow
the **WAI-ARIA Authoring Practices Guide (APG)** pattern exactly — role, states, and the
full keyboard interaction. Do not invent widget behavior.

## Build on a headless library, don't hand-roll

For any non-trivial widget, use a headless primitive that already implements the APG pattern
and screen-reader testing (`70-component-libs.md`): **Radix, Base UI, or React Aria**. These
give you correct roles, focus management, and keyboard handling. Hand-rolling a combobox or a
menu from ARIA attributes is how you ship broken a11y.

## APG patterns you will actually need

| Pattern | Native? | Key interactions the pattern requires |
|---|---|---|
| Disclosure (show/hide) | `<details>`/`<summary>` or button+`aria-expanded` | Enter/Space toggles |
| Dialog (modal) | `<dialog>` | focus trap, Esc closes, focus returns to trigger, `aria-modal` |
| Menu / Menu button | none | arrows move, Esc closes, Home/End, typeahead, `aria-expanded` |
| Tabs | none | arrows move between tabs, `aria-selected`, roving tabindex |
| Combobox / Autocomplete | partial | arrows into list, Esc, `aria-activedescendant`, `aria-expanded` |
| Listbox / Select | `<select>` when possible | arrows, typeahead, `aria-selected` |
| Slider | `<input type=range>` when possible | arrows, Home/End, `aria-valuenow/min/max` |
| Tooltip | none | shows on hover AND focus, Esc dismisses, `aria-describedby` |
| Accordion | disclosure ×N | as disclosure + heading structure |
| Switch | `<input type=checkbox role=switch>` | Space toggles, `aria-checked` |

## Rules (enforceable)

1. **Roles match structure.** `role` describes what the element *is*; don't add a role a
   native element already has (`<button role="button">` is redundant and risky).
2. **State attributes are live.** `aria-expanded`, `aria-selected`, `aria-checked`,
   `aria-disabled`, `aria-current` must update as state changes — a stale ARIA state is a lie
   to the screen reader.
3. **Name every control** via visible label, `aria-label`, or `aria-labelledby`. Icon-only
   buttons MUST have an accessible name.
4. **`aria-live` for async updates** the user didn't trigger focus toward: `polite` for
   status, `assertive` only for errors. Toasts, form-submit results, live search counts.
5. **`aria-hidden="true"`** on decorative icons and on content visually hidden but not meant
   for AT. Never `aria-hidden` a focusable element.
6. **Manage focus on route/overlay change** (`22-keyboard-focus.md`): open dialog → focus in;
   close → focus back to trigger.

## Delivery checklist

- [ ] Native element used wherever one exists
- [ ] Non-native widgets use a headless lib implementing the APG pattern
- [ ] Every interactive element has a role + accessible name + live state
- [ ] Keyboard interactions match the APG spec for the pattern
- [ ] `aria-live` regions for async, non-focus updates
- [ ] Verified with a screen reader, not just axe
