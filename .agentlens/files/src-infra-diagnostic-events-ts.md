# src/infra/diagnostic-events.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1514
- **Language:** TypeScript
- **Symbols:** 141
- **Public symbols:** 102

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 14 | type | DiagnosticSessionState | pub | - |
| 16 | type | DiagnosticBaseEvent | (private) | - |
| 22 | type | DiagnosticUsageEvent | pub | - |
| 53 | type | DiagnosticFailoverEvent | pub | - |
| 67 | type | DiagnosticSecurityEventActor | pub | - |
| 76 | type | DiagnosticSecurityEventTarget | pub | - |
| 92 | type | DiagnosticSecurityEventPolicy | pub | - |
| 98 | type | DiagnosticSecurityEventControl | pub | - |
| 103 | type | DiagnosticSecurityEvent | pub | - |
| 127 | type | DiagnosticSecurityEventInput | pub | - |
| 134 | type | DiagnosticWebhookReceivedEvent | pub | - |
| 141 | type | DiagnosticWebhookProcessedEvent | pub | - |
| 149 | type | DiagnosticWebhookErrorEvent | pub | - |
| 157 | type | DiagnosticMessageQueuedEvent | pub | - |
| 166 | type | DiagnosticMessageReceivedEvent | pub | - |
| 176 | type | DiagnosticMessageDispatchStartedEvent | pub | - |
| 184 | type | DiagnosticMessageDispatchCompletedEvent | pub | - |
| 196 | type | DiagnosticMessageProcessedEvent | pub | - |
| 209 | type | DiagnosticMessageDeliveryKind | pub | - |
| 211 | type | DiagnosticMessageDeliveryBaseEvent | (private) | - |
| 217 | type | DiagnosticMessageDeliveryStartedEvent | pub | - |
| 221 | type | DiagnosticMessageDeliveryCompletedEvent | pub | - |
| 227 | type | DiagnosticMessageDeliveryErrorEvent | pub | - |
| 233 | type | DiagnosticTalkEvent | pub | - |
| 248 | type | DiagnosticSessionStateEvent | pub | - |
| 258 | type | DiagnosticSessionActiveWorkKind | pub | - |
| 260 | type | DiagnosticSessionAttentionClassification | pub | - |
| 266 | type | DiagnosticSessionAttentionBaseEvent | (private) | - |
| 283 | type | DiagnosticSessionLongRunningEvent | pub | - |
| 288 | type | DiagnosticSessionStalledEvent | pub | - |
| 293 | type | DiagnosticSessionStuckEvent | pub | - |
| 298 | type | DiagnosticSessionRecoveryStatus | pub | - |
| 305 | type | DiagnosticSessionRecoveryBaseEvent | (private) | - |
| 317 | type | DiagnosticSessionRecoveryRequestedEvent | pub | - |
| 321 | type | DiagnosticSessionRecoveryCompletedEvent | pub | - |
| 330 | type | DiagnosticSessionTurnCreatedEvent | pub | - |
| 340 | type | DiagnosticLaneEnqueueEvent | pub | - |
| 346 | type | DiagnosticLaneDequeueEvent | pub | - |
| 353 | type | DiagnosticRunAttemptEvent | pub | - |
| 361 | type | DiagnosticRunProgressEvent | pub | - |
| 376 | type | DiagnosticRunExecutionPhaseEvent | (private) | - |
| 392 | type | DiagnosticHeartbeatEvent | pub | - |
| 404 | type | DiagnosticLivenessWarningReason | pub | - |
| 406 | type | DiagnosticPhaseDetails | pub | - |
| 408 | type | DiagnosticPhaseSnapshot | pub | - |
| 420 | type | DiagnosticLivenessWarningEvent | pub | - |
| 441 | type | DiagnosticPhaseCompletedEvent | pub | - |
| 446 | type | DiagnosticToolLoopEvent | pub | - |
| 464 | type | DiagnosticToolParamsSummary | pub | - |
| 470 | type | DiagnosticToolSource | pub | - |
| 471 | type | DiagnosticToolTerminalReason | pub | - |
| 473 | type | DiagnosticToolExecutionBaseEvent | (private) | - |
| 489 | type | DiagnosticToolExecutionStartedEvent | pub | - |
| 493 | type | DiagnosticToolExecutionCompletedEvent | pub | - |
| 498 | type | DiagnosticToolExecutionErrorEvent | pub | - |
| 506 | type | DiagnosticToolExecutionBlockedEvent | pub | - |
| 512 | type | DiagnosticSkillTelemetrySource | pub | - |
| 513 | type | DiagnosticSkillActivation | pub | - |
| 515 | type | DiagnosticSkillUsedEvent | pub | - |
| 528 | type | DiagnosticExecProcessCompletedEvent | pub | - |
| 550 | type | DiagnosticExecApprovalFollowupSuppressedEvent | pub | - |
| 557 | type | DiagnosticRunBaseEvent | (private) | - |
| 567 | type | DiagnosticRunStartedEvent | pub | - |
| 571 | type | DiagnosticRunCompletedEvent | pub | - |
| 579 | type | DiagnosticHarnessRunPhase | pub | - |
| 580 | type | DiagnosticHarnessRunOutcome | pub | - |
| 582 | type | DiagnosticHarnessRunBaseEvent | (private) | - |
| 595 | type | DiagnosticHarnessRunStartedEvent | pub | - |
| 599 | type | DiagnosticHarnessRunCompletedEvent | pub | - |
| 612 | type | DiagnosticHarnessRunErrorEvent | pub | - |
| 620 | type | DiagnosticModelCallBaseEvent | (private) | - |
| 639 | type | DiagnosticModelCallStartedEvent | pub | - |
| 643 | type | DiagnosticModelCallCompletedEvent | pub | - |
| 652 | type | DiagnosticModelCallErrorEvent | pub | - |
| 664 | type | DiagnosticModelCallPromptStats | (private) | - |
| 673 | type | DiagnosticModelCallUsage | (private) | - |
| 683 | type | DiagnosticContextAssembledEvent | pub | - |
| 703 | type | DiagnosticMemoryUsage | pub | - |
| 711 | type | DiagnosticMemorySampleEvent | pub | - |
| 717 | type | DiagnosticMemoryPressureEvent | pub | - |
| 727 | type | DiagnosticPayloadLargeEvent | pub | - |
| 739 | type | DiagnosticLogRecordEvent | pub | - |
| 752 | type | DiagnosticTelemetryExporterEvent | pub | - |
| 768 | type | DiagnosticAsyncQueueDroppedEvent | pub | - |
| 779 | type | DiagnosticEventPayload | pub | - |
| 834 | type | DiagnosticNonSecurityEventPayload | (private) | - |
| 836 | type | DiagnosticEventInput | pub | - |
| 842 | type | TrustedToolExecutionEventInput | (private) | - |
| 846 | type | TrustedSkillUsedEventInput | (private) | - |
| 848 | type | DiagnosticDispatchInput | (private) | - |
| 850 | type | DiagnosticEventMetadata | pub | - |
| 856 | type | DiagnosticModelCallContent | pub | - |
| 863 | type | DiagnosticToolCallContent | pub | - |
| 868 | type | DiagnosticSkillUsagePrivateData | pub | - |
| 872 | type | DiagnosticEventPrivateData | pub | - |
| 880 | type | DiagnosticEventListener | (private) | - |
| 885 | type | TrustedDiagnosticEventListener | (private) | - |
| 891 | type | TrustedToolExecutionEvent | pub | - |
| 902 | type | TrustedToolExecutionEventListener | (private) | - |
| 904 | type | QueuedDiagnosticEvent | (private) | - |
| 911 | type | DiagnosticEventsGlobalState | (private) | - |
| 960 | fn | createDiagnosticEventsState | (private) | `function createDiagnosticEventsState(): Diagnos...` |
| 979 | fn | isDiagnosticEventsState | (private) | `function isDiagnosticEventsState(value: unknown...` |
| 998 | fn | getDiagnosticEventsState | (private) | `function getDiagnosticEventsState(): Diagnostic...` |
| 1022 | fn | isDiagnosticsEnabled | pub | `export function isDiagnosticsEnabled(config?: O...` |
| 1027 | fn | setDiagnosticsEnabledForProcess | pub | `export function setDiagnosticsEnabledForProcess...` |
| 1032 | fn | areDiagnosticsEnabledForProcess | pub | `export function areDiagnosticsEnabledForProcess...` |
| 1036 | fn | dispatchDiagnosticEvent | (private) | `function dispatchDiagnosticEvent(` |
| 1098 | fn | createDiagnosticMetadataForListener | (private) | `function createDiagnosticMetadataForListener(` |
| 1108 | fn | cloneDiagnosticEventForListener | (private) | `function cloneDiagnosticEventForListener(event:...` |
| 1112 | fn | cloneDiagnosticPrivateDataForListener | (private) | `function cloneDiagnosticPrivateDataForListener(` |
| 1121 | fn | isPriorityAsyncDiagnosticEvent | (private) | `function isPriorityAsyncDiagnosticEvent(entry: ...` |
| 1125 | fn | noteAsyncDiagnosticDrop | (private) | `function noteAsyncDiagnosticDrop(` |
| 1140 | fn | makeRoomForPriorityAsyncDiagnosticEvent | (private) | `function makeRoomForPriorityAsyncDiagnosticEvent(` |
| 1152 | fn | deepFreezeDiagnosticValue | (private) | `function deepFreezeDiagnosticValue(value: unkno...` |
| 1172 | fn | scheduleAsyncDiagnosticDrain | (private) | `function scheduleAsyncDiagnosticDrain(state: Di...` |
| 1193 | fn | dispatchAsyncDiagnosticDropSummary | (private) | `function dispatchAsyncDiagnosticDropSummary(sta...` |
| 1219 | fn | waitForDiagnosticEventsDrained | pub | `export async function waitForDiagnosticEventsDr...` |
| 1228 | fn | enrichDiagnosticEvent | (private) | `function enrichDiagnosticEvent(` |
| 1246 | fn | createInternalDiagnosticMetadata | (private) | `function createInternalDiagnosticMetadata(trust...` |
| 1250 | type | EmitDiagnosticEventOptions | (private) | - |
| 1257 | fn | emitDiagnosticEventWithTrust | (private) | `function emitDiagnosticEventWithTrust(` |
| 1300 | fn | isToolExecutionEventInput | (private) | `function isToolExecutionEventInput(` |
| 1311 | fn | dispatchTrustedToolExecutionEvent | (private) | `function dispatchTrustedToolExecutionEvent(` |
| 1339 | fn | emitDiagnosticEvent | pub | `export function emitDiagnosticEvent(event: Diag...` |
| 1344 | fn | emitDiagnosticEventWithTrustedTraceContext | pub | `export function emitDiagnosticEventWithTrustedT...` |
| 1349 | fn | emitInternalDiagnosticEvent | pub | `export function emitInternalDiagnosticEvent(eve...` |
| 1354 | fn | getInternalDiagnosticEventSequence | pub | `export function getInternalDiagnosticEventSeque...` |
| 1359 | fn | emitTrustedDiagnosticEvent | pub | `export function emitTrustedDiagnosticEvent(even...` |
| 1364 | fn | emitTrustedSkillUsedDiagnosticEvent | pub | `export function emitTrustedSkillUsedDiagnosticE...` |
| 1388 | fn | emitTrustedDiagnosticEventWithPrivateData | pub | `export function emitTrustedDiagnosticEventWithP...` |
| 1396 | fn | emitTrustedSecurityEvent | pub | `export function emitTrustedSecurityEvent(event:...` |
| 1409 | fn | emitFailoverEvent | pub | `export function emitFailoverEvent(event: Omit<D...` |
| 1417 | fn | onInternalDiagnosticEvent | pub | `export function onInternalDiagnosticEvent(liste...` |
| 1428 | fn | onTrustedInternalDiagnosticEvent | pub | `export function onTrustedInternalDiagnosticEvent(` |
| 1441 | fn | onTrustedToolExecutionEvent | pub | `export function onTrustedToolExecutionEvent(` |
| 1452 | fn | hasPendingInternalDiagnosticEvent | pub | `export function hasPendingInternalDiagnosticEvent(` |
| 1471 | fn | onDiagnosticEvent | pub | `export function onDiagnosticEvent(listener: (ev...` |
| 1481 | fn | formatDiagnosticTraceparentForPropagation | pub | `export function formatDiagnosticTraceparentForP...` |
| 1492 | fn | isInternalDiagnosticEventMetadata | pub | `export function isInternalDiagnosticEventMetada...` |
| 1497 | fn | resetDiagnosticEventsForTest | pub | `export function resetDiagnosticEventsForTest():...` |

## Public API

### `isDiagnosticsEnabled`

```
export function isDiagnosticsEnabled(config?: OpenClawConfig): boolean {
```

**Line:** 1022 | **Kind:** fn

### `setDiagnosticsEnabledForProcess`

```
export function setDiagnosticsEnabledForProcess(enabled: boolean): void {
```

**Line:** 1027 | **Kind:** fn

### `areDiagnosticsEnabledForProcess`

```
export function areDiagnosticsEnabledForProcess(): boolean {
```

**Line:** 1032 | **Kind:** fn

### `waitForDiagnosticEventsDrained`

```
export async function waitForDiagnosticEventsDrained(): Promise<void> {
```

**Line:** 1219 | **Kind:** fn

### `emitDiagnosticEvent`

```
export function emitDiagnosticEvent(event: DiagnosticEventInput) {
```

**Line:** 1339 | **Kind:** fn

### `emitDiagnosticEventWithTrustedTraceContext`

```
export function emitDiagnosticEventWithTrustedTraceContext(event: DiagnosticEventInput) {
```

**Line:** 1344 | **Kind:** fn

### `emitInternalDiagnosticEvent`

```
export function emitInternalDiagnosticEvent(event: DiagnosticEventInput) {
```

**Line:** 1349 | **Kind:** fn

### `getInternalDiagnosticEventSequence`

```
export function getInternalDiagnosticEventSequence(): number {
```

**Line:** 1354 | **Kind:** fn

### `emitTrustedDiagnosticEvent`

```
export function emitTrustedDiagnosticEvent(event: DiagnosticEventInput) {
```

**Line:** 1359 | **Kind:** fn

### `emitTrustedSkillUsedDiagnosticEvent`

```
export function emitTrustedSkillUsedDiagnosticEvent(
```

**Line:** 1364 | **Kind:** fn

### `emitTrustedDiagnosticEventWithPrivateData`

```
export function emitTrustedDiagnosticEventWithPrivateData(
```

**Line:** 1388 | **Kind:** fn

### `emitTrustedSecurityEvent`

```
export function emitTrustedSecurityEvent(event: DiagnosticSecurityEventInput) {
```

**Line:** 1396 | **Kind:** fn

### `emitFailoverEvent`

```
export function emitFailoverEvent(event: Omit<DiagnosticFailoverEvent, "seq" | "ts" | "type">) {
```

**Line:** 1409 | **Kind:** fn

### `onInternalDiagnosticEvent`

```
export function onInternalDiagnosticEvent(listener: DiagnosticEventListener): () => void {
```

**Line:** 1417 | **Kind:** fn

### `onTrustedInternalDiagnosticEvent`

```
export function onTrustedInternalDiagnosticEvent(
```

**Line:** 1428 | **Kind:** fn

### `onTrustedToolExecutionEvent`

```
export function onTrustedToolExecutionEvent(
```

**Line:** 1441 | **Kind:** fn

### `hasPendingInternalDiagnosticEvent`

```
export function hasPendingInternalDiagnosticEvent(
```

**Line:** 1452 | **Kind:** fn

### `onDiagnosticEvent`

```
export function onDiagnosticEvent(listener: (evt: DiagnosticEventPayload) => void): () => void {
```

**Line:** 1471 | **Kind:** fn

### `formatDiagnosticTraceparentForPropagation`

```
export function formatDiagnosticTraceparentForPropagation(
```

**Line:** 1481 | **Kind:** fn

### `isInternalDiagnosticEventMetadata`

```
export function isInternalDiagnosticEventMetadata(metadata: DiagnosticEventMetadata): boolean {
```

**Line:** 1492 | **Kind:** fn

### `resetDiagnosticEventsForTest`

```
export function resetDiagnosticEventsForTest(): void {
```

**Line:** 1497 | **Kind:** fn
