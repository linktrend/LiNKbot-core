# src/infra/clawhub.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1964
- **Language:** TypeScript
- **Symbols:** 109
- **Public symbols:** 48

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 38 | type | ClawHubPackageFamily | pub | - |
| 39 | type | ClawHubPackageChannel | pub | - |
| 41 | type | ClawHubPackageCompatibility | pub | - |
| 47 | type | ClawHubPackageHostTarget | (private) | - |
| 53 | type | ClawHubPackageEnvironmentSummary | (private) | - |
| 63 | type | ClawHubPackageArtifactSummary | pub | - |
| 77 | type | ClawHubArtifactScanState | (private) | - |
| 84 | type | ClawHubArtifactModerationState | (private) | - |
| 85 | type | ClawHubPackageSecurityTrust | pub | - |
| 93 | type | ClawHubResolvedArtifact | pub | - |
| 116 | type | ClawHubPackageArtifactResolverResponse | pub | - |
| 138 | type | ClawHubPackageSecurityResponse | pub | - |
| 150 | type | ClawHubPackageClawPackSummary | pub | - |
| 167 | type | ClawHubPackageListItem | (private) | - |
| 194 | type | ClawHubPackageDetail | pub | - |
| 231 | type | ClawHubPackageVersion | pub | - |
| 265 | type | ClawHubPackageSearchResult | pub | - |
| 270 | type | ClawHubSkillSearchResult | pub | - |
| 281 | type | ClawHubSkillDetail | pub | - |
| 311 | type | ClawHubSkillInstallResolutionResponse | pub | - |
| 348 | type | ClawHubSkillVerificationDecision | (private) | - |
| 350 | type | ClawHubSkillVerificationResponse | pub | - |
| 371 | type | ClawHubSkillSecurityVerdictRequestItem | (private) | - |
| 377 | type | ClawHubSkillSecurityVerdictItem | pub | - |
| 399 | type | ClawHubSkillSecurityVerdictsResponse | (private) | - |
| 404 | type | ClawHubDownloadResult | pub | - |
| 417 | type | FetchLike | (private) | - |
| 419 | type | ClawHubRequestParams | (private) | - |
| 434 | type | ClawHubConfigLike | (private) | - |
| 445 | fn | resolveClawHubRequestTimeoutMs | (private) | `function resolveClawHubRequestTimeoutMs(timeout...` |
| 449 | class | ClawHubRequestError | pub | - |
| 463 | fn | normalizeBaseUrl | (private) | `function normalizeBaseUrl(baseUrl?: string): st...` |
| 472 | fn | normalizeGitHubCodeloadBaseUrl | (private) | `function normalizeGitHubCodeloadBaseUrl(): stri...` |
| 479 | fn | extractTokenFromClawHubConfig | (private) | `function extractTokenFromClawHubConfig(value: u...` |
| 496 | fn | resolveClawHubConfigPaths | (private) | `function resolveClawHubConfigPaths(): string[] {` |
| 519 | fn | resolveClawHubAuthToken | (private) | `async function resolveClawHubAuthToken(): Promi...` |
| 541 | fn | normalizePartialComparableVersion | (private) | `function normalizePartialComparableVersion(vers...` |
| 551 | fn | shouldPreservePluginApiPrereleaseFloor | (private) | `function shouldPreservePluginApiPrereleaseFloor...` |
| 555 | fn | normalizePluginApiVersionForComparator | (private) | `function normalizePluginApiVersionForComparator...` |
| 565 | fn | satisfiesComparator | (private) | `function satisfiesComparator(version: string, t...` |
| 588 | fn | satisfiesSemverRange | (private) | `function satisfiesSemverRange(version: string, ...` |
| 603 | fn | normalizeOpenClawNumericCorrectionForPluginApi | (private) | `function normalizeOpenClawNumericCorrectionForP...` |
| 609 | fn | normalizeOpenClawReleaseSuffixForPluginApi | (private) | `function normalizeOpenClawReleaseSuffixForPlugi...` |
| 614 | fn | buildUrl | (private) | `function buildUrl(params: Pick<ClawHubRequestPa...` |
| 641 | fn | clawhubRequest | (private) | `async function clawhubRequest(` |
| 649 | fn | request | (private) | `const request = async () => {` |
| 690 | fn | readErrorBody | (private) | `async function readErrorBody(response: Response...` |
| 703 | fn | buildClawHubError | (private) | `async function buildClawHubError(` |
| 723 | fn | formatRateLimitSuffix | (private) | `function formatRateLimitSuffix(headers: Headers...` |
| 737 | fn | parseRateLimitDeltaSeconds | (private) | `function parseRateLimitDeltaSeconds(value: stri...` |
| 745 | fn | fetchJson | (private) | `async function fetchJson<T>(params: ClawHubRequ...` |
| 753 | fn | parseClawHubJsonBody | (private) | `async function parseClawHubJsonBody<T>(` |
| 774 | fn | readClawHubResponseBytes | (private) | `async function readClawHubResponseBytes(params: {` |
| 802 | fn | createClawHubBodyLimitError | (private) | `function createClawHubBodyLimitError(` |
| 813 | fn | isJsonObject | (private) | `function isJsonObject(value: unknown): value is...` |
| 817 | fn | optionalStringField | (private) | `function optionalStringField(` |
| 829 | fn | requiredBooleanField | (private) | `function requiredBooleanField(` |
| 841 | fn | requiredStringArrayField | (private) | `function requiredStringArrayField(` |
| 853 | fn | requiredStringField | (private) | `function requiredStringField(` |
| 865 | fn | requiredNumberField | (private) | `function requiredNumberField(` |
| 877 | fn | optionalBooleanField | (private) | `function optionalBooleanField(` |
| 889 | fn | optionalStringArrayField | (private) | `function optionalStringArrayField(` |
| 904 | fn | parseOptionalSecurityPackage | (private) | `function parseOptionalSecurityPackage(value: un...` |
| 929 | fn | parseOptionalSecurityRelease | (private) | `function parseOptionalSecurityRelease(value: un...` |
| 952 | fn | parseClawHubPackageSecurityResponse | (private) | `function parseClawHubPackageSecurityResponse(va...` |
| 987 | fn | resolveClawHubBaseUrl | pub | `export function resolveClawHubBaseUrl(baseUrl?:...` |
| 991 | fn | isDefaultClawHubBaseUrl | pub | `export function isDefaultClawHubBaseUrl(baseUrl...` |
| 995 | fn | buildVersionOrTagSearch | (private) | `function buildVersionOrTagSearch(params: {` |
| 1012 | fn | buildGitHubZipUrl | (private) | `function buildGitHubZipUrl(repo: string, commit...` |
| 1023 | fn | formatSha256Integrity | (private) | `function formatSha256Integrity(bytes: Uint8Arra...` |
| 1027 | fn | formatSha256Hex | (private) | `function formatSha256Hex(bytes: Uint8Array): st...` |
| 1031 | fn | formatSha512Integrity | (private) | `function formatSha512Integrity(bytes: Uint8Arra...` |
| 1036 | fn | formatSha1Hex | (private) | `function formatSha1Hex(bytes: Uint8Array): stri...` |
| 1040 | fn | normalizeHeaderValue | (private) | `function normalizeHeaderValue(value: string | n...` |
| 1045 | fn | safePackageTarballName | (private) | `function safePackageTarballName(name: string, v...` |
| 1054 | fn | normalizeClawHubSha256Integrity | pub | `export function normalizeClawHubSha256Integrity...` |
| 1082 | fn | normalizeClawHubSha256Hex | pub | `export function normalizeClawHubSha256Hex(value...` |
| 1090 | fn | fetchClawHubPackageDetail | pub | `export async function fetchClawHubPackageDetail...` |
| 1106 | fn | fetchClawHubPackageVersion | pub | `export async function fetchClawHubPackageVersio...` |
| 1125 | fn | fetchClawHubPackageArtifact | pub | `export async function fetchClawHubPackageArtifa...` |
| 1144 | fn | fetchClawHubPackageSecurity | pub | `export async function fetchClawHubPackageSecuri...` |
| 1164 | fn | searchClawHubPackages | pub | `export async function searchClawHubPackages(par...` |
| 1188 | fn | searchClawHubSkills | pub | `export async function searchClawHubSkills(param...` |
| 1210 | fn | fetchClawHubSkillDetail | pub | `export async function fetchClawHubSkillDetail(p...` |
| 1228 | fn | fetchClawHubSkillInstallResolution | pub | `export async function fetchClawHubSkillInstallR...` |
| 1259 | fn | fetchClawHubSkillVerification | pub | `export async function fetchClawHubSkillVerifica...` |
| 1279 | fn | fetchClawHubSkillSecurityVerdicts | pub | `export async function fetchClawHubSkillSecurity...` |
| 1299 | fn | fetchClawHubSkillCard | pub | `export async function fetchClawHubSkillCard(par...` |
| 1343 | fn | downloadClawHubPackageArchive | pub | `export async function downloadClawHubPackageArc...` |
| 1467 | fn | downloadClawHubSkillArchive | pub | `export async function downloadClawHubSkillArchi...` |
| 1513 | fn | downloadClawHubSkillArchiveUrl | pub | `export async function downloadClawHubSkillArchi...` |
| 1555 | fn | downloadClawHubGitHubSkillArchive | pub | `export async function downloadClawHubGitHubSkil...` |
| 1591 | fn | reportClawHubSkillInstallTelemetry | pub | `export async function reportClawHubSkillInstall...` |
| 1628 | fn | isClawHubTelemetryDisabled | (private) | `function isClawHubTelemetryDisabled(): boolean {` |
| 1639 | fn | resolveLatestVersionFromPackage | pub | `export function resolveLatestVersionFromPackage...` |
| 1644 | fn | satisfiesPluginApiRange | pub | `export function satisfiesPluginApiRange(` |
| 1655 | fn | satisfiesGatewayMinimum | pub | `export function satisfiesGatewayMinimum(` |
| 1676 | type | ClawHubPromotionModel | (private) | - |
| 1682 | type | ClawHubPromotion | pub | - |
| 1703 | type | ClawHubPromotionsFeedEntry | pub | - |
| 1705 | type | ClawHubPromotionsFeed | (private) | - |
| 1719 | fn | parseClawHubPromotionModel | (private) | `function parseClawHubPromotionModel(value: unkn...` |
| 1750 | fn | parseClawHubPromotionCore | (private) | `function parseClawHubPromotionCore(` |
| 1811 | fn | parseClawHubPromotion | (private) | `function parseClawHubPromotion(value: unknown):...` |
| 1823 | fn | fetchClawHubPromotions | pub | `export async function fetchClawHubPromotions(` |
| 1842 | fn | fetchClawHubPromotion | pub | `export async function fetchClawHubPromotion(par...` |
| 1868 | fn | parseClawHubPromotionsFeed | pub | `export function parseClawHubPromotionsFeed(valu...` |
| 1916 | type | ClawHubPromotionsFeedFetchResult | (private) | - |
| 1920 | fn | fetchClawHubPromotionsFeed | pub | `export async function fetchClawHubPromotionsFeed(` |

## Public API

### `resolveClawHubBaseUrl`

```
export function resolveClawHubBaseUrl(baseUrl?: string): string {
```

**Line:** 987 | **Kind:** fn

### `isDefaultClawHubBaseUrl`

```
export function isDefaultClawHubBaseUrl(baseUrl?: string): boolean {
```

**Line:** 991 | **Kind:** fn

### `normalizeClawHubSha256Integrity`

```
export function normalizeClawHubSha256Integrity(value: string): string | null {
```

**Line:** 1054 | **Kind:** fn

### `normalizeClawHubSha256Hex`

```
export function normalizeClawHubSha256Hex(value: string): string | null {
```

**Line:** 1082 | **Kind:** fn

### `fetchClawHubPackageDetail`

```
export async function fetchClawHubPackageDetail(params: {
```

**Line:** 1090 | **Kind:** fn

### `fetchClawHubPackageVersion`

```
export async function fetchClawHubPackageVersion(params: {
```

**Line:** 1106 | **Kind:** fn

### `fetchClawHubPackageArtifact`

```
export async function fetchClawHubPackageArtifact(params: {
```

**Line:** 1125 | **Kind:** fn

### `fetchClawHubPackageSecurity`

```
export async function fetchClawHubPackageSecurity(params: {
```

**Line:** 1144 | **Kind:** fn

### `searchClawHubPackages`

```
export async function searchClawHubPackages(params: {
```

**Line:** 1164 | **Kind:** fn

### `searchClawHubSkills`

```
export async function searchClawHubSkills(params: {
```

**Line:** 1188 | **Kind:** fn

### `fetchClawHubSkillDetail`

```
export async function fetchClawHubSkillDetail(params: {
```

**Line:** 1210 | **Kind:** fn

### `fetchClawHubSkillInstallResolution`

```
export async function fetchClawHubSkillInstallResolution(params: {
```

**Line:** 1228 | **Kind:** fn

### `fetchClawHubSkillVerification`

```
export async function fetchClawHubSkillVerification(params: {
```

**Line:** 1259 | **Kind:** fn

### `fetchClawHubSkillSecurityVerdicts`

```
export async function fetchClawHubSkillSecurityVerdicts(params: {
```

**Line:** 1279 | **Kind:** fn

### `fetchClawHubSkillCard`

```
export async function fetchClawHubSkillCard(params: {
```

**Line:** 1299 | **Kind:** fn

### `downloadClawHubPackageArchive`

```
export async function downloadClawHubPackageArchive(params: {
```

**Line:** 1343 | **Kind:** fn

### `downloadClawHubSkillArchive`

```
export async function downloadClawHubSkillArchive(params: {
```

**Line:** 1467 | **Kind:** fn

### `downloadClawHubSkillArchiveUrl`

```
export async function downloadClawHubSkillArchiveUrl(params: {
```

**Line:** 1513 | **Kind:** fn

### `downloadClawHubGitHubSkillArchive`

```
export async function downloadClawHubGitHubSkillArchive(params: {
```

**Line:** 1555 | **Kind:** fn

### `reportClawHubSkillInstallTelemetry`

```
export async function reportClawHubSkillInstallTelemetry(params: {
```

**Line:** 1591 | **Kind:** fn

### `resolveLatestVersionFromPackage`

```
export function resolveLatestVersionFromPackage(detail: ClawHubPackageDetail): string | null {
```

**Line:** 1639 | **Kind:** fn

### `satisfiesPluginApiRange`

```
export function satisfiesPluginApiRange(
```

**Line:** 1644 | **Kind:** fn

### `satisfiesGatewayMinimum`

```
export function satisfiesGatewayMinimum(
```

**Line:** 1655 | **Kind:** fn

### `fetchClawHubPromotions`

```
export async function fetchClawHubPromotions(
```

**Line:** 1823 | **Kind:** fn

### `fetchClawHubPromotion`

```
export async function fetchClawHubPromotion(params: {
```

**Line:** 1842 | **Kind:** fn

### `parseClawHubPromotionsFeed`

```
export function parseClawHubPromotionsFeed(value: unknown): ClawHubPromotionsFeed {
```

**Line:** 1868 | **Kind:** fn

### `fetchClawHubPromotionsFeed`

```
export async function fetchClawHubPromotionsFeed(
```

**Line:** 1920 | **Kind:** fn
