# 16 — Imagery & illustration direction

Images carry as much of the design as type and color, and are the most common place AI output
looks cheap (filler stock, generated blobs, inconsistent treatment).

## Why agents fail here by default

Random stock/atmospheric filler, inconsistent art direction across a page, no responsive image
handling, layout shift from unsized images, and decorative-blob-SVG "art" as a substitute.

## Rules (enforceable)

1. **Every image earns its place.** Real photography, real product shots (real or generated), or
   deliberate illustration. No atmospheric filler that says nothing; no decorative gradient blobs
   as background art (`81`).
2. **Consistent art direction.** One treatment across a surface: same lighting/mood for photos,
   same illustration style, same duotone/overlay if used. Mixed styles read as unresolved.
3. **Responsive, sized, lazy.** `srcset`/`sizes` (or `next/image`) for resolution; modern formats
   (AVIF/WebP with fallback); `loading="lazy"` below the fold; **explicit `width`/`height` or
   `aspect-ratio`** to reserve space and avoid CLS (`71`).
4. **Art-directed crops** with `<picture>` when the composition must change by breakpoint (a wide
   hero crop is wrong on mobile). Define focal points; don't just squash.
5. **Aspect-ratio tokens.** Use a small set of ratios (16:9, 4:3, 1:1, 3:2) consistently, not
   arbitrary dimensions per image.
6. **Accessibility:** meaningful images have descriptive `alt`; decorative images have `alt=""`
   (and are not announced). Text in images is avoided (it doesn't scale, translate, or read to AT)
   — use real text over an image instead (`20`, `39`).
7. **Performance is a design constraint.** Hero images are the usual LCP element — size and format
   them so they don't blow the budget (`71`, `82`). Don't ship a 4MB hero.
8. **Generated imagery:** when using AI-generated images, keep them consistent with the art
   direction and honest (don't fake a real product screenshot from a prompt if accuracy matters).

## Delivery checklist

- [ ] Every image purposeful; no filler/blob art
- [ ] One consistent art direction per surface
- [ ] `srcset`/modern formats/lazy; dimensions reserved (no CLS)
- [ ] Art-directed crops via `<picture>` where needed
- [ ] Consistent aspect-ratio set
- [ ] `alt` correct (descriptive vs `alt=""`); no critical text baked into images
- [ ] Hero/LCP image within perf budget
