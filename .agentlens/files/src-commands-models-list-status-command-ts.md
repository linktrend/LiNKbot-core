# src/commands/models/list.status-command.ts

[← Back to Module](../modules/src-commands-models/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1770
- **Language:** TypeScript
- **Symbols:** 40
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 103 | type | ProviderUsageRuntime | (private) | - |
| 104 | type | ProgressRuntime | (private) | - |
| 106 | fn | resolveEnvAgentDirOverride | (private) | `function resolveEnvAgentDirOverride(env: NodeJS...` |
| 110 | type | TerminalTableRuntime | (private) | - |
| 111 | type | ListProbeRuntime | (private) | - |
| 128 | type | StatusSyntheticAuth | (private) | - |
| 136 | type | StatusProviderRouteAuth | (private) | - |
| 166 | type | StatusProviderUseRef | (private) | - |
| 174 | type | StatusProviderUse | (private) | - |
| 181 | type | StatusRuntimeAuthStatus | (private) | - |
| 183 | type | StatusRuntimeAuthRouteBase | (private) | - |
| 190 | type | StatusRuntimeAuthRoute | (private) | - |
| 203 | type | StatusModelRouteIssue | (private) | - |
| 226 | fn | loadProviderUsageRuntime | (private) | `function loadProviderUsageRuntime(): Promise<Pr...` |
| 230 | fn | loadProgressRuntime | (private) | `function loadProgressRuntime(): Promise<Progres...` |
| 234 | fn | loadTerminalTableRuntime | (private) | `function loadTerminalTableRuntime(): Promise<Te...` |
| 238 | fn | loadListProbeRuntime | (private) | `function loadListProbeRuntime(): Promise<ListPr...` |
| 242 | fn | parseOptionalPositiveFiniteOption | (private) | `function parseOptionalPositiveFiniteOption(raw:...` |
| 253 | fn | parseOptionalPositiveIntegerOption | (private) | `function parseOptionalPositiveIntegerOption(raw...` |
| 264 | fn | isCompletePluginMetadataSnapshot | (private) | `function isCompletePluginMetadataSnapshot(value...` |
| 276 | fn | installCommandPluginMetadataSnapshot | (private) | `function installCommandPluginMetadataSnapshot(p...` |
| 304 | fn | syntheticAuthCredential | (private) | `function syntheticAuthCredential(` |
| 331 | fn | finishModelsStatusOutput | (private) | `function finishModelsStatusOutput(` |
| 346 | fn | modelsStatusCommand | pub | `export async function modelsStatusCommand(` |
| 417 | fn | pending | (private) | `const pending = (async () => {` |
| 502 | fn | resolveStatusModelRef | (private) | `const resolveStatusModelRef = (raw: string | un...` |
| 542 | fn | addProviderUse | (private) | `const addProviderUse = (` |
| 664 | fn | createStatusAuthResolver | (private) | `const createStatusAuthResolver = (` |
| 1142 | fn | probeProfileIds | (private) | `const probeProfileIds = (() => {` |
| 1239 | fn | unusableProfiles | (private) | `const unusableProfiles = (() => {` |
| 1271 | fn | checkStatus | (private) | `const checkStatus = (() => {` |
| 1272 | type | RequirementHealth | (private) | - |
| 1371 | type | ModelConfigSource | (private) | - |
| 1372 | fn | label | (private) | `const label = (value: string) => colorize(rich,...` |
| 1373 | fn | labelWithSource | (private) | `const labelWithSource = (value: string, source?...` |
| 1486 | fn | formatKey | (private) | `const formatKey = (key: string) => colorize(ric...` |
| 1487 | fn | formatKeyValue | (private) | `const formatKeyValue = (key: string, value: str...` |
| 1489 | fn | formatSeparator | (private) | `const formatSeparator = () => colorize(rich, th...` |
| 1653 | fn | formatStatus | (private) | `const formatStatus = (status: string) => {` |
| 1716 | fn | statusColor | (private) | `const statusColor = (status: string) => {` |

## Public API

### `modelsStatusCommand`

```
export async function modelsStatusCommand(
```

**Line:** 346 | **Kind:** fn
