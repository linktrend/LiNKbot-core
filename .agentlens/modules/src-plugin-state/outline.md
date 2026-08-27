# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 5 large files in this module.

## src/plugin-state/plugin-blob-store.sqlite.ts (660 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | type | PluginBlobTable | (private) |
| 28 | type | PluginBlobDatabase | (private) |
| 29 | type | PluginBlobRow | (private) |
| 31 | type | PluginBlobStoredInfo | pub |
| 36 | type | PluginBlobStoredEntry | pub |
| 38 | type | BlobDescriptor | (private) |
| 45 | type | BlobWriteParams | (private) |
| 58 | type | ValidateMetadataJson | (private) |
| 60 | fn | createError | (private) |
| 75 | fn | wrapError | (private) |
| 87 | fn | openDatabase | (private) |
| 102 | fn | kysely | (private) |
| 106 | fn | selectLiveBlob | (private) |
| 123 | fn | blobKeyExists | (private) |
| 140 | fn | selectLiveInfo | (private) |
| 158 | fn | selectExpiredKeyInfo | (private) |
| 176 | fn | selectLiveDescriptors | (private) |
| 196 | fn | selectStoredDescriptors | (private) |
| 212 | fn | selectStoredKeyDescriptor | (private) |
| 228 | fn | deleteKey | (private) |
| 243 | fn | deleteKeys | (private) |
| 263 | fn | deleteExpiredNamespace | (private) |
| 279 | fn | totalBytes | (private) |
| 283 | fn | limitError | (private) |
| 292 | fn | assertProjectedLimits | (private) |
| 328 | fn | deleteOldestUntilWithinLimits | (private) |
| 412 | fn | upsertBlob | (private) |
| 413 | fn | expiresAt | (private) |
| 453 | fn | writeBlob | (private) |
| 487 | fn | pluginBlobRegister | pub |
| 491 | fn | pluginBlobRegisterIfAbsent | pub |
| 495 | fn | pluginBlobLookup | pub |
| 515 | fn | pluginBlobEntries | pub |
| 534 | fn | pluginBlobDelete | pub |
| 557 | fn | pluginBlobDeleteExpiredKey | pub |
| 589 | fn | pluginBlobDeleteExpired | pub |
| 632 | fn | pluginBlobClear | pub |

## src/plugin-state/plugin-state-lease.test.ts (682 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | fn | deferred | (private) |
| 23 | fn | abortReason | (private) |

## src/plugin-state/plugin-state-store.sqlite.ts (1297 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | type | PluginStateEntriesTable | (private) |
| 37 | type | PluginStateStoreDatabase | (private) |
| 39 | type | PluginStateRow | (private) |
| 41 | type | CountRow | (private) |
| 45 | type | PluginStateDatabase | (private) |
| 50 | type | PluginStateSeedEntryForTests | (private) |
| 61 | fn | createPluginStateError | (private) |
| 76 | fn | resolvePluginStateExpiresAtMs | (private) |
| 97 | fn | wrapPluginStateError | (private) |
| 116 | fn | parseStoredJson | (private) |
| 130 | fn | rowToEntry | (private) |
| 143 | fn | getPluginStateKysely | (private) |
| 147 | fn | bindPluginStateEntry | (private) |
| 165 | fn | upsertPluginStateEntry | (private) |
| 181 | fn | insertPluginStateEntryIfAbsent | (private) |
| 192 | fn | selectPluginStateEntry | (private) |
| 208 | fn | selectPluginStateEntries | (private) |
| 225 | fn | selectPluginStateEntriesInKeyRange | (private) |
| 252 | fn | deletePluginStateEntry | (private) |
| 267 | fn | deleteExpiredPluginStateNamespaceEntries | (private) |
| 282 | fn | countLivePluginStateNamespaceEntries | (private) |
| 298 | fn | allocatePluginStateNamespaceCreatedAt | (private) |
| 318 | fn | countLivePluginStateEntries | (private) |
| 333 | fn | deleteOldestPluginStateNamespaceEntries | (private) |
| 359 | fn | sweepExpiredPluginStateEntriesFromDatabase | (private) |
| 370 | fn | openPluginStateDatabase | (private) |
| 401 | fn | countRow | (private) |
| 406 | fn | envOptions | (private) |
| 410 | fn | runWriteTransaction | (private) |
| 422 | fn | enforcePostRegisterLimits | (private) |
| 487 | fn | assertCanInsertPluginStateEntry | (private) |
| 526 | fn | resolveMaxPluginStateEntriesPerPlugin | pub |
| 530 | fn | pluginStateRegister | pub |
| 608 | fn | pluginStateRegisterSequencedJournalEntry | pub |
| 743 | fn | pluginStateRegisterIfAbsent | pub |
| 823 | fn | pluginStateUpdate | pub |
| 904 | fn | pluginStateLookup | pub |
| 929 | fn | pluginStateConsume | pub |
| 963 | fn | pluginStateDelete | pub |
| 987 | fn | pluginStateDeleteIf | pub |
| 1021 | fn | pluginStateEntries | pub |
| 1045 | fn | pluginStateEntriesInKeyRange | pub |
| 1089 | fn | pluginStateClear | pub |
| 1118 | fn | sweepExpiredPluginStateEntries | pub |
| 1133 | fn | isPluginStateDatabaseOpen | pub |
| 1137 | fn | clearPluginStateDatabaseForTests | pub |
| 1145 | fn | setMaxPluginStateEntriesPerPluginForTests | (private) |
| 1149 | fn | countPluginStateLiveEntries | pub |
| 1163 | fn | getPluginStateCapacity | pub |
| 1173 | fn | seedPluginStateDatabaseEntriesForTests | (private) |
| 1198 | fn | probePluginStateStore | (private) |
| 1204 | fn | pushOk | (private) |
| 1205 | fn | pushFailure | (private) |
| 1285 | fn | closePluginStateDatabase | pub |

## src/plugin-state/plugin-state-store.test.ts (903 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 54 | fn | withPluginStateTestState | (private) |
| 58 | fn | expectPluginStateStoreError | (private) |

## src/plugin-state/plugin-state-store.ts (619 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 56 | type | StoreOptionSignature | (private) |
| 62 | type | PreparedRegisterParams | (private) |
| 68 | type | PluginStateImportEntry | (private) |
| 75 | fn | invalidInput | (private) |
| 85 | fn | validateNamespace | (private) |
| 96 | fn | validateKey | (private) |
| 107 | fn | validateMaxEntries | (private) |
| 114 | fn | validateOverflowPolicy | (private) |
| 124 | fn | validateOptionalTtlMs | (private) |
| 138 | fn | prepareRegisterParams | (private) |
| 166 | fn | assertConsistentOptions | (private) |
| 191 | fn | createKeyedStoreForPluginId | (private) |
| 301 | fn | createSyncKeyedStoreForPluginId | (private) |
| 418 | fn | registerMigratedPluginStateEntry | pub |
| 457 | fn | createPluginStateKeyedStore | pub |
| 468 | fn | createPluginStateSyncKeyedStore | pub |
| 479 | fn | registerPluginStateSyncSequencedJournalEntry | pub |
| 559 | fn | importPluginStateEntriesForDoctor | pub |
| 594 | fn | createCorePluginStateSyncKeyedStore | pub |
| 601 | fn | clearPluginStateStoreForTests | (private) |
| 607 | fn | resetPluginStateStoreForTests | pub |
