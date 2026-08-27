# scripts/resolve-openclaw-package-candidate.mjs

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1644
- **Language:** JavaScript
- **Symbols:** 76
- **Public symbols:** 9

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 68 | fn | usage | (private) | `function usage() {` |
| 85 | fn | parseArgs | pub | `export function parseArgs(argv) {` |
| 101 | fn | setOnce | (private) | `const setOnce = (flag, key, value) => {` |
| 110 | fn | readValue | (private) | `const readValue = (name, readOptions = {}) => {` |
| 155 | fn | validateOutputName | (private) | `function validateOutputName(value) {` |
| 161 | fn | resolvePackedOpenClawTarballFilename | (private) | `function resolvePackedOpenClawTarballFilename(v...` |
| 176 | fn | validateOpenClawPackageSpec | pub | `export function validateOpenClawPackageSpec(spe...` |
| 184 | fn | resolveNpmPackageCandidatePackRunner | pub | `export function resolveNpmPackageCandidatePackR...` |
| 196 | fn | numericTimerValueMs | (private) | `function numericTimerValueMs(valueMs) {` |
| 201 | fn | resolveTimerTimeoutMs | (private) | `function resolveTimerTimeoutMs(valueMs, fallbac...` |
| 206 | fn | resolveOptionalTimerTimeoutMs | (private) | `function resolveOptionalTimerTimeoutMs(valueMs) {` |
| 213 | fn | run | (private) | `function run(command, args, options = {}) {` |
| 237 | fn | killChild | (private) | `const killChild = (signal) => signalChildProces...` |
| 238 | fn | terminateChild | (private) | `const terminateChild = () => {` |
| 325 | fn | finishTimedOutProcessTree | (private) | `async function finishTimedOutProcessTree(` |
| 341 | fn | signalChildProcessTree | pub | `export function signalChildProcessTree(` |
| 378 | fn | childHasExited | (private) | `function childHasExited(child) {` |
| 382 | fn | processTreeIsAlive | (private) | `function processTreeIsAlive(child, useProcessGr...` |
| 397 | fn | waitForProcessTreeExit | (private) | `async function waitForProcessTreeExit(child, ti...` |
| 410 | fn | appendBoundedCommandOutput | (private) | `function appendBoundedCommandOutput(buffer, chu...` |
| 419 | fn | formatCapturedCommandOutput | (private) | `function formatCapturedCommandOutput(buffer) {` |
| 428 | fn | sha256 | (private) | `async function sha256(file) {` |
| 441 | fn | assertSha256 | (private) | `function assertSha256(value) {` |
| 447 | fn | assertExpectedSha256 | (private) | `async function assertExpectedSha256(file, expec...` |
| 461 | fn | findSingleTarball | (private) | `async function findSingleTarball(dir, maxEntrie...` |
| 510 | fn | readArtifactPackageCandidateMetadata | pub | `export async function readArtifactPackageCandid...` |
| 540 | fn | revParseTrustedInputRef | (private) | `async function revParseTrustedInputRef(ref) {` |
| 556 | fn | resolveTrustedRepoRef | (private) | `async function resolveTrustedRepoRef(ref) {` |
| 613 | fn | preparePackageSourceWorktree | (private) | `async function preparePackageSourceWorktree(ref) {` |
| 624 | fn | cleanupPackageSourceWorktree | (private) | `async function cleanupPackageSourceWorktree(` |
| 643 | fn | installPackageSourceDeps | (private) | `async function installPackageSourceDeps(sourceD...` |
| 657 | fn | moveNewestPackedTarball | (private) | `async function moveNewestPackedTarball(outputDi...` |
| 711 | fn | cleanPackedOpenClawTarballs | (private) | `async function cleanPackedOpenClawTarballs(outp...` |
| 737 | fn | normalizeUrlHostname | (private) | `function normalizeUrlHostname(hostname) {` |
| 741 | fn | parseIpv4 | (private) | `function parseIpv4(address) {` |
| 753 | fn | ipv4ToInt | (private) | `function ipv4ToInt(octets) {` |
| 757 | fn | ipv4InCidr | (private) | `function ipv4InCidr(octets, base, bits) {` |
| 762 | fn | isUnsafeIpv4 | (private) | `function isUnsafeIpv4(address) {` |
| 785 | fn | ipv4FromHextets | (private) | `function ipv4FromHextets(high, low) {` |
| 789 | fn | ipv4OctetsToHextets | (private) | `function ipv4OctetsToHextets(octets) {` |
| 793 | fn | parseIpv6Parts | (private) | `function parseIpv6Parts(address) {` |
| 807 | fn | parseParts | (private) | `const parseParts = (value) => {` |
| 830 | fn | extractUnsafeEmbeddedIpv4FromIpv6 | (private) | `function extractUnsafeEmbeddedIpv4FromIpv6(addr...` |
| 865 | fn | isUnsafeIpv6 | (private) | `function isUnsafeIpv6(address) {` |
| 884 | fn | isUnsafeIpAddress | (private) | `function isUnsafeIpAddress(address) {` |
| 896 | fn | isBlockedPackageHostname | (private) | `function isBlockedPackageHostname(hostname) {` |
| 907 | fn | packageUrlPort | (private) | `function packageUrlPort(parsed) {` |
| 911 | fn | toUniqueNormalizedHostList | (private) | `function toUniqueNormalizedHostList(value, fiel...` |
| 918 | fn | toTrustedPorts | (private) | `function toTrustedPorts(value, sourceId) {` |
| 930 | fn | parseTrustedPort | (private) | `function parseTrustedPort(value) {` |
| 940 | fn | pathnameMatchesTrustedPrefix | (private) | `function pathnameMatchesTrustedPrefix(pathname,...` |
| 948 | fn | toPathPrefixes | (private) | `function toPathPrefixes(value, sourceId) {` |
| 962 | fn | normalizeTrustedPackageSource | (private) | `function normalizeTrustedPackageSource(id, raw) {` |
| 994 | fn | loadTrustedPackageSource | pub | `export async function loadTrustedPackageSource(...` |
| 1020 | fn | validateTrustedPackageDownloadUrl | (private) | `function validateTrustedPackageDownloadUrl(pars...` |
| 1055 | fn | createTrustedPackageAuthHeaders | (private) | `function createTrustedPackageAuthHeaders(truste...` |
| 1071 | fn | validatePackageDownloadUrl | (private) | `function validatePackageDownloadUrl(parsed) {` |
| 1088 | fn | defaultLookupHost | (private) | `async function defaultLookupHost(hostname) {` |
| 1092 | fn | normalizeLookupResults | (private) | `function normalizeLookupResults(results) {` |
| 1099 | fn | createPinnedLookup | (private) | `function createPinnedLookup(hostname, addresses) {` |
| 1132 | fn | resolvePackageDownloadAddresses | (private) | `async function resolvePackageDownloadAddresses(...` |
| 1157 | fn | responseStatus | (private) | `function responseStatus(response) {` |
| 1161 | fn | responseOk | (private) | `function responseOk(response) {` |
| 1166 | fn | responseHeader | (private) | `function responseHeader(response, name) {` |
| 1170 | fn | createPackageDownloadTimeoutError | (private) | `function createPackageDownloadTimeoutError(pars...` |
| 1179 | fn | closeResponseBody | (private) | `async function closeResponseBody(body) {` |
| 1192 | fn | openFetchPackageDownloadResponse | (private) | `async function openFetchPackageDownloadResponse...` |
| 1226 | fn | openHttpsPackageDownloadResponse | (private) | `async function openHttpsPackageDownloadResponse...` |
| 1283 | fn | openPackageDownloadResponse | (private) | `async function openPackageDownloadResponse(url,...` |
| 1377 | fn | downloadUrl | pub | `export async function downloadUrl(url, target, ...` |
| 1422 | fn | readPackageJson | (private) | `async function readPackageJson(tarball) {` |
| 1431 | fn | readPackageBuildSourceSha | pub | `export async function readPackageBuildSourceSha...` |
| 1446 | fn | appendGithubOutputs | (private) | `async function appendGithubOutputs(file, output...` |
| 1456 | fn | resolveCandidate | (private) | `async function resolveCandidate(options) {` |
| 1609 | fn | main | pub | `export async function main(argv = process.argv....` |
| 1632 | fn | toLintErrorObject | (private) | `function toLintErrorObject(value, fallbackMessa...` |

## Public API

### `parseArgs`

```
export function parseArgs(argv) {
```

**Line:** 85 | **Kind:** fn

### `validateOpenClawPackageSpec`

```
export function validateOpenClawPackageSpec(spec) {
```

**Line:** 176 | **Kind:** fn

### `resolveNpmPackageCandidatePackRunner`

```
export function resolveNpmPackageCandidatePackRunner(packageSpec, outputDir, params = {}) {
```

**Line:** 184 | **Kind:** fn

### `signalChildProcessTree`

```
export function signalChildProcessTree(
```

**Line:** 341 | **Kind:** fn

### `readArtifactPackageCandidateMetadata`

```
export async function readArtifactPackageCandidateMetadata(dir) {
```

**Line:** 510 | **Kind:** fn

### `loadTrustedPackageSource`

```
export async function loadTrustedPackageSource(id, policyPath = TRUSTED_PACKAGE_SOURCE_POLICY) {
```

**Line:** 994 | **Kind:** fn

### `downloadUrl`

```
export async function downloadUrl(url, target, options = {}) {
```

**Line:** 1377 | **Kind:** fn

### `readPackageBuildSourceSha`

```
export async function readPackageBuildSourceSha(tarball) {
```

**Line:** 1431 | **Kind:** fn

### `main`

```
export async function main(argv = process.argv.slice(2)) {
```

**Line:** 1609 | **Kind:** fn
