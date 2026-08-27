# src/auto-reply/reply/get-reply.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1097
- **Language:** TypeScript
- **Symbols:** 17
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 80 | type | ResetCommandAction | (private) | - |
| 82 | type | RuntimeInternalGetReplyOptions | (private) | - |
| 87 | fn | classifyHeartbeatPendingFinalDelivery | (private) | `function classifyHeartbeatPendingFinalDelivery(...` |
| 98 | fn | resolveHeartbeatAckMaxChars | (private) | `function resolveHeartbeatAckMaxChars(cfg: OpenC...` |
| 126 | fn | loadSessionResetModelRuntime | (private) | `function loadSessionResetModelRuntime() {` |
| 130 | fn | loadStageSandboxMediaRuntime | (private) | `function loadStageSandboxMediaRuntime() {` |
| 134 | fn | loadMediaUnderstandingApplyRuntime | (private) | `function loadMediaUnderstandingApplyRuntime() {` |
| 138 | fn | loadLinkUnderstandingApplyRuntime | (private) | `function loadLinkUnderstandingApplyRuntime() {` |
| 142 | fn | loadCommandsCoreRuntime | (private) | `function loadCommandsCoreRuntime() {` |
| 146 | fn | hasLinkCandidate | (private) | `function hasLinkCandidate(ctx: MsgContext): boo...` |
| 154 | fn | applyMediaUnderstandingIfNeeded | (private) | `async function applyMediaUnderstandingIfNeeded(...` |
| 178 | fn | hasExplicitAudioUnderstandingConfig | (private) | `function hasExplicitAudioUnderstandingConfig(cf...` |
| 183 | fn | withExtractedFileImages | (private) | `function withExtractedFileImages(` |
| 196 | fn | applyLinkUnderstandingIfNeeded | (private) | `async function applyLinkUnderstandingIfNeeded(p...` |
| 216 | fn | getReplyFromConfig | pub | `export async function getReplyFromConfig(` |
| 269 | fn | logResolverTiming | (private) | `const logResolverTiming = (outcome: string, rea...` |
| 863 | fn | maybeEmitMissingResetHooks | (private) | `const maybeEmitMissingResetHooks = async () => {` |

## Public API

### `getReplyFromConfig`

```
export async function getReplyFromConfig(
```

**Line:** 216 | **Kind:** fn
