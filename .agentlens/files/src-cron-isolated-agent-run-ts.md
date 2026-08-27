# src/cron/isolated-agent/run.ts

[← Back to Module](../modules/src-cron-isolated-agent/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1944
- **Language:** TypeScript
- **Symbols:** 51
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 168 | fn | loadSessionAccessorRuntime | (private) | `async function loadSessionAccessorRuntime() {` |
| 172 | fn | loadCronExecutorRuntime | (private) | `async function loadCronExecutorRuntime() {` |
| 176 | fn | loadCronExternalContentRuntime | (private) | `async function loadCronExternalContentRuntime() {` |
| 180 | fn | loadCronAuthProfileRuntime | (private) | `async function loadCronAuthProfileRuntime() {` |
| 184 | fn | loadCronContextRuntime | (private) | `async function loadCronContextRuntime() {` |
| 188 | fn | loadCronModelCatalogRuntime | (private) | `async function loadCronModelCatalogRuntime() {` |
| 192 | fn | loadCronDeliveryRuntime | (private) | `async function loadCronDeliveryRuntime() {` |
| 196 | fn | loadCronModelPreflightRuntime | (private) | `async function loadCronModelPreflightRuntime() {` |
| 200 | fn | loadRuntimePlugins | (private) | `async function loadRuntimePlugins() {` |
| 204 | fn | loadCodexNativeWebSearch | (private) | `async function loadCodexNativeWebSearch() {` |
| 208 | fn | loadWebToolRuntimeContext | (private) | `async function loadWebToolRuntimeContext() {` |
| 212 | fn | loadWebSearchRuntime | (private) | `async function loadWebSearchRuntime() {` |
| 216 | fn | hasConfiguredAuthProfiles | (private) | `function hasConfiguredAuthProfiles(cfg: OpenCla...` |
| 223 | fn | isCronNestedLaneTaskTimeoutError | (private) | `function isCronNestedLaneTaskTimeoutError(err: ...` |
| 227 | fn | retireRolledCronSessionMcpRuntime | (private) | `async function retireRolledCronSessionMcpRuntim...` |
| 250 | type | CronExecutionRuntime | (private) | - |
| 251 | type | CronExecutionResult | (private) | - |
| 252 | type | CronModelCatalogRuntime | (private) | - |
| 253 | type | CronDeliveryRuntime | (private) | - |
| 254 | type | ResolvedCronDeliveryTarget | (private) | - |
| 256 | fn | normalizeCronTraceTarget | (private) | `function normalizeCronTraceTarget(` |
| 271 | fn | normalizeMessagingToolTarget | (private) | `function normalizeMessagingToolTarget(` |
| 292 | fn | buildResolvedCronTraceTarget | (private) | `function buildResolvedCronTraceTarget(` |
| 320 | fn | buildCronDeliveryTrace | (private) | `function buildCronDeliveryTrace(params: {` |
| 354 | fn | canPromptForMessageTool | (private) | `function canPromptForMessageTool(params: {` |
| 371 | fn | createCronToolsAllowPreflightDiagnostics | (private) | `async function createCronToolsAllowPreflightDia...` |
| 431 | fn | resolveCronDeliveryContext | (private) | `async function resolveCronDeliveryContext(param...` |
| 493 | fn | appendCronDeliveryInstruction | (private) | `function appendCronDeliveryInstruction(params: {` |
| 519 | fn | appendCronUnattendedRunPreamble | (private) | `function appendCronUnattendedRunPreamble(comman...` |
| 526 | fn | resolvePositiveContextTokens | (private) | `function resolvePositiveContextTokens(value: un...` |
| 530 | fn | loadCliRunnerRuntime | (private) | `async function loadCliRunnerRuntime() {` |
| 534 | fn | loadUsageFormatRuntime | (private) | `async function loadUsageFormatRuntime() {` |
| 538 | type | RunCronAgentTurnParams | (private) | - |
| 553 | fn | resolveCronAgentTurnMessage | (private) | `function resolveCronAgentTurnMessage(input: Run...` |
| 560 | type | WithRunSession | (private) | - |
| 564 | type | PreparedCronRunContext | (private) | - |
| 607 | type | CronPreparationResult | (private) | - |
| 611 | fn | prepareCronRunContext | (private) | `async function prepareCronRunContext(params: {` |
| 642 | fn | loadCatalog | (private) | `const loadCatalog = async () => {` |
| 725 | fn | currentRunSessionId | (private) | `const currentRunSessionId = () => cronSession.s...` |
| 737 | fn | persistCronSessionRow | (private) | `const persistCronSessionRow = async ({` |
| 1173 | fn | finalizeCronRun | (private) | `async function finalizeCronRun(params: {` |
| 1411 | fn | resolveRunOutcome | (private) | `const resolveRunOutcome = (result?: {` |
| 1442 | fn | failPendingPresentationWarningUnlessDelivered | (private) | `const failPendingPresentationWarningUnlessDeliv...` |
| 1656 | fn | disposeCronRunContext | (private) | `async function disposeCronRunContext(params: {` |
| 1678 | fn | runCronIsolatedAgentTurn | pub | `export async function runCronIsolatedAgentTurn(...` |
| 1698 | fn | isAborted | (private) | `const isAborted = () => abortSignal?.aborted ??...` |
| 1699 | fn | abortReason | (private) | `const abortReason = () =>` |
| 1716 | fn | notifyExecutionStarted | (private) | `const notifyExecutionStarted = (info?: { lifecy...` |
| 1731 | fn | notifyExecutionPhase | (private) | `const notifyExecutionPhase = (` |
| 1747 | fn | messageLifecycle | (private) | `const messageLifecycle = (() => {` |

## Public API

### `runCronIsolatedAgentTurn`

```
export async function runCronIsolatedAgentTurn(params: {
```

**Line:** 1678 | **Kind:** fn
