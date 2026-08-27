# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    ui_src_lit[ui-src-lit] --> i18n[i18n]
    ui_src_lit[ui-src-lit] --> lib[lib]
    ui_src_lit[ui-src-lit] --> _[.]
    ui_src_lit[ui-src-lit] --> _[.]
    ui_src_lit[ui-src-lit] --> _[.]
    ui_src_lit[ui-src-lit] --> vitest[vitest]
```

## Internal Dependencies

Dependencies within this module:

- `lit`

## External Dependencies

Dependencies from other modules:

- `../i18n/index.ts`
- `../i18n/lib/lit-controller.ts`
- `./openclaw-element.ts`
- `./poll-controller.ts`
- `./subscriptions-controller.ts`
- `vitest`
