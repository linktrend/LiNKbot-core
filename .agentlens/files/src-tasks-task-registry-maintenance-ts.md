# src/tasks/task-registry.maintenance.ts

[← Back to Module](../modules/src-tasks/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1177
- **Language:** TypeScript
- **Symbols:** 68
- **Public symbols:** 18

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 93 | type | TaskRegistryMaintenanceRuntime | (private) | - |
| 167 | type | TaskRegistryMaintenanceSummary | pub | - |
| 174 | type | TaskRegistryMaintenanceTaskDiagnostic | pub | - |
| 194 | type | TaskRegistryMaintenanceDiagnostics | pub | - |
| 198 | type | CronTerminalRecovery | (private) | - |
| 207 | type | CronRecoveryContext | (private) | - |
| 211 | type | SessionEntryLookup | (private) | - |
| 215 | type | BackingSessionLookupContext | (private) | - |
| 220 | fn | createCronRecoveryContext | (private) | `function createCronRecoveryContext(): CronRecov...` |
| 226 | fn | createBackingSessionLookupContext | (private) | `function createBackingSessionLookupContext(): B...` |
| 233 | fn | buildSessionEntryLookup | (private) | `function buildSessionEntryLookup(entries: Sessi...` |
| 239 | fn | getSessionEntryLookup | (private) | `function getSessionEntryLookup(` |
| 259 | fn | findSessionEntryByKey | (private) | `function findSessionEntryByKey(` |
| 266 | fn | resolveSessionChatType | (private) | `function resolveSessionChatType(` |
| 284 | fn | findTaskSessionEntry | (private) | `function findTaskSessionEntry(` |
| 297 | fn | isActiveTask | (private) | `function isActiveTask(task: TaskRecord): boolean {` |
| 301 | fn | isTerminalTask | (private) | `function isTerminalTask(task: TaskRecord): bool...` |
| 305 | fn | hasLostGraceExpired | (private) | `function hasLostGraceExpired(task: TaskRecord, ...` |
| 313 | fn | isRecoverableLostCronTask | (private) | `function isRecoverableLostCronTask(task: TaskRe...` |
| 321 | fn | isCronTerminalTaskStatus | (private) | `function isCronTerminalTaskStatus(status: TaskS...` |
| 330 | fn | getCronTaskRows | (private) | `function getCronTaskRows(context: CronRecoveryC...` |
| 348 | fn | resolveDurableCronTaskRecovery | (private) | `function resolveDurableCronTaskRecovery(` |
| 384 | fn | hasActiveCliRun | (private) | `function hasActiveCliRun(task: TaskRecord): boo...` |
| 395 | fn | hasCliRunIdentity | (private) | `function hasCliRunIdentity(task: TaskRecord): b...` |
| 399 | fn | hasBackingSession | (private) | `function hasBackingSession(task: TaskRecord, co...` |
| 452 | fn | resolveTaskLostError | (private) | `function resolveTaskLostError(task: TaskRecord,...` |
| 468 | fn | shouldMarkLost | (private) | `function shouldMarkLost(` |
| 482 | fn | hasTaskLostDecisionInputChanged | (private) | `function hasTaskLostDecisionInputChanged(before...` |
| 495 | fn | hasDetachedTaskRecoveryHook | (private) | `function hasDetachedTaskRecoveryHook(): boolean {` |
| 499 | fn | shouldStampCleanupAfter | (private) | `function shouldStampCleanupAfter(task: TaskReco...` |
| 507 | fn | resolveCleanupAfter | (private) | `function resolveCleanupAfter(task: TaskRecord):...` |
| 511 | fn | taskReferenceAt | (private) | `function taskReferenceAt(task: TaskRecord): num...` |
| 515 | fn | getNormalizedTaskChildSessionKey | (private) | `function getNormalizedTaskChildSessionKey(task:...` |
| 519 | fn | getAcpSessionParentKeys | (private) | `function getAcpSessionParentKeys(acpEntry: Pick...` |
| 526 | fn | isParentOwnedAcpSessionTask | (private) | `function isParentOwnedAcpSessionTask(` |
| 540 | fn | isParentOwnedAcpSessionEntry | (private) | `function isParentOwnedAcpSessionEntry(acpEntry:...` |
| 544 | fn | hasActiveSessionBinding | (private) | `function hasActiveSessionBinding(sessionKey: st...` |
| 556 | fn | shouldCloseTerminalAcpSession | (private) | `function shouldCloseTerminalAcpSession(task: Ta...` |
| 586 | fn | shouldCloseOrphanedParentOwnedAcpSession | (private) | `function shouldCloseOrphanedParentOwnedAcpSessi...` |
| 603 | fn | cleanupTerminalAcpSession | (private) | `async function cleanupTerminalAcpSession(task: ...` |
| 647 | fn | cleanupOrphanedParentOwnedAcpSessions | (private) | `async function cleanupOrphanedParentOwnedAcpSes...` |
| 696 | fn | markTaskLost | (private) | `function markTaskLost(` |
| 719 | fn | markTaskRecovered | (private) | `function markTaskRecovered(task: TaskRecord, re...` |
| 736 | fn | projectTaskRecovered | (private) | `function projectTaskRecovered(task: TaskRecord,...` |
| 759 | fn | projectTaskLost | (private) | `function projectTaskLost(` |
| 779 | fn | reconcileTaskRecordForOperatorInspectionWithContexts | (private) | `function reconcileTaskRecordForOperatorInspecti...` |
| 795 | fn | reconcileTaskRecordForOperatorInspection | (private) | `function reconcileTaskRecordForOperatorInspection(` |
| 806 | fn | reconcileInspectableTasks | pub | `export function reconcileInspectableTasks(): Ta...` |
| 823 | fn | isActiveTaskRestartBlockerStatus | (private) | `function isActiveTaskRestartBlockerStatus(` |
| 829 | fn | isTaskRestartBlocker | (private) | `function isTaskRestartBlocker(task: TaskRecord)...` |
| 839 | fn | getInspectableActiveTaskRestartBlockers | pub | `export function getInspectableActiveTaskRestart...` |
| 864 | fn | getInspectableTaskRegistrySummary | pub | `export function getInspectableTaskRegistrySummary(` |
| 870 | fn | getInspectableTaskAuditSummary | pub | `export function getInspectableTaskAuditSummary(...` |
| 874 | fn | getInspectableTaskAuditFindings | pub | `export function getInspectableTaskAuditFindings(` |
| 880 | fn | reconcileTaskLookupToken | pub | `export function reconcileTaskLookupToken(token:...` |
| 889 | fn | previewTaskRegistryMaintenance | pub | `export function previewTaskRegistryMaintenance(...` |
| 920 | fn | explainActiveTaskRetention | (private) | `function explainActiveTaskRetention(params: {` |
| 956 | fn | getTaskRegistryMaintenanceDiagnostics | pub | `export function getTaskRegistryMaintenanceDiagn...` |
| 994 | fn | yieldToEventLoop | (private) | `function yieldToEventLoop(): Promise<void> {` |
| 1000 | fn | startScheduledSweep | (private) | `function startScheduledSweep() {` |
| 1005 | fn | clearSweepInProgress | (private) | `const clearSweepInProgress = () => {` |
| 1013 | fn | runTaskRegistryMaintenance | pub | `export async function runTaskRegistryMaintenanc...` |
| 1129 | fn | sweepTaskRegistry | pub | `export async function sweepTaskRegistry(): Prom...` |
| 1133 | fn | startTaskRegistryMaintenance | pub | `export function startTaskRegistryMaintenance() {` |
| 1147 | fn | stopTaskRegistryMaintenance | pub | `export function stopTaskRegistryMaintenance() {` |
| 1159 | fn | setTaskRegistryMaintenanceRuntimeForTests | pub | `export function setTaskRegistryMaintenanceRunti...` |
| 1165 | fn | resetTaskRegistryMaintenanceRuntimeForTests | pub | `export function resetTaskRegistryMaintenanceRun...` |
| 1170 | fn | configureTaskRegistryMaintenance | pub | `export function configureTaskRegistryMaintenanc...` |

## Public API

### `reconcileInspectableTasks`

```
export function reconcileInspectableTasks(): TaskRecord[] {
```

**Line:** 806 | **Kind:** fn

### `getInspectableActiveTaskRestartBlockers`

```
export function getInspectableActiveTaskRestartBlockers(): ActiveTaskRestartBlocker[] {
```

**Line:** 839 | **Kind:** fn

### `getInspectableTaskRegistrySummary`

```
export function getInspectableTaskRegistrySummary(
```

**Line:** 864 | **Kind:** fn

### `getInspectableTaskAuditSummary`

```
export function getInspectableTaskAuditSummary(): TaskAuditSummary {
```

**Line:** 870 | **Kind:** fn

### `getInspectableTaskAuditFindings`

```
export function getInspectableTaskAuditFindings(
```

**Line:** 874 | **Kind:** fn

### `reconcileTaskLookupToken`

```
export function reconcileTaskLookupToken(token: string): TaskRecord | undefined {
```

**Line:** 880 | **Kind:** fn

### `previewTaskRegistryMaintenance`

```
export function previewTaskRegistryMaintenance(): TaskRegistryMaintenanceSummary {
```

**Line:** 889 | **Kind:** fn

### `getTaskRegistryMaintenanceDiagnostics`

```
export function getTaskRegistryMaintenanceDiagnostics(): TaskRegistryMaintenanceDiagnostics {
```

**Line:** 956 | **Kind:** fn

### `runTaskRegistryMaintenance`

```
export async function runTaskRegistryMaintenance(): Promise<TaskRegistryMaintenanceSummary> {
```

**Line:** 1013 | **Kind:** fn

### `sweepTaskRegistry`

```
export async function sweepTaskRegistry(): Promise<TaskRegistryMaintenanceSummary> {
```

**Line:** 1129 | **Kind:** fn

### `startTaskRegistryMaintenance`

```
export function startTaskRegistryMaintenance() {
```

**Line:** 1133 | **Kind:** fn

### `stopTaskRegistryMaintenance`

```
export function stopTaskRegistryMaintenance() {
```

**Line:** 1147 | **Kind:** fn

### `setTaskRegistryMaintenanceRuntimeForTests`

```
export function setTaskRegistryMaintenanceRuntimeForTests(
```

**Line:** 1159 | **Kind:** fn

### `resetTaskRegistryMaintenanceRuntimeForTests`

```
export function resetTaskRegistryMaintenanceRuntimeForTests(): void {
```

**Line:** 1165 | **Kind:** fn

### `configureTaskRegistryMaintenance`

```
export function configureTaskRegistryMaintenance(options?: {
```

**Line:** 1170 | **Kind:** fn
