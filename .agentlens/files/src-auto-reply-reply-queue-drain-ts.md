# src/auto-reply/reply/queue/drain.ts

[← Back to Module](../modules/src-auto-reply-reply-queue/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1385
- **Language:** TypeScript
- **Symbols:** 53
- **Public symbols:** 7

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 57 | fn | hasExclusiveTurnAdmission | (private) | `function hasExclusiveTurnAdmission(` |
| 65 | fn | resolveTurnAdoptionLifecycleDeliveryKey | (private) | `function resolveTurnAdoptionLifecycleDeliveryKey(` |
| 87 | fn | assertSingleAdmissionOwner | (private) | `function assertSingleAdmissionOwner(items: read...` |
| 98 | fn | rememberFollowupDrainCallback | pub | `export function rememberFollowupDrainCallback(` |
| 105 | fn | clearFollowupDrainCallback | pub | `export function clearFollowupDrainCallback(key:...` |
| 110 | fn | kickFollowupDrainIfIdle | pub | `export function kickFollowupDrainIfIdle(key: st...` |
| 118 | type | OriginRoutingMetadata | (private) | - |
| 130 | fn | resolveOriginRoutingMetadata | (private) | `function resolveOriginRoutingMetadata(items: Fo...` |
| 165 | fn | resolveFollowupAuthorizationKey | (private) | `function resolveFollowupAuthorizationKey(run: F...` |
| 183 | fn | resolveFollowupDeliveryContextKey | pub | `export function resolveFollowupDeliveryContextK...` |
| 232 | fn | resolveFollowupReplyAnchor | pub | `export function resolveFollowupReplyAnchor(run:...` |
| 251 | fn | splitCollectItemsByDeliveryContext | (private) | `function splitCollectItemsByDeliveryContext(ite...` |
| 280 | fn | renderCollectItem | (private) | `function renderCollectItem(item: FollowupRun, i...` |
| 284 | fn | renderCollectItemPrompt | (private) | `function renderCollectItemPrompt(item: Followup...` |
| 291 | fn | collectQueuedImages | (private) | `function collectQueuedImages(items: FollowupRun...` |
| 308 | type | FollowupRuntimeMetadata | (private) | - |
| 320 | fn | hasCurrentTurnRuntimeMetadata | (private) | `function hasCurrentTurnRuntimeMetadata(item: Fo...` |
| 328 | fn | hasRuntimeOnlyFollowupMetadata | (private) | `function hasRuntimeOnlyFollowupMetadata(item: F...` |
| 332 | fn | buildCollectTranscriptPrompt | (private) | `function buildCollectTranscriptPrompt(items: Fo...` |
| 341 | fn | resolveFollowupTranscriptTarget | (private) | `function resolveFollowupTranscriptTarget(source...` |
| 362 | fn | createCollectUserTurnTranscriptRecorder | (private) | `function createCollectUserTurnTranscriptRecorde...` |
| 368 | fn | buildInput | (private) | `const buildInput = async () => {` |
| 418 | fn | resolveAggregateOwner | (private) | `function resolveAggregateOwner(items: readonly ...` |
| 428 | fn | requiresIndividualCollectDrain | (private) | `function requiresIndividualCollectDrain(item: F...` |
| 432 | type | AggregateCancellation | (private) | - |
| 438 | fn | createAggregateCancellation | (private) | `function createAggregateCancellation(items: rea...` |
| 470 | fn | abort | (private) | `const abort = () => controller.abort();` |
| 478 | fn | disposeSignal | (private) | `const disposeSignal = (signal: AbortSignal) => {` |
| 505 | fn | collectCurrentInboundContext | (private) | `function collectCurrentInboundContext(items: Fo...` |
| 515 | fn | renderField | (private) | `const renderField = (field: "text" | "resumable...` |
| 538 | fn | collectRuntimeMetadata | (private) | `function collectRuntimeMetadata(` |
| 568 | type | FollowupQueueSummaryState | (private) | - |
| 584 | type | QueueSummaryDelivery | (private) | - |
| 590 | fn | createQueueSummaryDelivery | (private) | `function createQueueSummaryDelivery(params: {` |
| 623 | fn | consumeQueueSummaryDelivery | (private) | `function consumeQueueSummaryDelivery(` |
| 660 | fn | releaseQueueSummaryDeliveryForRetry | (private) | `function releaseQueueSummaryDeliveryForRetry(` |
| 675 | fn | dropAbortedQueueSummarySources | (private) | `function dropAbortedQueueSummarySources(queue: ...` |
| 691 | fn | runQueueSummaryDelivery | (private) | `async function runQueueSummaryDelivery(` |
| 788 | fn | dropAbortedFollowups | (private) | `async function dropAbortedFollowups(` |
| 805 | fn | resolveCrossChannelKey | (private) | `function resolveCrossChannelKey(item: FollowupR...` |
| 850 | fn | resolveOverflowSummarySourceGroup | (private) | `function resolveOverflowSummarySourceGroup(queu...` |
| 868 | fn | drainProtectedPriorityFollowup | (private) | `async function drainProtectedPriorityFollowup(` |
| 881 | fn | createOverflowSummaryRetrySource | pub | `export function createOverflowSummaryRetrySourc...` |
| 907 | fn | resolveOverflowSummaryInboundEventKind | (private) | `function resolveOverflowSummaryInboundEventKind...` |
| 914 | fn | runSyntheticOverflowSummary | (private) | `async function runSyntheticOverflowSummary(para...` |
| 984 | fn | drainElidedOverflowSummary | (private) | `async function drainElidedOverflowSummary(param...` |
| 1070 | fn | drainOverflowSummaryGroup | (private) | `async function drainOverflowSummaryGroup(params: {` |
| 1114 | fn | scheduleFollowupDrain | pub | `export function scheduleFollowupDrain(` |
| 1237 | fn | restoreGroupItems | (private) | `const restoreGroupItems = (groupItemsToRestore:...` |
| 1248 | fn | consumeAdmittedGroup | (private) | `const consumeAdmittedGroup = () => {` |
| 1258 | fn | admitGroupSources | (private) | `const admitGroupSources = async () => {` |
| 1262 | fn | completeGroup | (private) | `const completeGroup = () => {` |
| 1268 | fn | drainGroup | (private) | `const drainGroup = async () => {` |

## Public API

### `rememberFollowupDrainCallback`

```
export function rememberFollowupDrainCallback(
```

**Line:** 98 | **Kind:** fn

### `clearFollowupDrainCallback`

```
export function clearFollowupDrainCallback(key: string): void {
```

**Line:** 105 | **Kind:** fn

### `kickFollowupDrainIfIdle`

```
export function kickFollowupDrainIfIdle(key: string): void {
```

**Line:** 110 | **Kind:** fn

### `resolveFollowupDeliveryContextKey`

```
export function resolveFollowupDeliveryContextKey(run: FollowupRun): string {
```

**Line:** 183 | **Kind:** fn

### `resolveFollowupReplyAnchor`

```
export function resolveFollowupReplyAnchor(run: FollowupRun): string | undefined {
```

**Line:** 232 | **Kind:** fn

### `createOverflowSummaryRetrySource`

```
export function createOverflowSummaryRetrySource(source: FollowupRun): FollowupRun {
```

**Line:** 881 | **Kind:** fn

### `scheduleFollowupDrain`

```
export function scheduleFollowupDrain(
```

**Line:** 1114 | **Kind:** fn
