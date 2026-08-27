# src/node-host/invoke-system-run-plan.test.ts

[← Back to Module](../modules/src-node-host/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1164
- **Language:** TypeScript
- **Symbols:** 23
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 16 | type | PathTokenSetup | (private) | - |
| 20 | type | HardeningCase | (private) | - |
| 33 | type | ScriptOperandFixture | (private) | - |
| 40 | type | RuntimeFixture | (private) | - |
| 51 | type | UnsafeRuntimeInvocationCase | (private) | - |
| 59 | fn | requirePathToken | (private) | `function requirePathToken(pathToken: PathTokenS...` |
| 66 | fn | sha256FileSync | (private) | `function sha256FileSync(filePath: string): stri...` |
| 70 | fn | canWritePathSync | (private) | `function canWritePathSync(targetPath: string): ...` |
| 79 | fn | canMutateNativeBinaryFixturePath | (private) | `function canMutateNativeBinaryFixturePath(binar...` |
| 86 | fn | createScriptOperandFixture | (private) | `function createScriptOperandFixture(tmp: string...` |
| 128 | fn | createFixtureDir | (private) | `function createFixtureDir(prefix: string): stri...` |
| 134 | fn | writeFakeRuntimeBin | (private) | `function writeFakeRuntimeBin(binDir: string, bi...` |
| 145 | fn | withFakeRuntimeBins | (private) | `function withFakeRuntimeBins<T>(params: {` |
| 164 | fn | uniqueRuntimeBinNames | (private) | `function uniqueRuntimeBinNames(` |
| 180 | fn | resolveNativeBinaryFixturePath | (private) | `function resolveNativeBinaryFixturePath(): stri...` |
| 197 | fn | expectShellPayloadApprovalDenied | (private) | `function expectShellPayloadApprovalDenied(param...` |
| 217 | fn | expectMutableFileOperandApprovalPlan | (private) | `function expectMutableFileOperandApprovalPlan(f...` |
| 233 | fn | writeScriptOperandFixture | (private) | `function writeScriptOperandFixture(fixture: Scr...` |
| 240 | fn | withScriptOperandPlanFixture | (private) | `function withScriptOperandPlanFixture<T>(` |
| 260 | fn | runNamedCase | (private) | `function runNamedCase(name: string, run: () => ...` |
| 268 | fn | expectRuntimeApprovalDenied | (private) | `function expectRuntimeApprovalDenied(command: s...` |
| 273 | fn | expectApprovalPlanWithoutMutableOperand | (private) | `function expectApprovalPlanWithoutMutableOperan...` |
| 460 | fn | checkCase | (private) | `const checkCase = () => {` |
