# extensions/qa-lab/src/cli.runtime.ts

[← Back to Module](../modules/extensions-qa-lab/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1800
- **Language:** TypeScript
- **Symbols:** 61
- **Public symbols:** 22

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 112 | type | InterruptibleServer | (private) | - |
| 116 | type | QaLabSelfCheckCommandOptions | pub | - |
| 120 | type | QaScenarioProviderCommandOptions | (private) | - |
| 127 | type | QaScenarioRunCommandOptions | (private) | - |
| 135 | type | QaProfileCommandOptions | pub | - |
| 142 | type | QaSuiteCommandOptions | pub | - |
| 165 | fn | normalizeQaSuiteChannelDriver | (private) | `function normalizeQaSuiteChannelDriver(` |
| 179 | fn | resolveQaManualLaneModels | (private) | `function resolveQaManualLaneModels(opts: {` |
| 197 | fn | parseQaThinkingLevel | (private) | `function parseQaThinkingLevel(` |
| 213 | fn | parseQaModelThinkingOverrides | (private) | `function parseQaModelThinkingOverrides(entries:...` |
| 230 | fn | parseQaBooleanModelOption | (private) | `function parseQaBooleanModelOption(label: strin...` |
| 247 | fn | parseQaPositiveIntegerOption | (private) | `function parseQaPositiveIntegerOption(label: st...` |
| 257 | fn | normalizeQaOptionalModelRef | (private) | `function normalizeQaOptionalModelRef(input: str...` |
| 262 | fn | normalizeQaRuntimeId | (private) | `function normalizeQaRuntimeId(value: string): R...` |
| 272 | fn | parseQaRuntimePair | (private) | `function parseQaRuntimePair(value: string | und...` |
| 294 | fn | parseQaRuntimeParityTierFilters | (private) | `function parseQaRuntimeParityTierFilters(input:...` |
| 314 | fn | resolveQaRuntimeParityTierScenarioIds | (private) | `function resolveQaRuntimeParityTierScenarioIds(...` |
| 384 | fn | rejectNonFlowScenarioIds | (private) | `function rejectNonFlowScenarioIds(params: {` |
| 408 | fn | isQaSuiteInfraRetryableError | (private) | `function isQaSuiteInfraRetryableError(error: un...` |
| 415 | fn | hasQaSuiteRetryableNetworkCode | (private) | `function hasQaSuiteRetryableNetworkCode(error: ...` |
| 433 | fn | runQaSuiteWithInfraRetry | (private) | `async function runQaSuiteWithInfraRetry<Result>(` |
| 453 | fn | runQaParityPreflight | (private) | `async function runQaParityPreflight(params: {` |
| 496 | fn | parseQaCliBackendAuthMode | (private) | `function parseQaCliBackendAuthMode(value: strin...` |
| 507 | fn | parseQaCredentialListStatus | (private) | `function parseQaCredentialListStatus(value: str...` |
| 518 | fn | normalizeQaCredentialAdminError | (private) | `function normalizeQaCredentialAdminError(error:...` |
| 531 | fn | writeQaCredentialCommandErrorJson | (private) | `function writeQaCredentialCommandErrorJson(acti...` |
| 547 | fn | parseQaModelSpecs | (private) | `function parseQaModelSpecs(label: string, entri...` |
| 608 | fn | runInterruptibleServer | (private) | `async function runInterruptibleServer(label: st...` |
| 612 | fn | shutdown | (private) | `const shutdown = async () => {` |
| 619 | fn | onSignal | (private) | `const onSignal = () => {` |
| 628 | fn | resolveQaCredentialPayloadFileMaxBytes | (private) | `function resolveQaCredentialPayloadFileMaxBytes...` |
| 640 | fn | readQaCredentialPayloadFile | (private) | `async function readQaCredentialPayloadFile(file...` |
| 666 | fn | formatQaCredentialLeaseState | (private) | `function formatQaCredentialLeaseState(credentia...` |
| 673 | fn | printQaCredentialListTable | (private) | `function printQaCredentialListTable(credentials...` |
| 704 | fn | printQaCredentialDoctorTable | (private) | `function printQaCredentialDoctorTable(` |
| 716 | fn | runQaLabSelfCheckCommand | pub | `export async function runQaLabSelfCheckCommand(...` |
| 733 | fn | runQaProfileCommand | pub | `export async function runQaProfileCommand(opts:...` |
| 858 | fn | selectQaScenarioDefinitionsForChannelResolution | (private) | `function selectQaScenarioDefinitionsForChannelR...` |
| 886 | fn | normalizeQaRunProfile | (private) | `function normalizeQaRunProfile(value: string, p...` |
| 897 | fn | defaultQaRunProfileProviderMode | (private) | `function defaultQaRunProfileProviderMode(profil...` |
| 901 | fn | qaScorecardCategoryMatchesRunProfile | (private) | `function qaScorecardCategoryMatchesRunProfile(` |
| 920 | fn | formatQaRunProfileNoMatchMessage | (private) | `function formatQaRunProfileNoMatchMessage(` |
| 926 | fn | formatQaRunProfileFilterList | (private) | `function formatQaRunProfileFilterList(` |
| 937 | fn | withTemporaryQaProfileEnv | (private) | `async function withTemporaryQaProfileEnv<T>(pro...` |
| 951 | fn | runQaSuiteCommand | pub | `export async function runQaSuiteCommand(opts: Q...` |
| 1190 | fn | runQaParityReportCommand | pub | `export async function runQaParityReportCommand(...` |
| 1287 | fn | runQaConfidenceReportCommand | pub | `export async function runQaConfidenceReportComm...` |
| 1322 | fn | runQaConfidenceSelfTestCommand | pub | `export async function runQaConfidenceSelfTestCo...` |
| 1341 | fn | runQaCoverageReportCommand | pub | `export async function runQaCoverageReportComman...` |
| 1400 | fn | runQaJsonlReplayCommand | pub | `export async function runQaJsonlReplayCommand(o...` |
| 1444 | fn | runQaCharacterEvalCommand | pub | `export async function runQaCharacterEvalCommand...` |
| 1482 | fn | runQaManualLaneCommand | pub | `export async function runQaManualLaneCommand(op...` |
| 1517 | fn | runQaCredentialsAddCommand | pub | `export async function runQaCredentialsAddComman...` |
| 1561 | fn | runQaCredentialsRemoveCommand | pub | `export async function runQaCredentialsRemoveCom...` |
| 1605 | fn | runQaCredentialsListCommand | pub | `export async function runQaCredentialsListComma...` |
| 1659 | fn | runQaCredentialsDoctorCommand | pub | `export async function runQaCredentialsDoctorCom...` |
| 1680 | fn | runQaLabUiCommand | pub | `export async function runQaLabUiCommand(opts: {` |
| 1711 | fn | runQaDockerScaffoldCommand | pub | `export async function runQaDockerScaffoldComman...` |
| 1739 | fn | runQaDockerBuildImageCommand | pub | `export async function runQaDockerBuildImageComm...` |
| 1748 | fn | runQaDockerUpCommand | pub | `export async function runQaDockerUpCommand(opts: {` |
| 1777 | fn | runQaProviderServerCommand | pub | `export async function runQaProviderServerCommand(` |

## Public API

### `runQaLabSelfCheckCommand`

```
export async function runQaLabSelfCheckCommand(opts: QaLabSelfCheckCommandOptions) {
```

**Line:** 716 | **Kind:** fn

### `runQaProfileCommand`

```
export async function runQaProfileCommand(opts: QaProfileCommandOptions) {
```

**Line:** 733 | **Kind:** fn

### `runQaSuiteCommand`

```
export async function runQaSuiteCommand(opts: QaSuiteCommandOptions) {
```

**Line:** 951 | **Kind:** fn

### `runQaParityReportCommand`

```
export async function runQaParityReportCommand(opts: {
```

**Line:** 1190 | **Kind:** fn

### `runQaConfidenceReportCommand`

```
export async function runQaConfidenceReportCommand(opts: {
```

**Line:** 1287 | **Kind:** fn

### `runQaConfidenceSelfTestCommand`

```
export async function runQaConfidenceSelfTestCommand(opts: {
```

**Line:** 1322 | **Kind:** fn

### `runQaCoverageReportCommand`

```
export async function runQaCoverageReportCommand(opts: {
```

**Line:** 1341 | **Kind:** fn

### `runQaJsonlReplayCommand`

```
export async function runQaJsonlReplayCommand(opts: {
```

**Line:** 1400 | **Kind:** fn

### `runQaCharacterEvalCommand`

```
export async function runQaCharacterEvalCommand(opts: {
```

**Line:** 1444 | **Kind:** fn

### `runQaManualLaneCommand`

```
export async function runQaManualLaneCommand(opts: {
```

**Line:** 1482 | **Kind:** fn

### `runQaCredentialsAddCommand`

```
export async function runQaCredentialsAddCommand(opts: {
```

**Line:** 1517 | **Kind:** fn

### `runQaCredentialsRemoveCommand`

```
export async function runQaCredentialsRemoveCommand(opts: {
```

**Line:** 1561 | **Kind:** fn

### `runQaCredentialsListCommand`

```
export async function runQaCredentialsListCommand(opts: {
```

**Line:** 1605 | **Kind:** fn

### `runQaCredentialsDoctorCommand`

```
export async function runQaCredentialsDoctorCommand(opts: {
```

**Line:** 1659 | **Kind:** fn

### `runQaLabUiCommand`

```
export async function runQaLabUiCommand(opts: {
```

**Line:** 1680 | **Kind:** fn

### `runQaDockerScaffoldCommand`

```
export async function runQaDockerScaffoldCommand(opts: {
```

**Line:** 1711 | **Kind:** fn

### `runQaDockerBuildImageCommand`

```
export async function runQaDockerBuildImageCommand(opts: { repoRoot?: string; image?: string }) {
```

**Line:** 1739 | **Kind:** fn

### `runQaDockerUpCommand`

```
export async function runQaDockerUpCommand(opts: {
```

**Line:** 1748 | **Kind:** fn

### `runQaProviderServerCommand`

```
export async function runQaProviderServerCommand(
```

**Line:** 1777 | **Kind:** fn
