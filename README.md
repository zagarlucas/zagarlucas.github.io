# Next.js Feature-Based Architecture

A production-ready Next.js Full-Stack architecture designed for scalability, maintainability, and testing excellence.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Testing:** Vitest (Unit/Integration) + Testing Library + Playwright (E2E)
- **CI/CD:** GitHub Actions
- **Deployment:** Vercel

## 📁 Project Structure

The project follows a **Feature-based** architecture. Components, hooks, and logic are grouped by functionality.

```
src/
├── app/              # Next.js App Router (Routes & Layouts)
├── components/       # Shared UI components (Button, Input, etc.)
├── features/         # Feature-specific logic
│   ├── auth/         # Example: Authentication feature
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── types/
│   └── dashboard/    # Example: Dashboard feature
├── hooks/            # Shared custom hooks
├── lib/              # Shared utilities and configurations
├── types/            # Shared TypeScript definitions
└── test/             # Global test setup
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production (SSG)
- `npm run test`: Run unit tests with Vitest
- `npm run test:e2e`: Run E2E tests with Playwright
- `npm run lint`: Run ESLint

## 🧪 Testing Strategy

- **Unit/Integration:** Vitest + React Testing Library for component and hook logic.
- **E2E:** Playwright for critical user flows across different browsers.

## 📜 Best Practices

- Use **Path Aliases** (`@/*`, `@features/*`) for cleaner imports.
- Keep components small and focused.
- Features should be self-contained.
- Always write tests for new features.
# muzeeh.github.io
