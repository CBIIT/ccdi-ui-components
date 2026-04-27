import type { Meta, StoryObj } from "@storybook/react-vite"
import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  AsyncDataProvider,
  AsyncDataState,
  useAsyncFetchMutation,
  useAsyncFetchQuery,
} from "@/components/blocks/async-data"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/charts/chart"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableCaption,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type DemoUser = {
  id: number
  name: string
  username: string
}

type CreatePostVariables = {
  title: string
  body: string
  userId: number
}

type CreatedPost = {
  id: number
  title: string
  body: string
  userId: number
}

type PatchPostVariables = {
  title: string
  body: string
}

type PutPostVariables = {
  id: number
  title: string
  body: string
  userId: number
}

/** JSONPlaceholder returns `{}` for DELETE. */
type DeletedPostResponse = Record<string, never>

const JSONPLACEHOLDER_POSTS_URL = "https://jsonplaceholder.typicode.com/posts"
const JSONPLACEHOLDER_POST_1_URL = "https://jsonplaceholder.typicode.com/posts/1"

const GRAPHQL_ZERO_CREATE_POST = /* GraphQL */ `
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      body
    }
  }
`

type GraphQLCreatePostVariables = {
  input: {
    title: string
    body: string
  }
}

type GraphQLCreatePostData = {
  createPost: {
    id: string
    title: string
    body: string
  }
}

const GRAPHQL_ZERO_USER_BY_ID = /* GraphQL */ `
  query UserById($id: ID!) {
    user(id: $id) {
      id
      name
      username
      email
    }
  }
`

type GraphQLUserByIdData = {
  user: {
    id: string | null
    name: string | null
    username: string | null
    email: string | null
  }
}

function AsyncGraphQLQueryDemo() {
  const [userId, setUserId] = React.useState("1")

  const query = useAsyncFetchQuery<GraphQLUserByIdData>({
    queryKey: ["storybook", "graphqlzero", "user", userId],
    graphql: {
      endpoint: "https://graphqlzero.almansi.me/api",
      query: GRAPHQL_ZERO_USER_BY_ID,
      variables: { id: userId },
    },
  })

  return (
    <div className="flex flex-col gap-6 max-w-xl">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex max-w-xs flex-1 flex-col gap-2">
          <Label htmlFor="async-gql-query-user-id">User ID</Label>
          <Input
            id="async-gql-query-user-id"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            disabled={query.isPending}
            inputMode="numeric"
            autoComplete="off"
          />
          <p className="text-xs text-gray-70">Try 1–10 (seed data). Unknown IDs return an empty user.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button type="button" variant="outline" size="sm" onClick={() => query.refetch()}>
            Refetch
          </Button>
          {query.isFetching && !query.isPending ? (
            <span className="text-sm text-gray-70" role="status">
              Updating…
            </span>
          ) : null}
        </div>
      </div>

      <Card>
        <CardHeader>
          <h2 className="font-bold font-merriweather text-lg">User by ID (GraphQL query)</h2>
          <p className="text-sm text-gray-70">
            <a
              className="text-primary underline"
              href="https://graphqlzero.almansi.me/"
              target="_blank"
              rel="noreferrer"
            >
              GraphQLZero
            </a>
            , loaded with <code className="font-mono text-xs">useAsyncFetchQuery</code> —{" "}
            <code className="font-mono text-xs">graphql</code> includes <code className="font-mono text-xs">endpoint</code>,{" "}
            <code className="font-mono text-xs">query</code>, and optional <code className="font-mono text-xs">variables</code>.{" "}
            <code className="font-mono text-xs">queryKey</code> includes <code className="font-mono text-xs">userId</code> so
            changing the field refetches.
          </p>
        </CardHeader>
      </Card>

      <AsyncDataState<GraphQLUserByIdData>
        isPending={query.isPending}
        isError={query.isError}
        isSuccess={query.isSuccess}
        data={query.data}
        error={query.error}
        pending={<p className="text-gray-70">Loading user…</p>}
        empty={<p className="text-gray-70">No data returned.</p>}
      >
        {(payload) => {
          const user = payload.user
          if (!user?.id) {
            return <p className="text-gray-70">No user for that ID.</p>
          }
          return (
            <Card>
              <CardHeader>
                <h3 className="font-bold font-merriweather text-base">{user.name}</h3>
                <p className="text-sm text-gray-70">
                  <span className="font-mono">@{user.username}</span>
                </p>
              </CardHeader>
              <CardContent>
                <dl className="grid gap-2 text-sm">
                  <div>
                    <dt className="text-gray-70">ID</dt>
                    <dd className="font-mono">{user.id}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-70">Email</dt>
                    <dd>{user.email}</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          )
        }}
      </AsyncDataState>
    </div>
  )
}

function AsyncGraphQLMutationDemo() {
  const [title, setTitle] = React.useState("Storybook GraphQL post")
  const [body, setBody] = React.useState("Created with useAsyncFetchMutation (GraphQL).")

  const mutation = useAsyncFetchMutation<GraphQLCreatePostData, GraphQLCreatePostVariables>({
    graphql: {
      endpoint: "https://graphqlzero.almansi.me/api",
      query: GRAPHQL_ZERO_CREATE_POST,
    },
  })

  return (
    <div className="flex flex-col gap-6 max-w-xl">
      <Card>
        <CardHeader>
          <h2 className="font-bold font-merriweather text-lg">Create post (GraphQL mutation)</h2>
          <p className="text-sm text-gray-70">
            <a
              className="text-primary underline"
              href="https://graphqlzero.almansi.me/"
              target="_blank"
              rel="noreferrer"
            >
              GraphQLZero
            </a>{" "}
            — static <code className="font-mono text-xs">graphql</code> omits{" "}
            <code className="font-mono text-xs">variables</code>; each{" "}
            <code className="font-mono text-xs">mutate(variables)</code> merges into the request.
          </p>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="async-gql-mutation-title">Title</Label>
            <Input
              id="async-gql-mutation-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={mutation.isPending}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="async-gql-mutation-body">Body</Label>
            <Input
              id="async-gql-mutation-body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              disabled={mutation.isPending}
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button
              type="button"
              onClick={() => mutation.mutate({ input: { title, body } })}
              disabled={mutation.isPending || !title.trim()}
            >
              {mutation.isPending ? "Creating…" : "Create post"}
            </Button>
            {mutation.isSuccess ? (
              <Button type="button" variant="outline" size="sm" onClick={() => mutation.reset()}>
                Clear result
              </Button>
            ) : null}
          </div>
        </CardContent>
      </Card>

      <AsyncDataState<GraphQLCreatePostData>
        isPending={mutation.isPending}
        isError={mutation.isError}
        isSuccess={mutation.isSuccess}
        data={mutation.data}
        error={mutation.error}
        pending={<p className="text-gray-70">Sending mutation…</p>}
        empty={<p className="text-gray-70">Submit the form to run the GraphQL mutation.</p>}
      >
        {(data) => {
          const post = data.createPost
          return (
            <Card>
              <CardHeader>
                <h3 className="font-bold font-merriweather text-base">Created (response)</h3>
                <p className="text-sm text-gray-70">
                  GraphQLZero returns <code className="font-mono text-xs">id</code>{" "}
                  <span className="font-mono">{post.id}</span> (fake persistence).
                </p>
              </CardHeader>
              <CardContent>
                <dl className="grid gap-2 text-sm">
                  <div>
                    <dt className="text-gray-70">Title</dt>
                    <dd>{post.title}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-70">Body</dt>
                    <dd>{post.body}</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>
          )
        }}
      </AsyncDataState>
    </div>
  )
}

function AsyncMutationDemo() {
  const [title, setTitle] = React.useState("Storybook sample post")
  const [body, setBody] = React.useState("Created with useAsyncFetchMutation (REST).")

  const postMutation = useAsyncFetchMutation<CreatedPost, CreatePostVariables>({
    rest: { url: JSONPLACEHOLDER_POSTS_URL, method: "POST" },
  })
  const patchMutation = useAsyncFetchMutation<CreatedPost, PatchPostVariables>({
    rest: { url: JSONPLACEHOLDER_POST_1_URL, method: "PATCH" },
  })
  const putMutation = useAsyncFetchMutation<CreatedPost, PutPostVariables>({
    rest: { url: JSONPLACEHOLDER_POST_1_URL, method: "PUT" },
  })
  const deleteMutation = useAsyncFetchMutation<DeletedPostResponse, void>({
    rest: { url: JSONPLACEHOLDER_POST_1_URL, method: "DELETE" },
  })

  const anyPending =
    postMutation.isPending ||
    patchMutation.isPending ||
    putMutation.isPending ||
    deleteMutation.isPending

  return (
    <div className="flex flex-col gap-6 max-w-3xl">
      <Card>
        <CardHeader>
          <h2 className="font-bold font-merriweather text-lg">REST mutations (JSONPlaceholder)</h2>
          <p className="text-sm text-gray-70">
            Each hook uses static <code className="font-mono text-xs">rest</code> with a fixed{" "}
            <code className="font-mono text-xs">method</code> and <code className="font-mono text-xs">url</code> (no{" "}
            <code className="font-mono text-xs">body</code> on <code className="font-mono text-xs">rest</code>
            ). <code className="font-mono text-xs">mutate(variables)</code> supplies the JSON body;{" "}
            <code className="font-mono text-xs">DELETE</code> uses <code className="font-mono text-xs">mutate()</code>{" "}
            with no variables so no body is sent.
          </p>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="async-mutation-title">Title</Label>
            <Input
              id="async-mutation-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={anyPending}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="async-mutation-body">Body</Label>
            <Input
              id="async-mutation-body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              disabled={anyPending}
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <h3 className="font-bold font-merriweather text-base">POST — create post</h3>
            <p className="text-sm text-gray-70">
              <code className="font-mono text-xs">POST {JSONPLACEHOLDER_POSTS_URL}</code>
            </p>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <Button
                type="button"
                onClick={() => postMutation.mutate({ title, body, userId: 1 })}
                disabled={anyPending || !title.trim()}
              >
                {postMutation.isPending ? "Creating…" : "Create post"}
              </Button>
              {postMutation.isSuccess ? (
                <Button type="button" variant="outline" size="sm" onClick={() => postMutation.reset()}>
                  Clear
                </Button>
              ) : null}
            </div>
            <AsyncDataState<CreatedPost>
              isPending={postMutation.isPending}
              isError={postMutation.isError}
              isSuccess={postMutation.isSuccess}
              data={postMutation.data}
              error={postMutation.error}
              pending={<p className="text-gray-70">Sending POST…</p>}
              empty={<p className="text-gray-70">Run POST to see the created resource.</p>}
            >
              {(post) => (
                <div className="rounded border border-gray-20 p-3 text-sm">
                  <p className="font-mono text-gray-70">id {post.id}</p>
                  <p className="font-medium">{post.title}</p>
                  <p className="text-gray-70">{post.body}</p>
                  <p className="font-mono text-gray-70">userId {post.userId}</p>
                </div>
              )}
            </AsyncDataState>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="font-bold font-merriweather text-base">PATCH — partial update</h3>
            <p className="text-sm text-gray-70">
              <code className="font-mono text-xs">PATCH {JSONPLACEHOLDER_POST_1_URL}</code> — body replaces only
              fields you send (demo uses title and body).
            </p>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <Button
                type="button"
                variant="secondary"
                onClick={() => patchMutation.mutate({ title, body })}
                disabled={anyPending || !title.trim()}
              >
                {patchMutation.isPending ? "Patching…" : "Patch post 1"}
              </Button>
              {patchMutation.isSuccess ? (
                <Button type="button" variant="outline" size="sm" onClick={() => patchMutation.reset()}>
                  Clear
                </Button>
              ) : null}
            </div>
            <AsyncDataState<CreatedPost>
              isPending={patchMutation.isPending}
              isError={patchMutation.isError}
              isSuccess={patchMutation.isSuccess}
              data={patchMutation.data}
              error={patchMutation.error}
              pending={<p className="text-gray-70">Sending PATCH…</p>}
              empty={<p className="text-gray-70">Run PATCH to see the updated resource.</p>}
            >
              {(post) => (
                <div className="rounded border border-gray-20 p-3 text-sm">
                  <p className="font-mono text-gray-70">id {post.id}</p>
                  <p className="font-medium">{post.title}</p>
                  <p className="text-gray-70">{post.body}</p>
                  <p className="font-mono text-gray-70">userId {post.userId}</p>
                </div>
              )}
            </AsyncDataState>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="font-bold font-merriweather text-base">PUT — full replace</h3>
            <p className="text-sm text-gray-70">
              <code className="font-mono text-xs">PUT {JSONPLACEHOLDER_POST_1_URL}</code> — body includes{" "}
              <code className="font-mono text-xs">id</code> and <code className="font-mono text-xs">userId</code> for a
              full resource replace.
            </p>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <Button
                type="button"
                variant="secondary"
                onClick={() => putMutation.mutate({ id: 1, title, body, userId: 1 })}
                disabled={anyPending || !title.trim()}
              >
                {putMutation.isPending ? "Replacing…" : "Put post 1"}
              </Button>
              {putMutation.isSuccess ? (
                <Button type="button" variant="outline" size="sm" onClick={() => putMutation.reset()}>
                  Clear
                </Button>
              ) : null}
            </div>
            <AsyncDataState<CreatedPost>
              isPending={putMutation.isPending}
              isError={putMutation.isError}
              isSuccess={putMutation.isSuccess}
              data={putMutation.data}
              error={putMutation.error}
              pending={<p className="text-gray-70">Sending PUT…</p>}
              empty={<p className="text-gray-70">Run PUT to see the replaced resource.</p>}
            >
              {(post) => (
                <div className="rounded border border-gray-20 p-3 text-sm">
                  <p className="font-mono text-gray-70">id {post.id}</p>
                  <p className="font-medium">{post.title}</p>
                  <p className="text-gray-70">{post.body}</p>
                  <p className="font-mono text-gray-70">userId {post.userId}</p>
                </div>
              )}
            </AsyncDataState>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="font-bold font-merriweather text-base">DELETE — remove post 1</h3>
            <p className="text-sm text-gray-70">
              <code className="font-mono text-xs">DELETE {JSONPLACEHOLDER_POST_1_URL}</code> — no JSON body; call{" "}
              <code className="font-mono text-xs">mutate()</code> with no arguments.
            </p>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <Button
                type="button"
                variant="accent"
                onClick={() => deleteMutation.mutate()}
                disabled={anyPending}
              >
                {deleteMutation.isPending ? "Deleting…" : "Delete post 1"}
              </Button>
              {deleteMutation.isSuccess ? (
                <Button type="button" variant="outline" size="sm" onClick={() => deleteMutation.reset()}>
                  Clear
                </Button>
              ) : null}
            </div>
            <AsyncDataState<DeletedPostResponse>
              isPending={deleteMutation.isPending}
              isError={deleteMutation.isError}
              isSuccess={deleteMutation.isSuccess}
              data={deleteMutation.data}
              error={deleteMutation.error}
              pending={<p className="text-gray-70">Sending DELETE…</p>}
              empty={<p className="text-gray-70">Run DELETE to see the response body.</p>}
            >
              {() => (
                <p className="text-sm text-gray-70">
                  JSONPlaceholder responds with an empty JSON object <code className="font-mono text-xs">{"{}"}</code>{" "}
                  and <code className="font-mono text-xs">200 OK</code> (no real deletion).
                </p>
              )}
            </AsyncDataState>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function AsyncTableAndChartDemo() {
  const query = useAsyncFetchQuery<DemoUser[]>({
    queryKey: ["storybook", "jsonplaceholder", "users"],
    rest: { url: "https://jsonplaceholder.typicode.com/users", method: "GET" },
  })

  const chartRows = (query.data ?? []).slice(0, 6).map((u) => ({
    name: u.username.slice(0, 8),
    id: u.id,
  }))

  return (
    <div className="flex flex-col gap-8 max-w-4xl">
      <div className="flex items-center gap-2">
        <Button type="button" variant="outline" size="sm" onClick={() => query.refetch()}>
          Refetch
        </Button>
        {query.isFetching && !query.isPending ? (
          <span className="text-sm text-gray-70" role="status">
            Updating…
          </span>
        ) : null}
      </div>

      <AsyncDataState<DemoUser[]>
        isPending={query.isPending}
        isError={query.isError}
        isSuccess={query.isSuccess}
        data={query.data}
        error={query.error}
        pending={<p className="text-gray-70">Loading sample users…</p>}
        empty={<p className="text-gray-70">No users returned.</p>}
      >
        {(users) => (
          <>
            <Card>
              <CardHeader>
                <h2 className="font-bold font-merriweather text-lg">Users (REST)</h2>
                <p className="text-sm text-gray-70">
                  Data from JSONPlaceholder, loaded with{" "}
                  <code className="font-mono text-xs">useAsyncFetchQuery</code> and{" "}
                  <code className="font-mono text-xs">AsyncDataState</code>.
                </p>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableCaption>First five users</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Username</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody striped>
                    {users.slice(0, 5).map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-mono text-sm">{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="font-bold font-merriweather text-lg">IDs by user</h2>
                <p className="text-sm text-gray-70">Recharts + chart primitives on the same query.</p>
              </CardHeader>
              <CardContent>
                <ChartContainer
                  config={
                    {
                      id: {
                        label: "User ID",
                        color: "var(--color-blue-60v)",
                      },
                    } as ChartConfig
                  }
                  className="min-h-[240px] w-full"
                >
                  <BarChart accessibilityLayer data={chartRows}>
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="name" tickLine={false} axisLine={false} tickMargin={8} />
                    <YAxis width={32} tickLine={false} axisLine={false} />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                    <Bar dataKey="id" fill="var(--color-id)" radius={4} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
          </>
        )}
      </AsyncDataState>
    </div>
  )
}

const meta = {
  title: "Blocks/Async data",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "TanStack Query helpers for async UI: wrap the tree in `AsyncDataProvider`, fetch with `useAsyncFetchQuery` (REST or configurable GraphQL), mutate with `useAsyncFetchMutation`, and gate rendering with `AsyncDataState`. Pattern aligns with the sample app at github.com/johnyesit/my-tanstack-query-app.",
      },
    },
  },
  decorators: [
    (Story) => (
      <AsyncDataProvider>
        <Story />
      </AsyncDataProvider>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const TableAndChart: Story = {
  render: () => <AsyncTableAndChartDemo />,
}

export const GraphqlQuery: Story = {
  render: () => <AsyncGraphQLQueryDemo />,
}

export const RestMutation: Story = {
  render: () => <AsyncMutationDemo />,
}

export const GraphqlMutation: Story = {
  render: () => <AsyncGraphQLMutationDemo />,
}
