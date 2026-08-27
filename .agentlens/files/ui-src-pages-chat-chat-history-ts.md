# ui/src/pages/chat/chat-history.ts

[← Back to Module](../modules/ui-src-pages-chat/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1404
- **Language:** TypeScript
- **Symbols:** 58
- **Public symbols:** 18

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 97 | type | ChatHistoryRequestOwnership | (private) | - |
| 105 | fn | beginChatHistoryRequest | (private) | `function beginChatHistoryRequest(` |
| 124 | fn | ownsChatHistoryRequest | (private) | `function ownsChatHistoryRequest(state: ChatStat...` |
| 133 | fn | shouldApplyChatHistoryResult | (private) | `function shouldApplyChatHistoryResult(` |
| 145 | fn | isSilentReplyStream | pub | `export function isSilentReplyStream(text: strin...` |
| 150 | fn | isAssistantSilentReply | (private) | `function isAssistantSilentReply(message: unknow...` |
| 167 | fn | isSyntheticTranscriptRepairToolResult | (private) | `function isSyntheticTranscriptRepairToolResult(...` |
| 180 | fn | isTextOnlyContent | (private) | `function isTextOnlyContent(content: unknown): b...` |
| 207 | fn | isEmptyUserTextOnlyMessage | (private) | `function isEmptyUserTextOnlyMessage(message: un...` |
| 229 | fn | isHeartbeatAckStream | (private) | `function isHeartbeatAckStream(text: string): bo...` |
| 233 | fn | isHiddenAssistantStreamText | pub | `export function isHiddenAssistantStreamText(tex...` |
| 237 | fn | shouldHideAssistantChatMessage | pub | `export function shouldHideAssistantChatMessage(...` |
| 241 | fn | shouldHideHistoryMessage | (private) | `function shouldHideHistoryMessage(message: unkn...` |
| 249 | fn | materializeVisibleAssistantStreamMessages | pub | `export function materializeVisibleAssistantStre...` |
| 266 | fn | chatPersistCommentaryEnabled | (private) | `function chatPersistCommentaryEnabled(state: Ch...` |
| 270 | fn | historyHasSameOrNewerDisplayMessage | (private) | `function historyHasSameOrNewerDisplayMessage(` |
| 288 | fn | collectLateOptimisticTailMessages | (private) | `function collectLateOptimisticTailMessages(` |
| 316 | type | ChatState | pub | - |
| 368 | type | ChatAgentsListSnapshot | (private) | - |
| 372 | type | ChatSessionMessageSubscriptionState | (private) | - |
| 381 | type | ChatHistoryResult | pub | - |
| 405 | fn | reconcileHistoryPlanStatus | (private) | `function reconcileHistoryPlanStatus(params: {` |
| 433 | fn | resolveChatHistoryPagination | pub | `export function resolveChatHistoryPagination(` |
| 461 | fn | resolveChatHistorySessionId | (private) | `function resolveChatHistorySessionId(result: Ch...` |
| 470 | fn | retainedRawHistoryStart | (private) | `function retainedRawHistoryStart(pagination: Ch...` |
| 484 | fn | reconcileLoadedHistoryTail | (private) | `function reconcileLoadedHistoryTail(options: {` |
| 531 | type | ChatMetadataResult | pub | - |
| 535 | type | ChatEventPayload | pub | - |
| 548 | fn | setChatError | (private) | `function setChatError(state: ChatState, error: ...` |
| 553 | fn | chatScopedEventAgentScopeMatches | (private) | `function chatScopedEventAgentScopeMatches(` |
| 569 | fn | chatScopedEventSessionMatches | pub | `export function chatScopedEventSessionMatches(` |
| 584 | fn | normalizeSubscriptionKey | (private) | `function normalizeSubscriptionKey(value: string...` |
| 589 | fn | resolveSelectedGlobalAliasAgentId | (private) | `function resolveSelectedGlobalAliasAgentId(` |
| 600 | fn | resolveSelectedGlobalAgentId | (private) | `function resolveSelectedGlobalAgentId(state: Ch...` |
| 608 | fn | resolveSelectedSessionMessageSubscriptionAgentId | (private) | `function resolveSelectedSessionMessageSubscript...` |
| 618 | fn | beginSelectedSessionMessageSubscriptionSync | (private) | `function beginSelectedSessionMessageSubscriptio...` |
| 627 | fn | isCurrentSelectedSessionMessageSubscriptionSync | (private) | `function isCurrentSelectedSessionMessageSubscri...` |
| 646 | fn | unsubscribeSelectedSessionMessageBestEffort | (private) | `async function unsubscribeSelectedSessionMessag...` |
| 661 | fn | syncSelectedSessionMessageSubscription | pub | `export async function syncSelectedSessionMessag...` |
| 696 | fn | isCurrent | (private) | `const isCurrent = () =>` |
| 749 | type | InFlightChatHistoryRequest | (private) | - |
| 757 | type | LoadChatHistoryOptions | (private) | - |
| 763 | fn | recordChatHistoryTiming | (private) | `function recordChatHistoryTiming(` |
| 783 | fn | replaceCachedChatMessages | (private) | `function replaceCachedChatMessages(state: ChatS...` |
| 799 | type | ClearChatHistoryState | (private) | - |
| 805 | type | ClearChatHistoryResult | (private) | - |
| 807 | type | RewindChatHistoryState | (private) | - |
| 813 | type | SwitchChatHistoryBranchState | (private) | - |
| 818 | fn | hasAbortableChatSessionRun | (private) | `function hasAbortableChatSessionRun(state: Clea...` |
| 829 | fn | clearCachedChatMessagesForSession | (private) | `function clearCachedChatMessagesForSession(` |
| 840 | fn | clearChatHistory | pub | `export async function clearChatHistory(` |
| 925 | fn | rewindChatHistory | pub | `export async function rewindChatHistory(` |
| 964 | fn | switchChatHistoryBranch | pub | `export async function switchChatHistoryBranch(` |
| 994 | fn | loadChatBranches | pub | `export async function loadChatBranches(state: C...` |
| 1045 | fn | loadChatHistory | pub | `export async function loadChatHistory(` |
| 1099 | fn | loadOlderChatHistoryPage | pub | `export async function loadOlderChatHistoryPage(` |
| 1135 | fn | applyChatAgentsList | pub | `export function applyChatAgentsList(` |
| 1159 | fn | loadChatHistoryUncached | (private) | `async function loadChatHistoryUncached(` |

## Public API

### `isSilentReplyStream`

```
export function isSilentReplyStream(text: string): boolean {
```

**Line:** 145 | **Kind:** fn

### `isHiddenAssistantStreamText`

```
export function isHiddenAssistantStreamText(text: string): boolean {
```

**Line:** 233 | **Kind:** fn

### `shouldHideAssistantChatMessage`

```
export function shouldHideAssistantChatMessage(message: unknown): boolean {
```

**Line:** 237 | **Kind:** fn

### `materializeVisibleAssistantStreamMessages`

```
export function materializeVisibleAssistantStreamMessages(
```

**Line:** 249 | **Kind:** fn

### `resolveChatHistoryPagination`

```
export function resolveChatHistoryPagination(
```

**Line:** 433 | **Kind:** fn

### `chatScopedEventSessionMatches`

```
export function chatScopedEventSessionMatches(
```

**Line:** 569 | **Kind:** fn

### `syncSelectedSessionMessageSubscription`

```
export async function syncSelectedSessionMessageSubscription(
```

**Line:** 661 | **Kind:** fn

### `clearChatHistory`

```
export async function clearChatHistory(
```

**Line:** 840 | **Kind:** fn

### `rewindChatHistory`

```
export async function rewindChatHistory(
```

**Line:** 925 | **Kind:** fn

### `switchChatHistoryBranch`

```
export async function switchChatHistoryBranch(
```

**Line:** 964 | **Kind:** fn

### `loadChatBranches`

```
export async function loadChatBranches(state: ChatState): Promise<void> {
```

**Line:** 994 | **Kind:** fn

### `loadChatHistory`

```
export async function loadChatHistory(
```

**Line:** 1045 | **Kind:** fn

### `loadOlderChatHistoryPage`

```
export async function loadOlderChatHistoryPage(
```

**Line:** 1099 | **Kind:** fn

### `applyChatAgentsList`

```
export function applyChatAgentsList(
```

**Line:** 1135 | **Kind:** fn
