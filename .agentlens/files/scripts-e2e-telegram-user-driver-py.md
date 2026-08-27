# scripts/e2e/telegram-user-driver.py

[← Back to Module](../modules/root/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 873
- **Language:** Python
- **Symbols:** 53
- **Public symbols:** 53

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 25 | class | DriverError | pub | `class DriverError(RuntimeError):` |
| 29 | fn | read_json | pub | `def read_json(path):` |
| 36 | fn | write_json_private | pub | `def write_json_private(path, data):` |
| 43 | fn | env_or_config | pub | `def env_or_config(env_name, config, key, defaul...` |
| 53 | fn | load_config | pub | `def load_config():` |
| 64 | fn | valid_base64 | pub | `def valid_base64(value):` |
| 74 | fn | find_tdjson | pub | `def find_tdjson(config):` |
| 99 | fn | telegram_bot | pub | `def telegram_bot(token, method, payload=None):` |
| 114 | fn | resolve_sut | pub | `def resolve_sut(config, bot_config):` |
| 134 | fn | default_chat | pub | `def default_chat(config, bot_config):` |
| 144 | class | TdClient | pub | `class TdClient:` |
| 145 | fn | __init__ | pub | `def __init__(self, config):` |
| 169 | fn | execute | pub | `def execute(self, payload):` |
| 173 | fn | send | pub | `def send(self, payload):` |
| 182 | fn | receive | pub | `def receive(self, timeout=1.0):` |
| 192 | fn | destroy | pub | `def destroy(self):` |
| 199 | fn | request | pub | `def request(self, payload, timeout=20):` |
| 213 | fn | handle_update | pub | `def handle_update(self, item):` |
| 217 | fn | next_update | pub | `def next_update(self, timeout=1.0):` |
| 223 | class | UserDriver | pub | `class UserDriver:` |
| 224 | fn | __init__ | pub | `def __init__(self, config, bot_config):` |
| 231 | fn | td_params | pub | `def td_params(self):` |
| 258 | fn | td_params_current | pub | `def td_params_current(self):` |
| 264 | fn | encryption_key | pub | `def encryption_key(self):` |
| 271 | fn | encryption_key_for_current_tdlib | pub | `def encryption_key_for_current_tdlib(self):` |
| 274 | fn | authorize | pub | `def authorize(self, args=None, need_ready=True):` |
| 352 | fn | show_qr_link | pub | `def show_qr_link(self, link):` |
| 363 | fn | resolve_chat | pub | `def resolve_chat(self, chat):` |
| 380 | fn | text_content | pub | `def text_content(self, text):` |
| 388 | fn | send_text | pub | `def send_text(self, chat_id, text, reply_to=Non...` |
| 409 | fn | settle_sent_message | pub | `def settle_sent_message(self, message, timeout=...` |
| 429 | fn | wait_for_message | pub | `def wait_for_message(self, chat_id, args, after...` |
| 462 | fn | prompt_secret | pub | `def prompt_secret(label):` |
| 470 | fn | normalize_message | pub | `def normalize_message(message, users=None):` |
| 496 | fn | apply_template | pub | `def apply_template(text, sut):` |
| 502 | fn | print_result | pub | `def print_result(payload, as_json=False, output...` |
| 513 | fn | command_configure | pub | `def command_configure(args):` |
| 534 | fn | command_doctor | pub | `def command_doctor(args):` |
| 570 | fn | command_login | pub | `def command_login(args):` |
| 579 | fn | command_status | pub | `def command_status(args):` |
| 591 | fn | command_confirm_qr | pub | `def command_confirm_qr(args):` |
| 614 | fn | command_terminate_session | pub | `def command_terminate_session(args):` |
| 622 | fn | command_terminate_desktop_sessions | pub | `def command_terminate_desktop_sessions(args):` |
| 641 | fn | public_user | pub | `def public_user(user):` |
| 651 | fn | save_tester_identity | pub | `def save_tester_identity(config, user):` |
| 659 | fn | command_send | pub | `def command_send(args):` |
| 669 | fn | command_wait | pub | `def command_wait(args):` |
| 689 | fn | command_probe | pub | `def command_probe(args):` |
| 719 | fn | command_transcript | pub | `def command_transcript(args):` |
| 738 | fn | command_chats | pub | `def command_chats(args):` |
| 763 | fn | public_chat | pub | `def public_chat(chat, source):` |
| 773 | fn | add_common | pub | `def add_common(parser):` |
| 779 | fn | main | pub | `def main():` |

## Public API

### `DriverError`

```
class DriverError(RuntimeError):
```

**Line:** 25 | **Kind:** class

### `read_json`

```
def read_json(path):
```

**Line:** 29 | **Kind:** fn

### `write_json_private`

```
def write_json_private(path, data):
```

**Line:** 36 | **Kind:** fn

### `env_or_config`

```
def env_or_config(env_name, config, key, default=""):
```

**Line:** 43 | **Kind:** fn

### `load_config`

```
def load_config():
```

**Line:** 53 | **Kind:** fn

### `valid_base64`

```
def valid_base64(value):
```

**Line:** 64 | **Kind:** fn

### `find_tdjson`

```
def find_tdjson(config):
```

**Line:** 74 | **Kind:** fn

### `telegram_bot`

```
def telegram_bot(token, method, payload=None):
```

**Line:** 99 | **Kind:** fn

### `resolve_sut`

```
def resolve_sut(config, bot_config):
```

**Line:** 114 | **Kind:** fn

### `default_chat`

```
def default_chat(config, bot_config):
```

**Line:** 134 | **Kind:** fn

### `TdClient`

```
class TdClient:
```

**Line:** 144 | **Kind:** class

### `__init__`

```
def __init__(self, config):
```

**Line:** 145 | **Kind:** fn

### `execute`

```
def execute(self, payload):
```

**Line:** 169 | **Kind:** fn

### `send`

```
def send(self, payload):
```

**Line:** 173 | **Kind:** fn

### `receive`

```
def receive(self, timeout=1.0):
```

**Line:** 182 | **Kind:** fn

### `destroy`

```
def destroy(self):
```

**Line:** 192 | **Kind:** fn

### `request`

```
def request(self, payload, timeout=20):
```

**Line:** 199 | **Kind:** fn

### `handle_update`

```
def handle_update(self, item):
```

**Line:** 213 | **Kind:** fn

### `next_update`

```
def next_update(self, timeout=1.0):
```

**Line:** 217 | **Kind:** fn

### `UserDriver`

```
class UserDriver:
```

**Line:** 223 | **Kind:** class

### `__init__`

```
def __init__(self, config, bot_config):
```

**Line:** 224 | **Kind:** fn

### `td_params`

```
def td_params(self):
```

**Line:** 231 | **Kind:** fn

### `td_params_current`

```
def td_params_current(self):
```

**Line:** 258 | **Kind:** fn

### `encryption_key`

```
def encryption_key(self):
```

**Line:** 264 | **Kind:** fn

### `encryption_key_for_current_tdlib`

```
def encryption_key_for_current_tdlib(self):
```

**Line:** 271 | **Kind:** fn

### `authorize`

```
def authorize(self, args=None, need_ready=True):
```

**Line:** 274 | **Kind:** fn

### `show_qr_link`

```
def show_qr_link(self, link):
```

**Line:** 352 | **Kind:** fn

### `resolve_chat`

```
def resolve_chat(self, chat):
```

**Line:** 363 | **Kind:** fn

### `text_content`

```
def text_content(self, text):
```

**Line:** 380 | **Kind:** fn

### `send_text`

```
def send_text(self, chat_id, text, reply_to=None, thread_id=0):
```

**Line:** 388 | **Kind:** fn

### `settle_sent_message`

```
def settle_sent_message(self, message, timeout=30):
```

**Line:** 409 | **Kind:** fn

### `wait_for_message`

```
def wait_for_message(self, chat_id, args, after_message_id=0):
```

**Line:** 429 | **Kind:** fn

### `prompt_secret`

```
def prompt_secret(label):
```

**Line:** 462 | **Kind:** fn

### `normalize_message`

```
def normalize_message(message, users=None):
```

**Line:** 470 | **Kind:** fn

### `apply_template`

```
def apply_template(text, sut):
```

**Line:** 496 | **Kind:** fn

### `print_result`

```
def print_result(payload, as_json=False, output=""):
```

**Line:** 502 | **Kind:** fn

### `command_configure`

```
def command_configure(args):
```

**Line:** 513 | **Kind:** fn

### `command_doctor`

```
def command_doctor(args):
```

**Line:** 534 | **Kind:** fn

### `command_login`

```
def command_login(args):
```

**Line:** 570 | **Kind:** fn

### `command_status`

```
def command_status(args):
```

**Line:** 579 | **Kind:** fn

### `command_confirm_qr`

```
def command_confirm_qr(args):
```

**Line:** 591 | **Kind:** fn

### `command_terminate_session`

```
def command_terminate_session(args):
```

**Line:** 614 | **Kind:** fn

### `command_terminate_desktop_sessions`

```
def command_terminate_desktop_sessions(args):
```

**Line:** 622 | **Kind:** fn

### `public_user`

```
def public_user(user):
```

**Line:** 641 | **Kind:** fn

### `save_tester_identity`

```
def save_tester_identity(config, user):
```

**Line:** 651 | **Kind:** fn

### `command_send`

```
def command_send(args):
```

**Line:** 659 | **Kind:** fn

### `command_wait`

```
def command_wait(args):
```

**Line:** 669 | **Kind:** fn

### `command_probe`

```
def command_probe(args):
```

**Line:** 689 | **Kind:** fn

### `command_transcript`

```
def command_transcript(args):
```

**Line:** 719 | **Kind:** fn

### `command_chats`

```
def command_chats(args):
```

**Line:** 738 | **Kind:** fn

### `public_chat`

```
def public_chat(chat, source):
```

**Line:** 763 | **Kind:** fn

### `add_common`

```
def add_common(parser):
```

**Line:** 773 | **Kind:** fn

### `main`

```
def main():
```

**Line:** 779 | **Kind:** fn
