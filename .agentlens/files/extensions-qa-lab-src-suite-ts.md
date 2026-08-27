# extensions/qa-lab/src/suite.ts

[← Back to Module](../modules/extensions-qa-lab/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2094
- **Language:** TypeScript
- **Symbols:** 51
- **Public symbols:** 7

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 96 | type | QaCrablineRuntime | (private) | - |
| 97 | type | QaCrablineChannelDriverSmokeResult | (private) | - |
| 100 | fn | resolveQaSuiteControlUiEnabled | (private) | `function resolveQaSuiteControlUiEnabled(params: {` |
| 109 | type | QaSuiteScenarioResult | pub | - |
| 118 | type | QaSuiteEnvironment | (private) | - |
| 123 | type | QaSuiteStartLabFn | pub | - |
| 125 | fn | createQaSuiteTransportAdapter | (private) | `async function createQaSuiteTransportAdapter(pa...` |
| 172 | type | QaSuiteRunParams | pub | - |
| 207 | fn | shouldLogQaSuiteProgress | (private) | `function shouldLogQaSuiteProgress(env: NodeJS.P...` |
| 215 | fn | resolveQaSuiteTransportReadyTimeoutMs | (private) | `function resolveQaSuiteTransportReadyTimeoutMs(` |
| 237 | fn | writeQaSuiteProgress | (private) | `function writeQaSuiteProgress(enabled: boolean,...` |
| 244 | fn | formatQaSuiteRunStartProgress | (private) | `function formatQaSuiteRunStartProgress(params: {` |
| 267 | fn | waitForQaLabReady | (private) | `async function waitForQaLabReady(baseUrl: strin...` |
| 297 | fn | waitForQaLabReadyOrStopOwned | (private) | `async function waitForQaLabReadyOrStopOwned(par...` |
| 312 | fn | runQaSuiteCleanupSteps | (private) | `async function runQaSuiteCleanupSteps(steps: Re...` |
| 324 | fn | runQaFlowSuiteCleanupPlan | (private) | `async function runQaFlowSuiteCleanupPlan(params: {` |
| 358 | fn | throwQaSuiteCleanupErrors | (private) | `function throwQaSuiteCleanupErrors(params: {` |
| 376 | fn | requireQaSuiteStartLab | (private) | `function requireQaSuiteStartLab(startLab: QaSui...` |
| 385 | fn | shouldRunQaSuiteWithIsolatedScenarioWorkers | (private) | `function shouldRunQaSuiteWithIsolatedScenarioWo...` |
| 416 | type | QaSuiteResult | pub | - |
| 434 | fn | runQaScenarioWithFlakeRetry | (private) | `async function runQaScenarioWithFlakeRetry(` |
| 455 | fn | runScenarioDefinition | (private) | `async function runScenarioDefinition(` |
| 475 | fn | isRuntimeParityPass | (private) | `function isRuntimeParityPass(result: RuntimePar...` |
| 479 | fn | formatRuntimeParityCellDetails | (private) | `function formatRuntimeParityCellDetails(cell: R...` |
| 493 | fn | buildRuntimeParityScenarioResult | (private) | `function buildRuntimeParityScenarioResult(param...` |
| 529 | fn | createQaSuiteReportNotes | (private) | `function createQaSuiteReportNotes(params: {` |
| 549 | fn | buildQaIsolatedScenarioWorkerParams | (private) | `function buildQaIsolatedScenarioWorkerParams(pa...` |
| 595 | fn | remapModelRefForForcedRuntime | (private) | `function remapModelRefForForcedRuntime(params: {` |
| 610 | fn | buildQaRuntimeEnvPatch | (private) | `function buildQaRuntimeEnvPatch(params: {` |
| 636 | fn | appendNodeOption | (private) | `function appendNodeOption(raw: string | undefin...` |
| 641 | fn | shouldCaptureGatewayHeapCheckpoints | (private) | `function shouldCaptureGatewayHeapCheckpoints(en...` |
| 645 | fn | buildQaGatewayHeapCheckpointRuntimeEnvPatch | (private) | `function buildQaGatewayHeapCheckpointRuntimeEnv...` |
| 656 | fn | mergeQaRuntimeEnvPatches | (private) | `function mergeQaRuntimeEnvPatches(` |
| 669 | type | QaSuiteSummaryJsonParams | pub | - |
| 694 | type | QaSuiteGatewayRssSample | (private) | - |
| 698 | type | QaGatewayHandle | (private) | - |
| 699 | type | QaSuiteGatewayHeapSnapshot | (private) | - |
| 717 | fn | buildQaSuiteSummaryJson | pub | `export function buildQaSuiteSummaryJson(params:...` |
| 752 | fn | runQaRuntimeParitySuite | (private) | `async function runQaRuntimeParitySuite(params: {` |
| 1002 | fn | writeQaSuiteArtifacts | (private) | `async function writeQaSuiteArtifacts(params: {` |
| 1181 | fn | buildQaSuiteRuntimeMetrics | (private) | `function buildQaSuiteRuntimeMetrics(params: {` |
| 1235 | fn | sanitizeQaHeapCheckpointLabel | (private) | `function sanitizeQaHeapCheckpointLabel(label: s...` |
| 1239 | fn | listGatewayHeapSnapshotFiles | (private) | `async function listGatewayHeapSnapshotFiles(tem...` |
| 1255 | fn | waitForStableFileSize | (private) | `async function waitForStableFileSize(pathName: ...` |
| 1269 | fn | captureGatewayHeapSnapshotCheckpoint | (private) | `async function captureGatewayHeapSnapshotCheckp...` |
| 1310 | fn | runQaFlowSuite | pub | `export async function runQaFlowSuite(params?: Q...` |
| 1447 | fn | updateScenarioRun | (private) | `const updateScenarioRun = () =>` |
| 1458 | fn | writePartialArtifacts | (private) | `const writePartialArtifacts = () => {` |
| 1836 | fn | sampleGatewayProcessRss | (private) | `const sampleGatewayProcessRss = (label: string)...` |
| 1850 | fn | captureGatewayHeapCheckpoint | (private) | `const captureGatewayHeapCheckpoint = async (lab...` |
| 1884 | fn | runSelectedScenario | (private) | `const runSelectedScenario = () => runScenarioDe...` |

## Public API

### `buildQaSuiteSummaryJson`

```
export function buildQaSuiteSummaryJson(params: QaSuiteSummaryJsonParams): QaSuiteSummaryJson {
```

**Line:** 717 | **Kind:** fn

### `runQaFlowSuite`

```
export async function runQaFlowSuite(params?: QaSuiteRunParams): Promise<QaSuiteResult> {
```

**Line:** 1310 | **Kind:** fn
