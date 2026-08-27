# src/plugins/contracts/tts-contract-suites.ts

[← Back to Module](../modules/src-plugins-contracts/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1385
- **Language:** TypeScript
- **Symbols:** 35
- **Public symbols:** 4

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 16 | type | TtsRuntimeModule | (private) | - |
| 17 | type | TtsCoreModule | (private) | - |
| 18 | type | SummarizeTextDeps | (private) | - |
| 48 | fn | isolatedSpeechProviderEnv | (private) | `function isolatedSpeechProviderEnv(` |
| 57 | fn | withIsolatedSpeechProviderEnv | (private) | `function withIsolatedSpeechProviderEnv<T>(` |
| 64 | fn | withIsolatedSpeechProviderEnvAsync | (private) | `async function withIsolatedSpeechProviderEnvAsy...` |
| 82 | fn | createResolvedModel | (private) | `function createResolvedModel(provider: string, ...` |
| 101 | fn | asLegacyTtsConfig | (private) | `function asLegacyTtsConfig(value: unknown): Ope...` |
| 105 | fn | asLegacyOpenClawConfig | (private) | `function asLegacyOpenClawConfig(value: Record<s...` |
| 109 | fn | mockCallAt | (private) | `function mockCallAt(mock: { mock: { calls: Arra...` |
| 141 | fn | createSummarizeTextDeps | (private) | `function createSummarizeTextDeps() {` |
| 149 | fn | createOpenAiTelephonyCfg | (private) | `function createOpenAiTelephonyCfg(model: "tts-1...` |
| 167 | fn | createAudioBuffer | (private) | `function createAudioBuffer(length = 2): Buffer {` |
| 171 | fn | withMockedSpeechFetch | (private) | `async function withMockedSpeechFetch(` |
| 188 | fn | resolveBaseUrl | (private) | `function resolveBaseUrl(rawValue: unknown, fall...` |
| 192 | fn | resolveTestProviderConfig | (private) | `function resolveTestProviderConfig(` |
| 216 | fn | buildTestOpenAISpeechProvider | (private) | `function buildTestOpenAISpeechProvider(): Speec...` |
| 324 | fn | buildTestMicrosoftSpeechProvider | (private) | `function buildTestMicrosoftSpeechProvider(): Sp...` |
| 349 | fn | buildTestElevenLabsSpeechProvider | (private) | `function buildTestElevenLabsSpeechProvider(): S...` |
| 399 | fn | buildTestGoogleSpeechProvider | (private) | `function buildTestGoogleSpeechProvider(): Speec...` |
| 431 | fn | createPrepareSimpleCompletionModelMock | (private) | `function createPrepareSimpleCompletionModelMock...` |
| 442 | fn | setupTtsRuntime | (private) | `async function setupTtsRuntime() {` |
| 460 | fn | setupTestSpeechProviderRegistry | (private) | `function setupTestSpeechProviderRegistry() {` |
| 471 | fn | createResolvedSummarizationConfig | (private) | `function createResolvedSummarizationConfig(cfg:...` |
| 501 | fn | setupSummarizationMocks | (private) | `async function setupSummarizationMocks() {` |
| 512 | fn | setupTtsContractTest | (private) | `async function setupTtsContractTest() {` |
| 518 | fn | setupTtsSummarizationTest | (private) | `async function setupTtsSummarizationTest() {` |
| 523 | fn | describeTtsConfigContract | pub | `export function describeTtsConfigContract() {` |
| 841 | fn | describeTtsSummarizationContract | pub | `export function describeTtsSummarizationContrac...` |
| 850 | fn | runSummarizeText | (private) | `async function runSummarizeText(params?: {` |
| 967 | fn | describeTtsProviderRuntimeContract | pub | `export function describeTtsProviderRuntimeContr...` |
| 1230 | fn | expectTelephonyInstructions | (private) | `async function expectTelephonyInstructions(` |
| 1266 | fn | describeTtsAutoApplyContract | pub | `export function describeTtsAutoApplyContract() {` |
| 1284 | fn | withMockedAutoTtsFetch | (private) | `const withMockedAutoTtsFetch = async (` |
| 1304 | fn | expectAutoTtsOutcome | (private) | `async function expectAutoTtsOutcome(params: {` |

## Public API

### `describeTtsConfigContract`

```
export function describeTtsConfigContract() {
```

**Line:** 523 | **Kind:** fn

### `describeTtsSummarizationContract`

```
export function describeTtsSummarizationContract() {
```

**Line:** 841 | **Kind:** fn

### `describeTtsProviderRuntimeContract`

```
export function describeTtsProviderRuntimeContract() {
```

**Line:** 967 | **Kind:** fn

### `describeTtsAutoApplyContract`

```
export function describeTtsAutoApplyContract() {
```

**Line:** 1266 | **Kind:** fn
