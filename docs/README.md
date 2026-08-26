# Documentation Structure

A kanban-style documentation system for tracking work.

## Folder Structure

| Folder | Purpose |
|--------|---------|
| `backlog/` | Ideas and plans not yet started |
| `active/` | Currently in progress |
| `done/` | Completed work |
| `done/archive/` | Older completed work worth keeping |
| `reference/` | Evergreen docs (architecture, runbooks) |

## Workflow

1. New idea -> `backlog/`
2. Start work -> move to `active/`
3. Finish -> move to `done/`
4. Old but useful -> move to `done/archive/`
5. No longer needed -> delete

## Naming Conventions

- Use lowercase with hyphens: `user-auth.md`, `api-refactor/`
- Date prefix for time-sensitive docs: `2026-01-security-audit.md`
- Feature folders should have a main doc such as `PRD.md`, `README.md`, or `spec.md`
