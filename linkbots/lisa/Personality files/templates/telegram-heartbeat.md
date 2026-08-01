# Canonical template: Telegram heartbeat

Lisa loads this file and fills placeholders. Omit optional sections by leaving their
placeholder empty (renderer strips empty optional blocks). Never leave `{{...}}` in output.

## Placeholders

| Placeholder                | Required | Notes                                           |
| -------------------------- | -------- | ----------------------------------------------- |
| `{{weekday_date}}`         | yes      | e.g. `Thursday, 30 Jul 2026`                    |
| `{{time}}`                 | yes      | e.g. `10:45` (local Asia/Taipei)                |
| `{{calendar}}`             | yes      | `Yes` or `No`                                   |
| `{{tasks}}`                | yes      | `Yes` or `No`                                   |
| `{{email}}`                | yes      | `Yes` or `No`                                   |
| `{{unanswered}}`           | yes      | `Yes` or `No`                                   |
| `{{coding_evals}}`         | yes      | `Yes` or `No`                                   |
| `{{expected_charge}}`      | yes      | e.g. `72%`                                      |
| `{{time_to_30}}`           | yes      | time or `N/A`                                   |
| `{{time_to_98}}`           | yes      | time or `N/A`                                   |
| `{{charge_rate}}`          | yes      | plain text                                      |
| `{{routine_changes}}`      | yes      | plain text                                      |
| `{{checks}}`               | yes      | `Yes` or `No`                                   |
| `{{battery_alerts}}`       | yes      | multiline alert lines, or empty                 |
| `{{pipeline_section}}`     | optional | full `## D. Pipeline` block or empty → omit     |
| `{{main_approve_section}}` | optional | full `## E. Main Approve` block or empty → omit |

## Omission rules

- Work is Yes/No summary only (no ii–v lists).
- Coding is topline Yes/No only.
- Battery: always full 7 items on Telegram.
- Pipeline section omitted entirely when no fresh lines.
- Main Approve omitted unless Monday fallback rules match.
- Never send `Cycle date:` metadata to Telegram.
- Plain Telegram text — never Markdown fences.
- Same inputs → identical body. Reject unresolved `{{...}}`.

## Body

```text
Heartbeat — {{weekday_date}}, {{time}}

## A. Work

i. Summary:
Calendar events: {{calendar}}.
Tasks: {{tasks}}.
Email: {{email}}.
Unanswered Messages: {{unanswered}}.

## B. Coding Work & Evals: {{coding_evals}}

## C. Battery Monitoring

1. Expected current charge left: ~{{expected_charge}}
2. Expected time to 30%: {{time_to_30}}
3. Expected time to 98%: {{time_to_98}}
4. Updated Charge Rate: {{charge_rate}}
5. Routine Changes: {{routine_changes}}
6. Please report current percentage and plugged status if you can.
7. Checks: {{checks}}
{{battery_alerts}}
{{pipeline_section}}
{{main_approve_section}}
```
