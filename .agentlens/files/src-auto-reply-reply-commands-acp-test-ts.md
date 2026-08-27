# src/auto-reply/reply/commands-acp.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2372
- **Language:** TypeScript
- **Symbols:** 44
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 69 | fn | createAcpCommandSessionBindingService | (private) | `function createAcpCommandSessionBindingService() {` |
| 167 | fn | configureInMemoryTaskRegistryStoreForTests | (private) | `function configureInMemoryTaskRegistryStoreForT...` |
| 186 | fn | parseTelegramChatIdForTest | (private) | `function parseTelegramChatIdForTest(raw?: strin...` |
| 195 | fn | parseDiscordConversationIdForTest | (private) | `function parseDiscordConversationIdForTest(` |
| 214 | fn | parseDiscordParentChannelFromSessionKeyForTest | (private) | `function parseDiscordParentChannelFromSessionKe...` |
| 220 | fn | resolveFirstConversationTargetForTest | (private) | `function resolveFirstConversationTargetForTest(...` |
| 238 | fn | parsePrefixedConversationIdForTest | (private) | `function parsePrefixedConversationIdForTest(` |
| 249 | fn | resolvePrefixedConversationIdForTest | (private) | `function resolvePrefixedConversationIdForTest(` |
| 256 | fn | setMinimalAcpCommandRegistryForTests | (private) | `function setMinimalAcpCommandRegistryForTests()...` |
| 468 | type | FakeBinding | (private) | - |
| 488 | fn | createSessionBinding | (private) | `function createSessionBinding(overrides?: Parti...` |
| 526 | fn | createDiscordParams | (private) | `function createDiscordParams(commandBody: strin...` |
| 542 | type | AcpSessionIdentity | (private) | - |
| 550 | fn | createThreadConversation | (private) | `function createThreadConversation(conversationI...` |
| 559 | fn | createBoundThreadSession | (private) | `function createBoundThreadSession(sessionKey: s...` |
| 566 | fn | createAcpSessionEntry | (private) | `function createAcpSessionEntry(options?: {` |
| 592 | fn | createSessionBindingCapabilities | (private) | `function createSessionBindingCapabilities() {` |
| 601 | type | AcpBindInput | (private) | - |
| 613 | fn | createAcpThreadBinding | (private) | `function createAcpThreadBinding(input: AcpBindI...` |
| 635 | type | MockWithCalls | (private) | - |
| 641 | fn | mockCallArg | (private) | `function mockCallArg(mock: MockWithCalls, callI...` |
| 649 | fn | expectRecordFields | (private) | `function expectRecordFields(` |
| 663 | fn | expectMockCallFields | (private) | `function expectMockCallFields(` |
| 671 | fn | expectBindingBindCall | (private) | `function expectBindingBindCall(` |
| 697 | fn | gatewayRequests | (private) | `function gatewayRequests(): Array<Record<string...` |
| 701 | fn | expectGatewayMethodCalled | (private) | `function expectGatewayMethodCalled(method: stri...` |
| 705 | fn | expectGatewayMethodNotCalled | (private) | `function expectGatewayMethodNotCalled(method: s...` |
| 709 | fn | expectBoundIntroTextToExclude | (private) | `function expectBoundIntroTextToExclude(match: s...` |
| 719 | fn | mockBoundThreadSession | (private) | `function mockBoundThreadSession(options?: {` |
| 737 | fn | createThreadParams | (private) | `function createThreadParams(commandBody: string...` |
| 743 | type | ConversationCommandFixture | (private) | - |
| 753 | fn | createConversationParams | (private) | `function createConversationParams(` |
| 774 | fn | runDiscordAcpCommand | (private) | `async function runDiscordAcpCommand(commandBody...` |
| 778 | fn | runThreadAcpCommand | (private) | `async function runThreadAcpCommand(commandBody:...` |
| 782 | fn | runTelegramAcpCommand | (private) | `async function runTelegramAcpCommand(commandBod...` |
| 797 | fn | runTelegramDmAcpCommand | (private) | `async function runTelegramDmAcpCommand(commandB...` |
| 811 | fn | runSlackDmAcpCommand | (private) | `async function runSlackDmAcpCommand(commandBody...` |
| 826 | fn | createMatrixThreadParams | (private) | `function createMatrixThreadParams(commandBody: ...` |
| 839 | fn | runMatrixAcpCommand | (private) | `async function runMatrixAcpCommand(commandBody:...` |
| 853 | fn | runMatrixThreadAcpCommand | (private) | `async function runMatrixThreadAcpCommand(comman...` |
| 857 | fn | runFeishuDmAcpCommand | (private) | `async function runFeishuDmAcpCommand(commandBod...` |
| 872 | fn | runLineDmAcpCommand | (private) | `async function runLineDmAcpCommand(commandBody:...` |
| 887 | fn | runIMessageDmAcpCommand | (private) | `async function runIMessageDmAcpCommand(commandB...` |
| 901 | fn | runInternalAcpCommand | (private) | `async function runInternalAcpCommand(params: {` |
