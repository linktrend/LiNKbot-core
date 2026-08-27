# src/agents/tools/video-generate-tool.ts

[← Back to Module](../modules/src-agents-tools/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1325
- **Language:** TypeScript
- **Symbols:** 22
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 220 | fn | createVideoGenerateToolSchema | (private) | `function createVideoGenerateToolSchema(params: ...` |
| 230 | fn | resolveVideoGenerationModelConfigForTool | (private) | `function resolveVideoGenerationModelConfigForTo...` |
| 252 | fn | hasExplicitVideoGenerationModelConfig | (private) | `function hasExplicitVideoGenerationModelConfig(...` |
| 256 | fn | collectVideoGenerationModelProviderIds | (private) | `function collectVideoGenerationModelProviderIds...` |
| 276 | fn | isVideoGenerationProviderConfigured | (private) | `function isVideoGenerationProviderConfigured(pa...` |
| 303 | fn | shouldExposeVideoReferenceAudioParams | (private) | `function shouldExposeVideoReferenceAudioParams(...` |
| 371 | fn | resolveAction | (private) | `function resolveAction(args: Record<string, unk...` |
| 379 | fn | normalizeResolution | (private) | `function normalizeResolution(raw: string | unde...` |
| 391 | fn | normalizeAspectRatio | (private) | `function normalizeAspectRatio(raw: string | und...` |
| 407 | fn | parseRoleArray | (private) | `function parseRoleArray(params: {` |
| 429 | fn | normalizeReferenceInputs | (private) | `function normalizeReferenceInputs(params: {` |
| 444 | fn | resolveSelectedVideoGenerationProvider | (private) | `function resolveSelectedVideoGenerationProvider...` |
| 457 | fn | validateVideoGenerationCapabilities | (private) | `function validateVideoGenerationCapabilities(pa...` |
| 536 | fn | formatIgnoredVideoGenerationOverride | (private) | `function formatIgnoredVideoGenerationOverride(o...` |
| 540 | type | VideoGenerateSandboxConfig | (private) | - |
| 550 | fn | loadReferenceAssets | (private) | `async function loadReferenceAssets(params: {` |
| 591 | fn | resolvedInput | (private) | `const resolvedInput = (() => {` |
| 668 | type | LoadedReferenceAsset | (private) | - |
| 670 | type | ExecutedVideoGeneration | (private) | - |
| 686 | fn | isGeneratedMediaSizeLimitError | (private) | `function isGeneratedMediaSizeLimitError(error: ...` |
| 690 | fn | executeVideoGenerationJob | (private) | `async function executeVideoGenerationJob(params: {` |
| 936 | fn | createVideoGenerateTool | pub | `export function createVideoGenerateTool(options...` |

## Public API

### `createVideoGenerateTool`

```
export function createVideoGenerateTool(options?: {
```

**Line:** 936 | **Kind:** fn
