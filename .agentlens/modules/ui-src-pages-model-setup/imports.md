# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    ui_src_pages_model_setup[ui-src-pages-model-setup] --> __[..]
    ui_src_pages_model_setup[ui-src-pages-model-setup] --> __[..]
    ui_src_pages_model_setup[ui-src-pages-model-setup] --> app[app]
    ui_src_pages_model_setup[ui-src-pages-model-setup] --> app[app]
    ui_src_pages_model_setup[ui-src-pages-model-setup] --> components[components]
    ui_src_pages_model_setup[ui-src-pages-model-setup] --> components[components]
    ui_src_pages_model_setup[ui-src-pages-model-setup] --> i18n[i18n]
    ui_src_pages_model_setup[ui-src-pages-model-setup] --> lib[lib]
    ui_src_pages_model_setup[ui-src-pages-model-setup] --> lib[lib]
    ui_src_pages_model_setup[ui-src-pages-model-setup] --> sessions[sessions]
    ui_src_pages_model_setup[ui-src-pages-model-setup] --> lit[lit]
    ui_src_pages_model_setup[ui-src-pages-model-setup] --> lit[lit]
    ui_src_pages_model_setup[ui-src-pages-model-setup] --> styles[styles]
    ui_src_pages_model_setup[ui-src-pages-model-setup] --> test_helpers[test-helpers]
    ui_src_pages_model_setup[ui-src-pages-model-setup] --> plugins[plugins]
    ui_src_pages_model_setup[ui-src-pages-model-setup] --> _[.]
    ui_src_pages_model_setup[ui-src-pages-model-setup] --> _[.]
    ui_src_pages_model_setup[ui-src-pages-model-setup] --> _[.]
    ui_src_pages_model_setup[ui-src-pages-model-setup] --> _[.]
    ui_src_pages_model_setup[ui-src-pages-model-setup] --> _[.]
    ui_src_pages_model_setup[ui-src-pages-model-setup] --> _[.]
    ui_src_pages_model_setup[ui-src-pages-model-setup] --> _[.]
    ui_src_pages_model_setup[ui-src-pages-model-setup] --> _[.]
    ui_src_pages_model_setup[ui-src-pages-model-setup] --> _[.]
    ui_src_pages_model_setup[ui-src-pages-model-setup] --> _lit[@lit]
    ui_src_pages_model_setup[ui-src-pages-model-setup] --> _openclaw[@openclaw]
    ui_src_pages_model_setup[ui-src-pages-model-setup] --> lit[lit]
    ui_src_pages_model_setup[ui-src-pages-model-setup] --> lit[lit]
    ui_src_pages_model_setup[ui-src-pages-model-setup] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../app-navigation.ts`
- `../../app-routes.ts`
- `../../app/context.ts`
- `../../app/operator-access.ts`
- `../../components/modal-dialog.ts`
- `../../components/settings-workspace.ts`
- `../../i18n/index.ts`
- `../../lib/clipboard.ts`
- `../../lib/gateway-methods.ts`
- `../../lib/sessions/session-key.ts`
- `../../lit/openclaw-element.ts`
- `../../lit/subscriptions-controller.ts`
- `../../styles/model-setup.css`
- `../../test-helpers/application-context.ts`
- `../plugins/icon-loader.ts`
- `./detect-cache.ts`
- `./first-run.ts`
- `./model-setup-page.ts`
- `./route.ts`
- `./rpc.ts`
- `./state.ts`
- `./view.ts`
- `./wizard-runner.ts`
- `./wizard-view.ts`
- `@lit/context`
- `@openclaw/uirouter`
- `lit`
- `lit/decorators.js`
- `vitest`
