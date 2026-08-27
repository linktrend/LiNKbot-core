# Module: extensions/zalo/src

[← Back to INDEX](../../INDEX.md)

**Type:** implicit | **Files:** 57

## Files

| File | Lines | Large |
| ---- | ----- | ----- |
| `extensions/zalo/src/accounts.test.ts` | 96 |  |
| `extensions/zalo/src/accounts.ts` | 66 |  |
| `extensions/zalo/src/actions.runtime.ts` | 6 |  |
| `extensions/zalo/src/actions.test.ts` | 35 |  |
| `extensions/zalo/src/actions.ts` | 64 |  |
| `extensions/zalo/src/api.test.ts` | 335 |  |
| `extensions/zalo/src/api.ts` | 293 |  |
| `extensions/zalo/src/approval-auth.test.ts` | 18 |  |
| `extensions/zalo/src/approval-auth.ts` | 20 |  |
| `extensions/zalo/src/channel.directory.test.ts` | 74 |  |
| `extensions/zalo/src/channel.runtime.ts` | 94 |  |
| `extensions/zalo/src/channel.startup.test.ts` | 122 |  |
| `extensions/zalo/src/channel.ts` | 304 |  |
| `extensions/zalo/src/config-schema.test.ts` | 31 |  |
| `extensions/zalo/src/config-schema.ts` | 32 |  |
| `extensions/zalo/src/group-access.ts` | 24 |  |
| `extensions/zalo/src/monitor-durable.test-support.ts` | 50 |  |
| `extensions/zalo/src/monitor-durable.ts` | 39 |  |
| `extensions/zalo/src/monitor.group-policy.test-support.ts` | 214 |  |
| `extensions/zalo/src/monitor.helpers.test.ts` | 2 |  |
| `extensions/zalo/src/monitor.image.polling.test-support.ts` | 324 |  |
| `extensions/zalo/src/monitor.lifecycle.test.ts` | 268 |  |
| `extensions/zalo/src/monitor.pairing.lifecycle.test-support.ts` | 201 |  |
| `extensions/zalo/src/monitor.polling-lifecycle.test.ts` | 5 |  |
| `extensions/zalo/src/monitor.polling.media-reply.test-support.ts` | 448 |  |
| `extensions/zalo/src/monitor.reply-once.lifecycle.test-support.ts` | 184 |  |
| `extensions/zalo/src/monitor.ts` | 1052 | 📊 |
| `extensions/zalo/src/monitor.types.ts` | 5 |  |
| `extensions/zalo/src/monitor.webhook.test.ts` | 416 |  |
| `extensions/zalo/src/monitor.webhook.ts` | 193 |  |
| `extensions/zalo/src/outbound-media.test.ts` | 287 |  |
| `extensions/zalo/src/outbound-media.ts` | 187 |  |
| `extensions/zalo/src/outbound-payload.contract.test.ts` | 220 |  |
| `extensions/zalo/src/probe.ts` | 46 |  |
| `extensions/zalo/src/proxy.ts` | 19 |  |
| `extensions/zalo/src/runtime-api.ts` | 81 |  |
| `extensions/zalo/src/runtime-support.ts` | 85 |  |
| `extensions/zalo/src/runtime.ts` | 10 |  |
| `extensions/zalo/src/secret-contract.ts` | 69 |  |
| `extensions/zalo/src/secret-input.ts` | 6 |  |
| `extensions/zalo/src/send.test.ts` | 176 |  |
| `extensions/zalo/src/send.ts` | 210 |  |
| `extensions/zalo/src/session-route.test.ts` | 24 |  |
| `extensions/zalo/src/session-route.ts` | 36 |  |
| `extensions/zalo/src/setup-allow-from.ts` | 98 |  |
| `extensions/zalo/src/setup-core.ts` | 153 |  |
| `extensions/zalo/src/setup-status.test.ts` | 34 |  |
| `extensions/zalo/src/setup-surface.test.ts` | 194 |  |
| `extensions/zalo/src/setup-surface.ts` | 295 |  |
| `extensions/zalo/src/status-issues.test.ts` | 18 |  |
| `extensions/zalo/src/status-issues.ts` | 40 |  |
| `extensions/zalo/src/token.test.ts` | 107 |  |
| `extensions/zalo/src/token.ts` | 78 |  |
| `extensions/zalo/src/types.ts` | 51 |  |
| `extensions/zalo/src/webhook-spool.test-support.ts` | 75 |  |
| `extensions/zalo/src/webhook-spool.test.ts` | 367 |  |
| `extensions/zalo/src/webhook-spool.ts` | 271 |  |

## Documentation

- [outline.md](outline.md) - Symbol maps for large files
- [imports.md](imports.md) - Dependencies

---

| High 🔴 | Medium 🟡 | Low 🟢 |
| 0 | 0 | 1 |

## 🟢 Low Priority

### `NOTE` (extensions/zalo/src/api.ts:247)

> Zalo returns a single update per call, not an array like Telegram
