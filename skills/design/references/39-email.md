# 39 — HTML email

Email is 1999-era HTML with 2026 expectations. It is not the web; the constraints are real
and non-negotiable.

## Why agents fail here by default

They build email like a web page (flexbox, grid, external CSS, web fonts, JS) — none of which
work reliably across clients. Outlook alone breaks most modern CSS.

## Rules (enforceable)

1. **Tables for layout.** Nested `<table>` with `role="presentation"`. Flexbox/grid are not
   reliable across Outlook/Gmail. Single-column is safest; multi-column via table cells that
   stack on mobile.
2. **Inline the CSS.** Many clients strip `<style>` and almost none support external
   stylesheets. Inline critical styles on elements; keep a `<style>` block only for
   media queries / progressive enhancement.
3. **~600px max content width.** The safe body width for desktop clients.
4. **System/web-safe fonts** with fallbacks (Arial, Helvetica, Georgia). Web fonts work in some
   clients, fail silently in others — always provide a stack.
5. **Images: assume they're blocked.** Descriptive `alt` on every image (many clients block
   images by default), meaningful without them, and never put critical text inside an image.
   Set explicit width/height. Keep total weight low.
6. **Bulletproof buttons** (padded table cell / VML for Outlook), not CSS-styled links that
   collapse. Real `<a>` with a real href.
7. **Dark mode:** clients recolor; use `@media (prefers-color-scheme)` where supported and
   pick colors/logos that survive inversion; test in dark.
8. **Accessibility:** `lang` on `<html>`, semantic headings, sufficient contrast, real link
   text (not "click here"), logical reading order (tables are source-order dependent).
9. **Mobile:** single column stacks, ≥44px tap targets, ≥16px body text, media queries as
   progressive enhancement (Gmail app support is partial).
10. **Test in real clients** (Outlook, Gmail web/app, Apple Mail) — Litmus/Email on Acid class
    tools. Rendering assumptions are almost always wrong.

## Content

- One primary CTA, above the fold, obvious.
- Preheader text set (the preview snippet) — don't leave it to pull random body text.
- Plain-text alternative for deliverability + accessibility.

## Delivery checklist

- [ ] Table layout, `role=presentation`, ≤600px
- [ ] CSS inlined; `<style>` only for media queries
- [ ] Web-safe font stack; images have alt + explicit size, work when blocked
- [ ] Bulletproof buttons; one clear CTA + preheader
- [ ] Dark-mode + mobile handled; tested in real clients
