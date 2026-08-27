# src/agents/tools/image-tool.ts

[← Back to Module](../modules/src-agents-tools/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1174
- **Language:** TypeScript
- **Symbols:** 29
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 98 | type | ImageToolLoadWebMediaOptions | (private) | - |
| 109 | type | ImageWebMediaRuntime | (private) | - |
| 117 | fn | loadImageWebMediaRuntime | (private) | `async function loadImageWebMediaRuntime(): Prom...` |
| 121 | type | ResolveModelAsync | (private) | - |
| 128 | fn | resolveRegisteredMediaUnderstandingProvider | (private) | `function resolveRegisteredMediaUnderstandingPro...` |
| 153 | fn | hasExplicitDefaultPrimaryModel | (private) | `function hasExplicitDefaultPrimaryModel(cfg?: O...` |
| 161 | fn | modelRefProvider | (private) | `function modelRefProvider(candidate: string | n...` |
| 169 | fn | isExecutionAliasCandidateForProvider | (private) | `function isExecutionAliasCandidateForProvider(` |
| 181 | fn | isCanonicalCandidateShadowedByExecutionAlias | (private) | `function isCanonicalCandidateShadowedByExecutio...` |
| 242 | fn | resolveImageToolMaxTokens | (private) | `function resolveImageToolMaxTokens(modelMaxToke...` |
| 261 | fn | resolveImageModelConfigForTool | (private) | `function resolveImageModelConfigForTool(params: {` |
| 278 | fn | resolveCodexMediaRoute | (private) | `const resolveCodexMediaRoute = () => {` |
| 316 | fn | primaryCandidates | (private) | `const primaryCandidates = (() => {` |
| 404 | fn | resolveImageModelConfigForOverride | (private) | `function resolveImageModelConfigForOverride(par...` |
| 418 | fn | pickMaxBytes | (private) | `function pickMaxBytes(cfg?: OpenClawConfig, max...` |
| 429 | fn | resolveCompressionModelCandidates | (private) | `function resolveCompressionModelCandidates(para...` |
| 454 | fn | imageCompressionPolicyHasDimensionLimit | (private) | `function imageCompressionPolicyHasDimensionLimi...` |
| 458 | fn | mergeImageCompressionPolicies | (private) | `function mergeImageCompressionPolicies(params: {` |
| 468 | fn | resolveBundledStaticCompressionModelPolicy | (private) | `function resolveBundledStaticCompressionModelPo...` |
| 484 | fn | providerUsesRuntimeModelAugment | (private) | `function providerUsesRuntimeModelAugment(params: {` |
| 524 | fn | resolveCompressionModelPolicyWithHooks | (private) | `async function resolveCompressionModelPolicyWit...` |
| 551 | fn | resolveCompressionModelPolicy | (private) | `async function resolveCompressionModelPolicy(pa...` |
| 583 | fn | resolveImageCompressionPolicy | (private) | `async function resolveImageCompressionPolicy(pa...` |
| 611 | fn | matchesImageTimeoutEntry | (private) | `function matchesImageTimeoutEntry(params: {` |
| 644 | fn | resolveImageToolTimeoutMs | (private) | `function resolveImageToolTimeoutMs(params: {` |
| 675 | type | ImageSandboxConfig | (private) | - |
| 680 | fn | runImagePrompt | (private) | `async function runImagePrompt(params: {` |
| 813 | fn | createImageTool | pub | `export function createImageTool(options?: {` |
| 1051 | fn | resolvedImage | (private) | `const resolvedImage = (() => {` |

## Public API

### `createImageTool`

```
export function createImageTool(options?: {
```

**Line:** 813 | **Kind:** fn
