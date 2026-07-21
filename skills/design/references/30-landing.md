# 30 — Marketing landing / hero

The one surface AI over-trains on — which is exactly why it produces the most templated
results here. Fight the defaults. Dials lean `VARIANCE 7 / MOTION 5 / DENSITY 4`.

## Why agents fail here by default

Centered hero + gradient + three equal feature cards + generic testimonial + FAQ. It is a
recognizable shape. Break at least the hero and the feature section out of it.

## Rules (enforceable)

1. **Hero headline ≤ 2 lines, sub ≤ ~20 words.** One clear value proposition, not a paragraph.
2. **Hero fits above the fold without a viewport of dead space.** Top padding capped (~`pt-24`),
   not a full empty screen pushing content down.
3. **One primary CTA intent.** Repeat the *same* CTA down the page; don't introduce competing
   actions ("Get started" vs "Sign up" vs "Try free" all on one page = confused intent).
4. **At high VARIANCE, don't center the hero.** Asymmetric split (text left / visual right or
   offset), editorial overlap, off-grid accent. Centered hero is the safe default → only at
   low VARIANCE.
5. **Real images, not div-art.** Product screenshots (real or generated), photography, or a
   genuine illustration. No fake browser chrome built from divs, no decorative blob SVGs as
   filler. (See honesty rules.)
6. **Feature section ≠ three equal cards.** Vary weight: one hero feature + supporting, a
   bento grid, alternating rows, or a zig-zag. Three identical cards is the #1 tell.
7. **Eyebrow labels: max one per ~3 sections.** Not a micro-label on every block.
8. **Social proof is specific.** Real logos, real numbers, real quotes with names/roles.
   Vague "trusted by thousands" reads as filler.
9. **Section rhythm is consistent** (`13-space-grid.md`): same vertical padding scale, not
   randomized. Nav on one line, ≤ ~64–80px tall.
10. **Motion justified** (`40`/`41`): a scroll reveal or two, purposeful. Not everything
    sliding in. Respect reduced-motion (`23`).

## Section palette (pick, don't dump all)

hero · logo cloud / social proof · problem→solution · feature deep-dives (varied layout) ·
how-it-works (3 steps max) · testimonial with real attribution · pricing · FAQ · final CTA.
A landing does NOT need all of these. Choose the few the offer actually requires.

## Pattern families for the hero (rotate, don't reuse a house look)

Asymmetric split · centered-minimal (low variance) · editorial overlap · full-bleed image +
overlaid text · product-shot-forward · bento-grid hero · text-only typographic hero.

## Delivery checklist

- [ ] Headline ≤2 lines, one value prop, one CTA intent
- [ ] Hero not centered at high VARIANCE; fits above fold
- [ ] Feature section is not 3 equal cards
- [ ] Real/generated images, no div-art or filler blobs
- [ ] Consistent section rhythm, one-line nav
- [ ] Motion justified + reduced-motion safe
- [ ] Pre-flight (`80`) passes
