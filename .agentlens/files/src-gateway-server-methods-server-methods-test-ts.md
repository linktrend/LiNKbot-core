# src/gateway/server-methods/server-methods.test.ts

[← Back to Module](../modules/src-gateway-server-methods/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 5638
- **Language:** TypeScript
- **Symbols:** 28
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 46 | fn | waitForFast | (private) | `function waitForFast<T>(` |
| 59 | fn | countMatching | (private) | `function countMatching<T>(items: readonly T[], ...` |
| 69 | fn | expectRecordFields | (private) | `function expectRecordFields(record: unknown, ex...` |
| 80 | fn | mockCallArg | (private) | `function mockCallArg(mock: ReturnType<typeof vi...` |
| 88 | fn | lastMockCallArg | (private) | `function lastMockCallArg(mock: ReturnType<typeo...` |
| 97 | fn | runLifecycleScenario | (private) | `async function runLifecycleScenario(params: {` |
| 2022 | fn | deliveryMirror | (private) | `const deliveryMirror = (sourceMessageId: string...` |
| 2735 | fn | execApprovalNoop | (private) | `const execApprovalNoop = () => false;` |
| 2736 | type | ExecApprovalHandlers | (private) | - |
| 2737 | type | ExecApprovalGetArgs | (private) | - |
| 2738 | type | ExecApprovalRequestArgs | (private) | - |
| 2739 | type | ExecApprovalResolveArgs | (private) | - |
| 2740 | type | ExecApprovalWaitArgs | (private) | - |
| 2758 | fn | createExecApprovalClient | (private) | `function createExecApprovalClient(params: {` |
| 2785 | fn | toExecApprovalRequestContext | (private) | `function toExecApprovalRequestContext(context: {` |
| 2793 | fn | toExecApprovalResolveContext | (private) | `function toExecApprovalResolveContext(context: {` |
| 2799 | fn | getExecApproval | (private) | `async function getExecApproval(params: {` |
| 2818 | fn | listExecApprovals | (private) | `async function listExecApprovals(params: {` |
| 2836 | fn | requestExecApproval | (private) | `async function requestExecApproval(params: {` |
| 2895 | fn | resolveExecApproval | (private) | `async function resolveExecApproval(params: {` |
| 2919 | fn | waitExecApproval | (private) | `async function waitExecApproval(params: {` |
| 2938 | fn | createExecApprovalFixture | (private) | `function createExecApprovalFixture(opts?: { con...` |
| 2954 | fn | getRequestedExecApprovalPayload | (private) | `function getRequestedExecApprovalPayload(` |
| 2971 | fn | waitForRequestedExecApprovalPayload | (private) | `async function waitForRequestedExecApprovalPayl...` |
| 2983 | fn | createForwardingExecApprovalFixture | (private) | `function createForwardingExecApprovalFixture(op...` |
| 3016 | fn | drainApprovalRequestTicks | (private) | `async function drainApprovalRequestTicks() {` |
| 4948 | fn | runHealthStatus | (private) | `async function runHealthStatus(scopes: string[]) {` |
| 5562 | fn | logsNoop | (private) | `const logsNoop = () => false;` |
