# AGENTS.md

## 1) Project overview
This repository is a React + TypeScript UI component library for CCDI, built around USWDS styling and accessibility expectations. It serves two outputs from one codebase: (1) Storybook documentation site and (2) shadcn-compatible component registry JSON files used for downstream installs.

The core development loop is component-driven: implement or update components under `src/components`, document behavior in `src/stories`, verify with Vitest + Testing Library, then build both Storybook and registry artifacts for GitHub Pages distribution. CI currently validates build/deploy readiness for these artifacts.

## 2) Quickstart
### Install/setup
```bash
npm ci
```

### Local run commands
```bash
# Storybook dev server
npm run dev
# or
npm run storybook:dev

# Build registry + Storybook static output
npm run build

# Build only Storybook
npm run storybook:build

# Build only registry JSON artifacts
npm run registry:build

# Serve repo locally for registry testing (port 4000)
npm run registry:local
```

### Common environment variables
- Not found in repository docs/config.
- Next step: check project-level onboarding docs or ask maintainers whether any `.env` values are required for private/local workflows.

## 3) Key commands (copy/paste friendly)
### Build
```bash
npm run build
npm run storybook:build
npm run registry:build
```

### Test
```bash
npm test
npm run test:run
npm run test:watch
npm run test:coverage
```

### Lint/format
```bash
# Lint script: Not found in package.json
# Next step:
npx eslint .

# Format script/tooling: Not found (no Prettier script/config detected)
# Next step: ask maintainers whether formatting is enforced via editor settings or external tooling.
```

### Typecheck (TypeScript strict mode enabled)
```bash
# Typecheck script: Not found in package.json
npx tsc --noEmit
```

### DB/migrations
```bash
Not found (no database or migration tooling detected).
```

## 4) Architecture map
### Directory-level map
- `src/components/ui/`: atomic and compound UI primitives (buttons, forms, inputs, dialogs, navigation, etc.).
- `src/components/blocks/`: larger page-level blocks (e.g., header/footer/in-page navigation).
- `src/components/charts/`: chart wrappers/components.
- `src/stories/`: Storybook docs and usage examples organized by domain (`10-design`, `20-ui`, `30-blocks`, `40-charts`).
- `src/test/`: Vitest component tests + shared setup (`setup.ts`).
- `src/lib/`: shared utilities (`cn` in `utils.ts`).
- `src/styles/`: global/theme/font styling.
- `registry/`: generated shadcn registry JSON artifacts.
- `registry.json`: registry manifest schema and item index.
- `.storybook/`: Storybook/Vite config and preview settings.
- `.github/workflows/build-and-deploy.yml`: CI for build + GitHub Pages deploy.
- `public/fonts/`: bundled font assets consumed by components/docs.

### Main data/build flows
- **Component authoring flow:** edit `src/components/**` → update/add stories in `src/stories/**` → add/adjust tests in `src/test/**`.
- **Test flow:** `vitest` runs in `jsdom` with setup from `src/test/setup.ts` and excludes stories.
- **Registry flow:** `npm run registry:build` uses `shadcn build --output registry/` and produces distributable JSON files.
- **Docs/site flow:** `npm run storybook:build` creates `storybook-static/`.
- **CI deploy flow:** workflow builds registry + Storybook, assembles `site/` with Storybook at root and registry under `/r`, then deploys Pages on pushes to `main`.

## 5) Development workflow
### Code style & conventions
- Language/tooling: TypeScript (`strict: true`), React 19, Storybook + Vite.
- File naming: kebab-case for component/test/story files (`button.tsx`, `button.test.tsx`, `button.stories.tsx`).
- Imports: `@/` alias to `src` is configured in both Vite/Vitest and Storybook.
- Styling: Tailwind utility classes + `class-variance-authority` patterns + `cn` helper from `src/lib/utils.ts`.
- Accessibility is a first-class requirement (USWDS/WCAG positioning throughout README and stories).

### How to add a new feature (repo-specific)
1. Decide target scope:
   - UI primitive: `src/components/ui/<feature>.tsx`
   - Larger section/block: `src/components/blocks/<feature>.tsx`
2. Implement component with typed props and accessibility semantics (roles/labels/keyboard behavior as needed).
3. Add or update Storybook docs at `src/stories/<domain>/<feature>.stories.tsx` with key variants/states.
4. Add or update tests in `src/test/<feature>.test.tsx`.
5. If component is registry-exposed, ensure `registry.json` and generated `registry/*.json` include it.
6. Run local checks:
   ```bash
   npm run test:run
   npx tsc --noEmit
   npm run registry:build
   npm run storybook:build
   ```

## 8) Troubleshooting
1. **`npm run build` fails because `registry/` is missing**
   - Cause: workflow or local scripts removed generated directory.
   - Fix: rerun `npm run registry:build`.

2. **Storybook alias import errors (`@/...`)**
   - Cause: alias mismatch in config.
   - Fix: verify alias in `.storybook/main.ts`, `vitest.config.ts`, and `tsconfig.json` all point `@` to `src`.

3. **Tests fail with DOM/API errors**
   - Cause: setup file not loaded or jsdom mismatch.
   - Fix: verify `vitest.config.ts` uses `environment: 'jsdom'` and `setupFiles: ['./src/test/setup.ts']`.

4. **Component appears in code but not in docs**
   - Cause: missing `*.stories.tsx` or wrong story path.
   - Fix: add story under `src/stories/**` matching Storybook glob config.

5. **Type errors block development but no `typecheck` script exists**
   - Cause: no dedicated npm script in `package.json`.
   - Fix: run `npx tsc --noEmit`; consider adding a `typecheck` script.

6. **Lint command confusion**
   - Cause: ESLint config exists but no npm lint script.
   - Fix: run `npx eslint .`; optionally add `"lint": "eslint ."` in `package.json`.


## 9) SKILLS
Use these specialized skill files before major artifact generation/refactors:

- **React/Next performance and code quality skill**
  - Path: `.agents/skills/vercel-react-best-practices/SKILL.md`
  - Expanded guidance: `.agents/skills/vercel-react-best-practices/AGENTS.md`
  - When to use: creating/refactoring React components, Storybook pages, async data flows, render optimization, bundle/perf-sensitive changes.

Agent execution guidance for this repo:
1. Load skill instructions first for React/TSX work.
2. Prefer existing patterns in `src/components/ui/*` and `src/stories/*` over introducing new patterns.
3. Keep changes aligned with accessibility-first and USWDS-compliant styling already used in the repo.
4. Validate with repository-native commands (`npm test`, `npm run build`, `npm run registry:build`).
5. If a requested workflow/tool is missing, state **Not found** and propose exact next check (file or command).
