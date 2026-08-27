# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    ui_src_pages_agents_memory[ui-src-pages-agents-memory] --> app[app]
    ui_src_pages_agents_memory[ui-src-pages-agents-memory] --> components[components]
    ui_src_pages_agents_memory[ui-src-pages-agents-memory] --> components[components]
    ui_src_pages_agents_memory[ui-src-pages-agents-memory] --> components[components]
    ui_src_pages_agents_memory[ui-src-pages-agents-memory] --> i18n[i18n]
    ui_src_pages_agents_memory[ui-src-pages-agents-memory] --> lib[lib]
    ui_src_pages_agents_memory[ui-src-pages-agents-memory] --> config[config]
    ui_src_pages_agents_memory[ui-src-pages-agents-memory] --> lib[lib]
    ui_src_pages_agents_memory[ui-src-pages-agents-memory] --> lib[lib]
    ui_src_pages_agents_memory[ui-src-pages-agents-memory] --> lib[lib]
    ui_src_pages_agents_memory[ui-src-pages-agents-memory] --> lit[lit]
    ui_src_pages_agents_memory[ui-src-pages-agents-memory] --> lit[lit]
    ui_src_pages_agents_memory[ui-src-pages-agents-memory] --> styles[styles]
    ui_src_pages_agents_memory[ui-src-pages-agents-memory] --> styles[styles]
    ui_src_pages_agents_memory[ui-src-pages-agents-memory] --> _[.]
    ui_src_pages_agents_memory[ui-src-pages-agents-memory] --> _[.]
    ui_src_pages_agents_memory[ui-src-pages-agents-memory] --> _[.]
    ui_src_pages_agents_memory[ui-src-pages-agents-memory] --> _[.]
    ui_src_pages_agents_memory[ui-src-pages-agents-memory] --> _lit[@lit]
    ui_src_pages_agents_memory[ui-src-pages-agents-memory] --> _openclaw[@openclaw]
    ui_src_pages_agents_memory[ui-src-pages-agents-memory] --> normalization_core[normalization-core]
    ui_src_pages_agents_memory[ui-src-pages-agents-memory] --> lit[lit]
    ui_src_pages_agents_memory[ui-src-pages-agents-memory] --> lit[lit]
    ui_src_pages_agents_memory[ui-src-pages-agents-memory] --> directives[directives]
    ui_src_pages_agents_memory[ui-src-pages-agents-memory] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../../app/context.ts`
- `../../../components/lobster-pet.ts`
- `../../../components/markdown.ts`
- `../../../components/modal-dialog.ts`
- `../../../i18n/index.ts`
- `../../../lib/clipboard.ts`
- `../../../lib/config/index.ts`
- `../../../lib/format.ts`
- `../../../lib/gateway-methods.ts`
- `../../../lib/plugin-activation.ts`
- `../../../lit/openclaw-element.ts`
- `../../../lit/subscriptions-controller.ts`
- `../../../styles/dreams.css`
- `../../../styles/lobster-pet.css`
- `./dreaming.ts`
- `./memory-panel.ts`
- `./restart-confirmation.ts`
- `./view.ts`
- `@lit/context`
- `@openclaw/normalization-core`
- `@openclaw/normalization-core/record-coerce`
- `lit`
- `lit/decorators.js`
- `lit/directives/unsafe-html.js`
- `vitest`
