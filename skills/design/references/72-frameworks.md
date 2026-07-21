# 72 — Framework-specific design implementation

Design decisions land differently per framework. This covers the design-relevant specifics;
it is not a general framework tutorial.

## React 19 / Next.js

- **React 19** is the current baseline for the modern libraries (Mantine v9, HeroUI v3 require
  it; Base UI/Radix/shadcn support it). Use it for new work.
- **Server Components (RSC):** keep interactive/stateful UI in client components (`"use client"`),
  static/data UI on the server. shadcn's `components.json` has an `rsc` flag. Design implication:
  loading/streaming states (`35`) map to Suspense boundaries — design the skeleton per boundary.
- **Streaming & Suspense:** design deliberate loading states at each Suspense boundary; don't let
  the whole page block. Optimistic UI via `useOptimistic` for snappy forms (`33`).
- **`next/font`** self-hosts fonts, auto-injects `size-adjust` fallback, kills font-CLS
  (`display: swap`, `preload: true`, `adjustFontFallback` on by default). Use it over manual
  `@font-face` on Next (`71`).
- **next/image** for automatic sizing/format/lazy — reserve dimensions to avoid CLS.
- App Router: layouts persist, so persistent nav/shell lives in `layout.tsx`; per-route loading
  via `loading.tsx`, errors via `error.tsx` — wire these to real `35` states, not blanks.

## Vue / Nuxt

- Nuxt: `@nuxt/fonts` / `@nuxtjs/fontaine` for metric-override font fallbacks (font-CLS).
- Component libs: Ark UI (Vue), Nuxt UI, PrimeVue. Same token/a11y rules apply.
- Scoped styles + CSS variables for tokens; keep logical properties for RTL.

## Svelte / SvelteKit

- Transitions/motion are built-in (`transition:`, `animate:`) — still gate on reduced-motion
  (`23`). Ark UI (Svelte) for headless a11y widgets.

## Astro

- Islands architecture: ship minimal JS. Great for marketing (`30`) — most of the page is
  static, interactivity is islands. View Transitions are first-class.

## Cross-framework rules (enforceable)

1. **Loading/error/empty states map to framework primitives** (Suspense/`loading.tsx`/islands) —
   design them, don't leave defaults blank (`35`).
2. **Tokens as CSS variables** work everywhere — keep the design system framework-agnostic at the
   token layer even if components differ (`10`).
3. **Respect SSR/hydration:** no layout shift between server and client render; avoid
   client-only measurements that reflow; set dimensions up front.
4. **Reduced-motion + a11y are framework-independent** — every framework's motion primitives
   still need the `23`/`20` guards.
5. **One component system per app**, matched to the framework (`70`).

## Delivery checklist

- [ ] Interactive vs static split correct (RSC/islands)
- [ ] Loading/error/empty wired to framework primitives, designed not blank
- [ ] Framework font solution used (next/font, @nuxt/fonts) for font-CLS
- [ ] No SSR/hydration layout shift
- [ ] Tokens as CSS vars; a11y/reduced-motion guards present
