# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## extensions/sms/src/twilio.test.ts (702 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | fn | createAccount | (private) |
| 47 | fn | readUrlEncodedRequestBody | (private) |
| 57 | fn | computeTestTwilioSignature | (private) |
| 71 | fn | readTestTwilioForm | (private) |
| 77 | fn | cancelTrackedTextResponse | (private) |

## extensions/sms/src/twilio.ts (570 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | type | ParsedTwilioApiError | (private) |
| 31 | type | TwilioApiResponse | (private) |
| 37 | type | TwilioMessagePayload | (private) |
| 46 | type | TwilioIncomingPhoneNumber | pub |
| 54 | type | TwilioMessageLogEntry | pub |
| 66 | type | TwilioMessagingService | pub |
| 73 | fn | firstString | (private) |
| 80 | fn | firstTrimmedString | (private) |
| 84 | fn | firstStringish | (private) |
| 92 | fn | parseTwilioApiError | (private) |
| 108 | fn | parseTwilioSuccessPayload | (private) |
| 132 | fn | requestSearch | (private) |
| 140 | fn | stripUrlFragment | (private) |
| 145 | fn | resolveTwilioWebhookSignatureUrl | pub |
| 162 | class | TwilioSmsApiError | (private) |
| 178 | fn | parseTwilioFormBody | (private) |
| 187 | fn | computeTwilioSignature | (private) |
| 201 | fn | verifyTwilioSignature | pub |
| 220 | fn | parseTwilioInboundFrom | (private) |
| 237 | fn | resolveTwilioInboundSender | pub |
| 241 | fn | buildTwilioInboundMessage | pub |
| 255 | fn | resolveTwilioMessageSid | pub |
| 263 | fn | readTwilioWebhookForm | pub |
| 271 | fn | respondTwiml | pub |
| 277 | fn | twilioApiUrl | (private) |
| 286 | fn | twilioMessagingUrl | (private) |
| 295 | fn | basicAuthHeader | (private) |
| 299 | fn | appendTruncatedResponseSuffix | (private) |
| 303 | fn | readTwilioApiResponseText | (private) |
| 319 | fn | normalizeRequestHeaders | (private) |
| 332 | fn | requestTwilioApi | (private) |
| 375 | fn | parseTwilioIncomingPhoneNumber | (private) |
| 387 | fn | parseTwilioMessageLogEntry | (private) |
| 401 | fn | parseTwilioMessagingService | (private) |
| 412 | fn | parseTwilioListPayload | (private) |
| 440 | fn | listTwilioIncomingPhoneNumbers | pub |
| 467 | fn | retrieveTwilioMessagingService | pub |
| 495 | fn | listTwilioMessages | pub |
| 524 | fn | sendSmsViaTwilio | pub |
