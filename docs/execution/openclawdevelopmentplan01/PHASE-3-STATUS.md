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

Conversation-bearing in this set: `agent_end` → requires `plugins.entries.linkbrain.hooks.allowConversationAccess=true`.

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

**Capture durability (2026-07-28):** `enqueue` durable-saves the accepted `CaptureBufferRecord` before `flushRecord` / `enqueueWrite`. Batch-limit flush failures (enqueue error, outbox overflow reject-new, shutdown) retain the retryable buffer and never claim `flushed: true`. Regression: `capture.test.ts` (enqueue failure, overflow, shutdown, restart, retry, duplicate, successful drain, Brain-isolate).

## Explicit non-goals (unchanged)

- No live Brain endpoint
- No Lisa profile mutation
- No Skills plugin work (`extensions/linkskills/**` untouched)
- No live Platform
- Not added to official-external catalog

## Next

- **Phase 4** — Skills plugin skeleton + structured telemetry (no conversation hooks; separate allowlists)
- **Phase 5** — Managed MCP + auth wiring (still gated; no Lisa enablement without Principal gates)
