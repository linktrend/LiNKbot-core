# scripts/openclaw-npm-postpublish-verify.ts

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1288
- **Language:** TypeScript
- **Symbols:** 55
- **Public symbols:** 18

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 42 | type | InstalledPackageJson | (private) | - |
| 48 | type | InstalledBundledExtensionPackageJson | (private) | - |
| 53 | type | InstalledBundledExtensionManifestRecord | (private) | - |
| 94 | type | DistJavaScriptFileListResult | (private) | - |
| 98 | type | PublishedInstallScenario | (private) | - |
| 104 | type | OpenClawNpmPostpublishVerifyArgs | (private) | - |
| 114 | fn | openClawNpmPostpublishVerifyUsage | pub | `export function openClawNpmPostpublishVerifyUsa...` |
| 118 | fn | parseOpenClawNpmPostpublishVerifyArgs | pub | `export function parseOpenClawNpmPostpublishVeri...` |
| 139 | fn | buildPublishedInstallScenarios | pub | `export function buildPublishedInstallScenarios(...` |
| 165 | type | NpmRegistryKey | (private) | - |
| 170 | type | NpmRegistrySignature | (private) | - |
| 175 | type | NpmRegistryAttestation | (private) | - |
| 184 | type | NpmProvenanceVerificationPolicy | (private) | - |
| 189 | type | VerifyNpmProvenanceBundle | (private) | - |
| 194 | type | NpmProvenanceStatement | (private) | - |
| 233 | type | FetchRegistryJsonOptions | (private) | - |
| 239 | fn | verifyNpmRegistrySignatures | pub | `export function verifyNpmRegistrySignatures(par...` |
| 283 | fn | resolveNpmProvenanceVerificationPolicy | (private) | `function resolveNpmProvenanceVerificationPolicy(` |
| 351 | fn | verifySigstoreNpmProvenanceBundle | (private) | `async function verifySigstoreNpmProvenanceBundle(` |
| 359 | fn | verifyNpmProvenanceAttestation | pub | `export async function verifyNpmProvenanceAttest...` |
| 436 | fn | collectInstalledPackageErrors | pub | `export function collectInstalledPackageErrors(p...` |
| 466 | fn | collectInstalledAlwaysAllowedRuntimeFacadeErrors | pub | `export function collectInstalledAlwaysAllowedRu...` |
| 485 | fn | collectInstalledBundledExtensionIds | (private) | `function collectInstalledBundledExtensionIds(pa...` |
| 502 | fn | collectInstalledBundledRuntimeSidecarPaths | pub | `export function collectInstalledBundledRuntimeS...` |
| 513 | fn | collectInstalledBundledExtensionManifestErrors | pub | `export function collectInstalledBundledExtensio...` |
| 517 | fn | normalizeInstalledBinaryVersion | pub | `export function normalizeInstalledBinaryVersion...` |
| 523 | fn | listDistJavaScriptFiles | (private) | `function listDistJavaScriptFiles(` |
| 578 | fn | formatInstalledDistFileScanLimitError | (private) | `function formatInstalledDistFileScanLimitError(...` |
| 582 | fn | collectInstalledContextEngineRuntimeErrors | pub | `export function collectInstalledContextEngineRu...` |
| 603 | fn | resolveInstalledDistRelativeImport | (private) | `function resolveInstalledDistRelativeImport(par...` |
| 639 | fn | collectInstalledPluginSdkZodArtifactErrors | pub | `export function collectInstalledPluginSdkZodArt...` |
| 694 | fn | collectInstalledPluginSdkDeclarationErrors | (private) | `function collectInstalledPluginSdkDeclarationEr...` |
| 722 | fn | listInstalledRootDistJavaScriptFiles | (private) | `function listInstalledRootDistJavaScriptFiles(p...` |
| 730 | type | ParsedImportSpecifiersResult | (private) | - |
| 734 | fn | extractLiteralSpecifier | (private) | `function extractLiteralSpecifier(node: unknown)...` |
| 745 | fn | extractJavaScriptImportSpecifiers | (private) | `function extractJavaScriptImportSpecifiers(sour...` |
| 807 | fn | collectInstalledRootDependencyManifestErrors | pub | `export function collectInstalledRootDependencyM...` |
| 881 | fn | collectBundledExtensionRuntimeDependencyOwners | (private) | `function collectBundledExtensionRuntimeDependen...` |
| 896 | fn | isBundledExtensionOwnedRuntimeImport | (private) | `function isBundledExtensionOwnedRuntimeImport(p...` |
| 910 | fn | resolveInstalledBinaryPath | pub | `export function resolveInstalledBinaryPath(pref...` |
| 916 | fn | resolveInstalledBinaryCommandInvocation | pub | `export function resolveInstalledBinaryCommandIn...` |
| 941 | fn | collectExpectedBundledExtensionPackageIds | (private) | `function collectExpectedBundledExtensionPackage...` |
| 952 | fn | readBundledExtensionPackageJsons | (private) | `function readBundledExtensionPackageJsons(packa...` |
| 1016 | fn | npmExec | (private) | `function npmExec(args: string[], cwd: string): ...` |
| 1027 | fn | resolveGlobalRoot | (private) | `function resolveGlobalRoot(prefixDir: string, c...` |
| 1031 | fn | buildPublishedInstallCommandArgs | pub | `export function buildPublishedInstallCommandArg...` |
| 1035 | fn | installSpec | (private) | `function installSpec(prefixDir: string, spec: s...` |
| 1039 | fn | fetchRegistryJson | pub | `export async function fetchRegistryJson(` |
| 1083 | fn | isRetryableRegistryProvenanceError | (private) | `function isRetryableRegistryProvenanceError(err...` |
| 1094 | fn | retryNpmRegistryProvenanceRead | pub | `export async function retryNpmRegistryProvenanc...` |
| 1125 | fn | verifyPublishedRegistryProvenanceOnce | (private) | `async function verifyPublishedRegistryProvenanc...` |
| 1211 | fn | verifyPublishedRegistryProvenance | (private) | `async function verifyPublishedRegistryProvenanc...` |
| 1215 | fn | readInstalledBinaryVersion | (private) | `function readInstalledBinaryVersion(prefixDir: ...` |
| 1220 | fn | verifyScenario | (private) | `function verifyScenario(version: string, scenar...` |
| 1261 | fn | main | (private) | `async function main(argv = process.argv.slice(2...` |

## Public API

### `openClawNpmPostpublishVerifyUsage`

```
export function openClawNpmPostpublishVerifyUsage(): string {
```

**Line:** 114 | **Kind:** fn

### `parseOpenClawNpmPostpublishVerifyArgs`

```
export function parseOpenClawNpmPostpublishVerifyArgs(
```

**Line:** 118 | **Kind:** fn

### `buildPublishedInstallScenarios`

```
export function buildPublishedInstallScenarios(version: string): PublishedInstallScenario[] {
```

**Line:** 139 | **Kind:** fn

### `verifyNpmRegistrySignatures`

```
export function verifyNpmRegistrySignatures(params: {
```

**Line:** 239 | **Kind:** fn

### `verifyNpmProvenanceAttestation`

```
export async function verifyNpmProvenanceAttestation(params: {
```

**Line:** 359 | **Kind:** fn

### `collectInstalledPackageErrors`

```
export function collectInstalledPackageErrors(params: {
```

**Line:** 436 | **Kind:** fn

### `collectInstalledAlwaysAllowedRuntimeFacadeErrors`

```
export function collectInstalledAlwaysAllowedRuntimeFacadeErrors(packageRoot: string): string[] {
```

**Line:** 466 | **Kind:** fn

### `collectInstalledBundledRuntimeSidecarPaths`

```
export function collectInstalledBundledRuntimeSidecarPaths(packageRoot: string): string[] {
```

**Line:** 502 | **Kind:** fn

### `collectInstalledBundledExtensionManifestErrors`

```
export function collectInstalledBundledExtensionManifestErrors(packageRoot: string): string[] {
```

**Line:** 513 | **Kind:** fn

### `normalizeInstalledBinaryVersion`

```
export function normalizeInstalledBinaryVersion(output: string): string {
```

**Line:** 517 | **Kind:** fn

### `collectInstalledContextEngineRuntimeErrors`

```
export function collectInstalledContextEngineRuntimeErrors(packageRoot: string): string[] {
```

**Line:** 582 | **Kind:** fn

### `collectInstalledPluginSdkZodArtifactErrors`

```
export function collectInstalledPluginSdkZodArtifactErrors(packageRoot: string): string[] {
```

**Line:** 639 | **Kind:** fn

### `collectInstalledRootDependencyManifestErrors`

```
export function collectInstalledRootDependencyManifestErrors(packageRoot: string): string[] {
```

**Line:** 807 | **Kind:** fn

### `resolveInstalledBinaryPath`

```
export function resolveInstalledBinaryPath(prefixDir: string, platform = process.platform): string {
```

**Line:** 910 | **Kind:** fn

### `resolveInstalledBinaryCommandInvocation`

```
export function resolveInstalledBinaryCommandInvocation(
```

**Line:** 916 | **Kind:** fn

### `buildPublishedInstallCommandArgs`

```
export function buildPublishedInstallCommandArgs(prefixDir: string, spec: string): string[] {
```

**Line:** 1031 | **Kind:** fn

### `fetchRegistryJson`

```
export async function fetchRegistryJson(
```

**Line:** 1039 | **Kind:** fn

### `retryNpmRegistryProvenanceRead`

```
export async function retryNpmRegistryProvenanceRead<T>(
```

**Line:** 1094 | **Kind:** fn
