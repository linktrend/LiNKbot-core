# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 33 large files in this module.

## src/config/sessions/cleanup-service.ts (714 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | type | SessionsCleanupOptions | pub |
| 57 | type | SessionCleanupAction | (private) |
| 66 | type | SessionCleanupSummary | pub |
| 85 | type | SessionsCleanupResult | pub |
| 94 | type | SessionsCleanupRunResult | (private) |
| 109 | fn | resolveCleanupSqlitePath | (private) |
| 116 | fn | loadCleanupSessionStore | (private) |
| 131 | fn | isTranscriptMessageRole | (private) |
| 141 | fn | isTranscriptMessageRecord | (private) |
| 160 | fn | sqliteTranscriptHasMessageRecords | (private) |
| 173 | fn | resolveSessionCleanupAction | pub |
| 203 | fn | isMainScopeStaleDirectSessionKey | (private) |
| 235 | fn | retireMainScopeDirectSessionEntries | (private) |
| 260 | fn | serializeSessionCleanupResult | pub |
| 276 | fn | pruneMissingTranscriptEntries | (private) |
| 317 | fn | addEntryArtifactPathsToSet | (private) |
| 338 | fn | previewStoreCleanup | (private) |
| 500 | fn | runSessionsCleanup | pub |
| 693 | fn | purgeAgentSessionStoreEntries | pub |

## src/config/sessions/delivery-info.test.ts (672 lines)

_No symbols extracted._

## src/config/sessions/disk-budget.test.ts (992 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | fn | expectPathExists | (private) |
| 26 | fn | expectPathMissing | (private) |
| 36 | fn | expectBudgetResult | (private) |
| 44 | fn | refreshPathBeforeSecondStat | (private) |

## src/config/sessions/disk-budget.ts (970 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | type | SessionDiskBudgetConfig | (private) |
| 34 | type | SessionDiskBudgetSweepResult | pub |
| 45 | type | SessionUnreferencedArtifactSweepResult | pub |
| 52 | type | SessionPhysicalDiskUsage | pub |
| 59 | type | SessionDiskBudgetLogger | (private) |
| 69 | type | SessionsDirFileStat | (private) |
| 77 | fn | canonicalizePathForComparison | (private) |
| 86 | fn | measureStoreBytes | (private) |
| 90 | fn | measureStoreEntryChunkBytes | (private) |
| 99 | fn | buildStoreEntryChunkSizeMap | (private) |
| 107 | fn | resolveProjectedPromptBlobHash | (private) |
| 112 | fn | buildProjectedPromptBlobRefCounts | (private) |
| 126 | fn | getEntryUpdatedAt | (private) |
| 134 | fn | buildSessionIdRefCounts | (private) |
| 146 | fn | resolveSessionTranscriptPathForEntry | (private) |
| 171 | fn | resolveSessionArtifactPathsForEntry | (private) |
| 193 | fn | resolveSessionArtifactCanonicalPathsForEntry | pub |
| 200 | fn | resolveReferencedSessionArtifactPaths | (private) |
| 232 | fn | readSessionsDirFiles | (private) |
| 260 | fn | readSqliteDatabaseFiles | (private) |
| 283 | fn | measureSessionPhysicalDiskUsage | pub |
| 309 | fn | hasRetainedSessionTranscriptArchives | pub |
| 315 | fn | pruneSessionTranscriptArchivesToHighWater | pub |
| 340 | fn | readSessionPromptBlobFiles | (private) |
| 377 | fn | resolvePromptBlobFileHash | (private) |
| 381 | fn | isSessionPromptBlobTempArtifactName | (private) |
| 387 | fn | isUnreferencedSessionArtifactFile | (private) |
| 406 | fn | isUnreferencedPromptBlobFileRemovable | (private) |
| 418 | fn | isPromptBlobArtifactRemovable | (private) |
| 434 | fn | isDiskBudgetRemovableSessionFile | (private) |
| 452 | fn | removeFileIfExists | (private) |
| 461 | fn | removeFileForBudget | (private) |
| 492 | fn | removePromptBlobFileForBudget | (private) |
| 534 | fn | pruneUnreferencedSessionArtifacts | pub |
| 635 | fn | enforceSessionDiskBudget | pub |

## src/config/sessions/goals.test.ts (506 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | fn | getSessionEntry | (private) |
| 29 | fn | upsertSessionEntry | (private) |
| 44 | fn | writeSession | (private) |

## src/config/sessions/restart-recovery-state.ts (515 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | type | RestartRecoveryChannelAuthority | (private) |
| 20 | fn | normalizeRunId | (private) |
| 25 | fn | resolveRestartRecoveryChannelAuthority | pub |
| 47 | fn | normalizeThreadId | (private) |
| 54 | fn | normalizeStringArray | (private) |
| 69 | fn | normalizePresentStringArray | (private) |
| 76 | fn | normalizeTerminalDeliveryEvidenceResult | (private) |
| 227 | fn | normalizeRestartRecoveryTerminalDeliveryEvidence | (private) |
| 254 | fn | normalizeRestartRecoveryTerminalRunIds | (private) |
| 274 | type | RestartRecoveryNormalizedField | (private) |
| 292 | fn | sameOptionalStringArray | (private) |
| 300 | fn | sameRestartRecoveryTerminalRunIds | pub |
| 305 | fn | normalizeRestartRecoveryEntryFields | pub |
| 405 | fn | mergeRestartRecoveryTerminalDeliveryEvidence | (private) |
| 415 | fn | getRestartRecoveryTerminalDeliveryEvidence | pub |
| 425 | fn | mergeRestartRecoveryTerminalRunIds | pub |
| 437 | fn | hasRestartRecoveryTerminalRun | pub |
| 449 | fn | hasRestartRecoverySourceClaim | pub |
| 461 | fn | hasActiveRestartRecoverySourceClaim | pub |
| 469 | fn | buildRestartRecoveryClaimCleanupPatch | pub |

## src/config/sessions/session-accessor.conformance.test.ts (2189 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 77 | type | AccessorAdapter | (private) |
| 124 | type | TestPaths | (private) |
| 363 | fn | writeTranscript | (private) |
| 1446 | fn | scopeFor | (private) |
| 1584 | fn | scopeFor | (private) |
| 1641 | fn | scopeFor | (private) |

## src/config/sessions/session-accessor.parent-fork.test.ts (717 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | fn | makeRoot | (private) |
| 26 | fn | seedParentTranscript | (private) |
| 44 | fn | persistChildEntry | (private) |

## src/config/sessions/session-accessor.reply-init-concurrency.test.ts (744 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | type | ChildResult | (private) |
| 43 | type | TranscriptRewriteChildResult | (private) |
| 51 | type | ConcurrencyWorkerRequest | (private) |
| 76 | type | ConcurrencyWorkerMessage | (private) |
| 94 | fn | createConcurrencyWorkerScript | (private) |
| 106 | fn | send | (private) |
| 110 | fn | waitForProceed | (private) |
| 116 | fn | runReplyInit | (private) |
| 145 | fn | runTranscriptRewrite | (private) |
| 263 | fn | isWorkerMessage | (private) |
| 267 | fn | waitForWorkerBoot | (private) |
| 273 | fn | cleanup | (private) |
| 279 | fn | onError | (private) |
| 283 | fn | onExit | (private) |
| 291 | fn | onMessage | (private) |
| 304 | fn | getConcurrencyWorker | (private) |
| 332 | fn | runConcurrencyScenario | (private) |
| 343 | fn | cleanup | (private) |
| 349 | fn | fail | (private) |
| 353 | fn | onError | (private) |
| 354 | fn | onExit | (private) |
| 357 | fn | onMessage | (private) |
| 401 | fn | waitForChild | (private) |

## src/config/sessions/session-accessor.sqlite-active-events.test.ts (631 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 232 | fn | markDirty | (private) |

## src/config/sessions/session-accessor.sqlite-active-events.ts (626 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | type | ActiveTranscriptDatabase | (private) |
| 43 | type | VisibleMessageCursor | (private) |
| 52 | type | SessionTranscriptMessageEvent | pub |
| 57 | type | SessionTranscriptMessageEventPage | pub |
| 62 | type | SessionTranscriptMessageAnchorPage | pub |
| 68 | class | SessionTranscriptProjectionUnavailableError | pub |
| 75 | fn | isSessionTranscriptProjectionUnavailableError | pub |
| 81 | type | CurrentProjection | (private) |
| 95 | fn | getActiveTranscriptKysely | (private) |
| 99 | fn | normalizeVisibleMessageLimit | (private) |
| 112 | fn | encodeVisibleMessageCursor | (private) |
| 116 | fn | parseVisibleMessageCursor | (private) |
| 145 | fn | bootstrapVisibleMessageCursor | (private) |
| 159 | fn | readProjectionSnapshot | (private) |
| 199 | fn | withCurrentProjectionSnapshot | (private) |
| 245 | fn | parseMessageEventRow | (private) |
| 260 | fn | readMessageRange | (private) |
| 288 | fn | readSessionTranscriptMessageEvents | pub |
| 297 | fn | readSessionTranscriptVisibleMessageDelta | pub |
| 327 | fn | reset | (private) |
| 462 | fn | readRecentSessionTranscriptMessageEvents | pub |
| 519 | fn | readSessionTranscriptMessageEventPage | pub |
| 543 | fn | readSessionTranscriptMessageEventCount | pub |
| 548 | fn | readSessionTranscriptMessageEventById | pub |
| 578 | fn | readSessionTranscriptMessageAnchorPage | pub |

## src/config/sessions/session-accessor.sqlite-entry-store.ts (502 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | type | OpenClawAgentDatabaseReader | (private) |
| 44 | type | SessionEntryRow | (private) |
| 45 | type | ResolvedSessionEntryRow | pub |
| 50 | type | SqliteSessionEntrySelectionSnapshot | (private) |
| 54 | type | SqliteLifecycleTargetSnapshot | (private) |
| 59 | class | SqliteSessionMutationConflictError | (private) |
| 66 | fn | readSqliteSessionIdentitySnapshot | pub |
| 80 | fn | createSqliteSessionIdentitySnapshot | pub |
| 86 | fn | readSessionEntryRow | pub |
| 127 | fn | readSqliteSessionEntrySelectionSnapshot | pub |
| 145 | fn | assertSqliteSessionEntrySelectionUnchanged | pub |
| 161 | fn | collectSessionEntryLookupKeys | pub |
| 188 | fn | readExactSessionEntryRow | pub |
| 204 | fn | readSqliteSessionEntryStore | pub |
| 222 | fn | readSqliteSessionEntryCount | pub |
| 233 | fn | readSqliteSessionEntryKeys | pub |
| 241 | fn | resolveSqliteLifecyclePrimaryEntry | pub |
| 258 | fn | readSqliteLifecycleTargetSnapshot | pub |
| 272 | fn | assertSqliteLifecycleTargetSnapshotUnchanged | pub |
| 285 | fn | normalizeSqliteLifecycleTarget | pub |
| 299 | fn | deleteSqliteSessionEntryRows | pub |
| 314 | fn | deleteSqliteLifecycleTargetRows | pub |
| 326 | fn | sqliteSessionEntriesEqual | pub |
| 336 | fn | sqliteSessionSnapshotRowsEqual | (private) |
| 350 | fn | sqliteLifecycleTargetMatchesExpectedEntry | (private) |
| 362 | fn | assertSqliteLifecycleTargetUnchanged | pub |
| 374 | fn | deleteLegacySessionEntryRows | pub |
| 398 | fn | writeSessionEntry | pub |

## src/config/sessions/session-accessor.sqlite-lifecycle-state.ts (623 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | fn | shouldRemoveSqliteSessionEntry | pub |
| 64 | fn | sessionKeySegmentStartsWith | (private) |
| 74 | fn | readSessionTranscriptUpdatedAt | (private) |
| 92 | fn | sqliteTranscriptStateIsReclaimable | (private) |
| 102 | fn | sqliteTranscriptStateHasMarker | (private) |
| 120 | fn | readReferencedSqliteSessionIds | pub |
| 149 | fn | readReferencedSqliteSessionIdsAfterTargetMutation | pub |
| 193 | fn | readSqliteTranscriptArchiveLines | (private) |
| 208 | fn | planSqliteSessionStateDeleteIfUnreferenced | pub |
| 231 | fn | deleteMaterializedSqliteSessionStatePlans | pub |
| 263 | fn | planSqliteSessionStateAfterEntryRemoval | pub |
| 291 | fn | readSqliteSessionGenerationIdsForKeys | pub |
| 308 | fn | projectSqliteSessionEntryLifecycleMutation | pub |
| 380 | fn | collectReferencedSqliteSessionIdsFromStore | (private) |
| 394 | fn | collectProjectedReferencedSqliteSessionIds | pub |
| 437 | fn | collectSqliteSessionStateIdsForEntry | pub |
| 439 | fn | add | (private) |
| 457 | fn | deleteSqliteSessionStateRows | (private) |
| 470 | fn | planSqliteOrphanLifecycleTranscriptStateDeletes | (private) |
| 526 | fn | planSqliteSessionLifecycleArtifactCleanup | pub |
| 609 | fn | deletePlannedSqliteLifecycleArtifactEntries | pub |

## src/config/sessions/session-accessor.sqlite-lifecycle.ts (505 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 62 | type | SessionBoardCleanupDatabase | (private) |
| 72 | fn | deleteSessionBoardRows | (private) |
| 100 | fn | cleanupSqliteSessionLifecycleArtifacts | pub |
| 145 | fn | resetSqliteSessionEntryLifecycle | pub |
| 213 | fn | deleteSqliteSessionEntryLifecycleInternal | (private) |
| 238 | fn | deleteSqliteSessionEntryLifecycleLocked | (private) |
| 423 | fn | deleteSqliteSessionEntryLifecycle | pub |
| 430 | fn | rollbackSqliteAgentHarnessSessionEntryLifecycle | pub |
| 451 | fn | rollbackSqlitePluginOwnedSessionEntryLifecycle | pub |
| 474 | fn | shouldDeleteSqliteSessionEntryLifecycle | (private) |

## src/config/sessions/session-accessor.sqlite-transcript-store.ts (514 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 41 | fn | appendTranscriptEventInTransaction | pub |
| 129 | fn | scheduleTranscriptProjectionReconcile | (private) |
| 147 | fn | appendTranscriptEventsInTransaction | pub |
| 174 | fn | appendTranscriptEventRowInTransaction | (private) |
| 230 | fn | ensureTranscriptHeader | pub |
| 256 | fn | readActiveTranscriptAppendParentId | pub |
| 302 | fn | transcriptTreeReferenceExists | (private) |
| 312 | fn | replaceSqliteTranscriptEventsInTransaction | pub |
| 351 | fn | readTranscriptIdentityByEventId | pub |
| 368 | fn | readTranscriptIdentityByMessageIdempotencyKey | (private) |
| 387 | fn | readTranscriptMessageByIdempotencyKey | (private) |
| 400 | fn | readTranscriptMessageByScopedIdempotencyKey | pub |
| 422 | fn | readTranscriptMessageByEventId | pub |
| 431 | fn | readTranscriptMessageByIdentity | (private) |
| 452 | fn | readTranscriptEventIdentity | (private) |
| 475 | fn | readMessageIdempotencyKey | pub |
| 483 | fn | readEventTimestamp | (private) |
| 498 | fn | redactTranscriptMessageForStorage | pub |
| 507 | fn | isTranscriptAgentMessage | (private) |

## src/config/sessions/session-accessor.sqlite-transcript-write.ts (607 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 68 | class | SqliteTranscriptMutationConflictError | (private) |
| 76 | type | SqliteSessionImportRowsParams | (private) |
| 87 | type | SqliteSessionImportRowsResult | (private) |
| 93 | type | SqliteExpectedSessionTranscriptTurnResult | (private) |
| 100 | type | SqliteTranscriptWriteLockContext | (private) |
| 108 | type | SqliteTranscriptSnapshotState | (private) |
| 112 | fn | replaceSqliteTranscriptEvents | pub |
| 125 | fn | replaceSqliteTranscriptEventsSync | pub |
| 143 | fn | importSqliteSessionRows | pub |
| 218 | fn | appendSqliteTranscriptEvent | pub |
| 232 | fn | appendSqliteTranscriptEventSync | pub |
| 250 | fn | appendSqliteExpectedSessionTranscriptTurn | pub |
| 339 | fn | sqliteSessionTranscriptTurnRebound | (private) |
| 351 | fn | selectAppendableSqliteTranscriptTurnMessages | (private) |
| 366 | fn | appendSqliteTranscriptMessage | pub |
| 372 | fn | appendSqliteTranscriptMessage | pub |
| 376 | fn | appendSqliteTranscriptMessage | pub |
| 391 | fn | appendSqliteTranscriptMessageSync | pub |
| 408 | fn | withSqliteTranscriptWriteLock | pub |
| 473 | fn | withSqliteTranscriptWriteTransaction | pub |
| 487 | fn | isSqliteTranscriptSnapshotUnchanged | (private) |
| 502 | fn | assertSqliteTranscriptSnapshotUnchanged | (private) |
| 512 | fn | appendSqliteTranscriptMessageInTransaction | (private) |
| 596 | fn | assertNonMessageTranscriptEvent | (private) |

## src/config/sessions/session-accessor.test.ts (3122 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 69 | fn | createTestTrajectoryEvent | (private) |
| 3058 | fn | readGeneration | (private) |

## src/config/sessions/session-accessor.types.ts (873 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | type | SessionAccessScope | pub |
| 57 | type | LogicalSessionAccessScope | pub |
| 66 | type | SessionEntryListScope | pub |
| 67 | type | SessionEntryStatus | pub |
| 69 | type | ResolvedSessionEntryAccessTarget | pub |
| 82 | type | ResolvedSessionEntryStoreTarget | pub |
| 86 | type | SessionEntryCandidateAccessScope | pub |
| 102 | type | ResolvedSessionEntryCandidateTarget | pub |
| 115 | type | ResolvedSessionEntryUpdateContext | pub |
| 133 | type | SessionTranscriptAccessScope | pub |
| 144 | type | SessionTranscriptRuntimeScope | pub |
| 151 | type | SessionTranscriptReadScope | pub |
| 158 | type | SessionTranscriptReadTarget | pub |
| 166 | type | SessionTranscriptWriteScope | pub |
| 171 | type | SessionEntrySummary | pub |
| 178 | type | SessionEntryReadView | pub |
| 186 | type | ExactSessionEntry | pub |
| 192 | type | TranscriptEvent | pub |
| 194 | type | SessionTranscriptStats | pub |
| 202 | type | SessionTranscriptEventRow | pub |
| 208 | type | SessionTranscriptRawDeltaLimits | pub |
| 218 | type | SessionTranscriptRawDeltaResult | pub |
| 242 | type | SessionTranscriptVisibleMessageDeltaLimits | pub |
| 252 | type | SessionTranscriptVisibleMessageEventRow | pub |
| 260 | type | SessionTranscriptVisibleMessageDeltaResult | pub |
| 319 | type | TranscriptUpdatePayload | pub |
| 321 | type | LatestTranscriptAssistantText | pub |
| 327 | type | SessionTranscriptWriteLockAccessorContext | pub |
| 335 | type | SessionTranscriptWriteTransactionContext | pub |
| 340 | type | SessionTranscriptTurnUpdateMode | pub |
| 342 | type | SessionTranscriptTurnMessageAppend | pub |
| 351 | type | SessionTranscriptTurnWriteContext | pub |
| 359 | type | SessionTranscriptTurnPersistOptions | pub |
| 391 | type | SessionTranscriptTurnPersistResult | pub |
| 399 | type | SessionTranscriptRuntimeTarget | pub |
| 406 | type | SessionTranscriptManualTrimResult | pub |
| 421 | type | SessionTranscriptManualTrimPreflightResult | pub |
| 427 | type | SessionEntryUpdateOptions | pub |
| 436 | type | SessionAbortTargetCutoff | pub |
| 441 | type | SessionAbortTargetContext | pub |
| 446 | type | SessionAbortTargetIdentity | pub |
| 450 | type | SessionAbortTargetResult | pub |
| 455 | type | SessionLifecycleTranscriptInfo | pub |
| 460 | type | ReplySessionInitializationSnapshot | pub |
| 466 | type | ReplySessionInitializationCommitContext | pub |
| 472 | type | ReplySessionInitializationCommitResult | pub |
| 486 | type | SessionEntryPatchOptions | pub |
| 503 | type | SessionEntryPatchContext | pub |
| 508 | type | SessionEntryPatchResult | pub |
| 515 | type | SessionEntryTargetPatchScope | pub |
| 523 | type | SessionEntryReplacementSnapshot | pub |
| 530 | type | SessionEntryReplacement | pub |
| 545 | type | SessionCompactionCheckpointForkedTranscript | pub |
| 552 | type | SessionCompactionCheckpointTranscriptForkResult | pub |
| 558 | type | SessionParentForkDecision | pub |
| 573 | type | ParentForkedSessionTranscript | pub |
| 578 | type | ForkSessionFromParentTranscriptResult | pub |
| 586 | type | ForkSessionFromParentTranscriptParams | pub |
| 598 | type | ForkSessionEntryFromParentTargetResult | pub |
| 617 | type | ForkSessionEntryFromParentTargetParams | pub |
| 639 | type | SessionCompactionCheckpointMutationResult | pub |
| 652 | type | SessionMessageCutMutationResult | pub |
| 666 | type | SessionMessageCutMutationParams | pub |
| 676 | type | SessionBranchSummary | pub |
| 684 | type | SessionBranchListResult | pub |
| 690 | type | SessionBranchListParams | pub |
| 695 | type | SessionBranchSwitchMutationResult | pub |
| 708 | type | SessionBranchSwitchMutationParams | pub |
| 715 | type | SessionCompactionCheckpointEntryBuildContext | pub |
| 724 | type | SessionCompactionCheckpointTranscriptForker | pub |
| 728 | type | SessionCompactionCheckpointEntryBuilder | pub |
| 732 | type | BranchSessionFromCompactionCheckpointParams | pub |
| 749 | type | RestoreSessionFromCompactionCheckpointParams | pub |
| 773 | type | SessionEntryCreateWithTranscriptContext | pub |
| 789 | type | SessionEntryCreateWithTranscriptOptions | pub |
| 796 | type | SessionPatchProjectionSnapshot | pub |
| 800 | type | SessionPatchProjectionTarget | pub |
| 805 | type | SessionPatchProjectionContext | pub |
| 810 | type | SessionPatchProjectionFailure | pub |
| 833 | type | ResetSessionEntryLifecycleParams | pub |
| 849 | type | DeleteSessionEntryLifecycleParams | pub |
| 870 | type | CanonicalizeSessionEntryAliasesResult | pub |

## src/config/sessions/session-snapshot-merge.test.ts (613 lines)

_No symbols extracted._

## src/config/sessions/sessions.test.ts (1363 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | type | WriteTextAtomicCall | (private) |
| 47 | fn | requireWriteTextAtomicCall | (private) |
| 395 | fn | makeTmpStore | (private) |

## src/config/sessions/store-load.ts (540 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | type | LoadSessionStoreOptions | (private) |
| 50 | type | ReadSessionEntryOptions | (private) |
| 56 | fn | isSessionStoreRecord | (private) |
| 60 | fn | normalizeOptionalFiniteNumber | (private) |
| 64 | fn | normalizeOptionalAttemptCount | (private) |
| 68 | fn | normalizeOptionalStringOrNull | (private) |
| 75 | fn | normalizeRecordKey | (private) |
| 80 | fn | normalizeOptionalDeliveryContext | (private) |
| 98 | fn | sameDeliveryContext | (private) |
| 110 | fn | normalizePendingFinalDeliveryFields | (private) |
| 167 | fn | normalizePluginExtensions | (private) |
| 220 | fn | normalizePluginExtensionSlotKeys | (private) |
| 273 | fn | sameDeliveryChannelRoute | (private) |
| 294 | fn | normalizeSessionEntryDelivery | pub |
| 337 | fn | stripPersistedSkillsCache | pub |
| 346 | fn | normalizeSessionStore | pub |
| 389 | fn | loadSessionStore | pub |
| 526 | fn | readSessionEntry | pub |

## src/config/sessions/store-maintenance.ts (576 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | type | SessionMaintenanceWarning | pub |
| 43 | type | ResolvedSessionMaintenanceConfig | pub |
| 53 | type | ResolvedSessionMaintenanceConfigInput | pub |
| 59 | fn | resolvePruneAfterMs | (private) |
| 72 | fn | resolveResetArchiveRetentionMs | (private) |
| 94 | fn | resolveMaxDiskBytes | (private) |
| 112 | fn | resolveHighWaterBytes | (private) |
| 116 | fn | computeDefault | (private) |
| 151 | fn | resolveMaintenanceConfigFromInput | pub |
| 167 | fn | normalizeResolvedMaintenanceConfigInput | pub |
| 176 | fn | resolveSessionEntryMaintenanceHighWater | (private) |
| 191 | fn | shouldRunSessionEntryMaintenance | pub |
| 202 | fn | shouldRunModelRunPrune | pub |
| 224 | fn | isGatewayModelRunSessionKey | (private) |
| 251 | fn | pruneStaleEntries | pub |
| 284 | fn | pruneStaleModelRunEntries | pub |
| 323 | type | QuotaSuspensionEntryMaintenanceResult | (private) |
| 337 | fn | resolveQuotaSuspensionEntryMaintenance | pub |
| 363 | fn | getEntryUpdatedAt | (private) |
| 367 | fn | isSyntheticSessionMaintenanceKey | (private) |
| 384 | fn | isTelegramTopicSessionKey | (private) |
| 390 | fn | isExternalGroupOrChannelSessionKey | (private) |
| 396 | fn | isProtectedSessionMaintenanceEntry | (private) |
| 417 | fn | shouldPreserveMaintenanceEntry | pub |
| 433 | fn | getActiveSessionMaintenanceWarning | pub |
| 478 | fn | wouldCapActiveSession | (private) |
| 531 | fn | capEntryCount | pub |

## src/config/sessions/store.pruning.integration.test.ts (1868 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 62 | fn | jsonRoundTrip | (private) |
| 67 | fn | archiveTimestamp | (private) |
| 69 | fn | makeEntry | (private) |
| 73 | fn | applyEnforcedMaintenanceConfig | (private) |
| 85 | fn | applyCappedMaintenanceConfig | (private) |
| 97 | fn | disableAutomaticDiskBudget | (private) |
| 103 | fn | expectPathExists | (private) |
| 107 | fn | expectPathMissing | (private) |
| 117 | fn | createStaleAndFreshStore | (private) |
| 124 | fn | seedSqliteSessionStore | (private) |
| 137 | fn | loadSqliteSessionStore | (private) |
| 146 | fn | seedSqliteTranscriptMessage | (private) |
| 165 | fn | seedSqliteTrajectoryEvent | (private) |

## src/config/sessions/store.pruning.test.ts (909 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | fn | makeEntry | (private) |
| 40 | fn | makeStore | (private) |
| 44 | fn | isGatewayModelRunSessionKey | (private) |
| 49 | fn | isProtectedSessionMaintenanceEntry | (private) |
| 53 | fn | resolveSessionEntryMaintenanceHighWater | (private) |
| 61 | fn | createMaintenanceArtifacts | (private) |

## src/config/sessions/store.session-lifecycle-mutation.test.ts (908 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | type | TestTranscriptEvent | (private) |
| 386 | fn | readSearchState | (private) |
| 841 | fn | createTranscriptEvent | (private) |
| 845 | fn | createSearchableTranscriptEvent | (private) |
| 854 | fn | createTranscriptEventLine | (private) |
| 862 | fn | readArchiveLines | (private) |
| 869 | fn | readArchiveNames | (private) |
| 876 | fn | readArchiveLinesForSession | (private) |
| 887 | fn | recordTranscriptUpdateFiles | (private) |
| 899 | fn | openLifecycleTestDatabase | (private) |

## src/config/sessions/store.ts (1339 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 77 | type | SessionStoreInvariantContext | (private) |
| 89 | fn | readSessionUpdatedAt | pub |
| 109 | type | SaveSessionStoreOptions | (private) |
| 143 | type | SingleEntryPersistencePatch | (private) |
| 152 | type | SessionEntryWorkflowOptions | (private) |
| 160 | type | SessionLifecycleArtifactCleanupParams | pub |
| 177 | type | SessionLifecycleArtifactCleanupResult | pub |
| 182 | type | SessionLifecycleStoreTarget | pub |
| 189 | type | SessionLifecycleArchivedTranscript | pub |
| 194 | type | ResetSessionEntryLifecycleResult | pub |
| 202 | type | ResetSessionEntryLifecycleMutation | pub |
| 207 | type | DeleteSessionEntryLifecycleResult | pub |
| 216 | type | SessionEntryLifecycleRemoval | pub |
| 231 | type | SessionEntryLifecycleUpsert | pub |
| 251 | type | SessionArchivedTranscriptCleanupRule | pub |
| 256 | type | SessionEntryLifecycleMutationResult | pub |
| 266 | type | DeletedAgentSessionEntryPurgeParams | pub |
| 277 | fn | cloneSessionEntry | (private) |
| 281 | fn | cloneSessionEntries | (private) |
| 287 | fn | replaceSessionEntries | (private) |
| 297 | fn | snapshotLockedSessionEntries | (private) |
| 311 | fn | assertLockedSessionEntriesPreserved | (private) |
| 321 | fn | assertValidAgentHarnessSessionEntries | (private) |
| 328 | fn | projectSessionEntryForPersistenceRevision | pub |
| 340 | fn | getSessionEntry | pub |
| 348 | fn | updateSessionStoreWriteCaches | (private) |
| 378 | fn | restoreUnchangedSessionStoreCache | (private) |
| 418 | fn | findJsonValueEnd | (private) |
| 458 | fn | indentTopLevelEntryJson | (private) |
| 462 | fn | buildSingleEntrySerializedStore | (private) |
| 513 | fn | collectSerializedPromptRefs | (private) |
| 529 | fn | collectStorePromptRefs | (private) |
| 542 | fn | getSerializedPromptRefs | (private) |
| 555 | fn | storeHasUnsafeUntouchedHydratedSkillPrompts | (private) |
| 595 | fn | loadMutableSessionStoreForWriter | (private) |
| 614 | fn | sessionEntriesHaveSameSerializedForm | (private) |
| 621 | fn | cloneOptionalSessionEntry | (private) |
| 625 | fn | resolveLifecyclePrimaryEntry | (private) |
| 640 | fn | resolveLifecyclePrimaryEntrySnapshot | (private) |
| 658 | fn | resolveFreshestLifecycleStoreMatch | (private) |
| 676 | fn | pruneLifecycleLegacyStoreKeys | (private) |
| 687 | fn | archiveLifecycleSessionTranscripts | (private) |
| 707 | fn | ensureLifecycleTranscriptHeader | (private) |
| 725 | fn | normalizePathForLifecycleComparison | (private) |
| 732 | fn | saveSessionStoreUnlocked | (private) |
| 941 | fn | saveSessionStore | pub |
| 954 | fn | updateSessionStore | pub |
| 992 | fn | resetSessionEntryLifecycle | pub |
| 1067 | type | DeleteSessionEntryLifecycleParams | (private) |
| 1079 | fn | deleteSessionEntryLifecycleInternal | (private) |
| 1181 | fn | deleteSessionEntryLifecycle | pub |
| 1187 | fn | getErrorCode | (private) |
| 1193 | fn | archiveRemovedSessionTranscripts | (private) |
| 1220 | fn | writeSessionStoreAtomic | (private) |
| 1254 | fn | persistResolvedSessionEntry | (private) |
| 1288 | type | SessionEntryPatchParams | (private) |
| 1301 | fn | patchSessionEntryWithKey | pub |

## src/config/sessions/targets.test.ts (633 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | fn | resolveRealStorePath | (private) |
| 21 | fn | createAgentSessionStores | (private) |
| 39 | fn | createCustomRootCfg | (private) |
| 50 | fn | countMatching | (private) |
| 60 | fn | resolveTargetsForCustomRoot | (private) |
| 68 | fn | expectTargetsToContainStores | (private) |

## src/config/sessions/targets.ts (630 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | type | SessionStoreSelectionOptions | pub |
| 27 | type | SessionStoreTarget | pub |
| 41 | fn | dedupeTargetsByStorePath | (private) |
| 51 | fn | dedupeTargetsBySqliteTarget | (private) |
| 64 | fn | shouldSkipDiscoveryError | (private) |
| 69 | fn | legacySessionStoreHasAgentKey | (private) |
| 84 | fn | isWithinRoot | (private) |
| 88 | fn | shouldSkipDiscoveredAgentDirName | (private) |
| 97 | fn | resolveValidatedManagedFilePathSync | (private) |
| 119 | fn | listConfiguredSessionStoreAgentIds | pub |
| 121 | fn | addAcpAgentId | (private) |
| 145 | fn | isConfiguredSessionStoreAgentId | pub |
| 151 | fn | isPerAgentSessionStoreConfig | pub |
| 156 | fn | resolveValidatedDiscoveredStorePathSync | (private) |
| 183 | fn | resolveValidatedExistingSessionStoreTargetSync | (private) |
| 203 | fn | isValidatedRecoveryCandidateSessionsDir | (private) |
| 238 | fn | resolveSessionStoreDiscoveryState | (private) |
| 262 | fn | toDiscoveredSessionStoreTarget | (private) |
| 279 | fn | resolveExplicitSessionStoreTarget | (private) |
| 295 | fn | resolveAllAgentSessionStoreTargetsSync | pub |
| 364 | fn | resolveExistingAgentSessionStoreTargetsSync | pub |
| 421 | fn | resolveAllAgentSessionStoreCandidateTargetsSync | pub |
| 494 | fn | resolveAgentSessionStoreTargetsSync | pub |
| 580 | fn | resolveSessionStoreTargets | pub |

## src/config/sessions/transcript-append-redact.test.ts (635 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | fn | readMessages | (private) |
| 42 | fn | readStoredMessages | (private) |
| 444 | fn | seedSessionEntry | (private) |

## src/config/sessions/transcript-append.test-support.ts (617 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | fn | writeJsonlEntry | (private) |
| 41 | fn | appendSerializedJsonlEntry | (private) |
| 60 | fn | appendJsonlEntry | (private) |
| 64 | type | TranscriptLeafInfo | (private) |
| 71 | type | TranscriptLineInfo | (private) |
| 85 | fn | readTranscriptLineInfo | (private) |
| 162 | fn | normalizeEntryId | (private) |
| 166 | fn | generateEntryId | (private) |
| 179 | fn | validateTranscriptLeafControlReferences | (private) |
| 220 | fn | resolveTranscriptLeafIdFromTrailingControls | (private) |
| 251 | fn | readTranscriptLeafInfoForward | (private) |
| 294 | fn | readTranscriptLeafInfo | (private) |
| 345 | fn | migrateLinearTranscriptToParentLinked | (private) |
| 392 | fn | ensureTranscriptHeader | (private) |
| 409 | fn | resolveTranscriptAppendQueueKey | (private) |
| 420 | fn | withSessionTranscriptAppendQueue | (private) |
| 452 | fn | isTranscriptAgentMessage | (private) |
| 461 | fn | appendSessionTranscriptMessage | pub |
| 466 | fn | appendSessionTranscriptMessage | pub |
| 469 | fn | appendSessionTranscriptMessage | pub |
| 477 | type | AppendSessionTranscriptEventParams | (private) |
| 484 | fn | appendSessionTranscriptEvent | pub |
| 492 | fn | withSessionTranscriptWriteLock | (private) |
| 508 | fn | appendSessionTranscriptEventLocked | (private) |
| 517 | fn | appendSessionTranscriptMessageLocked | (private) |
| 585 | fn | readMessageIdempotencyKey | (private) |
| 593 | fn | findTranscriptMessageByIdempotencyKey | (private) |

## src/config/sessions/transcript.test.ts (2723 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 69 | type | ExactAssistantMessage | (private) |
| 72 | type | BeforeMessageWriteParams | (private) |
| 77 | type | TranscriptRepairMessage | (private) |
| 78 | type | TranscriptUpdateEmitterSpy | (private) |
| 84 | fn | writeTranscriptStore | (private) |
| 97 | fn | writeTranscriptSessionEntry | (private) |
| 107 | fn | createExactAssistantMessage | (private) |
| 132 | fn | requireTranscriptUpdateCall | (private) |
| 146 | fn | loadFixtureMessages | (private) |
| 1655 | fn | append | (private) |
| 1691 | fn | append | (private) |
| 1763 | fn | releaseReset | (private) |
| 1767 | fn | markResetStarted | (private) |
| 1816 | fn | releaseOwnerChange | (private) |
| 1820 | fn | markOwnerChangeStarted | (private) |
| 2114 | fn | countMessages | (private) |

## src/config/sessions/transcript.ts (863 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 55 | type | SessionTranscriptAppendResult | pub |
| 63 | type | SessionTranscriptUpdateMode | pub |
| 64 | type | SessionTranscriptDeliveryMirror | pub |
| 75 | type | InternalSessionTranscriptDeliveryMirror | (private) |
| 84 | type | SessionTranscriptAssistantMessage | pub |
| 88 | type | AssistantTranscriptText | (private) |
| 94 | type | SessionRecentConversationText | pub |
| 102 | type | ReadRecentSessionConversationTextOptions | (private) |
| 110 | type | ReadRecentSessionConversationTextParams | (private) |
| 116 | type | LatestAssistantTranscriptText | pub |
| 117 | type | TailAssistantTranscriptText | (private) |
| 121 | fn | parseAssistantTranscriptText | (private) |
| 154 | fn | isTranscriptOnlyOpenClawAssistantMessage | (private) |
| 161 | type | SessionConversationTranscriptTarget | (private) |
| 166 | fn | parseRecentConversationText | (private) |
| 225 | fn | readRecentUserAssistantTextFromSqliteTranscript | (private) |
| 232 | fn | readRecentUserAssistantTextFromSqliteTranscriptWithPresence | (private) |
| 259 | fn | resolveSessionConversationTranscriptTarget | (private) |
| 287 | fn | readRecentUserAssistantTextFromSessionTranscript | (private) |
| 320 | fn | readRecentUserAssistantTextForSession | pub |
| 334 | fn | readLatestAssistantTextFromSessionTranscript | pub |
| 364 | fn | readTailAssistantTextFromSessionTranscript | pub |
| 433 | fn | appendAssistantMessageToSessionTranscript | pub |
| 506 | fn | appendExactAssistantMessageToSessionTranscript | pub |
| 699 | fn | touchSqliteAssistantAppendSessionEntry | (private) |
| 727 | fn | isRedundantDeliveryMirror | (private) |
| 734 | fn | readLatestVisibleTranscriptMessage | (private) |
| 765 | fn | isIdentifiedDeliveryMirror | (private) |
| 776 | fn | extractAssistantMessageText | (private) |
| 795 | fn | findLatestEquivalentAssistantMessageId | (private) |

## src/config/sessions/types.ts (826 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | SessionScope | pub |
| 22 | type | SessionChatType | pub |
| 24 | type | SessionOrigin | pub |
| 39 | type | CliSessionReseedReceipt | pub |
| 46 | type | CliSessionBinding | pub |
| 65 | type | SessionCompactionCheckpointReason | pub |
| 71 | type | SessionCompactionTranscriptReference | (private) |
| 78 | type | SessionCompactionCheckpoint | pub |
| 92 | type | SessionContextBudgetStatusRoute | (private) |
| 98 | type | SessionContextBudgetStatus | pub |
| 119 | type | AmbientTranscriptWatermark | pub |
| 126 | type | SessionPluginDebugEntry | (private) |
| 131 | type | SessionPluginJsonValue | pub |
| 139 | type | SessionPluginNextTurnInjection | (private) |
| 151 | type | SubagentRecoveryState | (private) |
| 164 | type | LaneExecutionState | (private) |
| 172 | interface | QuotaSuspension | pub |
| 188 | type | SessionGoalStatus | pub |
| 196 | type | SessionGoal | pub |
| 216 | type | PendingSkillSuggestion | pub |
| 221 | type | RestartRecoveryRun | pub |
| 226 | type | SessionEntry | pub |
| 509 | type | InternalSessionEntry | pub |
| 513 | fn | isTerminalSessionStatus | pub |
| 519 | fn | isSessionPluginTraceLine | (private) |
| 524 | fn | resolveSessionPluginLines | (private) |
| 541 | fn | resolveSessionPluginStatusLines | pub |
| 547 | fn | resolveSessionPluginTraceLines | pub |
| 553 | fn | normalizeSessionRuntimeModelFields | pub |
| 594 | fn | setSessionRuntimeModel | pub |
| 608 | type | SessionEntryMergePolicy | (private) |
| 610 | type | MergeSessionEntryOptions | (private) |
| 615 | fn | resolveMergedUpdatedAt | (private) |
| 629 | fn | normalizeMergedUpdatedAt | (private) |
| 636 | fn | mergeSessionEntryWithPolicy | (private) |
| 687 | fn | mergeSessionEntry | pub |
| 694 | fn | mergeSessionEntryPreserveActivity | pub |
| 703 | fn | resolveSessionTotalTokens | pub |
| 713 | fn | resolveFreshSessionTotalTokens | pub |
| 726 | type | GroupKeyResolution | pub |
| 733 | type | SessionSkillPromptRef | pub |
| 740 | type | SessionSkillSnapshot | pub |
| 761 | type | SessionSystemPromptReport | pub |
