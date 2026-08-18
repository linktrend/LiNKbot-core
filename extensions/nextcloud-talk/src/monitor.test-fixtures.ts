// Nextcloud Talk plugin module implements monitor fixtures behavior.
import { generateNextcloudTalkSignature } from "./signature.js";

export function createSignedCreateMessageRequest(params?: { backend?: string }) {
  const payload = {
    type: "Create",
    actor: { type: "Person", id: "alice", name: "Alice" },
    object: {
      type: "Note",
      id: "msg-1",
      name: "hello",
      content: "hello",
      mediaType: "text/plain",
    },
    target: { type: "Collection", id: "room-1", name: "Room 1" },
  };
  const body = JSON.stringify(payload);
  const { random, signature } = generateNextcloudTalkSignature({
    body,
    secret: `ltfx.n.7b4005fa015fb768d686.v1`, // pragma: allowlist secret
  });
  return {
    body,
    headers: {
      "content-type": "application/json",
      "x-nextcloud-talk-random": random,
      "x-nextcloud-talk-signature": signature,
      "x-nextcloud-talk-backend": params?.backend ?? "https://nextcloud.example",
    },
  };
}
