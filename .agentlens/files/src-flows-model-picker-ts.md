# src/flows/model-picker.ts

[← Back to Module](../modules/src-flows/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1736
- **Language:** TypeScript
- **Symbols:** 38
- **Public symbols:** 4

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 57 | type | ModelRouteRuntimeResolver | (private) | - |
| 67 | fn | formatKeepCurrentModelLabel | (private) | `function formatKeepCurrentModelLabel(params: {` |
| 77 | fn | formatModelRefLabel | (private) | `function formatModelRefLabel(params: {` |
| 92 | fn | resolvePickerAgentDir | (private) | `function resolvePickerAgentDir(params: {` |
| 100 | type | PromptDefaultModelParams | (private) | - |
| 117 | type | PromptDefaultModelResult | (private) | - |
| 118 | type | PromptModelAllowlistResult | (private) | - |
| 120 | fn | loadModelPickerRuntime | (private) | `async function loadModelPickerRuntime() {` |
| 129 | fn | resolveConfiguredModelRaw | (private) | `function resolveConfiguredModelRaw(cfg: OpenCla...` |
| 133 | fn | resolveConfiguredModelKeys | (private) | `function resolveConfiguredModelKeys(cfg: OpenCl...` |
| 140 | fn | toPickerCatalogEntry | (private) | `function toPickerCatalogEntry(` |
| 155 | fn | loadPickerModelCatalog | (private) | `function loadPickerModelCatalog(` |
| 220 | fn | resolvePickerLogicalCatalog | (private) | `async function resolvePickerLogicalCatalog(para...` |
| 279 | fn | normalizeModelKeys | (private) | `function normalizeModelKeys(values: string[]): ...` |
| 293 | fn | resolveFallbackModelKey | (private) | `function resolveFallbackModelKey(params: {` |
| 315 | fn | resolveFallbackModelKeys | (private) | `function resolveFallbackModelKeys(params: {` |
| 335 | fn | createModelRouteRuntimeResolver | (private) | `function createModelRouteRuntimeResolver(params: {` |
| 366 | fn | resolveModelRouteHint | (private) | `function resolveModelRouteHint(params: {` |
| 389 | fn | resolveLiteralPrefixProviderIds | (private) | `async function resolveLiteralPrefixProviderIds(...` |
| 422 | fn | modelCatalogEntryKey | (private) | `function modelCatalogEntryKey(entry: { provider...` |
| 427 | fn | addModelSelectOption | (private) | `async function addModelSelectOption(params: {` |
| 501 | fn | splitModelKey | (private) | `function splitModelKey(key: string): { provider...` |
| 512 | fn | addModelKeySelectOption | (private) | `async function addModelKeySelectOption(params: {` |
| 546 | fn | createPreferredProviderMatcher | (private) | `function createPreferredProviderMatcher(params: {` |
| 588 | fn | promptManualModel | (private) | `async function promptManualModel(params: {` |
| 610 | fn | buildModelProviderFilterOptions | (private) | `function buildModelProviderFilterOptions(` |
| 624 | fn | maybeFilterModelsByProvider | (private) | `async function maybeFilterModelsByProvider(para...` |
| 674 | fn | resolveProviderPluginSetupOptions | (private) | `async function resolveProviderPluginSetupOption...` |
| 703 | fn | maybeHandleProviderPluginSelection | (private) | `async function maybeHandleProviderPluginSelecti...` |
| 782 | fn | promptDefaultModel | pub | `export async function promptDefaultModel(` |
| 812 | fn | resolveCachedLiteralPrefixProviders | (private) | `const resolveCachedLiteralPrefixProviders = asy...` |
| 822 | fn | resolveConfiguredDisplayLabel | (private) | `const resolveConfiguredDisplayLabel = async () ...` |
| 1136 | fn | promptModelAllowlist | pub | `export async function promptModelAllowlist(para...` |
| 1296 | fn | loadProviderStaticCatalogRows | (private) | `const loadProviderStaticCatalogRows = () =>` |
| 1388 | fn | allowedCatalog | (private) | `const allowedCatalog = (` |
| 1491 | fn | applyModelAllowlist | pub | `export function applyModelAllowlist(` |
| 1610 | fn | applyModelFallbacksFromSelection | pub | `export function applyModelFallbacksFromSelection(` |
| 1713 | fn | mergeFallbackSelection | (private) | `function mergeFallbackSelection(params: {` |

## Public API

### `promptDefaultModel`

```
export async function promptDefaultModel(
```

**Line:** 782 | **Kind:** fn

### `promptModelAllowlist`

```
export async function promptModelAllowlist(params: {
```

**Line:** 1136 | **Kind:** fn

### `applyModelAllowlist`

```
export function applyModelAllowlist(
```

**Line:** 1491 | **Kind:** fn

### `applyModelFallbacksFromSelection`

```
export function applyModelFallbacksFromSelection(
```

**Line:** 1610 | **Kind:** fn
