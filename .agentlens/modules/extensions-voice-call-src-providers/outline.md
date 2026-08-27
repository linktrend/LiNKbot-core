# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 3 large files in this module.

## extensions/voice-call/src/providers/plivo.ts (628 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | interface | PlivoProviderOptions | (private) |
| 40 | type | PendingSpeak | (private) |
| 41 | type | PendingListen | (private) |
| 43 | fn | createPlivoRequestDedupeKey | (private) |
| 55 | class | PlivoProvider | pub |
| 624 | type | PlivoCreateCallResponse | (private) |

## extensions/voice-call/src/providers/twilio.test.ts (768 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | fn | createProvider | (private) |
| 31 | fn | createContext | (private) |
| 41 | fn | expectStreamingTwiml | (private) |
| 47 | fn | expectQueueTwiml | (private) |
| 53 | fn | requireResponseBody | (private) |
| 60 | fn | requireEvent | (private) |
| 67 | type | TwilioApiRequest | (private) |
| 73 | fn | createApiRequestMock | (private) |
| 77 | fn | requireApiRequestCall | (private) |
| 88 | fn | expectApiRequestEndpoint | (private) |
| 97 | fn | createTwilioCallStateRaceError | (private) |
| 107 | fn | configureTelephonyTwiMlFallback | (private) |

## extensions/voice-call/src/providers/twilio.ts (873 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | fn | isTwilioCallNotInProgressError | (private) |
| 49 | fn | createTwilioRequestDedupeKey | (private) |
| 70 | type | StreamSendResult | (private) |
| 74 | type | TwilioProviderConfig | (private) |
| 80 | class | TwilioProvider | pub |
| 705 | fn | raw | (private) |
| 713 | fn | raw | (private) |
| 721 | fn | sendKeepAlive | (private) |
| 866 | interface | TwilioCallResponse | (private) |
