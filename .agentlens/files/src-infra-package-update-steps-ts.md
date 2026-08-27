# src/infra/package-update-steps.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1213
- **Language:** TypeScript
- **Symbols:** 30
- **Public symbols:** 2

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 42 | type | PackageUpdateStepResult | (private) | - |
| 56 | type | PackageUpdateStepRunner | (private) | - |
| 64 | type | StagedNpmInstall | (private) | - |
| 71 | type | NpmBinShimBackup | (private) | - |
| 88 | fn | resolveCanonicalPath | (private) | `async function resolveCanonicalPath(filePath: s...` |
| 92 | fn | runPnpmPreflightProbe | (private) | `async function runPnpmPreflightProbe(params: {` |
| 144 | fn | validatePnpmIsolatedUpdate | (private) | `async function validatePnpmIsolatedUpdate(param...` |
| 287 | fn | isBlockingPackageUpdateStep | (private) | `function isBlockingPackageUpdateStep(step: Pack...` |
| 291 | fn | isNormalProcessExit | (private) | `function isNormalProcessExit(step: {` |
| 305 | fn | markPackagePostInstallDoctorAdvisory | pub | `export function markPackagePostInstallDoctorAdv...` |
| 341 | fn | removePathBestEffort | (private) | `async function removePathBestEffort(targetPath:...` |
| 355 | fn | readPackageVersionIfPresent | (private) | `async function readPackageVersionIfPresent(pack...` |
| 366 | fn | isUnambiguousNpmPrefixGlobalRoot | (private) | `function isUnambiguousNpmPrefixGlobalRoot(globa...` |
| 382 | fn | resolveStagedNpmTargetLayout | (private) | `function resolveStagedNpmTargetLayout(` |
| 400 | fn | stripPackageAlias | (private) | `function stripPackageAlias(spec: string, packag...` |
| 408 | fn | isHttpGitUrlSpec | (private) | `function isHttpGitUrlSpec(spec: string): boolean {` |
| 425 | fn | isGitHubShorthandSpec | (private) | `function isGitHubShorthandSpec(spec: string): b...` |
| 434 | fn | isNpmGitSourceInstallSpec | (private) | `function isNpmGitSourceInstallSpec(spec: string...` |
| 447 | fn | resolvePnpmInstallSpecFromCwd | (private) | `function resolvePnpmInstallSpecFromCwd(` |
| 456 | fn | restoreAlias | (private) | `const restoreAlias = (target: string) => (hasAl...` |
| 490 | fn | createStagedNpmInstall | (private) | `async function createStagedNpmInstall(` |
| 515 | fn | findPackedTarball | (private) | `async function findPackedTarball(packDir: strin...` |
| 524 | fn | prepareNpmGitSourceInstallSpec | (private) | `async function prepareNpmGitSourceInstallSpec(p...` |
| 606 | fn | prepareStagedNpmInstall | (private) | `async function prepareStagedNpmInstall(` |
| 641 | fn | cleanupStagedNpmInstall | (private) | `async function cleanupStagedNpmInstall(stage: S...` |
| 648 | fn | copyPathEntry | (private) | `async function copyPathEntry(source: string, de...` |
| 667 | fn | replaceNpmBinShims | (private) | `async function replaceNpmBinShims(params: {` |
| 721 | fn | restoreNpmBinShimBackup | (private) | `async function restoreNpmBinShimBackup(backup: ...` |
| 732 | fn | swapStagedNpmInstall | (private) | `async function swapStagedNpmInstall(params: {` |
| 824 | fn | runGlobalPackageUpdateSteps | pub | `export async function runGlobalPackageUpdateSte...` |

## Public API

### `markPackagePostInstallDoctorAdvisory`

```
export function markPackagePostInstallDoctorAdvisory<
```

**Line:** 305 | **Kind:** fn

### `runGlobalPackageUpdateSteps`

```
export async function runGlobalPackageUpdateSteps(params: {
```

**Line:** 824 | **Kind:** fn
