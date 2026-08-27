# src/agents/tools/image-generate-tool.ts

[← Back to Module](../modules/src-agents-tools/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1229
- **Language:** TypeScript
- **Symbols:** 33
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 123 | type | FalCreativity | (private) | - |
| 248 | fn | resolveImageGenerationModelConfigForTool | (private) | `function resolveImageGenerationModelConfigForTo...` |
| 270 | fn | hasExplicitImageGenerationModelConfig | (private) | `function hasExplicitImageGenerationModelConfig(...` |
| 274 | fn | resolveAction | (private) | `function resolveAction(args: Record<string, unk...` |
| 282 | fn | resolveRequestedCount | (private) | `function resolveRequestedCount(args: Record<str...` |
| 298 | fn | normalizeResolution | (private) | `function normalizeResolution(raw: string | unde...` |
| 309 | fn | normalizeAspectRatio | (private) | `function normalizeAspectRatio(raw: string | und...` |
| 322 | fn | normalizeQuality | (private) | `function normalizeQuality(raw: string | undefin...` |
| 333 | fn | normalizeOutputFormat | (private) | `function normalizeOutputFormat(raw: string | un...` |
| 344 | fn | normalizeOpenAIBackground | (private) | `function normalizeOpenAIBackground(` |
| 357 | fn | normalizeBackground | (private) | `function normalizeBackground(raw: string | unde...` |
| 368 | fn | normalizeOpenAIModeration | (private) | `function normalizeOpenAIModeration(` |
| 381 | fn | normalizeFalCreativity | (private) | `function normalizeFalCreativity(raw: string | u...` |
| 392 | fn | readRecordParam | (private) | `function readRecordParam(params: Record<string,...` |
| 399 | fn | normalizeOpenAIOptions | (private) | `function normalizeOpenAIOptions(args: Record<st...` |
| 421 | fn | normalizeProviderOptions | (private) | `function normalizeProviderOptions(` |
| 433 | fn | normalizeReferenceImages | (private) | `function normalizeReferenceImages(args: Record<...` |
| 443 | fn | resolveSelectedImageGenerationProvider | (private) | `function resolveSelectedImageGenerationProvider...` |
| 456 | fn | resolveSelectedImageGenerationModelId | (private) | `function resolveSelectedImageGenerationModelId(...` |
| 481 | fn | resolveReachableImageGenerationMaxInputImages | (private) | `function resolveReachableImageGenerationMaxInpu...` |
| 504 | fn | modelDisablesImageResolution | (private) | `function modelDisablesImageResolution(` |
| 514 | fn | formatIgnoredImageGenerationOverride | (private) | `function formatIgnoredImageGenerationOverride(o...` |
| 518 | fn | sanitizeInlineDirectiveText | (private) | `function sanitizeInlineDirectiveText(value: str...` |
| 545 | fn | isInlineDirectiveControlCharacter | (private) | `function isInlineDirectiveControlCharacter(char...` |
| 550 | fn | validateImageGenerationCapabilities | (private) | `function validateImageGenerationCapabilities(pa...` |
| 589 | type | ImageGenerateSandboxConfig | (private) | - |
| 594 | fn | loadReferenceImages | (private) | `async function loadReferenceImages(params: {` |
| 632 | fn | resolvedImage | (private) | `const resolvedImage = (() => {` |
| 701 | fn | inferResolutionFromInputImages | (private) | `async function inferResolutionFromInputImages(` |
| 719 | type | LoadedReferenceImage | (private) | - |
| 721 | type | ExecutedImageGeneration | (private) | - |
| 738 | fn | executeImageGenerationJob | (private) | `async function executeImageGenerationJob(params: {` |
| 898 | fn | createImageGenerateTool | pub | `export function createImageGenerateTool(options...` |

## Public API

### `createImageGenerateTool`

```
export function createImageGenerateTool(options?: {
```

**Line:** 898 | **Kind:** fn
