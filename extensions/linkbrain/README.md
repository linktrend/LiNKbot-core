# linkbrain (Phase 3 — lifecycle capture, default-disabled)

Private bundled OpenClaw Brain adapter. **Default-disabled.** Fake-only until activation gates (fixture owner sign-off, Platform auth, Principal retention).

This directory does **not** talk to live LiNKbrain, Platform, or Lisa profile/credentials.

## Status

| Path                                                 | Role                                                                              |
| ---------------------------------------------------- | --------------------------------------------------------------------------------- |
| `fixtures/`                                          | Sanitized JSON contracts (Phase 1; draft pending Brain owner sign-off)            |
| `fake/`                                              | Deterministic Node ESM fake: stdio MCP or localhost HTTP                          |
| `openclaw.plugin.json` / `package.json` / `index.ts` | Default-disabled plugin packaging (`enabledByDefault: false`, `onStartup: false`) |
| `src/`                                               | Outbox runtime, capture batching, §10.1 lifecycle mapping, allowlist redaction    |
| `mcp-tool-filter.ts`                                 | Phase 5 managed MCP §9.1 `toolFilter.include` allowlist (default-deny)            |

## Plugin behavior (Phase 3)

- Opens only linkbrain namespaces: `outbox`, `deadletter`, `cursor`, `health`, `capture-buffer`
- `overflowPolicy: "reject-new"`
- Independent flags (§12.2): `mcpRead`, `captureEnqueue`, `captureDrain`, `coordinationWrites` (all default **false**)
- Registers plan §10.1 hooks: `session_start`, `message_received`, `agent_end`, `before_compaction`, `after_compaction`, `before_reset`, `session_end`, `gateway_start`, `gateway_stop`, `subagent_spawned`, `subagent_ended`
- Bounded local capture buffer; flush on batch limits and compaction/reset/end/gateway_stop
- Per-operation `AbortController` bounds independent of host hook timeouts
- Opaque actor/binding/session/task/run/subagent correlations only
- Brain MCP write allowlist: `brain_capture_batch`, `brain_checkpoint_write`, `brain_task_update`
- Brain failures degrade honestly — hooks never throw uncaught; native OpenClaw continues

## Conversation access (required for Brain hook features)

`agent_end` is conversation-bearing. Operators enabling Brain capture/coordination must set:

```json
{
  "plugins": {
    "entries": {
      "linkbrain": {
        "enabled": true,
        "hooks": {
          "allowConversationAccess": true
        }
      }
    }
  }
}
```

Constant: `plugins.entries.linkbrain.hooks.allowConversationAccess=true`.

## Privacy exclusions

Never retained in envelopes or remote writes:

- chain-of-thought / reasoning
- system/developer prompt bodies
- secrets, tokens, API keys
- raw/unbounded tool output
- attachments / media / binary

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

Do not enable against Lisa or a live Brain endpoint from this plugin. Phase 5 adds managed MCP + auth. Phase 4 is Skills (separate plugin; no conversation hooks).
