# extensions/diagnostics-prometheus/src/service.ts

[← Back to Module](../modules/extensions-diagnostics-prometheus/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1065
- **Language:** TypeScript
- **Symbols:** 43
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 12 | type | LabelSet | (private) | - |
| 14 | type | CounterSample | (private) | - |
| 20 | type | HistogramSample | (private) | - |
| 29 | type | GaugeSample | (private) | - |
| 35 | type | MetricSnapshot | (private) | - |
| 41 | type | PrometheusMetricStore | (private) | - |
| 55 | fn | lowCardinalityLabel | (private) | `function lowCardinalityLabel(value: string | un...` |
| 67 | fn | lowCardinalityQueueLaneLabel | (private) | `function lowCardinalityQueueLaneLabel(value: st...` |
| 81 | fn | numericValue | (private) | `function numericValue(value: number | undefined...` |
| 85 | fn | seconds | (private) | `function seconds(ms: number | undefined): numbe...` |
| 90 | fn | sortedLabels | (private) | `function sortedLabels(labels: LabelSet): [strin...` |
| 94 | fn | metricKey | (private) | `function metricKey(name: string, labels: LabelS...` |
| 98 | fn | escapeHelp | (private) | `function escapeHelp(value: string): string {` |
| 102 | fn | escapeLabelValue | (private) | `function escapeLabelValue(value: string): string {` |
| 106 | fn | formatLabels | (private) | `function formatLabels(labels: LabelSet): string {` |
| 114 | fn | formatPrometheusNumber | (private) | `function formatPrometheusNumber(value: number):...` |
| 121 | fn | createPrometheusMetricStore | (private) | `function createPrometheusMetricStore() {` |
| 141 | fn | counter | (private) | `const counter = (name: string, help: string, la...` |
| 157 | fn | gauge | (private) | `const gauge = (name: string, help: string, labe...` |
| 168 | fn | histogram | (private) | `const histogram = (` |
| 220 | fn | reset | (private) | `const reset = () => {` |
| 230 | fn | safeErrorMessage | (private) | `function safeErrorMessage(err: unknown): string {` |
| 240 | fn | shouldRecordDiagnosticEvent | (private) | `function shouldRecordDiagnosticEvent(metadata: ...` |
| 244 | fn | renderPrometheusMetrics | (private) | `function renderPrometheusMetrics(store: Prometh...` |
| 249 | fn | emitHeader | (private) | `const emitHeader = (name: string, type: "counte...` |
| 304 | fn | runLabels | (private) | `function runLabels(evt: {` |
| 322 | fn | modelCallLabels | (private) | `function modelCallLabels(evt: {` |
| 343 | fn | modelFailoverLabels | (private) | `function modelFailoverLabels(` |
| 357 | fn | toolExecutionLabels | (private) | `function toolExecutionLabels(evt: {` |
| 378 | fn | toolExecutionBlockedLabels | (private) | `function toolExecutionBlockedLabels(` |
| 390 | fn | skillLabels | (private) | `function skillLabels(evt: {` |
| 404 | fn | harnessLabels | (private) | `function harnessLabels(evt: {` |
| 428 | fn | webhookLabels | (private) | `function webhookLabels(` |
| 440 | fn | sessionStuckLabels | (private) | `function sessionStuckLabels(` |
| 449 | fn | sessionRecoveryLabels | (private) | `function sessionRecoveryLabels(` |
| 468 | fn | livenessLabels | (private) | `function livenessLabels(` |
| 476 | fn | payloadLargeLabels | (private) | `function payloadLargeLabels(` |
| 488 | fn | talkLabels | (private) | `function talkLabels(evt: Extract<DiagnosticEven...` |
| 498 | fn | recordModelUsage | (private) | `function recordModelUsage(` |
| 509 | fn | recordTokens | (private) | `const recordTokens = (tokenType: string, value:...` |
| 559 | fn | recordDiagnosticEvent | (private) | `function recordDiagnosticEvent(` |
| 1000 | fn | createMetricsHandler | (private) | `function createMetricsHandler(store: Prometheus...` |
| 1022 | fn | createDiagnosticsPrometheusExporter | pub | `export function createDiagnosticsPrometheusExpo...` |

## Public API

### `createDiagnosticsPrometheusExporter`

```
export function createDiagnosticsPrometheusExporter() {
```

**Line:** 1022 | **Kind:** fn
