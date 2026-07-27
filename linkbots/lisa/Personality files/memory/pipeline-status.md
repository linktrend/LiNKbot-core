# Pipeline status (autonomous Git ops)

Updated by Ship/Pull ACP + Lisa clock. The live file starts with a cycle-date metadata line and may contain one line for each checkpoint in that digest cycle. Cycle dates advance monotonically: a matching wave replaces only its own result, a newer wave cycle clears older Ship/Pull results, and a delayed older-cycle run does not modify the file.

Examples (replace with live values; do not invent Clear):

```text
Cycle date: YYYY-MM-DD
Ship 05: Clear
Pull 07: Clear
Ship 16: Clear
Pull 18: Clear
Staging date: YYYY-MM-DD
Staging promote (Tue): Clear
Main ready date: YYYY-MM-DD
Main ready (Mon): Clear
```

Lisa procedure: `agents/pipeline-status.md`.
