# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    ui_src_pages_custodian[ui-src-pages-custodian] --> api[api]
    ui_src_pages_custodian[ui-src-pages-custodian] --> app[app]
    ui_src_pages_custodian[ui-src-pages-custodian] --> app[app]
    ui_src_pages_custodian[ui-src-pages-custodian] --> components[components]
    ui_src_pages_custodian[ui-src-pages-custodian] --> components[components]
    ui_src_pages_custodian[ui-src-pages-custodian] --> i18n[i18n]
    ui_src_pages_custodian[ui-src-pages-custodian] --> lib[lib]
    ui_src_pages_custodian[ui-src-pages-custodian] --> lib[lib]
    ui_src_pages_custodian[ui-src-pages-custodian] --> sessions[sessions]
    ui_src_pages_custodian[ui-src-pages-custodian] --> sessions[sessions]
    ui_src_pages_custodian[ui-src-pages-custodian] --> lit[lit]
    ui_src_pages_custodian[ui-src-pages-custodian] --> lit[lit]
    ui_src_pages_custodian[ui-src-pages-custodian] --> chat[chat]
    ui_src_pages_custodian[ui-src-pages-custodian] --> chat[chat]
    ui_src_pages_custodian[ui-src-pages-custodian] --> chat[chat]
    ui_src_pages_custodian[ui-src-pages-custodian] --> styles[styles]
    ui_src_pages_custodian[ui-src-pages-custodian] --> test_helpers[test-helpers]
    ui_src_pages_custodian[ui-src-pages-custodian] --> test_helpers[test-helpers]
    ui_src_pages_custodian[ui-src-pages-custodian] --> chat[chat]
    ui_src_pages_custodian[ui-src-pages-custodian] --> components[components]
    ui_src_pages_custodian[ui-src-pages-custodian] --> components[components]
    ui_src_pages_custodian[ui-src-pages-custodian] --> _[.]
    ui_src_pages_custodian[ui-src-pages-custodian] --> _[.]
    ui_src_pages_custodian[ui-src-pages-custodian] --> _[.]
    ui_src_pages_custodian[ui-src-pages-custodian] --> _[.]
    ui_src_pages_custodian[ui-src-pages-custodian] --> _[.]
    ui_src_pages_custodian[ui-src-pages-custodian] --> _[.]
    ui_src_pages_custodian[ui-src-pages-custodian] --> _[.]
    ui_src_pages_custodian[ui-src-pages-custodian] --> _[.]
    ui_src_pages_custodian[ui-src-pages-custodian] --> _[.]
    ui_src_pages_custodian[ui-src-pages-custodian] --> _lit[@lit]
    ui_src_pages_custodian[ui-src-pages-custodian] --> gateway_client[gateway-client]
    ui_src_pages_custodian[ui-src-pages-custodian] --> _openclaw[@openclaw]
    ui_src_pages_custodian[ui-src-pages-custodian] --> _openclaw[@openclaw]
    ui_src_pages_custodian[ui-src-pages-custodian] --> lit[lit]
    ui_src_pages_custodian[ui-src-pages-custodian] --> lit[lit]
    ui_src_pages_custodian[ui-src-pages-custodian] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `../../api/gateway.ts`
- `../../app/context.ts`
- `../../app/onboarding-mode.ts`
- `../../components/icons.ts`
- `../../components/option-card.ts`
- `../../i18n/index.ts`
- `../../lib/format.ts`
- `../../lib/gateway-methods.ts`
- `../../lib/sessions/navigation.ts`
- `../../lib/sessions/session-key.ts`
- `../../lit/openclaw-element.ts`
- `../../lit/subscriptions-controller.ts`
- `../../styles/chat/grouped.css`
- `../../styles/chat/layout.css`
- `../../styles/chat/text.css`
- `../../styles/custodian.css`
- `../../test-helpers/application-context.ts`
- `../../test-helpers/wait-for.ts`
- `../chat/chat-avatar.ts`
- `../chat/components/chat-divider.ts`
- `../chat/components/chat-message.ts`
- `./custodian-history.ts`
- `./custodian-page.test-harness.ts`
- `./custodian-page.ts`
- `./custodian-question-card.ts`
- `./route-view.ts`
- `./route.ts`
- `./session-lifecycle.ts`
- `./structured-question.ts`
- `./transcript.ts`
- `@lit/context`
- `@openclaw/gateway-client/browser`
- `@openclaw/gateway-protocol`
- `@openclaw/uirouter`
- `lit`
- `lit/decorators.js`
- `vitest`
