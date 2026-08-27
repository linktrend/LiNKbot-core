# ui/src/pages/chat/components/chat-thread.ts

[← Back to Module](../modules/ui-src-pages-chat-components/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1362
- **Language:** TypeScript
- **Symbols:** 39
- **Public symbols:** 7

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 82 | type | ReplyTarget | (private) | - |
| 90 | type | ChatThreadState | (private) | - |
| 98 | type | ChatThreadProps | (private) | - |
| 166 | type | ChatPinnedMessagesProps | (private) | - |
| 171 | type | ChatRenderItem | (private) | - |
| 173 | type | ChatTranscriptRow | (private) | - |
| 177 | type | ChatTranscriptAnnouncement | (private) | - |
| 187 | fn | initialTranscriptRect | (private) | `function initialTranscriptRect(host: ReactiveCo...` |
| 196 | fn | transcriptScrollMargin | (private) | `function transcriptScrollMargin(element: Elemen...` |
| 204 | fn | initialTranscriptScrollMargin | (private) | `function initialTranscriptScrollMargin(host: Re...` |
| 210 | class | ChatSessionVirtualizerHost | (private) | - |
| 460 | class | ChatTranscriptController | pub | - |
| 512 | fn | createChatThreadState | (private) | `function createChatThreadState(): ChatThreadSta...` |
| 524 | fn | getChatThreadState | (private) | `function getChatThreadState(paneId: string): Ch...` |
| 534 | fn | getPinnedMessages | (private) | `function getPinnedMessages(sessionKey: string):...` |
| 542 | fn | getDeletedMessages | (private) | `function getDeletedMessages(sessionKey: string)...` |
| 550 | fn | getPinnedMessageSummary | (private) | `function getPinnedMessageSummary(message: unkno...` |
| 554 | fn | resetChatThreadPresentationState | pub | `export function resetChatThreadPresentationStat...` |
| 568 | fn | renderChatSearchBar | pub | `export function renderChatSearchBar(` |
| 606 | fn | isChatThreadSearchOpen | pub | `export function isChatThreadSearchOpen(paneId: ...` |
| 610 | fn | toggleChatThreadSearch | pub | `export function toggleChatThreadSearch(paneId: ...` |
| 619 | fn | renderChatPinnedMessages | pub | `export function renderChatPinnedMessages(` |
| 698 | fn | removeReplyContextMenu | (private) | `function removeReplyContextMenu(paneId?: string) {` |
| 720 | fn | stableReplyMessageId | (private) | `function stableReplyMessageId(senderLabel: stri...` |
| 730 | fn | createReplyContextMenuButton | (private) | `function createReplyContextMenuButton(onClick: ...` |
| 756 | fn | createMessageActionContextButton | (private) | `function createMessageActionContextButton(param...` |
| 775 | fn | handleChatThreadSelectionPointerUp | (private) | `function handleChatThreadSelectionPointerUp(eve...` |
| 797 | fn | handleChatContextMenu | (private) | `function handleChatContextMenu(event: MouseEven...` |
| 916 | fn | handleKeydown | (private) | `const handleKeydown = (nextEvent: KeyboardEvent...` |
| 932 | fn | renderLoadingSkeleton | (private) | `function renderLoadingSkeleton() {` |
| 972 | fn | renderHistorySentinel | (private) | `function renderHistorySentinel(loading: boolean) {` |
| 987 | fn | latestTranscriptAnnouncement | (private) | `function latestTranscriptAnnouncement(` |
| 1009 | fn | chatRenderItemGuardDependencies | (private) | `function chatRenderItemGuardDependencies(item: ...` |
| 1019 | fn | trackTranscriptRenderDependencies | (private) | `function trackTranscriptRenderDependencies(` |
| 1038 | fn | guardChatRenderItems | (private) | `function guardChatRenderItems(state: ChatThread...` |
| 1045 | fn | renderChatThread | pub | `export function renderChatThread(` |
| 1052 | fn | renderChatThreadContents | (private) | `function renderChatThreadContents(` |
| 1110 | fn | toggleToolCardExpanded | (private) | `const toggleToolCardExpanded = (toolCardId: str...` |
| 1140 | fn | renderGroupItem | (private) | `const renderGroupItem = (item: MessageGroup) => {` |

## Public API

### `resetChatThreadPresentationState`

```
export function resetChatThreadPresentationState(paneId?: string) {
```

**Line:** 554 | **Kind:** fn

### `renderChatSearchBar`

```
export function renderChatSearchBar(
```

**Line:** 568 | **Kind:** fn

### `isChatThreadSearchOpen`

```
export function isChatThreadSearchOpen(paneId: string): boolean {
```

**Line:** 606 | **Kind:** fn

### `toggleChatThreadSearch`

```
export function toggleChatThreadSearch(paneId: string, requestUpdate: () => void): void {
```

**Line:** 610 | **Kind:** fn

### `renderChatPinnedMessages`

```
export function renderChatPinnedMessages(
```

**Line:** 619 | **Kind:** fn

### `renderChatThread`

```
export function renderChatThread(
```

**Line:** 1045 | **Kind:** fn
