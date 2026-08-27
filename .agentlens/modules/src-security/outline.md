# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 9 large files in this module.

## src/security/audit-config-basics.test.ts (591 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 19 | fn | captureSecurityEvents | (private) |

## src/security/audit-extra.async.ts (979 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 32 | type | SecurityAuditFinding | (private) |
| 40 | type | SkillScanSummary | (private) |
| 43 | type | ExecDockerRawFn | (private) |
| 50 | type | CodeSafetySummaryCache | (private) |
| 83 | fn | expandTilde | (private) |
| 106 | fn | readPluginManifestExtensions | (private) |
| 147 | fn | formatCodeSafetyDetails | (private) |
| 161 | fn | buildCodeSafetySummaryCacheKey | (private) |
| 170 | fn | getCodeSafetySummary | (private) |
| 179 | fn | scan | (private) |
| 190 | fn | getSkillCodeSafetySummary | (private) |
| 226 | fn | normalizeDockerLabelValue | (private) |
| 234 | class | DockerProbeTimeoutError | (private) |
| 241 | fn | normalizeDockerProbeTimeoutMs | (private) |
| 248 | fn | withDockerProbeTimeout | (private) |
| 276 | fn | isDockerProbeTimeoutError | (private) |
| 280 | fn | listSandboxBrowserContainers | (private) |
| 304 | fn | readSandboxBrowserHashLabels | (private) |
| 338 | fn | parsePublishedHostFromDockerPortLine | (private) |
| 357 | fn | isLoopbackPublishHost | (private) |
| 362 | fn | readSandboxBrowserPortMappings | (private) |
| 387 | fn | collectSandboxBrowserHashLabelFindings | pub |
| 394 | fn | markTimedOut | (private) |
| 502 | fn | buildSandboxBrowserDockerProbeTimeoutFinding | (private) |
| 515 | fn | collectIncludeFilePermFindings | pub |
| 596 | fn | collectStateDeepFilesystemFindings | pub |
| 765 | fn | readConfigSnapshotForAudit | pub |
| 776 | fn | collectPluginsCodeSafetyFindings | pub |
| 896 | fn | collectInstalledSkillsCodeSafetyFindings | pub |

## src/security/audit-extra.sync.ts (1262 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 34 | type | SecurityAuditFinding | (private) |
| 42 | type | HooksHardeningAuditOptions | (private) |
| 46 | type | GatewayHttpNoAuthAuditOptions | (private) |
| 50 | type | GatewayAuthSharedSecretLabel | (private) |
| 51 | type | GatewayAuthSharedSecretReuse | (private) |
| 55 | type | ActiveGatewaySharedSecret | (private) |
| 64 | fn | isProbablySyncedPath | (private) |
| 75 | fn | looksLikeEnvRef | (private) |
| 80 | fn | isGatewayRemotelyExposed | (private) |
| 89 | fn | formatGatewayAuthDisplayLabel | (private) |
| 96 | fn | formatHooksTokenReuseDetail | (private) |
| 103 | fn | listActiveGatewaySharedSecrets | (private) |
| 113 | fn | findGatewayAuthLabelMatchingHooksToken | (private) |
| 122 | fn | findHooksTokenGatewayAuthReuse | (private) |
| 147 | fn | formatHooksTokenReuseRemediation | (private) |
| 154 | fn | hasResolvedGatewayHttpAuth | (private) |
| 177 | fn | isGptModel | (private) |
| 181 | fn | isGpt5OrHigher | (private) |
| 185 | fn | isClaudeModel | (private) |
| 189 | fn | isClaude45OrHigher | (private) |
| 196 | fn | hasConfiguredDockerConfig | (private) |
| 205 | fn | normalizeNodeCommand | (private) |
| 209 | fn | isWildcardEntry | (private) |
| 213 | fn | listKnownNodeCommands | (private) |
| 281 | fn | looksLikeNodeCommandPattern | (private) |
| 299 | fn | editDistance | (private) |
| 330 | fn | suggestKnownNodeCommands | (private) |
| 358 | fn | listOpenInboundPolicies | (private) |
| 365 | fn | inspectSection | (private) |
| 400 | fn | hasConfiguredGroupTargets | (private) |
| 408 | fn | listPotentialMultiUserSignals | (private) |
| 415 | fn | inspectSection | (private) |
| 476 | type | AuditAgentToolContext | (private) |
| 482 | fn | listAuditAgentToolContexts | (private) |
| 497 | fn | collectRiskyToolExposureContexts | (private) |
| 536 | fn | collectControlPlaneToolExposureContexts | (private) |
| 564 | fn | collectSyncedFolderFindings | pub |
| 581 | fn | collectSecretsInConfigFindings | pub |
| 610 | fn | collectHooksHardeningFindings | pub |
| 729 | fn | collectGatewayHttpSessionKeyOverrideFindings | pub |
| 756 | fn | collectGatewayHttpNoAuthFindings | pub |
| 798 | fn | collectSandboxDockerNoopFindings | pub |
| 848 | fn | collectSandboxDangerousConfigFindings | pub |
| 960 | fn | collectNodeDenyCommandPatternFindings | pub |
| 1017 | fn | collectNodeDangerousAllowCommandFindings | pub |
| 1055 | fn | collectMinimalProfileOverrideFindings | pub |
| 1091 | fn | collectModelHygieneFindings | pub |
| 1099 | fn | addWeakMatch | (private) |
| 1176 | fn | collectExposureMatrixFindings | pub |
| 1231 | fn | collectLikelyMultiUserSetupFindings | pub |

## src/security/audit-gateway-exposure.test.ts (566 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 6 | fn | hasFinding | (private) |
| 14 | fn | requireDangerousFlagsFindings | (private) |
| 27 | fn | requireFinding | (private) |

## src/security/audit-plugins-trust.test.ts (642 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | type | CollectPluginsTrustFindings | (private) |
| 21 | fn | collectPluginsTrustFindingsForTest | (private) |
| 166 | fn | makeTmpDir | (private) |
| 172 | fn | runInstallMetadataAudit | (private) |
| 176 | fn | requireInstallFinding | (private) |
| 187 | fn | writePluginIndexInstallRecords | (private) |
| 500 | fn | runSharedExtensionsAudit | (private) |

## src/security/audit-plugins-trust.ts (553 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 21 | type | SandboxToolPolicy | (private) |
| 23 | type | PluginTrustPolicyDeps | (private) |
| 50 | fn | readChannelCommandSetting | (private) |
| 66 | fn | isChannelPluginConfigured | (private) |
| 129 | fn | resolveToolPolicies | (private) |
| 151 | fn | normalizePluginIdSet | (private) |
| 159 | fn | resolveEnabledExtensionPluginIds | (private) |
| 199 | fn | collectAllowEntries | (private) |
| 212 | fn | hasExplicitPluginAllow | (private) |
| 221 | fn | hasProviderPluginAllow | (private) |
| 241 | fn | isPinnedRegistrySpec | (private) |
| 255 | fn | collectPluginsTrustFindings | pub |
| 308 | fn | skillCommandsLikelyExposed | (private) |

## src/security/audit.ts (1585 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 66 | type | ExecDockerRawFn | (private) |
| 67 | type | ProbeGatewayFn | (private) |
| 68 | type | SecurityAuditExplicitGatewayAuth | (private) |
| 72 | type | SecurityAuditGatewayAuthOverride | (private) |
| 73 | type | ClaudePermissionModeHit | (private) |
| 77 | type | McpServerSourceSummary | (private) |
| 81 | type | AgentSkillMcpBoundaryScope | (private) |
| 91 | type | SecurityAuditOptions | (private) |
| 127 | type | AuditExecutionContext | (private) |
| 187 | fn | countBySeverity | (private) |
| 203 | fn | emitSecurityAuditReportEvent | (private) |
| 244 | fn | normalizeSuppressionText | (private) |
| 248 | fn | materializeAuditGatewayAuthRefs | (private) |
| 269 | fn | shouldMaterializeHooksGatewayAuthRefs | (private) |
| 273 | fn | findingMatchesSuppression | (private) |
| 292 | fn | buildSecurityAuditSuppressionsActiveFinding | (private) |
| 308 | fn | applySecurityAuditSuppressions | (private) |
| 334 | fn | normalizeAllowFromList | (private) |
| 341 | fn | collectFilesystemFindings | (private) |
| 472 | fn | collectGatewayConfigFindings | (private) |
| 484 | fn | collectPluginSecurityAuditFindings | (private) |
| 576 | fn | collectLoggingFindings | (private) |
| 592 | fn | collectElevatedFindings | (private) |
| 630 | fn | extractClaudePermissionMode | (private) |
| 653 | fn | collectRestrictiveClaudePermissionModeHits | (private) |
| 671 | fn | isManagedClaudeLiveBackendConfig | (private) |
| 684 | fn | findClaudeCliBackendConfig | (private) |
| 710 | fn | collectYoloExecScopeIds | (private) |
| 742 | fn | collectExecRuntimeFindings | (private) |
| 1060 | fn | formatNamesPreview | (private) |
| 1066 | fn | listConfiguredMcpServerNames | (private) |
| 1073 | type | GlobalMcporterRegistrySummary | (private) |
| 1078 | fn | readGlobalMcporterRegistrySummary | (private) |
| 1101 | fn | describeMcporterRegistryRejection | (private) |
| 1118 | fn | hasOwnSkillsAllowlist | (private) |
| 1122 | fn | collectAgentSkillMcpBoundaryScopes | (private) |
| 1179 | fn | collectAgentSkillMcpBoundaryFindings | (private) |
| 1239 | fn | collectOpenExecSurfacePaths | (private) |
| 1246 | fn | visit | (private) |
| 1274 | fn | collectAutoAllowSkillsHits | (private) |
| 1287 | fn | collectInterpreterAllowlistHits | (private) |
| 1306 | fn | maybeProbeGateway | (private) |
| 1360 | fn | createAuditExecutionContext | (private) |
| 1405 | fn | runSecurityAudit | pub |

## src/security/install-policy.test.ts (696 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | type | InstallPolicyRequest | (private) |
| 19 | fn | makeTempDir | (private) |
| 25 | fn | writePolicyScript | (private) |
| 65 | fn | writeEnvNodePolicyScript | (private) |
| 78 | fn | baseRequest | (private) |
| 97 | fn | configWithPolicy | (private) |

## src/security/install-policy.ts (753 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 40 | type | InstallPolicyTarget | (private) |
| 41 | type | InstallPolicyRequestKind | pub |
| 49 | type | InstallPolicyOrigin | pub |
| 54 | type | InstallPolicySource | pub |
| 71 | type | InstallPolicyFinding | pub |
| 80 | type | InstallPolicyRequest | (private) |
| 120 | type | InstallPolicyResult | (private) |
| 130 | type | InstallPolicyExecConfig | (private) |
| 132 | type | InstallPolicyValidationIssue | (private) |
| 137 | type | InstallPolicyStaticValidation | pub |
| 143 | fn | isAbsolutePathname | (private) |
| 153 | fn | executableName | (private) |
| 160 | fn | isPolicyScriptArg | (private) |
| 170 | fn | resolvePolicyScriptArg | (private) |
| 212 | fn | readFileStatOrThrow | (private) |
| 223 | fn | collectPathAncestorDirs | (private) |
| 236 | fn | assertSecureCommandAncestorDirs | (private) |
| 276 | fn | assertSecureCommandPath | (private) |
| 344 | fn | assertSecurePolicyScriptArg | (private) |
| 369 | fn | truncateText | (private) |
| 373 | fn | createPolicyChildEnv | (private) |
| 378 | fn | readPassEnvValue | (private) |
| 388 | fn | blockedByFailure | (private) |
| 397 | fn | blockedByPolicy | (private) |
| 407 | fn | isTargetEnabled | (private) |
| 418 | fn | resolvePolicy | (private) |
| 443 | fn | resolveConfiguredTargets | (private) |
| 450 | fn | validateInstallPolicyStatic | pub |
| 505 | fn | normalizeFinding | (private) |
| 536 | fn | parsePolicyResponse | (private) |
| 573 | fn | runInstallPolicy | pub |
| 703 | fn | formatDecisionContext | (private) |
| 717 | fn | probeInstallPolicy | pub |
