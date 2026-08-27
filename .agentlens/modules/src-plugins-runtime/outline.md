# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 5 large files in this module.

## src/plugins/runtime/index.test.ts (528 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 31 | fn | createCommandResult | (private) |
| 44 | fn | createGatewaySubagentRuntime | (private) |
| 53 | fn | expectRuntimeShape | (private) |
| 60 | fn | expectGatewaySubagentRunFailure | (private) |
| 69 | fn | expectRuntimeValue | (private) |
| 76 | fn | expectRuntimeSubagentRun | (private) |
| 83 | fn | createGatewaySubagentRunFixture | (private) |
| 97 | fn | expectFunctionKeys | (private) |
| 103 | fn | expectRunCommandOutcome | (private) |

## src/plugins/runtime/runtime-agent.test.ts (973 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 15 | fn | createDeferred | (private) |
| 16 | fn | resolve | (private) |
| 25 | type | CreateSessionParams | (private) |

## src/plugins/runtime/runtime-agent.ts (514 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 45 | type | RuntimeSessionStoreReadParams | (private) |
| 54 | type | RuntimeSessionStoreListParams | (private) |
| 56 | type | RuntimeSessionStoreEntrySummary | (private) |
| 61 | type | RuntimeSessionStoreEntryUpdateParams | (private) |
| 72 | type | RuntimeSessionStoreEntryPatchParams | (private) |
| 83 | type | RuntimeUpsertSessionEntryParams | (private) |
| 91 | fn | toSessionAccessScope | (private) |
| 106 | fn | getSessionEntry | (private) |
| 110 | fn | listSessionEntries | (private) |
| 123 | fn | patchSessionEntry | (private) |
| 137 | fn | updateSessionStoreEntry | (private) |
| 156 | fn | upsertSessionEntry | (private) |
| 162 | fn | createSessionEntry | (private) |
| 171 | type | CreatedContext | (private) |
| 406 | fn | runWithSessionWorkAdmission | (private) |
| 454 | fn | createRuntimeAgent | pub |

## src/plugins/runtime/runtime-llm.runtime.test.ts (792 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 29 | fn | createPreparedModel | (private) |
| 55 | fn | createLogger | (private) |
| 64 | type | MockCalls | (private) |
| 68 | fn | requireRecord | (private) |
| 75 | fn | requireArray | (private) |
| 80 | fn | expectFields | (private) |
| 86 | fn | expectSingleCallFirstArg | (private) |
| 98 | fn | expectSingleLogPayload | (private) |
| 111 | fn | primeCompletionMocks | (private) |

## src/plugins/runtime/runtime-registry-loader.test.ts (553 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | fn | requireRecord | (private) |
| 43 | fn | loadOptions | (private) |
| 47 | fn | configuredChannelOptions | (private) |
| 54 | fn | scopedChannelOptions | (private) |
| 61 | fn | pluginsConfig | (private) |
| 65 | fn | pluginEntries | (private) |
