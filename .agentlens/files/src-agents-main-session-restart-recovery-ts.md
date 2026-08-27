# src/agents/main-session-restart-recovery.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2261
- **Language:** TypeScript
- **Symbols:** 69
- **Public symbols:** 9

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 81 | type | ExpectedRestartRecoveryTarget | (private) | - |
| 87 | type | ExhaustedRestartRecoveryTarget | (private) | - |
| 91 | fn | loadExpectedRestartRecoveryTarget | (private) | `function loadExpectedRestartRecoveryTarget(para...` |
| 109 | fn | shouldSkipMainRecovery | (private) | `function shouldSkipMainRecovery(entry: SessionE...` |
| 113 | fn | normalizeStringSet | (private) | `function normalizeStringSet(values: Iterable<st...` |
| 124 | fn | normalizeFiniteTimestamp | (private) | `function normalizeFiniteTimestamp(value: unknow...` |
| 128 | fn | hasCurrentProcessOwner | (private) | `function hasCurrentProcessOwner(params: {` |
| 140 | fn | normalizeTranscriptLockPath | (private) | `function normalizeTranscriptLockPath(lockPath: ...` |
| 153 | fn | resolveEntryTranscriptLockPaths | (private) | `function resolveEntryTranscriptLockPaths(params: {` |
| 158 | fn | push | (private) | `const push = (resolvePath: () => string) => {` |
| 174 | fn | markRestartAbortedMainSessions | pub | `export async function markRestartAbortedMainSes...` |
| 303 | fn | replaceActiveRunMarker | (private) | `const replaceActiveRunMarker = (run: RestartRec...` |
| 352 | fn | markStartupOrphanedMainSessionsForRecovery | pub | `export async function markStartupOrphanedMainSe...` |
| 367 | fn | resolveActiveSessionIds | (private) | `const resolveActiveSessionIds = () =>` |
| 369 | fn | resolveActiveSessionKeys | (private) | `const resolveActiveSessionKeys = () =>` |
| 426 | fn | getMessageRole | (private) | `function getMessageRole(message: unknown): stri...` |
| 434 | fn | findSourceTurnRange | (private) | `function findSourceTurnRange(params: {` |
| 482 | fn | readToolCallId | (private) | `function readToolCallId(message: Record<string,...` |
| 495 | fn | findMessageToolCallIndexInSourceTurn | (private) | `function findMessageToolCallIndexInSourceTurn(p...` |
| 532 | fn | hasSiblingAssistantToolCalls | (private) | `function hasSiblingAssistantToolCalls(message: ...` |
| 553 | fn | isSuccessfulMessageToolResult | (private) | `function isSuccessfulMessageToolResult(message:...` |
| 566 | fn | findSuccessfulMessageToolResultIndex | (private) | `function findSuccessfulMessageToolResultIndex(p...` |
| 580 | fn | isExactMessageToolDeliveryMirror | (private) | `function isExactMessageToolDeliveryMirror(param...` |
| 601 | fn | isSafeTerminalDeliveryTailMessage | (private) | `function isSafeTerminalDeliveryTailMessage(para...` |
| 613 | fn | isTerminalSilentAssistantMessage | (private) | `function isTerminalSilentAssistantMessage(messa...` |
| 644 | fn | canReconcileTerminalDeliveryAtSourceTurnTail | (private) | `function canReconcileTerminalDeliveryAtSourceTu...` |
| 686 | fn | buildRecoveryToolResultIdempotencyKey | (private) | `function buildRecoveryToolResultIdempotencyKey(...` |
| 690 | fn | isMeaningfulTailMessage | (private) | `function isMeaningfulTailMessage(message: unkno...` |
| 698 | fn | readDeliveredTerminalSourceReplyToolCallId | (private) | `function readDeliveredTerminalSourceReplyToolCa...` |
| 730 | fn | readCodeModeWaitCall | (private) | `function readCodeModeWaitCall(` |
| 781 | fn | isResumableTailMessage | (private) | `function isResumableTailMessage(message: unknow...` |
| 786 | fn | isPendingAssistantToolCall | (private) | `function isPendingAssistantToolCall(message: un...` |
| 818 | fn | readCodeModeCheckpoint | (private) | `function readCodeModeCheckpoint(` |
| 861 | fn | hasReplaySafeCodeModeCheckpointInCurrentTurn | (private) | `function hasReplaySafeCodeModeCheckpointInCurre...` |
| 874 | fn | isRestartAbortTailArtifact | (private) | `function isRestartAbortTailArtifact(message: un...` |
| 893 | fn | isRestartAbortedWaitFailure | (private) | `function isRestartAbortedWaitFailure(message: u...` |
| 929 | fn | isRestartAbortedWaitResultArtifact | (private) | `function isRestartAbortedWaitResultArtifact(mes...` |
| 938 | fn | isApprovalPendingToolResult | (private) | `function isApprovalPendingToolResult(message: u...` |
| 949 | type | MainSessionResumePolicy | (private) | - |
| 959 | fn | resolveMainSessionResumePolicy | (private) | `function resolveMainSessionResumePolicy(` |
| 1046 | fn | markSessionFailed | (private) | `async function markSessionFailed(params: {` |
| 1068 | type | RecoveryCheckpointCompletion | (private) | - |
| 1073 | fn | markSessionCompletedAfterRecoveryCheckpoint | (private) | `async function markSessionCompletedAfterRecover...` |
| 1298 | fn | sendUnresumableSessionNotice | (private) | `async function sendUnresumableSessionNotice(par...` |
| 1338 | fn | writeUnresumableSessionNotice | (private) | `async function writeUnresumableSessionNotice(pa...` |
| 1378 | fn | failUnresumableMainSession | (private) | `async function failUnresumableMainSession(param...` |
| 1425 | fn | markRestartAbortedMainSessionsFromLocks | pub | `export async function markRestartAbortedMainSes...` |
| 1479 | fn | resolveRecoveryDispatchSessionKey | (private) | `function resolveRecoveryDispatchSessionKey(para...` |
| 1502 | fn | recoverStore | (private) | `async function recoverStore(params: {` |
| 1522 | fn | resolveActiveSessionIds | (private) | `const resolveActiveSessionIds = () =>` |
| 1524 | fn | resolveActiveSessionKeys | (private) | `const resolveActiveSessionKeys = () =>` |
| 1639 | fn | recordResumeResult | (private) | `const recordResumeResult = (resumeResult: Await...` |
| 1880 | fn | resolveRestartRecoveryStorePaths | (private) | `async function resolveRestartRecoveryStorePaths...` |
| 1898 | fn | recoverRestartAbortedMainSessionsWithOptions | (private) | `async function recoverRestartAbortedMainSession...` |
| 1933 | fn | recoverRestartAbortedMainSessions | pub | `export async function recoverRestartAbortedMain...` |
| 1945 | fn | retryRestartAbortedMainSessionRecovery | pub | `export async function retryRestartAbortedMainSe...` |
| 1965 | fn | assertClaimCurrent | (private) | `const assertClaimCurrent = () => {` |
| 2001 | fn | retryRestartAbortedMainSessionRecoveryAfterOwnerRelease | pub | `export async function retryRestartAbortedMainSe...` |
| 2011 | fn | recoverExpectedRestartRecoveryTarget | (private) | `async function recoverExpectedRestartRecoveryTa...` |
| 2025 | fn | assertTargetCurrent | (private) | `const assertTargetCurrent = () => {` |
| 2063 | fn | scheduleRestartAbortedMainSessionRecoveryAfterOwnerRelease | pub | `export function scheduleRestartAbortedMainSessi...` |
| 2074 | fn | scheduleAttempt | (private) | `const scheduleAttempt = (attempt: number, delay...` |
| 2075 | fn | run | (private) | `const run = () => {` |
| 2129 | fn | recoverStartupOrphanedMainSessionsWithOptions | (private) | `async function recoverStartupOrphanedMainSessio...` |
| 2164 | fn | recoverStartupOrphanedMainSessions | pub | `export async function recoverStartupOrphanedMai...` |
| 2176 | fn | scheduleRestartAbortedMainSessionRecovery | pub | `export function scheduleRestartAbortedMainSessi...` |
| 2190 | fn | runRecoveryAttempt | (private) | `const runRecoveryAttempt = (attempt: number, de...` |
| 2192 | fn | reconcileExhaustedTargets | (private) | `const reconcileExhaustedTargets = async () => {` |
| 2249 | fn | scheduleAttempt | (private) | `const scheduleAttempt = (attempt: number, delay...` |

## Public API

### `markRestartAbortedMainSessions`

```
export async function markRestartAbortedMainSessions(params: {
```

**Line:** 174 | **Kind:** fn

### `markStartupOrphanedMainSessionsForRecovery`

```
export async function markStartupOrphanedMainSessionsForRecovery(params: {
```

**Line:** 352 | **Kind:** fn

### `markRestartAbortedMainSessionsFromLocks`

```
export async function markRestartAbortedMainSessionsFromLocks(params: {
```

**Line:** 1425 | **Kind:** fn

### `recoverRestartAbortedMainSessions`

```
export async function recoverRestartAbortedMainSessions(params: {
```

**Line:** 1933 | **Kind:** fn

### `retryRestartAbortedMainSessionRecovery`

```
export async function retryRestartAbortedMainSessionRecovery(params: {
```

**Line:** 1945 | **Kind:** fn

### `retryRestartAbortedMainSessionRecoveryAfterOwnerRelease`

```
export async function retryRestartAbortedMainSessionRecoveryAfterOwnerRelease(params: {
```

**Line:** 2001 | **Kind:** fn

### `scheduleRestartAbortedMainSessionRecoveryAfterOwnerRelease`

```
export function scheduleRestartAbortedMainSessionRecoveryAfterOwnerRelease(params: {
```

**Line:** 2063 | **Kind:** fn

### `recoverStartupOrphanedMainSessions`

```
export async function recoverStartupOrphanedMainSessions(params: {
```

**Line:** 2164 | **Kind:** fn

### `scheduleRestartAbortedMainSessionRecovery`

```
export function scheduleRestartAbortedMainSessionRecovery(params: {
```

**Line:** 2176 | **Kind:** fn
