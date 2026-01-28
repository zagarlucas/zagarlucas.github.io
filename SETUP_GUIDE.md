# Setup Guide

Follow these steps to initialize and extend this project.

## 1. Initial Setup

Assume you have the generated structure in your project folder.

```bash
# Navigate to the project
cd next-feature-architecture

# Install dependencies
npm install

# Initialize Playwright (for first time use)
npx playwright install --with-deps
```

## 2. Creating a New Feature

When adding a new functionality (e.g., "Users"):

1. Create a folder in `src/features/users`.
2. Add necessary subfolders: `components`, `hooks`, `services`, `types`.
3. Export the feature's main components from an `index.ts` file within the feature folder for clean imports.

## 3. Using Path Aliases

Use the following aliases to avoid deep nesting:

- `@/*` -> `src/*`
- `@features/*` -> `src/features/*`
- `@components/*` -> `src/components/*`
- `@lib/*` -> `src/lib/*`

Example:
```typescript
import { Button } from '@components/ui/Button';
import { useUser } from '@features/users/hooks/useUser';
```

## 4. Deployment to Vercel

1. Push your code to a GitHub repository.
2. Connect the repository to Vercel.
3. Vercel will automatically detect the Next.js setup.
4. Set the build command to `npm run build` if not automatically detected.
