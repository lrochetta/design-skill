---
name: redesign
description: >
  Redesign or refactor the look and feel of an existing live site or app while preserving what
  works. Use when the user asks to redesign, refresh, modernize, rebrand, or overhaul an
  existing interface (as opposed to building new from scratch). Handles the audit-first
  protocol, preserve-vs-overhaul decision, token/IA migration, and flags SEO/migration risk.
  Reads the design engine's reference modules on demand.
license: MIT
metadata:
  project: atelier
  version: "0.1.0"
---

# Redesign — change an existing product safely

Redesign is not greenfield. There is an existing brand, IA, content, SEO surface, and user
muscle-memory. Break those carelessly and the redesign fails even if it looks better. Audit
first, change deliberately. Modules at `../design/references/`.

## Protocol

1. **Audit the current state before proposing anything.**
   - Extract current design tokens (colors, type, spacing, radius), brand assets, and voice
     (`../design/references/90-brand-kit.md`, `10-tokens.md`). Honor an existing brand — don't
     invent over it.
   - Map current IA and key flows (`50-ux-research-flows.md`, `36-nav-ia-search.md`).
   - Inventory the surfaces (`3x` modules) and their states (`35-states.md`).
   - Run a design review (`../design-review` skill) to know what's actually broken vs merely
     dated. Separate the two.

2. **Decide the mode:**
   - **Preserve** — keep IA, URLs, content structure; refresh visual layer (tokens, type,
     spacing, components). Lower risk. Most "redesigns" should be this.
   - **Overhaul** — rework IA/flows/surfaces too. Higher risk; justify it against user goals
     (`50`), and plan migration.
   State which mode and why.

3. **Migrate deliberately:**
   - **SEO is the #1 redesign risk.** Preserve URLs or set up 301s; keep semantic structure,
     headings, metadata, structured data; don't drop indexed content. Flag this explicitly to
     the user before shipping an overhaul.
   - Preserve or consciously improve user muscle-memory: don't move core actions without reason.
   - Migrate tokens as a system (`10`), not ad-hoc restyling — this is the moment to fix drift
     (`82`).
   - Keep accessibility at least as good as before; a redesign that regresses a11y is a
     regression (`20`–`23`).

4. **Build the new version** with the `design` skill (dials + surface modules + pre-flight),
   reusing extracted brand tokens.

5. **Verify against the old:** design review + pre-flight (`80`) + quality gates (`82`), and
   confirm no SEO/a11y/flow regressions.

## Rules

- Audit before proposing. Never redesign blind.
- Default to preserve; justify any overhaul against user goals.
- SEO + a11y must not regress — flag both explicitly.
- Extract and honor the existing brand; fix drift via the token system, not by restyling.

## Output

An audit summary (current tokens/IA/issues) → mode decision + rationale → migration plan
(SEO/a11y/muscle-memory risks flagged) → the redesigned implementation → verification.
