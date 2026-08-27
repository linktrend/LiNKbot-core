# apps/linux/src-tauri/src/gateway_ws.rs

[← Back to Module](../modules/apps-linux-src-tauri-src/MODULE.md) | [← Back to INDEX](../INDEX.md)

## Overview

- **Lines:** 1666
- **Language:** Rust
- **Symbols:** 118
- **Public symbols:** 16

## Symbol Table

| Line | Kind | Name | Visibility | Signature |
| ---- | ---- | ---- | ---------- | --------- |
| 28 | const | GATEWAY_STATE_EVENT | (private) | - |
| 29 | const | CHAT_EVENT | (private) | - |
| 30 | const | GATEWAY_DEVICE_IDENTITY_FILE | (private) | - |
| 31 | const | AGENTS_CACHE_TTL | (private) | - |
| 32 | const | CONNECT_TIMEOUT | (private) | - |
| 33 | const | HANDSHAKE_TIMEOUT | (private) | - |
| 34 | const | REQUEST_TIMEOUT | (private) | - |
| 35 | const | COMMAND_TIMEOUT | (private) | - |
| 36 | const | DRIVER_TICK | (private) | - |
| 37 | const | MAX_RECONNECT_DELAY | (private) | - |
| 38 | const | PAIRING_REQUIRED_DETAIL_CODE | (private) | - |
| 39 | const | AUTH_TOKEN_MISSING_DETAIL_CODE | (private) | - |
| 40 | const | AUTH_PASSWORD_MISSING_DETAIL_CODE | (private) | - |
| 41 | const | AUTH_DEVICE_TOKEN_MISMATCH_DETAIL_CODE | (private) | - |
| 42 | const | TLS_PIN_MISMATCH_ERROR | (private) | - |
| 45 | const | MIN_PROTOCOL_VERSION | (private) | - |
| 46 | const | MAX_PROTOCOL_VERSION | (private) | - |
| 49 | struct | GatewayWsConfig | pub | - |
| 57 | fn | new | pub | `pub fn new(` |
| 73 | enum | TlsTrustDecision | (private) | - |
| 78 | fn | tls_trust_decision | (private) | `fn tls_trust_decision(fingerprint: Option<&str>...` |
| 87 | fn | parse_tls_fingerprint | (private) | `fn parse_tls_fingerprint(raw: &str) -> Result<[...` |
| 100 | fn | pinned_fingerprint_matches | (private) | `fn pinned_fingerprint_matches(expected: &[u8; 3...` |
| 105 | struct | GatewayTlsPinVerifier | (private) | - |
| 111 | fn | fmt | (private) | `fn fmt(&self, formatter: &mut fmt::Formatter<'_...` |
| 119 | fn | verify_server_cert | (private) | `fn verify_server_cert(` |
| 137 | fn | verify_tls12_signature | (private) | `fn verify_tls12_signature(` |
| 146 | fn | verify_tls13_signature | (private) | `fn verify_tls13_signature(` |
| 155 | fn | supported_verify_schemes | (private) | `fn supported_verify_schemes(&self) -> Vec<Signa...` |
| 160 | fn | pinned_tls_connector | (private) | `fn pinned_tls_connector(expected: [u8; 32]) -> ...` |
| 177 | struct | GatewayAgentIdentity | pub | - |
| 184 | struct | GatewayAgentSummary | pub | - |
| 192 | struct | AgentsListResult | pub | - |
| 200 | struct | CachedAgents | (private) | - |
| 207 | struct | ChatSendParams | (private) | - |
| 217 | struct | ChatSendAck | (private) | - |
| 228 | struct | ChatRoutingTarget | pub | - |
| 235 | struct | ChatSendResult | pub | - |
| 241 | enum | GatewayRequest | (private) | - |
| 246 | enum | GatewayResponse | (private) | - |
| 251 | enum | DriverCommand | (private) | - |
| 260 | enum | GatewayConnectionState | (private) | - |
| 269 | fn | from_u64 | (private) | `fn from_u64(value: u64) -> Self {` |
| 279 | fn | event_name | (private) | `fn event_name(self) -> &'static str {` |
| 291 | struct | ConnectErrorDetails | (private) | - |
| 300 | fn | from_value | (private) | `fn from_value(value: Option<&Value>) -> Self {` |
| 314 | struct | RequestFailure | (private) | - |
| 323 | fn | transport | (private) | `fn transport(message: impl Into<String>) -> Self {` |
| 333 | fn | tls | (private) | `fn tls(message: impl Into<String>) -> Self {` |
| 343 | fn | method_with_details | (private) | `fn method_with_details(message: impl Into<Strin...` |
| 353 | fn | classify_connect | (private) | `fn classify_connect(mut self, auth: &GatewayAut...` |
| 360 | struct | GatewayClientInner | (private) | - |
| 373 | struct | GatewayClient | pub | - |
| 378 | fn | new | pub | `pub fn new() -> Self {` |
| 394 | fn | configure | pub | `pub fn configure(&self, app: &AppHandle, config...` |
| 419 | fn | clear_configuration | pub | `pub fn clear_configuration(&self, app: &AppHand...` |
| 444 | fn | activate | pub | `pub fn activate(&self, app: AppHandle) {` |
| 460 | fn | emit_current_state | pub | `pub fn emit_current_state(&self, window: &Webvi...` |
| 475 | fn | agents_list | pub | `pub async fn agents_list(&self) -> Result<Agent...` |
| 499 | fn | chat_send | pub | `pub async fn chat_send(` |
| 526 | fn | resume_reconnect | pub | `pub fn resume_reconnect(&self) {` |
| 541 | fn | request | (private) | `async fn request(&self, request: GatewayRequest...` |
| 563 | fn | run_driver | (private) | `async fn run_driver(&self, app: AppHandle, mut ...` |
| 655 | fn | connect_and_serve | (private) | `async fn connect_and_serve(` |
| 741 | fn | identity_and_auth | (private) | `fn identity_and_auth(` |
| 776 | fn | persist_device_token | (private) | `fn persist_device_token(` |
| 792 | fn | clear_device_token | (private) | `fn clear_device_token(&self, gateway: &str) -> ...` |
| 804 | fn | cache_agents | (private) | `fn cache_agents(&self, result: AgentsListResult) {` |
| 815 | fn | is_connected | (private) | `fn is_connected(&self) -> bool {` |
| 819 | fn | connection_state | (private) | `fn connection_state(&self) -> GatewayConnection...` |
| 823 | fn | set_connection_state | (private) | `fn set_connection_state(` |
| 866 | struct | GatewayStateEvent | (private) | - |
| 873 | fn | new | (private) | `fn new(state: GatewayConnectionState, notice: O...` |
| 881 | fn | reject_disconnected_command | (private) | `fn reject_disconnected_command(command: DriverC...` |
| 887 | fn | routing_target | (private) | `fn routing_target(scope: &str, selected_agent_i...` |
| 902 | fn | connect_detail_text | (private) | `fn connect_detail_text(value: Option<&Value>, m...` |
| 914 | fn | classify_connect_failure | (private) | `fn classify_connect_failure(` |
| 930 | fn | should_pause_reconnect | (private) | `fn should_pause_reconnect(details: &ConnectErro...` |
| 934 | fn | short_device_id | (private) | `fn short_device_id(device_id: &str) -> Option<S...` |
| 943 | fn | connection_notice | (private) | `fn connection_notice(` |
| 971 | fn | reconnect_backoff | (private) | `fn reconnect_backoff(attempt: u32) -> Duration {` |
| 976 | fn | should_clear_stored_device_token | (private) | `fn should_clear_stored_device_token(failure: &R...` |
| 981 | fn | connect_params | (private) | `fn connect_params(` |
| 1010 | fn | request_frame | (private) | `fn request_frame(id: &str, method: &str, params...` |
| 1019 | fn | wait_for_connect_challenge | (private) | `async fn wait_for_connect_challenge(socket: &mu...` |
| 1042 | fn | request_on_socket | (private) | `async fn request_on_socket(` |
| 1085 | fn | perform_request | (private) | `async fn perform_request(` |
| 1108 | fn | request_agents_list | (private) | `async fn request_agents_list(` |
| 1118 | struct | ValidatedHello | (private) | - |
| 1124 | fn | new | (private) | `fn new(device_token: Option<String>, tick_watch...` |
| 1132 | fn | validate_hello | (private) | `fn validate_hello(payload: Value) -> Result<Val...` |
| 1134 | struct | HelloFeatures | (private) | - |
| 1138 | struct | HelloOk | (private) | - |
| 1148 | struct | HelloAuth | (private) | - |
| 1153 | struct | HelloPolicy | (private) | - |
| 1185 | fn | classify_chat_ack | (private) | `fn classify_chat_ack(ack: &ChatSendAck) -> Resu...` |
| 1195 | fn | ack_error_message | (private) | `fn ack_error_message(ack: &ChatSendAck) -> Stri...` |
| 1214 | type | GatewaySocket | (private) | - |
| 1216 | fn | connect_gateway_socket | (private) | `async fn connect_gateway_socket(config: &Gatewa...` |
| 1237 | fn | connect_failure | (private) | `fn connect_failure(config: &GatewayWsConfig, er...` |
| 1246 | fn | is_tls_connect_failure | (private) | `fn is_tls_connect_failure(ws_url: &str, error: ...` |
| 1255 | fn | next_json | (private) | `async fn next_json(socket: &mut GatewaySocket) ...` |
| 1283 | fn | handle_idle_message | (private) | `async fn handle_idle_message(` |
| 1308 | fn | dispatch_chat_event | (private) | `fn dispatch_chat_event(app: &AppHandle, frame: ...` |
| 1320 | fn | unix_time_ms | (private) | `fn unix_time_ms() -> Result<u64, String> {` |
| 1332 | fn | routing_matches_macos_quick_chat_contract | (private) | `fn routing_matches_macos_quick_chat_contract() {` |
| 1355 | fn | agents_list_result_uses_gateway_routing_and_render_fields | (private) | `fn agents_list_result_uses_gateway_routing_and_...` |
| 1385 | fn | chat_ack_acceptance_is_explicit | (private) | `fn chat_ack_acceptance_is_explicit() {` |
| 1407 | fn | tls_trust_decision_uses_system_roots_or_an_exact_pin | (private) | `fn tls_trust_decision_uses_system_roots_or_an_e...` |
| 1428 | fn | tls_failures_have_a_distinct_connectivity_state | (private) | `fn tls_failures_have_a_distinct_connectivity_st...` |
| 1442 | fn | reconnect_backoff_is_exponential_and_capped | (private) | `fn reconnect_backoff_is_exponential_and_capped() {` |
| 1451 | fn | connect_frame_matches_gateway_schema | (private) | `fn connect_frame_matches_gateway_schema() {` |
| 1497 | fn | hello_tick_policy_sets_two_interval_watchdog | (private) | `fn hello_tick_policy_sets_two_interval_watchdog...` |
| 1512 | fn | connect_classification_separates_pairing_and_missing_credentials | (private) | `fn connect_classification_separates_pairing_and...` |
| 1579 | fn | reconnect_pause_requires_explicit_server_policy | (private) | `fn reconnect_pause_requires_explicit_server_pol...` |
| 1597 | fn | connection_notices_prefer_server_guidance_and_shorten_device_ids | (private) | `fn connection_notices_prefer_server_guidance_an...` |
| 1629 | fn | chat_send_frame_matches_gateway_schema | (private) | `fn chat_send_frame_matches_gateway_schema() {` |
| 1656 | fn | chat_send_result_flattens_route_and_ack_run_id | (private) | `fn chat_send_result_flattens_route_and_ack_run_...` |

## Public API

### `new`

```
pub fn new(
```

**Line:** 57 | **Kind:** fn

### `new`

```
pub fn new() -> Self {
```

**Line:** 378 | **Kind:** fn

### `configure`

```
pub fn configure(&self, app: &AppHandle, config: GatewayWsConfig) {
```

**Line:** 394 | **Kind:** fn

### `clear_configuration`

```
pub fn clear_configuration(&self, app: &AppHandle) {
```

**Line:** 419 | **Kind:** fn

### `activate`

```
pub fn activate(&self, app: AppHandle) {
```

**Line:** 444 | **Kind:** fn

### `emit_current_state`

```
pub fn emit_current_state(&self, window: &WebviewWindow) -> Result<(), String> {
```

**Line:** 460 | **Kind:** fn

### `agents_list`

```
pub async fn agents_list(&self) -> Result<AgentsListResult, String> {
```

**Line:** 475 | **Kind:** fn

### `chat_send`

```
pub async fn chat_send(
```

**Line:** 499 | **Kind:** fn

### `resume_reconnect`

```
pub fn resume_reconnect(&self) {
```

**Line:** 526 | **Kind:** fn
