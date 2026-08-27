# extensions/openai/image-generation-provider.ts

[← Back to Module](../modules/extensions-openai/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1096
- **Language:** TypeScript
- **Symbols:** 41
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 92 | fn | sanitizeLogValue | (private) | `function sanitizeLogValue(value: unknown): stri...` |
| 113 | fn | resolveOpenAIImageTimeoutMs | (private) | `function resolveOpenAIImageTimeoutMs(` |
| 123 | fn | resolveOpenAIImageCount | (private) | `function resolveOpenAIImageCount(count: number ...` |
| 130 | fn | resolveGeneratedImageMaxBytes | (private) | `function resolveGeneratedImageMaxBytes(cfg: Ope...` |
| 138 | fn | isPublicOpenAIImageBaseUrl | (private) | `function isPublicOpenAIImageBaseUrl(baseUrl: st...` |
| 161 | fn | isAzureOpenAIBaseUrl | (private) | `function isAzureOpenAIBaseUrl(baseUrl?: string)...` |
| 174 | fn | resolveAzureApiVersion | (private) | `function resolveAzureApiVersion(): string {` |
| 178 | fn | buildAzureImageUrl | (private) | `function buildAzureImageUrl(` |
| 190 | fn | resolveOutputMime | (private) | `function resolveOutputMime(outputFormat?: Image...` |
| 206 | type | OpenAIImageRequest | (private) | - |
| 207 | type | OpenAIImageOptions | (private) | - |
| 209 | fn | resolveOpenAIImageOutputCompression | (private) | `function resolveOpenAIImageOutputCompression(` |
| 220 | fn | appendOpenAIImageOptions | (private) | `function appendOpenAIImageOptions(` |
| 244 | fn | resolveOpenAIImageRequestModel | (private) | `function resolveOpenAIImageRequestModel(` |
| 259 | fn | resolveNativeOpenAIImageSizesForModel | (private) | `function resolveNativeOpenAIImageSizesForModel(...` |
| 269 | fn | resolveConfiguredOpenAIImageBaseUrl | (private) | `function resolveConfiguredOpenAIImageBaseUrl(cf...` |
| 277 | fn | resolveOpenAIImageRequestSize | (private) | `function resolveOpenAIImageRequestSize(params: {` |
| 307 | fn | shouldAllowPrivateImageEndpoint | (private) | `function shouldAllowPrivateImageEndpoint(req: {` |
| 325 | fn | resolveRequestAuthStore | (private) | `function resolveRequestAuthStore(req: {` |
| 341 | fn | hasDirectOpenAIImageApiKeyAuth | (private) | `function hasDirectOpenAIImageApiKeyAuth(params: {` |
| 366 | fn | hasCodexResponseTransportProfileConfigured | (private) | `function hasCodexResponseTransportProfileConfig...` |
| 380 | fn | resolveOpenAIImageAuthProvider | (private) | `function resolveOpenAIImageAuthProvider(req: {` |
| 396 | fn | hasExplicitOpenAIImageApiKeyConfig | (private) | `function hasExplicitOpenAIImageApiKeyConfig(cfg...` |
| 401 | fn | hasExplicitDirectOpenAIImageConfig | (private) | `function hasExplicitDirectOpenAIImageConfig(cfg...` |
| 415 | fn | hasChatGPTImageRouteConfig | (private) | `function hasChatGPTImageRouteConfig(cfg: OpenCl...` |
| 423 | fn | resolveConfiguredOpenAIImageHeaders | (private) | `function resolveConfiguredOpenAIImageHeaders(` |
| 438 | fn | forceOpenAIImageApiKeyAuth | (private) | `function forceOpenAIImageApiKeyAuth(cfg: OpenCl...` |
| 461 | fn | resolveOpenAIImageAuth | (private) | `async function resolveOpenAIImageAuth(req: {` |
| 474 | fn | isCodexSubscriptionAuthMode | (private) | `function isCodexSubscriptionAuthMode(mode: unkn...` |
| 478 | type | OpenAICodexImageGenerationEvent | (private) | - |
| 501 | fn | inferImageUploadFileName | (private) | `function inferImageUploadFileName(params: {` |
| 515 | fn | readResponseBodyText | (private) | `async function readResponseBodyText(response: R...` |
| 551 | fn | parseCodexImageGenerationEvents | (private) | `function parseCodexImageGenerationEvents(body: ...` |
| 577 | fn | decodeCodexImagePayload | (private) | `function decodeCodexImagePayload(payload: strin...` |
| 599 | fn | toCodexImage | (private) | `function toCodexImage(` |
| 618 | fn | extractCodexImageGenerationResult | (private) | `function extractCodexImageGenerationResult(para...` |
| 669 | fn | createOpenAIImageGenerationProviderBase | (private) | `function createOpenAIImageGenerationProviderBas...` |
| 709 | fn | resolveOptionalApiKeyForProvider | (private) | `async function resolveOptionalApiKeyForProvider(` |
| 724 | fn | logCodexImageAuthSelected | (private) | `function logCodexImageAuthSelected(params: {` |
| 741 | fn | generateOpenAICodexImage | (private) | `async function generateOpenAICodexImage(params: {` |
| 854 | fn | buildOpenAIImageGenerationProvider | pub | `export function buildOpenAIImageGenerationProvi...` |

## Public API

### `buildOpenAIImageGenerationProvider`

```
export function buildOpenAIImageGenerationProvider(): ImageGenerationProvider {
```

**Line:** 854 | **Kind:** fn
