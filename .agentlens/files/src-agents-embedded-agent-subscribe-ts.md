# src/agents/embedded-agent-subscribe.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1542
- **Language:** TypeScript
- **Symbols:** 50
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 81 | fn | resolveEmbeddedAgentSessionLogger | (private) | `function resolveEmbeddedAgentSessionLogger(mess...` |
| 89 | fn | isPotentialTrailingBlockTagFragment | (private) | `function isPotentialTrailingBlockTagFragment(fr...` |
| 106 | fn | splitTrailingBlockTagFragment | (private) | `function splitTrailingBlockTagFragment(` |
| 124 | fn | splitTrailingFenceFragment | (private) | `function splitTrailingFenceFragment(` |
| 139 | fn | collectPendingMediaFromInternalEvents | (private) | `function collectPendingMediaFromInternalEvents(` |
| 164 | fn | subscribeEmbeddedAgentSession | pub | `export function subscribeEmbeddedAgentSession(p...` |
| 275 | fn | shouldAllowSilentTurnText | (private) | `const shouldAllowSilentTurnText = (text: string...` |
| 277 | fn | emitAssistantStreamDataSafely | (private) | `const emitAssistantStreamDataSafely = (` |
| 305 | fn | emitAssistantStreamData | (private) | `const emitAssistantStreamData = (` |
| 316 | fn | flushDeferredAssistantEvents | (private) | `const flushDeferredAssistantEvents = () => {` |
| 325 | fn | clearDeferredAssistantEvents | (private) | `const clearDeferredAssistantEvents = () => {` |
| 366 | fn | emitBlockReply | (private) | `const emitBlockReply = (` |
| 398 | fn | flushDeferredBlockReplies | (private) | `const flushDeferredBlockReplies = () => {` |
| 413 | fn | clearDeferredBlockReplies | (private) | `const clearDeferredBlockReplies = () => {` |
| 417 | fn | resetAssistantMessageState | (private) | `const resetAssistantMessageState = (nextAssista...` |
| 465 | fn | rememberAssistantText | (private) | `const rememberAssistantText = (text: string) => {` |
| 472 | fn | shouldSkipAssistantText | (private) | `const shouldSkipAssistantText = (text: string) ...` |
| 487 | fn | pushAssistantText | (private) | `const pushAssistantText = (text: string) => {` |
| 501 | fn | finalizeAssistantTexts | (private) | `const finalizeAssistantTexts = (args: {` |
| 540 | fn | trimMessagingToolSent | (private) | `const trimMessagingToolSent = () => {` |
| 561 | fn | ensureCompactionPromise | (private) | `const ensureCompactionPromise = () => {` |
| 576 | fn | noteCompactionRetry | (private) | `const noteCompactionRetry = () => {` |
| 581 | fn | resolveCompactionPromiseIfIdle | (private) | `const resolveCompactionPromiseIfIdle = () => {` |
| 591 | fn | resolveCompactionRetry | (private) | `const resolveCompactionRetry = () => {` |
| 599 | fn | maybeResolveCompactionWait | (private) | `const maybeResolveCompactionWait = () => {` |
| 602 | fn | resolveAssistantUsage | (private) | `const resolveAssistantUsage = (usageLike: unkno...` |
| 633 | fn | commitAssistantUsage | (private) | `const commitAssistantUsage = () => {` |
| 652 | fn | recordAssistantUsage | (private) | `const recordAssistantUsage = (usageLike: unknow...` |
| 662 | fn | getUsageTotals | (private) | `const getUsageTotals = () => {` |
| 684 | fn | getLastAssistantUsage | (private) | `const getLastAssistantUsage = () => (lastAssist...` |
| 685 | fn | incrementCompactionCount | (private) | `const incrementCompactionCount = () => {` |
| 688 | fn | noteCompactionTokensAfter | (private) | `const noteCompactionTokensAfter = (value: unkno...` |
| 700 | fn | shouldEmitToolResult | (private) | `const shouldEmitToolResult = () =>` |
| 704 | fn | shouldEmitToolOutput | (private) | `const shouldEmitToolOutput = () =>` |
| 708 | fn | formatToolOutputBlock | (private) | `const formatToolOutputBlock = (text: string) => {` |
| 718 | fn | emitToolResultMessage | (private) | `const emitToolResultMessage = (` |
| 763 | fn | emitToolSummary | (private) | `const emitToolSummary = (toolName?: string, met...` |
| 769 | fn | emitToolOutput | (private) | `const emitToolOutput = (toolName?: string, meta...` |
| 846 | fn | advanceHiddenCodeState | (private) | `const advanceHiddenCodeState = (segment: string...` |
| 996 | fn | stripFinalTagsOutsideCodeSpans | (private) | `const stripFinalTagsOutsideCodeSpans = (text: s...` |
| 1010 | fn | hasMessageToolOnlySourceDelivery | (private) | `const hasMessageToolOnlySourceDelivery = () =>` |
| 1016 | fn | emitBlockChunk | (private) | `const emitBlockChunk = (` |
| 1037 | fn | markBlockReplyTextHandled | (private) | `const markBlockReplyTextHandled = () => {` |
| 1143 | fn | consumeReplyDirectives | (private) | `const consumeReplyDirectives = (text: string, o...` |
| 1145 | fn | consumePartialReplyDirectives | (private) | `const consumePartialReplyDirectives = (text: st...` |
| 1198 | fn | emitReasoningStream | (private) | `const emitReasoningStream = (text: string) => {` |
| 1246 | fn | resetForCompactionRetry | (private) | `const resetForCompactionRetry = () => {` |
| 1299 | fn | noteLastAssistant | (private) | `const noteLastAssistant = (msg: AgentMessage) => {` |
| 1304 | fn | noteCompletedAssistant | (private) | `const noteCompletedAssistant = (msg: AgentMessa...` |
| 1361 | fn | unsubscribe | (private) | `const unsubscribe = () => {` |

## Public API

### `subscribeEmbeddedAgentSession`

```
export function subscribeEmbeddedAgentSession(params: SubscribeEmbeddedAgentSessionParams) {
```

**Line:** 164 | **Kind:** fn
