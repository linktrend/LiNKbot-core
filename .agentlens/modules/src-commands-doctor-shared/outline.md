# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 21 large files in this module.

## src/commands/doctor/shared/channel-plugin-blockers.test.ts (1284 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | fn | createPackageChannelEnv | (private) |

## src/commands/doctor/shared/codex-route-warnings.test.ts (4719 lines)

_No symbols extracted._

## src/commands/doctor/shared/deprecation-compat.ts (518 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 2 | type | DoctorDeprecationCompatStatus | pub |
| 4 | type | DoctorDeprecationCompatOwner | pub |
| 39 | fn | deprecatedCompatRecord | (private) |
| 483 | type | DoctorDeprecationCompatCode | pub |
| 485 | type | KnownDoctorDeprecationCompatRecord | pub |
| 493 | fn | listDoctorDeprecationCompatRecords | pub |
| 498 | fn | listDeprecatedDoctorDeprecationCompatRecords | pub |
| 505 | fn | isDoctorDeprecationCompatCode | pub |
| 510 | fn | getDoctorDeprecationCompatRecord | pub |

## src/commands/doctor/shared/legacy-config-core-normalizers.ts (1376 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | fn | normalizeLegacyBrowserConfig | pub |
| 118 | fn | seedMissingDefaultAccountsFromSingleAccountBase | pub |
| 212 | type | ModelProviderEntry | (private) |
| 215 | type | ModelsConfigPatch | (private) |
| 216 | type | ModelDefinitionEntry | (private) |
| 217 | type | SelectedRuntimeRef | (private) |
| 226 | fn | resolveLegacyWholeAgentRuntimePolicy | (private) |
| 252 | fn | migratedRuntimeRequiresPolicy | (private) |
| 256 | fn | mergeModelEntry | (private) |
| 263 | fn | normalizeLegacyCodexCliAgentRuntimePolicy | (private) |
| 279 | fn | normalizeLegacyRuntimeAgentModelConfig | (private) |
| 376 | fn | runtimeNeedsExplicitModelPolicy | (private) |
| 380 | fn | modelEntryWithRuntimePolicy | (private) |
| 394 | fn | mergeModelEntryWithRuntimePolicy | (private) |
| 404 | fn | normalizeLegacyRuntimeAllowlistModels | (private) |
| 460 | fn | ensureSelectedModelRuntimePolicies | (private) |
| 483 | fn | selectedCanonicalModelRefsForRuntimePolicy | (private) |
| 490 | fn | addRef | (private) |
| 521 | fn | normalizeLegacyCodexCliRuntimePinsInModels | (private) |
| 548 | fn | normalizeLegacyRuntimeAgentContainer | (private) |
| 621 | fn | normalizeLegacyCodexCliProviderRuntimePins | (private) |
| 689 | fn | normalizeLegacyRuntimeModelRefs | pub |
| 750 | fn | normalizeLegacyOpenAICodexModelsAddMetadata | pub |
| 817 | fn | normalizeLegacyOpenAIModelProviderApi | pub |
| 889 | fn | normalizeLegacyNanoBananaSkill | pub |
| 1025 | fn | normalizeConfiguredPositiveInteger | (private) |
| 1032 | fn | resolveConfiguredOllamaModelNumCtxBudget | (private) |
| 1060 | fn | resolveConfiguredOllamaProviderNumCtxBudget | (private) |
| 1069 | fn | isNativeOllamaProviderConfig | (private) |
| 1077 | fn | isNativeOllamaModelConfig | (private) |
| 1095 | fn | hasConfiguredOllamaProviderNumCtx | (private) |
| 1100 | fn | applyLegacyOllamaProviderNumCtxParams | (private) |
| 1135 | fn | normalizeLegacyOllamaNativeNumCtxParams | pub |
| 1146 | type | ProviderConfigMap | (private) |
| 1248 | fn | normalizeLegacyMistralModelCost | (private) |
| 1278 | fn | normalizeLegacyMistralModelDefaults | pub |

## src/commands/doctor/shared/legacy-config-migrate.provider-shapes.test.ts (675 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | fn | migrateLegacyConfig | (private) |

## src/commands/doctor/shared/legacy-config-migrate.test.ts (4152 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | fn | repairBindingsForTest | (private) |
| 17 | fn | migrateLegacyConfigForTest | (private) |
| 34 | fn | expectMigrationChangesToIncludeFragments | (private) |

## src/commands/doctor/shared/legacy-config-migrations.channels.ts (580 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | fn | hasOwnKey | (private) |
| 14 | fn | cleanupEmptyRecord | (private) |
| 21 | fn | resolveCompatibleDefaultGroupEntry | (private) |
| 39 | fn | migrateChannelDefaultRequireMention | (private) |
| 71 | fn | migrateRoutingAllowFrom | (private) |
| 99 | fn | migrateRoutingGroupChatMessages | (private) |
| 105 | fn | migrateMessageGroupField | (private) |
| 134 | fn | migrateRoutingGroupChatRequireMention | (private) |
| 173 | fn | migrateRoutingGroupChat | (private) |
| 185 | fn | migrateTelegramRequireMention | (private) |
| 204 | fn | hasLegacyFeishuAccountBotName | (private) |
| 215 | fn | migrateFeishuAccountBotName | (private) |
| 246 | fn | hasLegacyThreadBindingTtl | (private) |
| 251 | fn | hasLegacyThreadBindingSpawnSplit | (private) |
| 260 | fn | hasLegacyThreadBindingTtlInAccounts | (private) |
| 270 | fn | hasLegacyThreadBindingSpawnSplitInAccounts | (private) |
| 280 | fn | migrateThreadBindingsTtlHoursForPath | (private) |
| 309 | fn | resolveMigratedSpawnSessions | (private) |
| 325 | fn | migrateThreadBindingsSpawnSessionsForPath | (private) |
| 366 | fn | hasLegacyThreadBindingTtlInAnyChannel | (private) |
| 383 | fn | hasLegacyThreadBindingSpawnSplitInAnyChannel | (private) |
| 471 | fn | migrateRetiredWebchatChannelConfig | (private) |

## src/commands/doctor/shared/legacy-config-migrations.runtime.agents.ts (1564 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | type | LegacyAgentRuntimeIntent | (private) |
| 114 | fn | hasLegacyMemorySearchFlatKeys | (private) |
| 124 | fn | hasAgentListLegacyMemorySearchFlatKeys | (private) |
| 302 | fn | sandboxScopeFromPerSession | (private) |
| 306 | fn | splitLegacyHeartbeat | (private) |
| 334 | fn | mergeLegacyIntoDefaults | (private) |
| 360 | fn | hasLegacySandboxPerSession | (private) |
| 365 | fn | hasLegacyAgentListSandboxPerSession | (private) |
| 372 | fn | hasLegacyAgentListEmbeddedHarness | (private) |
| 379 | fn | hasLegacyAgentListEmbeddedAgentKey | (private) |
| 386 | fn | hasAgentListRuntimePolicy | (private) |
| 393 | fn | hasAgentListSystemPromptOverride | (private) |
| 400 | fn | hasOwnTimeoutMs | (private) |
| 405 | fn | hasAgentListModelTimeout | (private) |
| 418 | fn | migrateLegacyEmbeddedAgentKey | (private) |
| 442 | fn | isLegacyMemorySearchAutoProvider | (private) |
| 446 | fn | hasAgentListLegacyMemorySearchAutoProvider | (private) |
| 455 | fn | hasMemorySearchStorePath | (private) |
| 459 | fn | hasAgentListMemorySearchStorePath | (private) |
| 466 | fn | migrateLegacyMemorySearchFlatKeys | (private) |
| 500 | fn | removeLegacyMemorySearchStorePath | (private) |
| 513 | fn | rewriteLegacyMemorySearchAutoProvider | (private) |
| 525 | fn | migrateLegacySandboxPerSession | (private) |
| 546 | fn | removeLegacyAgentRuntimePolicy | (private) |
| 562 | fn | resolveLegacyAgentRuntimeIntent | (private) |
| 577 | fn | selectedCanonicalModelRefsForRuntimePolicy | (private) |
| 579 | fn | addRef | (private) |
| 611 | fn | modelEntryWithRuntimePolicy | (private) |
| 632 | fn | preserveLegacyWholeAgentRuntimePolicy | (private) |
| 666 | fn | removeIgnoredAgentModelTimeout | (private) |
| 679 | fn | hasOwnRecordProperty | (private) |
| 684 | fn | hasSurfaceSilentReplyRewrite | (private) |
| 695 | fn | hasSurfaceSilentReplyDirect | (private) |
| 705 | fn | removeLegacySilentReplyConfig | (private) |
| 743 | fn | removeLegacySystemPromptOverride | (private) |
| 769 | fn | readToolPolicyGrantList | (private) |
| 773 | fn | readOwnToolPolicyGrantList | (private) |
| 783 | fn | resolveToolProfileForMigration | (private) |
| 790 | fn | collectProfileConfiguredSectionRepairGrants | (private) |
| 828 | fn | toolProfileConfiguredSectionsNeedExplicitRepair | (private) |
| 856 | fn | collectConfiguredToolSectionGrants | (private) |
| 866 | fn | collectEffectiveConfiguredToolSectionGrants | (private) |
| 879 | fn | toolProfileAllowRequiresFull | (private) |
| 888 | fn | resolveProfileBoundAllowGrants | (private) |
| 917 | fn | scopeToolProfileConfiguredSectionsNeedMigration | (private) |
| 926 | fn | byProviderToolProfilesNeedConfiguredSectionMigration | (private) |
| 980 | fn | addProfileConfiguredSectionGrants | (private) |
| 1028 | fn | addByProviderProfileConfiguredSectionGrants | (private) |
| 1103 | fn | addHandledProviderPolicyKey | (private) |
| 1107 | fn | buildInheritedProviderPolicyLookup | (private) |
| 1146 | fn | resolveInheritedProviderPolicy | (private) |
| 1163 | fn | listInheritedProviderPoliciesWithProfiles | (private) |
| 1191 | fn | addProfileConfiguredSectionGrantsWithConfiguredGrants | (private) |

## src/commands/doctor/shared/legacy-config-migrations.runtime.models.ts (2075 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | fn | resolveStaleContextWindowFix | (private) |
| 61 | fn | hasStaleContextWindowValue | (private) |
| 89 | fn | hasInvalidThinkingFormat | (private) |
| 118 | fn | normalizeLegacyVllmQwenThinkingFormat | (private) |
| 146 | fn | getLegacyVllmQwenThinkingFormat | (private) |
| 165 | fn | parseVllmAgentModelKey | (private) |
| 179 | fn | hasLegacyVllmQwenThinkingFormat | (private) |
| 196 | fn | hasLegacyVllmQwenThinkingProviderParams | (private) |
| 201 | fn | hasLegacyVllmQwenThinkingModelParams | (private) |
| 212 | fn | hasLegacyVllmQwenThinkingParams | (private) |
| 217 | fn | hasLegacyVllmQwenThinkingAgentParams | (private) |
| 225 | fn | findOrCreateVllmModelEntry | (private) |
| 254 | fn | listExistingVllmModelTargets | (private) |
| 267 | fn | collectVllmModelIdsFromSelection | (private) |
| 297 | fn | collectVllmModelIdsFromAgentModelMap | (private) |
| 308 | fn | createVllmModelTargets | (private) |
| 325 | fn | combineVllmModelTargets | (private) |
| 342 | fn | collectVllmModelIdsFromAgentList | (private) |
| 357 | fn | getOrCreateRecord | (private) |
| 369 | fn | findVllmProvider | (private) |
| 379 | fn | getOrCreateVllmProvider | (private) |
| 389 | fn | hasLegacyVllmQwenThinkingNormalizedProvider | (private) |
| 401 | fn | preserveMigratedVllmQwenReasoning | (private) |
| 407 | fn | removeLegacyVllmQwenThinkingParams | (private) |
| 413 | fn | applyLegacyVllmQwenThinkingFormat | (private) |
| 447 | fn | removeUntargetedLegacyVllmQwenThinkingFormat | (private) |
| 515 | fn | normalizeString | (private) |
| 519 | fn | preferredClaudeSeparator | (private) |
| 523 | fn | claudeTargetModelId | (private) |
| 533 | fn | shouldUpgradeClaudeProvider | (private) |
| 544 | fn | upgradeRetiredGroqModelId | (private) |
| 566 | fn | upgradeRetiredXaiModelId | (private) |
| 584 | fn | upgradeRetiredOpenAiModelId | (private) |
| 635 | fn | hasRetiredVersionPrefix | (private) |
| 646 | fn | hasAnyRetiredVersionPrefix | (private) |
| 650 | fn | upgradeOldClaudeToken | (private) |
| 760 | fn | upgradeOldClaudeModelPart | (private) |
| 773 | fn | upgradeRetiredModelRef | (private) |
| 836 | fn | pathKey | (private) |
| 840 | fn | isChannelModelOverridePath | (private) |
| 844 | fn | isModelPolicyAllowPath | (private) |
| 848 | fn | scanKnownModelRefs | (private) |
| 877 | fn | collectLegacyDefaultModelAllowRefs | (private) |
| 887 | fn | migrateExplicitDefaultModelAllowPolicy | (private) |
| 919 | fn | rewriteModelRefString | (private) |
| 928 | fn | setRecordEntry | (private) |
| 939 | fn | sanitizeModelRefMapEntry | (private) |
| 958 | fn | modelRefValuesAreEqual | (private) |
| 967 | fn | mergeModelRefMapEntries | (private) |
| 1008 | fn | rewriteModelRefMapKeys | (private) |
| 1053 | fn | rewriteKnownModelRefs | (private) |
| 1138 | fn | hasCanonicalOpenAIProvider | (private) |
| 1144 | fn | normalizeLegacyOpenAIResponsesApi | (private) |
| 1184 | fn | hasOwnDefinedProperty | (private) |
| 1188 | fn | collectModelMergeBlockers | (private) |
| 1207 | fn | getCanonicalOpenAIProviderEntry | (private) |
| 1215 | fn | getMergeableLegacyOpenAIModels | (private) |
| 1250 | fn | collectLegacyModelPolicyWildcardPaths | (private) |
| 1284 | fn | hasAutoFixableLegacyOpenAICodexProvider | (private) |
| 1333 | type | BlockedLegacyOpenAICodexProviderPlan | pub |
| 1339 | fn | collectBlockedLegacyOpenAICodexProviderPlan | pub |
| 1411 | fn | buildBlockedLegacyOpenAICodexProviderPlan | (private) |
| 1429 | fn | resolveMovedCodexModelRuntime | (private) |
| 1454 | fn | buildMergedLegacyOpenAIModel | (private) |
| 1512 | fn | collectNonEquivalentLegacyOpenAIModelCollisions | (private) |
| 1561 | fn | prepareLegacyCodexProviderForCanonicalMove | (private) |
| 1585 | fn | migrateLegacyOpenAICodexProvider | (private) |

## src/commands/doctor/shared/legacy-config-migrations.runtime.tts.ts (553 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | fn | isLegacyEdgeProviderId | (private) |
| 19 | fn | hasLegacyTtsProviderKeys | (private) |
| 34 | fn | hasLegacyPluginEntryTtsProviderKeys | (private) |
| 38 | fn | hasLegacyTtsEnabled | (private) |
| 42 | fn | hasLegacySpeakerSelectionKeys | (private) |
| 54 | fn | hasLegacyTtsSpeakerSelection | (private) |
| 70 | fn | hasLegacyTtsSpeakerSelectionInProviderMap | (private) |
| 81 | fn | hasLegacyTtsSpeakerSelectionInPersonas | (private) |
| 103 | type | LegacyTtsMatcher | (private) |
| 105 | fn | hasLegacyTtsInAgentLocations | (private) |
| 111 | fn | supportsChannelRootTtsMigration | (private) |
| 115 | fn | hasLegacyTtsInChannelLocations | (private) |
| 146 | fn | hasLegacyTtsInPluginLocations | (private) |
| 161 | fn | hasLegacyTtsSpeakerSelectionInAgentLocations | (private) |
| 165 | fn | hasLegacyTtsSpeakerSelectionInChannelLocations | (private) |
| 169 | fn | hasLegacyTtsSpeakerSelectionInPluginLocations | (private) |
| 173 | fn | hasLegacyTtsEnabledInAgentLocations | (private) |
| 177 | fn | hasLegacyTtsEnabledInChannelLocations | (private) |
| 181 | fn | hasLegacyTtsEnabledInPluginLocations | (private) |
| 185 | fn | getOrCreateTtsProviders | (private) |
| 191 | fn | mergeLegacyTtsProviderConfig | (private) |
| 209 | fn | mergeLegacyTtsProviderAliasConfig | (private) |
| 227 | fn | migrateLegacyTtsConfig | (private) |
| 262 | fn | migrateLegacyTtsEnabled | (private) |
| 280 | fn | migrateLegacySpeakerSelectionConfig | (private) |
| 318 | fn | migrateLegacyTtsSpeakerSelection | (private) |
| 362 | fn | migrateLegacySpeakerSelectionProviderMap | (private) |
| 383 | fn | visitKnownTtsConfigLocations | (private) |

## src/commands/doctor/shared/missing-configured-plugin-install.test.ts (5046 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | fn | expectedNpmInstallSpec | (private) |
| 25 | fn | expectedClawHubInstallSpec | (private) |
| 32 | fn | currentOpenClawReleaseBase | (private) |
| 36 | fn | expectRecordFields | (private) |
| 47 | fn | mockCallArg | (private) |
| 125 | fn | makeTempDir | (private) |
| 131 | fn | writeLegacyNpmDeclarationStub | (private) |

## src/commands/doctor/shared/missing-configured-plugin-install.ts (2202 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 90 | type | DownloadableInstallCandidate | (private) |
| 100 | type | BundledPluginPackageDescriptor | (private) |
| 116 | fn | shouldFallbackClawHubToNpm | (private) |
| 131 | fn | appendClawHubRiskAcknowledgementGuidance | (private) |
| 143 | fn | shellQuotePosixArg | (private) |
| 150 | fn | isActionableClawHubSkippedOutcome | (private) |
| 154 | fn | isClawHubReviewNotice | (private) |
| 162 | fn | recordClawHubInstallSpec | (private) |
| 175 | fn | resolveCandidateClawHubSpec | (private) |
| 183 | fn | addConfiguredPluginId | (private) |
| 193 | fn | addConfiguredAgentRuntimePluginIds | (private) |
| 199 | fn | addConfiguredMemoryEmbeddingProviderPluginIds | (private) |
| 217 | fn | addConfiguredSpeechProviderPluginIds | (private) |
| 226 | fn | addConfiguredWebFetchProviderPluginIds | (private) |
| 243 | fn | addEnvWebFetchProviderPluginIds | (private) |
| 259 | fn | collectConfiguredPluginIds | (private) |
| 296 | fn | collectBlockedPluginIds | (private) |
| 315 | fn | collectConfiguredChannelIds | (private) |
| 337 | fn | collectEffectiveConfiguredChannelOwnerPluginIds | (private) |
| 369 | fn | collectDownloadableInstallCandidates | (private) |
| 523 | fn | addLegacyNpmDeclarationInstallCandidate | (private) |
| 549 | fn | collectLegacyNpmDeclarationInstallCandidates | (private) |
| 598 | fn | collectUpdateDeferredPluginIds | (private) |
| 621 | fn | collectConfiguredPluginIdsWithMissingChannelConfigDescriptors | (private) |
| 644 | fn | collectInstalledPluginIdsWithRepairablePackageDiagnostics | (private) |
| 665 | fn | resolveInstalledRuntimePackageVersion | (private) |
| 681 | fn | installedRuntimePackageVersionIsStale | (private) |
| 702 | fn | betaCompanionMatchesCurrentStableVersion | (private) |
| 711 | fn | collectInstalledPluginIdsWithStaleVersionBoundRuntimePackages | (private) |
| 751 | fn | isConfiguredPluginRepairTarget | (private) |
| 771 | fn | collectOfficialReplacementInstallCandidates | (private) |
| 813 | fn | forceNpmInstallRecordRepair | (private) |
| 823 | fn | isInstalledRecordMissingOnDisk | (private) |
| 835 | fn | pathsEqual | (private) |
| 839 | fn | resolveNpmPackageInstallPath | (private) |
| 846 | fn | resolveLegacyNpmPackageInstallPath | (private) |
| 853 | fn | collectCandidateOfficialPackageNames | (private) |
| 870 | fn | collectInstalledRecordPackageNames | (private) |
| 894 | fn | isTrustedOfficialInstallRecordForCandidate | (private) |
| 920 | fn | resolveSafeBrokenOfficialInstallRemovalPath | (private) |
| 962 | fn | recordMatchesBundledPackage | (private) |
| 983 | fn | recordNpmPackageName | (private) |
| 988 | fn | recordClawHubPackageName | (private) |
| 996 | type | InstallCandidateRepairReason | (private) |
| 998 | type | ConfiguredPluginInstallHealthIssue | (private) |
| 1033 | fn | formatInstalledConfiguredPluginChange | (private) |
| 1043 | fn | installCandidate | (private) |
| 1258 | fn | isPluginAlreadyExistsError | (private) |
| 1262 | fn | resolveExistingCandidateNpmPackagePath | (private) |
| 1286 | fn | resolveExistingCandidateClawHubPackagePath | (private) |
| 1298 | fn | readNpmPackageVersion | (private) |
| 1311 | fn | adoptExistingNpmPackage | (private) |
| 1359 | fn | resolveCandidateInstallSpec | (private) |
| 1389 | fn | resolveRecordInstallPath | (private) |
| 1397 | fn | missingRecordedPluginIssueKind | (private) |
| 1420 | fn | detectConfiguredPluginInstallHealthIssues | pub |
| 1666 | fn | configuredPluginInstallIssueToHealthFinding | pub |
| 1728 | fn | configuredPluginInstallIssueToRepairEffect | pub |
| 1772 | fn | assertNeverConfiguredPluginInstallIssue | (private) |
| 1778 | type | RepairMissingPluginInstallsResult | (private) |
| 1804 | fn | repairMissingConfiguredPluginInstalls | pub |
| 1831 | fn | repairMissingPluginInstallsForIds | pub |
| 1863 | fn | repairMissingPluginInstalls | (private) |

## src/commands/doctor/shared/plugin-tool-allowlist-warnings.ts (606 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | ToolAllowlistSource | (private) |
| 27 | type | ActiveSandboxToolPolicy | (private) |
| 34 | type | PickedSandboxToolPolicyField | (private) |
| 40 | type | ToolPolicyConfig | (private) |
| 48 | fn | normalizePluginIdMaybe | (private) |
| 52 | fn | collectListSource | (private) |
| 65 | fn | collectToolPolicySources | (private) |
| 85 | fn | collectToolAllowlistSources | (private) |
| 100 | fn | collectSortedSourceLabels | (private) |
| 104 | fn | formatSortedSourceLabels | (private) |
| 111 | fn | formatSourceLabels | (private) |
| 115 | fn | formatSourceLabelSubject | (private) |
| 123 | fn | collectToolOwners | (private) |
| 138 | fn | collectKnownPluginIds | (private) |
| 142 | fn | collectConfiguredMcpServerNames | (private) |
| 154 | fn | asToolPolicyConfig | (private) |
| 158 | fn | isSandboxModeActive | (private) |
| 162 | fn | getList | (private) |
| 176 | fn | pickSandboxToolPolicyField | (private) |
| 203 | fn | buildEffectiveSandboxToolPolicy | (private) |
| 256 | fn | collectActiveSandboxToolPolicies | (private) |
| 263 | fn | addPolicy | (private) |
| 270 | fn | addGlobalPolicy | (private) |
| 318 | fn | buildMcpProbeToolNames | (private) |
| 325 | fn | buildMcpToolNamePrefixes | (private) |
| 334 | fn | entriesMatchMcpTool | (private) |
| 350 | fn | prefixOrPatternMatches | (private) |
| 358 | fn | entriesMatchAnyMcpTool | (private) |
| 365 | fn | entriesMatchEveryMcpTool | (private) |
| 372 | fn | sandboxPolicyAllowsAllMcpServers | (private) |
| 384 | fn | toolPolicyAllowsAnyMcpServer | (private) |
| 393 | fn | toolPolicyDeniesAllMcpServers | (private) |
| 398 | fn | sandboxPolicyIntentionallyDeniesAllMcpServers | (private) |
| 405 | fn | nonSandboxToolPolicyBlocksMcp | (private) |
| 417 | fn | profileToolPolicyBlocksMcp | (private) |
| 426 | fn | nonSandboxToolPoliciesBlockMcp | (private) |
| 466 | fn | formatMcpServerSummary | (private) |
| 476 | fn | collectSandboxMcpAllowlistWarnings | (private) |
| 505 | fn | formatPluginList | (private) |
| 512 | fn | addIssue | (private) |
| 519 | fn | collectPluginToolAllowlistWarnings | pub |

## src/commands/doctor/shared/preview-warnings.test.ts (1663 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | fn | collectDoctorPreviewWarnings | (private) |
| 16 | fn | collectProfileConfiguredToolSectionWarningsThroughDoctor | (private) |
| 26 | fn | collectVisibleReplyToolPolicyWarningsThroughDoctor | (private) |
| 36 | fn | collectChannelBoundMessageToolPolicyWarningsThroughDoctor | (private) |
| 46 | type | TestManifestRecord | (private) |
| 325 | fn | useRealCodexRouteWarningsOnce | (private) |
| 339 | fn | manifest | (private) |
| 346 | fn | channelManifest | (private) |
| 353 | fn | externalChannelManifest | (private) |
| 360 | fn | stalePluginConfig | (private) |
| 371 | fn | expectSingleWarningContaining | (private) |
| 378 | fn | expectWarningsContaining | (private) |

## src/commands/doctor/shared/preview-warnings.ts (926 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | type | ChannelDoctorModule | (private) |
| 33 | fn | loadChannelDoctorModule | (private) |
| 37 | fn | listAgentRecords | (private) |
| 41 | fn | hasChannels | (private) |
| 45 | fn | hasPlugins | (private) |
| 49 | fn | hasPluginLoadPaths | (private) |
| 58 | fn | hasSubagentAllowlistConfig | (private) |
| 68 | fn | hasToolsBySenderKey | (private) |
| 83 | fn | hasConfiguredSafeBins | (private) |
| 100 | type | VisibleReplyPolicyProvenance | (private) |
| 101 | fn | resolveMessageToolAvailability | (private) |
| 150 | fn | resolveSourceReplyMessageToolAvailability | (private) |
| 162 | fn | sourceReplyRuntimeMayAllowMessageTool | (private) |
| 173 | fn | collectMessageToolUnavailableTargets | (private) |
| 203 | fn | resolveGroupVisibleReplyProvenance | (private) |
| 231 | fn | formatTargets | (private) |
| 239 | fn | collectVisibleReplyToolPolicyWarnings | (private) |
| 269 | fn | formatChannelList | (private) |
| 280 | fn | collectChannelBoundMessageToolPolicyWarnings | (private) |
| 313 | type | ConfiguredToolSectionGrantEntry | (private) |
| 318 | fn | collectConfiguredToolSectionGrantEntries | (private) |
| 334 | fn | formatQuotedList | (private) |
| 338 | fn | hasNonEmptyStringList | (private) |
| 342 | fn | readPreviewStringList | (private) |
| 348 | fn | collectUncoveredConfiguredToolSectionGrantEntries | (private) |
| 365 | fn | formatProfileConfiguredSectionGrantAdvice | (private) |
| 380 | fn | collectProfileConfiguredToolSectionScopeWarnings | (private) |
| 436 | fn | collectByProviderConfiguredToolSectionWarnings | (private) |
| 493 | fn | resolveInheritedProviderPolicyForPreview | (private) |
| 512 | fn | resolveProviderPolicyEntryForPreview | (private) |
| 521 | fn | collectInheritedByProviderConfiguredToolSectionWarnings | (private) |
| 606 | fn | collectProfileConfiguredToolSectionWarnings | (private) |
| 673 | type | DoctorPreviewNotes | (private) |
| 680 | fn | resolveDoctorChannelPreviewConfig | pub |
| 706 | fn | collectDoctorPreviewNotes | pub |

## src/commands/doctor/shared/release-configured-plugin-installs.test.ts (859 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | type | AutoEnableDetectionCall | (private) |
| 23 | type | MissingPluginInstallRepairCall | (private) |
| 29 | fn | readOnlyAutoEnableDetectionCall | (private) |
| 41 | fn | readOnlyMissingPluginInstallRepairCall | (private) |
| 53 | fn | shouldRunConfiguredPluginInstallReleaseStepThroughDoctor | (private) |
| 65 | fn | collectReleaseConfiguredPluginIdsThroughDoctor | (private) |

## src/commands/doctor/shared/stale-agent-model-ref-repair.ts (577 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | type | StaleAgentModelRefRepair | (private) |
| 21 | type | RepairOptions | (private) |
| 31 | fn | isRecord | (private) |
| 35 | fn | providerFromModelRef | (private) |
| 45 | fn | collectPluginProviderIds | (private) |
| 88 | fn | collectPersistedProviderIds | (private) |
| 138 | fn | repairModelMap | (private) |
| 178 | fn | filterFallbacks | (private) |
| 205 | fn | firstExplicitModelRef | (private) |
| 224 | fn | modelPrimaryRef | (private) |
| 231 | fn | repairStaleAgentModelRefs | pub |
| 359 | fn | makeStaleChecker | (private) |

## src/commands/doctor/shared/stale-auth-order.test.ts (1493 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 65 | fn | tokenStore | (private) |
| 84 | fn | repair | (private) |

## src/commands/doctor/shared/stale-auth-order.ts (624 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | type | StaleConfiguredAuthOrder | (private) |
| 47 | type | LoadedAuthStores | (private) |
| 60 | fn | isProfileIdList | (private) |
| 64 | fn | readValidConfiguredAuthOrder | (private) |
| 79 | fn | hasValidConfiguredAuthProfiles | (private) |
| 96 | fn | hasNonemptyConfiguredAuthOrder | (private) |
| 101 | fn | inspectAuthPath | (private) |
| 149 | fn | inspectUnmigratedAuthStoreSources | (private) |
| 163 | fn | inspectAuthDatabaseFiles | (private) |
| 182 | fn | loadCompletePersistedStore | (private) |
| 241 | fn | listRetainedStateAgentDirs | (private) |
| 284 | fn | loadConfiguredAgentAuthStores | (private) |
| 297 | fn | addExpectedAgentDir | (private) |
| 483 | fn | removeAuthOrderKeys | (private) |
| 499 | fn | scanStaleConfiguredAuthOrders | (private) |
| 561 | fn | repairStaleConfiguredAuthOrders | (private) |
| 581 | fn | maybeRepairStaleConfiguredAuthOrders | pub |
| 599 | fn | collectStaleConfiguredAuthOrderWarnings | pub |

## src/commands/doctor/shared/stale-plugin-config.test.ts (565 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | fn | manifest | (private) |

## src/commands/doctor/shared/stale-plugin-config.ts (523 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 22 | type | StalePluginConfigHit | (private) |
| 29 | type | StalePluginRegistryState | (private) |
| 37 | fn | collectPluginRegistryState | (private) |
| 93 | fn | isStalePluginAutoRepairBlocked | pub |
| 104 | fn | scanStalePluginConfig | pub |
| 115 | fn | scanStalePluginConfigWithState | (private) |
| 210 | fn | collectDanglingChannelIds | (private) |
| 240 | fn | collectDependentChannelConfigHits | (private) |
| 294 | fn | isPolicySurfaceHit | (private) |
| 297 | fn | formatStalePluginHitWarning | (private) |
| 314 | fn | collectStalePluginConfigWarnings | pub |
| 348 | fn | maybeRepairStalePluginConfig | pub |
| 469 | fn | removeDanglingChannelReferences | (private) |
