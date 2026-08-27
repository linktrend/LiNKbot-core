# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## src/boards/board-store.parity.test.ts (597 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 18 | fn | seedSession | (private) |
| 28 | fn | createSqliteStore | (private) |
| 253 | fn | putApp | (private) |

## src/boards/sqlite-board-store.ts (709 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 43 | type | BoardDatabase | (private) |
| 47 | type | BoardDatabaseHandle | (private) |
| 48 | type | SelectedBoardTabRow | (private) |
| 49 | type | SelectedBoardWidgetRow | (private) |
| 51 | type | StoredBoard | (private) |
| 62 | fn | boardTablesPresent | (private) |
| 76 | fn | ensureBoardSchema | (private) |
| 95 | type | SqliteBoardStoreOptions | (private) |
| 104 | type | StoredBoardWidgetManifest | (private) |
| 108 | fn | parseManifest | (private) |
| 132 | fn | parseDescriptor | (private) |
| 136 | fn | rowToTab | (private) |
| 145 | fn | rowToWidget | (private) |
| 165 | fn | readStoredBoard | (private) |
| 211 | fn | upsertTabs | (private) |
| 244 | fn | updateWidgetLayouts | (private) |
| 269 | fn | deleteRemovedWidgets | (private) |
| 289 | fn | deleteRemovedTabs | (private) |
| 309 | fn | contentFields | (private) |
| 351 | fn | hasSession | (private) |
| 365 | fn | emptyBoardSnapshot | (private) |
| 369 | class | SqliteBoardStore | pub |
