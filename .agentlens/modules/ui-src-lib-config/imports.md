# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    ui_src_lib_config[ui-src-lib-config] --> components[components]
    ui_src_lib_config[ui-src-lib-config] --> i18n[i18n]
    ui_src_lib_config[ui-src-lib-config] --> __[..]
    ui_src_lib_config[ui-src-lib-config] --> __[..]
    ui_src_lib_config[ui-src-lib-config] --> __[..]
    ui_src_lib_config[ui-src-lib-config] --> _[.]
    ui_src_lib_config[ui-src-lib-config] --> _[.]
    ui_src_lib_config[ui-src-lib-config] --> net_policy[net-policy]
    ui_src_lib_config[ui-src-lib-config] --> normalization_core[normalization-core]
    ui_src_lib_config[ui-src-lib-config] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../components/config-form.shared.ts`
- `../../i18n/index.ts`
- `../clipboard.ts`
- `../config-form-utils.ts`
- `../json5-runtime.ts`
- `./applied-refresh.ts`
- `./index.ts`
- `@openclaw/net-policy/redact-sensitive-url`
- `@openclaw/normalization-core/record-coerce`
- `vitest`
