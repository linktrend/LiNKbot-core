# extensions/slack/src/monitor/message-handler/prepare.test.ts

[← Back to Module](../modules/extensions-slack-src-monitor-message-handler/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 4601
- **Language:** TypeScript
- **Symbols:** 29
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 95 | fn | seedSessionEntries | (private) | `async function seedSessionEntries(` |
| 106 | fn | createDefaultSlackCtx | (private) | `function createDefaultSlackCtx() {` |
| 126 | fn | prepareWithDefaultCtx | (private) | `async function prepareWithDefaultCtx(message: S...` |
| 135 | type | PreparedSlackMessage | (private) | - |
| 137 | fn | assertPrepared | (private) | `function assertPrepared(` |
| 148 | fn | createSlackMessage | (private) | `function createSlackMessage(overrides: Partial<...` |
| 159 | fn | createBotRoomMessage | (private) | `function createBotRoomMessage(overrides: Partia...` |
| 172 | fn | createOwnerScopedBotRoomCtx | (private) | `function createOwnerScopedBotRoomCtx(params: { ...` |
| 190 | fn | createMissingChannelInfoBotCtx | (private) | `function createMissingChannelInfoBotCtx(params?...` |
| 216 | fn | prepareMessageWith | (private) | `async function prepareMessageWith(` |
| 647 | fn | createThreadSlackCtx | (private) | `function createThreadSlackCtx(params: { cfg: Op...` |
| 656 | fn | createThreadAccount | (private) | `function createThreadAccount(): ResolvedSlackAc...` |
| 672 | fn | createThreadReplyMessage | (private) | `function createThreadReplyMessage(overrides: Pa...` |
| 681 | fn | prepareThreadMessage | (private) | `function prepareThreadMessage(ctx: SlackMonitor...` |
| 685 | type | ThreadContextAllowlistCaseParams | (private) | - |
| 707 | fn | prepareThreadContextAllowlistCase | (private) | `async function prepareThreadContextAllowlistCas...` |
| 769 | fn | expectThreadContextAllowsHumanHistory | (private) | `function expectThreadContextAllowsHumanHistory(` |
| 789 | fn | createDmScopeMainSlackCtx | (private) | `function createDmScopeMainSlackCtx(): SlackMoni...` |
| 802 | fn | createMainScopedDmMessage | (private) | `function createMainScopedDmMessage(overrides: P...` |
| 812 | fn | expectMainScopedDmClassification | (private) | `function expectMainScopedDmClassification(` |
| 826 | fn | createReplyToAllSlackCtx | (private) | `function createReplyToAllSlackCtx(params?: {` |
| 3268 | fn | createUnavailableMentionCtx | (private) | `function createUnavailableMentionCtx(` |
| 3289 | fn | createUnavailableMentionMessage | (private) | `function createUnavailableMentionMessage(text: ...` |
| 3648 | fn | createCaptionlessSlackAudioMessage | (private) | `function createCaptionlessSlackAudioMessage(` |
| 3676 | fn | resolveFetchInputUrl | (private) | `function resolveFetchInputUrl(input: string | U...` |
| 3680 | fn | createAudioMentionSlackCtx | (private) | `function createAudioMentionSlackCtx(params: {` |
| 4271 | fn | createSenderPrefixCtx | (private) | `function createSenderPrefixCtx(params: {` |
| 4328 | fn | prepareSenderPrefixMessage | (private) | `async function prepareSenderPrefixMessage(ctx: ...` |
| 4499 | fn | createCtxWithImplicitMentions | (private) | `function createCtxWithImplicitMentions(implicit...` |

## Memory Markers

### 🟡 `FIXME` (line 1831)

> scenario: D-prefix channel but Slack event says channel_type: "channel"
