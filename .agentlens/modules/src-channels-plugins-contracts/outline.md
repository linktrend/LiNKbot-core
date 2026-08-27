# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 1 large files in this module.

## src/channels/plugins/contracts/channel-import-guardrails.test.ts (772 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 58 | fn | resolveBundledPluginSourceRoot | (private) |
| 63 | fn | bundledPluginFile | (private) |
| 71 | type | GuardedSource | (private) |
| 256 | type | SourceAnalysis | (private) |
| 275 | type | SourceFileCollectorOptions | (private) |
| 281 | fn | readSource | (private) |
| 292 | fn | normalizePath | (private) |
| 296 | fn | repoRelativePath | (private) |
| 300 | fn | listTrackedSourceFiles | (private) |
| 341 | fn | collectSourceFiles | (private) |
| 391 | fn | readSetupBarrelImportBlock | (private) |
| 409 | fn | collectExtensionSourceFiles | (private) |
| 425 | fn | isGuardedExtensionSourceFile | (private) |
| 440 | fn | collectExtensionForbiddenImportMatches | (private) |
| 474 | fn | collectCoreSourceFiles | (private) |
| 498 | fn | collectExtensionFiles | (private) |
| 514 | fn | collectModuleSpecifiers | (private) |
| 535 | fn | collectImportSpecifiers | (private) |
| 539 | fn | getSourceAnalysis | (private) |
| 558 | fn | expectOnlyApprovedExtensionSeams | (private) |
| 577 | fn | expectNoSiblingExtensionPrivateSrcImports | (private) |
| 597 | fn | expectNoCrossPluginSdkFacadeImports | (private) |
| 623 | fn | expectCoreSourceStaysOffPluginSpecificSdkFacades | (private) |
