# extensions/openai/openai-provider.ts

[← Back to Module](../modules/extensions-openai/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1091
- **Language:** TypeScript
- **Symbols:** 32
- **Public symbols:** 2

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 73 | fn | classifyOpenAiFailoverCode | (private) | `function classifyOpenAiFailoverCode(code: strin...` |
| 168 | type | BuildOpenAILiveProviderConfigParams | (private) | - |
| 177 | fn | shouldFetchOpenAILiveModels | (private) | `function shouldFetchOpenAILiveModels(baseUrl: s...` |
| 181 | fn | buildOpenAIManifestModelsForBaseUrl | (private) | `function buildOpenAIManifestModelsForBaseUrl(ba...` |
| 189 | fn | buildOpenAILiveProviderConfig | (private) | `async function buildOpenAILiveProviderConfig(` |
| 220 | fn | readCodexModelString | (private) | `function readCodexModelString(row: unknown, key...` |
| 228 | fn | readCodexModelPositiveInteger | (private) | `function readCodexModelPositiveInteger(row: unk...` |
| 242 | fn | readCodexModelStringArray | (private) | `function readCodexModelStringArray(row: unknown...` |
| 256 | fn | readCodexReasoningLevels | (private) | `function readCodexReasoningLevels(row: unknown)...` |
| 277 | fn | readCodexModelBoolean | (private) | `function readCodexModelBoolean(row: unknown, ke...` |
| 285 | fn | readCodexModelRows | (private) | `function readCodexModelRows(body: unknown): rea...` |
| 296 | fn | shouldIncludeCodexModelRow | (private) | `function shouldIncludeCodexModelRow(row: unknow...` |
| 306 | fn | resolveCodexModelInput | (private) | `function resolveCodexModelInput(` |
| 333 | fn | normalizeOpenAICodexCatalogModel | (private) | `function normalizeOpenAICodexCatalogModel(` |
| 373 | fn | resolveCodexModelFallback | (private) | `function resolveCodexModelFallback(modelId: str...` |
| 381 | fn | buildOpenAICodexModelFromLiveRow | (private) | `function buildOpenAICodexModelFromLiveRow(row: ...` |
| 440 | fn | buildOpenAICodexStaticProviderConfig | (private) | `function buildOpenAICodexStaticProviderConfig()...` |
| 458 | fn | buildOpenAICodexLiveProviderConfig | (private) | `async function buildOpenAICodexLiveProviderConf...` |
| 505 | fn | isCodexCatalogAuthMode | (private) | `function isCodexCatalogAuthMode(mode: string): ...` |
| 509 | fn | resolveOpenAICatalogBaseUrl | (private) | `function resolveOpenAICatalogBaseUrl(ctx: {` |
| 522 | fn | shouldUseOpenAIResponsesTransport | (private) | `function shouldUseOpenAIResponsesTransport(para...` |
| 545 | fn | resolveAuthoredOpenAIConfigRoute | (private) | `function resolveAuthoredOpenAIConfigRoute(param...` |
| 593 | fn | resolveAuthoredOpenAICompletionsRoute | (private) | `function resolveAuthoredOpenAICompletionsRoute(...` |
| 615 | fn | isOpenAIProvider | (private) | `function isOpenAIProvider(provider: string | un...` |
| 620 | fn | normalizeOpenAITransport | (private) | `function normalizeOpenAITransport(` |
| 645 | fn | shouldUseCodexResponsesHooks | (private) | `function shouldUseCodexResponsesHooks(params: {` |
| 656 | fn | resolveConfiguredProviderAuthTransport | (private) | `function resolveConfiguredProviderAuthTransport(` |
| 670 | fn | shouldResolveDynamicModelThroughCodex | (private) | `function shouldResolveDynamicModelThroughCodex(...` |
| 699 | fn | buildOpenAIUnknownModelHint | (private) | `function buildOpenAIUnknownModelHint(modelId: s...` |
| 707 | fn | resolveOpenAIGptForwardCompatModel | (private) | `function resolveOpenAIGptForwardCompatModel(ctx...` |
| 846 | fn | buildOpenAIProvider | pub | `export function buildOpenAIProvider(): Provider...` |
| 1088 | fn | buildOpenAICodexProviderPlugin | pub | `export function buildOpenAICodexProviderPlugin(...` |

## Public API

### `buildOpenAIProvider`

```
export function buildOpenAIProvider(): ProviderPlugin {
```

**Line:** 846 | **Kind:** fn

### `buildOpenAICodexProviderPlugin`

```
export function buildOpenAICodexProviderPlugin(): ProviderPlugin {
```

**Line:** 1088 | **Kind:** fn
