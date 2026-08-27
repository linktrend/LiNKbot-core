# scripts/e2e/lib/plugins/assertions.mjs

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1047
- **Language:** JavaScript
- **Symbols:** 54
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 16 | fn | readJson | (private) | `const readJson = (file) => JSON.parse(fs.readFi...` |
| 17 | fn | scratchFile | (private) | `const scratchFile = (name) => path.join(scratch...` |
| 21 | fn | readClawHubPreflightLimits | (private) | `function readClawHubPreflightLimits() {` |
| 31 | fn | createTimeoutError | (private) | `function createTimeoutError(label, timeoutMs) {` |
| 37 | fn | withTimeout | (private) | `async function withTimeout(label, timeoutMs, ru...` |
| 57 | fn | resolveHomePath | (private) | `function resolveHomePath(value) {` |
| 67 | fn | comparablePath | (private) | `function comparablePath(value) {` |
| 76 | fn | pathsEqual | (private) | `function pathsEqual(left, right) {` |
| 80 | fn | fileContainsText | (private) | `function fileContainsText(file, needle) {` |
| 114 | fn | getInstallRecords | (private) | `function getInstallRecords() {` |
| 128 | fn | openClawConfigPath | (private) | `function openClawConfigPath() {` |
| 132 | fn | readOpenClawConfig | (private) | `function readOpenClawConfig() {` |
| 137 | fn | readRequiredOpenClawConfig | (private) | `function readRequiredOpenClawConfig() {` |
| 147 | fn | assertPluginRemoved | (private) | `function assertPluginRemoved(params) {` |
| 170 | fn | rememberPluginInstallPath | (private) | `function rememberPluginInstallPath(params) {` |
| 194 | fn | assertManagedInstallRemoved | (private) | `function assertManagedInstallRemoved(params) {` |
| 215 | fn | recordFixturePluginTrust | (private) | `function recordFixturePluginTrust() {` |
| 241 | fn | assertDemoPlugin | (private) | `function assertDemoPlugin() {` |
| 252 | fn | assertIncludes | (private) | `const assertIncludes = (list, value, label) => {` |
| 272 | fn | assertSimplePlugin | (private) | `function assertSimplePlugin(jsonFile, inspectFi...` |
| 287 | fn | assertTextFileIncludes | (private) | `function assertTextFileIncludes(file, expectedS...` |
| 297 | fn | assertUpdateOutput | (private) | `function assertUpdateOutput(logFile, expectedSn...` |
| 301 | fn | assertClaudeBundleDisabled | (private) | `function assertClaudeBundleDisabled() {` |
| 312 | fn | assertClaudeBundleInspect | (private) | `function assertClaudeBundleInspect() {` |
| 324 | fn | assertSlashInstall | (private) | `function assertSlashInstall() {` |
| 337 | fn | parseClawHubPackageName | (private) | `function parseClawHubPackageName(rawSpec) {` |
| 344 | fn | assertMarketplaceList | (private) | `function assertMarketplaceList() {` |
| 355 | fn | assertMarketplaceInstalled | (private) | `function assertMarketplaceInstalled() {` |
| 359 | fn | getPlugin | (private) | `const getPlugin = (id) => {` |
| 386 | fn | assertMarketplaceRecords | (private) | `function assertMarketplaceRecords() {` |
| 409 | fn | assertPluginTgz | (private) | `function assertPluginTgz() {` |
| 423 | fn | assertPluginTgzRemoved | (private) | `function assertPluginTgzRemoved() {` |
| 431 | fn | assertPluginDir | (private) | `function assertPluginDir() {` |
| 448 | fn | assertPluginDirRemoved | (private) | `function assertPluginDirRemoved() {` |
| 457 | fn | assertGitPlugin | (private) | `function assertGitPlugin() {` |
| 520 | fn | assertGitPluginRemoved | (private) | `function assertGitPluginRemoved() {` |
| 539 | fn | assertRealPathInside | (private) | `function assertRealPathInside(parentPath, child...` |
| 550 | fn | assertClawHubExternalInstallContract | (private) | `function assertClawHubExternalInstallContract(i...` |
| 570 | fn | assertClawHubArtifactMetadata | (private) | `function assertClawHubArtifactMetadata(record, ...` |
| 593 | fn | assertPluginDirDeps | (private) | `function assertPluginDirDeps() {` |
| 630 | fn | assertPluginDirDepsRemoved | (private) | `function assertPluginDirDepsRemoved() {` |
| 639 | fn | assertLocalPathUpdateSkipped | (private) | `function assertLocalPathUpdateSkipped() {` |
| 646 | fn | assertNpmPlugin | (private) | `function assertNpmPlugin() {` |
| 696 | fn | assertNpmPluginUpdateUnchanged | (private) | `function assertNpmPluginUpdateUnchanged() {` |
| 704 | fn | assertPluginFile | (private) | `function assertPluginFile() {` |
| 721 | fn | assertPluginFileRemoved | (private) | `function assertPluginFileRemoved() {` |
| 730 | fn | assertNpmPluginRemoved | (private) | `function assertNpmPluginRemoved() {` |
| 749 | fn | assertInvalidOpenClawExtensionsRejected | (private) | `function assertInvalidOpenClawExtensionsRejecte...` |
| 775 | fn | assertMarketplaceUpdated | (private) | `function assertMarketplaceUpdated() {` |
| 790 | fn | assertGitPluginUpdated | (private) | `function assertGitPluginUpdated() {` |
| 834 | fn | assertClawHubPreflight | (private) | `async function assertClawHubPreflight() {` |
| 902 | fn | assertClawHubInstalled | (private) | `function assertClawHubInstalled() {` |
| 962 | fn | assertClawHubRemoved | (private) | `function assertClawHubRemoved() {` |
| 1002 | fn | assertClawHubUpdated | (private) | `function assertClawHubUpdated() {` |
