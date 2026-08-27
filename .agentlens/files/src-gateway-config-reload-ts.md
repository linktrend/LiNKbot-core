# src/gateway/config-reload.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1307
- **Language:** TypeScript
- **Symbols:** 38
- **Public symbols:** 2

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 55 | fn | resolveChokidarUsePolling | (private) | `function resolveChokidarUsePolling(degradedToPo...` |
| 79 | fn | matchesSkillsInvalidationPrefix | (private) | `function matchesSkillsInvalidationPrefix(path: ...` |
| 85 | fn | firstSkillsChangedPath | (private) | `function firstSkillsChangedPath(changedPaths: s...` |
| 89 | fn | isNoopReloadPlan | (private) | `function isNoopReloadPlan(plan: GatewayReloadPl...` |
| 105 | type | GatewayConfigReloader | (private) | - |
| 111 | type | PluginInstallRecords | (private) | - |
| 113 | type | InProcessConfigCandidate | (private) | - |
| 123 | type | GatewayConfigReloadTransactionOwnership | pub | - |
| 134 | type | PreparedGatewayConfigCandidate | (private) | - |
| 142 | class | GatewayConfigReloadSupersededError | (private) | - |
| 149 | fn | isGatewayConfigReloadSupersededError | (private) | `function isGatewayConfigReloadSupersededError(e...` |
| 153 | fn | asPluginInstallConfig | (private) | `function asPluginInstallConfig(records: PluginI...` |
| 161 | fn | startGatewayConfigReloader | pub | `export function startGatewayConfigReloader(opts: {` |
| 268 | fn | resolveSettings | (private) | `const resolveSettings = (config: OpenClawConfig...` |
| 294 | fn | appendExternalAudit | (private) | `const appendExternalAudit = (` |
| 315 | fn | updateAcceptedSnapshot | (private) | `const updateAcceptedSnapshot = (rawHash: string...` |
| 393 | fn | scheduleAfter | (private) | `const scheduleAfter = (wait: number) => {` |
| 406 | fn | schedule | (private) | `const schedule = () => {` |
| 409 | fn | prepareRestart | (private) | `const prepareRestart = async (` |
| 457 | fn | applySnapshot | (private) | `const applySnapshot = async (` |
| 483 | fn | isCurrent | (private) | `const isCurrent = () => configWriteEpoch === tr...` |
| 484 | fn | assertCurrent | (private) | `const assertCurrent = () => {` |
| 489 | fn | commitPublishedRuntimeEnv | (private) | `const commitPublishedRuntimeEnv = () => {` |
| 575 | fn | commitReloadBaseline | (private) | `const commitReloadBaseline = async (` |
| 589 | fn | notifyCommitted | (private) | `const notifyCommitted = () => {` |
| 769 | fn | promoteAcceptedSnapshot | (private) | `const promoteAcceptedSnapshot = async (snapshot...` |
| 780 | fn | runAcceptedTransaction | (private) | `const runAcceptedTransaction = async (run: () =...` |
| 788 | fn | acceptCurrentRuntimeEcho | (private) | `const acceptCurrentRuntimeEcho = async (` |
| 821 | fn | promoteAcceptedInProcessWrite | (private) | `const promoteAcceptedInProcessWrite = async (pe...` |
| 835 | fn | runReload | (private) | `const runReload = async () => {` |
| 1077 | fn | startTrackedReload | (private) | `function startTrackedReload(): void {` |
| 1088 | fn | scheduleExternalRefresh | (private) | `const scheduleExternalRefresh = () => {` |
| 1145 | fn | createWatcher | (private) | `const createWatcher = (reconcileAfterReady = fa...` |
| 1158 | fn | scheduleFromWatcherEvent | (private) | `const scheduleFromWatcherEvent = (eventPath: st...` |
| 1186 | fn | handleWatcherError | (private) | `const handleWatcherError = (source: typeof watc...` |
| 1232 | fn | reconcileWatchedPaths | (private) | `const reconcileWatchedPaths = async (includedPa...` |
| 1262 | fn | observeCandidateWatchedPaths | (private) | `const observeCandidateWatchedPaths = async (inc...` |
| 1267 | fn | acceptWatchedPaths | (private) | `const acceptWatchedPaths = async (includedPaths...` |

## Public API

### `startGatewayConfigReloader`

```
export function startGatewayConfigReloader(opts: {
```

**Line:** 161 | **Kind:** fn
