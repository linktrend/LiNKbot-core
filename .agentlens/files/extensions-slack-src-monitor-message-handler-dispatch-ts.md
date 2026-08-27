# extensions/slack/src/monitor/message-handler/dispatch.ts

[← Back to Module](../modules/extensions-slack-src-monitor-message-handler/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2438
- **Language:** TypeScript
- **Symbols:** 49
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 104 | fn | resolveSlackMessageTimestampMs | (private) | `function resolveSlackMessageTimestampMs(message...` |
| 109 | fn | resolveSlackBotLoopProtection | (private) | `function resolveSlackBotLoopProtection(` |
| 139 | fn | isSlackStreamingEnabled | (private) | `function isSlackStreamingEnabled(params: {` |
| 153 | fn | shouldEnableSlackPreviewStreaming | (private) | `function shouldEnableSlackPreviewStreaming(para...` |
| 159 | fn | shouldInitializeSlackDraftStream | (private) | `function shouldInitializeSlackDraftStream(param...` |
| 166 | fn | resolveSlackDisableBlockStreaming | (private) | `function resolveSlackDisableBlockStreaming(para...` |
| 179 | fn | resolveExplicitSlackProgressTitle | (private) | `function resolveExplicitSlackProgressTitle(` |
| 190 | fn | resolveSlackNativeProgressTaskCards | (private) | `function resolveSlackNativeProgressTaskCards(` |
| 206 | fn | resolveSlackStreamingThreadHint | (private) | `function resolveSlackStreamingThreadHint(params: {` |
| 221 | type | SlackEventDeliveryAttempt | (private) | - |
| 231 | fn | getSlackStreamRecipientTeamCache | (private) | `function getSlackStreamRecipientTeamCache(clien...` |
| 241 | fn | buildSlackEventDeliveryKey | (private) | `function buildSlackEventDeliveryKey(params: Sla...` |
| 266 | fn | readSlackStreamRecipientTeamCache | (private) | `function readSlackStreamRecipientTeamCache(para...` |
| 285 | fn | rememberSlackStreamRecipientTeam | (private) | `function rememberSlackStreamRecipientTeam(param...` |
| 308 | fn | createSlackEventDeliveryTracker | (private) | `function createSlackEventDeliveryTracker() {` |
| 324 | fn | shouldUseStreaming | (private) | `function shouldUseStreaming(params: {` |
| 338 | fn | resolveSlackStreamRecipientTeamId | (private) | `async function resolveSlackStreamRecipientTeamI...` |
| 366 | fn | dispatchPreparedSlackMessage | pub | `export async function dispatchPreparedSlackMess...` |
| 660 | fn | refreshStreamedAcknowledgements | (private) | `const refreshStreamedAcknowledgements = (sessio...` |
| 667 | fn | recordStreamedDelivery | (private) | `const recordStreamedDelivery = (kind: ReplyDisp...` |
| 676 | fn | rememberStreamedDelivery | (private) | `const rememberStreamedDelivery = (` |
| 684 | fn | emitAcknowledgedStreamedDeliveries | (private) | `const emitAcknowledgedStreamedDeliveries = (mes...` |
| 700 | fn | acknowledgeStoppedStreamedDeliveries | (private) | `const acknowledgeStoppedStreamedDeliveries = (` |
| 710 | fn | emitFailedPendingStreamedDeliveries | (private) | `const emitFailedPendingStreamedDeliveries = (er...` |
| 726 | fn | emitSuccessfulPendingStreamedDeliveries | (private) | `const emitSuccessfulPendingStreamedDeliveries =...` |
| 743 | fn | markPreviewPayloadDelivered | (private) | `const markPreviewPayloadDelivered = (params: {` |
| 767 | fn | rememberDeliveredThreadTs | (private) | `const rememberDeliveredThreadTs = (` |
| 957 | fn | appendNativeProgressCompletion | (private) | `const appendNativeProgressCompletion = async (i...` |
| 1466 | fn | onSlackDeliveryError | (private) | `const onSlackDeliveryError = (err: unknown, inf...` |
| 1582 | fn | combineProgressHeadlineAndExplanation | (private) | `const combineProgressHeadlineAndExplanation = (` |
| 1590 | fn | resolveNativeProgressTitle | (private) | `const resolveNativeProgressTitle = (snapshot: C...` |
| 1596 | fn | buildNativeProgressChunks | (private) | `const buildNativeProgressChunks = (snapshot: Ch...` |
| 1611 | fn | markNativeProgressDelivered | (private) | `const markNativeProgressDelivered = (session: S...` |
| 1621 | fn | startNativeProgressStream | (private) | `const startNativeProgressStream = async (` |
| 1634 | fn | startPromise | (private) | `const startPromise = (async () => {` |
| 1669 | fn | appendNativeProgressStream | (private) | `const appendNativeProgressStream = async (` |
| 1681 | fn | updateNativeProgressStream | (private) | `const updateNativeProgressStream = async () => {` |
| 1733 | fn | resetProgressTurnState | (private) | `const resetProgressTurnState = () => {` |
| 1739 | fn | collapseProgressReceipt | (private) | `const collapseProgressReceipt = async (` |
| 1803 | fn | buildNativeProgressCompletionChunks | (private) | `const buildNativeProgressCompletionChunks = (fi...` |
| 1824 | fn | finishNativeProgressTurn | (private) | `const finishNativeProgressTurn = async (` |
| 1865 | fn | pushPlanProgress | (private) | `const pushPlanProgress = async (steps?: AgentPl...` |
| 1887 | fn | pushPreviewProgress | (private) | `const pushPreviewProgress = async (` |
| 1933 | fn | updateDraftFromPartial | (private) | `const updateDraftFromPartial = (text?: string) ...` |
| 1966 | fn | pushReasoningProgress | (private) | `const pushReasoningProgress = async (payload?: {` |
| 1996 | fn | resetDraftDeliveryState | (private) | `const resetDraftDeliveryState = () => {` |
| 2001 | fn | resetDraftProgressState | (private) | `const resetDraftProgressState = () => {` |
| 2006 | fn | beginNewProgressTurn | (private) | `const beginNewProgressTurn = async (options?: {...` |
| 2425 | fn | toLintErrorObject | (private) | `function toLintErrorObject(value: unknown, fall...` |

## Public API

### `dispatchPreparedSlackMessage`

```
export async function dispatchPreparedSlackMessage(prepared: PreparedSlackMessage) {
```

**Line:** 366 | **Kind:** fn
