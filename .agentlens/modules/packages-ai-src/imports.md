# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    packages_ai_src[packages-ai-src] --> _[.]
    packages_ai_src[packages-ai-src] --> _[.]
    packages_ai_src[packages-ai-src] --> internal[internal]
    packages_ai_src[packages-ai-src] --> _openclaw[@openclaw]
    packages_ai_src[packages-ai-src] --> esbuild[esbuild]
    packages_ai_src[packages-ai-src] --> node_url[node:url]
    packages_ai_src[packages-ai-src] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./api-registry.js`
- `./index.js`
- `./internal/default-runtime.js`
- `@openclaw/llm-core`
- `esbuild`
- `node:url`
- `vitest`
