# extensions/voice-call/src/webhook.test.ts

[← Back to Module](../modules/extensions-voice-call/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2353
- **Language:** TypeScript
- **Symbols:** 30
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 66 | type | TwilioProviderTestDouble | (private) | - |
| 76 | type | VoiceCallConfigInput | (private) | - |
| 127 | fn | createManager | (private) | `const createManager = (calls: CallRecord[]) => {` |
| 139 | fn | hasPort | (private) | `function hasPort(value: unknown): value is { po...` |
| 147 | fn | requireBoundRequestUrl | (private) | `function requireBoundRequestUrl(server: VoiceCa...` |
| 148 | fn | address | (private) | `const address = (` |
| 159 | fn | requireFirstMockCall | (private) | `function requireFirstMockCall(calls: readonly u...` |
| 167 | fn | createCapturingLogger | (private) | `function createCapturingLogger() {` |
| 169 | fn | capture | (private) | `const capture = (message: string) => messages.p...` |
| 176 | fn | expectPrivateLogMetadata | (private) | `function expectPrivateLogMetadata(params: {` |
| 192 | fn | expectWebhookUrl | (private) | `function expectWebhookUrl(url: string, expected...` |
| 199 | fn | expectNoTwilioStreamState | (private) | `function expectNoTwilioStreamState(providerLoca...` |
| 208 | fn | expectTwilioReplayTwiML | (private) | `async function expectTwilioReplayTwiML(response...` |
| 214 | fn | createTwilioVerificationProvider | (private) | `function createTwilioVerificationProvider(` |
| 225 | fn | createTwilioStreamingProvider | (private) | `function createTwilioStreamingProvider(` |
| 403 | type | MediaStreamRequestDouble | (private) | - |
| 551 | fn | runStaleCallReaperCase | (private) | `async function runStaleCallReaperCase(params: {` |
| 574 | fn | postWebhookForm | (private) | `async function postWebhookForm(server: VoiceCal...` |
| 583 | fn | postWebhookFormWithHeaders | (private) | `async function postWebhookFormWithHeaders(` |
| 600 | fn | postWebhookFormWithHeadersResult | (private) | `async function postWebhookFormWithHeadersResult(` |
| 644 | fn | requestWebSocketUpgrade | (private) | `async function requestWebSocketUpgrade(` |
| 658 | fn | finish | (private) | `const finish = (` |
| 713 | fn | createRealtimeRoutingServer | (private) | `function createRealtimeRoutingServer(streamPath...` |
| 896 | fn | runWebhookPipeline | (private) | `const runWebhookPipeline = (` |
| 1661 | fn | runWebhookPipeline | (private) | `const runWebhookPipeline = (` |
| 1699 | fn | makeRequestWithoutRemoteAddress | (private) | `const makeRequestWithoutRemoteAddress = () =>` |
| 2032 | fn | createTwilioProvider | (private) | `const createTwilioProvider = (` |
| 2039 | fn | getMediaCallbacks | (private) | `const getMediaCallbacks = (server: VoiceCallWeb...` |
| 2298 | fn | buildManagerWith | (private) | `const buildManagerWith = (call: CallRecord, res...` |
| 2311 | fn | installHandleInboundResponseSpy | (private) | `const installHandleInboundResponseSpy = (server...` |
