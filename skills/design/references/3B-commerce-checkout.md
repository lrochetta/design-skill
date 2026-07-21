# 3B — Commerce, checkout, pricing, paywall

Revenue-critical surfaces. Small UX failures here cost real money, and the failure modes are
well-documented (Baymard). This is also where dark patterns are most tempting — don't (`83`).

## Why agents fail here by default

Surprise costs at the last step, forced account creation, too many fields, unclear pricing, and
payment forms that fight the user's autofill and keyboard.

## Pricing rules (enforceable)

1. **Pricing is legible and comparable.** Clear tiers, one recommended plan marked, monthly/annual
   toggle with the annual saving shown honestly, what's included per tier without hunting.
2. **No hidden cost.** Show the real price including what the user will actually pay; disclose
   fees/taxes before the payment step, not after (`83` — surprise costs are a dark pattern and,
   increasingly, illegal).
3. **CTA per tier names the action** ("Start free trial", "Choose Pro"), consistent, one primary.

## Checkout rules (enforceable)

1. **Guest checkout allowed.** Never force account creation to buy; offer account *after* purchase.
2. **Total incl. taxes/fees shown before payment entry.** No surprise at the final click. Show a
   persistent order summary.
3. **Minimize fields; use the right ones.** Correct `autocomplete` tokens (`cc-number`, `cc-exp`,
   `cc-csc`, `postal-code`, `email`), `inputmode="numeric"` for card/zip, one column, real-time
   but non-blocking validation (`33`). Detect card type; format as they type.
4. **Progress is visible** for multi-step checkout (cart → info → payment → review), with back
   without data loss and a review step before charging (`33`).
5. **Trust signals at the point of payment:** security indication, accepted methods, clear refund/
   returns, no distracting nav. Reduce anxiety, don't manufacture urgency falsely.
6. **Errors are specific and recoverable** ("Card declined — check the number or try another
   card"), never generic; preserve entered data (`33`, `60`).
7. **Express paths** (Apple/Google Pay, saved cards, one-click) offered above the long form where
   available.

## Paywall / subscription rules (enforceable)

1. **State clearly what's gated and what unlocking gives.** No bait-and-switch.
2. **Cancellation is as easy as signup** and reachable in ≤ the same click-depth (`83`, and law in
   several jurisdictions). No cancellation mazes.
3. **Renewal & trial terms are explicit** before purchase (when it charges, how much, how to stop).
4. **Failed-payment / dunning** flows are humane: warn, retry, grace period, clear recovery.

## Delivery checklist

- [ ] Legible comparable pricing; honest annual saving; no hidden cost
- [ ] Guest checkout; total incl. tax before payment; persistent summary
- [ ] Correct `autocomplete`/`inputmode`; minimal fields; express pay
- [ ] Visible progress, back-without-loss, review step
- [ ] Trust signals; specific recoverable errors; data preserved
- [ ] Cancellation as easy as signup; renewal/trial terms explicit
