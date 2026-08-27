# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 15 large files in this module.

## src/channels/plugins/account-helpers.test.ts (521 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | fn | cfg | (private) |
| 39 | fn | expectResolvedAccountIdsCase | (private) |
| 47 | fn | expectResolvedDefaultAccountCase | (private) |
| 358 | type | MergeAccountConfigShape | (private) |
| 369 | type | MergeAccountInput | (private) |
| 439 | type | MergedChannelConfig | (private) |
| 444 | type | ResolveMergedInput | (private) |

## src/channels/plugins/bundled.shape-guard.test.ts (1374 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | BundledEntrySource | (private) |
| 23 | fn | restoreBundledPluginsDir | (private) |
| 31 | fn | alphaChannelMetadata | (private) |
| 53 | fn | resolveAlphaDistExtensionEntry | (private) |
| 67 | fn | mockAlphaDistExtensionRuntime | (private) |
| 74 | fn | collectBundledChannelEntrypointOffenders | (private) |
| 97 | fn | listSourceBundledPluginRoots | (private) |
| 115 | fn | listExternalSourceBundledPluginRoots | (private) |
| 122 | fn | listGitSourceBundledPluginRoots | (private) |
| 139 | fn | listFindSourceBundledPluginRoots | (private) |
| 169 | fn | packageMarkerPathsToRoots | (private) |
| 607 | fn | writeBundledRoot | (private) |

## src/channels/plugins/bundled.ts (960 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | type | PluginRuntime | (private) |
| 38 | type | BundledChannelEntryRuntimeContract | (private) |
| 57 | type | BundledChannelSetupEntryRuntimeContract | (private) |
| 75 | type | BundledChannelPackageSetupFeature | (private) |
| 80 | type | GeneratedBundledChannelEntry | (private) |
| 85 | type | BundledChannelLoadContext | (private) |
| 111 | fn | isSourceModulePath | (private) |
| 115 | fn | resolveCanonicalPathOrAbsolute | (private) |
| 123 | fn | isPathInsideCanonicalRoot | (private) |
| 130 | fn | isPackageLocalBundledDistModulePath | (private) |
| 144 | fn | resolveChannelPluginModuleEntry | (private) |
| 167 | fn | resolveChannelSetupModuleEntry | (private) |
| 184 | fn | hasSetupEntryFeature | (private) |
| 191 | fn | resolveBundledChannelBoundaryRoot | (private) |
| 256 | fn | resolveBundledChannelScanDir | (private) |
| 260 | fn | resolveGeneratedBundledChannelModulePath | (private) |
| 312 | fn | loadGeneratedBundledChannelModule | (private) |
| 361 | fn | findMissingModuleCodeInChain | (private) |
| 378 | fn | describeBundledChannelLoadError | (private) |
| 386 | fn | loadGeneratedBundledChannelEntry | (private) |
| 415 | fn | loadGeneratedBundledChannelSetupEntry | (private) |
| 446 | fn | createBundledChannelLoadContext | (private) |
| 464 | fn | resolveActiveBundledChannelLoadScope | (private) |
| 493 | fn | listBundledChannelMetadata | (private) |
| 505 | fn | listBundledChannelPluginIdsForRoot | (private) |
| 513 | fn | shouldIncludeBundledChannelSetupFeatureForConfig | (private) |
| 553 | fn | listBundledChannelPluginIdsForSetupFeature | (private) |
| 582 | fn | listBundledChannelPluginIds | pub |
| 586 | fn | hasBundledChannelPackageSetupFeature | pub |
| 598 | fn | resolveBundledChannelMetadata | (private) |
| 625 | fn | getLazyGeneratedBundledChannelEntryForRoot | (private) |
| 661 | fn | rememberBundledChannelSetupEntry | (private) |
| 677 | fn | getLazyGeneratedBundledChannelSetupEntryForRoot | (private) |
| 706 | fn | getBundledChannelPluginForRoot | (private) |
| 749 | fn | getBundledChannelSecretsForRoot | (private) |
| 775 | fn | getBundledChannelAccountInspectorForRoot | (private) |
| 800 | fn | getBundledChannelSetupPluginForRoot | (private) |
| 830 | fn | getBundledChannelSetupSecretsForRoot | (private) |
| 856 | fn | listBundledChannelPlugins | pub |
| 864 | fn | listBundledChannelSetupPlugins | pub |
| 872 | fn | listBundledChannelLegacySessionSurfaces | pub |
| 894 | fn | listBundledChannelLegacyStateMigrationDetectors | pub |
| 918 | fn | getBundledChannelAccountInspector | pub |
| 925 | fn | getBundledChannelPlugin | pub |
| 930 | fn | getBundledChannelSecrets | pub |
| 935 | fn | getBundledChannelSetupPlugin | pub |
| 943 | fn | getBundledChannelSetupSecrets | pub |
| 951 | fn | setBundledChannelRuntime | pub |

## src/channels/plugins/catalog.ts (543 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | type | ChannelUiMetaEntry | pub |
| 38 | type | ChannelUiCatalog | pub |
| 47 | type | ChannelPluginCatalogInstall | pub |
| 50 | type | ChannelPluginCatalogEntry | pub |
| 60 | type | CatalogOptions | (private) |
| 80 | fn | shouldExcludeCatalogOrigin | (private) |
| 87 | fn | shouldExcludeCatalogPlugin | (private) |
| 108 | type | ExternalCatalogEntry | (private) |
| 119 | type | ManifestKey | (private) |
| 121 | fn | parseCatalogEntries | (private) |
| 135 | fn | splitEnvPaths | (private) |
| 145 | fn | resolveDefaultCatalogPaths | (private) |
| 154 | fn | resolveExternalCatalogPaths | (private) |
| 168 | fn | loadExternalCatalogEntries | (private) |
| 175 | fn | readCatalogEntriesFromPath | (private) |
| 180 | fn | loadCatalogEntriesFromPaths | (private) |
| 203 | fn | loadOfficialCatalogEntriesFromPaths | (private) |
| 225 | fn | resolveOfficialCatalogPaths | (private) |
| 250 | fn | loadOfficialCatalogEntries | (private) |
| 262 | fn | toChannelMeta | (private) |
| 291 | fn | resolveInstallInfo | (private) |
| 361 | fn | buildCatalogEntryFromManifest | (private) |
| 409 | fn | buildExternalCatalogEntry | (private) |
| 426 | fn | buildChannelUiCatalog | pub |
| 463 | fn | listRawChannelPluginCatalogEntries | pub |
| 534 | fn | getChannelPluginCatalogEntry | pub |

## src/channels/plugins/group-policy-warnings.test.ts (559 lines)

_No symbols extracted._

## src/channels/plugins/message-action-dispatch.ts (574 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | type | ServerOwnedConversationReadOrigin | (private) |
| 35 | type | ChannelMessageActionDispatchContext | (private) |
| 39 | type | ChannelMessageActionReadPolicy | (private) |
| 117 | fn | resolveChannelMessageActionReadPolicy | (private) |
| 126 | fn | resolveServerOwnedConversationReadOrigin | (private) |
| 132 | type | MessageActionReadEnforcement | (private) |
| 139 | fn | resolveMessageActionReadEnforcement | (private) |
| 155 | type | HostConversationTargetKind | (private) |
| 164 | type | HostConversationTarget | (private) |
| 179 | fn | stripHostProviderPrefix | (private) |
| 195 | fn | normalizeHostConversationTarget | (private) |
| 237 | fn | targetKey | (private) |
| 241 | fn | addHostConversationTarget | (private) |
| 250 | fn | hasConflictingTargetKinds | (private) |
| 263 | fn | currentTargetsMatchRequested | (private) |
| 300 | fn | hasMatchingCurrentAccountContext | (private) |
| 315 | fn | hasMatchingCurrentProviderContext | (private) |
| 320 | fn | hasCurrentConversationTarget | (private) |
| 326 | fn | hasTargetInput | (private) |
| 333 | fn | isExactCurrentConversation | (private) |
| 432 | fn | matchesCurrentTarget | (private) |
| 458 | fn | canonicalizeExternalExactCurrentTarget | (private) |
| 471 | fn | enforceMessageActionConversationReadGate | (private) |
| 508 | fn | requiresTrustedRequesterSender | (private) |
| 523 | fn | dispatchChannelMessageAction | pub |

## src/channels/plugins/message-actions.security.test.ts (1264 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 89 | fn | setReadPlugin | (private) |

## src/channels/plugins/read-only.test.ts (1468 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | fn | pluginIds | (private) |
| 37 | fn | modulePathEndsWith | (private) |
| 42 | fn | expectRecordFields | (private) |
| 68 | type | LoaderConfig | (private) |
| 73 | type | LoaderParams | (private) |
| 79 | fn | readJson | (private) |
| 83 | fn | isRecord | (private) |
| 87 | fn | listCandidatePluginDirs | (private) |
| 106 | fn | loadOpenClawPlugins | (private) |
| 176 | fn | writeExternalSetupChannelPlugin | (private) |
| 356 | fn | writeBundledSetupChannelPlugin | (private) |
| 465 | fn | expectExternalChatSetupOnlyPluginLoaded | (private) |
| 625 | fn | createRegistryPlugin | (private) |

## src/channels/plugins/read-only.ts (1043 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 66 | type | PluginLoaderModule | (private) |
| 89 | fn | listBuiltPluginLoaderModuleCandidateUrls | (private) |
| 109 | fn | listPluginLoaderModuleCandidateUrls | pub |
| 117 | fn | loadPluginLoaderModule | (private) |
| 141 | type | ReadOnlyChannelPluginOptions | (private) |
| 150 | type | ReadOnlyChannelPluginResolution | (private) |
| 156 | type | ManifestChannelConfigRecord | (private) |
| 157 | type | ReadOnlyChannelPluginLoadFailure | (private) |
| 173 | fn | cloneReadOnlyChannelPluginResolution | (private) |
| 184 | fn | rememberReadOnlyChannelPluginResolution | (private) |
| 203 | fn | resolveReadOnlyChannelPluginResolutionCacheKey | (private) |
| 232 | fn | resolveReadOnlyChannelPluginObjectId | (private) |
| 243 | fn | fingerprintLoadedChannelPlugins | (private) |
| 249 | fn | hashEnvironment | (private) |
| 260 | fn | addChannelPlugins | (private) |
| 282 | fn | rebindChannelScopedString | (private) |
| 297 | fn | normalizeManifestText | (private) |
| 301 | fn | rebindChannelConfig | (private) |
| 318 | fn | restoreReboundChannelConfig | (private) |
| 344 | fn | getChannelConfigRecord | (private) |
| 358 | fn | normalizeManifestAccountConfigKey | (private) |
| 362 | fn | listManifestChannelAccountIds | (private) |
| 376 | fn | resolveManifestChannelDefaultAccountId | (private) |
| 387 | fn | resolveManifestChannelAccountConfig | (private) |
| 408 | fn | buildManifestChannelPlugin | (private) |
| 500 | fn | canUseManifestChannelPlugin | (private) |
| 512 | fn | loadSetupChannelPluginFromManifestRecord | (private) |
| 567 | fn | collectChannelPluginLoadFailuresFromDiagnostics | (private) |
| 601 | fn | rebindChannelPluginConfig | (private) |
| 606 | fn | rebind | (private) |
| 670 | fn | rebindChannelPluginSecrets | (private) |
| 707 | fn | cloneChannelPluginForChannelId | (private) |
| 724 | fn | addSetupChannelPlugins | (private) |
| 778 | fn | addManifestChannelPlugins | (private) |
| 809 | fn | resolveReadOnlyWorkspaceDir | (private) |
| 816 | fn | listExternalChannelManifestRecords | (private) |
| 822 | fn | listBundledChannelManifestRecords | (private) |
| 828 | fn | listPluginIdsForChannels | (private) |
| 839 | fn | resolveExternalReadOnlyChannelPluginIds | (private) |
| 874 | fn | listReadOnlyChannelPluginsForConfig | pub |
| 881 | fn | resolveReadOnlyChannelPluginsForConfig | pub |

## src/channels/plugins/setup-helpers.ts (549 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | type | ChannelSectionBase | (private) |
| 39 | fn | channelHasAccounts | (private) |
| 45 | fn | shouldStoreNameInAccounts | (private) |
| 60 | fn | applyAccountNameToChannelSection | pub |
| 120 | fn | migrateBaseNameToDefaultAccount | pub |
| 155 | fn | prepareScopedSetupConfig | pub |
| 181 | fn | applySetupAccountConfigPatch | pub |
| 196 | fn | createPatchedAccountSetupAdapter | pub |
| 240 | fn | createZodSetupInputValidator | pub |
| 264 | type | SetupInputPresenceRequirement | (private) |
| 269 | fn | hasPresentSetupValue | (private) |
| 276 | fn | createSetupInputPresenceValidator | pub |
| 310 | fn | createEnvPatchedAccountSetupAdapter | pub |
| 340 | fn | patchScopedAccountConfig | pub |
| 406 | type | ChannelSectionRecord | (private) |
| 410 | fn | cloneIfObject | (private) |
| 417 | fn | moveSingleAccountKeysIntoAccount | (private) |
| 451 | fn | resolveExistingAccountKey | (private) |
| 463 | fn | resolveSingleAccountKeysToMove | (private) |
| 478 | fn | resolveSingleAccountPromotionTarget | (private) |
| 500 | fn | moveSingleAccountChannelSectionToDefaultAccount | pub |

## src/channels/plugins/setup-wizard-helpers.test.ts (1977 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 86 | fn | collectNamedAccountIds | (private) |
| 96 | fn | resolveMatrixSingleAccountPromotionTarget | (private) |
| 149 | fn | createPrompter | (private) |
| 159 | fn | parseCsvInputs | (private) |
| 170 | type | AllowFromResolver | (private) |
| 174 | fn | asAllowFromResolver | (private) |
| 178 | fn | runPromptResolvedAllowFromWithToken | (private) |
| 196 | fn | createSecretInputPrompter | (private) |
| 220 | fn | runPromptSingleChannelSecretInput | (private) |
| 279 | fn | runPromptLegacyAllowFrom | (private) |

## src/channels/plugins/setup-wizard-helpers.ts (1592 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | fn | asRecord | (private) |
| 42 | fn | asAllowFromList | (private) |
| 83 | fn | addWildcardAllowFrom | pub |
| 91 | fn | mergeAllowFromEntries | pub |
| 99 | fn | splitSetupEntries | pub |
| 103 | type | ParsedSetupEntry | (private) |
| 105 | fn | parseSetupEntriesWithParser | pub |
| 121 | fn | parseSetupEntriesAllowingWildcard | pub |
| 133 | fn | parseMentionOrPrefixedId | pub |
| 158 | fn | normalizeAllowFromEntries | pub |
| 176 | fn | createStandardChannelSetupStatus | pub |
| 222 | fn | resolveSetupAccountId | pub |
| 229 | fn | resolveAccountIdForConfigure | pub |
| 253 | fn | setAccountAllowFromForChannel | pub |
| 269 | fn | patchTopLevelChannelConfigSection | pub |
| 295 | fn | patchNestedChannelConfigSection | pub |
| 328 | fn | setTopLevelChannelAllowFrom | pub |
| 342 | fn | setNestedChannelAllowFrom | pub |
| 358 | fn | setTopLevelChannelDmPolicyWithAllowFrom | pub |
| 382 | fn | setNestedChannelDmPolicyWithAllowFrom | pub |
| 412 | fn | setTopLevelChannelGroupPolicy | pub |
| 426 | fn | createTopLevelChannelDmPolicy | pub |
| 450 | fn | createNestedChannelDmPolicy | pub |
| 478 | fn | createTopLevelChannelDmPolicySetter | pub |
| 491 | fn | createNestedChannelDmPolicySetter | pub |
| 508 | fn | createTopLevelChannelAllowFromSetter | pub |
| 521 | fn | createNestedChannelAllowFromSetter | pub |
| 536 | fn | createTopLevelChannelGroupPolicySetter | pub |
| 549 | fn | setChannelDmPolicyWithAllowFrom | pub |
| 573 | fn | setCompatChannelDmPolicyWithAllowFrom | (private) |
| 602 | fn | setCompatChannelAllowFrom | (private) |
| 614 | fn | setAccountGroupPolicyForChannel | pub |
| 628 | fn | setAccountDmAllowFromForChannel | pub |
| 642 | fn | createCompatChannelDmPolicy | (private) |
| 718 | fn | resolveGroupAllowlistWithLookupNotes | pub |
| 743 | fn | createAccountScopedAllowFromSection | pub |
| 773 | fn | createAccountScopedGroupAccessSection | pub |
| 837 | type | AccountScopedChannel | (private) |
| 838 | type | CompatDmChannel | (private) |
| 840 | fn | patchCompatDmChannelConfig | (private) |
| 864 | fn | setSetupChannelEnabled | pub |
| 882 | fn | patchConfigForScopedAccount | (private) |
| 913 | fn | patchChannelConfigForAccount | pub |
| 925 | fn | buildSingleChannelSecretPromptState | pub |
| 942 | fn | promptSingleChannelToken | (private) |
| 986 | type | SingleChannelSecretInputPromptResult | (private) |
| 991 | fn | runSingleChannelSecretStep | pub |
| 1067 | fn | promptSingleChannelSecretInput | pub |
| 1144 | type | ParsedAllowFromResult | (private) |
| 1146 | fn | promptParsedAllowFromForAccount | pub |
| 1200 | fn | createPromptParsedAllowFromForAccount | pub |
| 1235 | fn | promptParsedAllowFromForScopedChannel | pub |
| 1272 | fn | createTopLevelChannelParsedAllowFromPrompt | pub |
| 1318 | fn | createNestedChannelParsedAllowFromPrompt | pub |
| 1369 | fn | resolveParsedAllowFromEntries | pub |
| 1383 | fn | createAllowFromSection | pub |
| 1411 | fn | noteChannelLookupSummary | pub |
| 1432 | fn | noteChannelLookupFailure | pub |
| 1443 | type | AllowFromResolution | (private) |
| 1449 | fn | resolveEntriesWithOptionalToken | pub |
| 1465 | fn | promptResolvedAllowFrom | pub |
| 1517 | fn | promptLegacyChannelAllowFrom | pub |
| 1551 | fn | promptLegacyChannelAllowFromForAccount | pub |

## src/channels/plugins/setup-wizard.ts (720 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | type | ChannelSetupWizardPlugin | (private) |
| 36 | type | ChannelSectionWithAccounts | (private) |
| 41 | fn | getChannelSection | (private) |
| 47 | fn | createWizardAccountScope | (private) |
| 99 | fn | buildStatus | (private) |
| 136 | fn | applySetupInput | (private) |
| 178 | fn | collectCredentialValues | (private) |
| 200 | fn | applyWizardTextInputValue | (private) |
| 223 | fn | buildChannelSetupWizardAdapterFromSetupWizard | pub |
| 346 | fn | runCredentialSteps | (private) |
| 447 | fn | runTextInputSteps | (private) |

## src/channels/plugins/types.adapters.ts (881 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 47 | type | ConfiguredBindingRule | (private) |
| 49 | type | ChannelActionAvailabilityState | (private) |
| 54 | type | ChannelApprovalForwardTarget | (private) |
| 62 | type | ChannelCapabilitiesDisplayTone | (private) |
| 64 | type | ChannelCapabilitiesDisplayLine | pub |
| 69 | type | ChannelCapabilitiesDiagnostics | pub |
| 76 | type | ChannelSetupAdapter | pub |
| 163 | type | ChannelSecretsAdapter | pub |
| 177 | type | ChannelGroupAdapter | pub |
| 317 | type | ChannelLogoutResult | (private) |
| 323 | type | ChannelLoginWithQrStartResult | (private) |
| 329 | type | ChannelLoginWithQrWaitResult | (private) |
| 362 | type | ChannelAuthAdapter | pub |
| 372 | type | ChannelHeartbeatAdapter | pub |
| 394 | type | ChannelDirectorySelfParams | (private) |
| 400 | type | ChannelDirectoryListParams | (private) |
| 408 | type | ChannelDirectoryListGroupMembersParams | (private) |
| 416 | type | ChannelDirectoryAdapter | pub |
| 427 | type | ChannelResolveKind | pub |
| 429 | type | ChannelResolveResult | pub |
| 437 | type | ChannelResolverAdapter | pub |
| 447 | type | ChannelElevatedAdapter | pub |
| 454 | type | ChannelCommandAdapter | pub |
| 490 | type | ChannelDoctorConfigMutation | pub |
| 496 | type | ChannelDoctorLegacyConfigRule | pub |
| 498 | type | ChannelDoctorSequenceResult | pub |
| 503 | type | ChannelDoctorEmptyAllowlistAccountContext | pub |
| 512 | type | ChannelDoctorAdapter | pub |
| 548 | type | ChannelLifecycleAdapter | pub |
| 578 | type | ChannelApprovalDeliveryAdapter | (private) |
| 587 | type | ChannelApproveCommandBehavior | (private) |
| 594 | type | ChannelApprovalRenderAdapter | (private) |
| 623 | type | ChannelApprovalAdapter | pub |
| 640 | type | ChannelApprovalCapability | pub |
| 671 | type | ChannelAllowlistAdapter | pub |
| 727 | type | ChannelConfiguredBindingConversationRef | pub |
| 732 | type | ChannelConfiguredBindingMatch | pub |
| 736 | type | ChannelCommandConversationContext | pub |
| 750 | type | ChannelConfiguredBindingProvider | pub |
| 767 | type | ChannelConversationBindingSupport | pub |

## src/channels/plugins/types.core.ts (874 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | type | ChannelExposure | (private) |
| 35 | type | ChannelOutboundTargetMode | pub |
| 38 | type | ChannelAgentTool | pub |
| 41 | type | ChannelAgentToolFactory | pub |
| 49 | type | ChannelMessageActionDiscoveryContext | pub |
| 70 | type | ChannelMessageToolSchemaContribution | pub |
| 81 | type | ChannelMessageToolMediaSourceParams | (private) |
| 85 | type | ChannelMessageToolDiscovery | pub |
| 99 | type | ChannelSetupInput | pub |
| 152 | type | ChannelStatusIssue | pub |
| 160 | type | ChannelAccountState | pub |
| 168 | type | ChannelHeartbeatDeps | pub |
| 174 | type | ChannelMeta | pub |
| 197 | type | ChannelAccountSnapshot | pub |
| 268 | type | ChannelLogSink | pub |
| 275 | type | ChannelGroupContext | pub |
| 297 | type | PreferredAudioFileFormat | (private) |
| 299 | type | ChannelTtsVoiceDeliveryCapabilities | pub |
| 315 | type | ChannelCapabilities | pub |
| 333 | type | ChannelSecurityDmPolicy | pub |
| 348 | type | ChannelMentionAdapter | pub |
| 367 | type | ChannelStreamingAdapter | pub |
| 376 | type | ChannelStructuredComponents | pub |
| 378 | type | ChannelCrossContextPresentationFactory | (private) |
| 385 | type | ChannelReplyTransport | (private) |
| 390 | type | ChannelFocusedBindingContext | (private) |
| 397 | type | ChannelOutboundSessionRoute | pub |
| 412 | type | ChannelThreadingAdapter | pub |
| 468 | type | ChannelThreadingContext | pub |
| 485 | type | ChannelThreadingToolContext | pub |
| 508 | type | ChannelMessagingAdapter | pub |
| 684 | type | ChannelAgentPromptAdapter | pub |
| 702 | type | ChannelDirectoryEntryKind | pub |
| 704 | type | ChannelDirectoryEntry | pub |
| 714 | type | ChannelMessageActionName | (private) |
| 717 | type | ChannelMessageActionContext | pub |
| 757 | type | ChannelToolSend | pub |
| 766 | type | ChannelMessagePreparedSendPayloadContext | (private) |
| 777 | type | ChannelMessageActionAdapter | pub |
| 844 | type | ChannelPollResult | pub |
| 853 | type | ChannelPollContext | pub |
| 871 | type | BaseTokenResolution | pub |
