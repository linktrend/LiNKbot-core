# src/logging/diagnostic.ts

[← Back to Module](../modules/src-logging/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1388
- **Language:** TypeScript
- **Symbols:** 58
- **Public symbols:** 24

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 96 | type | EmitDiagnosticMemorySample | (private) | - |
| 97 | type | EventLoopDelayMonitor | (private) | - |
| 98 | type | EventLoopUtilization | (private) | - |
| 99 | type | CpuUsage | (private) | - |
| 101 | type | DiagnosticWorkSnapshot | (private) | - |
| 110 | type | DiagnosticLivenessSample | (private) | - |
| 122 | type | SampleDiagnosticLiveness | (private) | - |
| 127 | type | StartDiagnosticHeartbeatOptions | (private) | - |
| 140 | fn | resolveDiagnosticSessionStorePaths | (private) | `function resolveDiagnosticSessionStorePaths(con...` |
| 163 | fn | recoverStuckSession | (private) | `async function recoverStuckSession(` |
| 186 | fn | isStuckSessionRecoveryEnabled | pub | `export function isStuckSessionRecoveryEnabled(c...` |
| 195 | fn | requestStuckDiagnosticSessionRecovery | pub | `export async function requestStuckDiagnosticSes...` |
| 211 | fn | formatDiagnosticWorkLabel | (private) | `function formatDiagnosticWorkLabel(` |
| 233 | fn | pushLimitedDiagnosticLabel | (private) | `function pushLimitedDiagnosticLabel(labels: str...` |
| 239 | fn | getDiagnosticWorkSnapshot | (private) | `function getDiagnosticWorkSnapshot(now = Date.n...` |
| 268 | fn | hasOpenDiagnosticWork | (private) | `function hasOpenDiagnosticWork(snapshot: Diagno...` |
| 272 | fn | hasRecentDiagnosticActivity | (private) | `function hasRecentDiagnosticActivity(now: numbe...` |
| 277 | fn | roundDiagnosticMetric | (private) | `function roundDiagnosticMetric(value: number, d...` |
| 285 | fn | nanosecondsToMilliseconds | (private) | `function nanosecondsToMilliseconds(value: numbe...` |
| 289 | fn | formatOptionalDiagnosticMetric | (private) | `function formatOptionalDiagnosticMetric(value: ...` |
| 293 | fn | startDiagnosticLivenessSampler | (private) | `function startDiagnosticLivenessSampler(): void {` |
| 315 | fn | stopDiagnosticLivenessSampler | (private) | `function stopDiagnosticLivenessSampler(): void {` |
| 325 | fn | sampleDiagnosticLiveness | (private) | `function sampleDiagnosticLiveness(now: number):...` |
| 386 | fn | shouldEmitDiagnosticLivenessEvent | (private) | `function shouldEmitDiagnosticLivenessEvent(now:...` |
| 397 | fn | shouldEmitDiagnosticLivenessWarning | (private) | `function shouldEmitDiagnosticLivenessWarning(no...` |
| 411 | fn | emitDiagnosticLivenessWarning | (private) | `function emitDiagnosticLivenessWarning(` |
| 465 | fn | formatRecentDiagnosticPhases | (private) | `function formatRecentDiagnosticPhases(phases: D...` |
| 469 | fn | formatDiagnosticWorkLabels | (private) | `function formatDiagnosticWorkLabels(work: Diagn...` |
| 478 | fn | resolveStuckSessionWarnMs | pub | `export function resolveStuckSessionWarnMs(): nu...` |
| 482 | fn | resolveStuckSessionAbortMs | pub | `export function resolveStuckSessionAbortMs(stuc...` |
| 486 | fn | resolveStalledEmbeddedRunAbortMs | (private) | `function resolveStalledEmbeddedRunAbortMs(stuck...` |
| 493 | fn | isStalledEmbeddedRunRecoveryEligible | (private) | `function isStalledEmbeddedRunRecoveryEligible(p...` |
| 508 | fn | isBlockedToolCallRecoveryEligible | (private) | `function isBlockedToolCallRecoveryEligible(para...` |
| 527 | fn | isStalledModelCallRecoveryEligible | (private) | `function isStalledModelCallRecoveryEligible(par...` |
| 545 | fn | isActiveAbortRecoveryEligible | (private) | `function isActiveAbortRecoveryEligible(params: {` |
| 557 | fn | isIdleQueuedRecoverableSessionStall | (private) | `function isIdleQueuedRecoverableSessionStall(pa...` |
| 580 | fn | logWebhookReceived | pub | `export function logWebhookReceived(params: {` |
| 606 | fn | logWebhookProcessed | pub | `export function logWebhookProcessed(params: {` |
| 635 | fn | logWebhookError | pub | `export function logWebhookError(params: {` |
| 660 | fn | logMessageQueued | pub | `export function logMessageQueued(params: {` |
| 693 | fn | logMessageReceived | pub | `export function logMessageReceived(params: {` |
| 725 | fn | logMessageDispatchStarted | pub | `export function logMessageDispatchStarted(param...` |
| 751 | fn | logMessageDispatchCompleted | pub | `export function logMessageDispatchCompleted(par...` |
| 792 | fn | logMessageProcessed | pub | `export function logMessageProcessed(params: {` |
| 838 | fn | logSessionTurnCreated | pub | `export function logSessionTurnCreated(params: {` |
| 870 | fn | logSessionStateChange | pub | `export function logSessionStateChange(` |
| 915 | fn | updateDiagnosticSessionFile | pub | `export function updateDiagnosticSessionFile(par...` |
| 924 | fn | markDiagnosticSessionProgress | pub | `export function markDiagnosticSessionProgress(p...` |
| 936 | fn | sessionAttentionFields | (private) | `function sessionAttentionFields(params: {` |
| 964 | fn | formatSessionActivityLogFields | (private) | `function formatSessionActivityLogFields(activit...` |
| 987 | fn | logSessionAttention | pub | `export function logSessionAttention(` |
| 1114 | fn | logRunAttempt | pub | `export function logRunAttempt(params: SessionRe...` |
| 1133 | fn | logToolLoopAction | pub | `export function logToolLoopAction(` |
| 1177 | fn | logActiveRuns | pub | `export function logActiveRuns() {` |
| 1192 | fn | startDiagnosticHeartbeat | pub | `export function startDiagnosticHeartbeat(` |
| 1357 | fn | stopDiagnosticHeartbeat | pub | `export function stopDiagnosticHeartbeat() {` |
| 1369 | fn | getDiagnosticSessionStateCountForTest | pub | `export function getDiagnosticSessionStateCountF...` |
| 1373 | fn | resetDiagnosticStateForTest | pub | `export function resetDiagnosticStateForTest(): ...` |

## Public API

### `isStuckSessionRecoveryEnabled`

```
export function isStuckSessionRecoveryEnabled(config?: OpenClawConfig): boolean {
```

**Line:** 186 | **Kind:** fn

### `requestStuckDiagnosticSessionRecovery`

```
export async function requestStuckDiagnosticSessionRecovery(
```

**Line:** 195 | **Kind:** fn

### `resolveStuckSessionWarnMs`

```
export function resolveStuckSessionWarnMs(): number {
```

**Line:** 478 | **Kind:** fn

### `resolveStuckSessionAbortMs`

```
export function resolveStuckSessionAbortMs(stuckSessionWarnMs: number): number {
```

**Line:** 482 | **Kind:** fn

### `logWebhookReceived`

```
export function logWebhookReceived(params: {
```

**Line:** 580 | **Kind:** fn

### `logWebhookProcessed`

```
export function logWebhookProcessed(params: {
```

**Line:** 606 | **Kind:** fn

### `logWebhookError`

```
export function logWebhookError(params: {
```

**Line:** 635 | **Kind:** fn

### `logMessageQueued`

```
export function logMessageQueued(params: {
```

**Line:** 660 | **Kind:** fn

### `logMessageReceived`

```
export function logMessageReceived(params: {
```

**Line:** 693 | **Kind:** fn

### `logMessageDispatchStarted`

```
export function logMessageDispatchStarted(params: {
```

**Line:** 725 | **Kind:** fn

### `logMessageDispatchCompleted`

```
export function logMessageDispatchCompleted(params: {
```

**Line:** 751 | **Kind:** fn

### `logMessageProcessed`

```
export function logMessageProcessed(params: {
```

**Line:** 792 | **Kind:** fn

### `logSessionTurnCreated`

```
export function logSessionTurnCreated(params: {
```

**Line:** 838 | **Kind:** fn

### `logSessionStateChange`

```
export function logSessionStateChange(
```

**Line:** 870 | **Kind:** fn

### `updateDiagnosticSessionFile`

```
export function updateDiagnosticSessionFile(params: SessionRef) {
```

**Line:** 915 | **Kind:** fn

### `markDiagnosticSessionProgress`

```
export function markDiagnosticSessionProgress(params: SessionRef) {
```

**Line:** 924 | **Kind:** fn

### `logSessionAttention`

```
export function logSessionAttention(
```

**Line:** 987 | **Kind:** fn

### `logRunAttempt`

```
export function logRunAttempt(params: SessionRef & { runId: string; attempt: number }) {
```

**Line:** 1114 | **Kind:** fn

### `logToolLoopAction`

```
export function logToolLoopAction(
```

**Line:** 1133 | **Kind:** fn

### `logActiveRuns`

```
export function logActiveRuns() {
```

**Line:** 1177 | **Kind:** fn

### `startDiagnosticHeartbeat`

```
export function startDiagnosticHeartbeat(
```

**Line:** 1192 | **Kind:** fn

### `stopDiagnosticHeartbeat`

```
export function stopDiagnosticHeartbeat() {
```

**Line:** 1357 | **Kind:** fn

### `getDiagnosticSessionStateCountForTest`

```
export function getDiagnosticSessionStateCountForTest(): number {
```

**Line:** 1369 | **Kind:** fn

### `resetDiagnosticStateForTest`

```
export function resetDiagnosticStateForTest(): void {
```

**Line:** 1373 | **Kind:** fn
