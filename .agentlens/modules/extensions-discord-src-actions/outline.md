# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 4 large files in this module.

## extensions/discord/src/actions/handle-action.test.ts (852 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 14 | fn | discordConfig | (private) |
| 20 | fn | defaultActionOptions | (private) |
| 28 | fn | expectDiscordActionCall | (private) |

## extensions/discord/src/actions/runtime.guild.ts (687 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | type | DiscordRoleMutationOpts | (private) |
| 28 | type | DiscordRoleMutation | (private) |
| 37 | type | GuildAdminActionGuard | (private) |
| 107 | fn | isThreadChannelType | (private) |
| 115 | fn | isLockedThreadChannel | (private) |
| 123 | fn | assertGuildAdminActionEnabled | (private) |
| 133 | fn | resolveGuildIdForGuildAdminAction | (private) |
| 156 | fn | readChannelScopedPermissionTargetId | (private) |
| 166 | fn | resolveGuildAdminActionPermissions | (private) |
| 208 | fn | verifySenderGuildAdminPermission | (private) |
| 286 | fn | runRoleMutation | (private) |
| 301 | fn | readChannelPermissionTarget | (private) |
| 308 | fn | handleDiscordGuildAction | pub |
| 328 | fn | withOpts | (private) |
| 330 | fn | assertGuildMetadataReadAllowed | (private) |

## extensions/discord/src/actions/runtime.messaging.shared.ts (696 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 26 | type | ConversationReadInvocationOrigin | (private) |
| 30 | type | DiscordMessagingActionOptions | pub |
| 46 | type | DiscordMessagingActionContext | pub |
| 69 | fn | hasDiscordGuildEntries | (private) |
| 75 | fn | allowsAllDiscordGuildChannels | (private) |
| 85 | fn | resolveDiscordActionGuildEntry | (private) |
| 120 | type | DiscordReadTargetContext | (private) |
| 135 | type | DiscordReadAncestor | (private) |
| 141 | fn | resolveDiscordReadAncestry | (private) |
| 175 | fn | readDiscordChannelStringField | (private) |
| 189 | fn | readDiscordChannelType | (private) |
| 197 | fn | isDiscordThreadChannel | (private) |
| 202 | fn | isDiscordReadAncestryAllowed | (private) |
| 223 | fn | isDiscordReadTargetAllowedInGuild | (private) |
| 258 | fn | isDiscordReadTargetExplicitlyAllowedById | (private) |
| 275 | fn | hasExplicitlyDisabledDiscordChannelConfig | (private) |
| 283 | fn | hasExplicitlyDisabledDiscordChannels | (private) |
| 289 | fn | createDiscordMessagingActionContext | pub |
| 312 | fn | withOpts | (private) |

## extensions/discord/src/actions/runtime.test.ts (3493 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 20 | type | DiscordChannelInfoTest | (private) |
| 133 | fn | enableAllActions | (private) |
| 143 | fn | discordAllowlistCfg | (private) |
| 155 | type | MockCallSource | (private) |
| 157 | fn | mockCall | (private) |
| 165 | fn | mockObjectArg | (private) |
| 178 | fn | handleMessagingAction | (private) |
| 202 | fn | handleGuildAction | (private) |
| 215 | fn | handleModerationAction | (private) |
| 224 | fn | disabledActions | (private) |
| 225 | fn | channelInfoEnabled | (private) |
| 226 | fn | moderationEnabled | (private) |
| 227 | fn | rolesEnabled | (private) |
| 2277 | fn | messagesOnly | (private) |
| 2696 | fn | channelsEnabled | (private) |
| 2697 | fn | channelsDisabled | (private) |
