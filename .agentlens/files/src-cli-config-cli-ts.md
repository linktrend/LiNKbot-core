# src/cli/config-cli.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2877
- **Language:** TypeScript
- **Symbols:** 117
- **Public symbols:** 6

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 95 | type | PathSegment | (private) | - |
| 96 | type | ConfigSetParseOpts | (private) | - |
| 99 | type | ConfigSetInputMode | (private) | - |
| 100 | type | ConfigSetOperation | (private) | - |
| 112 | type | ConfigPatchOptions | (private) | - |
| 120 | type | ConfigUnsetOptions | (private) | - |
| 125 | type | ConfigMutationOptions | (private) | - |
| 133 | fn | normalizeAgentDefaultModelValueForConfigMutation | (private) | `function normalizeAgentDefaultModelValueForConf...` |
| 153 | fn | normalizeAgentListModelRefsForConfigMutation | (private) | `function normalizeAgentListModelRefsForConfigMu...` |
| 186 | fn | normalizeProviderCatalogModelsForConfigMutation | (private) | `function normalizeProviderCatalogModelsForConfi...` |
| 214 | fn | normalizeModelProviderRefsForConfigMutation | (private) | `function normalizeModelProviderRefsForConfigMut...` |
| 238 | fn | normalizeConfigMutationModelRefs | (private) | `function normalizeConfigMutationModelRefs(cfg: ...` |
| 287 | fn | normalizeConfigMutationExplicitSetPath | (private) | `function normalizeConfigMutationExplicitSetPath...` |
| 336 | class | ConfigSetDryRunValidationError | (private) | - |
| 343 | fn | isIndexSegment | (private) | `function isIndexSegment(raw: string): boolean {` |
| 347 | fn | parseIndexSegment | (private) | `function parseIndexSegment(raw: string): number...` |
| 351 | fn | parseBracketPathSegment | (private) | `function parseBracketPathSegment(raw: string, f...` |
| 372 | fn | assertNotWhitespaceSegment | (private) | `function assertNotWhitespaceSegment(current: st...` |
| 378 | fn | parsePath | (private) | `function parsePath(raw: string): PathSegment[] {` |
| 453 | fn | parseValue | (private) | `function parseValue(raw: string, opts: ConfigSe...` |
| 470 | fn | hasOwnPathKey | (private) | `function hasOwnPathKey(value: Record<string, un...` |
| 474 | fn | formatDoctorHint | (private) | `function formatDoctorHint(message: string): str...` |
| 478 | fn | formatInvalidConfigRepairHint | (private) | `function formatInvalidConfigRepairHint(` |
| 487 | fn | formatUnsupportedSecretRefPolicyFailureMessage | (private) | `function formatUnsupportedSecretRefPolicyFailur...` |
| 498 | fn | validatePathSegments | (private) | `function validatePathSegments(path: PathSegment...` |
| 506 | fn | getAtPath | (private) | `function getAtPath(root: unknown, path: PathSeg...` |
| 532 | fn | formatConfigUnsetMissingPathMessage | (private) | `function formatConfigUnsetMissingPathMessage(pa...` |
| 542 | type | JsonSchemaRecord | (private) | - |
| 552 | type | SetAtPathOptions | (private) | - |
| 557 | fn | isSchemaRecord | (private) | `function isSchemaRecord(value: unknown): value ...` |
| 561 | fn | schemaTypes | (private) | `function schemaTypes(schema: JsonSchemaRecord):...` |
| 571 | fn | schemaAlternatives | (private) | `function schemaAlternatives(` |
| 594 | fn | schemaLooksArray | (private) | `function schemaLooksArray(schema: JsonSchemaRec...` |
| 600 | fn | schemaLooksObject | (private) | `function schemaLooksObject(schema: JsonSchemaRe...` |
| 610 | fn | propertySchema | (private) | `function propertySchema(schema: JsonSchemaRecor...` |
| 640 | fn | schemasAtPath | (private) | `function schemasAtPath(schema: JsonSchemaRecord...` |
| 654 | fn | schemaPrefersArrayAtPath | (private) | `function schemaPrefersArrayAtPath(` |
| 675 | fn | shouldCreateArrayForMissingPathSegment | (private) | `function shouldCreateArrayForMissingPathSegment...` |
| 692 | fn | setAtPath | (private) | `function setAtPath(` |
| 754 | fn | modelArrayIds | (private) | `function modelArrayIds(value: unknown): Set<str...` |
| 768 | fn | mergeModelArrays | (private) | `function mergeModelArrays(existing: unknown[], ...` |
| 794 | fn | mergeConfigValue | (private) | `function mergeConfigValue(existing: unknown, pa...` |
| 811 | fn | mergeAtPath | (private) | `function mergeAtPath(` |
| 825 | fn | isProviderModelListPath | (private) | `function isProviderModelListPath(path: PathSegm...` |
| 831 | fn | isProtectedMapReplacementPath | (private) | `function isProtectedMapReplacementPath(path: Pa...` |
| 850 | fn | isProtectedArrayReplacementPath | (private) | `function isProtectedArrayReplacementPath(path: ...` |
| 854 | fn | formatRemovedEntries | (private) | `function formatRemovedEntries(entries: string[]...` |
| 861 | fn | assertNonDestructiveReplacement | (private) | `function assertNonDestructiveReplacement(params: {` |
| 902 | type | UnsetAtPathResult | (private) | - |
| 904 | fn | unsetAtPath | (private) | `function unsetAtPath(root: Record<string, unkno...` |
| 954 | fn | loadValidConfig | (private) | `async function loadValidConfig(runtime: Runtime...` |
| 977 | fn | parseConfigSetPath | pub | `export function parseConfigSetPath(path: string...` |
| 986 | fn | pathEquals | (private) | `function pathEquals(path: PathSegment[], expect...` |
| 992 | fn | pruneInactiveGatewayAuthCredentials | (private) | `function pruneInactiveGatewayAuthCredentials(pa...` |
| 1016 | fn | remove | (private) | `const remove = (key: "token" | "password") => {` |
| 1034 | fn | toDotPath | (private) | `function toDotPath(path: PathSegment[]): string {` |
| 1042 | fn | isPluginEntryConfigPath | (private) | `function isPluginEntryConfigPath(path: string):...` |
| 1048 | fn | configApplyHintForPaths | (private) | `function configApplyHintForPaths(paths: string[...` |
| 1069 | fn | configApplyHintForOperations | (private) | `function configApplyHintForOperations(` |
| 1092 | fn | expandActualChangedPathsWithRequestedDescendants | (private) | `function expandActualChangedPathsWithRequestedD...` |
| 1116 | fn | expandWholeValueChangePath | (private) | `function expandWholeValueChangePath(` |
| 1133 | fn | collectChangedLeafPaths | (private) | `function collectChangedLeafPaths(value: unknown...` |
| 1146 | fn | parseSecretRefSource | (private) | `function parseSecretRefSource(raw: string, labe...` |
| 1154 | fn | parseSecretRefBuilder | (private) | `function parseSecretRefBuilder(params: {` |
| 1192 | fn | parseOptionalPositiveInteger | (private) | `function parseOptionalPositiveInteger(raw: stri...` |
| 1207 | fn | parseProviderEnvEntries | (private) | `function parseProviderEnvEntries(` |
| 1228 | fn | parseProviderAliasPath | (private) | `function parseProviderAliasPath(path: PathSegme...` |
| 1247 | fn | buildProviderFromBuilder | (private) | `function buildProviderFromBuilder(opts: ConfigS...` |
| 1334 | fn | parseSecretRefFromUnknown | (private) | `function parseSecretRefFromUnknown(value: unkno...` |
| 1354 | fn | buildRefAssignmentOperation | (private) | `function buildRefAssignmentOperation(params: {` |
| 1387 | fn | parseProviderAliasFromTargetPath | (private) | `function parseProviderAliasFromTargetPath(path:...` |
| 1398 | fn | touchesSecretProviderCollection | (private) | `function touchesSecretProviderCollection(path: ...` |
| 1405 | fn | touchesSecretDefaults | (private) | `function touchesSecretDefaults(path: PathSegmen...` |
| 1412 | fn | buildValueAssignmentOperation | (private) | `function buildValueAssignmentOperation(params: {` |
| 1431 | fn | parseBatchOperations | (private) | `function parseBatchOperations(entries: ConfigSe...` |
| 1477 | fn | configPatchModeError | (private) | `function configPatchModeError(message: string):...` |
| 1481 | fn | readStdinText | (private) | `async function readStdinText(): Promise<string> {` |
| 1498 | fn | readConfigPatchInput | (private) | `async function readConfigPatchInput(opts: Confi...` |
| 1525 | fn | parseReplacePaths | (private) | `function parseReplacePaths(paths: string[] | un...` |
| 1529 | fn | pathKey | (private) | `function pathKey(path: PathSegment[]): string {` |
| 1533 | fn | buildDeleteOperation | (private) | `function buildDeleteOperation(path: PathSegment...` |
| 1543 | fn | buildUnsetOperation | (private) | `function buildUnsetOperation(path: PathSegment[...` |
| 1559 | fn | buildApplyValueOperation | (private) | `function buildApplyValueOperation(params: {` |
| 1585 | fn | buildConfigPatchOperations | (private) | `function buildConfigPatchOperations(params: {` |
| 1595 | fn | visit | (private) | `const visit = (value: unknown, path: PathSegmen...` |
| 1646 | fn | collectSecretRefsFromUnknown | (private) | `function collectSecretRefsFromUnknown(value: un...` |
| 1648 | fn | visit | (private) | `const visit = (candidate: unknown) => {` |
| 1670 | fn | modeError | (private) | `function modeError(message: string): Error {` |
| 1674 | fn | buildSingleSetOperations | (private) | `function buildSingleSetOperations(params: {` |
| 1756 | fn | collectDryRunRefs | (private) | `function collectDryRunRefs(params: {` |
| 1806 | fn | collectDryRunResolvabilityErrors | (private) | `async function collectDryRunResolvabilityErrors...` |
| 1828 | fn | collectDryRunStaticErrorsForSkippedExecRefs | (private) | `function collectDryRunStaticErrorsForSkippedExe...` |
| 1872 | fn | selectDryRunRefsForResolution | (private) | `function selectDryRunRefsForResolution(params: ...` |
| 1888 | fn | pathStartsWith | (private) | `function pathStartsWith(path: readonly PathSegm...` |
| 1892 | fn | formatPluginInstallConfigSetError | (private) | `function formatPluginInstallConfigSetError(): s...` |
| 1903 | fn | isAutoManagedMetaPath | (private) | `function isAutoManagedMetaPath(path: ReadonlyAr...` |
| 1907 | fn | valueHasAutoManagedChild | (private) | `function valueHasAutoManagedChild(value: unknow...` |
| 1925 | fn | operationClobbersAncestorChild | (private) | `function operationClobbersAncestorChild(` |
| 1944 | fn | findAutoManagedMetaTargets | (private) | `function findAutoManagedMetaTargets(` |
| 1979 | fn | findAutoManagedMetaUnsetTargets | (private) | `function findAutoManagedMetaUnsetTargets(` |
| 1993 | fn | formatAutoManagedMetaError | (private) | `function formatAutoManagedMetaError(paths: read...` |
| 2003 | fn | loadConfigMutationSchema | (private) | `async function loadConfigMutationSchema(): Prom...` |
| 2011 | fn | collectDryRunSchemaErrors | (private) | `function collectDryRunSchemaErrors(params: { co...` |
| 2022 | fn | collectPluginIntegrationProviderErrors | (private) | `function collectPluginIntegrationProviderErrors...` |
| 2084 | fn | dedupeDryRunErrors | (private) | `function dedupeDryRunErrors(errors: ConfigSetDr...` |
| 2101 | fn | formatDryRunFailureMessage | (private) | `function formatDryRunFailureMessage(params: {` |
| 2138 | fn | runConfigOperations | (private) | `async function runConfigOperations(params: {` |
| 2365 | fn | handleConfigMutationError | (private) | `function handleConfigMutationError(params: {` |
| 2383 | fn | runConfigSet | pub | `export async function runConfigSet(opts: {` |
| 2432 | fn | runConfigPatch | pub | `export async function runConfigPatch(opts: {` |
| 2464 | fn | runConfigGet | pub | `export async function runConfigGet(opts: { path...` |
| 2507 | fn | runConfigUnset | pub | `export async function runConfigUnset(opts: {` |
| 2595 | fn | runConfigFile | (private) | `async function runConfigFile(opts: { runtime?: ...` |
| 2605 | fn | buildCliConfigSchema | (private) | `async function buildCliConfigSchema(): Promise<...` |
| 2619 | fn | runConfigSchema | (private) | `async function runConfigSchema(opts: { runtime?...` |
| 2629 | fn | runConfigValidate | (private) | `async function runConfigValidate(opts: { json?:...` |
| 2703 | fn | registerConfigCli | pub | `export function registerConfigCli(program: Comm...` |

## Public API

### `parseConfigSetPath`

```
export function parseConfigSetPath(path: string): string[] {
```

**Line:** 977 | **Kind:** fn

### `runConfigSet`

```
export async function runConfigSet(opts: {
```

**Line:** 2383 | **Kind:** fn

### `runConfigPatch`

```
export async function runConfigPatch(opts: {
```

**Line:** 2432 | **Kind:** fn

### `runConfigGet`

```
export async function runConfigGet(opts: { path: string; json?: boolean; runtime?: RuntimeEnv }) {
```

**Line:** 2464 | **Kind:** fn

### `runConfigUnset`

```
export async function runConfigUnset(opts: {
```

**Line:** 2507 | **Kind:** fn

### `registerConfigCli`

```
export function registerConfigCli(program: Command) {
```

**Line:** 2703 | **Kind:** fn
