# src/node-host/invoke-system-run.test.ts

[← Back to Module](../modules/src-node-host/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 3630
- **Language:** TypeScript
- **Symbols:** 36
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 36 | type | HandleSystemRunInvokeOptions | (private) | - |
| 43 | type | MockedRunCommand | (private) | - |
| 44 | type | MockedRunViaMacAppExecHost | (private) | - |
| 45 | type | MockedSendInvokeResult | (private) | - |
| 46 | type | MockedSendExecFinishedEvent | (private) | - |
| 47 | type | MockedSendNodeEvent | (private) | - |
| 73 | fn | createFixtureDir | (private) | `function createFixtureDir(prefix: string): stri...` |
| 95 | fn | createLocalRunResult | (private) | `function createLocalRunResult(stdout = "local-o...` |
| 107 | fn | createTempExecutable | (private) | `function createTempExecutable(params: { dir: st...` |
| 115 | fn | createStrictInlineEvalApprovalPlan | (private) | `function createStrictInlineEvalApprovalPlan(pre...` |
| 130 | fn | bindCurrentPolicyToPlan | (private) | `function bindCurrentPolicyToPlan(plan: SystemRu...` |
| 141 | fn | expectInvokeOk | (private) | `function expectInvokeOk(` |
| 152 | fn | expectInvokeErrorMessage | (private) | `function expectInvokeErrorMessage(` |
| 166 | fn | requireInvokeResult | (private) | `function requireInvokeResult(sendInvokeResult: ...` |
| 179 | fn | requireFirstRunCommandArgs | (private) | `function requireFirstRunCommandArgs(runCommand:...` |
| 183 | fn | requireMacExecHostCall | (private) | `function requireMacExecHostCall(runViaMacAppExe...` |
| 208 | fn | firstMockCallArg | (private) | `function firstMockCallArg(` |
| 220 | fn | expectExecDeniedEvent | (private) | `function expectExecDeniedEvent(` |
| 232 | fn | expectApprovalRequiredDenied | (private) | `function expectApprovalRequiredDenied(params: {` |
| 243 | fn | expectApprovalStateWriteDenied | (private) | `function expectApprovalStateWriteDenied(params: {` |
| 257 | fn | createMutableScriptOperandFixture | (private) | `function createMutableScriptOperandFixture(tmp:...` |
| 281 | fn | createRuntimeScriptOperandFixture | (private) | `function createRuntimeScriptOperandFixture(para...` |
| 327 | fn | buildNestedEnvShellCommand | (private) | `function buildNestedEnvShellCommand(params: { d...` |
| 331 | fn | createMacExecHostSuccess | (private) | `function createMacExecHostSuccess(stdout = "app...` |
| 345 | fn | createAllowlistOnMissApprovals | (private) | `function createAllowlistOnMissApprovals(params?: {` |
| 361 | fn | resolveProductionExecSecurity | (private) | `function resolveProductionExecSecurity(value?: ...` |
| 365 | fn | resolveProductionExecAsk | (private) | `function resolveProductionExecAsk(value?: strin...` |
| 369 | fn | createInvokeSpies | (private) | `function createInvokeSpies(params?: { runComman...` |
| 381 | fn | withTempApprovalsHome | (private) | `async function withTempApprovalsHome<T>(params: {` |
| 392 | fn | withPathTokenCommand | (private) | `async function withPathTokenCommand<T>(params: {` |
| 407 | fn | withFakeRuntimeOnPath | (private) | `async function withFakeRuntimeOnPath<T>(params: {` |
| 430 | fn | expectCommandPinnedToCanonicalPath | (private) | `function expectCommandPinnedToCanonicalPath(par...` |
| 444 | fn | resolveStatTargetPath | (private) | `function resolveStatTargetPath(target: string |...` |
| 457 | fn | withMockedCwdIdentityDrift | (private) | `async function withMockedCwdIdentityDrift<T>(pa...` |
| 486 | fn | runSystemInvoke | (private) | `async function runSystemInvoke(params: {` |
| 1757 | fn | expectNestedEnvShellDenied | (private) | `async function expectNestedEnvShellDenied(param...` |
