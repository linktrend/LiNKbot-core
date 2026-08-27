# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 15 large files in this module.

## src/agents/sessions/agent-session-base.ts (825 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 47 | interface | ToolDefinitionEntry | (private) |
| 52 | type | ActiveToolPromptMetadata | (private) |

## src/agents/sessions/agent-session-loop-correctness.test.ts (700 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | fn | createUsage | (private) |
| 59 | fn | createAssistant | (private) |
| 77 | fn | createAssistantResultStream | (private) |
| 90 | fn | createResourceLoader | (private) |
| 128 | fn | createCompactionHandlers | (private) |
| 152 | fn | createTestSession | (private) |
| 189 | fn | appendHistory | (private) |

## src/agents/sessions/agent-session-prompting.ts (545 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | type | PostAgentRunAction | (private) |

## src/agents/sessions/auth-storage.ts (544 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | type | ApiKeyCredential | pub |
| 29 | type | OAuthCredential | pub |
| 33 | type | AuthCredential | pub |
| 35 | type | AuthStorageData | pub |
| 37 | class | AuthStoragePersistenceError | (private) |
| 44 | type | AuthStatus | pub |
| 61 | interface | AuthStorageBackend | pub |
| 66 | class | FileAuthStorageBackend | pub |
| 151 | class | InMemoryAuthStorageBackend | pub |
| 174 | class | AuthStorage | pub |

## src/agents/sessions/model-registry.test.ts (745 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | fn | writeModelsJson | (private) |
| 25 | fn | writeModelsJsonWithPluginCatalog | (private) |
| 41 | fn | writeModelsJsonWithPluginCatalogs | (private) |
| 60 | fn | pluginOwnerSnapshot | (private) |
| 64 | fn | pluginOwnerSnapshotEntries | (private) |
| 90 | fn | oauthProviderConfig | (private) |

## src/agents/sessions/model-registry.ts (1023 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 158 | type | ProviderAuthMode | (private) |
| 213 | type | ModelsConfig | (private) |
| 214 | type | MaxTokensSource | (private) |
| 216 | fn | formatValidationPath | (private) |
| 231 | fn | stripJsonComments | (private) |
| 237 | interface | ProviderRequestConfig | (private) |
| 244 | type | ResolvedRequestAuth | pub |
| 256 | interface | CustomModelsResult | (private) |
| 261 | fn | emptyCustomModelsResult | (private) |
| 265 | type | ModelRegistryOptions | (private) |
| 271 | type | ModelRegistryCatalogSnapshot | (private) |
| 280 | fn | mergeCompat | (private) |
| 322 | class | ModelRegistry | pub |
| 992 | interface | ProviderConfigInput | pub |

## src/agents/sessions/model-resolver.ts (654 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | fn | isValidThinkingLevel | (private) |
| 20 | interface | ScopedModel | pub |
| 30 | fn | isAlias | (private) |
| 46 | fn | findExactModelReferenceMatch | pub |
| 96 | fn | tryMatchModel | (private) |
| 127 | interface | ParsedModelResult | pub |
| 134 | fn | buildFallbackModel | (private) |
| 156 | fn | selectAvailableFallbackModel | (private) |
| 177 | fn | parseModelPattern | pub |
| 242 | fn | resolveModelScope | pub |
| 308 | interface | ResolveCliModelResult | pub |
| 330 | fn | resolveCliModel | pub |
| 488 | interface | InitialModelResult | pub |
| 502 | fn | findInitialModel | pub |
| 589 | fn | restoreModelFromSession | pub |

## src/agents/sessions/package-manager.ts (1486 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | interface | PathMetadata | pub |
| 33 | interface | ResolvedResource | pub |
| 39 | interface | ResolvedPaths | pub |
| 46 | type | MissingSourceAction | pub |
| 48 | interface | PackageManager | pub |
| 56 | interface | PackageManagerOptions | (private) |
| 62 | type | SourceScope | (private) |
| 64 | type | NpmSource | (private) |
| 71 | type | LocalSource | (private) |
| 76 | type | ParsedSource | (private) |
| 78 | interface | ResourceManifest | (private) |
| 85 | interface | ResourceAccumulator | (private) |
| 104 | fn | resourcePrecedenceRank | (private) |
| 112 | interface | PackageFilter | (private) |
| 119 | type | ResourceType | (private) |
| 120 | type | TopLevelAutoResourceType | (private) |
| 131 | fn | getHomeDir | (private) |
| 135 | fn | getAgentResourceTempDir | (private) |
| 143 | fn | isPattern | (private) |
| 153 | fn | isOverridePattern | (private) |
| 157 | fn | hasGlobPattern | (private) |
| 161 | fn | splitPatterns | (private) |
| 174 | fn | collectFiles | (private) |
| 234 | type | SkillDiscoveryMode | (private) |
| 236 | fn | collectSkillEntries | (private) |
| 333 | fn | collectAutoSkillEntries | (private) |
| 337 | fn | findGitRepoRoot | (private) |
| 351 | fn | collectAncestorAgentsSkillDirs | (private) |
| 372 | fn | collectTopLevelAutoResourceEntries | (private) |
| 422 | fn | readResourceManifestFile | (private) |
| 432 | fn | resolveExtensionEntries | (private) |
| 462 | fn | collectAutoExtensionEntries | (private) |
| 530 | fn | collectResourceFiles | (private) |
| 540 | fn | resolveRealPathIfPossible | (private) |
| 548 | fn | isPathWithinRoot | (private) |
| 553 | fn | isRealPathWithinRoot | (private) |
| 560 | fn | getMatchCandidates | (private) |
| 576 | fn | matchesAnyPattern | (private) |
| 581 | fn | normalizeExactPattern | (private) |
| 587 | fn | matchesAnyExactPattern | (private) |
| 592 | fn | isEnabledByOverrides | (private) |
| 604 | fn | applyPatterns | (private) |
| 652 | class | DefaultPackageManager | pub |
| 1281 | fn | addResources | (private) |

## src/agents/sessions/resource-loader.ts (1037 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | interface | ResourceExtensionPaths | pub |
| 41 | interface | ResourceLoader | pub |
| 53 | fn | resolvePromptInput | (private) |
| 72 | fn | loadContextFileFromDir | (private) |
| 90 | fn | loadProjectContextFiles | (private) |
| 134 | interface | DefaultResourceLoaderOptions | (private) |
| 171 | class | DefaultResourceLoader | pub |

## src/agents/sessions/sdk.test.ts (848 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 66 | fn | createModelWithoutBaseUrl | (private) |
| 71 | fn | createAssistantError | (private) |
| 92 | fn | createAssistantResultStream | (private) |
| 105 | fn | createEmptyResourceLoader | (private) |
| 109 | fn | createTestModelRegistry | (private) |
| 120 | fn | createResourceLoaderWithHandlers | (private) |
| 156 | fn | createSessionAndStreamModel | (private) |
| 179 | fn | appendPersistedAssistantMessage | (private) |
| 203 | fn | createSessionFromManager | (private) |
| 214 | fn | createSessionWithPersistedAssistantContent | (private) |
| 758 | fn | createRetrySession | (private) |

## src/agents/sessions/sdk.ts (553 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | type | ThinkingCatalogCompat | (private) |
| 50 | fn | projectThinkingCatalogCompat | (private) |
| 70 | interface | CreateAgentSessionOptions | pub |
| 124 | interface | CreateAgentSessionResult | (private) |
| 146 | fn | getDefaultAgentDir | (private) |
| 150 | fn | createSessionPrepareNextTurnWithContext | (private) |
| 160 | fn | sameTools | (private) |
| 210 | fn | getAttributionHeaders | (private) |
| 277 | fn | createAgentSession | pub |

## src/agents/sessions/session-manager-core.ts (608 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 41 | type | SqliteSessionManagerPersistence | pub |
| 45 | class | SessionManagerCore | pub |

## src/agents/sessions/session-manager-file.ts (563 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | type | CachedSessionEntries | (private) |
| 46 | type | LoadedSessionFile | pub |
| 51 | type | LoadedSqliteSession | (private) |
| 60 | fn | getDefaultSessionDir | pub |
| 69 | fn | loadEntriesFromFile | pub |
| 77 | fn | loadEntriesFromFileWithSnapshot | pub |
| 117 | fn | readSessionFileSnapshot | (private) |
| 128 | fn | isSameSessionFileSnapshot | (private) |
| 138 | fn | rememberSessionEntries | (private) |
| 166 | fn | trimSessionEntriesCache | (private) |
| 184 | fn | hasCacheableSessionHeader | (private) |
| 196 | fn | rememberWrittenSessionEntries | pub |
| 243 | fn | rememberAppendedSessionEntry | pub |
| 267 | fn | isVerifiedOwnedAppend | (private) |
| 339 | fn | publishRememberedSessionFileSnapshot | pub |
| 352 | fn | jsonSerializationCanRunUserCode | pub |
| 412 | fn | hasOwnProperty | (private) |
| 416 | fn | messageSerializesOwnedValues | pub |
| 430 | fn | readSessionFileSnapshotIfExists | pub |
| 438 | fn | sessionFileNeedsAppendSeparator | pub |
| 460 | fn | revalidateLoadedSessionFile | pub |
| 478 | fn | loadSqliteMarkedSessionFile | pub |
| 503 | fn | copyFileEntries | (private) |
| 512 | fn | freezeFileEntry | (private) |
| 517 | fn | freezeJsonLikeValue | (private) |
| 530 | fn | recoverCorruptSessionEntries | pub |
| 557 | fn | canPublishOwnedSessionAppend | pub |

## src/agents/sessions/session-manager.test.ts (3351 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | fn | makeTempDir | (private) |
| 856 | fn | initialTranscriptWithContent | (private) |
| 3293 | fn | readMessageContent | (private) |
| 3301 | fn | readTrustedRepairSnapshot | (private) |
| 3312 | fn | buildAssistantMessage | (private) |
| 3332 | fn | buildSessionHeader | (private) |
| 3342 | fn | buildMessageEntry | (private) |

## src/agents/sessions/settings-manager.ts (1079 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | interface | CompactionSettings | (private) |
| 22 | interface | BranchSummarySettings | pub |
| 27 | interface | ProviderRetrySettings | pub |
| 33 | interface | RetrySettings | pub |
| 40 | interface | TerminalSettings | pub |
| 47 | interface | ImageSettings | pub |
| 52 | interface | ThinkingBudgetsSettings | pub |
| 60 | interface | MarkdownSettings | pub |
| 64 | interface | WarningSettings | pub |
| 68 | type | TransportSetting | pub |
| 75 | type | PackageSource | pub |
| 85 | interface | Settings | pub |
| 126 | fn | deepMergeSettings | (private) |
| 130 | type | SettingsScope | pub |
| 132 | interface | SettingsStorage | pub |
| 136 | interface | SettingsError | pub |
| 141 | class | FileSettingsStorage | pub |
| 181 | class | InMemorySettingsStorage | pub |
| 198 | class | SettingsManager | pub |
