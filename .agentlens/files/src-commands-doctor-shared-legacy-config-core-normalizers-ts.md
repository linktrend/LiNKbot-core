# src/commands/doctor/shared/legacy-config-core-normalizers.ts

[← Back to Module](../modules/src-commands-doctor-shared/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1376
- **Language:** TypeScript
- **Symbols:** 36
- **Public symbols:** 8

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 29 | fn | normalizeLegacyBrowserConfig | pub | `export function normalizeLegacyBrowserConfig(` |
| 118 | fn | seedMissingDefaultAccountsFromSingleAccountBase | pub | `export function seedMissingDefaultAccountsFromS...` |
| 212 | type | ModelProviderEntry | (private) | - |
| 215 | type | ModelsConfigPatch | (private) | - |
| 216 | type | ModelDefinitionEntry | (private) | - |
| 217 | type | SelectedRuntimeRef | (private) | - |
| 226 | fn | resolveLegacyWholeAgentRuntimePolicy | (private) | `function resolveLegacyWholeAgentRuntimePolicy(r...` |
| 252 | fn | migratedRuntimeRequiresPolicy | (private) | `function migratedRuntimeRequiresPolicy(legacyPr...` |
| 256 | fn | mergeModelEntry | (private) | `function mergeModelEntry(legacyEntry: unknown, ...` |
| 263 | fn | normalizeLegacyCodexCliAgentRuntimePolicy | (private) | `function normalizeLegacyCodexCliAgentRuntimePol...` |
| 279 | fn | normalizeLegacyRuntimeAgentModelConfig | (private) | `function normalizeLegacyRuntimeAgentModelConfig(` |
| 376 | fn | runtimeNeedsExplicitModelPolicy | (private) | `function runtimeNeedsExplicitModelPolicy(runtim...` |
| 380 | fn | modelEntryWithRuntimePolicy | (private) | `function modelEntryWithRuntimePolicy(entry: unk...` |
| 394 | fn | mergeModelEntryWithRuntimePolicy | (private) | `function mergeModelEntryWithRuntimePolicy(` |
| 404 | fn | normalizeLegacyRuntimeAllowlistModels | (private) | `function normalizeLegacyRuntimeAllowlistModels(` |
| 460 | fn | ensureSelectedModelRuntimePolicies | (private) | `function ensureSelectedModelRuntimePolicies(` |
| 483 | fn | selectedCanonicalModelRefsForRuntimePolicy | (private) | `function selectedCanonicalModelRefsForRuntimePo...` |
| 490 | fn | addRef | (private) | `const addRef = (rawRef: unknown) => {` |
| 521 | fn | normalizeLegacyCodexCliRuntimePinsInModels | (private) | `function normalizeLegacyCodexCliRuntimePinsInMo...` |
| 548 | fn | normalizeLegacyRuntimeAgentContainer | (private) | `function normalizeLegacyRuntimeAgentContainer(` |
| 621 | fn | normalizeLegacyCodexCliProviderRuntimePins | (private) | `function normalizeLegacyCodexCliProviderRuntime...` |
| 689 | fn | normalizeLegacyRuntimeModelRefs | pub | `export function normalizeLegacyRuntimeModelRefs(` |
| 750 | fn | normalizeLegacyOpenAICodexModelsAddMetadata | pub | `export function normalizeLegacyOpenAICodexModel...` |
| 817 | fn | normalizeLegacyOpenAIModelProviderApi | pub | `export function normalizeLegacyOpenAIModelProvi...` |
| 889 | fn | normalizeLegacyNanoBananaSkill | pub | `export function normalizeLegacyNanoBananaSkill(` |
| 1025 | fn | normalizeConfiguredPositiveInteger | (private) | `function normalizeConfiguredPositiveInteger(val...` |
| 1032 | fn | resolveConfiguredOllamaModelNumCtxBudget | (private) | `function resolveConfiguredOllamaModelNumCtxBudg...` |
| 1060 | fn | resolveConfiguredOllamaProviderNumCtxBudget | (private) | `function resolveConfiguredOllamaProviderNumCtxB...` |
| 1069 | fn | isNativeOllamaProviderConfig | (private) | `function isNativeOllamaProviderConfig(` |
| 1077 | fn | isNativeOllamaModelConfig | (private) | `function isNativeOllamaModelConfig(params: {` |
| 1095 | fn | hasConfiguredOllamaProviderNumCtx | (private) | `function hasConfiguredOllamaProviderNumCtx(prov...` |
| 1100 | fn | applyLegacyOllamaProviderNumCtxParams | (private) | `function applyLegacyOllamaProviderNumCtxParams(...` |
| 1135 | fn | normalizeLegacyOllamaNativeNumCtxParams | pub | `export function normalizeLegacyOllamaNativeNumC...` |
| 1146 | type | ProviderConfigMap | (private) | - |
| 1248 | fn | normalizeLegacyMistralModelCost | (private) | `function normalizeLegacyMistralModelCost<T exte...` |
| 1278 | fn | normalizeLegacyMistralModelDefaults | pub | `export function normalizeLegacyMistralModelDefa...` |

## Public API

### `normalizeLegacyBrowserConfig`

```
export function normalizeLegacyBrowserConfig(
```

**Line:** 29 | **Kind:** fn

### `seedMissingDefaultAccountsFromSingleAccountBase`

```
export function seedMissingDefaultAccountsFromSingleAccountBase(
```

**Line:** 118 | **Kind:** fn

### `normalizeLegacyRuntimeModelRefs`

```
export function normalizeLegacyRuntimeModelRefs(
```

**Line:** 689 | **Kind:** fn

### `normalizeLegacyOpenAICodexModelsAddMetadata`

```
export function normalizeLegacyOpenAICodexModelsAddMetadata(
```

**Line:** 750 | **Kind:** fn

### `normalizeLegacyOpenAIModelProviderApi`

```
export function normalizeLegacyOpenAIModelProviderApi(
```

**Line:** 817 | **Kind:** fn

### `normalizeLegacyNanoBananaSkill`

```
export function normalizeLegacyNanoBananaSkill(
```

**Line:** 889 | **Kind:** fn

### `normalizeLegacyOllamaNativeNumCtxParams`

```
export function normalizeLegacyOllamaNativeNumCtxParams(
```

**Line:** 1135 | **Kind:** fn

### `normalizeLegacyMistralModelDefaults`

```
export function normalizeLegacyMistralModelDefaults(
```

**Line:** 1278 | **Kind:** fn
