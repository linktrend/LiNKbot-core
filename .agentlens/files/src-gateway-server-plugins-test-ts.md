# src/gateway/server-plugins.test.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 2120
- **Language:** TypeScript
- **Symbols:** 30
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 36 | type | HandleGatewayRequestOptions | (private) | - |
| 91 | fn | addLoadedPlugin | (private) | `function addLoadedPlugin(` |
| 115 | fn | createLookUpTableForTest | (private) | `function createLookUpTableForTest(params: {` |
| 169 | type | ServerPluginsModule | (private) | - |
| 170 | type | ServerPluginBootstrapModule | (private) | - |
| 171 | type | PluginRuntimeModule | (private) | - |
| 172 | type | PluginRuntimeRegistryModule | (private) | - |
| 173 | type | GatewayRequestScopeModule | (private) | - |
| 174 | type | MethodScopesModule | (private) | - |
| 175 | type | RuntimeStateModule | (private) | - |
| 185 | fn | createTestLog | (private) | `function createTestLog() {` |
| 194 | fn | createTestContext | (private) | `function createTestContext(label: string): Gate...` |
| 198 | fn | isRecord | (private) | `function isRecord(value: unknown): value is Rec...` |
| 202 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 209 | fn | getLastMockFirstArg | (private) | `function getLastMockFirstArg(` |
| 221 | fn | readRecordField | (private) | `function readRecordField(record: Record<string,...` |
| 229 | fn | getLastPluginLoadOptions | (private) | `function getLastPluginLoadOptions(): Record<str...` |
| 236 | fn | getLastPluginLoadOption | (private) | `function getLastPluginLoadOption(key: string) {` |
| 240 | fn | getLastDispatchedContext | (private) | `function getLastDispatchedContext(): GatewayReq...` |
| 247 | fn | getLastDispatchedParams | (private) | `function getLastDispatchedParams(): Record<stri...` |
| 254 | fn | getRequiredLastDispatchedParams | (private) | `function getRequiredLastDispatchedParams(): Rec...` |
| 258 | fn | getLastDispatchedClientScopes | (private) | `function getLastDispatchedClientScopes(): strin...` |
| 266 | fn | getLastDispatchedClientInternal | (private) | `function getLastDispatchedClientInternal(): Rec...` |
| 273 | fn | getLastPluginLoadLogger | (private) | `function getLastPluginLoadLogger(): {` |
| 295 | fn | loadTestModules | (private) | `async function loadTestModules() {` |
| 306 | fn | createSubagentRuntime | (private) | `async function createSubagentRuntime(` |
| 328 | fn | registerActivePluginToolOwnership | (private) | `function registerActivePluginToolOwnership(` |
| 347 | fn | reloadFallbackGatewayContextModule | (private) | `async function reloadFallbackGatewayContextModu...` |
| 354 | fn | loadGatewayPluginsForTest | (private) | `function loadGatewayPluginsForTest(` |
| 369 | fn | loadGatewayStartupPluginsForTest | (private) | `function loadGatewayStartupPluginsForTest(` |
