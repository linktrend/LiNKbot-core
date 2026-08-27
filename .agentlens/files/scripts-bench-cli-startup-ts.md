# scripts/bench-cli-startup.ts

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1316
- **Language:** TypeScript
- **Symbols:** 55
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 10 | type | CommandCase | (private) | - |
| 21 | type | Sample | (private) | - |
| 32 | type | SummaryStats | (private) | - |
| 40 | type | CaseSummary | (private) | - |
| 48 | type | SuiteResult | (private) | - |
| 65 | type | BenchmarkReport | (private) | - |
| 70 | type | CaseDelta | (private) | - |
| 79 | type | BenchmarkComparison | (private) | - |
| 85 | type | BenchmarkComparisonResult | (private) | - |
| 91 | type | CliOptions | (private) | - |
| 115 | fn | resolveTimeoutKillGraceMs | (private) | `function resolveTimeoutKillGraceMs(env: NodeJS....` |
| 457 | fn | parseFlagValue | (private) | `function parseFlagValue(flag: string): string |...` |
| 469 | fn | hasFlag | (private) | `function hasFlag(flag: string): boolean {` |
| 473 | fn | parseRepeatableFlag | (private) | `function parseRepeatableFlag(flag: string): str...` |
| 484 | fn | validateCliArgs | (private) | `function validateCliArgs(argv: readonly string[...` |
| 509 | fn | parsePositiveInt | (private) | `function parsePositiveInt(raw: string | undefin...` |
| 513 | fn | parseNonNegativeInt | (private) | `function parseNonNegativeInt(raw: string | unde...` |
| 517 | fn | parseGatewayPortEnv | (private) | `function parseGatewayPortEnv(raw: string | unde...` |
| 537 | fn | parsePresets | (private) | `function parsePresets(raw: string | undefined):...` |
| 551 | fn | resolveCases | (private) | `function resolveCases(options: { presets: strin...` |
| 572 | fn | median | (private) | `function median(values: number[]): number {` |
| 588 | fn | percentile | (private) | `function percentile(values: number[], p: number...` |
| 597 | fn | summarizeNumbers | (private) | `function summarizeNumbers(values: number[]): Su...` |
| 611 | fn | summarizeSamples | (private) | `function summarizeSamples(samples: Sample[]): C...` |
| 628 | fn | formatMs | (private) | `function formatMs(value: number): string {` |
| 632 | fn | formatMb | (private) | `function formatMb(value: number): string {` |
| 636 | fn | collectExitSummary | (private) | `function collectExitSummary(samples: Sample[]):...` |
| 648 | fn | buildConfigFixture | (private) | `function buildConfigFixture(commandCase: Comman...` |
| 668 | fn | buildRssHook | (private) | `function buildRssHook(tmpDir: string): string {` |
| 684 | fn | parseMaxRssMb | (private) | `function parseMaxRssMb(stderr: string): number ...` |
| 693 | fn | nodeImportSpecifierForPath | (private) | `function nodeImportSpecifierForPath(filePath: s...` |
| 697 | fn | buildCpuOrHeapFlags | (private) | `function buildCpuOrHeapFlags(options: { cpuProf...` |
| 708 | fn | appendLimited | (private) | `function appendLimited(current: string, chunk: ...` |
| 713 | fn | runSample | (private) | `async function runSample(params: {` |
| 769 | fn | finish | (private) | `const finish = (sample: Omit<Sample, "ms" | "fi...` |
| 788 | fn | markFirstOutput | (private) | `const markFirstOutput = () => {` |
| 828 | fn | complete | (private) | `const complete = () =>` |
| 856 | fn | finishAfterTimeoutCleanup | (private) | `async function finishAfterTimeoutCleanup(params: {` |
| 876 | fn | signalSampleProcess | (private) | `function signalSampleProcess(` |
| 898 | fn | isSampleProcessGroupAlive | (private) | `function isSampleProcessGroupAlive(` |
| 913 | fn | waitForSampleProcessGroupExit | (private) | `async function waitForSampleProcessGroupExit(` |
| 930 | fn | runCase | (private) | `async function runCase(params: {` |
| 952 | fn | tailLines | (private) | `function tailLines(value: string, maxLines: num...` |
| 956 | fn | printSuite | (private) | `function printSuite(result: SuiteResult): void {` |
| 981 | fn | printDelta | (private) | `function printDelta(primary: SuiteResult, secon...` |
| 999 | fn | buildCaseDeltas | (private) | `function buildCaseDeltas(primary: SuiteResult, ...` |
| 1032 | fn | collectFailedSamples | pub | `export function collectFailedSamples(result: Su...` |
| 1068 | fn | buildSuiteResult | (private) | `async function buildSuiteResult(params: {` |
| 1112 | fn | parseOptions | (private) | `function parseOptions(): CliOptions {` |
| 1134 | fn | printUsage | (private) | `function printUsage(): void {` |
| 1162 | fn | readBenchmarkReport | (private) | `function readBenchmarkReport(filePath: string):...` |
| 1166 | fn | writeJsonOutput | (private) | `function writeJsonOutput(filePath: string, valu...` |
| 1171 | fn | readBenchmarkComparison | (private) | `function readBenchmarkComparison(` |
| 1188 | fn | readBenchmarkComparisonForTesting | (private) | `function readBenchmarkComparisonForTesting(` |
| 1195 | fn | main | (private) | `async function main(): Promise<void> {` |

## Public API

### `collectFailedSamples`

```
export function collectFailedSamples(result: SuiteResult): string[] {
```

**Line:** 1032 | **Kind:** fn
