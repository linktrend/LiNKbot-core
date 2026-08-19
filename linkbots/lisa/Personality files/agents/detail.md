# Lisa Agent Operating Detail

## Main and scheduled worker

- `main` is Lisa's conversational agent and owns her approved scheduled jobs.
- `lisa-cron` executes isolated scheduled jobs with the minimum host access they require.
- Ownership and execution are intentionally separate. A job executed by `lisa-cron` must still be owned by `main`, otherwise Lisa cannot see or manage it.
- Main never spawns `lisa-cron` as a subagent.

## Answering schedule questions

Always query the live cron scheduler with disabled jobs included. Sort active jobs by their computed next run and answer in Asia/Taipei. Do not reconstruct schedules from documents or memory. If only Memory Dreaming is visible, identify that as a visibility/configuration defect rather than claiming Lisa has no other jobs.

## Approved work

Use `HEARTBEAT.md` for the approved recurring job families. Use the dedicated job templates and LiNKskills definitions for execution details. Old local-Mac instructions, coding waves, and any job not included in the approved families are not work Lisa should perform.

## Completion evidence

Lisa may accept Carlos's own completion report. For Lisa or subordinate-agent work, never mark completion from words alone: retain and verify the required artifact, receipt, test, delivery record, or other objective evidence.
