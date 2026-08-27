# src/plugins/clawhub.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1512
- **Language:** TypeScript
- **Symbols:** 57
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 62 | type | PluginInstallLogger | (private) | - |
| 68 | type | ClawHubInstallFailure | (private) | - |
| 76 | type | ClawHubRuntimeIdResolution | (private) | - |
| 80 | type | ClawHubFileEntryLike | (private) | - |
| 85 | type | ClawHubFileVerificationEntry | (private) | - |
| 90 | type | ClawHubArchiveVerification | (private) | - |
| 100 | type | ClawHubArchiveVerificationResolution | (private) | - |
| 107 | type | ClawHubArtifactResolverVersion | (private) | - |
| 111 | type | ClawHubInstallArtifactDecision | (private) | - |
| 118 | type | ClawHubArchiveFileVerificationResult | (private) | - |
| 125 | type | JSZipObjectWithSize | (private) | - |
| 135 | type | ClawHubArchiveEntryLimits | (private) | - |
| 140 | fn | normalizeClawHubClawPackInstallFields | (private) | `function normalizeClawHubClawPackInstallFields(` |
| 194 | fn | isTrustedSourceLinkedOfficialPackage | (private) | `function isTrustedSourceLinkedOfficialPackage(p...` |
| 206 | fn | isDefaultOfficialClawHubPackage | (private) | `function isDefaultOfficialClawHubPackage(params: {` |
| 216 | fn | resolveClawHubClawPackArtifactSha256 | (private) | `function resolveClawHubClawPackArtifactSha256(` |
| 228 | fn | resolveClawHubNpmIntegrity | (private) | `function resolveClawHubNpmIntegrity(` |
| 234 | fn | resolveClawHubNpmShasum | (private) | `function resolveClawHubNpmShasum(` |
| 240 | fn | resolveClawHubNpmTarballName | (private) | `function resolveClawHubNpmTarballName(` |
| 246 | fn | resolveClawHubNpmPackArtifact | (private) | `function resolveClawHubNpmPackArtifact(` |
| 258 | fn | readArtifactResolverVersion | (private) | `function readArtifactResolverVersion(` |
| 275 | fn | isClawHubPackageFamily | (private) | `function isClawHubPackageFamily(` |
| 281 | fn | normalizeArtifactResolverFiles | (private) | `function normalizeArtifactResolverFiles(` |
| 290 | type | ClawHubResolvedArtifactWire | (private) | - |
| 300 | fn | resolveTopLevelNpmPackArtifact | (private) | `function resolveTopLevelNpmPackArtifact(` |
| 321 | fn | resolveTopLevelLegacyArchiveVerification | (private) | `function resolveTopLevelLegacyArchiveVerification(` |
| 334 | fn | formatClawHubSpecifier | (private) | `function formatClawHubSpecifier(params: { name:...` |
| 338 | fn | buildClawHubInstallFailure | (private) | `function buildClawHubInstallFailure(` |
| 353 | fn | isClawHubInstallFailure | (private) | `function isClawHubInstallFailure(value: unknown...` |
| 363 | fn | mapClawHubRequestError | (private) | `function mapClawHubRequestError(` |
| 382 | fn | encodeClawHubPackagePath | (private) | `function encodeClawHubPackagePath(packageName: ...` |
| 389 | fn | resolveClawHubPluginUrl | (private) | `function resolveClawHubPluginUrl(params: { base...` |
| 393 | fn | padRight | (private) | `function padRight(value: string, width: number)...` |
| 397 | fn | formatClawHubReleaseLabel | (private) | `function formatClawHubReleaseLabel(packageName:...` |
| 401 | fn | resolveClawHubExpectedRuntimeId | (private) | `function resolveClawHubExpectedRuntimeId(params: {` |
| 433 | fn | isMissingArtifactResolverRoute | (private) | `function isMissingArtifactResolverRoute(error: ...` |
| 441 | fn | buildArtifactResolverResponseFromVersion | (private) | `function buildArtifactResolverResponseFromVersi...` |
| 465 | fn | formatClawHubClawPackDownloadError | (private) | `function formatClawHubClawPackDownloadError(par...` |
| 477 | fn | isClawHubArtifactDownloadPolicyBlock | (private) | `function isClawHubArtifactDownloadPolicyBlock(e...` |
| 495 | fn | formatClawHubArtifactDownloadPolicyBlock | (private) | `function formatClawHubArtifactDownloadPolicyBlo...` |
| 503 | fn | formatClawHubMissingArtifactMetadataError | (private) | `function formatClawHubMissingArtifactMetadataEr...` |
| 510 | fn | resolveRequestedVersion | (private) | `function resolveRequestedVersion(params: {` |
| 520 | fn | readTrimmedString | (private) | `function readTrimmedString(value: unknown): str...` |
| 524 | fn | normalizeClawHubRelativePath | (private) | `function normalizeClawHubRelativePath(value: un...` |
| 541 | fn | describeInvalidClawHubRelativePath | (private) | `function describeInvalidClawHubRelativePath(val...` |
| 567 | fn | describeInvalidClawHubSha256 | (private) | `function describeInvalidClawHubSha256(value: un...` |
| 580 | fn | resolveClawHubArchiveVerification | (private) | `function resolveClawHubArchiveVerification(` |
| 665 | fn | readLimitedClawHubArchiveEntry | (private) | `async function readLimitedClawHubArchiveEntry<T>(` |
| 743 | fn | readClawHubArchiveEntryBuffer | (private) | `async function readClawHubArchiveEntryBuffer(` |
| 758 | fn | hashClawHubArchiveEntry | (private) | `async function hashClawHubArchiveEntry(` |
| 773 | fn | validateClawHubArchiveMetaJson | (private) | `function validateClawHubArchiveMetaJson(params: {` |
| 809 | fn | mapClawHubArchiveReadFailure | (private) | `function mapClawHubArchiveReadFailure(error: un...` |
| 830 | fn | verifyClawHubArchiveFiles | (private) | `async function verifyClawHubArchiveFiles(params: {` |
| 942 | fn | resolveCompatiblePackageVersion | (private) | `async function resolveCompatiblePackageVersion(...` |
| 1102 | fn | validateClawHubPluginPackage | (private) | `function validateClawHubPluginPackage(params: {` |
| 1158 | fn | logClawHubPackageSummary | (private) | `function logClawHubPackageSummary(params: {` |
| 1200 | fn | installPluginFromClawHub | pub | `export async function installPluginFromClawHub(` |

## Public API

### `installPluginFromClawHub`

```
export async function installPluginFromClawHub(
```

**Line:** 1200 | **Kind:** fn
