# 61 — Internationalization & RTL

"Framework-agnostic" layouts brag about flexibility and then break the moment text is German,
Arabic, or Japanese. i18n is a layout constraint, not a translation afterthought.

## Why agents fail here by default

Hardcoded English strings, fixed widths that clip long translations, physical CSS properties
that don't flip for RTL, and concatenated sentence fragments that can't be translated.

## Rules (enforceable)

1. **No hardcoded user-facing strings.** All copy comes from a message catalog with keys.
   Never concatenate sentence fragments ("You have " + n + " items") — use ICU message format
   with placeholders and plurals so translators get whole sentences.
2. **Design for text expansion.** German/Finnish run ~30–40% longer than English; some UI
   labels double. Never fix a button/label to English width; let it grow, wrap, or truncate
   gracefully. Test with pseudo-localization (padded accented strings).
3. **Use logical CSS properties, not physical.** `margin-inline-start` not `margin-left`,
   `padding-inline`, `inset-inline`, `text-align: start`, `border-inline-end`. These flip
   automatically for RTL. Physical properties are the #1 RTL breakage.
4. **Set `dir` and `lang`.** `<html lang dir>`; switch `dir="rtl"` for Arabic/Hebrew/Farsi/Urdu.
   Icons and directional affordances (arrows, chevrons, progress) mirror in RTL; logos and
   media generally don't. Don't mirror numbers or code.
5. **Locale-aware formatting** via `Intl` (`Intl.NumberFormat`, `Intl.DateTimeFormat`,
   `Intl.RelativeTimeFormat`, `Intl.PluralRules`) or `@internationalized/*`. Never hardcode
   date/number/currency formats. Time zones matter.
6. **Fonts cover the target scripts.** A Latin-only font can't render CJK/Arabic/Cyrillic;
   choose typefaces (or fallback stacks) with the needed glyph coverage, and subset per script
   with `unicode-range` (`12`).
7. **Bidi text** (mixed LTR/RTL, e.g. an English brand in Arabic copy) needs proper Unicode
   bidi handling; test it — it's where subtle bugs live.
8. **Input methods & validation** vary by locale (names, addresses, phone formats). Don't
   enforce US-centric patterns as universal (`33`).

## RTL quick audit

- [ ] Logical properties throughout (no `left`/`right` for layout)
- [ ] Layout mirrors correctly under `dir="rtl"`
- [ ] Directional icons flip; media/logos don't
- [ ] Text isn't clipped in RTL or when expanded

## Delivery checklist

- [ ] All strings externalized, ICU format, whole sentences
- [ ] Layout survives ~40% text expansion (pseudo-loc tested)
- [ ] Logical CSS properties; `lang`/`dir` set; RTL verified
- [ ] `Intl`/locale-aware dates, numbers, plurals
- [ ] Fonts cover target scripts
