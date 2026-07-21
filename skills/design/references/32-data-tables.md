# 32 — Data tables & grids

The most under-designed surface in AI output, and the highest-value to get right — real apps
live in tables. Dials: `DENSITY 7–9`, motion minimal.

## Why agents fail here by default

Divs instead of `<table>`, no keyboard support, wrapping cells that destroy scannability,
pagination that hides the total, and no empty/loading/error states.

## Rules (enforceable)

1. **Use semantic `<table>`** with `<thead>/<tbody>/<th scope>` unless you need virtualization
   at scale — then use a headless grid (TanStack Table) that manages ARIA `grid` roles. Never
   a pile of divs without roles.
2. **Column alignment by type:** text left, numbers right (with `tabular-nums`), status/badges
   centered or left. Right-aligned numbers are non-negotiable for scanning.
3. **Don't wrap by default.** Truncate with ellipsis + tooltip/expand for long text; keep rows
   one line so the eye scans columns. Let the user opt into wrapping if needed.
4. **Sticky header** (and sticky first column for wide tables). Header stays visible on scroll.
5. **Sortable columns show state:** an arrow indicating asc/desc on the active column,
   `aria-sort` set. Clicking a header sorts; keyboard-operable.
6. **Row density is a control.** Offer comfortable/compact if rows are read in bulk. Default
   compact for power users, comfortable for occasional.
7. **Pagination shows the total and range** ("1–25 of 1,240"), or use infinite scroll with a
   clear end state. Never hide how much data exists. Prefer server-side pagination past a few
   hundred rows.
8. **Filtering & search are visible and reversible.** Show active filters as removable chips;
   "clear all". "No rows match" is an explicit empty state (`35`), distinct from "no data yet".
9. **Bulk actions** appear on selection: a checkbox column, a select-all (page vs all), and an
   action bar that shows the count. Destructive bulk actions confirm (`37`).
10. **Row actions** are discoverable: inline for the 1–2 primary, an overflow menu for the
    rest. Don't hide the primary action behind a kebab.
11. **Keyboard & a11y:** cells reachable, sort operable, selection togglable by keyboard, focus
    visible. For editable grids, follow the APG `grid` pattern (`21`).
12. **Loading = skeleton rows** matching the column layout, not a centered spinner that
    collapses the table.

## States this surface must handle (all of `35-states.md`)

first-load skeleton · empty (no data yet, with a CTA to create) · no-results (filter too
narrow, with "clear filters") · error (retry) · partial/paginated · row-level pending/error.

## Delivery checklist

- [ ] Semantic table or ARIA grid; keyboard operable
- [ ] Numbers right-aligned, tabular-nums; no default wrapping
- [ ] Sticky header, sort state + `aria-sort`
- [ ] Pagination shows total+range (or clear infinite-scroll end)
- [ ] Filters as removable chips; distinct empty vs no-results
- [ ] Bulk + row actions, destructive confirms
- [ ] Skeleton loading, error with retry
