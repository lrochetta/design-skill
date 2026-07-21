# 73 — Design→code handoff & QA parity

The missing spine of review: does the built thing match the intent, and are tokens actually used?
`design-review` critiques appearance; this module defines the mechanical parity check.

## Why agents fail here by default

They eyeball "looks about right", ship hardcoded values that had a token, leave interaction states
unspecified, and never round-trip the token export.

## Rules (enforceable)

1. **No hardcoded value that has a token.** Every color/space/radius/shadow/type value in shipped
   code that matches a design token MUST reference the token. A matching raw value is a defect,
   caught by lint (`82`) — this is the #1 drift source.
2. **All interaction states specified before "done".** default · hover · focus-visible · active ·
   disabled · loading · error · selected — for every interactive component. A component with only
   a default state is unfinished (`51`, `35`).
3. **Token export round-trips.** If tokens come from Figma Variables / a DTCG source, the export
   (Style Dictionary → CSS vars / Tailwind theme) must be DTCG-valid and reversible — the code
   tokens equal the design tokens, name for name (`10`).
4. **Spacing/type/color come from the scale, verifiably.** Spot-check the build against the scales
   (`11`/`12`/`13`): no off-scale `text-[17px]`, `mt-[13px]`, `#3a3a3a`.
5. **Responsive parity.** The build matches the intended layout at each defined breakpoint, not
   just desktop; check 320px, mobile, tablet, desktop (`13`, `38`).
6. **Component API matches the design's variants.** If the design defines size/variant/state
   options, the coded component exposes them (not a one-off per instance).
7. **Figma/MCP codegen is reviewed, not trusted.** Tools that turn a design into code (Figma Dev
   Mode, MCP codegen) produce a draft — verify tokens, semantics, and a11y before accepting; they
   commonly emit absolute positioning, div-soup, and hardcoded values.
8. **Visual + a11y parity gated** (`82`): visual regression on core screens, axe pass — the
   automated proof that the build matches and stays matching.

## Handoff acceptance protocol

Given a design + an implementation, verify in order:
1. Tokens: no untokenized values that should be tokens (lint + spot-check).
2. States: every interactive element has all its states.
3. Responsive: matches at each breakpoint.
4. A11y: passes the `80` blockers (contrast, keyboard, focus, labels).
5. Visual: matches the design within tolerance (visual regression).
Report deviations as defects with location + the correct token/state.

## Delivery checklist

- [ ] Zero untokenized values that have tokens (lint-enforced)
- [ ] All interaction states specified per component
- [ ] Token export DTCG-valid and round-tripping
- [ ] Responsive parity at each breakpoint
- [ ] Component variants match the design's options
- [ ] Codegen output reviewed for tokens/semantics/a11y
- [ ] Visual + axe parity gated in CI
