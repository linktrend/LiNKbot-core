# extensions/qa-lab/src/cli.ts

[← Back to Module](../modules/extensions-qa-lab/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1000
- **Language:** TypeScript
- **Symbols:** 33
- **Public symbols:** 2

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 25 | type | QaScenarioRunCliOptions | (private) | - |
| 37 | type | QaRunCliOptions | (private) | - |
| 66 | type | QaSuiteCliOptions | (private) | - |
| 87 | fn | invalidQaCliArgument | (private) | `function invalidQaCliArgument(message: string):...` |
| 95 | fn | parseQaCliPositiveIntegerOption | (private) | `function parseQaCliPositiveIntegerOption(value:...` |
| 103 | fn | parseQaCliTcpPortOption | (private) | `function parseQaCliTcpPortOption(value: string,...` |
| 111 | fn | parseQaEvidenceModeOption | (private) | `function parseQaEvidenceModeOption(value: strin...` |
| 122 | fn | resolveQaEvidenceModeOptions | (private) | `function resolveQaEvidenceModeOptions(opts: QaR...` |
| 134 | fn | collectCliSuppliedQaRunFlags | (private) | `function collectCliSuppliedQaRunFlags(` |
| 143 | fn | formatFlagList | (private) | `function formatFlagList(flags: readonly string[...` |
| 147 | fn | validateQaRunMode | (private) | `function validateQaRunMode(opts: QaRunCliOption...` |
| 171 | fn | runQaSelfCheck | (private) | `async function runQaSelfCheck(opts: QaLabSelfCh...` |
| 176 | fn | runQaProfile | (private) | `async function runQaProfile(opts: QaProfileComm...` |
| 181 | fn | runQaSuiteCliCommand | (private) | `async function runQaSuiteCliCommand(opts: QaSui...` |
| 186 | fn | runQaParityReport | (private) | `async function runQaParityReport(opts: {` |
| 201 | fn | runQaConfidenceReport | (private) | `async function runQaConfidenceReport(opts: {` |
| 213 | fn | runQaConfidenceSelfTest | (private) | `async function runQaConfidenceSelfTest(opts: { ...` |
| 218 | fn | runQaCoverageReport | (private) | `async function runQaCoverageReport(opts: {` |
| 230 | fn | runQaJsonlReplay | (private) | `async function runQaJsonlReplay(opts: {` |
| 241 | fn | runQaCharacterEval | (private) | `async function runQaCharacterEval(opts: {` |
| 259 | fn | runQaManualLane | (private) | `async function runQaManualLane(opts: {` |
| 273 | fn | runQaCredentialsAdd | (private) | `async function runQaCredentialsAdd(opts: {` |
| 287 | fn | runQaCredentialsRemove | (private) | `async function runQaCredentialsRemove(opts: {` |
| 298 | fn | runQaCredentialsList | (private) | `async function runQaCredentialsList(opts: {` |
| 312 | fn | runQaCredentialsDoctor | (private) | `async function runQaCredentialsDoctor(opts: {` |
| 322 | fn | runQaUi | (private) | `async function runQaUi(opts: {` |
| 339 | fn | runQaDockerScaffold | (private) | `async function runQaDockerScaffold(opts: {` |
| 353 | fn | runQaDockerBuildImage | (private) | `async function runQaDockerBuildImage(opts: { re...` |
| 358 | fn | runQaDockerUp | (private) | `async function runQaDockerUp(opts: {` |
| 373 | fn | runQaProviderServer | (private) | `async function runQaProviderServer(` |
| 381 | fn | isQaLabCliAvailable | pub | `export function isQaLabCliAvailable(): boolean {` |
| 385 | fn | assertNoQaSubcommandCollision | (private) | `function assertNoQaSubcommandCollision(qa: Comm...` |
| 391 | fn | registerQaLabCli | pub | `export function registerQaLabCli(program: Comma...` |

## Public API

### `isQaLabCliAvailable`

```
export function isQaLabCliAvailable(): boolean {
```

**Line:** 381 | **Kind:** fn

### `registerQaLabCli`

```
export function registerQaLabCli(program: Command) {
```

**Line:** 391 | **Kind:** fn
