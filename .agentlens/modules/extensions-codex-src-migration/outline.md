# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 6 large files in this module.

## extensions/codex/src/migration/apply.ts (512 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 71 | type | CodexMigrationTargetAppServerPreparation | (private) |
| 75 | class | CodexPluginConfigConflictError | (private) |
| 82 | fn | shouldReturnCodexPluginConfigPatch | (private) |
| 86 | fn | prepareTargetCodexAppServer | pub |
| 117 | fn | applyCodexMigrationPlan | pub |
| 200 | fn | applyCodexPluginInstallItem | (private) |
| 302 | fn | isCodexPluginInventoryLoadError | (private) |
| 307 | fn | formatCodexMigrationError | (private) |
| 311 | fn | resolveTargetCodexAppServer | (private) |
| 317 | fn | requestTargetCodexAppServerJson | (private) |
| 358 | fn | hasOpenAiCuratedMarketplace | (private) |
| 374 | fn | targetCodexMarketplaceDiscoveryTimeoutMs | (private) |
| 384 | fn | isCodexPluginLoadWarningItem | (private) |
| 393 | fn | buildTargetCodexPluginAppCacheKey | (private) |
| 419 | fn | applyCodexPluginConfigItem | (private) |
| 477 | fn | readAppliedPluginConfigEntry | (private) |
| 493 | fn | readCodexPluginPolicy | (private) |

## extensions/codex/src/migration/auth.ts (678 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | type | CodexMigrationTargets | (private) |
| 43 | type | AgentDefaultModelConfigs | (private) |
| 46 | type | AgentDefaultModelConfigEntry | (private) |
| 48 | type | CodexAuthCredential | (private) |
| 63 | type | CodexAuthProfileConfig | (private) |
| 71 | type | CodexAuthConfigApplyResult | (private) |
| 73 | class | CodexAuthConfigConflict | (private) |
| 75 | fn | readModelRefs | (private) |
| 95 | fn | readProviderAuthModelConfigs | (private) |
| 104 | fn | buildCodexOAuthCredential | (private) |
| 153 | fn | buildCodexApiKeyCredential | (private) |
| 169 | fn | readCodexAuthCredentials | (private) |
| 175 | fn | findMatchingOAuthProfile | (private) |
| 194 | fn | findMatchingApiKeyProfile | (private) |
| 207 | fn | itemProfileTarget | (private) |
| 223 | fn | replaceConfigDraft | (private) |
| 230 | fn | existingAuthProfileConfigIsCompatible | (private) |
| 243 | fn | hasAuthProfileConfigConflict | (private) |
| 255 | fn | hasCurrentAuthProfileConfigConflict | (private) |
| 268 | fn | applyDefaultModelIfMissing | (private) |
| 294 | fn | mergeModelConfigEntry | (private) |
| 304 | fn | applyOAuthModelConfigsToConfig | (private) |
| 329 | fn | applyOAuthConfigToConfig | (private) |
| 353 | fn | applyApiKeyConfigToConfig | (private) |
| 367 | fn | shouldReturnAuthConfigPatch | (private) |
| 371 | fn | oauthAuthProfileConfig | (private) |
| 392 | fn | apiKeyAuthProfileConfig | (private) |
| 404 | fn | authProfileConfigForCredential | (private) |
| 413 | fn | applyCodexAuthProfileConfig | (private) |
| 441 | fn | applyOAuthConfig | (private) |
| 455 | fn | applyApiKeyConfig | (private) |
| 467 | fn | buildCodexAuthItems | pub |
| 519 | fn | applyCodexAuthItem | pub |
| 615 | fn | buildCodexAuthConfigPatchItems | pub |

## extensions/codex/src/migration/plan.ts (536 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | type | CodexPluginMigrationConfigEntry | pub |
| 50 | type | CodexPluginMigrationBlockSkipDetails | (private) |
| 57 | fn | uniquePluginConfigKey | (private) |
| 72 | fn | readExistingCodexPluginEntries | (private) |
| 82 | fn | hasExistingCodexPluginEntry | (private) |
| 100 | fn | isLegacyDestructivePolicyRepair | (private) |
| 119 | fn | readExistingPluginAllowDestructiveActions | (private) |
| 133 | fn | buildPluginItems | (private) |
| 243 | fn | shouldVerifyPluginApps | (private) |
| 247 | fn | readCodexPluginMigrationConfigEntry | pub |
| 274 | fn | readExistingAllowDestructiveActions | (private) |
| 284 | fn | normalizeExistingAllowDestructiveActions | (private) |
| 296 | fn | readExistingPluginPolicyRepairs | (private) |
| 313 | fn | buildCodexPluginsConfigValue | pub |
| 353 | fn | hasCodexPluginConfigConflict | pub |
| 408 | fn | buildPluginConfigItem | (private) |
| 437 | fn | buildCodexMigrationPlan | pub |

## extensions/codex/src/migration/provider.test.ts (2628 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | fn | makeTempRoot | (private) |
| 40 | fn | writeFile | (private) |
| 45 | fn | makeContext | (private) |
| 83 | fn | findItem | (private) |
| 91 | fn | findItemByReason | (private) |
| 99 | fn | expectRecordFields | (private) |
| 110 | fn | fakeJwt | (private) |
| 116 | fn | mockCallArg | (private) |
| 124 | fn | targetAgentDir | (private) |
| 128 | fn | loadTargetAuthStore | (private) |
| 132 | fn | createCodexFixture | (private) |
| 168 | fn | sourceAppCacheKey | (private) |
| 2500 | fn | createConfigRuntime | (private) |
| 2503 | type | Runtime | (private) |
| 2504 | type | MutateConfigFileParams | (private) |
| 2505 | type | MutateConfigFileResult | (private) |
| 2529 | fn | pluginList | (private) |
| 2544 | fn | pluginRead | (private) |
| 2558 | fn | createFailingConfigRuntime | (private) |
| 2561 | type | Runtime | (private) |
| 2562 | type | MutateConfigFileParams | (private) |
| 2573 | fn | pluginApp | (private) |
| 2584 | fn | appInfo | (private) |
| 2603 | fn | appsList | (private) |
| 2607 | fn | chatGptAccount | (private) |
| 2614 | fn | pluginSummary | (private) |

## extensions/codex/src/migration/session-binding-sidecars.ts (894 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | type | MigrationParams | (private) |
| 28 | type | MigrationEnvironment | (private) |
| 30 | type | SessionSurface | (private) |
| 37 | type | LegacyBindingSource | (private) |
| 43 | type | LegacyBindingOwner | (private) |
| 54 | type | LegacySessionIndexEntry | (private) |
| 62 | type | BindingOwnerCollection | (private) |
| 67 | type | SourceMigrationResult | (private) |
| 76 | type | MigratedBindingRow | (private) |
| 90 | fn | collectSessionSurfaces | (private) |
| 93 | fn | add | (private) |
| 139 | fn | collectLegacyBindingSources | (private) |
| 145 | fn | addSource | (private) |
| 173 | fn | readLegacySessionIndex | (private) |
| 289 | fn | collectBindingOwners | (private) |
| 370 | fn | resolveLegacySessionFileLocator | (private) |
| 392 | fn | resolveLegacyBindingOwnerAgentId | (private) |
| 411 | fn | copyBindingForSession | (private) |
| 422 | fn | migrateSource | (private) |
| 562 | fn | hasExpected | (private) |
| 652 | fn | recordSessionOwner | (private) |
| 743 | fn | readDirectoryEntries | (private) |
| 756 | fn | isRegularFile | (private) |
| 764 | fn | isRecord | (private) |
| 768 | fn | isSafeLegacySessionId | (private) |
| 778 | fn | isPathWithin | (private) |
| 788 | fn | canonicalizePath | (private) |
| 796 | fn | canonicalizePathForContainment | (private) |
| 815 | fn | pathExists | (private) |

## extensions/codex/src/migration/source.ts (556 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | type | CodexArchiveSource | (private) |
| 37 | type | CodexSource | pub |
| 55 | type | CodexSourceDiscoveryOptions | (private) |
| 62 | type | SourceAppServerRequestOptions | (private) |
| 66 | type | PluginReadResult | (private) |
| 76 | fn | defaultCodexHome | (private) |
| 84 | fn | personalAgentsSkillsDir | (private) |
| 88 | fn | discoverInstalledCuratedPlugins | (private) |
| 136 | fn | sourceCodexAppServerStartOptions | (private) |
| 151 | fn | requestSourceCodexAppServerJson | (private) |
| 168 | fn | buildInstalledPluginSource | (private) |
| 185 | fn | marketplaceRef | (private) |
| 193 | fn | withPluginMigrationEligibility | (private) |
| 325 | fn | readSourceCodexAccount | (private) |
| 343 | fn | readPluginDetail | (private) |
| 359 | fn | refreshSourceAppInventory | (private) |
| 377 | fn | sourcePluginAppFact | (private) |
| 385 | fn | sourcePluginAppFactWithInventory | (private) |
| 399 | fn | migrationBlockCodeForApps | (private) |
| 414 | fn | appInventoryBlockMessage | (private) |
| 433 | fn | codexPluginMigrationSubscriptionWarning | pub |
| 437 | fn | codexSubscriptionRequiredMessage | (private) |
| 441 | fn | pluginNameFromSummary | (private) |
| 460 | fn | discoverCodexSource | pub |
| 550 | fn | hasCodexSource | pub |
| 554 | fn | sanitizePluginName | (private) |
