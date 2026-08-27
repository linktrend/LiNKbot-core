# extensions/discord/src/voice/manager.ts

[← Back to Module](../modules/extensions-discord-src-voice/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1907
- **Language:** TypeScript
- **Symbols:** 22
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 83 | fn | logFollowUserReconcileVerbose | (private) | `function logFollowUserReconcileVerbose(reason: ...` |
| 91 | type | DiscordVoiceSdk | (private) | - |
| 92 | type | DiscordVoiceConnection | (private) | - |
| 93 | type | VoiceChannelResidency | (private) | - |
| 98 | fn | isVoiceConnectionDestroyed | (private) | `function isVoiceConnectionDestroyed(` |
| 105 | fn | destroyVoiceConnectionSafely | (private) | `function destroyVoiceConnectionSafely(params: {` |
| 126 | fn | isRetryableVoiceJoinReadyError | (private) | `function isRetryableVoiceJoinReadyError(error: ...` |
| 131 | fn | normalizeVoiceChannelResidencies | (private) | `function normalizeVoiceChannelResidencies(` |
| 145 | fn | normalizeDiscordUserId | (private) | `function normalizeDiscordUserId(value: string):...` |
| 154 | fn | normalizeDiscordUserIds | (private) | `function normalizeDiscordUserIds(entries: strin...` |
| 165 | fn | resolveFollowUsersEnabled | (private) | `function resolveFollowUsersEnabled(voiceConfig:...` |
| 169 | type | FollowUserReconcileGuildPlan | (private) | - |
| 176 | type | FollowUserReconcileUserSelection | (private) | - |
| 181 | fn | isVoiceChannelAllowed | (private) | `function isVoiceChannelAllowed(params: {` |
| 194 | fn | formatAutoJoinFailureKey | (private) | `function formatAutoJoinFailureKey(entry: { guil...` |
| 198 | fn | isFatalAutoJoinFailure | (private) | `function isFatalAutoJoinFailure(message: string...` |
| 205 | fn | resolveVoiceConnectionGroup | (private) | `function resolveVoiceConnectionGroup(accountId:...` |
| 209 | fn | resolveDiscordVoiceAgentRoute | (private) | `function resolveDiscordVoiceAgentRoute(params: {` |
| 258 | class | DiscordVoiceManager | pub | - |
| 678 | fn | clearSessionIfCurrent | (private) | `const clearSessionIfCurrent = () => {` |
| 684 | fn | stopEntry | (private) | `const stopEntry = (` |
| 1604 | fn | handleStreamError | (private) | `const handleStreamError = (err: unknown) => {` |

## Public API
