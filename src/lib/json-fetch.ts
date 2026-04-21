export interface GraphQLRequestConfig {
  endpoint: string
  query: string
  variables?: Record<string, unknown>
  headers?: Record<string, string>
}

export interface RESTRequestConfig {
  url: string
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
  body?: unknown
  headers?: Record<string, string>
}

export type JsonRequestConfig =
  | ({ kind: "rest" } & RESTRequestConfig)
  | ({ kind: "graphql" } & GraphQLRequestConfig)

async function runGraphQL<TData>(config: GraphQLRequestConfig): Promise<TData> {
  const response = await fetch(config.endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...config.headers,
    },
    body: JSON.stringify({
      query: config.query,
      variables: config.variables,
    }),
  })

  if (!response.ok) {
    throw new Error(`GraphQL request failed: ${response.status} ${response.statusText}`)
  }

  const result: unknown = await response.json()
  if (
    typeof result === "object" &&
    result !== null &&
    "errors" in result &&
    Array.isArray((result as { errors: unknown }).errors) &&
    (result as { errors: { message?: string }[] }).errors.length > 0
  ) {
    const message = (result as { errors: { message?: string }[] }).errors[0]?.message
    throw new Error(message || "GraphQL error")
  }
  if (typeof result === "object" && result !== null && "data" in result) {
    return (result as { data: TData }).data
  }
  throw new Error("Invalid GraphQL response")
}

async function runREST<TData>(config: RESTRequestConfig): Promise<TData> {
  const method = config.method || "GET"
  const options: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...config.headers,
    },
  }

  if (config.body && (method === "POST" || method === "PUT" || method === "PATCH")) {
    options.body = JSON.stringify(config.body)
  }

  const response = await fetch(config.url, options)

  if (!response.ok) {
    throw new Error(`REST request failed: ${response.status} ${response.statusText}`)
  }

  return response.json() as Promise<TData>
}

/**
 * Performs a typed JSON request for either REST or GraphQL (POST to `endpoint`).
 * GraphQL responses are normalized to the `data` field; errors throw.
 */
export async function executeJsonRequest<TData>(config: JsonRequestConfig): Promise<TData> {
  if (config.kind === "rest") {
    return runREST<TData>({
      url: config.url,
      method: config.method,
      body: config.body,
      headers: config.headers,
    })
  }
  return runGraphQL<TData>({
    endpoint: config.endpoint,
    query: config.query,
    variables: config.variables,
    headers: config.headers,
  })
}
