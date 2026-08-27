# src/channels/message/ingress-queue.ts

[← Back to Module](../modules/src-channels-message/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1447
- **Language:** TypeScript
- **Symbols:** 35
- **Public symbols:** 6

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 52 | type | ChannelIngressQueueClaimRef | pub | - |
| 60 | type | ChannelIngressQueueCorruptClaim | pub | - |
| 85 | type | ChannelIngressQueueFailedRecord | (private) | - |
| 132 | type | ChannelIngressQueueFailedCount | (private) | - |
| 140 | type | ChannelIngressQueuePruneOptions | pub | - |
| 251 | type | CreateChannelIngressQueueOptions | pub | - |
| 258 | type | ChannelIngressDatabase | (private) | - |
| 259 | type | ChannelIngressRow | (private) | - |
| 265 | fn | normalizePart | (private) | `function normalizePart(value: string | undefine...` |
| 271 | fn | createStateDirEnv | (private) | `function createStateDirEnv(` |
| 280 | fn | openStateDatabase | (private) | `function openStateDatabase(stateDir?: string) {` |
| 286 | fn | getChannelIngressKysely | (private) | `function getChannelIngressKysely(db: DatabaseSy...` |
| 290 | fn | affectedRows | (private) | `function affectedRows(result: { numAffectedRows...` |
| 294 | type | ParseJsonResult | (private) | - |
| 296 | fn | parseJson | (private) | `function parseJson(value: string): ParseJsonRes...` |
| 304 | fn | parseFailedPayload | (private) | `function parseFailedPayload(value: string): Par...` |
| 308 | fn | baseRecord | (private) | `function baseRecord<TPayload, TMetadata>(` |
| 332 | fn | claimedRecord | (private) | `function claimedRecord<TPayload, TMetadata>(` |
| 349 | fn | corruptClaimRecord | (private) | `function corruptClaimRecord(row: ChannelIngress...` |
| 366 | fn | completedRecord | (private) | `function completedRecord<TCompletedMetadata>(` |
| 383 | fn | failedRecord | (private) | `function failedRecord<TPayload, TMetadata>(` |
| 408 | fn | selectRow | (private) | `function selectRow(db: DatabaseSync, queueName:...` |
| 420 | fn | tombstoneCorruptPayloadRow | (private) | `function tombstoneCorruptPayloadRow(params: {` |
| 459 | fn | idFrom | (private) | `function idFrom(idOrRecord: string | { id: stri...` |
| 467 | fn | claimTokenFrom | (private) | `function claimTokenFrom(` |
| 473 | fn | rowToEnqueueResult | (private) | `function rowToEnqueueResult<TPayload, TMetadata...` |
| 494 | fn | normalizeLimit | (private) | `function normalizeLimit(limit: number | "all" |...` |
| 498 | fn | normalizeScanLimit | (private) | `function normalizeScanLimit(limit: number | und...` |
| 509 | fn | normalizeMaxEntries | (private) | `function normalizeMaxEntries(value: number | un...` |
| 513 | fn | normalizedProtectedIds | (private) | `function normalizedProtectedIds(ids: Iterable<s...` |
| 517 | fn | normalizedCandidateIds | (private) | `function normalizedCandidateIds(ids: Iterable<s...` |
| 521 | fn | queueNameForParts | (private) | `function queueNameForParts(channelId: string, a...` |
| 527 | fn | countFailedChannelIngressQueueEntries | pub | `export function countFailedChannelIngressQueueE...` |
| 561 | fn | createChannelIngressQueue | pub | `export function createChannelIngressQueue<` |
| 1385 | fn | pruneMaxEntries | (private) | `const pruneMaxEntries = (status: string, maxEnt...` |

## Public API

### `countFailedChannelIngressQueueEntries`

```
export function countFailedChannelIngressQueueEntries(
```

**Line:** 527 | **Kind:** fn

### `createChannelIngressQueue`

```
export function createChannelIngressQueue<
```

**Line:** 561 | **Kind:** fn
