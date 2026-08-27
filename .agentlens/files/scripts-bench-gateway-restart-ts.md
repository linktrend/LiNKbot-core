# scripts/bench-gateway-restart.ts

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1697
- **Language:** TypeScript
- **Symbols:** 83
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 21 | type | GatewayBenchCase | (private) | - |
| 30 | type | ProbeTransition | (private) | - |
| 36 | type | ProbeResult | (private) | - |
| 46 | type | ResourceSnapshot | (private) | - |
| 56 | type | BenchmarkEvent | (private) | - |
| 66 | type | GatewayRestartFailureCode | (private) | - |
| 80 | type | RestartIteration | (private) | - |
| 97 | type | ResourceSlope | (private) | - |
| 106 | type | GatewayRestartSample | (private) | - |
| 126 | type | SummaryStats | (private) | - |
| 134 | type | CaseResult | (private) | - |
| 151 | type | BenchmarkEvidenceFailure | (private) | - |
| 157 | type | PluginFixtureResult | (private) | - |
| 162 | type | CliOptions | (private) | - |
| 193 | class | CliArgumentError | (private) | - |
| 248 | fn | readRequiredFlagValue | (private) | `function readRequiredFlagValue(argv: string[], ...` |
| 256 | fn | validateCliArgs | (private) | `function validateCliArgs(argv: string[]): void {` |
| 278 | fn | parseFlagValue | (private) | `function parseFlagValue(argv: string[], flag: s...` |
| 287 | fn | hasFlag | (private) | `function hasFlag(argv: string[], flag: string):...` |
| 291 | fn | hasHelpFlag | (private) | `function hasHelpFlag(argv: string[]): boolean {` |
| 295 | fn | ensureSupportedRestartPlatform | (private) | `function ensureSupportedRestartPlatform(platfor...` |
| 303 | fn | parseRepeatableFlag | (private) | `function parseRepeatableFlag(argv: string[], fl...` |
| 314 | fn | parsePositiveInt | (private) | `function parsePositiveInt(raw: string | undefin...` |
| 318 | fn | parseNonNegativeInt | (private) | `function parseNonNegativeInt(raw: string | unde...` |
| 322 | fn | resolveEntry | (private) | `function resolveEntry(raw: string | undefined):...` |
| 333 | fn | resolveOutputPath | (private) | `function resolveOutputPath(raw: string | undefi...` |
| 344 | fn | resolveCases | (private) | `function resolveCases(caseIds: string[]): Gatew...` |
| 363 | fn | parseOptions | (private) | `function parseOptions(argv: string[] = process....` |
| 387 | fn | printUsage | (private) | `function printUsage(): void {` |
| 412 | fn | median | (private) | `function median(values: number[]): number {` |
| 425 | fn | percentile | (private) | `function percentile(values: number[], p: number...` |
| 431 | fn | summarizeNumbers | (private) | `function summarizeNumbers(values: number[]): Su...` |
| 445 | fn | formatMs | (private) | `function formatMs(value: number | null): string {` |
| 449 | fn | formatMb | (private) | `function formatMb(value: number | null): string {` |
| 453 | fn | formatStats | (private) | `function formatStats(stats: SummaryStats | null...` |
| 460 | fn | formatRate | (private) | `function formatRate(rate: number): string {` |
| 464 | fn | isTraceMetricSummaryKey | (private) | `function isTraceMetricSummaryKey(name: string):...` |
| 488 | fn | traceValue | (private) | `function traceValue(iteration: RestartIteration...` |
| 498 | fn | lastSnapshotValue | (private) | `function lastSnapshotValue(` |
| 511 | fn | slope | (private) | `function slope(values: Array<number | null>): n...` |
| 524 | fn | summarizeResourceSlope | (private) | `function summarizeResourceSlope(` |
| 547 | fn | summarizeCase | (private) | `function summarizeCase(benchCase: GatewayBenchC...` |
| 618 | fn | waitForProbeReady | (private) | `async function waitForProbeReady(params: {` |
| 680 | fn | waitForRestartProbe | (private) | `async function waitForRestartProbe(params: {` |
| 767 | fn | writePluginFixtures | (private) | `function writePluginFixtures(` |
| 802 | fn | writeConfig | (private) | `function writeConfig(root: string, benchCase: G...` |
| 823 | fn | sanitizedEnv | (private) | `function sanitizedEnv(` |
| 851 | fn | writeRestartIntent | (private) | `function writeRestartIntent(env: NodeJS.Process...` |
| 855 | fn | readProcessFdCount | (private) | `function readProcessFdCount(pid: number | undef...` |
| 876 | fn | countLsofFileDescriptors | (private) | `function countLsofFileDescriptors(raw: string):...` |
| 891 | fn | snapshotResources | (private) | `function snapshotResources(` |
| 907 | fn | collectTraceLine | (private) | `function collectTraceLine(` |
| 938 | fn | parseTraceMetrics | (private) | `function parseTraceMetrics(raw: string): Array<...` |
| 963 | fn | classifyGatewayReadyLog | (private) | `function classifyGatewayReadyLog(line: string):...` |
| 973 | fn | collectOutputLines | (private) | `function collectOutputLines(carry: string, chun...` |
| 981 | fn | flushOutputLineBuffers | (private) | `function flushOutputLineBuffers(` |
| 1000 | fn | createEmptyProbeResult | (private) | `function createEmptyProbeResult(): ProbeResult {` |
| 1012 | fn | createRestartIteration | (private) | `function createRestartIteration(index: number):...` |
| 1031 | fn | resolveIterationFailure | (private) | `function resolveIterationFailure(iteration: Res...` |
| 1047 | fn | finalizeRestartIteration | (private) | `function finalizeRestartIteration(` |
| 1056 | fn | hasRestartReadySignal | (private) | `function hasRestartReadySignal(iteration: Resta...` |
| 1063 | fn | hasInitialReadyLogs | (private) | `function hasInitialReadyLogs(params: {` |
| 1070 | fn | resolveRestartDeadlineFailure | (private) | `function resolveRestartDeadlineFailure(childExi...` |
| 1074 | fn | resolveSampleExitFailure | (private) | `function resolveSampleExitFailure(exit: StopChi...` |
| 1083 | fn | computeResourceSlope | (private) | `function computeResourceSlope(iterations: Resta...` |
| 1130 | fn | waitForIterationCondition | (private) | `async function waitForIterationCondition(` |
| 1143 | fn | resolvePhaseDeadlineAt | (private) | `function resolvePhaseDeadlineAt(startedAt: numb...` |
| 1147 | fn | runGatewaySample | (private) | `async function runGatewaySample(options: {` |
| 1197 | fn | sampleRss | (private) | `const sampleRss = () => {` |
| 1216 | fn | onLine | (private) | `const onLine = (line: string, nowMs: number) => {` |
| 1256 | fn | onChunk | (private) | `const onChunk = (stream: "stderr" | "stdout", c...` |
| 1443 | fn | runCase | (private) | `async function runCase(options: {` |
| 1476 | fn | printResult | (private) | `function printResult(result: CaseResult): void {` |
| 1499 | fn | hasBenchmarkFailures | (private) | `function hasBenchmarkFailures(results: CaseResu...` |
| 1505 | fn | hasPositiveNumber | (private) | `function hasPositiveNumber(value: number | null...` |
| 1509 | fn | hasFiniteNumber | (private) | `function hasFiniteNumber(value: number | null):...` |
| 1513 | fn | hasIterationRssEvidence | (private) | `function hasIterationRssEvidence(iteration: Res...` |
| 1520 | fn | isFailureFreeSample | (private) | `function isFailureFreeSample(sample: GatewayRes...` |
| 1527 | fn | collectBenchmarkEvidenceFailures | (private) | `function collectBenchmarkEvidenceFailures(resul...` |
| 1578 | fn | hasInvalidBenchmarkEvidence | (private) | `function hasInvalidBenchmarkEvidence(results: C...` |
| 1582 | fn | shouldFailBenchmark | (private) | `function shouldFailBenchmark(results: CaseResul...` |
| 1589 | fn | printBenchmarkEvidenceFailures | (private) | `function printBenchmarkEvidenceFailures(failure...` |
| 1598 | fn | main | (private) | `async function main() {` |
