# src/agents/subagent-registry.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2686
- **Language:** TypeScript
- **Symbols:** 91
- **Public symbols:** 28

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 119 | fn | readGatewayRunId | (private) | `function readGatewayRunId(response: unknown): s...` |
| 127 | type | SubagentAnnounceModule | (private) | - |
| 131 | type | RequesterSettleWakeModule | (private) | - |
| 135 | type | BrowserCleanupModule | (private) | - |
| 140 | type | SubagentRegistryDeps | (private) | - |
| 171 | fn | loadSubagentAnnounceModule | (private) | `async function loadSubagentAnnounceModule(): Pr...` |
| 175 | fn | loadCleanupBrowserSessionsForLifecycleEnd | (private) | `async function loadCleanupBrowserSessionsForLif...` |
| 204 | type | ContextEngineInitModule | (private) | - |
| 210 | type | ContextEngineRegistryModule | (private) | - |
| 219 | type | RuntimePluginsModule | (private) | - |
| 275 | fn | loadContextEngineInitModule | (private) | `function loadContextEngineInitModule(): Promise...` |
| 279 | fn | loadContextEngineRegistryModule | (private) | `function loadContextEngineRegistryModule(): Pro...` |
| 283 | fn | loadRuntimePluginsModule | (private) | `function loadRuntimePluginsModule(): Promise<Ru...` |
| 287 | fn | ensureSubagentRegistryPluginRuntimeLoaded | (private) | `async function ensureSubagentRegistryPluginRunt...` |
| 300 | fn | resolveSubagentRegistryContextEngine | (private) | `async function resolveSubagentRegistryContextEn...` |
| 315 | fn | persistSubagentRuns | (private) | `function persistSubagentRuns() {` |
| 319 | fn | persistSubagentRunsOrThrow | (private) | `function persistSubagentRunsOrThrow() {` |
| 323 | fn | findSubagentTaskForRun | (private) | `function findSubagentTaskForRun(entry: Subagent...` |
| 341 | fn | findNextSubagentRunCreatedAt | (private) | `function findNextSubagentRunCreatedAt(entry: Su...` |
| 356 | fn | resolveCompletionFromTerminalTask | (private) | `function resolveCompletionFromTerminalTask(` |
| 395 | fn | scheduleSubagentOrphanRecovery | pub | `export function scheduleSubagentOrphanRecovery(...` |
| 445 | fn | clearPendingLifecycleError | (private) | `function clearPendingLifecycleError(runId: stri...` |
| 454 | fn | clearAllPendingLifecycleErrors | (private) | `function clearAllPendingLifecycleErrors() {` |
| 461 | fn | clearPendingLifecycleTimeout | (private) | `function clearPendingLifecycleTimeout(runId: st...` |
| 470 | fn | clearAllPendingLifecycleTimeouts | (private) | `function clearAllPendingLifecycleTimeouts() {` |
| 477 | type | CompleteSubagentRunParams | (private) | - |
| 490 | fn | completeSubagentRunWithRecoveryAttempt | (private) | `async function completeSubagentRunWithRecoveryA...` |
| 544 | fn | scheduleSubagentCompletionRetryAfterRestart | (private) | `function scheduleSubagentCompletionRetryAfterRe...` |
| 568 | fn | completeSubagentRunWithRecovery | (private) | `async function completeSubagentRunWithRecovery(...` |
| 590 | fn | completeSubagentRunInBackground | (private) | `function completeSubagentRunInBackground(params...` |
| 594 | fn | schedulePendingLifecycleError | (private) | `function schedulePendingLifecycleError(params: {` |
| 639 | fn | schedulePendingLifecycleTimeout | (private) | `function schedulePendingLifecycleTimeout(params: {` |
| 681 | type | ContextEngineSubagentEndedParams | (private) | - |
| 688 | fn | runContextEngineSubagentEnded | (private) | `async function runContextEngineSubagentEnded(` |
| 704 | fn | notifyContextEngineSubagentEnded | (private) | `async function notifyContextEngineSubagentEnded(` |
| 714 | fn | finishCollectorContextEngineCleanup | (private) | `async function finishCollectorContextEngineClea...` |
| 726 | fn | cleanupCollectorLaunchResources | (private) | `async function cleanupCollectorLaunchResources(...` |
| 757 | fn | terminateAcceptedRestoredCollectorRun | (private) | `async function terminateAcceptedRestoredCollect...` |
| 794 | fn | suppressAnnounceForSteerRestart | (private) | `function suppressAnnounceForSteerRestart(entry?...` |
| 798 | fn | shouldKeepThreadBindingAfterRun | (private) | `function shouldKeepThreadBindingAfterRun(params: {` |
| 808 | fn | shouldEmitEndedHookForRun | (private) | `function shouldEmitEndedHookForRun(params: {` |
| 815 | fn | emitSubagentEndedHookForRun | (private) | `async function emitSubagentEndedHookForRun(para...` |
| 893 | fn | scheduleSubagentDeliveryResumeRetry | (private) | `function scheduleSubagentDeliveryResumeRetry(` |
| 928 | fn | finalizeResumedAnnounceGiveUpInBackground | (private) | `function finalizeResumedAnnounceGiveUpInBackgro...` |
| 948 | fn | resumeSubagentRun | (private) | `function resumeSubagentRun(runId: string) {` |
| 1052 | fn | restoreSubagentRunsOnce | (private) | `function restoreSubagentRunsOnce() {` |
| 1194 | fn | failAndCleanupRestoredQueuedRun | (private) | `async function failAndCleanupRestoredQueuedRun(` |
| 1267 | fn | resolveSubagentWaitTimeoutMs | (private) | `function resolveSubagentWaitTimeoutMs(cfg: Open...` |
| 1274 | fn | startSweeper | (private) | `function startSweeper() {` |
| 1287 | fn | runSubagentSweep | (private) | `async function runSubagentSweep() {` |
| 1297 | fn | runSubagentSweepCleanupTail | (private) | `function runSubagentSweepCleanupTail(runId: str...` |
| 1303 | fn | stopSweeper | (private) | `function stopSweeper() {` |
| 1311 | fn | isSuspendedPendingFinalDelivery | (private) | `function isSuspendedPendingFinalDelivery(entry:...` |
| 1315 | fn | resolveSuspendedDeliveryExpiryMs | (private) | `function resolveSuspendedDeliveryExpiryMs(entry...` |
| 1326 | fn | discardSuspendedPendingFinalDelivery | (private) | `async function discardSuspendedPendingFinalDeli...` |
| 1396 | fn | retireSupersededSubagentRun | (private) | `async function retireSupersededSubagentRun(runI...` |
| 1416 | fn | sweepSubagentRuns | (private) | `async function sweepSubagentRuns() {` |
| 1989 | fn | ensureListener | (private) | `function ensureListener() {` |
| 2204 | fn | markSubagentRunForSteerRestart | pub | `export function markSubagentRunForSteerRestart(...` |
| 2208 | fn | clearSubagentRunSteerRestart | pub | `export function clearSubagentRunSteerRestart(ru...` |
| 2212 | fn | replaceSubagentRunAfterSteer | pub | `export function replaceSubagentRunAfterSteer(pa...` |
| 2224 | fn | registerSubagentRun | pub | `export function registerSubagentRun(params: Reg...` |
| 2228 | fn | startQueuedSubagentRun | pub | `export function startQueuedSubagentRun(runId: s...` |
| 2232 | fn | failQueuedSubagentRun | (private) | `function failQueuedSubagentRun(runId: string, e...` |
| 2236 | fn | settleFailedQueuedSubagentLaunch | pub | `export function settleFailedQueuedSubagentLaunc...` |
| 2240 | fn | resetSubagentRegistryForTests | (private) | `function resetSubagentRegistryForTests(opts?: {...` |
| 2289 | fn | addSubagentRunForTests | (private) | `function addSubagentRunForTests(entry: Subagent...` |
| 2293 | fn | releaseSubagentRun | (private) | `function releaseSubagentRun(runId: string) {` |
| 2297 | fn | hasCompleteSubagentTerminalState | (private) | `function hasCompleteSubagentTerminalState(entry...` |
| 2308 | fn | finalizeInterruptedSubagentRun | (private) | `async function finalizeInterruptedSubagentRun(p...` |
| 2373 | fn | markSubagentRunTerminated | pub | `export function markSubagentRunTerminated(param...` |
| 2382 | fn | leasePendingAgentSteeringItems | pub | `export function leasePendingAgentSteeringItems(...` |
| 2400 | fn | ackPendingAgentSteeringItems | pub | `export function ackPendingAgentSteeringItems(pa...` |
| 2425 | fn | releasePendingAgentSteeringItems | pub | `export function releasePendingAgentSteeringItem...` |
| 2444 | fn | listSubagentRunsForController | pub | `export function listSubagentRunsForController(c...` |
| 2451 | fn | getSubagentRunByRunId | pub | `export function getSubagentRunByRunId(runId: st...` |
| 2461 | fn | observeSubagentRequesterWait | pub | `export function observeSubagentRequesterWait(pa...` |
| 2488 | fn | getSubagentRunsByRunIds | pub | `export function getSubagentRunsByRunIds(runIds:...` |
| 2509 | fn | completeCollectorLaunchCleanup | pub | `export function completeCollectorLaunchCleanup(...` |
| 2523 | fn | recordSwarmStructuredOutput | pub | `export function recordSwarmStructuredOutput(` |
| 2552 | fn | listSwarmRunsForGroup | pub | `export function listSwarmRunsForGroup(` |
| 2568 | fn | getSwarmRunByLaunchReplayKey | pub | `export function getSwarmRunByLaunchReplayKey(` |
| 2586 | fn | countActiveRunsForSession | pub | `export function countActiveRunsForSession(` |
| 2597 | fn | countActiveDescendantRuns | pub | `export function countActiveDescendantRuns(rootS...` |
| 2604 | fn | countPendingDescendantRuns | pub | `export function countPendingDescendantRuns(root...` |
| 2611 | fn | listDescendantRunsForRequester | pub | `export function listDescendantRunsForRequester(...` |
| 2618 | fn | getSubagentRunByChildSessionKey | pub | `export function getSubagentRunByChildSessionKey...` |
| 2625 | fn | getLatestSubagentRunByChildSessionKey | pub | `export function getLatestSubagentRunByChildSess...` |
| 2646 | fn | initSubagentRegistry | pub | `export function initSubagentRegistry() {` |
| 2651 | fn | settleRequesterAfterSessionSpawns | pub | `export function settleRequesterAfterSessionSpaw...` |
| 2661 | fn | markRequesterTurnYielded | pub | `export function markRequesterTurnYielded(params: {` |

## Public API

### `scheduleSubagentOrphanRecovery`

```
export function scheduleSubagentOrphanRecovery(params?: { delayMs?: number; maxRetries?: number }) {
```

**Line:** 395 | **Kind:** fn

### `markSubagentRunForSteerRestart`

```
export function markSubagentRunForSteerRestart(runId: string) {
```

**Line:** 2204 | **Kind:** fn

### `clearSubagentRunSteerRestart`

```
export function clearSubagentRunSteerRestart(runId: string) {
```

**Line:** 2208 | **Kind:** fn

### `replaceSubagentRunAfterSteer`

```
export function replaceSubagentRunAfterSteer(params: {
```

**Line:** 2212 | **Kind:** fn

### `registerSubagentRun`

```
export function registerSubagentRun(params: RegisterSubagentRunParams) {
```

**Line:** 2224 | **Kind:** fn

### `startQueuedSubagentRun`

```
export function startQueuedSubagentRun(runId: string, gatewayRunId?: string) {
```

**Line:** 2228 | **Kind:** fn

### `settleFailedQueuedSubagentLaunch`

```
export function settleFailedQueuedSubagentLaunch(runId: string, error: string) {
```

**Line:** 2236 | **Kind:** fn

### `markSubagentRunTerminated`

```
export function markSubagentRunTerminated(params: {
```

**Line:** 2373 | **Kind:** fn

### `leasePendingAgentSteeringItems`

```
export function leasePendingAgentSteeringItems(params: {
```

**Line:** 2382 | **Kind:** fn

### `ackPendingAgentSteeringItems`

```
export function ackPendingAgentSteeringItems(params: {
```

**Line:** 2400 | **Kind:** fn

### `releasePendingAgentSteeringItems`

```
export function releasePendingAgentSteeringItems(params: {
```

**Line:** 2425 | **Kind:** fn

### `listSubagentRunsForController`

```
export function listSubagentRunsForController(controllerSessionKey: string): SubagentRunRecord[] {
```

**Line:** 2444 | **Kind:** fn

### `getSubagentRunByRunId`

```
export function getSubagentRunByRunId(runId: string): SubagentRunRecord | undefined {
```

**Line:** 2451 | **Kind:** fn

### `observeSubagentRequesterWait`

```
export function observeSubagentRequesterWait(params: {
```

**Line:** 2461 | **Kind:** fn

### `getSubagentRunsByRunIds`

```
export function getSubagentRunsByRunIds(runIds: readonly string[]): {
```

**Line:** 2488 | **Kind:** fn

### `completeCollectorLaunchCleanup`

```
export function completeCollectorLaunchCleanup(runId: string): void {
```

**Line:** 2509 | **Kind:** fn

### `recordSwarmStructuredOutput`

```
export function recordSwarmStructuredOutput(
```

**Line:** 2523 | **Kind:** fn

### `listSwarmRunsForGroup`

```
export function listSwarmRunsForGroup(
```

**Line:** 2552 | **Kind:** fn

### `getSwarmRunByLaunchReplayKey`

```
export function getSwarmRunByLaunchReplayKey(
```

**Line:** 2568 | **Kind:** fn

### `countActiveRunsForSession`

```
export function countActiveRunsForSession(
```

**Line:** 2586 | **Kind:** fn

### `countActiveDescendantRuns`

```
export function countActiveDescendantRuns(rootSessionKey: string): number {
```

**Line:** 2597 | **Kind:** fn

### `countPendingDescendantRuns`

```
export function countPendingDescendantRuns(rootSessionKey: string): number {
```

**Line:** 2604 | **Kind:** fn

### `listDescendantRunsForRequester`

```
export function listDescendantRunsForRequester(rootSessionKey: string): SubagentRunRecord[] {
```

**Line:** 2611 | **Kind:** fn

### `getSubagentRunByChildSessionKey`

```
export function getSubagentRunByChildSessionKey(childSessionKey: string): SubagentRunRecord | null {
```

**Line:** 2618 | **Kind:** fn

### `getLatestSubagentRunByChildSessionKey`

```
export function getLatestSubagentRunByChildSessionKey(
```

**Line:** 2625 | **Kind:** fn

### `initSubagentRegistry`

```
export function initSubagentRegistry() {
```

**Line:** 2646 | **Kind:** fn

### `settleRequesterAfterSessionSpawns`

```
export function settleRequesterAfterSessionSpawns(params: {
```

**Line:** 2651 | **Kind:** fn

### `markRequesterTurnYielded`

```
export function markRequesterTurnYielded(params: {
```

**Line:** 2661 | **Kind:** fn
