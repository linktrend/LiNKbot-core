# src/plugins/discovery.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2522
- **Language:** TypeScript
- **Symbols:** 35
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 27 | fn | makeTempDir | (private) | `function makeTempDir() {` |
| 33 | fn | countMatching | (private) | `function countMatching<T>(items: readonly T[], ...` |
| 43 | fn | withOpenClawPackageArgv | (private) | `function withOpenClawPackageArgv<T>(packageRoot...` |
| 55 | fn | symlinkDirectory | (private) | `function symlinkDirectory(target: string, linkP...` |
| 59 | fn | canCreateDirectorySymlinks | (private) | `const canCreateDirectorySymlinks = (() => {` |
| 74 | fn | normalizePathForAssertion | (private) | `function normalizePathForAssertion(value: strin...` |
| 81 | fn | hasDiagnosticSourceSuffix | (private) | `function hasDiagnosticSourceSuffix(` |
| 91 | fn | buildDiscoveryEnv | (private) | `function buildDiscoveryEnv(stateDir: string): N...` |
| 102 | fn | buildDiscoveryEnvWithOverrides | (private) | `function buildDiscoveryEnvWithOverrides(` |
| 116 | fn | buildBundledDiscoveryEnv | (private) | `function buildBundledDiscoveryEnv(stateDir: str...` |
| 124 | fn | discoverWithStateDir | (private) | `async function discoverWithStateDir(` |
| 131 | fn | discoverWithEnv | (private) | `function discoverWithEnv(params: Parameters<typ...` |
| 135 | fn | writePluginPackageManifest | (private) | `function writePluginPackageManifest(params: {` |
| 160 | fn | writePluginManifest | (private) | `function writePluginManifest(params: {` |
| 176 | fn | writePluginEntry | (private) | `function writePluginEntry(filePath: string) {` |
| 180 | fn | writeStandalonePlugin | (private) | `function writeStandalonePlugin(filePath: string...` |
| 185 | fn | mockLinuxMountInfo | (private) | `function mockLinuxMountInfo(mountPoints: readon...` |
| 199 | fn | createPackagePlugin | (private) | `function createPackagePlugin(params: {` |
| 218 | fn | createPackagePluginWithEntry | (private) | `function createPackagePluginWithEntry(params: {` |
| 246 | fn | createBundleRoot | (private) | `function createBundleRoot(bundleDir: string, ma...` |
| 255 | fn | expectCandidateIds | (private) | `function expectCandidateIds(` |
| 268 | fn | findCandidateById | (private) | `function findCandidateById<T extends { idHint?:...` |
| 272 | fn | requireCandidateById | (private) | `function requireCandidateById<T extends { idHin...` |
| 280 | fn | expectCandidateSource | (private) | `function expectCandidateSource(` |
| 286 | fn | normalizeSource | (private) | `const normalizeSource = (value: string | undefi...` |
| 291 | fn | expectEscapesPackageDiagnostic | (private) | `function expectEscapesPackageDiagnostic(diagnos...` |
| 297 | fn | expectEscapesPackageDiagnosticForPlugin | (private) | `function expectEscapesPackageDiagnosticForPlugin(` |
| 308 | fn | expectDiagnostic | (private) | `function expectDiagnostic(params: {` |
| 330 | fn | expectNoDiagnostic | (private) | `function expectNoDiagnostic(params: {` |
| 349 | fn | expectCandidateFields | (private) | `function expectCandidateFields(` |
| 370 | fn | expectCandidatePresence | (private) | `function expectCandidatePresence(` |
| 383 | fn | expectCandidateOrder | (private) | `function expectCandidateOrder(` |
| 390 | fn | expectBundleCandidateMatch | (private) | `function expectBundleCandidateMatch(params: {` |
| 417 | fn | expectRejectedPackageExtensionEntry | (private) | `async function expectRejectedPackageExtensionEn...` |
| 2275 | fn | actualUid | (private) | `const actualUid = (process as NodeJS.Process & ...` |
