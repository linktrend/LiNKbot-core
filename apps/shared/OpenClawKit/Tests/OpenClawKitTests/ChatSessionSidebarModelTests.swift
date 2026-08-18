import Foundation
import Testing
@testable import OpenClawChatUI

@MainActor
struct ChatSessionSidebarModelTests {
    private func entry(
        key: String,
        displayName: String? = nil,
        updatedAt: Double? = nil,
        pinned: Bool? = nil,
        archived: Bool? = nil,
        unread: Bool? = nil,
        category: String? = nil,
        parentSessionKey: String? = nil,
        spawnedBy: String? = nil,
        childSessions: [String]? = nil,
        status: String? = nil,
        hasActiveRun: Bool? = nil,
        hasActiveSubagentRun: Bool? = nil) -> OpenClawChatSessionEntry
    {
        OpenClawChatSessionEntry(
            key: key,
            kind: nil,
            displayName: displayName,
            surface: nil,
            subject: nil,
            room: nil,
            space: nil,
            updatedAt: updatedAt,
            sessionId: nil,
            systemSent: nil,
            abortedLastRun: nil,
            thinkingLevel: nil,
            verboseLevel: nil,
            inputTokens: nil,
            outputTokens: nil,
            totalTokens: nil,
            modelProvider: nil,
            model: nil,
            contextTokens: nil,
            category: category,
            pinned: pinned,
            archived: archived,
            unread: unread,
            parentSessionKey: parentSessionKey,
            spawnedBy: spawnedBy,
            childSessions: childSessions,
            status: status,
            hasActiveRun: hasActiveRun,
            hasActiveSubagentRun: hasActiveSubagentRun)
    }

    @Test func `pinned sessions get their own section, rest sorted by recency`() {
        let sections = ChatSessionSidebarModel.sections(
            sessions: [
                self.entry(key: "a", updatedAt: 100),
                self.entry(key: "b", updatedAt: 300, pinned: true),
                self.entry(key: "c", updatedAt: 200),
            ],
            currentSessionKey: "a",
            query: "")

        #expect(sections.map(\.id) == ["pinned", "recent"])
        #expect(sections[0].nodes.map(\.session.key) == ["b"])
        #expect(sections[1].nodes.map(\.session.key) == ["c", "a"])
        #expect(sections[1].title == "Recent")
    }

    @Test func `single unpinned section carries no title`() {
        let sections = ChatSessionSidebarModel.sections(
            sessions: [self.entry(key: "a", updatedAt: 100)],
            currentSessionKey: "a",
            query: "")

        #expect(sections.count == 1)
        #expect(sections[0].title == nil)
    }

    @Test func `gateway groups render between pinned and recent and retain trees`() {
        let sections = ChatSessionSidebarModel.sections(
            sessions: [
                self.entry(key: "pinned", pinned: true),
                self.entry(key: "parent", category: "Projects", childSessions: ["child"]),
                self.entry(key: "child", category: "Projects", parentSessionKey: "parent"),
                self.entry(key: "recent"),
            ],
            currentSessionKey: "recent",
            groups: [OpenClawChatSessionGroup(name: "Projects", position: 0)],
            query: "")

        #expect(sections.map(\.id) == ["pinned", "group:Projects", "recent"])
        #expect(sections[1].nodes.map(\.id) == ["parent"])
        #expect(sections[1].nodes[0].children.map(\.id) == ["child"])
    }

    @Test func `group placement uses exact gateway category names`() {
        let sections = ChatSessionSidebarModel.sections(
            sessions: [
                self.entry(key: "exact", category: "Projects"),
                self.entry(key: "case", category: "projects"),
                self.entry(key: "spaces", category: " Projects "),
            ],
            currentSessionKey: "exact",
            groups: [OpenClawChatSessionGroup(name: "Projects", position: 0)],
            query: "")

        #expect(sections.map(\.id) == ["group:Projects", "recent"])
        #expect(sections[0].nodes.map(\.session.key) == ["exact"])
        #expect(Set(sections[1].nodes.map(\.session.key)) == Set(["case", "spaces"]))
    }

    @Test func `pinned descendants move to pinned section independently`() {
        let sections = ChatSessionSidebarModel.sections(
            sessions: [
                self.entry(key: "parent", updatedAt: 200),
                self.entry(key: "child", updatedAt: 100, pinned: true, parentSessionKey: "parent"),
            ],
            currentSessionKey: "parent",
            query: "")

        #expect(sections.map(\.id) == ["pinned", "recent"])
        #expect(sections[0].nodes.map(\.id) == ["child"])
        #expect(sections[1].nodes.map(\.id) == ["parent"])
    }

    @Test func `hides onboarding and archived sessions, keeps the active one`() {
        let sections = ChatSessionSidebarModel.sections(
            sessions: [
                self.entry(key: "${ltfx.n.4c5763339ef3bfce2cb5.v1}", updatedAt: 500),
                self.entry(key: "gone", updatedAt: 400, archived: true),
                self.entry(key: "main", updatedAt: 300),
            ],
            currentSessionKey: "main",
            query: "")

        // Default (macOS) sections keep the main row; only Home-row sidebars
        // opt into excludesMainSession.
        #expect(sections.flatMap(\.nodes).map(\.session.key) == ["main"])
    }

    @Test func `active session gets a placeholder row before lists load`() {
        let sections = ChatSessionSidebarModel.sections(
            sessions: [],
            currentSessionKey: "agent:main:main",
            query: "")

        #expect(sections.flatMap(\.nodes).map(\.session.key) == ["agent:main:main"])
    }

    @Test func `main aliases select the resolved row without adding a placeholder`() {
        let sessions = [self.entry(key: "${ltfx.n.6a3d18210e5275800cdc.v1}", updatedAt: 100)]
        let sections = ChatSessionSidebarModel.sections(
            sessions: sessions,
            currentSessionKey: "main",
            mainSessionKey: "agent:default:main",
            activeAgentID: "default",
            excludesMainSession: true,
            query: "")

        #expect(sections.flatMap(\.nodes).isEmpty)
        #expect(ChatSessionSidebarModel.selectedSessionKey(
            sessions: sessions,
            currentSessionKey: "main",
            mainSessionKey: "agent:default:main",
            activeAgentID: "default") == "agent:default:main")
    }

    @Test func `agent scope keeps active agent and unprefixed sessions`() {
        let sections = ChatSessionSidebarModel.sections(
            sessions: [
                self.entry(key: "${ltfx.n.3cd054c375bd03a675ec.v1}", updatedAt: 400),
                self.entry(key: "${ltfx.n.7a9722dd6c2f91cd2c4e.v1}", updatedAt: 300),
                self.entry(key: "${ltfx.n.6fc091a51a5ef73f57bf.v1}", updatedAt: 200),
                self.entry(key: "${ltfx.n.6cba0bd966bf66a0bf56.v1}", updatedAt: 100),
            ],
            currentSessionKey: "main",
            mainSessionKey: "agent:ops:main",
            activeAgentID: "ops",
            excludesMainSession: true,
            query: "")

        #expect(sections.flatMap(\.nodes).map(\.session.key) == ["agent:ops:deploy", "global-tool"])
        #expect(ChatSessionSidebarModel.isSessionInActiveAgentScope(
            key: "${ltfx.n.9f82f491714632fb5a88.v1}",
            activeAgentID: "ops"))
        #expect(!ChatSessionSidebarModel.isSessionInActiveAgentScope(
            key: "${ltfx.n.6fc091a51a5ef73f57bf.v1}",
            activeAgentID: "ops"))
        #expect(ChatSessionSidebarModel.isSessionInActiveAgentScope(
            key: "${ltfx.n.6cba0bd966bf66a0bf56.v1}",
            activeAgentID: "ops"))
    }

    @Test func `main row is excluded while its children are promoted`() {
        let sections = ChatSessionSidebarModel.sections(
            sessions: [
                self.entry(
                    key: "${ltfx.n.3cd054c375bd03a675ec.v1}",
                    updatedAt: 300,
                    childSessions: ["agent:ops:child"]),
                self.entry(
                    key: "${ltfx.n.9f7be9b3e0b0d6f522d7.v1}",
                    updatedAt: 200,
                    parentSessionKey: "agent:ops:main"),
            ],
            currentSessionKey: "main",
            mainSessionKey: "agent:ops:main",
            activeAgentID: "ops",
            excludesMainSession: true,
            query: "")

        #expect(sections.flatMap(\.nodes).map(\.session.key) == ["agent:ops:child"])
    }

    @Test func `global aliases select their agent wrapped row`() {
        let sessions = [
            self.entry(key: "global", updatedAt: 200),
            self.entry(key: "${ltfx.n.d116636f6900e6640747.v1}", updatedAt: 100, archived: true),
        ]
        let sections = ChatSessionSidebarModel.sections(
            sessions: sessions,
            currentSessionKey: "global",
            mainSessionKey: "agent:main:main",
            activeAgentID: "ops",
            query: "")

        #expect(ChatSessionSidebarModel.selectedSessionKey(
            sessions: sessions,
            currentSessionKey: "global",
            mainSessionKey: "agent:main:main",
            activeAgentID: "ops") == "agent:ops:global")
        #expect(sections.flatMap(\.nodes).map(\.session.key) == ["agent:ops:global"])
    }

    @Test func `query filters on display name and key`() {
        let sections = ChatSessionSidebarModel.sections(
            sessions: [
                self.entry(key: "${ltfx.n.1c3cf2ca795da96c63e1.v1}", displayName: "Deep Research", updatedAt: 200),
                self.entry(key: "${ltfx.n.6d9217fe77c7f11d9cc9.v1}", updatedAt: 100),
            ],
            currentSessionKey: "agent:main:main",
            query: "research")

        #expect(sections.flatMap(\.nodes).map(\.session.key) == ["agent:main:research"])
    }

    @Test func `session keys render as human names`() {
        #expect(ChatSessionSidebarModel.displayName(forKey: "agent:main:main") == "main")
        #expect(ChatSessionSidebarModel.displayName(forKey: "agent:ops:standup") == "standup (ops)")
        #expect(ChatSessionSidebarModel.displayName(forKey: "global") == "global")
    }

    @Test func `display name prefers explicit names over key prettifying`() {
        let named = self.entry(key: "${ltfx.n.a3cd175fa3789e2476ba.v1}", displayName: "  Weekly Sync  ")
        #expect(ChatSessionSidebarModel.displayName(for: named) == "Weekly Sync")

        let unnamed = self.entry(key: "${ltfx.n.a3cd175fa3789e2476ba.v1}")
        #expect(ChatSessionSidebarModel.displayName(for: unnamed) == "x")
    }

    @Test func `delete excludes main aliases and allows ordinary or selected global sessions`() {
        let mainKey = "agent:default:main"

        #expect(!ChatSessionSidebarModel.canDeleteSession(key: "main", mainSessionKey: mainKey))
        #expect(!ChatSessionSidebarModel.canDeleteSession(key: "GLOBAL", mainSessionKey: mainKey))
        #expect(!ChatSessionSidebarModel.canDeleteSession(key: mainKey, mainSessionKey: mainKey))
        #expect(ChatSessionSidebarModel.canDeleteSession(key: "scratch", mainSessionKey: mainKey))
        #expect(ChatSessionSidebarModel.canDeleteSession(
            key: "${ltfx.n.0416cf5aec69928a13cd.v1}",
            mainSessionKey: mainKey))
    }

    @Test func `session list hierarchy fields decode with gateway spellings`() throws {
        let data = try #require("""
        {
          "key": "${ltfx.n.28760ff0218c403139e7.v1}",
          "parentSessionKey": "agent:main:main",
          "spawnedBy": "agent:main:controller",
          "childSessions": ["agent:main:grandchild"],
          "status": "running",
          "hasActiveRun": true,
          "hasActiveSubagentRun": true,
          "lastInteractionAt": 1700000000000,
          "startedAt": 1700000001000,
          "endedAt": 1700000003000,
          "runtimeMs": 2000,
          "agentRuntime": {"id": "codex", "fallback": "openclaw", "source": "session"},
          "worktree": {"id": "wt-1", "branch": "feature/chat", "repoRoot": "/repo"}
        }
        """.data(using: .utf8))

        let entry = try JSONDecoder().decode(OpenClawChatSessionEntry.self, from: data)

        #expect(entry.parentSessionKey == "agent:main:main")
        #expect(entry.spawnedBy == "agent:main:controller")
        #expect(entry.childSessions == ["agent:main:grandchild"])
        #expect(entry.status == "running")
        #expect(entry.hasActiveRun == true)
        #expect(entry.hasActiveSubagentRun == true)
        #expect(entry.lastInteractionAt == 1_700_000_000_000)
        #expect(entry.startedAt == 1_700_000_001_000)
        #expect(entry.endedAt == 1_700_000_003_000)
        #expect(entry.runtimeMs == 2000)
        #expect(entry.agentRuntime?.id == "codex")
        #expect(entry.worktree?.id == "wt-1")
        #expect(entry.worktree?.branch == "feature/chat")
        #expect(entry.worktree?.repoRoot == "/repo")
    }

    @Test func `inspector derives gateway metadata without composer overrides`() {
        let session = OpenClawChatSessionEntry(
            key: "${ltfx.n.6e7d90df40ec29f20d3a.v1}",
            kind: "subagent",
            displayName: "Review",
            surface: nil,
            subject: nil,
            room: nil,
            space: nil,
            updatedAt: 1_700_000_000_000,
            sessionId: "session-1",
            systemSent: nil,
            abortedLastRun: nil,
            thinkingLevel: "high",
            verboseLevel: "full",
            inputTokens: nil,
            outputTokens: nil,
            totalTokens: nil,
            modelProvider: "openai",
            model: "gpt-5.6",
            contextTokens: nil,
            category: "Projects",
            hasActiveRun: true,
            worktree: OpenClawChatSessionWorktree(
                id: "wt-1",
                branch: "feature/review",
                repoRoot: "/repo"),
            runtimeMs: 1500,
            agentRuntime: OpenClawChatAgentRuntime(id: "codex", fallback: nil, source: "session"))

        let details = ChatSessionInspectorDetails(session: session)

        #expect(details.title == "Review")
        #expect(details.agentID == "reviewer")
        #expect(details.group == "Projects")
        #expect(details.runState == "Running")
        #expect(details.model == "gpt-5.6")
        #expect(details.provider == "openai")
        #expect(details.runtime == "codex")
        #expect(details.runDurationMs == 1500)
        #expect(details.worktreeBranch == "feature/review")
    }

    @Test func `tree nests children and bubbles run failure and unread badges`() {
        let nodes = ChatSessionSidebarModel.tree(from: [
            self.entry(key: "parent", childSessions: ["child"]),
            self.entry(
                key: "child",
                spawnedBy: "parent",
                childSessions: ["grandchild"],
                status: "running"),
            self.entry(key: "${ltfx.n.713b4f18f0e1371cf3f9.v1}", unread: true, parentSessionKey: "child", status: "failed"),
        ])

        #expect(nodes.map(\.id) == ["parent"])
        #expect(nodes[0].children.map(\.id) == ["child"])
        #expect(nodes[0].children[0].children.map(\.id) == ["grandchild"])
        #expect(nodes[0].badges == .init(runningCount: 1, failedCount: 1, hasUnread: true))
        #expect(nodes[0].children.contains { $0.badges.hasUnread })
    }

    @Test func `tree breaks cycles without dropping or duplicating sessions`() {
        let nodes = ChatSessionSidebarModel.tree(from: [
            self.entry(key: "a", parentSessionKey: "b", childSessions: ["b"]),
            self.entry(key: "b", parentSessionKey: "a", childSessions: ["a"]),
        ])

        func keys(_ nodes: [ChatSessionSidebarModel.Node]) -> [String] {
            nodes.flatMap { [$0.id] + keys($0.children) }
        }
        #expect(keys(nodes) == ["a", "b"])
    }

    @Test func `omitted gateway child roster excludes stale persisted parent metadata`() {
        let nodes = ChatSessionSidebarModel.tree(from: [
            self.entry(key: "parent"),
            self.entry(key: "${ltfx.n.ec7a7a6388339e5a3243.v1}", parentSessionKey: "parent"),
        ])

        #expect(nodes.map(\.id) == ["parent", "stale-child"])
    }

    @Test func `orphaned parents remain visible as roots`() {
        let nodes = ChatSessionSidebarModel.tree(from: [
            self.entry(key: "orphan", parentSessionKey: "missing"),
            self.entry(key: "root"),
        ])

        #expect(nodes.map(\.id) == ["orphan", "root"])
    }

    @Test func `sessions without hierarchy data keep flat ordering`() {
        let nodes = ChatSessionSidebarModel.tree(from: [
            self.entry(key: "a"),
            self.entry(key: "b"),
        ])

        #expect(nodes.map(\.id) == ["a", "b"])
        #expect(nodes.filter { !$0.children.isEmpty }.isEmpty)
    }

    @Test func `main aliases cannot archive while ordinary sessions can`() {
        #expect(!ChatSessionSidebarModel.canArchiveSession(
            self.entry(key: "main"),
            mainSessionKey: "agent:main:main"))
        #expect(!ChatSessionSidebarModel.canArchiveSession(
            self.entry(key: "global"),
            mainSessionKey: "agent:main:main"))
        #expect(!ChatSessionSidebarModel.canArchiveSession(
            self.entry(key: "${ltfx.n.6d9217fe77c7f11d9cc9.v1}"),
            mainSessionKey: "agent:main:main"))
        #expect(ChatSessionSidebarModel.canArchiveSession(
            self.entry(key: "${ltfx.n.28760ff0218c403139e7.v1}"),
            mainSessionKey: "agent:main:main"))
        #expect(!ChatSessionSidebarModel.canArchiveSession(
            self.entry(key: "${ltfx.n.dc07a04b056c0647a539.v1}", status: "running"),
            mainSessionKey: "agent:main:main"))
        #expect(!ChatSessionSidebarModel.canArchiveSession(
            self.entry(key: "${ltfx.n.74e68db8ce1ca0729443.v1}", hasActiveSubagentRun: true),
            mainSessionKey: "agent:main:main"))
    }
}
