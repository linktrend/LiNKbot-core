# ui/src/components/config-form.node.ts

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1180
- **Language:** TypeScript
- **Symbols:** 25
- **Public symbols:** 1

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 33 | fn | isAnySchema | (private) | `function isAnySchema(schema: JsonSchema): boole...` |
| 38 | fn | jsonValue | (private) | `function jsonValue(value: unknown): string {` |
| 49 | fn | formatComparablePrimitive | (private) | `function formatComparablePrimitive(value: unkno...` |
| 61 | fn | matchesComparablePrimitiveValue | (private) | `function matchesComparablePrimitiveValue(left: ...` |
| 70 | fn | isSecretRefObject | (private) | `function isSecretRefObject(value: unknown): val...` |
| 85 | type | SensitiveRenderParams | (private) | - |
| 93 | type | SensitiveRenderState | (private) | - |
| 100 | fn | getSensitiveRenderState | (private) | `function getSensitiveRenderState(params: Sensit...` |
| 113 | fn | renderSensitiveToggleButton | (private) | `function renderSensitiveToggleButton(params: {` |
| 146 | fn | wrapSensitiveControl | (private) | `function wrapSensitiveControl(` |
| 156 | fn | renderTags | (private) | `function renderTags(tags: string[]): TemplateRe...` |
| 165 | type | FieldRowParams | (private) | - |
| 176 | fn | renderFieldRow | (private) | `function renderFieldRow(params: FieldRowParams)...` |
| 207 | fn | renderSegmentedControl | (private) | `function renderSegmentedControl(params: {` |
| 234 | fn | renderNode | pub | `export function renderNode(params: {` |
| 402 | fn | onChange | (private) | `const onChange = (checked: boolean) => onPatch(...` |
| 450 | fn | renderTextInput | (private) | `function renderTextInput(params: {` |
| 567 | fn | renderNumberInput | (private) | `function renderNumberInput(params: {` |
| 584 | fn | step | (private) | `const step = (delta: number) => {` |
| 628 | fn | renderSelect | (private) | `function renderSelect(params: {` |
| 671 | fn | renderJsonTextareaControl | (private) | `function renderJsonTextareaControl(params: {` |
| 723 | fn | renderJsonTextarea | (private) | `function renderJsonTextarea(params: {` |
| 765 | fn | renderObject | (private) | `function renderObject(params: {` |
| 882 | fn | renderArray | (private) | `function renderArray(params: {` |
| 1011 | fn | renderMapField | (private) | `function renderMapField(params: {` |

## Public API

### `renderNode`

```
export function renderNode(params: {
```

**Line:** 234 | **Kind:** fn
