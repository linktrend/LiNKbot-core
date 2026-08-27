# src/plugins/manifest-registry.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 3229
- **Language:** TypeScript
- **Symbols:** 32
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 21 | fn | chmodSafeDir | (private) | `function chmodSafeDir(dir: string) {` |
| 28 | fn | mkdirSafe | (private) | `function mkdirSafe(dir: string) {` |
| 33 | fn | makeTempDir | (private) | `function makeTempDir() {` |
| 37 | fn | makeOpenClawDevSourceRoot | (private) | `function makeOpenClawDevSourceRoot() {` |
| 45 | fn | writeManifest | (private) | `function writeManifest(dir: string, manifest: R...` |
| 49 | fn | writeTextFile | (private) | `function writeTextFile(rootDir: string, relativ...` |
| 54 | fn | setupBundleFixture | (private) | `function setupBundleFixture(params: {` |
| 72 | fn | createPluginCandidate | (private) | `function createPluginCandidate(params: {` |
| 102 | fn | createMsteamsClawHubInstallRecord | (private) | `function createMsteamsClawHubInstallRecord(` |
| 117 | fn | resolveMsteamsClawHubTrust | (private) | `function resolveMsteamsClawHubTrust(overrides: ...` |
| 136 | fn | resolveDiffsNpmTrust | (private) | `function resolveDiffsNpmTrust(overrides: Partia...` |
| 163 | fn | loadRegistry | (private) | `function loadRegistry(candidates: PluginCandida...` |
| 169 | fn | hermeticEnv | (private) | `function hermeticEnv(overrides: NodeJS.ProcessE...` |
| 178 | fn | countDuplicateWarnings | (private) | `function countDuplicateWarnings(registry: Retur...` |
| 185 | fn | hasPluginIdMismatchWarning | (private) | `function hasPluginIdMismatchWarning(` |
| 193 | fn | expectRegistryDiagnosticContains | (private) | `function expectRegistryDiagnosticContains(` |
| 200 | fn | expectNoRegistryDiagnosticContains | (private) | `function expectNoRegistryDiagnosticContains(` |
| 207 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 215 | fn | expectRecordFields | (private) | `function expectRecordFields(` |
| 227 | fn | expectArrayIncludesAll | (private) | `function expectArrayIncludesAll(value: unknown,...` |
| 234 | fn | expectDiagnosticFields | (private) | `function expectDiagnosticFields(` |
| 258 | fn | prepareLinkedManifestFixture | (private) | `function prepareLinkedManifestFixture(params: {...` |
| 291 | fn | loadSingleCandidateRegistry | (private) | `function loadSingleCandidateRegistry(params: {` |
| 305 | fn | loadRegistryForMinHostVersionCase | (private) | `function loadRegistryForMinHostVersionCase(para...` |
| 329 | fn | loadRegistryForPluginApiCase | (private) | `function loadRegistryForPluginApiCase(params: {` |
| 358 | fn | hasUnsafeManifestDiagnostic | (private) | `function hasUnsafeManifestDiagnostic(registry: ...` |
| 362 | fn | expectUnsafeWorkspaceManifestRejected | (private) | `function expectUnsafeWorkspaceManifestRejected(...` |
| 379 | fn | createDuplicateCandidateRegistry | (private) | `function createDuplicateCandidateRegistry(param...` |
| 405 | fn | createManifestPluginRoot | (private) | `function createManifestPluginRoot(params: {` |
| 425 | fn | loadBundleRegistry | (private) | `function loadBundleRegistry(params: {` |
| 443 | fn | expectPluginRoot | (private) | `function expectPluginRoot(` |
| 454 | fn | expectCachedPluginRoot | (private) | `function expectCachedPluginRoot(params: {` |
