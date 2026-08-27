# Memory

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Summary

| High 🔴 | Medium 🟡 | Low 🟢 |
| 8 | 0 | 2 |

## 🔴 High Priority

### `RULE` (src/gateway/android-node.capabilities.policy-source.test.ts:2)

> versus trusting local loopback gateway configuration.

### `WARNING` (src/gateway/auth-token-source-conflict.ts:33)

> is for client shells where env precedence can surprise users.

### `WARNING` (src/gateway/chat-attachments.test.ts:2)

> surfaces, size limits, and outbound message block assembly.

### `SAFETY` (src/gateway/cron-exit-watchers.ts:7)

> bound for a watched command, so a hung/never-exiting command cannot

### `RULE` (src/gateway/device-metadata-normalization.ts:16)

> classification should collapse Unicode confusables to stable ASCII-ish

### `RULE` (src/gateway/gateway-codex-harness.live.test.ts:478)

> on the model entry proves the app-server harness path.

### `WARNING` (src/gateway/server-startup-plugins.ts:214)

> when `agents.*.memorySearch.provider` selects a memory embedding provider

### `RULE` (src/gateway/session-transcript-files.fs.archive-cleanup.test.ts:2)

> shares one directory listing per cleanup call. Store maintenance runs

## 🟢 Low Priority

### `NOTE` (src/gateway/credential-planner.ts:56)

> legitimate credential values containing literal `${UPPER_CASE}` patterns will

### `NOTE` (src/gateway/net.ts:381)

> 0.0.0.0 and :: are NOT loopback - they bind to all interfaces.
