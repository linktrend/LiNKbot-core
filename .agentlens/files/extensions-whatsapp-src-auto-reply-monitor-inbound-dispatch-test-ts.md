# extensions/whatsapp/src/auto-reply/monitor/inbound-dispatch.test.ts

[← Back to Module](../modules/extensions-whatsapp-src-auto-reply-monitor/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1721
- **Language:** TypeScript
- **Symbols:** 30
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 7 | type | CapturedReplyPayload | (private) | - |
| 17 | type | CapturedDispatchParams | (private) | - |
| 130 | type | TestRoute | (private) | - |
| 131 | type | TestMsg | (private) | - |
| 132 | type | TestMsgOverrides | (private) | - |
| 133 | type | TestAdmissionOverride | (private) | - |
| 135 | fn | testReceipt | (private) | `function testReceipt(messageIds: string[]) {` |
| 148 | fn | makeRoute | (private) | `function makeRoute(overrides: Partial<TestRoute...` |
| 161 | fn | makeMsg | (private) | `function makeMsg(overrides: TestMsgOverrides = ...` |
| 189 | fn | directAdmission | (private) | `function directAdmission(conversationId: string...` |
| 201 | fn | groupAdmission | (private) | `function groupAdmission(conversationId: string)...` |
| 213 | fn | getCapturedDeliver | (private) | `function getCapturedDeliver() {` |
| 217 | fn | getCapturedOnError | (private) | `function getCapturedOnError() {` |
| 221 | fn | getCapturedOnSettled | (private) | `function getCapturedOnSettled() {` |
| 225 | fn | getCapturedReplyOptions | (private) | `function getCapturedReplyOptions() {` |
| 229 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 236 | fn | expectRecordFields | (private) | `function expectRecordFields(record: Record<stri...` |
| 242 | fn | requireMockArg | (private) | `function requireMockArg(` |
| 251 | fn | requireLastMockArg | (private) | `function requireLastMockArg(` |
| 260 | fn | expectReplyResultFields | (private) | `function expectReplyResultFields(` |
| 268 | fn | expectRememberSentContextFields | (private) | `function expectRememberSentContextFields(` |
| 278 | type | BufferedReplyParams | (private) | - |
| 279 | type | BufferedReplyOverrides | (private) | - |
| 283 | fn | finalizedContext | (private) | `function finalizedContext(` |
| 289 | fn | makeReplyLogger | (private) | `function makeReplyLogger(): BufferedReplyParams...` |
| 298 | fn | acceptedDeliveryResult | (private) | `function acceptedDeliveryResult() {` |
| 313 | fn | unacceptedDeliveryResult | (private) | `function unacceptedDeliveryResult() {` |
| 321 | fn | dispatchBufferedReply | (private) | `async function dispatchBufferedReply(overrides:...` |
| 346 | fn | runWhatsAppReplyPlan | (private) | `async function runWhatsAppReplyPlan(params: Buf...` |
| 1513 | class | BoomLikeError | (private) | - |
