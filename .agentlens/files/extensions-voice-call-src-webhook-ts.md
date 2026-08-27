# extensions/voice-call/src/webhook.ts

[← Back to Module](../modules/extensions-voice-call/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1038
- **Language:** TypeScript
- **Symbols:** 11
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 53 | type | Logger | (private) | - |
| 68 | type | WebhookHeaderGateResult | (private) | - |
| 75 | fn | appendRecentTalkEventMetadata | (private) | `function appendRecentTalkEventMetadata(call: Ca...` |
| 97 | fn | buildRequestUrl | (private) | `function buildRequestUrl(requestUrl: string | u...` |
| 101 | fn | resolveForwardedClientIp | (private) | `function resolveForwardedClientIp(` |
| 129 | fn | normalizeWebhookResponse | (private) | `function normalizeWebhookResponse(parsed: {` |
| 141 | fn | buildRealtimeRejectedTwiML | (private) | `function buildRealtimeRejectedTwiML(): WebhookR...` |
| 149 | fn | buildTwilioReplayTwiML | (private) | `function buildTwilioReplayTwiML(): WebhookRespo...` |
| 161 | type | CachedWebhookResponse | (private) | - |
| 166 | fn | cloneWebhookResponsePayload | (private) | `function cloneWebhookResponsePayload(payload: W...` |
| 178 | class | VoiceCallWebhookServer | pub | - |

## Public API
