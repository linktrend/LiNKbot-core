# src/daemon/systemd.test.ts

[← Back to Module](../modules/src-daemon/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2425
- **Language:** TypeScript
- **Symbols:** 19
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 9 | type | ExecFileError | (private) | - |
| 13 | type | ExecFileCallback | (private) | - |
| 14 | type | ExecFileMock | (private) | - |
| 114 | fn | createWritableStreamMock | (private) | `const createWritableStreamMock = () => {` |
| 122 | fn | requireFirstWrite | (private) | `function requireFirstWrite(write: ReturnType<ty...` |
| 134 | fn | pathLikeToString | (private) | `function pathLikeToString(pathname: unknown): s...` |
| 147 | fn | assertUserSystemctlArgs | (private) | `function assertUserSystemctlArgs(args: string[]...` |
| 151 | fn | assertMachineUserSystemctlArgs | (private) | `function assertMachineUserSystemctlArgs(args: s...` |
| 155 | fn | mockEffectiveUid | (private) | `function mockEffectiveUid(uid: number) {` |
| 159 | fn | readManagedServiceEnabled | (private) | `async function readManagedServiceEnabled(env: N...` |
| 164 | fn | mockReadGatewayServiceFile | (private) | `function mockReadGatewayServiceFile(` |
| 184 | fn | expectExecStartWithoutEnvironment | (private) | `async function expectExecStartWithoutEnvironmen...` |
| 192 | fn | assertRestartSuccess | (private) | `const assertRestartSuccess = async (env: NodeJS...` |
| 560 | fn | mockUnitFileLayout | (private) | `function mockUnitFileLayout(layout: { user?: bo...` |
| 796 | fn | readRuntimeFromShowOutput | (private) | `async function readRuntimeFromShowOutput(output...` |
| 1247 | fn | withStageFixture | (private) | `async function withStageFixture(` |
| 1276 | fn | mockSystemctlStatusOk | (private) | `function mockSystemctlStatusOk(): void {` |
| 1804 | fn | withNodeSystemdFixture | (private) | `async function withNodeSystemdFixture(` |
| 2168 | fn | assertMachineRestartArgs | (private) | `const assertMachineRestartArgs = (args: string[...` |
