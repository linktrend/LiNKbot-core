# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## ui/src/lib/config/index.test.ts (2141 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | fn | deferred | (private) |
| 19 | fn | createGatewayHarness | (private) |
| 47 | fn | createConfigServerMock | (private) |
| 84 | fn | createDeferredSetServerMock | (private) |
| 345 | fn | createHarness | (private) |
| 1989 | fn | configGetCalls | (private) |

## ui/src/lib/config/index.ts (1794 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | type | ConfigAutoSaveStatus | pub |
| 23 | fn | readAckHash | (private) |
| 35 | fn | isConfigBaseHashConflictError | (private) |
| 40 | type | ConfigState | (private) |
| 77 | type | RuntimeConfigGatewaySnapshot | (private) |
| 83 | type | RuntimeConfigGateway | (private) |
| 88 | type | RuntimeConfigCapability | pub |
| 115 | type | LoadConfigOptions | (private) |
| 119 | type | ConfigPatchOptions | (private) |
| 126 | type | ConfigGatewayClient | (private) |
| 130 | type | ConfigConnectionState | (private) |
| 135 | type | ConfigGatewayState | (private) |
| 147 | fn | createInitialConfigState | (private) |
| 180 | fn | nextRequestVersion | (private) |
| 187 | fn | currentConfigConnectionEpoch | (private) |
| 191 | fn | invalidateConfigConnection | (private) |
| 195 | fn | isCurrentConfigConnection | (private) |
| 207 | fn | isCurrentRequest | (private) |
| 221 | fn | loadConfig | (private) |
| 254 | fn | loadConfigSchema | (private) |
| 282 | fn | applyConfigSchema | (private) |
| 288 | fn | asConfigRecord | (private) |
| 295 | fn | resolveEditableSnapshotConfig | pub |
| 305 | fn | currentConfigObject | pub |
| 311 | fn | applyConfigSnapshot | (private) |
| 364 | fn | asJsonSchema | (private) |
| 371 | fn | coerceNumberString | (private) |
| 386 | fn | coerceBooleanString | (private) |
| 397 | fn | coerceFormValues | (private) |
| 519 | fn | serializeFormForSubmit | (private) |
| 541 | type | ConfigSubmitMethod | (private) |
| 542 | type | ConfigSubmitBusyKey | (private) |
| 553 | fn | adoptConfigSetAck | (private) |
| 583 | fn | reconcileHashlessWriteReload | (private) |
| 593 | fn | submitConfigChange | (private) |
| 605 | fn | isCurrent | (private) |
| 696 | fn | teardownFlushConfigDraft | (private) |
| 717 | fn | autoSaveConfig | (private) |
| 726 | fn | isCurrent | (private) |
| 794 | fn | syncConfigDraft | (private) |
| 816 | fn | resetStaleAutoSaveStatus | (private) |
| 826 | fn | saveConfig | (private) |
| 833 | fn | applyConfig | (private) |
| 839 | fn | patchConfig | (private) |
| 878 | fn | lookupConfigSchemaPath | (private) |
| 898 | fn | parseConfigRawDraft | (private) |
| 913 | fn | setConfigRawOriginal | (private) |
| 944 | fn | mutateConfigForm | (private) |
| 971 | fn | trackAutoAllowlistedPluginId | (private) |
| 980 | fn | untrackAutoAllowlistedPluginId | (private) |
| 991 | fn | syncEnabledPluginAllowlist | (private) |
| 1040 | fn | updateConfigFormValue | (private) |
| 1051 | fn | updateConfigRawValue | (private) |
| 1068 | fn | resetConfigPendingChanges | (private) |
| 1080 | fn | removeConfigFormValue | (private) |
| 1084 | fn | findAgentConfigEntryIndex | pub |
| 1105 | fn | ensureAgentConfigEntry | (private) |
| 1121 | fn | stageDefaultAgentConfigEntry | (private) |
| 1152 | fn | openConfigFile | (private) |
| 1158 | fn | isCurrent | (private) |
| 1198 | fn | createRuntimeConfigCapability | pub |
| 1225 | fn | armConnectionWake | (private) |
| 1239 | fn | publish | (private) |
| 1258 | fn | mutate | (private) |
| 1279 | fn | loadOnce | (private) |
| 1283 | fn | cancelScheduledAutoSave | (private) |
| 1300 | fn | runAutoSave | (private) |
| 1348 | fn | scheduleAutoSave | (private) |
| 1409 | fn | afterPendingWritesSettled | (private) |
| 1416 | fn | start | (private) |
| 1460 | fn | ensureLoaded | (private) |
| 1466 | fn | ensureSchemaLoaded | (private) |
