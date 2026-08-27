# ui/src/pages/chat/components/chat-message.ts

[← Back to Module](../modules/ui-src-pages-chat-components/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2685
- **Language:** TypeScript
- **Symbols:** 101
- **Public symbols:** 5

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 78 | fn | renderChatIcon | (private) | `function renderChatIcon(name: string) {` |
| 82 | type | AssistantAttachmentAvailability | (private) | - |
| 86 | type | PairingQrExpiryNotice | (private) | - |
| 90 | type | PairingQrExpiryRefreshTimer | (private) | - |
| 104 | type | ChatTimestampDisplay | (private) | - |
| 110 | fn | formatChatTimestampForDisplay | (private) | `function formatChatTimestampForDisplay(timestam...` |
| 150 | fn | formatChatRelativeTimestampLabel | (private) | `function formatChatRelativeTimestampLabel(times...` |
| 175 | fn | renderChatTimestamp | (private) | `function renderChatTimestamp(timestamp: number,...` |
| 188 | fn | resolveMessageMetaDetails | (private) | `function resolveMessageMetaDetails(target: Even...` |
| 197 | fn | previewMessageMeta | (private) | `function previewMessageMeta(event: PointerEvent...` |
| 206 | fn | closeMessageMetaPreview | (private) | `function closeMessageMetaPreview(event: Pointer...` |
| 215 | fn | pinMessageMetaPreview | (private) | `function pinMessageMetaPreview(event: MouseEven...` |
| 224 | fn | getAssistantAttachmentAvailabilityRenderVersion | pub | `export function getAssistantAttachmentAvailabil...` |
| 228 | fn | bumpAssistantAttachmentAvailabilityRenderVersion | (private) | `function bumpAssistantAttachmentAvailabilityRen...` |
| 233 | fn | setAssistantAttachmentAvailability | (private) | `function setAssistantAttachmentAvailability(` |
| 241 | fn | deleteAssistantAttachmentAvailability | (private) | `function deleteAssistantAttachmentAvailability(...` |
| 247 | type | ImageBlock | (private) | - |
| 255 | type | ImageRenderOptions | (private) | - |
| 262 | type | RenderableImageBlock | (private) | - |
| 266 | type | AttachmentItem | (private) | - |
| 275 | fn | readManagedImageBlobUrl | (private) | `function readManagedImageBlobUrl(cacheKey: stri...` |
| 285 | fn | cacheManagedImageBlobUrl | (private) | `function cacheManagedImageBlobUrl(cacheKey: str...` |
| 309 | fn | hasRecentManagedImageBlobUrlMiss | (private) | `function hasRecentManagedImageBlobUrlMiss(cache...` |
| 323 | fn | cacheManagedImageBlobUrlMiss | (private) | `function cacheManagedImageBlobUrlMiss(cacheKey:...` |
| 335 | fn | appendImageBlock | (private) | `function appendImageBlock(images: ImageBlock[],...` |
| 341 | fn | buildBase64ImageUrl | (private) | `function buildBase64ImageUrl(params: { data: st...` |
| 347 | fn | isImageTranscriptMediaPath | (private) | `function isImageTranscriptMediaPath(path: strin...` |
| 364 | fn | isAudioTranscriptMediaPath | (private) | `function isAudioTranscriptMediaPath(path: strin...` |
| 375 | fn | isVideoTranscriptMediaPath | (private) | `function isVideoTranscriptMediaPath(path: strin...` |
| 383 | fn | labelForMediaPath | (private) | `function labelForMediaPath(mediaPath: string): ...` |
| 394 | fn | extractTranscriptMediaEntries | (private) | `function extractTranscriptMediaEntries(message:...` |
| 415 | fn | extractImages | (private) | `function extractImages(message: unknown): Image...` |
| 508 | fn | readPairingQrExpiresAtMs | (private) | `function readPairingQrExpiresAtMs(block: Record...` |
| 513 | fn | isExpiredPairingQrBlock | (private) | `function isExpiredPairingQrBlock(block: Record<...` |
| 518 | fn | extractPairingQrExpiryNotices | (private) | `function extractPairingQrExpiryNotices(` |
| 543 | fn | resolveNearestFuturePairingQrExpiresAtMs | (private) | `function resolveNearestFuturePairingQrExpiresAtMs(` |
| 571 | fn | clearPairingQrExpiryRefreshTimer | (private) | `function clearPairingQrExpiryRefreshTimer(messa...` |
| 580 | fn | schedulePairingQrExpiryRefresh | (private) | `function schedulePairingQrExpiryRefresh(` |
| 608 | fn | extractTranscriptAttachments | (private) | `function extractTranscriptAttachments(message: ...` |
| 633 | type | StreamGroupPart | (private) | - |
| 638 | type | StreamGroupOptions | (private) | - |
| 649 | fn | renderQuestionStreamPart | (private) | `function renderQuestionStreamPart(` |
| 660 | fn | renderStreamGroup | pub | `export function renderStreamGroup(parts: Stream...` |
| 723 | fn | renderWorkGroupSummary | pub | `export function renderWorkGroupSummary(` |
| 767 | type | RenderMessageGroupOptions | (private) | - |
| 799 | type | GroupedMessageRenderOptions | (private) | - |
| 801 | fn | buildGroupedMessageRenderOptions | (private) | `function buildGroupedMessageRenderOptions(` |
| 835 | fn | renderMessageGroup | pub | `export function renderMessageGroup(group: Messa...` |
| 1039 | type | GroupMeta | (private) | - |
| 1049 | fn | extractGroupMeta | (private) | `function extractGroupMeta(group: MessageGroup, ...` |
| 1098 | fn | renderMessageMeta | (private) | `function renderMessageMeta(timestamp: number, m...` |
| 1184 | type | DeleteConfirmSide | (private) | - |
| 1188 | fn | shouldSkipActionConfirm | (private) | `function shouldSkipActionConfirm(preferenceName...` |
| 1196 | fn | dismissDeleteConfirm | (private) | `function dismissDeleteConfirm(element: Element) {` |
| 1205 | fn | resolveViewportBounds | (private) | `function resolveViewportBounds() {` |
| 1220 | fn | clampDeleteConfirmPosition | (private) | `function clampDeleteConfirmPosition(value: numb...` |
| 1227 | fn | placeDeleteConfirmPopover | (private) | `function placeDeleteConfirmPopover(` |
| 1262 | fn | renderDeleteButton | (private) | `function renderDeleteButton(onDelete: () => voi...` |
| 1278 | fn | renderRewindButton | (private) | `function renderRewindButton(onRewind: () => voi...` |
| 1294 | type | ConfirmedActionParams | (private) | - |
| 1308 | fn | openChatRewindConfirmation | pub | `export function openChatRewindConfirmation(trig...` |
| 1318 | fn | openConfirmedActionPopover | (private) | `function openConfirmedActionPopover(` |
| 1366 | fn | dismissPopover | (private) | `function dismissPopover() {` |
| 1375 | fn | closeOnOutside | (private) | `function closeOnOutside(evt: MouseEvent) {` |
| 1400 | fn | renderConfirmedActionButton | (private) | `function renderConfirmedActionButton(params: Co...` |
| 1418 | fn | resolveRenderableMessageImages | (private) | `function resolveRenderableMessageImages(` |
| 1448 | fn | renderMessageImages | (private) | `function renderMessageImages(images: Renderable...` |
| 1453 | fn | openImage | (private) | `const openImage = (img: RenderableImageBlock, p...` |
| 1483 | fn | renderImageElement | (private) | `const renderImageElement = (img: RenderableImag...` |
| 1494 | fn | renderImage | (private) | `const renderImage = (img: RenderableImageBlock)...` |
| 1510 | fn | renderReplyPill | (private) | `function renderReplyPill(replyTarget: Normalize...` |
| 1526 | fn | renderPairingQrExpiryNotices | (private) | `function renderPairingQrExpiryNotices(notices: ...` |
| 1552 | fn | isLocalAssistantAttachmentSource | (private) | `function isLocalAssistantAttachmentSource(sourc...` |
| 1566 | fn | isCanonicalInboundMediaSource | (private) | `function isCanonicalInboundMediaSource(source: ...` |
| 1582 | fn | normalizeLocalAttachmentPath | (private) | `function normalizeLocalAttachmentPath(source: s...` |
| 1608 | fn | resolveHomeCandidatesFromRoots | (private) | `function resolveHomeCandidatesFromRoots(localMe...` |
| 1625 | fn | canonicalizeLocalPathForComparison | (private) | `function canonicalizeLocalPathForComparison(val...` |
| 1636 | fn | isLocalAttachmentPreviewAllowed | (private) | `function isLocalAttachmentPreviewAllowed(` |
| 1666 | fn | buildAssistantAttachmentUrl | (private) | `function buildAssistantAttachmentUrl(` |
| 1684 | fn | isManagedOutgoingImageSource | (private) | `function isManagedOutgoingImageSource(source: s...` |
| 1700 | fn | resolveManagedOutgoingImageRequesterSessionKey | (private) | `function resolveManagedOutgoingImageRequesterSe...` |
| 1711 | fn | buildManagedOutgoingImageFetchUrl | (private) | `function buildManagedOutgoingImageFetchUrl(sour...` |
| 1720 | fn | resolveManagedOutgoingImageBlobUrlCacheKey | (private) | `function resolveManagedOutgoingImageBlobUrlCach...` |
| 1729 | fn | readManagedOutgoingImageBlobUrl | (private) | `function readManagedOutgoingImageBlobUrl(` |
| 1736 | fn | resolveManagedOutgoingImageBlobUrl | (private) | `async function resolveManagedOutgoingImageBlobUrl(` |
| 1802 | fn | buildAssistantAttachmentMetaUrl | (private) | `function buildAssistantAttachmentMetaUrl(source...` |
| 1807 | fn | clearAssistantAttachmentRefreshTimer | (private) | `function clearAssistantAttachmentRefreshTimer(c...` |
| 1815 | fn | scheduleAssistantAttachmentRefresh | (private) | `function scheduleAssistantAttachmentRefresh(` |
| 1847 | fn | resolveAssistantAttachmentAvailability | (private) | `function resolveAssistantAttachmentAvailability(` |
| 1953 | fn | renderAssistantAttachmentStatusCard | (private) | `function renderAssistantAttachmentStatusCard(pa...` |
| 1983 | fn | renderAssistantAttachments | (private) | `function renderAssistantAttachments(` |
| 2109 | fn | renderInlineToolCards | (private) | `function renderInlineToolCards(` |
| 2158 | fn | detectJson | (private) | `function detectJson(text: string): { parsed: un...` |
| 2181 | fn | jsonSummaryLabel | (private) | `function jsonSummaryLabel(parsed: unknown): str...` |
| 2195 | fn | renderExpandButton | (private) | `function renderExpandButton(` |
| 2232 | type | MessageActionDetails | (private) | - |
| 2238 | fn | resolveNormalizedMessageMarkdown | (private) | `function resolveNormalizedMessageMarkdown(norma...` |
| 2250 | fn | resolveMessageActionDetails | (private) | `function resolveMessageActionDetails(` |
| 2287 | fn | renderMessageActionButtons | (private) | `function renderMessageActionButtons(` |
| 2307 | fn | renderGroupedMessage | (private) | `function renderGroupedMessage(` |
| 2667 | fn | renderMarkdownText | (private) | `function renderMarkdownText(` |

## Public API

### `getAssistantAttachmentAvailabilityRenderVersion`

```
export function getAssistantAttachmentAvailabilityRenderVersion(): number {
```

**Line:** 224 | **Kind:** fn

### `renderStreamGroup`

```
export function renderStreamGroup(parts: StreamGroupPart[], opts: StreamGroupOptions = {}) {
```

**Line:** 660 | **Kind:** fn

### `renderWorkGroupSummary`

```
export function renderWorkGroupSummary(
```

**Line:** 723 | **Kind:** fn

### `renderMessageGroup`

```
export function renderMessageGroup(group: MessageGroup, opts: RenderMessageGroupOptions) {
```

**Line:** 835 | **Kind:** fn

### `openChatRewindConfirmation`

```
export function openChatRewindConfirmation(trigger: HTMLElement, action: () => void): void {
```

**Line:** 1308 | **Kind:** fn
