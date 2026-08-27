# extensions/openai/image-generation-provider.test.ts

[← Back to Module](../modules/extensions-openai/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2354
- **Language:** TypeScript
- **Symbols:** 21
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 84 | fn | mockGeneratedPngResponse | (private) | `function mockGeneratedPngResponse() {` |
| 100 | fn | mockCodexImageStream | (private) | `function mockCodexImageStream(params: { imageDa...` |
| 126 | fn | mockCodexCompletedImageStream | (private) | `function mockCodexCompletedImageStream(` |
| 155 | fn | mockCodexRawStream | (private) | `function mockCodexRawStream(body: string) {` |
| 162 | fn | mockCodexAuthOnly | (private) | `function mockCodexAuthOnly() {` |
| 171 | fn | createCodexOAuthAuthStore | (private) | `function createCodexOAuthAuthStore() {` |
| 186 | fn | createCodexApiKeyAuthStore | (private) | `function createCodexApiKeyAuthStore() {` |
| 199 | fn | createCodexTokenAuthStore | (private) | `function createCodexTokenAuthStore() {` |
| 212 | fn | createMixedCodexAuthStore | (private) | `function createMixedCodexAuthStore() {` |
| 222 | fn | createMixedOpenAIAuthStore | (private) | `function createMixedOpenAIAuthStore() {` |
| 242 | type | MockWithCalls | (private) | - |
| 248 | type | HttpConfigCall | (private) | - |
| 259 | type | RequestCall | (private) | - |
| 270 | type | AuthResolutionCall | (private) | - |
| 285 | fn | mockCallArg | (private) | `function mockCallArg(mock: MockWithCalls, callI...` |
| 296 | fn | jsonRequestCall | (private) | `function jsonRequestCall(callIndex = 0): Reques...` |
| 300 | fn | multipartRequestCall | (private) | `function multipartRequestCall(callIndex = 0): R...` |
| 304 | fn | httpConfigCall | (private) | `function httpConfigCall(callIndex = 0): HttpCon...` |
| 308 | fn | authResolutionCall | (private) | `function authResolutionCall(callIndex = 0): Aut...` |
| 312 | fn | expectNoJsonRequestUrl | (private) | `function expectNoJsonRequestUrl(expectedUrl: st...` |
| 318 | fn | expectNoJsonRequestUrlContaining | (private) | `function expectNoJsonRequestUrlContaining(expec...` |
