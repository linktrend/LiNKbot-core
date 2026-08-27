# src/flows/doctor-health-contributions.ts

[← Back to Module](../modules/src-flows/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2341
- **Language:** TypeScript
- **Symbols:** 97
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 20 | type | DoctorFlowMode | (private) | - |
| 21 | type | PluginVersionDriftReport | (private) | - |
| 24 | type | DoctorConfigResult | (private) | - |
| 36 | type | DoctorHealthFlowContext | pub | - |
| 55 | type | DoctorHealthContribution | (private) | - |
| 65 | type | DoctorContributionHealthCheck | (private) | - |
| 77 | fn | loadAgentDefaultsModule | (private) | `const loadAgentDefaultsModule = async () => awa...` |
| 78 | fn | loadAgentScopeModule | (private) | `const loadAgentScopeModule = async () => await ...` |
| 79 | fn | loadCommandFormatModule | (private) | `const loadCommandFormatModule = async () => awa...` |
| 80 | fn | loadConfigModule | (private) | `const loadConfigModule = async () => await impo...` |
| 81 | fn | loadDoctorCoreChecksModule | (private) | `const loadDoctorCoreChecksModule = async () => ...` |
| 82 | fn | loadDoctorStateIntegrityModule | (private) | `const loadDoctorStateIntegrityModule = async () =>` |
| 84 | fn | loadHealthCheckRegistryModule | (private) | `const loadHealthCheckRegistryModule = async () ...` |
| 85 | fn | loadCatalogLookupModule | (private) | `const loadCatalogLookupModule = async () => awa...` |
| 86 | fn | loadPreparedModelCatalogModule | (private) | `const loadPreparedModelCatalogModule = async () =>` |
| 88 | fn | loadModelSelectionModule | (private) | `const loadModelSelectionModule = async () => aw...` |
| 89 | fn | loadNoteModule | (private) | `const loadNoteModule = async () => await import...` |
| 90 | fn | loadOnboardHelpersModule | (private) | `const loadOnboardHelpersModule = async () => aw...` |
| 91 | fn | loadSecretTypesModule | (private) | `const loadSecretTypesModule = async () => await...` |
| 93 | fn | isUpdateDoctorRun | (private) | `function isUpdateDoctorRun(env: NodeJS.ProcessE...` |
| 98 | fn | resolveDoctorMode | (private) | `function resolveDoctorMode(cfg: OpenClawConfig)...` |
| 102 | fn | isTruthyEnvValue | (private) | `function isTruthyEnvValue(value: string | undef...` |
| 110 | fn | shouldSkipLegacyUpdateDoctorConfigWrite | (private) | `function shouldSkipLegacyUpdateDoctorConfigWrit...` |
| 120 | fn | createDoctorHealthContribution | (private) | `function createDoctorHealthContribution(params: {` |
| 159 | fn | normalizeHealthChecks | (private) | `function normalizeHealthChecks(params: {` |
| 176 | fn | normalizeContributionHealthCheck | (private) | `function normalizeContributionHealthCheck(param...` |
| 197 | fn | deriveCoreHealthCheckId | (private) | `function deriveCoreHealthCheckId(contributionId...` |
| 204 | fn | runStructuredDoctorHealthContribution | (private) | `async function runStructuredDoctorHealthContrib...` |
| 244 | fn | renderStructuredHealthFindings | (private) | `function renderStructuredHealthFindings(` |
| 257 | fn | formatStructuredHealthFinding | (private) | `function formatStructuredHealthFinding(finding:...` |
| 263 | fn | runGatewayConfigHealth | (private) | `async function runGatewayConfigHealth(ctx: Doct...` |
| 291 | fn | runAuthProfileHealth | (private) | `async function runAuthProfileHealth(ctx: Doctor...` |
| 327 | fn | runGatewayAuthHealth | (private) | `async function runGatewayAuthHealth(ctx: Doctor...` |
| 439 | fn | runCommandOwnerHealth | (private) | `async function runCommandOwnerHealth(ctx: Docto...` |
| 444 | fn | runStructuredHealthRepairs | (private) | `async function runStructuredHealthRepairs(ctx: ...` |
| 476 | fn | runClaudeCliHealth | (private) | `async function runClaudeCliHealth(ctx: DoctorHe...` |
| 481 | fn | runCoreContributionHealth | (private) | `async function runCoreContributionHealth(` |
| 522 | fn | runLegacyStateHealth | (private) | `async function runLegacyStateHealth(ctx: Doctor...` |
| 572 | fn | runLegacyPluginManifestHealth | (private) | `async function runLegacyPluginManifestHealth(ct...` |
| 583 | fn | runPluginRegistryHealth | (private) | `async function runPluginRegistryHealth(ctx: Doc...` |
| 592 | fn | runReleaseConfiguredPluginInstallsHealth | (private) | `async function runReleaseConfiguredPluginInstal...` |
| 637 | fn | runDiskSpaceHealth | (private) | `async function runDiskSpaceHealth(ctx: DoctorHe...` |
| 642 | fn | runDatabaseBloatHealth | (private) | `async function runDatabaseBloatHealth(ctx: Doct...` |
| 647 | fn | runChannelIngressDeadLettersHealth | (private) | `async function runChannelIngressDeadLettersHeal...` |
| 652 | fn | runStateIntegrityHealth | (private) | `async function runStateIntegrityHealth(ctx: Doc...` |
| 657 | fn | runCodexSessionRouteHealth | (private) | `async function runCodexSessionRouteHealth(ctx: ...` |
| 677 | fn | runSessionLocksHealth | (private) | `async function runSessionLocksHealth(ctx: Docto...` |
| 686 | fn | runSessionTranscriptsHealth | (private) | `async function runSessionTranscriptsHealth(ctx:...` |
| 695 | fn | runSessionSnapshotsHealth | (private) | `async function runSessionSnapshotsHealth(ctx: D...` |
| 704 | fn | runConfigAuditScrubHealth | (private) | `async function runConfigAuditScrubHealth(ctx: D...` |
| 709 | fn | runLegacyCronHealth | (private) | `async function runLegacyCronHealth(ctx: DoctorH...` |
| 720 | fn | runSandboxHealth | (private) | `async function runSandboxHealth(ctx: DoctorHeal...` |
| 728 | fn | runGatewayServicesHealth | (private) | `async function runGatewayServicesHealth(ctx: Do...` |
| 757 | fn | runStartupChannelMaintenanceHealth | (private) | `async function runStartupChannelMaintenanceHeal...` |
| 768 | fn | runSecurityHealth | (private) | `async function runSecurityHealth(ctx: DoctorHea...` |
| 775 | fn | runWebFetchProxyHealth | (private) | `async function runWebFetchProxyHealth(ctx: Doct...` |
| 780 | fn | runBrowserHealth | (private) | `async function runBrowserHealth(ctx: DoctorHeal...` |
| 786 | fn | runOpenAIOAuthTlsHealth | (private) | `async function runOpenAIOAuthTlsHealth(ctx: Doc...` |
| 795 | fn | runHooksModelHealth | (private) | `async function runHooksModelHealth(ctx: DoctorH...` |
| 841 | type | ToolResultCapTarget | (private) | - |
| 849 | fn | collectToolResultCapFindings | (private) | `async function collectToolResultCapFindings(` |
| 901 | fn | collectToolResultCapTargetAdvice | (private) | `async function collectToolResultCapTargetAdvice...` |
| 954 | fn | runToolResultCapHealth | (private) | `async function runToolResultCapHealth(ctx: Doct...` |
| 1002 | fn | runSystemdLingerHealth | (private) | `async function runSystemdLingerHealth(ctx: Doct...` |
| 1035 | fn | detectSystemdLingerFindings | (private) | `async function detectSystemdLingerFindings(` |
| 1074 | fn | hasActiveGatewayExecCredential | (private) | `async function hasActiveGatewayExecCredential(` |
| 1101 | fn | collectWorkspaceStatusPluginVersionDrift | (private) | `async function collectWorkspaceStatusPluginVers...` |
| 1131 | fn | runWorkspaceStatusHealth | (private) | `async function runWorkspaceStatusHealth(ctx: Do...` |
| 1140 | fn | runSkillsHealth | (private) | `async function runSkillsHealth(ctx: DoctorHealt...` |
| 1148 | fn | runBootstrapSizeHealth | (private) | `async function runBootstrapSizeHealth(ctx: Doct...` |
| 1153 | fn | runHeartbeatTemplateRepairHealth | (private) | `async function runHeartbeatTemplateRepairHealth...` |
| 1162 | fn | runShellCompletionHealth | (private) | `async function runShellCompletionHealth(ctx: Do...` |
| 1169 | fn | runGatewayHealthChecks | (private) | `async function runGatewayHealthChecks(ctx: Doct...` |
| 1199 | fn | runWhatsappResponsivenessHealth | (private) | `async function runWhatsappResponsivenessHealth(...` |
| 1209 | fn | runMemorySearchHealthContribution | (private) | `async function runMemorySearchHealthContributio...` |
| 1226 | fn | memorySearchNoteToFinding | (private) | `function memorySearchNoteToFinding(message: str...` |
| 1246 | fn | inferMemorySearchFindingPath | (private) | `function inferMemorySearchFindingPath(message: ...` |
| 1262 | fn | collectMemorySearchHealthFindings | (private) | `async function collectMemorySearchHealthFindings(` |
| 1286 | fn | runDevicePairingHealth | (private) | `async function runDevicePairingHealth(ctx: Doct...` |
| 1294 | fn | runGatewayDaemonHealth | (private) | `async function runGatewayDaemonHealth(ctx: Doct...` |
| 1309 | fn | runWriteConfigHealth | (private) | `async function runWriteConfigHealth(ctx: Doctor...` |
| 1376 | fn | collectWriteConfigHealthFindings | (private) | `async function collectWriteConfigHealthFindings(` |
| 1431 | fn | findNearestExistingParent | (private) | `function findNearestExistingParent(path: string...` |
| 1443 | fn | pathEntryExists | (private) | `function pathEntryExists(path: string): boolean {` |
| 1455 | fn | isDirectoryPath | (private) | `function isDirectoryPath(path: string): boolean {` |
| 1463 | fn | resolveLegacyParentVersionOverride | (private) | `function resolveLegacyParentVersionOverride(ctx...` |
| 1474 | fn | runWorkspaceSuggestionsHealth | (private) | `async function runWorkspaceSuggestionsHealth(ct...` |
| 1490 | fn | runFinalConfigValidationHealth | (private) | `async function runFinalConfigValidationHealth(c...` |
| 1505 | fn | formatHealthFindings | (private) | `function formatHealthFindings(findings: readonl...` |
| 1523 | fn | runCoreHealthFindingNote | (private) | `async function runCoreHealthFindingNote(` |
| 1556 | fn | runProviderCatalogProjectionHealth | (private) | `async function runProviderCatalogProjectionHeal...` |
| 1560 | fn | runLocalAudioAccelerationHealth | (private) | `async function runLocalAudioAccelerationHealth(...` |
| 1564 | fn | runRuntimeToolSchemasHealth | (private) | `async function runRuntimeToolSchemasHealth(ctx:...` |
| 1568 | fn | runSkillWorkshopToolPolicyHealth | (private) | `async function runSkillWorkshopToolPolicyHealth...` |
| 1572 | fn | resolveDoctorHealthContributions | (private) | `function resolveDoctorHealthContributions(): Do...` |
| 2308 | fn | resolveDoctorContributionHealthChecks | pub | `export async function resolveDoctorContribution...` |
| 2330 | fn | runDoctorHealthContributions | pub | `export async function runDoctorHealthContributi...` |

## Public API

### `resolveDoctorContributionHealthChecks`

```
export async function resolveDoctorContributionHealthChecks(): Promise<readonly HealthCheck[]> {
```

**Line:** 2308 | **Kind:** fn

### `runDoctorHealthContributions`

```
export async function runDoctorHealthContributions(ctx: DoctorHealthFlowContext): Promise<void> {
```

**Line:** 2330 | **Kind:** fn
