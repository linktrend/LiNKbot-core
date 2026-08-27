# Imports

[← Back to MODULE](MODULE.md) | [← Back to INDEX](../../INDEX.md)

## Dependency Graph

```mermaid
graph TD
    src_infra_format_time[src-infra-format-time] --> _[.]
    src_infra_format_time[src-infra-format-time] --> _[.]
    src_infra_format_time[src-infra-format-time] --> _[.]
    src_infra_format_time[src-infra-format-time] --> _[.]
    src_infra_format_time[src-infra-format-time] --> _[.]
    src_infra_format_time[src-infra-format-time] --> pretty_ms[pretty-ms]
    src_infra_format_time[src-infra-format-time] --> vitest[vitest]
```

## External Dependencies

Dependencies from other modules:

- `./format-datetime.js`
- `./format-duration-internal.js`
- `./format-duration.js`
- `./format-relative.js`
- `./parse-offsetless-zoned-datetime.js`
- `pretty-ms`
- `vitest`
