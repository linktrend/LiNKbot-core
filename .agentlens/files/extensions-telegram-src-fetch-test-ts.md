# extensions/telegram/src/fetch.test.ts

[← Back to Module](../modules/extensions-telegram-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1361
- **Language:** TypeScript
- **Symbols:** 23
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 20 | type | MockDispatcherInstance | (private) | - |
| 119 | type | TelegramDispatcherPolicy | (private) | - |
| 122 | type | DirectTelegramDispatcherPolicy | (private) | - |
| 123 | type | ExplicitProxyTelegramDispatcherPolicy | (private) | - |
| 168 | fn | resolveTelegramFetchOrThrow | (private) | `function resolveTelegramFetchOrThrow(` |
| 175 | fn | getDispatcherFromUndiciCall | (private) | `function getDispatcherFromUndiciCall(nth: numbe...` |
| 197 | fn | constructorOptions | (private) | `function constructorOptions(ctor: ReturnType<ty...` |
| 205 | fn | writeTempCa | (private) | `function writeTempCa(contents: string): string {` |
| 213 | fn | installUndiciRuntimeDeps | (private) | `function installUndiciRuntimeDeps(): void {` |
| 231 | fn | buildFetchFallbackError | (private) | `function buildFetchFallbackError(code: string) {` |
| 240 | fn | buildCodeLessFetchFallbackError | (private) | `function buildCodeLessFetchFallbackError() {` |
| 251 | fn | runDefaultStickyIpv4FallbackProbe | (private) | `async function runDefaultStickyIpv4FallbackProb...` |
| 262 | fn | primeStickyFallbackRetry | (private) | `function primeStickyFallbackRetry(code = "EHOST...` |
| 269 | fn | expectStickyAutoSelectDispatcher | (private) | `function expectStickyAutoSelectDispatcher(` |
| 287 | fn | expectTelegramKeepAliveOptions | (private) | `function expectTelegramKeepAliveOptions(options...` |
| 292 | fn | expectHttp1OnlyDispatcher | (private) | `function expectHttp1OnlyDispatcher(` |
| 304 | fn | expectPinnedIpv4ConnectDispatcher | (private) | `function expectPinnedIpv4ConnectDispatcher(args: {` |
| 320 | fn | expectPinnedFallbackIpDispatcher | (private) | `function expectPinnedFallbackIpDispatcher(callI...` |
| 334 | fn | expectCallerDispatcherPreserved | (private) | `function expectCallerDispatcherPreserved(callIn...` |
| 343 | fn | loggerHasMessageContaining | (private) | `function loggerHasMessageContaining(logger: Ret...` |
| 349 | fn | expectLoggerMessageContaining | (private) | `function expectLoggerMessageContaining(logger: ...` |
| 353 | fn | expectNoLoggerMessageContaining | (private) | `function expectNoLoggerMessageContaining(logger...` |
| 357 | fn | expectNoStickyRetryWithSameDispatcher | (private) | `async function expectNoStickyRetryWithSameDispa...` |
