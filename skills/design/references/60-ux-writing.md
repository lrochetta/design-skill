# 60 — UX writing & microcopy

Words are UI. The best-looking screen fails if the copy is vague, jargon-y, or blames the
user. This module governs every string a user reads.

## Why agents fail here by default

Generic labels ("Submit", "Error"), jargon, blaming copy ("You entered an invalid value"), and
filler marketing voice on functional UI.

## Rules (enforceable)

1. **Buttons name the action, not the mechanism.** "Create account", "Save changes", "Delete
   project" — not "Submit", "OK", "Confirm". The label should complete "I want to ___".
2. **Error messages: what happened + how to fix, no blame.** "We couldn't reach the server.
   Check your connection and retry." Not "Error 500" or "Invalid input". Never blame the user
   ("you failed to..."). Say what to do next (`35`, `33`).
3. **Plain language, user's words.** No internal jargon, no acronyms the user doesn't own.
   Match the domain vocabulary of the audience (`50`).
4. **Concise. Cut every word that isn't working.** Front-load the important word. Users scan;
   they don't read.
5. **Consistent terminology.** One concept, one word, everywhere. Don't call it "project" here
   and "workspace" there. Maintain a tiny term list per product.
6. **Empty states teach and invite** (`35`): say what goes here and the one action to start,
   in a human voice.
7. **Tone matches context.** Functional UI = clear and calm; marketing = more voice; errors =
   never jokey, always helpful. Celebrate small wins without being saccharine.
8. **Punctuation & style discipline.** Sentence case for UI labels (not Title Case everywhere).
   Use real typographic characters: ellipsis `…` (not `...`), proper quotes. Prefer a colon,
   comma, or period over an em dash where a clearer break works — em dashes as *punctuation*
   have better alternatives (Vercel writing guidelines). This is a copy-editing preference, not
   an anti-"AI-tell" superstition; don't over-apply it (it's fine in prose, and never touch it
   in `alt` text or user-generated content).
9. **Numbers, dates, units are localized-ready** (`61`): don't hardcode formats.
10. **Accessibility of copy:** link text describes its destination ("View invoice", not "click
    here"); headings are real headings; labels are real labels (`20`).

## Microcopy checklist by surface

- Buttons: action-named, one primary
- Errors: cause + fix, no blame, next action
- Empty states: what + how to start
- Forms: helpful hints, specific validation (`33`)
- Confirmations: name the consequence (`37`)
- Success: confirm what happened + what's next

## Delivery checklist

- [ ] Buttons name actions; labels sentence case
- [ ] Errors constructive, blameless, actionable
- [ ] Plain user language, consistent terms
- [ ] Concise, scannable, front-loaded
- [ ] Link text describes destination
- [ ] Real typographic characters; punctuation sane, not superstitious
