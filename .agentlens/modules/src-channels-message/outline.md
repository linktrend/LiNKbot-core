# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 7 large files in this module.

## src/channels/message/ingress-drain.test.ts (1094 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | type | ChannelIngressDispatchLifecycle | (private) |
| 25 | type | Payload | (private) |
| 27 | fn | withTempState | (private) |

## src/channels/message/ingress-drain.ts (848 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | class | IngressAdoptionLostError | (private) |
| 53 | fn | isIngressAdoptionLostError | pub |
| 58 | type | ChannelIngressDispatchLifecycle | (private) |
| 85 | type | ChannelIngressDrainDispatchResult | (private) |
| 126 | type | ChannelIngressDrain | pub |
| 152 | fn | resolveLaneKey | (private) |
| 159 | fn | sortedKeys | (private) |
| 168 | fn | bindIngressLifecycleToReplyOptions | pub |
| 192 | fn | createChannelIngressDrain | pub |
| 214 | fn | log | (private) |
| 218 | fn | clearStallTimer | (private) |
| 225 | fn | clearClaimRefresh | (private) |
| 232 | fn | abortActiveClaims | (private) |
| 249 | fn | removeActive | (private) |
| 257 | fn | markLeaseReclaimed | (private) |
| 273 | fn | armClaimRefresh | (private) |
| 304 | fn | isStopped | (private) |
| 306 | fn | commitClaimWriteWithRetry | (private) |
| 372 | fn | releaseClaim | (private) |
| 385 | fn | failClaim | (private) |
| 399 | fn | applyFailureDisposition | (private) |
| 461 | fn | armStallWatchdog | (private) |
| 734 | fn | drainOnce | (private) |
| 740 | fn | shouldStop | (private) |

## src/channels/message/ingress-monitor.test.ts (522 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | type | RawEvent | (private) |
| 12 | type | StoredEvent | (private) |
| 14 | class | PermanentIngressError | (private) |
| 16 | fn | withQueue | (private) |
| 29 | fn | createMonitor | (private) |
| 211 | fn | releaseDelivery | (private) |
| 260 | fn | releaseFirst | (private) |
| 264 | fn | releaseRetry | (private) |
| 392 | fn | markReleaseStarted | (private) |
| 396 | fn | releaseSettlement | (private) |
| 431 | fn | markPruneStarted | (private) |
| 435 | fn | releasePrune | (private) |

## src/channels/message/ingress-monitor.ts (648 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | type | ChannelIngressMonitorFacts | (private) |
| 24 | type | ChannelIngressMonitorLifecycle | pub |
| 34 | type | ChannelIngressMonitorDeliveryResult | pub |
| 39 | type | ChannelIngressMonitorInspectionContext | (private) |
| 47 | type | ChannelIngressMonitorClaimErrorKind | (private) |
| 75 | type | ChannelIngressMonitorRetention | (private) |
| 135 | fn | createChannelIngressMonitor | pub |
| 147 | type | Queue | (private) |
| 215 | fn | createStoppedError | (private) |
| 220 | fn | isAborted | (private) |
| 453 | fn | clearPollTimer | (private) |
| 508 | fn | admitRaw | (private) |

## src/channels/message/ingress-queue.test.ts (1077 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | type | ChannelIngressTestDatabase | (private) |
| 22 | fn | withTempState | (private) |
| 547 | fn | insertCorruptRow | (private) |

## src/channels/message/ingress-queue.ts (1447 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 52 | type | ChannelIngressQueueClaimRef | pub |
| 60 | type | ChannelIngressQueueCorruptClaim | pub |
| 85 | type | ChannelIngressQueueFailedRecord | (private) |
| 132 | type | ChannelIngressQueueFailedCount | (private) |
| 140 | type | ChannelIngressQueuePruneOptions | pub |
| 251 | type | CreateChannelIngressQueueOptions | pub |
| 258 | type | ChannelIngressDatabase | (private) |
| 259 | type | ChannelIngressRow | (private) |
| 265 | fn | normalizePart | (private) |
| 271 | fn | createStateDirEnv | (private) |
| 280 | fn | openStateDatabase | (private) |
| 286 | fn | getChannelIngressKysely | (private) |
| 290 | fn | affectedRows | (private) |
| 294 | type | ParseJsonResult | (private) |
| 296 | fn | parseJson | (private) |
| 304 | fn | parseFailedPayload | (private) |
| 308 | fn | baseRecord | (private) |
| 332 | fn | claimedRecord | (private) |
| 349 | fn | corruptClaimRecord | (private) |
| 366 | fn | completedRecord | (private) |
| 383 | fn | failedRecord | (private) |
| 408 | fn | selectRow | (private) |
| 420 | fn | tombstoneCorruptPayloadRow | (private) |
| 459 | fn | idFrom | (private) |
| 467 | fn | claimTokenFrom | (private) |
| 473 | fn | rowToEnqueueResult | (private) |
| 494 | fn | normalizeLimit | (private) |
| 498 | fn | normalizeScanLimit | (private) |
| 509 | fn | normalizeMaxEntries | (private) |
| 513 | fn | normalizedProtectedIds | (private) |
| 517 | fn | normalizedCandidateIds | (private) |
| 521 | fn | queueNameForParts | (private) |
| 527 | fn | countFailedChannelIngressQueueEntries | pub |
| 561 | fn | createChannelIngressQueue | pub |
| 1385 | fn | pruneMaxEntries | (private) |

## src/channels/message/send.test.ts (677 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | DeliveryIntentCallbackParams | (private) |
| 27 | type | DeliveryRequest | (private) |
| 37 | fn | requireMockCall | (private) |
| 50 | fn | latestDeliveryRequest | (private) |
| 57 | fn | expectBatchStatus | (private) |
