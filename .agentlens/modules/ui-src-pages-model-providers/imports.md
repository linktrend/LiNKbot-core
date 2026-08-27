# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    ui_src_pages_model_providers[ui-src-pages-model-providers] --> infra[infra]
    ui_src_pages_model_providers[ui-src-pages-model-providers] --> __[..]
    ui_src_pages_model_providers[ui-src-pages-model-providers] --> app[app]
    ui_src_pages_model_providers[ui-src-pages-model-providers] --> app[app]
    ui_src_pages_model_providers[ui-src-pages-model-providers] --> components[components]
    ui_src_pages_model_providers[ui-src-pages-model-providers] --> components[components]
    ui_src_pages_model_providers[ui-src-pages-model-providers] --> components[components]
    ui_src_pages_model_providers[ui-src-pages-model-providers] --> components[components]
    ui_src_pages_model_providers[ui-src-pages-model-providers] --> i18n[i18n]
    ui_src_pages_model_providers[ui-src-pages-model-providers] --> config[config]
    ui_src_pages_model_providers[ui-src-pages-model-providers] --> lib[lib]
    ui_src_pages_model_providers[ui-src-pages-model-providers] --> lib[lib]
    ui_src_pages_model_providers[ui-src-pages-model-providers] --> lib[lib]
    ui_src_pages_model_providers[ui-src-pages-model-providers] --> lib[lib]
    ui_src_pages_model_providers[ui-src-pages-model-providers] --> sessions[sessions]
    ui_src_pages_model_providers[ui-src-pages-model-providers] --> lit[lit]
    ui_src_pages_model_providers[ui-src-pages-model-providers] --> lit[lit]
    ui_src_pages_model_providers[ui-src-pages-model-providers] --> styles[styles]
    ui_src_pages_model_providers[ui-src-pages-model-providers] --> styles[styles]
    ui_src_pages_model_providers[ui-src-pages-model-providers] --> chat[chat]
    ui_src_pages_model_providers[ui-src-pages-model-providers] --> _[.]
    ui_src_pages_model_providers[ui-src-pages-model-providers] --> _[.]
    ui_src_pages_model_providers[ui-src-pages-model-providers] --> _[.]
    ui_src_pages_model_providers[ui-src-pages-model-providers] --> _[.]
    ui_src_pages_model_providers[ui-src-pages-model-providers] --> _[.]
    ui_src_pages_model_providers[ui-src-pages-model-providers] --> _lit[@lit]
    ui_src_pages_model_providers[ui-src-pages-model-providers] --> model_catalog_core[model-catalog-core]
    ui_src_pages_model_providers[ui-src-pages-model-providers] --> _openclaw[@openclaw]
    ui_src_pages_model_providers[ui-src-pages-model-providers] --> _openclaw[@openclaw]
    ui_src_pages_model_providers[ui-src-pages-model-providers] --> lit[lit]
    ui_src_pages_model_providers[ui-src-pages-model-providers] --> lit[lit]
    ui_src_pages_model_providers[ui-src-pages-model-providers] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../../src/infra/provider-usage.shared.js`
- `../../app-navigation.ts`
- `../../app/context.ts`
- `../../app/operator-access.ts`
- `../../components/provider-icon.ts`
- `../../components/provider-usage.ts`
- `../../components/settings-ui.ts`
- `../../components/settings-workspace.ts`
- `../../i18n/index.ts`
- `../../lib/config/index.ts`
- `../../lib/format.ts`
- `../../lib/gateway-errors.ts`
- `../../lib/gateway-methods.ts`
- `../../lib/model-auth.ts`
- `../../lib/sessions/index.ts`
- `../../lit/openclaw-element.ts`
- `../../lit/subscriptions-controller.ts`
- `../../styles/model-providers.css`
- `../../styles/usage.css`
- `../chat/models.ts`
- `./data.ts`
- `./default-models-view.ts`
- `./load.ts`
- `./mutations.ts`
- `./view.ts`
- `@lit/context`
- `@openclaw/model-catalog-core/provider-id`
- `@openclaw/normalization-core`
- `@openclaw/uirouter`
- `lit`
- `lit/decorators.js`
- `vitest`
