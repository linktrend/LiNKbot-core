# ui/src/pages/chat/chat-thread.ts

[← Back to Module](../modules/ui-src-pages-chat/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2106
- **Language:** TypeScript
- **Symbols:** 79
- **Public symbols:** 9

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 52 | type | BuildChatItemsProps | (private) | - |
| 79 | type | CachedChatItems | (private) | - |
| 86 | type | RenderChatItem | (private) | - |
| 87 | type | StreamRunRenderItem | (private) | - |
| 103 | fn | resetChatThreadState | pub | `export function resetChatThreadState(paneId?: s...` |
| 115 | fn | appendCanvasBlockToAssistantMessage | (private) | `function appendCanvasBlockToAssistantMessage(` |
| 159 | fn | safeNormalizeMessage | (private) | `function safeNormalizeMessage(message: unknown)...` |
| 170 | fn | messageMatchesSearchQuery | (private) | `function messageMatchesSearchQuery(message: unk...` |
| 179 | fn | turnHasMatchingAssistant | (private) | `function turnHasMatchingAssistant(` |
| 201 | type | ChatMessagePreview | (private) | - |
| 207 | fn | extractChatMessagePreview | (private) | `function extractChatMessagePreview(toolMessage:...` |
| 237 | fn | canvasPreviewBaseIdentity | (private) | `function canvasPreviewBaseIdentity(message: unk...` |
| 243 | fn | createCanvasAssistantMessage | (private) | `function createCanvasAssistantMessage(` |
| 258 | fn | transcriptPositionTimestamp | (private) | `function transcriptPositionTimestamp(messages: ...` |
| 282 | fn | findNearestAssistantMessageIndex | (private) | `function findNearestAssistantMessageIndex(` |
| 362 | fn | findCanvasInsertionIndex | (private) | `function findCanvasInsertionIndex(items: ChatIt...` |
| 384 | fn | groupMessages | (private) | `function groupMessages(items: ChatItem[]): Arra...` |
| 446 | fn | mergeToolCallResultPair | (private) | `function mergeToolCallResultPair(callItem: Chat...` |
| 577 | fn | resolveMessageToolUseId | (private) | `function resolveMessageToolUseId(message: Recor...` |
| 587 | fn | resolveToolBlockId | (private) | `function resolveToolBlockId(` |
| 594 | fn | unresolvedToolCallIds | (private) | `function unresolvedToolCallIds(item: ChatItem):...` |
| 626 | fn | isToolTimelineItem | (private) | `function isToolTimelineItem(item: ChatItem): bo...` |
| 634 | fn | splitBundledToolResultItems | (private) | `function splitBundledToolResultItems(item: Chat...` |
| 666 | fn | resolveToolResultCallId | (private) | `function resolveToolResultCallId(item: ChatItem...` |
| 694 | fn | refreshOpenCallIds | (private) | `function refreshOpenCallIds(` |
| 713 | fn | coalesceToolActivityMessages | (private) | `function coalesceToolActivityMessages(items: Ch...` |
| 773 | fn | assistantGroupHasReplyText | (private) | `function assistantGroupHasReplyText(group: Mess...` |
| 782 | fn | assistantGroupIsForwardedBoundary | (private) | `function assistantGroupIsForwardedBoundary(grou...` |
| 789 | fn | groupStartsProjectedTurnBoundary | (private) | `function groupStartsProjectedTurnBoundary(group...` |
| 793 | fn | annotateToolTurnOutcome | (private) | `function annotateToolTurnOutcome(` |
| 827 | fn | isPendingSendMessage | (private) | `function isPendingSendMessage(message: unknown)...` |
| 831 | fn | sourceMessageId | (private) | `function sourceMessageId(message: unknown): str...` |
| 848 | fn | persistedMessageEntryId | pub | `export function persistedMessageEntryId(message...` |
| 852 | fn | transcriptMessageSourceKey | (private) | `function transcriptMessageSourceKey(message: un...` |
| 869 | fn | messageProjectionDigest | (private) | `function messageProjectionDigest(message: unkno...` |
| 894 | fn | buildMessageKeys | (private) | `function buildMessageKeys(messages: unknown[], ...` |
| 915 | fn | collapseDuplicateSourceKey | (private) | `function collapseDuplicateSourceKey(message: un...` |
| 931 | fn | prefersNativeChatSurface | (private) | `function prefersNativeChatSurface(message: unkn...` |
| 940 | fn | escapeRegExp | (private) | `function escapeRegExp(text: string): string {` |
| 944 | fn | stripSenderLabelPrefix | (private) | `function stripSenderLabelPrefix(text: string, s...` |
| 952 | fn | sourceDuplicateDisplayParts | (private) | `function sourceDuplicateDisplayParts(message: u...` |
| 983 | fn | isSameSourceRelayNativeDuplicate | (private) | `function isSameSourceRelayNativeDuplicate(previ...` |
| 1000 | fn | collapseDuplicateDisplaySignature | (private) | `function collapseDuplicateDisplaySignature(mess...` |
| 1031 | fn | collapseSequentialDuplicateMessages | (private) | `function collapseSequentialDuplicateMessages(it...` |
| 1075 | fn | hasRenderableNormalizedMessage | (private) | `function hasRenderableNormalizedMessage(message...` |
| 1085 | fn | sanitizeStreamText | (private) | `function sanitizeStreamText(text: string): stri...` |
| 1090 | fn | queuedSendThreadMessage | (private) | `function queuedSendThreadMessage(item: ChatQueu...` |
| 1113 | fn | rawMessageTimestamp | (private) | `function rawMessageTimestamp(message: unknown):...` |
| 1118 | fn | chatItemTimestamp | (private) | `function chatItemTimestamp(item: ChatItem): num...` |
| 1135 | fn | timestampAfterVisibleItems | (private) | `function timestampAfterVisibleItems(items: Chat...` |
| 1148 | fn | sortChatItemsByVisibleTime | (private) | `function sortChatItemsByVisibleTime(` |
| 1198 | fn | buildChatItems | (private) | `function buildChatItems(props: BuildChatItemsPr...` |
| 1282 | fn | appendQueuedSend | (private) | `const appendQueuedSend = (queued: ChatQueueItem...` |
| 1537 | fn | sameMessageGroup | (private) | `function sameMessageGroup(previous: MessageGrou...` |
| 1559 | fn | sameChatItem | (private) | `function sameChatItem(previous: RenderChatItem,...` |
| 1603 | fn | stabilizeChatItems | (private) | `function stabilizeChatItems(` |
| 1685 | fn | sameChatItemsStructuralInput | (private) | `function sameChatItemsStructuralInput(` |
| 1710 | fn | sameChatItemsInput | (private) | `function sameChatItemsInput(previous: BuildChat...` |
| 1714 | fn | sameChatItemsInputExceptStream | (private) | `function sameChatItemsInputExceptStream(` |
| 1723 | fn | accumulatedIndexedStreamText | (private) | `function accumulatedIndexedStreamText(segments:...` |
| 1737 | fn | updateCachedLiveStream | (private) | `function updateCachedLiveStream(` |
| 1759 | fn | findLiveStreamIndex | (private) | `function findLiveStreamIndex(items: ReturnType<...` |
| 1763 | fn | buildCachedChatItems | pub | `export function buildCachedChatItems(` |
| 1799 | fn | coalesceStreamRuns | pub | `export function coalesceStreamRuns(` |
| 1806 | fn | flush | (private) | `const flush = () => {` |
| 1826 | type | WorkGroupRenderItem | (private) | - |
| 1834 | type | TurnRenderItem | (private) | - |
| 1836 | fn | isTurnBoundaryGroup | (private) | `function isTurnBoundaryGroup(item: TurnRenderIt...` |
| 1850 | fn | isCollapsibleWorkGroup | (private) | `function isCollapsibleWorkGroup(item: TurnRende...` |
| 1862 | fn | assistantGroupHasVisibleReplyContent | (private) | `function assistantGroupHasVisibleReplyContent(g...` |
| 1881 | fn | isFinalReplyGroup | (private) | `function isFinalReplyGroup(item: TurnRenderItem...` |
| 1889 | fn | workGroupHasError | (private) | `function workGroupHasError(groups: MessageGroup...` |
| 1906 | fn | collapseCompletedTurnWork | pub | `export function collapseCompletedTurnWork(` |
| 1993 | fn | deletedChatItemsSignature | pub | `export function deletedChatItemsSignature(` |
| 2004 | fn | stableBooleanMapSignature | pub | `export function stableBooleanMapSignature(value...` |
| 2014 | fn | getExpandedToolCards | pub | `export function getExpandedToolCards(sessionKey...` |
| 2018 | fn | getInitializedToolCards | (private) | `function getInitializedToolCards(sessionKey: st...` |
| 2022 | fn | syncToolCardExpansionState | pub | `export function syncToolCardExpansionState(` |
| 2066 | fn | messageKey | (private) | `function messageKey(message: unknown, index: nu...` |

## Public API

### `resetChatThreadState`

```
export function resetChatThreadState(paneId?: string): void {
```

**Line:** 103 | **Kind:** fn

### `persistedMessageEntryId`

```
export function persistedMessageEntryId(message: unknown): string | null {
```

**Line:** 848 | **Kind:** fn

### `buildCachedChatItems`

```
export function buildCachedChatItems(
```

**Line:** 1763 | **Kind:** fn

### `coalesceStreamRuns`

```
export function coalesceStreamRuns(
```

**Line:** 1799 | **Kind:** fn

### `collapseCompletedTurnWork`

```
export function collapseCompletedTurnWork(
```

**Line:** 1906 | **Kind:** fn

### `deletedChatItemsSignature`

```
export function deletedChatItemsSignature(
```

**Line:** 1993 | **Kind:** fn

### `stableBooleanMapSignature`

```
export function stableBooleanMapSignature(values: ReadonlyMap<string, boolean>): string {
```

**Line:** 2004 | **Kind:** fn

### `getExpandedToolCards`

```
export function getExpandedToolCards(sessionKey: string): Map<string, boolean> {
```

**Line:** 2014 | **Kind:** fn

### `syncToolCardExpansionState`

```
export function syncToolCardExpansionState(
```

**Line:** 2022 | **Kind:** fn
