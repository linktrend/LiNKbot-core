# extensions/telegram/src/draft-stream.test.ts

[← Back to Module](../modules/extensions-telegram-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1916
- **Language:** TypeScript
- **Symbols:** 17
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 12 | type | TelegramDraftStreamParams | (private) | - |
| 13 | type | MockSendMessage | (private) | - |
| 18 | type | MockSendRichMessage | (private) | - |
| 22 | fn | createMockDraftApi | (private) | `function createMockDraftApi(sendMessageImpl?: (...` |
| 37 | fn | createForumDraftStream | (private) | `function createForumDraftStream(api: ReturnType...` |
| 41 | fn | createThreadedDraftStream | (private) | `function createThreadedDraftStream(` |
| 48 | fn | createDraftStream | (private) | `function createDraftStream(` |
| 59 | fn | expectInitialForumSend | (private) | `async function expectInitialForumSend(` |
| 70 | fn | expectPreviewSend | (private) | `function expectPreviewSend(` |
| 78 | fn | expectNthPreviewSend | (private) | `function expectNthPreviewSend(` |
| 87 | fn | requireSendMessageCallText | (private) | `function requireSendMessageCallText(` |
| 99 | fn | expectPreviewEdit | (private) | `function expectPreviewEdit(` |
| 111 | fn | createForceNewMessageHarness | (private) | `function createForceNewMessageHarness(params: {...` |
| 341 | fn | retryableEditError | (private) | `const retryableEditError = () =>` |
| 803 | fn | expectSendMayHaveLandedStateAfterFirstFailure | (private) | `async function expectSendMayHaveLandedStateAfte...` |
| 1798 | fn | createMockApi | (private) | `const createMockApi = () => createMockDraftApi(...` |
| 1800 | fn | createDebouncedStream | (private) | `function createDebouncedStream(api: ReturnType<...` |
