# 35 — Empty, loading, error & the other states

The single most-forgotten thing in AI-built UI. A screen is not done until every state is
designed. Load this for almost every surface.

## The eight states every data-driven view has

1. **Empty (first run)** — no data *yet*. Not an error. Explain what goes here + one clear CTA
   to create the first item. This is prime onboarding real estate (`34`). Never a blank void.
2. **Empty (no results)** — a filter/search returned nothing. Distinct from first-run. Say why
   ("No results for 'xyz'") and offer an out ("Clear filters"). Don't imply the data is gone.
3. **Loading (first load)** — **skeleton** matching the final layout, not a centered spinner
   that collapses the page. Skeletons preserve layout → less CLS, less perceived wait.
4. **Loading (refresh/partial)** — subtle inline indicator, keep old data visible, don't blank
   the screen. Optimistic UI where safe.
5. **Error** — something failed. Say what, in plain language, and give a **retry**. Never a raw
   stack trace or "Something went wrong" with no action. Distinguish network vs permission vs
   validation vs server (`60` for copy).
6. **Partial / paginated** — "showing 25 of 1,240", clear load-more/end state.
7. **Offline** — detect and show a non-blocking banner; queue actions where possible; don't
   silently fail writes.
8. **Success / confirmation** — the action worked. Confirm it (toast for minor, inline for
   contextual), then update the view (`37`).

## Rules (enforceable)

1. **Design all applicable states before shipping the happy path.** If you built a table, you
   built five states (loading/empty/no-results/error/loaded), not one.
2. **Skeletons over spinners** for content areas; spinners only for small in-place waits
   (buttons, inline). Match skeleton shape to content.
3. **Errors are recoverable.** Every error state has a next action (retry, go back, contact).
   Preserve user input across errors (`33`).
4. **Empty ≠ error ≠ no-results.** Three different messages, three different CTAs. Conflating
   them is a top usability failure.
5. **Don't layout-shift between states.** Reserve space; skeleton and loaded share dimensions;
   error/empty fill the same container.
6. **Loading has a floor and a ceiling.** Avoid the flash of a skeleton for <~200ms fetches
   (delay showing it); show progress or a message if >~2–3s.

## Per-component checklist (apply to tables, lists, dashboards, detail views)

- [ ] First-run empty (with CTA)
- [ ] No-results empty (with clear-filters)
- [ ] Skeleton loading (layout-matched)
- [ ] Refresh/partial loading (data stays)
- [ ] Error with retry + preserved input
- [ ] Offline handling
- [ ] Success confirmation
- [ ] No layout shift between any of them
