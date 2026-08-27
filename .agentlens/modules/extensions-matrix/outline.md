# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 26 large files in this module.

## extensions/matrix/doctor-contract-api.test.ts (650 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 41 | fn | createContext | (private) |
| 48 | fn | createMigrationParams | (private) |
| 58 | fn | migrationById | (private) |
| 484 | fn | legacyKey | (private) |

## extensions/matrix/doctor-contract-api.ts (698 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 75 | type | LegacyMatrixCredentialSource | (private) |
| 80 | fn | collectLegacyMatrixCredentialSources | (private) |
| 115 | fn | readLegacyMatrixCredentials | (private) |
| 136 | fn | collectLegacyMatrixStateRoots | (private) |
| 142 | fn | visit | (private) |
| 164 | fn | collectLegacySyncCacheRoots | (private) |
| 168 | fn | readLegacyMatrixStorageMetadata | (private) |
| 182 | fn | archiveLegacySyncCache | (private) |
| 196 | fn | archiveLegacyMatrixStateFile | (private) |

## extensions/matrix/src/approval-handler.runtime.test.ts (603 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | type | ResolveTargetParams | (private) |
| 17 | fn | resolveMatrixApprovalReactionTargetWithPersistence | (private) |
| 27 | type | MatrixDeliverPendingParams | (private) |
| 30 | type | MatrixPendingApprovalView | (private) |
| 31 | type | MatrixPendingExecApprovalView | (private) |
| 32 | type | MatrixPendingPluginApprovalView | (private) |
| 39 | fn | expectRecordFields | (private) |
| 50 | fn | mockCall | (private) |
| 54 | fn | buildMatrixReceipt | (private) |
| 77 | fn | buildMatrixApprovalRoomTarget | (private) |
| 94 | fn | buildExecApprovalView | (private) |
| 129 | fn | buildPluginApprovalView | (private) |
| 156 | fn | buildPendingPayload | (private) |

## extensions/matrix/src/approval-handler.runtime.ts (609 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 51 | type | PendingMessage | (private) |
| 56 | type | PreparedMatrixTarget | (private) |
| 61 | type | MatrixApprovalMetadataAction | (private) |
| 67 | type | MatrixApprovalMetadataBase | (private) |
| 81 | type | MatrixExecApprovalMetadata | (private) |
| 93 | type | MatrixPluginApprovalSeverity | (private) |
| 97 | type | MatrixPluginApprovalMetadata | (private) |
| 104 | type | MatrixApprovalMetadata | (private) |
| 105 | type | MatrixApprovalExtraContent | (private) |
| 108 | type | PendingApprovalContent | (private) |
| 114 | type | ReactionTargetRef | (private) |
| 119 | type | MatrixRawApprovalTarget | (private) |
| 123 | type | MatrixPrepareTargetParams | (private) |
| 134 | type | MatrixApprovalHandlerDeps | (private) |
| 144 | type | MatrixApprovalHandlerContext | (private) |
| 149 | fn | resolveHandlerContext | (private) |
| 161 | fn | normalizePendingMessageIds | (private) |
| 165 | fn | normalizeReactionTargetRef | (private) |
| 175 | fn | normalizeThreadId | (private) |
| 180 | fn | isSingleMatrixMessageLimitError | (private) |
| 186 | fn | retryMatrixApprovalDelivery | (private) |
| 201 | fn | prepareTarget | (private) |
| 243 | fn | buildMatrixApprovalMetadata | (private) |
| 293 | fn | buildPendingApprovalContent | (private) |
| 347 | fn | buildResolvedApprovalText | (private) |
| 374 | fn | buildMarkdownCodeBlock | (private) |

## extensions/matrix/src/channel.directory.test.ts (617 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 11 | fn | requireMatrixDirectory | (private) |
| 22 | fn | requireMatrixReplyToModeResolver | (private) |
| 30 | fn | requireDirectoryEntry | (private) |

## extensions/matrix/src/channel.ts (680 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 112 | fn | buildMatrixTrafficStatusSummary | (private) |
| 177 | fn | projectMatrixConversationBinding | (private) |
| 220 | fn | resolveMatrixAccountConfigPath | (private) |
| 226 | fn | collectMatrixSecurityWarningsForAccount | (private) |
| 259 | fn | normalizeMatrixAcpConversationId | (private) |
| 267 | fn | matchMatrixAcpConversation | (private) |
| 292 | fn | resolveMatrixCommandConversation | (private) |
| 317 | fn | resolveMatrixDeliveryTarget | (private) |

## extensions/matrix/src/cli.test.ts (2019 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | fn | mockRecoveryKeyStdin | (private) |
| 50 | fn | expectRecordFields | (private) |
| 61 | fn | mockCallArg | (private) |
| 70 | fn | stdoutWriteArg | (private) |
| 132 | fn | buildProgram | (private) |
| 138 | fn | formatExpectedLocalTimestamp | (private) |
| 142 | fn | mockMatrixVerificationStatus | (private) |
| 170 | fn | mockMatrixVerificationSummary | (private) |

## extensions/matrix/src/cli.ts (2325 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 52 | fn | scheduleMatrixCliExit | (private) |
| 67 | fn | markCliFailure | (private) |
| 71 | fn | readMatrixCliRecoveryKeyFromStdin | (private) |
| 83 | fn | resolveMatrixCliRecoveryKeyInput | (private) |
| 96 | fn | requireMatrixCliRecoveryKeyInput | (private) |
| 109 | fn | toErrorMessage | (private) |
| 113 | fn | printJson | (private) |
| 117 | fn | formatLocalTimestamp | (private) |
| 128 | fn | printTimestamp | (private) |
| 135 | fn | printAccountLabel | (private) |
| 139 | fn | resolveMatrixCliAccountId | (private) |
| 143 | fn | resolveMatrixCliAccountContext | (private) |
| 154 | fn | formatMatrixCliCommand | (private) |
| 158 | fn | formatMatrixCliRecoveryKeyStdinCommand | (private) |
| 167 | fn | formatMatrixCliCommandParts | (private) |
| 181 | fn | formatMatrixCliShellArg | (private) |
| 188 | fn | formatMatrixCliText | (private) |
| 192 | fn | printMatrixOwnDevices | (private) |
| 222 | fn | configureCliLogMode | (private) |
| 227 | fn | parseOptionalInt | (private) |
| 253 | type | MatrixCliAccountAddResult | (private) |
| 280 | fn | addMatrixAccount | (private) |
| 437 | fn | printDirectRoomCandidate | (private) |
| 449 | fn | printDirectRoomInspection | (private) |
| 476 | fn | inspectMatrixDirectRoom | (private) |
| 506 | fn | repairMatrixDirectRoom | (private) |
| 539 | fn | setMatrixProfile | (private) |
| 563 | fn | runMatrixCliCommand | (private) |
| 591 | type | MatrixCliBackupStatus | (private) |
| 601 | type | MatrixCliVerificationStatus | (private) |
| 621 | type | MatrixCliVerificationCommandOptions | (private) |
| 629 | type | MatrixCliSelfVerificationCommandOptions | (private) |
| 635 | type | MatrixCliVerificationSummary | (private) |
| 653 | type | MatrixCliVerificationSas | (private) |
| 658 | type | MatrixCliDirectRoomCandidate | (private) |
| 665 | type | MatrixCliDirectRoomInspection | (private) |
| 675 | type | MatrixCliDirectRoomRepair | (private) |
| 683 | type | MatrixCliVerificationBootstrap | (private) |
| 685 | type | MatrixCliEncryptionSetupResult | (private) |
| 693 | fn | isMatrixVerificationSetupComplete | (private) |
| 704 | fn | buildNoopMatrixVerificationBootstrap | (private) |
| 727 | fn | setupMatrixEncryption | (private) |
| 788 | fn | toCliDirectRoomCandidate | (private) |
| 797 | fn | resolveBackupStatus | (private) |
| 812 | fn | yesNoUnknown | (private) |
| 822 | fn | printBackupStatus | (private) |
| 834 | fn | printVerificationIdentity | (private) |
| 842 | fn | printVerificationBackupSummary | (private) |
| 849 | fn | printVerificationBackupStatus | (private) |
| 856 | fn | printVerificationTrustDiagnostics | (private) |
| 866 | fn | sanitizeMatrixCliText | (private) |
| 948 | fn | isUnsafeMatrixCliTerminalCode | (private) |
| 958 | fn | isAnsiFinalByte | (private) |
| 962 | fn | formatMatrixCliSasEmoji | (private) |
| 971 | fn | printMatrixVerificationSummary | (private) |
| 1004 | fn | printMatrixVerificationSummaries | (private) |
| 1017 | fn | printMatrixVerificationSas | (private) |
| 1027 | fn | matrixCliVerificationDmLookupOptions | (private) |
| 1044 | fn | formatMatrixVerificationDmFollowupParts | (private) |
| 1059 | fn | formatMatrixVerificationSummaryDmFollowupParts | (private) |
| 1068 | fn | formatMatrixVerificationOptionsDmFollowupParts | (private) |
| 1077 | fn | formatMatrixVerificationPreferredDmFollowupParts | (private) |
| 1087 | fn | formatMatrixVerificationFollowupCommand | (private) |
| 1099 | fn | printMatrixVerificationSasGuidance | (private) |
| 1111 | fn | formatMatrixVerificationCommandId | (private) |
| 1115 | fn | promptMatrixVerificationSasMatch | (private) |
| 1129 | fn | printMatrixVerificationRequestGuidance | (private) |
| 1143 | fn | runMatrixCliVerificationSummaryCommand | (private) |
| 1163 | fn | runMatrixCliSelfVerificationCommand | (private) |
| 1217 | fn | printVerificationGuidance | (private) |
| 1221 | fn | printBackupGuidance | (private) |
| 1229 | fn | printBackupSummary | (private) |
| 1237 | fn | buildVerificationGuidance | (private) |
| 1275 | fn | buildBackupGuidance | (private) |
| 1325 | fn | printGuidance | (private) |
| 1335 | fn | printVerificationStatus | (private) |
| 1367 | fn | printMatrixEncryptionSetupResult | (private) |
| 1394 | fn | registerMatrixCli | pub |

## extensions/matrix/src/exec-approvals.test.ts (502 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | MatrixExecApprovalConfig | (private) |
| 23 | type | MatrixExecApprovalRequest | (private) |
| 25 | fn | shouldHandleMatrixExecApprovalRequest | (private) |
| 43 | fn | createTempDir | (private) |
| 49 | fn | buildConfig | (private) |
| 66 | fn | matrixAccount | (private) |
| 80 | fn | buildMultiAccountMatrixConfig | (private) |
| 114 | fn | makeForeignChannelApprovalRequest | (private) |

## extensions/matrix/src/matrix/accounts.test.ts (790 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | type | MatrixRoomScopeKey | (private) |
| 39 | fn | createMatrixAccountConfig | (private) |
| 46 | fn | createMatrixScopedEntriesConfig | (private) |
| 72 | fn | createMatrixTopLevelDefaultScopedEntriesConfig | (private) |
| 98 | fn | expectMatrixScopedEntries | (private) |
| 107 | fn | expectMultiAccountMatrixScopedEntries | (private) |
| 131 | fn | expectTopLevelDefaultMatrixScopedEntries | (private) |

## extensions/matrix/src/matrix/client.test.ts (871 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 41 | class | MatrixClient | (private) |
| 56 | fn | requireRecord | (private) |
| 63 | fn | expectRecordFields | (private) |
| 69 | fn | expectAuthFields | (private) |
| 73 | fn | mockCall | (private) |
| 81 | fn | expectSavedCredentials | (private) |
| 92 | fn | expectMatrixLoginCall | (private) |

## extensions/matrix/src/matrix/crypto-state-store.ts (631 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | type | MatrixLegacyCryptoCounts | (private) |
| 32 | type | MatrixLegacyCryptoMigrationState | pub |
| 48 | type | MatrixIdbSnapshotMeta | (private) |
| 58 | type | MatrixIdbSnapshotChunk | (private) |
| 64 | type | MatrixIdbSnapshotRecord | pub |
| 72 | fn | openMatrixRecoveryKeyStoreOptions | pub |
| 80 | fn | openMatrixLegacyCryptoMigrationStoreOptions | pub |
| 88 | fn | openMatrixIdbSnapshotStoreOptions | pub |
| 96 | fn | readMatrixRecoveryKeyState | (private) |
| 103 | fn | readMatrixRecoveryKeyStateForPath | pub |
| 112 | fn | readMatrixRecoveryKeyStateWithKey | (private) |
| 123 | fn | writeMatrixRecoveryKeyStateForPath | pub |
| 134 | fn | writeMatrixRecoveryKeyStateWithKey | (private) |
| 148 | fn | hasMatrixRecoveryKeyStateInStore | pub |
| 154 | fn | writeMatrixRecoveryKeyStateToStore | pub |
| 165 | fn | readMatrixLegacyCryptoMigrationState | (private) |
| 175 | fn | writeMatrixLegacyCryptoMigrationState | (private) |
| 188 | fn | hasMatrixLegacyCryptoMigrationStateInStore | pub |
| 194 | fn | writeMatrixLegacyCryptoMigrationStateToStore | pub |
| 205 | fn | readMatrixIdbSnapshotJson | pub |
| 211 | fn | hasMatrixIdbSnapshotState | (private) |
| 219 | fn | writeMatrixIdbSnapshotJson | pub |
| 233 | fn | hasMatrixIdbSnapshotStateInStore | pub |
| 239 | fn | writeMatrixIdbSnapshotJsonToStore | pub |
| 256 | fn | migrateLegacyMatrixRecoveryKeyFileToStore | pub |
| 262 | fn | migrateLegacyMatrixRecoveryKeyFilePathToStore | pub |
| 271 | fn | migrateLegacyMatrixLegacyCryptoMigrationFileToStore | pub |
| 284 | fn | readLegacyMatrixRecoveryKeyState | pub |
| 290 | fn | readLegacyMatrixRecoveryKeyFile | pub |
| 294 | fn | readLegacyMatrixLegacyCryptoMigrationState | pub |
| 303 | fn | scoreMatrixCryptoStateInStore | pub |
| 332 | fn | matrixCryptoStateDatabaseExists | (private) |
| 336 | fn | resolveRecoveryKeyStateKeyForPath | (private) |
| 344 | fn | normalizeMatrixStoredRecoveryKey | (private) |
| 375 | fn | normalizeMatrixLegacyCryptoMigrationState | (private) |
| 422 | fn | openSyncStore | (private) |
| 430 | fn | readJsonFileSync | (private) |
| 438 | fn | archiveLegacyStateFileIfPossible | (private) |
| 450 | fn | readIdbSnapshotJsonFromStore | (private) |
| 459 | fn | readIdbSnapshotJsonFromAsyncStore | (private) |
| 470 | fn | readIdbSnapshotChunks | (private) |
| 489 | fn | readIdbSnapshotChunksAsync | (private) |
| 508 | fn | writeIdbSnapshotJsonToStore | (private) |
| 525 | fn | buildIdbSnapshotRows | (private) |
| 560 | fn | idbMetaKey | (private) |
| 564 | fn | idbChunkKeyPrefix | (private) |
| 568 | fn | idbChunkKey | (private) |
| 572 | fn | chunkText | (private) |
| 592 | fn | pushChunk | (private) |
| 599 | fn | digestText | (private) |
| 603 | fn | isIdbSnapshotMeta | (private) |
| 622 | fn | isIdbSnapshotChunk | (private) |

## extensions/matrix/src/matrix/draft-stream.test.ts (561 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 162 | fn | createMockClient | (private) |
| 175 | fn | sentContentAt | (private) |
| 183 | fn | expectLogContaining | (private) |

## extensions/matrix/src/matrix/read-policy.test.ts (616 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | fn | createClient | (private) |

## extensions/matrix/src/matrix/sdk.test.ts (3973 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | fn | requestUrl | (private) |
| 28 | fn | requireRecord | (private) |
| 35 | fn | expectRecordFields | (private) |
| 41 | fn | expectAbortError | (private) |
| 49 | fn | expectSomeMockCallOptions | (private) |
| 65 | fn | readStoredRecoveryKey | (private) |
| 71 | fn | clearTestUndiciRuntimeDepsOverride | (private) |
| 75 | fn | stubRuntimeFetch | (private) |
| 84 | fn | consumeMatrixSecretStorageKey | (private) |
| 98 | class | FakeMatrixEvent | (private) |
| 234 | type | MatrixJsClientStub | (private) |
| 268 | fn | createMatrixJsClientStub | (private) |
| 1937 | fn | bootstrapper | (private) |

## extensions/matrix/src/matrix/sdk.ts (2180 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 79 | type | MatrixOwnDeviceVerificationStatus | pub |
| 97 | type | MatrixDeviceVerificationStatus | pub |
| 107 | type | MatrixRoomKeyBackupStatus | pub |
| 120 | fn | resolveMatrixLocalTimeoutMs | (private) |
| 127 | fn | unresolvedMatrixRoomKeyBackupStatus | (private) |
| 139 | fn | unresolvedMatrixDeviceVerificationStatus | (private) |
| 154 | fn | resolveMatrixDiagnostic | (private) |
| 162 | fn | resolveMatrixDiagnosticResult | (private) |
| 186 | fn | isMatrixAccessTokenInvalidatedError | (private) |
| 208 | type | MatrixRoomKeyBackupRestoreResult | pub |
| 219 | type | MatrixRoomKeyBackupResetResult | pub |
| 229 | type | MatrixRecoveryKeyVerificationResult | pub |
| 238 | type | MatrixOwnCrossSigningPublicationStatus | (private) |
| 246 | type | MatrixVerificationBootstrapResult | pub |
| 265 | fn | createMatrixExplicitBootstrapOptions | (private) |
| 278 | type | MatrixOwnDeviceInfo | pub |
| 286 | type | MatrixRoomKeyBackupResetOptions | (private) |
| 290 | type | MatrixOwnDeviceDeleteResult | pub |
| 296 | type | MatrixCryptoRuntime | (private) |
| 309 | fn | isUnsupportedAuthenticatedMediaEndpointError | (private) |
| 323 | class | MatrixClient | pub |
| 570 | fn | cleanup | (private) |
| 580 | fn | settleResolve | (private) |
| 589 | fn | settleReject | (private) |
| 598 | fn | onSyncState | (private) |
| 614 | fn | onUnexpectedError | (private) |
| 618 | fn | onAbort | (private) |
| 1090 | fn | onDecrypted | (private) |

## extensions/matrix/src/matrix/send.test.ts (1231 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 80 | fn | applyMatrixSendRuntimeStub | (private) |
| 84 | fn | createEncryptedMediaPayload | (private) |
| 102 | fn | makeClient | (private) |
| 123 | fn | makeEncryptedMediaClient | (private) |
| 132 | fn | requireRecord | (private) |
| 139 | fn | requireArray | (private) |
| 144 | fn | mockCallArg | (private) |
| 156 | fn | sentContent | (private) |
| 160 | fn | newContent | (private) |
| 164 | fn | expectTextReceiptPart | (private) |
| 170 | fn | resetMatrixSendRuntimeMocks | (private) |

## extensions/matrix/src/matrix/send.ts (698 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 51 | fn | getCore | (private) |
| 56 | type | MatrixPreparedSingleText | (private) |
| 63 | type | MatrixPreparedChunkedText | (private) |
| 67 | type | MatrixClientResolveOpts | (private) |
| 74 | fn | createMatrixSendReceipt | (private) |
| 93 | fn | isMatrixClient | (private) |
| 97 | fn | normalizeMatrixClientResolveOpts | (private) |
| 114 | fn | resolvePreviousEditContent | (private) |
| 129 | fn | resolvePreviousThreadId | (private) |
| 151 | fn | hasMatrixMentionsMetadata | (private) |
| 155 | fn | withMatrixExtraContentFields | (private) |
| 165 | fn | resolvePreviousEditMentions | (private) |
| 182 | fn | prepareMatrixSingleText | pub |
| 212 | fn | chunkMatrixText | pub |
| 233 | fn | sendMessageMatrix | pub |
| 261 | fn | sendContent | (private) |
| 402 | fn | sendPollMatrix | pub |
| 444 | fn | sendTypingMatrix | pub |
| 472 | fn | sendReadReceiptMatrix | pub |
| 486 | fn | sendSingleTextMessageMatrix | pub |
| 562 | fn | getPreviousMatrixEvent | (private) |
| 567 | fn | getEvent | (private) |
| 578 | fn | editMessageMatrix | pub |
| 678 | fn | reactMatrixMessage | pub |

## extensions/matrix/src/matrix/subagent-hooks.test.ts (882 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 56 | fn | registerHandlersForTest | (private) |
| 66 | fn | makeSpawnEvent | (private) |
| 90 | fn | requireRecord | (private) |
| 97 | fn | expectRecordFields | (private) |
| 103 | fn | expectResultFields | (private) |
| 107 | fn | expectErrorResult | (private) |
| 113 | fn | requireBindCallWithTarget | (private) |
| 565 | fn | mkBinding | (private) |
| 747 | fn | mkBinding | (private) |
| 799 | fn | spawnForAccount | (private) |

## extensions/matrix/src/matrix/thread-bindings.test.ts (679 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 55 | fn | resetThreadBindingAdapters | (private) |
| 60 | fn | currentThreadConversation | (private) |
| 72 | fn | createBindingManager | (private) |
| 95 | fn | createStaticThreadBindingManager | (private) |
| 99 | fn | bindCurrentThread | (private) |
| 117 | fn | resolveBindingsFilePath | (private) |
| 126 | fn | writeAuthStorageMeta | (private) |
| 136 | fn | readPersistedLastActivityAt | (private) |
| 141 | fn | readPersistedBindings | (private) |
| 168 | fn | expectPersistedThreadBinding | (private) |
| 186 | fn | latestSendMessageCall | (private) |

## extensions/matrix/src/matrix/thread-bindings.ts (710 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | type | StoredMatrixThreadBindingState | (private) |
| 50 | type | MatrixThreadBindingMigrationMarker | (private) |
| 54 | fn | resolveBindingsPath | (private) |
| 69 | fn | createThreadBindingStore | (private) |
| 77 | fn | createThreadBindingMigrationStore | (private) |
| 85 | fn | buildThreadBindingStoreKey | (private) |
| 100 | fn | buildLegacyThreadBindingsImportKey | (private) |
| 112 | fn | normalizeBindingRecord | (private) |
| 159 | fn | loadBindingsFromLegacyDisk | (private) |
| 177 | fn | loadBindingsFromPluginState | (private) |
| 193 | fn | toPluginJsonValue | (private) |
| 198 | fn | persistBindingsSnapshot | (private) |
| 217 | fn | buildMatrixBindingIntroText | (private) |
| 233 | fn | sendBindingMessage | (private) |
| 254 | fn | sendFarewellMessage | (private) |
| 289 | fn | createMatrixThreadBindingManager | pub |
| 352 | fn | enqueuePersist | (private) |
| 368 | fn | persist | (private) |
| 369 | fn | persistSafely | (private) |
| 392 | fn | schedulePersist | (private) |
| 402 | fn | updateBindingsBySessionKey | (private) |
| 509 | fn | removeRecords | (private) |
| 517 | fn | sendFarewellMessages | (private) |
| 535 | fn | unbindRecords | (private) |

## extensions/matrix/src/onboarding.test.ts (503 lines)

_No symbols extracted._

## extensions/matrix/src/onboarding.ts (772 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | type | MatrixInviteAutoJoinPolicy | (private) |
| 53 | fn | isMatrixInviteAutoJoinPolicy | (private) |
| 57 | fn | isMatrixInviteAutoJoinTarget | (private) |
| 65 | fn | normalizeMatrixInviteAutoJoinTargets | (private) |
| 75 | fn | resolveMatrixOnboardingAccountId | (private) |
| 81 | fn | setMatrixDmPolicy | (private) |
| 97 | fn | noteMatrixAuthHelp | (private) |
| 111 | fn | requiresMatrixPrivateNetworkOptIn | (private) |
| 120 | fn | promptMatrixAllowFrom | (private) |
| 132 | fn | isFullUserId | (private) |
| 201 | fn | setMatrixGroupPolicy | (private) |
| 211 | fn | setMatrixGroupRooms | (private) |
| 219 | fn | setMatrixAutoJoin | (private) |
| 231 | fn | configureMatrixInviteAutoJoin | (private) |
| 314 | fn | configureMatrixAccessPrompts | (private) |
| 444 | type | MatrixConfigureIntent | (private) |
| 446 | fn | runMatrixConfigure | (private) |

## extensions/matrix/src/outbound.test.ts (583 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | type | MockCallSource | (private) |
| 29 | fn | mockCall | (private) |
| 37 | fn | mockOptions | (private) |

## extensions/matrix/src/tool-actions.test.ts (672 lines)

_No symbols extracted._

## extensions/matrix/src/tool-actions.ts (571 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 75 | fn | readRoomId | (private) |
| 86 | fn | toSnakeCaseKey | (private) |
| 92 | fn | readRawParam | (private) |
| 103 | fn | readStringAliasParam | (private) |
| 124 | fn | readPositiveIntegerArrayParam | (private) |
| 149 | fn | handleMatrixAction | pub |
