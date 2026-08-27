# src/gateway/control-ui.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1188
- **Language:** TypeScript
- **Symbols:** 36
- **Public symbols:** 4

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 99 | type | ControlUiRequestOptions | (private) | - |
| 111 | type | ControlUiRootState | pub | - |
| 128 | fn | rewriteControlUiIndexHtmlPublicAssetHrefs | (private) | `function rewriteControlUiIndexHtmlPublicAssetHr...` |
| 142 | fn | escapeHtmlAttribute | (private) | `function escapeHtmlAttribute(value: string): st...` |
| 151 | type | ControlUiAvatarMeta | (private) | - |
| 158 | fn | controlUiAvatarResolutionMeta | (private) | `function controlUiAvatarResolutionMeta(resolved...` |
| 173 | fn | applyControlUiSecurityHeaders | (private) | `function applyControlUiSecurityHeaders(res: Ser...` |
| 186 | fn | sendJson | (private) | `function sendJson(res: ServerResponse, status: ...` |
| 193 | fn | respondControlUiAssetsUnavailable | (private) | `function respondControlUiAssetsUnavailable(` |
| 208 | fn | isValidAgentId | (private) | `function isValidAgentId(agentId: string): boole...` |
| 212 | fn | normalizeAssistantMediaSource | (private) | `function normalizeAssistantMediaSource(source: ...` |
| 230 | fn | resolveAssistantMediaRoutePath | (private) | `function resolveAssistantMediaRoutePath(basePat...` |
| 236 | fn | resolveAssistantMediaAuthToken | (private) | `function resolveAssistantMediaAuthToken(req: In...` |
| 254 | fn | resolveControlUiReadAuthToken | (private) | `function resolveControlUiReadAuthToken(` |
| 268 | fn | authorizeControlUiReadRequest | (private) | `async function authorizeControlUiReadRequest(` |
| 376 | fn | authorizeControlUiDeviceReadToken | (private) | `async function authorizeControlUiDeviceReadToken(` |
| 403 | fn | resolveControlUiDeviceReadTokenScopes | (private) | `async function resolveControlUiDeviceReadTokenS...` |
| 418 | type | AssistantMediaAvailability | (private) | - |
| 422 | type | AssistantMediaTicketPayload | (private) | - |
| 428 | fn | signAssistantMediaTicketPayload | (private) | `function signAssistantMediaTicketPayload(encode...` |
| 434 | fn | createAssistantMediaTicket | (private) | `function createAssistantMediaTicket(source: str...` |
| 456 | fn | verifyAssistantMediaTicket | (private) | `function verifyAssistantMediaTicket(ticket: str...` |
| 489 | fn | classifyAssistantMediaError | (private) | `function classifyAssistantMediaError(err: unkno...` |
| 534 | fn | resolveAssistantMediaAvailability | (private) | `async function resolveAssistantMediaAvailability(` |
| 549 | fn | handleControlUiAssistantMediaRequest | pub | `export async function handleControlUiAssistantM...` |
| 611 | fn | closeOpenedHandle | (private) | `const closeOpenedHandle = async () => {` |
| 646 | fn | finishClose | (private) | `const finishClose = () => {` |
| 669 | fn | handleControlUiAvatarRequest | pub | `export async function handleControlUiAvatarRequ...` |
| 769 | fn | serveResolvedIndexHtml | (private) | `async function serveResolvedIndexHtml(` |
| 799 | fn | isExpectedSafePathError | (private) | `function isExpectedSafePathError(error: unknown...` |
| 805 | fn | resolveSafeControlUiFile | (private) | `function resolveSafeControlUiFile(` |
| 829 | fn | isSafeRelativePath | (private) | `function isSafeRelativePath(relPath: string) {` |
| 886 | fn | matchesControlUiBootstrapConfigPath | (private) | `function matchesControlUiBootstrapConfigPath(pa...` |
| 904 | fn | handleControlUiHttpRequest | pub | `export async function handleControlUiHttpRequest(` |
| 1028 | fn | rootReal | (private) | `const rootReal = (() => {` |
| 1046 | fn | rel | (private) | `const rel = (() => {` |

## Public API

### `handleControlUiAssistantMediaRequest`

```
export async function handleControlUiAssistantMediaRequest(
```

**Line:** 549 | **Kind:** fn

### `handleControlUiAvatarRequest`

```
export async function handleControlUiAvatarRequest(
```

**Line:** 669 | **Kind:** fn

### `handleControlUiHttpRequest`

```
export async function handleControlUiHttpRequest(
```

**Line:** 904 | **Kind:** fn
