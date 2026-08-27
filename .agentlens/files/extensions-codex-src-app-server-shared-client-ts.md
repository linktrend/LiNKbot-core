# extensions/codex/src/app-server/shared-client.ts

[← Back to Module](../modules/extensions-codex-src-app-server/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1280
- **Language:** TypeScript
- **Symbols:** 57
- **Public symbols:** 23

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 42 | type | SharedCodexAppServerClientEntry | (private) | - |
| 53 | type | SharedCodexAppServerClientStartup | (private) | - |
| 58 | type | SharedCodexAppServerClientState | (private) | - |
| 63 | type | CodexAppServerClientStartMetadata | (private) | - |
| 71 | type | CodexAppServerClientProcessIdentity | (private) | - |
| 82 | type | CodexAppServerSpawnIdentity | (private) | - |
| 100 | fn | getSharedCodexAppServerClientState | (private) | `function getSharedCodexAppServerClientState(): ...` |
| 111 | fn | getCodexAppServerClientStartMetadata | (private) | `function getCodexAppServerClientStartMetadata()...` |
| 126 | fn | readCodexAppServerClientProcessIdentity | pub | `export function readCodexAppServerClientProcess...` |
| 143 | fn | resolveCodexAppServerSpawnIdentity | pub | `export function resolveCodexAppServerSpawnIdent...` |
| 163 | class | CodexAppServerStartSelectionChangedError | (private) | - |
| 173 | fn | isCodexAppServerStartSelectionChangedError | pub | `export function isCodexAppServerStartSelectionC...` |
| 188 | fn | assertCodexAppServerClientStartSelectionCurrent | pub | `export function assertCodexAppServerClientStart...` |
| 213 | fn | resolveCodexNativeConfigFenceKey | pub | `export function resolveCodexNativeConfigFenceKe...` |
| 239 | type | CodexAppServerClientOptions | pub | - |
| 259 | type | CodexAppServerClientFactory | pub | - |
| 263 | type | ResolvedCodexAppServerClientStartContext | (private) | - |
| 274 | fn | inferAuthRequirement | (private) | `function inferAuthRequirement(` |
| 283 | fn | resolveCodexAppServerClientStartContext | (private) | `async function resolveCodexAppServerClientStart...` |
| 392 | fn | getSharedCodexAppServerClient | pub | `export async function getSharedCodexAppServerCl...` |
| 399 | fn | getLeasedSharedCodexAppServerClient | pub | `export async function getLeasedSharedCodexAppSe...` |
| 411 | fn | releaseLeasedSharedCodexAppServerClient | pub | `export function releaseLeasedSharedCodexAppServ...` |
| 429 | type | CodexAppServerClientLease | pub | - |
| 432 | fn | releaseCodexAppServerClientLease | pub | `export function releaseCodexAppServerClientLeas...` |
| 439 | fn | withLeasedCodexAppServerClientStartSelectionRetry | pub | `export async function withLeasedCodexAppServerC...` |
| 456 | fn | requestOptions | (private) | `const requestOptions = () => {` |
| 502 | fn | acquireSharedCodexAppServerClient | (private) | `async function acquireSharedCodexAppServerClient(` |
| 505 | fn | acquireSharedCodexAppServerClient | (private) | `async function acquireSharedCodexAppServerClient(` |
| 509 | fn | acquireSharedCodexAppServerClient | (private) | `async function acquireSharedCodexAppServerClient(` |
| 575 | fn | stopStartedClientNotifications | (private) | `const stopStartedClientNotifications = () => {` |
| 582 | fn | abandon | (private) | `const abandon = () => {` |
| 653 | fn | withCodexAppServerAcquireDeadline | (private) | `async function withCodexAppServerAcquireDeadlin...` |
| 672 | fn | onAbort | (private) | `const onAbort = () =>` |
| 679 | fn | resolveRemainingAcquireTimeout | (private) | `function resolveRemainingAcquireTimeout(timeout...` |
| 690 | fn | createSharedCodexAppServerClientStartup | (private) | `function createSharedCodexAppServerClientStartu...` |
| 747 | fn | createIsolatedCodexAppServerClient | pub | `export async function createIsolatedCodexAppSer...` |
| 790 | fn | startInitializedCodexAppServerClient | (private) | `async function startInitializedCodexAppServerCl...` |
| 943 | fn | resolveManagedFallbackStartOptions | (private) | `function resolveManagedFallbackStartOptions(` |
| 964 | fn | shouldTryManagedFallbackStartOption | (private) | `function shouldTryManagedFallbackStartOption(` |
| 978 | fn | resetSharedCodexAppServerClientForTests | pub | `export function resetSharedCodexAppServerClient...` |
| 989 | fn | clearSharedCodexAppServerClient | pub | `export function clearSharedCodexAppServerClient...` |
| 999 | fn | clearSharedCodexAppServerClientIfCurrent | pub | `export function clearSharedCodexAppServerClient...` |
| 1017 | fn | detachSharedCodexAppServerClientIfCurrent | pub | `export function detachSharedCodexAppServerClien...` |
| 1034 | fn | retainSharedCodexAppServerClientIfCurrent | pub | `export function retainSharedCodexAppServerClien...` |
| 1058 | fn | retireSharedCodexAppServerClientIfCurrent | pub | `export function retireSharedCodexAppServerClien...` |
| 1098 | fn | clearSharedCodexAppServerClientIfCurrentAndWait | pub | `export async function clearSharedCodexAppServer...` |
| 1120 | fn | clearSharedCodexAppServerClientAndWait | pub | `export async function clearSharedCodexAppServer...` |
| 1136 | fn | getOrCreateSharedClientEntry | (private) | `function getOrCreateSharedClientEntry(` |
| 1153 | fn | clearSharedClientEntryIfCurrent | (private) | `function clearSharedClientEntryIfCurrent(key: s...` |
| 1162 | fn | clearSharedCodexAppServerClientIfCurrentAndUnclaimed | pub | `export function clearSharedCodexAppServerClient...` |
| 1182 | fn | retainPendingSharedClientAcquire | (private) | `function retainPendingSharedClientAcquire(entry...` |
| 1195 | fn | retainSharedClientEntry | (private) | `function retainSharedClientEntry(entry: SharedC...` |
| 1208 | fn | closeRetiredSharedClientEntryIfIdle | (private) | `function closeRetiredSharedClientEntryIfIdle(en...` |
| 1224 | fn | closeRetiredSharedClientEntry | (private) | `function closeRetiredSharedClientEntry(entry: S...` |
| 1234 | fn | closeSharedClientEntryIfUnclaimed | (private) | `function closeSharedClientEntryIfUnclaimed(` |
| 1250 | fn | retirePendingSharedClientEntryIfUnclaimed | (private) | `function retirePendingSharedClientEntryIfUnclai...` |
| 1271 | fn | collectSharedClients | (private) | `function collectSharedClients(state: SharedCode...` |

## Public API

### `readCodexAppServerClientProcessIdentity`

```
export function readCodexAppServerClientProcessIdentity(
```

**Line:** 126 | **Kind:** fn

### `resolveCodexAppServerSpawnIdentity`

```
export function resolveCodexAppServerSpawnIdentity(
```

**Line:** 143 | **Kind:** fn

### `isCodexAppServerStartSelectionChangedError`

```
export function isCodexAppServerStartSelectionChangedError(
```

**Line:** 173 | **Kind:** fn

### `assertCodexAppServerClientStartSelectionCurrent`

```
export function assertCodexAppServerClientStartSelectionCurrent(params: {
```

**Line:** 188 | **Kind:** fn

### `resolveCodexNativeConfigFenceKey`

```
export function resolveCodexNativeConfigFenceKey(params: {
```

**Line:** 213 | **Kind:** fn

### `getSharedCodexAppServerClient`

```
export async function getSharedCodexAppServerClient(
```

**Line:** 392 | **Kind:** fn

### `getLeasedSharedCodexAppServerClient`

```
export async function getLeasedSharedCodexAppServerClient(
```

**Line:** 399 | **Kind:** fn

### `releaseLeasedSharedCodexAppServerClient`

```
export function releaseLeasedSharedCodexAppServerClient(client: CodexAppServerClient): boolean {
```

**Line:** 411 | **Kind:** fn

### `releaseCodexAppServerClientLease`

```
export function releaseCodexAppServerClientLease(lease: CodexAppServerClientLease): boolean {
```

**Line:** 432 | **Kind:** fn

### `withLeasedCodexAppServerClientStartSelectionRetry`

```
export async function withLeasedCodexAppServerClientStartSelectionRetry<T>(params: {
```

**Line:** 439 | **Kind:** fn

### `createIsolatedCodexAppServerClient`

```
export async function createIsolatedCodexAppServerClient(
```

**Line:** 747 | **Kind:** fn

### `resetSharedCodexAppServerClientForTests`

```
export function resetSharedCodexAppServerClientForTests(): void {
```

**Line:** 978 | **Kind:** fn

### `clearSharedCodexAppServerClient`

```
export function clearSharedCodexAppServerClient(): void {
```

**Line:** 989 | **Kind:** fn

### `clearSharedCodexAppServerClientIfCurrent`

```
export function clearSharedCodexAppServerClientIfCurrent(
```

**Line:** 999 | **Kind:** fn

### `detachSharedCodexAppServerClientIfCurrent`

```
export function detachSharedCodexAppServerClientIfCurrent(
```

**Line:** 1017 | **Kind:** fn

### `retainSharedCodexAppServerClientIfCurrent`

```
export function retainSharedCodexAppServerClientIfCurrent(
```

**Line:** 1034 | **Kind:** fn

### `retireSharedCodexAppServerClientIfCurrent`

```
export function retireSharedCodexAppServerClientIfCurrent(
```

**Line:** 1058 | **Kind:** fn

### `clearSharedCodexAppServerClientIfCurrentAndWait`

```
export async function clearSharedCodexAppServerClientIfCurrentAndWait(
```

**Line:** 1098 | **Kind:** fn

### `clearSharedCodexAppServerClientAndWait`

```
export async function clearSharedCodexAppServerClientAndWait(options?: {
```

**Line:** 1120 | **Kind:** fn

### `clearSharedCodexAppServerClientIfCurrentAndUnclaimed`

```
export function clearSharedCodexAppServerClientIfCurrentAndUnclaimed(
```

**Line:** 1162 | **Kind:** fn
