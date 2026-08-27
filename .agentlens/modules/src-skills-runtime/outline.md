# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 4 large files in this module.

## src/skills/runtime/refresh.test.ts (1001 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | type | SkillsChangeEvent | (private) |
| 14 | type | WatchEvent | (private) |
| 15 | type | WatchCallback | (private) |
| 17 | fn | createMockWatcher | (private) |
| 94 | fn | posix | (private) |

## src/skills/runtime/refresh.ts (741 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | type | SkillsPathWatchState | (private) |
| 32 | type | WatchTarget | (private) |
| 38 | type | WatchTargetCacheEntry | (private) |
| 43 | type | FileStabilitySnapshot | (private) |
| 92 | fn | resolveWatchTargets | (private) |
| 193 | fn | toWatchRoot | (private) |
| 198 | fn | makeWatchTarget | (private) |
| 203 | fn | addWatchTarget | (private) |
| 213 | fn | addSkillRootWatchTargets | (private) |
| 227 | fn | addTrustedSymlinkSkillWatchTargets | (private) |
| 311 | fn | readBudgetedDirEntries | (private) |
| 337 | fn | isTrustedSymlinkSkillTarget | (private) |
| 352 | fn | watchDepthForPath | (private) |
| 366 | fn | isPathInside | (private) |
| 373 | fn | isPathInsideAnyRoot | (private) |
| 377 | fn | shouldIgnoreSkillsWatchPath | (private) |
| 399 | fn | isSkillFileWatchPath | (private) |
| 407 | fn | getRawWatchedPath | (private) |
| 415 | fn | rawPathToString | (private) |
| 426 | fn | resolveRawSkillsWatchPath | (private) |
| 434 | fn | readFileStabilitySnapshot | (private) |
| 443 | fn | waitForStableSkillFile | (private) |
| 470 | fn | resolveWatchDebounceMs | (private) |
| 475 | fn | resolveSkillsWatcherUsePolling | (private) |
| 493 | fn | sameWatchTargets | (private) |
| 505 | fn | createSkillsPathWatcher | (private) |
| 528 | fn | schedule | (private) |
| 549 | fn | scheduleRawSkillFile | (private) |
| 582 | fn | teardownSkillsPathWatcher | (private) |
| 589 | fn | subscribeWorkspaceToPath | (private) |
| 622 | fn | unsubscribeWorkspaceFromPath | (private) |
| 634 | fn | disposeWorkspaceWatchState | (private) |
| 653 | fn | evictIdleWorkspaceWatchStates | (private) |
| 662 | fn | ensureSkillsWatcher | pub |
| 715 | fn | resetSkillsRefreshForTest | (private) |

## src/skills/runtime/remote.test.ts (793 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | fn | createRemoteSkillWorkspace | (private) |
| 49 | fn | recordRemoteMacWithSystemWhich | (private) |
| 540 | fn | refresh | (private) |
| 632 | fn | refresh | (private) |

## src/skills/runtime/remote.ts (743 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | type | RemoteNodeRecord | (private) |
| 29 | type | RemoteNodeProbeState | (private) |
| 39 | type | RemoteBinProbeInflight | (private) |
| 50 | fn | describeNode | (private) |
| 58 | fn | extractErrorMessage | (private) |
| 87 | type | RemoteBinProbeLogContext | (private) |
| 93 | fn | resolveRemoteBinProbeLogContext | (private) |
| 110 | fn | logRemoteBinProbeFailure | (private) |
| 141 | fn | isMacPlatform | (private) |
| 156 | fn | supportsSystemRun | (private) |
| 160 | fn | supportsSystemWhich | (private) |
| 164 | fn | upsertNode | (private) |
| 190 | fn | clearRemoteNodeBins | (private) |
| 199 | fn | buildRemoteProbeSignature | (private) |
| 215 | fn | shouldSkipRemoteNodeProbe | (private) |
| 225 | fn | restoreCachedRemoteNodeBins | (private) |
| 235 | fn | isCurrentRemoteNodeConnection | (private) |
| 243 | fn | markRemoteNodeProbeSuccess | (private) |
| 262 | fn | markRemoteNodeProbeFailure | (private) |
| 286 | fn | setSkillsRemoteRegistry | pub |
| 293 | fn | primeRemoteSkillsCache | pub |
| 325 | fn | recordRemoteNodeInfo | pub |
| 351 | fn | recordRemoteNodeBins | pub |
| 355 | fn | removeRemoteNodeInfo | pub |
| 374 | fn | collectRequiredBins | (private) |
| 397 | fn | buildBinProbeScript | (private) |
| 402 | fn | parseBinProbePayload | (private) |
| 431 | fn | areBinSetsEqual | (private) |
| 446 | fn | refreshRemoteNodeBins | pub |
| 477 | fn | refreshRemoteNodeBinsUncoalesced | (private) |
| 691 | fn | getRemoteSkillEligibility | pub |
| 724 | fn | refreshRemoteBinsForConnectedNodes | pub |
