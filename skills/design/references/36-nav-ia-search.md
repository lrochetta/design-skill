# 36 — Navigation, IA, search, command palette

## Why agents fail here by default

Flat menus with everything at one level, no active state, search that only matches exact
strings, and no keyboard way to move fast.

## Information architecture (do this before nav)

1. **Group by user task, not by internal org chart or database tables.** Labels are the
   user's words, not yours.
2. **Shallow beats deep.** Prefer breadth over deep nesting; 2–3 levels max for most apps.
3. **One primary nav pattern** per app: top bar (marketing, few sections), sidebar (product,
   many sections), or bottom tabs (mobile). Don't mix metaphors.

## Navigation rules (enforceable)

1. **Always show where I am.** Active nav item has a clear state; breadcrumbs on deep pages;
   `aria-current="page"`.
2. **Sidebar:** logical sections, collapsible, icons + labels (icon-only only if labels appear
   on hover/expand and have `aria-label`). Persist collapsed/expanded.
3. **Consistent placement.** Nav doesn't move between pages. Primary actions live in
   predictable spots.
4. **Nav is keyboard-navigable** with visible focus and a skip link to main (`22`).
5. **Responsive nav** collapses predictably (hamburger/drawer on mobile) without hiding core
   destinations behind two taps unnecessarily.

## Search rules (enforceable)

1. **Forgiving matching:** case-insensitive, fuzzy/typo-tolerant, matches partial and
   synonyms where feasible. Exact-only search feels broken.
2. **Instant feedback:** results as you type (debounced), with a loading and a no-results
   state (`35`). Show what was searched.
3. **Scope is clear:** what does this search cover? Show filters/scopes if relevant.
4. **Keyboard:** arrow through results, Enter to open, Esc to close; results are a listbox
   (`21`).

## Command palette (Cmd/Ctrl-K)

For any app with more than a handful of actions, add a command palette:
- Global shortcut (⌘K / Ctrl-K), discoverable (show the hint).
- Fuzzy search over navigation + actions + recent items.
- Grouped results, keyboard-first, Esc to close, shows shortcuts for actions.
- It's a productivity multiplier for power users and a great a11y affordance.

## Delivery checklist

- [ ] IA grouped by task, shallow, user-language labels
- [ ] Active state + breadcrumbs + `aria-current`
- [ ] One nav pattern, consistent placement, keyboard + skip link
- [ ] Forgiving instant search with loading/no-results
- [ ] Command palette for action-rich apps
