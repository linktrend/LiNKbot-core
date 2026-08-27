# src/agents/harness/native-hook-relay.test.ts

[← Back to Module](../modules/src-agents-harness/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 3568
- **Language:** TypeScript
- **Symbols:** 18
- **Public symbols:** 0

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 43 | fn | isRecord | (private) | `function isRecord(value: unknown): value is Rec...` |
| 47 | fn | requireRecord | (private) | `function requireRecord(value: unknown, label: s...` |
| 56 | fn | readRecordField | (private) | `function readRecordField(record: Record<string,...` |
| 64 | fn | expectRecordFields | (private) | `function expectRecordFields(record: Record<stri...` |
| 70 | fn | getMockCallArg | (private) | `function getMockCallArg(` |
| 79 | fn | getOnlyNativeHookRelayInvocation | (private) | `function getOnlyNativeHookRelayInvocation() {` |
| 85 | fn | waitForNativeHookRelayBridgeRecord | (private) | `async function waitForNativeHookRelayBridgeRecord(` |
| 99 | fn | writeForeignNativeHookRelayBridgeRecordForTests | (private) | `async function writeForeignNativeHookRelayBridg...` |
| 119 | fn | uniqueNativeHookRelayIdForTests | (private) | `function uniqueNativeHookRelayIdForTests(prefix...` |
| 123 | fn | nativeHookRelayStateDbArgForTests | (private) | `function nativeHookRelayStateDbArgForTests(): s...` |
| 127 | fn | openDeferredNativeHookRelayBridgeRequest | (private) | `function openDeferredNativeHookRelayBridgeRequest(` |
| 195 | type | NativeHookRelaySharedStateForTests | (private) | - |
| 204 | fn | getNativeHookRelaySharedStateForTests | (private) | `function getNativeHookRelaySharedStateForTests(...` |
| 218 | type | NativeHookRelayModuleForTests | (private) | - |
| 220 | fn | importDuplicateNativeHookRelayModuleForTests | (private) | `async function importDuplicateNativeHookRelayMo...` |
| 1866 | fn | invoke | (private) | `const invoke = () =>` |
| 3490 | fn | formatPreview | (private) | `const formatPreview = (csi: string) =>` |
| 3502 | fn | formatKeyPreview | (private) | `const formatKeyPreview = (csi: string) =>` |
