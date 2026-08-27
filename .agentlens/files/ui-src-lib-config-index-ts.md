# ui/src/lib/config/index.ts

[← Back to Module](../modules/ui-src-lib-config/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1794
- **Language:** TypeScript
- **Symbols:** 72
- **Public symbols:** 6

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 17 | type | ConfigAutoSaveStatus | pub | - |
| 23 | fn | readAckHash | (private) | `function readAckHash(ack: unknown): string | nu...` |
| 35 | fn | isConfigBaseHashConflictError | (private) | `function isConfigBaseHashConflictError(err: unk...` |
| 40 | type | ConfigState | (private) | - |
| 77 | type | RuntimeConfigGatewaySnapshot | (private) | - |
| 83 | type | RuntimeConfigGateway | (private) | - |
| 88 | type | RuntimeConfigCapability | pub | - |
| 115 | type | LoadConfigOptions | (private) | - |
| 119 | type | ConfigPatchOptions | (private) | - |
| 126 | type | ConfigGatewayClient | (private) | - |
| 130 | type | ConfigConnectionState | (private) | - |
| 135 | type | ConfigGatewayState | (private) | - |
| 147 | fn | createInitialConfigState | (private) | `function createInitialConfigState(snapshot?: Pa...` |
| 180 | fn | nextRequestVersion | (private) | `function nextRequestVersion(state: ConfigState,...` |
| 187 | fn | currentConfigConnectionEpoch | (private) | `function currentConfigConnectionEpoch(state: ob...` |
| 191 | fn | invalidateConfigConnection | (private) | `function invalidateConfigConnection(state: obje...` |
| 195 | fn | isCurrentConfigConnection | (private) | `function isCurrentConfigConnection(` |
| 207 | fn | isCurrentRequest | (private) | `function isCurrentRequest(` |
| 221 | fn | loadConfig | (private) | `async function loadConfig(` |
| 254 | fn | loadConfigSchema | (private) | `async function loadConfigSchema(state: ConfigSt...` |
| 282 | fn | applyConfigSchema | (private) | `function applyConfigSchema(state: ConfigState, ...` |
| 288 | fn | asConfigRecord | (private) | `function asConfigRecord(value: unknown): Record...` |
| 295 | fn | resolveEditableSnapshotConfig | pub | `export function resolveEditableSnapshotConfig(` |
| 305 | fn | currentConfigObject | pub | `export function currentConfigObject(` |
| 311 | fn | applyConfigSnapshot | (private) | `function applyConfigSnapshot(` |
| 364 | fn | asJsonSchema | (private) | `function asJsonSchema(value: unknown): JsonSche...` |
| 371 | fn | coerceNumberString | (private) | `function coerceNumberString(value: string, inte...` |
| 386 | fn | coerceBooleanString | (private) | `function coerceBooleanString(value: string): bo...` |
| 397 | fn | coerceFormValues | (private) | `function coerceFormValues(value: unknown, schem...` |
| 519 | fn | serializeFormForSubmit | (private) | `function serializeFormForSubmit(state: ConfigSt...` |
| 541 | type | ConfigSubmitMethod | (private) | - |
| 542 | type | ConfigSubmitBusyKey | (private) | - |
| 553 | fn | adoptConfigSetAck | (private) | `function adoptConfigSetAck(state: ConfigState, ...` |
| 583 | fn | reconcileHashlessWriteReload | (private) | `function reconcileHashlessWriteReload(state: Co...` |
| 593 | fn | submitConfigChange | (private) | `async function submitConfigChange(` |
| 605 | fn | isCurrent | (private) | `const isCurrent = () => isCurrentConfigConnecti...` |
| 696 | fn | teardownFlushConfigDraft | (private) | `function teardownFlushConfigDraft(` |
| 717 | fn | autoSaveConfig | (private) | `async function autoSaveConfig(` |
| 726 | fn | isCurrent | (private) | `const isCurrent = () => isCurrentConfigConnecti...` |
| 794 | fn | syncConfigDraft | (private) | `function syncConfigDraft(state: ConfigState, ne...` |
| 816 | fn | resetStaleAutoSaveStatus | (private) | `function resetStaleAutoSaveStatus(state: Config...` |
| 826 | fn | saveConfig | (private) | `async function saveConfig(` |
| 833 | fn | applyConfig | (private) | `async function applyConfig(state: ConfigState):...` |
| 839 | fn | patchConfig | (private) | `async function patchConfig(` |
| 878 | fn | lookupConfigSchemaPath | (private) | `async function lookupConfigSchemaPath(` |
| 898 | fn | parseConfigRawDraft | (private) | `function parseConfigRawDraft(raw: string): Reco...` |
| 913 | fn | setConfigRawOriginal | (private) | `function setConfigRawOriginal(state: ConfigStat...` |
| 944 | fn | mutateConfigForm | (private) | `function mutateConfigForm(state: ConfigState, m...` |
| 971 | fn | trackAutoAllowlistedPluginId | (private) | `function trackAutoAllowlistedPluginId(state: Co...` |
| 980 | fn | untrackAutoAllowlistedPluginId | (private) | `function untrackAutoAllowlistedPluginId(state: ...` |
| 991 | fn | syncEnabledPluginAllowlist | (private) | `function syncEnabledPluginAllowlist(` |
| 1040 | fn | updateConfigFormValue | (private) | `function updateConfigFormValue(state: ConfigSta...` |
| 1051 | fn | updateConfigRawValue | (private) | `function updateConfigRawValue(state: ConfigStat...` |
| 1068 | fn | resetConfigPendingChanges | (private) | `function resetConfigPendingChanges(state: Confi...` |
| 1080 | fn | removeConfigFormValue | (private) | `function removeConfigFormValue(state: ConfigSta...` |
| 1084 | fn | findAgentConfigEntryIndex | pub | `export function findAgentConfigEntryIndex(` |
| 1105 | fn | ensureAgentConfigEntry | (private) | `function ensureAgentConfigEntry(state: ConfigSt...` |
| 1121 | fn | stageDefaultAgentConfigEntry | (private) | `function stageDefaultAgentConfigEntry(state: Co...` |
| 1152 | fn | openConfigFile | (private) | `async function openConfigFile(state: ConfigStat...` |
| 1158 | fn | isCurrent | (private) | `const isCurrent = () => isCurrentConfigConnecti...` |
| 1198 | fn | createRuntimeConfigCapability | pub | `export function createRuntimeConfigCapability(` |
| 1225 | fn | armConnectionWake | (private) | `const armConnectionWake = () => {` |
| 1239 | fn | publish | (private) | `const publish = () => {` |
| 1258 | fn | mutate | (private) | `const mutate = (task: () => void) => {` |
| 1279 | fn | loadOnce | (private) | `const loadOnce = (key: "config" | "schema", tas...` |
| 1283 | fn | cancelScheduledAutoSave | (private) | `const cancelScheduledAutoSave = () => {` |
| 1300 | fn | runAutoSave | (private) | `const runAutoSave = () => {` |
| 1348 | fn | scheduleAutoSave | (private) | `const scheduleAutoSave = () => {` |
| 1409 | fn | afterPendingWritesSettled | (private) | `const afterPendingWritesSettled = (task: () => ...` |
| 1416 | fn | start | (private) | `const start = () =>` |
| 1460 | fn | ensureLoaded | (private) | `const ensureLoaded = async () => {` |
| 1466 | fn | ensureSchemaLoaded | (private) | `const ensureSchemaLoaded = () =>` |

## Public API

### `resolveEditableSnapshotConfig`

```
export function resolveEditableSnapshotConfig(
```

**Line:** 295 | **Kind:** fn

### `currentConfigObject`

```
export function currentConfigObject(
```

**Line:** 305 | **Kind:** fn

### `findAgentConfigEntryIndex`

```
export function findAgentConfigEntryIndex(
```

**Line:** 1084 | **Kind:** fn

### `createRuntimeConfigCapability`

```
export function createRuntimeConfigCapability(
```

**Line:** 1198 | **Kind:** fn
