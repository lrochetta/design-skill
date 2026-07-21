# 3A — AI-native UI (chat, streaming, agentic, generative)

The defining new surface class of 2026. A corpus that claims "any interface" must cover it. This
is where product design and LLM behavior meet — and where trust is won or lost.

## Why agents fail here by default

They render a chat as a plain message list, hide what the model is doing behind one opaque
spinner, present generated content as fact with no provenance, and give no way to stop, edit, or
correct. All fixable, all mechanical.

## Rules (enforceable)

1. **Streaming responses always expose a visible Stop control** while generating. A user must be
   able to interrupt a long/wrong generation at any time. Show that generation is in progress
   (token stream or a clear "thinking" state), not a frozen screen.
2. **Provenance is mandatory for factual claims.** Anything presented as fact surfaces a citation
   / source, or an explicit "unverified / AI-generated" affordance. Never present model output as
   authoritative without a signal of its epistemic status.
3. **Agent/tool steps are individually inspectable.** When the system runs tools or multi-step
   reasoning, each step is expandable (what it did, inputs/outputs), not collapsed into one
   spinner. Users trust what they can inspect.
4. **Every AI action is correctable.** Regenerate, edit-and-resend, stop, copy, and (where
   relevant) thumbs-up/down. Reversibility and steering are the core affordances.
5. **Latency & uncertainty are designed, not hidden.** Show streaming progress; distinguish
   "thinking" from "calling a tool" from "writing"; communicate confidence/uncertainty where the
   model exposes it. Perceived speed matters as much as real speed (see perceived-performance note
   in `35-states.md`).
6. **Input affordances teach capability.** Suggest example prompts / actions on the empty state
   (`35`); show what the AI can do; support attachments/context where relevant; make the send +
   stop + keyboard (Enter/Shift-Enter) behavior obvious.
7. **Message surface is scannable.** Distinguish user vs assistant clearly; render markdown/code
   with copy buttons; keep long outputs navigable (collapse, jump-to). Preserve conversation
   state and scroll position.
8. **Safety & errors are graceful.** Rate limits, refusals, tool failures, and content warnings
   are explained plainly with a next action (`60`) — not a dead end or a raw error.
9. **Generative canvases / artifacts** (the model produces a document, chart, UI): make it
   editable, versioned, and clearly separated from the conversation; let the user diff/revert.
10. **Accessibility applies fully.** Streaming text is announced sensibly via `aria-live`
    (`polite`, not spamming every token); controls are keyboard-operable; focus is managed as
    messages arrive (`20`–`22`).

## States this surface must handle (`35`)

empty (first prompt suggestions) · streaming (with stop) · tool-running (inspectable steps) ·
error/refusal/rate-limit (with next action) · long-output (navigable) · offline/interrupted.

## Delivery checklist

- [ ] Visible Stop during streaming; progress shown
- [ ] Citations / "unverified" affordance on factual claims
- [ ] Tool/agent steps individually inspectable
- [ ] Regenerate / edit / copy / feedback present
- [ ] Latency + uncertainty designed; `aria-live` sane
- [ ] Empty state suggests capability; input affordances clear
- [ ] Errors/refusals explained with a next action
- [ ] Generative artifacts editable + versioned
