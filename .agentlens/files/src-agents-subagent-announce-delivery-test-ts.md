# src/agents/subagent-announce-delivery.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 6010
- **Language:** TypeScript
- **Symbols:** 19
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 60 | type | EmbeddedAgentQueueFailureReason | (private) | - |
| 84 | fn | createGatewayMock | (private) | `function createGatewayMock(response: Record<str...` |
| 91 | fn | createInProcessGatewayMock | (private) | `function createInProcessGatewayMock(response: R...` |
| 95 | fn | createSendMessageMock | (private) | `function createSendMessageMock() {` |
| 105 | fn | readyCronContinuationEntry | (private) | `function readyCronContinuationEntry(sessionId: ...` |
| 117 | type | QueueEmbeddedAgentMessageWithOutcome | (private) | - |
| 123 | fn | createQueueOutcomeMock | (private) | `function createQueueOutcomeMock(` |
| 145 | fn | createQueueOutcomeSequenceMock | (private) | `function createQueueOutcomeSequenceMock(` |
| 177 | fn | expectRecordFields | (private) | `function expectRecordFields(record: unknown, ex...` |
| 188 | fn | asMock | (private) | `function asMock(fn: unknown) {` |
| 192 | fn | registerDirectTargetTestChannel | (private) | `function registerDirectTargetTestChannel(channe...` |
| 213 | fn | mockCallArg | (private) | `function mockCallArg(fn: unknown, callIndex = 0...` |
| 221 | fn | expectGatewayAgentParams | (private) | `function expectGatewayAgentParams(` |
| 229 | fn | expectInProcessAgentParams | (private) | `function expectInProcessAgentParams(` |
| 239 | fn | deliverSlackThreadAnnouncement | (private) | `async function deliverSlackThreadAnnouncement(p...` |
| 285 | fn | deliverDiscordDirectMessageCompletion | (private) | `async function deliverDiscordDirectMessageCompl...` |
| 333 | fn | deliverTelegramDirectMessageCompletion | (private) | `async function deliverTelegramDirectMessageComp...` |
| 392 | fn | deliverSlackChannelAnnouncement | (private) | `async function deliverSlackChannelAnnouncement(...` |
| 747 | fn | deliverSteeredAnnouncement | (private) | `async function deliverSteeredAnnouncement(param...` |
