# Ship/Pull pipeline one-line report template

Exact shapes only:

- `{{wave}}: Clear`
- `{{wave}}: Issues`

Where `{{wave}}` is one of: `Ship 05`, `Pull 07`, `Ship 16`, `Pull 18`, `Staging promote (Tue)`, `Staging promote (Fri)`, `Main ready (Mon)`.

## Freshness

Emit only after validated ACP child outcome (Ship/Pull) or owning checkpoint (Staging/Main).

## Omission

No lists, links, SHA dumps, or narration. Email subject `{{wave}} status`; body is the same one line.

Rendered by `renderPipelineOneLiner`.
