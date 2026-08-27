# src/auto-reply/reply/agent-runner.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 3073
- **Language:** TypeScript
- **Symbols:** 52
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 182 | fn | scheduleFollowupDrainAfterReplyOperationClear | (private) | `function scheduleFollowupDrainAfterReplyOperati...` |
| 202 | fn | markBeforeAgentRunBlockedPayloads | (private) | `function markBeforeAgentRunBlockedPayloads(payl...` |
| 208 | fn | resolvePendingFinalDeliveryRetryText | (private) | `function resolvePendingFinalDeliveryRetryText(p...` |
| 220 | fn | buildSilentFallbackFailurePayload | (private) | `function buildSilentFallbackFailurePayload(para...` |
| 246 | fn | resolveSourceReplyPolicy | (private) | `function resolveSourceReplyPolicy(params: {` |
| 273 | fn | resolveReplyRunDeliveryContext | (private) | `function resolveReplyRunDeliveryContext(params: {` |
| 305 | fn | hasSuccessfulSourceReplyDelivery | (private) | `function hasSuccessfulSourceReplyDelivery(param...` |
| 319 | fn | hasSuccessfulTerminalSourceReplyDelivery | (private) | `function hasSuccessfulTerminalSourceReplyDelive...` |
| 340 | fn | resolveConfiguredFallbackModel | (private) | `function resolveConfiguredFallbackModel(params: {` |
| 364 | fn | buildInlinePluginStatusPayload | (private) | `function buildInlinePluginStatusPayload(params: {` |
| 384 | fn | formatRawTraceBlock | (private) | `function formatRawTraceBlock(title: string, val...` |
| 389 | fn | escapeTraceFence | (private) | `function escapeTraceFence(value: string): string {` |
| 393 | fn | hasTraceUsageFields | (private) | `function hasTraceUsageFields(` |
| 413 | fn | formatTraceUsageLine | (private) | `function formatTraceUsageLine(label: string, va...` |
| 417 | fn | formatUsageTraceBlock | (private) | `function formatUsageTraceBlock(` |
| 441 | type | TraceAttemptView | (private) | - |
| 451 | type | TraceExecutionView | (private) | - |
| 459 | type | TracePromptSegmentView | (private) | - |
| 464 | type | TraceToolSummaryView | (private) | - |
| 471 | type | TraceCompletionView | (private) | - |
| 477 | type | TraceContextManagementView | (private) | - |
| 484 | fn | formatTraceScalar | (private) | `function formatTraceScalar(value: string | numb...` |
| 495 | fn | formatKeyValueTraceBlock | (private) | `function formatKeyValueTraceBlock(` |
| 509 | fn | inferFallbackAttemptResult | (private) | `function inferFallbackAttemptResult(attempt: { ...` |
| 516 | fn | mergeExecutionTrace | (private) | `function mergeExecutionTrace(params: {` |
| 591 | fn | formatExecutionResultTraceBlock | (private) | `function formatExecutionResultTraceBlock(` |
| 610 | fn | formatFallbackChainTraceBlock | (private) | `function formatFallbackChainTraceBlock(` |
| 634 | fn | toSnakeCase | (private) | `function toSnakeCase(value: string): string {` |
| 642 | fn | resolveMetadataSegmentKey | (private) | `function resolveMetadataSegmentKey(label: strin...` |
| 653 | fn | derivePromptSegments | (private) | `function derivePromptSegments(prompt: string | ...` |
| 661 | fn | addChars | (private) | `const addChars = (key: string, chars: number) => {` |
| 726 | fn | formatPromptSegmentsTraceBlock | (private) | `function formatPromptSegmentsTraceBlock(` |
| 742 | fn | formatToolSummaryTraceBlock | (private) | `function formatToolSummaryTraceBlock(` |
| 756 | fn | formatCompletionTraceBlock | (private) | `function formatCompletionTraceBlock(` |
| 769 | fn | formatContextManagementTraceBlock | (private) | `function formatContextManagementTraceBlock(` |
| 783 | fn | accumulateSessionUsageFromTranscript | (private) | `async function accumulateSessionUsageFromTransc...` |
| 822 | fn | formatRequestContextTraceBlock | (private) | `function formatRequestContextTraceBlock(params: {` |
| 863 | fn | formatSummaryPromptValue | (private) | `function formatSummaryPromptValue(params: {` |
| 882 | fn | formatRawTraceSummaryLine | (private) | `function formatRawTraceSummaryLine(params: {` |
| 945 | fn | buildInlineRawTracePayload | (private) | `function buildInlineRawTracePayload(params: {` |
| 1044 | fn | joinCommitmentAssistantText | (private) | `function joinCommitmentAssistantText(payloads: ...` |
| 1055 | fn | normalizeAssistantFinalDeliveryText | (private) | `function normalizeAssistantFinalDeliveryText(te...` |
| 1064 | fn | enqueueCommitmentExtractionForTurn | (private) | `function enqueueCommitmentExtractionForTurn(par...` |
| 1120 | fn | refreshSessionEntryFromStore | (private) | `function refreshSessionEntryFromStore(params: {` |
| 1147 | fn | resolveAdmittedRunSessionFile | (private) | `function resolveAdmittedRunSessionFile(params: {` |
| 1169 | fn | runReplyAgent | pub | `export async function runReplyAgent(params: {` |
| 1316 | fn | shouldEmitToolResult | (private) | `const shouldEmitToolResult = () =>` |
| 1326 | fn | touchActiveSessionEntry | (private) | `const touchActiveSessionEntry = async () => {` |
| 1492 | fn | queuedRunFollowupTurn | (private) | `const queuedRunFollowupTurn = (queued: Followup...` |
| 1745 | type | SessionResetOptions | (private) | - |
| 2299 | fn | applyFinalReplyToMode | (private) | `const applyFinalReplyToMode = (payload: ReplyPa...` |
| 2310 | fn | buildFinalPayloads | (private) | `const buildFinalPayloads = (payloads: ReplyPayl...` |

## Public API

### `runReplyAgent`

```
export async function runReplyAgent(params: {
```

**Line:** 1169 | **Kind:** fn

## Memory Markers

### 🔴 `SAFETY` (line 3064)

> net: the dispatcher's onIdle callback normally fires
