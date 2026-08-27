# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 8 large files in this module.

## extensions/anthropic/cli-migration.test.ts (538 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 98 | fn | resolveAnthropicCliAuthMethod | (private) |
| 107 | fn | createProviderAuthContext | (private) |
| 131 | fn | createProviderAuthMethodNonInteractiveContext | (private) |

## extensions/anthropic/cli-shared.test.ts (604 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | fn | expectDefaultDisallowedTools | (private) |
| 32 | fn | normalizeClaudeArgs | (private) |

## extensions/anthropic/cli-shared.ts (518 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 100 | type | ClaudeCliEffort | (private) |
| 101 | type | ClaudeCliEffortArgAction | (private) |
| 113 | fn | isClaudeCliProvider | pub |
| 118 | fn | resolveClaudeCliAutoCompactEnv | pub |
| 133 | fn | isOpenClawRequestedYolo | (private) |
| 144 | fn | resolveClaudePermissionMode | (private) |
| 154 | fn | normalizeClaudePermissionArgs | (private) |
| 207 | fn | normalizeClaudeSettingSourcesArgs | (private) |
| 246 | fn | resolveClaudeCliEffortArgAction | (private) |
| 267 | fn | stripClaudeEffortArgs | (private) |
| 360 | fn | stripClaudeArgs | (private) |
| 398 | fn | stripClaudeSideQuestionConflictingArgs | (private) |
| 406 | fn | resolveClaudeCliSideQuestionExecutionArgs | (private) |
| 423 | fn | resolveClaudeCliToolAvailabilityArgs | (private) |
| 439 | fn | isSystemAgentToolAvailability | (private) |
| 445 | fn | resolveClaudeCliSystemAgentExecutionArgs | (private) |
| 471 | fn | resolveClaudeCliExecutionArgs | pub |
| 474 | fn | executionArgs | (private) |
| 499 | fn | normalizeClaudeBackendConfig | pub |

## extensions/anthropic/index.test.ts (1480 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 42 | fn | createModelRegistry | (private) |
| 55 | fn | requireRecord | (private) |
| 62 | fn | expectFields | (private) |
| 69 | fn | expectModelParams | (private) |
| 74 | fn | levelIds | (private) |

## extensions/anthropic/register.runtime.ts (961 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 64 | type | ProviderAuthMethodNonInteractiveValidationContext | (private) |
| 71 | fn | classifyAnthropicFailoverDescriptor | (private) |
| 81 | type | UpsertAuthProfileParams | (private) |
| 118 | fn | resolveAnthropicSonnet5Cost | (private) |
| 130 | fn | upsertAuthProfileWithLockOrThrow | (private) |
| 138 | fn | normalizeAnthropicSetupTokenInput | (private) |
| 142 | fn | resolveAnthropicSetupTokenProfileId | (private) |
| 155 | fn | resolveAnthropicSetupTokenExpiry | (private) |
| 164 | fn | runAnthropicSetupTokenAuth | (private) |
| 202 | fn | validateAnthropicSetupTokenNonInteractive | (private) |
| 236 | fn | runAnthropicSetupTokenNonInteractive | (private) |
| 284 | fn | resolveAnthropic46ForwardCompatModel | (private) |
| 327 | fn | buildAnthropicForwardCompatModel | (private) |
| 374 | fn | resolveAnthropicForwardCompatModel | (private) |
| 414 | fn | isAnthropicGa1MModel | (private) |
| 418 | fn | isAnthropicFable5Model | (private) |
| 422 | fn | isAnthropicMythos5Model | (private) |
| 426 | fn | isAnthropicMandatoryClaude5Model | (private) |
| 430 | fn | isAnthropicSonnet5Model | (private) |
| 434 | fn | resolveAnthropicFixedContextWindow | (private) |
| 444 | fn | isAnthropic128kOutputModel | (private) |
| 452 | fn | isAnthropicLargeImageModel | (private) |
| 456 | fn | isAnthropicMythosPreviewModel | (private) |
| 462 | fn | supportsAnthropicNativeMaxEffort | (private) |
| 466 | fn | hasConfiguredModelContextOverride | (private) |
| 502 | fn | applyAnthropicFixedContextWindow | (private) |
| 543 | fn | applyAnthropicModernMaxTokens | (private) |
| 559 | fn | applyAnthropicThinkingLevelMap | (private) |
| 589 | fn | matchesAnthropicModernModel | (private) |
| 593 | fn | hasImageInput | (private) |
| 597 | fn | supportsAnthropicImageInput | (private) |
| 603 | fn | resolveAnthropicImageMediaInput | (private) |
| 618 | fn | applyAnthropicImageInputCapability | (private) |
| 634 | fn | applyAnthropicSonnet5Cost | (private) |
| 648 | fn | normalizeAnthropicResolvedModel | (private) |
| 714 | fn | buildAnthropicAuthDoctorHint | (private) |
| 749 | fn | runAnthropicCliMigration | (private) |
| 762 | fn | runAnthropicCliMigrationNonInteractive | (private) |
| 812 | fn | buildAnthropicProvider | pub |
| 952 | fn | registerAnthropicPlugin | pub |

## extensions/anthropic/session-catalog.test.ts (1715 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | fn | captureCatalogProvider | (private) |
| 95 | fn | createHome | (private) |
| 101 | fn | writeProject | (private) |
| 123 | fn | writeDesktopMetadata | (private) |
| 141 | fn | writeBrokenClaudeNpmShim | (private) |
| 175 | fn | message | (private) |
| 195 | fn | sdkCliMessage | (private) |
| 1629 | fn | releaseOpen | (private) |
| 1633 | fn | reportOpen | (private) |

## extensions/anthropic/session-catalog.ts (1514 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 75 | type | SessionIndexEntry | (private) |
| 89 | type | DesktopSessionMetadata | (private) |
| 101 | type | CatalogRecord | (private) |
| 105 | type | CatalogDiscoveryCacheEntry | (private) |
| 127 | fn | cacheCatalogDiscovery | (private) |
| 139 | fn | optionalString | (private) |
| 147 | fn | timestampMs | (private) |
| 158 | fn | isWithin | (private) |
| 163 | fn | safeSessionFile | (private) |
| 184 | fn | readJsonFile | (private) |
| 192 | fn | childDirectories | (private) |
| 202 | fn | projectsDir | (private) |
| 206 | fn | desktopSessionsDir | (private) |
| 210 | fn | currentHomeDir | (private) |
| 214 | fn | readDesktopMetadata | (private) |
| 255 | fn | readIndexRecords | (private) |
| 319 | fn | locateSessionFile | (private) |
| 335 | fn | discoverCliRecords | (private) |
| 563 | fn | listClaudeSessions | (private) |
| 606 | fn | encodeOffset | (private) |
| 610 | fn | decodeOffset | (private) |
| 632 | fn | readLimit | (private) |
| 642 | fn | readRequiredCursor | (private) |
| 649 | fn | readOptionalCursor | (private) |
| 656 | fn | readListParams | (private) |
| 681 | fn | listLocalClaudeSessionPage | pub |
| 706 | fn | readTranscriptParams | (private) |
| 735 | fn | readLocalClaudeTranscriptPage | pub |
| 839 | fn | readNodePageCursor | (private) |
| 852 | fn | parseCatalogPage | (private) |
| 929 | fn | unwrapNodePayload | (private) |
| 936 | fn | parseGatewayQuery | (private) |
| 993 | fn | listClaudeSessionCatalog | (private) |
| 1141 | fn | readClaudeSessionTranscript | (private) |
| 1205 | fn | readBoundedClaudeHistory | (private) |
| 1237 | fn | resolveNodeClaudeRecord | (private) |
| 1268 | fn | continueClaudeSession | (private) |
| 1274 | fn | linkSession | (private) |
| 1293 | fn | operation | (private) |
| 1394 | fn | toGenericClaudeItem | (private) |
| 1419 | fn | toGenericClaudeHost | (private) |
| 1463 | fn | registerClaudeSessionCatalog | pub |
| 1472 | fn | mapHost | (private) |

## extensions/anthropic/usage.ts (527 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | type | AnthropicUsagePage | (private) |
| 34 | type | DailyAccumulator | (private) |
| 39 | fn | cleanCredential | (private) |
| 51 | fn | normalizeAdminKey | (private) |
| 62 | fn | encodeAdminToken | (private) |
| 66 | fn | decodeAdminToken | (private) |
| 79 | fn | objectRecord | (private) |
| 85 | fn | finiteNumber | (private) |
| 95 | fn | nonNegativeInteger | (private) |
| 100 | fn | displayName | (private) |
| 104 | fn | utcDay | (private) |
| 109 | fn | emptyDaily | (private) |
| 123 | fn | resolveDailyRange | (private) |
| 136 | fn | readPage | (private) |
| 158 | fn | fetchPages | (private) |
| 221 | fn | addModelUsage | (private) |
| 242 | fn | aggregateHistory | (private) |
| 248 | fn | getDaily | (private) |
| 374 | fn | fetchAnthropicAdminUsage | (private) |
| 419 | fn | resolveAnthropicUsageAuth | pub |
| 465 | fn | formatClaudePlanLabel | (private) |
| 485 | fn | resolveClaudePlanLabel | (private) |
| 500 | fn | fetchAnthropicUsage | pub |
