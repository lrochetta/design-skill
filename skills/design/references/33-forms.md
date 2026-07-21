# 33 — Forms, validation, multi-step

Forms are where users give you things and where they rage-quit. Every rule here is about
reducing effort and making errors survivable.

## Why agents fail here by default

Placeholder-as-label, validating on every keystroke, generic "invalid input" errors, no
inline error next to the field, resetting the form on error, and multi-step flows with no
progress or back.

## Rules (enforceable)

1. **Every field has a visible, persistent label** above or beside the input. Placeholder is a
   hint, never the label (it vanishes on input and fails a11y) (`20`).
2. **One column.** Multi-column forms break reading order and tab order. Single column, related
   fields grouped, logical top-to-bottom flow. (Exceptions: short related pairs like city/zip.)
3. **Validate at the right time.** Validate a field on **blur** (or on submit), not on every
   keystroke. Once a field has errored, *then* re-validate on input so the user sees it clear.
   Never block typing.
4. **Errors are specific, adjacent, and constructive.** Show the message next to the field,
   tied via `aria-describedby`, in text + icon (not color alone), saying how to fix it
   ("Password needs 8+ characters", not "Invalid"). Summarize errors at top on submit and move
   focus to the first error (`22`).
5. **Never clear valid input on error.** Preserve everything the user typed. Redundant entry is
   a WCAG 2.2 failure (3.3.7) — don't ask for the same info twice.
6. **Right input for the data:** correct `type` (email/tel/url/number), `inputmode`,
   `autocomplete` tokens (huge for mobile + a11y), native date/select where suitable. Mobile
   input font-size ≥16px to avoid iOS zoom (`12`).
7. **Mark required or optional consistently** (whichever is rarer) and say which convention up
   front. Don't rely on `*` alone without explanation.
8. **Primary action is unambiguous.** One primary submit button, clearly labeled with the
   action ("Create account", not "Submit"). Disable-on-submit + show progress; prevent double
   submit. Keep a visible secondary (cancel/back) but visually subordinate.
9. **Multi-step:** show a stepper with total steps and current position, allow **back** without
   losing data, validate per step, save progress if long. Show a review step before final
   submit for high-stakes flows.
10. **Success is explicit.** After submit, confirm what happened and what's next — not a silent
    reset. Errors from the server surface inline or as a clear banner (`37`), never a raw stack.

## Forms at scale (dynamic / conditional / wizard)

Enterprise forms diverge sharply from single-form anatomy:
- **Conditional/dependent fields:** revealed fields move focus and are announced (`aria-live` /
  focus management, `22`); don't just pop them in silently. Hidden fields aren't validated/submitted.
- **Array / repeatable groups:** clear add/remove, keyboard-operable, each row labelled; don't lose
  order or data on remove.
- **Multi-step wizards:** persist state across steps and browser back; visible progress; validate
  per step; a review step before final submit (see main rules above).
- **Autosave / recovery** for long forms: save drafts, recover after a crash/navigation; tell the
  user it's saved. Never make someone re-enter a long form (WCAG 3.3.7 redundant entry).
- **Cross-field validation** (password==confirm, end>start) messaged at the right field, on blur.

## Field-level states

default · focus (visible ring) · filled · error (message + icon) · disabled · read-only ·
loading/validating (async checks like username availability) · success (subtle).

## Delivery checklist

- [ ] Visible persistent labels; correct type/inputmode/autocomplete
- [ ] Validate on blur/submit; errors specific, adjacent, `aria-describedby`, text+icon
- [ ] No clearing of valid input; no redundant re-entry
- [ ] One column; one clear primary action; double-submit guarded
- [ ] Multi-step: stepper, back-without-loss, per-step validation, review
- [ ] Explicit success + server errors surfaced cleanly
- [ ] Keyboard + screen-reader pass (`20`/`22`)
