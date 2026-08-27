# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    ui_src_pages_config[ui-src-pages-config] --> shared[shared]
    ui_src_pages_config[ui-src-pages-config] --> api[api]
    ui_src_pages_config[ui-src-pages-config] --> __[..]
    ui_src_pages_config[ui-src-pages-config] --> __[..]
    ui_src_pages_config[ui-src-pages-config] --> app[app]
    ui_src_pages_config[ui-src-pages-config] --> app[app]
    ui_src_pages_config[ui-src-pages-config] --> app[app]
    ui_src_pages_config[ui-src-pages-config] --> app[app]
    ui_src_pages_config[ui-src-pages-config] --> app[app]
    ui_src_pages_config[ui-src-pages-config] --> app[app]
    ui_src_pages_config[ui-src-pages-config] --> components[components]
    ui_src_pages_config[ui-src-pages-config] --> components[components]
    ui_src_pages_config[ui-src-pages-config] --> components[components]
    ui_src_pages_config[ui-src-pages-config] --> components[components]
    ui_src_pages_config[ui-src-pages-config] --> components[components]
    ui_src_pages_config[ui-src-pages-config] --> components[components]
    ui_src_pages_config[ui-src-pages-config] --> components[components]
    ui_src_pages_config[ui-src-pages-config] --> components[components]
    ui_src_pages_config[ui-src-pages-config] --> components[components]
    ui_src_pages_config[ui-src-pages-config] --> components[components]
    ui_src_pages_config[ui-src-pages-config] --> components[components]
    ui_src_pages_config[ui-src-pages-config] --> components[components]
    ui_src_pages_config[ui-src-pages-config] --> components[components]
    ui_src_pages_config[ui-src-pages-config] --> i18n[i18n]
    ui_src_pages_config[ui-src-pages-config] --> agents[agents]
    ui_src_pages_config[ui-src-pages-config] --> chat[chat]
    ui_src_pages_config[ui-src-pages-config] --> chat[chat]
    ui_src_pages_config[ui-src-pages-config] --> config[config]
    ui_src_pages_config[ui-src-pages-config] --> lib[lib]
    ui_src_pages_config[ui-src-pages-config] --> lib[lib]
    ui_src_pages_config[ui-src-pages-config] --> lib[lib]
    ui_src_pages_config[ui-src-pages-config] --> lit[lit]
    ui_src_pages_config[ui-src-pages-config] --> lit[lit]
    ui_src_pages_config[ui-src-pages-config] --> lit[lit]
    ui_src_pages_config[ui-src-pages-config] --> __[..]
    ui_src_pages_config[ui-src-pages-config] --> styles[styles]
    ui_src_pages_config[ui-src-pages-config] --> styles[styles]
    ui_src_pages_config[ui-src-pages-config] --> styles[styles]
    ui_src_pages_config[ui-src-pages-config] --> test_helpers[test-helpers]
    ui_src_pages_config[ui-src-pages-config] --> chat[chat]
    ui_src_pages_config[ui-src-pages-config] --> chat[chat]
    ui_src_pages_config[ui-src-pages-config] --> _[.]
    ui_src_pages_config[ui-src-pages-config] --> _[.]
    ui_src_pages_config[ui-src-pages-config] --> _[.]
    ui_src_pages_config[ui-src-pages-config] --> _[.]
    ui_src_pages_config[ui-src-pages-config] --> _[.]
    ui_src_pages_config[ui-src-pages-config] --> _[.]
    ui_src_pages_config[ui-src-pages-config] --> _[.]
    ui_src_pages_config[ui-src-pages-config] --> _[.]
    ui_src_pages_config[ui-src-pages-config] --> _[.]
    ui_src_pages_config[ui-src-pages-config] --> _[.]
    ui_src_pages_config[ui-src-pages-config] --> _[.]
    ui_src_pages_config[ui-src-pages-config] --> _[.]
    ui_src_pages_config[ui-src-pages-config] --> _lit[@lit]
    ui_src_pages_config[ui-src-pages-config] --> normalization_core[normalization-core]
    ui_src_pages_config[ui-src-pages-config] --> normalization_core[normalization-core]
    ui_src_pages_config[ui-src-pages-config] --> _openclaw[@openclaw]
    ui_src_pages_config[ui-src-pages-config] --> lit[lit]
    ui_src_pages_config[ui-src-pages-config] --> lit[lit]
    ui_src_pages_config[ui-src-pages-config] --> directives[directives]
    ui_src_pages_config[ui-src-pages-config] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../../src/shared/fast-mode.js`
- `../../api/gateway.ts`
- `../../app-navigation.ts`
- `../../app-route-paths.ts`
- `../../app/context.ts`
- `../../app/custom-theme.ts`
- `../../app/operator-access.ts`
- `../../app/settings.ts`
- `../../app/theme-transition.ts`
- `../../app/theme.ts`
- `../../components/config-form.meta.ts`
- `../../components/config-form.search.ts`
- `../../components/config-form.shared.ts`
- `../../components/config-form.ts`
- `../../components/icons.ts`
- `../../components/lobster-dex.ts`
- `../../components/lobster-pet.ts`
- `../../components/markdown.ts`
- `../../components/mcp-servers-card.ts`
- `../../components/settings-ui.ts`
- `../../components/settings-workspace.ts`
- `../../components/tooltip.ts`
- `../../components/web-awesome-select.ts`
- `../../i18n/index.ts`
- `../../lib/agents/display.ts`
- `../../lib/chat/follow-up-mode.ts`
- `../../lib/chat/thinking.ts`
- `../../lib/config/mcp-servers.ts`
- `../../lib/format.ts`
- `../../lib/gateway-errors.ts`
- `../../lib/json5-runtime.ts`
- `../../lit/openclaw-element.ts`
- `../../lit/poll-controller.ts`
- `../../lit/subscriptions-controller.ts`
- `../../styles.css`
- `../../styles/config-quick.css`
- `../../styles/config.css`
- `../../styles/lobster-pet.css`
- `../../test-helpers/storage.ts`
- `../chat/realtime-talk-input.ts`
- `../chat/realtime-talk.ts`
- `./config-page.ts`
- `./config-sections.ts`
- `./language-select.ts`
- `./mcp.ts`
- `./notifications-section.ts`
- `./quick.ts`
- `./route-data.ts`
- `./security.ts`
- `./settings-search.ts`
- `./settings-select-row.ts`
- `./settings-targets.ts`
- `./view.ts`
- `@lit/context`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/utf16-slice`
- `@openclaw/uirouter`
- `lit`
- `lit/decorators.js`
- `lit/directives/unsafe-html.js`
- `vitest`
