# extensions/signal/src/monitor/event-handler.ts

[← Back to Module](../modules/extensions-signal-src-monitor/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1420
- **Language:** TypeScript
- **Symbols:** 19
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 106 | fn | isSignalReplySessionInitConflictError | (private) | `function isSignalReplySessionInitConflictError(...` |
| 112 | fn | formatAttachmentKindCount | (private) | `function formatAttachmentKindCount(kind: string...` |
| 118 | fn | formatAttachmentSummaryPlaceholder | (private) | `function formatAttachmentSummaryPlaceholder(con...` |
| 130 | fn | resolveSignalInboundRoute | (private) | `function resolveSignalInboundRoute(params: {` |
| 148 | fn | resolveSignalStatusReactionTimestamp | (private) | `function resolveSignalStatusReactionTimestamp(p...` |
| 159 | type | SignalStatusDispatchResult | (private) | - |
| 163 | fn | hasSignalStatusReplyDeliveryFailure | (private) | `function hasSignalStatusReplyDeliveryFailure(re...` |
| 172 | fn | resolveSignalStatusReactionEmojis | (private) | `function resolveSignalStatusReactionEmojis(` |
| 186 | fn | finalizeSignalStatusReaction | (private) | `async function finalizeSignalStatusReaction(par...` |
| 220 | fn | createSignalEventHandler | pub | `export function createSignalEventHandler(deps: ...` |
| 224 | fn | handleSignalInboundMessage | (private) | `async function handleSignalInboundMessage(entry...` |
| 653 | fn | buildFlushIngressLifecycle | (private) | `function buildFlushIngressLifecycle(entries: Si...` |
| 665 | fn | adoptAll | (private) | `const adoptAll = async () => {` |
| 709 | fn | flushSignalInboundEntries | (private) | `async function flushSignalInboundEntries(entrie...` |
| 749 | fn | retrySignalInboundFlush | (private) | `async function retrySignalInboundFlush(` |
| 786 | fn | flushDebouncedSignalInboundEntries | (private) | `const flushDebouncedSignalInboundEntries = asyn...` |
| 818 | fn | reportSignalInboundFlushError | (private) | `const reportSignalInboundFlushError = (err: unk...` |
| 851 | fn | handleReactionOnlyInbound | (private) | `async function handleReactionOnlyInbound(params: {` |
| 1193 | fn | pendingPlaceholder | (private) | `const pendingPlaceholder = (() => {` |

## Public API

### `createSignalEventHandler`

```
export function createSignalEventHandler(deps: SignalEventHandlerDeps) {
```

**Line:** 220 | **Kind:** fn
