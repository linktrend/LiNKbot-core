# src/agents/session-write-lock.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1099
- **Language:** TypeScript
- **Symbols:** 58
- **Public symbols:** 10

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 21 | type | LockFilePayload | (private) | - |
| 29 | fn | isValidLockNumber | (private) | `function isValidLockNumber(value: unknown): val...` |
| 33 | type | SessionLockInspection | pub | - |
| 45 | type | SessionLockOwnerProcessArgsReader | pub | - |
| 48 | type | CleanupSignal | (private) | - |
| 64 | fn | yieldEventLoop | (private) | `function yieldEventLoop(): Promise<void> {` |
| 76 | type | CleanupState | (private) | - |
| 82 | type | WatchdogState | (private) | - |
| 88 | type | LockInspectionDetails | (private) | - |
| 96 | fn | isFileLockError | (private) | `function isFileLockError(error: unknown, code: ...` |
| 100 | type | SessionWriteLockAcquireTimeoutConfig | pub | - |
| 102 | type | SessionWriteLockMsKey | (private) | - |
| 110 | fn | readPositiveMsEnv | (private) | `function readPositiveMsEnv(` |
| 129 | fn | parsePositiveMs | (private) | `function parsePositiveMs(` |
| 148 | fn | resolveSessionWriteLockMs | (private) | `function resolveSessionWriteLockMs(params: {` |
| 161 | fn | resolveSessionWriteLockAcquireTimeoutMs | pub | `export function resolveSessionWriteLockAcquireT...` |
| 173 | fn | resolveSessionWriteLockStaleMs | pub | `export function resolveSessionWriteLockStaleMs(` |
| 184 | fn | resolveSessionWriteLockMaxHoldMs | (private) | `function resolveSessionWriteLockMaxHoldMs(` |
| 195 | fn | resolveSessionWriteLockOptions | pub | `export function resolveSessionWriteLockOptions(` |
| 209 | fn | resolveCleanupState | (private) | `function resolveCleanupState(): CleanupState {` |
| 223 | fn | resolveWatchdogState | (private) | `function resolveWatchdogState(): WatchdogState {` |
| 236 | fn | resolvePositiveMs | (private) | `function resolvePositiveMs(` |
| 253 | fn | resolveSessionLockMaxHoldFromTimeout | pub | `export function resolveSessionLockMaxHoldFromTi...` |
| 271 | fn | releaseAllLocksSync | (private) | `function releaseAllLocksSync(): void {` |
| 276 | fn | runLockWatchdogCheck | (private) | `async function runLockWatchdogCheck(nowMs = Dat...` |
| 300 | fn | stopWatchdogTimer | (private) | `function stopWatchdogTimer(): void {` |
| 309 | fn | shouldStartBackgroundWatchdog | (private) | `function shouldStartBackgroundWatchdog(): boole...` |
| 313 | fn | ensureWatchdogStarted | (private) | `function ensureWatchdogStarted(intervalMs: numb...` |
| 331 | fn | handleTerminationSignal | (private) | `function handleTerminationSignal(signal: Cleanu...` |
| 349 | fn | registerCleanupHandlers | (private) | `function registerCleanupHandlers(): void {` |
| 368 | fn | handler | (private) | `const handler = () => handleTerminationSignal(s...` |
| 377 | fn | unregisterCleanupHandlers | (private) | `function unregisterCleanupHandlers(): void {` |
| 390 | fn | parseLockPayload | (private) | `function parseLockPayload(raw: string): LockFil...` |
| 408 | fn | readLockPayload | (private) | `async function readLockPayload(lockPath: string...` |
| 417 | fn | readLockPayloadForDiagnostics | (private) | `async function readLockPayloadForDiagnostics(` |
| 429 | fn | resolveNormalizedSessionFile | (private) | `async function resolveNormalizedSessionFile(ses...` |
| 440 | fn | resolveSessionWriteLockTarget | (private) | `function resolveSessionWriteLockTarget(sessionF...` |
| 454 | fn | normalizeOwnerProcessArg | (private) | `function normalizeOwnerProcessArg(arg: string):...` |
| 458 | fn | isOpenClawSessionOwnerArgv | (private) | `function isOpenClawSessionOwnerArgv(args: strin...` |
| 492 | fn | readOwnerProcessArgs | (private) | `function readOwnerProcessArgs(` |
| 504 | fn | inspectLockPayload | (private) | `function inspectLockPayload(` |
| 562 | fn | shouldTreatAsNonOpenClawOwner | (private) | `function shouldTreatAsNonOpenClawOwner(params: {` |
| 588 | fn | lockInspectionNeedsMtimeStaleFallback | (private) | `function lockInspectionNeedsMtimeStaleFallback(...` |
| 597 | fn | shouldReportContendedLockStale | (private) | `async function shouldReportContendedLockStale(p...` |
| 624 | fn | shouldRemoveContendedLockFile | (private) | `async function shouldRemoveContendedLockFile(` |
| 650 | fn | resolveOrphanLockPayloadGraceMs | (private) | `function resolveOrphanLockPayloadGraceMs(timeou...` |
| 657 | fn | resolveRemainingAcquireTimeoutMs | (private) | `function resolveRemainingAcquireTimeoutMs(` |
| 669 | fn | shouldRetryStaleAcquireFailure | (private) | `async function shouldRetryStaleAcquireFailure(p...` |
| 691 | fn | shouldRemoveLockDuringCleanup | (private) | `async function shouldRemoveLockDuringCleanup(` |
| 703 | fn | sessionLockHeldByThisProcess | (private) | `function sessionLockHeldByThisProcess(normalize...` |
| 709 | fn | shouldTreatAsOrphanSelfLock | (private) | `function shouldTreatAsOrphanSelfLock(params: {` |
| 733 | fn | describeLockOwnerForError | (private) | `function describeLockOwnerForError(params: {` |
| 752 | fn | inspectLockPayloadForSession | (private) | `function inspectLockPayloadForSession(params: {` |
| 798 | fn | cleanStaleLockFiles | pub | `export async function cleanStaleLockFiles(param...` |
| 889 | fn | acquireSessionWriteLock | pub | `export async function acquireSessionWriteLock(p...` |
| 899 | fn | throwIfAborted | (private) | `const throwIfAborted = () => {` |
| 1080 | fn | drainSessionWriteLockStateForTest | pub | `export async function drainSessionWriteLockStat...` |
| 1086 | fn | resetSessionWriteLockStateForTest | (private) | `function resetSessionWriteLockStateForTest(): v...` |

## Public API

### `resolveSessionWriteLockAcquireTimeoutMs`

```
export function resolveSessionWriteLockAcquireTimeoutMs(
```

**Line:** 161 | **Kind:** fn

### `resolveSessionWriteLockStaleMs`

```
export function resolveSessionWriteLockStaleMs(
```

**Line:** 173 | **Kind:** fn

### `resolveSessionWriteLockOptions`

```
export function resolveSessionWriteLockOptions(
```

**Line:** 195 | **Kind:** fn

### `resolveSessionLockMaxHoldFromTimeout`

```
export function resolveSessionLockMaxHoldFromTimeout(params: {
```

**Line:** 253 | **Kind:** fn

### `cleanStaleLockFiles`

```
export async function cleanStaleLockFiles(params: {
```

**Line:** 798 | **Kind:** fn

### `acquireSessionWriteLock`

```
export async function acquireSessionWriteLock(params: {
```

**Line:** 889 | **Kind:** fn

### `drainSessionWriteLockStateForTest`

```
export async function drainSessionWriteLockStateForTest(): Promise<void> {
```

**Line:** 1080 | **Kind:** fn
