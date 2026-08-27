# extensions/whatsapp/src/connection-controller.ts

[← Back to Module](../modules/extensions-whatsapp/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1117
- **Language:** TypeScript
- **Symbols:** 29
- **Public symbols:** 5

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 53 | type | TimerHandle | (private) | - |
| 54 | type | WaSocket | (private) | - |
| 56 | type | ManagedWhatsAppListener | pub | - |
| 62 | type | WhatsAppLiveConnection | (private) | - |
| 81 | type | WhatsAppSocketCleanup | (private) | - |
| 83 | type | WhatsAppOpenConnectionParams | (private) | - |
| 95 | type | WhatsAppConnectionSnapshot | (private) | - |
| 105 | type | NormalizedConnectionCloseReason | (private) | - |
| 113 | type | WhatsAppConnectionCloseDecision | (private) | - |
| 121 | type | WhatsAppReconnectAttemptDecision | (private) | - |
| 128 | type | LoginSocketRestartKind | (private) | - |
| 130 | fn | createNeverResolvePromise | (private) | `function createNeverResolvePromise<T>(): Promis...` |
| 134 | fn | getLoginSocketRestartKind | (private) | `function getLoginSocketRestartKind(statusCode: ...` |
| 144 | fn | getLoginSocketRestartMessage | (private) | `function getLoginSocketRestartMessage(kind: Log...` |
| 150 | type | SocketActivityEmitter | (private) | - |
| 156 | fn | createLiveConnection | (private) | `function createLiveConnection(params: {` |
| 163 | fn | resolveClosePromise | (private) | `let resolveClosePromise = (_reason: WebListener...` |
| 194 | fn | closeWebSocketBestEffort | (private) | `async function closeWebSocketBestEffort(sock: {...` |
| 202 | fn | closeWaSocket | pub | `export function closeWaSocket(` |
| 228 | fn | stoppedControllerError | (private) | `function stoppedControllerError(): Error {` |
| 232 | fn | closeWaSocketSoon | pub | `export function closeWaSocketSoon(` |
| 247 | type | WhatsAppLoginWaitResult | (private) | - |
| 266 | type | CredentialPersistenceFailure | (private) | - |
| 268 | fn | waitForLoginSocket | (private) | `async function waitForLoginSocket(params: {` |
| 288 | fn | throwIfCredentialPersistenceFailed | (private) | `function throwIfCredentialPersistenceFailed(` |
| 297 | fn | waitForWhatsAppLoginResult | pub | `export async function waitForWhatsAppLoginResul...` |
| 450 | class | WhatsAppConnectionController | pub | - |
| 520 | fn | stop | (private) | `const stop = () => {` |
| 1092 | fn | noteActivity | (private) | `const noteActivity = () => this.noteTransportAc...` |

## Public API

### `closeWaSocket`

```
export function closeWaSocket(
```

**Line:** 202 | **Kind:** fn

### `closeWaSocketSoon`

```
export function closeWaSocketSoon(
```

**Line:** 232 | **Kind:** fn

### `waitForWhatsAppLoginResult`

```
export async function waitForWhatsAppLoginResult(params: {
```

**Line:** 297 | **Kind:** fn
