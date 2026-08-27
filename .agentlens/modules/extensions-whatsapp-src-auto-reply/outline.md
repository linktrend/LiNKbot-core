# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 3 large files in this module.

## extensions/whatsapp/src/auto-reply/deliver-reply.test.ts (1064 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 48 | fn | unacceptedSendResult | (private) |
| 61 | fn | makeMsg | (private) |
| 88 | fn | mockLoadedImageMedia | (private) |
| 98 | fn | mockFirstSendMediaFailure | (private) |
| 104 | fn | mockFirstReplyFailure | (private) |
| 110 | fn | mockFirstReplyFailureWithWrappedError | (private) |
| 118 | fn | expectFirstSendMediaPayload | (private) |
| 126 | fn | requireRecord | (private) |
| 133 | fn | mockCallArg | (private) |
| 145 | fn | replyText | (private) |
| 149 | fn | findLoggerContext | (private) |
| 161 | fn | expectBuffer | (private) |
| 165 | fn | expectQuotedOptions | (private) |
| 177 | fn | mockSecondReplySuccess | (private) |
| 183 | fn | runWithFakeTimers | (private) |
| 195 | fn | createSocketOperationTimeoutError | (private) |
| 216 | fn | expectReplySuppressed | (private) |

## extensions/whatsapp/src/auto-reply/monitor.ts (724 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 58 | fn | isNonRetryableWebCloseStatus | (private) |
| 66 | type | ReplyResolver | (private) |
| 67 | type | WhatsAppRuntimeConfig | (private) |
| 73 | fn | resolveWebMonitorConfigSnapshot | (private) |
| 108 | fn | normalizeReconnectAccountId | (private) |
| 112 | fn | isNoListenerReconnectError | (private) |
| 116 | fn | resolveExplicitWhatsAppDebounceOverride | (private) |
| 141 | fn | isRetryableAuthUnstableError | (private) |
| 154 | fn | monitorWebChannel | pub |
| 175 | fn | loadCurrentMonitorConfig | (private) |
| 210 | fn | stopRequested | (private) |
| 220 | fn | handleSigint | (private) |
| 266 | fn | shouldDebounce | (private) |

## extensions/whatsapp/src/auto-reply/web-auto-reply-monitor.test.ts (874 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | fn | makeConfig | (private) |
| 42 | fn | runGroupGating | (private) |
| 73 | type | TestMessageOverrides | (private) |
| 92 | fn | createGroupMessage | (private) |
| 147 | fn | createDirectMessage | (private) |
| 193 | fn | makeOwnerGroupConfig | (private) |
| 204 | fn | makeInboundCfg | (private) |
