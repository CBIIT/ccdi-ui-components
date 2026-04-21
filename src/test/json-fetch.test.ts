import { afterEach, describe, expect, it, vi } from "vitest"
import { executeJsonRequest } from "@/lib/json-fetch"

describe("executeJsonRequest", () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it("returns JSON for REST GET", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ ok: true }),
      }),
    )

    const result = await executeJsonRequest<{ ok: boolean }>({
      kind: "rest",
      url: "https://example.com/api",
      method: "GET",
    })

    expect(result.ok).toBe(true)
    expect(fetch).toHaveBeenCalledWith(
      "https://example.com/api",
      expect.objectContaining({ method: "GET" }),
    )
  })

  it("throws when REST response is not ok", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: false,
        status: 500,
        statusText: "Server Error",
        json: async () => ({}),
      }),
    )

    await expect(
      executeJsonRequest({ kind: "rest", url: "https://example.com/broken" }),
    ).rejects.toThrow(/500/)
  })

  it("returns data field for GraphQL", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ data: { items: [1, 2] } }),
      }),
    )

    const data = await executeJsonRequest<{ items: number[] }>({
      kind: "graphql",
      endpoint: "https://example.com/graphql",
      query: "query { items }",
    })

    expect(data.items).toEqual([1, 2])
  })

  it("throws on GraphQL errors array", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ errors: [{ message: "nope" }] }),
      }),
    )

    await expect(
      executeJsonRequest({
        kind: "graphql",
        endpoint: "https://example.com/graphql",
        query: "query { x }",
      }),
    ).rejects.toThrow("nope")
  })
})
