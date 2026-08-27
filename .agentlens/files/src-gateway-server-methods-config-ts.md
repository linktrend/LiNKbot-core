# src/gateway/server-methods/config.ts

[← Back to Module](../modules/src-gateway-server-methods/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1001
- **Language:** TypeScript
- **Symbols:** 31
- **Public symbols:** 2

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 85 | type | ConfigRedactionHints | (private) | - |
| 86 | type | ConfigWriteCommitResult | (private) | - |
| 87 | type | ConfigRestartWriteKind | (private) | - |
| 88 | type | ConfigRestartWriteMode | (private) | - |
| 90 | fn | requireConfigBaseHash | (private) | `function requireConfigBaseHash(` |
| 136 | fn | formatConfigPatchPath | (private) | `function formatConfigPatchPath(parentPath: stri...` |
| 140 | fn | readConfigPatchReplacePaths | (private) | `function readConfigPatchReplacePaths(params: un...` |
| 145 | fn | collectDestructiveArrayPatchPaths | (private) | `function collectDestructiveArrayPatchPaths(para...` |
| 208 | fn | collectBaseArrayPaths | (private) | `function collectBaseArrayPaths(base: unknown, p...` |
| 226 | fn | isConfigPatchObjectWithStringId | (private) | `function isConfigPatchObjectWithStringId(` |
| 232 | fn | isConfigPatchIdKeyedArray | (private) | `function isConfigPatchIdKeyedArray(` |
| 238 | fn | idKeyedArrayPreservesBaseIds | (private) | `function idKeyedArrayPreservesBaseIds(` |
| 248 | fn | arrayPreservesBaseEntries | (private) | `function arrayPreservesBaseEntries(base: unknow...` |
| 262 | fn | collectDestructiveIdKeyedArrayEntryPatchPaths | (private) | `function collectDestructiveIdKeyedArrayEntryPat...` |
| 297 | fn | rejectDestructiveArrayPatchWithoutIntent | (private) | `function rejectDestructiveArrayPatchWithoutInte...` |
| 325 | fn | readConfigWriteSnapshotOrRespond | (private) | `async function readConfigWriteSnapshotOrRespond(` |
| 336 | fn | parseRawConfigOrRespond | (private) | `function parseRawConfigOrRespond(` |
| 356 | fn | hasOwnRecordValue | (private) | `function hasOwnRecordValue(value: unknown, key:...` |
| 360 | fn | stripBundledProviderRuntimeDefaults | (private) | `function stripBundledProviderRuntimeDefaults(pa...` |
| 411 | fn | parseValidateConfigFromRawOrRespond | (private) | `function parseValidateConfigFromRawOrRespond(` |
| 480 | fn | summarizeConfigValidationIssues | (private) | `function summarizeConfigValidationIssues(issues...` |
| 494 | fn | ensureResolvableSecretRefsOrRespond | (private) | `async function ensureResolvableSecretRefsOrResp...` |
| 525 | fn | listPreparedSecretDegradations | (private) | `function listPreparedSecretDegradations(snapsho...` |
| 535 | fn | preparedSecretDegradationPayload | (private) | `function preparedSecretDegradationPayload(snaps...` |
| 540 | fn | clearConfigSchemaResponseCacheForTests | pub | `export function clearConfigSchemaResponseCacheF...` |
| 544 | fn | loadConfigSchemaResponseForTests | pub | `export function loadConfigSchemaResponseForTest...` |
| 548 | fn | clearConfigSchemaResponseCache | (private) | `function clearConfigSchemaResponseCache() {` |
| 552 | fn | respondWithConfigRestartWrite | (private) | `async function respondWithConfigRestartWrite(pa...` |
| 596 | fn | shouldDisconnectSharedAuthClientsForConfigWrite | (private) | `function shouldDisconnectSharedAuthClientsForCo...` |
| 610 | fn | respondConfigPatchNoop | (private) | `function respondConfigPatchNoop(params: {` |
| 633 | fn | loadSchemaWithPlugins | (private) | `function loadSchemaWithPlugins(): ConfigSchemaR...` |

## Public API

### `clearConfigSchemaResponseCacheForTests`

```
export function clearConfigSchemaResponseCacheForTests() {
```

**Line:** 540 | **Kind:** fn

### `loadConfigSchemaResponseForTests`

```
export function loadConfigSchemaResponseForTests(): ConfigSchemaResponse {
```

**Line:** 544 | **Kind:** fn
