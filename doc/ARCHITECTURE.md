# Project architecture

Here's a quick starting point I have in mind for the project structure. The core idea is that all Notion logic should be
isolated in Typescript modules that know nothing about the CLI, Express, or whatever frontend I might add.

```
auto-music-butler/
│
├─ doc/
│
├─ src/
│  ├─ core/
│  │  ├─ notion/
│  │  ├─ usecases/
│  │  └─ domain/
│  │
│  ├─ scripts/
│  │
│  ├─ api/
│  │  └─ server.ts
│  │
│  └─ config/
│     └─ env.ts
│
├─ .gitignore
├─ package.json
├─ tsconfig.json
└─ .env
```

## `doc`

Documentation and context for AI.

## `src/core/` — the heart of the project

**What should go here:**

- Notion client setup
- Database queries
- Mapping relations
- Automations and business logic
- Domain types

**What does not go here:**

- Express
- Frontend
- CLI parsing
- HTTP requests
- UI concerns

## `core/notion/`

**Infrastructure layer**

- API client initialization
- Low-level fetch/query helpers
- Pagination handling
- Rate-limit safety

## `core/usecases/`

- Business logic
- Automations

## `core/domain/`

- Database models
- Typed representations of Notion rows

## `src/scripts/` — One-off entry points

- Each file = one runnable script
- Imports from core
- Minimal logic
- Prints to console
- Exits

## `src/api/`

Express lives here (later)

## `src/config/`

Along with root `.env` file, centralize...

- Environment variables
- Things like database IDs
- Mode flags (dry-run, etc.)
