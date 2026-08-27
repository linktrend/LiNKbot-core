# Outline

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

Symbol maps for 2 large files in this module.

## src/infra/command-explainer/extract.test.ts (604 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 7 | fn | riskMatches | (private) |
| 15 | fn | expectRisk | (private) |
| 28 | fn | spanText | (private) |

## src/infra/command-explainer/extract.ts (1222 lines)

| Line | Kind | Name | Visibility |
| ---- | ---- | ---- | ---------- |
| 33 | type | MutableExplanation | (private) |
| 42 | type | DynamicArgument | (private) |
| 49 | type | CommandArgument | (private) |
| 57 | type | CommandArgv | (private) |
| 63 | type | WalkState | (private) |
| 74 | type | SpanBase | (private) |
| 80 | type | CommandTopologyBucket | (private) |
| 86 | type | OperatorSource | (private) |
| 93 | fn | hasDirectChildType | (private) |
| 97 | fn | translateSpan | (private) |
| 111 | fn | spanFromNode | (private) |
| 116 | fn | advancePosition | (private) |
| 142 | fn | positionAtSourceIndex | (private) |
| 146 | fn | spanFromSourceRange | (private) |
| 155 | fn | valuePrefixLength | (private) |
| 165 | type | DecodedShellText | (private) |
| 170 | fn | appendDecodedText | (private) |
| 179 | fn | identityDecodedShellText | (private) |
| 186 | fn | decodedSourceOffsetsForNode | (private) |
| 209 | fn | argumentFromNode | (private) |
| 226 | type | ShellWordValue | (private) |
| 250 | fn | hasEscapedLineContinuation | (private) |
| 254 | fn | hasExecutableLineContinuation | (private) |
| 258 | fn | hasUnescapedDynamicPattern | (private) |
| 278 | fn | decodeUnquotedShellTextWithOffsets | (private) |
| 303 | fn | decodeUnquotedShellText | (private) |
| 307 | fn | decodeDoubleQuotedTextWithOffsets | (private) |
| 337 | fn | decodeDoubleQuotedText | (private) |
| 357 | fn | decodeAnsiCStringWithOffsets | (private) |
| 435 | fn | decodeAnsiCString | (private) |
| 439 | fn | hasDynamicWordPart | (private) |
| 443 | fn | shellWordValue | (private) |
| 508 | fn | argvFromCommand | (private) |
| 544 | fn | firstShellToken | (private) |
| 548 | fn | argvFromDeclarationCommand | (private) |
| 576 | fn | appendTestCommandArguments | (private) |
| 603 | fn | argvFromTestCommand | (private) |
| 618 | fn | isCommandLikeNode | (private) |
| 624 | fn | recordShape | (private) |
| 665 | fn | shellCommandFlag | (private) |
| 710 | fn | canParseShellWrapperPayload | (private) |
| 719 | fn | isDynamicPayload | (private) |
| 723 | fn | payloadBaseFromArgument | (private) |
| 747 | fn | payloadBaseFromArguments | (private) |
| 764 | fn | shellWrapperPayloadForParsing | (private) |
| 786 | fn | recordInlineEvalRisk | (private) |
| 801 | fn | recordDynamicArgumentRisks | (private) |
| 817 | fn | recordCommandRisks | (private) |
| 903 | fn | walk | (private) |
| 1023 | fn | commandBucketKey | (private) |
| 1027 | fn | commandTopologyBuckets | (private) |
| 1063 | type | CommandSourceRange | (private) |
| 1068 | fn | operatorSourceForBucket | (private) |
| 1080 | fn | commandSourceRanges | (private) |
| 1101 | fn | topologyOperatorFromSeparator | (private) |
| 1128 | fn | resolveOperators | (private) |
| 1192 | fn | explainShellCommand | pub |
