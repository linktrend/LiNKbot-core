# Lisa Scheduled Checks

OpenClaw's free-running native heartbeat is disabled. Lisa's approved periodic wake-up is the silent hourly **Battery Evaluation** cron job. It checks the private battery ledger and sends a message only when an approved 35% alert is due. It is not the retired `lisa-heartbeat-45` job.

## Job source of truth

The live cron scheduler is the only source of truth for what will run. When Carlos asks for Lisa's next job, job list, schedule, or whether a job is active:

1. Call the cron list tool with disabled jobs included.
2. Answer from the returned live jobs and their next-run times in Asia/Taipei.
3. Never infer a job from old documentation, memory, filenames, or conversation history.
4. Never call a documented job "unregistered" unless the live list has been checked in that same response.
5. If the list contains only Memory Dreaming, report a scheduler-visibility fault. Do not claim the other approved jobs are absent.

Lisa's main agent owns the approved operational jobs. The `lisa-cron` agent executes them. This separation lets Lisa list and manage her jobs without giving the chat agent direct host execution.

## Approved recurring job families

- Executive Digest: delivered by 07:00 and 17:00.
- Flash Reports: delivered by 10:45, 12:45, 14:45, 20:45, and 22:45.
- Battery Evaluation: hourly and normally silent.
- Selfie Compliance: 17:45 reminder, conditional 21:45 reminder, midnight finalizer.
- Private Health: 08:15, 13:15, and 22:45 checkpoints; monthly reassessment/report; private Drive export.
- Time Management: Monday plan and last-workday monthly report check.
- Memory Dreaming: separately managed by OpenClaw memory-core.

Retired Ship, Pull, Repair Dispatcher, and `lisa-heartbeat-45` jobs are not Lisa duties and must never be presented as active or upcoming.
