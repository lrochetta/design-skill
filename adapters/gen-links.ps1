<#
.SYNOPSIS
    Link the Atelier design skills into every CLI's discovery directory, cross-tool.

.DESCRIPTION
    Atelier's skills live once, in _design-skills\atelier\skills\ (the SSOT). Each CLI looks
    in a different place:
      - Claude Code : ONLY .claude\skills\            (never .agents\)
      - Codex CLI   : .agents\skills\ , ~\.agents\skills\ , ~\.codex\skills\
      - Gemini CLI  : .agents\skills\ , ~\.gemini\skills\
      - Antigravity : .agents\skills\ , ~\.gemini\config\skills\
      - Cursor      : reads BOTH .claude\skills\ and .agents\skills\

    This script creates directory JUNCTIONS (mklink /J -- no admin / Developer Mode needed on
    Windows 11, unlike /D symlinks) from each target root to the SSOT skill folders. Idempotent:
    existing correct links are skipped; nothing is duplicated (each CLI de-dupes by target).

    Junctions are opaque to Git and do not survive Nextcloud sync -- so DO NOT commit the link
    dirs. Re-run this per machine (wire it into machine-config\deploy\deploy.ps1). The SSOT
    under _design-skills\ is what syncs; the links are regenerated locally.

    ASCII-only, PowerShell 5.1 compatible.

.PARAMETER Scope
    'global' (default) -> link into the user-level roots (~), so every project sees the skills.
    'project'          -> link into a specific project (requires -ProjectPath).

.PARAMETER ProjectPath
    The project root to link into (used with -Scope project).

.PARAMETER DryRun
    Print the plan without creating anything.

.EXAMPLE
    .\gen-links.ps1                              # global install, all CLIs
    .\gen-links.ps1 -Scope project -ProjectPath D:\travail\DEV\myapp
    .\gen-links.ps1 -DryRun
#>

param(
    [ValidateSet('global','project')]
    [string]$Scope = 'global',
    [string]$ProjectPath,
    [switch]$DryRun
)

$ErrorActionPreference = 'Stop'

# SSOT = the skills\ folder next to this adapters\ dir
$AtelierRoot = Split-Path -Parent $PSScriptRoot
$SkillsSrc   = Join-Path $AtelierRoot 'skills'

if (-not (Test-Path $SkillsSrc)) {
    Write-Host "[ERROR] SSOT skills folder not found: $SkillsSrc" -ForegroundColor Red
    exit 1
}

# Enumerate the skill source folders (each contains a SKILL.md)
$skillDirs = Get-ChildItem -Path $SkillsSrc -Directory | Where-Object {
    Test-Path (Join-Path $_.FullName 'SKILL.md')
}
if ($skillDirs.Count -eq 0) {
    Write-Host "[ERROR] No SKILL.md folders under $SkillsSrc" -ForegroundColor Red
    exit 1
}

# Resolve the set of target roots per scope
$targets = @()
if ($Scope -eq 'global') {
    $userHome = $env:USERPROFILE
    $targets = @(
        (Join-Path $userHome '.claude\skills'),          # Claude Code
        (Join-Path $userHome '.agents\skills'),          # Codex / Gemini / Antigravity / Cursor
        (Join-Path $userHome '.codex\skills'),           # Codex tooling default (docs say .agents, tools write here)
        (Join-Path $userHome '.gemini\skills'),          # Gemini CLI global
        (Join-Path $userHome '.gemini\config\skills')    # Antigravity global
    )
} else {
    if (-not $ProjectPath) {
        Write-Host "[ERROR] -Scope project requires -ProjectPath" -ForegroundColor Red
        exit 1
    }
    if (-not (Test-Path $ProjectPath)) {
        Write-Host "[ERROR] ProjectPath not found: $ProjectPath" -ForegroundColor Red
        exit 1
    }
    $targets = @(
        (Join-Path $ProjectPath '.claude\skills'),
        (Join-Path $ProjectPath '.agents\skills')
    )
}

Write-Host "===================================================" -ForegroundColor Cyan
Write-Host "  Atelier gen-links -- scope: $Scope"                 -ForegroundColor Cyan
Write-Host "===================================================" -ForegroundColor Cyan
Write-Host "SSOT   : $SkillsSrc"
Write-Host "Skills : $($skillDirs.Name -join ', ')"
Write-Host ""

$created = 0; $skipped = 0; $fixed = 0

foreach ($root in $targets) {
    Write-Host "-> $root"
    if (-not (Test-Path $root)) {
        if ($DryRun) {
            Write-Host "   [dry-run] would create dir $root"
        } else {
            New-Item -ItemType Directory -Force -Path $root | Out-Null
        }
    }
    foreach ($sd in $skillDirs) {
        $link = Join-Path $root $sd.Name
        $src  = $sd.FullName

        if (Test-Path $link) {
            # Is it already a junction to the right place?
            $item = Get-Item $link -Force
            $isLink = ($item.Attributes -band [IO.FileAttributes]::ReparsePoint) -ne 0
            $currentTarget = $null
            if ($isLink) { try { $currentTarget = $item.Target } catch { $currentTarget = $null } }
            if ($isLink -and $currentTarget -and ((Resolve-Path $currentTarget -ErrorAction SilentlyContinue).Path -eq (Resolve-Path $src).Path)) {
                Write-Host "   [ok]   $($sd.Name)"
                $skipped++
                continue
            }
            # Wrong link or a real dir -- for links, replace; for real dirs, warn and skip.
            if ($isLink) {
                if ($DryRun) { Write-Host "   [dry-run] would relink $($sd.Name)" }
                else { cmd /c rmdir "$link" | Out-Null; cmd /c mklink /J "$link" "$src" | Out-Null; Write-Host "   [fix]  $($sd.Name)"; $fixed++ }
            } else {
                Write-Host "   [WARN] $($sd.Name) exists as a real directory -- left untouched" -ForegroundColor Yellow
            }
            continue
        }

        if ($DryRun) {
            Write-Host "   [dry-run] would link $($sd.Name)"
        } else {
            cmd /c mklink /J "$link" "$src" | Out-Null
            Write-Host "   [new]  $($sd.Name)"
            $created++
        }
    }
    Write-Host ""
}

Write-Host "Done. new=$created fixed=$fixed ok=$skipped" -ForegroundColor Green
Write-Host ""
Write-Host "Claude Code: /design , /design-review , /redesign"
Write-Host 'Codex      : $design   Gemini: activate_skill   Antigravity: @design'
if (-not $DryRun -and $Scope -eq 'global') {
    Write-Host ""
    Write-Host "NOTE: junctions are per-machine. Re-run after a new machine / Nextcloud sync." -ForegroundColor Yellow
}
