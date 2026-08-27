# src/agents/model-fallback.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 4456
- **Language:** TypeScript
- **Symbols:** 36
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 53 | type | ProviderModelNormalizationParams | (private) | - |
| 55 | fn | makeCommandLaneTaskTimeoutError | (private) | `function makeCommandLaneTaskTimeoutError(lane: ...` |
| 91 | fn | keyFor | (private) | `const keyFor = (agentDir?: string) => agentDir ...` |
| 92 | fn | now | (private) | `const now = () => Date.now();` |
| 97 | fn | getProfileIds | (private) | `const getProfileIds = (store: AuthProfileStore,...` |
| 101 | fn | isProfileInCooldown | (private) | `const isProfileInCooldown = (` |
| 220 | fn | resetModelFallbackTestState | (private) | `function resetModelFallbackTestState(): void {` |
| 235 | fn | setDefaultPluginMetadataSnapshot | (private) | `function setDefaultPluginMetadataSnapshot(): vo...` |
| 253 | fn | runModelFallbackCase | (private) | `async function runModelFallbackCase(name: strin...` |
| 263 | fn | makeFallbacksOnlyCfg | (private) | `function makeFallbacksOnlyCfg(): OpenClawConfig {` |
| 275 | fn | makeProviderFallbackCfg | (private) | `function makeProviderFallbackCfg(provider: stri...` |
| 288 | fn | makeProviderOrderFallbackCfg | (private) | `function makeProviderOrderFallbackCfg(` |
| 313 | fn | withTempAuthStore | (private) | `async function withTempAuthStore<T>(` |
| 322 | fn | makeAuthTempDir | (private) | `async function makeAuthTempDir(): Promise<strin...` |
| 327 | fn | runWithStoredAuth | (private) | `async function runWithStoredAuth(params: {` |
| 344 | fn | setAuthRuntimeStore | (private) | `function setAuthRuntimeStore(agentDir: string |...` |
| 349 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 356 | fn | requireMockCall | (private) | `function requireMockCall(` |
| 368 | fn | captureRejection | (private) | `async function captureRejection(promise: Promis...` |
| 377 | fn | requireFallbackSummaryError | (private) | `function requireFallbackSummaryError(error: unk...` |
| 385 | fn | requireFailoverError | (private) | `function requireFailoverError(error: unknown): ...` |
| 393 | fn | expectFallsBackToHaiku | (private) | `async function expectFallsBackToHaiku(params: {` |
| 417 | fn | createOverrideFailureRun | (private) | `function createOverrideFailureRun(params: {` |
| 435 | fn | makeSingleProviderStore | (private) | `function makeSingleProviderStore(params: {` |
| 463 | fn | createFallbackOnlyRun | (private) | `function createFallbackOnlyRun() {` |
| 472 | fn | expectSkippedUnavailableProvider | (private) | `async function expectSkippedUnavailableProvider...` |
| 518 | type | ModelFailoverDiagnostic | (private) | - |
| 520 | fn | captureModelFailoverDiagnostics | (private) | `function captureModelFailoverDiagnostics(): {` |
| 533 | fn | makeDiagnosticFallbackConfig | (private) | `function makeDiagnosticFallbackConfig(fallbacks...` |
| 539 | fn | diagnosticFailure | (private) | `function diagnosticFailure(params: {` |
| 573 | fn | parseDiagnosticModelRef | (private) | `function parseDiagnosticModelRef(ref: string): ...` |
| 3526 | fn | makeAuthStoreWithCooldown | (private) | `async function makeAuthStoreWithCooldown(` |
| 3793 | fn | makeAbortError | (private) | `function makeAbortError(message = "aborted"): E...` |
| 3799 | fn | makeAbortableWrapper | (private) | `async function makeAbortableWrapper(reason: Err...` |
| 3813 | fn | makeAbortWrapper | (private) | `function makeAbortWrapper(reason: Error): Error {` |
| 3819 | fn | makeTaggedAbortController | (private) | `function makeTaggedAbortController(reason: Erro...` |
