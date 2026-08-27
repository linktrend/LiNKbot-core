# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 3 large files in this module.

## extensions/voice-call/src/manager/events.test.ts (913 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 49 | fn | installStateRuntime | (private) |
| 90 | fn | createContext | (private) |
| 115 | fn | createProvider | (private) |
| 130 | fn | createInboundDisabledConfig | (private) |
| 139 | fn | createInboundInitiatedEvent | (private) |
| 156 | fn | createRejectingInboundContext | (private) |
| 173 | fn | requireFirstActiveCall | (private) |
| 821 | fn | expectCallerRedacted | (private) |

## extensions/voice-call/src/manager/outbound.test.ts (743 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 65 | fn | createActiveCallContext | (private) |

## extensions/voice-call/src/manager/outbound.ts (543 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | type | InitiateContext | (private) |
| 45 | type | SpeakContext | (private) |
| 56 | type | ConversationContext | (private) |
| 69 | type | EndCallContext | (private) |
| 79 | type | ConnectedCallContext | (private) |
| 81 | type | ConnectedCallLookup | (private) |
| 91 | type | ConnectedCallResolution | (private) |
| 100 | fn | lookupConnectedCall | (private) |
| 114 | fn | requireConnectedCall | (private) |
| 130 | fn | validateDtmfDigits | (private) |
| 136 | fn | initiateCall | pub |
| 274 | type | SpeakOptions | pub |
| 278 | fn | speak | pub |
| 327 | fn | shouldStartListeningAfterInitialMessage | (private) |
| 340 | fn | sendDtmf | pub |
| 369 | fn | speakInitialMessage | pub |
| 443 | fn | continueCall | pub |
| 511 | fn | endCall | pub |
