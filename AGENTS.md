# AGENTS.md — Atelier design engine

Facts and routing only. Procedures live in the skills (progressive disclosure). Keep this file
small: Codex silently truncates AGENTS.md at 32 KiB, so no manuals here.

## What Atelier is

A cross-CLI design engine: full UI/UX/design capability as spec-compliant Agent Skills. One
SSOT (`skills/`), read natively by Codex / Gemini / Antigravity / Cursor; junctioned into
`.claude/skills/` for Claude Code by `adapters/gen-links.ps1`.

## Skills (routing table)

| Skill | Use it when |
|---|---|
| `design` | Build/style any new UI. Router: loads reference modules on demand. |
| `design-review` | Audit/critique an existing interface. Severity-ranked findings. |
| `redesign` | Refresh/overhaul an existing product without breaking SEO/a11y. |

Invoke: Claude Code `/design`; Codex `$design`; Gemini `activate_skill`; Antigravity `@design`.

## Non-negotiables (the whole system in six lines)

1. Read the brief first — one-line design read + dials (VARIANCE / MOTION / DENSITY).
2. Accessibility (WCAG 2.2 AA) is a delivery blocker, not a phase.
3. Colors are OKLCH semantic tokens; no raw hex in components.
4. Install the real design system; never hand-recreate one by eye.
5. Every surface has empty / loading / error states.
6. Nothing ships on a failing pre-flight (`skills/design/references/80-preflight.md`).

## Coverage map (where the depth is)

`skills/design/references/` — load on demand:

- Foundations: `10-tokens` `11-color` `12-typography` `13-space-grid` `14-shape-elevation`
  `15-iconography` `16-imagery`
- Accessibility: `20-wcag22` `21-aria-apg` `22-keyboard-focus` `23-motion-a11y`
- Surfaces: `30-landing` `31-dashboard-dataviz` `32-data-tables` `33-forms`
  `34-auth-onboarding` `35-states` `36-nav-ia-search` `37-feedback-overlays`
  `38-mobile-native` `39-email` `3A-ai-native-ui` `3B-commerce-checkout` `3C-settings-account`
- Motion: `40-motion-system` `41-motion-web`
- UX process: `50-ux-research-flows` `51-critique-rubric`
- Content: `60-ux-writing` `61-i18n-rtl`
- Implementation: `70-component-libs` `71-css-2026` `72-frameworks` `73-handoff-qa`
- Quality: `80-preflight` `81-anti-defaults` `82-quality-gates` `83-ethics-consent`
- Brand: `90-brand-kit`
- Presets (pick ≤1): `presets/{minimalist,brutalist,soft-editorial,premium-dense}`

## Workflows

`workflows/` — `new-surface` · `design-review` · `redesign` · `token-setup`.

## Live sources (prefer over frozen memory for version-specific facts)

Component-library specifics change fast — pull from the source, not this file:
shadcn (`ui.shadcn.com/llms.txt` + `npx shadcn mcp`) · Mantine (`mantine.dev/llms-full.txt` +
`@mantine/mcp-server`) · Carbon (`carbondesignsystem.com/llms.txt` + Carbon MCP) · Base UI
(`base-ui.com/llms.txt`) · Shopify (`@shopify/dev-mcp`) · Geist (`vercel.com/design.md`).

## Conventions

- Spec-compliant frontmatter only (`name`, `description`) so the skills are portable across all
  CLIs. No load-bearing logic in vendor-specific frontmatter keys.
- Relative reference paths, one level deep. Plain `scripts/x` paths, no CLI-specific injection.
- French user-facing, English for code and technical docs.
