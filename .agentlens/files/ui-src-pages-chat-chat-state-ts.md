# ui/src/pages/chat/chat-state.ts

[← Back to Module](../modules/ui-src-pages-chat/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1965
- **Language:** TypeScript
- **Symbols:** 53
- **Public symbols:** 15

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 160 | type | ChatPageElement | (private) | - |
| 164 | type | ChatComposerMemoryFallback | (private) | - |
| 174 | type | ChatComposerRouteResetResult | (private) | - |
| 179 | type | ChatPageHost | pub | - |
| 301 | type | PendingCreatedSessionComposer | (private) | - |
| 307 | fn | canCreateChatSession | pub | `export function canCreateChatSession(` |
| 322 | fn | saveChatQueueForSession | (private) | `function saveChatQueueForSession(state: ChatPag...` |
| 341 | fn | restoreChatQueueForSession | (private) | `function restoreChatQueueForSession(state: Chat...` |
| 346 | fn | saveChatMessagesForSession | (private) | `function saveChatMessagesForSession(state: Chat...` |
| 359 | fn | restoreChatMessagesForSession | (private) | `function restoreChatMessagesForSession(` |
| 372 | fn | resolveChatComposerMemoryFallback | (private) | `function resolveChatComposerMemoryFallback(` |
| 461 | fn | saveRouteSessionSettings | pub | `export function saveRouteSessionSettings(state:...` |
| 474 | fn | resetChatStateForRouteSession | pub | `export function resetChatStateForRouteSession(` |
| 589 | fn | retryChatComposerMemoryFallback | pub | `export function retryChatComposerMemoryFallback...` |
| 622 | fn | refreshRouteSessionOptions | pub | `export async function refreshRouteSessionOption...` |
| 626 | fn | resolveChatAgentId | pub | `export function resolveChatAgentId(` |
| 636 | fn | resolveChatAvatarUrl | pub | `export function resolveChatAvatarUrl(` |
| 676 | type | ChatMetadataApplyResult | (private) | - |
| 681 | type | ChatRefreshOptions | (private) | - |
| 687 | type | ChatStartupMetadataHandler | (private) | - |
| 693 | fn | scheduleChatMetadataRefresh | (private) | `function scheduleChatMetadataRefresh(callback: ...` |
| 703 | fn | refreshChatCommands | pub | `export async function refreshChatCommands(host:...` |
| 710 | fn | applyChatMetadataResult | (private) | `function applyChatMetadataResult(` |
| 728 | fn | ownsChatMetadataRequest | (private) | `function ownsChatMetadataRequest(` |
| 742 | fn | refreshCompatibilityModelCatalog | (private) | `async function refreshCompatibilityModelCatalog(` |
| 754 | fn | refreshCompatibilityCommands | (private) | `async function refreshCompatibilityCommands(` |
| 767 | fn | canUseCompatibilityModelCatalog | (private) | `function canUseCompatibilityModelCatalog(` |
| 774 | fn | refreshChatMetadata | pub | `export async function refreshChatMetadata(` |
| 845 | fn | refreshChatModelAuthStatus | pub | `export async function refreshChatModelAuthStatu...` |
| 866 | fn | refreshChat | (private) | `async function refreshChat(` |
| 875 | fn | requestUpdate | (private) | `const requestUpdate = () => host.requestUpdate?...` |
| 955 | fn | refreshPageChat | pub | `export function refreshPageChat(host: ChatPageH...` |
| 985 | fn | ownsScheduledMetadataRefresh | (private) | `const ownsScheduledMetadataRefresh = () =>` |
| 1014 | fn | sessionMessageMatchesChat | (private) | `function sessionMessageMatchesChat(` |
| 1021 | fn | selectedGlobalEventAgentId | (private) | `function selectedGlobalEventAgentId(state: Chat...` |
| 1025 | fn | globalSessionEventMatchesChat | (private) | `function globalSessionEventMatchesChat(` |
| 1040 | fn | reconcileSessionEvent | (private) | `function reconcileSessionEvent(state: ChatPageH...` |
| 1056 | fn | finishSessionMessageRunReconcile | (private) | `function finishSessionMessageRunReconcile(` |
| 1082 | fn | handleSessionMessageEvent | (private) | `function handleSessionMessageEvent(state: ChatP...` |
| 1130 | fn | replayPendingSessionMessageReload | (private) | `function replayPendingSessionMessageReload(` |
| 1149 | fn | handleSessionsChangedEvent | (private) | `function handleSessionsChangedEvent(state: Chat...` |
| 1181 | fn | loadPageAssistantIdentity | (private) | `async function loadPageAssistantIdentity(` |
| 1215 | fn | createPageState | pub | `export function createPageState(` |
| 1431 | fn | hasVisibleFinalAssistantReply | (private) | `function hasVisibleFinalAssistantReply(` |
| 1462 | fn | handlePageGatewayEvent | pub | `export function handlePageGatewayEvent(state: C...` |
| 1526 | fn | rememberDeliveredQueuedUserTurn | (private) | `function rememberDeliveredQueuedUserTurn(` |
| 1567 | type | ChatPageUpdateMode | (private) | - |
| 1569 | fn | cancelChatStreamRenderFrame | (private) | `function cancelChatStreamRenderFrame(state: Pic...` |
| 1580 | fn | requestChatPageUpdate | (private) | `function requestChatPageUpdate(` |
| 1605 | type | ChatRenderLifecycleScope | (private) | - |
| 1610 | class | ChatStateController | pub | - |
| 1742 | fn | complete | (private) | `const complete = () => {` |
| 1750 | fn | cancel | (private) | `const cancel = () => {` |

## Public API

### `canCreateChatSession`

```
export function canCreateChatSession(
```

**Line:** 307 | **Kind:** fn

### `saveRouteSessionSettings`

```
export function saveRouteSessionSettings(state: ChatPageHost, sessionKey: string) {
```

**Line:** 461 | **Kind:** fn

### `resetChatStateForRouteSession`

```
export function resetChatStateForRouteSession(
```

**Line:** 474 | **Kind:** fn

### `retryChatComposerMemoryFallback`

```
export function retryChatComposerMemoryFallback(state: ChatPageHost, sessionKey: string): boolean {
```

**Line:** 589 | **Kind:** fn

### `refreshRouteSessionOptions`

```
export async function refreshRouteSessionOptions(state: ChatPageHost) {
```

**Line:** 622 | **Kind:** fn

### `resolveChatAgentId`

```
export function resolveChatAgentId(
```

**Line:** 626 | **Kind:** fn

### `resolveChatAvatarUrl`

```
export function resolveChatAvatarUrl(
```

**Line:** 636 | **Kind:** fn

### `refreshChatCommands`

```
export async function refreshChatCommands(host: ChatPageHost) {
```

**Line:** 703 | **Kind:** fn

### `refreshChatMetadata`

```
export async function refreshChatMetadata(
```

**Line:** 774 | **Kind:** fn

### `refreshChatModelAuthStatus`

```
export async function refreshChatModelAuthStatus(host: ChatPageHost, opts?: { refresh?: boolean }) {
```

**Line:** 845 | **Kind:** fn

### `refreshPageChat`

```
export function refreshPageChat(host: ChatPageHost, opts?: ChatRefreshOptions) {
```

**Line:** 955 | **Kind:** fn

### `createPageState`

```
export function createPageState(
```

**Line:** 1215 | **Kind:** fn

### `handlePageGatewayEvent`

```
export function handlePageGatewayEvent(state: ChatPageHost, event: GatewayEventFrame) {
```

**Line:** 1462 | **Kind:** fn
