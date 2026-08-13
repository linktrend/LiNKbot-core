# Lisa private health procedure

The health job owns a dedicated `lisa-private-health.sqlite` database below Lisa's agent-owned state directory. The directory is mode `0700`; the database is mode `0600`. The database is not registered in shared state, plugin KV, generic reports, logs, or telemetry.

The job records observations with source, confidence, status, and attachment provenance. A correction appends a correction row and retains the original observation. Missing input is stored as `not_reported`; it is never guessed or backfilled by a reminder.

Daily check-ins are composed at 08:15, in the 12:45 message for the 13:15 measurement target, and at 22:45. Energy, mood, and stress use validated 1–5 values. Sleep duration is a Lisa calculation from reported sleep and wake times. Hydration uses three 1,000 ml bottles. Protein is an estimate against the current 125 g target and is evaluated weekly.

Doctor-scale and simple home-scale series remain distinct. Waist is monthly. Gym reminders belong to the calendar; Lisa does not create duplicate reminders.

Photograph/document values stay unclear or pending until visible values are confirmed. Appointment follow-up questions are limited to unknown fields, are Telegram-only intents, and may request a one-hour follow-up.

Lisa can track, explain sourced information, identify patterns, prepare questions, and flag predefined concerns. It cannot diagnose, change a prescription or dose, approve treatment, approve an unidentified supplement, or provide false reassurance. Such requests return `requires_clinician_decision` with a neutral tracking response.

The monthly report is bound only to Carlos's personal-email destination, is due on the first day of the month at 08:00 Asia/Taipei, and uses the approved section order. Encrypted export planning requires an encryption receipt and a Google Secret Manager reference. It plans current and previous slots, retains the previous copy until the current copy is verified, and uses opaque bindings for backup, readable reports, photographs, and documents. This source does not contact Drive, Google Secret Manager, email, Telegram, a clinician, or any other external service.
