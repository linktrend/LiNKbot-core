# src/infra/command-explainer/extract.ts

[← Back to Module](../modules/src-infra-command-explainer/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1222
- **Language:** TypeScript
- **Symbols:** 57
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 33 | type | MutableExplanation | (private) | - |
| 42 | type | DynamicArgument | (private) | - |
| 49 | type | CommandArgument | (private) | - |
| 57 | type | CommandArgv | (private) | - |
| 63 | type | WalkState | (private) | - |
| 74 | type | SpanBase | (private) | - |
| 80 | type | CommandTopologyBucket | (private) | - |
| 86 | type | OperatorSource | (private) | - |
| 93 | fn | hasDirectChildType | (private) | `function hasDirectChildType(node: TreeSitterNod...` |
| 97 | fn | translateSpan | (private) | `function translateSpan(span: SourceSpan, base: ...` |
| 111 | fn | spanFromNode | (private) | `function spanFromNode(node: TreeSitterNode, bas...` |
| 116 | fn | advancePosition | (private) | `function advancePosition(` |
| 142 | fn | positionAtSourceIndex | (private) | `function positionAtSourceIndex(source: string, ...` |
| 146 | fn | spanFromSourceRange | (private) | `function spanFromSourceRange(source: string, st...` |
| 155 | fn | valuePrefixLength | (private) | `function valuePrefixLength(node: TreeSitterNode...` |
| 165 | type | DecodedShellText | (private) | - |
| 170 | fn | appendDecodedText | (private) | `function appendDecodedText(` |
| 179 | fn | identityDecodedShellText | (private) | `function identityDecodedShellText(text: string,...` |
| 186 | fn | decodedSourceOffsetsForNode | (private) | `function decodedSourceOffsetsForNode(node: Tree...` |
| 209 | fn | argumentFromNode | (private) | `function argumentFromNode(` |
| 226 | type | ShellWordValue | (private) | - |
| 250 | fn | hasEscapedLineContinuation | (private) | `function hasEscapedLineContinuation(text: strin...` |
| 254 | fn | hasExecutableLineContinuation | (private) | `function hasExecutableLineContinuation(text: st...` |
| 258 | fn | hasUnescapedDynamicPattern | (private) | `function hasUnescapedDynamicPattern(text: strin...` |
| 278 | fn | decodeUnquotedShellTextWithOffsets | (private) | `function decodeUnquotedShellTextWithOffsets(tex...` |
| 303 | fn | decodeUnquotedShellText | (private) | `function decodeUnquotedShellText(text: string):...` |
| 307 | fn | decodeDoubleQuotedTextWithOffsets | (private) | `function decodeDoubleQuotedTextWithOffsets(text...` |
| 337 | fn | decodeDoubleQuotedText | (private) | `function decodeDoubleQuotedText(text: string): ...` |
| 357 | fn | decodeAnsiCStringWithOffsets | (private) | `function decodeAnsiCStringWithOffsets(text: str...` |
| 435 | fn | decodeAnsiCString | (private) | `function decodeAnsiCString(text: string): string {` |
| 439 | fn | hasDynamicWordPart | (private) | `function hasDynamicWordPart(node: TreeSitterNod...` |
| 443 | fn | shellWordValue | (private) | `function shellWordValue(node: TreeSitterNode): ...` |
| 508 | fn | argvFromCommand | (private) | `function argvFromCommand(` |
| 544 | fn | firstShellToken | (private) | `function firstShellToken(text: string): string {` |
| 548 | fn | argvFromDeclarationCommand | (private) | `function argvFromDeclarationCommand(node: TreeS...` |
| 576 | fn | appendTestCommandArguments | (private) | `function appendTestCommandArguments(` |
| 603 | fn | argvFromTestCommand | (private) | `function argvFromTestCommand(node: TreeSitterNo...` |
| 618 | fn | isCommandLikeNode | (private) | `function isCommandLikeNode(node: TreeSitterNode...` |
| 624 | fn | recordShape | (private) | `function recordShape(node: TreeSitterNode, outp...` |
| 665 | fn | shellCommandFlag | (private) | `function shellCommandFlag(` |
| 710 | fn | canParseShellWrapperPayload | (private) | `function canParseShellWrapperPayload(transportA...` |
| 719 | fn | isDynamicPayload | (private) | `function isDynamicPayload(payload: string, dyna...` |
| 723 | fn | payloadBaseFromArgument | (private) | `function payloadBaseFromArgument(argument: Comm...` |
| 747 | fn | payloadBaseFromArguments | (private) | `function payloadBaseFromArguments(` |
| 764 | fn | shellWrapperPayloadForParsing | (private) | `function shellWrapperPayloadForParsing(` |
| 786 | fn | recordInlineEvalRisk | (private) | `function recordInlineEvalRisk(` |
| 801 | fn | recordDynamicArgumentRisks | (private) | `function recordDynamicArgumentRisks(` |
| 817 | fn | recordCommandRisks | (private) | `function recordCommandRisks(` |
| 903 | fn | walk | (private) | `async function walk(` |
| 1023 | fn | commandBucketKey | (private) | `function commandBucketKey(command: CommandStep)...` |
| 1027 | fn | commandTopologyBuckets | (private) | `function commandTopologyBuckets(commands: Comma...` |
| 1063 | type | CommandSourceRange | (private) | - |
| 1068 | fn | operatorSourceForBucket | (private) | `function operatorSourceForBucket(` |
| 1080 | fn | commandSourceRanges | (private) | `function commandSourceRanges(` |
| 1101 | fn | topologyOperatorFromSeparator | (private) | `function topologyOperatorFromSeparator(` |
| 1128 | fn | resolveOperators | (private) | `function resolveOperators(` |
| 1192 | fn | explainShellCommand | pub | `export async function explainShellCommand(sourc...` |

## Public API

### `explainShellCommand`

```
export async function explainShellCommand(source: string): Promise<CommandExplanation> {
```

**Line:** 1192 | **Kind:** fn
