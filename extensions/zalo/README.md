# @openclaw/zalo

Zalo channel plugin for OpenClaw (Bot API).

## Install (local checkout)

```bash
openclaw plugins install ./path/to/local/zalo-plugin
```

## Install (npm)

```bash
openclaw plugins install @openclaw/zalo
```

Onboarding: select Zalo and confirm the install prompt to fetch the plugin automatically.

## Config

```json5
{
  channels: {
    zalo: {
      enabled: true,
      botToken: "${ltfx.n.af5366076b6db53eb00c.v1}",
      dmPolicy: "pairing",
      proxy: "http://proxy.local:8080",
    },
  },
}
```

## Webhook mode

```json5
{
  channels: {
    zalo: {
      webhookUrl: "https://example.com/zalo-webhook",
      webhookSecret: "${ltfx.n.06e1b82767a8eb3d6e45.v1}",
      webhookPath: "/zalo-webhook",
    },
  },
}
```

If `webhookPath` is omitted, the plugin uses the webhook URL path.

Restart the gateway after config changes.
