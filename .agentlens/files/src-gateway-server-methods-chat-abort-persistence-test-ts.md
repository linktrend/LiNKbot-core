# src/gateway/server-methods/chat.abort-persistence.test.ts

[← Back to Module](../modules/src-gateway-server-methods/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1376
- **Language:** TypeScript
- **Symbols:** 13
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 24 | type | TranscriptLine | (private) | - |
| 65 | fn | readTranscriptLines | (private) | `async function readTranscriptLines(transcriptPa...` |
| 78 | fn | collectMessagesWithIdempotencyKey | (private) | `function collectMessagesWithIdempotencyKey(` |
| 91 | fn | findMessageWithIdempotencyKey | (private) | `function findMessageWithIdempotencyKey(` |
| 103 | fn | expectRecord | (private) | `function expectRecord(value: unknown, label: st...` |
| 110 | fn | expectAbortPayload | (private) | `function expectAbortPayload(payload: unknown, e...` |
| 119 | fn | expectAbortPayloadContainsRunIds | (private) | `function expectAbortPayloadContainsRunIds(paylo...` |
| 127 | fn | requireLastRespondCall | (private) | `function requireLastRespondCall(respond: Return...` |
| 136 | fn | expectPersistedAbortMessage | (private) | `function expectPersistedAbortMessage(` |
| 156 | fn | setMockSessionEntry | (private) | `function setMockSessionEntry(params: {` |
| 171 | fn | createTranscriptFixture | (private) | `async function createTranscriptFixture(prefix: ...` |
| 192 | fn | appendTranscriptMessage | (private) | `function appendTranscriptMessage(params: {` |
| 216 | fn | createMissingEntryFixture | (private) | `async function createMissingEntryFixture(prefix...` |
