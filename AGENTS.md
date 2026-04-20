# AGENTS.md

## Task instructions

**⚠️ CRITICAL DISTINCTION:**
- **"tickets"** = `tk` CLI (persistent, stored in `.tickets/` directory)
- **"issues"** = GitHub issues via `gh` CLI
- When a user says "tickets," ALWAYS use `tk`. When they say "issues," ALWAYS use `gh`.

This project uses a **hybrid approach** to task management:

### tk (persistent tickets)
- CLI ticket system stored in `.tickets/` directory
- Run `tk help` for command reference
- Reference: https://github.com/wedow/ticket

**IMPORTANT:** `tk` commands must be run from the repository root (where `.tickets/` directory lives). Running from subdirectories will fail with "ticket not found" errors.

**Common commands:**
- `tk ls` - List tickets (NOT `tk list` - that command doesn't exist)
- `tk create "Title" --type <type>` - Create new ticket
- `tk start <id>` - Start working on a ticket
- `tk close <id>` - Close a ticket

**Use `tk` for:**
- Multi-session work that spans conversations
- Complex features with dependencies
- Planning project structure and blockers
- Work that needs to survive conversation compaction

### TodoWrite (ephemeral, in-conversation)
- Built-in Claude Code tool for real-time progress visibility
- Disappears after conversation ends

**Use `TodoWrite` for:**
- Simple tasks completing in one conversation
- Showing real-time progress while working on a `tk` ticket
- Quick bug fixes or single-file changes

### Hybrid workflow example:
```bash
# IMPORTANT: Always run tk from repo root
cd /Users/richardhess/github/anthropic/devtools

# Create persistent tickets for complex work
tk create "Feature X" --type feature
tk create "Prerequisite Y" --type task
tk dep <feature-id> <prereq-id>

# When starting work, use TodoWrite to show progress
tk start <prereq-id>
# [Use TodoWrite tool to show step-by-step progress]
tk close <prereq-id>
```

**Rule of thumb:** If it won't complete in one conversation, use `tk`. Always use `TodoWrite` to show real-time progress on current work.

## Github instructions
- Always use `gh` when you need to read/update a github repo (issues, commit, push, etc).

## Programming Languages

### Services (MCP servers, REST APIs, HTTP/Web servers)
- **Always use Python + FastMCP + FastAPI**
- FastMCP handles MCP protocol; FastAPI for REST endpoints

### CLI Tools & Scripts
- **Always use Python** for:
  - Command-line tools (argparse-based)
  - Automation scripts (file operations, data processing)
  - Build/deployment scripts
  - Git hooks
- Examples: `tests/generate-test-url.py`, data generators, deployment tools

### Tests
- **Always use Python + FastMCP** for:
  - MCP server testing (all MCP-related tests)
  - FastMCP test client matches the implementation stack
- **Prefer Python** for:
  - Integration tests
  - End-to-end tests
  - Test harnesses
- **Use Node.js only when**:
  - Testing Node.js modules directly (imports/requires)
  - Testing Hono endpoints or middleware (non-MCP services)

### Browser Code
- Use JavaScript (ES6 modules, no build)
- Location: `app/js/**`

### Existing Code
- **Grandfathered**: Don't rewrite existing tools to match language rules
- Fix bugs, add features, refactor - keep original language
- **Only convert when explicitly requested** by user
- **New work**: Follow rules above regardless of nearby file languages

