# src/agents/subagent-registry-lifecycle.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2400
- **Language:** TypeScript
- **Symbols:** 43
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 88 | type | CaptureSubagentCompletionReply | (private) | - |
| 90 | type | RunSubagentAnnounceFlow | (private) | - |
| 91 | type | MaybeWakeRequesterAfterAllChildrenSettled | (private) | - |
| 93 | type | RequesterSettleWakeBatchState | (private) | - |
| 95 | type | BrowserCleanupModule | (private) | - |
| 106 | fn | loadCleanupBrowserSessionsForLifecycleEnd | (private) | `async function loadCleanupBrowserSessionsForLif...` |
| 112 | fn | shouldPreservePublishedExplicitRunTimeout | (private) | `function shouldPreservePublishedExplicitRunTime...` |
| 138 | fn | resolveExpiredExplicitRunDeadlineMs | (private) | `function resolveExpiredExplicitRunDeadlineMs(pa...` |
| 151 | fn | isOlderEquivalentTerminalCallback | (private) | `function isOlderEquivalentTerminalCallback(para...` |
| 173 | fn | createSubagentRegistryLifecycleController | pub | `export function createSubagentRegistryLifecycle...` |
| 232 | fn | releaseLock | (private) | `let releaseLock = () => {};` |
| 246 | fn | scheduleResumeSubagentRun | (private) | `const scheduleResumeSubagentRun = (` |
| 288 | fn | clearScheduledResumeTimers | (private) | `const clearScheduledResumeTimers = () => {` |
| 300 | fn | runDetachedCleanupAttempt | (private) | `const runDetachedCleanupAttempt = (args: {` |
| 383 | fn | recordAnnounceDeliveryResult | (private) | `const recordAnnounceDeliveryResult = (` |
| 481 | fn | safeSetSubagentTaskDeliveryStatus | (private) | `const safeSetSubagentTaskDeliveryStatus = (args: {` |
| 548 | fn | safeMarkRequiredCompletionDeliveryBlocked | (private) | `const safeMarkRequiredCompletionDeliveryBlocked...` |
| 693 | fn | emitCompletionEndedHookIfNeeded | (private) | `const emitCompletionEndedHookIfNeeded = async (` |
| 708 | fn | clearPendingFinalDelivery | (private) | `const clearPendingFinalDelivery = (entry: Subag...` |
| 749 | fn | markPendingFinalDelivery | (private) | `const markPendingFinalDelivery = (args: { entry...` |
| 782 | fn | transitionRequesterSettleWakeBatch | (private) | `const transitionRequesterSettleWakeBatch = (` |
| 812 | fn | completeRequesterSettleWakeBatch | (private) | `const completeRequesterSettleWakeBatch = (` |
| 871 | fn | markRequesterSettleWakePending | (private) | `const markRequesterSettleWakePending = (` |
| 894 | fn | persistRequesterSettleWakePending | (private) | `const persistRequesterSettleWakePending = (` |
| 920 | fn | scheduleRequesterSettleWakeRetry | (private) | `function scheduleRequesterSettleWakeRetry(runId...` |
| 943 | fn | scheduleRequesterSettleWake | (private) | `function scheduleRequesterSettleWake(runId: str...` |
| 990 | fn | suspendPendingFinalDelivery | (private) | `const suspendPendingFinalDelivery = (args: {` |
| 1038 | fn | shouldSuspendPendingFinalDelivery | (private) | `const shouldSuspendPendingFinalDelivery = (entr...` |
| 1044 | fn | finalizeResumedAnnounceGiveUp | (private) | `const finalizeResumedAnnounceGiveUp = async (gi...` |
| 1096 | fn | beginSubagentCleanup | (private) | `const beginSubagentCleanup = (runId: string) => {` |
| 1140 | fn | retireSupersededCleanupInBackground | (private) | `const retireSupersededCleanupInBackground = (` |
| 1170 | fn | retryDeferredCompletedAnnounces | (private) | `const retryDeferredCompletedAnnounces = (exclud...` |
| 1212 | fn | completeCleanupBookkeeping | (private) | `const completeCleanupBookkeeping = (cleanupPara...` |
| 1224 | fn | runCleanupTail | (private) | `const runCleanupTail = (label: string, run: () ...` |
| 1347 | fn | retireRunModeBundleMcpRuntime | (private) | `const retireRunModeBundleMcpRuntime = async (cl...` |
| 1370 | fn | finalizeSubagentCleanup | (private) | `const finalizeSubagentCleanup = async (` |
| 1639 | fn | finalizeAnnounceCleanup | (private) | `const finalizeAnnounceCleanup = async (didAnnou...` |
| 1740 | type | CompleteSubagentRunParams | (private) | - |
| 1754 | fn | completeSubagentRunAttempt | (private) | `const completeSubagentRunAttempt = async (compl...` |
| 1773 | fn | restoreEntrySnapshot | (private) | `const restoreEntrySnapshot = (snapshot?: Subage...` |
| 1803 | fn | outcomeMatchesInterruptedRecovery | (private) | `const outcomeMatchesInterruptedRecovery = (outc...` |
| 2193 | fn | retireSupersededSession | (private) | `const retireSupersededSession = async (currentE...` |
| 2362 | fn | completeSubagentRun | (private) | `const completeSubagentRun = async (completePara...` |

## Public API

### `createSubagentRegistryLifecycleController`

```
export function createSubagentRegistryLifecycleController(params: {
```

**Line:** 173 | **Kind:** fn
