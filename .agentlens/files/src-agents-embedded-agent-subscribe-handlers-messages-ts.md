# src/agents/embedded-agent-subscribe.handlers.messages.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1519
- **Language:** TypeScript
- **Symbols:** 48
- **Public symbols:** 11

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 55 | fn | shouldSuppressAssistantVisibleOutput | (private) | `function shouldSuppressAssistantVisibleOutput(m...` |
| 59 | fn | isTranscriptOnlyOpenClawAssistantMessage | (private) | `function isTranscriptOnlyOpenClawAssistantMessa...` |
| 76 | fn | isResponsesApiAssistantMessage | (private) | `function isResponsesApiAssistantMessage(message...` |
| 84 | fn | isAnthropicAssistantMessage | (private) | `function isAnthropicAssistantMessage(message: A...` |
| 92 | fn | isOpenAiCompletionsAssistantMessage | (private) | `function isOpenAiCompletionsAssistantMessage(me...` |
| 100 | fn | preservePendingAssistantUsage | pub | `export function preservePendingAssistantUsage(` |
| 133 | fn | capturePendingAssistantUsage | pub | `export function capturePendingAssistantUsage(` |
| 151 | fn | resetPendingAssistantUsage | pub | `export function resetPendingAssistantUsage(` |
| 162 | fn | asRecord | (private) | `function asRecord(value: unknown): Record<strin...` |
| 168 | fn | extractStandaloneMessageToolText | (private) | `function extractStandaloneMessageToolText(` |
| 195 | fn | resolveAssistantStreamItemId | (private) | `function resolveAssistantStreamItemId(params: {` |
| 232 | fn | resolveAssistantStreamContentIndex | (private) | `function resolveAssistantStreamContentIndex(val...` |
| 236 | fn | scopeAssistantMessageToStreamBlock | (private) | `function scopeAssistantMessageToStreamBlock(` |
| 265 | fn | emitReasoningEnd | (private) | `function emitReasoningEnd(ctx: EmbeddedAgentSub...` |
| 277 | fn | emitAssistantMessageStart | (private) | `function emitAssistantMessageStart(ctx: Embedde...` |
| 285 | fn | openReasoningStream | (private) | `function openReasoningStream(ctx: EmbeddedAgent...` |
| 289 | fn | shouldSuppressDeterministicApprovalOutput | (private) | `function shouldSuppressDeterministicApprovalOut...` |
| 298 | fn | hasMessageToolOnlySourceDelivery | (private) | `function hasMessageToolOnlySourceDelivery(ctx: ...` |
| 307 | fn | appendBlockReplyChunk | (private) | `function appendBlockReplyChunk(ctx: EmbeddedAge...` |
| 315 | fn | replaceBlockReplyBuffer | (private) | `function replaceBlockReplyBuffer(ctx: EmbeddedA...` |
| 324 | fn | resolveAssistantTextChunk | (private) | `function resolveAssistantTextChunk(params: {` |
| 356 | fn | resolveStreamVisibleText | (private) | `function resolveStreamVisibleText(params: {` |
| 369 | fn | resolveTextAppendDelta | (private) | `function resolveTextAppendDelta(previousText: s...` |
| 385 | fn | copyPartialBlockState | (private) | `function copyPartialBlockState(` |
| 389 | fn | copyFenceState | (private) | `const copyFenceState = (fence?: typeof source.f...` |
| 412 | fn | resolveSilentReplyFallbackText | (private) | `function resolveSilentReplyFallbackText(params: {` |
| 428 | fn | clearPendingToolMedia | (private) | `function clearPendingToolMedia(` |
| 439 | fn | hasReplyMedia | (private) | `function hasReplyMedia(payload: BlockReplyPaylo...` |
| 444 | fn | consumePendingToolMediaIntoReply | pub | `export function consumePendingToolMediaIntoReply(` |
| 481 | fn | consumePendingToolMediaReply | pub | `export function consumePendingToolMediaReply(` |
| 496 | fn | readPendingToolMediaReply | pub | `export function readPendingToolMediaReply(` |
| 518 | fn | hasReplyDirectiveMetadata | (private) | `function hasReplyDirectiveMetadata(parsed: Repl...` |
| 529 | fn | hasReplyDirectiveMetadataResult | (private) | `function hasReplyDirectiveMetadataResult(` |
| 535 | fn | mergeReplyDirectiveResults | (private) | `function mergeReplyDirectiveResults(` |
| 557 | fn | parseFullStreamingReplyText | (private) | `function parseFullStreamingReplyText(text: stri...` |
| 561 | fn | containsCompleteMediaDirectiveLine | (private) | `function containsCompleteMediaDirectiveLine(tex...` |
| 565 | fn | resolveIncrementalStreamingReplyText | (private) | `function resolveIncrementalStreamingReplyText(p...` |
| 596 | fn | resolveStreamingReplyText | (private) | `function resolveStreamingReplyText(params: {` |
| 615 | fn | recordPendingAssistantReplyDirectives | (private) | `function recordPendingAssistantReplyDirectives(` |
| 636 | fn | consumePendingAssistantReplyDirectivesIntoReply | pub | `export function consumePendingAssistantReplyDir...` |
| 659 | fn | hasAssistantVisibleReply | pub | `export function hasAssistantVisibleReply(params: {` |
| 669 | fn | buildAssistantStreamData | (private) | `function buildAssistantStreamData(params: {` |
| 697 | fn | handleMessageStart | pub | `export function handleMessageStart(` |
| 717 | fn | handleMessageUpdate | pub | `export function handleMessageUpdate(` |
| 1147 | fn | handleMessageEnd | pub | `export function handleMessageEnd(` |
| 1255 | fn | finalizeMessageEnd | (private) | `const finalizeMessageEnd = () => {` |
| 1339 | fn | maybeEmitReasoning | (private) | `const maybeEmitReasoning = () => {` |
| 1353 | fn | emitSplitResultAsBlockReply | (private) | `const emitSplitResultAsBlockReply = (` |

## Public API

### `preservePendingAssistantUsage`

```
export function preservePendingAssistantUsage(
```

**Line:** 100 | **Kind:** fn

### `capturePendingAssistantUsage`

```
export function capturePendingAssistantUsage(
```

**Line:** 133 | **Kind:** fn

### `resetPendingAssistantUsage`

```
export function resetPendingAssistantUsage(
```

**Line:** 151 | **Kind:** fn

### `consumePendingToolMediaIntoReply`

```
export function consumePendingToolMediaIntoReply(
```

**Line:** 444 | **Kind:** fn

### `consumePendingToolMediaReply`

```
export function consumePendingToolMediaReply(
```

**Line:** 481 | **Kind:** fn

### `readPendingToolMediaReply`

```
export function readPendingToolMediaReply(
```

**Line:** 496 | **Kind:** fn

### `consumePendingAssistantReplyDirectivesIntoReply`

```
export function consumePendingAssistantReplyDirectivesIntoReply(
```

**Line:** 636 | **Kind:** fn

### `hasAssistantVisibleReply`

```
export function hasAssistantVisibleReply(params: {
```

**Line:** 659 | **Kind:** fn

### `handleMessageStart`

```
export function handleMessageStart(
```

**Line:** 697 | **Kind:** fn

### `handleMessageUpdate`

```
export function handleMessageUpdate(
```

**Line:** 717 | **Kind:** fn

### `handleMessageEnd`

```
export function handleMessageEnd(
```

**Line:** 1147 | **Kind:** fn
