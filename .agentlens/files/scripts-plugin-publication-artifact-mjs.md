# scripts/plugin-publication-artifact.mjs

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1293
- **Language:** JavaScript
- **Symbols:** 41
- **Public symbols:** 5

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 82 | fn | sha256 | (private) | `function sha256(bytes) {` |
| 86 | fn | npmIntegrity | (private) | `function npmIntegrity(bytes) {` |
| 90 | fn | npmShasum | (private) | `function npmShasum(bytes) {` |
| 94 | fn | compareCodeUnits | (private) | `function compareCodeUnits(left, right) {` |
| 98 | fn | assertString | (private) | `function assertString(value, label) {` |
| 105 | fn | assertPositiveInteger | (private) | `function assertPositiveInteger(value, label) {` |
| 112 | fn | assertBooleanString | (private) | `function assertBooleanString(value, label) {` |
| 122 | fn | hasControlCharacters | (private) | `function hasControlCharacters(value) {` |
| 132 | fn | normalizeManualOverrideReason | (private) | `function normalizeManualOverrideReason(value) {` |
| 145 | fn | assertSafePackageDir | (private) | `function assertSafePackageDir(value) {` |
| 153 | fn | assertSafeArtifactName | (private) | `function assertSafeArtifactName(value) {` |
| 161 | fn | assertSafeArchivePath | (private) | `function assertSafeArchivePath(value, label) {` |
| 183 | fn | normalizePublicationReason | (private) | `function normalizePublicationReason(value) {` |
| 193 | fn | normalizePublisherPolicy | (private) | `function normalizePublisherPolicy(value) {` |
| 216 | fn | boundedTarLimit | (private) | `function boundedTarLimit(value, fallback, label) {` |
| 226 | fn | normalizeTarInspectionOptions | (private) | `function normalizeTarInspectionOptions(options ...` |
| 267 | fn | decodeTarString | (private) | `function decodeTarString(bytes, label = "tar st...` |
| 280 | fn | decodeConsumerTarPathField | (private) | `function decodeConsumerTarPathField(bytes, labe...` |
| 289 | fn | normalizeConsumerTarPath | (private) | `function normalizeConsumerTarPath(value, option...` |
| 306 | fn | parseCanonicalTarNumber | (private) | `function parseCanonicalTarNumber(bytes, label, ...` |
| 331 | fn | verifyTarChecksum | (private) | `function verifyTarChecksum(header) {` |
| 342 | fn | verifyCanonicalTarHeader | (private) | `function verifyCanonicalTarHeader(header) {` |
| 373 | fn | isZeroTarBlock | (private) | `function isZeroTarBlock(bytes) {` |
| 377 | fn | parsePackedJson | (private) | `function parsePackedJson(bytes, label) {` |
| 393 | fn | firstGzipMemberEnd | (private) | `function firstGzipMemberEnd(bytes, maxOutputLen...` |
| 440 | fn | inspectPackageTarballBytes | pub | `export function inspectPackageTarballBytes(inpu...` |
| 628 | fn | validatePluginPackageManifest | pub | `export function validatePluginPackageManifest(p...` |
| 666 | fn | normalizePublicationParams | (private) | `function normalizePublicationParams(params) {` |
| 784 | fn | buildManifest | (private) | `function buildManifest(params, tarballName, tar...` |
| 830 | fn | tarInspectionOptionsForRoute | (private) | `function tarInspectionOptionsForRoute(route) {` |
| 834 | fn | normalizeExpectedInventory | (private) | `function normalizeExpectedInventory(value) {` |
| 888 | fn | canonicalManifestText | (private) | `function canonicalManifestText(manifest) {` |
| 892 | fn | createFreshOutputDirectory | (private) | `function createFreshOutputDirectory(path, label) {` |
| 908 | fn | createPluginPublicationArtifact | pub | `export function createPluginPublicationArtifact...` |
| 943 | fn | parseBoundedJsonFile | (private) | `function parseBoundedJsonFile(path, label, maxB...` |
| 966 | fn | inspectPluginPublicationArtifactZip | (private) | `function inspectPluginPublicationArtifactZip(zi...` |
| 978 | fn | verifyPluginPublicationArtifact | pub | `export function verifyPluginPublicationArtifact...` |
| 1161 | fn | parseCliArgs | (private) | `function parseCliArgs(argv) {` |
| 1184 | fn | commonCliParams | (private) | `function commonCliParams(values) {` |
| 1214 | fn | appendGithubOutput | (private) | `function appendGithubOutput(path, values) {` |
| 1219 | fn | main | pub | `export function main(argv = process.argv.slice(...` |

## Public API

### `inspectPackageTarballBytes`

```
export function inspectPackageTarballBytes(inputBytes, options = {}) {
```

**Line:** 440 | **Kind:** fn

### `validatePluginPackageManifest`

```
export function validatePluginPackageManifest(params, packageManifest) {
```

**Line:** 628 | **Kind:** fn

### `createPluginPublicationArtifact`

```
export function createPluginPublicationArtifact(params) {
```

**Line:** 908 | **Kind:** fn

### `verifyPluginPublicationArtifact`

```
export function verifyPluginPublicationArtifact(params) {
```

**Line:** 978 | **Kind:** fn

### `main`

```
export function main(argv = process.argv.slice(2)) {
```

**Line:** 1219 | **Kind:** fn
