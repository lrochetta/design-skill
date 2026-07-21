#!/usr/bin/env node
// Atelier — cross-OS skill linker.
// Links the design skills (SSOT) into every CLI's discovery directory, on
// Windows / macOS / Linux, from a single source. No file duplication, no drift.
//
//   npx design-skill link                 # global: link into ~ for all CLIs
//   npx design-skill link --project .      # link into a specific project
//   npx design-skill link --dry            # print the plan, change nothing
//   npx design-skill unlink                # remove the links (never touches the source)
//
// Windows uses directory JUNCTIONS (no admin / Developer Mode needed).
// macOS/Linux use directory SYMLINKS. Idempotent.

import {
  symlinkSync, existsSync, mkdirSync, lstatSync, readlinkSync, rmSync, readdirSync, realpathSync,
} from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { homedir, platform } from 'node:os';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SKILLS_SRC = resolve(__dirname, '..', 'skills');
const IS_WIN = platform() === 'win32';
const LINK_TYPE = IS_WIN ? 'junction' : 'dir';

// ---- args -----------------------------------------------------------------
const argv = process.argv.slice(2);
const cmd = argv.find((a) => !a.startsWith('-')) || 'link';
const dry = argv.includes('--dry') || argv.includes('--dry-run');
const projIdx = argv.indexOf('--project');
const projectPath = projIdx !== -1 ? resolve(argv[projIdx + 1] || '.') : null;

const C = { cyan: '\x1b[36m', green: '\x1b[32m', yellow: '\x1b[33m', red: '\x1b[31m', dim: '\x1b[2m', reset: '\x1b[0m' };
const say = (s = '') => process.stdout.write(s + '\n');

// ---- discover the skill folders (each has a SKILL.md) ---------------------
if (!existsSync(SKILLS_SRC)) {
  say(`${C.red}[error]${C.reset} skills source not found: ${SKILLS_SRC}`);
  process.exit(1);
}
const skills = readdirSync(SKILLS_SRC, { withFileTypes: true })
  .filter((d) => d.isDirectory() && existsSync(join(SKILLS_SRC, d.name, 'SKILL.md')))
  .map((d) => d.name);
if (skills.length === 0) {
  say(`${C.red}[error]${C.reset} no SKILL.md folders under ${SKILLS_SRC}`);
  process.exit(1);
}

// ---- target roots ---------------------------------------------------------
function targetRoots() {
  if (projectPath) {
    if (!existsSync(projectPath)) { say(`${C.red}[error]${C.reset} project not found: ${projectPath}`); process.exit(1); }
    return [join(projectPath, '.claude', 'skills'), join(projectPath, '.agents', 'skills')];
  }
  const h = homedir();
  return [
    join(h, '.claude', 'skills'),          // Claude Code
    join(h, '.agents', 'skills'),          // Codex / Gemini / Antigravity / Cursor
    join(h, '.codex', 'skills'),           // Codex tooling default
    join(h, '.gemini', 'skills'),          // Gemini CLI global
    join(h, '.gemini', 'config', 'skills'),// Antigravity global
  ];
}

// ---- helpers --------------------------------------------------------------
function isLink(p) {
  try { return lstatSync(p).isSymbolicLink(); } catch { return false; }
}
function linkResolvesTo(link, src) {
  try { return realpathSync(link) === realpathSync(src); } catch { return false; }
}

// ---- link -----------------------------------------------------------------
function doLink() {
  say(`${C.cyan}Atelier linker${C.reset}  (${IS_WIN ? 'junctions' : 'symlinks'})  scope: ${projectPath ? 'project' : 'global'}${dry ? '  [dry-run]' : ''}`);
  say(`${C.dim}source: ${SKILLS_SRC}${C.reset}`);
  say(`${C.dim}skills: ${skills.join(', ')}${C.reset}\n`);
  let made = 0, ok = 0, warn = 0;
  for (const root of targetRoots()) {
    say(`-> ${root}`);
    if (!existsSync(root)) { if (dry) say(`   ${C.dim}would create dir${C.reset}`); else mkdirSync(root, { recursive: true }); }
    for (const name of skills) {
      const link = join(root, name);
      const src = join(SKILLS_SRC, name);
      if (existsSync(link) || isLink(link)) {
        if (isLink(link) && linkResolvesTo(link, src)) { say(`   ${C.green}[ok]${C.reset}   ${name}`); ok++; continue; }
        if (isLink(link)) { // wrong link -> replace
          if (dry) { say(`   ${C.dim}would relink ${name}${C.reset}`); }
          else { rmSync(link, { recursive: false, force: true }); symlinkSync(src, link, LINK_TYPE); say(`   ${C.yellow}[fix]${C.reset}  ${name}`); made++; }
        } else { say(`   ${C.yellow}[warn]${C.reset} ${name} exists as a real directory - left untouched`); warn++; }
        continue;
      }
      if (dry) { say(`   ${C.dim}would link ${name}${C.reset}`); }
      else { symlinkSync(src, link, LINK_TYPE); say(`   ${C.green}[new]${C.reset}  ${name}`); made++; }
    }
    say('');
  }
  say(`${C.green}Done.${C.reset} new/fixed=${made} ok=${ok} warn=${warn}`);
  say(`\nClaude Code: /design  /design-review  /redesign`);
  say(`Codex: $design   Gemini: activate_skill   Antigravity: @design`);
  if (!projectPath) say(`${C.dim}Links are per-machine; re-run after a new machine / file sync.${C.reset}`);
}

// ---- unlink ---------------------------------------------------------------
function doUnlink() {
  say(`${C.cyan}Atelier unlink${C.reset}  scope: ${projectPath ? 'project' : 'global'}${dry ? '  [dry-run]' : ''}\n`);
  let removed = 0;
  for (const root of targetRoots()) {
    for (const name of skills) {
      const link = join(root, name);
      if (isLink(link)) {
        if (dry) say(`   ${C.dim}would remove ${link}${C.reset}`);
        else { rmSync(link, { recursive: false, force: true }); say(`   ${C.yellow}[rm]${C.reset} ${link}`); removed++; }
      }
    }
  }
  say(`\n${C.green}Done.${C.reset} removed=${removed} (source untouched)`);
}

switch (cmd) {
  case 'link': doLink(); break;
  case 'unlink': doUnlink(); break;
  default:
    say(`Atelier — cross-OS skill linker\n`);
    say(`  design-skill link [--project <path>] [--dry]   link skills into CLI discovery dirs`);
    say(`  design-skill unlink [--project <path>] [--dry] remove the links (keeps the source)`);
    process.exit(cmd === '--help' || cmd === '-h' ? 0 : 1);
}
