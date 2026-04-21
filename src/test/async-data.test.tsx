import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { AsyncDataProvider, AsyncDataState, useAsyncFetchQuery } from "@/components/blocks/async-data"

describe("AsyncDataState", () => {
  it("shows loading status with polite live region", () => {
    render(
      <AsyncDataState<string>
        isPending
        isError={false}
        isSuccess={false}
        data={undefined}
        error={null}
        pending={<p>Custom loading</p>}
      >
        {(d) => <p>{d}</p>}
      </AsyncDataState>,
    )

    expect(screen.getByRole("status")).toBeInTheDocument()
    expect(screen.getByText("Custom loading")).toBeInTheDocument()
  })

  it("renders children when query succeeded", () => {
    render(
      <AsyncDataState<string[]>
        isPending={false}
        isError={false}
        isSuccess
        data={["a"]}
        error={null}
      >
        {(rows) => <ul>{rows.map((r) => <li key={r}>{r}</li>)}</ul>}
      </AsyncDataState>,
    )

    expect(screen.getByText("a")).toBeInTheDocument()
  })

  it("renders empty slot for empty array when provided", () => {
    render(
      <AsyncDataState<string[]>
        isPending={false}
        isError={false}
        isSuccess
        data={[]}
        error={null}
        empty={<p>Nothing here</p>}
      >
        {() => <p>Should not show</p>}
      </AsyncDataState>,
    )

    expect(screen.getByText("Nothing here")).toBeInTheDocument()
    expect(screen.queryByText("Should not show")).not.toBeInTheDocument()
  })
})

describe("useAsyncFetchQuery", () => {
  it("fetches REST JSON inside provider", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => [{ id: 1, name: "Ada" }],
      }),
    )

    function Probe() {
      const q = useAsyncFetchQuery<{ id: number; name: string }[]>({
        queryKey: ["t", "users"],
        rest: { url: "https://example.com/users" },
      })
      return (
        <AsyncDataState
          isPending={q.isPending}
          isError={q.isError}
          isSuccess={q.isSuccess}
          data={q.data}
          error={q.error}
        >
          {(rows) => <span>{rows[0]?.name}</span>}
        </AsyncDataState>
      )
    }

    render(
      <AsyncDataProvider>
        <Probe />
      </AsyncDataProvider>,
    )

    expect(await screen.findByText("Ada")).toBeInTheDocument()
    vi.unstubAllGlobals()
  })
})
