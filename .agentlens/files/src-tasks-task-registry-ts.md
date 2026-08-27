# src/tasks/task-registry.ts

[← Back to Module](../modules/src-tasks/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2807
- **Language:** TypeScript
- **Symbols:** 127
- **Public symbols:** 29

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 90 | type | TaskRegistryRestoreState | (private) | - |
| 97 | type | TaskRegistryDeliveryRuntime | (private) | - |
| 112 | type | TaskRegistryGlobalWithRuntimeOverrides | (private) | - |
| 135 | type | TaskDeliveryOwner | (private) | - |
| 141 | type | ParentFlowLinkErrorCode | (private) | - |
| 148 | class | ParentFlowLinkError | (private) | - |
| 162 | fn | isParentFlowLinkError | pub | `export function isParentFlowLinkError(error: un...` |
| 166 | fn | isActiveTaskStatus | (private) | `function isActiveTaskStatus(status: TaskStatus)...` |
| 170 | fn | isTerminalFlowStatus | (private) | `function isTerminalFlowStatus(status: TaskFlowR...` |
| 176 | fn | assertTaskOwner | (private) | `function assertTaskOwner(params: { ownerKey: st...` |
| 183 | fn | assertParentFlowLinkAllowed | (private) | `function assertParentFlowLinkAllowed(params: {` |
| 227 | fn | ensureLinkedTaskFlowRegistryReady | (private) | `function ensureLinkedTaskFlowRegistryReady(task...` |
| 233 | fn | ensureTaskCancellationReady | (private) | `function ensureTaskCancellationReady(task: Task...` |
| 248 | fn | snapshotTaskRecords | (private) | `function snapshotTaskRecords(source: ReadonlyMa...` |
| 252 | fn | emitTaskRegistryObserverEvent | (private) | `function emitTaskRegistryObserverEvent(createEv...` |
| 267 | fn | persistTaskRegistry | (private) | `function persistTaskRegistry(): boolean {` |
| 280 | fn | persistTaskUpsert | (private) | `function persistTaskUpsert(task: TaskRecord, pe...` |
| 305 | fn | tryPersistTaskUpsert | (private) | `function tryPersistTaskUpsert(` |
| 324 | fn | persistTaskDelete | (private) | `function persistTaskDelete(taskId: string) {` |
| 351 | fn | tryPersistTaskDelete | (private) | `function tryPersistTaskDelete(taskId: string): ...` |
| 364 | fn | persistTaskDeliveryStateUpsert | (private) | `function persistTaskDeliveryStateUpsert(state: ...` |
| 378 | fn | tryPersistTaskDeliveryStateUpsert | (private) | `function tryPersistTaskDeliveryStateUpsert(stat...` |
| 391 | fn | clearTaskRegistryMemory | (private) | `function clearTaskRegistryMemory(): void {` |
| 402 | fn | ensureDeliveryStatus | (private) | `function ensureDeliveryStatus(params: {` |
| 412 | fn | ensureNotifyPolicy | (private) | `function ensureNotifyPolicy(params: {` |
| 430 | fn | resolveTaskScopeKind | (private) | `function resolveTaskScopeKind(params: {` |
| 440 | fn | resolveTaskRequesterSessionKey | (private) | `function resolveTaskRequesterSessionKey(params: {` |
| 455 | fn | resolveTaskOwnerKey | (private) | `function resolveTaskOwnerKey(params: { requeste...` |
| 459 | fn | normalizeTaskSummary | (private) | `function normalizeTaskSummary(value: string | n...` |
| 464 | fn | normalizeTaskStatus | (private) | `function normalizeTaskStatus(value: TaskStatus ...` |
| 476 | fn | normalizeTaskTerminalOutcome | (private) | `function normalizeTaskTerminalOutcome(` |
| 482 | fn | shouldApplyRunScopedStatusUpdate | (private) | `function shouldApplyRunScopedStatusUpdate(param...` |
| 535 | fn | resolveTaskTerminalOutcome | (private) | `function resolveTaskTerminalOutcome(params: {` |
| 546 | fn | mapAgentRunTerminalOutcomeToTaskStatus | (private) | `function mapAgentRunTerminalOutcomeToTaskStatus(` |
| 567 | fn | resolveTaskLifecycleTerminalError | (private) | `function resolveTaskLifecycleTerminalError(para...` |
| 579 | fn | buildTaskLifecycleTerminalOutcome | (private) | `function buildTaskLifecycleTerminalOutcome(para...` |
| 601 | fn | appendTaskEvent | (private) | `function appendTaskEvent(event: {` |
| 614 | fn | loadTaskRegistryDeliveryRuntime | (private) | `function loadTaskRegistryDeliveryRuntime() {` |
| 624 | fn | loadTaskRegistryControlRuntime | (private) | `function loadTaskRegistryControlRuntime() {` |
| 636 | fn | addRunIdIndex | (private) | `function addRunIdIndex(taskId: string, runId?: ...` |
| 649 | fn | addIndexedKey | (private) | `function addIndexedKey(index: Map<string, Set<s...` |
| 658 | fn | deleteIndexedKey | (private) | `function deleteIndexedKey(index: Map<string, Se...` |
| 669 | fn | getTaskRelatedSessionIndexKeys | (private) | `function getTaskRelatedSessionIndexKeys(task: P...` |
| 677 | fn | addOwnerKeyIndex | (private) | `function addOwnerKeyIndex(taskId: string, task:...` |
| 685 | fn | deleteOwnerKeyIndex | (private) | `function deleteOwnerKeyIndex(taskId: string, ta...` |
| 693 | fn | addParentFlowIdIndex | (private) | `function addParentFlowIdIndex(taskId: string, t...` |
| 701 | fn | deleteParentFlowIdIndex | (private) | `function deleteParentFlowIdIndex(taskId: string...` |
| 709 | fn | addRelatedSessionKeyIndex | (private) | `function addRelatedSessionKeyIndex(` |
| 718 | fn | deleteRelatedSessionKeyIndex | (private) | `function deleteRelatedSessionKeyIndex(` |
| 727 | fn | rebuildRunIdIndex | (private) | `function rebuildRunIdIndex() {` |
| 734 | fn | rebuildOwnerKeyIndex | (private) | `function rebuildOwnerKeyIndex() {` |
| 741 | fn | rebuildParentFlowIdIndex | (private) | `function rebuildParentFlowIdIndex() {` |
| 748 | fn | rebuildRelatedSessionKeyIndex | (private) | `function rebuildRelatedSessionKeyIndex() {` |
| 755 | fn | getTasksByRunId | (private) | `function getTasksByRunId(runId: string): TaskRe...` |
| 765 | fn | taskRunScopeKey | (private) | `function taskRunScopeKey(` |
| 776 | fn | getTasksByRunScope | (private) | `function getTasksByRunScope(params: {` |
| 802 | fn | getPeerTasksForDelivery | (private) | `function getPeerTasksForDelivery(task: TaskReco...` |
| 817 | fn | taskLookupPriority | (private) | `function taskLookupPriority(task: TaskRecord): ...` |
| 822 | fn | pickPreferredRunIdTask | (private) | `function pickPreferredRunIdTask(matches: TaskRe...` |
| 832 | fn | compareTasksNewestFirst | (private) | `function compareTasksNewestFirst(` |
| 843 | fn | findExistingTaskForCreate | (private) | `function findExistingTaskForCreate(params: {` |
| 898 | fn | mergeExistingTaskForCreate | (private) | `function mergeExistingTaskForCreate(` |
| 986 | fn | resolveTaskAgentId | (private) | `function resolveTaskAgentId(params: {` |
| 1000 | fn | resolveTaskRequesterAgentId | (private) | `function resolveTaskRequesterAgentId(params: {` |
| 1013 | fn | taskTerminalDeliveryIdempotencyKey | (private) | `function taskTerminalDeliveryIdempotencyKey(tas...` |
| 1018 | fn | resolveTaskStateChangeIdempotencyKey | (private) | `function resolveTaskStateChangeIdempotencyKey(p...` |
| 1029 | fn | resolveTaskTerminalIdempotencyKey | (private) | `function resolveTaskTerminalIdempotencyKey(task...` |
| 1038 | fn | getLinkedFlowForDelivery | (private) | `function getLinkedFlowForDelivery(task: TaskRec...` |
| 1053 | fn | resolveTaskDeliveryOwner | (private) | `function resolveTaskDeliveryOwner(task: TaskRec...` |
| 1073 | fn | syncManagedFlowCancellationFromTask | (private) | `function syncManagedFlowCancellationFromTask(ta...` |
| 1122 | fn | scheduleTaskFlowSyncRetry | (private) | `function scheduleTaskFlowSyncRetry(task: TaskRe...` |
| 1173 | fn | syncFlowFromTaskAfterTaskMutation | (private) | `function syncFlowFromTaskAfterTaskMutation(task...` |
| 1187 | fn | clearTaskFlowSyncRetries | (private) | `function clearTaskFlowSyncRetries(): void {` |
| 1194 | fn | restoreTaskRegistryOnce | (private) | `function restoreTaskRegistryOnce() {` |
| 1246 | fn | ensureTaskRegistryReady | pub | `export function ensureTaskRegistryReady() {` |
| 1251 | fn | reloadTaskRegistryFromStore | pub | `export function reloadTaskRegistryFromStore(): ...` |
| 1257 | fn | updateTask | (private) | `function updateTask(taskId: string, patch: Part...` |
| 1322 | fn | upsertTaskDeliveryState | (private) | `function upsertTaskDeliveryState(state: TaskDel...` |
| 1345 | fn | getTaskDeliveryState | (private) | `function getTaskDeliveryState(taskId: string): ...` |
| 1350 | fn | canDeliverTaskToRequesterOrigin | (private) | `function canDeliverTaskToRequesterOrigin(task: ...` |
| 1358 | fn | canDeliverToRequesterOrigin | (private) | `function canDeliverToRequesterOrigin(origin: Ta...` |
| 1364 | fn | canDeliverParentReviewTaskToBoundDiscordThread | (private) | `function canDeliverParentReviewTaskToBoundDisco...` |
| 1383 | fn | resolveMissingOwnerDeliveryStatus | (private) | `function resolveMissingOwnerDeliveryStatus(task...` |
| 1387 | fn | queueTaskSystemEvent | (private) | `function queueTaskSystemEvent(task: TaskRecord,...` |
| 1407 | fn | queueBlockedTaskFollowup | (private) | `function queueBlockedTaskFollowup(task: TaskRec...` |
| 1431 | fn | maybeDeliverTaskTerminalUpdate | pub | `export async function maybeDeliverTaskTerminalU...` |
| 1437 | fn | runTaskDeliveryWithIndependentAdmission | (private) | `async function runTaskDeliveryWithIndependentAd...` |
| 1461 | fn | maybeDeliverTaskTerminalUpdateUnderAdmission | (private) | `async function maybeDeliverTaskTerminalUpdateUn...` |
| 1611 | fn | maybeDeliverTaskStateChangeUpdate | (private) | `async function maybeDeliverTaskStateChangeUpdate(` |
| 1620 | fn | maybeDeliverTaskStateChangeUpdateUnderAdmission | (private) | `async function maybeDeliverTaskStateChangeUpdat...` |
| 1696 | fn | setTaskCleanupAfterById | pub | `export function setTaskCleanupAfterById(params: {` |
| 1706 | fn | markTaskTerminalById | pub | `export function markTaskTerminalById(params: {` |
| 1749 | fn | markTaskLostById | pub | `export function markTaskLostById(params: {` |
| 1766 | fn | updateTasksByRunId | (private) | `function updateTasksByRunId(params: {` |
| 1786 | fn | ensureListener | (private) | `function ensureListener() {` |
| 1884 | fn | createTaskRecord | pub | `export function createTaskRecord(params: {` |
| 2035 | fn | updateTaskStateByRunId | (private) | `function updateTaskStateByRunId(params: {` |
| 2159 | fn | updateTaskDeliveryByRunId | (private) | `function updateTaskDeliveryByRunId(params: {` |
| 2181 | fn | markTaskRunningByRunId | pub | `export function markTaskRunningByRunId(params: {` |
| 2202 | fn | recordTaskProgressByRunId | pub | `export function recordTaskProgressByRunId(param...` |
| 2220 | fn | finalizeTaskRunByRunId | pub | `export function finalizeTaskRunByRunId(params: {` |
| 2258 | fn | setTaskRunDeliveryStatusByRunId | pub | `export function setTaskRunDeliveryStatusByRunId...` |
| 2268 | fn | updateTaskNotifyPolicyById | pub | `export function updateTaskNotifyPolicyById(para...` |
| 2279 | fn | linkTaskToFlowById | pub | `export function linkTaskToFlowById(params: { ta...` |
| 2302 | fn | cancelTaskById | pub | `export async function cancelTaskById(params: {` |
| 2539 | fn | assertTaskCancellationReadyById | pub | `export function assertTaskCancellationReadyById...` |
| 2553 | fn | listTaskRecordsUnsorted | pub | `export function listTaskRecordsUnsorted(): Task...` |
| 2558 | fn | listTaskRecords | pub | `export function listTaskRecords(): TaskRecord[] {` |
| 2566 | fn | hasActiveTaskForChildSessionKey | pub | `export function hasActiveTaskForChildSessionKey...` |
| 2595 | fn | getTaskById | pub | `export function getTaskById(taskId: string): Ta...` |
| 2601 | fn | findTaskByRunId | pub | `export function findTaskByRunId(runId: string):...` |
| 2607 | fn | listTasksFromIndex | (private) | `function listTasksFromIndex(index: Map<string, ...` |
| 2628 | fn | listTasksForSessionKey | pub | `export function listTasksForSessionKey(sessionK...` |
| 2637 | fn | listTasksForAgentId | pub | `export function listTasksForAgentId(agentId: st...` |
| 2648 | fn | findLatestTaskForFlowId | (private) | `function findLatestTaskForFlowId(flowId: string...` |
| 2653 | fn | listTasksForOwnerKey | pub | `export function listTasksForOwnerKey(ownerKey: ...` |
| 2662 | fn | listFreshTasksForOwnerKey | pub | `export function listFreshTasksForOwnerKey(owner...` |
| 2690 | fn | listTasksForFlowId | pub | `export function listTasksForFlowId(flowId: stri...` |
| 2699 | fn | findLatestTaskForRelatedSessionKey | (private) | `function findLatestTaskForRelatedSessionKey(ses...` |
| 2704 | fn | listTasksForRelatedSessionKey | pub | `export function listTasksForRelatedSessionKey(s...` |
| 2713 | fn | resolveTaskForLookupToken | pub | `export function resolveTaskForLookupToken(token...` |
| 2723 | fn | deleteTaskRecordById | pub | `export function deleteTaskRecordById(taskId: st...` |
| 2750 | fn | resetTaskRegistryForTests | (private) | `function resetTaskRegistryForTests(opts?: { per...` |
| 2769 | fn | resetTaskRegistryDeliveryRuntimeForTests | (private) | `function resetTaskRegistryDeliveryRuntimeForTes...` |
| 2776 | fn | setTaskRegistryDeliveryRuntimeForTests | (private) | `function setTaskRegistryDeliveryRuntimeForTests...` |
| 2783 | fn | resetTaskRegistryControlRuntimeForTests | (private) | `function resetTaskRegistryControlRuntimeForTest...` |
| 2790 | fn | setTaskRegistryControlRuntimeForTests | (private) | `function setTaskRegistryControlRuntimeForTests(...` |

## Public API

### `isParentFlowLinkError`

```
export function isParentFlowLinkError(error: unknown): error is ParentFlowLinkError {
```

**Line:** 162 | **Kind:** fn

### `ensureTaskRegistryReady`

```
export function ensureTaskRegistryReady() {
```

**Line:** 1246 | **Kind:** fn

### `reloadTaskRegistryFromStore`

```
export function reloadTaskRegistryFromStore(): void {
```

**Line:** 1251 | **Kind:** fn

### `maybeDeliverTaskTerminalUpdate`

```
export async function maybeDeliverTaskTerminalUpdate(taskId: string): Promise<TaskRecord | null> {
```

**Line:** 1431 | **Kind:** fn

### `setTaskCleanupAfterById`

```
export function setTaskCleanupAfterById(params: {
```

**Line:** 1696 | **Kind:** fn

### `markTaskTerminalById`

```
export function markTaskTerminalById(params: {
```

**Line:** 1706 | **Kind:** fn

### `markTaskLostById`

```
export function markTaskLostById(params: {
```

**Line:** 1749 | **Kind:** fn

### `createTaskRecord`

```
export function createTaskRecord(params: {
```

**Line:** 1884 | **Kind:** fn

### `markTaskRunningByRunId`

```
export function markTaskRunningByRunId(params: {
```

**Line:** 2181 | **Kind:** fn

### `recordTaskProgressByRunId`

```
export function recordTaskProgressByRunId(params: {
```

**Line:** 2202 | **Kind:** fn

### `finalizeTaskRunByRunId`

```
export function finalizeTaskRunByRunId(params: {
```

**Line:** 2220 | **Kind:** fn

### `setTaskRunDeliveryStatusByRunId`

```
export function setTaskRunDeliveryStatusByRunId(params: {
```

**Line:** 2258 | **Kind:** fn

### `updateTaskNotifyPolicyById`

```
export function updateTaskNotifyPolicyById(params: {
```

**Line:** 2268 | **Kind:** fn

### `linkTaskToFlowById`

```
export function linkTaskToFlowById(params: { taskId: string; flowId: string }): TaskRecord | null {
```

**Line:** 2279 | **Kind:** fn

### `cancelTaskById`

```
export async function cancelTaskById(params: {
```

**Line:** 2302 | **Kind:** fn

### `assertTaskCancellationReadyById`

```
export function assertTaskCancellationReadyById(taskId: string): TaskRecord | null {
```

**Line:** 2539 | **Kind:** fn

### `listTaskRecordsUnsorted`

```
export function listTaskRecordsUnsorted(): TaskRecord[] {
```

**Line:** 2553 | **Kind:** fn

### `listTaskRecords`

```
export function listTaskRecords(): TaskRecord[] {
```

**Line:** 2558 | **Kind:** fn

### `hasActiveTaskForChildSessionKey`

```
export function hasActiveTaskForChildSessionKey(params: {
```

**Line:** 2566 | **Kind:** fn

### `getTaskById`

```
export function getTaskById(taskId: string): TaskRecord | undefined {
```

**Line:** 2595 | **Kind:** fn

### `findTaskByRunId`

```
export function findTaskByRunId(runId: string): TaskRecord | undefined {
```

**Line:** 2601 | **Kind:** fn

### `listTasksForSessionKey`

```
export function listTasksForSessionKey(sessionKey: string): TaskRecord[] {
```

**Line:** 2628 | **Kind:** fn

### `listTasksForAgentId`

```
export function listTasksForAgentId(agentId: string): TaskRecord[] {
```

**Line:** 2637 | **Kind:** fn

### `listTasksForOwnerKey`

```
export function listTasksForOwnerKey(ownerKey: string): TaskRecord[] {
```

**Line:** 2653 | **Kind:** fn

### `listFreshTasksForOwnerKey`

```
export function listFreshTasksForOwnerKey(ownerKey: string): TaskRecord[] {
```

**Line:** 2662 | **Kind:** fn

### `listTasksForFlowId`

```
export function listTasksForFlowId(flowId: string): TaskRecord[] {
```

**Line:** 2690 | **Kind:** fn

### `listTasksForRelatedSessionKey`

```
export function listTasksForRelatedSessionKey(sessionKey: string): TaskRecord[] {
```

**Line:** 2704 | **Kind:** fn

### `resolveTaskForLookupToken`

```
export function resolveTaskForLookupToken(token: string): TaskRecord | undefined {
```

**Line:** 2713 | **Kind:** fn

### `deleteTaskRecordById`

```
export function deleteTaskRecordById(taskId: string): boolean {
```

**Line:** 2723 | **Kind:** fn
