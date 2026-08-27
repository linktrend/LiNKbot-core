# src/commands/doctor/shared/missing-configured-plugin-install.ts

[← Back to Module](../modules/src-commands-doctor-shared/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2202
- **Language:** TypeScript
- **Symbols:** 63
- **Public symbols:** 5

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 90 | type | DownloadableInstallCandidate | (private) | - |
| 100 | type | BundledPluginPackageDescriptor | (private) | - |
| 116 | fn | shouldFallbackClawHubToNpm | (private) | `function shouldFallbackClawHubToNpm(params: {` |
| 131 | fn | appendClawHubRiskAcknowledgementGuidance | (private) | `function appendClawHubRiskAcknowledgementGuidan...` |
| 143 | fn | shellQuotePosixArg | (private) | `function shellQuotePosixArg(value: string): str...` |
| 150 | fn | isActionableClawHubSkippedOutcome | (private) | `function isActionableClawHubSkippedOutcome(outc...` |
| 154 | fn | isClawHubReviewNotice | (private) | `function isClawHubReviewNotice(message: string)...` |
| 162 | fn | recordClawHubInstallSpec | (private) | `function recordClawHubInstallSpec(record: Plugi...` |
| 175 | fn | resolveCandidateClawHubSpec | (private) | `function resolveCandidateClawHubSpec(install: P...` |
| 183 | fn | addConfiguredPluginId | (private) | `function addConfiguredPluginId(ids: Set<string>...` |
| 193 | fn | addConfiguredAgentRuntimePluginIds | (private) | `function addConfiguredAgentRuntimePluginIds(ids...` |
| 199 | fn | addConfiguredMemoryEmbeddingProviderPluginIds | (private) | `function addConfiguredMemoryEmbeddingProviderPl...` |
| 217 | fn | addConfiguredSpeechProviderPluginIds | (private) | `function addConfiguredSpeechProviderPluginIds(i...` |
| 226 | fn | addConfiguredWebFetchProviderPluginIds | (private) | `function addConfiguredWebFetchProviderPluginIds...` |
| 243 | fn | addEnvWebFetchProviderPluginIds | (private) | `function addEnvWebFetchProviderPluginIds(` |
| 259 | fn | collectConfiguredPluginIds | (private) | `function collectConfiguredPluginIds(cfg: OpenCl...` |
| 296 | fn | collectBlockedPluginIds | (private) | `function collectBlockedPluginIds(cfg: OpenClawC...` |
| 315 | fn | collectConfiguredChannelIds | (private) | `function collectConfiguredChannelIds(cfg: OpenC...` |
| 337 | fn | collectEffectiveConfiguredChannelOwnerPluginIds | (private) | `function collectEffectiveConfiguredChannelOwner...` |
| 369 | fn | collectDownloadableInstallCandidates | (private) | `function collectDownloadableInstallCandidates(p...` |
| 523 | fn | addLegacyNpmDeclarationInstallCandidate | (private) | `function addLegacyNpmDeclarationInstallCandidat...` |
| 549 | fn | collectLegacyNpmDeclarationInstallCandidates | (private) | `function collectLegacyNpmDeclarationInstallCand...` |
| 598 | fn | collectUpdateDeferredPluginIds | (private) | `function collectUpdateDeferredPluginIds(params: {` |
| 621 | fn | collectConfiguredPluginIdsWithMissingChannelConfigDescriptors | (private) | `function collectConfiguredPluginIdsWithMissingC...` |
| 644 | fn | collectInstalledPluginIdsWithRepairablePackageDiagnostics | (private) | `function collectInstalledPluginIdsWithRepairabl...` |
| 665 | fn | resolveInstalledRuntimePackageVersion | (private) | `function resolveInstalledRuntimePackageVersion(...` |
| 681 | fn | installedRuntimePackageVersionIsStale | (private) | `function installedRuntimePackageVersionIsStale(...` |
| 702 | fn | betaCompanionMatchesCurrentStableVersion | (private) | `function betaCompanionMatchesCurrentStableVersi...` |
| 711 | fn | collectInstalledPluginIdsWithStaleVersionBoundRuntimePackages | (private) | `function collectInstalledPluginIdsWithStaleVers...` |
| 751 | fn | isConfiguredPluginRepairTarget | (private) | `function isConfiguredPluginRepairTarget(params: {` |
| 771 | fn | collectOfficialReplacementInstallCandidates | (private) | `function collectOfficialReplacementInstallCandi...` |
| 813 | fn | forceNpmInstallRecordRepair | (private) | `function forceNpmInstallRecordRepair(record: Pl...` |
| 823 | fn | isInstalledRecordMissingOnDisk | (private) | `function isInstalledRecordMissingOnDisk(` |
| 835 | fn | pathsEqual | (private) | `function pathsEqual(left: string, right: string...` |
| 839 | fn | resolveNpmPackageInstallPath | (private) | `function resolveNpmPackageInstallPath(params: {...` |
| 846 | fn | resolveLegacyNpmPackageInstallPath | (private) | `function resolveLegacyNpmPackageInstallPath(par...` |
| 853 | fn | collectCandidateOfficialPackageNames | (private) | `function collectCandidateOfficialPackageNames(` |
| 870 | fn | collectInstalledRecordPackageNames | (private) | `function collectInstalledRecordPackageNames(rec...` |
| 894 | fn | isTrustedOfficialInstallRecordForCandidate | (private) | `function isTrustedOfficialInstallRecordForCandi...` |
| 920 | fn | resolveSafeBrokenOfficialInstallRemovalPath | (private) | `function resolveSafeBrokenOfficialInstallRemova...` |
| 962 | fn | recordMatchesBundledPackage | (private) | `function recordMatchesBundledPackage(` |
| 983 | fn | recordNpmPackageName | (private) | `function recordNpmPackageName(value: string | u...` |
| 988 | fn | recordClawHubPackageName | (private) | `function recordClawHubPackageName(value: string...` |
| 996 | type | InstallCandidateRepairReason | (private) | - |
| 998 | type | ConfiguredPluginInstallHealthIssue | (private) | - |
| 1033 | fn | formatInstalledConfiguredPluginChange | (private) | `function formatInstalledConfiguredPluginChange(...` |
| 1043 | fn | installCandidate | (private) | `async function installCandidate(params: {` |
| 1258 | fn | isPluginAlreadyExistsError | (private) | `function isPluginAlreadyExistsError(error: stri...` |
| 1262 | fn | resolveExistingCandidateNpmPackagePath | (private) | `function resolveExistingCandidateNpmPackagePath...` |
| 1286 | fn | resolveExistingCandidateClawHubPackagePath | (private) | `function resolveExistingCandidateClawHubPackage...` |
| 1298 | fn | readNpmPackageVersion | (private) | `async function readNpmPackageVersion(packagePat...` |
| 1311 | fn | adoptExistingNpmPackage | (private) | `async function adoptExistingNpmPackage(params: {` |
| 1359 | fn | resolveCandidateInstallSpec | (private) | `function resolveCandidateInstallSpec(params: {` |
| 1389 | fn | resolveRecordInstallPath | (private) | `function resolveRecordInstallPath(` |
| 1397 | fn | missingRecordedPluginIssueKind | (private) | `function missingRecordedPluginIssueKind(params: {` |
| 1420 | fn | detectConfiguredPluginInstallHealthIssues | pub | `export async function detectConfiguredPluginIns...` |
| 1666 | fn | configuredPluginInstallIssueToHealthFinding | pub | `export function configuredPluginInstallIssueToH...` |
| 1728 | fn | configuredPluginInstallIssueToRepairEffect | pub | `export function configuredPluginInstallIssueToR...` |
| 1772 | fn | assertNeverConfiguredPluginInstallIssue | (private) | `function assertNeverConfiguredPluginInstallIssu...` |
| 1778 | type | RepairMissingPluginInstallsResult | (private) | - |
| 1804 | fn | repairMissingConfiguredPluginInstalls | pub | `export async function repairMissingConfiguredPl...` |
| 1831 | fn | repairMissingPluginInstallsForIds | pub | `export async function repairMissingPluginInstal...` |
| 1863 | fn | repairMissingPluginInstalls | (private) | `async function repairMissingPluginInstalls(para...` |

## Public API

### `detectConfiguredPluginInstallHealthIssues`

```
export async function detectConfiguredPluginInstallHealthIssues(params: {
```

**Line:** 1420 | **Kind:** fn

### `configuredPluginInstallIssueToHealthFinding`

```
export function configuredPluginInstallIssueToHealthFinding(
```

**Line:** 1666 | **Kind:** fn

### `configuredPluginInstallIssueToRepairEffect`

```
export function configuredPluginInstallIssueToRepairEffect(
```

**Line:** 1728 | **Kind:** fn

### `repairMissingConfiguredPluginInstalls`

```
export async function repairMissingConfiguredPluginInstalls(params: {
```

**Line:** 1804 | **Kind:** fn

### `repairMissingPluginInstallsForIds`

```
export async function repairMissingPluginInstallsForIds(params: {
```

**Line:** 1831 | **Kind:** fn
