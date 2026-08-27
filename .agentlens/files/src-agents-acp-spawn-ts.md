# src/agents/acp-spawn.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1592
- **Language:** TypeScript
- **Symbols:** 50
- **Public symbols:** 7

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 125 | type | SpawnAcpMode | (private) | - |
| 127 | type | SpawnAcpSandboxMode | pub | - |
| 129 | type | SpawnAcpStreamTarget | (private) | - |
| 131 | type | SpawnAcpParams | (private) | - |
| 150 | type | GatewayImageAttachmentInput | (private) | - |
| 159 | fn | toGatewayImageAttachments | (private) | `function toGatewayImageAttachments(` |
| 175 | type | SpawnAcpContext | pub | - |
| 213 | type | SpawnAcpErrorCode | (private) | - |
| 215 | type | SpawnAcpResultFields | (private) | - |
| 224 | type | SpawnAcpAcceptedResult | (private) | - |
| 231 | type | SpawnAcpFailedResult | (private) | - |
| 237 | type | SpawnAcpResult | pub | - |
| 239 | fn | isSpawnAcpAcceptedResult | pub | `export function isSpawnAcpAcceptedResult(result...` |
| 250 | fn | resolveAcpSpawnRuntimePolicyError | pub | `export function resolveAcpSpawnRuntimePolicyErr...` |
| 269 | type | AcpSpawnInitializedSession | (private) | - |
| 273 | type | AcpSpawnInitializedRuntime | (private) | - |
| 281 | type | AcpSpawnRequesterState | (private) | - |
| 291 | type | AcpSpawnStreamPlan | (private) | - |
| 296 | fn | isActiveTaskStatus | (private) | `function isActiveTaskStatus(status: string | un...` |
| 300 | fn | countUntrackedActiveAcpRunsForOwner | (private) | `function countUntrackedActiveAcpRunsForOwner(ow...` |
| 333 | type | AcpSpawnBootstrapDeliveryPlan | (private) | - |
| 341 | fn | resolveAcpSessionMode | (private) | `function resolveAcpSessionMode(mode: SpawnAcpMo...` |
| 345 | fn | isHeartbeatEnabledForSessionAgent | (private) | `function isHeartbeatEnabledForSessionAgent(para...` |
| 383 | fn | resolveHeartbeatConfigForAgent | (private) | `function resolveHeartbeatConfigForAgent(params: {` |
| 398 | fn | hasSessionLocalHeartbeatRelayRoute | (private) | `function hasSessionLocalHeartbeatRelayRoute(par...` |
| 437 | fn | resolveTargetAcpAgentId | (private) | `function resolveTargetAcpAgentId(params: {` |
| 481 | fn | isExplicitlyAllowedAcpAgent | (private) | `function isExplicitlyAllowedAcpAgent(cfg: OpenC...` |
| 491 | fn | resolveConfiguredAcpSubagentTargetIds | (private) | `function resolveConfiguredAcpSubagentTargetIds(...` |
| 518 | fn | summarizeError | (private) | `function summarizeError(err: unknown): string {` |
| 522 | fn | createAcpSpawnFailure | (private) | `function createAcpSpawnFailure(params: {` |
| 538 | fn | isMissingPathError | (private) | `function isMissingPathError(error: unknown): bo...` |
| 543 | fn | resolveRuntimeCwdForAcpSpawn | pub | `export async function resolveRuntimeCwdForAcpSp...` |
| 564 | fn | resolveRequesterInternalSessionKey | (private) | `function resolveRequesterInternalSessionKey(par...` |
| 579 | fn | persistAcpSpawnSessionFileBestEffort | (private) | `async function persistAcpSpawnSessionFileBestEf...` |
| 611 | fn | resolveAcpSpawnRequesterState | (private) | `function resolveAcpSpawnRequesterState(params: {` |
| 664 | fn | resolveAcpSpawnStreamPlan | (private) | `function resolveAcpSpawnStreamPlan(params: {` |
| 693 | fn | sessionEntryMatchesAcpResumeSessionId | (private) | `function sessionEntryMatchesAcpResumeSessionId(` |
| 704 | fn | sessionEntryIsOwnedByRequester | (private) | `function sessionEntryIsOwnedByRequester(params: {` |
| 716 | fn | validateAcpResumeSessionOwnership | (private) | `function validateAcpResumeSessionOwnership(para...` |
| 759 | type | AcpSpawnRuntimeOptions | (private) | - |
| 765 | fn | resolveAcpRuntimeTimeoutSeconds | (private) | `function resolveAcpRuntimeTimeoutSeconds(runTim...` |
| 772 | fn | isCursorAcpTarget | (private) | `function isCursorAcpTarget(agentId: string | un...` |
| 776 | fn | resolveAcpSpawnModelCandidates | (private) | `function resolveAcpSpawnModelCandidates(params: {` |
| 811 | fn | isAcpModelSelectionError | (private) | `function isAcpModelSelectionError(error: unknow...` |
| 824 | fn | resolveAcpSpawnRuntimeOptions | (private) | `function resolveAcpSpawnRuntimeOptions(params: {` |
| 886 | fn | initializeAcpSpawnRuntime | (private) | `async function initializeAcpSpawnRuntime(params: {` |
| 938 | fn | bindPreparedAcpThread | (private) | `async function bindPreparedAcpThread(params: {` |
| 1017 | fn | resolveAcpSpawnBootstrapDeliveryPlan | (private) | `function resolveAcpSpawnBootstrapDeliveryPlan(p...` |
| 1089 | fn | spawnAcpDirect | pub | `export async function spawnAcpDirect(` |
| 1346 | type | AcpBackendState | (private) | - |

## Public API

### `isSpawnAcpAcceptedResult`

```
export function isSpawnAcpAcceptedResult(result: SpawnAcpResult): result is SpawnAcpAcceptedResult {
```

**Line:** 239 | **Kind:** fn

### `resolveAcpSpawnRuntimePolicyError`

```
export function resolveAcpSpawnRuntimePolicyError(params: {
```

**Line:** 250 | **Kind:** fn

### `resolveRuntimeCwdForAcpSpawn`

```
export async function resolveRuntimeCwdForAcpSpawn(params: {
```

**Line:** 543 | **Kind:** fn

### `spawnAcpDirect`

```
export async function spawnAcpDirect(
```

**Line:** 1089 | **Kind:** fn
