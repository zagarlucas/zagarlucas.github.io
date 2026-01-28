# Best Practices

## 🏗️ Architecture

- **Isolation:** Features should depend on shared components and utilities, but avoid depending on other features directly. If two features need to share logic, move that logic to `src/lib` or `src/hooks`.
- **Stateless:** Since the requirement is stateless, ensure all data is handled via props, local state, or external APIs without local persistence.

## 🎨 Styling (Tailwind CSS)

- Use the `cn` utility (provided in `src/lib/utils.ts`) for merging Tailwind classes.
- Follow a consistent naming convention for custom theme colors in `tailwind.config.ts`.

## 🧪 Testing

- **Co-location:** Place test files close to the code they test (e.g., `Button.tsx` and `Button.test.tsx`).
- **E2E:** Focus E2E tests on "Happy Path" scenarios and critical failures.

## 📦 Components

- Prefer **Functional Components** and **Hooks**.
- Use **TypeScript interfaces** for all component props.
- Keep components small. If a component exceeds 100 lines, consider breaking it down.
