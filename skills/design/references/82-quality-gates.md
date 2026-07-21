# 82 — Quality gates (automate the checkable)

Taste enforcement is a bottleneck: an agent generates faster than a human reviews. Move the
mechanical checks into CI so review focuses on judgment. Everything here is real tooling with
real config. Versions are mid-2026 — verify before pinning.

## 1. Accessibility in CI (axe-core)

- **axe-core 4.12** (MPL-2.0) is the engine — ~100 active rules, catches **~57% of issues by
  volume** (Deque, 2021). Necessary, never sufficient; keep the manual pass (`20`).
- **Playwright:** `@axe-core/playwright` — the canonical gate:
  ```js
  const results = await new AxeBuilder({ page })
    .withTags(['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa'])
    .analyze();
  expect(results.violations).toEqual([]);
  ```
  `waitFor()` the page into its state before `analyze()` (color-contrast is render-dependent →
  flaky otherwise). For a baseline of known issues, snapshot violation **fingerprints**
  (`{rule, targets}`), not the whole array.
- **Gate by impact:** filter to `serious` + `critical` to start, ratchet to zero.
- **Component tests:** Storybook `@storybook/addon-a11y` with `parameters.a11y.test: 'error'`
  (`'todo'` only warns, **produces no CI failure**) run via `@storybook/addon-vitest`. Note it
  disables the `region` rule for isolated components — page-level rules still need a full-page
  axe run.
- Unit: `jest-axe` / `vitest-axe` (`toHaveNoViolations`). Cypress: `cypress-axe`.
- **Real-world context** (why this matters): WebAIM Million 2026 found **95.9%** of home pages
  had detectable WCAG failures, avg **56 errors/page**; low-contrast (83.9%) and missing alt/
  labels dominate. Pages with ARIA averaged **~40% more** errors — reinforcing "no ARIA beats
  bad ARIA" (`21`).

## 2. Lighthouse / Core Web Vitals

- **Lighthouse 13** accessibility score = weighted average of binary axe-based audits (ARIA +
  names/labels ≈ 65% of the category; `color-contrast` weight 7). **100 ≠ accessible** — it's a
  subset. Use as a floor, not proof.
- **CI:** `@lhci/cli` assertions:
  ```jsonc
  { "ci": { "assert": { "assertions": {
    "categories:accessibility": ["error", { "minScore": 0.9 }],
    "resource-summary:font:count": ["error", { "maxNumericValue": 2 }]
  }}}}
  ```
  Levels `off|warn|error`. Note LHCI bundles an older LH; font-perf audit id migrated
  `font-display` → `font-display-insight`. Budgets left LH core in v12 — use LHCI's
  `assert.budgetsFile` (KB in the budget file, **bytes** in inline `resource-summary:*`).
- **CWV targets** (design constraints): LCP ≤2.5s, INP ≤200ms, **CLS ≤0.1**. Font swaps and
  unsized images count toward CLS (`71`).
- Alternatives: **pa11y-ci** (`standard: WCAG2AA`, `threshold` per-URL, runners htmlcs+axe),
  **Unlighthouse** (site-wide).

## 3. Design-token / drift linting (no raw values)

There is **no generic "design-tokens" lint plugin** in 2026 — assemble it:

- **Stylelint 17** + `stylelint-config-standard`:
  - `color-no-hex` + `color-named: "never"` — ban raw colors.
  - `scale-unlimited/declaration-strict-value` (`stylelint-declaration-strict-value`) — **force
    values to come from tokens/`var()`** for chosen properties (color, spacing, etc.). This is
    the token-enforcement workhorse. Options: `ignoreValues`, `ignoreFunctions`, `expandShorthand`.
  - `@csstools/stylelint-value-no-unknown-custom-properties` — catch typo'd/undefined tokens.
  - `unit-allowed-list` — restrict units.
- **Tailwind:** `eslint-plugin-better-tailwindcss` (recommended over the older
  `eslint-plugin-tailwindcss`) — class order, unknown/conflicting/deprecated classes; +
  `prettier-plugin-tailwindcss` for order. `@eslint/css` can lint CSS but **cannot** enforce
  tokens or ban hex.
- **JSX inline styles / hex:** ESLint `no-restricted-syntax` custom rule or a regex grep
  backstop — no maintained ready-made plugin exists.
- Emit tokens with **Style Dictionary 5.x** from **DTCG** source (`10`); Figma **"Check designs"**
  (GA 2026-06) flags hardcoded color/text/radius/spacing at the design end.

## 4. Visual regression (catch unintended visual change)

- **Playwright `toHaveScreenshot()`** (free, in-repo baselines): `animations: 'disabled'`
  (default) + `caret: 'hide'` + `reducedMotion: 'reduce'` context for determinism; `maxDiffPixelRatio`
  / `threshold` (YIQ, default 0.2) to tune; `--update-snapshots` to refresh. Use `page.clock` to
  freeze time-based UI.
- **Chromatic** (Storybook, hosted): `diffThreshold` (0.063 default), auto-pauses animations,
  TurboSnap (`--only-changed`) to bill only changed stories. Free 5k snapshots/mo.
- **Argos** (open-core, Playwright/Storybook): `stabilize` on by default (pauses gifs, hides
  carets, waits for fonts/images). Free 5k/mo.
- Avoid dead tools: **Lost Pixel** (repo archived 2026-04), **Wraith** (archived), **BackstopJS**
  (stale). **Percy** alive (BrowserStack). **reg-suit** alive (self-host + S3/GCS).
- Determinism is the whole game: disable animations, hide carets, force reduced-motion, wait for
  fonts/images, freeze the clock — or every run is a false positive.

## 5. Component-usage / DS adoption

- **Omlet** (`@omlet/cli`) or `react-scanner` to measure which design-system components are used
  vs bespoke — surfaces drift (teams re-styling instead of composing, `70`).

## Recommended minimum gate (any serious project)

- [ ] `@axe-core/playwright` on key flows, gate serious+critical → zero
- [ ] Storybook addon-a11y `test: 'error'` on components
- [ ] LHCI `categories:accessibility ≥ 0.9`, CWV budget (CLS ≤0.1)
- [ ] Stylelint `color-no-hex` + `declaration-strict-value` (no raw values)
- [ ] `better-tailwindcss` for class hygiene
- [ ] Visual regression (Playwright/Chromatic/Argos) on core screens, deterministic config
