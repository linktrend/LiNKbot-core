# extensions/qqbot/src/engine/messaging/streaming-c2c.ts

[← Back to Module](../modules/extensions-qqbot-src-engine-messaging/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1206
- **Language:** TypeScript
- **Symbols:** 9
- **Public symbols:** 2

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 40 | fn | formatStreamErr | (private) | `function formatStreamErr(e: unknown): string {` |
| 59 | type | StreamingPhase | (private) | - |
| 77 | class | FlushController | (private) | - |
| 218 | interface | StreamingControllerDeps | (private) | - |
| 258 | class | StreamingController | pub | - |
| 1121 | interface | StreamingMediaContext | (private) | - |
| 1143 | fn | toMediaSendContext | (private) | `function toMediaSendContext(ctx: StreamingMedia...` |
| 1181 | fn | sendMediaQueue | (private) | `async function sendMediaQueue(queue: SendQueueI...` |
| 1197 | fn | shouldUseOfficialC2cStream | pub | `export function shouldUseOfficialC2cStream(` |

## Public API

### `shouldUseOfficialC2cStream`

```
export function shouldUseOfficialC2cStream(
```

**Line:** 1197 | **Kind:** fn
