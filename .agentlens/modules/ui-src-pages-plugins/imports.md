# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    ui_src_pages_plugins[ui-src-pages-plugins] --> src[src]
    ui_src_pages_plugins[ui-src-pages-plugins] --> gateway[gateway]
    ui_src_pages_plugins[ui-src-pages-plugins] --> __[..]
    ui_src_pages_plugins[ui-src-pages-plugins] --> __[..]
    ui_src_pages_plugins[ui-src-pages-plugins] --> app[app]
    ui_src_pages_plugins[ui-src-pages-plugins] --> app[app]
    ui_src_pages_plugins[ui-src-pages-plugins] --> app[app]
    ui_src_pages_plugins[ui-src-pages-plugins] --> app[app]
    ui_src_pages_plugins[ui-src-pages-plugins] --> components[components]
    ui_src_pages_plugins[ui-src-pages-plugins] --> components[components]
    ui_src_pages_plugins[ui-src-pages-plugins] --> components[components]
    ui_src_pages_plugins[ui-src-pages-plugins] --> components[components]
    ui_src_pages_plugins[ui-src-pages-plugins] --> components[components]
    ui_src_pages_plugins[ui-src-pages-plugins] --> components[components]
    ui_src_pages_plugins[ui-src-pages-plugins] --> components[components]
    ui_src_pages_plugins[ui-src-pages-plugins] --> i18n[i18n]
    ui_src_pages_plugins[ui-src-pages-plugins] --> config[config]
    ui_src_pages_plugins[ui-src-pages-plugins] --> config[config]
    ui_src_pages_plugins[ui-src-pages-plugins] --> lib[lib]
    ui_src_pages_plugins[ui-src-pages-plugins] --> plugins[plugins]
    ui_src_pages_plugins[ui-src-pages-plugins] --> lit[lit]
    ui_src_pages_plugins[ui-src-pages-plugins] --> lit[lit]
    ui_src_pages_plugins[ui-src-pages-plugins] --> styles[styles]
    ui_src_pages_plugins[ui-src-pages-plugins] --> test_helpers[test-helpers]
    ui_src_pages_plugins[ui-src-pages-plugins] --> test_helpers[test-helpers]
    ui_src_pages_plugins[ui-src-pages-plugins] --> test_helpers[test-helpers]
    ui_src_pages_plugins[ui-src-pages-plugins] --> _[.]
    ui_src_pages_plugins[ui-src-pages-plugins] --> _[.]
    ui_src_pages_plugins[ui-src-pages-plugins] --> _[.]
    ui_src_pages_plugins[ui-src-pages-plugins] --> _[.]
    ui_src_pages_plugins[ui-src-pages-plugins] --> _lit[@lit]
    ui_src_pages_plugins[ui-src-pages-plugins] --> _openclaw[@openclaw]
    ui_src_pages_plugins[ui-src-pages-plugins] --> _openclaw[@openclaw]
    ui_src_pages_plugins[ui-src-pages-plugins] --> lit[lit]
    ui_src_pages_plugins[ui-src-pages-plugins] --> lit[lit]
    ui_src_pages_plugins[ui-src-pages-plugins] --> directives[directives]
    ui_src_pages_plugins[ui-src-pages-plugins] --> directives[directives]
    ui_src_pages_plugins[ui-src-pages-plugins] --> node_fs[node:fs]
    ui_src_pages_plugins[ui-src-pages-plugins] --> node_path[node:path]
    ui_src_pages_plugins[ui-src-pages-plugins] --> playwright[playwright]
    ui_src_pages_plugins[ui-src-pages-plugins] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../../packages/gateway-protocol/src/version.js`
- `../../../../src/gateway/control-ui-contract.js`
- `../../app-navigation.ts`
- `../../app-route-paths.ts`
- `../../app/context.ts`
- `../../app/control-ui-auth.ts`
- `../../app/operator-access.ts`
- `../../app/public-assets.ts`
- `../../components/icons.ts`
- `../../components/mcp-server-form.ts`
- `../../components/modal-dialog.ts`
- `../../components/openclaw-mascot.ts`
- `../../components/plugins-hub-tabs.ts`
- `../../components/settings-ui.ts`
- `../../components/settings-workspace.ts`
- `../../i18n/index.ts`
- `../../lib/config/index.ts`
- `../../lib/config/mcp-servers.ts`
- `../../lib/external-link.ts`
- `../../lib/plugins/index.ts`
- `../../lit/openclaw-element.ts`
- `../../lit/subscriptions-controller.ts`
- `../../styles/plugins.css`
- `../../test-helpers/application-context.ts`
- `../../test-helpers/control-ui-e2e.ts`
- `../../test-helpers/wait-for.ts`
- `./icon-loader.ts`
- `./plugins-page.ts`
- `./presentation.ts`
- `./view.ts`
- `@lit/context`
- `@openclaw/normalization-core`
- `@openclaw/uirouter`
- `lit`
- `lit/decorators.js`
- `lit/directives/live.js`
- `lit/directives/repeat.js`
- `node:fs/promises`
- `node:path`
- `playwright`
- `vitest`
