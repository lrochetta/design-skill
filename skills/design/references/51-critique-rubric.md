# 51 — Design critique rubric

A structured lens for reviewing a design (yours or existing) — used by the `design-review`
skill and the `80-preflight.md` gate. Critique is about the work against goals, never about
taste-as-opinion.

## How to critique (protocol)

1. **State the goal first.** What is this screen for, who for, what job? (`00-brief-read.md`)
   You cannot critique against nothing.
2. **Go objective before subjective.** Run the mechanical checks (contrast, targets, a11y,
   states, tokens) before any aesthetic judgment. Most "it feels off" is a mechanical miss.
3. **Separate observation → impact → suggestion.** "The primary CTA and the secondary are the
   same weight (obs) → users can't tell the main action (impact) → make secondary a ghost
   button (suggestion)." Never just "change this".
4. **Prioritize by severity.** Blocker (a11y fail, broken flow) > major (confusing hierarchy) >
   minor (polish). Fix in that order.

## The rubric (score each, note failures)

| Dimension | Checks |
|---|---|
| **Goal fit** | Does the screen accomplish its one job? Is the primary action obvious? |
| **Hierarchy** | Is the most important thing the most prominent? Weight/color/size used right? (`12`) |
| **Accessibility** | Contrast, targets, keyboard, focus, labels, reduced-motion (`20`–`23`) — blockers |
| **States** | Empty / loading / error / no-results all designed? (`35`) |
| **Consistency** | Tokens used, no ad-hoc values, matches the system? (`10`, `82`) |
| **Layout & rhythm** | Grid, spacing scale, alignment, density fits surface? (`13`) |
| **Color & type** | OKLCH tokens, ≤2 fonts, ≤5 colors, no Inter-by-default? (`11`, `12`) |
| **Motion** | Justified, tokenized, reduced-motion safe? (`40`, `23`) |
| **Content** | Copy clear, errors constructive, labels in user language? (`60`) |
| **Anti-defaults** | Any AI tells present? (`81-anti-defaults.md`) |
| **Responsive** | Works at 320px, touch targets, mobile keyboard? (`38`) |

## Output format

Findings list, most-severe first, each: `[severity] file:location — observation → impact →
suggestion`. Distinguish blockers (must fix) from improvements (should). End with the 3 things
that would most improve the design.

## Anti-patterns in critique itself

- Don't rewrite to your personal taste — critique against the goal and the rules.
- Don't bury a blocker under nitpicks — lead with severity.
- Don't say "make it pop" — name the mechanical change.
