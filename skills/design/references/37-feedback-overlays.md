# 37 — Feedback & overlays (toasts, modals, dialogs, popovers)

## Why agents fail here by default

Modals for everything (including things that should be inline), toasts that vanish before
they're read, no focus management, and confirmations that don't say what will happen.

## Choose the right surface

| Need | Use | Not |
|---|---|---|
| Transient status ("Saved") | Toast (auto-dismiss) | Modal |
| Confirm a destructive action | Modal dialog (focus-trapped) | Toast |
| Contextual options/details | Popover / dropdown (non-modal) | Modal |
| Secondary content, side task | Drawer / sheet | Full page nav |
| Blocking critical decision | Modal (`alertdialog`) | Toast/inline |
| Inline edit | In-place editor | Modal |

Default to the **least interruptive** surface that works. Modals are expensive — reserve them.

## Toasts / notifications

1. **Auto-dismiss with enough time to read** (~4–6s), pause on hover/focus, and allow manual
   dismiss. Critical messages don't auto-dismiss.
2. **Announce via `aria-live`** (`polite` for status, `assertive` for errors) so screen
   readers get them (`21`).
3. **Actionable when relevant** ("Undo", "View") — an undo toast beats a confirm dialog for
   reversible actions.
4. **Don't stack infinitely.** Cap visible toasts, collapse/queue the rest.
5. **Position consistently** (usually top-right or bottom); don't cover primary actions.

## Modals / dialogs

1. **Focus trap + restore** (`22`): focus moves in on open, Tab cycles inside, Esc closes,
   focus returns to the trigger. Use `<dialog>` or a headless Dialog — never hand-roll.
2. **`role="dialog"` + `aria-modal` + labelled** by its title; `alertdialog` for critical
   confirms.
3. **Background inert** and a dismissible backdrop (unless a critical decision).
4. **One clear primary action**, destructive styled as destructive, cancel always present.
5. **Not for long content or multi-step flows** — that's a page or a drawer.

## Confirmations (especially destructive)

1. **Name the specific consequence:** "Delete 3 projects? This can't be undone." Not "Are you
   sure?".
2. **Match button label to the action:** "Delete" / "Archive", not "OK". Destructive button
   styled destructive; safe default focused.
3. **Prefer undo over confirm** for reversible actions — less friction, fewer regretted clicks.
4. **Type-to-confirm** for high-stakes irreversible actions (type the name to delete).

## Delivery checklist

- [ ] Least-interruptive surface chosen (toast/inline over modal)
- [ ] Toasts: readable duration, pause-on-hover, `aria-live`, dismissible, capped
- [ ] Modals: focus trap+restore, labelled, inert background, one primary action
- [ ] Confirmations name the consequence; destructive styled + undo preferred
- [ ] Keyboard + screen-reader verified
