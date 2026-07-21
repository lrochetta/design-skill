# 31 — Dashboards & data viz

The surface AI under-trains on. Dashboards are dense, calm, and scannable — the opposite of
marketing. Dials: `VARIANCE 2–3 / MOTION 2–3 / DENSITY 7–8`. **For chart specifics, also load
the `dataviz` skill** — this module covers the dashboard *frame*, not the chart internals.

## Why agents fail here by default

They apply a sparse marketing aesthetic (huge whitespace, giant numbers, decorative motion),
bury the key metric, use pie charts for everything, and pick colors that don't survive
color-blindness. Density and clarity win here, not polish.

## Rules (enforceable)

1. **Answer the primary question first.** A dashboard exists to answer one or two questions
   fast (is anything wrong? how are we tracking?). Put that answer top-left, largest.
2. **F/Z reading order.** Most important top-left; supporting metrics flow right and down.
   Don't scatter KPIs randomly.
3. **Consistent metric card.** One `MetricCard` component: label (muted, small) · value
   (large, bold, tabular-nums) · delta (colored + arrow + period) · optional sparkline. Reuse
   it everywhere; don't hand-style each stat.
4. **Tabular figures for numbers.** `font-variant-numeric: tabular-nums` so digits align in
   columns and don't jitter on update.
5. **Chart type follows the question**, not aesthetics: trend → line; comparison → bar;
   composition → stacked bar (rarely pie, never >5 slices); distribution → histogram;
   correlation → scatter. (See `dataviz` skill for the full form heuristic and palette.)
6. **Categorical colors must be color-blind safe** and distinguishable at small size. Encode
   with shape/label too, never color alone (`20`). Use the `dataviz` palette, not raw hues.
7. **Density without clutter.** Whitespace separates groups; gridlines are faint; axes are
   quiet; the data is the loudest thing on screen. Remove chart junk (heavy borders, 3D,
   drop shadows on bars).
8. **Live updates are calm.** No flashing on refresh; animate value changes subtly (≤200ms)
   or not at all under reduced-motion. A dashboard that flickers is unusable.
9. **Every widget has empty / loading / error states** (`35-states.md`). "No data yet",
   skeletons, and a real error message — dashboards hit these constantly.
10. **Time range & filters are global and obvious.** One control affects the whole board;
    show the active range; make "no results for this filter" explicit.

## Layout frame

Sidebar/nav · top bar (title + global time range + filters) · KPI row (3–5 MetricCards) ·
primary chart(s) · secondary breakdowns / tables (`32`). Cap the readable width even on
ultrawide.

## Delivery checklist

- [ ] Primary question answered top-left, largest
- [ ] Reused MetricCard, tabular-nums
- [ ] Chart type matches the question; ≤5 categorical colors, CB-safe, not color-only
- [ ] Faint gridlines, no chart junk
- [ ] Empty/loading/error per widget
- [ ] Global time range + filters, calm live updates
- [ ] `dataviz` skill consulted for chart internals
