# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> app[app]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> app[app]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> components[components]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> components[components]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> components[components]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> components[components]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> components[components]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> i18n[i18n]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> config[config]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> sessions[sessions]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> sessions[sessions]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> skill_workshop[skill-workshop]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> lit[lit]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> lit[lit]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> __[..]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> styles[styles]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> styles[styles]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> test_helpers[test-helpers]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> _[.]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> _[.]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> _[.]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> _[.]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> _[.]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> _[.]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> _[.]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> _[.]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> _[.]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> _[.]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> _[.]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> _[.]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> _lit[@lit]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> _openclaw[@openclaw]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> normalization_core[normalization-core]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> normalization_core[normalization-core]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> _openclaw[@openclaw]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> lit[lit]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> lit[lit]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> directives[directives]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> directives[directives]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> node_fs[node:fs]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> node_path[node:path]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> playwright[playwright]
    ui_src_pages_skill_workshop[ui-src-pages-skill-workshop] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../app/context.ts`
- `../../app/settings.ts`
- `../../components/file-preview-modal-registration.ts`
- `../../components/modal-dialog.ts`
- `../../components/plugins-hub-tabs.ts`
- `../../components/tooltip.ts`
- `../../components/web-awesome-tabs.ts`
- `../../i18n/index.ts`
- `../../lib/config/index.ts`
- `../../lib/sessions/index.ts`
- `../../lib/sessions/session-key.ts`
- `../../lib/skill-workshop/index.ts`
- `../../lit/openclaw-element.ts`
- `../../lit/subscriptions-controller.ts`
- `../../local-storage.ts`
- `../../styles/plugins.css`
- `../../styles/skill-workshop.css`
- `../../test-helpers/control-ui-e2e.ts`
- `./empty-states.ts`
- `./header-controls.ts`
- `./history-scan-page-controller.ts`
- `./history-scan.ts`
- `./plugins-hub-navigation.ts`
- `./proposals.ts`
- `./self-learning.ts`
- `./skill-workshop-page.ts`
- `./source-scope.ts`
- `./state.ts`
- `./storage.ts`
- `./view.ts`
- `@lit/context`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/record-coerce`
- `@openclaw/normalization-core/utf16-slice`
- `@openclaw/uirouter`
- `lit`
- `lit/decorators.js`
- `lit/directives/keyed.js`
- `lit/directives/style-map.js`
- `node:fs/promises`
- `node:path`
- `playwright`
- `vitest`
