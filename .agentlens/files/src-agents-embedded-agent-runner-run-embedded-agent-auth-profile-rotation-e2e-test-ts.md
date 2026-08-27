# src/agents/embedded-agent-runner.run-embedded-agent.auth-profile-rotation.e2e.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1594
- **Language:** TypeScript
- **Symbols:** 23
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 34 | fn | installRunEmbeddedMocks | (private) | `const installRunEmbeddedMocks = () => {` |
| 111 | type | RunEmbeddedAgentTestParams | (private) | - |
| 115 | fn | runEmbeddedAgentInline | (private) | `async function runEmbeddedAgentInline(` |
| 246 | fn | writeAuthStore | (private) | `const writeAuthStore = async (` |
| 287 | fn | writeCopilotAuthStore | (private) | `const writeCopilotAuthStore = async (agentDir: ...` |
| 299 | fn | writeOpenAiCodexAuthStore | (private) | `const writeOpenAiCodexAuthStore = async (agentD...` |
| 315 | fn | buildCopilotAssistant | (private) | `const buildCopilotAssistant = (overrides: Parti...` |
| 318 | fn | makeErrorAttempt | (private) | `const makeErrorAttempt = (` |
| 333 | fn | mockFailedThenSuccessfulAttempt | (private) | `const mockFailedThenSuccessfulAttempt = (errorM...` |
| 351 | fn | mockPromptErrorThenSuccessfulAttempt | (private) | `const mockPromptErrorThenSuccessfulAttempt = (e...` |
| 369 | fn | runAutoPinnedOpenAiTurn | (private) | `async function runAutoPinnedOpenAiTurn(params: {` |
| 394 | fn | readUsageStats | (private) | `async function readUsageStats(agentDir: string) {` |
| 398 | fn | expectProfileP2UsageUnchanged | (private) | `async function expectProfileP2UsageUnchanged(ag...` |
| 403 | fn | runAutoPinnedRotationCase | (private) | `async function runAutoPinnedRotationCase(params: {` |
| 429 | fn | runAutoPinnedPromptErrorRotationCase | (private) | `async function runAutoPinnedPromptErrorRotation...` |
| 459 | fn | mockSingleSuccessfulAttempt | (private) | `function mockSingleSuccessfulAttempt() {` |
| 471 | fn | mockSingleErrorAttempt | (private) | `function mockSingleErrorAttempt(params: {` |
| 488 | fn | withTimedAgentWorkspace | (private) | `async function withTimedAgentWorkspace<T>(` |
| 509 | fn | withAgentWorkspace | (private) | `async function withAgentWorkspace<T>(` |
| 522 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 529 | fn | requireLogRecord | (private) | `function requireLogRecord(` |
| 542 | fn | expectFailoverError | (private) | `async function expectFailoverError(` |
| 576 | fn | runTurnWithCooldownSeed | (private) | `async function runTurnWithCooldownSeed(params: {` |
