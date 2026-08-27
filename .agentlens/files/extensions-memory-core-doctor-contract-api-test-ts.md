# extensions/memory-core/doctor-contract-api.test.ts

[← Back to Module](../modules/extensions-memory-core/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2502
- **Language:** TypeScript
- **Symbols:** 23
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 37 | fn | createDoctorContext | (private) | `function createDoctorContext(env: NodeJS.Proces...` |
| 58 | fn | legacyMemoryIndexMigration | (private) | `function legacyMemoryIndexMigration() {` |
| 68 | fn | dreamingStateMigration | (private) | `function dreamingStateMigration() {` |
| 78 | fn | hostEventsMigration | (private) | `function hostEventsMigration() {` |
| 88 | fn | qmdFileLockMigration | (private) | `function qmdFileLockMigration() {` |
| 98 | fn | vectorToBlob | (private) | `function vectorToBlob(embedding: number[]): Buf...` |
| 102 | fn | writeLegacyMemorySidecar | (private) | `async function writeLegacyMemorySidecar(` |
| 192 | fn | createCanonicalMemoryIndex | (private) | `async function createCanonicalMemoryIndex(agent...` |
| 230 | fn | createUnrelatedCanonicalMemoryIndex | (private) | `async function createUnrelatedCanonicalMemoryIn...` |
| 279 | fn | createCanonicalLegacyMemoryRowsWithFts | (private) | `async function createCanonicalLegacyMemoryRowsW...` |
| 317 | fn | createMismatchedCanonicalVectorIndex | (private) | `async function createMismatchedCanonicalVectorI...` |
| 339 | fn | createConflictingCanonicalVectorIndex | (private) | `async function createConflictingCanonicalVector...` |
| 369 | fn | readMemoryRows | (private) | `function readMemoryRows(agentPath: string) {` |
| 386 | fn | readMemoryCacheRows | (private) | `function readMemoryCacheRows(agentPath: string) {` |
| 399 | fn | readMemoryFtsSql | (private) | `function readMemoryFtsSql(agentPath: string): s...` |
| 411 | fn | searchMigratedVectorRows | (private) | `async function searchMigratedVectorRows(agentPa...` |
| 432 | fn | searchMigratedKeywordRows | (private) | `async function searchMigratedKeywordRows(agentP...` |
| 469 | fn | context | (private) | `function context(): PluginDoctorStateMigrationC...` |
| 473 | fn | migrationParams | (private) | `function migrationParams(` |
| 591 | fn | event | (private) | `const event = (query: string) => ({` |
| 677 | fn | event | (private) | `const event = (query: string) => ({` |
| 701 | fn | event | (private) | `const event = (query: string) => ({` |
| 770 | fn | event | (private) | `const event = (query: string) => ({` |
