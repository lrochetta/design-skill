# BMAD+ pack wrapper — `pack-design` (Atelier)

This stages Atelier as a BMAD+ pack so it installs into every project via `bmad-plus install`
(like the 9 packs already in `test2`). Staged here for review; **wiring it into the BMAD+ build
is a separate, confirmed step** (it touches `registry.yaml` + a generated file guarded by
byte-equivalence tests).

## What's here

- `pack-design/SKILL.md` — the Atelier persona/router (BMAD+ SKILL convention).
- `pack-design/bmad-skill-manifest.yaml` — the pack manifest (flat keys, no fences).

The pack's SKILL.md routes into the Atelier design engine. In a BMAD+ install the reference
modules ship alongside it (copy `../..//skills/design/references/` into the pack, or symlink),
so `design/references/*.md` resolve at install sites.

## Wiring into BMAD+ (run on confirmation)

1. Copy `pack-design/` to `D:\travail\DEV\BMAD+\src\bmad-plus\packs\pack-design\`, and include
   the Atelier `design` engine (SKILL.md + references) inside it.
2. Add an entry to `D:\travail\DEV\BMAD+\registry.yaml` (see `registry-entry.yaml` snippet):
   ```yaml
   - name: design
     order: <next>
     cli: { name: Atelier, icon: "🎨", desc: "Full UI/UX/design engine (anti-slop, a11y, tokens, gates)" }
     pack_dir: pack-design
     pack_src_dir: packs
     install_layout: packaged
     agents: []
     skills: [pack-design, design, design-review, redesign]
     doctor: { pack_agents: [] }
   ```
3. Wire auto-activation: extend `src/bmad-plus/data/role-triggers.yaml` — the
   `quality.auto_triggers.ux-review` node already owns `design/interface/responsive/
   accessibility` keywords and `frontend_changes` / `new_component` / `new_page` contexts;
   either enrich it or add a peer `design:` top-level key.
4. Regenerate: `node tools/build/generate.js` (regenerates `tools/cli/lib/packs.js`), then
   `npm test` (the `generate.test.js` byte-equivalence check must pass).
5. `bmad-plus install` now offers the Atelier pack.

Gates: BMAD+ write-auth is durable, but **npm publish + push remote require asking first**.
