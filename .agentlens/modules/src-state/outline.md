# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 13 large files in this module.

## src/state/lisa-job-state-schema.ts (685 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | type | LisaJobStateDatabase | pub |
| 90 | type | LisaJobRunDbRow | pub |
| 91 | type | LisaReceiptDbRow | pub |
| 92 | type | LisaDeliveryDbRow | pub |
| 93 | type | LisaPendingWorkDbRow | pub |
| 94 | type | LisaJobRunRecord | pub |
| 106 | type | LisaPendingWorkRecord | pub |
| 115 | type | LisaJobStateStoreHealth | pub |
| 126 | type | LisaJobStateSchemaOptions | pub |
| 127 | type | LisaJobRunCreateInput | pub |
| 132 | type | LisaJobRunTransitionInput | pub |
| 141 | type | HealthyLisaJobStateStore | pub |
| 152 | fn | lisaJobStateKysely | pub |
| 155 | fn | lisaJobStateRows | pub |
| 158 | fn | lisaJobStateOne | pub |
| 161 | fn | lisaJobStateDbOptions | pub |
| 170 | fn | lisaJobStateDbPath | pub |
| 173 | fn | lisaJobStateTableExists | pub |
| 184 | fn | lisaJobStateHealth | pub |
| 203 | fn | lisaJobStateCanonicalJson | pub |
| 227 | fn | assertLisaJobStateSafeJson | pub |
| 263 | fn | lisaJobStateParseObject | pub |
| 275 | fn | lisaJobStateSafeResult | pub |
| 283 | fn | lisaJobStateWorkPayload | pub |
| 290 | fn | lisaJobStateRun | pub |
| 310 | fn | lisaJobStateReceipt | pub |
| 328 | fn | lisaJobStateDelivery | pub |
| 348 | fn | lisaJobStatePending | pub |
| 367 | fn | lisaJobStateHash | pub |
| 373 | fn | lisaJobStateRedacted | (private) |
| 399 | fn | redactLisaJobResultForDiagnostics | pub |
| 402 | fn | hashLisaJobPayload | pub |
| 493 | fn | ensureLisaJobStateSchema | pub |
| 525 | fn | probeLisaJobStateStoreHealth | pub |
| 567 | fn | listLisaDueJobRuns | pub |
| 587 | fn | listLisaUnresolvedDeliveryAttempts | pub |
| 605 | fn | listLisaPendingWork | pub |
| 623 | fn | listLisaNonHealthDuePendingRecords | pub |
| 637 | fn | requireHealthyLisaJobStateStore | pub |
| 648 | fn | openHealthyLisaJobStateStore | pub |
| 660 | fn | isHealthyLisaJobStateStore | pub |
| 675 | fn | lisaJobStateStoreOptionsFromCapability | pub |
| 683 | fn | closeLisaJobStateStoreForTest | pub |

## src/state/lisa-job-state-store.test.ts (546 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 37 | fn | tempDbPath | (private) |
| 43 | fn | optionsFor | (private) |

## src/state/lisa-job-state-store.ts (700 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 51 | type | LisaJobStateStoreOptions | pub |
| 54 | type | LisaDeliveryAttemptDbRow | (private) |
| 55 | type | RunRow | (private) |
| 56 | type | ReceiptRow | (private) |
| 57 | type | DeliveryRow | (private) |
| 58 | type | WorkRow | (private) |
| 69 | fn | validatedNow | (private) |
| 74 | type | DeliveryStartResult | pub |
| 78 | fn | ready | (private) |
| 93 | fn | createOrLoadLisaJobRun | pub |
| 157 | fn | allowed | (private) |
| 169 | fn | transitionLisaJobRun | pub |
| 254 | fn | recordLisaDependencyReceipt | pub |
| 335 | fn | validateLisaDependencyReceipt | pub |
| 393 | type | DeliveryStartInput | (private) |
| 401 | fn | deliveryInput | (private) |
| 410 | fn | assertSameDeliveryBinding | (private) |
| 419 | fn | startLisaDeliveryAttempt | pub |
| 507 | fn | finishLisaDeliveryAttempt | pub |
| 579 | fn | enqueueLisaWork | pub |
| 640 | fn | mapLisaTemporaryWorkId | pub |

## src/state/lisa-principal-task-writes.ts (524 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 46 | fn | validatedCreateInput | (private) |
| 95 | fn | intakeLisaPrincipalTask | pub |
| 246 | fn | addLisaPrincipalTaskReference | pub |
| 292 | fn | recordLisaPrincipalTaskEvidence | pub |
| 313 | fn | transitionLisaPrincipalTask | pub |
| 396 | fn | resolveLisaPrincipalTaskDuplicate | pub |

## src/state/lisa-stage-ops-store.test.ts (556 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | fn | tempDbPath | (private) |
| 36 | fn | optsFor | (private) |

## src/state/lisa-stage-ops-store.ts (909 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | type | LisaStageOpsStoreOptions | pub |
| 41 | type | RepairBindingRow | pub |
| 51 | type | RepairAttemptRow | pub |
| 63 | type | MainApprovePackageRow | pub |
| 72 | type | MainApproveClaimRow | pub |
| 82 | type | LisaStageOpsStoreHealth | pub |
| 93 | type | LisaStageOpsDatabase | (private) |
| 138 | type | RepairAttemptDbRow | (private) |
| 143 | fn | stageOpsDb | (private) |
| 147 | fn | resolveStateOptions | (private) |
| 155 | fn | resolveDatabasePath | (private) |
| 163 | fn | toRepairAttemptRow | (private) |
| 177 | fn | healthFromDb | (private) |
| 200 | fn | resolveOpenClawStateSqlitePath | pub |
| 204 | fn | ensureLisaStageOpsSchema | pub |
| 239 | fn | prepareStoreForWrite | (private) |
| 258 | fn | requireHealthyLisaStageOpsStore | pub |
| 283 | type | HealthyLisaStageOpsStore | pub |
| 289 | fn | openHealthyLisaStageOpsStore | pub |
| 299 | fn | isHealthyLisaStageOpsStore | pub |
| 310 | fn | lisaStageOpsStoreOptionsFromCapability | pub |
| 316 | fn | probeLisaStageOpsStoreHealth | pub |
| 357 | fn | upsertRepairBinding | pub |
| 418 | fn | recordRepairAttempt | pub |
| 489 | fn | listRepairAttempts | pub |
| 506 | fn | expireStaleRepairAttempts | pub |
| 530 | fn | hashMainApprovePackageContents | pub |
| 546 | fn | toMainApprovePackageRow | (private) |
| 565 | fn | getMainApprovePackage | pub |
| 588 | fn | putMainApprovePackage | pub |
| 644 | type | MainApproveClaimFailureReason | pub |
| 660 | fn | loadAndClaimMainApprovePackage | pub |
| 845 | fn | claimMainApprovePackage | pub |
| 884 | fn | expireMainApproveClaims | pub |
| 907 | fn | closeLisaStageOpsStore | pub |

## src/state/openclaw-agent-db-schema.ts (590 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 74 | type | OpenClawAgentMetadataDatabase | (private) |
| 75 | type | MigratedSessionEntry | (private) |
| 79 | fn | migratedSessionColumn | (private) |
| 87 | fn | dropLegacySessionTranscriptSearchSchema | (private) |
| 103 | fn | dropLegacyMemoryIndexSchema | (private) |
| 119 | fn | migrateOpenClawAgentSchema | (private) |
| 256 | fn | migrateSessionTranscriptGenerations | (private) |
| 268 | fn | migrateSessionTranscriptActiveProjection | (private) |
| 295 | fn | parseMigratedSessionEntry | (private) |
| 309 | fn | migratedObjectField | (private) |
| 319 | fn | migratedText | (private) |
| 323 | fn | migratedNumber | (private) |
| 327 | fn | migratedChatType | (private) |
| 334 | fn | migratedStatus | (private) |
| 349 | fn | migratedSessionScope | (private) |
| 364 | fn | migratedEntryChannel | (private) |
| 375 | fn | migratedEntryAccountId | (private) |
| 385 | fn | migratedEntryDisplayName | (private) |
| 394 | fn | backfillOpenClawAgentSchema | (private) |
| 461 | fn | assertAgentDatabaseIntegrityBeforeMutation | pub |
| 492 | fn | ensureAgentSchema | (private) |
| 568 | fn | ensureOpenClawAgentDatabaseSchema | pub |

## src/state/openclaw-agent-db.test.ts (2409 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | type | AgentDbTestDatabase | (private) |
| 50 | fn | createTempStateDir | (private) |
| 54 | fn | readRegisteredAgentDatabaseLastSeenAt | (private) |
| 65 | fn | seedVersion1MemoryAgentDatabase | (private) |
| 164 | fn | createUnsafeIndexDrift | (private) |
| 192 | fn | createUnsafeSchemaMetaIndexDrift | (private) |
| 211 | fn | createTranscriptIdempotencyIndexDrift | (private) |
| 255 | type | AgentSchemaOpenerResult | (private) |
| 257 | fn | launchAgentSchemaOpener | (private) |

## src/state/openclaw-state-db-legacy-backfills.ts (549 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | fn | ensureOperatorApprovalResolutionRefs | pub |
| 58 | fn | repairLegacyTaskAgentAttribution | pub |
| 110 | fn | repairLegacyTaskDeliveryStatuses | pub |
| 123 | fn | backfillAcpReplayEstimatedBytes | pub |
| 152 | fn | backfillCronRunLogEntryJson | pub |
| 186 | fn | parseJsonRecord | (private) |
| 197 | fn | textField | (private) |
| 202 | fn | numberField | (private) |
| 207 | fn | recordField | (private) |
| 214 | fn | jsonField | (private) |
| 218 | fn | cronSessionTargetField | (private) |
| 231 | fn | cronWakeModeField | (private) |
| 236 | fn | booleanField | (private) |
| 241 | fn | failureDestinationField | (private) |
| 252 | fn | migrateLegacyCronDeliveryThreadIds | pub |
| 292 | fn | backfillCronJobsFromJobJson | pub |
| 468 | fn | metadataStringField | (private) |
| 472 | fn | backfillDeliveryQueueEntriesFromEntryJson | pub |

## src/state/openclaw-state-db.generated.d.ts (1410 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 13 | interface | AcpReplayEvents | pub |
| 23 | interface | AcpReplaySessions | pub |
| 34 | interface | AcpSessions | pub |
| 50 | interface | AgentDatabases | pub |
| 58 | interface | AgentModelCatalogs | pub |
| 65 | interface | AndroidNotificationRecentPackages | pub |
| 71 | interface | ApnsRegistrationTombstones | pub |
| 76 | interface | ApnsRegistrations | pub |
| 91 | interface | AuditEvents | pub |
| 125 | interface | AuditIdentityKeys | pub |
| 132 | interface | AuthProfileState | pub |
| 138 | interface | AuthProfileStores | pub |
| 144 | interface | BackupRuns | pub |
| 152 | interface | CaptureBlobs | pub |
| 162 | interface | CaptureEvents | pub |
| 186 | interface | CaptureSessions | pub |
| 196 | interface | ChannelIngressEvents | pub |
| 219 | interface | ChannelPairingAllowEntries | pub |
| 227 | interface | ChannelPairingRequests | pub |
| 237 | interface | ClawhubPromotionClaims | pub |
| 245 | interface | ClawhubPromotionsFeedState | pub |
| 255 | interface | CommandLogEntries | pub |
| 265 | interface | Commitments | pub |
| 298 | interface | ConfigHealthEntries | pub |
| 306 | interface | CronJobs | pub |
| 384 | interface | CurrentConversationBindings | pub |
| 404 | interface | DeliveryQueueEntries | pub |
| 424 | interface | DeviceAuthTokens | pub |
| 432 | interface | DeviceBootstrapTokens | pub |
| 445 | interface | DeviceIdentities | pub |
| 454 | interface | DevicePairingPaired | pub |
| 479 | interface | DevicePairingPending | pub |
| 499 | interface | DiagnosticEvents | pub |
| 507 | interface | DiagnosticStabilityBundles | pub |
| 515 | interface | ExecApprovalsConfig | pub |
| 529 | interface | FleetCells | pub |
| 539 | interface | FlowRuns | pub |
| 561 | interface | GatewayBootLifecycle | pub |
| 571 | interface | GatewayRestartHandoff | pub |
| 589 | interface | GatewayRestartIntent | pub |
| 600 | interface | GatewayRestartSentinel | pub |
| 619 | interface | InstalledPluginIndex | pub |
| 635 | interface | MacosPortGuardianRecords | pub |
| 643 | interface | ManagedOutgoingImageRecords | pub |
| 664 | interface | McpOauthStores | pub |
| 671 | interface | MediaBlobs | pub |
| 681 | interface | MigrationRuns | pub |
| 689 | interface | MigrationSources | pub |
| 704 | interface | ModelCapabilityCache | pub |
| 721 | interface | NativeHookRelayBridges | pub |
| 731 | interface | NodeHostConfig | pub |
| 746 | interface | OfficialExternalPluginCatalogSnapshots | pub |
| 762 | interface | OnboardingRecommendations | pub |
| 771 | interface | OperatorApprovals | pub |
| 801 | interface | PluginBindingApprovals | pub |
| 810 | interface | PluginBlobEntries | pub |
| 820 | interface | PluginStateEntries | pub |
| 829 | interface | SandboxRegistryEntries | pub |
| 846 | interface | SchemaMeta | pub |
| 856 | interface | SessionGroups | pub |
| 862 | interface | SessionStateEvents | pub |
| 877 | interface | SessionStateHeads | pub |
| 885 | interface | SessionUpstreamLinks | pub |
| 899 | interface | SessionWatchCursors | pub |
| 909 | interface | SkillCuratorState | pub |
| 917 | interface | SkillLifecycle | pub |
| 928 | interface | SkillUploadChunks | pub |
| 935 | interface | SkillUploads | pub |
| 952 | interface | SkillUsage | pub |
| 963 | interface | StateLeases | pub |
| 974 | interface | SubagentRuns | pub |
| 1036 | interface | TaskDeliveryState | pub |
| 1042 | interface | TaskRuns | pub |
| 1075 | interface | TuiLastSessions | pub |
| 1081 | interface | UpdateCheckState | pub |
| 1099 | interface | VoicewakeRoutingConfig | pub |
| 1108 | interface | VoicewakeRoutingRoutes | pub |
| 1118 | interface | VoicewakeTriggers | pub |
| 1125 | interface | WebPushSubscriptions | pub |
| 1135 | interface | WebPushVapidKeys | pub |
| 1143 | interface | WorkerEnvironmentCredentials | pub |
| 1154 | interface | WorkerEnvironments | pub |
| 1181 | interface | WorkerInferenceTurns | pub |
| 1194 | interface | WorkerSessionPlacements | pub |
| 1218 | interface | WorkerTranscriptCommitHeads | pub |
| 1226 | interface | WorkerTranscriptCommits | pub |
| 1237 | interface | WorkerWorkspacePendingResults | pub |
| 1251 | interface | WorkerWorkspaceReconciliations | pub |
| 1263 | interface | WorkspaceAttestations | pub |
| 1269 | interface | WorkspaceGeneratedBootstrapHashes | pub |
| 1275 | interface | WorkspacePathAliases | pub |
| 1283 | interface | WorkspaceSetupState | pub |
| 1292 | interface | WorktreeProvisionedFileChunks | pub |
| 1299 | interface | Worktrees | pub |
| 1315 | interface | DB | pub |

## src/state/openclaw-state-db.test.ts (3579 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | type | StateDbTestDatabase | (private) |
| 47 | fn | createTempStateDir | (private) |
| 51 | fn | replaceManagedImageRecordsWithLegacyTable | (private) |
| 138 | fn | seedLegacySessionWatchCursorSchema | (private) |
| 197 | type | PlacementConstraintProbe | (private) |
| 212 | fn | insertPlacementConstraintProbe | (private) |
| 262 | fn | statfsFixture | (private) |
| 275 | fn | createLegacyAuditStateDatabase | (private) |
| 365 | fn | createCanonicalAuditStateDatabase | (private) |
| 372 | fn | rebuildAuditEventsTable | (private) |
| 406 | fn | insertAuditMarker | (private) |
| 431 | fn | createUnsafeIndexDrift | (private) |
| 459 | fn | createUnsafeSchemaMetaIndexDrift | (private) |
| 478 | fn | runHotRollbackJournalRecoveryProbe | (private) |
| 600 | fn | expectNoncanonicalAuditSchemaRejected | (private) |
| 612 | fn | runConcurrentSchemaProbe | (private) |
| 701 | fn | sleep | (private) |
| 703 | fn | waitForChild | (private) |
| 2889 | fn | readStatuses | (private) |

## src/state/openclaw-state-lease.ts (593 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | type | LeaseDatabase | (private) |
| 25 | type | AgentLeaseDatabase | (private) |
| 26 | type | LeaseKysely | (private) |
| 28 | type | OpenClawStateLeaseDatabase | (private) |
| 32 | type | OpenClawStateLeaseOptions | (private) |
| 45 | type | OpenClawStateLeaseContext | pub |
| 53 | type | OpenClawStateLeaseErrorCode | pub |
| 60 | class | OpenClawStateLeaseError | pub |
| 80 | fn | leaseError | (private) |
| 91 | fn | invalidInput | (private) |
| 95 | fn | validateDuration | (private) |
| 102 | fn | validateNonEmptyString | (private) |
| 109 | fn | validateOptions | (private) |
| 151 | fn | readBusyTimeout | (private) |
| 159 | fn | withBusyTimeout | (private) |
| 174 | fn | withLeaseWriteTransaction | (private) |
| 182 | fn | run | (private) |
| 191 | fn | run | (private) |
| 200 | fn | withLeaseRead | (private) |
| 211 | type | LeaseIdentity | (private) |
| 218 | fn | tryAcquire | (private) |
| 258 | fn | renew | (private) |
| 292 | fn | assertLeaseOwnedInDatabase | (private) |
| 316 | fn | verifyLeaseOwnership | (private) |
| 344 | fn | release | (private) |
| 362 | fn | releaseBestEffort | (private) |
| 385 | fn | abortError | (private) |
| 398 | fn | withOpenClawStateLease | pub |
| 489 | fn | abortLost | (private) |
| 502 | fn | scheduleExpiry | (private) |
| 532 | fn | assertOperationOwned | (private) |
| 541 | fn | assertOperationOwnedInTransaction | (private) |

## src/state/openclaw-state-schema.generated.ts (1911 lines)

_No symbols extracted._
