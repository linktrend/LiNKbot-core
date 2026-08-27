# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## packages/terminal-core/src/table.test.ts (752 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 9 | fn | mockProcessPlatform | (private) |
| 13 | fn | expectIntroducersToStartCompleteSequences | (private) |

## packages/terminal-core/src/table.ts (732 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | type | Align | (private) |
| 9 | type | TableColumn | pub |
| 18 | type | RenderTableOptions | pub |
| 26 | fn | resolveDefaultBorder | (private) |
| 46 | fn | repeat | (private) |
| 53 | fn | padCell | (private) |
| 80 | type | AnsiToken | (private) |
| 81 | type | SgrCategory | (private) |
| 156 | fn | simpleSgrCategory | (private) |
| 205 | fn | extendedSgrCategory | (private) |
| 215 | fn | parseSgrSequence | (private) |
| 239 | fn | sgrSequence | (private) |
| 243 | fn | applySgrSequence | (private) |
| 296 | type | ActiveSgr | (private) |
| 298 | fn | activeSgrAfter | (private) |
| 315 | type | Osc8Link | (private) |
| 317 | fn | parseOsc8Sequence | (private) |
| 350 | fn | activeOsc8After | (private) |
| 364 | fn | wrapLine | (private) |
| 392 | fn | isBreakChar | (private) |
| 394 | fn | isSpaceChar | (private) |
| 401 | fn | bufToString | (private) |
| 403 | fn | bufVisibleWidth | (private) |
| 409 | fn | pushLine | (private) |
| 417 | fn | trimLeadingSpaces | (private) |
| 431 | fn | flushAt | (private) |
| 478 | fn | makeRoomFor | (private) |
| 527 | fn | normalizeWidth | (private) |
| 537 | fn | getTerminalTableWidth | pub |
| 541 | fn | renderTable | pub |
| 599 | fn | shrink | (private) |
| 695 | fn | hLine | (private) |
| 698 | fn | contentWidthFor | (private) |
| 707 | fn | renderRow | (private) |
