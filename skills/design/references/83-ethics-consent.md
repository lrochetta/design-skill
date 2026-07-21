# 83 — Ethics: dark patterns & legal/consent UI

`81-anti-defaults` is about *aesthetic* slop. This is about *ethical and legal* failure — deceptive
patterns and consent UI. Regulators (EU DSA, GDPR/ePrivacy, FTC, and mounting AI-act scope) now
enforce this; for a compliance-adjacent portfolio it is not optional.

## Deceptive-pattern taxonomy — do NOT ship these

Named patterns (deceptive.design / Brignull), each with the rule that prevents it:

1. **Confirmshaming** — guilt-tripping the decline option ("No thanks, I hate saving money").
   → Decline copy is neutral and equal in prominence to accept.
2. **Roach motel / cancellation maze** — easy to get in, hard to get out.
   → Cancel/unsubscribe reachable in ≤ the same click-depth as sign-up/subscribe.
3. **Forced continuity / hidden subscription** — trial silently converts, terms buried.
   → Renewal/trial terms explicit before purchase; reminder before charge (`3B`).
4. **Sneak-into-basket / surprise costs** — items or fees added without clear consent.
   → No cost or item added without an explicit action; total incl. fees before payment (`3B`).
5. **Misdirection / false hierarchy** — the manipulative choice styled as primary, the honest one
   hidden. → Primary styling follows the user's interest, not the business's dark preference.
6. **Nagging** — repeated interruptions to coerce a choice.
   → Ask once; respect "not now"; don't re-prompt on every session.
7. **Obstruction / privacy zuckering** — making the private/decline path deliberately harder.
   → Symmetric effort: opt-out is exactly as easy as opt-in.
8. **Fake urgency/scarcity** — invented countdowns and "only 2 left".
   → Urgency/scarcity claims must be true.

**The master rule:** opt-out MUST be as easy as opt-in; the honest choice MUST NOT be disadvantaged
by design. If a pattern only works because it tricks the user, it's a defect.

## Consent & legal UI (enforceable)

1. **Cookie/consent banner:** "Reject all" present at the **same layer and prominence** as "Accept
   all" (a hidden/greyed reject is non-compliant). No pre-ticked non-essential boxes.
2. **No non-essential cookies/trackers fire before consent.** Consent is opt-in, specific, and
   granular by purpose (GDPR Art. 7 / EDPB 03/2022).
3. **Consent is revocable** via a persistent, findable control (not a one-time gate).
4. **Data-rights flows** (`3C`/`84`-adjacent): access, export, delete, rectify — reachable and
   usable, not buried.
5. **Age gates / sensitive flows** where legally required, honestly implemented.
6. **Plain-language terms:** what data, why, how long, shared with whom — summarized, not only in a
   wall of legalese.

## Note

This module is design-side compliance hygiene, not legal advice. For formal GRC (GDPR, EU AI Act,
DSA) route to the compliance tooling (BMAD+ Shield). Here the job is: the UI must not deceive, and
consent UI must be genuinely free and symmetric.

## Delivery checklist

- [ ] No pattern from the taxonomy present; opt-out as easy as opt-in
- [ ] Decline options neutral, equal prominence, no confirmshaming
- [ ] Cancellation ≤ signup click-depth; renewal terms explicit
- [ ] "Reject all" equal to "Accept all"; no pre-consent tracking; no pre-ticked boxes
- [ ] Consent revocable; data-rights reachable
- [ ] Urgency/scarcity claims are true
