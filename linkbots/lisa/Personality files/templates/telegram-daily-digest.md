# Canonical template: Telegram morning digest

Lisa loads this file and fills placeholders. Omit optional sections by leaving their
placeholder empty (renderer strips empty optional blocks). Never leave `{{...}}` in output.

## Placeholders

| Placeholder                | Required | Notes                                           |
| -------------------------- | -------- | ----------------------------------------------- |
| `{{weekday_date}}`         | yes      | e.g. `Thursday, 30 Jul 2026`                    |
| `{{calendar}}`             | yes      | `Yes` or `No` (summary line)                    |
| `{{tasks}}`                | yes      | `Yes` or `No`                                   |
| `{{email}}`                | yes      | `Yes` or `No`                                   |
| `{{unanswered}}`           | yes      | `Yes` or `No`                                   |
| `{{calendar_events_list}}` | yes      | numbered list or `None.`                        |
| `{{tasks_list}}`           | yes      | numbered list or `None.`                        |
| `{{emails_list}}`          | yes      | numbered list or `None.`                        |
| `{{unanswered_list}}`      | yes      | numbered list or `None.`                        |
| `{{coding_block}}`         | yes      | `## B. Coding Work & Evals: No` or Yes + detail |
| `{{expected_charge}}`      | yes      |                                                 |
| `{{time_to_30}}`           | yes      |                                                 |
| `{{time_to_98}}`           | yes      |                                                 |
| `{{charge_rate}}`          | yes      |                                                 |
| `{{routine_changes}}`      | yes      |                                                 |
| `{{checks}}`               | yes      | `Yes` or `No`                                   |
| `{{battery_alerts}}`       | yes      | multiline or empty                              |
| `{{pipeline_section}}`     | optional | full `## D. Pipeline` block or empty → omit     |
| `{{main_approve_section}}` | optional | full `## E. Main Approve` block or empty → omit |

## Omission rules

- Pipeline only when fresh lines exist for the digest cycle.
- Battery always present on Telegram.
- Main Approve omitted unless Monday + Clear + claim rules.
- Never send `Cycle date:` metadata.
- Plain Telegram text. No fences. Reject unresolved `{{...}}`.

## Body

```text
Morning Digest — {{weekday_date}}

## A. Work

i. Summary:
Calendar events: {{calendar}}.
Tasks: {{tasks}}.
Email: {{email}}.
Unanswered Messages: {{unanswered}}.

ii. Calendar Events:

{{calendar_events_list}}

iii. Tasks:

{{tasks_list}}

iv. Email Messages:

{{emails_list}}

v. Unanswered Messages:

{{unanswered_list}}

{{coding_block}}

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
