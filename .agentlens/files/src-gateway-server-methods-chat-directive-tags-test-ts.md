# src/gateway/server-methods/chat.directive-tags.test.ts

[← Back to Module](../modules/src-gateway-server-methods/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 7042
- **Language:** TypeScript
- **Symbols:** 35
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 130 | fn | readTranscriptJsonLines | (private) | `function readTranscriptJsonLines(transcriptPath...` |
| 351 | fn | hasHooks | (private) | `const hasHooks = (hookName: string) =>` |
| 475 | fn | waitForAssertion | (private) | `async function waitForAssertion(assertion: () =...` |
| 479 | fn | createTranscriptFixture | (private) | `async function createTranscriptFixture(prefix: ...` |
| 503 | fn | createSqliteTranscriptFixture | (private) | `function createSqliteTranscriptFixture(prefix: ...` |
| 509 | fn | createGatewayUserTurnSqliteFixture | (private) | `async function createGatewayUserTurnSqliteFixtu...` |
| 517 | fn | withTranscriptFixtureState | (private) | `async function withTranscriptFixtureState(` |
| 525 | fn | withSqliteTranscriptFixtureState | (private) | `async function withSqliteTranscriptFixtureState(` |
| 533 | fn | transcriptScope | (private) | `function transcriptScope(): SessionTranscriptRe...` |
| 542 | fn | sessionEntryScope | (private) | `function sessionEntryScope(): SessionAccessScope {` |
| 550 | fn | seedSqliteSessionEntry | (private) | `async function seedSqliteSessionEntry(entry: Re...` |
| 557 | fn | readSqliteMainSessionEntry | (private) | `function readSqliteMainSessionEntry(): Record<s...` |
| 561 | fn | appendSourceReplyMirrorEntry | (private) | `async function appendSourceReplyMirrorEntry(par...` |
| 597 | fn | readActiveAssistantTranscriptMessages | (private) | `async function readActiveAssistantTranscriptMes...` |
| 608 | fn | extractFirstTextBlock | (private) | `function extractFirstTextBlock(payload: unknown...` |
| 628 | fn | getMessage | (private) | `function getMessage(payload: unknown): Record<s...` |
| 636 | fn | getMessageContent | (private) | `function getMessageContent(payload: unknown): A...` |
| 641 | fn | mockCallAt | (private) | `function mockCallAt(` |
| 650 | fn | lastRespondCall | (private) | `function lastRespondCall(respond: ReturnType<ty...` |
| 656 | fn | responseErrorMessage | (private) | `function responseErrorMessage(error: unknown): ...` |
| 670 | fn | lastBroadcastPayload | (private) | `function lastBroadcastPayload(context: ChatCont...` |
| 676 | fn | lastNodeSendCall | (private) | `function lastNodeSendCall(context: ChatContext) {` |
| 682 | fn | findAssistantUpdateWithBlock | (private) | `function findAssistantUpdateWithBlock(predicate...` |
| 693 | fn | findUserUpdate | (private) | `function findUserUpdate() {` |
| 700 | fn | userUpdateMessage | (private) | `function userUpdateMessage(` |
| 708 | fn | expectUserUpdateIdentity | (private) | `function expectUserUpdateIdentity(update: Retur...` |
| 718 | fn | readPersistedUserMessages | (private) | `function readPersistedUserMessages(): Array<Rec...` |
| 729 | fn | expectDispatchContextFields | (private) | `function expectDispatchContextFields(expected: {` |
| 743 | fn | createScopedCliClient | (private) | `function createScopedCliClient(` |
| 768 | fn | createChatContext | (private) | `function createChatContext(): Pick<` |
| 846 | type | ChatContext | (private) | - |
| 847 | type | NonStreamingChatSendWaitFor | (private) | - |
| 849 | fn | runNonStreamingChatSend | (private) | `async function runNonStreamingChatSend(params: {` |
| 5211 | fn | releaseSave | (private) | `let releaseSave = () => {};` |
| 6499 | fn | releaseSave | (private) | `let releaseSave = () => {};` |
