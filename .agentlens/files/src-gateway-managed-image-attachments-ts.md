# src/gateway/managed-image-attachments.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1129
- **Language:** TypeScript
- **Symbols:** 47
- **Public symbols:** 6

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 54 | type | ManagedImageAttachmentLimits | pub | - |
| 61 | type | ManagedImageAttachmentLimitsConfig | (private) | - |
| 65 | type | ParsedImageDataUrl | (private) | - |
| 70 | type | ManagedImageBlock | (private) | - |
| 72 | type | CleanupManagedOutgoingImageRecordsResult | (private) | - |
| 78 | type | SessionManagedOutgoingAttachmentIndex | (private) | - |
| 80 | type | SessionManagedOutgoingAttachmentIndexCacheEntry | (private) | - |
| 86 | type | SessionManagedOutgoingAttachmentTranscriptStat | (private) | - |
| 97 | fn | buildSessionManagedOutgoingAttachmentIndexCacheKey | (private) | `function buildSessionManagedOutgoingAttachmentI...` |
| 104 | fn | resolveManagedImageAttachmentLimits | pub | `export function resolveManagedImageAttachmentLi...` |
| 115 | fn | formatLimitMiB | (private) | `function formatLimitMiB(bytes: number): string {` |
| 124 | fn | createManagedImageAttachmentError | (private) | `function createManagedImageAttachmentError(mess...` |
| 130 | fn | isManagedImageAttachmentSafeError | (private) | `function isManagedImageAttachmentSafeError(erro...` |
| 143 | fn | getSanitizedManagedImageAttachmentError | (private) | `function getSanitizedManagedImageAttachmentErro...` |
| 152 | fn | validateManagedImageBuffer | (private) | `function validateManagedImageBuffer(` |
| 164 | fn | estimateBase64DecodedByteLength | (private) | `function estimateBase64DecodedByteLength(base64...` |
| 171 | fn | getManagedImageMetadataLimitError | (private) | `function getManagedImageMetadataLimitError(` |
| 192 | fn | orientManagedImageMetadata | (private) | `function orientManagedImageMetadata(` |
| 205 | fn | resizeManagedImageBufferToLimits | (private) | `async function resizeManagedImageBufferToLimits...` |
| 229 | fn | resolveManagedImageOriginalPath | (private) | `function resolveManagedImageOriginalPath(record...` |
| 243 | fn | resolveManagedImageOriginalsDir | (private) | `function resolveManagedImageOriginalsDir(stateD...` |
| 251 | fn | hasUnmigratedManagedImageMetadata | (private) | `async function hasUnmigratedManagedImageMetadat...` |
| 260 | fn | deleteAgedOrphanManagedImageFiles | (private) | `async function deleteAgedOrphanManagedImageFile...` |
| 306 | fn | buildOutgoingVariantUrl | (private) | `function buildOutgoingVariantUrl(sessionKey: st...` |
| 310 | fn | deriveAltText | (private) | `function deriveAltText(source: string, index: n...` |
| 325 | fn | parseImageDataUrl | (private) | `function parseImageDataUrl(` |
| 372 | fn | getVariantStats | (private) | `async function getVariantStats(params: { filePa...` |
| 391 | fn | deleteManagedImageRecordArtifacts | (private) | `async function deleteManagedImageRecordArtifacts(` |
| 411 | fn | cleanupManagedOutgoingImageRecords | pub | `export async function cleanupManagedOutgoingIma...` |
| 496 | fn | resolveManagedImageRecordAgentId | (private) | `function resolveManagedImageRecordAgentId(` |
| 504 | fn | buildManagedImageBlock | (private) | `function buildManagedImageBlock(record: Managed...` |
| 517 | fn | buildManagedOutgoingAttachmentRefKey | (private) | `function buildManagedOutgoingAttachmentRefKey(m...` |
| 521 | fn | buildManagedImageResizeWarningBlock | (private) | `function buildManagedImageResizeWarningBlock(pa...` |
| 536 | fn | toRecordFilename | (private) | `function toRecordFilename(filePath: string) {` |
| 541 | fn | asArray | (private) | `function asArray(value: string[] | undefined | ...` |
| 547 | fn | parseManagedOutgoingRoute | (private) | `function parseManagedOutgoingRoute(value: strin...` |
| 572 | fn | collectManagedOutgoingAttachmentRefs | (private) | `function collectManagedOutgoingAttachmentRefs(` |
| 602 | fn | getCachedSessionManagedOutgoingAttachmentIndex | (private) | `function getCachedSessionManagedOutgoingAttachm...` |
| 625 | fn | setCachedSessionManagedOutgoingAttachmentIndex | (private) | `function setCachedSessionManagedOutgoingAttachm...` |
| 652 | fn | sameManagedOutgoingAttachmentTranscriptStat | (private) | `function sameManagedOutgoingAttachmentTranscrip...` |
| 663 | fn | getSessionManagedOutgoingAttachmentIndex | (private) | `async function getSessionManagedOutgoingAttachm...` |
| 773 | fn | recordMatchesTranscriptMessage | (private) | `async function recordMatchesTranscriptMessage(` |
| 790 | fn | attachManagedOutgoingImagesToMessage | pub | `export async function attachManagedOutgoingImag...` |
| 816 | fn | createManagedOutgoingImageBlocks | pub | `export async function createManagedOutgoingImag...` |
| 1012 | fn | sendStatus | (private) | `function sendStatus(res: ServerResponse, status...` |
| 1021 | fn | safeAttachmentFilename | (private) | `function safeAttachmentFilename(value: string |...` |
| 1027 | fn | handleManagedOutgoingImageHttpRequest | pub | `export async function handleManagedOutgoingImag...` |

## Public API

### `resolveManagedImageAttachmentLimits`

```
export function resolveManagedImageAttachmentLimits(
```

**Line:** 104 | **Kind:** fn

### `cleanupManagedOutgoingImageRecords`

```
export async function cleanupManagedOutgoingImageRecords(params?: {
```

**Line:** 411 | **Kind:** fn

### `attachManagedOutgoingImagesToMessage`

```
export async function attachManagedOutgoingImagesToMessage(params: {
```

**Line:** 790 | **Kind:** fn

### `createManagedOutgoingImageBlocks`

```
export async function createManagedOutgoingImageBlocks(params: {
```

**Line:** 816 | **Kind:** fn

### `handleManagedOutgoingImageHttpRequest`

```
export async function handleManagedOutgoingImageHttpRequest(
```

**Line:** 1027 | **Kind:** fn
