# 70 — Choosing a component library (2026)

The honesty rule: **if a real system fits, install the real package.** Never hand-recreate a
named design system by eye. This module is the decision matrix + the agent affordances
(llms.txt / MCP) that let you build against the real thing. Versions are as of mid-2026 —
verify with the library's own llms.txt/MCP before relying on specifics.

## Decision matrix

| Situation | Use | Model | License | A11y basis |
|---|---|---|---|---|
| Generic React product (default) | **shadcn/ui** | copy-in source (you own it) | MIT | Base UI default (or Radix / React Aria) |
| Need behavior primitives only | **Radix** / **Base UI** / **React Aria** | npm dep, unstyled | MIT / MIT / Apache-2.0 | APG; React Aria most rigorous |
| Full batteries-included React, fast | **Mantine v9** | npm dep, styled | MIT | solid; needs React 19.2+ |
| Multi-framework (React/Vue/Solid/Svelte) | **Ark UI** (Zag.js) | npm dep, unstyled | MIT | FSM-driven |
| Microsoft / enterprise | **Fluent 2** (`@fluentui/react-components` v9) | npm dep, styled (Griffel) | MIT | WCAG-oriented |
| IBM / enterprise data | **Carbon v11** (`@carbon/react`) | npm dep, styled | Apache-2.0 | IBM a11y + Equal Access |
| Shopify embedded app | **Polaris web components** (`s-*` via CDN) | Shopify-hosted CDN | Shopify | Polaris a11y |

## Key 2026 facts (don't get these wrong)

- **shadcn** is a code-distribution CLI (`shadcn` pkg, 4.x), not an npm component library — it
  copies source into your repo. In 2026 its **default base is Base UI** (Radix and React Aria
  also selectable via `init --base`). Tailwind v4 + OKLCH. Has **llms.txt**, an **MCP server**
  (`npx shadcn mcp`), a JSON registry API (`/r/{name}.json`), and shadcn/skills. Most
  agent-ready option.
- **Radix Primitives** — unified `radix-ui` package (not per-component `@radix-ui/react-*`).
  Maintained by WorkOS; still active. **No llms.txt, no MCP** — you rely on this module + docs.
- **Base UI** (`@base-ui/react`, GA Dec 2025) — successor from the Radix + Floating UI + MUI
  people; APG + WCAG 2.2; **has llms.txt** (+ `.md` per page). MUI is being rebuilt on it.
- **React Aria Components** (Adobe, Apache-2.0) — the **most rigorous a11y** (broad screen-reader
  matrix), best i18n (`@internationalized/*`). llms.txt via React Spectrum S2.
- **Polaris React is DEPRECATED / archived** — for Shopify use the `s-*` web components via
  `cdn.shopify.com/shopifycloud/polaris.js` (evergreen, App Bridge). `@shopify/dev-mcp` MCP
  exists. Do not start new Shopify UI on React Polaris.
- **HeroUI** (ex-NextUI) v3 is Tailwind-v4-native, React 19, built on React Aria — note a
  license discrepancy (npm says MIT, repo/releases say Apache-2.0 for v3): verify LICENSE.

## Agent affordances (use live sources for current specifics)

| Library | llms.txt | MCP |
|---|---|---|
| shadcn/ui | ✅ | ✅ `npx shadcn mcp` |
| Base UI | ✅ | — |
| React Aria (S2) | ✅ | — |
| Ark UI / Chakra / Panda | ✅ | ✅ `@ark-ui/mcp`, `@chakra-ui/react-mcp` |
| Mantine | ✅ (`llms-full.txt`) | ✅ `@mantine/mcp-server` |
| Carbon | ✅ (`carbondesignsystem.com/llms.txt`) | ✅ Carbon MCP (preview) |
| Shopify | ⚠️ | ✅ `@shopify/dev-mcp` |
| Radix / Headless UI | ❌ | ❌ |

**Rule:** for anything version-specific (props, tokens, install), fetch the library's llms.txt
or query its MCP rather than trusting a frozen memory. Rules-as-a-service > stale context
(`00-decision-tree.md`).

## Rules (enforceable)

1. **Install the real system; don't recreate it.** Recreating Material/Fluent/Carbon/Polaris by
   hand is a violation — wrong a11y, wrong behavior, guaranteed drift.
2. **Compose, don't restyle every primitive.** With shadcn/Radix, build composites on top; ad-hoc
   re-styling of every primitive causes drift (`82`).
3. **One system per app.** Don't mix Mantine + Fluent + shadcn. Pick one, extend it.
4. **Respect the a11y the library gives you** — don't strip focus rings or ARIA to "clean up".
5. **Check the license before vendoring** (Apache vs MIT vs field-restricted; some popular repos
   are unlicensed despite stars).

## Delivery checklist

- [ ] Real package installed for any named system
- [ ] One library, composed not re-styled
- [ ] Current specifics pulled from llms.txt/MCP, not memory
- [ ] License verified
- [ ] Library a11y preserved
