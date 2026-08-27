# scripts/bench-gateway-startup.ts

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1026
- **Language:** TypeScript
- **Symbols:** 48
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 20 | type | GatewayBenchCase | (private) | - |
| 29 | type | ProbeResult | (private) | - |
| 37 | type | ProbeTransition | (private) | - |
| 43 | type | GatewaySample | (private) | - |
| 61 | type | SummaryStats | (private) | - |
| 69 | type | CaseResult | (private) | - |
| 86 | type | BenchmarkFailure | (private) | - |
| 92 | type | PluginFixtureResult | (private) | - |
| 97 | type | CliOptions | (private) | - |
| 123 | class | CliArgumentError | (private) | - |
| 202 | fn | readRequiredFlagValue | (private) | `function readRequiredFlagValue(argv: string[], ...` |
| 210 | fn | validateCliArgs | (private) | `function validateCliArgs(argv: string[]): void {` |
| 232 | fn | parseFlagValue | (private) | `function parseFlagValue(argv: string[], flag: s...` |
| 241 | fn | hasFlag | (private) | `function hasFlag(argv: string[], flag: string):...` |
| 245 | fn | hasHelpFlag | (private) | `function hasHelpFlag(argv: string[]): boolean {` |
| 249 | fn | parseRepeatableFlag | (private) | `function parseRepeatableFlag(argv: string[], fl...` |
| 260 | fn | parsePositiveInt | (private) | `function parsePositiveInt(raw: string | undefin...` |
| 264 | fn | parseNonNegativeInt | (private) | `function parseNonNegativeInt(raw: string | unde...` |
| 268 | fn | resolveEntry | (private) | `function resolveEntry(raw: string | undefined):...` |
| 279 | fn | resolveOutputPath | (private) | `function resolveOutputPath(raw: string | undefi...` |
| 290 | fn | resolveCases | (private) | `function resolveCases(caseIds: string[]): Gatew...` |
| 311 | fn | parseOptions | (private) | `function parseOptions(argv: string[] = process....` |
| 329 | fn | printUsage | (private) | `function printUsage(): void {` |
| 352 | fn | median | (private) | `function median(values: number[]): number {` |
| 365 | fn | percentile | (private) | `function percentile(values: number[], p: number...` |
| 371 | fn | summarizeNumbers | (private) | `function summarizeNumbers(values: number[]): Su...` |
| 385 | fn | summarizeCase | (private) | `function summarizeCase(benchCase: GatewayBenchC...` |
| 453 | fn | collectResultFailures | (private) | `function collectResultFailures(` |
| 499 | fn | printBenchmarkFailures | (private) | `function printBenchmarkFailures(failures: Bench...` |
| 516 | fn | formatMs | (private) | `function formatMs(value: number | null): string {` |
| 523 | fn | formatMb | (private) | `function formatMb(value: number | null): string {` |
| 530 | fn | formatRatio | (private) | `function formatRatio(value: number | null): str...` |
| 537 | fn | formatStats | (private) | `function formatStats(stats: SummaryStats | null...` |
| 544 | fn | formatMemoryStats | (private) | `function formatMemoryStats(stats: SummaryStats ...` |
| 551 | fn | formatRatioStats | (private) | `function formatRatioStats(stats: SummaryStats |...` |
| 558 | fn | waitForProbe | (private) | `async function waitForProbe(params: {` |
| 611 | fn | writePluginFixtures | (private) | `function writePluginFixtures(` |
| 644 | fn | writeConfig | (private) | `function writeConfig(root: string, benchCase: G...` |
| 665 | fn | sanitizedEnv | (private) | `function sanitizedEnv(` |
| 693 | fn | collectStartupTrace | (private) | `function collectStartupTrace(line: string, star...` |
| 717 | fn | classifyGatewayReadyLog | (private) | `function classifyGatewayReadyLog(line: string):...` |
| 727 | fn | parseStartupTraceMetrics | (private) | `function parseStartupTraceMetrics(raw: string):...` |
| 750 | fn | runGatewaySample | (private) | `async function runGatewaySample(options: {` |
| 802 | fn | sampleRss | (private) | `const sampleRss = () => {` |
| 820 | fn | onChunk | (private) | `const onChunk = (chunk: Buffer) => {` |
| 891 | fn | runCase | (private) | `async function runCase(options: {` |
| 925 | fn | printResult | (private) | `function printResult(result: CaseResult): void {` |
| 950 | fn | main | (private) | `async function main() {` |
