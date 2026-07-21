# Changelog — Atelier

## 2026-07-22 — v0.2.1 (trusted-publishing rail verification)

- First release published via the **OIDC Trusted Publisher** rail (GitHub Actions → npm, no token).
  Confirms `gh release create` → `.github/workflows/publish.yml` → `npm publish` end-to-end.

## 2026-07-22 — PUBLISHED

- **npm**: `design-skill@0.2.0` live → https://www.npmjs.com/package/design-skill (published via
  `npm login`, account `laurent.rochetta`). `npx design-skill link` works.
- **GitHub**: https://github.com/lrochetta/design-skill (public, MIT).
- **Trusted Publishing**: OIDC workflow `.github/workflows/publish.yml` in place; future releases
  publish tokenless once the trusted publisher is configured on npmjs.com (org `lrochetta`, repo
  `design-skill`, workflow `publish.yml`).

## 2026-07-22 — v0.2.0 (completeness pass + standalone packaging)

**Packaging (standalone public-repo ready):** added `package.json` (bin `atelier-design`, `files`
whitelist), `bin/atelier.mjs` — a **cross-OS Node linker** (Windows junctions without admin;
macOS/Linux symlinks; `link`/`unlink`/`--project`/`--dry`; idempotent) replacing the Windows-only
`gen-links.ps1` (kept as no-Node fallback). Added `.gitignore` + MIT `LICENSE`. README rewritten
for `npx atelier-design link`, `npx skills add` ecosystem install, and the BMAD+ channel. The repo
root is `atelier/`; all R&D lives above it in the portfolio and is out of the repo by construction.
Verified: Node linker recognizes junctions made by the PS script (realpath match) → both installers
interoperate.

### Completeness-critic pass — gap closure

An adversarial completeness-critic (fresh taxonomy agent) audited the 38-module set against the
goal "build/review/redesign *any* interface". Closed the flagged gaps — **+7 modules → 45**:

- `15-iconography` · `16-imagery` (foundations that were missing)
- `3A-ai-native-ui` (chat/streaming/agentic — the #1 modern gap) · `3B-commerce-checkout` ·
  `3C-settings-account` (ubiquitous surfaces that were unowned)
- `73-handoff-qa` (design→code parity — the missing spine of `design-review`)
- `83-ethics-consent` (dark-pattern taxonomy + GDPR/cookie consent — relevant to the GRC portfolio)

Deepened: `10-tokens` (multi-brand/theming), `33-forms` (forms-at-scale: dynamic/wizard/autosave).
Router updated (decision tree + routing table + sibling-skill cross-links + declared-second-wave
note so deferred domains — governance, measurement, spatial/3D, sound — are named, not silently
absent). Pre-flight extended (assets C2, ethics/consent F2, handoff parity). Cross-linked the
sibling `dataviz` skill from `31`.

## 2026-07-21 — v0.1.0 (initial scaffold + core modules)

Created the cross-CLI design engine from scratch in `_design-skills/atelier/`.

**Architecture**
- SSOT in `skills/` (`.agents`-style, spec-compliant Agent Skills). Progressive disclosure:
  thin router `design/SKILL.md` + ~35 on-demand reference modules.
- Cross-CLI bridge via `adapters/gen-links.ps1` (Windows junctions, no admin; Claude Code +
  Codex + Gemini + Antigravity + Cursor).
- `AGENTS.md` kept < 8 KB (facts + routing only) to dodge Codex's 32 KiB truncation.
- BMAD+ `pack-design` (Atelier) wrapper staged in `adapters/bmad-pack/`.

**Skills**
- `design` (router), `design-review` (audit), `redesign` (overhaul).

**Reference modules (written with real content)**
- Router + `00-brief-read` + `00-decision-tree`.
- Foundations `10`–`14` (tokens, color/OKLCH/APCA, typography, space/grid, shape/elevation).
- Accessibility `20`–`23` (WCAG 2.2, ARIA/APG, keyboard/focus, motion-a11y).
- Surfaces `30`–`39` (landing, dashboard/dataviz, tables, forms, auth/onboarding, states,
  nav/IA/search, feedback/overlays, mobile/native, email).
- Motion `40`–`41`, UX process `50`–`51`, content `60`–`61`.
- Implementation `70`–`72` (component libs 2026, CSS 2026, frameworks).
- Quality `80`–`82` (pre-flight, anti-defaults, quality gates), brand `90`.
- Presets: minimalist, brutalist, soft-editorial, premium-dense.

**Workflows**
- `new-surface`, `design-review`, `redesign`, `token-setup`.

**Docs**
- `coverage-matrix` (vs the landscape, ⭐ gaps), `sources` (credible provenance), this changelog.

**Grounding** — synthesized from a multi-agent research sweep (2026-07-21): the taste-skill
landscape, multi-CLI loading mechanics, primary a11y sources (WCAG 2.2, axe-core, WebAIM Million
2026), design-system state (shadcn/Radix/Base UI/React Aria/Mantine/Fluent/Carbon/Polaris), and
CI tooling (Stylelint, axe/Playwright/Lighthouse, visual regression).

### Next
- [ ] Wire `pack-design` into `BMAD+/registry.yaml` + `role-triggers.yaml` + regenerate (on confirmation).
- [ ] Run `gen-links.ps1` on this machine; add to `machine-config/deploy/deploy.ps1`.
- [ ] Register in `_design-skills/INDEX.md`, `_brain/agents/registry.md`, `_brain/memory/patterns.md`.
- [ ] Optional: a `dataviz` cross-link and a `71`/`82` deep-dive refresh from live llms.txt.
