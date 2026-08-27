# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 15 large files in this module.

## src/agents/auth-profiles/oauth-manager.test.ts (784 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | fn | createCredential | (private) |
| 41 | fn | withOAuthTempRoot | (private) |
| 50 | fn | withOAuthAgentDirs | (private) |

## src/agents/auth-profiles/oauth-manager.ts (849 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | type | OAuthManagerAdapter | (private) |
| 53 | type | ResolvedOAuthAccess | (private) |
| 59 | class | OAuthManagerRefreshError | pub |
| 134 | fn | hasOAuthCredentialChanged | (private) |
| 145 | fn | canReuseOAuthCredentialAfterRefreshFailure | (private) |
| 153 | fn | collectOAuthCredentialSecrets | (private) |
| 167 | fn | redactOAuthCredentialSecrets | (private) |
| 175 | fn | formatRawErrorMessage | (private) |
| 211 | fn | formatRedactedOAuthRefreshError | (private) |
| 215 | fn | createRedactedOAuthRefreshCause | (private) |
| 224 | fn | loadStoredOAuthRefreshStore | (private) |
| 230 | fn | loadFreshStoredOAuthCredential | (private) |
| 257 | fn | resolveEffectiveOAuthCredential | pub |
| 304 | fn | createOAuthManager | pub |
| 305 | fn | adoptNewerMainOAuthCredential | (private) |
| 350 | fn | refreshQueueKey | (private) |
| 354 | fn | withRefreshCallTimeout | (private) |
| 374 | fn | mirrorRefreshedCredentialIntoMainStore | (private) |
| 413 | fn | saveOAuthCredentialWithStoreLock | (private) |
| 453 | fn | resolveOAuthCredentialAfterPersistMiss | (private) |
| 483 | fn | doRefreshOAuthTokenWithLock | (private) |
| 681 | fn | refreshOAuthTokenWithLock | (private) |
| 693 | fn | resolveOAuthAccess | (private) |
| 840 | fn | resetRefreshQueuesForTest | (private) |

## src/agents/auth-profiles/oauth.mirror-refresh.test.ts (532 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | fn | expectPersistedOpenAICodexProfile | (private) |
| 50 | fn | requireOAuthCredential | (private) |

## src/agents/auth-profiles/oauth.openai-codex-refresh-fallback.test.ts (1215 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | type | GetOAuthApiKey | (private) |
| 96 | fn | readPersistedStore | (private) |
| 100 | fn | mockRotatedOpenAICodexRefresh | (private) |
| 111 | fn | expectPersistedOpenAICodexProfile | (private) |
| 122 | fn | resolveOpenAICodexProfile | (private) |
| 130 | fn | requireOAuthProfile | (private) |
| 139 | fn | requireOAuthContext | (private) |

## src/agents/auth-profiles/oauth.test.ts (613 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | fn | loadOAuthModuleForTest | (private) |
| 40 | fn | cfgFor | (private) |
| 50 | fn | tokenStore | (private) |
| 69 | fn | githubCopilotTokenStore | (private) |
| 83 | fn | resolveWithConfig | (private) |
| 96 | fn | withEnvVar | (private) |
| 100 | fn | expectResolvedApiKey | (private) |
| 170 | fn | createUsableOAuthExpiry | (private) |

## src/agents/auth-profiles/oauth.ts (567 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 53 | fn | listOAuthProviderIds | (private) |
| 95 | fn | isProfileConfigCompatible | (private) |
| 112 | fn | buildOAuthApiKey | (private) |
| 125 | type | ResolveApiKeyForProfileResult | (private) |
| 134 | fn | buildApiKeyProfileResult | (private) |
| 164 | fn | extractErrorMessage | (private) |
| 169 | fn | isRefreshTokenReusedError | (private) |
| 178 | type | ResolveApiKeyForProfileParams | (private) |
| 186 | type | SecretDefaults | (private) |
| 188 | fn | refreshOAuthCredential | (private) |
| 216 | fn | refreshOAuthCredentialForRuntime | pub |
| 242 | fn | resetOAuthRefreshQueuesForTest | (private) |
| 253 | fn | tryResolveOAuthProfile | (private) |
| 293 | fn | authProfileSecretRefKey | (private) |
| 306 | fn | resolveRuntimeAuthProfile | (private) |
| 341 | fn | assertRuntimeAuthProfileSecretOwnerAvailable | (private) |
| 357 | fn | throwUnmaterializedAuthProfileSecretRef | (private) |
| 374 | fn | resolveApiKeyForProfile | pub |

## src/agents/auth-profiles/order.test.ts (844 lines)

_No symbols extracted._

## src/agents/auth-profiles/order.ts (532 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | type | AuthProfileEligibilityReasonCode | pub |
| 36 | type | AuthProfileEligibility | (private) |
| 46 | fn | isOpenAIApiKeyCompatibleWithCodexAuth | (private) |
| 65 | fn | isCredentialProviderCompatibleWithAuthProvider | (private) |
| 88 | fn | isStoredCredentialCompatibleWithAuthProvider | pub |
| 105 | fn | isConfiguredProfileCompatibleWithAuthProvider | (private) |
| 130 | fn | listProfilesCompatibleWithAuthProvider | (private) |
| 150 | fn | resolveProviderAuthMode | (private) |
| 163 | fn | providerAllowsAwsSdkAuth | (private) |
| 169 | fn | isConfiguredAwsSdkAuthProfileForProvider | pub |
| 195 | fn | resolveAuthProfileEligibility | pub |
| 262 | type | ResolveAuthProfileOrderParams | (private) |
| 273 | type | AuthProfileOrderResolution | pub |
| 280 | fn | resolveAuthProfileOrderWithMetadata | pub |
| 435 | fn | resolveAuthProfileOrder | pub |
| 439 | fn | resolveAuthOrder | (private) |
| 446 | fn | isNativeCredentialProviderCompatibleWithAuthProvider | (private) |
| 460 | fn | mergeAliasOrderWithNativeProfiles | (private) |
| 473 | fn | orderProfilesByMode | (private) |

## src/agents/auth-profiles/persisted.ts (833 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | type | LegacyAuthStore | (private) |
| 42 | type | LoadPersistedAuthProfileStoreOptions | (private) |
| 47 | type | CredentialRejectReason | (private) |
| 48 | type | RejectedCredentialEntry | (private) |
| 54 | fn | normalizeOptionalCredentialString | (private) |
| 62 | fn | normalizeExpiryField | (private) |
| 69 | fn | normalizeCredentialMetadata | (private) |
| 84 | fn | normalizeSecretBackedField | (private) |
| 100 | fn | normalizeCommonCredentialFields | (private) |
| 119 | fn | normalizeRawCredentialEntry | (private) |
| 205 | fn | parseCredentialEntry | (private) |
| 230 | fn | warnRejectedCredentialEntries | (private) |
| 250 | fn | coerceLegacyAuthStore | pub |
| 273 | fn | coercePersistedAuthProfileStore | pub |
| 303 | fn | mergeRecord | (private) |
| 319 | fn | dedupeMergedProfileOrder | (private) |
| 323 | fn | groupProfileIdsByProvider | (private) |
| 332 | fn | findOrderEntryKey | (private) |
| 339 | fn | mergeProfileRecordsWithOverridePrecedence | (private) |
| 350 | fn | mergeProfileOrderWithOverridePrecedence | (private) |
| 393 | fn | hasComparableOAuthIdentityConflict | (private) |
| 414 | fn | isLegacyDefaultOAuthProfile | (private) |
| 418 | fn | isNewerUsableOAuthCredential | (private) |
| 434 | fn | findMainStoreOAuthReplacement | (private) |
| 483 | fn | replaceMergedProfileReferences | (private) |
| 557 | fn | reconcileMainStoreOAuthProfileDrift | (private) |
| 586 | fn | mergeAuthProfileStores | pub |
| 712 | fn | buildPersistedAuthProfileSecretsStore | pub |
| 745 | fn | applyLegacyAuthStore | pub |
| 783 | fn | mergeOAuthFileIntoStore | pub |
| 810 | fn | loadPersistedAuthProfileStore | pub |
| 830 | fn | loadLegacyAuthProfileStore | pub |

## src/agents/auth-profiles/profiles.test.ts (1363 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | type | ExpectedOAuthCredentialFields | (private) |
| 59 | type | AuthProfileTestState | (private) |
| 70 | fn | withAuthProfileTestState | (private) |
| 76 | fn | agentDirFor | (private) |
| 97 | fn | expectOAuthCredentialFields | (private) |
| 612 | fn | mutateRuntimeStore | (private) |

## src/agents/auth-profiles/runtime-snapshots.ts (510 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | type | RuntimeAuthProfileStoreMutationListener | (private) |
| 27 | type | PersistedMutationRecord | (private) |
| 40 | fn | maxMutationRevision | (private) |
| 50 | fn | getOrCreatePersistedMutationRecord | (private) |
| 87 | fn | setProfileMutationRevision | (private) |
| 105 | fn | getPersistedMutationRecord | (private) |
| 109 | fn | credentialState | (private) |
| 118 | fn | ownerState | (private) |
| 146 | fn | replaceChangesOwner | (private) |
| 162 | fn | replaceChangesCredentials | (private) |
| 171 | fn | recordChangedSnapshotRevisions | (private) |
| 196 | fn | resolveRuntimeStoreKey | (private) |
| 200 | fn | notifyRuntimeAuthStoreMutation | (private) |
| 211 | fn | registerRuntimeAuthProfileStoreMutationListener | pub |
| 219 | fn | getRuntimeAuthProfileStoreSnapshot | pub |
| 227 | fn | listRuntimeAuthProfileStoreSnapshots | pub |
| 238 | fn | hasRuntimeAuthProfileStoreSnapshot | pub |
| 243 | fn | hasAnyRuntimeAuthProfileStoreSource | pub |
| 256 | fn | replaceRuntimeAuthProfileStoreSnapshots | pub |
| 278 | fn | clearRuntimeAuthProfileStoreSnapshots | pub |
| 295 | fn | clearRuntimeAuthProfileStoreSnapshot | pub |
| 312 | fn | setRuntimeAuthProfileStoreSnapshot | pub |
| 345 | fn | noteRuntimeAuthProfileStorePersistedMutation | pub |
| 398 | type | RuntimeAuthProfileStoreMutationToken | pub |
| 403 | fn | combineMutationTokens | (private) |
| 413 | fn | getRuntimeAuthProfileStoreCredentialMutationToken | pub |
| 445 | fn | getRuntimeAuthProfileStoreProfileSetMutationToken | pub |
| 456 | fn | getRuntimeAuthProfileStoreStateMutationToken | pub |
| 477 | fn | getRuntimeAuthProfileStoreCredentialsRevision | pub |
| 482 | fn | getRuntimeAuthProfileStoreSnapshotRevision | pub |

## src/agents/auth-profiles/session-override.test.ts (670 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | fn | normalizeProvider | (private) |
| 93 | fn | normalizeProvider | (private) |
| 112 | fn | normalizeProvider | (private) |
| 126 | fn | withAuthState | (private) |
| 136 | fn | createAuthStore | (private) |
| 148 | fn | createAuthStoreWithProfiles | (private) |

## src/agents/auth-profiles/store.ts (1728 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 56 | type | LoadAuthProfileStoreOptions | (private) |
| 68 | type | SaveAuthProfileStoreOptions | (private) |
| 78 | fn | hasInlineOAuthTokenMaterial | (private) |
| 82 | fn | hasChangedInlineOAuthTokenMaterial | (private) |
| 94 | fn | preserveLegacyOAuthRefsOnSave | (private) |
| 133 | type | ResolvedExternalCliOverlayOptions | (private) |
| 140 | type | ExternalCliSyncResult | (private) |
| 147 | fn | publishRuntimeSnapshotsAfterCommit | (private) |
| 179 | fn | resolvePersistedLoadOptions | (private) |
| 190 | fn | isInheritedMainOAuthCredential | (private) |
| 222 | fn | shouldUseMainOwnerForLocalOAuthCredential | (private) |
| 243 | fn | resolveRuntimeAuthProfileStore | (private) |
| 288 | fn | resolveExternalCliOverlayOptions | (private) |
| 333 | fn | hasScopedExternalCliOverlay | (private) |
| 339 | fn | maybeSyncPersistedExternalCliAuthProfiles | (private) |
| 415 | fn | shouldKeepProfileInLocalStore | (private) |
| 465 | fn | pruneAuthProfileStoreReferences | (private) |
| 513 | fn | buildLocalAuthProfileStoreForSave | (private) |
| 577 | fn | buildAuthProfileStoreWithoutExternalProfiles | (private) |
| 599 | fn | stripRuntimeExternalProfileMetadata | (private) |
| 606 | fn | markRuntimePersistedProfiles | (private) |
| 621 | fn | buildRuntimeAuthProfileStoreForSave | (private) |
| 635 | fn | setRuntimeLocalProfileMetadata | (private) |
| 647 | fn | runtimeStoreInheritsMainState | (private) |
| 651 | fn | state | (private) |
| 659 | fn | listRuntimeLocalProfileIds | (private) |
| 674 | fn | setRuntimeExternalProfileMetadata | (private) |
| 685 | fn | mergeRuntimeExternalProfileReferences | (private) |
| 760 | fn | preserveResolvedSecretBackedCredentials | (private) |
| 790 | fn | mergeRuntimeExternalProfileState | (private) |
| 867 | fn | updateAuthProfileStoreWithLock | pub |
| 905 | fn | loadAuthProfileStore | pub |
| 915 | fn | loadAuthProfileStoreForAgent | (private) |
| 951 | fn | loadAuthProfileStoreForRuntime | pub |
| 984 | fn | loadAuthProfileStoreForSecretsRuntime | pub |
| 1003 | fn | loadAuthProfileStoreWithoutExternalProfiles | pub |
| 1034 | fn | ensureAuthProfileStore | pub |
| 1066 | fn | ensureAuthProfileStoreWithoutExternalProfiles | pub |
| 1105 | fn | findPersistedAuthProfileCredential | pub |
| 1125 | fn | resolvePersistedAuthProfileOwnerAgentDir | pub |
| 1154 | fn | ensureAuthProfileStoreForLocalUpdate | pub |
| 1179 | fn | getRuntimeAuthProfileStoreSnapshot | pub |
| 1186 | fn | replaceRuntimeAuthProfileStoreSnapshots | pub |
| 1193 | fn | clearRuntimeAuthProfileStoreSnapshots | pub |
| 1198 | fn | clearRuntimeAuthProfileStoreSnapshot | pub |
| 1202 | fn | saveAuthProfileStoreInTransaction | (private) |
| 1247 | fn | publishRuntimeSnapshots | (private) |
| 1303 | fn | saveAuthProfileStore | pub |
| 1317 | fn | publishAfterCommit | (private) |
| 1338 | type | AuthProfileStorePersistenceSnapshot | (private) |
| 1358 | type | CommittedAuthProfileStoreSave | (private) |
| 1363 | fn | captureRuntimeAuthProfileStorePersistenceSnapshot | (private) |
| 1388 | fn | recordRuntimeAuthProfileStoreOwnership | (private) |
| 1406 | fn | recordRuntimeAuthProfileStorePublicationEdge | (private) |
| 1422 | fn | replaceRuntimeAuthProfileStoreSnapshot | (private) |
| 1438 | fn | refreshRuntimeAuthProfileStoreSnapshot | (private) |
| 1446 | fn | rebuildRuntimeAuthProfileStoreSnapshot | (private) |
| 1467 | fn | captureAuthProfileStorePersistenceSnapshot | pub |
| 1483 | fn | saveAuthProfileStoreIfPersistenceSnapshotMatches | pub |
| 1538 | fn | reconcileRuntimeAuthProfileStorePersistenceSnapshot | (private) |
| 1558 | fn | reconcileOne | (private) |
| 1650 | fn | restoreAuthProfileStorePersistenceSnapshot | pub |

## src/agents/auth-profiles/usage.test.ts (1735 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 55 | fn | makeStore | (private) |
| 76 | fn | mockLockedUpdateForStore | (private) |
| 86 | fn | mockLockedUpdatesForStore | (private) |
| 96 | fn | expectProfileErrorStateCleared | (private) |
| 773 | type | WindowStats | (private) |
| 775 | fn | markFailureAt | (private) |
| 1149 | fn | mockWhamResponse | (private) |
| 1158 | fn | markCodexFailureAt | (private) |
| 1595 | fn | makeStoreWithCopilot | (private) |
| 1605 | fn | markFailure | (private) |

## src/agents/auth-profiles/usage.ts (1172 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 67 | fn | logDroppedAuthProfileBookkeeping | (private) |
| 105 | type | WhamUsageWindow | (private) |
| 112 | type | WhamUsageResponse | (private) |
| 120 | type | WhamCooldownProbeResult | (private) |
| 128 | fn | shouldProbeWhamForFailure | (private) |
| 148 | fn | isSameWhamCredential | (private) |
| 161 | fn | resolveActiveWindowUntil | (private) |
| 166 | fn | resolveUsageWindowUntil | (private) |
| 175 | fn | resolveWhamResetMs | (private) |
| 197 | fn | isWhamWindowExhausted | (private) |
| 206 | fn | applyWhamCooldownResult | (private) |
| 250 | fn | cancelUnreadResponseBody | (private) |
| 256 | fn | probeWhamForCooldown | (private) |
| 366 | fn | shouldHalfOpenProbeWhamBlock | (private) |
| 401 | type | WhamBlockGeneration | (private) |
| 406 | fn | matchesWhamBlockGeneration | (private) |
| 419 | fn | claimWhamHalfOpenReprobe | (private) |
| 471 | fn | runWhamHalfOpenReprobe | (private) |
| 538 | fn | maybeReprobeWhamBlockedProfiles | pub |
| 588 | fn | resolveProfilesUnavailableReason | pub |
| 595 | fn | addScore | (private) |
| 667 | fn | calculateAuthProfileCooldownMs | pub |
| 678 | type | ResolvedAuthCooldownConfig | (private) |
| 686 | type | DisabledFailureReason | (private) |
| 688 | type | DisabledFailureBackoffPolicy | (private) |
| 713 | fn | resolveAuthCooldownConfig | (private) |
| 723 | fn | calculateDisabledLaneBackoffMs | (private) |
| 736 | fn | resolveDisabledFailureBackoffMs | (private) |
| 750 | fn | resolveProfileUnusableUntilForDisplay | pub |
| 764 | fn | resetUsageStats | (private) |
| 786 | fn | updateUsageStatsEntry | (private) |
| 795 | fn | keepActiveWindowOrRecompute | (private) |
| 806 | fn | computeNextProfileUsageStats | (private) |
| 918 | fn | markAuthProfileFailure | pub |
| 1017 | fn | buildBlockedProfileUsageStats | (private) |
| 1057 | fn | markAuthProfileBlockedUntil | pub |
| 1128 | fn | markAuthProfileCooldown | pub |
| 1147 | fn | clearAuthProfileCooldown | pub |
