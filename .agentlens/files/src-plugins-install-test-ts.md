# src/plugins/install.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 4153
- **Language:** TypeScript
- **Symbols:** 42
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 39 | type | InstallPluginFromDirParams | (private) | - |
| 43 | fn | installPluginFromDir | (private) | `async function installPluginFromDir({ dirPath, ...` |
| 156 | fn | ensureSuiteFixtureRoot | (private) | `function ensureSuiteFixtureRoot() {` |
| 165 | fn | getArchiveFixturePath | (private) | `function getArchiveFixturePath(params: {` |
| 180 | fn | readZipperArchiveBuffer | (private) | `function readZipperArchiveBuffer(): Buffer {` |
| 186 | fn | expectPluginFiles | (private) | `function expectPluginFiles(result: { targetDir:...` |
| 194 | fn | captureSecurityEvents | (private) | `function captureSecurityEvents(): {` |
| 207 | fn | expectSuccessfulArchiveInstall | (private) | `function expectSuccessfulArchiveInstall(params: {` |
| 220 | fn | setupPluginInstallDirs | (private) | `function setupPluginInstallDirs() {` |
| 229 | fn | writeMinimalPackagePlugin | (private) | `function writeMinimalPackagePlugin(pluginDir: s...` |
| 241 | fn | setupInstallPluginFromDirFixture | (private) | `function setupInstallPluginFromDirFixture(param...` |
| 272 | fn | installFromDirWithWarnings | (private) | `async function installFromDirWithWarnings(param...` |
| 296 | type | CapturedInstallPolicyRequest | (private) | - |
| 304 | fn | writeAllowingInstallPolicyScript | (private) | `function writeAllowingInstallPolicyScript(dir: ...` |
| 328 | fn | writeBlockingInstallPolicyScript | (private) | `function writeBlockingInstallPolicyScript(dir: ...` |
| 365 | fn | writeInstallOnlyBlockingPolicyScript | (private) | `function writeInstallOnlyBlockingPolicyScript(d...` |
| 398 | fn | configWithInstallPolicy | (private) | `function configWithInstallPolicy(scriptPath: st...` |
| 417 | fn | readCapturedInstallPolicyRequests | (private) | `function readCapturedInstallPolicyRequests(logP...` |
| 426 | fn | mockNpmViewMetadata | (private) | `function mockNpmViewMetadata(params: { name: st...` |
| 446 | fn | runActualInstallPolicyCommandIfNeeded | (private) | `async function runActualInstallPolicyCommandIfN...` |
| 459 | fn | countMockedCommands | (private) | `function countMockedCommands(executable: string...` |
| 464 | fn | mockSuccessfulManagedNpmInstall | (private) | `function mockSuccessfulManagedNpmInstall(params...` |
| 516 | fn | installFromArchiveWithWarnings | (private) | `async function installFromArchiveWithWarnings(p...` |
| 538 | fn | setupManifestInstallFixture | (private) | `function setupManifestInstallFixture(params: { ...` |
| 563 | fn | setPluginMinHostVersion | (private) | `function setPluginMinHostVersion(pluginDir: str...` |
| 578 | fn | setPluginPackageCompatibility | (private) | `function setPluginPackageCompatibility(pluginDi...` |
| 593 | fn | expectFailedInstallResult | (private) | `function expectFailedInstallResult<` |
| 610 | fn | expectWarningIncludes | (private) | `function expectWarningIncludes(warnings: readon...` |
| 614 | fn | expectWarningExcludes | (private) | `function expectWarningExcludes(warnings: readon...` |
| 618 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 625 | fn | firstMockCall | (private) | `function firstMockCall(mock: { mock: { calls: u...` |
| 629 | fn | requireHookPayload | (private) | `function requireHookPayload(handler: ReturnType...` |
| 634 | fn | expectHookRequest | (private) | `function expectHookRequest(` |
| 643 | fn | mockSuccessfulCommandRun | (private) | `function mockSuccessfulCommandRun(run: ReturnTy...` |
| 659 | fn | expectInstalledFiles | (private) | `function expectInstalledFiles(targetDir: string...` |
| 665 | fn | setupManifestlessClaudeInstallFixture | (private) | `function setupManifestlessClaudeInstallFixture() {` |
| 680 | fn | expectArchiveInstallReservedSegmentRejection | (private) | `async function expectArchiveInstallReservedSegm...` |
| 701 | fn | installArchivePackageAndReturnResult | (private) | `async function installArchivePackageAndReturnRe...` |
| 727 | fn | buildDynamicArchiveTemplateKey | (private) | `function buildDynamicArchiveTemplateKey(params: {` |
| 745 | fn | ensureDynamicArchiveTemplate | (private) | `async function ensureDynamicArchiveTemplate(par...` |
| 3036 | fn | expectInstalledWithPluginId | (private) | `function expectInstalledWithPluginId(` |
| 3998 | fn | writePluginWithPeerDeps | (private) | `function writePluginWithPeerDeps(` |
