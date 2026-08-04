# linkbrain (lifecycle capture + configurable transports, default-disabled)

Private bundled OpenClaw Brain adapter. **Default-disabled.** `transportMode` defaults to
`disabled`. Fake is test-only. HTTP/MCP adapters are opt-in and do not require live servers
at plugin start.

This directory does **not** mutate Lisa profile/credentials.

## Status

| Path                                                 | Role                                                                                                     |
| ---------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `fixtures/`                                          | Sanitized JSON contracts (Phase 1; draft pending Brain owner sign-off)                                   |
| `fake/`                                              | Deterministic Node ESM fake: stdio MCP or localhost HTTP                                                 |
| `openclaw.plugin.json` / `package.json` / `index.ts` | Default-disabled plugin packaging (`enabledByDefault: false`, `onStartup: true` when explicitly enabled) |
| `src/`                                               | Outbox runtime, capture batching, §10.1 lifecycle mapping, transport adapters                            |
| `mcp-tool-filter.ts`                                 | Managed MCP §9.1 `toolFilter.include` allowlist (default-deny)                                           |

## Transport modes

| Mode       | Behavior                                                                                                                                                                                           |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disabled` | Default. Drain writes return `transport_disabled` (retryable).                                                                                                                                     |
| `fake`     | Test-only (`environment=test` + injection, or `fakeForTests`). Rejected in stage/production.                                                                                                       |
| `http`     | POST tool calls to `ingestionEndpoint` with SecretRef bearer.                                                                                                                                      |
| `mcp`      | MCP client against `mcp.servers.<mcpServerName>` (default `linkbrain`). Prefer SecretRef Authorization headers; oauth `authProfileId` alone returns `auth_profile_required` until Gateway injects. |

## Frozen Brain write tool names

Lifecycle/outbox delivery uses **only** these frozen OpenClaw §9.1 names:

- `brain_capture_batch`
- `brain_checkpoint_write`
- `brain_task_update`

The Brain Gateway consumed by this plugin **must implement these exact names**. This adapter does
**not** remap to Brain's current shipped aliases (for example `brain_search_knowledge`). Alias
mapping is out of scope and must not be added here.

## Plugin behavior

- Opens only linkbrain namespaces: `outbox`, `deadletter`, `cursor`, `health`, `capture-buffer`
- `overflowPolicy: "reject-new"`
- Independent flags (§12.2): `mcpRead`, `captureEnqueue`, `captureDrain`, `coordinationWrites` (all default **false**)
- Registers plan §10.1 hooks: conversation/data-bearing set gated by `allowConversationAccess===true`; service hooks `gateway_start` / `gateway_stop` always when enabled
- Bounded local capture buffer; flush on batch limits and compaction/reset/end/gateway_stop
- Per-operation `AbortController` bounds independent of host hook timeouts
- Opaque actor/binding/session/task/run/subagent correlations only
- Brain failures degrade honestly — hooks never throw uncaught; native OpenClaw continues

## Conversation access (required for Brain capture/coordination hooks)

Fail-closed: conversation/data-bearing §10.1 hooks register **only** when
`plugins.entries.linkbrain.hooks.allowConversationAccess===true`.

Governed hooks (blocked unless explicitly true):

- `session_start`, `message_received`, `agent_end`
- `before_compaction`, `after_compaction`, `before_reset`, `session_end`
- `subagent_spawned`, `subagent_ended`

Always registerable when the plugin is explicitly enabled (no conversation gate):

- service/worker: `gateway_start`, `gateway_stop`
- outbox service startup

Absent or `false` keeps the plugin able to open state/workers but does **not**
register capture/coordination lifecycle hooks (including `message_received`).

Operators enabling Brain capture/coordination must set:

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

Do not enable against Lisa or a live Brain endpoint from this plugin until activation gates pass.
