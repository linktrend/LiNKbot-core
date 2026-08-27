# extensions/slack/src/monitor/slash.test.ts

[← Back to Module](../modules/extensions-slack-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1791
- **Language:** TypeScript
- **Symbols:** 35
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 58 | fn | hasNonEmptyArgValue | (private) | `const hasNonEmptyArgValue = (values: unknown, k...` |
| 65 | fn | resolvePeriodMenu | (private) | `const resolvePeriodMenu = (` |
| 319 | type | RegisterFn | (private) | - |
| 339 | fn | registerCommands | (private) | `async function registerCommands(ctx: unknown, a...` |
| 347 | fn | encodeValue | (private) | `function encodeValue(parts: { command: string; ...` |
| 357 | fn | findFirstActionsBlock | (private) | `function findFirstActionsBlock(payload: { block...` |
| 363 | fn | createDeferred | (private) | `function createDeferred<T>() {` |
| 374 | fn | createArgMenusHarness | (private) | `function createArgMenusHarness(` |
| 442 | fn | requireHandler | (private) | `function requireHandler(` |
| 459 | fn | createSlashCommand | (private) | `function createSlashCommand(overrides: Partial<...` |
| 471 | fn | runCommandHandler | (private) | `async function runCommandHandler(handler: (args...` |
| 482 | fn | expectArgMenuLayout | (private) | `function expectArgMenuLayout(respond: ReturnTyp...` |
| 498 | fn | expectSingleDispatchedSlashBody | (private) | `function expectSingleDispatchedSlashBody(expect...` |
| 504 | type | ActionsBlockPayload | (private) | - |
| 508 | fn | runCommandAndResolveActionsBlock | (private) | `async function runCommandAndResolveActionsBlock(` |
| 521 | fn | getFirstActionElementFromCommand | (private) | `async function getFirstActionElementFromCommand...` |
| 533 | fn | runArgMenuAction | (private) | `async function runArgMenuAction(` |
| 563 | type | MockCallSource | (private) | - |
| 569 | fn | firstMockArg | (private) | `function firstMockArg(mock: MockCallSource, arg...` |
| 578 | fn | firstCallPayload | (private) | `function firstCallPayload(mock: MockCallSource,...` |
| 586 | fn | firstDispatchArg | (private) | `function firstDispatchArg(): { ctx?: Record<str...` |
| 592 | fn | responseTexts | (private) | `function responseTexts(mock: ReturnType<typeof ...` |
| 600 | fn | mockSixDispatchedReplies | (private) | `function mockSixDispatchedReplies() {` |
| 612 | fn | deliver | (private) | `const deliver = (` |
| 694 | fn | deliver | (private) | `const deliver = (` |
| 733 | fn | deliver | (private) | `const deliver = (` |
| 994 | fn | responseBudget | (private) | `const responseBudget = (` |
| 1004 | fn | deliver | (private) | `const deliver = (` |
| 1268 | fn | createPolicyHarness | (private) | `function createPolicyHarness(overrides?: {` |
| 1329 | fn | runSlashHandler | (private) | `async function runSlashHandler(params: {` |
| 1366 | fn | registerAndRunPolicySlash | (private) | `async function registerAndRunPolicySlash(params: {` |
| 1390 | fn | expectChannelBlockedResponse | (private) | `function expectChannelBlockedResponse(respond: ...` |
| 1398 | fn | expectUnauthorizedResponse | (private) | `function expectUnauthorizedResponse(respond: Re...` |
| 1698 | fn | deliver | (private) | `const deliver = (` |
| 1736 | fn | deliver | (private) | `const deliver = (` |
