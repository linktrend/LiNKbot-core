# scripts/release-check.ts

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1392
- **Language:** TypeScript
- **Symbols:** 48
- **Public symbols:** 21

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 61 | type | ReleaseCheckExecOptions | (private) | - |
| 71 | type | PackFile | (private) | - |
| 72 | type | PackResult | (private) | - |
| 73 | type | ReleaseCheckCommandInvocation | (private) | - |
| 204 | fn | positiveEnvInt | (private) | `function positiveEnvInt(name: string, fallback:...` |
| 219 | fn | runReleaseCheckCommand | pub | `export function runReleaseCheckCommand(` |
| 263 | fn | collectSkillShellScriptExecutableErrors | pub | `export function collectSkillShellScriptExecutab...` |
| 304 | fn | collectBundledExtensions | (private) | `function collectBundledExtensions(): BundledExt...` |
| 325 | fn | checkBundledExtensionMetadata | (private) | `function checkBundledExtensionMetadata() {` |
| 349 | fn | checkSkillShellScriptsExecutable | (private) | `function checkSkillShellScriptsExecutable() {` |
| 360 | fn | resolveReleaseNpmCommand | pub | `export function resolveReleaseNpmCommand(` |
| 380 | fn | execNpm | (private) | `function execNpm(` |
| 393 | fn | execPnpm | (private) | `function execPnpm(` |
| 406 | fn | runPackDry | (private) | `function runPackDry(): PackResult[] {` |
| 415 | fn | runPack | (private) | `function runPack(packDestination: string, cwd?:...` |
| 429 | fn | resolvePackedTarballPath | pub | `export function resolvePackedTarballPath(packDe...` |
| 457 | fn | resolveReleaseCheckLocalPackageTarballs | pub | `export function resolveReleaseCheckLocalPackage...` |
| 481 | fn | prepareReleaseCheckLocalPackageTarballs | pub | `export function prepareReleaseCheckLocalPackage...` |
| 500 | fn | createPackedTarballInstallArgs | pub | `export function createPackedTarballInstallArgs(...` |
| 504 | fn | writePackedTarballInstallManifest | pub | `export function writePackedTarballInstallManifest(` |
| 533 | fn | installPackedTarball | (private) | `function installPackedTarball(` |
| 547 | fn | resolvePackedInstalledBinaryPath | pub | `export function resolvePackedInstalledBinaryPath(` |
| 559 | fn | resolvePackedInstalledBinaryCommandInvocation | (private) | `function resolvePackedInstalledBinaryCommandInv...` |
| 573 | fn | createPackedBundledPluginPostinstallEnv | pub | `export function createPackedBundledPluginPostin...` |
| 582 | fn | createPackedCliSmokeEnv | pub | `export function createPackedCliSmokeEnv(` |
| 629 | fn | createPackedCompletionSmokeEnv | pub | `export function createPackedCompletionSmokeEnv(` |
| 642 | fn | runPackedBundledPluginPostinstall | (private) | `function runPackedBundledPluginPostinstall(pack...` |
| 656 | fn | collectPackedInstalledPackageVerificationErrors | pub | `export function collectPackedInstalledPackageVe...` |
| 680 | fn | verifyPackedInstalledPackage | (private) | `function verifyPackedInstalledPackage(params: {` |
| 711 | fn | createPackedPluginSdkTypescriptSmokeProject | pub | `export function createPackedPluginSdkTypescript...` |
| 762 | fn | runPackedPluginSdkTypescriptSmoke | (private) | `function runPackedPluginSdkTypescriptSmoke(` |
| 796 | fn | writePackedBundledPluginActivationConfig | pub | `export function writePackedBundledPluginActivat...` |
| 838 | fn | runPackedBundledPluginActivationSmoke | (private) | `function runPackedBundledPluginActivationSmoke(...` |
| 868 | fn | runPackedTaskRegistryControlRuntimeSmoke | (private) | `function runPackedTaskRegistryControlRuntimeSmo...` |
| 896 | fn | runPackedCliSmoke | (private) | `function runPackedCliSmoke(params: {` |
| 939 | fn | runPackedBundledChannelEntrySmoke | (private) | `function runPackedBundledChannelEntrySmoke(): v...` |
| 1028 | fn | collectMissingPackPaths | pub | `export function collectMissingPackPaths(paths: ...` |
| 1040 | fn | resolveMissingPackBuildHint | pub | `export function resolveMissingPackBuildHint(mis...` |
| 1061 | fn | collectForbiddenPackPaths | pub | `export function collectForbiddenPackPaths(paths...` |
| 1074 | fn | collectForbiddenPackContentPaths | pub | `export function collectForbiddenPackContentPaths(` |
| 1103 | fn | extractTag | (private) | `function extractTag(item: string, tag: string):...` |
| 1109 | fn | collectAppcastSparkleVersionErrors | pub | `export function collectAppcastSparkleVersionErr...` |
| 1177 | fn | checkAppcastSparkleVersions | (private) | `function checkAppcastSparkleVersions() {` |
| 1216 | fn | collectDistPluginSdkExports | (private) | `async function collectDistPluginSdkExports(): P...` |
| 1255 | fn | checkPluginSdkExports | (private) | `async function checkPluginSdkExports() {` |
| 1267 | fn | collectCriticalPluginSdkEntrypointSizeErrors | pub | `export function collectCriticalPluginSdkEntrypo...` |
| 1291 | fn | runCriticalPluginSdkEntrypointImportSmoke | (private) | `function runCriticalPluginSdkEntrypointImportSm...` |
| 1308 | fn | main | (private) | `async function main() {` |

## Public API

### `runReleaseCheckCommand`

```
export function runReleaseCheckCommand(
```

**Line:** 219 | **Kind:** fn

### `collectSkillShellScriptExecutableErrors`

```
export function collectSkillShellScriptExecutableErrors(rootDir = resolve(".")): string[] {
```

**Line:** 263 | **Kind:** fn

### `resolveReleaseNpmCommand`

```
export function resolveReleaseNpmCommand(
```

**Line:** 360 | **Kind:** fn

### `resolvePackedTarballPath`

```
export function resolvePackedTarballPath(packDestination: string, results: PackResult[]): string {
```

**Line:** 429 | **Kind:** fn

### `resolveReleaseCheckLocalPackageTarballs`

```
export function resolveReleaseCheckLocalPackageTarballs(
```

**Line:** 457 | **Kind:** fn

### `prepareReleaseCheckLocalPackageTarballs`

```
export function prepareReleaseCheckLocalPackageTarballs(params: {
```

**Line:** 481 | **Kind:** fn

### `createPackedTarballInstallArgs`

```
export function createPackedTarballInstallArgs(prefixDir: string): string[] {
```

**Line:** 500 | **Kind:** fn

### `writePackedTarballInstallManifest`

```
export function writePackedTarballInstallManifest(
```

**Line:** 504 | **Kind:** fn

### `resolvePackedInstalledBinaryPath`

```
export function resolvePackedInstalledBinaryPath(
```

**Line:** 547 | **Kind:** fn

### `createPackedBundledPluginPostinstallEnv`

```
export function createPackedBundledPluginPostinstallEnv(
```

**Line:** 573 | **Kind:** fn

### `createPackedCliSmokeEnv`

```
export function createPackedCliSmokeEnv(
```

**Line:** 582 | **Kind:** fn

### `createPackedCompletionSmokeEnv`

```
export function createPackedCompletionSmokeEnv(
```

**Line:** 629 | **Kind:** fn

### `collectPackedInstalledPackageVerificationErrors`

```
export function collectPackedInstalledPackageVerificationErrors(params: {
```

**Line:** 656 | **Kind:** fn

### `createPackedPluginSdkTypescriptSmokeProject`

```
export function createPackedPluginSdkTypescriptSmokeProject(params: {
```

**Line:** 711 | **Kind:** fn

### `writePackedBundledPluginActivationConfig`

```
export function writePackedBundledPluginActivationConfig(homeDir: string): void {
```

**Line:** 796 | **Kind:** fn

### `collectMissingPackPaths`

```
export function collectMissingPackPaths(paths: Iterable<string>): string[] {
```

**Line:** 1028 | **Kind:** fn

### `resolveMissingPackBuildHint`

```
export function resolveMissingPackBuildHint(missing: readonly string[]): string | null {
```

**Line:** 1040 | **Kind:** fn

### `collectForbiddenPackPaths`

```
export function collectForbiddenPackPaths(paths: Iterable<string>): string[] {
```

**Line:** 1061 | **Kind:** fn

### `collectForbiddenPackContentPaths`

```
export function collectForbiddenPackContentPaths(
```

**Line:** 1074 | **Kind:** fn

### `collectAppcastSparkleVersionErrors`

```
export function collectAppcastSparkleVersionErrors(xml: string): string[] {
```

**Line:** 1109 | **Kind:** fn

### `collectCriticalPluginSdkEntrypointSizeErrors`

```
export function collectCriticalPluginSdkEntrypointSizeErrors(rootDir = process.cwd()): string[] {
```

**Line:** 1267 | **Kind:** fn
