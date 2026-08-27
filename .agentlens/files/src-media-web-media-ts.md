# src/media/web-media.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1164
- **Language:** TypeScript
- **Symbols:** 52
- **Public symbols:** 10

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 44 | type | WebMediaResult | pub | - |
| 51 | type | WebMediaOptions | (private) | - |
| 74 | type | ImageQualityPreference | pub | - |
| 77 | type | ImageCompressionModelPolicy | pub | - |
| 85 | type | ImageCompressionPolicy | pub | - |
| 91 | fn | resolveMediaStoreUriToPath | (private) | `async function resolveMediaStoreUriToPath(media...` |
| 105 | fn | resolveHostedPluginMediaUrl | (private) | `async function resolveHostedPluginMediaUrl(medi...` |
| 124 | fn | resolveWebMediaOptions | (private) | `function resolveWebMediaOptions(params: {` |
| 188 | fn | stripLegacyMediaDirectivePrefix | (private) | `function stripLegacyMediaDirectivePrefix(mediaU...` |
| 195 | fn | getTextStats | (private) | `function getTextStats(text: string): { printabl...` |
| 220 | fn | hasSingleByteTextShape | (private) | `function hasSingleByteTextShape(buffer: Buffer)...` |
| 240 | fn | decodeHostReadText | (private) | `function decodeHostReadText(buffer: Buffer): st...` |
| 261 | fn | isValidatedHostReadText | (private) | `function isValidatedHostReadText(buffer?: Buffe...` |
| 265 | fn | getValidatedHostReadText | (private) | `function getValidatedHostReadText(buffer?: Buff...` |
| 280 | fn | isPathInsideRoot | (private) | `function isPathInsideRoot(filePath: string | un...` |
| 290 | fn | resolveLocalMediaFileName | (private) | `function resolveLocalMediaFileName(filePath: st...` |
| 297 | fn | hasHtmlDocumentShape | (private) | `function hasHtmlDocumentShape(text: string): bo...` |
| 302 | fn | isTrustedGeneratedHostReadHtmlPath | (private) | `async function isTrustedGeneratedHostReadHtmlPa...` |
| 319 | fn | isTrustedGeneratedHostReadHtml | (private) | `function isTrustedGeneratedHostReadHtml(params: {` |
| 336 | fn | isAllowedHostReadTextAlias | (private) | `function isAllowedHostReadTextAlias(mime: strin...` |
| 348 | fn | formatMb | (private) | `function formatMb(bytes: number, digits = 2): s...` |
| 352 | fn | formatCapLimit | (private) | `function formatCapLimit(label: string, cap: num...` |
| 356 | fn | formatCapReduce | (private) | `function formatCapReduce(label: string, cap: nu...` |
| 360 | fn | isHeicSource | (private) | `function isHeicSource(opts: { contentType?: str...` |
| 370 | fn | assertHostReadMediaAllowed | (private) | `function assertHostReadMediaAllowed(params: {` |
| 454 | fn | toJpegFileName | (private) | `function toJpegFileName(fileName?: string): str...` |
| 469 | type | OptimizedImage | (private) | - |
| 484 | fn | normalizeImageQualityPreference | (private) | `function normalizeImageQualityPreference(value?...` |
| 495 | fn | squareLongSideForPixelBudget | (private) | `function squareLongSideForPixelBudget(pixelBudg...` |
| 499 | fn | positiveInteger | (private) | `function positiveInteger(value: number | undefi...` |
| 505 | fn | effectiveImageQualityPreference | (private) | `function effectiveImageQualityPreference(` |
| 519 | fn | maxSideForModel | (private) | `function maxSideForModel(model: ImageCompressio...` |
| 532 | fn | preferredSideForModel | (private) | `function preferredSideForModel(model: ImageComp...` |
| 539 | fn | policyModelSides | (private) | `function policyModelSides(policy: ImageCompress...` |
| 552 | fn | sideForPreference | (private) | `function sideForPreference(` |
| 568 | fn | imageMaxBytesForPolicy | (private) | `function imageMaxBytesForPolicy(policy?: ImageC...` |
| 575 | fn | imageSatisfiesHardDimensionPolicy | (private) | `function imageSatisfiesHardDimensionPolicy(` |
| 602 | fn | assertImageSatisfiesHardDimensionPolicy | (private) | `function assertImageSatisfiesHardDimensionPolicy(` |
| 614 | fn | resolvePreservableOriginalImageContentType | (private) | `function resolvePreservableOriginalImageContent...` |
| 657 | fn | detectPreservableImageMime | (private) | `function detectPreservableImageMime(` |
| 670 | fn | isPreservableImageMime | (private) | `function isPreservableImageMime(` |
| 679 | fn | effectiveImageBytesCap | pub | `export function effectiveImageBytesCap(` |
| 690 | fn | buildDescendingLadder | (private) | `function buildDescendingLadder(maxSide: number,...` |
| 710 | fn | resolveImageCompressionGrid | pub | `export function resolveImageCompressionGrid(pol...` |
| 739 | fn | logOptimizedImage | (private) | `function logOptimizedImage(params: { originalSi...` |
| 757 | fn | optimizeImageWithFallback | (private) | `async function optimizeImageWithFallback(params: {` |
| 793 | fn | optimizeImageBufferForWebMedia | pub | `export async function optimizeImageBufferForWeb...` |
| 851 | fn | loadWebMediaInternal | (private) | `async function loadWebMediaInternal(` |
| 889 | fn | optimizeAndClampImage | (private) | `const optimizeAndClampImage = async (` |
| 1106 | fn | loadWebMedia | pub | `export async function loadWebMedia(` |
| 1118 | fn | loadWebMediaRaw | pub | `export async function loadWebMediaRaw(` |
| 1130 | fn | optimizeImageToJpeg | pub | `export async function optimizeImageToJpeg(` |

## Public API

### `effectiveImageBytesCap`

```
export function effectiveImageBytesCap(
```

**Line:** 679 | **Kind:** fn

### `resolveImageCompressionGrid`

```
export function resolveImageCompressionGrid(policy?: ImageCompressionPolicy): {
```

**Line:** 710 | **Kind:** fn

### `optimizeImageBufferForWebMedia`

```
export async function optimizeImageBufferForWebMedia(params: {
```

**Line:** 793 | **Kind:** fn

### `loadWebMedia`

```
export async function loadWebMedia(
```

**Line:** 1106 | **Kind:** fn

### `loadWebMediaRaw`

```
export async function loadWebMediaRaw(
```

**Line:** 1118 | **Kind:** fn

### `optimizeImageToJpeg`

```
export async function optimizeImageToJpeg(
```

**Line:** 1130 | **Kind:** fn
