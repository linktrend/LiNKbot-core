# src/agents/code-mode.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2370
- **Language:** TypeScript
- **Symbols:** 93
- **Public symbols:** 9

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 90 | type | CodeModeLanguage | (private) | - |
| 93 | type | CodeModeConfig | (private) | - |
| 108 | type | CodeModeBridgeMethod | (private) | - |
| 119 | type | PendingBridgeRequest | (private) | - |
| 125 | type | SettledBridgeRequest | (private) | - |
| 127 | type | PendingBridgeState | (private) | - |
| 133 | type | CodeModeRunState | (private) | - |
| 151 | type | CodeModeToolContext | (private) | - |
| 153 | type | CodeModeFailureCode | pub | - |
| 162 | type | CodeModeHeadlessResult | pub | - |
| 177 | type | CodeModeWorkerResult | (private) | - |
| 204 | type | CodeModeSwarmDeps | (private) | - |
| 220 | fn | normalizeCodeModeRawConfig | (private) | `function normalizeCodeModeRawConfig(value: unkn...` |
| 231 | fn | readCodeModeRawConfig | (private) | `function readCodeModeRawConfig(config?: OpenCla...` |
| 241 | fn | readBoolean | (private) | `function readBoolean(value: unknown, fallback: ...` |
| 245 | fn | readPositiveInteger | (private) | `function readPositiveInteger(value: unknown, fa...` |
| 249 | fn | readLanguages | (private) | `function readLanguages(value: unknown): CodeMod...` |
| 260 | fn | resolveCodeModeConfig | pub | `export function resolveCodeModeConfig(config?: ...` |
| 307 | fn | toToolSearchConfig | (private) | `function toToolSearchConfig(config: CodeModeCon...` |
| 317 | fn | resolveCodeModeHeadlessConfig | (private) | `function resolveCodeModeHeadlessConfig(` |
| 357 | fn | removeExpiredRuns | (private) | `function removeExpiredRuns(now = Date.now()): v...` |
| 377 | fn | disposeCodeModeRun | (private) | `function disposeCodeModeRun(runId: string): void {` |
| 388 | fn | resolveCodeModeSnapshotExpiresAt | (private) | `function resolveCodeModeSnapshotExpiresAt(now: ...` |
| 392 | fn | enforceActiveRunLimit | (private) | `function enforceActiveRunLimit(): void {` |
| 399 | fn | reserveActiveRunSlot | (private) | `function reserveActiveRunSlot(): () => void {` |
| 412 | fn | jsonByteLength | (private) | `function jsonByteLength(value: unknown): number {` |
| 416 | class | CodeModeLimitError | (private) | - |
| 429 | fn | isRuntimeInterruptedError | (private) | `function isRuntimeInterruptedError(error: unkno...` |
| 433 | fn | codeModeFailureCode | (private) | `function codeModeFailureCode(error: unknown): C...` |
| 443 | fn | codeModeFailureMessage | (private) | `function codeModeFailureMessage(error: unknown)...` |
| 447 | fn | enforceOutputLimit | (private) | `function enforceOutputLimit(output: unknown[], ...` |
| 453 | fn | enforceResultLimit | (private) | `function enforceResultLimit(params: {` |
| 464 | fn | readCode | (private) | `function readCode(args: unknown): {` |
| 494 | fn | readRunId | (private) | `function readRunId(args: unknown): string {` |
| 503 | fn | maskCodeLiteralsAndComments | (private) | `function maskCodeLiteralsAndComments(code: stri...` |
| 561 | fn | rejectsModuleAccess | (private) | `function rejectsModuleAccess(code: string): boo...` |
| 566 | fn | loadTypeScriptRuntime | (private) | `async function loadTypeScriptRuntime(): Promise...` |
| 573 | fn | prepareSource | (private) | `async function prepareSource(input: {` |
| 611 | fn | errorMessage | (private) | `function errorMessage(error: unknown): string {` |
| 618 | fn | codeModeReplayIdForToolCall | (private) | `function codeModeReplayIdForToolCall(` |
| 642 | fn | requireCodeModeSwarmEnabled | (private) | `function requireCodeModeSwarmEnabled(ctx: ToolS...` |
| 648 | fn | resolveCodeModeRequesterSessionKey | (private) | `function resolveCodeModeRequesterSessionKey(ctx...` |
| 657 | fn | resolveCodeModeSwarmGroupId | (private) | `function resolveCodeModeSwarmGroupId(ctx: ToolS...` |
| 666 | fn | replayedSpawnResult | (private) | `function replayedSpawnResult(entry: SubagentRun...` |
| 675 | fn | readOptionalStringOption | (private) | `function readOptionalStringOption(` |
| 689 | fn | runAgentSpawnBridge | (private) | `async function runAgentSpawnBridge(params: {` |
| 785 | fn | runAgentWaitBridge | (private) | `async function runAgentWaitBridge(params: {` |
| 807 | fn | runSwarmNoteBridge | (private) | `function runSwarmNoteBridge(params: {` |
| 836 | fn | runBridgeRequest | (private) | `async function runBridgeRequest(params: {` |
| 970 | fn | resolveCodeModeWorkerUrl | (private) | `function resolveCodeModeWorkerUrl(currentModule...` |
| 982 | fn | codeModeWorkerUrl | (private) | `function codeModeWorkerUrl(): URL {` |
| 986 | fn | failedCodeModeWorkerResult | (private) | `function failedCodeModeWorkerResult(` |
| 998 | fn | normalizeCodeModeTimeoutResult | (private) | `function normalizeCodeModeTimeoutResult<` |
| 1014 | fn | normalizeCodeModeWorkerResult | (private) | `function normalizeCodeModeWorkerResult(result: ...` |
| 1018 | fn | runCodeModeWorker | (private) | `async function runCodeModeWorker(` |
| 1042 | fn | finish | (private) | `const finish = (result: CodeModeWorkerResult) => {` |
| 1111 | class | CodeModeHeadlessAbortError | pub | - |
| 1118 | class | CodeModeHeadlessTimeoutError | pub | - |
| 1127 | fn | createHeadlessAbortScope | (private) | `function createHeadlessAbortScope(` |
| 1132 | fn | onAbort | (private) | `const onAbort = () => controller.abort(signal?....` |
| 1147 | fn | headlessAbortError | (private) | `function headlessAbortError(` |
| 1157 | fn | headlessFailure | (private) | `function headlessFailure(params: {` |
| 1166 | fn | remainingHeadlessMs | (private) | `function remainingHeadlessMs(deadline: number):...` |
| 1174 | fn | awaitHeadlessDeadline | (private) | `async function awaitHeadlessDeadline<T>(params: {` |
| 1205 | fn | runHeadlessWorkerLeg | (private) | `async function runHeadlessWorkerLeg(params: {` |
| 1228 | fn | normalizeHeadlessNamespaceValue | (private) | `function normalizeHeadlessNamespaceValue(` |
| 1251 | fn | normalizeHeadlessNamespace | (private) | `function normalizeHeadlessNamespace(` |
| 1257 | fn | mergeHeadlessNamespaces | (private) | `function mergeHeadlessNamespaces(` |
| 1277 | fn | headlessNamespaceFreezePrelude | (private) | `function headlessNamespaceFreezePrelude(descrip...` |
| 1281 | fn | freeze | (private) | `const freeze = (value) => {` |
| 1291 | fn | createCodeModeApiFilesForRun | (private) | `function createCodeModeApiFilesForRun(` |
| 1300 | fn | runCodeModeScriptHeadless | pub | `export async function runCodeModeScriptHeadless...` |
| 1442 | fn | snapshotState | (private) | `function snapshotState(params: {` |
| 1472 | fn | pendingBridgeRequestsReplaySafe | (private) | `function pendingBridgeRequestsReplaySafe(` |
| 1494 | fn | enforceSnapshotStateLimits | (private) | `function enforceSnapshotStateLimits(params: {` |
| 1503 | fn | enforceSnapshotPayloadLimits | (private) | `function enforceSnapshotPayloadLimits(params: {` |
| 1514 | fn | createPendingBridgeStates | (private) | `function createPendingBridgeStates(params: {` |
| 1566 | fn | storeSnapshotState | (private) | `function storeSnapshotState(params: {` |
| 1620 | fn | codeModeWaitingReason | (private) | `function codeModeWaitingReason(pending: readonl...` |
| 1626 | fn | pendingToolCalls | (private) | `function pendingToolCalls(pending: readonly Pen...` |
| 1630 | fn | telemetry | (private) | `function telemetry(runtime: ToolSearchRuntime) {` |
| 1637 | fn | renderCodeModeCatalogIndex | (private) | `function renderCodeModeCatalogIndex(lines: read...` |
| 1654 | fn | formatCodeModeCatalogIndex | (private) | `function formatCodeModeCatalogIndex(catalog: re...` |
| 1693 | fn | createCodeModeExecDescription | (private) | `function createCodeModeExecDescription(` |
| 1728 | fn | runExec | (private) | `async function runExec(params: {` |
| 1830 | fn | usableResumeBudgetMs | (private) | `function usableResumeBudgetMs(deadlineMs: numbe...` |
| 1839 | fn | waitForPending | (private) | `async function waitForPending(` |
| 1880 | fn | settleCodeModeResult | (private) | `async function settleCodeModeResult(params: {` |
| 1903 | fn | abortedResult | (private) | `const abortedResult = () => ({` |
| 2065 | fn | runWait | (private) | `async function runWait(params: {` |
| 2186 | fn | createCodeModeTools | pub | `export function createCodeModeTools(ctx: CodeMo...` |
| 2270 | fn | applyCodeModeCatalog | pub | `export function applyCodeModeCatalog(params: {` |
| 2328 | fn | addClientToolsToCodeModeCatalog | pub | `export function addClientToolsToCodeModeCatalog...` |

## Public API

### `resolveCodeModeConfig`

```
export function resolveCodeModeConfig(config?: OpenClawConfig, agentId?: string): CodeModeConfig {
```

**Line:** 260 | **Kind:** fn

### `runCodeModeScriptHeadless`

```
export async function runCodeModeScriptHeadless(params: {
```

**Line:** 1300 | **Kind:** fn

### `createCodeModeTools`

```
export function createCodeModeTools(ctx: CodeModeToolContext): AnyAgentTool[] {
```

**Line:** 2186 | **Kind:** fn

### `applyCodeModeCatalog`

```
export function applyCodeModeCatalog(params: {
```

**Line:** 2270 | **Kind:** fn

### `addClientToolsToCodeModeCatalog`

```
export function addClientToolsToCodeModeCatalog(params: {
```

**Line:** 2328 | **Kind:** fn
