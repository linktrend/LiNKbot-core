# extensions/codex/src/app-server/client.ts

[← Back to Module](../modules/extensions-codex-src-app-server/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1160
- **Language:** TypeScript
- **Symbols:** 41
- **Public symbols:** 12

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 46 | type | PendingRequest | (private) | - |
| 54 | fn | getCodexAppServerClientInstanceId | pub | `export function getCodexAppServerClientInstance...` |
| 65 | class | CodexAppServerRpcError | pub | - |
| 79 | class | CodexAppServerLocalRequestCancellationError | (private) | - |
| 92 | fn | isCodexAppServerRequestTimeoutError | pub | `export function isCodexAppServerRequestTimeoutE...` |
| 102 | fn | isCodexAppServerBrokenPipeError | pub | `export function isCodexAppServerBrokenPipeError...` |
| 115 | class | CodexAppServerIndeterminateTransportError | (private) | - |
| 126 | fn | isCodexAppServerIndeterminateRequestCancellationError | pub | `export function isCodexAppServerIndeterminateRe...` |
| 139 | fn | isCodexAppServerPrewriteRequestCancellationError | pub | `export function isCodexAppServerPrewriteRequest...` |
| 152 | fn | isCodexAppServerIndeterminateTransportError | pub | `export function isCodexAppServerIndeterminateTr...` |
| 165 | fn | formatCodexAppServerRpcErrorMessage | (private) | `function formatCodexAppServerRpcErrorMessage(` |
| 174 | fn | readCodexAppServerRpcReloginDetail | (private) | `function readCodexAppServerRpcReloginDetail(dat...` |
| 187 | fn | isJsonObject | (private) | `function isJsonObject(value: unknown): value is...` |
| 192 | fn | isCodexAppServerConnectionClosedError | pub | `export function isCodexAppServerConnectionClose...` |
| 205 | type | CodexServerRequestHandler | (private) | - |
| 210 | type | CodexServerNotificationHandler | (private) | - |
| 215 | type | CodexAppServerRuntimeIdentity | pub | - |
| 224 | class | CodexAppServerClient | pub | - |
| 438 | fn | release | (private) | `const release = () => {` |
| 559 | fn | abortListener | (private) | `const abortListener = () => {` |
| 563 | fn | cleanup | (private) | `const cleanup = () => {` |
| 594 | fn | cleanup | (private) | `const cleanup = () => {` |
| 602 | fn | rejectPending | (private) | `const rejectPending = (error: Error) => {` |
| 628 | fn | abortListener | (private) | `const abortListener = () =>` |
| 711 | fn | runOnExit | (private) | `const runOnExit = () => {` |
| 950 | fn | defaultServerRequestResponse | (private) | `function defaultServerRequestResponse(` |
| 986 | fn | stringifyCodexAppServerMessage | (private) | `function stringifyCodexAppServerMessage(message...` |
| 994 | fn | timeoutServerRequestResponse | (private) | `function timeoutServerRequestResponse(` |
| 1012 | class | CodexAppServerVersionError | (private) | - |
| 1027 | fn | assertSupportedCodexAppServerVersion | (private) | `function assertSupportedCodexAppServerVersion(r...` |
| 1044 | fn | isUnsupportedCodexAppServerVersionError | pub | `export function isUnsupportedCodexAppServerVers...` |
| 1048 | fn | buildCodexAppServerRuntimeIdentity | (private) | `function buildCodexAppServerRuntimeIdentity(` |
| 1065 | fn | readNonEmptyInitializeString | (private) | `function readNonEmptyInitializeString(value: st...` |
| 1071 | fn | readCodexVersionFromUserAgent | (private) | `function readCodexVersionFromUserAgent(userAgen...` |
| 1081 | fn | redactCodexAppServerLinePreview | (private) | `function redactCodexAppServerLinePreview(value:...` |
| 1098 | fn | appendBoundedTail | (private) | `function appendBoundedTail(current: string, nex...` |
| 1103 | fn | buildCodexAppServerExitError | (private) | `function buildCodexAppServerExitError(code: unk...` |
| 1116 | fn | shouldBufferCodexAppServerParseFailure | (private) | `function shouldBufferCodexAppServerParseFailure...` |
| 1126 | fn | logCodexAppServerParseFailure | (private) | `function logCodexAppServerParseFailure(value: s...` |
| 1147 | fn | isCodexAppServerApprovalRequest | pub | `export function isCodexAppServerApprovalRequest...` |
| 1151 | fn | formatExitValue | (private) | `function formatExitValue(value: unknown): string {` |

## Public API

### `getCodexAppServerClientInstanceId`

```
export function getCodexAppServerClientInstanceId(client: object): string {
```

**Line:** 54 | **Kind:** fn

### `isCodexAppServerRequestTimeoutError`

```
export function isCodexAppServerRequestTimeoutError(error: unknown): boolean {
```

**Line:** 92 | **Kind:** fn

### `isCodexAppServerBrokenPipeError`

```
export function isCodexAppServerBrokenPipeError(error: unknown): boolean {
```

**Line:** 102 | **Kind:** fn

### `isCodexAppServerIndeterminateRequestCancellationError`

```
export function isCodexAppServerIndeterminateRequestCancellationError(
```

**Line:** 126 | **Kind:** fn

### `isCodexAppServerPrewriteRequestCancellationError`

```
export function isCodexAppServerPrewriteRequestCancellationError(
```

**Line:** 139 | **Kind:** fn

### `isCodexAppServerIndeterminateTransportError`

```
export function isCodexAppServerIndeterminateTransportError(error: unknown): error is Error & {
```

**Line:** 152 | **Kind:** fn

### `isCodexAppServerConnectionClosedError`

```
export function isCodexAppServerConnectionClosedError(error: unknown): boolean {
```

**Line:** 192 | **Kind:** fn

### `isUnsupportedCodexAppServerVersionError`

```
export function isUnsupportedCodexAppServerVersionError(error: unknown): boolean {
```

**Line:** 1044 | **Kind:** fn

### `isCodexAppServerApprovalRequest`

```
export function isCodexAppServerApprovalRequest(method: string): boolean {
```

**Line:** 1147 | **Kind:** fn
