# src/gateway/model-pricing-cache.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1444
- **Language:** TypeScript
- **Symbols:** 59
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 45 | type | OpenRouterPricingEntry | (private) | - |
| 50 | type | ModelListLike | (private) | - |
| 52 | type | ModelPricingManifestMetadata | (private) | - |
| 57 | type | OpenRouterModelPayload | (private) | - |
| 62 | type | GatewayModelPricingRefreshParams | (private) | - |
| 73 | type | ExternalPricingPolicy | (private) | - |
| 79 | type | ExternalPricingSourcePolicy | (private) | - |
| 87 | type | PricingModelNormalizationOptions | (private) | - |
| 104 | fn | clearRefreshTimer | (private) | `function clearRefreshTimer(): void {` |
| 112 | fn | getPricingModelNormalizationOptions | (private) | `function getPricingModelNormalizationOptions(pa...` |
| 124 | fn | listLikeFallbacks | (private) | `function listLikeFallbacks(value: ModelListLike...` |
| 136 | fn | parseNumberString | (private) | `function parseNumberString(value: unknown): num...` |
| 151 | fn | parsePricingContentLength | (private) | `function parsePricingContentLength(value: strin...` |
| 166 | fn | formatTimeoutSeconds | (private) | `function formatTimeoutSeconds(timeoutMs: number...` |
| 171 | fn | readErrorName | (private) | `function readErrorName(error: unknown): string ...` |
| 177 | fn | isTimeoutError | (private) | `function isTimeoutError(error: unknown): boolean {` |
| 184 | fn | createPricingFetchSignal | (private) | `function createPricingFetchSignal(signal: Abort...` |
| 191 | fn | formatPricingFetchFailure | (private) | `function formatPricingFetchFailure(source: "Lit...` |
| 198 | fn | toPricePerMillion | (private) | `function toPricePerMillion(value: number | null...` |
| 206 | fn | parseOpenRouterPricing | (private) | `function parseOpenRouterPricing(value: unknown)...` |
| 224 | fn | toCachedPricingTier | (private) | `function toCachedPricingTier(value: unknown): C...` |
| 250 | fn | toCachedModelPricing | (private) | `function toCachedModelPricing(` |
| 275 | fn | cancelUnreadResponseBody | (private) | `async function cancelUnreadResponseBody(respons...` |
| 281 | fn | readPricingJsonObject | (private) | `async function readPricingJsonObject(` |
| 304 | fn | fetchPricingJsonObject | (private) | `async function fetchPricingJsonObject(params: {` |
| 330 | type | LiteLLMModelEntry | (private) | - |
| 332 | type | LiteLLMTierRaw | (private) | - |
| 340 | fn | parseLiteLLMTieredPricing | (private) | `function parseLiteLLMTieredPricing(tiers: unkno...` |
| 385 | fn | parseLiteLLMPricing | (private) | `function parseLiteLLMPricing(entry: LiteLLMMode...` |
| 404 | type | LiteLLMPricingCatalog | (private) | - |
| 406 | fn | fetchLiteLLMPricingCatalog | (private) | `async function fetchLiteLLMPricingCatalog(` |
| 432 | fn | normalizeExternalPricingSource | (private) | `function normalizeExternalPricingSource(` |
| 448 | fn | normalizeExternalPricingPolicy | (private) | `function normalizeExternalPricingPolicy(` |
| 466 | fn | filterActiveManifestRegistry | (private) | `function filterActiveManifestRegistry(params: {` |
| 479 | fn | resolveModelPricingManifestMetadata | (private) | `function resolveModelPricingManifestMetadata(pa...` |
| 528 | fn | loadManifestPricingContext | (private) | `function loadManifestPricingContext(` |
| 556 | fn | applyModelIdTransform | (private) | `function applyModelIdTransform(` |
| 569 | fn | applyModelIdTransforms | (private) | `function applyModelIdTransforms(` |
| 583 | fn | canonicalizeOpenRouterLookupId | (private) | `function canonicalizeOpenRouterLookupId(` |
| 615 | fn | buildExternalCatalogCandidates | (private) | `function buildExternalCatalogCandidates(params: {` |
| 685 | fn | addResolvedModelRef | (private) | `function addResolvedModelRef(params: {` |
| 716 | fn | addModelListLike | (private) | `function addModelListLike(params: {` |
| 744 | fn | addProviderModelPair | (private) | `function addProviderModelPair(params: {` |
| 765 | fn | addConfiguredWebSearchPluginModels | (private) | `function addConfiguredWebSearchPluginModels(par...` |
| 789 | fn | isPrivateOrLoopbackHost | (private) | `function isPrivateOrLoopbackHost(hostname: stri...` |
| 814 | fn | isPrivateOrLoopbackBaseUrl | (private) | `function isPrivateOrLoopbackBaseUrl(baseUrl: st...` |
| 825 | fn | findConfiguredProviderModel | (private) | `function findConfiguredProviderModel(` |
| 844 | fn | getConfiguredModelPricing | (private) | `function getConfiguredModelPricing(` |
| 855 | fn | hasPrivateOrLoopbackConfiguredEndpoint | (private) | `function hasPrivateOrLoopbackConfiguredEndpoint(` |
| 871 | fn | shouldFetchExternalPricingForRef | (private) | `function shouldFetchExternalPricingForRef(param...` |
| 898 | fn | filterExternalPricingRefs | (private) | `function filterExternalPricingRefs(params: {` |
| 920 | fn | collectConfiguredModelPricingRefs | (private) | `function collectConfiguredModelPricingRefs(` |
| 1081 | fn | fetchOpenRouterPricingCatalog | (private) | `async function fetchOpenRouterPricingCatalog(` |
| 1106 | fn | resolveCatalogPricingForRef | (private) | `function resolveCatalogPricingForRef(params: {` |
| 1146 | fn | resolveLiteLLMPricingForRef | (private) | `function resolveLiteLLMPricingForRef(params: {` |
| 1170 | fn | scheduleRefresh | (private) | `function scheduleRefresh(` |
| 1193 | fn | collectSeededPricing | (private) | `function collectSeededPricing(params: {` |
| 1221 | fn | refreshGatewayModelPricingCache | (private) | `async function refreshGatewayModelPricingCache(` |
| 1414 | fn | startGatewayModelPricingRefresh | pub | `export function startGatewayModelPricingRefresh(` |

## Public API

### `startGatewayModelPricingRefresh`

```
export function startGatewayModelPricingRefresh(
```

**Line:** 1414 | **Kind:** fn
