# src/media-understanding/apply.test.ts

[← Back to Module](../modules/src-media-understanding/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2076
- **Language:** TypeScript
- **Symbols:** 21
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 15 | type | ResolveApiKeyForProvider | (private) | - |
| 50 | fn | createTempMediaDir | (private) | `async function createTempMediaDir() {` |
| 60 | fn | getSharedTempMediaCacheDir | (private) | `async function getSharedTempMediaCacheDir() {` |
| 67 | fn | createGroqAudioConfig | (private) | `function createGroqAudioConfig(): OpenClawConfig {` |
| 81 | fn | createGroqProviders | (private) | `function createGroqProviders(transcribedText = ...` |
| 90 | fn | createRegistryMediaProviders | (private) | `function createRegistryMediaProviders(): Record...` |
| 102 | fn | expectTranscriptApplied | (private) | `function expectTranscriptApplied(params: {` |
| 115 | fn | getRunExecCall | (private) | `function getRunExecCall(index = 0) {` |
| 123 | fn | getRunExecCallForCommand | (private) | `function getRunExecCallForCommand(command: stri...` |
| 131 | fn | getRunFfmpegArgs | (private) | `function getRunFfmpegArgs(index = 0) {` |
| 139 | fn | expectCliRunOptions | (private) | `function expectCliRunOptions(options: unknown) {` |
| 146 | fn | createMediaDisabledConfig | (private) | `function createMediaDisabledConfig(): OpenClawC...` |
| 158 | fn | createMediaDisabledConfigWithAllowedMimes | (private) | `function createMediaDisabledConfigWithAllowedMi...` |
| 173 | fn | createTempMediaFile | (private) | `async function createTempMediaFile(params: { fi...` |
| 193 | fn | createMockExecutable | (private) | `async function createMockExecutable(dir: string...` |
| 199 | fn | withMediaAutoDetectEnv | (private) | `async function withMediaAutoDetectEnv<T>(` |
| 219 | fn | createAudioCtx | (private) | `async function createAudioCtx(params?: {` |
| 236 | fn | setupAudioAutoDetectCase | (private) | `async function setupAudioAutoDetectCase(stdout?...` |
| 255 | fn | mockWhisperCliTranscript | (private) | `function mockWhisperCliTranscript(transcript: s...` |
| 270 | fn | applyWithDisabledMedia | (private) | `async function applyWithDisabledMedia(params: {` |
| 288 | fn | expectFileNotApplied | (private) | `function expectFileNotApplied(params: {` |

## Memory Markers

### 🟢 `NOTE` (line 1862)

> The sanitizeFilename in store.ts would strip most dangerous chars,
