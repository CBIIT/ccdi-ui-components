---
name: async-data
description: >-
  Guides use of TanStack Query helpers and UI state gating for REST or GraphQL
  JSON fetches via `executeJsonRequest`. Use when building or refactoring async
  tables, charts, or blocks that import from `@/components/blocks/async-data`,
  or when the user mentions `AsyncDataProvider`, `useAsyncFetchQuery`,
  `useAsyncFetchMutation`, or `AsyncDataState`.
---

# Async data block (`async-data`)

## When to read this

Read this skill before editing code that imports from `@/components/blocks/async-data` or implements the same async UI pattern in this repository.

Canonical implementation: `src/components/blocks/async-data.tsx`. Canonical demo: `src/stories/30-blocks/async-data.stories.tsx` (story `TableAndChart`).

## 1. Provider

Wrap any subtree that uses `useAsyncFetchQuery` or `useAsyncFetchMutation` in `AsyncDataProvider`. It creates an isolated `QueryClient` with defaults: `staleTime` 60s, `retry: 1`, `refetchOnWindowFocus: false`.

In Storybook, use a decorator that wraps the story:

```tsx
decorators: [
  (Story) => (
    <AsyncDataProvider>
      <Story />
    </AsyncDataProvider>
  ),
],
```

## 2. Queries — `useAsyncFetchQuery`

Pass **either** `rest` or `graphql` (not both). Types match `src/lib/json-fetch.ts`:

- **REST**: `rest: { url, method?, body?, headers? }` — `method` defaults to `GET`; body is sent for POST/PUT/PATCH.
- **GraphQL**: `graphql: { endpoint, query, variables?, headers? }` — POST JSON body; response is normalized to the `data` field; GraphQL `errors` throw.

Optional `queryKey`. If omitted, keys are derived: REST `[url, method || "GET"]`; GraphQL `["graphql", endpoint, query, variables]`.

Optional `options` is spread into `useQuery` from TanStack Query (excluding `queryKey` and `queryFn`). Type the response: `useAsyncFetchQuery<ResponseType>({ ... })`.

## 3. UI gating — `AsyncDataState`

Pass through the query object’s `isPending`, `isError`, `isSuccess`, `data`, and `error`.

`children` is a **render prop**: `(data) => ReactNode`. It runs when the component renders the success path with usable data (see source for edge cases).

Optional props:

- `pending` — replaces default loading UI (`role="status"`, screen-reader “Loading.”).
- `errorRenderer(error)` — replaces default error `Alert`; error branch requires `isError && error`.
- `empty` — empty array (when `empty` is defined), or `data` is `null`/`undefined`.
- `className` — wrapper on several branches.

Behaviors that are easy to get wrong:

- Error UI uses the `errorRenderer` / default branch only when **both** `isError` and `error` are set.
- If `isSuccess` and `data` is a **non-null array** with `length === 0` and `empty` is provided, the empty UI is shown instead of `children`.
- If `data` is `null` or `undefined`, shows `empty` or the default “No data available.”

For background refetches, `isPending` is often false while `isFetching` is true; the demo story shows an “Updating…” hint when `query.isFetching && !query.isPending`.

## 4. Mutations — `useAsyncFetchMutation`

Pass **either** `rest` or `graphql`:

- **REST**: static `rest` omits `body`; each `mutate(variables)` sends `variables` as the JSON body.
- **GraphQL**: static `graphql` omits `variables`; each call supplies variables via `mutate(variables)` merged into the request.

Optional `options` is spread into `useMutation` (excluding `mutationFn`).

## 5. Imports and client components

`async-data.tsx` is a client module (`"use client"`). Hooks must run in a client component tree.

```tsx
import {
  AsyncDataProvider,
  AsyncDataState,
  useAsyncFetchQuery,
  useAsyncFetchMutation,
} from "@/components/blocks/async-data"
```

## 6. Checklist

- [ ] `AsyncDataProvider` wraps components that call the hooks.
- [ ] Exactly one of `rest` or `graphql` per hook.
- [ ] `AsyncDataState` receives the same query’s status flags and `data` / `error`.
- [ ] Success UI lives in the render-prop `children`, not outside `AsyncDataState`, unless intentionally duplicated.
