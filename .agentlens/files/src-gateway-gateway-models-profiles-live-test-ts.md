# src/gateway/gateway-models.profiles.live.test.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 5926
- **Language:** TypeScript
- **Symbols:** 148
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 73 | type | ProviderThinkingModelCompat | (private) | - |
| 106 | type | GatewayLiveThinkingLevel | (private) | - |
| 166 | fn | parseFilter | (private) | `function parseFilter(raw?: string): Set<string>...` |
| 181 | fn | providerFilterList | (private) | `function providerFilterList(): string[] | undef...` |
| 187 | fn | listHighSignalLiveModelProviders | (private) | `function listHighSignalLiveModelProviders(): st...` |
| 193 | fn | providerListFromExplicitModelFilter | (private) | `function providerListFromExplicitModelFilter(pa...` |
| 213 | fn | providerScopedModelRegistryProviders | (private) | `function providerScopedModelRegistryProviders(p...` |
| 241 | fn | filterGatewayLiveModelRefsByProvider | (private) | `function filterGatewayLiveModelRefsByProvider(` |
| 254 | fn | resolvePrioritizedGatewayLiveModelRefs | (private) | `function resolvePrioritizedGatewayLiveModelRefs...` |
| 272 | fn | isWantedSmallGatewayLiveModel | (private) | `function isWantedSmallGatewayLiveModel(params: {` |
| 282 | fn | shouldSuppressGatewayLiveOllamaWarnings | (private) | `function shouldSuppressGatewayLiveOllamaWarning...` |
| 286 | fn | withSuppressedGatewayLiveWarnings | (private) | `async function withSuppressedGatewayLiveWarning...` |
| 304 | fn | toInt | (private) | `function toInt(value: string | undefined, fallb...` |
| 313 | fn | resolveGatewayLiveSetupTimeoutMs | (private) | `function resolveGatewayLiveSetupTimeoutMs(` |
| 319 | fn | resolveGatewayLiveMaxModels | (private) | `function resolveGatewayLiveMaxModels(): number {` |
| 337 | fn | resolveGatewayLiveSuiteTimeoutMs | (private) | `function resolveGatewayLiveSuiteTimeoutMs(maxMo...` |
| 352 | fn | resolveGatewayLiveModelTimeoutMs | (private) | `function resolveGatewayLiveModelTimeoutMs(` |
| 361 | fn | resolveGatewayLiveSessionControlTimeoutMs | (private) | `function resolveGatewayLiveSessionControlTimeou...` |
| 368 | fn | resolveGatewayLiveTranscriptTimeoutMs | (private) | `function resolveGatewayLiveTranscriptTimeoutMs(` |
| 375 | fn | resolveGatewayLiveAgentRunTimeoutMs | (private) | `function resolveGatewayLiveAgentRunTimeoutMs(` |
| 385 | fn | resolveGatewayLiveAgentWaitTimeoutMs | (private) | `function resolveGatewayLiveAgentWaitTimeoutMs(` |
| 393 | fn | resolveGatewayLiveProviderTimeoutSeconds | (private) | `function resolveGatewayLiveProviderTimeoutSeconds(` |
| 399 | fn | isGatewayLiveProbeTimeout | (private) | `function isGatewayLiveProbeTimeout(error: strin...` |
| 403 | fn | isGatewayLiveModelTimeout | (private) | `function isGatewayLiveModelTimeout(error: strin...` |
| 411 | fn | assertGatewayLiveDidNotSkipAllDueToTimeout | (private) | `function assertGatewayLiveDidNotSkipAllDueToTim...` |
| 429 | fn | assertGatewayLiveCompletedSomeModels | (private) | `function assertGatewayLiveCompletedSomeModels(p...` |
| 450 | fn | formatGatewayLiveFilterSet | (private) | `function formatGatewayLiveFilterSet(filter: Rea...` |
| 457 | fn | assertGatewayLiveSelectedSomeModels | (private) | `function assertGatewayLiveSelectedSomeModels(pa...` |
| 485 | fn | assertGatewayLiveHasRunnableCandidates | (private) | `function assertGatewayLiveHasRunnableCandidates...` |
| 499 | fn | failGatewayLiveStartupCoverage | (private) | `function failGatewayLiveStartupCoverage(params:...` |
| 505 | fn | withGatewayLiveTimeout | (private) | `async function withGatewayLiveTimeout<T>(params: {` |
| 547 | fn | withGatewayLiveSetupTimeout | (private) | `async function withGatewayLiveSetupTimeout<T>(` |
| 560 | fn | withGatewayLiveProbeTimeout | (private) | `async function withGatewayLiveProbeTimeout<T>(o...` |
| 569 | fn | withGatewayLiveSessionControlTimeout | (private) | `async function withGatewayLiveSessionControlTim...` |
| 581 | fn | withGatewayLiveModelTimeout | (private) | `async function withGatewayLiveModelTimeout<T>(o...` |
| 590 | fn | logProgress | (private) | `function logProgress(message: string): void {` |
| 594 | fn | enterProductionEnvForLiveRun | (private) | `function enterProductionEnvForLiveRun() {` |
| 606 | fn | restoreProductionEnvForLiveRun | (private) | `function restoreProductionEnvForLiveRun(previou...` |
| 628 | fn | restoreOptionalEnv | (private) | `function restoreOptionalEnv(key: string, value:...` |
| 636 | fn | formatFailurePreview | (private) | `function formatFailurePreview(` |
| 653 | fn | assertNoReasoningTags | (private) | `function assertNoReasoningTags(params: {` |
| 670 | fn | isMeaningful | (private) | `function isMeaningful(text: string): boolean {` |
| 688 | fn | hasEventLoopPromptKeywords | (private) | `function hasEventLoopPromptKeywords(text: strin...` |
| 692 | fn | shouldStripAssistantScaffoldingForLiveModel | (private) | `function shouldStripAssistantScaffoldingForLive...` |
| 717 | fn | maybeStripAssistantScaffoldingForLiveModel | (private) | `function maybeStripAssistantScaffoldingForLiveM...` |
| 724 | fn | stripKnownLiveReasoningWrappers | (private) | `function stripKnownLiveReasoningWrappers(text: ...` |
| 731 | fn | shouldSkipExecReadNonceMissForLiveModel | (private) | `function shouldSkipExecReadNonceMissForLiveMode...` |
| 746 | fn | shouldSkipEmptyResponseForLiveModel | (private) | `function shouldSkipEmptyResponseForLiveModel(pa...` |
| 1165 | fn | restoreEnvValue | (private) | `function restoreEnvValue(name: string, value: s...` |
| 1207 | fn | createGatewayLiveTestModel | (private) | `function createGatewayLiveTestModel(provider: s...` |
| 1227 | fn | resolveExplicitLiveFallbackApi | (private) | `function resolveExplicitLiveFallbackApi(provide...` |
| 1233 | fn | resolveDefaultBedrockLiveBaseUrl | (private) | `function resolveDefaultBedrockLiveBaseUrl(` |
| 1249 | fn | resolveBedrockDiscoveryRegion | (private) | `function resolveBedrockDiscoveryRegion(cfg: Ope...` |
| 1262 | fn | isRecord | (private) | `function isRecord(value: unknown): value is Rec...` |
| 1266 | fn | resolveAwsProfileRegion | (private) | `function resolveAwsProfileRegion(env: NodeJS.Pr...` |
| 1288 | fn | resolveAwsSharedFilePath | (private) | `function resolveAwsSharedFilePath(` |
| 1306 | fn | readAwsProfileRegionFromFile | (private) | `function readAwsProfileRegionFromFile(` |
| 1321 | fn | parseAwsProfileRegion | (private) | `function parseAwsProfileRegion(` |
| 1354 | fn | stripAwsSharedIniComment | (private) | `function stripAwsSharedIniComment(value: string...` |
| 1358 | fn | normalizeAwsProfileSection | (private) | `function normalizeAwsProfileSection(section: st...` |
| 1369 | fn | normalizeOptionalEnvValue | (private) | `function normalizeOptionalEnvValue(value: strin...` |
| 1383 | fn | createExplicitLiveFallbackModel | (private) | `function createExplicitLiveFallbackModel(provid...` |
| 1391 | fn | createGatewayLiveTestRegistry | (private) | `function createGatewayLiveTestRegistry(override...` |
| 2315 | fn | isGoogleModelNotFoundText | (private) | `function isGoogleModelNotFoundText(text: string...` |
| 2335 | fn | isAnthropicModelUnavailableDrift | (private) | `function isAnthropicModelUnavailableDrift(raw: ...` |
| 2346 | fn | isGoogleishProvider | (private) | `function isGoogleishProvider(provider: string):...` |
| 2350 | fn | isRefreshTokenReused | (private) | `function isRefreshTokenReused(error: string): b...` |
| 2354 | fn | isAccountIdExtractionError | (private) | `function isAccountIdExtractionError(error: stri...` |
| 2358 | fn | isChatGPTUsageLimitErrorMessage | (private) | `function isChatGPTUsageLimitErrorMessage(raw: s...` |
| 2363 | fn | isOllamaUnavailableErrorMessage | (private) | `function isOllamaUnavailableErrorMessage(raw: s...` |
| 2372 | fn | isAudioOnlyModelErrorMessage | (private) | `function isAudioOnlyModelErrorMessage(raw: stri...` |
| 2376 | fn | isUnsupportedReasoningEffortErrorMessage | (private) | `function isUnsupportedReasoningEffortErrorMessa...` |
| 2383 | fn | isUnsupportedThinkingToggleErrorMessage | (private) | `function isUnsupportedThinkingToggleErrorMessag...` |
| 2387 | fn | isInstructionsRequiredError | (private) | `function isInstructionsRequiredError(error: str...` |
| 2391 | fn | isOpenAIReasoningSequenceError | (private) | `function isOpenAIReasoningSequenceError(error: ...` |
| 2396 | fn | isToolNonceRefusal | (private) | `function isToolNonceRefusal(error: string): boo...` |
| 2400 | fn | isToolNonceProbeMiss | (private) | `function isToolNonceProbeMiss(error: string): b...` |
| 2405 | fn | isTransientToolReadProbeErrorForLiveModel | (private) | `function isTransientToolReadProbeErrorForLiveMo...` |
| 2421 | fn | isExecReadNonceProbeMiss | (private) | `function isExecReadNonceProbeMiss(error: string...` |
| 2425 | fn | isPromptProbeMiss | (private) | `function isPromptProbeMiss(error: string): bool...` |
| 2430 | fn | shouldSkipToolNonceProbeMissForLiveModel | (private) | `function shouldSkipToolNonceProbeMissForLiveMod...` |
| 2457 | fn | shouldRetryToolNonceProbeMissForLiveModel | (private) | `function shouldRetryToolNonceProbeMissForLiveMo...` |
| 2617 | fn | isMissingProfileError | (private) | `function isMissingProfileError(error: string): ...` |
| 2621 | fn | isEmptyStreamText | (private) | `function isEmptyStreamText(text: string): boole...` |
| 2628 | fn | buildAnthropicRefusalToken | (private) | `function buildAnthropicRefusalToken(): string {` |
| 2633 | fn | runAnthropicRefusalProbe | (private) | `async function runAnthropicRefusalProbe(params: {` |
| 2681 | fn | randomImageProbeCode | (private) | `function randomImageProbeCode(len = 6): string {` |
| 2694 | fn | editDistance | (private) | `function editDistance(a: string, b: string): nu...` |
| 2726 | fn | getFreeGatewayPort | (private) | `async function getFreeGatewayPort(): Promise<nu...` |
| 2732 | fn | ok | (private) | `const ok = (await Promise.all(candidates.map((c...` |
| 2742 | fn | sleep | (private) | `async function sleep(ms: number): Promise<void> {` |
| 2748 | fn | sanitizeAuthProfileStoreForLiveGateway | (private) | `function sanitizeAuthProfileStoreForLiveGateway...` |
| 2800 | fn | connectClient | (private) | `async function connectClient(params: { url: str...` |
| 2830 | fn | connectClientOnce | (private) | `async function connectClientOnce(params: { url:...` |
| 2834 | fn | stop | (private) | `const stop = (err?: Error, nextClient?: Gateway...` |
| 2869 | fn | isRetryableGatewayConnectError | (private) | `function isRetryableGatewayConnectError(error: ...` |
| 2927 | fn | extractTranscriptMessageText | (private) | `function extractTranscriptMessageText(message: ...` |
| 2957 | type | SessionAssistantEntry | (private) | - |
| 2962 | fn | readSessionMessagesForLiveProbe | (private) | `async function readSessionMessagesForLiveProbe(...` |
| 2981 | fn | sessionMessagesAfterNextUserTurn | (private) | `function sessionMessagesAfterNextUserTurn(` |
| 2999 | fn | matchesLiveProbeUserText | (private) | `function matchesLiveProbeUserText(actual: strin...` |
| 3013 | fn | sessionAssistantEntriesForLiveProbe | (private) | `function sessionAssistantEntriesForLiveProbe(` |
| 3038 | fn | readSessionAssistantEntries | (private) | `async function readSessionAssistantEntries(` |
| 3054 | fn | readSessionAssistantTexts | (private) | `async function readSessionAssistantTexts(` |
| 3065 | fn | assertGatewayLiveSessionSelection | (private) | `async function assertGatewayLiveSessionSelectio...` |
| 3092 | fn | assertGatewayLiveTranscriptModelIdentity | (private) | `async function assertGatewayLiveTranscriptModel...` |
| 3109 | fn | verifyGatewayUltraSubagentHandoff | (private) | `async function verifyGatewayUltraSubagentHandof...` |
| 3205 | fn | latestAssistantTextAfterBaseline | (private) | `function latestAssistantTextAfterBaseline(` |
| 3215 | fn | latestTerminalAssistantTextAfterBaseline | (private) | `function latestTerminalAssistantTextAfterBaseline(` |
| 3333 | fn | waitForSessionAssistantText | (private) | `async function waitForSessionAssistantText(para...` |
| 3378 | fn | formatGatewayLiveAgentWaitFailure | (private) | `function formatGatewayLiveAgentWaitFailure(para...` |
| 3409 | fn | isGatewayAgentWaitCompletedWithoutReply | (private) | `function isGatewayAgentWaitCompletedWithoutRepl...` |
| 3418 | fn | waitForGatewayAgentRun | (private) | `async function waitForGatewayAgentRun(params: {` |
| 3449 | fn | requestGatewayAgentText | (private) | `async function requestGatewayAgentText(params: {` |
| 3556 | type | GatewayModelSuiteParams | (private) | - |
| 3567 | type | OpenAIUltraWireObservation | (private) | - |
| 3572 | type | OpenAIUltraWireCapture | (private) | - |
| 3578 | fn | isOpenAIGpt56UltraTarget | (private) | `function isOpenAIGpt56UltraTarget(model: Model,...` |
| 3588 | fn | readOpenAIUltraWireObservation | (private) | `function readOpenAIUltraWireObservation(body: B...` |
| 3605 | fn | startOpenAIUltraWireCapture | (private) | `async function startOpenAIUltraWireCapture(` |
| 3618 | fn | abortUpstream | (private) | `const abortUpstream = () => upstreamAbort.abort();` |
| 3619 | fn | abortOnPrematureResponseClose | (private) | `const abortOnPrematureResponseClose = () => {` |
| 3720 | fn | finish | (private) | `const finish = (error?: Error) => {` |
| 3745 | fn | listenOnLoopbackForUltraWireTest | (private) | `async function listenOnLoopbackForUltraWireTest(` |
| 3759 | fn | closeUltraWireTestServer | (private) | `async function closeUltraWireTestServer(` |
| 3847 | fn | buildOpenAIUltraWireProviderOverride | (private) | `function buildOpenAIUltraWireProviderOverride(p...` |
| 3871 | fn | assertOpenAIUltraWireEffort | (private) | `function assertOpenAIUltraWireEffort(params: {` |
| 3891 | type | LiveModelRegistry | (private) | - |
| 3893 | fn | toGatewayLiveModel | (private) | `function toGatewayLiveModel(params: {` |
| 3927 | fn | loadProviderScopedConfiguredModels | (private) | `async function loadProviderScopedConfiguredMode...` |
| 3969 | fn | loadProviderScopedModels | (private) | `async function loadProviderScopedModels(params: {` |
| 3976 | fn | createStaticLiveModelRegistry | (private) | `function createStaticLiveModelRegistry(models: ...` |
| 3999 | fn | loadAuthBackedLiveModelRegistry | (private) | `async function loadAuthBackedLiveModelRegistry(...` |
| 4044 | fn | toLiveModelConfig | (private) | `function toLiveModelConfig(model: Model): NonNu...` |
| 4059 | fn | mergeLiveProviderConfig | (private) | `function mergeLiveProviderConfig(params: {` |
| 4094 | fn | buildLiveProviderConfigs | (private) | `function buildLiveProviderConfigs(params: {` |
| 4111 | fn | buildLiveProviderConfig | (private) | `function buildLiveProviderConfig(params: {` |
| 4136 | fn | parseExplicitLiveModelRef | (private) | `function parseExplicitLiveModelRef(` |
| 4161 | fn | resolveExplicitLiveModelCandidates | (private) | `function resolveExplicitLiveModelCandidates(par...` |
| 4195 | fn | resolveGatewayLiveModelThinkingLevel | (private) | `function resolveGatewayLiveModelThinkingLevel(p...` |
| 4253 | fn | getProviderThinkingModelCompat | (private) | `function getProviderThinkingModelCompat(model: ...` |
| 4276 | fn | resolveGatewayLiveThinkingLevel | (private) | `function resolveGatewayLiveThinkingLevel(params...` |
| 4284 | fn | resolveGatewayLiveRequestedModels | (private) | `async function resolveGatewayLiveRequestedModel...` |
| 4323 | fn | isGatewayLiveThinkingLevel | (private) | `function isGatewayLiveThinkingLevel(value: stri...` |
| 4327 | fn | buildLiveGatewayConfig | (private) | `function buildLiveGatewayConfig(params: {` |
| 4401 | fn | sanitizeAuthConfig | (private) | `async function sanitizeAuthConfig(params: {` |
| 4452 | fn | buildMinimaxProviderOverride | (private) | `function buildMinimaxProviderOverride(params: {` |
| 4468 | fn | runGatewayModelSuite | (private) | `async function runGatewayModelSuite(params: Gat...` |
