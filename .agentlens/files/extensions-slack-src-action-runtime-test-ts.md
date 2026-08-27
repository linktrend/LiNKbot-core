# extensions/slack/src/action-runtime.test.ts

[← Back to Module](../modules/extensions-slack-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1711
- **Language:** TypeScript
- **Symbols:** 16
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 55 | fn | slackConfig | (private) | `function slackConfig(overrides?: Record<string,...` |
| 76 | fn | createReplyToFirstContext | (private) | `function createReplyToFirstContext(hasRepliedRe...` |
| 85 | fn | createReplyToFirstScenario | (private) | `function createReplyToFirstScenario() {` |
| 93 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 100 | fn | requireArray | (private) | `function requireArray(value: unknown, label: st...` |
| 108 | fn | requireMockCall | (private) | `function requireMockCall(` |
| 120 | fn | requireMockArg | (private) | `function requireMockArg(` |
| 129 | fn | requireRecordArg | (private) | `function requireRecordArg(` |
| 141 | fn | expectRecordFields | (private) | `function expectRecordFields(record: Record<stri...` |
| 147 | fn | requireSlackSendCall | (private) | `function requireSlackSendCall(index: number) {` |
| 155 | fn | expectSlackSendCall | (private) | `function expectSlackSendCall(` |
| 168 | fn | expectLastSlackSend | (private) | `function expectLastSlackSend(content: string, c...` |
| 177 | fn | requireDetails | (private) | `function requireDetails(result: Awaited<ReturnT...` |
| 181 | fn | sendSecondMessageAndExpectNoThread | (private) | `async function sendSecondMessageAndExpectNoThre...` |
| 251 | fn | resolveReadToken | (private) | `async function resolveReadToken(cfg: OpenClawCo...` |
| 259 | fn | resolveSendToken | (private) | `async function resolveSendToken(cfg: OpenClawCo...` |
