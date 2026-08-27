# ui/src/pages/chat/chat-send.ts

[← Back to Module](../modules/ui-src-pages-chat/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2695
- **Language:** TypeScript
- **Symbols:** 80
- **Public symbols:** 6

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 118 | type | ChatHost | pub | - |
| 163 | type | ChatAgentsListSnapshot | (private) | - |
| 167 | fn | setChatError | (private) | `function setChatError(` |
| 175 | fn | sendResetSlashCommand | (private) | `function sendResetSlashCommand(` |
| 188 | type | AcceptedChatSendAck | (private) | - |
| 189 | type | TerminalFailureChatSendAck | (private) | - |
| 191 | fn | isAcceptedChatSendAck | (private) | `function isAcceptedChatSendAck(ack: ChatSendAck...` |
| 195 | fn | isTerminalFailureChatSendAck | (private) | `function isTerminalFailureChatSendAck(ack: Chat...` |
| 199 | fn | formatTerminalChatSendAckError | (private) | `function formatTerminalChatSendAckError(` |
| 218 | type | ChatSendOptions | (private) | - |
| 233 | fn | normalizeAckTimingValue | (private) | `function normalizeAckTimingValue(value: unknown...` |
| 237 | fn | normalizeChatSendAckServerTiming | (private) | `function normalizeChatSendAckServerTiming(value...` |
| 253 | fn | normalizeChatSendAck | (private) | `function normalizeChatSendAck(payload: unknown,...` |
| 272 | fn | requestChatSend | (private) | `async function requestChatSend(` |
| 308 | fn | resolveChatSendRouting | (private) | `function resolveChatSendRouting(` |
| 336 | fn | requestSkillWorkshopRevisionChatSend | (private) | `async function requestSkillWorkshopRevisionChat...` |
| 363 | fn | appendUserChatMessage | (private) | `function appendUserChatMessage(` |
| 378 | fn | sendChatMessageWithGeneratedRunId | (private) | `async function sendChatMessageWithGeneratedRunId(` |
| 416 | fn | sendDetachedChatMessage | (private) | `async function sendDetachedChatMessage(` |
| 425 | fn | isChatResetCommand | (private) | `function isChatResetCommand(text: string) {` |
| 439 | fn | confirmChatResetCommand | (private) | `function confirmChatResetCommand(text: string) {` |
| 449 | fn | isBtwCommand | (private) | `function isBtwCommand(text: string) {` |
| 453 | fn | enqueuePendingSendMessage | (private) | `function enqueuePendingSendMessage(` |
| 497 | fn | isRecoverableChatSendError | (private) | `function isRecoverableChatSendError(err: unknow...` |
| 504 | fn | isProvablyPreTransportChatSendError | (private) | `function isProvablyPreTransportChatSendError(er...` |
| 512 | fn | restoreComposerAfterFailedSend | (private) | `function restoreComposerAfterFailedSend(` |
| 527 | type | PendingComposerSnapshot | (private) | - |
| 532 | fn | pendingComposerRestorePlan | (private) | `function pendingComposerRestorePlan(host: ChatH...` |
| 548 | fn | cancelPendingSendBeforeRequest | (private) | `function cancelPendingSendBeforeRequest(` |
| 577 | type | QueuedChatSendResult | (private) | - |
| 578 | type | QueuedChatStorageMode | (private) | - |
| 579 | type | QueuedChatSendOptions | (private) | - |
| 586 | fn | reconnectSafeQueuedSendState | (private) | `function reconnectSafeQueuedSendState(` |
| 592 | fn | updateQueuedSendItem | (private) | `function updateQueuedSendItem(` |
| 604 | fn | canSendVolatileQueueItem | (private) | `function canSendVolatileQueueItem(` |
| 634 | fn | beginScopedChatSending | (private) | `function beginScopedChatSending(host: ChatHost,...` |
| 642 | fn | finishScopedChatSending | (private) | `function finishScopedChatSending(host: ChatHost...` |
| 650 | fn | retryableGatewayDelayMs | (private) | `function retryableGatewayDelayMs(err: unknown):...` |
| 658 | fn | ensureQueuedSendState | (private) | `function ensureQueuedSendState(` |
| 680 | fn | sendQueuedChatMessage | (private) | `async function sendQueuedChatMessage(` |
| 832 | fn | isVisibleSession | (private) | `const isVisibleSession = () => visibleSessionMa...` |
| 1089 | fn | sendChatMessageNow | (private) | `async function sendChatMessageNow(` |
| 1194 | fn | attachmentSubmitSignature | (private) | `function attachmentSubmitSignature(attachment: ...` |
| 1206 | fn | chatSubmitKey | (private) | `function chatSubmitKey(` |
| 1223 | fn | withChatSubmitGuard | (private) | `async function withChatSubmitGuard<T>(` |
| 1247 | fn | waitForPendingChatSettings | (private) | `async function waitForPendingChatSettings(` |
| 1264 | fn | clearSubmittedComposerState | (private) | `function clearSubmittedComposerState(` |
| 1298 | fn | snapshotChatAttachments | (private) | `function snapshotChatAttachments(attachments: r...` |
| 1308 | fn | sendDetachedCommandMessage | (private) | `async function sendDetachedCommandMessage(` |
| 1344 | fn | sendQueuedChatMessageWithQueueMode | (private) | `async function sendQueuedChatMessageWithQueueMode(` |
| 1512 | fn | steerQueuedChatMessage | pub | `export function steerQueuedChatMessage(host: Ch...` |
| 1516 | type | StoredChatOutboxDrainResult | (private) | - |
| 1517 | type | StoredChatOutboxDrainLane | (private) | - |
| 1534 | fn | storedChatOutboxDrainLanesForClient | (private) | `function storedChatOutboxDrainLanesForClient(` |
| 1546 | fn | storedChatOutboxRetryTimersForClient | (private) | `function storedChatOutboxRetryTimersForClient(` |
| 1558 | fn | cancelStoredChatOutboxRetry | (private) | `function cancelStoredChatOutboxRetry(client: Ga...` |
| 1568 | fn | scheduleStoredChatOutboxRetry | (private) | `function scheduleStoredChatOutboxRetry(` |
| 1592 | fn | sameStoredChatOutboxScope | (private) | `function sameStoredChatOutboxScope(` |
| 1599 | fn | readStoredChatOutbox | (private) | `function readStoredChatOutbox(` |
| 1606 | fn | nextAutomaticStoredChatQueueItem | (private) | `function nextAutomaticStoredChatQueueItem(outbo...` |
| 1620 | fn | sameQueuedDeliveryVersion | (private) | `function sameQueuedDeliveryVersion(left: ChatQu...` |
| 1631 | fn | normalizeQueuedUserText | (private) | `function normalizeQueuedUserText(text: string):...` |
| 1635 | fn | historyMessageMatchesQueuedUserText | (private) | `function historyMessageMatchesQueuedUserText(me...` |
| 1652 | fn | historyContainsQueuedSend | (private) | `function historyContainsQueuedSend(history: Cha...` |
| 1680 | fn | localTranscriptContainsQueuedSend | (private) | `function localTranscriptContainsQueuedSend(host...` |
| 1691 | fn | historySessionIsIdle | (private) | `function historySessionIsIdle(history: ChatHist...` |
| 1699 | fn | removeHistoryProvenQueuedSend | (private) | `function removeHistoryProvenQueuedSend(` |
| 1725 | fn | reconcileStoredChatOutboxHead | (private) | `async function reconcileStoredChatOutboxHead(` |
| 1837 | fn | drainStoredChatOutbox | (private) | `async function drainStoredChatOutbox(` |
| 1880 | fn | convertResetToMessage | (private) | `const convertResetToMessage = (sendState?: Chat...` |
| 1945 | fn | commandScopeIsCurrent | (private) | `const commandScopeIsCurrent = () =>` |
| 2094 | fn | scheduleStoredChatOutboxDrain | (private) | `async function scheduleStoredChatOutboxDrain(` |
| 2162 | fn | resumeStoredChatOutboxes | pub | `export async function resumeStoredChatOutboxes(...` |
| 2171 | fn | flushChatQueue | (private) | `async function flushChatQueue(host: ChatHost) {` |
| 2180 | fn | retryReconnectableQueuedChatSends | pub | `export async function retryReconnectableQueuedC...` |
| 2184 | fn | retryQueuedChatMessage | pub | `export async function retryQueuedChatMessage(ho...` |
| 2271 | fn | handleSendChat | pub | `export async function handleSendChat(` |
| 2429 | fn | dispatchLocalCommand | (private) | `const dispatchLocalCommand = async () => {` |
| 2674 | fn | prependReplyQuote | (private) | `function prependReplyQuote(` |
| 2690 | fn | escapeMarkdownInline | (private) | `function escapeMarkdownInline(value: string): s...` |

## Public API

### `steerQueuedChatMessage`

```
export function steerQueuedChatMessage(host: ChatHost, id: string) {
```

**Line:** 1512 | **Kind:** fn

### `resumeStoredChatOutboxes`

```
export async function resumeStoredChatOutboxes(host: ChatHost) {
```

**Line:** 2162 | **Kind:** fn

### `retryReconnectableQueuedChatSends`

```
export async function retryReconnectableQueuedChatSends(host: ChatHost) {
```

**Line:** 2180 | **Kind:** fn

### `retryQueuedChatMessage`

```
export async function retryQueuedChatMessage(host: ChatHost, id: string) {
```

**Line:** 2184 | **Kind:** fn

### `handleSendChat`

```
export async function handleSendChat(
```

**Line:** 2271 | **Kind:** fn
