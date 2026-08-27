# src/agents/model-fallback.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2086
- **Language:** TypeScript
- **Symbols:** 68
- **Public symbols:** 7

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 93 | fn | isTranscriptNotContinuableError | (private) | `function isTranscriptNotContinuableError(err: u...` |
| 101 | fn | hasExactConfiguredProviderModel | (private) | `function hasExactConfiguredProviderModel(params: {` |
| 120 | fn | hasConfiguredProvider | (private) | `function hasConfiguredProvider(params: { cfg?: ...` |
| 130 | fn | allowPluginModelNormalizationForRef | (private) | `function allowPluginModelNormalizationForRef(pa...` |
| 145 | type | FailoverAttribution | (private) | - |
| 155 | class | FallbackSummaryError | (private) | - |
| 177 | fn | isFallbackSummaryError | pub | `export function isFallbackSummaryError(err: unk...` |
| 181 | type | ModelFallbackRunOptions | (private) | - |
| 186 | type | ModelFallbackRuntimeContext | (private) | - |
| 204 | fn | isTerminalAbortReasonString | (private) | `function isTerminalAbortReasonString(reason: st...` |
| 208 | fn | getErrorCauseCandidates | (private) | `function getErrorCauseCandidates(err: Error): u...` |
| 219 | fn | isTerminalAbortCandidate | (private) | `function isTerminalAbortCandidate(candidate: un...` |
| 238 | fn | isTerminalAbort | (private) | `function isTerminalAbort(signal: AbortSignal | ...` |
| 252 | fn | isTerminalAbortFromError | (private) | `function isTerminalAbortFromError(err: unknown)...` |
| 274 | fn | isCallerAbortSignal | (private) | `function isCallerAbortSignal(signal: AbortSigna...` |
| 278 | fn | createModelCandidateCollector | (private) | `function createModelCandidateCollector(allowlis...` |
| 286 | fn | addCandidate | (private) | `const addCandidate = (candidate: ModelCandidate...` |
| 301 | fn | addExplicitCandidate | (private) | `const addExplicitCandidate = (candidate: ModelC...` |
| 304 | fn | addAllowlistedCandidate | (private) | `const addAllowlistedCandidate = (candidate: Mod...` |
| 311 | type | ModelFallbackErrorHandler | (private) | - |
| 319 | type | ModelFallbackStepHandler | (private) | - |
| 321 | type | ModelFallbackResultClassification | pub | - |
| 364 | type | ModelFallbackAuthRuntime | (private) | - |
| 372 | fn | loadModelFallbackAuthRuntime | (private) | `async function loadModelFallbackAuthRuntime() {` |
| 376 | fn | buildFallbackSuccess | (private) | `function buildFallbackSuccess<T>(params: {` |
| 391 | fn | runFallbackCandidate | (private) | `async function runFallbackCandidate<T>(params: {` |
| 402 | fn | run | (private) | `const run = () =>` |
| 442 | fn | runFallbackAttempt | (private) | `async function runFallbackAttempt<T>(params: {` |
| 529 | fn | resolveResultClassificationError | (private) | `function resolveResultClassificationError(` |
| 555 | fn | sameModelCandidate | (private) | `function sameModelCandidate(a: ModelCandidate, ...` |
| 559 | fn | isCliAgentRuntime | (private) | `function isCliAgentRuntime(runtime: string | un...` |
| 567 | fn | resolveModelFallbackCandidateHarnessAuthPrecheck | (private) | `async function resolveModelFallbackCandidateHar...` |
| 574 | fn | result | (private) | `const result = (skipsProviderAuthCooldown: bool...` |
| 622 | fn | resolveCandidateAttemptError | (private) | `function resolveCandidateAttemptError(` |
| 637 | fn | recordFailedCandidateAttempt | (private) | `function recordFailedCandidateAttempt(params: {` |
| 685 | fn | appendFailedCandidateAttempt | (private) | `function appendFailedCandidateAttempt(params: {` |
| 702 | fn | findLiveSessionModelSwitchRedirectIndex | (private) | `function findLiveSessionModelSwitchRedirectInde...` |
| 716 | fn | hasDifferentLiveSessionRuntimeSelection | (private) | `function hasDifferentLiveSessionRuntimeSelectio...` |
| 720 | fn | normalizeRuntime | (private) | `const normalizeRuntime = (runtime: string | und...` |
| 730 | fn | throwFallbackFailureSummary | (private) | `function throwFallbackFailureSummary(params: {` |
| 772 | fn | resolveFallbackSoonestCooldownExpiry | (private) | `function resolveFallbackSoonestCooldownExpiry(p...` |
| 814 | fn | resolveImageFallbackCandidates | pub | `export function resolveImageFallbackCandidates(` |
| 834 | fn | addRaw | (private) | `const addRaw = (raw: string, opts?: { allowlist...` |
| 872 | fn | resolveImageFallbackDefaultProvider | pub | `export function resolveImageFallbackDefaultProv...` |
| 892 | fn | resolveModelCandidateChain | pub | `export function resolveModelCandidateChain(` |
| 922 | fn | cloneModelCandidate | (private) | `function cloneModelCandidate(candidate: ModelCa...` |
| 929 | fn | resolveFallbackCandidateCacheKey | (private) | `function resolveFallbackCandidateCacheKey(` |
| 985 | fn | resolveFallbackCandidateModelProviderCacheParts | (private) | `function resolveFallbackCandidateModelProviderC...` |
| 1001 | fn | resolveFallbackCandidatesUncached | (private) | `function resolveFallbackCandidatesUncached(` |
| 1023 | fn | normalizeCandidateRef | (private) | `const normalizeCandidateRef = (provider: string...` |
| 1123 | fn | resolveProbeThrottleKey | (private) | `function resolveProbeThrottleKey(provider: stri...` |
| 1128 | fn | pruneProbeState | (private) | `function pruneProbeState(now: number): void {` |
| 1136 | fn | enforceProbeStateCap | (private) | `function enforceProbeStateCap(): void {` |
| 1153 | fn | isProbeThrottleOpen | (private) | `function isProbeThrottleOpen(now: number, throt...` |
| 1159 | fn | markProbeAttempt | (private) | `function markProbeAttempt(now: number, throttle...` |
| 1165 | fn | hasActiveProviderRateLimitResetWindow | (private) | `function hasActiveProviderRateLimitResetWindow(...` |
| 1186 | fn | shouldProbePrimaryDuringCooldown | (private) | `function shouldProbePrimaryDuringCooldown(param...` |
| 1254 | type | CooldownDecision | (private) | - |
| 1271 | fn | resolveCooldownDecision | (private) | `function resolveCooldownDecision(params: {` |
| 1377 | type | DeferredSessionSuspensionState | (private) | - |
| 1381 | fn | flushDeferredSessionSuspension | (private) | `function flushDeferredSessionSuspension(state: ...` |
| 1390 | fn | shouldDiscardDeferredSessionSuspension | (private) | `function shouldDiscardDeferredSessionSuspension...` |
| 1414 | fn | runWithModelFallback | pub | `export async function runWithModelFallback<T>(` |
| 1432 | fn | runWithModelFallbackInternal | (private) | `async function runWithModelFallbackInternal<T>(` |
| 1460 | fn | resolveTerminalSuspensionLane | (private) | `const resolveTerminalSuspensionLane = () =>` |
| 1462 | fn | observeDecision | (private) | `const observeDecision = async (decision: ModelF...` |
| 1471 | fn | observeFailedCandidate | (private) | `const observeFailedCandidate = async (` |
| 2028 | fn | runWithImageModelFallback | pub | `export async function runWithImageModelFallback...` |

## Public API

### `isFallbackSummaryError`

```
export function isFallbackSummaryError(err: unknown): err is FallbackSummaryError {
```

**Line:** 177 | **Kind:** fn

### `resolveImageFallbackCandidates`

```
export function resolveImageFallbackCandidates(
```

**Line:** 814 | **Kind:** fn

### `resolveImageFallbackDefaultProvider`

```
export function resolveImageFallbackDefaultProvider(cfg: OpenClawConfig | undefined): string {
```

**Line:** 872 | **Kind:** fn

### `resolveModelCandidateChain`

```
export function resolveModelCandidateChain(
```

**Line:** 892 | **Kind:** fn

### `runWithModelFallback`

```
export async function runWithModelFallback<T>(
```

**Line:** 1414 | **Kind:** fn

### `runWithImageModelFallback`

```
export async function runWithImageModelFallback<T>(params: {
```

**Line:** 2028 | **Kind:** fn
