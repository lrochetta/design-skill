# Atelier — cross-CLI design engine

The portfolio's authored design skill. Turns "make it look good" into mechanically checkable
rules across the whole of UI/UX, and runs natively in Claude Code, Codex, Gemini, Antigravity,
and Cursor from a single source of truth.

> Built 2026-07-21. Inspired by the taste-skill genre (Leonxlnx, Emil Kowalski, Bakaus, Vercel
> web-interface-guidelines, ui-ux-pro-max) but re-architected: thin router + progressive
> disclosure instead of one 87 KB file, and coverage of the whole product surface (dashboards,
> tables, forms, states, a11y) instead of marketing landing pages only.

## Why it exists

Existing design skills fail two ways: they load a giant opinion file into context on every
activation, and they only cover marketing landing pages. Atelier fixes both:

- **Progressive disclosure.** A ~1-page router (`skills/design/SKILL.md`) holds the dials, a
  decision tree, and a routing table. The ~35 reference modules load only when the task needs
  them — the pattern the Agent Skills spec mandates.
- **Nothing missed.** Foundations, accessibility (WCAG 2.2 / ARIA), every product surface,
  motion, UX process, content/i18n, implementation reality, and CI quality gates.
- **Mechanically checkable.** Rules are things you can verify (contrast ratios, target sizes,
  states present, tokens used), not "be original". Anti-slop is a named blocklist, not a vibe.

## Structure

```
atelier/
├── AGENTS.md                     # always-on facts + routing (<8 KB; no procedures)
├── skills/
│   ├── design/                   # the router + references/ (foundations..gates, presets)
│   ├── design-review/            # audit an existing UI
│   └── redesign/                 # refresh/overhaul safely
├── workflows/                    # new-surface · design-review · redesign · token-setup
├── adapters/
│   ├── gen-links.ps1             # junction SSOT -> every CLI's discovery dir (Windows, no admin)
│   └── bmad-pack/                # pack-design wrapper for BMAD+ install
└── docs/                         # coverage-matrix · sources · changelog
```

## Install

Atelier lives once (`skills/`) and links into every CLI's discovery directory. Links, not
copies — no drift, and edits to a module appear everywhere instantly.

### Recommended — cross-OS, via npx (Windows / macOS / Linux)

```bash
# global: available in every project you open, for all CLIs
npx design-skill link

# a single project
npx design-skill link --project .

# preview / remove
npx design-skill link --dry
npx design-skill unlink
```

The linker uses **directory junctions on Windows** (no admin / Developer Mode) and **symlinks
on macOS/Linux**, from the same command. Idempotent. Links are per-machine (not committed) —
re-run on a new machine.

Not published to npm yet? Run it straight from the repo: `npx github:lrochetta/design-skill link`,
or clone and `node bin/atelier.mjs link`.

### Ecosystem installer (`skills` CLI)

Atelier's `skills/` are spec-compliant Agent Skills, so the standard installer works too:

```bash
npx skills add https://github.com/lrochetta/design-skill
```

### No Node? PowerShell fallback (Windows)

```powershell
.\adapters\gen-links.ps1            # global   ·   -DryRun   ·   -Scope project -ProjectPath <p>
```

Wire either into `_brain\methodology\machine-config\deploy\deploy.ps1` for multi-machine.

### Via BMAD+ (per-project, different channel)

If you use the `bmad-plus` framework, install the **`pack-design`** (Atelier) pack instead —
`bmad-plus install` **copies** the skills into the project's `.agents/skills/`. In that mode you
do **not** run the linker (the files are physically installed). See `adapters/bmad-pack/`.

So there are two distribution channels: **linker/npx** = one global install, everywhere;
**BMAD+ pack** = shipped into each project as part of the BMAD+ stack.

## Use

| Task | Claude Code | Codex | Gemini | Antigravity |
|---|---|---|---|---|
| Build new UI | `/design` | `$design` | activate_skill | `@design` |
| Review a UI | `/design-review` | `$design-review` | activate_skill | `@design-review` |
| Redesign | `/redesign` | `$redesign` | activate_skill | `@redesign` |

BMAD+: install the `pack-design` (Atelier) pack — see `adapters/bmad-pack/`.

## Design decisions

See `docs/` for the coverage matrix (what's covered vs the landscape), sources (the credible
rule origins), and the changelog. The one-paragraph version: SSOT in `.agents`-style
`skills/`, Claude bridged by documented junctions, `AGENTS.md` kept tiny to dodge Codex's 32 KB
truncation, and every fast-moving fact deferred to live llms.txt/MCP sources rather than frozen
into a module.
