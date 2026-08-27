# src/gateway/tools-invoke-http.test.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1316
- **Language:** TypeScript
- **Symbols:** 19
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 13 | type | RunBeforeToolCallHook | (private) | - |
| 14 | type | RunBeforeToolCallHookArgs | (private) | - |
| 15 | type | RunBeforeToolCallHookResult | (private) | - |
| 96 | fn | toolInputError | (private) | `const toolInputError = (message: string) => {` |
| 101 | fn | toolAuthorizationError | (private) | `const toolAuthorizationError = (message: string...` |
| 312 | fn | gatewayAuthHeaders | (private) | `const gatewayAuthHeaders = () => ({ "x-openclaw...` |
| 313 | fn | gatewayAdminHeaders | (private) | `const gatewayAdminHeaders = () => ({ "x-opencla...` |
| 315 | fn | allowAgentsListForMain | (private) | `const allowAgentsListForMain = () => {` |
| 332 | fn | postToolsInvoke | (private) | `const postToolsInvoke = async (params: {` |
| 343 | fn | withOptionalSessionKey | (private) | `const withOptionalSessionKey = (body: Record<st...` |
| 348 | fn | invokeAgentsList | (private) | `const invokeAgentsList = async (params: {` |
| 360 | fn | invokeTool | (private) | `const invokeTool = async (params: {` |
| 381 | fn | invokeAgentsListAuthed | (private) | `const invokeAgentsListAuthed = async (params: {...` |
| 388 | fn | invokeAgentsListBearer | (private) | `const invokeAgentsListBearer = async () =>` |
| 403 | fn | invokeToolAuthed | (private) | `const invokeToolAuthed = async (params: {` |
| 415 | fn | expectOkInvokeResponse | (private) | `const expectOkInvokeResponse = async (res: Resp...` |
| 422 | fn | firstHookCallArg | (private) | `const firstHookCallArg = () => {` |
| 430 | fn | invokeToolsRpc | (private) | `const invokeToolsRpc = async (` |
| 460 | fn | setMainAllowedTools | (private) | `const setMainAllowedTools = (params: {` |
