# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## extensions/oc-path/src/cli.test.ts (607 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 16 | type | PathCommandOptions | (private) |
| 26 | interface | TestRuntime | (private) |
| 35 | fn | createTestRuntime | (private) |
| 58 | fn | optionArgs | (private) |
| 84 | fn | invokePathCli | (private) |
| 117 | fn | pathResolveCommand | (private) |
| 128 | fn | pathSetCommand | (private) |
| 145 | fn | pathFindCommand | (private) |
| 156 | fn | pathValidateCommand | (private) |
| 167 | fn | pathEmitCommand | (private) |

## extensions/oc-path/src/cli.ts (619 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 35 | type | OutputRuntimeEnv | (private) |
| 41 | interface | PathCommandOptions | (private) |
| 51 | type | OutputMode | (private) |
| 69 | fn | scrubSentinel | (private) |
| 76 | fn | detectMode | (private) |
| 86 | fn | emit | (private) |
| 99 | fn | emitError | (private) |
| 114 | fn | requireArg | (private) |
| 129 | fn | tryParse | (private) |
| 145 | fn | catchSentinel | (private) |
| 163 | fn | loadAst | (private) |
| 192 | fn | emitForKind | (private) |
| 208 | fn | resolveFsPath | (private) |
| 215 | fn | formatMatchHuman | (private) |
| 228 | fn | splitDiffLines | (private) |
| 232 | fn | formatUnifiedDiff | (private) |
| 287 | fn | pathResolveCommand | (private) |
| 324 | fn | pathSetCommand | (private) |
| 405 | fn | pathFindCommand | (private) |
| 460 | fn | pathValidateCommand | (private) |
| 518 | fn | pathEmitCommand | (private) |
| 549 | fn | withCommonOpts | (private) |
| 557 | fn | registerPathCli | pub |
