# 12 — Typography

## Why agents fail here by default

They default to Inter for everything, use serif to look "premium" on non-editorial briefs,
set one weight and vary size only, use too-long lines, and never reserve space for italic
descenders. Each is mechanically avoidable.

## Rules (enforceable)

1. **Do not default to Inter.** Inter is the single most common AI tell. Choose a typeface
   that fits the aesthetic family from the brief. Inter is *allowed* when it genuinely fits
   (neutral product UI), but never as an unconsidered default. Alternatives by register:
   Geist / Söhne / Suisse (technical), Instrument / Fraunces (editorial), Satoshi / General
   Sans (modern product). Confirm the license before shipping a web font.
2. **Max 2 font families.** One display/heading + one text, or a single family used across
   weights. Three+ families reads as chaos. (v0; sound.)
3. **Vary weight and color before size.** Establish hierarchy with weight (500/600/700) and
   `--foreground` vs `--muted-foreground` first; jump size only when weight/color is
   insufficient. Prevents the "everything is huge" AI look. (Toss.)
4. **Serif is not the premium default.** Use serif only when the aesthetic is genuinely
   editorial or the brand demands it. Serif on a SaaS dashboard is a mismatch.
5. **Line length 45–75 characters** for body text (≈`max-w-prose` / `65ch`). Full-width body
   paragraphs are a readability failure.
6. **Line-height scales inversely with size.** Body ~1.5, headings ~1.1–1.25, display ~1.0–1.1.
   Tight display text needs padding reserve so descenders/italics are not clipped
   (`leading-[1.1]` + top padding on italic display).
7. **Type scale is a fixed set.** Define a scale (e.g. xs 12 / sm 14 / base 16 / lg 18 /
   xl 20 / 2xl 24 / 3xl 30 / 4xl 36 / …) and use only those steps. No ad-hoc `text-[17px]`.
8. **Body font-size ≥16px on mobile inputs** to prevent iOS auto-zoom on focus. (Vercel.)
9. **Use variable fonts** where available: one file, all weights, better perf. Subset to
   the character set you actually render.

## Pairing heuristic

- Contrast in *category* (a geometric sans display + a humanist text), not in *vibe*.
- If unsure, use one well-drawn family across weights — a single-family system rarely looks wrong.
- Never pair two fonts that are trying to do the same job.

## Delivery checklist

- [ ] ≤2 families, licensed for web
- [ ] Scale is a fixed set, no arbitrary px
- [ ] Body 45–75 char measure
- [ ] Heading line-heights tight, descender/italic clipping checked
- [ ] Hierarchy carried by weight+color first
- [ ] Mobile input ≥16px
