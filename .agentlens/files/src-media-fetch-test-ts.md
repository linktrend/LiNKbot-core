# src/media/fetch.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1286
- **Language:** TypeScript
- **Symbols:** 25
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 18 | type | FetchModule | (private) | - |
| 19 | type | ReadRemoteMediaBuffer | (private) | - |
| 20 | type | SaveRemoteMedia | (private) | - |
| 21 | type | SaveResponseMedia | (private) | - |
| 22 | type | LookupFn | (private) | - |
| 29 | fn | makeStream | (private) | `function makeStream(chunks: Uint8Array[]) {` |
| 40 | fn | makeCancelableStream | (private) | `function makeCancelableStream(chunks: Uint8Arra...` |
| 55 | fn | makeStallingFetch | (private) | `function makeStallingFetch(firstChunk: Uint8Arr...` |
| 68 | fn | makeLookupFn | (private) | `function makeLookupFn(): LookupFn {` |
| 72 | fn | abortReasonError | (private) | `function abortReasonError(signal?: AbortSignal ...` |
| 78 | fn | requireFetchGuardRequest | (private) | `function requireFetchGuardRequest(): unknown {` |
| 86 | fn | expectRemoteMediaMaxBytesError | (private) | `async function expectRemoteMediaMaxBytesError(p...` |
| 100 | fn | expectRedactedBotTokenFetchError | (private) | `async function expectRedactedBotTokenFetchError...` |
| 123 | fn | expectReadRemoteMediaBufferRejected | (private) | `async function expectReadRemoteMediaBufferRejec...` |
| 154 | fn | expectReadRemoteMediaBufferResolvesToError | (private) | `async function expectReadRemoteMediaBufferResol...` |
| 165 | fn | expectReadRemoteMediaBufferIdleTimeoutCase | (private) | `async function expectReadRemoteMediaBufferIdleT...` |
| 188 | fn | expectBoundedErrorBodyCase | (private) | `async function expectBoundedErrorBodyCase(` |
| 201 | fn | expectPrivateIpFetchBlockedCase | (private) | `async function expectPrivateIpFetchBlockedCase() {` |
| 211 | fn | createReadRemoteMediaBufferParams | (private) | `function createReadRemoteMediaBufferParams(` |
| 413 | fn | rejectForAbort | (private) | `const rejectForAbort = () => reject(abortReason...` |
| 450 | fn | failForAbort | (private) | `const failForAbort = () => controller.error(sig...` |
| 491 | fn | rejectForAbort | (private) | `const rejectForAbort = () => reject(abortReason...` |
| 525 | fn | failForAbort | (private) | `const failForAbort = () => controller.error(sig...` |
| 830 | fn | failForAbort | (private) | `const failForAbort = () => controller.error(sig...` |
| 877 | fn | failForAbort | (private) | `const failForAbort = () => controller.error(sig...` |
