# 3C — Settings, preferences & account

A ubiquitous archetype (profile, security, billing, notifications, data, danger zone) that AI
output routinely dumps as one flat form. It has its own structure and safety rules.

## Why agents fail here by default

One giant undifferentiated settings page, destructive actions with no friction, no confirmation
of saved changes, and preferences that don't persist or explain themselves.

## Rules (enforceable)

1. **Group by concern, navigable.** Profile · Account/security · Notifications · Billing ·
   Team/members · Data & privacy · Danger zone. Sidebar or tabs for anything beyond a few groups
   (`36`); deep-linkable sections.
2. **Save model is explicit and consistent.** Either auto-save with a clear "Saved" confirmation
   per change, or an explicit Save with dirty-state indication and unsaved-changes warning on
   navigation. Never ambiguous about whether a change took.
3. **Security settings get extra care:** password change requires current password; email/2FA
   changes confirm via the existing channel; show active sessions with revoke; recovery codes.
4. **Notification preferences are granular and honest** (`3D`/`37`): per-channel, per-category,
   with a working unsubscribe/opt-out; critical security alerts not suppressible into silence.
5. **Billing surface** (`3B`): current plan, usage, payment method, invoices/history, upgrade/
   downgrade with proration explained, and a non-maze cancellation (`83`).
6. **Danger zone is isolated and high-friction.** Delete account / delete workspace / transfer
   ownership sit in a visually separate destructive section; require type-to-confirm; explain
   consequences and irreversibility; offer export first (`37`, `83`).
7. **Data rights are first-class** (`84`): export my data, delete my account/data, see what's
   stored — reachable, not buried. (GDPR/CCPA obligations.)
8. **Every setting explains itself.** A short description of what a toggle does and its default;
   no cryptic switches. Show current value clearly.

## Delivery checklist

- [ ] Grouped, navigable, deep-linkable sections
- [ ] Explicit consistent save model + "Saved" confirmation / unsaved warning
- [ ] Security changes re-authenticate; sessions revocable
- [ ] Granular honest notification prefs; working opt-out
- [ ] Billing: plan/usage/invoices/cancel without maze
- [ ] Danger zone isolated, type-to-confirm, export-first
- [ ] Data export/delete reachable; settings self-explain
