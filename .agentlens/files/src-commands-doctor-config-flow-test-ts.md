# src/commands/doctor-config-flow.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 3164
- **Language:** TypeScript
- **Symbols:** 38
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 15 | type | TerminalNote | (private) | - |
| 34 | fn | asRecord | (private) | `function asRecord(value: unknown): Record<strin...` |
| 40 | fn | ensureRecord | (private) | `function ensureRecord(parent: Record<string, un...` |
| 50 | fn | migrateThreadBinding | (private) | `function migrateThreadBinding(value: unknown, c...` |
| 63 | fn | migrateStreamingAlias | (private) | `function migrateStreamingAlias(channel: Record<...` |
| 89 | fn | migrateNestedAllowAliases | (private) | `function migrateNestedAllowAliases(channel: Rec...` |
| 126 | fn | migrate | (private) | `function migrate(raw: unknown): { next: Record<...` |
| 302 | type | LegacyRule | (private) | - |
| 309 | fn | asRecord | (private) | `function asRecord(value: unknown): Record<strin...` |
| 315 | fn | getPathValue | (private) | `function getPathValue(root: Record<string, unkn...` |
| 327 | fn | addIssue | (private) | `function addIssue(` |
| 335 | fn | hasLegacyStreamingAlias | (private) | `function hasLegacyStreamingAlias(channel: Recor...` |
| 764 | fn | asRecord | (private) | `function asRecord(value: unknown): Record<strin...` |
| 770 | fn | hasLegacyTalkFields | (private) | `function hasLegacyTalkFields(value: unknown): b...` |
| 780 | fn | resolveDiscordStreamMode | (private) | `function resolveDiscordStreamMode(entry: Record...` |
| 797 | fn | normalizeDiscordStreamingEntry | (private) | `function normalizeDiscordStreamingEntry(` |
| 868 | fn | normalizeDiscordStreamingAliasesForTest | (private) | `function normalizeDiscordStreamingAliasesForTes...` |
| 965 | fn | asRecord | (private) | `function asRecord(value: unknown): Record<strin...` |
| 971 | fn | hasOwnStringArray | (private) | `function hasOwnStringArray(value: unknown): boo...` |
| 975 | fn | stringifySelectedArrays | (private) | `function stringifySelectedArrays(root: Record<s...` |
| 985 | fn | visit | (private) | `const visit = (value: unknown) => {` |
| 1010 | fn | collectCompatibilityMutations | (private) | `function collectCompatibilityMutations(cfg: { c...` |
| 1030 | fn | collectInactiveTelegramWarnings | (private) | `function collectInactiveTelegramWarnings(cfg: {...` |
| 1056 | fn | isTelegramFirstTimeAccount | (private) | `function isTelegramFirstTimeAccount(params: {` |
| 1078 | fn | collectTelegramFirstTimeExtraWarnings | (private) | `function collectTelegramFirstTimeExtraWarnings(...` |
| 1154 | fn | asRecord | (private) | `function asRecord(value: unknown): Record<strin...` |
| 1160 | fn | hasStringEntries | (private) | `function hasStringEntries(value: unknown): bool...` |
| 1164 | fn | telegramFirstTimeWarnings | (private) | `function telegramFirstTimeWarnings(params: {` |
| 1190 | fn | collectWarnings | (private) | `async function collectWarnings({` |
| 1263 | fn | resolveConfigPath | (private) | `function resolveConfigPath() {` |
| 1270 | fn | normalizeDiscordStreamingCompat | (private) | `function normalizeDiscordStreamingCompat(cfg: R...` |
| 1391 | fn | formatConfigPath | (private) | `function formatConfigPath(parts: Array<string |...` |
| 1406 | fn | resolveConfigPathTarget | (private) | `function resolveConfigPathTarget(root: unknown,...` |
| 1459 | fn | resetTerminalNoteMock | (private) | `function resetTerminalNoteMock() {` |
| 1464 | fn | collectDoctorWarnings | (private) | `async function collectDoctorWarnings(config: Re...` |
| 1479 | type | DiscordGuildRule | (private) | - |
| 1485 | type | DiscordAccountRule | (private) | - |
| 1492 | type | RepairedDiscordPolicy | (private) | - |
