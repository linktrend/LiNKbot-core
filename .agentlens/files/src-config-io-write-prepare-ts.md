# src/config/io.write-prepare.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1275
- **Language:** TypeScript
- **Symbols:** 58
- **Public symbols:** 10

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 17 | type | ManifestModelIdNormalizationProvider | (private) | - |
| 28 | fn | cloneUnknown | (private) | `function cloneUnknown<T>(value: T): T {` |
| 33 | fn | createMergePatch | pub | `export function createMergePatch(base: unknown,...` |
| 68 | fn | projectSourceOntoRuntimeShape | pub | `export function projectSourceOntoRuntimeShape(s...` |
| 84 | fn | hasOwnValidIncludeDirective | (private) | `function hasOwnValidIncludeDirective(value: unk...` |
| 95 | fn | collectIncludeOwnedPaths | (private) | `function collectIncludeOwnedPaths(value: unknow...` |
| 112 | fn | collectMutableSiblingPathsAtInclude | (private) | `function collectMutableSiblingPathsAtInclude(ro...` |
| 122 | fn | isMutableSiblingPathAtInclude | (private) | `function isMutableSiblingPathAtInclude(` |
| 144 | fn | formatConfigPath | (private) | `function formatConfigPath(path: string[]): stri...` |
| 148 | fn | findContainingArrayPath | (private) | `function findContainingArrayPath(root: unknown,...` |
| 164 | fn | hasChangedEquivalentArraySibling | (private) | `function hasChangedEquivalentArraySibling(` |
| 180 | fn | hasNewEquivalentArraySibling | (private) | `function hasNewEquivalentArraySibling(value: un...` |
| 196 | fn | getPathValue | (private) | `function getPathValue(value: unknown, path: str...` |
| 215 | fn | setPathValue | (private) | `function setPathValue(value: unknown, path: str...` |
| 239 | fn | pathStartsWith | (private) | `function pathStartsWith(path: string[], prefix:...` |
| 243 | fn | pathOverlapsAny | (private) | `function pathOverlapsAny(path: string[], candid...` |
| 251 | fn | isIncludeOwnedPath | (private) | `function isIncludeOwnedPath(rootAuthoredConfig:...` |
| 261 | fn | findOverlappingIncludeOwnedPath | (private) | `function findOverlappingIncludeOwnedPath(` |
| 274 | fn | setPathValueCreatingParents | (private) | `function setPathValueCreatingParents(value: unk...` |
| 296 | fn | deletePathValue | (private) | `function deletePathValue(value: unknown, path: ...` |
| 323 | fn | preserveSourceValueAtPath | (private) | `function preserveSourceValueAtPath(params: {` |
| 351 | fn | preserveAuthoredAgentParams | (private) | `function preserveAuthoredAgentParams(params: {` |
| 419 | fn | normalizeAgentModelConfigForWrite | (private) | `function normalizeAgentModelConfigForWrite(valu...` |
| 459 | fn | normalizeModelConfigPathForWrite | (private) | `function normalizeModelConfigPathForWrite(confi...` |
| 468 | fn | normalizeModelStringPathForWrite | (private) | `function normalizeModelStringPathForWrite(confi...` |
| 477 | fn | normalizeAgentModelRefsAtPathForWrite | (private) | `function normalizeAgentModelRefsAtPathForWrite(...` |
| 503 | fn | normalizeAgentListModelRefsForWrite | (private) | `function normalizeAgentListModelRefsForWrite(co...` |
| 528 | fn | normalizeToolsModelRefsForWrite | (private) | `function normalizeToolsModelRefsForWrite(config...` |
| 532 | fn | normalizeModelProviderCatalogRefsForWrite | (private) | `function normalizeModelProviderCatalogRefsForWr...` |
| 578 | fn | normalizeModelRefsForWrite | (private) | `function normalizeModelRefsForWrite(` |
| 592 | type | IncludeSiblingProjection | (private) | - |
| 597 | fn | projectRootAuthoredIncludeSibling | (private) | `function projectRootAuthoredIncludeSibling(para...` |
| 690 | fn | preserveUntouchedIncludes | (private) | `function preserveUntouchedIncludes(params: {` |
| 712 | fn | omitMutableSiblingValues | (private) | `const omitMutableSiblingValues = (value: unknow...` |
| 749 | fn | projectAgainst | (private) | `const projectAgainst = (baselineConfig: unknown...` |
| 777 | fn | preserveIncludeOwnedConfigForWrite | pub | `export function preserveIncludeOwnedConfigForWr...` |
| 789 | fn | hasPathValue | (private) | `function hasPathValue(value: unknown, path: rea...` |
| 811 | fn | mergeMissingExplicitValues | (private) | `function mergeMissingExplicitValues(` |
| 862 | fn | injectExplicitlySetPaths | (private) | `function injectExplicitlySetPaths(params: {` |
| 903 | fn | resolvePersistCandidateForWrite | pub | `export function resolvePersistCandidateForWrite...` |
| 944 | fn | readRootSchemaUri | (private) | `function readRootSchemaUri(value: unknown): str...` |
| 951 | fn | hasOwnRootSchemaKey | (private) | `function hasOwnRootSchemaKey(value: unknown): b...` |
| 955 | fn | preserveRootSchemaUri | (private) | `function preserveRootSchemaUri(params: {` |
| 973 | fn | formatConfigValidationFailure | pub | `export function formatConfigValidationFailure(p...` |
| 994 | fn | isNumericPathSegment | (private) | `function isNumericPathSegment(raw: string): boo...` |
| 998 | fn | parseArrayIndexPathSegment | (private) | `function parseArrayIndexPathSegment(raw: string...` |
| 1002 | fn | isWritePlainObject | (private) | `function isWritePlainObject(value: unknown): va...` |
| 1006 | fn | hasOwnObjectKey | (private) | `function hasOwnObjectKey(value: Record<string, ...` |
| 1012 | fn | coerceConfig | (private) | `function coerceConfig(value: unknown): OpenClaw...` |
| 1019 | fn | unsetPathForWriteAt | (private) | `function unsetPathForWriteAt(` |
| 1085 | fn | unsetPathForWrite | (private) | `function unsetPathForWrite(` |
| 1105 | fn | applyUnsetPathsForWrite | pub | `export function applyUnsetPathsForWrite(` |
| 1122 | fn | resolveManagedUnsetPathsForWrite | pub | `export function resolveManagedUnsetPathsForWrite(` |
| 1141 | fn | collectChangedPaths | pub | `export function collectChangedPaths(` |
| 1178 | fn | parentPath | (private) | `function parentPath(value: string): string {` |
| 1190 | fn | isPathChanged | (private) | `function isPathChanged(path: string, changedPat...` |
| 1204 | fn | restoreEnvRefsFromMap | pub | `export function restoreEnvRefsFromMap(` |
| 1262 | fn | resolveWriteEnvSnapshotForPath | pub | `export function resolveWriteEnvSnapshotForPath(...` |

## Public API

### `createMergePatch`

```
export function createMergePatch(base: unknown, target: unknown): unknown {
```

**Line:** 33 | **Kind:** fn

### `projectSourceOntoRuntimeShape`

```
export function projectSourceOntoRuntimeShape(source: unknown, runtime: unknown): unknown {
```

**Line:** 68 | **Kind:** fn

### `preserveIncludeOwnedConfigForWrite`

```
export function preserveIncludeOwnedConfigForWrite(params: {
```

**Line:** 777 | **Kind:** fn

### `resolvePersistCandidateForWrite`

```
export function resolvePersistCandidateForWrite(params: {
```

**Line:** 903 | **Kind:** fn

### `formatConfigValidationFailure`

```
export function formatConfigValidationFailure(pathLabel: string, issueMessage: string): string {
```

**Line:** 973 | **Kind:** fn

### `applyUnsetPathsForWrite`

```
export function applyUnsetPathsForWrite(
```

**Line:** 1105 | **Kind:** fn

### `resolveManagedUnsetPathsForWrite`

```
export function resolveManagedUnsetPathsForWrite(
```

**Line:** 1122 | **Kind:** fn

### `collectChangedPaths`

```
export function collectChangedPaths(
```

**Line:** 1141 | **Kind:** fn

### `restoreEnvRefsFromMap`

```
export function restoreEnvRefsFromMap(
```

**Line:** 1204 | **Kind:** fn

### `resolveWriteEnvSnapshotForPath`

```
export function resolveWriteEnvSnapshotForPath(params: {
```

**Line:** 1262 | **Kind:** fn
