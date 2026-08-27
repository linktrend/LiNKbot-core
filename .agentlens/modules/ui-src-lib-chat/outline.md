# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 5 large files in this module.

## ui/src/lib/chat/commands.ts (528 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 10 | type | SlashCommandCategory | pub |
| 12 | type | SlashCommandTier | (private) |
| 13 | type | ChatIconName | (private) |
| 15 | type | SlashCommandDef | pub |
| 34 | type | LocalArgChoice | (private) |
| 36 | type | CommandLike | (private) |
| 165 | fn | normalizeUiKey | (private) |
| 169 | fn | getSlashAliases | (private) |
| 176 | fn | getPrimarySlashName | (private) |
| 180 | fn | formatArgs | (private) |
| 192 | fn | choiceToValue | (private) |
| 196 | fn | getArgOptions | (private) |
| 205 | fn | mapCategory | (private) |
| 222 | fn | mapIcon | (private) |
| 226 | fn | mapTier | (private) |
| 234 | fn | toSlashCommand | (private) |
| 257 | fn | normalizeSlashIdentifier | (private) |
| 266 | fn | clampText | (private) |
| 271 | fn | getEntryArgs | (private) |
| 283 | fn | getArgChoices | (private) |
| 313 | fn | buildLocalSlashCommands | (private) |
| 333 | fn | buildReservedLocalSlashNames | (private) |
| 347 | fn | normalizeCommandEntry | (private) |
| 387 | fn | replaceSlashCommands | pub |
| 391 | fn | buildSlashCommandsFromEntries | pub |
| 411 | fn | getRemoteCommandEntries | pub |
| 423 | fn | buildFallbackSlashCommands | pub |
| 431 | fn | getSlashCommandCategoryLabel | pub |
| 435 | fn | getSlashCommandDescription | pub |
| 445 | fn | getSlashCommandCompletions | pub |
| 489 | fn | getHiddenCommandCount | pub |
| 493 | type | ParsedSlashCommand | (private) |
| 498 | fn | parseSlashCommand | pub |

## ui/src/lib/chat/message-normalizer.test.ts (713 lines)

_No symbols extracted._

## ui/src/lib/chat/message-normalizer.ts (593 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 25 | fn | asMessageRecord | (private) |
| 36 | fn | splitOpaqueIdLabel | (private) |
| 50 | fn | normalizeRoleForGrouping | pub |
| 72 | fn | isToolResultMessage | pub |
| 78 | fn | isStandaloneToolMessageForDisplay | pub |
| 92 | fn | isTextContentBlock | (private) |
| 104 | fn | coerceCanvasPreview | (private) |
| 158 | fn | isRenderableAssistantAttachment | (private) |
| 171 | fn | shouldPreserveRelativeAssistantAttachment | (private) |
| 214 | fn | mimeTypeFromUrl | (private) |
| 219 | fn | inferAttachmentKind | (private) |
| 226 | fn | label | (private) |
| 240 | fn | coerceAudioContentBlock | (private) |
| 292 | fn | mergeAdjacentTextItems | (private) |
| 305 | fn | stripMessageDisplayMetadataText | pub |
| 309 | fn | stripMessageDisplayMetadata | (private) |
| 320 | fn | expandTextContent | (private) |
| 399 | fn | normalizeMessage | pub |

## ui/src/lib/chat/model-select-state.test.ts (663 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | type | ChatModelStateInput | (private) |
| 18 | fn | createChatModelState | (private) |
| 30 | fn | resolveFastModeState | (private) |

## ui/src/lib/chat/tool-call-view.test.ts (620 lines)

_No symbols extracted._
