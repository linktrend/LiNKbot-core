# ui/src/components/markdown.ts

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1417
- **Language:** TypeScript
- **Symbols:** 44
- **Public symbols:** 6

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 421 | fn | getCachedMarkdown | (private) | `function getCachedMarkdown(key: string): string...` |
| 431 | fn | setCachedMarkdown | (private) | `function setCachedMarkdown(key: string, value: ...` |
| 442 | fn | shouldRenderCodeBlockCopy | (private) | `function shouldRenderCodeBlockCopy(env: unknown...` |
| 446 | fn | encodeBlockArtCodeBlockCopyPayload | (private) | `function encodeBlockArtCodeBlockCopyPayload(val...` |
| 450 | fn | decodeCodeBlockCopyPayload | (private) | `function decodeCodeBlockCopyPayload(value: stri...` |
| 465 | fn | handleMarkdownCodeBlockCopy | pub | `export function handleMarkdownCodeBlockCopy(eve...` |
| 484 | fn | markdownFileLinkFromEvent | pub | `export function markdownFileLinkFromEvent(` |
| 500 | fn | splitFileLineSuffix | (private) | `function splitFileLineSuffix(raw: string): { pa...` |
| 508 | fn | isAllowlistedBareFilename | (private) | `function isAllowlistedBareFilename(raw: string)...` |
| 516 | fn | parseFileLinkTarget | (private) | `function parseFileLinkTarget(raw: string): { pa...` |
| 528 | fn | isHostLocalFileHref | (private) | `function isHostLocalFileHref(href: string): boo...` |
| 532 | fn | isControlUiRoutePath | (private) | `function isControlUiRoutePath(pathname: string)...` |
| 546 | fn | currentControlUiBasePath | (private) | `function currentControlUiBasePath(): string {` |
| 553 | fn | pathSegments | (private) | `function pathSegments(pathname: string): string...` |
| 557 | fn | stripCurrentControlUiBasePath | (private) | `function stripCurrentControlUiBasePath(pathname...` |
| 569 | fn | segmentsStartWith | (private) | `function segmentsStartWith(segments: string[], ...` |
| 573 | fn | isControlUiResourcePath | (private) | `function isControlUiResourcePath(segments: stri...` |
| 584 | fn | isDocsRootPath | (private) | `function isDocsRootPath(normalizedPath: string,...` |
| 592 | fn | normalizeDocsRootHref | (private) | `function normalizeDocsRootHref(href: string): s...` |
| 620 | fn | installHooks | (private) | `function installHooks() {` |
| 668 | fn | escapeHtml | (private) | `function escapeHtml(value: string): string {` |
| 677 | fn | normalizeMarkdownImageLabel | (private) | `function normalizeMarkdownImageLabel(text?: str...` |
| 682 | fn | normalizeMarkdownLineBreaks | (private) | `function normalizeMarkdownLineBreaks(value: str...` |
| 686 | fn | formatTruncatedMarkdownInput | (private) | `function formatTruncatedMarkdownInput(input: st...` |
| 691 | fn | appendMarkdownTruncationNotice | (private) | `function appendMarkdownTruncationNotice(truncat...` |
| 702 | fn | isMarkdownBlockArtText | pub | `export function isMarkdownBlockArtText(value: s...` |
| 721 | fn | getFenceMarker | (private) | `function getFenceMarker(line: string): { marker...` |
| 734 | fn | stripFenceContainerPrefixes | (private) | `function stripFenceContainerPrefixes(line: stri...` |
| 746 | fn | isFenceClose | (private) | `function isFenceClose(line: string, fence: { ma...` |
| 763 | type | StreamingMarkdownSplit | (private) | - |
| 770 | fn | splitStableStreamingMarkdown | (private) | `function splitStableStreamingMarkdown(markdownL...` |
| 825 | fn | highlightCode | (private) | `function highlightCode(text: string, lang: stri...` |
| 844 | fn | highlightJsonHtml | pub | `export function highlightJsonHtml(text: string)...` |
| 848 | fn | codeClassAttribute | (private) | `function codeClassAttribute(lang: string, highl...` |
| 856 | fn | renderCodeElement | (private) | `function renderCodeElement(` |
| 869 | fn | renderCodeBlock | (private) | `function renderCodeBlock(` |
| 906 | fn | codeBlockCopyTextFromMarkdownToken | (private) | `function codeBlockCopyTextFromMarkdownToken(con...` |
| 1113 | fn | isFileLinkBoundaryBefore | (private) | `function isFileLinkBoundaryBefore(value: string...` |
| 1118 | fn | isFileLinkBoundaryAfter | (private) | `function isFileLinkBoundaryAfter(value: string,...` |
| 1307 | fn | renderSanitizedMarkdown | (private) | `function renderSanitizedMarkdown(renderInput: s...` |
| 1334 | fn | toSanitizedMarkdownHtml | pub | `export function toSanitizedMarkdownHtml(` |
| 1362 | fn | toEscapedPlainTextHtml | (private) | `function toEscapedPlainTextHtml(value: string, ...` |
| 1384 | fn | toStreamingTailHtml | (private) | `function toStreamingTailHtml(tail: string, rend...` |
| 1387 | fn | toStreamingMarkdownHtml | pub | `export function toStreamingMarkdownHtml(` |

## Public API

### `handleMarkdownCodeBlockCopy`

```
export function handleMarkdownCodeBlockCopy(event: Event): void {
```

**Line:** 465 | **Kind:** fn

### `markdownFileLinkFromEvent`

```
export function markdownFileLinkFromEvent(
```

**Line:** 484 | **Kind:** fn

### `isMarkdownBlockArtText`

```
export function isMarkdownBlockArtText(value: string): boolean {
```

**Line:** 702 | **Kind:** fn

### `highlightJsonHtml`

```
export function highlightJsonHtml(text: string): string {
```

**Line:** 844 | **Kind:** fn

### `toSanitizedMarkdownHtml`

```
export function toSanitizedMarkdownHtml(
```

**Line:** 1334 | **Kind:** fn

### `toStreamingMarkdownHtml`

```
export function toStreamingMarkdownHtml(
```

**Line:** 1387 | **Kind:** fn

## Memory Markers

### 🔴 `INVARIANT` (line 1381)

> the tail never contains a *closed* fence — the split boundary
