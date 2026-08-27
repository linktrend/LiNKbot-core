# test/scripts/package-acceptance-workflow.test.ts

[← Back to Module](../modules/test-scripts/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 4859
- **Language:** TypeScript
- **Symbols:** 20
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 64 | type | WorkflowStep | (private) | - |
| 76 | type | WorkflowMatrixEntry | (private) | - |
| 84 | type | WorkflowJob | (private) | - |
| 113 | type | Workflow | (private) | - |
| 118 | fn | readWorkflow | (private) | `function readWorkflow(path: string): Workflow {` |
| 122 | fn | isExecutable | (private) | `function isExecutable(path: string): boolean {` |
| 126 | fn | workflowPaths | (private) | `function workflowPaths(): string[] {` |
| 132 | fn | workflowJob | (private) | `function workflowJob(path: string, jobName: str...` |
| 140 | fn | workflowStep | (private) | `function workflowStep(job: WorkflowJob, stepNam...` |
| 148 | fn | shellFunctionSource | (private) | `function shellFunctionSource(source: string, fu...` |
| 162 | fn | workflowMatrixEntry | (private) | `function workflowMatrixEntry(path: string, jobN...` |
| 172 | fn | expectTextToIncludeAll | (private) | `function expectTextToIncludeAll(text: string | ...` |
| 181 | fn | runPackageAcceptanceSummary | (private) | `function runPackageAcceptanceSummary(params: {` |
| 210 | fn | runNpmTelegramInputValidation | (private) | `function runNpmTelegramInputValidation(override...` |
| 238 | fn | runNpmTelegramArtifactValidation | (private) | `function runNpmTelegramArtifactValidation(param...` |
| 297 | fn | runReleasePublishInputValidation | (private) | `function runReleasePublishInputValidation(overr...` |
| 325 | fn | runOpenClawNpmTrustedRefGuard | (private) | `function runOpenClawNpmTrustedRefGuard(override...` |
| 352 | fn | runReleaseChecksSummary | (private) | `function runReleaseChecksSummary(params: {` |
| 628 | fn | compare | (private) | `const compare = (left: string, right: string) =>` |
| 2659 | fn | resolveProfile | (private) | `const resolveProfile = (requested: string, help...` |
