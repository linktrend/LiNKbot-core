# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 6 large files in this module.

## src/hooks/install.test.ts (1044 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 17 | type | InstallHooksFromPath | (private) |
| 63 | fn | makeTempDir | (private) |
| 90 | fn | writeArchiveFixture | (private) |
| 107 | fn | expectInstallFailureContains | (private) |
| 120 | fn | writeHookPackManifest | (private) |
| 141 | fn | createZipBuffer | (private) |
| 149 | fn | writeHookPackFiles | (private) |
| 183 | fn | createZipHookPackBuffer | (private) |
| 215 | fn | createTarGzHookPackBuffer | (private) |
| 230 | fn | installArchiveFixture | (private) |
| 239 | fn | expectPathInstallFailureContains | (private) |

## src/hooks/install.ts (776 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | type | HookInstallLogger | (private) |
| 33 | type | HookPackageManifest | (private) |
| 39 | type | InstallHooksResult | pub |
| 61 | type | HookInstallErrorCode | (private) |
| 64 | type | HookNpmIntegrityDriftParams | pub |
| 73 | type | HookInstallForwardParams | (private) |
| 89 | type | HookPackageInstallParams | (private) |
| 90 | type | HookArchiveInstallParams | (private) |
| 91 | type | HookPathInstallParams | (private) |
| 93 | fn | buildHookInstallForwardParams | (private) |
| 110 | fn | localHookInstallPolicySource | (private) |
| 116 | fn | runHookInstallScan | (private) |
| 139 | fn | runHookInstallPolicy | (private) |
| 174 | fn | runHookInstalledDependencyPolicy | (private) |
| 203 | fn | validateHookId | (private) |
| 217 | fn | resolveHookInstallDir | pub |
| 234 | fn | resolveOpenClawHooks | (private) |
| 256 | fn | resolveHookPackageKind | (private) |
| 272 | fn | resolveHookInstallTargetPath | (private) |
| 285 | fn | resolveInstallTargetDir | (private) |
| 299 | type | PreparedHookInstallTarget | (private) |
| 304 | fn | resolvePreparedHookInstallTarget | (private) |
| 331 | fn | installFromResolvedHookDir | (private) |
| 360 | fn | resolveHookNameFromDir | (private) |
| 371 | fn | validateHookDir | (private) |
| 390 | fn | installHookPackageFromDir | (private) |
| 548 | fn | installHookFromDir | (private) |
| 659 | fn | installHooksFromArchive | (private) |
| 695 | fn | installHooksFromNpmSpec | pub |
| 744 | fn | installHooksFromPath | pub |

## src/hooks/internal-hooks.test.ts (513 lines)

_No symbols extracted._

## src/hooks/loader.test.ts (604 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 51 | fn | writeDiscoveredHook | (private) |
| 83 | fn | writeHandlerModule | (private) |
| 92 | fn | withLegacyInternalHookHandlers | (private) |
| 111 | fn | createEnabledHooksConfig | (private) |
| 174 | fn | createLegacyHandlerConfig | (private) |
| 182 | fn | expectNoCommandHookRegistration | (private) |

## src/hooks/message-hook-mappers.test.ts (598 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 23 | type | ResolveInboundConversationParams | (private) |
| 27 | fn | makeInboundCtx | (private) |

## src/hooks/message-hook-mappers.ts (610 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 28 | type | CanonicalInboundMessageHookContext | (private) |
| 83 | type | CanonicalSentMessageHookContext | (private) |
| 100 | fn | readNonBlankString | (private) |
| 104 | fn | assignRemoteMediaStagingMetadata | (private) |
| 125 | fn | deriveInboundMessageHookContext | pub |
| 213 | fn | buildCanonicalSentMessageHookContext | pub |
| 247 | type | DiagnosticTraceHookFields | (private) |
| 252 | fn | assignTraceFields | (private) |
| 270 | fn | toPluginMessageContext | pub |
| 312 | fn | resolveInboundConversation | (private) |
| 344 | fn | toPluginInboundClaimContext | pub |
| 379 | fn | toPluginInboundClaimEvent | pub |
| 444 | fn | toPluginMessageReceivedEvent | pub |
| 496 | fn | toPluginMessageSentEvent | pub |
| 512 | fn | toInternalMessageReceivedContext | pub |
| 549 | fn | toInternalMessageTranscribedContext | pub |
| 561 | fn | toInternalMessagePreprocessedContext | pub |
| 575 | fn | toInternalInboundMessageHookContextBase | (private) |
| 595 | fn | toInternalMessageSentContext | pub |
