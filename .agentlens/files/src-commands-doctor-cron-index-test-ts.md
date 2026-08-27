# src/commands/doctor/cron/index.test.ts

[← Back to Module](../modules/src-commands-doctor-cron/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2047
- **Language:** TypeScript
- **Symbols:** 17
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 26 | type | TerminalNote | (private) | - |
| 36 | fn | makeTempStorePath | (private) | `async function makeTempStorePath() {` |
| 50 | fn | makePrompter | (private) | `function makePrompter(confirmResult = true) {` |
| 56 | fn | createCronConfig | (private) | `function createCronConfig(` |
| 68 | fn | createLegacyCronJob | (private) | `function createLegacyCronJob(overrides: Record<...` |
| 85 | fn | createCurrentCronJob | (private) | `function createCurrentCronJob(overrides: Record...` |
| 104 | fn | writeCronStore | (private) | `async function writeCronStore(storePath: string...` |
| 120 | fn | writeCurrentCronStore | (private) | `async function writeCurrentCronStore(storePath:...` |
| 127 | fn | insertEarlySQLiteCronRow | (private) | `function insertEarlySQLiteCronRow(` |
| 164 | fn | writeLegacyCronArrayStore | (private) | `async function writeLegacyCronArrayStore(storeP...` |
| 169 | fn | readPersistedJobs | (private) | `async function readPersistedJobs(storePath: str...` |
| 173 | fn | requirePersistedJob | (private) | `function requirePersistedJob(jobs: Array<Record...` |
| 181 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 188 | fn | expectNoteContaining | (private) | `function expectNoteContaining(message: string, ...` |
| 196 | fn | expectNoNoteContaining | (private) | `function expectNoNoteContaining(message: string...` |
| 204 | fn | createFsError | (private) | `function createFsError(code: string, message: s...` |
| 208 | fn | mockExdevRename | (private) | `function mockExdevRename(filePath: string) {` |
