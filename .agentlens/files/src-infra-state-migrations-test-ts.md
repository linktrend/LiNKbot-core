# src/infra/state-migrations.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 3269
- **Language:** TypeScript
- **Symbols:** 17
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 108 | fn | fileExists | (private) | `function fileExists(filePath: string): boolean {` |
| 172 | type | UpdateCheckStateDatabase | (private) | - |
| 173 | type | ConfigHealthDatabase | (private) | - |
| 174 | type | PluginBindingApprovalsDatabase | (private) | - |
| 175 | type | CurrentConversationBindingsDatabase | (private) | - |
| 180 | fn | expectMissingPath | (private) | `async function expectMissingPath(targetPath: st...` |
| 192 | fn | createTempDir | (private) | `const createTempDir = () => tempDirs.make("open...` |
| 194 | fn | readUpdateCheckState | (private) | `function readUpdateCheckState(env: NodeJS.Proce...` |
| 218 | fn | readConfigHealthRows | (private) | `function readConfigHealthRows(env: NodeJS.Proce...` |
| 240 | fn | insertConfigHealthRow | (private) | `function insertConfigHealthRow(` |
| 260 | fn | readCurrentConversationBindingRows | (private) | `function readCurrentConversationBindingRows(env...` |
| 288 | fn | readPluginBindingApprovalRows | (private) | `function readPluginBindingApprovalRows(env: Nod...` |
| 307 | fn | insertCurrentConversationBindingRow | (private) | `function insertCurrentConversationBindingRow(` |
| 345 | fn | createConfig | (private) | `function createConfig(): OpenClawConfig {` |
| 365 | fn | createEnv | (private) | `function createEnv(stateDir: string): NodeJS.Pr...` |
| 373 | fn | createLegacyAuditLedger | (private) | `async function createLegacyAuditLedger(stateDir...` |
| 433 | fn | createLegacyStateFixture | (private) | `async function createLegacyStateFixture(params?...` |
