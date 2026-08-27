# apps/linux/src-tauri/src/canvas.rs

[← Back to Module](../modules/apps-linux-src-tauri-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1026
- **Language:** Rust
- **Symbols:** 66
- **Public symbols:** 5

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 24 | const | CANVAS_LABEL | (private) | - |
| 25 | const | CANVAS_SCHEME | (private) | - |
| 26 | const | BUNDLED_CANVAS_HREF | (private) | - |
| 27 | const | MAX_FRAME_BYTES | (private) | - |
| 28 | const | WEBVIEW_TIMEOUT | (private) | - |
| 29 | const | A2UI_READY_TIMEOUT | (private) | - |
| 30 | const | A2UI_READY_INTERVAL | (private) | - |
| 31 | const | A2UI_READY_EVAL_TIMEOUT | (private) | - |
| 33 | const | A2UI_INDEX | (private) | - |
| 36 | const | A2UI_BUNDLE | (private) | - |
| 40 | const | ACTION_BRIDGE_SCRIPT | (private) | - |
| 72 | struct | CanvasBridge | pub | - |
| 76 | struct | CanvasBridgeInner | (private) | - |
| 86 | struct | CanvasRequestJob | (private) | - |
| 93 | struct | CanvasError | (private) | - |
| 99 | fn | invalid | (private) | `fn invalid(message: impl Into<String>) -> Self {` |
| 106 | fn | unavailable | (private) | `fn unavailable(message: impl Into<String>) -> S...` |
| 115 | struct | IpcRequest | (private) | - |
| 124 | struct | Placement | (private) | - |
| 133 | struct | PresentParams | (private) | - |
| 140 | struct | NavigateParams | (private) | - |
| 146 | struct | EvalParams | (private) | - |
| 153 | struct | SnapshotParams | (private) | - |
| 162 | struct | PushParams | (private) | - |
| 168 | struct | PushJsonlParams | (private) | - |
| 173 | fn | start | pub | `pub fn start(app: AppHandle) -> Result<Self, St...` |
| 227 | fn | shutdown | pub | `pub fn shutdown(&self) {` |
| 242 | fn | accept | (private) | `fn accept(&self, app: AppHandle, stream: UnixSt...` |
| 327 | fn | run_commands | (private) | `fn run_commands(&self, app: AppHandle, receiver...` |
| 354 | fn | send_action | (private) | `fn send_action(&self, action: Value) -> Result<...` |
| 397 | fn | register_protocol | pub | `pub fn register_protocol(builder: tauri::Builde...` |
| 414 | fn | canvas_a2ui_action | pub | `pub fn canvas_a2ui_action(` |
| 442 | fn | handle_request | (private) | `fn handle_request(app: &AppHandle, request: &Ip...` |
| 528 | fn | apply_a2ui_messages | (private) | `fn apply_a2ui_messages(` |
| 559 | fn | ensure_canvas_window | (private) | `fn ensure_canvas_window(app: &AppHandle) -> Res...` |
| 589 | fn | ensure_a2ui_host | (private) | `fn ensure_a2ui_host(window: &WebviewWindow) -> ...` |
| 626 | fn | stop_pending_navigation | (private) | `fn stop_pending_navigation(window: &WebviewWind...` |
| 639 | fn | eval_json | (private) | `fn eval_json(window: &WebviewWindow, script: &s...` |
| 643 | fn | eval_json_with_timeout | (private) | `fn eval_json_with_timeout(` |
| 661 | fn | evaluation_result_string | (private) | `fn evaluation_result_string(result: Value) -> S...` |
| 669 | fn | snapshot | (private) | `fn snapshot(window: &WebviewWindow, params: Sna...` |
| 704 | fn | encode_surface | (private) | `fn encode_surface(surface: cairo::Surface, para...` |
| 734 | fn | apply_placement | (private) | `fn apply_placement(window: &WebviewWindow, plac...` |
| 777 | fn | parse_canvas_url | (private) | `fn parse_canvas_url(value: &str) -> Result<Url,...` |
| 787 | fn | is_bundled_canvas_url | (private) | `fn is_bundled_canvas_url(url: &Url) -> bool {` |
| 793 | fn | bundled_canvas_url | (private) | `fn bundled_canvas_url() -> Result<Url, CanvasEr...` |
| 798 | fn | a2ui_ready_script | (private) | `fn a2ui_ready_script() -> String {` |
| 805 | fn | guarded_a2ui_script | (private) | `fn guarded_a2ui_script(body: &str) -> String {` |
| 812 | fn | a2ui_reset_script | (private) | `fn a2ui_reset_script() -> String {` |
| 816 | fn | decode_params | (private) | `fn decode_params<T: for<'de> Deserialize<'de>>(...` |
| 821 | fn | decode_empty_params | (private) | `fn decode_empty_params(params_json: &str) -> Re...` |
| 830 | fn | write_frame | (private) | `fn write_frame(writer: &Arc<Mutex<UnixStream>>,...` |
| 839 | fn | dispatch_action_status | (private) | `fn dispatch_action_status(app: &AppHandle, fram...` |
| 856 | fn | socket_path | (private) | `fn socket_path() -> PathBuf {` |
| 867 | fn | prepare_socket_path | (private) | `fn prepare_socket_path(path: &Path) -> Result<(...` |
| 883 | fn | socket_table_contains | (private) | `fn socket_table_contains(socket_table: &str, pa...` |
| 893 | fn | remove_socket_if_owned | (private) | `fn remove_socket_if_owned(path: &Path, inode: u...` |
| 904 | fn | peer_uid | (private) | `fn peer_uid(stream: &UnixStream) -> std::io::Re...` |
| 932 | fn | navigation_allows_only_http_and_bundled_renderer | (private) | `fn navigation_allows_only_http_and_bundled_rend...` |
| 940 | fn | a2ui_scripts_require_the_exact_bundled_document | (private) | `fn a2ui_scripts_require_the_exact_bundled_docum...` |
| 955 | fn | empty_params_are_closed | (private) | `fn empty_params_are_closed() {` |
| 961 | fn | ipc_request_uses_camel_case_payload_field | (private) | `fn ipc_request_uses_camel_case_payload_field() {` |
| 970 | fn | present_accepts_partial_placement | (private) | `fn present_accepts_partial_placement() {` |
| 982 | fn | evaluation_results_match_the_canvas_string_contract | (private) | `fn evaluation_results_match_the_canvas_string_c...` |
| 994 | fn | socket_table_matches_only_the_exact_rendezvous_path | (private) | `fn socket_table_matches_only_the_exact_rendezvo...` |
| 1011 | fn | shutdown_removes_only_the_socket_inode_it_bound | (private) | `fn shutdown_removes_only_the_socket_inode_it_bo...` |

## Public API

### `start`

```
pub fn start(app: AppHandle) -> Result<Self, String> {
```

**Line:** 173 | **Kind:** fn

### `shutdown`

```
pub fn shutdown(&self) {
```

**Line:** 227 | **Kind:** fn

### `register_protocol`

```
pub fn register_protocol(builder: tauri::Builder<tauri::Wry>) -> tauri::Builder<tauri::Wry> {
```

**Line:** 397 | **Kind:** fn

### `canvas_a2ui_action`

```
pub fn canvas_a2ui_action(
```

**Line:** 414 | **Kind:** fn
