# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## src/commands/migrate/selection.test.ts (570 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 27 | fn | skillItem | (private) |
| 48 | fn | pluginItem | (private) |
| 70 | fn | codexPluginConfigItem | (private) |
| 100 | fn | plan | (private) |
| 127 | fn | expectSummaryFields | (private) |
| 136 | fn | requireItem | (private) |
| 144 | fn | expectItemStatus | (private) |
| 157 | fn | requireRecord | (private) |
| 164 | fn | requireCodexPluginConfigPlugins | (private) |

## src/commands/migrate/selection.ts (529 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | type | InteractiveMigrationSelection | (private) |
| 19 | type | InteractiveMigrationSkillSelection | (private) |
| 21 | type | InteractiveMigrationPluginSelection | (private) |
| 23 | fn | normalizeSelectionRef | (private) |
| 27 | fn | readMigrationSkillName | (private) |
| 31 | fn | readMigrationSkillSourceLabel | (private) |
| 35 | fn | readMigrationPluginName | (private) |
| 39 | fn | readMigrationPluginConfigKey | (private) |
| 43 | fn | readMigrationPluginMarketplaceName | (private) |
| 47 | fn | migrationSkillRefs | (private) |
| 57 | fn | migrationPluginRefs | (private) |
| 68 | fn | formatSelectionRefList | (private) |
| 75 | fn | buildSelectionIndex | (private) |
| 94 | fn | resolveSelectedMigrationItemIds | (private) |
| 151 | fn | resolveSelectedSkillItemIds | (private) |
| 165 | fn | resolveSelectedPluginItemIds | (private) |
| 180 | fn | getSelectableMigrationSkillItems | pub |
| 190 | fn | getSelectableMigrationPluginItems | pub |
| 205 | fn | getMigrationSkillSelectionValue | pub |
| 210 | fn | getMigrationPluginSelectionValue | pub |
| 215 | fn | formatMigrationPluginSelectionLabel | pub |
| 220 | fn | getDefaultMigrationSkillSelectionValues | pub |
| 225 | fn | getDefaultMigrationPluginSelectionValues | pub |
| 232 | fn | formatMigrationSkillSelectionLabel | pub |
| 236 | fn | humanizeMigrationConflictReason | (private) |
| 244 | fn | formatMigrationSkillSelectionHint | pub |
| 254 | fn | formatMigrationPluginSelectionHint | pub |
| 264 | fn | applyMigrationSelectedSkillItemIds | pub |
| 283 | fn | applyMigrationSkillSelection | pub |
| 296 | fn | applyMigrationPluginSelection | pub |
| 309 | fn | applyMigrationSelectedPluginItemIds | pub |
| 337 | fn | isCodexPluginConfigItem | (private) |
| 356 | fn | applyCodexPluginConfigSelection | (private) |
| 396 | fn | resolveInteractiveMigrationSelection | (private) |
| 421 | fn | isMigrationSelectionToggleValue | (private) |
| 427 | fn | selectedMigrationItemValues | (private) |
| 431 | fn | resolveMigrationSelectionBulkToggleValues | (private) |
| 445 | fn | resolveInteractiveMigrationSkillSelection | pub |
| 457 | fn | resolveInteractiveMigrationPluginSelection | pub |
| 469 | fn | reconcileInteractiveMigrationSkillToggleValues | pub |
| 489 | fn | reconcileInteractiveMigrationEnterValues | pub |
| 510 | fn | reconcileInteractiveMigrationShortcutValues | pub |
