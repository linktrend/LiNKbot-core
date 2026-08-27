# src/agents/embedded-agent-runner.e2e.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1271
- **Language:** TypeScript
- **Symbols:** 16
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 22 | type | EmbeddedRunnerModelResolution | (private) | - |
| 52 | fn | buildAssistantMessage | (private) | `const buildAssistantMessage = (model: { api: st...` |
| 63 | fn | buildAssistantErrorMessage | (private) | `const buildAssistantErrorMessage = (model: { ap...` |
| 107 | fn | installRunEmbeddedMocks | (private) | `const installRunEmbeddedMocks = () => {` |
| 219 | fn | nextSessionFile | (private) | `const nextSessionFile = () => {` |
| 223 | fn | nextRunId | (private) | `const nextRunId = (prefix = "run-embedded-test"...` |
| 224 | fn | nextSessionKey | (private) | `const nextSessionKey = () => `agent:test:embedd...` |
| 226 | fn | runWithOrphanedSingleUserMessage | (private) | `const runWithOrphanedSingleUserMessage = async ...` |
| 263 | fn | textFromContent | (private) | `const textFromContent = (content: unknown) => {` |
| 273 | fn | readSessionEntries | (private) | `const readSessionEntries = async (sessionFile: ...` |
| 284 | fn | readSessionMessages | (private) | `const readSessionMessages = async (sessionFile:...` |
| 293 | fn | runDefaultEmbeddedTurn | (private) | `const runDefaultEmbeddedTurn = async (sessionFi...` |
| 319 | fn | addAnthropicProvider | (private) | `const addAnthropicProvider = (` |
| 345 | fn | mockSuccessfulEmbeddedAttempt | (private) | `const mockSuccessfulEmbeddedAttempt = () => {` |
| 356 | fn | firstMockCall | (private) | `function firstMockCall(mock: { mock: { calls: u...` |
| 364 | fn | firstRunEmbeddedAttemptParams | (private) | `function firstRunEmbeddedAttemptParams(): { ses...` |
