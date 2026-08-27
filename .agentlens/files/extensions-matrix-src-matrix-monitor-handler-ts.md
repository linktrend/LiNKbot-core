# extensions/matrix/src/matrix/monitor/handler.ts

[← Back to Module](../modules/extensions-matrix-src-matrix-monitor/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2596
- **Language:** TypeScript
- **Symbols:** 37
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 146 | fn | matrixTextWouldActivateMentions | (private) | `async function matrixTextWouldActivateMentions(` |
| 157 | type | MatrixAllowBotsMode | (private) | - |
| 158 | type | MatrixDraftStreamHandle | (private) | - |
| 169 | fn | redactMatrixDraftEvent | (private) | `async function redactMatrixDraftEvent(` |
| 177 | fn | buildMatrixFinalizedPreviewContent | (private) | `function buildMatrixFinalizedPreviewContent(): ...` |
| 181 | type | MatrixMonitorHandlerParams | (private) | - |
| 236 | fn | resolveMatrixMentionPrecheckText | (private) | `function resolveMatrixMentionPrecheckText(param...` |
| 256 | fn | hasBundledMatrixReplacementRelation | (private) | `function hasBundledMatrixReplacementRelation(ev...` |
| 264 | fn | resolveMatrixInboundBodyText | (private) | `function resolveMatrixInboundBodyText(params: {` |
| 293 | fn | markTrackedRoomIfFirst | (private) | `function markTrackedRoomIfFirst(set: Set<string...` |
| 307 | fn | resolveMatrixSharedDmContextNotice | (private) | `function resolveMatrixSharedDmContextNotice(par...` |
| 359 | fn | resolveMatrixPendingHistoryText | (private) | `function resolveMatrixPendingHistoryText(params: {` |
| 382 | fn | isMatrixAudioMediaEnabled | (private) | `function isMatrixAudioMediaEnabled(cfg: CoreCon...` |
| 395 | fn | shouldDeferMatrixAudioPreflightForRoomIngress | (private) | `function shouldDeferMatrixAudioPreflightForRoom...` |
| 422 | fn | resolveMatrixAllowBotsMode | (private) | `function resolveMatrixAllowBotsMode(value?: boo...` |
| 432 | fn | formatMatrixToolProgressMarkdownCode | (private) | `function formatMatrixToolProgressMarkdownCode(t...` |
| 441 | fn | createMatrixRoomMessageHandler | pub | `export function createMatrixRoomMessageHandler(...` |
| 493 | type | LiveAllowlistCacheEntry | (private) | - |
| 496 | fn | resolveCachedLiveAllowlist | (private) | `const resolveCachedLiveAllowlist = async (param...` |
| 627 | fn | commitInboundEventIfClaimed | (private) | `const commitInboundEventIfClaimed = async () => {` |
| 634 | fn | readIngressPrefix | (private) | `const readIngressPrefix = async () => {` |
| 695 | fn | continueIngress | (private) | `const continueIngress = async (paramsLocal: {` |
| 719 | fn | discardReservedHistorySlot | (private) | `const discardReservedHistorySlot = () => {` |
| 725 | fn | commitInboundEventIfClaimedAndDiscardReserved | (private) | `const commitInboundEventIfClaimedAndDiscardRese...` |
| 1688 | fn | shouldAckReaction | (private) | `const shouldAckReaction = () =>` |
| 1788 | type | PendingDraftBoundary | (private) | - |
| 1810 | fn | renderProgressDraft | (private) | `const renderProgressDraft = () => {` |
| 1832 | fn | pushPreviewToolProgress | (private) | `const pushPreviewToolProgress = async (` |
| 1887 | fn | pushPlanProgress | (private) | `const pushPlanProgress = async (steps?: AgentPl...` |
| 1907 | fn | suppressPreviewToolProgressForAnswerText | (private) | `const suppressPreviewToolProgressForAnswerText ...` |
| 1917 | fn | resetPreviewToolProgress | (private) | `const resetPreviewToolProgress = () => {` |
| 2031 | fn | getDisplayableDraftText | (private) | `const getDisplayableDraftText = () => {` |
| 2041 | fn | updateDraftFromLatestFullText | (private) | `const updateDraftFromLatestFullText = () => {` |
| 2048 | fn | queueDraftBlockBoundary | (private) | `const queueDraftBlockBoundary = (payload: Reply...` |
| 2064 | fn | advanceDraftBlockBoundary | (private) | `const advanceDraftBlockBoundary = (options?: { ...` |
| 2084 | fn | resetDraftBlockOffsets | (private) | `const resetDraftBlockOffsets = () => {` |
| 2090 | fn | resetDraftDeliveryState | (private) | `const resetDraftDeliveryState = async () => {` |

## Public API

### `createMatrixRoomMessageHandler`

```
export function createMatrixRoomMessageHandler(params: MatrixMonitorHandlerParams) {
```

**Line:** 441 | **Kind:** fn
