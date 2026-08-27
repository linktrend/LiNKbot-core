# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 17 large files in this module.

## extensions/memory-core/src/memory/hybrid.test.ts (565 lines)

_No symbols extracted._

## extensions/memory-core/src/memory/index.test.ts (3048 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 58 | fn | createLocalWorkerExitError | (private) |
| 66 | fn | setMemoryIndexStateDir | (private) |
| 70 | fn | restoreMemoryIndexStateDir | (private) |
| 79 | fn | embedText | (private) |
| 329 | fn | resetManagerForTest | (private) |
| 332 | fn | db | (private) |
| 359 | type | TestCfg | (private) |
| 361 | fn | createCfg | (private) |
| 423 | fn | seedMemoryIndexSessionTranscript | (private) |
| 468 | fn | requireManager | (private) |
| 478 | fn | getPersistentManager | (private) |
| 486 | fn | getFreshManager | (private) |
| 494 | fn | rewritePersistedProviderIdentity | (private) |
| 521 | fn | expectHybridKeywordSearchFindsMemory | (private) |
| 545 | type | VectorState | (private) |
| 558 | fn | getFtsSessionManager | (private) |
| 730 | fn | betaRow | (private) |
| 1234 | fn | db | (private) |
| 1534 | fn | originalRunSyncWithReadonlyRecovery | (private) |
| 1786 | fn | db | (private) |
| 2399 | type | HybridKeywordHit | (private) |
| 2494 | type | TestKeywordHit | (private) |

## extensions/memory-core/src/memory/manager-embedding-ops.ts (1041 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 75 | fn | resolveEmbeddingSecondsTimeoutMs | (private) |
| 86 | type | MemoryIndexEntry | (private) |
| 88 | type | PreparedMemoryIndexEntry | (private) |
| 101 | fn | countBatchSources | (private) |
| 109 | fn | formatBatchSourceLabel | (private) |
| 114 | fn | formatBatchSourceCounts | (private) |
| 123 | fn | splitSourceWideEmbeddingChunks | (private) |
| 132 | fn | resolveEmbeddingTimeoutMs | (private) |
| 164 | fn | resolveMemoryIndexConcurrency | (private) |
| 179 | fn | runEmbeddingOperationWithTimeout | (private) |
| 894 | fn | flushPrepared | (private) |

## extensions/memory-core/src/memory/manager-search.test.ts (1803 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | fn | insertKeywordFixture | (private) |
| 59 | fn | supportsTrigramFts | (private) |
| 74 | fn | createTrigramDb | (private) |
| 89 | fn | runSearch | (private) |
| 228 | fn | supportsFts | (private) |
| 242 | fn | createFtsDb | (private) |
| 281 | fn | brokenBuildFtsQuery | (private) |
| 362 | fn | brokenBuildFtsQuery | (private) |
| 409 | fn | brokenBuildFtsQuery | (private) |
| 509 | fn | search | (private) |
| 693 | fn | search | (private) |
| 780 | fn | search | (private) |
| 982 | fn | search | (private) |
| 1027 | fn | search | (private) |
| 1066 | fn | search | (private) |
| 1145 | fn | supportsFts | (private) |
| 1264 | type | ChunkRow | (private) |
| 1392 | fn | createFallbackDb | (private) |
| 1402 | fn | insertFallbackChunk | (private) |
| 1581 | fn | refCosine | (private) |
| 1704 | fn | addChunk | (private) |

## extensions/memory-core/src/memory/manager-search.ts (991 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | fn | yieldToEventLoop | (private) |
| 36 | type | SearchSource | (private) |
| 38 | type | SearchRowResult | (private) |
| 48 | type | PathKeywordSearchResult | (private) |
| 54 | fn | comparePathKeywordSearchResults | (private) |
| 75 | type | ExactPathSpecificity | pub |
| 77 | fn | normalizeSearchTokens | (private) |
| 81 | fn | scoreFallbackKeywordResult | (private) |
| 108 | fn | escapeLikePattern | (private) |
| 112 | fn | isAscii | (private) |
| 121 | fn | resolveUnicodeCandidateAnchors | (private) |
| 135 | fn | normalizePathIdentifier | (private) |
| 139 | fn | resolveExactPathSpecificity | pub |
| 163 | fn | registerPathSearchSqlFunctions | (private) |
| 189 | type | PathSubstringFilter | (private) |
| 196 | fn | buildPathSubstringFilter | (private) |
| 232 | fn | buildExactPathCandidatePatterns | (private) |
| 277 | fn | buildMatchQueryFromTerms | (private) |
| 285 | fn | readCount | (private) |
| 295 | fn | resolveProviderModels | (private) |
| 299 | fn | buildModelFilter | (private) |
| 305 | fn | planKeywordSearch | (private) |
| 342 | fn | planPathKeywordSearch | (private) |
| 353 | fn | addPlan | (private) |
| 387 | fn | searchVector | pub |
| 404 | fn | searchFallback | (private) |
| 423 | fn | runVectorQuery | (private) |
| 493 | fn | searchChunksByEmbedding | (private) |
| 517 | type | ChunkEmbeddingRow | (private) |
| 577 | fn | searchKeyword | pub |
| 691 | fn | searchPathKeyword | pub |
| 724 | type | ExactPathRow | (private) |
| 819 | type | PathLexicalRow | (private) |
| 828 | fn | loadFilteredLexicalRows | (private) |
| 903 | fn | loadPartitions | (private) |

## extensions/memory-core/src/memory/manager-session-sync-ops.ts (585 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 41 | type | MemorySessionTranscriptUpdate | (private) |
| 136 | fn | fileStates | (private) |

## extensions/memory-core/src/memory/manager-sync-base.ts (693 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | type | MemorySyncProgressState | pub |
| 55 | type | MemoryIndexEntry | pub |
| 67 | type | MemoryIndexWorkItem | pub |
| 73 | type | MemorySourceSyncPlan | pub |
| 78 | type | MemorySessionDeltaState | (private) |
| 84 | type | MemoryReindexRetryState | (private) |
| 102 | fn | memoryTableExists | (private) |
| 586 | type | CacheRow | (private) |

## extensions/memory-core/src/memory/manager-sync-ops.startup-catchup.test.ts (725 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | type | MemoryIndexEntry | (private) |
| 39 | type | SyncParams | (private) |
| 47 | type | MemorySessionTranscriptUpdate | (private) |
| 62 | type | SourceStateRow | (private) |
| 63 | type | StartupCatchupHarnessInternals | (private) |
| 72 | fn | setStartupStateDir | (private) |
| 76 | fn | setStartupConfigPath | (private) |
| 80 | fn | restoreStartupEnv | (private) |
| 93 | fn | emitSessionTranscriptUpdate | (private) |
| 97 | class | SessionStartupCatchupHarness | (private) |
| 294 | fn | writeSessionFile | (private) |
| 310 | fn | configureTestSessionStore | (private) |
| 319 | fn | writeSqliteSession | (private) |

## extensions/memory-core/src/memory/manager-sync-ops.ts (526 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 391 | fn | restoreOriginalState | (private) |

## extensions/memory-core/src/memory/manager-watch-ops.ts (766 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | type | NativeMemoryWatchPair | (private) |
| 47 | type | LinuxMemoryDirectoryWatcher | (private) |
| 52 | fn | resolveMemoryWatchFactory | (private) |
| 62 | fn | resolveMemoryNativeWatchFactory | (private) |
| 74 | fn | shouldIgnoreMemoryWatchPath | (private) |
| 102 | fn | runDetachedMemorySync | (private) |
| 146 | fn | markDirty | (private) |
| 416 | fn | closeAndFallback | (private) |
| 428 | fn | closeDirectorySubtree | (private) |

## extensions/memory-core/src/memory/manager.ts (1675 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 91 | fn | getLocalEmbeddingRuntimeFacts | (private) |
| 109 | type | MemoryIndexManagerPurpose | (private) |
| 110 | type | MemoryEmbeddingProviderRequirement | (private) |
| 119 | type | EmbeddingProbeCacheEntry | (private) |
| 125 | type | KeywordSearchHit | (private) |
| 132 | fn | compareKeywordSearchHits | (private) |
| 168 | fn | closeAllMemoryIndexManagers | pub |
| 179 | fn | closeMemoryIndexManagersForAgent | pub |
| 191 | fn | resolveEffectiveMemorySearchSettings | (private) |
| 209 | fn | resolveConfiguredMemoryEmbeddingProvider | (private) |
| 220 | fn | resolveMemoryEmbeddingProviderRequirement | (private) |
| 243 | fn | resolveMemoryIndexManagerCacheKey | (private) |
| 261 | fn | isMemoryIndexManagerCacheKeyInScope | (private) |
| 275 | fn | closeMemoryIndexManagersForScope | (private) |
| 281 | fn | isScopedKey | (private) |
| 300 | class | MemoryIndexManager | pub |
| 821 | fn | loadKeywordResults | (private) |
| 1299 | fn | getClosed | (private) |
| 1300 | fn | getDb | (private) |
| 1301 | fn | setDb | (private) |
| 1304 | fn | getReadonlyRecoveryAttempts | (private) |
| 1305 | fn | setReadonlyRecoveryAttempts | (private) |
| 1308 | fn | getReadonlyRecoverySuccesses | (private) |
| 1309 | fn | setReadonlyRecoverySuccesses | (private) |
| 1312 | fn | getReadonlyRecoveryFailures | (private) |
| 1313 | fn | setReadonlyRecoveryFailures | (private) |
| 1316 | fn | getReadonlyRecoveryLastError | (private) |
| 1317 | fn | setReadonlyRecoveryLastError | (private) |
| 1586 | fn | rememberCurrentProvider | (private) |
| 1593 | fn | closeProvider | (private) |
| 1607 | fn | drainTrackedProviders | (private) |
| 1620 | fn | reportPendingWorkError | (private) |
| 1623 | fn | awaitCurrentSync | (private) |
| 1655 | fn | hasTargetedSessionSyncParams | (private) |
| 1662 | fn | toLintErrorObject | (private) |

## extensions/memory-core/src/memory/manager.watcher-config.test.ts (1057 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | type | WatchIgnoredFn | (private) |
| 29 | type | ChokidarEvent | (private) |
| 30 | type | ChokidarCallback | (private) |
| 31 | fn | createMockChokidarWatcher | (private) |
| 61 | type | NativeEvent | (private) |
| 62 | type | NativeCallback | (private) |
| 63 | type | NativeErrorCallback | (private) |
| 64 | fn | createMockNativeWatcher | (private) |
| 128 | fn | setWatcherStateDir | (private) |
| 132 | fn | restoreWatcherStateDir | (private) |
| 220 | fn | setupWatcherWorkspace | (private) |
| 229 | fn | createWatcherConfig | (private) |
| 251 | fn | expectWatcherManager | (private) |
| 979 | fn | ensureWatcher | (private) |
| 1016 | fn | recordedStats | (private) |

## extensions/memory-core/src/memory/qmd-collection-controller.ts (560 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | fn | throwIfAborted | (private) |
| 43 | fn | assertLeaseActive | (private) |
| 51 | type | RunQmd | (private) |
| 56 | class | QmdCollectionController | pub |

## extensions/memory-core/src/memory/qmd-manager.test.ts (7925 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 54 | type | WatchOptions | (private) |
| 58 | type | LeaseCall | (private) |
| 60 | type | MockStream | (private) |
| 62 | interface | MockChild | (private) |
| 71 | fn | createMockChild | (private) |
| 104 | fn | emitAndClose | (private) |
| 111 | fn | waitUntil | (private) |
| 123 | fn | isMcporterCommand | (private) |
| 130 | fn | firstWatchOptions | (private) |
| 138 | fn | firstWatchPaths | (private) |
| 146 | fn | firstEmbedLeaseCall | (private) |
| 156 | fn | writeLeaseCalls | (private) |
| 162 | fn | firstWriteLeaseCall | (private) |
| 233 | fn | setQmdStateDir | (private) |
| 237 | fn | seedQmdSessionTranscript | (private) |
| 282 | fn | restoreQmdStateDir | (private) |
| 301 | fn | seedMemoryEmbeddingProviders | (private) |
| 317 | fn | trackManager | (private) |
| 324 | fn | requireValue | (private) |
| 331 | fn | requireArgAfter | (private) |
| 339 | fn | mockMessages | (private) |
| 343 | fn | qmdCommandCalls | (private) |
| 347 | fn | countQmdCommand | (private) |
| 351 | fn | expectMockMessageContains | (private) |
| 355 | fn | expectMockMessageNotContains | (private) |
| 403 | fn | execute | (private) |
| 567 | fn | isSearchCommand | (private) |
| 804 | fn | isCombinedSearch | (private) |
| 865 | fn | expectPathMissing | (private) |
| 875 | fn | qmdIndexConfigPath | (private) |
| 879 | fn | createManager | (private) |
| 4655 | fn | searchWithLimits | (private) |
| 5045 | fn | commandClient | (private) |
| 5241 | fn | normalizePath | (private) |
| 6538 | fn | isAllowed | (private) |
| 7413 | fn | db | (private) |
| 7913 | fn | createDeferred | (private) |

## extensions/memory-core/src/memory/qmd-manager.ts (2315 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 107 | type | SqliteDatabase | (private) |
| 134 | fn | qmdUsesVectors | (private) |
| 138 | fn | buildQmdProcessPath | (private) |
| 147 | fn | normalizePositiveInteger | (private) |
| 153 | type | QmdEmbedQueueState | (private) |
| 157 | type | QmdUpdateQueueState | (private) |
| 161 | fn | getQmdEmbedQueueState | (private) |
| 167 | fn | getQmdUpdateQueueState | (private) |
| 173 | fn | normalizeHanBm25Query | (private) |
| 179 | fn | parseQmdStatusVectorCount | (private) |
| 192 | fn | resolveStableJitterMs | (private) |
| 201 | fn | resolveQmdWriteLeaseOptions | (private) |
| 210 | fn | resolveQmdEmbedLeaseOptions | (private) |
| 219 | fn | resolveQmdStoreWriteLeaseOptions | (private) |
| 226 | fn | hasIgnoredMemoryWatchSegment | (private) |
| 234 | fn | shouldIgnoreMemoryWatchPath | (private) |
| 257 | type | QmdManagerMode | (private) |
| 258 | type | QmdManagerRuntimeConfig | (private) |
| 263 | class | QmdMemoryManager | pub |
| 487 | fn | startPeriodicEmbedTimer | (private) |
| 1175 | fn | run | (private) |
| 1289 | fn | markDirty | (private) |
| 1443 | fn | onAbort | (private) |
| 2305 | fn | resolveQmdManagerRuntimeConfig | (private) |

## extensions/memory-core/src/memory/search-manager.test.ts (1361 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | type | CheckQmdBinaryAvailability | (private) |
| 16 | fn | createManagerStatus | (private) |
| 44 | fn | nativePath | (private) |
| 48 | type | ManagerSearchParams | (private) |
| 49 | type | ManagerSearchResult | (private) |
| 51 | fn | createManagerMock | (private) |
| 90 | fn | createQmdManagerInstanceMock | (private) |
| 170 | fn | leaseHost | (private) |
| 176 | fn | getMemorySearchManager | (private) |
| 180 | type | QmdManagerInstance | (private) |
| 181 | type | SearchManagerResult | (private) |
| 182 | type | SearchManager | (private) |
| 184 | fn | createQmdCfg | (private) |
| 195 | fn | createBuiltinCfg | (private) |
| 218 | fn | requireManager | (private) |
| 225 | fn | createDeferred | (private) |
| 238 | fn | createFailedQmdSearchHarness | (private) |
| 245 | fn | qmdCreateParams | (private) |
| 257 | fn | expectPendingQmdReplacement | (private) |

## extensions/memory-core/src/memory/search-manager.ts (824 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | type | QmdManagerRuntimeConfig | (private) |
| 49 | type | CachedQmdManagerEntry | (private) |
| 54 | type | PendingQmdManagerCreate | (private) |
| 59 | type | QmdManagerOpenFailure | (private) |
| 65 | type | MemorySearchManagerCacheState | (private) |
| 74 | type | MemorySearchManagerDebug | (private) |
| 83 | type | MemorySearchManagerCacheStore | (private) |
| 91 | fn | createMemorySearchManagerCacheStore | (private) |
| 99 | fn | getMemorySearchManagerCacheStore | (private) |
| 133 | type | MemorySearchManagerResult | (private) |
| 139 | type | MemorySearchManagerPurpose | (private) |
| 140 | type | MemorySearchManagerParams | (private) |
| 148 | fn | getActiveQmdManagerOpenFailure | (private) |
| 164 | fn | recordQmdManagerOpenFailure | (private) |
| 177 | fn | clearQmdManagerOpenFailure | (private) |
| 184 | fn | hashQmdManagerIdentity | (private) |
| 188 | fn | applyManagerDebug | (private) |
| 204 | fn | getMemorySearchManager | pub |
| 445 | fn | getBuiltinMemorySearchManagerAfterQmdFailure | (private) |
| 462 | fn | getBuiltinMemorySearchManager | (private) |
| 475 | class | BorrowedMemoryManager | (private) |
| 527 | fn | closeAllMemorySearchManagers | pub |
| 547 | fn | closeMemorySearchManager | pub |
| 573 | class | FallbackMemoryManager | (private) |
| 788 | fn | closeQmdManagerForReplacement | (private) |
| 796 | fn | buildQmdManagerScopeKey | (private) |
| 800 | fn | buildQmdManagerIdentityKey | (private) |
| 814 | fn | resolveQmdManagerRuntimeConfig | (private) |
