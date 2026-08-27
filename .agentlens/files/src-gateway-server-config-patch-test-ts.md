# src/gateway/server.config-patch.test.ts

[← Back to Module](../modules/src-gateway/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1236
- **Language:** TypeScript
- **Symbols:** 16
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 33 | fn | requireWs | (private) | `function requireWs(): Awaited<ReturnType<typeof...` |
| 40 | fn | requireConfigObject | (private) | `function requireConfigObject(value: unknown, la...` |
| 64 | fn | resetTempDir | (private) | `async function resetTempDir(name: string): Prom...` |
| 71 | fn | writeJsonFile | (private) | `async function writeJsonFile(filePath: string, ...` |
| 76 | fn | getConfigHash | (private) | `async function getConfigHash() {` |
| 85 | fn | sendConfigApply | (private) | `async function sendConfigApply(params: { raw: u...` |
| 89 | fn | sendConfigSet | (private) | `async function sendConfigSet(params: { raw: str...` |
| 93 | fn | configRawPayload | (private) | `function configRawPayload(config: unknown, base...` |
| 100 | fn | configWithGatewayTokenSecretRef | (private) | `function configWithGatewayTokenSecretRef(config...` |
| 110 | fn | getCurrentConfigObject | (private) | `async function getCurrentConfigObject() {` |
| 128 | fn | restoreConfigFileForTest | (private) | `async function restoreConfigFileForTest(` |
| 134 | fn | makeRouteBinding | (private) | `function makeRouteBinding(index: number) {` |
| 147 | fn | makeAgentEntry | (private) | `function makeAgentEntry(id: string, extra: Reco...` |
| 151 | fn | expectSchemaLookupInvalid | (private) | `async function expectSchemaLookupInvalid(pathVa...` |
| 157 | fn | writeUnresolvedAuthProfileTokenRef | (private) | `async function writeUnresolvedAuthProfileTokenR...` |
| 192 | fn | ref | (private) | `const ref = (id: string) => ({ source: "file", ...` |
