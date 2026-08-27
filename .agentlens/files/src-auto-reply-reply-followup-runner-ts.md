# src/auto-reply/reply/followup-runner.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2080
- **Language:** TypeScript
- **Symbols:** 31
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 139 | type | EmbeddedAgentRunResult | (private) | - |
| 147 | fn | preserveNonVisibleFollowupResult | (private) | `function preserveNonVisibleFollowupResult(` |
| 168 | type | FollowupAgentEvent | (private) | - |
| 170 | fn | isStrandedReplyRetryFollowup | (private) | `function isStrandedReplyRetryFollowup(queued: F...` |
| 178 | fn | hasSuccessfulFollowupSourceReplyDelivery | (private) | `function hasSuccessfulFollowupSourceReplyDelive...` |
| 186 | fn | normalizeAssistantFinalDeliveryText | (private) | `function normalizeAssistantFinalDeliveryText(te...` |
| 195 | fn | readApprovalScopeValue | (private) | `function readApprovalScopeValue(value: unknown)...` |
| 199 | fn | filterStringArray | (private) | `function filterStringArray(value: unknown): str...` |
| 205 | fn | hasFailedFollowupProgressEvent | (private) | `function hasFailedFollowupProgressEvent(evt: Fo...` |
| 227 | fn | forwardFollowupProgressEvent | (private) | `async function forwardFollowupProgressEvent(par...` |
| 358 | fn | sendCompactionUserNotices | (private) | `const sendCompactionUserNotices = async (notice...` |
| 398 | fn | createFollowupRunner | pub | `export function createFollowupRunner(params: {` |
| 589 | fn | runFollowupTurn | (private) | `const runFollowupTurn = async (queued: Followup...` |
| 630 | fn | resolveCurrentVerboseLevel | (private) | `const resolveCurrentVerboseLevel = () => {` |
| 649 | fn | shouldEmitVerboseProgress | (private) | `const shouldEmitVerboseProgress = () => {` |
| 653 | fn | shouldSuppressDefaultToolProgressMessages | (private) | `const shouldSuppressDefaultToolProgressMessages...` |
| 654 | fn | shouldEmitToolResultProgress | (private) | `const shouldEmitToolResultProgress = () =>` |
| 656 | fn | shouldEmitToolOutputProgress | (private) | `const shouldEmitToolOutputProgress = () =>` |
| 658 | fn | isRoomEventFollowup | (private) | `const isRoomEventFollowup = () => queued.curren...` |
| 660 | fn | markVisibleToolErrorProgress | (private) | `const markVisibleToolErrorProgress = () => {` |
| 665 | fn | shouldSuppressToolErrorWarnings | (private) | `const shouldSuppressToolErrorWarnings = () => {` |
| 676 | fn | enqueueProgressDelivery | (private) | `const enqueueProgressDelivery = (deliver: () =>...` |
| 686 | fn | drainProgressDeliveries | (private) | `const drainProgressDeliveries = async () => {` |
| 789 | fn | resolveFollowupCurrentMessageId | (private) | `const resolveFollowupCurrentMessageId = () =>` |
| 795 | fn | sendCompactionNoticePayload | (private) | `const sendCompactionNoticePayload = async (` |
| 1114 | fn | notifyUserMessagePersisted | (private) | `const notifyUserMessagePersisted = () => {` |
| 1119 | fn | deliverFollowupToolSummary | (private) | `const deliverFollowupToolSummary = (payload: Re...` |
| 1559 | fn | emitSettledLifecycleError | (private) | `const emitSettledLifecycleError = (error: Error...` |
| 1661 | fn | deliverStrandedReplyRetryFailureDiagnostic | (private) | `const deliverStrandedReplyRetryFailureDiagnosti...` |
| 1707 | fn | enqueueStrandedReplyRecoveryRetry | (private) | `const enqueueStrandedReplyRecoveryRetry = async...` |
| 1863 | fn | resolveDeliveryPayloads | (private) | `const resolveDeliveryPayloads = (payloads: Repl...` |

## Public API

### `createFollowupRunner`

```
export function createFollowupRunner(params: {
```

**Line:** 398 | **Kind:** fn
