# Workflow — token-setup

Establish a design-token system for a project (new or normalizing an ad-hoc one). Callable as
`/token-setup`.

## Steps

1. **Source the inputs**: brand palette + typefaces if a brand exists (`90`); else derive from
   the brief (`00-brief-read.md`, `11-color.md`, `12-typography.md`).

2. **Build the color system** (`11`): OKLCH primitives (brand hue + tinted neutral scale +
   functional states), then semantic tokens (`--background`, `--foreground`, `--primary`,
   `--muted-foreground`, `--border`, `--ring`, `--destructive`…). Rebuild — don't invert — the
   dark scale. Verify every pair against APCA + WCAG AA.

3. **Define the other scales** (`12`/`13`/`14`/`40`): type scale + families, 4px spacing scale,
   radius scale, elevation levels, motion durations/easings.

4. **Structure as DTCG** (`10`): three tiers (primitive → semantic → component). Components bind
   only to semantic tokens.

5. **Emit**: Style Dictionary 5.x → CSS variables (+ Tailwind v4 `@theme` if used). Both themes.

6. **Enforce** (`82`): Stylelint `color-no-hex` + `declaration-strict-value` so raw values fail
   CI; document the token names for the team.

## Success criteria

DTCG source of truth; three tiers; OKLCH; dark = separate token set; all pairs contrast-pass;
emitted as CSS vars; lint blocks raw values.
