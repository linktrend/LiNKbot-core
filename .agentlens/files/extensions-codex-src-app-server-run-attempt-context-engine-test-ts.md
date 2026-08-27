# extensions/codex/src/app-server/run-attempt.context-engine.test.ts

[← Back to Module](../modules/extensions-codex-src-app-server/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2094
- **Language:** TypeScript
- **Symbols:** 28
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 41 | type | RunCodexAppServerAttemptOptions | (private) | - |
| 46 | fn | setCodexAppServerClientFactoryForTest | (private) | `function setCodexAppServerClientFactoryForTest(...` |
| 50 | fn | resetCodexAppServerClientFactoryForTest | (private) | `function resetCodexAppServerClientFactoryForTes...` |
| 54 | fn | runCodexAppServerAttempt | (private) | `function runCodexAppServerAttempt(` |
| 70 | fn | createParams | (private) | `function createParams(sessionFile: string, work...` |
| 91 | fn | createSqliteParams | (private) | `function createSqliteParams(workspaceDir: strin...` |
| 121 | fn | writeCodexAppServerBinding | (private) | `function writeCodexAppServerBinding(...args: Pa...` |
| 133 | fn | assistantMessage | (private) | `function assistantMessage(text: string, timesta...` |
| 153 | fn | userMessage | (private) | `function userMessage(text: string, timestamp: n...` |
| 161 | fn | toolResultMessage | (private) | `function toolResultMessage(payload: unknown, ti...` |
| 178 | fn | threadStartResult | (private) | `function threadStartResult(threadId = "thread-1...` |
| 213 | fn | turnStartResult | (private) | `function turnStartResult(turnId = "turn-1", sta...` |
| 227 | fn | getMockServerVersion | (private) | `function getMockServerVersion() {` |
| 231 | fn | getMockRuntimeIdentity | (private) | `function getMockRuntimeIdentity() {` |
| 235 | fn | mockClientRuntimeMethods | (private) | `function mockClientRuntimeMethods() {` |
| 243 | fn | createStartedThreadHarness | (private) | `function createStartedThreadHarness(` |
| 250 | fn | notify | (private) | `const notify = async (notification: CodexServer...` |
| 314 | fn | createContextEngine | (private) | `function createContextEngine(overrides: Partial...` |
| 339 | type | MockCallReader | (private) | - |
| 341 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 348 | fn | optionalString | (private) | `function optionalString(value: unknown): string {` |
| 352 | fn | requireFirstCallArg | (private) | `function requireFirstCallArg(mock: unknown, lab...` |
| 360 | fn | requireRequestParams | (private) | `function requireRequestParams(` |
| 368 | fn | requireArray | (private) | `function requireArray(value: unknown, label: st...` |
| 375 | fn | expectRequestInputTextContains | (private) | `function expectRequestInputTextContains(` |
| 382 | fn | getRequestInputText | (private) | `function getRequestInputText(harness: ReturnTyp...` |
| 386 | fn | getRequestInputTextAt | (private) | `function getRequestInputTextAt(` |
| 2081 | fn | toLintErrorObject | (private) | `function toLintErrorObject(value: unknown, fall...` |
