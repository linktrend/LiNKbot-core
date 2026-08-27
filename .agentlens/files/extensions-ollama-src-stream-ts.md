# extensions/ollama/src/stream.ts

[← Back to Module](../modules/extensions-ollama-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1479
- **Language:** TypeScript
- **Symbols:** 70
- **Public symbols:** 12

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 66 | type | OllamaStreamCooperativeScheduler | (private) | - |
| 70 | fn | throwIfOllamaStreamAborted | (private) | `function throwIfOllamaStreamAborted(signal?: Ab...` |
| 76 | fn | createOllamaStreamCooperativeScheduler | (private) | `function createOllamaStreamCooperativeScheduler(` |
| 102 | fn | countMatches | (private) | `function countMatches(text: string, re: RegExp)...` |
| 107 | fn | maxCharacterFrequency | (private) | `function maxCharacterFrequency(text: string): n...` |
| 118 | fn | isKnownOllamaGarbledVisibleTextModel | (private) | `function isKnownOllamaGarbledVisibleTextModel(m...` |
| 122 | fn | isLikelyGarbledVisibleText | (private) | `function isLikelyGarbledVisibleText(params: { t...` |
| 145 | fn | resolveOllamaBaseUrlForRun | pub | `export function resolveOllamaBaseUrlForRun(para...` |
| 160 | fn | resolveConfiguredOllamaProviderConfig | pub | `export function resolveConfiguredOllamaProvider...` |
| 185 | fn | isOllamaCompatProvider | pub | `export function isOllamaCompatProvider(model: {` |
| 220 | fn | resolveOllamaCompatNumCtxEnabled | pub | `export function resolveOllamaCompatNumCtxEnable...` |
| 227 | fn | shouldInjectOllamaCompatNumCtx | pub | `export function shouldInjectOllamaCompatNumCtx(...` |
| 244 | fn | wrapOllamaCompatNumCtx | pub | `export function wrapOllamaCompatNumCtx(baseFn: ...` |
| 255 | type | OllamaThinkValue | (private) | - |
| 281 | fn | createOllamaThinkingWrapper | (private) | `function createOllamaThinkingWrapper(` |
| 292 | fn | resolveOllamaThinkValue | (private) | `function resolveOllamaThinkValue(thinkingLevel:...` |
| 308 | fn | resolveOllamaThinkParamValue | (private) | `function resolveOllamaThinkParamValue(` |
| 330 | fn | shouldForwardNativeOllamaThink | (private) | `function shouldForwardNativeOllamaThink(` |
| 339 | fn | resolveOllamaConfiguredNumCtx | (private) | `function resolveOllamaConfiguredNumCtx(model: P...` |
| 347 | fn | resolveOllamaNumCtx | (private) | `function resolveOllamaNumCtx(model: ProviderRun...` |
| 370 | fn | resolveOllamaNativeNumCtx | (private) | `function resolveOllamaNativeNumCtx(model: Provi...` |
| 382 | fn | resolveOllamaModelOptions | (private) | `function resolveOllamaModelOptions(model: Provi...` |
| 402 | fn | normalizeOllamaGreedySamplingOptions | (private) | `function normalizeOllamaGreedySamplingOptions(o...` |
| 414 | fn | resolveOllamaTopLevelParams | (private) | `function resolveOllamaTopLevelParams(` |
| 433 | fn | resolveStreamingTextDelta | (private) | `function resolveStreamingTextDelta(previousText...` |
| 448 | fn | createConfiguredOllamaCompatStreamWrapper | pub | `export function createConfiguredOllamaCompatStr...` |
| 504 | fn | buildOllamaChatRequest | pub | `export function buildOllamaChatRequest(params: {` |
| 523 | type | StreamModelDescriptor | (private) | - |
| 530 | type | OllamaUsageFallback | (private) | - |
| 537 | fn | buildUsageWithNoCost | (private) | `function buildUsageWithNoCost(params: {` |
| 558 | fn | buildStreamAssistantMessage | (private) | `function buildStreamAssistantMessage(params: {` |
| 577 | fn | buildStreamErrorAssistantMessage | (private) | `function buildStreamErrorAssistantMessage(param...` |
| 599 | interface | OllamaChatRequest | (private) | - |
| 608 | interface | OllamaChatMessage | (private) | - |
| 616 | interface | OllamaTool | (private) | - |
| 625 | interface | OllamaToolCall | (private) | - |
| 633 | interface | OllamaChatResponse | (private) | - |
| 653 | fn | safeJsonLength | (private) | `function safeJsonLength(value: unknown): number {` |
| 662 | fn | estimateTokensFromChars | (private) | `function estimateTokensFromChars(chars: number)...` |
| 669 | fn | resolveOllamaStopReason | (private) | `function resolveOllamaStopReason(response: Olla...` |
| 681 | fn | estimateOllamaPromptTokens | (private) | `function estimateOllamaPromptTokens(params: {` |
| 696 | fn | estimateOllamaCompletionTokens | (private) | `function estimateOllamaCompletionTokens(` |
| 709 | fn | resolveUsageCount | (private) | `function resolveUsageCount(value: number | unde...` |
| 719 | type | InputContentPart | (private) | - |
| 725 | fn | extractTextContent | (private) | `function extractTextContent(content: unknown): ...` |
| 738 | fn | extractOllamaImages | (private) | `function extractOllamaImages(content: unknown):...` |
| 747 | fn | ensureArgsObject | (private) | `function ensureArgsObject(value: unknown): Reco...` |
| 751 | fn | normalizeOllamaToolCallArguments | (private) | `function normalizeOllamaToolCallArguments(value...` |
| 755 | fn | inferOllamaSchemaType | (private) | `function inferOllamaSchemaType(schema: Record<s...` |
| 804 | fn | normalizeOllamaToolSchema | (private) | `function normalizeOllamaToolSchema(schema: unkn...` |
| 850 | type | OllamaToolCallNameOptions | (private) | - |
| 854 | type | OllamaAssistantMessageBuildOptions | (private) | - |
| 858 | fn | readOllamaToolCallId | (private) | `function readOllamaToolCallId(value: unknown): ...` |
| 862 | fn | extractToolCalls | (private) | `function extractToolCalls(` |
| 895 | fn | buildOllamaToolNameSet | (private) | `function buildOllamaToolNameSet(tools: Tool[] |...` |
| 908 | fn | normalizeOllamaToolCallName | (private) | `function normalizeOllamaToolCallName(` |
| 936 | fn | convertToOllamaMessages | pub | `export function convertToOllamaMessages(` |
| 987 | fn | extractOllamaTools | (private) | `function extractOllamaTools(tools: Tool[] | und...` |
| 1008 | fn | buildAssistantMessage | pub | `export function buildAssistantMessage(` |
| 1094 | fn | resolveOllamaChatUrl | (private) | `function resolveOllamaChatUrl(baseUrl: string):...` |
| 1100 | fn | resolveOllamaModelHeaders | (private) | `function resolveOllamaModelHeaders(model: {` |
| 1109 | fn | resolveOllamaRequestTimeoutMs | (private) | `function resolveOllamaRequestTimeoutMs(` |
| 1120 | fn | createRawOllamaStreamFn | (private) | `function createRawOllamaStreamFn(` |
| 1130 | fn | run | (private) | `const run = async () => {` |
| 1224 | fn | textContentIndex | (private) | `const textContentIndex = () => (thinkingStarted...` |
| 1240 | fn | closeThinkingBlock | (private) | `const closeThinkingBlock = () => {` |
| 1259 | fn | closeTextBlock | (private) | `const closeTextBlock = () => {` |
| 1278 | fn | flushVisibleText | (private) | `const flushVisibleText = (nextVisibleContent: s...` |
| 1460 | fn | createOllamaStreamFn | pub | `export function createOllamaStreamFn(` |
| 1467 | fn | createConfiguredOllamaStreamFn | pub | `export function createConfiguredOllamaStreamFn(...` |

## Public API

### `resolveOllamaBaseUrlForRun`

```
export function resolveOllamaBaseUrlForRun(params: {
```

**Line:** 145 | **Kind:** fn

### `resolveConfiguredOllamaProviderConfig`

```
export function resolveConfiguredOllamaProviderConfig(params: {
```

**Line:** 160 | **Kind:** fn

### `isOllamaCompatProvider`

```
export function isOllamaCompatProvider(model: {
```

**Line:** 185 | **Kind:** fn

### `resolveOllamaCompatNumCtxEnabled`

```
export function resolveOllamaCompatNumCtxEnabled(params: {
```

**Line:** 220 | **Kind:** fn

### `shouldInjectOllamaCompatNumCtx`

```
export function shouldInjectOllamaCompatNumCtx(params: {
```

**Line:** 227 | **Kind:** fn

### `wrapOllamaCompatNumCtx`

```
export function wrapOllamaCompatNumCtx(baseFn: StreamFn | undefined, numCtx: number): StreamFn {
```

**Line:** 244 | **Kind:** fn

### `createConfiguredOllamaCompatStreamWrapper`

```
export function createConfiguredOllamaCompatStreamWrapper(
```

**Line:** 448 | **Kind:** fn

### `buildOllamaChatRequest`

```
export function buildOllamaChatRequest(params: {
```

**Line:** 504 | **Kind:** fn

### `convertToOllamaMessages`

```
export function convertToOllamaMessages(
```

**Line:** 936 | **Kind:** fn

### `buildAssistantMessage`

```
export function buildAssistantMessage(
```

**Line:** 1008 | **Kind:** fn

### `createOllamaStreamFn`

```
export function createOllamaStreamFn(
```

**Line:** 1460 | **Kind:** fn

### `createConfiguredOllamaStreamFn`

```
export function createConfiguredOllamaStreamFn(params: {
```

**Line:** 1467 | **Kind:** fn
