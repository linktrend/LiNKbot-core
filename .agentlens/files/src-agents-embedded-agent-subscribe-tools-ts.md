# src/agents/embedded-agent-subscribe.tools.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1179
- **Language:** TypeScript
- **Symbols:** 49
- **Public symbols:** 16

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 54 | fn | truncateToolText | (private) | `function truncateToolText(text: string): string {` |
| 61 | fn | truncateLiveExecOutput | pub | `export function truncateLiveExecOutput(text: st...` |
| 68 | fn | capLiveExecResult | pub | `export function capLiveExecResult(result: unkno...` |
| 89 | fn | normalizeToolErrorText | (private) | `function normalizeToolErrorText(text: string): ...` |
| 103 | fn | isErrorLikeStatus | (private) | `function isErrorLikeStatus(status: string): boo...` |
| 120 | fn | readErrorCandidate | (private) | `function readErrorCandidate(value: unknown): st...` |
| 137 | fn | extractErrorField | (private) | `function extractErrorField(value: unknown): str...` |
| 153 | fn | extractDirectErrorField | (private) | `function extractDirectErrorField(value: unknown...` |
| 165 | fn | readErrorCodeField | (private) | `function readErrorCodeField(value: unknown): st...` |
| 169 | fn | readDenialErrorCodeFromMessage | (private) | `function readDenialErrorCodeFromMessage(value: ...` |
| 182 | fn | readNestedErrorCodeField | (private) | `function readNestedErrorCodeField(value: unknow...` |
| 195 | fn | extractDirectErrorCodeField | (private) | `function extractDirectErrorCodeField(value: unk...` |
| 208 | fn | buildToolLifecycleErrorResult | pub | `export function buildToolLifecycleErrorResult(e...` |
| 227 | fn | extractAggregatedErrorField | (private) | `function extractAggregatedErrorField(value: unk...` |
| 235 | fn | redactStringsDeep | (private) | `function redactStringsDeep(value: unknown, seen...` |
| 263 | fn | sanitizeToolArgs | pub | `export function sanitizeToolArgs(args: unknown)...` |
| 267 | fn | sanitizeToolResult | pub | `export function sanitizeToolResult(result: unkn...` |
| 322 | fn | redactInlineDataUriValue | (private) | `function redactInlineDataUriValue(value: string...` |
| 330 | fn | carriesBinaryData | (private) | `function carriesBinaryData(record: Record<strin...` |
| 344 | fn | sanitizeStructuredToolResultValue | (private) | `function sanitizeStructuredToolResultValue(` |
| 389 | fn | stringifyStructuredToolResultContent | (private) | `function stringifyStructuredToolResultContent(b...` |
| 407 | fn | resolveToolResultContentBlocks | (private) | `function resolveToolResultContentBlocks(result:...` |
| 425 | fn | extractToolResultText | pub | `export function extractToolResultText(result: u...` |
| 456 | fn | pushUniqueMessagingMediaUrl | (private) | `function pushUniqueMessagingMediaUrl(urls: stri...` |
| 469 | fn | collectMessagingMediaUrlsFromRecord | pub | `export function collectMessagingMediaUrlsFromRe...` |
| 472 | fn | pushAttachment | (private) | `const pushAttachment = (value: unknown) => {` |
| 512 | fn | collectMessagingMediaUrlsFromToolResult | pub | `export function collectMessagingMediaUrlsFromTo...` |
| 515 | fn | appendFromRecord | (private) | `const appendFromRecord = (value: unknown) => {` |
| 543 | fn | extractMessagingToolSourceReplyPayload | pub | `export function extractMessagingToolSourceReply...` |
| 634 | fn | isCoreToolResultMediaTrustedName | (private) | `function isCoreToolResultMediaTrustedName(toolN...` |
| 641 | fn | isExternalToolResult | (private) | `function isExternalToolResult(result: unknown):...` |
| 649 | fn | isToolResultMediaTrusted | (private) | `function isToolResultMediaTrusted(` |
| 670 | fn | isTrustedOwnedTtsLocalMedia | (private) | `function isTrustedOwnedTtsLocalMedia(` |
| 689 | fn | filterToolResultMediaUrls | pub | `export function filterToolResultMediaUrls(` |
| 736 | type | ToolResultMediaArtifact | (private) | - |
| 742 | fn | readToolResultDetailsMedia | (private) | `function readToolResultDetailsMedia(` |
| 753 | fn | collectStructuredMediaUrls | (private) | `function collectStructuredMediaUrls(media: Reco...` |
| 755 | fn | pushString | (private) | `const pushString = (value: unknown) => {` |
| 764 | fn | pushAttachment | (private) | `const pushAttachment = (value: unknown) => {` |
| 795 | fn | isNonOutboundToolResultMedia | (private) | `function isNonOutboundToolResultMedia(media: Re...` |
| 799 | fn | hasImageContentBlock | (private) | `function hasImageContentBlock(content: unknown[...` |
| 812 | fn | extractToolResultMediaArtifact | pub | `export function extractToolResultMediaArtifact(` |
| 852 | fn | extractToolErrorCode | pub | `export function extractToolErrorCode(result: un...` |
| 860 | fn | isToolResultTimedOut | pub | `export function isToolResultTimedOut(result: un...` |
| 868 | fn | extractToolErrorMessage | pub | `export function extractToolErrorMessage(result:...` |
| 912 | fn | resolveMessageToolTarget | (private) | `function resolveMessageToolTarget(params: {` |
| 940 | fn | resolveMessagingToolThreadEvidence | (private) | `function resolveMessagingToolThreadEvidence(par...` |
| 1014 | fn | extractMessagingToolSend | pub | `export function extractMessagingToolSend(` |
| 1141 | fn | extractMessagingToolSendResult | pub | `export function extractMessagingToolSendResult(` |

## Public API

### `truncateLiveExecOutput`

```
export function truncateLiveExecOutput(text: string): string {
```

**Line:** 61 | **Kind:** fn

### `capLiveExecResult`

```
export function capLiveExecResult(result: unknown): unknown {
```

**Line:** 68 | **Kind:** fn

### `buildToolLifecycleErrorResult`

```
export function buildToolLifecycleErrorResult(error: unknown): {
```

**Line:** 208 | **Kind:** fn

### `sanitizeToolArgs`

```
export function sanitizeToolArgs(args: unknown): unknown {
```

**Line:** 263 | **Kind:** fn

### `sanitizeToolResult`

```
export function sanitizeToolResult(result: unknown): unknown {
```

**Line:** 267 | **Kind:** fn

### `extractToolResultText`

```
export function extractToolResultText(result: unknown): string | undefined {
```

**Line:** 425 | **Kind:** fn

### `collectMessagingMediaUrlsFromRecord`

```
export function collectMessagingMediaUrlsFromRecord(record: Record<string, unknown>): string[] {
```

**Line:** 469 | **Kind:** fn

### `collectMessagingMediaUrlsFromToolResult`

```
export function collectMessagingMediaUrlsFromToolResult(result: unknown): string[] {
```

**Line:** 512 | **Kind:** fn

### `extractMessagingToolSourceReplyPayload`

```
export function extractMessagingToolSourceReplyPayload(
```

**Line:** 543 | **Kind:** fn

### `filterToolResultMediaUrls`

```
export function filterToolResultMediaUrls(
```

**Line:** 689 | **Kind:** fn

### `extractToolResultMediaArtifact`

```
export function extractToolResultMediaArtifact(
```

**Line:** 812 | **Kind:** fn

### `extractToolErrorCode`

```
export function extractToolErrorCode(result: unknown): string | undefined {
```

**Line:** 852 | **Kind:** fn

### `isToolResultTimedOut`

```
export function isToolResultTimedOut(result: unknown): boolean {
```

**Line:** 860 | **Kind:** fn

### `extractToolErrorMessage`

```
export function extractToolErrorMessage(result: unknown): string | undefined {
```

**Line:** 868 | **Kind:** fn

### `extractMessagingToolSend`

```
export function extractMessagingToolSend(
```

**Line:** 1014 | **Kind:** fn

### `extractMessagingToolSendResult`

```
export function extractMessagingToolSendResult(
```

**Line:** 1141 | **Kind:** fn
