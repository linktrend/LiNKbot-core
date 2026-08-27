# src/infra/restart.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1166
- **Language:** TypeScript
- **Symbols:** 52
- **Public symbols:** 17

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 55 | fn | shouldPreferRestartReason | (private) | `function shouldPreferRestartReason(next?: strin...` |
| 56 | fn | isUpdateRestart | (private) | `const isUpdateRestart = (reason?: string) => re...` |
| 60 | fn | hasUnconsumedRestartSignal | (private) | `function hasUnconsumedRestartSignal(): boolean {` |
| 64 | fn | clearPendingScheduledRestart | (private) | `function clearPendingScheduledRestart(): void {` |
| 77 | fn | clearPendingRestartSignalAdmission | (private) | `function clearPendingRestartSignalAdmission(): ...` |
| 90 | fn | rollbackGatewayRestartSignalAdmission | pub | `export function rollbackGatewayRestartSignalAdm...` |
| 94 | fn | armPendingRestartTimer | (private) | `function armPendingRestartTimer(requestedDueAt:...` |
| 121 | fn | clearActiveDeferralPolls | (private) | `function clearActiveDeferralPolls(): void {` |
| 128 | fn | clearGatewayRestartTransientState | (private) | `function clearGatewayRestartTransientState(): v...` |
| 143 | fn | resetGatewayRestartStateForInProcessRestart | pub | `export function resetGatewayRestartStateForInPr...` |
| 156 | type | RestartAuditInfo | (private) | - |
| 163 | fn | summarizeChangedPaths | (private) | `function summarizeChangedPaths(paths: string[] ...` |
| 174 | fn | formatRestartAudit | (private) | `function formatRestartAudit(audit: RestartAudit...` |
| 201 | fn | setPreRestartDeferralCheck | pub | `export function setPreRestartDeferralCheck(fn: ...` |
| 211 | fn | emitGatewayRestart | (private) | `function emitGatewayRestart(reasonOverride?: st...` |
| 260 | fn | emitGatewayRestartWithSignalAdmission | (private) | `function emitGatewayRestartWithSignalAdmission(` |
| 287 | fn | requestGatewayRestartWithSignalAdmission | pub | `export function requestGatewayRestartWithSignal...` |
| 298 | fn | resetSigusr1AuthorizationIfExpired | (private) | `function resetSigusr1AuthorizationIfExpired(now...` |
| 309 | fn | setGatewaySigusr1RestartPolicy | pub | `export function setGatewaySigusr1RestartPolicy(...` |
| 313 | fn | isGatewaySigusr1RestartExternallyAllowed | pub | `export function isGatewaySigusr1RestartExternal...` |
| 317 | fn | authorizeGatewaySigusr1Restart | (private) | `function authorizeGatewaySigusr1Restart(delayMs...` |
| 326 | fn | consumeGatewaySigusr1RestartAuthorization | pub | `export function consumeGatewaySigusr1RestartAut...` |
| 338 | fn | peekGatewaySigusr1RestartReason | pub | `export function peekGatewaySigusr1RestartReason...` |
| 346 | fn | consumeGatewaySigusr1RestartIntent | pub | `export function consumeGatewaySigusr1RestartInt...` |
| 360 | fn | markGatewaySigusr1RestartHandled | pub | `export function markGatewaySigusr1RestartHandle...` |
| 372 | fn | rollBackGatewayRestartEmission | (private) | `function rollBackGatewayRestartEmission(): void {` |
| 379 | type | RestartDeferralHooks | (private) | - |
| 387 | type | RestartEmitHooks | (private) | - |
| 394 | type | RestartDeferralHandle | pub | - |
| 398 | type | GatewayRestartEmitter | pub | - |
| 403 | type | GatewayRestartEmitResult | (private) | - |
| 408 | fn | resolveGatewayRestartDeferralTimeoutMs | pub | `export function resolveGatewayRestartDeferralTi...` |
| 418 | fn | canReplacePendingRestartEmitHooks | (private) | `function canReplacePendingRestartEmitHooks(` |
| 431 | fn | updatePendingRestartEmitHooks | (private) | `function updatePendingRestartEmitHooks(` |
| 448 | fn | rejectPreparedRestartHook | (private) | `async function rejectPreparedRestartHook(hooks:...` |
| 454 | fn | rejectPreparedRestartHooks | (private) | `async function rejectPreparedRestartHooks(hooks...` |
| 464 | fn | emitPreparedGatewayRestartUnderAdmission | (private) | `async function emitPreparedGatewayRestartUnderA...` |
| 471 | fn | isCurrent | (private) | `const isCurrent = () => transientGeneration ===...` |
| 508 | fn | rejectCallerOnBail | (private) | `const rejectCallerOnBail = async () => {` |
| 589 | fn | emitPreparedGatewayRestart | (private) | `async function emitPreparedGatewayRestart(` |
| 625 | fn | rollbackFence | (private) | `const rollbackFence = () => {` |
| 690 | fn | deferGatewayRestartUntilIdle | pub | `export function deferGatewayRestartUntilIdle(op...` |
| 709 | fn | stopPoll | (private) | `const stopPoll = () => {` |
| 717 | fn | cancel | (private) | `const cancel = () => {` |
| 726 | fn | attemptEmission | (private) | `const attemptEmission = (params: {` |
| 769 | fn | inspectPending | (private) | `const inspectPending = () => {` |
| 820 | fn | formatSpawnDetail | (private) | `function formatSpawnDetail(result: {` |
| 826 | fn | clean | (private) | `const clean = (value: string | Buffer | null | ...` |
| 857 | fn | normalizeSystemdUnit | (private) | `function normalizeSystemdUnit(raw?: string, pro...` |
| 865 | fn | triggerOpenClawRestart | pub | `export function triggerOpenClawRestart(): Resta...` |
| 975 | type | ScheduledRestart | pub | - |
| 990 | fn | scheduleGatewaySigusr1Restart | pub | `export function scheduleGatewaySigusr1Restart(o...` |

## Public API

### `rollbackGatewayRestartSignalAdmission`

```
export function rollbackGatewayRestartSignalAdmission(): boolean {
```

**Line:** 90 | **Kind:** fn

### `resetGatewayRestartStateForInProcessRestart`

```
export function resetGatewayRestartStateForInProcessRestart(): void {
```

**Line:** 143 | **Kind:** fn

### `setPreRestartDeferralCheck`

```
export function setPreRestartDeferralCheck(fn: () => number): void {
```

**Line:** 201 | **Kind:** fn

### `requestGatewayRestartWithSignalAdmission`

```
export function requestGatewayRestartWithSignalAdmission(
```

**Line:** 287 | **Kind:** fn

### `setGatewaySigusr1RestartPolicy`

```
export function setGatewaySigusr1RestartPolicy(opts?: { allowExternal?: boolean }) {
```

**Line:** 309 | **Kind:** fn

### `isGatewaySigusr1RestartExternallyAllowed`

```
export function isGatewaySigusr1RestartExternallyAllowed() {
```

**Line:** 313 | **Kind:** fn

### `consumeGatewaySigusr1RestartAuthorization`

```
export function consumeGatewaySigusr1RestartAuthorization(): boolean {
```

**Line:** 326 | **Kind:** fn

### `peekGatewaySigusr1RestartReason`

```
export function peekGatewaySigusr1RestartReason(): string | undefined {
```

**Line:** 338 | **Kind:** fn

### `consumeGatewaySigusr1RestartIntent`

```
export function consumeGatewaySigusr1RestartIntent(): GatewayRestartIntent | null {
```

**Line:** 346 | **Kind:** fn

### `markGatewaySigusr1RestartHandled`

```
export function markGatewaySigusr1RestartHandled(): void {
```

**Line:** 360 | **Kind:** fn

### `resolveGatewayRestartDeferralTimeoutMs`

```
export function resolveGatewayRestartDeferralTimeoutMs(timeoutMs?: unknown): number | undefined {
```

**Line:** 408 | **Kind:** fn

### `deferGatewayRestartUntilIdle`

```
export function deferGatewayRestartUntilIdle(opts: {
```

**Line:** 690 | **Kind:** fn

### `triggerOpenClawRestart`

```
export function triggerOpenClawRestart(): RestartAttempt {
```

**Line:** 865 | **Kind:** fn

### `scheduleGatewaySigusr1Restart`

```
export function scheduleGatewaySigusr1Restart(opts?: {
```

**Line:** 990 | **Kind:** fn
