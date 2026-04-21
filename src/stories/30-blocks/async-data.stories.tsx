import type { Meta, StoryObj } from "@storybook/react-vite"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {
  AsyncDataProvider,
  AsyncDataState,
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

type DemoUser = {
  id: number
  name: string
  username: string
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
          "TanStack Query helpers for async UI: wrap the tree in `AsyncDataProvider`, fetch with `useAsyncFetchQuery` (REST or configurable GraphQL), and gate rendering with `AsyncDataState`. Pattern aligns with the sample app at github.com/johnyesit/my-tanstack-query-app.",
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
