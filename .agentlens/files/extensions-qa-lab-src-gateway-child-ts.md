# extensions/qa-lab/src/gateway-child.ts

[← Back to Module](../modules/extensions-qa-lab/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1760
- **Language:** TypeScript
- **Symbols:** 65
- **Public symbols:** 7

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 95 | type | QaGatewayChildStateMutationContext | pub | - |
| 102 | type | QaGatewayChildDirectCommand | (private) | - |
| 112 | type | QaGatewayChildVerifiedCommand | (private) | - |
| 116 | type | QaGatewayChildCommand | pub | - |
| 117 | type | QaGatewayChildListeningContext | pub | - |
| 126 | fn | scrubQaGatewayChildSecretEnv | (private) | `function scrubQaGatewayChildSecretEnv(env: Node...` |
| 133 | fn | createQaGatewayEmptyTransport | (private) | `function createQaGatewayEmptyTransport() {` |
| 140 | fn | resolveQaGatewayChildCommand | (private) | `function resolveQaGatewayChildCommand(repoRoot:...` |
| 165 | fn | runQaGatewayCliCommand | (private) | `async function runQaGatewayCliCommand(params: {` |
| 180 | type | QaChildFailure | (private) | - |
| 185 | fn | monitorQaChildFailure | (private) | `function monitorQaChildFailure(child: ChildProc...` |
| 187 | fn | report | (private) | `const report = (source: QaChildFailure["source"...` |
| 199 | fn | readQaGatewayCliCommand | (private) | `async function readQaGatewayCliCommand(child: C...` |
| 234 | fn | getFreePort | (private) | `async function getFreePort() {` |
| 249 | fn | closeWriteStream | (private) | `async function closeWriteStream(stream: WriteSt...` |
| 255 | fn | writeSanitizedQaGatewayDebugLog | (private) | `async function writeSanitizedQaGatewayDebugLog(...` |
| 265 | fn | assertQaArtifactDirWithinRepo | (private) | `async function assertQaArtifactDirWithinRepo(re...` |
| 269 | fn | clearQaGatewayArtifactDir | (private) | `async function clearQaGatewayArtifactDir(dir: s...` |
| 275 | fn | cleanupQaGatewayTempRoots | (private) | `async function cleanupQaGatewayTempRoots(params: {` |
| 285 | fn | preserveQaGatewayDebugArtifacts | (private) | `async function preserveQaGatewayDebugArtifacts(...` |
| 326 | fn | isRetryableGatewayStartupError | (private) | `function isRetryableGatewayStartupError(details...` |
| 335 | fn | appendQaGatewayTempRoot | (private) | `function appendQaGatewayTempRoot(details: strin...` |
| 341 | fn | throwQaGatewayStartupError | (private) | `function throwQaGatewayStartupError(params: {` |
| 360 | fn | resolveQaGatewayChildProviderMode | pub | `export function resolveQaGatewayChildProviderMo...` |
| 364 | fn | buildQaRuntimeEnv | pub | `export function buildQaRuntimeEnv(params: {` |
| 433 | fn | buildQaForcedRuntimeEnvPatch | (private) | `function buildQaForcedRuntimeEnvPatch(params: {` |
| 458 | fn | isRetryableGatewayCallError | (private) | `function isRetryableGatewayCallError(details: s...` |
| 469 | fn | createQaGatewayChildLogCollector | (private) | `function createQaGatewayChildLogCollector() {` |
| 481 | fn | formatQaGatewayChildFailure | (private) | `function formatQaGatewayChildFailure(failure: Q...` |
| 487 | fn | throwQaGatewayChildFailure | (private) | `function throwQaGatewayChildFailure(` |
| 502 | fn | monitorQaGatewayChildFailure | (private) | `function monitorQaGatewayChildFailure(child: Ch...` |
| 522 | fn | formatQaGatewayProcessBoundaryStartupFailure | (private) | `function formatQaGatewayProcessBoundaryStartupF...` |
| 530 | fn | fetchLocalGatewayHealth | (private) | `async function fetchLocalGatewayHealth(params: {` |
| 553 | fn | fetchLocalGatewayListening | (private) | `async function fetchLocalGatewayListening(baseU...` |
| 570 | fn | waitForQaGatewayRestartBoundary | (private) | `async function waitForQaGatewayRestartBoundary(...` |
| 628 | fn | hasChildExited | (private) | `function hasChildExited(child: ChildProcess) {` |
| 632 | fn | isProcessAlreadyExitedError | (private) | `function isProcessAlreadyExitedError(error: unk...` |
| 636 | fn | parseLinuxProcessStat | (private) | `function parseLinuxProcessStat(raw: string) {` |
| 653 | fn | classifyLinuxProcessGroupStats | (private) | `function classifyLinuxProcessGroupStats(process...` |
| 666 | fn | inspectLinuxProcessGroupLiveness | (private) | `function inspectLinuxProcessGroupLiveness(proce...` |
| 690 | fn | isQaGatewayChildProcessTreeAlive | (private) | `function isQaGatewayChildProcessTreeAlive(child...` |
| 713 | type | QaGatewayTaskkillRunner | (private) | - |
| 715 | fn | signalQaGatewayWindowsProcessTree | (private) | `function signalQaGatewayWindowsProcessTree(` |
| 744 | fn | signalQaGatewayChildProcessTree | (private) | `function signalQaGatewayChildProcessTree(` |
| 770 | fn | waitForQaGatewayChildExit | (private) | `async function waitForQaGatewayChildExit(child:...` |
| 781 | fn | resolveQaGatewayChildStopTimeouts | (private) | `function resolveQaGatewayChildStopTimeouts(opts...` |
| 791 | fn | stopQaGatewayChildProcessTree | (private) | `async function stopQaGatewayChildProcessTree(` |
| 810 | type | QaGatewayProcessBoundaryController | (private) | - |
| 814 | fn | stopQaGatewayChildWithBoundary | (private) | `async function stopQaGatewayChildWithBoundary(p...` |
| 841 | fn | isQaModelProviderConfig | (private) | `function isQaModelProviderConfig(value: unknown...` |
| 845 | fn | normalizeQaLiveProviderConfig | (private) | `function normalizeQaLiveProviderConfig(value: u...` |
| 858 | fn | readQaLiveProviderConfigOverrides | (private) | `async function readQaLiveProviderConfigOverride...` |
| 899 | fn | waitForGatewayReady | (private) | `async function waitForGatewayReady(params: {` |
| 935 | fn | waitForGatewayListening | (private) | `async function waitForGatewayListening(params: {` |
| 969 | fn | isRetryableRpcStartupError | (private) | `function isRetryableRpcStartupError(error: unkn...` |
| 982 | fn | resolveQaControlUiRoot | pub | `export function resolveQaControlUiRoot(params: ...` |
| 991 | fn | startQaGatewayChild | pub | `export async function startQaGatewayChild(param...` |
| 1070 | fn | buildGatewayConfig | (private) | `const buildGatewayConfig = (gatewayPort: number...` |
| 1096 | fn | buildStagedGatewayConfig | (private) | `const buildStagedGatewayConfig = async (gateway...` |
| 1126 | fn | logs | (private) | `const logs = () => redactQaGatewayDebugText(out...` |
| 1147 | fn | buildGatewayArgs | (private) | `const buildGatewayArgs = () => [` |
| 1165 | fn | spawnGatewayProcess | (private) | `const spawnGatewayProcess = async (runtimeEnv: ...` |
| 1450 | fn | throwActiveChildFailure | (private) | `const throwActiveChildFailure = () => throwQaGa...` |
| 1452 | fn | spawnReplacementGatewayChild | (private) | `const spawnReplacementGatewayChild = async () => {` |
| 1534 | fn | signalActiveProcess | (private) | `const signalActiveProcess = async (signal: Node...` |

## Public API

### `resolveQaGatewayChildProviderMode`

```
export function resolveQaGatewayChildProviderMode(providerMode?: QaProviderMode): QaProviderMode {
```

**Line:** 360 | **Kind:** fn

### `buildQaRuntimeEnv`

```
export function buildQaRuntimeEnv(params: {
```

**Line:** 364 | **Kind:** fn

### `resolveQaControlUiRoot`

```
export function resolveQaControlUiRoot(params: { repoRoot: string; controlUiEnabled?: boolean }) {
```

**Line:** 982 | **Kind:** fn

### `startQaGatewayChild`

```
export async function startQaGatewayChild(params: {
```

**Line:** 991 | **Kind:** fn
