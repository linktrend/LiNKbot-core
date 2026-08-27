# src/agents/models.profiles.live.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2386
- **Language:** TypeScript
- **Symbols:** 57
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 113 | type | OllamaRuntimeApi | (private) | - |
| 122 | fn | parseCsvFilter | (private) | `function parseCsvFilter(raw?: string): Set<stri...` |
| 126 | fn | parseProviderFilter | (private) | `function parseProviderFilter(raw?: string): Set...` |
| 130 | fn | parseModelFilter | (private) | `function parseModelFilter(raw?: string): Set<st...` |
| 134 | fn | parseExplicitLiveModelRefs | (private) | `function parseExplicitLiveModelRefs(` |
| 164 | fn | formatExplicitLiveModelRef | (private) | `function formatExplicitLiveModelRef(ref: { prov...` |
| 168 | fn | filterLiveModelRefsByProvider | (private) | `function filterLiveModelRefsByProvider(` |
| 181 | fn | findUnmatchedExplicitLiveModelRefs | (private) | `function findUnmatchedExplicitLiveModelRefs(par...` |
| 203 | fn | resolveLiveProviderDiscoveryProviderIds | (private) | `function resolveLiveProviderDiscoveryProviderId...` |
| 227 | fn | resolveLiveProviderDiscoveryPluginIds | (private) | `function resolveLiveProviderDiscoveryPluginIds(...` |
| 251 | fn | applyLiveProviderDiscoveryPluginCompat | (private) | `function applyLiveProviderDiscoveryPluginCompat...` |
| 266 | fn | enableLiveProviderPlugins | (private) | `function enableLiveProviderPlugins(` |
| 293 | fn | applyLiveOllamaProviderEnvCompat | (private) | `function applyLiveOllamaProviderEnvCompat(param...` |
| 335 | fn | ensureLiveProviderApisRegistered | (private) | `async function ensureLiveProviderApisRegistered...` |
| 360 | fn | createLiveOllamaRuntimeStreamFn | (private) | `function createLiveOllamaRuntimeStreamFn(params: {` |
| 374 | fn | readConfiguredOllamaBaseUrl | (private) | `function readConfiguredOllamaBaseUrl(provider: ...` |
| 378 | fn | resolveLiveOllamaProviderApiKey | (private) | `function resolveLiveOllamaProviderApiKey(params: {` |
| 395 | fn | isOllamaRemoteApiKeyReference | (private) | `function isOllamaRemoteApiKeyReference(value: S...` |
| 408 | fn | readStringProperty | (private) | `function readStringProperty(value: unknown, key...` |
| 416 | fn | isLocalOllamaBaseUrl | (private) | `function isLocalOllamaBaseUrl(baseUrl: string):...` |
| 434 | fn | resolveLiveOllamaBaseUrl | (private) | `function resolveLiveOllamaBaseUrl(model: Pick<M...` |
| 442 | fn | isLiveLocalOllamaModel | (private) | `function isLiveLocalOllamaModel(` |
| 452 | fn | canReuseConfiguredLocalOllamaApiKey | (private) | `function canReuseConfiguredLocalOllamaApiKey(` |
| 471 | fn | canonicalOllamaCredentialBaseUrl | (private) | `function canonicalOllamaCredentialBaseUrl(baseU...` |
| 487 | fn | resolveLiveModelApiKeyInfo | (private) | `async function resolveLiveModelApiKeyInfo(param...` |
| 522 | fn | isIpv4PrivateRange | (private) | `function isIpv4PrivateRange(host: string): bool...` |
| 540 | fn | isIpv6LocalRange | (private) | `function isIpv6LocalRange(host: string): boolean {` |
| 545 | fn | logProgress | (private) | `function logProgress(message: string): void {` |
| 549 | fn | formatElapsedSeconds | (private) | `function formatElapsedSeconds(ms: number): stri...` |
| 553 | fn | withLiveHeartbeat | (private) | `async function withLiveHeartbeat<T>(operation: ...` |
| 571 | fn | withLiveStageTimeout | (private) | `async function withLiveStageTimeout<T>(` |
| 597 | fn | formatFailurePreview | (private) | `function formatFailurePreview(` |
| 614 | fn | formatSkippedPreview | (private) | `function formatSkippedPreview(` |
| 624 | fn | isGoogleModelNotFoundError | (private) | `function isGoogleModelNotFoundError(err: unknow...` |
| 670 | fn | isChatGPTUsageLimitErrorMessage | (private) | `function isChatGPTUsageLimitErrorMessage(raw: s...` |
| 675 | fn | isRefreshTokenReused | (private) | `function isRefreshTokenReused(raw: string): boo...` |
| 679 | fn | isAccountIdExtractionError | (private) | `function isAccountIdExtractionError(raw: string...` |
| 683 | fn | isInstructionsRequiredError | (private) | `function isInstructionsRequiredError(raw: strin...` |
| 687 | fn | isOpenAiCodexHtmlInterruption | (private) | `function isOpenAiCodexHtmlInterruption(raw: str...` |
| 695 | fn | isOllamaUnavailableErrorMessage | (private) | `function isOllamaUnavailableErrorMessage(raw: s...` |
| 704 | fn | isAudioOnlyModelErrorMessage | (private) | `function isAudioOnlyModelErrorMessage(raw: stri...` |
| 708 | fn | isUnsupportedReasoningEffortErrorMessage | (private) | `function isUnsupportedReasoningEffortErrorMessa...` |
| 716 | fn | isUnsupportedThinkingToggleErrorMessage | (private) | `function isUnsupportedThinkingToggleErrorMessag...` |
| 720 | fn | isUnsupportedPlanErrorMessage | (private) | `function isUnsupportedPlanErrorMessage(raw: str...` |
| 724 | fn | isOpenRouterOpaqueBadRequestErrorMessage | (private) | `function isOpenRouterOpaqueBadRequestErrorMessa...` |
| 763 | fn | toInt | (private) | `function toInt(value: string | undefined, fallb...` |
| 772 | fn | resolveLiveModelConcurrency | (private) | `function resolveLiveModelConcurrency(raw?: stri...` |
| 787 | fn | resolveLiveModelsJsonTimeoutMs | (private) | `function resolveLiveModelsJsonTimeoutMs(` |
| 1360 | fn | resolveTestReasoning | (private) | `function resolveTestReasoning(` |
| 1385 | fn | resolveLiveSystemPrompt | (private) | `function resolveLiveSystemPrompt(model: Model):...` |
| 1419 | fn | completeSimpleWithTimeout | (private) | `async function completeSimpleWithTimeout<TApi e...` |
| 1463 | fn | requireToolChoicePayload | (private) | `function requireToolChoicePayload(payload: unkn...` |
| 1491 | fn | completeOkWithRetry | (private) | `async function completeOkWithRetry(params: {` |
| 1497 | fn | runOnce | (private) | `const runOnce = async (maxTokens: number) => {` |
| 1534 | fn | isDeepSeekV4Model | (private) | `function isDeepSeekV4Model(model: Pick<Model, "...` |
| 1541 | fn | runDeepSeekV4ReplayRegression | (private) | `async function runDeepSeekV4ReplayRegression(pa...` |
| 1630 | fn | runExtraTurnProbes | (private) | `async function runExtraTurnProbes(params: {` |
