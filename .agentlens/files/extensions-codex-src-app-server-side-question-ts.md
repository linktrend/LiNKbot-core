# extensions/codex/src/app-server/side-question.ts

[← Back to Module](../modules/extensions-codex-src-app-server/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1337
- **Language:** TypeScript
- **Symbols:** 28
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 118 | class | CodexSideQuestionTimeoutError | (private) | - |
| 151 | fn | runCodexAppServerSideQuestion | pub | `export async function runCodexAppServerSideQues...` |
| 311 | fn | emitNativePreToolUseFailure | (private) | `const emitNativePreToolUseFailure = (failure: C...` |
| 326 | fn | flushPendingNativePreToolUseFailures | (private) | `const flushPendingNativePreToolUseFailures = ()...` |
| 331 | fn | activateNativePreToolUseFailureFallback | (private) | `const activateNativePreToolUseFailureFallback =...` |
| 340 | fn | handleNotification | (private) | `const handleNotification = (notification: Codex...` |
| 357 | fn | abortFromUpstream | (private) | `const abortFromUpstream = () =>` |
| 430 | fn | registerRequestHandler | (private) | `const registerRequestHandler = (targetClient: C...` |
| 522 | fn | rebindClientHandlers | (private) | `const rebindClientHandlers = (nextClient: Codex...` |
| 767 | fn | resolveCodexSideNativeHookRelayEvents | (private) | `function resolveCodexSideNativeHookRelayEvents(...` |
| 779 | fn | registerCodexSideNativeHookRelay | (private) | `function registerCodexSideNativeHookRelay(param...` |
| 824 | fn | resolveCodexSideNativeHookRelayTtlMs | (private) | `function resolveCodexSideNativeHookRelayTtlMs(p...` |
| 839 | fn | buildSideRunAttemptParams | (private) | `function buildSideRunAttemptParams(` |
| 903 | fn | createCodexSideToolBridge | (private) | `async function createCodexSideToolBridge(input: {` |
| 1056 | fn | emptySideUserInputResponse | (private) | `function emptySideUserInputResponse(): JsonObje...` |
| 1060 | fn | isSideUserInputRequest | (private) | `function isSideUserInputRequest(` |
| 1068 | fn | forkCodexSideThread | (private) | `async function forkCodexSideThread(` |
| 1086 | fn | isMissingCodexParentThreadError | (private) | `function isMissingCodexParentThreadError(error:...` |
| 1094 | fn | sideBoundaryPromptItem | (private) | `function sideBoundaryPromptItem(): JsonObject {` |
| 1107 | fn | cleanupCodexSideThread | (private) | `async function cleanupCodexSideThread(` |
| 1141 | class | CodexSideQuestionCollector | (private) | - |
| 1209 | fn | cleanup | (private) | `const cleanup = () => {` |
| 1216 | fn | abort | (private) | `const abort = () => {` |
| 1301 | fn | collectAssistantText | (private) | `function collectAssistantText(turn: CodexTurn):...` |
| 1309 | fn | isNotificationForTurn | (private) | `function isNotificationForTurn(params: JsonObje...` |
| 1315 | fn | readNotificationTurnId | (private) | `function readNotificationTurnId(record: JsonObj...` |
| 1319 | fn | readString | (private) | `function readString(record: JsonObject, key: st...` |
| 1324 | fn | formatCodexErrorMessage | (private) | `function formatCodexErrorMessage(params: JsonOb...` |

## Public API

### `runCodexAppServerSideQuestion`

```
export async function runCodexAppServerSideQuestion(
```

**Line:** 151 | **Kind:** fn
