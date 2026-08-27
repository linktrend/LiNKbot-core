# src/infra/exec-approvals-store.test.ts

[← Back to Module](../modules/src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1971
- **Language:** TypeScript
- **Symbols:** 10
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 18 | type | ExecApprovalsModule | (private) | - |
| 82 | fn | createHomeDir | (private) | `function createHomeDir(): string {` |
| 91 | fn | approvalsFilePath | (private) | `function approvalsFilePath(homeDir: string): st...` |
| 95 | fn | stateApprovalsFilePath | (private) | `function stateApprovalsFilePath(stateDir: strin...` |
| 99 | fn | readApprovalsFile | (private) | `function readApprovalsFile(homeDir: string): Ex...` |
| 103 | fn | listExecApprovalTempFiles | (private) | `function listExecApprovalTempFiles(homeDir: str...` |
| 111 | fn | requireRecord | (private) | `function requireRecord(value: unknown): Record<...` |
| 118 | fn | allowlistEntries | (private) | `function allowlistEntries(homeDir: string, agen...` |
| 123 | fn | expectAllowlistEntryFields | (private) | `function expectAllowlistEntryFields(` |
| 1517 | fn | commitGrant | (private) | `const commitGrant = (command: string, pattern: ...` |
