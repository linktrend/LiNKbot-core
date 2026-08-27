# src/auto-reply/reply/reply-run-registry.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1326
- **Language:** TypeScript
- **Symbols:** 71
- **Public symbols:** 32

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 25 | type | ReplyRunKey | (private) | - |
| 27 | type | ReplyBackendKind | (private) | - |
| 29 | type | ReplyBackendCancelReason | (private) | - |
| 31 | type | ReplyBackendQueueMessageOptions | pub | - |
| 46 | type | ReplyBackendHandle | pub | - |
| 64 | type | ReplyBackendQueueMessageMismatch | (private) | - |
| 70 | fn | resolveReplyBackendQueueMessageMismatch | pub | `export function resolveReplyBackendQueueMessage...` |
| 98 | type | ReplyOperationPhase | pub | - |
| 108 | type | ReplyOperationFailureCode | (private) | - |
| 116 | type | ReplyOperationAbortCode | (private) | - |
| 118 | type | ReplyOperationResult | (private) | - |
| 123 | type | ReplyOperation | pub | - |
| 200 | type | ReplyRunRegistry | (private) | - |
| 220 | type | ReplyRunWaiter | (private) | - |
| 225 | type | ReplyRunFollowupAdmissionBarrier | (private) | - |
| 230 | type | ReplyRunState | (private) | - |
| 256 | type | ReplyOperationStaleReason | (private) | - |
| 258 | class | ReplyRunAlreadyActiveError | pub | - |
| 265 | class | ReplyRunFollowupAdmissionBlockedError | pub | - |
| 272 | fn | createUserAbortError | (private) | `function createUserAbortError(): Error {` |
| 276 | fn | registerWaitSessionId | (private) | `function registerWaitSessionId(sessionKey: stri...` |
| 280 | fn | clearWaitSessionIds | (private) | `function clearWaitSessionIds(sessionKey: string...` |
| 288 | fn | notifyReplyRunEnded | (private) | `function notifyReplyRunEnded(sessionKey: string...` |
| 299 | fn | resolveReplyRunForCurrentSessionId | (private) | `function resolveReplyRunForCurrentSessionId(ses...` |
| 311 | fn | resolveReplyRunWaitKey | (private) | `function resolveReplyRunWaitKey(sessionId: stri...` |
| 322 | fn | isReplyRunCompacting | (private) | `function isReplyRunCompacting(operation: ReplyO...` |
| 333 | fn | isReplyOperationPreBackendPhase | (private) | `function isReplyOperationPreBackendPhase(phase:...` |
| 350 | fn | getAttachedBackend | (private) | `function getAttachedBackend(operation: ReplyOpe...` |
| 354 | fn | isReplyOperationAbortable | (private) | `function isReplyOperationAbortable(operation: R...` |
| 369 | fn | isReplyRunAbortableForSignal | pub | `export function isReplyRunAbortableForSignal(si...` |
| 375 | fn | retainReplyOperationUntilComplete | pub | `export function retainReplyOperationUntilComple...` |
| 379 | fn | isReplyBackendMessageInjectable | (private) | `function isReplyBackendMessageInjectable(backen...` |
| 388 | fn | runAfterReplyOperationClear | pub | `export function runAfterReplyOperationClear(` |
| 402 | fn | flushReplyOperationAfterClear | (private) | `function flushReplyOperationAfterClear(operatio...` |
| 413 | fn | waitForReplyBarrierSettlement | pub | `export function waitForReplyBarrierSettlement(` |
| 421 | fn | finish | (private) | `const finish = () => {` |
| 429 | fn | schedule | (private) | `const schedule = (delayMs: number, callback: ()...` |
| 441 | fn | checkOwnerActivity | (private) | `const checkOwnerActivity = () => {` |
| 466 | fn | registerFollowupAdmissionBarrier | (private) | `function registerFollowupAdmissionBarrier(` |
| 486 | fn | updateFollowupAdmissionSessionId | (private) | `function updateFollowupAdmissionSessionId(sessi...` |
| 493 | fn | clearReplyRunState | (private) | `function clearReplyRunState(params: { sessionKe...` |
| 503 | fn | markReplyRunDiagnosticProgress | (private) | `function markReplyRunDiagnosticProgress(params: {` |
| 515 | fn | createReplyOperation | pub | `export function createReplyOperation(params: {` |
| 556 | fn | detachUpstreamAbort | (private) | `const detachUpstreamAbort = () => {` |
| 564 | fn | recordActivity | (private) | `const recordActivity = () => {` |
| 567 | fn | setResult | (private) | `const setResult = (next: ReplyOperationResult) ...` |
| 572 | fn | clearState | (private) | `const clearState = (` |
| 611 | fn | abortInternally | (private) | `const abortInternally = (reason?: unknown) => {` |
| 617 | fn | scheduleTerminalSettle | (private) | `const scheduleTerminalSettle = () => {` |
| 624 | fn | abortWithReason | (private) | `const abortWithReason = (` |
| 953 | fn | abortFromUpstream | (private) | `const abortFromUpstream = () => {` |
| 982 | fn | expireStaleReplyOperation | pub | `export function expireStaleReplyOperation(` |
| 989 | fn | expireStaleReplyRunBySessionId | pub | `export function expireStaleReplyRunBySessionId(` |
| 999 | fn | isReplyRunEvidenceStale | pub | `export function isReplyRunEvidenceStale(operati...` |
| 1010 | fn | isReplyRunEvidenceStaleBySessionId | pub | `export function isReplyRunEvidenceStaleBySessio...` |
| 1104 | fn | resolveActiveReplyRunSessionId | pub | `export function resolveActiveReplyRunSessionId(...` |
| 1108 | fn | resolveActiveReplyRunThreadId | pub | `export function resolveActiveReplyRunThreadId(s...` |
| 1112 | fn | isReplyRunActiveForSessionId | pub | `export function isReplyRunActiveForSessionId(se...` |
| 1116 | fn | resolveReplyRunPhaseForSessionId | pub | `export function resolveReplyRunPhaseForSessionId(` |
| 1122 | fn | isReplyRunAbortableForCompaction | pub | `export function isReplyRunAbortableForCompactio...` |
| 1129 | fn | isReplyRunStreamingForSessionId | pub | `export function isReplyRunStreamingForSessionId...` |
| 1137 | fn | queueReplyRunMessage | pub | `export function queueReplyRunMessage(` |
| 1167 | fn | abortReplyRunBySessionId | pub | `export function abortReplyRunBySessionId(sessio...` |
| 1175 | fn | forceClearReplyRunBySessionId | pub | `export function forceClearReplyRunBySessionId(s...` |
| 1185 | fn | clearReplyRunForResetBySessionId | pub | `export function clearReplyRunForResetBySessionI...` |
| 1198 | fn | waitForReplyRunEndBySessionId | pub | `export function waitForReplyRunEndBySessionId(` |
| 1209 | fn | waitForReplyRunFollowupAdmission | pub | `export async function waitForReplyRunFollowupAd...` |
| 1263 | fn | abortActiveReplyRuns | pub | `export function abortActiveReplyRuns(opts: {` |
| 1286 | fn | getActiveReplyRunCount | pub | `export function getActiveReplyRunCount(): number {` |
| 1290 | fn | listActiveReplyRunSessionIds | pub | `export function listActiveReplyRunSessionIds():...` |
| 1294 | fn | listActiveReplyRunSessionKeys | pub | `export function listActiveReplyRunSessionKeys()...` |

## Public API

### `resolveReplyBackendQueueMessageMismatch`

```
export function resolveReplyBackendQueueMessageMismatch(
```

**Line:** 70 | **Kind:** fn

### `isReplyRunAbortableForSignal`

```
export function isReplyRunAbortableForSignal(signal: AbortSignal): boolean {
```

**Line:** 369 | **Kind:** fn

### `retainReplyOperationUntilComplete`

```
export function retainReplyOperationUntilComplete(operation: ReplyOperation): void {
```

**Line:** 375 | **Kind:** fn

### `runAfterReplyOperationClear`

```
export function runAfterReplyOperationClear(
```

**Line:** 388 | **Kind:** fn

### `waitForReplyBarrierSettlement`

```
export function waitForReplyBarrierSettlement(
```

**Line:** 413 | **Kind:** fn

### `createReplyOperation`

```
export function createReplyOperation(params: {
```

**Line:** 515 | **Kind:** fn

### `expireStaleReplyOperation`

```
export function expireStaleReplyOperation(
```

**Line:** 982 | **Kind:** fn

### `expireStaleReplyRunBySessionId`

```
export function expireStaleReplyRunBySessionId(
```

**Line:** 989 | **Kind:** fn

### `isReplyRunEvidenceStale`

```
export function isReplyRunEvidenceStale(operation: ReplyOperation): boolean {
```

**Line:** 999 | **Kind:** fn

### `isReplyRunEvidenceStaleBySessionId`

```
export function isReplyRunEvidenceStaleBySessionId(sessionId: string): boolean {
```

**Line:** 1010 | **Kind:** fn

### `resolveActiveReplyRunSessionId`

```
export function resolveActiveReplyRunSessionId(sessionKey: string): string | undefined {
```

**Line:** 1104 | **Kind:** fn

### `resolveActiveReplyRunThreadId`

```
export function resolveActiveReplyRunThreadId(sessionKey: string): string | number | undefined {
```

**Line:** 1108 | **Kind:** fn

### `isReplyRunActiveForSessionId`

```
export function isReplyRunActiveForSessionId(sessionId: string): boolean {
```

**Line:** 1112 | **Kind:** fn

### `resolveReplyRunPhaseForSessionId`

```
export function resolveReplyRunPhaseForSessionId(
```

**Line:** 1116 | **Kind:** fn

### `isReplyRunAbortableForCompaction`

```
export function isReplyRunAbortableForCompaction(sessionId: string): boolean {
```

**Line:** 1122 | **Kind:** fn

### `isReplyRunStreamingForSessionId`

```
export function isReplyRunStreamingForSessionId(sessionId: string): boolean {
```

**Line:** 1129 | **Kind:** fn

### `queueReplyRunMessage`

```
export function queueReplyRunMessage(
```

**Line:** 1137 | **Kind:** fn

### `abortReplyRunBySessionId`

```
export function abortReplyRunBySessionId(sessionId: string): boolean {
```

**Line:** 1167 | **Kind:** fn

### `forceClearReplyRunBySessionId`

```
export function forceClearReplyRunBySessionId(sessionId: string, cause?: unknown): boolean {
```

**Line:** 1175 | **Kind:** fn

### `clearReplyRunForResetBySessionId`

```
export function clearReplyRunForResetBySessionId(sessionId: string): void {
```

**Line:** 1185 | **Kind:** fn

### `waitForReplyRunEndBySessionId`

```
export function waitForReplyRunEndBySessionId(
```

**Line:** 1198 | **Kind:** fn

### `waitForReplyRunFollowupAdmission`

```
export async function waitForReplyRunFollowupAdmission(
```

**Line:** 1209 | **Kind:** fn

### `abortActiveReplyRuns`

```
export function abortActiveReplyRuns(opts: {
```

**Line:** 1263 | **Kind:** fn

### `getActiveReplyRunCount`

```
export function getActiveReplyRunCount(): number {
```

**Line:** 1286 | **Kind:** fn

### `listActiveReplyRunSessionIds`

```
export function listActiveReplyRunSessionIds(): string[] {
```

**Line:** 1290 | **Kind:** fn

### `listActiveReplyRunSessionKeys`

```
export function listActiveReplyRunSessionKeys(): string[] {
```

**Line:** 1294 | **Kind:** fn
