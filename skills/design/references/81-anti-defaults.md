# 81 — Anti-defaults (the AI-slop tells)

The good part of the taste-skill genre: a named list of the specific patterns that mark UI as
machine-generated. This is a **blocklist**, scanned at pre-flight (`80`). Naming the tell beats
"be original" — you can check for a named thing.

## Layout / structure tells

- **Centered hero at high VARIANCE.** The default centered stack reads as templated. Break to
  asymmetric unless VARIANCE is deliberately low (`30`).
- **Three equal feature cards.** The single most recognizable AI shape. Vary weight: hero
  feature + supporting, bento, alternating rows (`30`).
- **Everything full-width, no max-width.** Body text spanning 1600px; no readable measure (`12`).
- **Uniform section padding used as "breathing".** Space should build hierarchy, not pad
  uniformly (`13`).
- **Eyebrow micro-label on every section.** Max one per ~3 sections (`13`).
- **Symmetric everything** — perfect 50/50 splits, dead-centered, no tension. Even calm designs
  have a focal point.

## Color tells

- **Default Tailwind palette raw** (`bg-blue-500`, `text-gray-400`) instead of a considered
  OKLCH token set (`11`).
- **Gradient-everywhere** (purple→pink hero gradients, gradient text, gradient buttons) as a
  substitute for a real palette. Avoid gradients unless the brief asks (v0). 
- **Purple/violet as the default brand hue.** The unconsidered "AI startup" color. Choose from
  the brief, not by default (v0).
- **Dead-gray neutrals** with zero hue tint (`11`, `14`).
- **>5 colors** with no system, or every semantic state a different random hue (`11`).
- **The reused "premium" palette** (warm beige + brass + oxblood, or the same dark-glass look)
  applied to every project. Don't carry a house look across briefs — derive per brief
  (taste-as-retrieval, `00-decision-tree.md`).

## Typography tells

- **Inter (or Geist) by default**, unconsidered, on every project (`12`).
- **Serif to look "premium"** on a non-editorial product (`12`).
- **One weight, size-only hierarchy** — everything big (`12`).
- **Three+ font families** (`12`).

## Component / imagery tells

- **Div-art fake product shots** — browser chrome, dashboards, or phones built from divs (`30`).
- **Decorative blob SVGs / floating gradient orbs** as filler background (`30`).
- **Placeholder / atmospheric stock filler** images that say nothing.
- **Glassmorphism everywhere** as a substitute for hierarchy.
- **Emoji as UI icons** in a serious product (use a real icon set: Lucide, etc.).
- **`shadow-2xl` on everything**, heavy borders, `rounded-3xl` maximalism (`14`).

## Motion tells

- **Everything fades/slides in on scroll** — unjustified, uniform, often janky (`40`).
- **Autoplay carousels**, parallax for its own sake, no reduced-motion path (`23`).

## Content tells

- **"Submit" / "OK" buttons** instead of named actions (`60`).
- **"Trusted by thousands"** vague social proof; lorem-ipsum left in.
- **Em dashes used as an "AI tell" superstition** — note this is itself folklore in its
  totalizing form. The grounded rule is a copy-editing preference (prefer colon/comma where
  clearer), not a hard ban, and never touch em dashes in `alt` text or user content (`60`).

## How to use

At pre-flight, scan the built UI against this list. Any hit is a finding: either justify it
(low-VARIANCE brief genuinely wants a centered hero) or fix it. The goal is not novelty for its
own sake — it's the *absence of unconsidered defaults*. A considered centered hero is fine; a
defaulted one is the tell.
