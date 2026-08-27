# extensions/qa-lab/src/live-transports/discord/discord-live.runtime.ts

[← Back to Module](../modules/extensions-qa-lab-src-live-transports-discord/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1440
- **Language:** TypeScript
- **Symbols:** 61
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 24 | type | DiscordQaRuntimeEnv | (private) | - |
| 33 | type | DiscordQaScenarioId | (private) | - |
| 41 | type | DiscordQaScenarioRun | (private) | - |
| 68 | type | DiscordQaScenarioDefinition | (private) | - |
| 75 | type | DiscordUser | (private) | - |
| 81 | type | DiscordMessage | (private) | - |
| 93 | type | DiscordAttachment | (private) | - |
| 100 | type | DiscordThread | (private) | - |
| 106 | type | DiscordReaction | (private) | - |
| 115 | type | DiscordApplicationCommand | (private) | - |
| 120 | type | DiscordChannel | (private) | - |
| 129 | type | DiscordVoiceState | (private) | - |
| 135 | type | DiscordObservedMessage | (private) | - |
| 152 | type | DiscordObservedMessageArtifact | (private) | - |
| 169 | type | DiscordQaScenarioResult | (private) | - |
| 186 | type | DiscordReactionSnapshot | (private) | - |
| 196 | type | DiscordStatusReactionTimeline | (private) | - |
| 208 | type | DiscordThreadReplyAttachmentEvidence | (private) | - |
| 326 | fn | isDiscordSnowflake | (private) | `function isDiscordSnowflake(value: string) {` |
| 330 | fn | assertDiscordSnowflake | (private) | `function assertDiscordSnowflake(value: string, ...` |
| 336 | fn | resolveEnvValue | (private) | `function resolveEnvValue(env: NodeJS.ProcessEnv...` |
| 344 | fn | resolveDiscordQaRuntimeEnv | (private) | `function resolveDiscordQaRuntimeEnv(env: NodeJS...` |
| 358 | fn | validateDiscordQaRuntimeEnv | (private) | `function validateDiscordQaRuntimeEnv(runtimeEnv...` |
| 367 | fn | parseDiscordQaCredentialPayload | (private) | `function parseDiscordQaCredentialPayload(payloa...` |
| 381 | fn | buildDiscordQaConfig | (private) | `function buildDiscordQaConfig(` |
| 472 | fn | getCurrentDiscordUser | (private) | `async function getCurrentDiscordUser(token: str...` |
| 478 | fn | listGuildChannels | (private) | `async function listGuildChannels(params: { toke...` |
| 488 | fn | getDiscordChannel | (private) | `async function getDiscordChannel(params: { toke...` |
| 494 | fn | isDiscordVoiceChannel | (private) | `function isDiscordVoiceChannel(channel: Discord...` |
| 498 | fn | resolveDiscordQaVoiceChannel | (private) | `async function resolveDiscordQaVoiceChannel(par...` |
| 537 | fn | getCurrentDiscordVoiceState | (private) | `async function getCurrentDiscordVoiceState(para...` |
| 554 | fn | waitForDiscordVoiceState | (private) | `async function waitForDiscordVoiceState(params: {` |
| 595 | fn | sendChannelMessage | (private) | `async function sendChannelMessage(token: string...` |
| 607 | fn | getChannelMessage | (private) | `async function getChannelMessage(params: { toke...` |
| 617 | fn | listChannelMessagesAfter | (private) | `async function listChannelMessagesAfter(params: {` |
| 635 | fn | createThreadFromMessage | (private) | `async function createThreadFromMessage(params: {` |
| 654 | fn | archiveDiscordThread | (private) | `async function archiveDiscordThread(params: { t...` |
| 664 | fn | joinDiscordThread | (private) | `async function joinDiscordThread(params: { toke...` |
| 671 | fn | listThreadMessages | (private) | `async function listThreadMessages(params: { tok...` |
| 681 | fn | reactionEmojiName | (private) | `function reactionEmojiName(reaction: DiscordRea...` |
| 685 | fn | normalizeDiscordReactionSnapshot | (private) | `function normalizeDiscordReactionSnapshot(param...` |
| 704 | fn | computeDiscordRttMs | (private) | `function computeDiscordRttMs(triggerTimestamp?:...` |
| 716 | fn | collectSeenReactionSequence | (private) | `function collectSeenReactionSequence(` |
| 734 | fn | renderDiscordStatusReactionHtml | (private) | `function renderDiscordStatusReactionHtml(params: {` |
| 801 | fn | writeDiscordStatusReactionEvidence | (private) | `async function writeDiscordStatusReactionEviden...` |
| 818 | fn | writeHtmlScreenshot | (private) | `async function writeHtmlScreenshot(params: { ht...` |
| 847 | fn | renderDiscordThreadReplyAttachmentHtml | (private) | `function renderDiscordThreadReplyAttachmentHtml...` |
| 900 | fn | writeDiscordThreadReplyAttachmentEvidence | (private) | `async function writeDiscordThreadReplyAttachmen...` |
| 950 | fn | observeStatusReactionTimeline | (private) | `async function observeStatusReactionTimeline(pa...` |
| 994 | fn | listApplicationCommands | (private) | `async function listApplicationCommands(params: ...` |
| 1004 | fn | compareDiscordSnowflakes | (private) | `function compareDiscordSnowflakes(a: string, b:...` |
| 1010 | fn | buildDiscordWebMessageUrl | (private) | `function buildDiscordWebMessageUrl(params: {` |
| 1020 | fn | normalizeDiscordObservedMessage | (private) | `function normalizeDiscordObservedMessage(messag...` |
| 1037 | fn | pollChannelMessages | (private) | `async function pollChannelMessages(params: {` |
| 1087 | fn | pollThreadReplyMessage | (private) | `async function pollThreadReplyMessage(params: {` |
| 1115 | fn | runDiscordThreadReplyFilePathAttachmentScenario | (private) | `async function runDiscordThreadReplyFilePathAtt...` |
| 1241 | fn | waitForDiscordChannelRunning | (private) | `async function waitForDiscordChannelRunning(` |
| 1304 | fn | buildObservedMessagesArtifact | (private) | `function buildObservedMessagesArtifact(params: {` |
| 1347 | fn | findScenario | (private) | `function findScenario(ids?: string[]) {` |
| 1360 | fn | matchesDiscordScenarioReply | (private) | `function matchesDiscordScenarioReply(params: {` |
| 1373 | fn | assertDiscordApplicationCommandsRegistered | (private) | `async function assertDiscordApplicationCommands...` |
