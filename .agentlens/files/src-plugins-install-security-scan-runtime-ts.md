# src/plugins/install-security-scan.runtime.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1307
- **Language:** TypeScript
- **Symbols:** 52
- **Public symbols:** 8

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 30 | type | InstallScanLogger | (private) | - |
| 36 | type | PluginInstallRequestKind | (private) | - |
| 38 | fn | formatInstallPolicyWarning | (private) | `function formatInstallPolicyWarning(finding: In...` |
| 45 | type | InstallScanFinding | (private) | - |
| 54 | type | BuiltinInstallScan | (private) | - |
| 64 | type | PackageExecutableScanMetadata | (private) | - |
| 70 | type | PackageManifest | (private) | - |
| 78 | type | PackageManifestTraversalLimits | (private) | - |
| 84 | type | PackageManifestTraversalResult | (private) | - |
| 90 | type | InstalledPackageScanRoot | (private) | - |
| 95 | type | SkillInstallSpec | (private) | - |
| 111 | type | InstallSecurityScanResult | pub | - |
| 124 | fn | buildBlockedDependencyManifestLabel | (private) | `function buildBlockedDependencyManifestLabel(pa...` |
| 135 | fn | buildBlockedDependencyReason | (private) | `function buildBlockedDependencyReason(params: {` |
| 161 | fn | buildBlockedDependencyDirectoryReason | (private) | `function buildBlockedDependencyDirectoryReason(...` |
| 169 | fn | buildBlockedDependencyFileReason | (private) | `function buildBlockedDependencyFileReason(param...` |
| 177 | fn | pathContainsNodeModulesSegment | (private) | `function pathContainsNodeModulesSegment(relativ...` |
| 184 | fn | isPackageRootOpenClawPeerSymlink | (private) | `function isPackageRootOpenClawPeerSymlink(segme...` |
| 194 | fn | isManagedNpmRootPackagePeerSymlink | (private) | `function isManagedNpmRootPackagePeerSymlink(seg...` |
| 209 | fn | isTrustedOpenClawPeerSymlink | (private) | `function isTrustedOpenClawPeerSymlink(params: {` |
| 221 | fn | resolveTrustedHostOpenClawRootRealPath | (private) | `async function resolveTrustedHostOpenClawRootRe...` |
| 233 | fn | isTrustedHostOpenClawPath | (private) | `function isTrustedHostOpenClawPath(params: {` |
| 243 | fn | inspectNodeModulesSymlinkTarget | (private) | `async function inspectNodeModulesSymlinkTarget(...` |
| 297 | fn | readPositiveIntegerEnv | (private) | `function readPositiveIntegerEnv(name: string, f...` |
| 306 | fn | resolvePackageManifestTraversalLimits | (private) | `function resolvePackageManifestTraversalLimits(...` |
| 323 | fn | isSamePathOrInside | (private) | `function isSamePathOrInside(parentPath: string,...` |
| 327 | fn | getErrnoCode | (private) | `function getErrnoCode(error: unknown): string |...` |
| 335 | fn | isInstallScannableDependencyName | (private) | `function isInstallScannableDependencyName(name:...` |
| 347 | fn | collectManifestRuntimeDependencyNames | (private) | `function collectManifestRuntimeDependencyNames(...` |
| 364 | fn | resolveInstalledPackageScanRoot | (private) | `async function resolveInstalledPackageScanRoot(...` |
| 392 | fn | collectInstalledPackageScanRoots | (private) | `async function collectInstalledPackageScanRoots...` |
| 469 | fn | collectNonOverlappingPackageScanRoots | (private) | `async function collectNonOverlappingPackageScan...` |
| 481 | fn | collectPackageManifestPaths | (private) | `async function collectPackageManifestPaths(para...` |
| 604 | fn | formatPackageScanRelativePath | (private) | `function formatPackageScanRelativePath(params: {` |
| 618 | fn | scanPluginDependencyDenylist | (private) | `async function scanPluginDependencyDenylist(par...` |
| 700 | fn | runBeforeInstallHook | (private) | `async function runBeforeInstallHook(params: {` |
| 773 | fn | formatInstallPolicyOriginForHook | (private) | `function formatInstallPolicyOriginForHook(origi...` |
| 783 | fn | isMutableGitOrigin | (private) | `function isMutableGitOrigin(origin: InstallPoli...` |
| 788 | fn | resolvePolicySource | (private) | `function resolvePolicySource(params: {` |
| 832 | fn | shouldBypassOpenClawInstallFriction | (private) | `function shouldBypassOpenClawInstallFriction(pa...` |
| 851 | fn | runOperatorInstallPolicy | (private) | `async function runOperatorInstallPolicy(params: {` |
| 907 | fn | scanBundleInstallSourceRuntime | pub | `export async function scanBundleInstallSourceRu...` |
| 920 | fn | runPolicy | (private) | `const runPolicy = () =>` |
| 979 | fn | scanPackageInstallSourceRuntime | pub | `export async function scanPackageInstallSourceR...` |
| 997 | fn | runPolicy | (private) | `const runPolicy = () =>` |
| 1069 | fn | scanInstalledPackageDependencyTreeRuntime | pub | `export async function scanInstalledPackageDepen...` |
| 1085 | fn | runPolicy | (private) | `const runPolicy = () =>` |
| 1136 | fn | scanFileInstallSourceRuntime | pub | `export async function scanFileInstallSourceRunt...` |
| 1189 | fn | preflightPluginNpmInstallPolicyRuntime | pub | `export async function preflightPluginNpmInstall...` |
| 1221 | fn | preflightPluginGitInstallPolicyRuntime | pub | `export async function preflightPluginGitInstall...` |
| 1249 | fn | evaluateSkillInstallPolicyRuntime | pub | `export async function evaluateSkillInstallPolic...` |
| 1261 | fn | runPolicy | (private) | `const runPolicy = () =>` |

## Public API

### `scanBundleInstallSourceRuntime`

```
export async function scanBundleInstallSourceRuntime(
```

**Line:** 907 | **Kind:** fn

### `scanPackageInstallSourceRuntime`

```
export async function scanPackageInstallSourceRuntime(
```

**Line:** 979 | **Kind:** fn

### `scanInstalledPackageDependencyTreeRuntime`

```
export async function scanInstalledPackageDependencyTreeRuntime(params: {
```

**Line:** 1069 | **Kind:** fn

### `scanFileInstallSourceRuntime`

```
export async function scanFileInstallSourceRuntime(
```

**Line:** 1136 | **Kind:** fn

### `preflightPluginNpmInstallPolicyRuntime`

```
export async function preflightPluginNpmInstallPolicyRuntime(params: {
```

**Line:** 1189 | **Kind:** fn

### `preflightPluginGitInstallPolicyRuntime`

```
export async function preflightPluginGitInstallPolicyRuntime(params: {
```

**Line:** 1221 | **Kind:** fn

### `evaluateSkillInstallPolicyRuntime`

```
export async function evaluateSkillInstallPolicyRuntime(params: {
```

**Line:** 1249 | **Kind:** fn
