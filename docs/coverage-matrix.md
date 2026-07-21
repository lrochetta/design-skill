# Coverage matrix — Atelier vs the landscape

What Atelier covers, and where the existing "taste skill" genre stops. ⭐ = differentiation gap
(absent or thin in the skills that only do marketing landing pages).

| Domain | Atelier module | taste-skill / genre | Notes |
|---|---|---|---|
| Design read + dials | `00-brief-read` | ✅ (dials) | Kept; dropped the pseudo-random-Python theatre |
| Decision tree / build-vs-buy | `00-decision-tree` | partial | + rules-as-a-service + taste-as-retrieval |
| Tokens (DTCG) | `10-tokens` | ⭐ rare | Three-tier, W3C DTCG, Style Dictionary |
| Color (OKLCH/APCA) | `11-color` | partial | APCA over WCAG2; rebuild-dark-not-invert; tint neutrals |
| Typography | `12-typography` | ✅ | Anti-Inter, ≤2 families, weight-before-size |
| Spacing/grid | `13-space-grid` | ✅ | 3-step rhythm, container queries, gap-not-space |
| Shape/elevation | `14-shape-elevation` | partial | Concentric radii, box-shadow focus rings |
| Iconography | `15-iconography` | ⭐ **gap** | Single set, SVG-not-font, decorative/labelled a11y |
| Imagery/illustration | `16-imagery` | ⭐ **gap** | Art direction, responsive images, CLS, alt |
| WCAG 2.2 AA | `20-wcag22` | ⭐ **gap** | The 2.2 criteria that bite; manual pass |
| ARIA / APG | `21-aria-apg` | ⭐ **gap** | No-bad-ARIA, headless-lib mandate |
| Keyboard/focus | `22-keyboard-focus` | ⭐ **gap** | Focus trap/restore, roving tabindex, route focus |
| Motion a11y | `23-motion-a11y` | partial | prefers-reduced-motion, vestibular safety |
| Landing/hero | `30-landing` | ✅ (their whole scope) | Compressed to one module |
| Dashboards/dataviz | `31-dashboard-dataviz` | ⭐ **gap** | Density, chart-by-question; pairs with dataviz skill |
| Data tables | `32-data-tables` | ⭐ **gap** | Semantic/ARIA grid, sort/filter/paginate, bulk |
| Forms | `33-forms` | ⭐ **gap** | Validation timing, inline errors, multi-step |
| Auth/onboarding | `34-auth-onboarding` | ⭐ **gap** | Min-fields, 3.3.8 auth, time-to-first-value |
| Empty/loading/error states | `35-states` | ⭐ **gap** | The most-forgotten thing in AI UI |
| Nav/IA/search/palette | `36-nav-ia-search` | ⭐ **gap** | IA, command palette, forgiving search |
| Feedback/overlays | `37-feedback-overlays` | ⭐ **gap** | Toast/modal/popover choice, destructive confirm |
| Mobile/native | `38-mobile-native` | ⭐ **gap** | Touch, safe areas, HIG/Material |
| Email | `39-email` | ⭐ **gap** | Table layout, inlined CSS, blocked images |
| AI-native UI (chat/streaming/agentic) | `3A-ai-native-ui` | ⭐ **gap** | Stop control, provenance, inspectable steps — table-stakes 2026 |
| Commerce/checkout/pricing/paywall | `3B-commerce-checkout` | ⭐ **gap** | No hidden cost, guest checkout, cancel=signup (Baymard) |
| Settings/account/billing | `3C-settings-account` | ⭐ **gap** | Grouped, save model, danger zone, data rights |
| Motion system | `40-motion-system` | partial | Duration/easing tokens, springs, choreography |
| Motion on web | `41-motion-web` | partial | View Transitions, scroll-driven, perf budget |
| UX research/flows | `50-ux-research-flows` | ⭐ **gap** | JTBD, flow mapping, Nielsen heuristics |
| Critique rubric | `51-critique-rubric` | ⭐ rare | Obs→impact→suggestion, severity |
| UX writing | `60-ux-writing` | partial | Action-named buttons, blameless errors |
| i18n/RTL | `61-i18n-rtl` | ⭐ **gap** | Logical props, text expansion, Intl |
| Component libraries | `70-component-libs` | partial | 2026 matrix + llms.txt/MCP; install-the-real-thing |
| CSS 2026 | `71-css-2026` | partial | Tailwind v4, container queries, :has, popover/anchor |
| Frameworks | `72-frameworks` | ⭐ rare | RSC/Suspense states, next/font CLS |
| Design→code handoff/QA | `73-handoff-qa` | ⭐ **gap** | Token parity, states-complete, codegen review — the review spine |
| Pre-flight | `80-preflight` | ✅ | Mechanical A–H gate |
| Anti-defaults | `81-anti-defaults` | ✅ | The good part of the genre, de-folklored |
| Quality gates (CI) | `82-quality-gates` | ⭐ **gap** | axe/Lighthouse/Stylelint/visual-regression, real config |
| Ethics + consent UI | `83-ethics-consent` | ⭐ **gap** | Dark-pattern taxonomy + GDPR/cookie consent symmetry |
| Brand kit | `90-brand-kit` | partial | Brand→tokens, voice, logo suite |
| Presets | `presets/*` | ✅ (as separate skills) | Loadable directions, not separate installs |

## Summary

- **Kept from the genre:** dials, brief-read, anti-defaults, pre-flight, motion justification,
  design-system honesty.
- **Removed as folklore:** em-dash-as-AI-tell hard ban, simulated-Python randomization,
  framework-agnostic pretence.
- **Added (the ⭐ gaps):** the entire accessibility band, all product surfaces beyond landing,
  states, UX process, i18n, and CI quality gates with real tooling.
- **Round 2 (completeness-critic pass, 2026-07-22):** added AI-native UI, commerce/checkout,
  settings/account, iconography, imagery, design→code handoff/QA, and ethics+consent — the gaps
  an adversarial audit flagged against the goal "build/review/redesign *any* interface".

## Declared second-wave (handle opportunistically; named, not silently missing)

design-system governance (contribution/versioning/deprecation) · measurement/analytics/A-B/HEART ·
multi-brand theming at scale (noted in `10`) · notifications channel strategy (rendering covered
in `37`/`39`) · perceived-performance timing psychology (noted in `35`) · spatial/3D/XR ·
sound/haptics · canvas/game UI. If a request centers on one of these, the skill names the limit.
