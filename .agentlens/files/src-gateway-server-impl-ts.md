# src/gateway/server.impl.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2495
- **Language:** TypeScript
- **Symbols:** 55
- **Public symbols:** 5

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 157 | type | LoadGatewayModelCatalog | (private) | - |
| 158 | type | LoadGatewayModelCatalogSnapshot | (private) | - |
| 171 | fn | resetPreparedModelCatalogForTest | pub | `export async function resetPreparedModelCatalog...` |
| 183 | fn | approvalRequestTargetsSession | (private) | `function approvalRequestTargetsSession(` |
| 198 | type | GatewayStartupChannelPlugin | (private) | - |
| 215 | fn | listGatewayStartupChannelPlugins | (private) | `function listGatewayStartupChannelPlugins(): Ga...` |
| 219 | fn | resolveMediaCleanupTtlMs | (private) | `function resolveMediaCleanupTtlMs(ttlHoursRaw: ...` |
| 239 | fn | closeMcpLoopbackServerOnDemand | (private) | `async function closeMcpLoopbackServerOnDemand()...` |
| 269 | fn | createGatewayStartupTrace | (private) | `function createGatewayStartupTrace() {` |
| 273 | fn | timelineOptions | (private) | `const timelineOptions = () => ({` |
| 277 | fn | eventLoopTimelineEnabled | (private) | `const eventLoopTimelineEnabled = () =>` |
| 280 | fn | ensureEventLoopDelay | (private) | `const ensureEventLoopDelay = () => {` |
| 291 | fn | formatMetric | (private) | `const formatMetric = (key: string, value: numbe...` |
| 293 | fn | mapTimelineName | (private) | `const mapTimelineName = (name: string) => {` |
| 310 | fn | takeEventLoopSample | (private) | `const takeEventLoopSample = () => {` |
| 323 | fn | emitEventLoopTimelineSample | (private) | `const emitEventLoopTimelineSample = (` |
| 348 | fn | emit | (private) | `const emit = (` |
| 473 | fn | formatRuntimeGatewayAuthTokenWarning | (private) | `function formatRuntimeGatewayAuthTokenWarning()...` |
| 486 | fn | stopTaskRegistryMaintenanceOnDemand | (private) | `async function stopTaskRegistryMaintenanceOnDem...` |
| 491 | type | AuthRateLimitConfig | (private) | - |
| 493 | fn | createGatewayAuthRateLimiters | (private) | `function createGatewayAuthRateLimiters(rateLimi...` |
| 508 | type | GatewayCloseOptions | pub | - |
| 514 | type | GatewayServer | pub | - |
| 518 | type | GatewayServerOptions | pub | - |
| 574 | fn | startGatewayServer | pub | `export async function startGatewayServer(` |
| 686 | fn | emitSecretsStateEvent | (private) | `const emitSecretsStateEvent = (` |
| 786 | fn | getActiveTaskCount | (private) | `let getActiveTaskCount = () => 0;` |
| 850 | fn | prepareReloadCandidate | (private) | `const prepareReloadCandidate = (params: {` |
| 1018 | fn | listStartupChannelGatewayMethods | (private) | `const listStartupChannelGatewayMethods = () => {` |
| 1028 | fn | listActiveGatewayMethods | (private) | `const listActiveGatewayMethods = (nextBaseGatew...` |
| 1062 | fn | getResolvedAuth | (private) | `const getResolvedAuth = () =>` |
| 1071 | fn | resolveSharedGatewaySessionGenerationForConfig | (private) | `const resolveSharedGatewaySessionGenerationForC...` |
| 1081 | fn | resolveCurrentSharedGatewaySessionGeneration | (private) | `const resolveCurrentSharedGatewaySessionGenerat...` |
| 1086 | fn | resolveSharedGatewaySessionGenerationForRuntimeSnapshot | (private) | `const resolveSharedGatewaySessionGenerationForR...` |
| 1141 | fn | releaseStartupAccountStarts | (private) | `let releaseStartupAccountStarts = () => {};` |
| 1167 | fn | isGatewayStartupPending | (private) | `const isGatewayStartupPending = () => !startupS...` |
| 1253 | fn | updateWatchedSessionsPresence | (private) | `const updateWatchedSessionsPresence = (connId: ...` |
| 1281 | fn | rollbackPresence | (private) | `const rollbackPresence = (() => {` |
| 1404 | fn | clearPostReadyMaintenanceTimer | (private) | `const clearPostReadyMaintenanceTimer = () => {` |
| 1411 | fn | markClosePreludeStarted | (private) | `const markClosePreludeStarted = () => {` |
| 1421 | fn | stopConfigReloaderForClose | (private) | `const stopConfigReloaderForClose = () => {` |
| 1425 | fn | beginClosePrelude | (private) | `const beginClosePrelude = async () => {` |
| 1432 | fn | runClosePrelude | (private) | `const runClosePrelude = async () => {` |
| 1475 | fn | stopRegisteredPostReadySidecars | (private) | `const stopRegisteredPostReadySidecars = async (...` |
| 1482 | fn | stopRegisteredGatewayLifetimeSidecars | (private) | `const stopRegisteredGatewayLifetimeSidecars = a...` |
| 1489 | fn | createCloseHandler | (private) | `const createCloseHandler = () => async (optsVal...` |
| 1561 | fn | clearFallbackGatewayContextForServer | (private) | `let clearFallbackGatewayContextForServer = () =...` |
| 1562 | fn | closeOnStartupFailure | (private) | `const closeOnStartupFailure = async () => {` |
| 1573 | fn | broadcastVoiceWakeRoutingChanged | (private) | `const broadcastVoiceWakeRoutingChanged = (confi...` |
| 1761 | fn | listAttachedGatewayMethods | (private) | `const listAttachedGatewayMethods = () => {` |
| 1771 | fn | replaceAttachedPluginRuntime | (private) | `const replaceAttachedPluginRuntime = (loaded: {` |
| 1793 | fn | refreshAttachedGatewayDiscovery | (private) | `const refreshAttachedGatewayDiscovery = async (...` |
| 1824 | fn | listAttachedChannelConfigTargets | (private) | `const listAttachedChannelConfigTargets = () =>` |
| 1835 | fn | reloadAttachedGatewayPlugins | (private) | `const reloadAttachedGatewayPlugins = async (par...` |
| 2144 | fn | activateScheduledServicesWhenReady | (private) | `const activateScheduledServicesWhenReady = () => {` |

## Public API

### `resetPreparedModelCatalogForTest`

```
export async function resetPreparedModelCatalogForTest(): Promise<void> {
```

**Line:** 171 | **Kind:** fn

### `startGatewayServer`

```
export async function startGatewayServer(
```

**Line:** 574 | **Kind:** fn
