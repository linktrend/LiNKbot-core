# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## extensions/diagnostics-prometheus/src/service.test.ts (807 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | fn | baseEvent | (private) |
| 16 | fn | createMetricsHarness | (private) |

## extensions/diagnostics-prometheus/src/service.ts (1065 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 12 | type | LabelSet | (private) |
| 14 | type | CounterSample | (private) |
| 20 | type | HistogramSample | (private) |
| 29 | type | GaugeSample | (private) |
| 35 | type | MetricSnapshot | (private) |
| 41 | type | PrometheusMetricStore | (private) |
| 55 | fn | lowCardinalityLabel | (private) |
| 67 | fn | lowCardinalityQueueLaneLabel | (private) |
| 81 | fn | numericValue | (private) |
| 85 | fn | seconds | (private) |
| 90 | fn | sortedLabels | (private) |
| 94 | fn | metricKey | (private) |
| 98 | fn | escapeHelp | (private) |
| 102 | fn | escapeLabelValue | (private) |
| 106 | fn | formatLabels | (private) |
| 114 | fn | formatPrometheusNumber | (private) |
| 121 | fn | createPrometheusMetricStore | (private) |
| 141 | fn | counter | (private) |
| 157 | fn | gauge | (private) |
| 168 | fn | histogram | (private) |
| 220 | fn | reset | (private) |
| 230 | fn | safeErrorMessage | (private) |
| 240 | fn | shouldRecordDiagnosticEvent | (private) |
| 244 | fn | renderPrometheusMetrics | (private) |
| 249 | fn | emitHeader | (private) |
| 304 | fn | runLabels | (private) |
| 322 | fn | modelCallLabels | (private) |
| 343 | fn | modelFailoverLabels | (private) |
| 357 | fn | toolExecutionLabels | (private) |
| 378 | fn | toolExecutionBlockedLabels | (private) |
| 390 | fn | skillLabels | (private) |
| 404 | fn | harnessLabels | (private) |
| 428 | fn | webhookLabels | (private) |
| 440 | fn | sessionStuckLabels | (private) |
| 449 | fn | sessionRecoveryLabels | (private) |
| 468 | fn | livenessLabels | (private) |
| 476 | fn | payloadLargeLabels | (private) |
| 488 | fn | talkLabels | (private) |
| 498 | fn | recordModelUsage | (private) |
| 509 | fn | recordTokens | (private) |
| 559 | fn | recordDiagnosticEvent | (private) |
| 1000 | fn | createMetricsHandler | (private) |
| 1022 | fn | createDiagnosticsPrometheusExporter | pub |
