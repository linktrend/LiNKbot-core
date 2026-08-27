# Lisa operational reporting procedure

All deadlines below use `Asia/Taipei`. Start the morning Executive Digest at 06:45 for delivery by 07:00, and start the evening Executive Digest at 16:45 for delivery by 17:00. Use the same editable template and only verified, source-labelled work data. Prepare Telegram-only Flash Reports before 10:45, 12:45, 14:45, 20:45, and 22:45; the 14:45 report must decide whether 15:30–17:00 remains work or becomes personal time.

Every delivery plan uses a stable idempotency key, a preparation deadline, one retry, and a required channel receipt. A rendered report is not a delivery receipt. For `announce` jobs, the final assistant response is the Telegram body and cron owns Telegram delivery; never call or require a separate Telegram/message tool. On email failure, retry once and state the email failure in the final digest; never claim email delivery succeeded without its receipt.

These templates are source-only. They do not activate schedules, send Telegram or email, query Google or another provider, read the battery ledger, or contact a live service.
