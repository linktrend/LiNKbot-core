# src/plugins/loader.test-harness.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1005
- **Language:** TypeScript
- **Symbols:** 47
- **Public symbols:** 43

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 30 | fn | getEmbeddingProvider | pub | `export const getEmbeddingProvider = (id: string...` |
| 32 | fn | listEmbeddingProviders | pub | `export const listEmbeddingProviders = () =>` |
| 39 | type | GlobalHookRunner | (private) | - |
| 41 | type | PluginStartupTraceDetail | (private) | - |
| 46 | fn | listRegisteredAgentHarnessIdsForTest | pub | `export function listRegisteredAgentHarnessIdsFo...` |
| 50 | fn | countMatching | pub | `export function countMatching<T>(items: readonl...` |
| 60 | fn | expectGlobalHookRunner | pub | `export function expectGlobalHookRunner(` |
| 70 | fn | createDetachedTaskRuntimeStub | pub | `export function createDetachedTaskRuntimeStub(i...` |
| 114 | fn | simplePluginBody | pub | `export function simplePluginBody(id: string) {` |
| 118 | fn | updatePluginManifest | pub | `export function updatePluginManifest(` |
| 127 | fn | memoryPluginBody | pub | `export function memoryPluginBody(id: string) {` |
| 131 | fn | setupBundledDreamingMemoryPlugins | pub | `export function setupBundledDreamingMemoryPlugi...` |
| 189 | fn | writeBundledPlugin | pub | `export function writeBundledPlugin(params: {` |
| 207 | fn | makeOpenClawDevSourceRoot | pub | `export function makeOpenClawDevSourceRoot() {` |
| 215 | fn | writeWorkspacePlugin | pub | `export function writeWorkspacePlugin(params: {` |
| 233 | fn | withStateDir | pub | `export function withStateDir<T>(run: (stateDir:...` |
| 238 | fn | loadBundledMemoryPluginRegistry | pub | `export function loadBundledMemoryPluginRegistry...` |
| 308 | fn | setupBundledTelegramPlugin | pub | `export function setupBundledTelegramPlugin() {` |
| 321 | fn | expectTelegramLoaded | pub | `export function expectTelegramLoaded(registry: ...` |
| 327 | fn | loadRegistryFromSinglePlugin | pub | `export function loadRegistryFromSinglePlugin(pa...` |
| 347 | fn | loadRegistryFromAllowedPlugins | pub | `export function loadRegistryFromAllowedPlugins(` |
| 363 | fn | runRegistryScenarios | pub | `export function runRegistryScenarios<` |
| 371 | fn | runScenarioCases | pub | `export function runScenarioCases<T>(scenarios: ...` |
| 377 | fn | runSinglePluginRegistryScenarios | pub | `export function runSinglePluginRegistryScenarios<` |
| 397 | fn | loadRegistryFromScenarioPlugins | pub | `export function loadRegistryFromScenarioPlugins...` |
| 408 | fn | expectOpenAllowWarnings | pub | `export function expectOpenAllowWarnings(params: {` |
| 424 | fn | expectLoadedPluginProvenance | pub | `export function expectLoadedPluginProvenance(pa...` |
| 447 | fn | expectRegisteredHttpRoute | pub | `export function expectRegisteredHttpRoute(` |
| 468 | fn | expectDuplicateRegistrationResult | pub | `export function expectDuplicateRegistrationResult(` |
| 491 | fn | expectPluginSourcePrecedence | pub | `export function expectPluginSourcePrecedence(` |
| 519 | fn | expectPluginOriginAndStatus | pub | `export function expectPluginOriginAndStatus(par...` |
| 535 | fn | expectRegistryErrorDiagnostic | pub | `export function expectRegistryErrorDiagnostic(p...` |
| 551 | fn | expectDiagnosticContaining | pub | `export function expectDiagnosticContaining(para...` |
| 568 | fn | expectNoDiagnosticContaining | pub | `export function expectNoDiagnosticContaining(pa...` |
| 583 | fn | createWarningLogger | pub | `export function createWarningLogger(warnings: s...` |
| 591 | fn | createErrorLogger | pub | `export function createErrorLogger(errors: strin...` |
| 600 | fn | createEscapingEntryFixture | (private) | `function createEscapingEntryFixture(params: { i...` |
| 621 | fn | resolveLoadedPluginSource | (private) | `function resolveLoadedPluginSource(` |
| 628 | fn | expectCachePartitionByPluginSource | pub | `export function expectCachePartitionByPluginSou...` |
| 647 | fn | expectCacheMissThenHit | pub | `export function expectCacheMissThenHit(params: {` |
| 659 | fn | createSetupEntryChannelPluginFixture | pub | `export function createSetupEntryChannelPluginFi...` |
| 898 | fn | createEnvResolvedPluginFixture | pub | `export function createEnvResolvedPluginFixture(...` |
| 921 | fn | expectEscapingEntryRejected | pub | `export function expectEscapingEntryRejected(par...` |
| 963 | fn | createStartupTraceRecorder | pub | `export function createStartupTraceRecorder(): {` |
| 978 | fn | collectStartupTraceMetrics | pub | `export function collectStartupTraceMetrics(` |
| 993 | fn | globalAfterEach0 | pub | `export const globalAfterEach0 = () => {` |
| 1000 | fn | globalAfterAll1 | pub | `export const globalAfterAll1 = () => {` |

## Public API

### `getEmbeddingProvider`

```
export const getEmbeddingProvider = (id: string) => getRegisteredEmbeddingProvider(id)?.adapter;
```

**Line:** 30 | **Kind:** fn

### `listEmbeddingProviders`

```
export const listEmbeddingProviders = () =>
```

**Line:** 32 | **Kind:** fn

### `listRegisteredAgentHarnessIdsForTest`

```
export function listRegisteredAgentHarnessIdsForTest(): string[] {
```

**Line:** 46 | **Kind:** fn

### `countMatching`

```
export function countMatching<T>(items: readonly T[], predicate: (item: T) => boolean): number {
```

**Line:** 50 | **Kind:** fn

### `expectGlobalHookRunner`

```
export function expectGlobalHookRunner(
```

**Line:** 60 | **Kind:** fn

### `createDetachedTaskRuntimeStub`

```
export function createDetachedTaskRuntimeStub(id: string): DetachedTaskLifecycleRuntime {
```

**Line:** 70 | **Kind:** fn

### `simplePluginBody`

```
export function simplePluginBody(id: string) {
```

**Line:** 114 | **Kind:** fn

### `updatePluginManifest`

```
export function updatePluginManifest(
```

**Line:** 118 | **Kind:** fn

### `memoryPluginBody`

```
export function memoryPluginBody(id: string) {
```

**Line:** 127 | **Kind:** fn

### `setupBundledDreamingMemoryPlugins`

```
export function setupBundledDreamingMemoryPlugins(params?: {
```

**Line:** 131 | **Kind:** fn

### `writeBundledPlugin`

```
export function writeBundledPlugin(params: {
```

**Line:** 189 | **Kind:** fn

### `makeOpenClawDevSourceRoot`

```
export function makeOpenClawDevSourceRoot() {
```

**Line:** 207 | **Kind:** fn

### `writeWorkspacePlugin`

```
export function writeWorkspacePlugin(params: {
```

**Line:** 215 | **Kind:** fn

### `withStateDir`

```
export function withStateDir<T>(run: (stateDir: string) => T) {
```

**Line:** 233 | **Kind:** fn

### `loadBundledMemoryPluginRegistry`

```
export function loadBundledMemoryPluginRegistry(options?: {
```

**Line:** 238 | **Kind:** fn

### `setupBundledTelegramPlugin`

```
export function setupBundledTelegramPlugin() {
```

**Line:** 308 | **Kind:** fn

### `expectTelegramLoaded`

```
export function expectTelegramLoaded(registry: ReturnType<typeof loadOpenClawPlugins>) {
```

**Line:** 321 | **Kind:** fn

### `loadRegistryFromSinglePlugin`

```
export function loadRegistryFromSinglePlugin(params: {
```

**Line:** 327 | **Kind:** fn

### `loadRegistryFromAllowedPlugins`

```
export function loadRegistryFromAllowedPlugins(
```

**Line:** 347 | **Kind:** fn

### `runRegistryScenarios`

```
export function runRegistryScenarios<
```

**Line:** 363 | **Kind:** fn

### `runScenarioCases`

```
export function runScenarioCases<T>(scenarios: readonly T[], run: (scenario: T) => void) {
```

**Line:** 371 | **Kind:** fn

### `runSinglePluginRegistryScenarios`

```
export function runSinglePluginRegistryScenarios<
```

**Line:** 377 | **Kind:** fn

### `loadRegistryFromScenarioPlugins`

```
export function loadRegistryFromScenarioPlugins(plugins: readonly TempPlugin[]) {
```

**Line:** 397 | **Kind:** fn

### `expectOpenAllowWarnings`

```
export function expectOpenAllowWarnings(params: {
```

**Line:** 408 | **Kind:** fn

### `expectLoadedPluginProvenance`

```
export function expectLoadedPluginProvenance(params: {
```

**Line:** 424 | **Kind:** fn

### `expectRegisteredHttpRoute`

```
export function expectRegisteredHttpRoute(
```

**Line:** 447 | **Kind:** fn

### `expectDuplicateRegistrationResult`

```
export function expectDuplicateRegistrationResult(
```

**Line:** 468 | **Kind:** fn

### `expectPluginSourcePrecedence`

```
export function expectPluginSourcePrecedence(
```

**Line:** 491 | **Kind:** fn

### `expectPluginOriginAndStatus`

```
export function expectPluginOriginAndStatus(params: {
```

**Line:** 519 | **Kind:** fn

### `expectRegistryErrorDiagnostic`

```
export function expectRegistryErrorDiagnostic(params: {
```

**Line:** 535 | **Kind:** fn

### `expectDiagnosticContaining`

```
export function expectDiagnosticContaining(params: {
```

**Line:** 551 | **Kind:** fn

### `expectNoDiagnosticContaining`

```
export function expectNoDiagnosticContaining(params: {
```

**Line:** 568 | **Kind:** fn

### `createWarningLogger`

```
export function createWarningLogger(warnings: string[]) {
```

**Line:** 583 | **Kind:** fn

### `createErrorLogger`

```
export function createErrorLogger(errors: string[]) {
```

**Line:** 591 | **Kind:** fn

### `expectCachePartitionByPluginSource`

```
export function expectCachePartitionByPluginSource(params: {
```

**Line:** 628 | **Kind:** fn

### `expectCacheMissThenHit`

```
export function expectCacheMissThenHit(params: {
```

**Line:** 647 | **Kind:** fn

### `createSetupEntryChannelPluginFixture`

```
export function createSetupEntryChannelPluginFixture(params: {
```

**Line:** 659 | **Kind:** fn

### `createEnvResolvedPluginFixture`

```
export function createEnvResolvedPluginFixture(pluginId: string) {
```

**Line:** 898 | **Kind:** fn

### `expectEscapingEntryRejected`

```
export function expectEscapingEntryRejected(params: {
```

**Line:** 921 | **Kind:** fn

### `createStartupTraceRecorder`

```
export function createStartupTraceRecorder(): {
```

**Line:** 963 | **Kind:** fn

### `collectStartupTraceMetrics`

```
export function collectStartupTraceMetrics(
```

**Line:** 978 | **Kind:** fn

### `globalAfterEach0`

```
export const globalAfterEach0 = () => {
```

**Line:** 993 | **Kind:** fn

### `globalAfterAll1`

```
export const globalAfterAll1 = () => {
```

**Line:** 1000 | **Kind:** fn
