# src/agents/subagent-spawn.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1967
- **Language:** TypeScript
- **Symbols:** 34
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 132 | fn | resolveConfiguredAgentIds | (private) | `function resolveConfiguredAgentIds(cfg: OpenCla...` |
| 136 | type | SubagentSpawnDeps | (private) | - |
| 165 | type | SpawnSubagentParams | (private) | - |
| 198 | type | SpawnSubagentContext | (private) | - |
| 222 | type | SpawnSubagentResult | (private) | - |
| 244 | fn | callSubagentGateway | (private) | `async function callSubagentGateway(` |
| 292 | fn | readGatewayRunId | (private) | `function readGatewayRunId(response: Awaited<Ret...` |
| 300 | fn | buildResolvedSubagentModelMetadata | (private) | `function buildResolvedSubagentModelMetadata(` |
| 314 | fn | resolveCollectorOutputModelError | (private) | `async function resolveCollectorOutputModelError...` |
| 348 | fn | resolveSubagentAgentGatewayTimeoutMs | (private) | `function resolveSubagentAgentGatewayTimeoutMs(r...` |
| 359 | fn | buildDirectChildSessionPatch | (private) | `function buildDirectChildSessionPatch(patch: Re...` |
| 426 | fn | loadSubagentConfig | (private) | `function loadSubagentConfig() {` |
| 430 | fn | persistInitialChildSessionRuntimeModel | (private) | `async function persistInitialChildSessionRuntim...` |
| 460 | fn | readRequesterThinkingLevel | (private) | `function readRequesterThinkingLevel(params: {` |
| 519 | fn | readRequesterFastMode | (private) | `function readRequesterFastMode(params: {` |
| 566 | type | PreparedSpawnContext | (private) | - |
| 584 | fn | prepareSubagentSessionContext | (private) | `async function prepareSubagentSessionContext(pa...` |
| 684 | fn | prepareContextEngineSubagentSpawn | (private) | `async function prepareContextEngineSubagentSpaw...` |
| 723 | fn | rollbackPreparedContextEngine | (private) | `async function rollbackPreparedContextEngine(` |
| 735 | fn | sanitizeMountPathHint | (private) | `function sanitizeMountPathHint(value?: string):...` |
| 749 | fn | hasPromptUnsafeControlCharacter | (private) | `function hasPromptUnsafeControlCharacter(value:...` |
| 759 | fn | cleanupProvisionalSession | (private) | `async function cleanupProvisionalSession(` |
| 783 | fn | waitForProvisionalSessionDeletion | (private) | `async function waitForProvisionalSessionDeletion(` |
| 801 | fn | cleanupFailedSpawnBeforeAgentStart | (private) | `async function cleanupFailedSpawnBeforeAgentSta...` |
| 830 | fn | terminateAcceptedCollectorRun | (private) | `async function terminateAcceptedCollectorRun(pa...` |
| 858 | fn | resolveSubagentContextMode | (private) | `function resolveSubagentContextMode(params: {` |
| 881 | fn | summarizeError | (private) | `function summarizeError(err: unknown): string {` |
| 891 | fn | bindThreadForSubagentSpawn | (private) | `async function bindThreadForSubagentSpawn(param...` |
| 986 | fn | hasRoutableDeliveryOrigin | (private) | `function hasRoutableDeliveryOrigin(` |
| 992 | fn | spawnSubagentDirect | pub | `export async function spawnSubagentDirect(` |
| 1135 | fn | resolveAdmission | (private) | `const resolveAdmission = () => {` |
| 1615 | fn | launchChildRun | (private) | `const launchChildRun = async () =>` |
| 1624 | fn | emitSpawnLifecycleHooks | (private) | `const emitSpawnLifecycleHooks = async (hookRunI...` |
| 1673 | type | SubagentBackendState | (private) | - |

## Public API

### `spawnSubagentDirect`

```
export async function spawnSubagentDirect(
```

**Line:** 992 | **Kind:** fn
