# src/gateway/server-startup-post-attach.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1398
- **Language:** TypeScript
- **Symbols:** 45
- **Public symbols:** 4

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 48 | type | GatewayStartupTrace | (private) | - |
| 54 | type | GatewayMemoryStartupPolicy | (private) | - |
| 75 | type | GatewayPostReadySidecarHandle | pub | - |
| 78 | fn | stopPostReadySidecarsAfterCloseStarted | pub | `export function stopPostReadySidecarsAfterClose...` |
| 91 | fn | measureStartup | (private) | `async function measureStartup<T>(` |
| 100 | fn | measureProviderAuthWarm | (private) | `async function measureProviderAuthWarm(run: () ...` |
| 118 | fn | formatProviderAuthWarmMetrics | (private) | `function formatProviderAuthWarmMetrics(metrics: {` |
| 125 | fn | shouldCheckRestartSentinel | (private) | `function shouldCheckRestartSentinel(env: NodeJS...` |
| 129 | fn | shouldSkipStartupModelPrewarm | (private) | `function shouldSkipStartupModelPrewarm(env: Nod...` |
| 134 | fn | resolveGatewayMemoryStartupPolicy | (private) | `function resolveGatewayMemoryStartupPolicy(cfg:...` |
| 153 | fn | scheduleGatewayMemoryBackend | (private) | `function scheduleGatewayMemoryBackend(params: {` |
| 161 | fn | start | (private) | `const start = () => {` |
| 177 | fn | schedulePostAttachUpdateSentinelRefresh | (private) | `function schedulePostAttachUpdateSentinelRefres...` |
| 196 | fn | scheduleProviderAuthStatePrewarm | (private) | `function scheduleProviderAuthStatePrewarm(param...` |
| 210 | fn | isStopped | (private) | `const isStopped = () => stopped;` |
| 217 | fn | loadProviderAuthWarmModule | (private) | `const loadProviderAuthWarmModule = () => import...` |
| 218 | fn | runRewarm | (private) | `const runRewarm = async (reason: string) => {` |
| 248 | fn | scheduleAuthMapRewarm | (private) | `const scheduleAuthMapRewarm = (reason: string) ...` |
| 323 | fn | scheduleAgentRuntimePluginPrewarm | (private) | `function scheduleAgentRuntimePluginPrewarm(para...` |
| 335 | fn | isStopped | (private) | `const isStopped = () => stopped;` |
| 379 | fn | schedulePostReadySidecarTask | (private) | `function schedulePostReadySidecarTask(params: {` |
| 388 | fn | isStopped | (private) | `const isStopped = () => stopped;` |
| 414 | fn | scheduleRestartSentinelWakeAfterReady | (private) | `function scheduleRestartSentinelWakeAfterReady(...` |
| 428 | type | CleanStaleLockFiles | (private) | - |
| 429 | type | MarkRestartAbortedMainSessionsFromLocks | (private) | - |
| 432 | fn | cleanupStaleSessionLocks | (private) | `async function cleanupStaleSessionLocks(params: {` |
| 450 | fn | getMarker | (private) | `const getMarker = async () => {` |
| 480 | fn | scheduleTranscriptsAutoStartSidecar | (private) | `function scheduleTranscriptsAutoStartSidecar(pa...` |
| 510 | fn | hasRestartSentinelFast | (private) | `async function hasRestartSentinelFast(env: Node...` |
| 514 | fn | refreshLatestUpdateRestartSentinelIfPresent | (private) | `async function refreshLatestUpdateRestartSentin...` |
| 523 | fn | hasGatewayStartHooks | (private) | `function hasGatewayStartHooks(pluginRegistry: R...` |
| 527 | fn | hasGatewayStartupInternalHookListeners | (private) | `async function hasGatewayStartupInternalHookLis...` |
| 532 | fn | waitForAcpRuntimeBackendReady | (private) | `async function waitForAcpRuntimeBackendReady(pa...` |
| 559 | fn | prewarmConfiguredPrimaryModel | (private) | `async function prewarmConfiguredPrimaryModel(pa...` |
| 567 | fn | publishConfiguredModelRuntimeSnapshots | (private) | `async function publishConfiguredModelRuntimeSna...` |
| 580 | fn | publishStartupModelRuntime | (private) | `async function publishStartupModelRuntime(` |
| 595 | fn | startGatewaySidecars | pub | `export async function startGatewaySidecars(para...` |
| 903 | type | GatewayPostAttachRuntimeDeps | (private) | - |
| 933 | fn | createDeferredGatewayUpdateCheck | (private) | `function createDeferredGatewayUpdateCheck(param...` |
| 948 | fn | stop | (private) | `const stop = () => {` |
| 954 | fn | start | (private) | `const start = () => {` |
| 999 | fn | startGatewayPostAttachRuntime | pub | `export async function startGatewayPostAttachRun...` |
| 1086 | fn | loadStartupPluginsIfNeeded | (private) | `const loadStartupPluginsIfNeeded = async () => {` |
| 1167 | fn | reportPluginServices | (private) | `const reportPluginServices = (pluginServices: P...` |
| 1172 | fn | waitForSidecarStartTurn | (private) | `const waitForSidecarStartTurn = () =>` |

## Public API

### `stopPostReadySidecarsAfterCloseStarted`

```
export function stopPostReadySidecarsAfterCloseStarted(params: {
```

**Line:** 78 | **Kind:** fn

### `startGatewaySidecars`

```
export async function startGatewaySidecars(params: {
```

**Line:** 595 | **Kind:** fn

### `startGatewayPostAttachRuntime`

```
export async function startGatewayPostAttachRuntime(
```

**Line:** 999 | **Kind:** fn
