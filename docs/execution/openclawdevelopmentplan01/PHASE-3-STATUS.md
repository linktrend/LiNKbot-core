# Phase 3 — Brain Lifecycle Capture Status

**Recorded:** 2026-07-27 19:08 Asia/Taipei
**Capture durability fix:** 2026-07-28 15:35 Asia/Taipei
**Branch:** `issue/ocp-openclawdevelopmentplan01`

## Delivered

| Item                                | Location                                                                         |
| ----------------------------------- | -------------------------------------------------------------------------------- |
| §10.1 hook registration             | `extensions/linkbrain/index.ts`                                                  |
| Capture batching + flush boundaries | `extensions/linkbrain/src/capture.ts`                                            |
| Lifecycle → Brain mapping           | `extensions/linkbrain/src/lifecycle.ts`                                          |
| Opaque correlations                 | `extensions/linkbrain/src/opaque.ts`                                             |
| Secret/CoT/attachment sanitization  | `extensions/linkbrain/src/sanitize.ts`                                           |
| MCP write allowlist                 | `extensions/linkbrain/src/tools.ts` (+ transport enforcement in `runtime.ts`)    |
| Conversation access documentation   | README + index comment + `LINKBRAIN_CONVERSATION_HOOK_REQUIREMENT`               |
| Focused tests                       | `extensions/linkbrain/lifecycle.test.ts`; `extensions/linkbrain/capture.test.ts` |

## Registered hooks

`session_start`, `message_received`, `agent_end`, `before_compaction`, `after_compaction`, `before_reset`, `session_end`, `gateway_start`, `gateway_stop`, `subagent_spawned`, `subagent_ended`

Conversation/data-bearing in this set (fail-closed unless `plugins.entries.linkbrain.hooks.allowConversationAccess===true`): `session_start`, `message_received`, `agent_end`, `before_compaction`, `after_compaction`, `before_reset`, `session_end`, `subagent_spawned`, `subagent_ended`.

Service/worker hooks (`gateway_start`, `gateway_stop`) and outbox startup remain registerable when the plugin is explicitly enabled without that gate.

## Proof

```text
node scripts/run-vitest.mjs extensions/linkbrain/manifest.test.ts \
  extensions/linkbrain/runtime.test.ts \
  extensions/linkbrain/plugin-boundary.test.ts \
  extensions/linkbrain/fake/brain-fake.test.ts \
  extensions/linkbrain/lifecycle.test.ts \
  extensions/linkbrain/capture.test.ts
# tip suite (with Skills/fakes): 21 files / 152 tests
```

Coverage includes: each hook path, duplicate fingerprints, compaction/reset races, secret canaries, native no-throw / queue retained, plugin flags disabled = no capture, allowlist rejection, idempotent coordination via fake.

**Capture durability (2026-07-28):** `enqueue` durable-saves the accepted `CaptureBufferRecord` before `flushRecord` / `enqueueWrite`. Batch-limit flush failures retain the retryable buffer and never claim `flushed: true`.

**Capture concurrency (2026-07-28 wave 4):** same-stream enqueue/flush/flushAll serialized via a bounded keyed promise chain on the opaque stream id (re-load under lock). Failures do not poison the chain. Regression: concurrent enqueues, duplicate fingerprints, enqueue×batch-limit/manual/shutdown flush races, flush-fail+retry, restart, independent streams.

## Explicit non-goals (unchanged)

- No live Brain endpoint
- No Lisa profile mutation
- No Skills plugin work (`extensions/linkskills/**` untouched)
- No live Platform
- Not added to official-external catalog

## Next

- **Phase 4** — Skills plugin skeleton + structured telemetry (no conversation hooks; separate allowlists)
- **Phase 5** — Managed MCP + auth wiring (still gated; no Lisa enablement without Principal gates)
