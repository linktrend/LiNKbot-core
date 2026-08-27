# src/plugins/install.npm-spec.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 3613
- **Language:** TypeScript
- **Symbols:** 26
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 56 | fn | successfulSpawn | (private) | `function successfulSpawn(stdout = "") {` |
| 67 | fn | failedSpawn | (private) | `function failedSpawn(stderr: string, stdout = "...` |
| 78 | fn | npmViewArgv | (private) | `function npmViewArgv(spec: string): string[] {` |
| 92 | fn | npmViewVersionsArgv | (private) | `function npmViewVersionsArgv(spec: string): str...` |
| 96 | fn | npmPackArchiveMetadataArgv | (private) | `function npmPackArchiveMetadataArgv(archivePath...` |
| 100 | fn | commandKey | (private) | `function commandKey(argv: readonly string[]): s...` |
| 104 | fn | resolveManagedFileDependency | (private) | `function resolveManagedFileDependency(npmRoot: ...` |
| 112 | fn | isNpmInstallCommand | (private) | `function isNpmInstallCommand(argv: unknown): ar...` |
| 116 | fn | isNpmPeerPlannerInstallCommand | (private) | `function isNpmPeerPlannerInstallCommand(argv: u...` |
| 120 | fn | isManagedNpmInstallCommand | (private) | `function isManagedNpmInstallCommand(argv: unkno...` |
| 124 | fn | managedNpmRootHasDependency | (private) | `function managedNpmRootHasDependency(npmRoot: s...` |
| 131 | fn | expectNpmInstallIntoRoot | (private) | `function expectNpmInstallIntoRoot(params: {` |
| 159 | fn | expectNpmInstallIntoProject | (private) | `function expectNpmInstallIntoProject(params: {` |
| 173 | fn | resolveTestPluginPackageDir | (private) | `function resolveTestPluginPackageDir(npmRoot: s...` |
| 184 | fn | resolveTestPluginGenerationProjectDir | (private) | `function resolveTestPluginGenerationProjectDir(...` |
| 204 | fn | resolveTestPluginGenerationPackageDir | (private) | `function resolveTestPluginGenerationPackageDir(...` |
| 218 | fn | writeInstalledNpmPlugin | (private) | `function writeInstalledNpmPlugin(params: {` |
| 295 | type | MockNpmPackage | (private) | - |
| 322 | fn | writeNpmRootPackageLock | (private) | `function writeNpmRootPackageLock(params: {` |
| 356 | fn | writeMissingCurrentPlatformOptionalPackage | (private) | `function writeMissingCurrentPlatformOptionalPac...` |
| 380 | fn | readTextFileTree | (private) | `function readTextFileTree(dir: string, rootDir ...` |
| 395 | fn | prunePluginLocalOpenClawPeerLinks | (private) | `function prunePluginLocalOpenClawPeerLinks(npmR...` |
| 427 | fn | mockNpmViewAndInstall | (private) | `function mockNpmViewAndInstall(params: MockNpmP...` |
| 431 | fn | mockNpmViewAndInstallMany | (private) | `function mockNpmViewAndInstallMany(packages: Mo...` |
| 1062 | fn | install | (private) | `const install = async (version: string, options...` |
| 1518 | fn | addPeerAfterQuarantine | (private) | `const addPeerAfterQuarantine = () => {` |
