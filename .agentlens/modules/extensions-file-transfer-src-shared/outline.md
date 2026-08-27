# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 3 large files in this module.

## extensions/file-transfer/src/shared/node-invoke-policy.test.ts (924 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 36 | fn | tarEntries | (private) |
| 50 | fn | archiveMetadata | (private) |
| 58 | fn | writeTarString | (private) |
| 62 | fn | writeTarOctal | (private) |
| 67 | fn | createTarFileHeader | (private) |
| 86 | fn | createCtx | (private) |
| 131 | fn | requireRecord | (private) |
| 138 | fn | expectRecordFields | (private) |
| 144 | fn | expectResultFields | (private) |
| 148 | fn | requireInvokeParams | (private) |

## extensions/file-transfer/src/shared/node-invoke-policy.ts (967 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 30 | type | FileTransferCommand | (private) |
| 32 | fn | asRecord | (private) |
| 38 | fn | readPath | (private) |
| 42 | fn | readMaxBytes | (private) |
| 57 | fn | commandKind | (private) |
| 61 | fn | validateFetchMaxBytesParam | (private) |
| 70 | fn | promptVerb | (private) |
| 84 | fn | requestApproval | (private) |
| 251 | fn | prepareParams | (private) |
| 280 | fn | readResultPayload | (private) |
| 286 | fn | readAuditSizeBytes | (private) |
| 300 | fn | joinRemotePolicyPath | (private) |
| 311 | fn | validateDirFetchPreflightEntry | (private) |
| 330 | fn | normalizeTarEntryPath | (private) |
| 335 | fn | listDirFetchArchiveEntries | (private) |
| 451 | fn | validateDirFetchEntries | (private) |
| 589 | fn | policyDeniedResult | (private) |
| 603 | type | PreflightResult | (private) |
| 614 | fn | invokePreflight | (private) |
| 674 | fn | runPathPreflight | (private) |
| 722 | fn | runDirFetchPreflight | (private) |
| 745 | fn | handleFileTransferInvoke | (private) |
| 960 | fn | createFileTransferNodeInvokePolicy | pub |

## extensions/file-transfer/src/shared/policy.test.ts (611 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 39 | fn | withConfig | (private) |
| 55 | fn | expectResultFields | (private) |
