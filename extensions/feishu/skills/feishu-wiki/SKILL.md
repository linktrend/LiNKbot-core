---
name: feishu-wiki
description: |
  Feishu knowledge base navigation. Activate when user mentions knowledge base, wiki, or wiki links.
---

# Feishu Wiki Tool

Single tool `feishu_wiki` for knowledge base operations.

Wiki `space_id` values are opaque strings. Always keep them quoted in tool calls, even when they contain only digits; passing a long numeric-looking ID as a number can corrupt the suffix due to JavaScript number precision limits.

## Token Extraction

From URL `https://xxx.feishu.cn/wiki/ABC123def` → `token` = `ABC123def`

## Actions

### List Knowledge Spaces

```json
{ "action": "spaces" }
```

Returns one page of accessible wiki spaces plus `has_more` and `page_token`.
Continue with the returned `page_token` while `has_more` is true:

```json
{ "action": "spaces", "page_token": "${ltfx.n.72fe3f1cf7a6d69ab500.v1}" }
```

### List Nodes

```json
{ "action": "nodes", "space_id": "7xxx" }
```

With parent:

```json
{ "action": "nodes", "space_id": "7xxx", "parent_node_token": "${ltfx.n.657c1949ca7d2a1f4641.v1}" }
```

Returns one page of nodes plus `has_more` and `page_token`. Continue with the
same `space_id` and `parent_node_token`, adding the returned `page_token`, while
`has_more` is true. Both list actions accept optional `page_size` from 1 to 50.

### Get Node Details

```json
{ "action": "get", "token": "${ltfx.n.6eb4b60424387b79c9aa.v1}" }
```

Returns: `node_token`, `obj_token`, `obj_type`, etc. Use `obj_token` with `feishu_doc` to read/write the document.

### Create Node

```json
{ "action": "create", "space_id": "7xxx", "title": "New Page" }
```

With type and parent:

```json
{
  "action": "create",
  "space_id": "7xxx",
  "title": "Sheet",
  "obj_type": "sheet",
  "parent_node_token": "${ltfx.n.657c1949ca7d2a1f4641.v1}"
}
```

`obj_type`: `docx` (default), `sheet`, `bitable`, `mindnote`, `file`, `doc`, `slides`

### Move Node

```json
{ "action": "move", "space_id": "7xxx", "node_token": "${ltfx.n.657c1949ca7d2a1f4641.v1}" }
```

To different location:

```json
{
  "action": "move",
  "space_id": "7xxx",
  "node_token": "${ltfx.n.657c1949ca7d2a1f4641.v1}",
  "target_space_id": "7yyy",
  "target_parent_token": "${ltfx.n.ba273d0c83180b46c2ff.v1}"
}
```

### Rename Node

```json
{ "action": "rename", "space_id": "7xxx", "node_token": "${ltfx.n.657c1949ca7d2a1f4641.v1}", "title": "New Title" }
```

## Wiki-Doc Workflow

To edit a wiki page:

1. Get node: `{ "action": "get", "token": "${ltfx.n.9f46e4b8058d39d62c4e.v1}" }` → returns `obj_token`
2. Read doc: `feishu_doc { "action": "read", "doc_token": "${ltfx.n.38e326ccf1d77eab4444.v1}" }`
3. Write doc: `feishu_doc { "action": "write", "doc_token": "${ltfx.n.38e326ccf1d77eab4444.v1}", "content": "..." }`

## Configuration

```yaml
channels:
  feishu:
    tools:
      wiki: true # default: true
      doc: true # required - wiki content uses feishu_doc
```

**Dependency:** This tool requires `feishu_doc` to be enabled. Wiki pages are documents - use `feishu_wiki` to navigate, then `feishu_doc` to read/edit content.

## Permissions

Required: `wiki:wiki` or `wiki:wiki:readonly`
