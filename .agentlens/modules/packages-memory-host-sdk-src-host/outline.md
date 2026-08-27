# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 12 large files in this module.

## packages/memory-host-sdk/src/host/backend-config.test.ts (857 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | type | ResolvedMemoryBackendConfig | (private) |
| 49 | fn | requireQmdConfig | (private) |
| 58 | fn | requireQmdCollection | (private) |
| 92 | fn | createFixtureDir | (private) |

## packages/memory-host-sdk/src/host/backend-config.ts (535 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | fn | escapeQmdExactFilePattern | (private) |
| 36 | fn | resolveQmdCommand | (private) |
| 47 | fn | resolveWindowsAbsoluteCommand | (private) |
| 61 | type | ResolvedMemoryBackendConfig | pub |
| 107 | type | ResolvedQmdMcporterConfig | pub |
| 113 | type | ResolvedQmdConfig | pub |
| 163 | fn | sanitizeName | (private) |
| 169 | fn | scopeCollectionBase | (private) |
| 173 | fn | canonicalizePathForContainment | (private) |
| 192 | fn | isPathInsideRoot | (private) |
| 199 | fn | ensureUniqueName | (private) |
| 214 | fn | resolvePath | (private) |
| 225 | fn | resolveIntervalMs | (private) |
| 237 | fn | resolveEmbedIntervalMs | (private) |
| 249 | fn | resolveDebounceMs | (private) |
| 256 | fn | resolveTimeoutMs | (private) |
| 260 | fn | resolvePositiveIntegerConfig | (private) |
| 261 | fn | resolvePositiveIntegerConfig | (private) |
| 262 | fn | resolvePositiveIntegerConfig | (private) |
| 272 | fn | resolveStartupMode | (private) |
| 280 | fn | resolveStartupDelayMs | (private) |
| 287 | fn | resolveLimits | (private) |
| 302 | fn | resolveSearchMode | (private) |
| 309 | fn | resolveSearchTool | (private) |
| 314 | fn | resolveSessionConfig | (private) |
| 336 | fn | resolveCustomPaths | (private) |
| 394 | fn | resolveMcporterConfig | (private) |
| 415 | fn | resolveDefaultCollections | (private) |
| 436 | fn | resolveMemoryBackendConfig | pub |

## packages/memory-host-sdk/src/host/embeddings.test.ts (863 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | fn | createDeferred | (private) |
| 43 | fn | mockLocalEmbeddingRuntime | (private) |

## packages/memory-host-sdk/src/host/internal.ts (551 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | type | MemoryFileEntry | pub |
| 53 | type | MemoryChunk | pub |
| 61 | type | MultimodalMemoryChunk | (private) |
| 72 | fn | ensureMemoryHostDir | (private) |
| 79 | fn | normalizeRelPath | (private) |
| 84 | fn | expandHomePath | (private) |
| 94 | fn | normalizeExtraMemoryPaths | pub |
| 106 | fn | isMemoryPath | pub |
| 117 | fn | isAllowedMemoryFilePath | (private) |
| 126 | fn | shouldDescendMemoryEntry | (private) |
| 136 | fn | collectMemoryFilesFromDir | (private) |
| 153 | fn | listMemoryFiles | pub |
| 164 | fn | addMarkdownFile | (private) |
| 233 | fn | buildFileEntry | pub |
| 320 | fn | loadMultimodalEmbeddingInput | (private) |
| 368 | fn | buildMultimodalChunkForIndexing | pub |
| 390 | fn | chunkMarkdown | pub |
| 405 | fn | flush | (private) |
| 426 | fn | carryOverlap | (private) |
| 503 | fn | remapChunkLines | pub |
| 514 | fn | parseEmbedding | pub |
| 523 | fn | cosineSimilarity | pub |
| 544 | fn | runMemoryHostTasksWithConcurrency | pub |

## packages/memory-host-sdk/src/host/memory-schema.test.ts (927 lines)

_No symbols extracted._

## packages/memory-host-sdk/src/host/memory-schema.ts (710 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 76 | type | TableColumnInfo | (private) |
| 85 | fn | tableColumnInfo | (private) |
| 110 | fn | tableColumns | (private) |
| 114 | fn | tableHasExactColumns | (private) |
| 124 | fn | tablePrimaryKeyColumns | (private) |
| 131 | fn | tableHasPrimaryKey | (private) |
| 143 | fn | tableHasUniqueIndex | (private) |
| 182 | fn | tableHasNoDeclaredCollations | (private) |
| 189 | fn | tableHasCanonicalSourceColumnTypes | (private) |
| 205 | fn | tableHasCanonicalSourceColumns | (private) |
| 214 | fn | tableHasLegacySourceColumns | (private) |
| 223 | fn | tableHasIntegerRowIdPrimaryKey | (private) |
| 238 | fn | tableExists | (private) |
| 245 | fn | assertLegacyRowsCopied | (private) |
| 253 | fn | migrateMemoryIndexSourcesIdentity | pub |
| 324 | fn | hasLegacyMemoryIndexTables | (private) |
| 348 | fn | hasLegacyEmbeddingCacheTable | (private) |
| 357 | fn | copyLegacyMemoryIndexRows | (private) |
| 459 | fn | migrateLegacyMemoryIndexTables | (private) |
| 491 | fn | dropMemoryPathFtsTriggers | pub |
| 498 | fn | ensureMemoryPathFtsTriggers | pub |
| 506 | fn | ensureMemoryPathFtsSchema | (private) |
| 531 | fn | buildMemoryIndexStrictSchema | (private) |
| 584 | fn | ensureMemoryIndexSchema | pub |

## packages/memory-host-sdk/src/host/qmd-process.test.ts (699 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | fn | createMockChild | (private) |
| 63 | fn | createClosingTaskkillChild | (private) |
| 79 | fn | restoreEnvValue | (private) |

## packages/memory-host-sdk/src/host/qmd-process.ts (512 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 8 | type | CliSpawnInvocation | (private) |
| 15 | type | QmdChildProcess | (private) |
| 22 | type | WindowsTaskkillResult | (private) |
| 27 | type | QmdBinaryUnavailableReason | pub |
| 29 | type | QmdBinaryUnavailable | pub |
| 39 | type | QmdBinaryAvailability | pub |
| 41 | fn | resolveQmdBinaryUnavailableReason | pub |
| 47 | fn | resolveCliSpawnInvocation | pub |
| 64 | fn | checkQmdBinaryAvailability | pub |
| 91 | fn | finish | (private) |
| 137 | fn | validateQmdProbeCwd | (private) |
| 169 | fn | abortReason | (private) |
| 180 | fn | runCliCommand | pub |
| 231 | fn | onAbort | (private) |
| 235 | fn | settle | (private) |
| 317 | fn | shouldUseQmdProcessGroup | (private) |
| 321 | fn | getEnvValueCaseInsensitive | (private) |
| 334 | fn | normalizeWindowsSystemRoot | (private) |
| 356 | fn | resolveWindowsTaskkillPath | (private) |
| 364 | fn | runWindowsTaskkill | (private) |
| 381 | fn | finish | (private) |
| 407 | fn | isQmdChildAlive | (private) |
| 411 | fn | signalQmdProcessTree | (private) |
| 460 | class | CliCommandError | (private) |
| 482 | fn | formatCliCommandFailureMessage | (private) |
| 494 | fn | appendOutputWithCap | (private) |
| 507 | fn | formatQmdAvailabilityError | (private) |

## packages/memory-host-sdk/src/host/query-expansion.ts (776 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 467 | fn | stripKoreanTrailingParticle | (private) |
| 476 | fn | isUsefulKoreanStem | (private) |
| 637 | fn | isQueryStopWordToken | pub |
| 653 | fn | isValidKeyword | (private) |
| 677 | fn | tokenize | (private) |
| 750 | fn | extractKeywords | pub |

## packages/memory-host-sdk/src/host/session-files.test.ts (1092 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | fn | captureStateDirEnv | (private) |
| 75 | fn | requireSessionEntry | (private) |
| 82 | fn | upsertTestSessionEntries | (private) |

## packages/memory-host-sdk/src/host/session-files.ts (909 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 53 | type | SessionFileEntry | pub |
| 70 | type | SessionFileState | pub |
| 72 | type | BuildSessionEntryOptions | pub |
| 85 | type | SessionTranscriptClassification | pub |
| 90 | type | ResolvedMemorySessionSyncTarget | pub |
| 96 | type | ResolvedSessionTranscriptIdentity | pub |
| 102 | type | SessionTranscriptStoreEntry | (private) |
| 107 | fn | shouldSkipTranscriptFileForDreaming | (private) |
| 128 | fn | isUsageCountedSessionArchiveTranscriptPath | (private) |
| 137 | fn | isDreamingNarrativeBootstrapRecord | (private) |
| 159 | fn | hasDreamingNarrativeRunId | (private) |
| 163 | fn | isDreamingNarrativeGeneratedRecord | (private) |
| 191 | fn | hasCronRunSessionKey | (private) |
| 195 | fn | isCronRunGeneratedRecord | (private) |
| 215 | fn | normalizeComparablePath | (private) |
| 220 | fn | normalizeSessionTranscriptPathForComparison | pub |
| 224 | fn | resolveSessionStoreTranscriptPath | (private) |
| 232 | fn | resolveSessionStoreTranscriptResolvedPath | (private) |
| 246 | fn | isCanonicalSessionsDirForAgent | (private) |
| 253 | fn | loadSessionTranscriptClassificationForSessionsDir | (private) |
| 284 | fn | readSessionTranscriptClassificationStore | (private) |
| 298 | fn | classifySessionTranscriptCorpusEntries | (private) |
| 318 | fn | loadDreamingNarrativeTranscriptPathSetForAgent | pub |
| 324 | fn | loadSessionTranscriptClassificationForAgent | pub |
| 332 | fn | classifySessionTranscriptFromSessionStore | (private) |
| 344 | fn | hasClassifiedPath | (private) |
| 355 | fn | listSessionFilesForAgent | pub |
| 361 | fn | extractAgentIdFromSessionPath | (private) |
| 370 | fn | sessionPathForFile | pub |
| 378 | fn | sessionPathForSessionIdentity | pub |
| 386 | fn | parseCanonicalSessionSyncTargetFromPath | pub |
| 416 | fn | resolveSessionIdentityForTranscriptFile | pub |
| 448 | fn | resolveSessionFileForSyncTarget | pub |
| 460 | fn | logSessionFileReadFailure | (private) |
| 464 | fn | normalizeSessionText | (private) |
| 471 | fn | collectRawSessionText | (private) |
| 491 | fn | isHighSurrogate | (private) |
| 495 | fn | isLowSurrogate | (private) |
| 499 | fn | splitLongSessionLine | (private) |
| 546 | fn | renderSessionExportLines | (private) |
| 563 | fn | stripInboundMetadataForUserRole | (private) |
| 572 | fn | isGeneratedSystemWrapperMessage | (private) |
| 579 | fn | isGeneratedCronPromptMessage | (private) |
| 586 | fn | isGeneratedHeartbeatPromptMessage | (private) |
| 590 | fn | sanitizeSessionText | (private) |
| 623 | fn | parseSessionTimestampMs | (private) |
| 645 | fn | serializeTranscriptEvent | (private) |
| 650 | fn | serializeTranscriptEvents | (private) |
| 657 | fn | resolveSessionEntryParseYieldLines | (private) |
| 665 | fn | statSessionEntrySync | pub |
| 699 | fn | yieldSessionEntryParseIfNeeded | (private) |
| 710 | fn | buildSessionEntry | pub |

## packages/memory-host-sdk/src/host/session-transcript-corpus.ts (519 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | type | SessionTranscriptCorpusArtifactKind | (private) |
| 25 | type | SessionTranscriptCorpusEntry | pub |
| 43 | fn | fileContentRevision | (private) |
| 55 | fn | sqliteContentRevision | (private) |
| 68 | type | SessionEntrySummary | (private) |
| 73 | fn | isDreamingNarrativeSessionKeyLike | (private) |
| 77 | fn | normalizeComparablePath | (private) |
| 82 | fn | normalizeRealComparablePath | (private) |
| 96 | fn | rememberArtifactDir | (private) |
| 100 | fn | extractAgentIdFromSessionPath | (private) |
| 109 | type | ResolvedSessionStoreCorpusSource | (private) |
| 115 | fn | resolveSessionStoreTranscriptCorpusSource | (private) |
| 193 | fn | classifySessionEntry | (private) |
| 209 | fn | readParentSessionKeys | (private) |
| 223 | fn | collectCronGeneratedSessionKeys | (private) |
| 268 | fn | toSessionStoreCorpusEntry | (private) |
| 321 | fn | listSessionTranscriptArtifactFiles | (private) |
| 335 | fn | classifyTranscriptArtifact | (private) |
| 364 | fn | toArtifactCorpusEntry | (private) |
| 394 | fn | listSessionTranscriptCorpusEntriesForAgentSync | pub |
| 515 | fn | listSessionTranscriptCorpusEntriesForAgent | pub |
