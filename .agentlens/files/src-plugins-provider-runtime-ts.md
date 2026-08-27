# src/plugins/provider-runtime.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1076
- **Language:** TypeScript
- **Symbols:** 55
- **Public symbols:** 42

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 97 | fn | matchesProviderPluginRef | (private) | `function matchesProviderPluginRef(provider: Pro...` |
| 110 | fn | resolveProviderHookRefs | (private) | `function resolveProviderHookRefs(` |
| 123 | fn | matchesAnyProviderPluginRef | (private) | `function matchesAnyProviderPluginRef(provider: ...` |
| 127 | fn | hasExplicitProviderRuntimePluginActivation | (private) | `function hasExplicitProviderRuntimePluginActiva...` |
| 151 | fn | hasConfiguredModelProvider | (private) | `function hasConfiguredModelProvider(params: {` |
| 170 | fn | resetExternalAuthFallbackWarningCacheForTest | (private) | `function resetExternalAuthFallbackWarningCacheF...` |
| 177 | fn | resolveProviderPluginsForCatalogHooks | (private) | `function resolveProviderPluginsForCatalogHooks(...` |
| 206 | fn | runProviderDynamicModel | pub | `export function runProviderDynamicModel(params: {` |
| 216 | fn | resolveProviderSystemPromptContribution | pub | `export function resolveProviderSystemPromptCont...` |
| 242 | fn | mergeProviderSystemPromptContributions | (private) | `function mergeProviderSystemPromptContributions(` |
| 264 | fn | mergeUniquePromptSections | (private) | `function mergeUniquePromptSections(...sections:...` |
| 271 | fn | transformProviderSystemPrompt | pub | `export function transformProviderSystemPrompt(p...` |
| 289 | fn | resolveProviderTextTransforms | pub | `export function resolveProviderTextTransforms(p...` |
| 302 | fn | prepareProviderDynamicModel | pub | `export async function prepareProviderDynamicMod...` |
| 312 | fn | shouldPreferProviderRuntimeResolvedModel | pub | `export function shouldPreferProviderRuntimeReso...` |
| 324 | fn | normalizeProviderResolvedModelWithPlugin | pub | `export function normalizeProviderResolvedModelW...` |
| 357 | fn | applyProviderResolvedTransportWithPlugin | pub | `export function applyProviderResolvedTransportW...` |
| 399 | fn | normalizeProviderModelIdWithPlugin | pub | `export function normalizeProviderModelIdWithPlu...` |
| 414 | fn | normalizeProviderTransportWithPlugin | pub | `export function normalizeProviderTransportWithP...` |
| 422 | fn | hasTransportChange | (private) | `const hasTransportChange = (normalized: { api?:...` |
| 456 | fn | normalizeProviderConfigWithPlugin | pub | `export function normalizeProviderConfigWithPlug...` |
| 464 | fn | hasConfigChange | (private) | `const hasConfigChange = (normalized: ModelProvi...` |
| 482 | fn | applyProviderNativeStreamingUsageCompatWithPlugin | pub | `export function applyProviderNativeStreamingUsa...` |
| 499 | fn | resolveProviderConfigApiKeyWithPlugin | pub | `export function resolveProviderConfigApiKeyWith...` |
| 519 | fn | resolveProviderReplayPolicyWithPlugin | pub | `export function resolveProviderReplayPolicyWith...` |
| 529 | fn | sanitizeProviderReplayHistoryWithPlugin | pub | `export async function sanitizeProviderReplayHis...` |
| 539 | fn | validateProviderReplayTurnsWithPlugin | pub | `export async function validateProviderReplayTur...` |
| 549 | fn | normalizeProviderToolSchemasWithPlugin | pub | `export function normalizeProviderToolSchemasWit...` |
| 565 | fn | inspectProviderToolSchemasWithPlugin | pub | `export function inspectProviderToolSchemasWithP...` |
| 581 | fn | resolveProviderReasoningOutputModeWithPlugin | pub | `export function resolveProviderReasoningOutputM...` |
| 600 | fn | resolveProviderStreamFn | pub | `export function resolveProviderStreamFn(params: {` |
| 615 | fn | resolveProviderTransportTurnStateWithPlugin | pub | `export function resolveProviderTransportTurnSta...` |
| 631 | fn | createProviderEmbeddingProvider | pub | `export async function createProviderEmbeddingPr...` |
| 641 | fn | prepareProviderRuntimeAuth | pub | `export async function prepareProviderRuntimeAut...` |
| 664 | fn | resolveProviderUsageAuthWithPlugin | pub | `export async function resolveProviderUsageAuthW...` |
| 682 | fn | resolveProviderUsageSnapshotWithPlugin | pub | `export async function resolveProviderUsageSnaps...` |
| 721 | type | ProviderUsagePluginDescriptor | pub | - |
| 727 | fn | listProviderUsagePluginDescriptors | pub | `export function listProviderUsagePluginDescript...` |
| 759 | fn | matchesProviderContextOverflowWithPlugin | pub | `export function matchesProviderContextOverflowW...` |
| 775 | fn | classifyProviderFailoverReasonWithPlugin | pub | `export function classifyProviderFailoverReasonW...` |
| 792 | fn | resolveProviderPluginsForScopedHook | (private) | `function resolveProviderPluginsForScopedHook(pa...` |
| 816 | fn | hasStructuredFailoverDescriptor | (private) | `function hasStructuredFailoverDescriptor(contex...` |
| 822 | fn | formatProviderAuthProfileApiKeyWithPlugin | pub | `export function formatProviderAuthProfileApiKey...` |
| 832 | fn | refreshProviderOAuthCredentialWithPlugin | pub | `export async function refreshProviderOAuthCrede...` |
| 842 | fn | buildProviderAuthDoctorHintWithPlugin | pub | `export async function buildProviderAuthDoctorHi...` |
| 852 | fn | resolveProviderCacheTtlEligibility | pub | `export function resolveProviderCacheTtlEligibil...` |
| 862 | fn | resolveProviderThinkingProfile | pub | `export function resolveProviderThinkingProfile(...` |
| 876 | fn | applyProviderConfigDefaultsWithPlugin | pub | `export function applyProviderConfigDefaultsWith...` |
| 890 | fn | resolveProviderModernModelRef | pub | `export function resolveProviderModernModelRef(p...` |
| 900 | fn | buildProviderMissingAuthMessageWithPlugin | pub | `export function buildProviderMissingAuthMessage...` |
| 912 | fn | buildProviderUnknownModelHintWithPlugin | pub | `export function buildProviderUnknownModelHintWi...` |
| 922 | fn | resolveProviderSyntheticAuthWithPlugin | pub | `export function resolveProviderSyntheticAuthWit...` |
| 996 | fn | resolveExternalAuthProfilesWithPlugins | pub | `export function resolveExternalAuthProfilesWith...` |
| 1034 | fn | shouldDeferProviderSyntheticProfileAuthWithPlugin | pub | `export function shouldDeferProviderSyntheticPro...` |
| 1059 | fn | augmentModelCatalogWithProviderPlugins | pub | `export async function augmentModelCatalogWithPr...` |

## Public API

### `runProviderDynamicModel`

```
export function runProviderDynamicModel(params: {
```

**Line:** 206 | **Kind:** fn

### `resolveProviderSystemPromptContribution`

```
export function resolveProviderSystemPromptContribution(params: {
```

**Line:** 216 | **Kind:** fn

### `transformProviderSystemPrompt`

```
export function transformProviderSystemPrompt(params: {
```

**Line:** 271 | **Kind:** fn

### `resolveProviderTextTransforms`

```
export function resolveProviderTextTransforms(params: {
```

**Line:** 289 | **Kind:** fn

### `prepareProviderDynamicModel`

```
export async function prepareProviderDynamicModel(params: {
```

**Line:** 302 | **Kind:** fn

### `shouldPreferProviderRuntimeResolvedModel`

```
export function shouldPreferProviderRuntimeResolvedModel(params: {
```

**Line:** 312 | **Kind:** fn

### `normalizeProviderResolvedModelWithPlugin`

```
export function normalizeProviderResolvedModelWithPlugin(params: {
```

**Line:** 324 | **Kind:** fn

### `applyProviderResolvedTransportWithPlugin`

```
export function applyProviderResolvedTransportWithPlugin(params: {
```

**Line:** 357 | **Kind:** fn

### `normalizeProviderModelIdWithPlugin`

```
export function normalizeProviderModelIdWithPlugin(params: {
```

**Line:** 399 | **Kind:** fn

### `normalizeProviderTransportWithPlugin`

```
export function normalizeProviderTransportWithPlugin(params: {
```

**Line:** 414 | **Kind:** fn

### `normalizeProviderConfigWithPlugin`

```
export function normalizeProviderConfigWithPlugin(params: {
```

**Line:** 456 | **Kind:** fn

### `applyProviderNativeStreamingUsageCompatWithPlugin`

```
export function applyProviderNativeStreamingUsageCompatWithPlugin(params: {
```

**Line:** 482 | **Kind:** fn

### `resolveProviderConfigApiKeyWithPlugin`

```
export function resolveProviderConfigApiKeyWithPlugin(params: {
```

**Line:** 499 | **Kind:** fn

### `resolveProviderReplayPolicyWithPlugin`

```
export function resolveProviderReplayPolicyWithPlugin(params: {
```

**Line:** 519 | **Kind:** fn

### `sanitizeProviderReplayHistoryWithPlugin`

```
export async function sanitizeProviderReplayHistoryWithPlugin(params: {
```

**Line:** 529 | **Kind:** fn

### `validateProviderReplayTurnsWithPlugin`

```
export async function validateProviderReplayTurnsWithPlugin(params: {
```

**Line:** 539 | **Kind:** fn

### `normalizeProviderToolSchemasWithPlugin`

```
export function normalizeProviderToolSchemasWithPlugin(params: {
```

**Line:** 549 | **Kind:** fn

### `inspectProviderToolSchemasWithPlugin`

```
export function inspectProviderToolSchemasWithPlugin(params: {
```

**Line:** 565 | **Kind:** fn

### `resolveProviderReasoningOutputModeWithPlugin`

```
export function resolveProviderReasoningOutputModeWithPlugin(params: {
```

**Line:** 581 | **Kind:** fn

### `resolveProviderStreamFn`

```
export function resolveProviderStreamFn(params: {
```

**Line:** 600 | **Kind:** fn

### `resolveProviderTransportTurnStateWithPlugin`

```
export function resolveProviderTransportTurnStateWithPlugin(params: {
```

**Line:** 615 | **Kind:** fn

### `createProviderEmbeddingProvider`

```
export async function createProviderEmbeddingProvider(params: {
```

**Line:** 631 | **Kind:** fn

### `prepareProviderRuntimeAuth`

```
export async function prepareProviderRuntimeAuth(params: {
```

**Line:** 641 | **Kind:** fn

### `resolveProviderUsageAuthWithPlugin`

```
export async function resolveProviderUsageAuthWithPlugin(params: {
```

**Line:** 664 | **Kind:** fn

### `resolveProviderUsageSnapshotWithPlugin`

```
export async function resolveProviderUsageSnapshotWithPlugin(params: {
```

**Line:** 682 | **Kind:** fn

### `listProviderUsagePluginDescriptors`

```
export function listProviderUsagePluginDescriptors(params: {
```

**Line:** 727 | **Kind:** fn

### `matchesProviderContextOverflowWithPlugin`

```
export function matchesProviderContextOverflowWithPlugin(params: {
```

**Line:** 759 | **Kind:** fn

### `classifyProviderFailoverReasonWithPlugin`

```
export function classifyProviderFailoverReasonWithPlugin(params: {
```

**Line:** 775 | **Kind:** fn

### `formatProviderAuthProfileApiKeyWithPlugin`

```
export function formatProviderAuthProfileApiKeyWithPlugin(params: {
```

**Line:** 822 | **Kind:** fn

### `refreshProviderOAuthCredentialWithPlugin`

```
export async function refreshProviderOAuthCredentialWithPlugin(params: {
```

**Line:** 832 | **Kind:** fn

### `buildProviderAuthDoctorHintWithPlugin`

```
export async function buildProviderAuthDoctorHintWithPlugin(params: {
```

**Line:** 842 | **Kind:** fn

### `resolveProviderCacheTtlEligibility`

```
export function resolveProviderCacheTtlEligibility(params: {
```

**Line:** 852 | **Kind:** fn

### `resolveProviderThinkingProfile`

```
export function resolveProviderThinkingProfile(params: {
```

**Line:** 862 | **Kind:** fn

### `applyProviderConfigDefaultsWithPlugin`

```
export function applyProviderConfigDefaultsWithPlugin(params: {
```

**Line:** 876 | **Kind:** fn

### `resolveProviderModernModelRef`

```
export function resolveProviderModernModelRef(params: {
```

**Line:** 890 | **Kind:** fn

### `buildProviderMissingAuthMessageWithPlugin`

```
export function buildProviderMissingAuthMessageWithPlugin(params: {
```

**Line:** 900 | **Kind:** fn

### `buildProviderUnknownModelHintWithPlugin`

```
export function buildProviderUnknownModelHintWithPlugin(params: {
```

**Line:** 912 | **Kind:** fn

### `resolveProviderSyntheticAuthWithPlugin`

```
export function resolveProviderSyntheticAuthWithPlugin(params: {
```

**Line:** 922 | **Kind:** fn

### `resolveExternalAuthProfilesWithPlugins`

```
export function resolveExternalAuthProfilesWithPlugins(params: {
```

**Line:** 996 | **Kind:** fn

### `shouldDeferProviderSyntheticProfileAuthWithPlugin`

```
export function shouldDeferProviderSyntheticProfileAuthWithPlugin(params: {
```

**Line:** 1034 | **Kind:** fn

### `augmentModelCatalogWithProviderPlugins`

```
export async function augmentModelCatalogWithProviderPlugins(params: {
```

**Line:** 1059 | **Kind:** fn
