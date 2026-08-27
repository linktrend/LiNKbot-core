# extensions/telegram/src/send.test.ts

[← Back to Module](../modules/extensions-telegram-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 4701
- **Language:** TypeScript
- **Symbols:** 24
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 74 | type | RichRawTextTestApi | (private) | - |
| 94 | fn | richTextForTest | (private) | `function richTextForTest(richMessage: {` |
| 107 | fn | sendMessageTexts | (private) | `function sendMessageTexts(mockFn: typeof botApi...` |
| 111 | fn | withRichRawTextTestApi | (private) | `function withRichRawTextTestApi(` |
| 146 | type | PersistedSentMessageForTest | (private) | - |
| 154 | fn | markdownTable | (private) | `function markdownTable(columns: number): string {` |
| 164 | fn | countTelegramRichBlocks | (private) | `function countTelegramRichBlocks(blocks: readon...` |
| 179 | fn | installTelegramStateRuntimeForTest | (private) | `function installTelegramStateRuntimeForTest(` |
| 258 | fn | expectChatNotFoundWithChatId | (private) | `async function expectChatNotFoundWithChatId(` |
| 278 | fn | expectTelegramMembershipErrorWithChatId | (private) | `async function expectTelegramMembershipErrorWit...` |
| 301 | fn | mockLoadedMedia | (private) | `function mockLoadedMedia({` |
| 317 | fn | requireMockCall | (private) | `function requireMockCall<T extends unknown[]>(c...` |
| 324 | fn | mockCall | (private) | `function mockCall(mock: ReturnType<typeof vi.fn...` |
| 330 | fn | firstMockCall | (private) | `function firstMockCall(mock: ReturnType<typeof ...` |
| 334 | fn | requireString | (private) | `function requireString(value: unknown, label: s...` |
| 341 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 348 | fn | expectMediaSendCall | (private) | `function expectMediaSendCall(` |
| 362 | fn | createRichEntityInvalidError | (private) | `function createRichEntityInvalidError(entity = ...` |
| 368 | fn | createRichContentRequiredError | (private) | `function createRichContentRequiredError(operati...` |
| 374 | fn | createHtmlParseError | (private) | `function createHtmlParseError(operation = "send...` |
| 380 | fn | createQuoteNotFoundError | (private) | `function createQuoteNotFoundError(operation = "...` |
| 386 | fn | expectPersistedTarget | (private) | `function expectPersistedTarget(fields: Record<s...` |
| 399 | fn | captureInfoLogs | (private) | `function captureInfoLogs(): string {` |
| 407 | fn | capturedLogText | (private) | `function capturedLogText(logFile: string): stri...` |
