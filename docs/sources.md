# Sources — the credible origins behind Atelier's rules

Atelier synthesizes the grounded parts of the design-skill landscape and primary a11y/tooling
sources (verified 2026-07-21). Star counts are popularity, not correctness — weight credentialed
authors and primary specs over stars.

## Design-skill genre (studied, selectively mined)

| Source | License | Taken | Left |
|---|---|---|---|
| Leonxlnx/taste-skill | MIT | dials, brief-read, anti-defaults, pre-flight | 87 KB monolith, em-dash folklore, pseudo-random |
| Emil Kowalski / skill (animations.dev) | — | sub-300ms motion ceiling, motion craft | — |
| pbakaus/impeccable | — | tinted neutrals, concentric radii | — |
| addyosmani/agent-skills | — | semantic tokens, 320/768/1024/1440 breakpoints, perf | — |
| **vercel-labs/web-interface-guidelines** | **MIT** | **APCA, ≥24/44px targets, iOS 16px zoom, concentric radii, hue-tinted neutrals** | — |
| vercel-labs writing-guidelines | MIT | em-dash-as-punctuation (grounded form only) | totalizing "AI tell" version |
| raunofreiberg/interfaces | — | ≤200ms interactions, box-shadow focus rings, no disabled tooltips | — |
| Toss design-system rule | — | weight-before-size, no pure-black text, rebuild-dark-not-invert | — |
| v0 (system-prompt leak) | unofficial | 3–5 colors, ≤2 families, avoid gradients, no default purple | (leaked provenance — used as restraint heuristic) |
| shadcn/ui | MIT | gap-not-space, semantic-colors-not-raw | — |
| contains-studio/agents | — | full state coverage (default/hover/…/empty/error) | — |
| nextlevelbuilder/ui-ux-pro-max | MIT | taste-as-retrieval architecture idea | — |

## Accessibility (primary)

- WCAG 2.2 (W3C Rec) — the 2.2 additions: 2.4.11, 2.4.13, 2.5.7, 2.5.8, 3.2.6, 3.3.7, 3.3.8;
  4.1.1 removed. WAI-ARIA APG (patterns + keyboard).
- axe-core 4.12 (MPL-2.0), ~100 rules, ~57% issue coverage by volume (Deque, 2021).
- WebAIM Million 2026: 95.9% of home pages with detectable failures, avg 56 errors/page;
  low-contrast 83.9%, missing alt 53.1%, missing labels 51%; ARIA pages ~40% more errors.
- Screen Reader Survey #10: JAWS 40.5% / NVDA 37.7% / VoiceOver 9.7%.
- ADA Title II digital deadlines (DOJ IFR, 2026-04): 2027-04-26 (pop ≥50k), 2028-04-26 (<50k).

## Design systems / component libs (primary, mid-2026)

- shadcn/ui CLI 4.x (MIT) — Base UI default base; llms.txt + MCP + registry API.
- Radix `radix-ui` 1.6.x (MIT, WorkOS) — no llms.txt/MCP. Base UI `@base-ui/react` 1.x (MIT,
  GA 2025-12) — llms.txt. React Aria Components 1.19 (Apache-2.0) — most rigorous a11y.
- Mantine v9 (MIT, React 19.2+) — llms-full.txt + MCP. Ark UI 5.x / Chakra v3 / Panda — llms.txt + MCP.
- Fluent 2 `@fluentui/react-components` v9 (MIT, Griffel). Carbon v11 `@carbon/react` (Apache-2.0)
  — llms.txt + Carbon MCP (preview). Shopify Polaris — web components (`s-*`, CDN); React Polaris
  DEPRECATED/archived; `@shopify/dev-mcp`.

## Tooling (primary, mid-2026)

- Tokens: W3C DTCG (stable 2025.10); Style Dictionary 5.x.
- Lint: Stylelint 17 + `stylelint-declaration-strict-value` + `stylelint-value-no-unknown-custom-properties`;
  `eslint-plugin-better-tailwindcss`. No generic "design-tokens" plugin exists — assemble it.
- a11y CI: `@axe-core/playwright`, `@storybook/addon-a11y` (`test:'error'`), `jest-axe`, pa11y-ci,
  Lighthouse 13 / `@lhci/cli`.
- Visual regression: Playwright `toHaveScreenshot()`, Chromatic, Argos. (Lost Pixel/Wraith/BackstopJS
  dead or stale.) Determinism: disable animations, hide carets, force reduced-motion, freeze clock.
- Fonts/CLS: `font-display: optional` avoids swap-CLS; metric-override fallbacks / next/font;
  font swaps count toward CLS (good ≤0.1).

## Multi-CLI loading (primary)

- Agent Skills spec (agentskills.io): SKILL.md < 500 lines / < 5k tokens, references one level
  deep, `name`+`description` required. Progressive disclosure is spec-mandated.
- Discovery: Claude Code reads only `.claude/skills/`; Codex/Gemini/Antigravity/Cursor read
  `.agents/skills/`. Bridge via junctions. AGENTS.md capped small (Codex truncates at 32 KiB).

_Note: version-specific facts drift. Prefer each library's live llms.txt/MCP over this file for
current specifics; this records provenance, not a frozen truth._
