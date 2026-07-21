# 90 — Brand identity & kit

When the work needs a brand (or must honor one), this is the layer above the design system:
identity, voice, and the assets that keep it consistent.

## Why agents fail here by default

They invent a look per screen with no through-line, ignore existing brand assets, and produce
a logo/voice that doesn't survive contact with real surfaces.

## Rules (enforceable)

1. **If a brand exists, honor it — don't invent.** Extract the existing tokens, logo,
   typefaces, and voice first (`redesign` skill audit). Inventing over an existing brand is a
   violation.
2. **Brand feeds the token system** (`10`): brand colors → primitive → semantic tokens; brand
   typefaces → the type scale (`12`). The brand isn't a separate styling layer bolted on.
3. **Logo has clear rules:** min size, clear space, do/don't, and variants (full/mark/mono/
   inverse) for light and dark. It must work at favicon size and on a billboard.
4. **A palette, not a color.** Brand hue + neutrals + functional states, built per `11` (OKLCH,
   contrast-checked). Verify the brand color passes contrast as an action color on both themes —
   many brand hues fail and need an adjusted "action" variant.
5. **Voice is defined and consistent** (`60`): 3–4 adjectives, do/don't examples, applied to
   buttons, errors, empty states. Voice is part of the brand, not an afterthought.
6. **Consistency across touchpoints:** web, app, email (`39`), social, docs share tokens, logo,
   and voice. One system, many surfaces.

## Brand kit contents (deliverable)

- Logo suite (full / mark / wordmark / mono / inverse), with clear-space + min-size rules
- Color palette (primitive + semantic tokens, light + dark, contrast-verified)
- Typography (display + text families, scale, weights, licensing)
- Iconography style (set + weight + size conventions)
- Imagery/illustration direction (real photography or generation direction, not filler)
- Voice & tone (adjectives + do/don't + applied microcopy)
- Motion signature (optional: signature easing/timing, `40`)

## Note on image-generation vs code

Generating a *reference* brand board or moodboard (image generation) is a different task from
*implementing* the brand in code. For visual exploration, generate boards; for the shipped
product, encode the brand as tokens and components. Don't confuse a moodboard with a design
system.

## Delivery checklist

- [ ] Existing brand honored/extracted, not invented over
- [ ] Brand → tokens (`10`), palette contrast-verified on both themes
- [ ] Logo variants + rules, works favicon→billboard
- [ ] Voice defined + applied to real microcopy
- [ ] Consistent tokens/logo/voice across web/app/email/social
