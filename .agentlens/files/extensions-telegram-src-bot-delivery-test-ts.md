# extensions/telegram/src/bot/delivery.test.ts

[← Back to Module](../modules/extensions-telegram-src-bot/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2164
- **Language:** TypeScript
- **Symbols:** 24
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 24 | type | DeliverRepliesParams | (private) | - |
| 25 | type | DeliverWithParams | (private) | - |
| 30 | type | RuntimeStub | (private) | - |
| 80 | fn | createRuntime | (private) | `function createRuntime(withLog = true): Runtime...` |
| 88 | fn | createBot | (private) | `function createBot(api: Record<string, unknown>...` |
| 138 | fn | deliverWith | (private) | `async function deliverWith(params: DeliverWithP...` |
| 146 | fn | mockMediaLoad | (private) | `function mockMediaLoad(fileName: string, conten...` |
| 154 | fn | createObservedPromptContextSequence | (private) | `function createObservedPromptContextSequence(` |
| 167 | fn | expectRecordFields | (private) | `function expectRecordFields(record: unknown, ex...` |
| 178 | fn | mockCallArg | (private) | `function mockCallArg(mock: ReturnType<typeof vi...` |
| 186 | fn | firstMockCallArg | (private) | `function firstMockCallArg(mock: ReturnType<type...` |
| 190 | fn | firstSendText | (private) | `function firstSendText(mock: ReturnType<typeof ...` |
| 196 | fn | createSendMessageHarness | (private) | `function createSendMessageHarness(messageId = 4) {` |
| 206 | fn | createVoiceMessagesForbiddenError | (private) | `function createVoiceMessagesForbiddenError() {` |
| 212 | fn | createThreadNotFoundError | (private) | `function createThreadNotFoundError(operation = ...` |
| 218 | fn | createQuoteNotFoundError | (private) | `function createQuoteNotFoundError(operation = "...` |
| 224 | fn | createQuoteTextInvalidError | (private) | `function createQuoteTextInvalidError(operation ...` |
| 230 | fn | createNormalizedQuoteTextInvalidError | (private) | `function createNormalizedQuoteTextInvalidError(...` |
| 236 | fn | createRichEntityInvalidError | (private) | `function createRichEntityInvalidError(entity = ...` |
| 242 | fn | createRichContentRequiredError | (private) | `function createRichContentRequiredError(operati...` |
| 248 | fn | createHtmlParseError | (private) | `function createHtmlParseError(operation = "send...` |
| 254 | fn | createWrappedConnectTimeoutHttpError | (private) | `function createWrappedConnectTimeoutHttpError(o...` |
| 266 | fn | createPlainHttpError | (private) | `function createPlainHttpError(operation = "send...` |
| 273 | fn | createVoiceFailureHarness | (private) | `function createVoiceFailureHarness(params: {` |
