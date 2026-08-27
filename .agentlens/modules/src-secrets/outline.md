# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 27 large files in this module.

## src/secrets/apply.test.ts (1773 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 57 | type | ApplyFixture | (private) |
| 68 | fn | stripVolatileConfigMeta | (private) |
| 83 | fn | writeJsonFile | (private) |
| 94 | fn | readAuthStore | (private) |
| 99 | fn | createOpenAiProviderConfig | (private) |
| 108 | fn | buildFixturePaths | (private) |
| 122 | fn | createApplyFixture | (private) |
| 138 | fn | seedDefaultApplyFixture | (private) |
| 170 | fn | applyPlanAndReadConfig | (private) |
| 179 | fn | createPlan | (private) |
| 197 | fn | createOpenAiProviderTarget | (private) |
| 211 | fn | createOpenAiExecProviderTarget | (private) |
| 220 | fn | createOpenAiExecProviderPlan | (private) |
| 231 | fn | createOpenAiProviderHeaderTarget | (private) |
| 243 | fn | writeOpenAiExecResolverConfig | (private) |
| 279 | fn | createOneWayScrubOptions | (private) |

## src/secrets/apply.ts (1049 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 55 | type | FileSnapshot | (private) |
| 61 | type | ApplyWrite | (private) |
| 67 | type | AuthStoreSnapshot | (private) |
| 73 | type | ProjectedState | (private) |
| 89 | type | ResolvedPlanTargetEntry | (private) |
| 94 | type | ConfigTargetMutationResult | (private) |
| 103 | type | MutableAuthProfileStore | (private) |
| 108 | type | SecretsApplyResult | pub |
| 122 | fn | planContainsExecReferences | (private) |
| 129 | fn | hasPluginPolicyId | (private) |
| 133 | fn | findPluginEntry | (private) |
| 146 | fn | resolveTarget | (private) |
| 156 | fn | scrubEnvRaw | (private) |
| 199 | fn | applyProviderPlanMutations | (private) |
| 285 | fn | projectPlanState | (private) |
| 379 | fn | applyConfigTargetMutations | (private) |
| 464 | fn | scrubAuthStoresForProviderTargets | (private) |
| 533 | fn | ensureMutableAuthStore | (private) |
| 544 | fn | resolveAuthStoreForTarget | (private) |
| 569 | fn | resolveAuthStoreTargetForAgent | (private) |
| 594 | fn | listAuthProfileStoreTargets | (private) |
| 604 | fn | ensureAuthProfileContainer | (private) |
| 655 | fn | applyAuthProfileTargetMutation | (private) |
| 704 | fn | scrubLegacyAuthJsonStores | (private) |
| 738 | fn | scrubEnvFiles | (private) |
| 767 | fn | validateProjectedSecretsState | (private) |
| 842 | fn | captureFileSnapshot | (private) |
| 854 | fn | restoreFileSnapshot | (private) |
| 864 | fn | toJsonWrite | (private) |
| 874 | fn | runSecretsApply | pub |
| 928 | fn | capture | (private) |
| 933 | fn | captureAuthStore | (private) |

## src/secrets/audit.test.ts (876 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | type | AuditFixture | (private) |
| 30 | fn | countNonEmptyLines | (private) |
| 40 | fn | writeJsonFile | (private) |
| 44 | fn | writeAuthStore | (private) |
| 48 | fn | writeExecResolverShellScript | (private) |
| 65 | fn | writeExecSecretsAuditConfig | (private) |
| 107 | fn | resolveRuntimePathEnv | (private) |
| 114 | fn | hasFinding | (private) |
| 123 | fn | expectFindingCode | (private) |
| 127 | fn | expectFindingFile | (private) |
| 131 | fn | expectPathMissing | (private) |
| 140 | fn | createAuditFixture | (private) |
| 171 | fn | seedAuditFixture | (private) |
| 228 | fn | writeModelsProvider | (private) |
| 247 | fn | expectModelsFinding | (private) |

## src/secrets/audit.ts (722 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 47 | type | SecretsAuditCode | (private) |
| 50 | type | SecretsAuditSeverity | (private) |
| 53 | type | SecretsAuditFinding | (private) |
| 64 | type | SecretsAuditStatus | (private) |
| 67 | type | SecretsAuditReport | (private) |
| 85 | type | RefAssignment | (private) |
| 93 | type | ProviderAuthState | (private) |
| 98 | type | SecretDefaults | (private) |
| 104 | type | AuditCollector | (private) |
| 114 | fn | addFinding | (private) |
| 118 | fn | collectProviderRefPath | (private) |
| 132 | fn | trackAuthProviderState | (private) |
| 150 | fn | collectEnvPlaintext | (private) |
| 181 | fn | collectConfigSecrets | (private) |
| 241 | fn | collectAuthStoreSecrets | (private) |
| 308 | fn | collectAuthJsonResidue | (private) |
| 344 | fn | collectModelsJsonSecrets | (private) |
| 434 | fn | collectUnresolvedRefFindings | (private) |
| 585 | fn | collectShadowingFindings | (private) |
| 605 | fn | summarizeFindings | (private) |
| 616 | fn | runSecretsAudit | pub |
| 714 | fn | resolveSecretsAuditExitCode | pub |

## src/secrets/configure.ts (1080 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 52 | type | SecretsConfigureResult | (private) |
| 61 | fn | isAbsolutePathValue | (private) |
| 69 | fn | parseCsv | (private) |
| 76 | fn | parseOptionalPositiveInt | (private) |
| 91 | fn | getSecretProviders | (private) |
| 98 | fn | setSecretProvider | (private) |
| 110 | fn | removeSecretProvider | (private) |
| 146 | fn | providerHint | (private) |
| 160 | fn | providerPresetKey | (private) |
| 164 | fn | providerPresetHint | (private) |
| 168 | fn | loadSecretProviderIntegrationPresets | (private) |
| 183 | fn | toSourceChoices | (private) |
| 184 | fn | hasSource | (private) |
| 201 | fn | assertNoCancel | (private) |
| 210 | fn | validateEnvNameCsv | (private) |
| 220 | fn | promptEnvNameCsv | (private) |
| 235 | fn | promptOptionalPositiveInt | (private) |
| 265 | fn | configureCandidateKey | (private) |
| 276 | fn | hasSourceChoice | (private) |
| 283 | fn | resolveCandidateProviderHint | (private) |
| 290 | fn | resolveSuggestedEnvSecretId | (private) |
| 302 | fn | resolveConfigureAgentId | (private) |
| 317 | fn | loadAuthProfileStoreForConfigure | (private) |
| 330 | fn | promptNewAuthProfileCandidate | (private) |
| 393 | fn | promptProviderAlias | (private) |
| 417 | fn | promptProviderSource | (private) |
| 433 | fn | promptEnvProvider | (private) |
| 446 | fn | promptFileProvider | (private) |
| 507 | fn | parseArgsInput | (private) |
| 519 | fn | promptExecProvider | (private) |
| 648 | fn | promptProviderConfig | (private) |
| 663 | fn | configureProvidersInteractive | (private) |
| 820 | fn | runSecretsConfigureInteractive | pub |

## src/secrets/provider-env-vars.dynamic.test.ts (802 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | type | MockManifestRegistry | (private) |
| 69 | fn | requireLastMetadataSnapshotCall | (private) |

## src/secrets/provider-integrations.test.ts (884 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | fn | makeTempDir | (private) |
| 27 | fn | makeSecureDir | (private) |
| 32 | fn | writeSecureFile | (private) |
| 37 | fn | createCandidate | (private) |
| 50 | fn | pluginIntegrationProviderConfig | (private) |

## src/secrets/resolve.test.ts (856 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | fn | writeSecureFile | (private) |
| 40 | fn | itPosix | (private) |
| 61 | type | ExecProviderConfig | (private) |
| 73 | type | FileProviderConfig | (private) |
| 81 | fn | createExecProviderConfig | (private) |
| 93 | fn | resolveExecSecret | (private) |
| 111 | fn | createFileProviderConfig | (private) |

## src/secrets/resolve.ts (901 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 71 | type | ResolveSecretRefOptions | (private) |
| 78 | type | ResolutionLimits | (private) |
| 84 | type | ProviderResolutionOutput | (private) |
| 86 | type | ProviderRefGroup | (private) |
| 94 | fn | throwUnknownProviderResolutionError | (private) |
| 110 | fn | readFileStatOrThrow | (private) |
| 121 | fn | isAbsolutePathname | (private) |
| 129 | fn | resolveResolutionLimits | (private) |
| 137 | fn | toProviderKey | (private) |
| 141 | fn | resolveConfiguredProvider | (private) |
| 199 | fn | assertSecurePath | (private) |
| 269 | fn | readFileProviderPayload | (private) |
| 276 | fn | read | (private) |
| 318 | fn | resolveEnvRefs | (private) |
| 353 | fn | resolveFileRefs | (private) |
| 409 | fn | parseExecValues | (private) |
| 497 | fn | resolveExecRefs | (private) |
| 649 | fn | resolveProviderRefs | (private) |
| 704 | fn | normalizeAndGroupSecretRefs | (private) |
| 752 | fn | createProviderResolutionTasks | (private) |
| 797 | fn | resolveSecretRefProviderGroups | (private) |
| 838 | fn | resolveSecretRefValues | pub |
| 850 | fn | resolveSecretRefValuesSettledByProvider | pub |
| 860 | fn | resolveSecretRefValue | pub |
| 866 | fn | resolve | (private) |
| 889 | fn | resolveSecretRefString | pub |

## src/secrets/runtime-config-collectors-core.ts (598 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | type | ProviderLike | (private) |
| 34 | type | SkillEntryLike | (private) |
| 39 | type | ProviderRequestLike | (private) |
| 46 | fn | collectModelProviderAssignments | (private) |
| 108 | fn | collectSkillAssignments | (private) |
| 138 | fn | collectTalkAssignments | (private) |
| 172 | fn | collectTalkProviderApiKeyAssignments | (private) |
| 198 | fn | collectGatewayAssignments | (private) |
| 277 | fn | collectProviderRequestAssignments | (private) |
| 336 | fn | collectTlsAssignments | (private) |
| 372 | fn | collectMediaRequestAssignments | (private) |
| 384 | fn | getProviderRegistry | (private) |
| 392 | fn | collectModelAssignments | (private) |
| 498 | fn | collectMessagesTtsAssignments | (private) |
| 515 | fn | collectAgentTtsAssignments | (private) |
| 538 | fn | collectCronAssignments | (private) |
| 567 | fn | collectCoreConfigAssignments | pub |

## src/secrets/runtime-config-collectors-plugins.test.ts (573 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | fn | asConfig | (private) |
| 29 | fn | makeContext | (private) |
| 36 | fn | envRef | (private) |
| 40 | fn | loadablePluginOrigins | (private) |
| 44 | type | RuntimeConfigAssignment | (private) |
| 46 | fn | requireAssignment | (private) |
| 54 | fn | createAcpxMcpSecretConfig | (private) |
| 75 | fn | collectAcpxConfigAssignments | (private) |
| 86 | fn | expectInactiveAcpxConfig | (private) |

## src/secrets/runtime-degradation-attribution.test.ts (759 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 76 | fn | config | (private) |
| 112 | fn | config | (private) |

## src/secrets/runtime-discord-surface.test.ts (613 lines)

_No symbols extracted._

## src/secrets/runtime-external-channel-audit.test.ts (578 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 51 | type | ExternalizedChannelId | (private) |
| 53 | fn | ref | (private) |
| 57 | fn | inactiveExecRef | (private) |
| 61 | fn | createExternalChannelRecord | (private) |
| 77 | fn | configureExternalChannelRecords | (private) |
| 85 | fn | externalChannelOrigins | (private) |
| 89 | fn | mockBundledPublicArtifactMiss | (private) |
| 102 | fn | createGoogleChatSecretContractApi | (private) |
| 131 | fn | collectRuntimeConfigAssignments | (private) |
| 147 | fn | collect | (private) |
| 187 | fn | expectMetadataBackedContractsWereUsed | (private) |
| 206 | fn | expectResolvedPaths | (private) |

## src/secrets/runtime-machine-token-plugin-secretref.integration.test.ts (532 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 85 | type | FacadeStore | (private) |
| 87 | fn | facadeStore | (private) |
| 97 | fn | clearFacadeStore | (private) |
| 101 | type | ExtensionManifest | (private) |
| 111 | fn | readExtensionManifest | (private) |
| 121 | fn | secretInputPaths | (private) |
| 125 | fn | writeSecureFile | (private) |
| 133 | fn | machineTokenConfig | (private) |
| 153 | fn | stubRegistryFromManifests | (private) |

## src/secrets/runtime-owner-assignments.ts (538 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | type | SecretResolutionOptions | (private) |
| 41 | fn | classifySecretOwnerDegradationState | pub |
| 76 | fn | registerResolvedValuesForRedaction | (private) |
| 84 | fn | assignmentOwnerKey | (private) |
| 88 | fn | groupAssignmentsByOwner | (private) |
| 112 | fn | listSecretAssignmentOwners | pub |
| 141 | fn | createDegradedOwner | (private) |
| 165 | fn | associateAssignmentFailureOwners | (private) |
| 306 | fn | warnDegradedSecretOwner | pub |
| 319 | fn | resolveStrictAssignments | (private) |
| 341 | fn | assignmentMatchesResolutionFailure | (private) |
| 353 | fn | assertOwnerCanBeIsolated | (private) |
| 371 | fn | resolveAndApplySecretAssignments | pub |

## src/secrets/runtime-provider-and-media-surfaces.test.ts (706 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | fn | createOpenAiFileModelsConfig | (private) |
| 27 | fn | envTokenRef | (private) |
| 31 | fn | prepareMediaModelAuthSnapshot | (private) |
| 164 | fn | writeSecrets | (private) |

## src/secrets/runtime-state.test.ts (2559 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 386 | fn | profile | (private) |
| 605 | fn | profile | (private) |

## src/secrets/runtime-state.ts (1168 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 46 | type | PreparedSecretsRuntimeSnapshot | pub |
| 57 | type | LocatedSecretRef | (private) |
| 62 | type | SecretDefaults | (private) |
| 64 | fn | listLocatedSecretRefs | (private) |
| 90 | fn | hasSameSecretReloadContract | pub |
| 106 | type | SecretsRuntimeRefreshContext | pub |
| 146 | type | ProfileOwner | (private) |
| 147 | type | ProfileOwnerMutationLineage | (private) |
| 151 | type | StoreMutationLineage | (private) |
| 159 | fn | cloneSecretsRuntimeRefreshContext | (private) |
| 178 | fn | cloneDegradedSecretOwner | (private) |
| 199 | fn | cloneSecretOwnerRefState | (private) |
| 217 | fn | cloneSnapshot | (private) |
| 233 | fn | mergeLiveAuthStoreBookkeeping | (private) |
| 253 | fn | profileOwner | (private) |
| 263 | fn | captureProfileOwnerMutationLineage | (private) |
| 280 | fn | captureStoreMutationLineage | (private) |
| 296 | fn | captureAuthStoreMutationLineage | (private) |
| 344 | fn | mergeRollbackValue | (private) |
| 369 | fn | hasSameSecretProviderDefinition | pub |
| 386 | fn | dependency | (private) |
| 394 | fn | preserveResolvedSecretRefValues | (private) |
| 442 | fn | preserveResolvedAuthStoreSecretValues | (private) |
| 503 | fn | preserveLiveAuthStoreBookkeeping | (private) |
| 532 | fn | credentialSecretRef | (private) |
| 542 | fn | rebuildSelectedRuntimeProfileMetadata | (private) |
| 546 | fn | profileIdsFor | (private) |
| 566 | fn | compareMutationTokens | (private) |
| 576 | fn | readProfileOwnerMutationToken | (private) |
| 588 | fn | getProfileMutationDecision | (private) |
| 626 | fn | mergeRollbackAuthStoreCredentials | (private) |
| 645 | fn | currentStoreMutationStatus | (private) |
| 824 | fn | setPreparedSecretsRuntimeSnapshotRefreshContext | pub |
| 834 | fn | getPreparedSecretsRuntimeSnapshotRefreshContext | pub |
| 844 | fn | getActiveSecretsRuntimeRefreshContext | pub |
| 849 | fn | graftActiveSecretsRuntimeAuthState | pub |
| 861 | fn | getActiveSecretsRuntimeEnv | pub |
| 870 | fn | registerSecretsRuntimeStateClearHook | pub |
| 877 | fn | activateSecretsRuntimeSnapshotState | pub |
| 929 | fn | hasCurrentAuthStoreCredentialsRevision | pub |
| 936 | fn | activateSecretsRuntimeSnapshotStateIfCurrent | pub |
| 952 | fn | restoreSecretsRuntimeSnapshotStateIfCurrent | pub |
| 1027 | fn | getActiveSecretsRuntimeSnapshot | pub |
| 1044 | fn | getActiveSecretsRuntimeSnapshotRevision | pub |
| 1049 | fn | hasActiveSecretsRuntimeSnapshotLineage | pub |
| 1054 | fn | setSecretsRuntimeSourceSnapshotIfCurrent | pub |
| 1077 | fn | advanceSecretsRuntimeSourceSnapshot | (private) |
| 1091 | fn | restoreSecretsRuntimeSourceSnapshotIfLineageCurrent | pub |
| 1123 | fn | getActiveSecretsRuntimeConfigSnapshot | pub |
| 1139 | fn | getLiveSecretsRuntimeAuthStores | pub |
| 1152 | fn | clearSecretsRuntimeSnapshot | pub |

## src/secrets/runtime-web-tools.shared.ts (748 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 106 | fn | pushInactiveProviderCredentialWarnings | (private) |
| 138 | fn | normalizeKnownProvider | (private) |
| 155 | fn | hasConfiguredSecretRef | pub |
| 167 | fn | getProviderEnvVars | (private) |
| 171 | fn | setResolvedCredentialPath | (private) |
| 245 | fn | resolveRuntimeWebProviderSurface | pub |
| 361 | fn | resolveRuntimeWebProviderSelection | pub |
| 378 | fn | resolveProviderContractDigest | (private) |
| 387 | type | UnresolvedProvider | (private) |
| 570 | fn | recordUnresolvedNoFallback | (private) |

## src/secrets/runtime-web-tools.test.ts (2151 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | type | ProviderUnderTest | (private) |
| 105 | fn | asConfig | (private) |
| 109 | fn | providerPluginId | (private) |
| 124 | fn | ensureRecord | (private) |
| 134 | fn | setConfiguredProviderKey | (private) |
| 147 | fn | setConfiguredFetchProviderKey | (private) |
| 156 | fn | createTestProvider | (private) |
| 212 | fn | buildTestWebSearchProviders | (private) |
| 223 | fn | buildTestWebFetchProviders | (private) |
| 268 | fn | runRuntimeWebTools | (private) |
| 288 | fn | activateRuntimeWebToolsResult | (private) |
| 308 | fn | createProviderSecretRefConfig | (private) |
| 336 | fn | readProviderKey | (private) |
| 343 | fn | requireRecord | (private) |
| 350 | fn | diagnostics | (private) |
| 355 | fn | expectDiagnostic | (private) |
| 373 | fn | expectNoDiagnosticCode | (private) |
| 377 | fn | firstMockArg | (private) |
| 762 | fn | readDottedKey | (private) |
| 908 | fn | config | (private) |

## src/secrets/runtime-web-tools.ts (1106 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 72 | type | FetchConfig | (private) |
| 78 | type | SecretResolutionSource | (private) |
| 82 | fn | ensureConfigObject | (private) |
| 92 | type | ResolvedRuntimeWebTools | (private) |
| 98 | type | RuntimeWebProviderFailure | (private) |
| 101 | type | RuntimeWebProviderFailureByRefKey | (private) |
| 106 | fn | createUnavailableWebProviderOwner | (private) |
| 128 | fn | attachWebProviderFailures | (private) |
| 137 | fn | collectUnavailableWebProviders | (private) |
| 199 | fn | toWebSecretOwnerRefState | (private) |
| 214 | fn | associateWebProviderResolutionError | (private) |
| 281 | fn | needsRuntimeWebFetchProviderDiscovery | (private) |
| 304 | fn | hasPluginScopedWebToolConfig | (private) |
| 321 | fn | inferSingleBundledPluginScopedWebToolConfigOwner | (private) |
| 346 | fn | inferExactBundledPluginScopedWebToolConfigOwner | (private) |
| 359 | type | WebProviderContract | (private) |
| 361 | fn | hasCustomWebProviderPluginRisk | (private) |
| 389 | fn | hasNonBundledPluginId | (private) |
| 403 | fn | readNonEmptyEnvValue | (private) |
| 416 | fn | resolveSecretInputWithEnvFallback | (private) |
| 549 | fn | setResolvedWebSearchApiKey | (private) |
| 564 | fn | resolveBundledWebSearchProviders | (private) |
| 617 | fn | resolveBundledWebFetchProviders | (private) |
| 668 | fn | readConfiguredProviderCredential | (private) |
| 679 | fn | readConfiguredProviderCredentialFallback | (private) |
| 687 | fn | inactivePathsForProvider | (private) |
| 696 | fn | setResolvedWebFetchApiKey | (private) |
| 711 | fn | readConfiguredFetchProviderCredential | (private) |
| 722 | fn | readConfiguredFetchProviderCredentialFallback | (private) |
| 730 | fn | inactivePathsForFetchProvider | (private) |
| 743 | fn | resolveRuntimeWebTools | pub |

## src/secrets/runtime.coverage.test.ts (993 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | fn | createSnapshot | (private) |
| 71 | fn | createCoverageWebSearchProvider | (private) |
| 106 | fn | createCoverageWebFetchProvider | (private) |
| 250 | type | SecretRegistryEntry | (private) |
| 260 | type | SecretRefCredentialMatrix | (private) |
| 273 | fn | loadCoverageRegistryEntries | (private) |
| 329 | fn | ensureConfigCoverageRuntimeLoaded | (private) |
| 335 | fn | ensureAuthCoverageRuntimeLoaded | (private) |
| 341 | fn | ensureRuntimeWebToolsLoaded | (private) |
| 347 | fn | toConcretePathSegments | (private) |
| 366 | fn | resolveCoverageEnvId | (private) |
| 372 | fn | toCoverageEnvRefId | (private) |
| 384 | fn | resolveCoverageResolvedPath | (private) |
| 388 | fn | resolveCoverageWildcardToken | (private) |
| 392 | fn | resolveCoverageResolvedSegments | (private) |
| 399 | fn | buildCoverageLoadablePluginOrigins | (private) |
| 415 | fn | addCoveragePluginLoadPath | (private) |
| 428 | fn | resolveCoverageLoadablePluginOrigins | (private) |
| 445 | fn | resolveCoverageBatchKey | (private) |
| 500 | fn | buildCoverageBatches | (private) |
| 514 | fn | logCoverageBatch | (private) |
| 523 | fn | batchNeedsRuntimeWebTools | (private) |
| 532 | fn | batchUsesRuntimeWebToolsOnly | (private) |
| 544 | fn | collectOpenClawCoverageEntries | (private) |
| 555 | fn | applyConfigForOpenClawTarget | (private) |
| 721 | fn | applyAuthStoreTarget | (private) |
| 752 | fn | prepareConfigCoverageSnapshot | (private) |
| 805 | fn | prepareAuthCoverageSnapshot | (private) |
| 851 | fn | expectOpenClawCoverageBatchResolved | (private) |
| 892 | fn | toCoverageBatchCase | (private) |

## src/secrets/runtime.test.ts (924 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 38 | fn | expectWarning | (private) |
| 52 | fn | ref | (private) |
| 53 | fn | config | (private) |
| 109 | fn | config | (private) |
| 148 | fn | ref | (private) |
| 149 | fn | config | (private) |
| 208 | fn | config | (private) |

## src/secrets/runtime.ts (672 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 75 | fn | resolveLoadablePluginOrigins | (private) |
| 96 | fn | hasConfiguredPluginEntries | (private) |
| 106 | fn | hasConfiguredChannelEntries | (private) |
| 116 | fn | hasConfiguredPluginIntegrationSecretProviders | (private) |
| 129 | fn | shouldLoadPluginMetadataForSecrets | (private) |
| 138 | fn | prepareSecretsRuntimeSnapshot | pub |
| 311 | fn | activateSecretsRuntimeSnapshot | pub |
| 316 | fn | activateSecretsRuntimeSnapshotWithSource | pub |
| 327 | fn | activateSecretsRuntimeSnapshotIfCurrent | pub |
| 341 | fn | restoreSecretsRuntimeSnapshotIfCurrent | pub |
| 355 | type | PreparedSecretsRuntimeRefresh | (private) |
| 360 | fn | coercePreflightRefresh | (private) |
| 375 | fn | prepareActiveSecretsRuntimeRefresh | (private) |
| 408 | fn | preflightActiveSecretsRuntimeSnapshotRefresh | pub |
| 415 | fn | refreshActiveSecretsRuntimeSnapshotForConfig | pub |
| 446 | type | ResolvedSecretRefPatch | (private) |
| 450 | fn | patchResolvedSecretRefLeaves | (private) |
| 502 | fn | selectProviderAuthConfig | (private) |
| 509 | fn | listAuthProfileSecretOwnerIds | (private) |
| 521 | fn | mergeProviderAuthSecretOwners | (private) |
| 527 | fn | isActiveProviderAuthOwner | (private) |
| 530 | fn | isCandidateProviderAuthOwner | (private) |
| 543 | fn | mergeProviderAuthDegradedOwners | (private) |
| 549 | fn | isProviderAuthOwner | (private) |
| 562 | fn | createSecretsRuntimeSnapshotActivation | (private) |
| 585 | fn | refreshActiveProviderAuthRuntimeSnapshot | pub |
| 630 | fn | activateSnapshotIfCurrent | (private) |
| 654 | fn | getActiveSecretsRuntimeSnapshot | pub |
| 658 | fn | getActiveSecretsRuntimeSnapshotRevision | pub |
| 662 | fn | getActiveSecretsRuntimeEnv | pub |
| 666 | fn | getActiveRuntimeWebToolsMetadata | pub |
| 670 | fn | clearSecretsRuntimeSnapshot | pub |

## src/secrets/target-registry-data.ts (515 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | type | WebProviderSecretConfig | (private) |
| 18 | fn | createPluginOpenClawConfigSecretTargetEntry | (private) |
| 38 | fn | hasSensitiveConfigHint | (private) |
| 45 | fn | hasWebProviderContract | (private) |
| 52 | fn | listBundledWebProviderSecretTargetRegistryEntries | (private) |
| 69 | fn | listBundledPluginConfigSecretTargetRegistryEntries | (private) |
| 89 | fn | listSourceBundledPluginConfigContractRecords | (private) |
| 107 | fn | listChannelSecretTargetRegistryEntries | (private) |
| 465 | fn | loadSecretTargetRegistryFromPluginMetadata | (private) |
| 489 | fn | getCoreSecretTargetRegistry | pub |
| 495 | fn | getSecretTargetRegistry | pub |

## src/secrets/target-registry-query.ts (534 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | fn | buildTargetTypeIndex | (private) |
| 49 | fn | append | (private) |
| 66 | fn | buildConfigTargetIdIndex | (private) |
| 81 | fn | getCompiledSecretTargetRegistryState | (private) |
| 104 | fn | getCompiledCoreOpenClawTargetState | (private) |
| 121 | fn | getCompiledCoreAuthProfileTargetState | (private) |
| 135 | fn | getCompiledChannelOpenClawTargets | (private) |
| 162 | fn | normalizeAllowedTargetIds | (private) |
| 173 | fn | configHasPluginEntries | (private) |
| 177 | fn | getConfiguredChannelOpenClawTargets | (private) |
| 185 | fn | resolveDiscoveryEntries | (private) |
| 198 | fn | discoverSecretTargetsFromEntries | (private) |
| 241 | fn | toResolvedPlanTarget | (private) |
| 273 | fn | listSecretTargetRegistryEntries | pub |
| 302 | fn | isKnownSecretTargetId | pub |
| 309 | fn | isKnownCoreSecretTargetId | pub |
| 318 | fn | resolvePlanTargetAgainstRegistry | pub |
| 344 | fn | resolvePlanTargetAgainstEntries | (private) |
| 387 | fn | resolveSecretPlanTargetByPath | pub |
| 413 | fn | resolveConfigSecretTargetByPath | pub |
| 469 | fn | discoverConfigSecretTargets | pub |
| 478 | fn | discoverConfigSecretTargetsByIds | pub |
| 511 | fn | discoverAuthProfileSecretTargets | pub |
| 528 | fn | listAuthProfileSecretTargetEntries | pub |
