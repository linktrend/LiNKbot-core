# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 3 large files in this module.

## extensions/slack/src/monitor/events/interactions.block-actions.ts (1177 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 46 | type | InteractionMessageBlock | (private) |
| 52 | type | SelectOption | (private) |
| 57 | type | InteractionSelectionFields | (private) |
| 86 | type | InteractionSummary | (private) |
| 100 | type | SlackActionSummary | (private) |
| 102 | type | SlackBlockActionBody | (private) |
| 112 | type | SlackBlockActionRespond | (private) |
| 114 | type | ParsedSlackBlockAction | (private) |
| 132 | fn | readOptionValues | (private) |
| 142 | fn | readOptionLabels | (private) |
| 154 | fn | uniqueNonEmptyStrings | (private) |
| 158 | fn | collectRichTextFragments | (private) |
| 173 | fn | summarizeRichTextPreview | (private) |
| 187 | fn | readInteractionAction | (private) |
| 194 | fn | summarizeAction | pub |
| 294 | fn | formatInteractionSelectionLabel | (private) |
| 339 | fn | formatInteractionConfirmationText | (private) |
| 348 | fn | buildSlackPluginInteractionData | (private) |
| 372 | fn | isSlackReplyActionId | (private) |
| 381 | fn | readSlackApprovalAction | (private) |
| 390 | fn | isSlackReplyLinkAction | (private) |
| 401 | fn | buildSlackPluginInteractionId | (private) |
| 423 | fn | parseSlackBlockAction | (private) |
| 459 | fn | respondEphemeral | (private) |
| 476 | fn | updateSlackInteractionMessage | (private) |
| 494 | type | SlackApprovalTerminalState | (private) |
| 499 | fn | resolveSlackApprovalTerminalLabel | (private) |
| 512 | fn | removeSlackApprovalControls | (private) |
| 529 | fn | buildSlackApprovalTerminalBlocks | (private) |
| 551 | fn | authorizeSlackBlockAction | (private) |
| 582 | fn | handleSlackPluginBindingApproval | (private) |
| 612 | fn | handleSlackApprovalInteraction | (private) |
| 698 | fn | handleSlackLegacyApprovalInteraction | (private) |
| 768 | fn | dispatchSlackPluginInteraction | (private) |
| 852 | fn | resolveSlackBlockActionCommandAuthorized | (private) |
| 915 | fn | enqueueSlackBlockActionEvent | (private) |
| 975 | fn | buildSlackConfirmationBlocks | (private) |
| 1004 | fn | updateSlackLegacyBlockAction | (private) |
| 1034 | fn | handleSlackBlockAction | (private) |
| 1160 | fn | registerSlackBlockActionHandler | pub |

## extensions/slack/src/monitor/events/interactions.test.ts (3925 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | type | DispatchPluginInteractiveHandlerResult | (private) |
| 22 | type | ApprovalResolveMockResult | (private) |
| 111 | fn | parsePluginBindingApprovalCustomId | (private) |
| 153 | type | RegisteredHandler | (private) |
| 168 | type | RegisteredViewHandler | (private) |
| 187 | type | RegisteredViewClosedHandler | (private) |
| 207 | type | RegisteredShortcutHandler | (private) |
| 211 | fn | createContext | (private) |
| 351 | type | UnknownMock | (private) |
| 353 | fn | mockCallArg | (private) |
| 365 | fn | requireRecord | (private) |
| 372 | fn | hasLoneSurrogate | (private) |
| 379 | fn | expectRecordFields | (private) |
| 388 | fn | slackInteractionPayload | (private) |
| 396 | fn | enqueueSystemEventText | (private) |
| 404 | fn | chatUpdateCall | (private) |
| 411 | fn | inputByActionId | (private) |

## extensions/slack/src/monitor/events/messages.test.ts (765 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | fn | makeLogger | (private) |
| 62 | fn | inboundLogLines | (private) |
| 68 | type | MessageHandler | (private) |
| 74 | type | RegisteredEventName | (private) |
| 76 | type | MessageCase | (private) |
| 82 | fn | createHandlers | (private) |
| 95 | fn | createEnterpriseHandlers | (private) |
| 110 | fn | requireMessageHandler | (private) |
| 117 | fn | resetMessageMocks | (private) |
| 131 | fn | makeChangedEvent | (private) |
| 143 | fn | makeAssistantChangedEvent | (private) |
| 182 | fn | makeDeletedEvent | (private) |
| 196 | fn | makeThreadBroadcastEvent | (private) |
| 208 | fn | makeAppMentionEvent | (private) |
| 223 | fn | invokeRegisteredHandler | (private) |
| 237 | fn | runMessageCase | (private) |
