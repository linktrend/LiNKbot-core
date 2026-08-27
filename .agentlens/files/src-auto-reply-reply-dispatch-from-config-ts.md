# src/auto-reply/reply/dispatch-from-config.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2951
- **Language:** TypeScript
- **Symbols:** 58
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 197 | type | InternalReplyResolverOptions | (private) | - |
| 202 | fn | createReplyDispatchEvent | (private) | `function createReplyDispatchEvent(` |
| 223 | fn | dispatchReplyFromConfig | pub | `export async function dispatchReplyFromConfig(` |
| 237 | fn | dispatchReplyFromConfigInner | (private) | `async function dispatchReplyFromConfigInner(` |
| 301 | fn | recordProcessed | (private) | `const recordProcessed = (outcome: DispatchProce...` |
| 315 | fn | recordAgentDispatchStarted | (private) | `const recordAgentDispatchStarted = () => {` |
| 327 | fn | recordAgentDispatchCompleted | (private) | `const recordAgentDispatchCompleted = (` |
| 348 | fn | markProcessing | (private) | `const markProcessing = () => {` |
| 352 | fn | markIdle | (private) | `const markIdle = (reason: string) => {` |
| 357 | fn | markInboundDedupeReplayUnsafe | (private) | `const markInboundDedupeReplayUnsafe = () => {` |
| 399 | fn | markProgress | (private) | `const markProgress = () => {` |
| 427 | fn | sessionKeysMatch | (private) | `const sessionKeysMatch = (left?: string, right?...` |
| 433 | fn | notePreparedSession | (private) | `const notePreparedSession = (binding: ReplySess...` |
| 442 | fn | resolveOperationExpectedSessionId | (private) | `const resolveOperationExpectedSessionId = () =>` |
| 444 | fn | resolvePreparedTranscriptBinding | (private) | `const resolvePreparedTranscriptBinding = (mirro...` |
| 537 | fn | buildHookState | (private) | `const buildHookState = (sourceCtx: FinalizedMsg...` |
| 555 | fn | prepareHookMediaMetadata | (private) | `const prepareHookMediaMetadata = async () => {` |
| 577 | fn | buildMessageReceivedHookContext | (private) | `const buildMessageReceivedHookContext = () => {` |
| 677 | fn | getNormalizeReplyMediaPaths | (private) | `const getNormalizeReplyMediaPaths = async () => {` |
| 706 | fn | routeReplyToOriginating | (private) | `const routeReplyToOriginating = async (` |
| 751 | fn | isRoutedReplyDelivered | (private) | `const isRoutedReplyDelivered = (result: { ok: b...` |
| 1029 | fn | commitInboundDedupeIfClaimed | (private) | `const commitInboundDedupeIfClaimed = () => {` |
| 1034 | fn | releaseInboundDedupeIfClaimed | (private) | `const releaseInboundDedupeIfClaimed = () => {` |
| 1078 | fn | emitMessageReceivedHooks | (private) | `const emitMessageReceivedHooks = () => {` |
| 1341 | fn | shouldSuppressDefaultToolProgressMessages | (private) | `const shouldSuppressDefaultToolProgressMessages...` |
| 1342 | fn | shouldSendVerboseProgressMessages | (private) | `const shouldSendVerboseProgressMessages = () =>...` |
| 1343 | fn | shouldSendToolSummaries | (private) | `const shouldSendToolSummaries = () => shouldSen...` |
| 1371 | fn | shouldDeliverVerboseProgressDespiteSourceSuppression | (private) | `const shouldDeliverVerboseProgressDespiteSource...` |
| 1378 | fn | shouldDeliverForcedToolProgressDespiteSourceSuppression | (private) | `const shouldDeliverForcedToolProgressDespiteSou...` |
| 1384 | fn | shouldDeliverFastModeAutoProgressDespiteSourceSuppression | (private) | `const shouldDeliverFastModeAutoProgressDespiteS...` |
| 1390 | fn | hasExecApprovalPayload | (private) | `const hasExecApprovalPayload = (payload: ReplyP...` |
| 1399 | fn | hasAskUserPayload | (private) | `const hasAskUserPayload = (payload: ReplyPayloa...` |
| 1403 | fn | readAskUserQuestionId | (private) | `const readAskUserQuestionId = (payload: ReplyPa...` |
| 1411 | fn | shouldSuppressLateTextOnlyToolProgress | (private) | `const shouldSuppressLateTextOnlyToolProgress = ...` |
| 1423 | fn | deliverCommentaryProgressMessage | (private) | `const deliverCommentaryProgressMessage = async ...` |
| 1438 | fn | flushPendingCommentaryProgress | (private) | `const flushPendingCommentaryProgress = async ()...` |
| 1447 | fn | noteCommentaryProgress | (private) | `const noteCommentaryProgress = async (payload: ...` |
| 1467 | fn | shouldSuppressMessageToolOnlyTextErrorProgress | (private) | `const shouldSuppressMessageToolOnlyTextErrorPro...` |
| 1487 | fn | throwIfFinalDeliveryAborted | (private) | `const throwIfFinalDeliveryAborted = () => {` |
| 1768 | fn | normalizeWorkingLabel | (private) | `const normalizeWorkingLabel = (label: string) => {` |
| 1775 | fn | formatPlanUpdateText | (private) | `const formatPlanUpdateText = (payload: { explan...` |
| 1837 | fn | summarizeApprovalLabel | (private) | `const summarizeApprovalLabel = (payload: {` |
| 1858 | fn | summarizePatchLabel | (private) | `const summarizePatchLabel = (payload: { summary...` |
| 1928 | fn | shouldSuppressProgressDelivery | (private) | `const shouldSuppressProgressDelivery = () =>` |
| 1931 | fn | hasVisibleRegularVerboseToolProgress | (private) | `const hasVisibleRegularVerboseToolProgress = () =>` |
| 1938 | fn | markVisibleToolErrorProgress | (private) | `const markVisibleToolErrorProgress = () => {` |
| 1943 | fn | hasFailedProgressStatus | (private) | `const hasFailedProgressStatus = (payload: {` |
| 1952 | fn | shouldSuppressToolErrorWarnings | (private) | `const shouldSuppressToolErrorWarnings = () => {` |
| 1970 | fn | isChannelOwnedToolResultProgressPayload | (private) | `const isChannelOwnedToolResultProgressPayload =...` |
| 1974 | fn | shouldForwardToolResultProgressCallback | (private) | `const shouldForwardToolResultProgressCallback = (` |
| 1989 | fn | shouldAllowQuietChannelOwnedProgressCallbacks | (private) | `const shouldAllowQuietChannelOwnedProgressCallb...` |
| 1997 | fn | waitForPendingDirectBlockReplyDelivery | (private) | `const waitForPendingDirectBlockReplyDelivery = ...` |
| 2007 | fn | shouldForwardProgressCallback | (private) | `const shouldForwardProgressCallback = (options?: {` |
| 2029 | fn | reserveProgressCallbackStart | (private) | `const reserveProgressCallbackStart = () => {` |
| 2054 | fn | runProgressCallback | (private) | `const runProgressCallback = async (` |
| 2250 | fn | run | (private) | `const run = async () => {` |
| 2502 | fn | run | (private) | `const run = async () => {` |
| 2743 | fn | shouldDeliverDespiteSourceReplySuppression | (private) | `const shouldDeliverDespiteSourceReplySuppressio...` |

## Public API

### `dispatchReplyFromConfig`

```
export async function dispatchReplyFromConfig(
```

**Line:** 223 | **Kind:** fn

## Memory Markers

### 🟢 `NOTE` (line 757)

> Only called when shouldRouteToOriginating is true, so
