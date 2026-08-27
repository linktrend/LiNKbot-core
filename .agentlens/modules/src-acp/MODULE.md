# Module: src/acp

[← Back to INDEX](../../INDEX.md)

**Type:** implicit | **Files:** 57

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `src/acp/approval-classifier.test.ts` | 236 |  |
| `src/acp/approval-classifier.ts` | 245 |  |
| `src/acp/client-helpers.ts` | 239 |  |
| `src/acp/client.test.ts` | 1024 | 📊 |
| `src/acp/client.ts` | 238 |  |
| `src/acp/commands.test.ts` | 10 |  |
| `src/acp/commands.ts` | 57 |  |
| `src/acp/conversation-id.ts` | 10 |  |
| `src/acp/event-ledger.test.ts` | 423 |  |
| `src/acp/event-ledger.ts` | 819 | 📊 |
| `src/acp/event-mapper.test.ts` | 30 |  |
| `src/acp/event-mapper.ts` | 413 |  |
| `src/acp/permission-relay.test.ts` | 142 |  |
| `src/acp/permission-relay.ts` | 168 |  |
| `src/acp/persistent-bindings.lifecycle.test.ts` | 174 |  |
| `src/acp/persistent-bindings.lifecycle.ts` | 138 |  |
| `src/acp/persistent-bindings.resolve.ts` | 33 |  |
| `src/acp/persistent-bindings.test.ts` | 820 | 📊 |
| `src/acp/persistent-bindings.types.ts` | 176 |  |
| `src/acp/policy.test.ts` | 85 |  |
| `src/acp/policy.ts` | 81 |  |
| `src/acp/protocol-schema.test.ts` | 149 |  |
| `src/acp/secret-file.test.ts` | 20 |  |
| `src/acp/secret-file.ts` | 12 |  |
| `src/acp/server.startup.test.ts` | 803 | 📊 |
| `src/acp/server.ts` | 428 |  |
| `src/acp/session-mapper.test.ts` | 57 |  |
| `src/acp/session-mapper.ts` | 102 |  |
| `src/acp/tool-status.ts` | 20 |  |
| `src/acp/translator.bridge-test-helpers.ts` | 180 |  |
| `src/acp/translator.cancel-scoping.test.ts` | 330 |  |
| `src/acp/translator.error-kind.test.ts` | 60 |  |
| `src/acp/translator.event-ledger.test.ts` | 400 |  |
| `src/acp/translator.final-snapshots.test.ts` | 153 |  |
| `src/acp/translator.lifecycle.test.ts` | 527 | 📊 |
| `src/acp/translator.permission-relay.test.ts` | 476 |  |
| `src/acp/translator.presentation.ts` | 258 |  |
| `src/acp/translator.prompt-harness.test-support.ts` | 101 |  |
| `src/acp/translator.prompt-prefix.test.ts` | 172 |  |
| `src/acp/translator.prompt-size.test.ts` | 23 |  |
| `src/acp/translator.replay.test.ts` | 40 |  |
| `src/acp/translator.replay.ts` | 63 |  |
| `src/acp/translator.session-config.test.ts` | 463 |  |
| `src/acp/translator.session-lineage-meta.test.ts` | 222 |  |
| `src/acp/translator.session-list.test.ts` | 57 |  |
| `src/acp/translator.session-list.ts` | 82 |  |
| `src/acp/translator.session-rate-limit.test.ts` | 72 |  |
| `src/acp/translator.session-setup.test.ts` | 282 |  |
| `src/acp/translator.session-snapshot.test.ts` | 147 |  |
| `src/acp/translator.session-updates.test.ts` | 208 |  |
| `src/acp/translator.session-updates.ts` | 248 |  |
| `src/acp/translator.set-session-mode.test.ts` | 93 |  |
| `src/acp/translator.stop-reason.test.ts` | 855 | 📊 |
| `src/acp/translator.test-helpers.ts` | 35 |  |
| `src/acp/translator.tool-streaming.test.ts` | 127 |  |
| `src/acp/translator.ts` | 1793 | 📊 |
| `src/acp/types.ts` | 10 |  |

## Child Modules

- [src-acp-control-plane](../src-acp-control-plane/MODULE.md)
- [src-acp-runtime](../src-acp-runtime/MODULE.md)

## Documentation

- [outline.md](outline.md) - Symbol maps for large files
- [imports.md](imports.md) - Dependencies

---

| High 🔴 | Medium 🟡 | Low 🟢 |
| 1 | 0 | 0 |

## 🔴 High Priority

### `RULE` (src/acp/policy.ts:1)

> gates for ACP availability, dispatch, and allowed agent ids. */
