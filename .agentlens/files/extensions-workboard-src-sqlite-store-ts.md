# extensions/workboard/src/sqlite-store.ts

[← Back to Module](../modules/extensions-workboard-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1446
- **Language:** TypeScript
- **Symbols:** 34
- **Public symbols:** 2

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 36 | type | Row | (private) | - |
| 37 | type | WorkboardSqliteStores | (private) | - |
| 46 | fn | resolveWorkboardSqlitePath | pub | `export function resolveWorkboardSqlitePath(env:...` |
| 50 | fn | jsonValue | (private) | `function jsonValue(value: unknown): string | nu...` |
| 54 | fn | parseJson | (private) | `function parseJson(value: unknown): unknown {` |
| 61 | fn | stringValue | (private) | `function stringValue(row: Row, key: string): st...` |
| 66 | fn | numberValue | (private) | `function numberValue(row: Row, key: string): nu...` |
| 77 | fn | requiredString | (private) | `function requiredString(row: Row, key: string):...` |
| 85 | fn | requiredNumber | (private) | `function requiredNumber(row: Row, key: string):...` |
| 93 | fn | optional | (private) | `function optional<T extends object>(value: T): ...` |
| 97 | fn | asBlobContent | (private) | `function asBlobContent(value: string): Uint8Arr...` |
| 101 | fn | blobToBase64 | (private) | `function blobToBase64(value: unknown): string {` |
| 111 | fn | runTransaction | (private) | `function runTransaction<T>(db: DatabaseSync, ru...` |
| 123 | fn | tableColumns | (private) | `function tableColumns(db: DatabaseSync, tableNa...` |
| 131 | fn | ensureColumn | (private) | `function ensureColumn(db: DatabaseSync, tableNa...` |
| 353 | fn | ensureWorkboardSchema | (private) | `function ensureWorkboardSchema(db: DatabaseSync...` |
| 375 | fn | chmodIfExists | (private) | `function chmodIfExists(targetPath: string, mode...` |
| 385 | fn | hardenWorkboardDatabaseFiles | (private) | `function hardenWorkboardDatabaseFiles(dbPath: s...` |
| 393 | fn | createDatabase | (private) | `function createDatabase(dbPath: string): {` |
| 426 | fn | childRows | (private) | `function childRows(db: DatabaseSync, table: str...` |
| 432 | fn | readLabels | (private) | `function readLabels(db: DatabaseSync, cardId: s...` |
| 439 | fn | readEvents | (private) | `function readEvents(db: DatabaseSync, cardId: s...` |
| 467 | fn | readExecution | (private) | `function readExecution(row: Row): WorkboardExec...` |
| 492 | fn | readMetadata | (private) | `function readMetadata(db: DatabaseSync, row: Ro...` |
| 719 | fn | readCard | (private) | `function readCard(db: DatabaseSync, row: Row): ...` |
| 751 | fn | cardBoardId | (private) | `function cardBoardId(card: WorkboardCard): stri...` |
| 755 | fn | bindNull | (private) | `function bindNull(value: unknown): SQLInputValue {` |
| 769 | fn | insertChildren | (private) | `function insertChildren<T>(` |
| 780 | fn | insertCard | (private) | `function insertCard(db: DatabaseSync, card: Wor...` |
| 1090 | class | WorkboardSqliteCardStore | (private) | - |
| 1136 | class | WorkboardSqliteBoardStore | (private) | - |
| 1230 | class | WorkboardSqliteSubscriptionStore | (private) | - |
| 1344 | class | WorkboardSqliteAttachmentStore | (private) | - |
| 1423 | fn | createWorkboardSqliteStores | pub | `export function createWorkboardSqliteStores(` |

## Public API

### `resolveWorkboardSqlitePath`

```
export function resolveWorkboardSqlitePath(env: NodeJS.ProcessEnv = process.env): string {
```

**Line:** 46 | **Kind:** fn

### `createWorkboardSqliteStores`

```
export function createWorkboardSqliteStores(
```

**Line:** 1423 | **Kind:** fn
