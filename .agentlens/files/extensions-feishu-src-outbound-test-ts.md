# extensions/feishu/src/outbound.test.ts

[← Back to Module](../modules/extensions-feishu-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2640
- **Language:** TypeScript
- **Symbols:** 21
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 114 | fn | raceWithNextMacrotask | (private) | `async function raceWithNextMacrotask<T>(promise...` |
| 123 | type | FeishuSendText | (private) | - |
| 124 | type | FeishuMessageAdapter | (private) | - |
| 125 | type | FeishuMessageSender | (private) | - |
| 127 | fn | requireFeishuSendText | (private) | `function requireFeishuSendText(): FeishuSendText {` |
| 135 | fn | requireFeishuMessageAdapter | (private) | `function requireFeishuMessageAdapter(): FeishuM...` |
| 143 | fn | requireFeishuTextSender | (private) | `function requireFeishuTextSender(` |
| 153 | fn | requireFeishuMediaSender | (private) | `function requireFeishuMediaSender(` |
| 173 | fn | createOversizedTablePresentation | (private) | `function createOversizedTablePresentation() {` |
| 192 | fn | createElementLimitedCommandPresentation | (private) | `function createElementLimitedCommandPresentatio...` |
| 220 | fn | resetOutboundMocks | (private) | `function resetOutboundMocks() {` |
| 234 | fn | sendMessageCall | (private) | `function sendMessageCall(index = 0): Record<str...` |
| 239 | fn | sendMediaCall | (private) | `function sendMediaCall(index = 0): Record<strin...` |
| 244 | fn | sendCardCall | (private) | `function sendCardCall(index = 0): Record<string...` |
| 249 | fn | sendStructuredCardCall | (private) | `function sendStructuredCardCall(index = 0): Rec...` |
| 254 | fn | sendMarkdownCardCall | (private) | `function sendMarkdownCardCall(index = 0): Recor...` |
| 259 | fn | commentThreadParams | (private) | `function commentThreadParams(index = 0): Record...` |
| 266 | fn | cleanupReactionCall | (private) | `function cleanupReactionCall(index = 0): Record...` |
| 273 | fn | expectFeishuResult | (private) | `function expectFeishuResult(result: unknown, me...` |
| 373 | fn | createTmpImage | (private) | `async function createTmpImage(ext = ".png"): Pr...` |
| 618 | fn | createTmpImage | (private) | `async function createTmpImage(ext = ".png"): Pr...` |
