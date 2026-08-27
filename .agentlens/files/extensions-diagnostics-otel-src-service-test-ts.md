# extensions/diagnostics-otel/src/service.test.ts

[← Back to Module](../modules/extensions-diagnostics-otel-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 5699
- **Language:** TypeScript
- **Symbols:** 32
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 8 | type | TestSpanContext | (private) | - |
| 206 | fn | numberedSpanId | (private) | `function numberedSpanId(index: number) {` |
| 237 | fn | createLogger | (private) | `function createLogger() {` |
| 246 | type | OtelContextFlags | (private) | - |
| 260 | fn | createOtelContext | (private) | `function createOtelContext(` |
| 296 | fn | createTraceOnlyContext | (private) | `function createTraceOnlyContext(endpoint: strin...` |
| 300 | fn | startedSpanCall | (private) | `function startedSpanCall(name: string) {` |
| 311 | fn | startedSpanOptions | (private) | `function startedSpanOptions(name: string) {` |
| 315 | fn | startedSpanParentContexts | (private) | `function startedSpanParentContexts(name: string) {` |
| 325 | fn | startedSpanParentContextsByName | (private) | `function startedSpanParentContextsByName(name: ...` |
| 336 | fn | mockCall | (private) | `function mockCall(mock: { mock: { calls: unknow...` |
| 344 | fn | mockCallArg | (private) | `function mockCallArg(mock: { mock: { calls: unk...` |
| 348 | type | TestExporterOptions | (private) | - |
| 353 | fn | firstExporterOptions | (private) | `function firstExporterOptions(mock: { mock: { c...` |
| 357 | fn | createNodeProxyAgentCalls | (private) | `function createNodeProxyAgentCalls(): Array<{` |
| 382 | fn | findCreateNodeProxyAgentCall | (private) | `function findCreateNodeProxyAgentCall(targetUrl...` |
| 390 | fn | firstSpanProcessorOptions | (private) | `function firstSpanProcessorOptions(): { schedul...` |
| 394 | fn | firstSetSpanContext | (private) | `function firstSetSpanContext(): Record<string, ...` |
| 398 | fn | spanByName | (private) | `function spanByName(name: string): (typeof tele...` |
| 406 | fn | firstSpanAttributes | (private) | `function firstSpanAttributes(name: string): Rec...` |
| 410 | fn | stringAttribute | (private) | `function stringAttribute(attrs: Record<string, ...` |
| 416 | fn | firstSpanEndTime | (private) | `function firstSpanEndTime(name: string): unknown {` |
| 420 | fn | firstCounterAddCall | (private) | `function firstCounterAddCall(name: string): [un...` |
| 428 | fn | lastHistogramRecord | (private) | `function lastHistogramRecord(name: string) {` |
| 434 | fn | histogramCreateOptions | (private) | `function histogramCreateOptions(name: string) {` |
| 444 | type | StdoutDiagnosticLogLine | (private) | - |
| 457 | fn | captureStdoutWrites | (private) | `function captureStdoutWrites() {` |
| 468 | fn | parseSingleStdoutDiagnosticLogLine | (private) | `function parseSingleStdoutDiagnosticLogLine(wri...` |
| 476 | fn | emitAndCaptureLog | (private) | `async function emitAndCaptureLog(` |
| 510 | fn | flushDiagnosticEvents | (private) | `function flushDiagnosticEvents() {` |
| 516 | fn | emitTrustedModelCallCompletedWithContent | (private) | `function emitTrustedModelCallCompletedWithContent(` |
| 532 | fn | emitTrustedToolExecutionCompletedWithContent | (private) | `function emitTrustedToolExecutionCompletedWithC...` |
