# test/e2e/qa-lab/runtime/qa-otel-smoke-runtime.ts

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1944
- **Language:** TypeScript
- **Symbols:** 77
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 26 | type | CollectorMode | (private) | - |
| 27 | type | OtelLogsExporter | (private) | - |
| 29 | type | OtlpAnyValue | (private) | - |
| 39 | type | OtlpKeyValue | (private) | - |
| 44 | type | OtlpSpan | (private) | - |
| 50 | type | OtlpScopeSpans | (private) | - |
| 54 | type | OtlpResourceSpans | (private) | - |
| 58 | type | OtlpSignal | (private) | - |
| 60 | type | CliOptions | (private) | - |
| 67 | type | OtelSmokeEvidenceContext | (private) | - |
| 74 | type | CapturedRequest | (private) | - |
| 85 | type | CapturedSpan | (private) | - |
| 91 | type | CapturedMetric | (private) | - |
| 95 | type | CapturedLogRecord | (private) | - |
| 101 | type | StdoutDiagnosticLogRecord | (private) | - |
| 194 | fn | readPositiveIntegerEnv | (private) | `function readPositiveIntegerEnv(` |
| 214 | fn | createOtelSmokeRunId | (private) | `function createOtelSmokeRunId(): string {` |
| 218 | fn | oversizedBodyError | (private) | `function oversizedBodyError(` |
| 230 | fn | usage | (private) | `function usage(): string {` |
| 240 | fn | parseArgs | (private) | `function parseArgs(argv: string[]): CliOptions {` |
| 249 | fn | recordOnce | (private) | `const recordOnce = (flag: string) => {` |
| 262 | fn | readValue | (private) | `const readValue = () => {` |
| 298 | fn | disallowedBodyNeedles | (private) | `function disallowedBodyNeedles(): string[] {` |
| 302 | fn | readRequestBody | (private) | `async function readRequestBody(` |
| 320 | fn | headerValue | (private) | `function headerValue(value: string | string[] |...` |
| 324 | fn | decodeRequestBody | (private) | `function decodeRequestBody(` |
| 356 | fn | appendCapturedBodyText | (private) | `function appendCapturedBodyText(` |
| 386 | fn | normalizeOtlpValue | (private) | `function normalizeOtlpValue(value: OtlpAnyValue...` |
| 416 | fn | spanAttributes | (private) | `function spanAttributes(span: OtlpSpan): Record...` |
| 428 | class | ProtoReader | (private) | - |
| 509 | fn | decodeAnyValue | (private) | `function decodeAnyValue(message: Uint8Array): O...` |
| 535 | fn | decodeArrayValue | (private) | `function decodeArrayValue(message: Uint8Array):...` |
| 549 | fn | decodeKeyValue | (private) | `function decodeKeyValue(message: Uint8Array): O...` |
| 565 | fn | decodeKeyValueList | (private) | `function decodeKeyValueList(message: Uint8Array...` |
| 579 | fn | decodeSpan | (private) | `function decodeSpan(message: Uint8Array): OtlpS...` |
| 598 | fn | decodeScopeSpans | (private) | `function decodeScopeSpans(message: Uint8Array):...` |
| 612 | fn | decodeResourceSpans | (private) | `function decodeResourceSpans(message: Uint8Arra...` |
| 626 | fn | decodeTraceRequest | (private) | `function decodeTraceRequest(body: Buffer): Capt...` |
| 656 | fn | decodeMetric | (private) | `function decodeMetric(message: Uint8Array): Cap...` |
| 671 | fn | decodeScopeMetrics | (private) | `function decodeScopeMetrics(message: Uint8Array...` |
| 688 | fn | decodeResourceMetrics | (private) | `function decodeResourceMetrics(message: Uint8Ar...` |
| 702 | fn | decodeMetricRequest | (private) | `function decodeMetricRequest(body: Buffer): Cap...` |
| 716 | fn | decodeLogRecord | (private) | `function decodeLogRecord(message: Uint8Array): ...` |
| 736 | fn | decodeScopeLogs | (private) | `function decodeScopeLogs(message: Uint8Array): ...` |
| 750 | fn | decodeResourceLogs | (private) | `function decodeResourceLogs(message: Uint8Array...` |
| 764 | fn | decodeLogRequest | (private) | `function decodeLogRequest(body: Buffer): Captur...` |
| 778 | fn | startLocalOtlpReceiver | (private) | `function startLocalOtlpReceiver(disallowedBodyN...` |
| 918 | fn | closeLocalOtlpReceiverConnections | (private) | `function closeLocalOtlpReceiverConnections(` |
| 928 | fn | reserveLocalPort | (private) | `async function reserveLocalPort(): Promise<numb...` |
| 944 | fn | canConnectToLocalPort | (private) | `async function canConnectToLocalPort(port: numb...` |
| 947 | fn | cleanup | (private) | `const cleanup = () => {` |
| 969 | fn | waitForLocalPort | (private) | `async function waitForLocalPort(port: number, t...` |
| 986 | fn | createBoundedTextAccumulator | (private) | `function createBoundedTextAccumulator(maxBytes:...` |
| 1016 | fn | trimUtf8Tail | (private) | `function trimUtf8Tail(value: string, maxBytes: ...` |
| 1024 | fn | objectValue | (private) | `function objectValue(value: object, key: string...` |
| 1028 | fn | isStdoutDiagnosticLogRecord | (private) | `function isStdoutDiagnosticLogRecord(value: unk...` |
| 1037 | fn | parseStdoutDiagnosticLogLine | (private) | `function parseStdoutDiagnosticLogLine(line: str...` |
| 1050 | fn | createStdoutDiagnosticLogCapture | (private) | `function createStdoutDiagnosticLogCapture(maxLi...` |
| 1055 | fn | appendLine | (private) | `const appendLine = (line: string) => {` |
| 1084 | fn | stopDockerContainer | (private) | `async function stopDockerContainer(name: string...` |
| 1094 | type | StartDockerOtelCollectorDeps | (private) | - |
| 1107 | fn | startDockerOtelCollector | (private) | `async function startDockerOtelCollector(` |
| 1220 | fn | collectAttributeKeys | (private) | `function collectAttributeKeys(spans: CapturedSp...` |
| 1230 | fn | printableContext | (private) | `function printableContext(value: string): string {` |
| 1234 | fn | findNeedleContexts | (private) | `function findNeedleContexts(body: string, needl...` |
| 1248 | fn | capturedValueKind | (private) | `function capturedValueKind(value: string | numb...` |
| 1252 | fn | isLatestGenAiModelCallSpan | (private) | `function isLatestGenAiModelCallSpan(span: Captu...` |
| 1265 | fn | delay | (private) | `async function delay(ms: number): Promise<void> {` |
| 1271 | fn | createDirectProducerContext | (private) | `function createDirectProducerContext(params: {` |
| 1306 | fn | runDirectTelemetryProducer | (private) | `async function runDirectTelemetryProducer(param...` |
| 1466 | fn | hasRequiredSmokeSignals | (private) | `function hasRequiredSmokeSignals(params: {` |
| 1485 | fn | waitForExpectedTelemetry | (private) | `async function waitForExpectedTelemetry(` |
| 1499 | fn | formatBoundedList | (private) | `function formatBoundedList(values: readonly str...` |
| 1509 | fn | assertSmoke | (private) | `function assertSmoke(params: {` |
| 1713 | fn | main | (private) | `async function main() {` |
| 1743 | fn | writeStdout | (private) | `const writeStdout = (chunk: unknown) => {` |
| 1747 | fn | writeStderr | (private) | `const writeStderr = (chunk: unknown) => {` |
