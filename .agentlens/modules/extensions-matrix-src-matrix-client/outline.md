# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 5 large files in this module.

## extensions/matrix/src/matrix/client/config.test.ts (782 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | fn | createLookupFn | (private) |
| 23 | fn | resolveDefaultMatrixAuthContext | (private) |

## extensions/matrix/src/matrix/client/config.ts (831 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | type | MatrixAuthClientDeps | (private) |
| 52 | fn | loadMatrixAuthClientDeps | (private) |
| 73 | fn | shouldRetryMatrixAuthRequest | (private) |
| 77 | fn | isAbortSignalTriggered | (private) |
| 81 | fn | credentialsMatchBackfillAuthLineage | (private) |
| 95 | fn | retryMatrixAuthRequest | (private) |
| 106 | fn | fetchMatrixWhoamiIdentity | (private) |
| 134 | fn | readEnvSecretRefFallback | (private) |
| 171 | fn | clean | (private) |
| 205 | type | MatrixConfigStringField | (private) |
| 213 | fn | resolveMatrixBaseConfigFieldPath | (private) |
| 217 | fn | shouldAllowEnvSecretRefFallback | (private) |
| 221 | type | MatrixAuthSecretField | (private) |
| 223 | type | MatrixConfiguredAuthInput | (private) |
| 228 | fn | hasConfiguredSecretInputValue | (private) |
| 235 | fn | hasConfiguredMatrixAccessTokenSource | (private) |
| 259 | fn | resolveConfiguredMatrixAuthInput | (private) |
| 310 | fn | resolveConfiguredMatrixAuthSecretInput | (private) |
| 347 | fn | readMatrixBaseConfigField | (private) |
| 364 | fn | readMatrixAccountConfigField | (private) |
| 383 | fn | clampMatrixInitialSyncLimit | (private) |
| 387 | fn | buildMatrixNetworkFields | (private) |
| 419 | fn | hasScopedMatrixEnvConfig | (private) |
| 431 | fn | resolveMatrixConfigForAccount | pub |
| 450 | fn | accountField | (private) |
| 506 | fn | resolveImplicitMatrixAccountId | (private) |
| 516 | fn | resolveMatrixAuthContext | pub |
| 564 | fn | resolveMatrixAuth | pub |
| 710 | fn | login | (private) |
| 764 | fn | backfillMatrixAuthDeviceIdAfterStartup | pub |

## extensions/matrix/src/matrix/client/file-sync-store.ts (604 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | type | PersistedMatrixSyncStore | (private) |
| 41 | type | MatrixSyncCacheMeta | (private) |
| 51 | type | MatrixSyncCacheChunk | (private) |
| 57 | type | MatrixSyncCacheRecord | pub |
| 59 | type | MatrixSyncCacheAsyncStore | (private) |
| 64 | fn | normalizeRoomsData | (private) |
| 82 | fn | toPersistedSyncData | (private) |
| 117 | fn | normalizePersistedStore | (private) |
| 131 | fn | normalizeLegacyPersistedStore | (private) |
| 143 | fn | cloneJson | (private) |
| 147 | fn | syncDataToSyncResponse | (private) |
| 157 | class | SqliteBackedMatrixSyncStore | pub |
| 363 | fn | createNoopMatrixSyncCacheStore | (private) |
| 375 | fn | readPersistedStoreFromSyncStore | (private) |
| 421 | fn | openMatrixSyncCacheStore | (private) |
| 429 | fn | metaKey | (private) |
| 433 | fn | chunkKeyPrefix | (private) |
| 437 | fn | chunkKey | (private) |
| 441 | fn | resolveLegacySyncCachePath | (private) |
| 445 | fn | digestText | (private) |
| 449 | fn | isSyncCacheMeta | (private) |
| 463 | fn | isSyncCacheChunk | (private) |
| 474 | fn | chunkSyncCacheJson | (private) |
| 476 | fn | pushChunk | (private) |
| 500 | fn | buildSyncCacheRows | (private) |
| 537 | fn | readLegacyMatrixSyncCacheState | pub |
| 552 | fn | hasMatrixSyncCacheStateInStore | pub |
| 580 | fn | writeMatrixSyncCacheStateToStore | pub |
| 598 | fn | openMatrixSyncCacheStoreOptions | pub |

## extensions/matrix/src/matrix/client/storage.test.ts (705 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | fn | createTestLogger | (private) |
| 53 | fn | setupStateDir | (private) |
| 75 | fn | createMigrationEnv | (private) |
| 84 | fn | resolveDefaultStoragePaths | (private) |
| 100 | fn | setupCurrentTokenBackfillScenario | (private) |
| 199 | fn | legacySyncCacheBody | (private) |
| 216 | fn | writeJson | (private) |
| 220 | fn | readStorageMeta | (private) |
| 227 | fn | seedStorageMeta | (private) |
| 234 | fn | seedLegacyStorageMeta | (private) |
| 265 | fn | seedExistingStorageRoot | (private) |
| 289 | fn | seedCanonicalStorageRoot | (private) |
| 305 | fn | expectCanonicalRootForNewDevice | (private) |

## extensions/matrix/src/matrix/client/storage.ts (692 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | type | LegacyMoveRecord | (private) |
| 40 | type | LegacyArchiveRecord | (private) |
| 45 | type | MatrixStorageMetadata | pub |
| 55 | fn | openMatrixStorageMetaStoreOptions | pub |
| 63 | fn | openStorageMetaStore | (private) |
| 69 | fn | scoreStorageRoot | (private) |
| 97 | fn | resolveStorageRootMtimeMs | (private) |
| 105 | type | PopulatedMatrixStorageRoot | (private) |
| 112 | fn | normalizeMatrixStorageMetadata | pub |
| 141 | fn | hasMatrixStorageMetaStateInStore | pub |
| 147 | fn | writeMatrixStorageMetaStateToStore | pub |
| 154 | fn | readStoredRootMetadata | (private) |
| 172 | fn | isCompatibleStorageRoot | (private) |
| 211 | fn | resolvePreferredMatrixStorageRoot | (private) |
| 331 | fn | resolveMatrixStoragePaths | pub |
| 368 | fn | resolveMatrixStateFilePath | pub |
| 387 | fn | maybeMigrateLegacyStorage | pub |
| 479 | fn | migrateLegacyIdbSnapshotToSqlite | (private) |
| 513 | fn | migrateLegacySyncCacheToSqlite | (private) |
| 555 | fn | archiveLegacyStoragePath | (private) |
| 570 | fn | rollbackLegacyMoves | (private) |
| 584 | fn | writeStoredRootMetadata | (private) |
| 608 | fn | writeStorageMeta | pub |
| 629 | fn | claimCurrentTokenStorageState | pub |
| 645 | fn | recordCurrentStorageMetaDeviceId | pub |
| 668 | fn | repairCurrentTokenStorageMetaDeviceId | pub |
