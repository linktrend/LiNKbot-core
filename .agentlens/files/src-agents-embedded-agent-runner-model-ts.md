# src/agents/embedded-agent-runner/model.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2059
- **Language:** TypeScript
- **Symbols:** 46
- **Public symbols:** 4

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 75 | type | ProviderRuntimeHooks | (private) | - |
| 95 | type | StaticCatalogFallbackModel | (private) | - |
| 135 | fn | createEmptyAgentDiscoveryStores | pub | `export function createEmptyAgentDiscoveryStores...` |
| 150 | fn | resolveRuntimeHooks | (private) | `function resolveRuntimeHooks(params?: {` |
| 167 | fn | resolvePreparedAgentSnapshot | (private) | `function resolvePreparedAgentSnapshot(` |
| 192 | fn | canonicalizeLegacyResolvedModel | (private) | `function canonicalizeLegacyResolvedModel(params...` |
| 207 | fn | applyResolvedTransportFallback | (private) | `function applyResolvedTransportFallback(params: {` |
| 243 | fn | normalizeResolvedModel | (private) | `function normalizeResolvedModel(params: {` |
| 340 | fn | resolveProviderTransport | (private) | `function resolveProviderTransport(params: {` |
| 374 | fn | resolveConfiguredProviderDefaultApi | (private) | `function resolveConfiguredProviderDefaultApi(pa...` |
| 401 | fn | normalizeTransportBaseUrl | (private) | `function normalizeTransportBaseUrl(baseUrl: unk...` |
| 409 | fn | resolveProviderRequestTimeoutMs | (private) | `function resolveProviderRequestTimeoutMs(timeou...` |
| 413 | fn | matchesProviderScopedModelId | (private) | `function matchesProviderScopedModelId(params: {` |
| 434 | fn | findInlineModelMatch | (private) | `function findInlineModelMatch(params: {` |
| 439 | fn | matchesModelId | (private) | `const matchesModelId = (entry: { provider: stri...` |
| 458 | fn | resolveConfiguredProviderConfig | (private) | `function resolveConfiguredProviderConfig(` |
| 473 | fn | isModelsAddMetadataModel | (private) | `function isModelsAddMetadataModel(params: {` |
| 481 | fn | findConfiguredProviderModel | (private) | `function findConfiguredProviderModel(` |
| 495 | fn | mergeStaticCatalogInlineModel | (private) | `function mergeStaticCatalogInlineModel(` |
| 522 | fn | hasConfiguredFallbackSurface | (private) | `function hasConfiguredFallbackSurface(params: {` |
| 537 | fn | readModelParams | (private) | `function readModelParams(value: unknown): Recor...` |
| 544 | fn | mergeModelParams | (private) | `function mergeModelParams(` |
| 551 | fn | findConfiguredAgentModelParams | (private) | `function findConfiguredAgentModelParams(params: {` |
| 593 | fn | mergeConfiguredRuntimeModelParams | (private) | `function mergeConfiguredRuntimeModelParams(para...` |
| 613 | fn | markDiscoveredMaxTokensSource | (private) | `function markDiscoveredMaxTokensSource(model: P...` |
| 620 | fn | applyConfiguredProviderOverrides | (private) | `function applyConfiguredProviderOverrides(param...` |
| 896 | type | ExplicitModelResolution | (private) | - |
| 901 | fn | shouldSuppressInlineConfiguredModel | (private) | `function shouldSuppressInlineConfiguredModel(pa...` |
| 933 | fn | resolveExplicitModelWithRegistry | (private) | `function resolveExplicitModelWithRegistry(param...` |
| 1118 | fn | resolveDynamicModelAuthProfile | (private) | `function resolveDynamicModelAuthProfile(params: {` |
| 1177 | fn | resolvePluginDynamicModelWithRegistry | (private) | `function resolvePluginDynamicModelWithRegistry(...` |
| 1258 | fn | resolveRuntimePreferredSuppressedModel | (private) | `function resolveRuntimePreferredSuppressedModel...` |
| 1288 | fn | shouldDropRuntimePreferredExplicitMiss | (private) | `function shouldDropRuntimePreferredExplicitMiss...` |
| 1300 | fn | resolveConfiguredFallbackModel | (private) | `function resolveConfiguredFallbackModel(params: {` |
| 1473 | fn | shouldCompareProviderRuntimeResolvedModel | (private) | `function shouldCompareProviderRuntimeResolvedMo...` |
| 1497 | fn | normalizeProviderModelRef | (private) | `function normalizeProviderModelRef(params: {` |
| 1523 | type | ResolveModelWithRegistryParams | (private) | - |
| 1538 | fn | resolveModelWithPreparedRegistry | (private) | `function resolveModelWithPreparedRegistry(` |
| 1585 | fn | resolveModelWithRegistry | pub | `export function resolveModelWithRegistry(` |
| 1599 | fn | resolveModel | pub | `export function resolveModel(` |
| 1682 | fn | resolveModelAsync | pub | `export async function resolveModelAsync(` |
| 1815 | fn | resolveStaticCatalogModel | (private) | `const resolveStaticCatalogModel = async () => {` |
| 1838 | fn | resolveStaticCatalogFallbackModel | (private) | `const resolveStaticCatalogFallbackModel = async...` |
| 1864 | fn | resolveDynamicAttempt | (private) | `const resolveDynamicAttempt = async () => {` |
| 1966 | fn | buildUnknownModelError | (private) | `function buildUnknownModelError(params: {` |
| 2010 | fn | buildMissingProviderModelRegistrationHint | (private) | `function buildMissingProviderModelRegistrationH...` |

## Public API

### `createEmptyAgentDiscoveryStores`

```
export function createEmptyAgentDiscoveryStores(): {
```

**Line:** 135 | **Kind:** fn

### `resolveModelWithRegistry`

```
export function resolveModelWithRegistry(
```

**Line:** 1585 | **Kind:** fn

### `resolveModel`

```
export function resolveModel(
```

**Line:** 1599 | **Kind:** fn

### `resolveModelAsync`

```
export async function resolveModelAsync(
```

**Line:** 1682 | **Kind:** fn
