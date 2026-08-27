# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    ui_src_lib_workboard[ui-src-lib-workboard] --> api[api]
    ui_src_lib_workboard[ui-src-lib-workboard] --> test_helpers[test-helpers]
    ui_src_lib_workboard[ui-src-lib-workboard] --> sessions[sessions]
    ui_src_lib_workboard[ui-src-lib-workboard] --> _[.]
    ui_src_lib_workboard[ui-src-lib-workboard] --> _[.]
    ui_src_lib_workboard[ui-src-lib-workboard] --> _[.]
    ui_src_lib_workboard[ui-src-lib-workboard] --> _[.]
    ui_src_lib_workboard[ui-src-lib-workboard] --> _[.]
    ui_src_lib_workboard[ui-src-lib-workboard] --> _[.]
    ui_src_lib_workboard[ui-src-lib-workboard] --> _[.]
    ui_src_lib_workboard[ui-src-lib-workboard] --> _[.]
    ui_src_lib_workboard[ui-src-lib-workboard] --> _[.]
    ui_src_lib_workboard[ui-src-lib-workboard] --> _[.]
    ui_src_lib_workboard[ui-src-lib-workboard] --> _[.]
    ui_src_lib_workboard[ui-src-lib-workboard] --> _[.]
    ui_src_lib_workboard[ui-src-lib-workboard] --> _[.]
    ui_src_lib_workboard[ui-src-lib-workboard] --> _openclaw[@openclaw]
    ui_src_lib_workboard[ui-src-lib-workboard] --> normalization_core[normalization-core]
    ui_src_lib_workboard[ui-src-lib-workboard] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../api/gateway.ts`
- `../../test-helpers/wait-for.ts`
- `../sessions/index.ts`
- `./card-state.ts`
- `./change-payload.ts`
- `./index.ts`
- `./lifecycle.ts`
- `./live-refresh.ts`
- `./loading.ts`
- `./metadata-contract-normalization.ts`
- `./metadata-normalization.ts`
- `./normalization-utils.ts`
- `./normalization.ts`
- `./runtime.ts`
- `./task-links.ts`
- `./types.ts`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/utf16-slice`
- `vitest`
