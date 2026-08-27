# src/media-understanding/runner.ts

[← Back to Module](../modules/src-media-understanding/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1172
- **Language:** TypeScript
- **Symbols:** 37
- **Public symbols:** 4

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 79 | type | ProviderRegistry | (private) | - |
| 80 | type | ModelCatalogApi | (private) | - |
| 82 | type | ModelCatalog | (private) | - |
| 84 | type | RunCapabilityResult | (private) | - |
| 99 | fn | resolveLiteralProviderApiKey | (private) | `function resolveLiteralProviderApiKey(` |
| 108 | fn | hasProviderAuthAvailable | (private) | `async function hasProviderAuthAvailable(params: {` |
| 130 | fn | resolveConfiguredKeyProviderOrder | (private) | `function resolveConfiguredKeyProviderOrder(para...` |
| 148 | fn | resolveConfiguredImageModelId | (private) | `function resolveConfiguredImageModelId(params: {` |
| 160 | fn | resolveConfiguredImageModel | (private) | `function resolveConfiguredImageModel(params: {` |
| 181 | fn | resolveCatalogImageModelId | (private) | `function resolveCatalogImageModelId(params: {` |
| 198 | fn | resolveDefaultMediaModelFromRegistry | (private) | `function resolveDefaultMediaModelFromRegistry(p...` |
| 207 | fn | resolveAutoMediaKeyProvidersFromRegistry | (private) | `function resolveAutoMediaKeyProvidersFromRegist...` |
| 211 | type | AutoProviderEntry | (private) | - |
| 238 | fn | explicitImageModelVisionStatus | (private) | `async function explicitImageModelVisionStatus(p...` |
| 273 | fn | resolveAutoImageModelId | (private) | `async function resolveAutoImageModelId(params: {` |
| 335 | fn | buildProviderRegistry | pub | `export function buildProviderRegistry(` |
| 342 | fn | resolveMediaAttachmentLocalRoots | pub | `export function resolveMediaAttachmentLocalRoot...` |
| 363 | fn | clearMediaUnderstandingBinaryCacheForTests | (private) | `function clearMediaUnderstandingBinaryCacheForT...` |
| 375 | fn | expandHomeDir | (private) | `function expandHomeDir(value: string): string {` |
| 389 | fn | hasPathSeparator | (private) | `function hasPathSeparator(value: string): boole...` |
| 393 | fn | candidateBinaryNames | (private) | `function candidateBinaryNames(name: string): st...` |
| 407 | fn | isExecutable | (private) | `async function isExecutable(filePath: string): ...` |
| 423 | fn | findBinary | (private) | `async function findBinary(name: string): Promis...` |
| 457 | fn | probeAntigravityCliCandidate | (private) | `async function probeAntigravityCliCandidate(com...` |
| 482 | fn | resolveAntigravityCliBinary | (private) | `async function resolveAntigravityCliBinary(): P...` |
| 498 | fn | resolveAntigravityCliEntry | (private) | `async function resolveAntigravityCliEntry(` |
| 521 | fn | resolveKeyEntry | (private) | `async function resolveKeyEntry(params: {` |
| 614 | fn | resolveImageModelFromAgentDefaults | (private) | `function resolveImageModelFromAgentDefaults(par...` |
| 665 | fn | hasExplicitImageUnderstandingConfig | (private) | `function hasExplicitImageUnderstandingConfig(pa...` |
| 671 | fn | isMinimaxNativeVisionModel | (private) | `function isMinimaxNativeVisionModel(params: { p...` |
| 680 | fn | activeModelSupportsNativeVision | (private) | `async function activeModelSupportsNativeVision(...` |
| 712 | fn | resolveAutoEntries | (private) | `async function resolveAutoEntries(params: {` |
| 764 | fn | resolveAutoImageModel | pub | `export async function resolveAutoImageModel(par...` |
| 817 | fn | resolveActiveModelEntry | (private) | `async function resolveActiveModelEntry(params: {` |
| 893 | fn | runAttachmentEntries | (private) | `async function runAttachmentEntries(params: {` |
| 992 | fn | hasFailedMediaAttempt | (private) | `function hasFailedMediaAttempt(attachments: Med...` |
| 998 | fn | runCapability | pub | `export async function runCapability(params: {` |

## Public API

### `buildProviderRegistry`

```
export function buildProviderRegistry(
```

**Line:** 335 | **Kind:** fn

### `resolveMediaAttachmentLocalRoots`

```
export function resolveMediaAttachmentLocalRoots(params: {
```

**Line:** 342 | **Kind:** fn

### `resolveAutoImageModel`

```
export async function resolveAutoImageModel(params: {
```

**Line:** 764 | **Kind:** fn

### `runCapability`

```
export async function runCapability(params: {
```

**Line:** 998 | **Kind:** fn
