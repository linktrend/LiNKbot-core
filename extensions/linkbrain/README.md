# linkbrain (Phase 2 — default-disabled plugin skeleton)

Private bundled OpenClaw Brain adapter. **Default-disabled.** Fake-only until activation gates (fixture owner sign-off, Platform auth, Principal retention).

This directory does **not** talk to live LiNKbrain, Platform, or Lisa profile/credentials.

## Status

| Path                                                 | Role                                                                              |
| ---------------------------------------------------- | --------------------------------------------------------------------------------- |
| `fixtures/`                                          | Sanitized JSON contracts (Phase 1; draft pending Brain owner sign-off)            |
| `fake/`                                              | Deterministic Node ESM fake: stdio MCP or localhost HTTP                          |
| `openclaw.plugin.json` / `package.json` / `index.ts` | Default-disabled plugin packaging (`enabledByDefault: false`, `onStartup: false`) |
| `src/`                                               | Keyed-store outbox runtime, allowlist redaction, diagnostics                      |

## Plugin behavior (Phase 2)

- Opens only linkbrain namespaces: `outbox`, `deadletter`, `cursor`, `health`, `capture-buffer`
- `overflowPolicy: "reject-new"`
- Independent flags (§12.2): `mcpRead`, `captureEnqueue`, `captureDrain`, `coordinationWrites` (all default **false**)
- Enqueue / lease / drain / retry / dead-letter / health / shutdown against the Brain **fake**
- Diagnostics expose capacity and oldest age **without payloads**

## Privacy

- Typed internal envelopes with allowlist redaction (prohibited fields stripped)
- Conversation-bearing hooks are **not** registered in Phase 2
- When Phase 3 enables those hooks, operators must set `plugins.entries.linkbrain.hooks.allowConversationAccess=true`

## Fake usage

```bash
node extensions/linkbrain/fake/server.mjs --http
node extensions/linkbrain/fake/server.mjs --stdio
```

Shared test entry: `test/helpers/link-domain-fakes/brain-fake.ts`.

## Focused tests

```bash
node scripts/run-vitest.mjs extensions/linkbrain/**/*.test.ts
```

## Not live proof

Do not enable against Lisa or a live Brain endpoint from this skeleton. Phase 3 adds lifecycle capture mapping; Phase 5 adds managed MCP + auth.
