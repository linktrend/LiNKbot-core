# src/agents/model-selection-shared.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1857
- **Language:** TypeScript
- **Symbols:** 67
- **Public symbols:** 25

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 44 | fn | getLog | (private) | `function getLog(): ReturnType<typeof createSubs...` |
| 50 | type | ModelManifestPlugins | (private) | - |
| 52 | type | ModelAliasIndex | pub | - |
| 58 | type | ModelManifestPluginContext | (private) | - |
| 63 | type | ModelAliasCandidate | (private) | - |
| 68 | type | ExactConfiguredProviderRefParts | (private) | - |
| 73 | fn | providerAliasKey | (private) | `function providerAliasKey(provider: string, ali...` |
| 77 | fn | hasSlashFormModelRef | (private) | `function hasSlashFormModelRef(raw: string): boo...` |
| 83 | fn | resolveManifestPluginsForModelIdNormalization | (private) | `function resolveManifestPluginsForModelIdNormal...` |
| 113 | fn | createModelManifestPluginContext | (private) | `function createModelManifestPluginContext(param...` |
| 136 | fn | listModelAliasCandidates | (private) | `function listModelAliasCandidates(cfg: OpenClaw...` |
| 157 | fn | findModelAliasCandidate | (private) | `function findModelAliasCandidate(` |
| 171 | fn | sanitizeModelWarningValue | (private) | `function sanitizeModelWarningValue(value: strin...` |
| 187 | fn | mergeModelCatalogEntries | (private) | `function mergeModelCatalogEntries(params: {` |
| 205 | fn | inferUniqueProviderFromConfiguredModels | pub | `export function inferUniqueProviderFromConfigur...` |
| 218 | fn | addProvider | (private) | `const addProvider = (provider: string) => {` |
| 285 | fn | inferUniqueProviderFromCatalog | pub | `export function inferUniqueProviderFromCatalog(...` |
| 315 | fn | resolveBareModelDefaultProvider | pub | `export function resolveBareModelDefaultProvider(` |
| 334 | fn | isConcreteOpenRouterFreeModelRef | (private) | `function isConcreteOpenRouterFreeModelRef(ref: ...` |
| 338 | fn | resolveConfiguredOpenRouterCompatFreeRef | (private) | `function resolveConfiguredOpenRouterCompatFreeRef(` |
| 381 | fn | resolveConfiguredOpenRouterCompatAlias | pub | `export function resolveConfiguredOpenRouterComp...` |
| 410 | fn | parseModelRefWithCompatAlias | (private) | `function parseModelRefWithCompatAlias(` |
| 438 | fn | findExactConfiguredProviderRefParts | (private) | `function findExactConfiguredProviderRefParts(pa...` |
| 468 | fn | normalizeExactConfiguredProviderRef | (private) | `function normalizeExactConfiguredProviderRef(` |
| 492 | fn | resolveExactConfiguredProviderRef | (private) | `function resolveExactConfiguredProviderRef(` |
| 511 | fn | resolveAllowlistModelKey | pub | `export function resolveAllowlistModelKey(` |
| 537 | fn | buildConfiguredAllowlistKeys | pub | `export function buildConfiguredAllowlistKeys(` |
| 580 | type | BuildModelAliasIndexParams | (private) | - |
| 588 | fn | buildModelAliasIndexWithManifestContext | (private) | `function buildModelAliasIndexWithManifestContext(` |
| 632 | fn | buildModelAliasIndex | pub | `export function buildModelAliasIndex(params: Bu...` |
| 643 | type | ModelCatalogMetadata | (private) | - |
| 648 | fn | buildModelCatalogMetadata | (private) | `function buildModelCatalogMetadata(` |
| 690 | fn | applyModelCatalogMetadata | (private) | `function applyModelCatalogMetadata(params: {` |
| 727 | fn | buildSyntheticAllowedCatalogEntry | (private) | `function buildSyntheticAllowedCatalogEntry(para...` |
| 755 | fn | resolveModelRefFromString | pub | `export function resolveModelRefFromString(` |
| 798 | fn | resolveConfiguredModelRef | pub | `export function resolveConfiguredModelRef(` |
| 967 | fn | buildAllowedModelSetWithFallbacks | pub | `export function buildAllowedModelSetWithFallbacks(` |
| 1054 | fn | resolveSelectionModelRef | (private) | `const resolveSelectionModelRef = (raw: string, ...` |
| 1106 | fn | addAllowedCatalogRef | (private) | `const addAllowedCatalogRef = (ref: ModelRef) => {` |
| 1120 | fn | addAllowedModelRef | (private) | `const addAllowedModelRef = (raw: string, aliasI...` |
| 1187 | type | ModelRefStatus | pub | - |
| 1194 | type | ResolveAllowedModelRefResult | (private) | - |
| 1200 | fn | getModelRefStatusFromAllowedSet | (private) | `function getModelRefStatusFromAllowedSet(params: {` |
| 1222 | fn | getModelRefStatusWithFallbackModels | pub | `export function getModelRefStatusWithFallbackMo...` |
| 1250 | fn | resolveAllowedModelRefFromAliasIndex | pub | `export function resolveAllowedModelRefFromAlias...` |
| 1292 | fn | hasConfiguredProviderModelRows | pub | `export function hasConfiguredProviderModelRows(...` |
| 1300 | fn | hasConfiguredProviderRowsNeedingManifestLookup | (private) | `function hasConfiguredProviderRowsNeedingManife...` |
| 1311 | fn | hasConfiguredModelRefsNeedingManifestLookup | (private) | `function hasConfiguredModelRefsNeedingManifestL...` |
| 1334 | fn | hasConfiguredRowsNeedingManifestLookup | (private) | `function hasConfiguredRowsNeedingManifestLookup(` |
| 1344 | fn | resolveConfiguredModelManifestPlugins | (private) | `function resolveConfiguredModelManifestPlugins(...` |
| 1372 | fn | buildConfiguredModelCatalog | pub | `export function buildConfiguredModelCatalog(par...` |
| 1437 | fn | isVllmQwenThinkingCompat | (private) | `function isVllmQwenThinkingCompat(` |
| 1447 | fn | resolveHooksGmailModel | pub | `export function resolveHooksGmailModel(` |
| 1475 | fn | normalizeModelSelection | pub | `export function normalizeModelSelection(value: ...` |
| 1493 | fn | resolvePolicyAliasAgentId | (private) | `function resolvePolicyAliasAgentId(` |
| 1500 | fn | resolveConfiguredModelPolicyAllow | pub | `export function resolveConfiguredModelPolicyAll...` |
| 1541 | fn | parseConfiguredModelVisibilityEntries | pub | `export function parseConfiguredModelVisibilityE...` |
| 1577 | fn | resolveConfiguredWildcardModelKeys | (private) | `function resolveConfiguredWildcardModelKeys(par...` |
| 1592 | fn | expandModelCatalogWildcards | (private) | `function expandModelCatalogWildcards<T extends ...` |
| 1601 | fn | isModelKeyAllowedBySet | pub | `export function isModelKeyAllowedBySet(allowedK...` |
| 1615 | fn | resolveAllowedModelSelection | (private) | `function resolveAllowedModelSelection(` |
| 1627 | fn | normalizeSelectionRef | (private) | `const normalizeSelectionRef = (provider: string...` |
| 1653 | type | ModelVisibilityPolicy | pub | - |
| 1679 | fn | modelCatalogLogicalKey | pub | `export function modelCatalogLogicalKey(entry: P...` |
| 1685 | fn | dedupeModelCatalogEntries | pub | `export function dedupeModelCatalogEntries(` |
| 1703 | fn | createModelVisibilityPolicyWithFallbacks | pub | `export function createModelVisibilityPolicyWith...` |
| 1747 | fn | addConfiguredRef | (private) | `const addConfiguredRef = (` |

## Public API

### `inferUniqueProviderFromConfiguredModels`

```
export function inferUniqueProviderFromConfiguredModels(
```

**Line:** 205 | **Kind:** fn

### `inferUniqueProviderFromCatalog`

```
export function inferUniqueProviderFromCatalog(params: {
```

**Line:** 285 | **Kind:** fn

### `resolveBareModelDefaultProvider`

```
export function resolveBareModelDefaultProvider(
```

**Line:** 315 | **Kind:** fn

### `resolveConfiguredOpenRouterCompatAlias`

```
export function resolveConfiguredOpenRouterCompatAlias(
```

**Line:** 381 | **Kind:** fn

### `resolveAllowlistModelKey`

```
export function resolveAllowlistModelKey(
```

**Line:** 511 | **Kind:** fn

### `buildConfiguredAllowlistKeys`

```
export function buildConfiguredAllowlistKeys(
```

**Line:** 537 | **Kind:** fn

### `buildModelAliasIndex`

```
export function buildModelAliasIndex(params: BuildModelAliasIndexParams): ModelAliasIndex {
```

**Line:** 632 | **Kind:** fn

### `resolveModelRefFromString`

```
export function resolveModelRefFromString(
```

**Line:** 755 | **Kind:** fn

### `resolveConfiguredModelRef`

```
export function resolveConfiguredModelRef(
```

**Line:** 798 | **Kind:** fn

### `buildAllowedModelSetWithFallbacks`

```
export function buildAllowedModelSetWithFallbacks(
```

**Line:** 967 | **Kind:** fn

### `getModelRefStatusWithFallbackModels`

```
export function getModelRefStatusWithFallbackModels(
```

**Line:** 1222 | **Kind:** fn

### `resolveAllowedModelRefFromAliasIndex`

```
export function resolveAllowedModelRefFromAliasIndex(
```

**Line:** 1250 | **Kind:** fn

### `hasConfiguredProviderModelRows`

```
export function hasConfiguredProviderModelRows(cfg: OpenClawConfig): boolean {
```

**Line:** 1292 | **Kind:** fn

### `buildConfiguredModelCatalog`

```
export function buildConfiguredModelCatalog(params: {
```

**Line:** 1372 | **Kind:** fn

### `resolveHooksGmailModel`

```
export function resolveHooksGmailModel(
```

**Line:** 1447 | **Kind:** fn

### `normalizeModelSelection`

```
export function normalizeModelSelection(value: unknown): string | undefined {
```

**Line:** 1475 | **Kind:** fn

### `resolveConfiguredModelPolicyAllow`

```
export function resolveConfiguredModelPolicyAllow(params: {
```

**Line:** 1500 | **Kind:** fn

### `parseConfiguredModelVisibilityEntries`

```
export function parseConfiguredModelVisibilityEntries(params: {
```

**Line:** 1541 | **Kind:** fn

### `isModelKeyAllowedBySet`

```
export function isModelKeyAllowedBySet(allowedKeys: ReadonlySet<string>, key: string): boolean {
```

**Line:** 1601 | **Kind:** fn

### `modelCatalogLogicalKey`

```
export function modelCatalogLogicalKey(entry: Pick<ModelCatalogEntry, "provider" | "id">): string {
```

**Line:** 1679 | **Kind:** fn

### `dedupeModelCatalogEntries`

```
export function dedupeModelCatalogEntries(
```

**Line:** 1685 | **Kind:** fn

### `createModelVisibilityPolicyWithFallbacks`

```
export function createModelVisibilityPolicyWithFallbacks(
```

**Line:** 1703 | **Kind:** fn
