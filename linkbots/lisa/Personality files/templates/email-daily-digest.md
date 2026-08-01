# Canonical template: Email morning digest

Lisa loads this file and fills placeholders. **Never** include Battery Monitoring.

## Placeholders

| Placeholder                | Required | Notes                    |
| -------------------------- | -------- | ------------------------ |
| `{{weekday_date}}`         | yes      |                          |
| `{{calendar}}`             | yes      | `Yes` or `No`            |
| `{{tasks}}`                | yes      |                          |
| `{{email}}`                | yes      |                          |
| `{{unanswered}}`           | yes      |                          |
| `{{calendar_events_list}}` | yes      | numbered list or `None.` |
| `{{tasks_list}}`           | yes      |                          |
| `{{emails_list}}`          | yes      |                          |
| `{{unanswered_list}}`      | yes      |                          |
| `{{coding_block}}`         | yes      |                          |
| `{{pipeline_section}}`     | optional | omit when empty          |
| `{{main_approve_section}}` | optional | omit when empty          |

## Hard omission

- **Never** include Battery Monitoring / plugged / selfie / restriction / compliance content.
- Never include `## C. Battery Monitoring`.
- Pipeline only when fresh.
- Body → `scratch/digest_email.txt` then `tools/bin/lisa-safe email-send`.
- Reject unresolved `{{...}}`.

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
{{pipeline_section}}
{{main_approve_section}}
```
