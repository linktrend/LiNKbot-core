# src/agents/embedded-agent-runner/run/attempt.session-lock.ts

[← Back to Module](../modules/src-agents-embedded-agent-runner-run/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2216
- **Language:** TypeScript
- **Symbols:** 105
- **Public symbols:** 6

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 31 | type | SessionLock | (private) | - |
| 32 | type | AcquireSessionWriteLock | (private) | - |
| 33 | type | PhysicalWriteLockScope | (private) | - |
| 38 | type | ActiveWriteLockState | (private) | - |
| 52 | type | RootWriteLockState | (private) | - |
| 54 | fn | createActiveWriteLockScope | (private) | `function createActiveWriteLockScope(): {` |
| 76 | fn | trackWriteLockOperation | (private) | `function trackWriteLockOperation<T>(` |
| 94 | fn | drainWriteLockScope | (private) | `async function drainWriteLockScope(scope: Physi...` |
| 100 | type | LockOptions | (private) | - |
| 109 | type | SessionWithAgentPrompt | (private) | - |
| 115 | type | PromptReleaseStreamFn | (private) | - |
| 119 | type | SessionFileFingerprint | (private) | - |
| 130 | type | TrustedSessionFileSnapshot | (private) | - |
| 139 | type | SessionFileFenceSnapshot | (private) | - |
| 145 | type | SessionFileHandle | (private) | - |
| 147 | fn | sessionFileFingerprintFromStat | (private) | `function sessionFileFingerprintFromStat(stat: B...` |
| 158 | fn | sameSessionFileFingerprint | (private) | `function sameSessionFileFingerprint(` |
| 177 | fn | sameSessionFileIdentity | (private) | `function sameSessionFileIdentity(` |
| 184 | fn | sameSessionFileIdentityAndSize | (private) | `function sameSessionFileIdentityAndSize(` |
| 197 | fn | splitSessionFileLines | (private) | `function splitSessionFileLines(text: string): s...` |
| 201 | fn | isJsonRecord | (private) | `function isJsonRecord(value: unknown): value is...` |
| 205 | fn | parsePromptReleasedMessageLine | (private) | `function parsePromptReleasedMessageLine(` |
| 249 | fn | hasSessionEntryBase | (private) | `function hasSessionEntryBase(record: Record<str...` |
| 259 | type | PromptReleasedSessionMetadataEntry | (private) | - |
| 261 | type | PromptReleasedOpaqueEntry | (private) | - |
| 268 | type | PromptReleasedSessionEntry | (private) | - |
| 273 | type | PromptReleasedSessionMergeResult | (private) | - |
| 279 | fn | parsePromptReleasedGlobalMetadataLine | (private) | `function parsePromptReleasedGlobalMetadataLine(` |
| 332 | fn | parsePromptReleasedOpaqueLine | (private) | `function parsePromptReleasedOpaqueLine(line: st...` |
| 343 | fn | parsePromptReleasedSideLeafControlLine | (private) | `function parsePromptReleasedSideLeafControlLine(` |
| 366 | type | PromptReleasedSessionChange | (private) | - |
| 383 | fn | classifyPromptReleasedSessionLines | (private) | `function classifyPromptReleasedSessionLines(` |
| 502 | fn | haveSamePublishedEntries | (private) | `function haveSamePublishedEntries(` |
| 520 | fn | normalizeTranscriptEntryId | (private) | `function normalizeTranscriptEntryId(value: unkn...` |
| 524 | fn | omitRecordKeys | (private) | `function omitRecordKeys(` |
| 537 | fn | lineMatchesLinearTranscriptMigration | (private) | `function lineMatchesLinearTranscriptMigration(p...` |
| 586 | fn | readAppendedSessionFileText | (private) | `async function readAppendedSessionFileText(para...` |
| 616 | fn | readSessionFileFenceSnapshot | (private) | `async function readSessionFileFenceSnapshot(` |
| 670 | fn | readSessionFileBytes | (private) | `async function readSessionFileBytes(` |
| 686 | fn | readSessionFileDigest | (private) | `async function readSessionFileDigest(` |
| 705 | fn | classifySessionFenceAdvance | (private) | `async function classifySessionFenceAdvance(para...` |
| 734 | fn | classifyOwnedSessionFileInitialization | (private) | `async function classifyOwnedSessionFileInitiali...` |
| 789 | fn | readByteIdenticalSessionFenceSnapshot | (private) | `async function readByteIdenticalSessionFenceSna...` |
| 816 | fn | classifySessionFenceRewrite | (private) | `async function classifySessionFenceRewrite(para...` |
| 867 | fn | classifySessionFenceChange | (private) | `async function classifySessionFenceChange(param...` |
| 886 | type | OwnedSessionFileWrite | (private) | - |
| 893 | type | OwnedSessionFileWriteHistory | (private) | - |
| 898 | type | TrustedSessionFileState | (private) | - |
| 912 | fn | resolveSessionFileFenceKey | (private) | `function resolveSessionFileFenceKey(sessionFile...` |
| 916 | type | SessionFileOwnerWaiter | (private) | - |
| 924 | type | SessionFileOwnerEntry | (private) | - |
| 929 | type | SessionFileOwnerState | (private) | - |
| 944 | type | EmbeddedAttemptSessionFileOwner | pub | - |
| 949 | class | EmbeddedAttemptSessionFileOwnerTimeoutError | (private) | - |
| 956 | fn | abortReason | (private) | `function abortReason(signal: AbortSignal): unkn...` |
| 960 | fn | abortOwnerWaitReason | (private) | `function abortOwnerWaitReason(signal: AbortSign...` |
| 964 | fn | resolveSessionFileOwnerWaitTimeoutMs | (private) | `function resolveSessionFileOwnerWaitTimeoutMs(t...` |
| 971 | fn | waitForSessionFileOwnerRelease | (private) | `function waitForSessionFileOwnerRelease(params: {` |
| 988 | fn | cleanup | (private) | `const cleanup = () => {` |
| 1024 | fn | acquireEmbeddedAttemptSessionFileOwner | pub | `export async function acquireEmbeddedAttemptSes...` |
| 1064 | fn | resetEmbeddedAttemptSessionFileOwnersForTest | (private) | `function resetEmbeddedAttemptSessionFileOwnersF...` |
| 1086 | fn | resolveOwnedSessionFileWriteHistory | (private) | `function resolveOwnedSessionFileWriteHistory(se...` |
| 1099 | fn | pruneOwnedSessionFileWriteHistory | (private) | `function pruneOwnedSessionFileWriteHistory(` |
| 1111 | fn | recordOwnedSessionFileWrite | (private) | `function recordOwnedSessionFileWrite(` |
| 1131 | fn | recordTrustedSessionFileState | (private) | `function recordTrustedSessionFileState(` |
| 1144 | fn | trustSessionFileState | (private) | `function trustSessionFileState(` |
| 1162 | fn | isTrustedSessionFileState | (private) | `function isTrustedSessionFileState(` |
| 1170 | fn | readSessionFileFingerprint | (private) | `async function readSessionFileFingerprint(sessi...` |
| 1184 | fn | readSessionFileFingerprintSync | (private) | `function readSessionFileFingerprintSync(session...` |
| 1198 | fn | waitForSessionEventQueue | (private) | `async function waitForSessionEventQueue(_sessio...` |
| 1200 | class | EmbeddedAttemptSessionTakeoverError | pub | - |
| 1207 | type | EmbeddedAttemptSessionLockController | pub | - |
| 1230 | fn | createEmbeddedAttemptSessionLockController | pub | `export async function createEmbeddedAttemptSess...` |
| 1275 | fn | runLockLifecycle | (private) | `function runLockLifecycle<T>(run: () => Promise...` |
| 1284 | fn | setFenceGeneration | (private) | `function setFenceGeneration(generation: number)...` |
| 1294 | fn | activateFence | (private) | `function activateFence(generation: number): void {` |
| 1299 | fn | deactivateFence | (private) | `function deactivateFence(): void {` |
| 1312 | fn | mergePromptReleasedSessionChange | (private) | `async function mergePromptReleasedSessionChange(` |
| 1374 | fn | reloadPromptReleasedSessionFile | (private) | `async function reloadPromptReleasedSessionFile(` |
| 1394 | fn | beginRetainedLockUse | (private) | `function beginRetainedLockUse(): () => void {` |
| 1413 | fn | waitForRetainedLockIdle | (private) | `async function waitForRetainedLockIdle(): Promi...` |
| 1426 | fn | acquireWriteLock | (private) | `async function acquireWriteLock(): Promise<{` |
| 1445 | fn | waitForHeldLockDrain | (private) | `async function waitForHeldLockDrain(): Promise<...` |
| 1456 | fn | beginHeldLockDrain | (private) | `async function beginHeldLockDrain(): Promise<sy...` |
| 1470 | fn | finishHeldLockDrain | (private) | `function finishHeldLockDrain(owner: symbol): vo...` |
| 1486 | fn | assertSessionFileFence | (private) | `async function assertSessionFileFence(): Promis...` |
| 1595 | fn | refreshSessionFileFence | (private) | `async function refreshSessionFileFence(beforeWr...` |
| 1606 | fn | captureOwnedSessionFileWriteStart | (private) | `async function captureOwnedSessionFileWriteStar...` |
| 1618 | fn | publishOwnedSessionFileFence | (private) | `async function publishOwnedSessionFileFence(` |
| 1665 | fn | publishOwnedSessionFileFenceSync | (private) | `function publishOwnedSessionFileFenceSync<T>(wr...` |
| 1701 | fn | releaseHeldLockWithFence | (private) | `async function releaseHeldLockWithFence(): Prom...` |
| 1739 | fn | takeHeldLockAfterRetainedIdle | (private) | `async function takeHeldLockAfterRetainedIdle():...` |
| 1761 | fn | disposeHeldLockAfterRetainedIdle | (private) | `async function disposeHeldLockAfterRetainedIdle...` |
| 1783 | fn | releaseHeldLockAfterTakeover | (private) | `async function releaseHeldLockAfterTakeover(): ...` |
| 1790 | fn | acquireCleanupLock | (private) | `async function acquireCleanupLock(): Promise<Se...` |
| 1807 | fn | runWithPhysicalWriteLockScope | (private) | `async function runWithPhysicalWriteLockScope<T>(` |
| 1846 | fn | runWithRetainedLock | (private) | `async function runWithRetainedLock<T>(` |
| 1853 | fn | runPublishingOwnedSessionFileWrite | (private) | `async function runPublishingOwnedSessionFileWri...` |
| 1863 | fn | nestedPublication | (private) | `const nestedPublication = (async () => {` |
| 1885 | fn | publication | (private) | `const publication = (async () => {` |
| 1944 | fn | runInheritedWriteLockOperation | (private) | `async function runInheritedWriteLockOperation<T>(` |
| 1948 | fn | operation | (private) | `const operation = (async () => await run())();` |
| 1952 | fn | withSessionWriteLock | (private) | `async function withSessionWriteLock<T>(` |
| 1975 | fn | runLockedOperation | (private) | `const runLockedOperation = async () => {` |
| 2168 | fn | installPromptSubmissionLockRelease | pub | `export function installPromptSubmissionLockRele...` |

## Public API

### `acquireEmbeddedAttemptSessionFileOwner`

```
export async function acquireEmbeddedAttemptSessionFileOwner(params: {
```

**Line:** 1024 | **Kind:** fn

### `createEmbeddedAttemptSessionLockController`

```
export async function createEmbeddedAttemptSessionLockController(params: {
```

**Line:** 1230 | **Kind:** fn

### `installPromptSubmissionLockRelease`

```
export function installPromptSubmissionLockRelease(params: {
```

**Line:** 2168 | **Kind:** fn
