# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    ui_src_i18n_lib[ui-src-i18n-lib] --> __[..]
    ui_src_i18n_lib[ui-src-i18n-lib] --> locales[locales]
    ui_src_i18n_lib[ui-src-i18n-lib] --> _[.]
    ui_src_i18n_lib[ui-src-i18n-lib] --> _[.]
    ui_src_i18n_lib[ui-src-i18n-lib] --> _[.]
    ui_src_i18n_lib[ui-src-i18n-lib] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../local-storage.ts`
- `../locales/en.ts`
- `./lit-controller.ts`
- `./registry.ts`
- `./translate.ts`
- `vitest`
