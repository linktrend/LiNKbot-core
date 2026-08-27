# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## extensions/qa-lab/src/live-transports/discord/discord-live.runtime.test.ts (729 lines)

_No symbols extracted._

## extensions/qa-lab/src/live-transports/discord/discord-live.runtime.ts (1440 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 24 | type | DiscordQaRuntimeEnv | (private) |
| 33 | type | DiscordQaScenarioId | (private) |
| 41 | type | DiscordQaScenarioRun | (private) |
| 68 | type | DiscordQaScenarioDefinition | (private) |
| 75 | type | DiscordUser | (private) |
| 81 | type | DiscordMessage | (private) |
| 93 | type | DiscordAttachment | (private) |
| 100 | type | DiscordThread | (private) |
| 106 | type | DiscordReaction | (private) |
| 115 | type | DiscordApplicationCommand | (private) |
| 120 | type | DiscordChannel | (private) |
| 129 | type | DiscordVoiceState | (private) |
| 135 | type | DiscordObservedMessage | (private) |
| 152 | type | DiscordObservedMessageArtifact | (private) |
| 169 | type | DiscordQaScenarioResult | (private) |
| 186 | type | DiscordReactionSnapshot | (private) |
| 196 | type | DiscordStatusReactionTimeline | (private) |
| 208 | type | DiscordThreadReplyAttachmentEvidence | (private) |
| 326 | fn | isDiscordSnowflake | (private) |
| 330 | fn | assertDiscordSnowflake | (private) |
| 336 | fn | resolveEnvValue | (private) |
| 344 | fn | resolveDiscordQaRuntimeEnv | (private) |
| 358 | fn | validateDiscordQaRuntimeEnv | (private) |
| 367 | fn | parseDiscordQaCredentialPayload | (private) |
| 381 | fn | buildDiscordQaConfig | (private) |
| 472 | fn | getCurrentDiscordUser | (private) |
| 478 | fn | listGuildChannels | (private) |
| 488 | fn | getDiscordChannel | (private) |
| 494 | fn | isDiscordVoiceChannel | (private) |
| 498 | fn | resolveDiscordQaVoiceChannel | (private) |
| 537 | fn | getCurrentDiscordVoiceState | (private) |
| 554 | fn | waitForDiscordVoiceState | (private) |
| 595 | fn | sendChannelMessage | (private) |
| 607 | fn | getChannelMessage | (private) |
| 617 | fn | listChannelMessagesAfter | (private) |
| 635 | fn | createThreadFromMessage | (private) |
| 654 | fn | archiveDiscordThread | (private) |
| 664 | fn | joinDiscordThread | (private) |
| 671 | fn | listThreadMessages | (private) |
| 681 | fn | reactionEmojiName | (private) |
| 685 | fn | normalizeDiscordReactionSnapshot | (private) |
| 704 | fn | computeDiscordRttMs | (private) |
| 716 | fn | collectSeenReactionSequence | (private) |
| 734 | fn | renderDiscordStatusReactionHtml | (private) |
| 801 | fn | writeDiscordStatusReactionEvidence | (private) |
| 818 | fn | writeHtmlScreenshot | (private) |
| 847 | fn | renderDiscordThreadReplyAttachmentHtml | (private) |
| 900 | fn | writeDiscordThreadReplyAttachmentEvidence | (private) |
| 950 | fn | observeStatusReactionTimeline | (private) |
| 994 | fn | listApplicationCommands | (private) |
| 1004 | fn | compareDiscordSnowflakes | (private) |
| 1010 | fn | buildDiscordWebMessageUrl | (private) |
| 1020 | fn | normalizeDiscordObservedMessage | (private) |
| 1037 | fn | pollChannelMessages | (private) |
| 1087 | fn | pollThreadReplyMessage | (private) |
| 1115 | fn | runDiscordThreadReplyFilePathAttachmentScenario | (private) |
| 1241 | fn | waitForDiscordChannelRunning | (private) |
| 1304 | fn | buildObservedMessagesArtifact | (private) |
| 1347 | fn | findScenario | (private) |
| 1360 | fn | matchesDiscordScenarioReply | (private) |
| 1373 | fn | assertDiscordApplicationCommandsRegistered | (private) |
