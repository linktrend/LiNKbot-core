# src/agents/embedded-agent-runner/extra-params.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1180
- **Language:** TypeScript
- **Symbols:** 47
- **Public symbols:** 5

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 46 | fn | requireBaseStreamFn | (private) | `function requireBaseStreamFn(streamFn: StreamFn...` |
| 99 | fn | resolveExtraParams | pub | `export function resolveExtraParams(params: {` |
| 166 | type | CacheRetentionStreamOptions | (private) | - |
| 176 | type | SupportedTransport | (private) | - |
| 178 | fn | resolveSupportedTransport | (private) | `function resolveSupportedTransport(value: unkno...` |
| 182 | fn | hasExplicitTransportSetting | (private) | `function hasExplicitTransportSetting(settings: ...` |
| 186 | fn | clearPreparedExtraParamsCache | (private) | `function clearPreparedExtraParamsCache(): void {` |
| 190 | fn | fingerprintPreparedExtraParamsModel | (private) | `function fingerprintPreparedExtraParamsModel(mo...` |
| 215 | fn | resolvePreparedExtraParamsCacheKey | (private) | `function resolvePreparedExtraParamsCacheKey(par...` |
| 242 | fn | resolvePreparedExtraParams | pub | `export function resolvePreparedExtraParams(para...` |
| 355 | fn | sanitizeExtraParamsRecord | (private) | `function sanitizeExtraParamsRecord(` |
| 368 | fn | stripRequestScopedExtraParams | (private) | `function stripRequestScopedExtraParams(` |
| 380 | fn | hasRequestScopedExtraParams | (private) | `function hasRequestScopedExtraParams(value: Rec...` |
| 387 | fn | hasFunctionExtraParamValue | (private) | `function hasFunctionExtraParamValue(value: Reco...` |
| 390 | fn | shouldApplyDefaultOpenAIGptRuntimeParams | (private) | `function shouldApplyDefaultOpenAIGptRuntimePara...` |
| 400 | fn | applyDefaultOpenAIGptRuntimeParams | (private) | `function applyDefaultOpenAIGptRuntimeParams(` |
| 418 | fn | resolveAgentTransportOverride | pub | `export function resolveAgentTransportOverride(p...` |
| 430 | fn | resolveExplicitSettingsTransport | pub | `export function resolveExplicitSettingsTranspor...` |
| 445 | fn | normalizeStopSequences | (private) | `function normalizeStopSequences(value: unknown)...` |
| 456 | fn | createStreamFnWithExtraParams | (private) | `function createStreamFnWithExtraParams(` |
| 591 | fn | resolveAliasedParamValue | (private) | `function resolveAliasedParamValue(` |
| 599 | fn | resolveAliasedParamValueFromKeys | (private) | `function resolveAliasedParamValueFromKeys(` |
| 621 | fn | applyCanonicalAliasedParamValue | (private) | `function applyCanonicalAliasedParamValue(params: {` |
| 637 | fn | canonicalizeOpenRouterResponseCacheParams | (private) | `function canonicalizeOpenRouterResponseCachePar...` |
| 666 | fn | createParallelToolCallsWrapper | (private) | `function createParallelToolCallsWrapper(` |
| 684 | fn | shouldStripOpenAICompletionsStore | (private) | `function shouldStripOpenAICompletionsStore(mode...` |
| 703 | fn | createOpenAICompletionsStoreCompatWrapper | (private) | `function createOpenAICompletionsStoreCompatWrap...` |
| 715 | fn | sanitizeExtraBodyRecord | (private) | `function sanitizeExtraBodyRecord(value: Record<...` |
| 723 | fn | resolveExtraBodyParam | (private) | `function resolveExtraBodyParam(rawExtraBody: un...` |
| 736 | fn | resolveChatTemplateKwargsParam | (private) | `function resolveChatTemplateKwargsParam(` |
| 756 | fn | createOpenAICompletionsChatTemplateKwargsWrapper | (private) | `function createOpenAICompletionsChatTemplateKwa...` |
| 779 | fn | createOpenAICompletionsExtraBodyWrapper | (private) | `function createOpenAICompletionsExtraBodyWrapper(` |
| 798 | type | ApplyExtraParamsContext | (private) | - |
| 812 | fn | applyPrePluginStreamWrappers | (private) | `function applyPrePluginStreamWrappers(ctx: Appl...` |
| 844 | fn | applyPostPluginStreamWrappers | (private) | `function applyPostPluginStreamWrappers(` |
| 944 | fn | normalizeDeepSeekV4CandidateId | (private) | `function normalizeDeepSeekV4CandidateId(modelId...` |
| 954 | fn | isDeepSeekV4OpenAICompatibleModel | (private) | `function isDeepSeekV4OpenAICompatibleModel(mode...` |
| 958 | fn | isDeepSeekV4OpenAICompletionsModel | (private) | `function isDeepSeekV4OpenAICompletionsModel(mod...` |
| 966 | fn | isMicrosoftFoundryProviderId | (private) | `function isMicrosoftFoundryProviderId(provider:...` |
| 987 | fn | deepSeekV4NativeThinkingAllowedByCompat | (private) | `function deepSeekV4NativeThinkingAllowedByCompa...` |
| 992 | fn | resolveDeepSeekV4ThinkingFormatOverride | (private) | `function resolveDeepSeekV4ThinkingFormatOverride(` |
| 1007 | fn | createDeepSeekV4NonNativeCompatSanitizerWrapper | (private) | `function createDeepSeekV4NonNativeCompatSanitiz...` |
| 1024 | fn | shouldSanitizeDeepSeekV4NonNativeFields | (private) | `function shouldSanitizeDeepSeekV4NonNativeField...` |
| 1032 | fn | stripDeepSeekV4ReasoningContent | (private) | `function stripDeepSeekV4ReasoningContent(payloa...` |
| 1053 | fn | isMiMoReasoningOpenAICompatibleModel | (private) | `function isMiMoReasoningOpenAICompatibleModel(m...` |
| 1062 | fn | isMiMoReasoningAsVisibleTextOpenAICompatibleModel | (private) | `function isMiMoReasoningAsVisibleTextOpenAIComp...` |
| 1079 | fn | applyExtraParamsToAgent | pub | `export function applyExtraParamsToAgent(` |

## Public API

### `resolveExtraParams`

```
export function resolveExtraParams(params: {
```

**Line:** 99 | **Kind:** fn

### `resolvePreparedExtraParams`

```
export function resolvePreparedExtraParams(params: {
```

**Line:** 242 | **Kind:** fn

### `resolveAgentTransportOverride`

```
export function resolveAgentTransportOverride(params: {
```

**Line:** 418 | **Kind:** fn

### `resolveExplicitSettingsTransport`

```
export function resolveExplicitSettingsTransport(params: {
```

**Line:** 430 | **Kind:** fn

### `applyExtraParamsToAgent`

```
export function applyExtraParamsToAgent(
```

**Line:** 1079 | **Kind:** fn
