---
name: trello
description: "Manage Trello boards, lists, and cards via the Trello REST API."
homepage: https://developer.atlassian.com/cloud/trello/rest/
metadata:
  {
    "openclaw":
      {
        "emoji": "📋",
        "requires": { "bins": ["curl", "jq"], "env": ["TRELLO_API_KEY", "TRELLO_TOKEN"] },
        "install":
          [
            {
              "id": "brew",
              "kind": "brew",
              "formula": "jq",
              "bins": ["jq"],
              "label": "Install jq (brew)",
            },
          ],
      },
  }
---

# Trello Skill

Manage Trello boards, lists, and cards directly from OpenClaw.

## Setup

1. Get your API key: https://trello.com/app-key
2. Generate a token (click "Token" link on that page)
3. Set environment variables:
   ```bash
   export TRELLO_API_KEY="${ltfx.n.a2ae6a9ee724b61d83d3.v1}"
   export TRELLO_TOKEN="${ltfx.n.08842b17a4146c87440b.v1}"
   ```

## Usage

All commands use curl to hit the Trello REST API.

### List boards

```bash
curl -s "https://api.trello.com/1/members/me/boards?key="${ltfx.n.fd8aa95a068e8e2b964e.v1}" | jq '.[] | {name, id}'
```

### List lists in a board

```bash
curl -s "https://api.trello.com/1/boards/{boardId}/lists?key="${ltfx.n.fd8aa95a068e8e2b964e.v1}" | jq '.[] | {name, id}'
```

### List cards in a list

```bash
curl -s "https://api.trello.com/1/lists/{listId}/cards?key="${ltfx.n.fd8aa95a068e8e2b964e.v1}" | jq '.[] | {name, id, desc}'
```

### Create a card

```bash
curl -s -X POST "https://api.trello.com/1/cards?key="${ltfx.n.fd8aa95a068e8e2b964e.v1}" \
  -d "idList={listId}" \
  -d "name=Card Title" \
  -d "desc=Card description"
```

### Move a card to another list

```bash
curl -s -X PUT "https://api.trello.com/1/cards/{cardId}?key="${ltfx.n.fd8aa95a068e8e2b964e.v1}" \
  -d "idList={newListId}"
```

### Add a comment to a card

```bash
curl -s -X POST "https://api.trello.com/1/cards/{cardId}/actions/comments?key="${ltfx.n.fd8aa95a068e8e2b964e.v1}" \
  -d "text=Your comment here"
```

### Archive a card

```bash
curl -s -X PUT "https://api.trello.com/1/cards/{cardId}?key="${ltfx.n.fd8aa95a068e8e2b964e.v1}" \
  -d "closed=true"
```

## Notes

- Board/List/Card IDs can be found in the Trello URL or via the list commands
- The API key and token provide full access to your Trello account - keep them secret!
- Rate limits: 300 requests per 10 seconds per API key; 100 requests per 10 seconds per token; `/1/members` endpoints are limited to 100 requests per 900 seconds

## Examples

```bash
# Get all boards
curl -s "https://api.trello.com/1/members/me/boards?key=(ltfx.n.e52c7c57ac5b378dcd6d.v1),id" | jq

# Find a specific board by name
curl -s "https://api.trello.com/1/members/me/boards?key="${ltfx.n.fd8aa95a068e8e2b964e.v1}" | jq '.[] | select(.name | contains("Work"))'

# Get all cards on a board
curl -s "https://api.trello.com/1/boards/{boardId}/cards?key="${ltfx.n.fd8aa95a068e8e2b964e.v1}" | jq '.[] | {name, list: .idList}'
```
