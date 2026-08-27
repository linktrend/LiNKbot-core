# extensions/memory-wiki/src/cli.ts

[← Back to Module](../modules/extensions-memory-wiki-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1268
- **Language:** TypeScript
- **Symbols:** 78
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 68 | type | WikiStatusCommandOptions | (private) | - |
| 72 | type | WikiDoctorCommandOptions | (private) | - |
| 76 | type | WikiInitCommandOptions | (private) | - |
| 80 | type | WikiCompileCommandOptions | (private) | - |
| 84 | type | WikiLintCommandOptions | (private) | - |
| 88 | type | WikiIngestCommandOptions | (private) | - |
| 93 | type | WikiOkfImportCommandOptions | (private) | - |
| 97 | type | WikiSearchCommandOptions | (private) | - |
| 105 | type | WikiGetCommandOptions | (private) | - |
| 113 | type | WikiApplySynthesisCommandOptions | (private) | - |
| 124 | type | WikiApplyMetadataCommandOptions | (private) | - |
| 134 | type | WikiBridgeImportCommandOptions | (private) | - |
| 138 | type | WikiUnsafeLocalImportCommandOptions | (private) | - |
| 142 | type | WikiChatGptImportCommandOptions | (private) | - |
| 148 | type | WikiChatGptRollbackCommandOptions | (private) | - |
| 152 | type | WikiObsidianSearchCommandOptions | (private) | - |
| 156 | type | WikiObsidianOpenCommandOptions | (private) | - |
| 160 | type | WikiObsidianCommandCommandOptions | (private) | - |
| 164 | type | WikiObsidianDailyCommandOptions | (private) | - |
| 168 | type | WikiCommandOptions | (private) | - |
| 172 | type | MemoryWikiCliRegistration | (private) | - |
| 178 | fn | sanitizeGatewayStringForTerminal | (private) | `function sanitizeGatewayStringForTerminal(value...` |
| 192 | fn | escapeGatewayJsonForTerminal | (private) | `function escapeGatewayJsonForTerminal(json: str...` |
| 199 | fn | writeOutput | (private) | `function writeOutput(output: string, writer: Pi...` |
| 203 | fn | shouldRouteBridgeRuntimeThroughGateway | (private) | `function shouldRouteBridgeRuntimeThroughGateway...` |
| 209 | fn | isBoundedGatewayString | (private) | `function isBoundedGatewayString(` |
| 216 | fn | isStringArray | (private) | `function isStringArray(` |
| 227 | fn | hasNumberFields | (private) | `function hasNumberFields(value: Record<string, ...` |
| 231 | fn | isWarningList | (private) | `function isWarningList(value: unknown): boolean {` |
| 244 | fn | isMemoryWikiStatus | (private) | `function isMemoryWikiStatus(value: unknown): va...` |
| 281 | fn | isMemoryWikiDoctorReport | (private) | `function isMemoryWikiDoctorReport(value: unknow...` |
| 298 | fn | isMemoryWikiImportResult | (private) | `function isMemoryWikiImportResult(value: unknow...` |
| 316 | fn | validateWikiGatewayResult | (private) | `function validateWikiGatewayResult(` |
| 332 | fn | callWikiGateway | (private) | `async function callWikiGateway(method: "wiki.st...` |
| 333 | fn | callWikiGateway | (private) | `async function callWikiGateway(` |
| 337 | fn | callWikiGateway | (private) | `async function callWikiGateway(` |
| 341 | fn | callWikiGateway | (private) | `async function callWikiGateway(` |
| 354 | fn | normalizeCliStringList | (private) | `function normalizeCliStringList(values?: string...` |
| 362 | fn | collectCliValues | (private) | `function collectCliValues(value: string, acc: s...` |
| 367 | fn | parseWikiSearchEnumOption | (private) | `function parseWikiSearchEnumOption<T extends st...` |
| 378 | fn | resolveWikiApplyBody | (private) | `async function resolveWikiApplyBody(params: { b...` |
| 388 | type | MemoryWikiMutationResult | (private) | - |
| 390 | fn | formatMemoryWikiMutationSummary | (private) | `function formatMemoryWikiMutationSummary(result...` |
| 397 | fn | formatJsonOrText | (private) | `function formatJsonOrText<T>(` |
| 405 | fn | formatGatewayJsonOrText | (private) | `function formatGatewayJsonOrText<T>(` |
| 415 | fn | runWikiCommandWithSummary | (private) | `async function runWikiCommandWithSummary<T>(par...` |
| 426 | fn | runSyncedWikiCommandWithSummary | (private) | `async function runSyncedWikiCommandWithSummary<...` |
| 438 | fn | addWikiSearchConfigOptions | (private) | `function addWikiSearchConfigOptions<T extends C...` |
| 452 | fn | invalidCliArgument | (private) | `function invalidCliArgument(message: string): E...` |
| 461 | fn | parseWikiConfidenceOption | (private) | `function parseWikiConfidenceOption(value: strin...` |
| 470 | fn | parseWikiPositiveIntegerOption | (private) | `function parseWikiPositiveIntegerOption(value: ...` |
| 478 | fn | addWikiApplyMutationOptions | (private) | `function addWikiApplyMutationOptions<T extends ...` |
| 487 | fn | runWikiStatus | (private) | `async function runWikiStatus(params: {` |
| 512 | fn | runWikiDoctor | (private) | `async function runWikiDoctor(params: {` |
| 542 | fn | runWikiInit | (private) | `async function runWikiInit(params: {` |
| 556 | fn | runWikiCompile | (private) | `async function runWikiCompile(params: {` |
| 573 | fn | runWikiLint | (private) | `async function runWikiLint(params: {` |
| 590 | fn | runWikiIngest | (private) | `async function runWikiIngest(params: {` |
| 611 | fn | runWikiOkfImport | (private) | `async function runWikiOkfImport(params: {` |
| 629 | fn | runWikiSearch | (private) | `async function runWikiSearch(params: {` |
| 669 | fn | runWikiGet | (private) | `async function runWikiGet(params: {` |
| 699 | fn | runWikiApplySynthesis | (private) | `async function runWikiApplySynthesis(params: {` |
| 740 | fn | runWikiApplyMetadata | (private) | `async function runWikiApplyMetadata(params: {` |
| 780 | fn | runWikiBridgeImport | (private) | `async function runWikiBridgeImport(params: {` |
| 787 | fn | render | (private) | `const render = (value: MemoryWikiImportedSource...` |
| 806 | fn | runWikiUnsafeLocalImport | (private) | `async function runWikiUnsafeLocalImport(params: {` |
| 828 | fn | runWikiObsidianStatus | (private) | `async function runWikiObsidianStatus(params: {` |
| 844 | fn | assertOfficialObsidianCliSupported | (private) | `function assertOfficialObsidianCliSupported(con...` |
| 850 | fn | runWikiObsidianSearch | (private) | `async function runWikiObsidianSearch(params: {` |
| 865 | fn | runWikiObsidianOpenCli | (private) | `async function runWikiObsidianOpenCli(params: {` |
| 880 | fn | runWikiObsidianCommandCli | (private) | `async function runWikiObsidianCommandCli(params: {` |
| 895 | fn | runWikiObsidianDailyCli | (private) | `async function runWikiObsidianDailyCli(params: {` |
| 909 | fn | formatChatGptImportSummary | (private) | `function formatChatGptImportSummary(result: Cha...` |
| 917 | fn | formatChatGptRollbackSummary | (private) | `function formatChatGptRollbackSummary(result: C...` |
| 924 | fn | runWikiChatGptImport | (private) | `async function runWikiChatGptImport(params: {` |
| 944 | fn | runWikiChatGptRollback | (private) | `async function runWikiChatGptRollback(params: {` |
| 962 | fn | registerWikiCli | pub | `export function registerWikiCli(program: Comman...` |
| 974 | fn | requireCommandContext | (private) | `const requireCommandContext = () => {` |

## Public API

### `registerWikiCli`

```
export function registerWikiCli(program: Command, registration: MemoryWikiCliRegistration) {
```

**Line:** 962 | **Kind:** fn
