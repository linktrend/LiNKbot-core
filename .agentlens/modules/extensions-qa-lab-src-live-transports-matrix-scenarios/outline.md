# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 4 large files in this module.

## extensions/qa-lab/src/live-transports/matrix/scenarios/scenario-runtime-approval.ts (724 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | type | MatrixQaApprovalDecision | (private) |
| 27 | type | MatrixQaApprovalKind | (private) |
| 28 | type | MatrixQaApprovalOptionReactionParams | (private) |
| 35 | fn | requireMatrixQaGatewayCall | (private) |
| 42 | fn | buildMatrixApprovalArtifact | (private) |
| 53 | fn | isApprovalOptionReaction | (private) |
| 66 | fn | hasObservedApprovalOptionReaction | (private) |
| 70 | fn | assertApprovalMetadata | (private) |
| 117 | fn | isExpectedApprovalEvent | (private) |
| 137 | fn | waitForApprovalEvent | (private) |
| 176 | fn | waitForObservedApprovalEvent | (private) |
| 191 | fn | isExpectedObservedApproval | (private) |
| 232 | fn | listDriverDmApprovalCandidateRoomIds | (private) |
| 247 | fn | reactToApproval | (private) |
| 310 | fn | assertApprovalDecisionResult | (private) |
| 331 | fn | formatApprovalResultValue | (private) |
| 341 | fn | requestExecApproval | (private) |
| 370 | fn | requestPluginApproval | (private) |
| 394 | fn | waitForApprovalDecision | (private) |
| 412 | fn | resolveApprovalDecision | (private) |
| 430 | fn | readAcceptedApprovalRequest | (private) |
| 443 | fn | assertAcceptedApprovalRequest | (private) |
| 452 | fn | readAcceptedApprovalRequestId | (private) |
| 460 | fn | buildExecApprovalCommand | (private) |
| 467 | fn | runExecApprovalScenario | (private) |
| 551 | fn | runApprovalExecMetadataSingleEventScenario | pub |
| 559 | fn | runApprovalExecMetadataChunkedScenario | pub |
| 568 | fn | runApprovalDenyReactionScenario | pub |
| 576 | fn | runApprovalThreadTargetScenario | pub |
| 603 | fn | runApprovalPluginMetadataSingleEventScenario | pub |
| 660 | fn | runApprovalChannelTargetBothScenario | pub |

## extensions/qa-lab/src/live-transports/matrix/scenarios/scenario-runtime-e2ee-destructive.ts (1312 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 52 | type | MatrixQaDestructiveSetup | (private) |
| 66 | fn | cleanupMatrixQaTempDevices | (private) |
| 79 | fn | requireMatrixQaPassword | (private) |
| 87 | fn | requireMatrixQaRegistrationToken | (private) |
| 95 | fn | createMatrixQaDriverPersistentClient | (private) |
| 113 | fn | registerMatrixQaDestructiveOwner | (private) |
| 139 | fn | createMatrixQaDestructiveOwnerClient | (private) |
| 158 | fn | ensureMatrixQaOwnerReady | (private) |
| 207 | fn | isMatrixQaRepairableBackupBootstrapError | (private) |
| 219 | fn | prepareMatrixQaDestructiveSetup | (private) |
| 260 | fn | runMatrixQaE2eeStateLossExternalRecoveryKeyScenario | pub |
| 347 | fn | runMatrixQaE2eeStateLossStoredRecoveryKeyScenario | pub |
| 426 | fn | runMatrixQaE2eeStateLossNoRecoveryKeyScenario | pub |
| 474 | fn | runMatrixQaE2eeStaleRecoveryKeyAfterBackupResetScenario | pub |
| 547 | fn | runMatrixQaE2eeServerBackupDeletedLocalStateIntactScenario | pub |
| 598 | fn | waitForMatrixQaNonEmptyCliBackupRestore | (private) |
| 637 | fn | runMatrixQaE2eeServerBackupDeletedLocalReuploadRestoresScenario | pub |
| 709 | fn | runMatrixQaE2eeCorruptCryptoIdbSnapshotScenario | pub |
| 783 | fn | runMatrixQaE2eeServerDeviceDeletedLocalStateIntactScenario | pub |
| 879 | fn | runMatrixQaE2eeServerDeviceDeletedReloginRecoversScenario | pub |
| 1009 | fn | runMatrixQaE2eeSyncStateLossCryptoIntactScenario | pub |
| 1167 | fn | runMatrixQaE2eeWrongAccountRecoveryKeyScenario | pub |
| 1257 | fn | runMatrixQaE2eeHistoryExistsBackupEmptyScenario | pub |

## extensions/qa-lab/src/live-transports/matrix/scenarios/scenario-runtime-shared.ts (665 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | type | MatrixQaActorId | pub |
| 22 | type | MatrixQaSyncState | pub |
| 23 | type | MatrixQaSyncStreams | (private) |
| 25 | type | MatrixQaScenarioContext | pub |
| 81 | fn | truncateMatrixQaPreview | pub |
| 87 | fn | resolveMatrixQaNoReplyWindowMs | pub |
| 110 | fn | isMatrixQaMessageLikeKind | pub |
| 114 | fn | doesMatrixQaReplyBodyMatchToken | pub |
| 118 | fn | isMatrixQaExactMarkerReply | pub |
| 135 | fn | buildMatrixReplyArtifact | pub |
| 150 | fn | buildMatrixNoticeArtifact | pub |
| 158 | fn | buildMatrixReplyDetails | pub |
| 170 | fn | assertTopLevelReplyArtifact | pub |
| 179 | fn | assertThreadReplyArtifact | pub |
| 205 | fn | readMatrixQaSyncCursor | (private) |
| 209 | fn | writeMatrixQaSyncCursor | (private) |
| 219 | fn | getOrCreateMatrixQaActorSyncStream | (private) |
| 243 | fn | createMatrixQaScenarioClient | pub |
| 269 | fn | createMatrixQaDriverScenarioClient | pub |
| 280 | fn | primeMatrixQaActorCursor | pub |
| 307 | fn | primeMatrixQaDriverScenarioClient | pub |
| 318 | fn | advanceMatrixQaActorCursor | pub |
| 327 | type | MatrixQaScenarioClient | (private) |
| 329 | fn | assertNoSutReplyWindow | pub |
| 371 | fn | runConfigurableTopLevelScenario | pub |
| 433 | fn | runTopLevelMentionScenario | (private) |
| 449 | fn | runDriverTopLevelMentionScenario | pub |
| 474 | fn | runAssertedDriverTopLevelScenario | pub |
| 495 | fn | waitForMembershipEvent | pub |
| 535 | fn | runTopologyScopedTopLevelScenario | pub |
| 578 | fn | runNoReplyExpectedScenario | pub |

## extensions/qa-lab/src/live-transports/matrix/scenarios/scenario-runtime-state-files.ts (573 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | MatrixSyncStoreCursor | (private) |
| 28 | fn | readJsonFile | (private) |
| 32 | fn | writeJsonFile | (private) |
| 36 | fn | findFilesByName | (private) |
| 43 | fn | visit | (private) |
| 68 | fn | readPersistedMatrixSyncCursor | (private) |
| 82 | fn | writePersistedMatrixSyncCursor | (private) |
| 111 | fn | readMatrixSyncStoreCursor | (private) |
| 115 | fn | parsePluginStateJson | (private) |
| 126 | fn | readMatrixSyncCacheCursorFromRows | (private) |
| 174 | fn | readMatrixSyncCacheCursorsFromSqlite | (private) |
| 232 | fn | chunkMatrixSyncCacheJson | (private) |
| 252 | fn | digestText | (private) |
| 256 | fn | rewriteMatrixSyncCacheRows | (private) |
| 354 | fn | rewriteMatrixSyncStoreCursor | pub |
| 375 | fn | deleteMatrixSyncStoreCursor | pub |
| 399 | fn | scoreMatrixStateFile | (private) |
| 424 | fn | resolveBestMatrixStateFile | (private) |
| 453 | fn | waitForMatrixSyncStoreWithCursor | pub |
| 496 | fn | hasPersistedMatrixPluginStateDedupeEntry | (private) |
| 552 | fn | waitForMatrixInboundDedupeEntry | pub |
