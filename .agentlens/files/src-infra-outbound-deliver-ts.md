# src/infra/outbound/deliver.ts

[← Back to Module](../modules/src-infra-outbound/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2836
- **Language:** TypeScript
- **Symbols:** 59
- **Public symbols:** 8

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 128 | type | OutboundDeliveryQueuePolicy | pub | - |
| 130 | type | OutboundDeliveryIntent | pub | - |
| 138 | type | DurableFinalDeliveryRequirement | pub | - |
| 142 | type | DurableFinalDeliveryRequirements | pub | - |
| 146 | type | OutboundDurableDeliverySupport | (private) | - |
| 166 | type | ChannelHandler | (private) | - |
| 215 | type | PlatformSendRoute | (private) | - |
| 220 | type | ChannelHandlerParams | (private) | - |
| 246 | fn | resolveChannelOutboundDirectiveOptions | (private) | `async function resolveChannelOutboundDirectiveO...` |
| 256 | fn | createChannelHandler | (private) | `async function createChannelHandler(params: Cha...` |
| 266 | fn | loadBootstrappedOutboundAdapter | (private) | `async function loadBootstrappedOutboundAdapter(...` |
| 282 | fn | runChannelMessageSendWithLifecycle | (private) | `async function runChannelMessageSendWithLifecycle<` |
| 334 | fn | resolveOutboundDurableFinalDeliverySupport | pub | `export async function resolveOutboundDurableFin...` |
| 383 | fn | createPluginHandler | (private) | `function createPluginHandler(` |
| 426 | fn | resolveCtx | (private) | `const resolveCtx = (overrides?: OutboundMessage...` |
| 640 | fn | normalizeChannelMessageSendResult | (private) | `function normalizeChannelMessageSendResult(` |
| 657 | fn | createChannelOutboundContextBase | (private) | `const createChannelOutboundContextBase = (param...` |
| 689 | type | QueuedPostSendState | (private) | - |
| 691 | type | QueuedPreSendState | (private) | - |
| 693 | fn | persistQueuedPreSendState | (private) | `async function persistQueuedPreSendState(params: {` |
| 723 | fn | persistQueuedPostSendState | (private) | `async function persistQueuedPostSendState(param...` |
| 749 | type | DeliverOutboundPayloadsCoreParams | (private) | - |
| 805 | type | DeliverOutboundPayloadsParams | pub | - |
| 819 | type | MessageSentEvent | (private) | - |
| 835 | fn | sessionKeyForDeliveryDiagnostics | (private) | `function sessionKeyForDeliveryDiagnostics(param...` |
| 842 | fn | deliveryKindForPayload | (private) | `function deliveryKindForPayload(` |
| 855 | fn | emitMessageDeliveryStarted | (private) | `function emitMessageDeliveryStarted(params: {` |
| 868 | fn | emitMessageDeliveryCompleted | (private) | `function emitMessageDeliveryCompleted(params: {` |
| 885 | fn | emitMessageDeliveryError | (private) | `function emitMessageDeliveryError(params: {` |
| 902 | fn | normalizeEmptyPayloadForDelivery | (private) | `function normalizeEmptyPayloadForDelivery(paylo...` |
| 918 | type | NormalizedPayloadForChannelDelivery | (private) | - |
| 923 | fn | normalizePayloadsForChannelDelivery | (private) | `function normalizePayloadsForChannelDelivery(` |
| 953 | fn | stripInternalRuntimeScaffoldingFromValue | (private) | `function stripInternalRuntimeScaffoldingFromVal...` |
| 984 | fn | collectPayloadMediaSources | (private) | `function collectPayloadMediaSources(payloads: r...` |
| 997 | fn | resolveOutboundMediaAccessForSend | (private) | `function resolveOutboundMediaAccessForSend(` |
| 1020 | fn | stripInternalRuntimeScaffoldingFromPayload | (private) | `function stripInternalRuntimeScaffoldingFromPay...` |
| 1027 | fn | buildPayloadSummary | (private) | `function buildPayloadSummary(payload: ReplyPayl...` |
| 1031 | fn | hasDeliveryResultIdentity | (private) | `function hasDeliveryResultIdentity(result: Outb...` |
| 1043 | fn | normalizeDeliveryPin | (private) | `function normalizeDeliveryPin(payload: ReplyPay...` |
| 1064 | fn | maybePinDeliveredMessage | (private) | `async function maybePinDeliveredMessage(params: {` |
| 1115 | fn | maybeNotifyAfterDeliveredPayload | (private) | `async function maybeNotifyAfterDeliveredPayload...` |
| 1139 | fn | renderPresentationForDelivery | (private) | `async function renderPresentationForDelivery(` |
| 1185 | fn | createMessageSentEmitter | (private) | `function createMessageSentEmitter(params: {` |
| 1196 | fn | emitMessageSent | (private) | `const emitMessageSent = (event: MessageSentEven...` |
| 1253 | fn | applyMessageSendingHook | (private) | `async function applyMessageSendingHook(params: {` |
| 1357 | fn | applyReplyPayloadSendingHook | (private) | `async function applyReplyPayloadSendingHook(par...` |
| 1386 | fn | toOutboundDeliveryError | (private) | `function toOutboundDeliveryError(params: {` |
| 1403 | fn | suppressedPayloadOutcome | (private) | `function suppressedPayloadOutcome(params: {` |
| 1420 | fn | materializeQueueCustodyMedia | (private) | `function materializeQueueCustodyMedia(` |
| 1453 | fn | deliverOutboundPayloads | pub | `export async function deliverOutboundPayloads(` |
| 1459 | fn | deliverOutboundPayloadsInternal | pub | `export async function deliverOutboundPayloadsIn...` |
| 1664 | fn | deliverOutboundPayloadsWithQueueCleanup | (private) | `async function deliverOutboundPayloadsWithQueue...` |
| 2039 | fn | deliverOutboundPayloadsCore | (private) | `async function deliverOutboundPayloadsCore(` |
| 2073 | fn | add | (private) | `const add = (value: string | undefined) => {` |
| 2219 | fn | createHandler | (private) | `const createHandler = (mediaSources: readonly s...` |
| 2272 | fn | sendTextChunks | (private) | `const sendTextChunks = async (` |
| 2386 | fn | startDeliveryDiagnostics | (private) | `const startDeliveryDiagnostics = (kind: Diagnos...` |
| 2397 | fn | completeDeliveryDiagnostics | (private) | `const completeDeliveryDiagnostics = (resultCoun...` |
| 2410 | fn | errorDeliveryDiagnostics | (private) | `const errorDeliveryDiagnostics = (err: unknown)...` |

## Public API

### `resolveOutboundDurableFinalDeliverySupport`

```
export async function resolveOutboundDurableFinalDeliverySupport(params: {
```

**Line:** 334 | **Kind:** fn

### `deliverOutboundPayloads`

```
export async function deliverOutboundPayloads(
```

**Line:** 1453 | **Kind:** fn

### `deliverOutboundPayloadsInternal`

```
export async function deliverOutboundPayloadsInternal(
```

**Line:** 1459 | **Kind:** fn
