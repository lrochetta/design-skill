# 34 — Auth & onboarding

First impressions and the highest-friction moment. Every extra field costs conversions; every
unclear error costs trust.

## Why agents fail here by default

Too many fields up front, no password-reveal, confusing error states, onboarding that dumps a
tour instead of getting to a first win, and no empty-first-run state.

## Auth rules (enforceable)

1. **Minimum fields to enter.** Email + password (or a single email/OTP, or SSO) — collect the
   rest later. Every field on the signup screen is a conversion tax.
2. **Offer SSO / passkeys** where relevant, above the email form, clearly separated ("or").
3. **Password field: reveal toggle, allow paste, no forced composition puzzles.** WCAG 2.2
   Accessible Authentication (3.3.8): don't block password managers or paste; avoid cognitive
   puzzles as the only method.
4. **Show requirements before/while typing**, validate on blur, and confirm strength
   constructively — not "invalid" after submit.
5. **Login errors are honest but safe:** "Email or password is incorrect" (don't leak which);
   distinguish that from "account locked" / "verify your email" which need different actions.
6. **Forgot-password is one click from login**, and the flow confirms "check your email" even
   if the address doesn't exist (no account enumeration).
7. **Verification & 2FA** flows: paste-able OTP (`autocomplete="one-time-code"`), clear resend
   with cooldown, obvious "wrong number/email? go back".
8. **Return focus and next step after auth** — land the user somewhere useful, not a blank app.

## Onboarding rules (enforceable)

1. **Time-to-first-value is the metric.** Get the user to one real win fast; defer setup you
   don't need yet. Don't gate the app behind a long wizard.
2. **Progressive disclosure over a grand tour.** Teach in context, when a feature is first
   touched, not all at once. Tours are skippable and short.
3. **Empty states do onboarding work** (`35`): a first-run empty screen with one clear CTA
   ("Create your first project") teaches more than a modal.
4. **Show progress for setup** (checklist / stepper) and let users skip and return. Persist it.
5. **Ask for permissions/notifications in context**, with a reason, at the moment they matter —
   never a wall of prompts on first load.
6. **Sample/demo data** can replace the cold-start emptiness for exploration, clearly labeled
   and removable.

## Delivery checklist

- [ ] Signup asks the minimum; SSO/passkey offered
- [ ] Password reveal + paste allowed; no auth puzzles (3.3.8)
- [ ] Honest, safe login errors; no account enumeration
- [ ] Forgot-password one click; OTP paste-able
- [ ] Onboarding drives to a first win fast; disclosure in context
- [ ] First-run empty state with one CTA; setup progress persisted
- [ ] Permissions requested in context with a reason
