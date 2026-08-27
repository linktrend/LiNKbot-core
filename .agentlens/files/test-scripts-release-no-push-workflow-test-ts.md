# test/scripts/release-no-push-workflow.test.ts

[← Back to Module](../modules/test-scripts/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1064
- **Language:** TypeScript
- **Symbols:** 14
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 31 | type | WorkflowInput | (private) | - |
| 37 | type | WorkflowStep | (private) | - |
| 47 | type | WorkflowJob | (private) | - |
| 58 | type | Workflow | (private) | - |
| 70 | type | PermissionLevel | (private) | - |
| 71 | type | PermissionMap | (private) | - |
| 75 | fn | permissionAt | (private) | `function permissionAt(` |
| 92 | fn | permissionScopes | (private) | `function permissionScopes(...permissions: Array...` |
| 104 | fn | reusablePermissionViolations | (private) | `function reusablePermissionViolations(` |
| 125 | fn | workflowPermissionViolations | (private) | `function workflowPermissionViolations(` |
| 166 | fn | readWorkflow | (private) | `function readWorkflow(path: string): Workflow {` |
| 170 | fn | job | (private) | `function job(workflow: Workflow, name: string):...` |
| 178 | fn | step | (private) | `function step(workflowJob: WorkflowJob, name: s...` |
| 186 | fn | expectReadOnlyPackagePermission | (private) | `function expectReadOnlyPackagePermission(workfl...` |
