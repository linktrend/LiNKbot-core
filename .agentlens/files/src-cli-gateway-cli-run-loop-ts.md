# src/cli/gateway-cli/run-loop.ts

[← Back to Module](../modules/src-cli-gateway-cli/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1024
- **Language:** TypeScript
- **Symbols:** 37
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 30 | type | GatewayRunSignalAction | (private) | - |
| 31 | type | RestartDrainTimeoutMs | (private) | - |
| 32 | type | RestartIntentOptions | (private) | - |
| 37 | type | GatewayRunSignalRequest | (private) | - |
| 44 | type | GatewayLifecycleRuntimeModule | (private) | - |
| 46 | fn | isUpdateProcessRestartReason | (private) | `function isUpdateProcessRestartReason(reason: s...` |
| 54 | fn | loadGatewayLifecycleRuntimeModule | (private) | `const loadGatewayLifecycleRuntimeModule = () =>...` |
| 56 | fn | createRestartIterationHook | (private) | `function createRestartIterationHook(onRestart: ...` |
| 69 | fn | waitForGatewayPortReady | (private) | `async function waitForGatewayPortReady(host: st...` |
| 73 | fn | finish | (private) | `const finish = (value: boolean) => {` |
| 91 | fn | waitForHealthyGatewayChild | (private) | `async function waitForHealthyGatewayChild(` |
| 109 | fn | runGatewayLoop | pub | `export async function runGatewayLoop(params: {` |
| 156 | fn | cleanupSignals | (private) | `const cleanupSignals = () => {` |
| 161 | fn | exitProcess | (private) | `const exitProcess = (code: number) => {` |
| 165 | fn | completeForcedStop | (private) | `const completeForcedStop = (reason: string) => {` |
| 168 | fn | writeStabilityBundle | (private) | `const writeStabilityBundle = async (reason: str...` |
| 194 | fn | handleRestartAfterServerClose | (private) | `const handleRestartAfterServerClose = async () ...` |
| 389 | fn | handleStopAfterServerClose | (private) | `const handleStopAfterServerClose = async () => {` |
| 397 | fn | clearPendingStartupForceExitTimer | (private) | `const clearPendingStartupForceExitTimer = () => {` |
| 404 | fn | armPendingStartupForceExitTimer | (private) | `const armPendingStartupForceExitTimer = () => {` |
| 440 | fn | markRestartDraining | (private) | `const markRestartDraining = () => {` |
| 451 | fn | runAcceptedRequest | (private) | `const runAcceptedRequest = (acceptedRequest: Ga...` |
| 458 | fn | armForceExitTimer | (private) | `const armForceExitTimer = (forceExitMs: number)...` |
| 481 | fn | clearForceExitTimer | (private) | `const clearForceExitTimer = () => {` |
| 510 | fn | formatRestartDrainBudget | (private) | `const formatRestartDrainBudget = () =>` |
| 514 | fn | armCloseForceExitTimerForIndefiniteRestart | (private) | `const armCloseForceExitTimerForIndefiniteRestar...` |
| 519 | fn | resolveRestartCloseDrainTimeoutMs | (private) | `const resolveRestartCloseDrainTimeoutMs = () => {` |
| 552 | fn | collectActiveRestartSessionKeys | (private) | `const collectActiveRestartSessionKeys = () => {` |
| 555 | fn | collectActiveRestartSessionIds | (private) | `const collectActiveRestartSessionIds = () => {` |
| 560 | fn | markActiveMainSessionsForRestart | (private) | `const markActiveMainSessionsForRestart = async ...` |
| 585 | fn | formatTaskBlockers | (private) | `const formatTaskBlockers = () => {` |
| 594 | fn | createStillPendingDrainLogger | (private) | `const createStillPendingDrainLogger = () =>` |
| 722 | fn | flushPendingStartupRequest | (private) | `const flushPendingStartupRequest = (opts: { all...` |
| 735 | fn | request | (private) | `const request = (` |
| 812 | fn | onSigterm | (private) | `const onSigterm = () => {` |
| 830 | fn | onSigint | (private) | `const onSigint = () => {` |
| 834 | fn | onSigusr1 | (private) | `const onSigusr1 = () => {` |

## Public API

### `runGatewayLoop`

```
export async function runGatewayLoop(params: {
```

**Line:** 109 | **Kind:** fn
