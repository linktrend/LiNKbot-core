# src/infra/state-migrations.doctor.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1631
- **Language:** TypeScript
- **Symbols:** 13
- **Public symbols:** 5

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 157 | fn | describeStateSchemaMigration | (private) | `function describeStateSchemaMigration(migration...` |
| 178 | fn | resetAutoMigrateLegacyStateForTest | pub | `export function resetAutoMigrateLegacyStateForT...` |
| 184 | fn | collectChannelLegacyStateMigrationPlans | (private) | `async function collectChannelLegacyStateMigrati...` |
| 214 | fn | collectPluginDoctorStateMigrationPlans | (private) | `async function collectPluginDoctorStateMigratio...` |
| 256 | fn | createPluginDoctorStateMigrationContext | (private) | `function createPluginDoctorStateMigrationContext(` |
| 279 | fn | detectLegacyStateMigrations | pub | `export async function detectLegacyStateMigratio...` |
| 773 | fn | runPluginDoctorStateMigrationPlans | (private) | `async function runPluginDoctorStateMigrationPla...` |
| 809 | fn | migratePluginDoctorStatePlans | (private) | `async function migratePluginDoctorStatePlans(pa...` |
| 874 | fn | autoMigrateLegacyPluginDoctorState | pub | `export async function autoMigrateLegacyPluginDo...` |
| 935 | fn | migrateLegacyStateSchema | (private) | `function migrateLegacyStateSchema(` |
| 947 | fn | runLegacyStateMigrations | pub | `export async function runLegacyStateMigrations(...` |
| 1192 | fn | autoMigrateLegacyState | pub | `export async function autoMigrateLegacyState(pa...` |
| 1267 | fn | logMigrationResults | (private) | `const logMigrationResults = (changes: string[],...` |

## Public API

### `resetAutoMigrateLegacyStateForTest`

```
export function resetAutoMigrateLegacyStateForTest(): void {
```

**Line:** 178 | **Kind:** fn

### `detectLegacyStateMigrations`

```
export async function detectLegacyStateMigrations(params: {
```

**Line:** 279 | **Kind:** fn

### `autoMigrateLegacyPluginDoctorState`

```
export async function autoMigrateLegacyPluginDoctorState(params: {
```

**Line:** 874 | **Kind:** fn

### `runLegacyStateMigrations`

```
export async function runLegacyStateMigrations(params: {
```

**Line:** 947 | **Kind:** fn

### `autoMigrateLegacyState`

```
export async function autoMigrateLegacyState(params: {
```

**Line:** 1192 | **Kind:** fn
