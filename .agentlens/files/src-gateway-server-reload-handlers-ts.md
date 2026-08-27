# src/gateway/server-reload-handlers.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2568
- **Language:** TypeScript
- **Symbols:** 73
- **Public symbols:** 6

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 109 | type | RuntimeSecretsPreflightParams | (private) | - |
| 114 | type | CurrentRuntimeSecretsPreparation | (private) | - |
| 119 | fn | isRuntimeSecretsPreparationCurrent | (private) | `function isRuntimeSecretsPreparationCurrent(` |
| 128 | fn | abortPendingChannelReloads | pub | `export function abortPendingChannelReloads(): v...` |
| 132 | type | GatewayHotReloadState | (private) | - |
| 140 | fn | activateSecretsRuntimeSnapshotIfCurrent | (private) | `async function activateSecretsRuntimeSnapshotIf...` |
| 164 | fn | restoreSecretsRuntimeSnapshotIfCurrent | (private) | `async function restoreSecretsRuntimeSnapshotIfC...` |
| 182 | type | GatewayReloadLog | (private) | - |
| 188 | type | GatewayGmailRestartAbortController | (private) | - |
| 193 | type | GatewayHotReloadPublication | (private) | - |
| 201 | type | GatewayRestartTransactionState | (private) | - |
| 203 | type | GatewayRestartTransactionResult | (private) | - |
| 208 | type | GatewayRestartRequestOptions | (private) | - |
| 214 | type | AcceptedRestartTarget | (private) | - |
| 220 | type | AcceptedRestartTargetOwnership | (private) | - |
| 224 | class | GatewayHotReloadCancelledError | pub | - |
| 231 | class | GatewayHotReloadRecoveryError | pub | - |
| 238 | class | GatewayReloadRequiresRecoveryOwnerError | (private) | - |
| 245 | class | GatewayHotReloadStaleSecretsError | (private) | - |
| 252 | class | GatewayConfigReloadSupersededError | (private) | - |
| 259 | type | GatewayPluginReloadResult | pub | - |
| 270 | fn | projectCanonicalSecretRefsOntoRuntime | (private) | `function projectCanonicalSecretRefsOntoRuntime(` |
| 294 | fn | restoreCanonicalSecretRefs | (private) | `function restoreCanonicalSecretRefs(` |
| 301 | fn | resetPreparedModelRuntimeStateForHotReload | (private) | `function resetPreparedModelRuntimeStateForHotRe...` |
| 305 | fn | assertIrreversibleReloadPlanHasRecoveryOwner | (private) | `function assertIrreversibleReloadPlanHasRecover...` |
| 323 | fn | disposeMcpRuntimesWithTimeout | (private) | `async function disposeMcpRuntimesWithTimeout(pa...` |
| 350 | fn | collectChannelOperationFailures | (private) | `async function collectChannelOperationFailures(...` |
| 367 | type | GatewayReloadHandlerParams | (private) | - |
| 401 | type | ManagedGatewayConfigReloaderParams | (private) | - |
| 444 | fn | createGatewayReloadHandlers | pub | `export function createGatewayReloadHandlers(par...` |
| 449 | fn | getActiveCounts | (private) | `const getActiveCounts = () => {` |
| 472 | fn | formatActiveDetails | (private) | `const formatActiveDetails = (counts: ReturnType...` |
| 494 | fn | formatTaskBlockers | (private) | `const formatTaskBlockers = () => {` |
| 503 | fn | waitForActiveWorkBeforeChannelReload | (private) | `const waitForActiveWorkBeforeChannelReload = as...` |
| 573 | fn | isTransactionCurrent | (private) | `const isTransactionCurrent = () => !restartRetr...` |
| 606 | fn | isLifecycleReloadAborted | (private) | `const isLifecycleReloadAborted = () =>` |
| 608 | fn | isPluginReloadAborted | (private) | `const isPluginReloadAborted = () =>` |
| 620 | fn | channelReloadTargets | (private) | `const channelReloadTargets = () =>` |
| 622 | fn | getChannelAutostartSuppression | (private) | `const getChannelAutostartSuppression = () => pa...` |
| 635 | fn | commitRuntime | (private) | `const commitRuntime = async () => {` |
| 639 | fn | commit | (private) | `const commit = async () => {` |
| 689 | fn | settleRecoveryRestart | (private) | `const settleRecoveryRestart = (` |
| 700 | fn | scheduleRecoveryRestart | (private) | `const scheduleRecoveryRestart = (surface: strin...` |
| 788 | fn | restartStoppedPluginChannels | (private) | `const restartStoppedPluginChannels = async (rea...` |
| 809 | fn | stopChannelsBeforePluginReplace | (private) | `const stopChannelsBeforePluginReplace = async (...` |
| 1129 | fn | restartChannel | (private) | `const restartChannel = async (name: ChannelKind...` |
| 1189 | type | RestartRequestDetails | (private) | - |
| 1204 | fn | recordAcceptedRestartTarget | (private) | `const recordAcceptedRestartTarget = (target: Ac...` |
| 1258 | fn | deferGatewayRestartDebt | (private) | `const deferGatewayRestartDebt = (` |
| 1271 | fn | preserveRestartDebt | (private) | `const preserveRestartDebt = (details: RestartRe...` |
| 1285 | fn | restoreConservativeRestartDebt | (private) | `const restoreConservativeRestartDebt = (debt: R...` |
| 1289 | fn | publishAcceptedRestartTarget | (private) | `const publishAcceptedRestartTarget = (target: A...` |
| 1294 | fn | markRestartEmissionSettled | (private) | `const markRestartEmissionSettled = () => {` |
| 1299 | fn | isCurrentRestartRetry | (private) | `const isCurrentRestartRetry = (retry: { request...` |
| 1304 | fn | supersedeRestartRequest | (private) | `const supersedeRestartRequest = () => {` |
| 1318 | fn | stopRestartRetries | (private) | `const stopRestartRetries = () => {` |
| 1333 | fn | scheduleRestartEmissionRetry | (private) | `const scheduleRestartEmissionRetry = (retry: {` |
| 1377 | fn | acceptRestartConfig | (private) | `const acceptRestartConfig = (acceptedConfig?: O...` |
| 1411 | fn | retireRejectedRestartRequest | (private) | `const retireRejectedRestartRequest = () => acce...` |
| 1413 | fn | beginGatewayRestartLifecycle | (private) | `const beginGatewayRestartLifecycle = () => {` |
| 1438 | fn | pauseGatewayRestartForConfigCandidate | (private) | `const pauseGatewayRestartForConfigCandidate = (...` |
| 1469 | fn | prepareForEmit | (private) | `const prepareForEmit = async () => {` |
| 1667 | fn | startManagedGatewayConfigReloader | pub | `export function startManagedGatewayConfigReloader(` |
| 1723 | fn | abortActiveGmailRestart | (private) | `const abortActiveGmailRestart = () => {` |
| 1781 | fn | runManagedRestart | (private) | `const runManagedRestart = async (` |
| 1789 | fn | isCurrent | (private) | `const isCurrent = () => !stopped && transaction...` |
| 1790 | fn | assertCurrent | (private) | `const assertCurrent = () => {` |
| 1959 | fn | assertCurrent | (private) | `const assertCurrent = () => {` |
| 2098 | fn | rollbackPublishedSource | (private) | `const rollbackPublishedSource = async () => {` |
| 2192 | fn | rollbackPublishedSource | (private) | `const rollbackPublishedSource = async () => {` |
| 2240 | fn | publishTerminalConfig | (private) | `const publishTerminalConfig = () => {` |
| 2342 | fn | claimGenerationOwnership | (private) | `const claimGenerationOwnership = () => {` |
| 2353 | fn | publishRuntime | (private) | `const publishRuntime = async () => {` |

## Public API

### `abortPendingChannelReloads`

```
export function abortPendingChannelReloads(): void {
```

**Line:** 128 | **Kind:** fn

### `createGatewayReloadHandlers`

```
export function createGatewayReloadHandlers(params: GatewayReloadHandlerParams) {
```

**Line:** 444 | **Kind:** fn

### `startManagedGatewayConfigReloader`

```
export function startManagedGatewayConfigReloader(
```

**Line:** 1667 | **Kind:** fn
