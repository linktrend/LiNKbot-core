# Module: extensions/imessage/src/monitor

[← Back to INDEX](../../INDEX.md)

**Type:** implicit | **Files:** 59

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `extensions/imessage/src/monitor/abort-handler.ts` | 35 |  |
| `extensions/imessage/src/monitor/cache-lifecycle.test.ts` | 5 |  |
| `extensions/imessage/src/monitor/catchup-bridge.test-support.ts` | 450 |  |
| `extensions/imessage/src/monitor/catchup-bridge.ts` | 297 |  |
| `extensions/imessage/src/monitor/catchup.test-support.ts` | 549 | 📊 |
| `extensions/imessage/src/monitor/catchup.ts` | 558 | 📊 |
| `extensions/imessage/src/monitor/coalesce.test-support.ts` | 240 |  |
| `extensions/imessage/src/monitor/coalesce.ts` | 204 |  |
| `extensions/imessage/src/monitor/conversation-repair.test-support.ts` | 472 |  |
| `extensions/imessage/src/monitor/conversation-repair.ts` | 264 |  |
| `extensions/imessage/src/monitor/deliver.runtime.ts` | 4 |  |
| `extensions/imessage/src/monitor/deliver.test.ts` | 250 |  |
| `extensions/imessage/src/monitor/deliver.ts` | 93 |  |
| `extensions/imessage/src/monitor/dm-history.test-support.ts` | 103 |  |
| `extensions/imessage/src/monitor/dm-history.ts` | 167 |  |
| `extensions/imessage/src/monitor/drop-diagnostic-cache.test.ts` | 18 |  |
| `extensions/imessage/src/monitor/drop-diagnostic-cache.ts` | 11 |  |
| `extensions/imessage/src/monitor/echo-cache.ts` | 146 |  |
| `extensions/imessage/src/monitor/echo-text-corruption.ts` | 19 |  |
| `extensions/imessage/src/monitor/group-allowlist-warnings.test-support.ts` | 167 |  |
| `extensions/imessage/src/monitor/group-allowlist-warnings.ts` | 82 |  |
| `extensions/imessage/src/monitor/inbound-dedupe.test-support.ts` | 44 |  |
| `extensions/imessage/src/monitor/inbound-dedupe.ts` | 42 |  |
| `extensions/imessage/src/monitor/inbound-processing.systemPrompt.test-support.ts` | 265 |  |
| `extensions/imessage/src/monitor/inbound-processing.test.ts` | 1089 | 📊 |
| `extensions/imessage/src/monitor/inbound-processing.ts` | 1119 | 📊 |
| `extensions/imessage/src/monitor/ingress.test.ts` | 420 |  |
| `extensions/imessage/src/monitor/ingress.ts` | 345 |  |
| `extensions/imessage/src/monitor/loop-rate-limiter.test-support.ts` | 51 |  |
| `extensions/imessage/src/monitor/loop-rate-limiter.ts` | 69 |  |
| `extensions/imessage/src/monitor/media-staging.test-utils.ts` | 133 |  |
| `extensions/imessage/src/monitor/media-staging.ts` | 179 |  |
| `extensions/imessage/src/monitor/monitor-provider.echo-cache.test-support.ts` | 225 |  |
| `extensions/imessage/src/monitor/monitor-provider.ts` | 1778 | 📊 |
| `extensions/imessage/src/monitor/parse-notification.test-support.ts` | 126 |  |
| `extensions/imessage/src/monitor/parse-notification.ts` | 106 |  |
| `extensions/imessage/src/monitor/persisted-echo-cache.ts` | 191 |  |
| `extensions/imessage/src/monitor/poll-comment.test-support.ts` | 76 |  |
| `extensions/imessage/src/monitor/poll-comment.ts` | 90 |  |
| `extensions/imessage/src/monitor/poll-render.test-support.ts` | 55 |  |
| `extensions/imessage/src/monitor/poll-render.ts` | 52 |  |
| `extensions/imessage/src/monitor/reaction-context.ts` | 106 |  |
| `extensions/imessage/src/monitor/reaction-system-event.test.ts` | 46 |  |
| `extensions/imessage/src/monitor/reaction-system-event.ts` | 37 |  |
| `extensions/imessage/src/monitor/recovery-cursor.test-support.ts` | 164 |  |
| `extensions/imessage/src/monitor/recovery-cursor.ts` | 190 |  |
| `extensions/imessage/src/monitor/reflection-guard.test-support.ts` | 133 |  |
| `extensions/imessage/src/monitor/reflection-guard.ts` | 66 |  |
| `extensions/imessage/src/monitor/runtime.ts` | 12 |  |
| `extensions/imessage/src/monitor/sanitize-outbound.test-support.ts` | 74 |  |
| `extensions/imessage/src/monitor/sanitize-outbound.ts` | 34 |  |
| `extensions/imessage/src/monitor/self-chat-cache.test-support.ts` | 187 |  |
| `extensions/imessage/src/monitor/self-chat-cache.ts` | 174 |  |
| `extensions/imessage/src/monitor/self-chat-dedupe.test.ts` | 1025 | 📊 |
| `extensions/imessage/src/monitor/strip-imsg-length-prefixed-text.test-support.ts` | 44 |  |
| `extensions/imessage/src/monitor/strip-imsg-length-prefixed-text.ts` | 64 |  |
| `extensions/imessage/src/monitor/types.ts` | 88 |  |
| `extensions/imessage/src/monitor/watch-error-log.test-support.ts` | 31 |  |
| `extensions/imessage/src/monitor/watch-error-log.ts` | 37 |  |

## Documentation

- [outline.md](outline.md) - Symbol maps for large files
- [imports.md](imports.md) - Dependencies

---

| High 🔴 | Medium 🟡 | Low 🟢 |
| 1 | 1 | 0 |

## 🔴 High Priority

### `WARNING` (extensions/imessage/src/monitor/monitor-provider.ts:477)

> fires only for configs where every group message actually drops.

## 🟡 Medium Priority

### `FIXME` (extensions/imessage/src/monitor/self-chat-dedupe.test.ts:197)

> Before fix, this was "drop" reason "echo" — user message silently lost.
