# Canonical template: Pipeline one-liner

## Placeholders

| Placeholder  | Required | Notes                                                                                                               |
| ------------ | -------- | ------------------------------------------------------------------------------------------------------------------- |
| `{{wave}}`   | yes      | `Ship 05`, `Pull 07`, `Ship 16`, `Pull 18`, `Staging promote (Tue)`, `Staging promote (Fri)`, or `Main ready (Mon)` |
| `{{result}}` | yes      | `Clear` or `Issues`                                                                                                 |

## Body

```text
{{wave}}: {{result}}
```

## Rules

- Exactly one line. No lists, links, or metadata.
- Reject unresolved placeholders.
- Telegram announce + email subject/body share this same line after validated ACP outcome.
