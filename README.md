# Next.js Boilerplate

A production-ready Next.js starter with TypeScript, Tailwind CSS, shadcn/ui, ESLint, Prettier, and Husky.

## Stack

| Tool | Purpose |
|------|---------|
| [Next.js 15](https://nextjs.org) | React framework (App Router) |
| [TypeScript](https://typescriptlang.org) | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com) | Accessible component library |
| [ESLint](https://eslint.org) | Linting |
| [Prettier](https://prettier.io) | Code formatting |
| [Husky](https://typicode.github.io/husky) | Git hooks |
| [lint-staged](https://github.com/lint-staged/lint-staged) | Run linters on staged files |
| [Commitlint](https://commitlint.js.org) | Enforce conventional commits |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Git Hooks (Husky)

- **pre-commit** — runs `lint-staged` (ESLint + Prettier on staged files)
- **commit-msg** — enforces [Conventional Commits](https://www.conventionalcommits.org/)

### Commit format

```
type(scope): description

# Examples:
feat: add user authentication
fix(api): handle null response
chore: update dependencies
```

## Adding shadcn Components

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
```

## Project Structure

```
├── app/              # Next.js App Router pages & layouts
├── components/
│   └── ui/           # shadcn/ui components
├── hooks/            # Custom React hooks
├── lib/
│   └── utils.ts      # cn() utility and helpers
└── public/           # Static assets
```

## Scripts

```bash
npm run dev       # Start dev server
npm run build     # Production build
npm run lint      # Run ESLint
npm run format    # Run Prettier
```

## Stucture Folder

```bash
my-app/
├── app/                        # App Router (pages, layouts, routes)
│   ├── (auth)/                 # Route group - auth pages
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── register/
│   │       └── page.tsx
│   ├── (dashboard)/            # Route group - protected pages
│   │   ├── layout.tsx
│   │   └── dashboard/
│   │       └── page.tsx
│   ├── api/                    # API route handlers
│   │   └── auth/
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
│
├── components/                 # Reusable UI components
│   ├── ui/                     # shadcn/ui primitives (Button, Input, etc.)
│   ├── layout/                 # Structural components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── sidebar.tsx
│   └── shared/                 # Cross-feature shared components
│       ├── loading-spinner.tsx
│       └── error-boundary.tsx
│
├── features/                   # Feature-based modules (colocation pattern)
│   └── auth/
│       ├── components/         # Feature-specific components
│       ├── hooks/              # Feature-specific hooks
│       ├── actions.ts          # Server actions
│       ├── api.ts              # API calls
│       ├── schema.ts           # Zod schemas / validation
│       └── types.ts            # Feature types
│
├── hooks/                      # Global custom React hooks
│   ├── use-debounce.ts
│   └── use-local-storage.ts
│
├── lib/                        # Utilities & third-party setup
│   ├── utils.ts                # cn() and general helpers
│   ├── db.ts                   # Database client (Prisma, Drizzle, etc.)
│   └── auth.ts                 # Auth config (NextAuth, Clerk, etc.)
│
├── store/                      # Global state (Zustand, Redux, etc.)
│   ├── index.ts
│   └── slices/
│
├── types/                      # Global TypeScript types & interfaces
│   ├── index.ts
│   └── api.ts
│
├── constants/                  # App-wide constants & config
│   └── index.ts
│
└── public/                     # Static assets
    ├── icons/
    └── images/
```

