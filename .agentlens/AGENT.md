# AI Agent Instructions

## Reading Protocol

Follow this protocol to understand the codebase efficiently:

1. **Start with INDEX.md** - Get the project overview and module routing table
2. **Navigate to relevant module** - Go to `modules/{name}/MODULE.md` for the area you're working on
3. **Check memory.md before editing** - Review warnings and TODOs for that module
4. **Use outline.md for large files** - Find symbols without reading entire files
5. **Check imports.md for dependencies** - Understand module relationships before changes
6. **Review files/*.md for complex files** - Deep documentation for high-complexity files

### Documentation Structure

```
.agentlens/
├── INDEX.md              # Start here - project overview
├── AGENT.md              # This file - AI instructions
├── modules/
│   └── {module-slug}/
│       ├── MODULE.md     # Module summary and file list
│       ├── outline.md    # Symbol maps for large files
│       ├── memory.md     # Warnings and TODOs
│       └── imports.md    # Dependencies
└── files/                # Deep docs for complex files
```

## Freshness Check

**Generated:** 2026-08-27T04:31:48Z
**Git HEAD:** `ae397be`

### How to verify freshness

1. Compare the Git HEAD above with current: `git rev-parse --short HEAD`
2. If they differ significantly, docs may be outdated
3. Check file modification times vs. the Generated timestamp

## Available Modules

| Module | Files | Type | Description |
| ------ | ----- | ---- | ----------- |
| `` | 1783 | root | Module |
| `apps/ios/ShareExtension` | 5 | implicit | Module |
| `apps/ios/Sources/Design` | 40 | implicit | Module |
| `apps/ios/Sources/Gateway` | 20 | implicit | Module |
| `apps/ios/Sources/Model` | 5 | implicit | Module |
| `apps/ios/Sources/Onboarding` | 8 | implicit | Module |
| `apps/ios/Sources/Push` | 7 | implicit | Module |
| `apps/ios/Sources/Services` | 7 | implicit | Business logic services |
| `apps/ios/Sources/Voice` | 12 | implicit | Module |
| `apps/ios/Tests/Logic` | 7 | implicit | Test files |
| `apps/ios/WatchApp/Sources` | 12 | implicit | Module |
| `apps/linux/src-tauri/src` | 13 | implicit | Source root |
| `apps/macos/Sources/OpenClaw/NodeMode` | 10 | implicit | Module |
| `apps/macos/Sources/OpenClawMacCLI` | 9 | implicit | Module |
| `apps/macos/Tests/OpenClawIPCTests` | 154 | implicit | Test files |
| `apps/shared/OpenClawKit/Sources/OpenClawChatUI` | 72 | implicit | Module |
| `apps/shared/OpenClawKit/Sources/OpenClawKit` | 94 | implicit | Module |
| `apps/shared/OpenClawKit/Tests/OpenClawKitTests` | 80 | implicit | Test files |
| `apps/swabble/Sources/swabble/Commands` | 11 | implicit | Module |
| `examples/ai-chat` | 1 | js/ts | Module |
| `extensions/acpx` | 12 | js/ts | Module |
| `extensions/acpx/src` | 28 | implicit | Source root |
| `extensions/active-memory` | 17 | js/ts | Module |
| `extensions/admin-http-rpc` | 5 | js/ts | Module |
| `extensions/alibaba` | 3 | js/ts | Module |
| `extensions/amazon-bedrock` | 26 | js/ts | Module |
| `extensions/amazon-bedrock-mantle` | 8 | js/ts | Module |
| `extensions/anthropic` | 47 | js/ts | Module |
| `extensions/anthropic-vertex` | 15 | js/ts | Module |
| `extensions/arcee` | 6 | js/ts | Module |
| `extensions/azure-speech` | 8 | js/ts | Module |
| `extensions/baseten` | 10 | js/ts | Module |
| `extensions/bonjour` | 3 | js/ts | Module |
| `extensions/bonjour/src` | 6 | implicit | Source root |
| `extensions/brave` | 5 | js/ts | Module |
| `extensions/brave/src` | 5 | implicit | Source root |
| `extensions/browser` | 316 | js/ts | Module |
| `extensions/browser/chrome-extension` | 5 | implicit | Module |
| `extensions/browser/chrome-extension/modules` | 29 | implicit | Module |
| `extensions/browser/scripts` | 5 | implicit | Build/utility scripts |
| `extensions/browser/src/browser/extension-relay` | 13 | implicit | Module |
| `extensions/browser/src/browser/routes` | 43 | js/ts | Route definitions |
| `extensions/browser/src/cli/browser-cli-actions-input` | 11 | implicit | Module |
| `extensions/browser/src/gateway` | 7 | implicit | Module |
| `extensions/byteplus` | 9 | js/ts | Module |
| `extensions/canvas` | 10 | js/ts | Module |
| `extensions/canvas/scripts` | 9 | implicit | Build/utility scripts |
| `extensions/canvas/src` | 16 | implicit | Source root |
| `extensions/canvas/src/host` | 7 | implicit | Module |
| `extensions/cerebras` | 5 | js/ts | Module |
| `extensions/chutes` | 10 | js/ts | Module |
| `extensions/clawrouter` | 9 | js/ts | Module |
| `extensions/clickclack` | 46 | js/ts | Module |
| `extensions/clickclack/src/discussions` | 17 | implicit | Module |
| `extensions/cloudflare-ai-gateway` | 9 | js/ts | Module |
| `extensions/codex` | 60 | js/ts | Module |
| `extensions/codex/src/app-server` | 268 | implicit | Module |
| `extensions/codex/src/app-server/sandbox-exec-server` | 8 | implicit | Module |
| `extensions/codex/src/migration` | 14 | implicit | Module |
| `extensions/cohere` | 7 | js/ts | Module |
| `extensions/comfy` | 13 | js/ts | Module |
| `extensions/copilot` | 6 | js/ts | Module |
| `extensions/copilot-proxy` | 2 | js/ts | Module |
| `extensions/copilot/src` | 33 | implicit | Source root |
| `extensions/crabbox` | 5 | js/ts | Module |
| `extensions/deepgram` | 8 | js/ts | Module |
| `extensions/deepinfra` | 29 | js/ts | Module |
| `extensions/deepseek` | 12 | js/ts | Module |
| `extensions/device-pair` | 13 | js/ts | Module |
| `extensions/diagnostics-otel` | 3 | js/ts | Module |
| `extensions/diagnostics-otel/src` | 20 | implicit | Source root |
| `extensions/diagnostics-prometheus` | 4 | js/ts | Module |
| `extensions/diffs` | 3 | js/ts | Module |
| `extensions/diffs-language-pack` | 4 | js/ts | Module |
| `extensions/diffs/src` | 29 | implicit | Source root |
| `extensions/discord` | 240 | js/ts | Module |
| `extensions/discord/src/actions` | 20 | implicit | Module |
| `extensions/discord/src/activities` | 18 | implicit | Module |
| `extensions/discord/src/internal` | 59 | implicit | Module |
| `extensions/discord/src/monitor` | 240 | implicit | Module |
| `extensions/discord/src/test-support` | 6 | implicit | Test files |
| `extensions/discord/src/voice` | 43 | implicit | Module |
| `extensions/document-extract` | 3 | js/ts | Module |
| `extensions/duckduckgo` | 3 | js/ts | Module |
| `extensions/duckduckgo/src` | 5 | implicit | Source root |
| `extensions/elevenlabs` | 19 | js/ts | Module |
| `extensions/exa` | 8 | js/ts | Module |
| `extensions/fal` | 13 | js/ts | Module |
| `extensions/featherless` | 7 | js/ts | Module |
| `extensions/feishu` | 18 | js/ts | Module |
| `extensions/feishu/src` | 230 | implicit | Source root |
| `extensions/file-transfer` | 2 | js/ts | Module |
| `extensions/file-transfer/src/node-host` | 10 | implicit | Module |
| `extensions/file-transfer/src/shared` | 19 | implicit | Module |
| `extensions/file-transfer/src/tools` | 10 | implicit | Module |
| `extensions/firecrawl` | 7 | js/ts | Module |
| `extensions/firecrawl/src` | 10 | implicit | Source root |
| `extensions/fireworks` | 9 | js/ts | Module |
| `extensions/github-copilot` | 30 | js/ts | Module |
| `extensions/gmi` | 4 | js/ts | Module |
| `extensions/google` | 86 | js/ts | Module |
| `extensions/google-meet` | 39 | js/ts | Module |
| `extensions/google-meet/src/transports` | 12 | implicit | Module |
| `extensions/googlechat` | 12 | js/ts | Module |
| `extensions/googlechat/src` | 62 | implicit | Source root |
| `extensions/gradium` | 7 | js/ts | Module |
| `extensions/groq` | 5 | js/ts | Module |
| `extensions/huggingface` | 9 | js/ts | Module |
| `extensions/imessage` | 114 | js/ts | Module |
| `extensions/imessage/src/monitor` | 59 | implicit | Module |
| `extensions/inworld` | 7 | js/ts | Module |
| `extensions/irc` | 11 | js/ts | Module |
| `extensions/irc/src` | 44 | implicit | Source root |
| `extensions/kilocode` | 10 | js/ts | Module |
| `extensions/kimi-coding` | 15 | js/ts | Module |
| `extensions/line` | 8 | js/ts | Module |
| `extensions/line/src` | 82 | implicit | Source root |
| `extensions/line/src/flex-templates` | 6 | implicit | Module |
| `extensions/linkbrain` | 29 | js/ts | Module |
| `extensions/linkbrain/src` | 21 | implicit | Source root |
| `extensions/linkskills` | 21 | js/ts | Module |
| `extensions/linkskills/fake` | 17 | js/ts | Module |
| `extensions/linkskills/src` | 16 | implicit | Source root |
| `extensions/linux-canvas` | 2 | js/ts | Module |
| `extensions/linux-canvas/src` | 6 | implicit | Source root |
| `extensions/linux-node` | 2 | js/ts | Module |
| `extensions/linux-node/src` | 9 | implicit | Source root |
| `extensions/litellm` | 8 | js/ts | Module |
| `extensions/llama-cpp` | 2 | js/ts | Module |
| `extensions/llama-cpp/src` | 7 | implicit | Source root |
| `extensions/llm-task` | 5 | js/ts | Module |
| `extensions/lmstudio` | 5 | js/ts | Module |
| `extensions/lmstudio/src` | 14 | implicit | Source root |
| `extensions/lobster` | 2 | js/ts | Module |
| `extensions/lobster/src` | 7 | implicit | Source root |
| `extensions/logbook` | 1 | js/ts | Module |
| `extensions/logbook/src` | 10 | implicit | Source root |
| `extensions/longcat` | 7 | js/ts | Module |
| `extensions/matrix` | 167 | js/ts | Module |
| `extensions/matrix/src/matrix/actions` | 23 | implicit | Module |
| `extensions/matrix/src/matrix/client` | 19 | implicit | Module |
| `extensions/matrix/src/matrix/monitor` | 72 | js/ts | Module |
| `extensions/matrix/src/matrix/sdk` | 32 | implicit | Module |
| `extensions/matrix/src/matrix/send` | 7 | implicit | Module |
| `extensions/mattermost` | 12 | js/ts | Module |
| `extensions/mattermost/src` | 40 | implicit | Source root |
| `extensions/mattermost/src/mattermost` | 62 | implicit | Module |
| `extensions/memory-core` | 71 | js/ts | Module |
| `extensions/memory-core/src/memory` | 100 | js/ts | Module |
| `extensions/memory-lancedb` | 15 | js/ts | Module |
| `extensions/memory-wiki` | 8 | js/ts | Module |
| `extensions/memory-wiki/src` | 69 | implicit | Source root |
| `extensions/meta` | 9 | js/ts | Module |
| `extensions/microsoft` | 7 | js/ts | Module |
| `extensions/microsoft-foundry` | 13 | js/ts | Module |
| `extensions/migrate-claude` | 12 | js/ts | Module |
| `extensions/migrate-hermes` | 30 | js/ts | Module |
| `extensions/minimax` | 37 | js/ts | Module |
| `extensions/mistral` | 16 | js/ts | Module |
| `extensions/moonshot` | 18 | js/ts | Module |
| `extensions/msteams` | 13 | js/ts | Module |
| `extensions/msteams/src` | 156 | js/ts | Source root |
| `extensions/msteams/src/attachments` | 12 | implicit | Module |
| `extensions/msteams/src/monitor-handler` | 15 | implicit | Module |
| `extensions/mxc` | 2 | js/ts | Module |
| `extensions/mxc/src` | 15 | implicit | Source root |
| `extensions/mxc/test` | 9 | implicit | Test files |
| `extensions/nemotron-shadow-eval` | 4 | js/ts | Module |
| `extensions/nextcloud-talk` | 7 | js/ts | Module |
| `extensions/nextcloud-talk/src` | 60 | implicit | Source root |
| `extensions/nostr` | 10 | js/ts | Module |
| `extensions/nostr/src` | 48 | implicit | Source root |
| `extensions/novita` | 4 | js/ts | Module |
| `extensions/nvidia` | 7 | js/ts | Module |
| `extensions/oc-path` | 5 | js/ts | Module |
| `extensions/oc-path/src/oc-path` | 21 | js/ts | Module |
| `extensions/oc-path/src/oc-path/jsonc` | 6 | implicit | Module |
| `extensions/oc-path/src/oc-path/jsonl` | 6 | implicit | Module |
| `extensions/oc-path/src/oc-path/tests` | 9 | implicit | Test files |
| `extensions/oc-path/src/oc-path/tests/scenarios` | 21 | implicit | Test files |
| `extensions/oc-path/src/oc-path/yaml` | 5 | implicit | Module |
| `extensions/ollama` | 17 | js/ts | Module |
| `extensions/ollama/src` | 27 | implicit | Source root |
| `extensions/onepassword` | 2 | js/ts | Module |
| `extensions/onepassword/src` | 13 | implicit | Source root |
| `extensions/open-prose` | 2 | js/ts | Module |
| `extensions/openai` | 82 | js/ts | Module |
| `extensions/opencode` | 17 | js/ts | Module |
| `extensions/opencode-go` | 14 | js/ts | Module |
| `extensions/openrouter` | 33 | js/ts | Module |
| `extensions/openshell` | 1 | js/ts | Module |
| `extensions/openshell/src` | 11 | implicit | Source root |
| `extensions/parallel` | 5 | js/ts | Module |
| `extensions/parallel/src` | 11 | implicit | Source root |
| `extensions/perplexity` | 8 | js/ts | Module |
| `extensions/phone-control` | 5 | js/ts | Module |
| `extensions/pixverse` | 6 | js/ts | Module |
| `extensions/policy` | 2 | js/ts | Module |
| `extensions/policy/src` | 19 | implicit | Source root |
| `extensions/policy/src/doctor` | 38 | implicit | Module |
| `extensions/policy/src/doctor/scopes` | 8 | implicit | Module |
| `extensions/qa-channel` | 8 | js/ts | Module |
| `extensions/qa-channel/src` | 20 | implicit | Source root |
| `extensions/qa-lab` | 235 | js/ts | Module |
| `extensions/qa-lab/src/live-transports/discord` | 7 | implicit | Module |
| `extensions/qa-lab/src/live-transports/matrix/scenarios` | 44 | implicit | Module |
| `extensions/qa-lab/src/live-transports/matrix/substrate` | 24 | implicit | Module |
| `extensions/qa-lab/src/live-transports/shared` | 13 | implicit | Module |
| `extensions/qa-lab/src/live-transports/slack` | 18 | implicit | Module |
| `extensions/qa-lab/src/live-transports/telegram` | 11 | implicit | Module |
| `extensions/qa-lab/src/live-transports/whatsapp` | 21 | implicit | Module |
| `extensions/qa-lab/src/mantis` | 16 | implicit | Module |
| `extensions/qa-lab/src/providers` | 5 | js/ts | Module |
| `extensions/qa-lab/src/providers/aimock` | 3 | js/ts | Mock/fixture data |
| `extensions/qa-lab/src/providers/live-frontier` | 6 | js/ts | Module |
| `extensions/qa-lab/src/providers/mock-openai` | 11 | js/ts | Mock/fixture data |
| `extensions/qa-lab/src/providers/shared` | 8 | implicit | Module |
| `extensions/qa-lab/web/src` | 30 | implicit | Source root |
| `extensions/qianfan` | 5 | js/ts | Module |
| `extensions/qqbot` | 96 | js/ts | Module |
| `extensions/qqbot/src/bridge/commands` | 7 | implicit | Module |
| `extensions/qqbot/src/bridge/tools` | 4 | js/ts | Module |
| `extensions/qqbot/src/engine/access` | 6 | js/ts | Module |
| `extensions/qqbot/src/engine/adapter` | 6 | js/ts | Module |
| `extensions/qqbot/src/engine/api` | 12 | implicit | API endpoints |
| `extensions/qqbot/src/engine/approval` | 2 | js/ts | Module |
| `extensions/qqbot/src/engine/commands` | 10 | implicit | Module |
| `extensions/qqbot/src/engine/commands/builtin` | 11 | implicit | Module |
| `extensions/qqbot/src/engine/config` | 8 | implicit | Configuration |
| `extensions/qqbot/src/engine/gateway/stages` | 13 | js/ts | Module |
| `extensions/qqbot/src/engine/group` | 8 | implicit | Module |
| `extensions/qqbot/src/engine/messaging` | 29 | implicit | Module |
| `extensions/qqbot/src/engine/ref` | 6 | implicit | Module |
| `extensions/qqbot/src/engine/utils` | 31 | implicit | Utility functions |
| `extensions/qwen` | 15 | js/ts | Module |
| `extensions/raft` | 4 | js/ts | Module |
| `extensions/raft/src` | 9 | implicit | Source root |
| `extensions/reef` | 11 | js/ts | Module |
| `extensions/reef/protocol` | 21 | js/ts | Module |
| `extensions/reef/src` | 41 | implicit | Source root |
| `extensions/runway` | 3 | js/ts | Module |
| `extensions/searxng` | 2 | js/ts | Module |
| `extensions/searxng/src` | 6 | implicit | Source root |
| `extensions/senseaudio` | 4 | js/ts | Module |
| `extensions/sglang` | 6 | js/ts | Module |
| `extensions/signal` | 90 | js/ts | Module |
| `extensions/signal/src/monitor` | 14 | implicit | Module |
| `extensions/slack` | 23 | js/ts | Module |
| `extensions/slack/src` | 243 | js/ts | Source root |
| `extensions/slack/src/http` | 6 | js/ts | Module |
| `extensions/slack/src/monitor/events` | 24 | implicit | Module |
| `extensions/slack/src/monitor/message-handler` | 25 | implicit | Module |
| `extensions/sms` | 4 | js/ts | Module |
| `extensions/sms/src` | 26 | implicit | Source root |
| `extensions/stepfun` | 4 | js/ts | Module |
| `extensions/synology-chat` | 6 | js/ts | Module |
| `extensions/synology-chat/src` | 27 | implicit | Source root |
| `extensions/synthetic` | 6 | js/ts | Module |
| `extensions/talk-voice` | 3 | js/ts | Module |
| `extensions/tavily` | 4 | js/ts | Module |
| `extensions/tavily/src` | 10 | implicit | Source root |
| `extensions/teams-meetings` | 17 | js/ts | Module |
| `extensions/teams-meetings/src/transports` | 17 | implicit | Module |
| `extensions/telegram` | 28 | js/ts | Module |
| `extensions/telegram/src` | 401 | implicit | Source root |
| `extensions/telegram/src/bot` | 14 | implicit | Module |
| `extensions/telegram/src/miniapp` | 13 | implicit | Module |
| `extensions/tencent` | 11 | js/ts | Module |
| `extensions/thread-ownership` | 4 | js/ts | Module |
| `extensions/tlon` | 32 | js/ts | Module |
| `extensions/tlon/src/monitor` | 16 | js/ts | Module |
| `extensions/tlon/src/urbit` | 19 | implicit | Module |
| `extensions/together` | 8 | js/ts | Module |
| `extensions/tokenjuice` | 5 | js/ts | Module |
| `extensions/tts-local-cli` | 4 | js/ts | Module |
| `extensions/twitch` | 10 | js/ts | Module |
| `extensions/twitch/src` | 40 | implicit | Source root |
| `extensions/vault` | 8 | js/ts | Module |
| `extensions/venice` | 11 | js/ts | Module |
| `extensions/vercel-ai-gateway` | 9 | js/ts | Module |
| `extensions/vllm` | 10 | js/ts | Module |
| `extensions/voice-call` | 74 | js/ts | Module |
| `extensions/voice-call/src/manager` | 17 | implicit | Module |
| `extensions/voice-call/src/providers` | 11 | implicit | Module |
| `extensions/voice-call/src/providers/shared` | 5 | implicit | Module |
| `extensions/voice-call/src/providers/twilio` | 5 | implicit | Module |
| `extensions/voice-call/src/webhook` | 11 | implicit | Module |
| `extensions/volcengine` | 10 | js/ts | Module |
| `extensions/voyage` | 6 | js/ts | Module |
| `extensions/vydra` | 12 | js/ts | Module |
| `extensions/web-readability` | 3 | js/ts | Module |
| `extensions/webhooks` | 8 | js/ts | Module |
| `extensions/whatsapp` | 198 | js/ts | Module |
| `extensions/whatsapp/src/auto-reply` | 14 | implicit | Module |
| `extensions/whatsapp/src/auto-reply/monitor` | 39 | implicit | Module |
| `extensions/whatsapp/src/inbound` | 30 | implicit | Module |
| `extensions/workboard` | 5 | js/ts | Module |
| `extensions/workboard/src` | 35 | implicit | Source root |
| `extensions/xai` | 61 | js/ts | Module |
| `extensions/xai/src` | 15 | implicit | Source root |
| `extensions/xiaomi` | 11 | js/ts | Module |
| `extensions/zai` | 16 | js/ts | Module |
| `extensions/zalo` | 13 | js/ts | Module |
| `extensions/zalo/src` | 57 | implicit | Source root |
| `extensions/zalouser` | 11 | js/ts | Module |
| `extensions/zalouser/src` | 65 | implicit | Source root |
| `extensions/zoom-meetings` | 21 | js/ts | Module |
| `extensions/zoom-meetings/src/transports` | 16 | implicit | Module |
| `linkbots/lisa/ops` | 38 | implicit | Module |
| `linkbots/lisa/ops/deployment` | 5 | implicit | Module |
| `linkbots/lisa/ops/jobs/health` | 6 | implicit | Module |
| `linkbots/lisa/ops/jobs/maintenance` | 5 | implicit | Module |
| `linkbots/lisa/ops/jobs/time-management` | 6 | implicit | Module |
| `linkbots/lisa/ops/providers` | 23 | implicit | Module |
| `packages/acp-core/src` | 16 | js/ts | Source root |
| `packages/acp-core/src/runtime` | 8 | implicit | Module |
| `packages/agent-core/src` | 19 | js/ts | Source root |
| `packages/agent-core/src/harness` | 6 | implicit | Module |
| `packages/agent-core/src/harness/compaction` | 7 | implicit | Module |
| `packages/ai/src` | 13 | js/ts | Source root |
| `packages/ai/src/internal` | 9 | implicit | Module |
| `packages/ai/src/providers` | 72 | implicit | Module |
| `packages/ai/src/utils` | 21 | implicit | Utility functions |
| `packages/gateway-client/src` | 20 | js/ts | Source root |
| `packages/gateway-protocol/src` | 37 | js/ts | Source root |
| `packages/gateway-protocol/src/schema` | 77 | implicit | Module |
| `packages/llm-core/src` | 7 | js/ts | Source root |
| `packages/markdown-core/src` | 33 | js/ts | Source root |
| `packages/media-core/src` | 16 | js/ts | Source root |
| `packages/media-generation-core/src` | 8 | js/ts | Source root |
| `packages/media-understanding-common/src` | 13 | implicit | Source root |
| `packages/memory-host-sdk/src/host` | 97 | implicit | Module |
| `packages/model-catalog-core/src` | 13 | js/ts | Source root |
| `packages/net-policy/src` | 11 | js/ts | Source root |
| `packages/normalization-core/src` | 27 | js/ts | Source root |
| `packages/plugin-package-contract/src` | 2 | js/ts | Source root |
| `packages/plugin-sdk/src` | 25 | implicit | Source root |
| `packages/retry/src` | 2 | js/ts | Source root |
| `packages/sdk/src` | 11 | js/ts | Source root |
| `packages/speech-core/src` | 7 | implicit | Source root |
| `packages/terminal-core/src` | 32 | js/ts | Source root |
| `packages/tool-call-repair/src` | 10 | js/ts | Source root |
| `packages/workboard-contract/src` | 1 | js/ts | Source root |
| `qa/convex-credential-broker/convex` | 5 | implicit | Module |
| `scripts/dev` | 7 | implicit | Module |
| `scripts/docs-i18n` | 29 | implicit | Module |
| `scripts/e2e/lib/codex-media-path` | 7 | implicit | Module |
| `scripts/e2e/lib/fixtures` | 7 | implicit | Module |
| `scripts/e2e/lib/gateway-network` | 6 | implicit | Module |
| `scripts/e2e/lib/upgrade-survivor` | 5 | implicit | Module |
| `scripts/e2e/parallels` | 26 | implicit | Module |
| `scripts/github` | 12 | implicit | Module |
| `scripts/gitops/coordinator` | 4 | python | Module |
| `scripts/ide_development` | 19 | python | Module |
| `scripts/lib/cross-os-release-checks` | 12 | js/ts | Module |
| `scripts/lib/ts-topology` | 5 | implicit | Module |
| `scripts/mantis` | 8 | implicit | Module |
| `scripts/repro` | 6 | implicit | Module |
| `src` | 5152 | js/ts | Source root |
| `src/acp` | 57 | implicit | Module |
| `src/acp/control-plane` | 40 | implicit | Module |
| `src/acp/runtime` | 6 | implicit | Module |
| `src/agents/agent-hooks` | 10 | implicit | Module |
| `src/agents/agent-hooks/context-pruning` | 6 | implicit | Module |
| `src/agents/auth-profiles` | 85 | implicit | Module |
| `src/agents/cli-runner` | 52 | implicit | Module |
| `src/agents/command` | 37 | implicit | Module |
| `src/agents/embedded-agent-helpers` | 19 | implicit | Module |
| `src/agents/embedded-agent-runner/run` | 252 | implicit | Module |
| `src/agents/harness` | 45 | implicit | Module |
| `src/agents/runtime` | 3 | js/ts | Module |
| `src/agents/runtime-plan` | 19 | implicit | Module |
| `src/agents/sandbox` | 84 | implicit | Module |
| `src/agents/sessions` | 71 | js/ts | Module |
| `src/agents/sessions/compaction` | 3 | js/ts | Module |
| `src/agents/sessions/extensions` | 8 | js/ts | Module |
| `src/agents/sessions/tools` | 33 | js/ts | Module |
| `src/agents/test-helpers` | 23 | implicit | Test files |
| `src/agents/tools` | 208 | implicit | Module |
| `src/agents/utils` | 15 | implicit | Utility functions |
| `src/agents/worktrees` | 18 | implicit | Module |
| `src/audit` | 16 | implicit | Module |
| `src/auto-reply/reply/commands-acp` | 11 | implicit | Module |
| `src/auto-reply/reply/commands-subagents` | 9 | implicit | Module |
| `src/auto-reply/reply/queue` | 17 | implicit | Module |
| `src/auto-reply/usage-bar` | 8 | implicit | Module |
| `src/boards` | 7 | implicit | Module |
| `src/canvas` | 10 | implicit | Module |
| `src/channels/inbound-event` | 9 | implicit | Module |
| `src/channels/message` | 36 | js/ts | Module |
| `src/channels/message-access` | 14 | js/ts | Module |
| `src/channels/plugins` | 156 | js/ts | Module |
| `src/channels/plugins/contracts` | 53 | implicit | Module |
| `src/channels/plugins/contracts/test-helpers` | 15 | implicit | Test files |
| `src/channels/plugins/outbound` | 6 | implicit | Module |
| `src/channels/turn` | 14 | implicit | Module |
| `src/cli/capability-cli` | 12 | implicit | Module |
| `src/cli/cron-cli` | 16 | implicit | Module |
| `src/cli/daemon-cli` | 53 | implicit | Module |
| `src/cli/gateway-cli` | 22 | implicit | Module |
| `src/cli/node-cli` | 6 | implicit | Module |
| `src/cli/nodes-cli` | 18 | implicit | Module |
| `src/cli/program` | 72 | implicit | Module |
| `src/cli/program/message` | 13 | implicit | Module |
| `src/cli/update-cli` | 28 | implicit | Module |
| `src/commands/channel-setup` | 11 | implicit | Module |
| `src/commands/channels` | 16 | implicit | Module |
| `src/commands/doctor/cron` | 19 | js/ts | Module |
| `src/commands/doctor/shared` | 141 | implicit | Module |
| `src/commands/gateway-status` | 7 | implicit | Module |
| `src/commands/migrate` | 16 | implicit | Module |
| `src/commands/models` | 61 | implicit | Data models |
| `src/commands/onboard-non-interactive` | 6 | implicit | Module |
| `src/commands/onboard-non-interactive/local` | 14 | implicit | Module |
| `src/commands/status-all` | 22 | implicit | Module |
| `src/commitments` | 15 | implicit | Module |
| `src/config/sessions` | 184 | implicit | Module |
| `src/context-engine` | 14 | implicit | Module |
| `src/cron` | 136 | implicit | Module |
| `src/cron/isolated-agent` | 74 | implicit | Module |
| `src/cron/service` | 46 | implicit | Module |
| `src/cron/store` | 13 | implicit | State management |
| `src/daemon` | 75 | implicit | Module |
| `src/docs` | 7 | implicit | Documentation |
| `src/fleet` | 15 | implicit | Module |
| `src/flows` | 44 | implicit | Module |
| `src/gateway` | 700 | implicit | Module |
| `src/gateway/methods` | 6 | implicit | Module |
| `src/gateway/server-methods` | 322 | implicit | Module |
| `src/gateway/server/plugins-http` | 5 | implicit | Module |
| `src/gateway/server/ws-connection` | 33 | implicit | Module |
| `src/gateway/terminal` | 17 | implicit | Module |
| `src/gateway/worker-environments` | 101 | implicit | Module |
| `src/hooks` | 52 | implicit | React hooks |
| `src/image-generation` | 16 | implicit | Module |
| `src/infra/command-analysis` | 8 | implicit | Module |
| `src/infra/command-explainer` | 7 | js/ts | Module |
| `src/infra/format-time` | 7 | implicit | Module |
| `src/infra/net` | 29 | implicit | Module |
| `src/infra/net/proxy` | 10 | implicit | Module |
| `src/infra/outbound` | 139 | implicit | Module |
| `src/link-understanding` | 8 | implicit | Module |
| `src/llm/providers/stream-wrappers` | 20 | implicit | Module |
| `src/llm/utils/oauth` | 10 | js/ts | Module |
| `src/logging` | 78 | implicit | Module |
| `src/mcp` | 20 | implicit | Module |
| `src/media-understanding` | 74 | implicit | Module |
| `src/meeting-bot` | 33 | implicit | Module |
| `src/memory-host-sdk` | 12 | implicit | Module |
| `src/model-catalog` | 5 | js/ts | Module |
| `src/model-catalog/provider-index` | 6 | js/ts | Module |
| `src/music-generation` | 11 | implicit | Module |
| `src/node-host` | 48 | implicit | Module |
| `src/pairing` | 14 | implicit | Module |
| `src/plugin-sdk` | 536 | implicit | Module |
| `src/plugin-sdk/test-helpers` | 51 | implicit | Test files |
| `src/plugin-sdk/test-helpers/agents` | 7 | implicit | Test files |
| `src/plugin-state` | 16 | implicit | Module |
| `src/plugins/contracts` | 45 | implicit | Module |
| `src/plugins/runtime` | 52 | js/ts | Module |
| `src/plugins/test-helpers` | 6 | implicit | Test files |
| `src/process/supervisor` | 8 | js/ts | Module |
| `src/process/supervisor/adapters` | 6 | implicit | Module |
| `src/proxy-capture` | 14 | implicit | Module |
| `src/routing` | 18 | implicit | Module |
| `src/scripts` | 10 | implicit | Build/utility scripts |
| `src/secrets` | 153 | implicit | Module |
| `src/security` | 87 | implicit | Module |
| `src/sessions` | 46 | implicit | Module |
| `src/shared` | 125 | implicit | Module |
| `src/shared/text` | 18 | implicit | Module |
| `src/skills/discovery` | 15 | implicit | Module |
| `src/skills/lifecycle` | 26 | implicit | Module |
| `src/skills/loading` | 33 | implicit | Module |
| `src/skills/research` | 5 | implicit | Module |
| `src/skills/runtime` | 25 | implicit | Module |
| `src/skills/security` | 6 | implicit | Module |
| `src/skills/test-support` | 7 | implicit | Test files |
| `src/skills/workshop` | 36 | implicit | Module |
| `src/state` | 73 | implicit | State management |
| `src/status` | 18 | implicit | Module |
| `src/system-agent` | 72 | implicit | Module |
| `src/talk` | 54 | implicit | Module |
| `src/tasks` | 74 | implicit | Module |
| `src/test-helpers` | 10 | implicit | Test files |
| `src/test-utils` | 54 | implicit | Test files |
| `src/trajectory` | 14 | implicit | Module |
| `src/transcripts` | 8 | implicit | Module |
| `src/tts` | 24 | implicit | Module |
| `src/tui` | 53 | implicit | Module |
| `src/tui/components` | 18 | implicit | UI components |
| `src/types` | 5 | implicit | Type definitions |
| `src/utils` | 50 | implicit | Utility functions |
| `src/video-generation` | 17 | implicit | Module |
| `src/wizard/i18n` | 6 | js/ts | Module |
| `src/worker` | 21 | implicit | Module |
| `test/e2e/qa-lab/runtime/fixtures/voice-call-runtime-plugin` | 1 | js/ts | Test files |
| `test/fixtures/ts-topology/basic/src/public` | 2 | js/ts | Static assets |
| `test/helpers/agents` | 5 | implicit | Test files |
| `test/helpers/link-domain-fakes` | 6 | implicit | Test files |
| `test/helpers/paci-fake` | 7 | js/ts | Test files |
| `test/scripts` | 410 | implicit | Build/utility scripts |
| `test/vitest` | 178 | implicit | Test files |
| `ui/src/api` | 7 | implicit | API endpoints |
| `ui/src/app` | 76 | implicit | Module |
| `ui/src/components/browser` | 9 | implicit | Module |
| `ui/src/components/terminal` | 21 | implicit | Module |
| `ui/src/e2e` | 64 | implicit | Module |
| `ui/src/i18n` | 2 | js/ts | Module |
| `ui/src/i18n/lib` | 5 | implicit | Source root |
| `ui/src/i18n/locales` | 22 | implicit | Module |
| `ui/src/lib/agents` | 7 | js/ts | Module |
| `ui/src/lib/board/widgets` | 3 | js/ts | Module |
| `ui/src/lib/channels` | 2 | js/ts | Module |
| `ui/src/lib/chat` | 35 | implicit | Module |
| `ui/src/lib/config` | 4 | js/ts | Configuration |
| `ui/src/lib/cron` | 4 | js/ts | Module |
| `ui/src/lib/nodes` | 5 | js/ts | Module |
| `ui/src/lib/plugins` | 1 | js/ts | Module |
| `ui/src/lib/sessions` | 30 | js/ts | Module |
| `ui/src/lib/skill-workshop` | 1 | js/ts | Module |
| `ui/src/lib/skills` | 2 | js/ts | Module |
| `ui/src/lib/workboard` | 21 | js/ts | Module |
| `ui/src/lit` | 6 | implicit | Module |
| `ui/src/pages/about` | 5 | implicit | Module |
| `ui/src/pages/activity` | 7 | implicit | Module |
| `ui/src/pages/agents` | 19 | implicit | Module |
| `ui/src/pages/agents/memory` | 7 | implicit | Module |
| `ui/src/pages/apps` | 5 | implicit | Module |
| `ui/src/pages/channels` | 27 | implicit | Module |
| `ui/src/pages/chat` | 113 | implicit | Module |
| `ui/src/pages/chat/components` | 55 | implicit | UI components |
| `ui/src/pages/config` | 20 | implicit | Configuration |
| `ui/src/pages/cron` | 10 | implicit | Module |
| `ui/src/pages/custodian` | 17 | implicit | Module |
| `ui/src/pages/logs` | 7 | implicit | Module |
| `ui/src/pages/memory-import` | 5 | implicit | Module |
| `ui/src/pages/model-providers` | 10 | implicit | Module |
| `ui/src/pages/model-setup` | 15 | implicit | Module |
| `ui/src/pages/new-session` | 28 | implicit | Module |
| `ui/src/pages/nodes` | 11 | implicit | Module |
| `ui/src/pages/plugin` | 8 | implicit | Module |
| `ui/src/pages/plugins` | 9 | implicit | Module |
| `ui/src/pages/profile` | 10 | implicit | Module |
| `ui/src/pages/sessions` | 11 | implicit | Module |
| `ui/src/pages/skill-workshop` | 19 | implicit | Module |
| `ui/src/pages/tasks` | 5 | implicit | Module |
| `ui/src/pages/usage` | 25 | implicit | Module |
| `ui/src/pages/workboard` | 12 | implicit | Module |
| `ui/src/test-helpers` | 15 | implicit | Test files |
| `ui/src/test-helpers/app-sidebar-cases` | 17 | implicit | Test files |

## When Docs Seem Stale

If documentation seems outdated or inconsistent with the code:

1. **Regenerate docs:**
   ```bash
   agentlens
   ```

2. **Regenerate with diff mode** (faster, only changed files):
   ```bash
   agentlens --diff main
   ```

3. **Check freshness status:**
   ```bash
   agentlens --check
   ```

4. **Force full regeneration** (ignore cache):
   ```bash
   agentlens --force
   ```

## Quick Reference

| Metric | Value |
| ------ | ----- |
| Total files | 23700 |
| Modules | 551 |
| Warnings | 230 |

---

*Generated by [agentlens](https://github.com/nguyenphutrong/agentlens)*
