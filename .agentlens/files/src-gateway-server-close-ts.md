# src/gateway/server-close.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1063
- **Language:** TypeScript
- **Symbols:** 27
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 52 | type | ShutdownResult | pub | - |
| 58 | fn | createTimeoutRace | (private) | `function createTimeoutRace<T>(timeoutMs: number...` |
| 86 | fn | shutdownStep | (private) | `async function shutdownStep(` |
| 103 | fn | recordShutdownWarning | (private) | `function recordShutdownWarning(warnings: string...` |
| 110 | fn | getRestartReplyDrainCounts | (private) | `function getRestartReplyDrainCounts(params: {` |
| 132 | fn | listUnabortedRestartRuns | (private) | `function listUnabortedRestartRuns(` |
| 141 | fn | listRestartDrainRuns | (private) | `function listRestartDrainRuns(` |
| 150 | fn | listRestartRecoveryRuns | (private) | `function listRestartRecoveryRuns(` |
| 162 | fn | formatRestartReplyDrainDetails | (private) | `function formatRestartReplyDrainDetails(counts: {` |
| 181 | fn | sleepForRestartReplyDrain | (private) | `async function sleepForRestartReplyDrain(delayM...` |
| 188 | type | RestartRunAbortParams | (private) | - |
| 224 | fn | waitForRestartReplyDrain | (private) | `async function waitForRestartReplyDrain(params: {` |
| 259 | fn | collectActiveRestartSessionRefs | (private) | `function collectActiveRestartSessionRefs(` |
| 279 | fn | addRun | (private) | `const addRun = (run: RestartRecoveryCandidate) ...` |
| 321 | fn | settleTerminalSessionPersistenceForRestart | (private) | `async function settleTerminalSessionPersistence...` |
| 358 | fn | markActiveRunsForRestartRecovery | (private) | `async function markActiveRunsForRestartRecovery(` |
| 422 | fn | abortActiveRunsForRestart | (private) | `function abortActiveRunsForRestart(params: Rest...` |
| 458 | fn | abortQueuedTurnsForRestart | (private) | `function abortQueuedTurnsForRestart(params: Res...` |
| 464 | fn | drainRestartPendingRepliesForShutdown | (private) | `async function drainRestartPendingRepliesForShu...` |
| 550 | fn | triggerGatewayLifecycleHookWithTimeout | (private) | `async function triggerGatewayLifecycleHookWithT...` |
| 579 | fn | disposeRuntimeWithShutdownGrace | (private) | `async function disposeRuntimeWithShutdownGrace(...` |
| 601 | fn | disposeAllBundleLspRuntimesOnDemand | (private) | `async function disposeAllBundleLspRuntimesOnDem...` |
| 606 | fn | stopGmailWatcherOnDemand | (private) | `async function stopGmailWatcherOnDemand(): Prom...` |
| 611 | fn | runGatewayClosePrelude | pub | `export async function runGatewayClosePrelude(pa...` |
| 635 | fn | isServerNotRunningError | (private) | `function isServerNotRunningError(err: unknown):...` |
| 644 | fn | waitForHttpClose | (private) | `async function waitForHttpClose(params: {` |
| 671 | fn | createGatewayCloseHandler | pub | `export function createGatewayCloseHandler(` |

## Public API

### `runGatewayClosePrelude`

```
export async function runGatewayClosePrelude(params: {
```

**Line:** 611 | **Kind:** fn

### `createGatewayCloseHandler`

```
export function createGatewayCloseHandler(
```

**Line:** 671 | **Kind:** fn
