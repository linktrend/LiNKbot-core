# extensions/copilot/src/attempt.ts

[← Back to Module](../modules/extensions-copilot-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1820
- **Language:** TypeScript
- **Symbols:** 46
- **Public symbols:** 3

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 70 | type | AttemptResultWithSdkSessionId | (private) | - |
| 71 | type | PromptErrorWithCode | (private) | - |
| 72 | type | CopilotAgentEndHookParams | (private) | - |
| 73 | type | CopilotSessionConfig | pub | - |
| 95 | type | AttemptParamsLike | (private) | - |
| 121 | type | ModelRef | (private) | - |
| 138 | type | ModelRefInputObject | (private) | - |
| 158 | type | ResolveSandboxContextFn | (private) | - |
| 160 | interface | CopilotAttemptDeps | (private) | - |
| 199 | fn | runCopilotAgentEndHook | (private) | `async function runCopilotAgentEndHook(` |
| 210 | fn | finalizeCopilotAttempt | (private) | `async function finalizeCopilotAttempt(` |
| 233 | fn | awaitDeferredCleanupCompletionOrAbort | (private) | `async function awaitDeferredCleanupCompletionOr...` |
| 238 | fn | awaitCompletion | (private) | `const awaitCompletion = async () => {` |
| 263 | fn | deferBackgroundCompactionCleanup | (private) | `function deferBackgroundCompactionCleanup(param...` |
| 320 | fn | cancelBackgroundCompactionBeforeTeardown | (private) | `async function cancelBackgroundCompactionBefore...` |
| 343 | fn | awaitDeferredCleanupBeforeDeadline | (private) | `async function awaitDeferredCleanupBeforeDeadli...` |
| 362 | fn | runCopilotAttempt | pub | `export async function runCopilotAttempt(` |
| 414 | fn | finishAttempt | (private) | `const finishAttempt = (result: AgentHarnessAtte...` |
| 494 | fn | markExternalAbort | (private) | `const markExternalAbort = () => {` |
| 500 | fn | abortActiveSession | (private) | `const abortActiveSession = () => {` |
| 508 | fn | onAbort | (private) | `const onAbort = () => {` |
| 743 | fn | emitLlmInput | (private) | `const emitLlmInput = (prompt: string, additiona...` |
| 901 | fn | cancelGatewayQuestionBestEffort | (private) | `const cancelGatewayQuestionBestEffort = (resolv...` |
| 1018 | fn | abortCleanup | (private) | `const abortCleanup = () => cleanupAbort.abort();` |
| 1270 | fn | createResult | (private) | `function createResult(` |
| 1338 | fn | createPromptError | (private) | `function createPromptError(code: string, messag...` |
| 1347 | fn | createSessionConfig | (private) | `function createSessionConfig(` |
| 1470 | fn | buildCopilotAvailableTools | (private) | `function buildCopilotAvailableTools(sdkTools: S...` |
| 1478 | fn | isSystemAgentOnlyToolAllowlist | (private) | `function isSystemAgentOnlyToolAllowlist(toolsAl...` |
| 1482 | fn | createMessageOptions | (private) | `async function createMessageOptions(` |
| 1504 | fn | resolveProviderRequestHeaders | (private) | `function resolveProviderRequestHeaders(` |
| 1511 | fn | createPromptImageAttachments | (private) | `function createPromptImageAttachments(` |
| 1535 | fn | resolvePromptImages | (private) | `async function resolvePromptImages(` |
| 1573 | fn | resolveImageCapabilityModel | (private) | `function resolveImageCapabilityModel(params: At...` |
| 1581 | fn | createSystemMessageContent | (private) | `function createSystemMessageContent(` |
| 1599 | fn | isRawCopilotModelRun | (private) | `function isRawCopilotModelRun(params: AttemptPa...` |
| 1603 | fn | getMessagesSnapshotInput | (private) | `function getMessagesSnapshotInput(params: Attem...` |
| 1612 | fn | readTailUserText | (private) | `function readTailUserText(messages: AgentMessag...` |
| 1642 | fn | hasMirrorIdentity | (private) | `function hasMirrorIdentity(message: AgentMessag...` |
| 1652 | fn | readSessionId | (private) | `function readSessionId(session: SessionLike | u...` |
| 1659 | fn | readString | (private) | `function readString(value: unknown): string | u...` |
| 1663 | fn | readResolvedAttemptPath | (private) | `function readResolvedAttemptPath(value: unknown...` |
| 1674 | fn | resolveModelRef | (private) | `function resolveModelRef(params: AttemptParamsL...` |
| 1713 | fn | resolvePoolAcquire | pub | `export function resolvePoolAcquire(params: Atte...` |
| 1787 | fn | toError | (private) | `function toError(error: unknown): Error {` |
| 1810 | fn | isSdkSendAndWaitTimeoutError | (private) | `function isSdkSendAndWaitTimeoutError(error: un...` |

## Public API

### `runCopilotAttempt`

```
export async function runCopilotAttempt(
```

**Line:** 362 | **Kind:** fn

### `resolvePoolAcquire`

```
export function resolvePoolAcquire(params: AttemptParamsLike): {
```

**Line:** 1713 | **Kind:** fn

## Memory Markers

### 🟢 `NOTE` (line 90)

> (plugin-sdk-widening): AttemptParamsLike can be removed once

### 🔴 `SAFETY` (line 819)

> replay-shim owns the create/resume decision and the
