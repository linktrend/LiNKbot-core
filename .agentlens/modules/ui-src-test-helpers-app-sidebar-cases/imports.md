# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    ui_src_test_helpers_app_sidebar_cases[ui-src-test-helpers-app-sidebar-cases] --> api[api]
    ui_src_test_helpers_app_sidebar_cases[ui-src-test-helpers-app-sidebar-cases] --> components[components]
    ui_src_test_helpers_app_sidebar_cases[ui-src-test-helpers-app-sidebar-cases] --> components[components]
    ui_src_test_helpers_app_sidebar_cases[ui-src-test-helpers-app-sidebar-cases] --> components[components]
    ui_src_test_helpers_app_sidebar_cases[ui-src-test-helpers-app-sidebar-cases] --> components[components]
    ui_src_test_helpers_app_sidebar_cases[ui-src-test-helpers-app-sidebar-cases] --> sessions[sessions]
    ui_src_test_helpers_app_sidebar_cases[ui-src-test-helpers-app-sidebar-cases] --> __[..]
    ui_src_test_helpers_app_sidebar_cases[ui-src-test-helpers-app-sidebar-cases] --> __[..]
    ui_src_test_helpers_app_sidebar_cases[ui-src-test-helpers-app-sidebar-cases] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../api/gateway.ts`
- `../../components/app-sidebar-session-catalog-live.ts`
- `../../components/app-sidebar.ts`
- `../../components/lobster-pet.ts`
- `../../components/panel-toggle-contract.ts`
- `../../lib/sessions/catalog-key.ts`
- `../app-sidebar.ts`
- `../wait-for.ts`
- `vitest`
