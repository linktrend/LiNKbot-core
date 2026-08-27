# extensions/telegram/src/bot/delivery.resolve-media-retry.test.ts

[← Back to Module](../modules/extensions-telegram-src-bot/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1229
- **Language:** TypeScript
- **Symbols:** 20
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 45 | class | MediaFetchError | (private) | - |
| 82 | fn | makeCtx | (private) | `function makeCtx(` |
| 161 | fn | setupTransientGetFileRetry | (private) | `function setupTransientGetFileRetry() {` |
| 180 | fn | mockPdfFetchAndSave | (private) | `function mockPdfFetchAndSave(fileName: string |...` |
| 192 | fn | createFileTooBigError | (private) | `function createFileTooBigError(): Error {` |
| 196 | fn | createFileTooBigGrammyError | (private) | `function createFileTooBigGrammyError(): GrammyE...` |
| 210 | fn | createRateLimitGrammyError | (private) | `function createRateLimitGrammyError(retryAfterS...` |
| 224 | fn | createFileAccessError | (private) | `function createFileAccessError(code: string, me...` |
| 228 | fn | resolveMediaWithDefaults | (private) | `function resolveMediaWithDefaults(` |
| 240 | fn | requireResolvedMedia | (private) | `function requireResolvedMedia(` |
| 250 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 257 | fn | expectRecordFields | (private) | `function expectRecordFields(record: Record<stri...` |
| 263 | fn | requireReadRemoteMediaBufferParams | (private) | `function requireReadRemoteMediaBufferParams(cal...` |
| 271 | fn | expectReadRemoteMediaBufferFields | (private) | `function expectReadRemoteMediaBufferFields(fiel...` |
| 275 | fn | expectFetchSsrfPolicyFields | (private) | `function expectFetchSsrfPolicyFields(fields: Re...` |
| 280 | fn | expectResolvedMediaFields | (private) | `function expectResolvedMediaFields(` |
| 288 | fn | expectMediaFetchError | (private) | `async function expectMediaFetchError(` |
| 307 | fn | expectSaveMediaBufferCall | (private) | `function expectSaveMediaBufferCall(callIndex: n...` |
| 319 | fn | expectTransientGetFileRetrySuccess | (private) | `async function expectTransientGetFileRetrySucce...` |
| 335 | fn | flushRetryTimers | (private) | `async function flushRetryTimers() {` |
