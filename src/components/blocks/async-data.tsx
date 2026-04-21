"use client"

import * as React from "react"
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  type UseMutationOptions,
  type UseQueryOptions,
} from "@tanstack/react-query"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { cn } from "@/lib/utils"
import {
  executeJsonRequest,
  type GraphQLRequestConfig,
  type RESTRequestConfig,
} from "@/lib/json-fetch"

function createQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60_000,
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  })
}

export function AsyncDataProvider({ children }: { children: React.ReactNode }) {
  const [client] = React.useState(createQueryClient)
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

export interface AsyncDataStateProps<TData = unknown> {
  children: (data: TData) => React.ReactNode
  isPending: boolean
  isError: boolean
  isSuccess: boolean
  data: TData | undefined
  error: Error | null
  pending?: React.ReactNode
  errorRenderer?: (error: Error) => React.ReactNode
  empty?: React.ReactNode
  className?: string
}

/**
 * Maps TanStack Query status flags to loading, error, empty, or success UI.
 * Intended for tables, charts, and other blocks that depend on async data.
 */
export function AsyncDataState<TData = unknown>({
  children,
  isPending,
  isError,
  isSuccess,
  data,
  error,
  pending,
  errorRenderer,
  empty,
  className,
}: AsyncDataStateProps<TData>) {
  if (isPending) {
    return (
      <div
        role="status"
        aria-live="polite"
        className={cn("font-public-sans text-gray-70", className)}
      >
        <span className="sr-only">Loading.</span>
        {pending ?? <p>Loading…</p>}
      </div>
    )
  }

  if (isError && error) {
    return (
      <div className={className}>
        {errorRenderer ? (
          errorRenderer(error)
        ) : (
          <Alert variant="error">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error.message}</AlertDescription>
          </Alert>
        )}
      </div>
    )
  }

  if (isSuccess && data !== undefined && data !== null) {
    if (Array.isArray(data) && data.length === 0 && empty !== undefined) {
      return <div className={className}>{empty}</div>
    }
    return <>{children(data as TData)}</>
  }

  if (data === null || data === undefined) {
    return (
      <div className={className}>
        {empty ?? <p className="font-public-sans text-gray-70">No data available.</p>}
      </div>
    )
  }

  return <>{children(data as TData)}</>
}

interface QueryModeProps<TData = unknown, TError = Error> {
  queryKey?: readonly unknown[]
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
}

interface RESTQueryProps<TData = unknown, TError = Error> extends QueryModeProps<TData, TError> {
  rest: RESTRequestConfig
}

interface GraphQLQueryProps<TData = unknown, TError = Error>
  extends QueryModeProps<TData, TError> {
  graphql: GraphQLRequestConfig
}

export type AsyncFetchQueryProps<TData = unknown, TError = Error> =
  | RESTQueryProps<TData, TError>
  | GraphQLQueryProps<TData, TError>

export function useAsyncFetchQuery<TData = unknown, TError = Error>(
  props: AsyncFetchQueryProps<TData, TError>,
) {
  let queryKey: readonly unknown[]
  let queryFn: () => Promise<TData>

  if ("graphql" in props && props.graphql) {
    queryFn = () =>
      executeJsonRequest<TData>({
        kind: "graphql",
        ...props.graphql,
      })
    queryKey = props.queryKey ?? [
      "graphql",
      props.graphql.endpoint,
      props.graphql.query,
      props.graphql.variables,
    ]
  } else if ("rest" in props && props.rest) {
    queryFn = () =>
      executeJsonRequest<TData>({
        kind: "rest",
        ...props.rest,
      })
    queryKey = props.queryKey ?? [props.rest.url, props.rest.method || "GET"]
  } else {
    throw new Error("useAsyncFetchQuery requires either `rest` or `graphql` configuration.")
  }

  return useQuery<TData, TError>({ queryKey, queryFn, ...props.options })
}

interface MutationModeProps<TData = unknown, TVariables = unknown, TError = Error> {
  options?: Omit<UseMutationOptions<TData, TError, TVariables>, "mutationFn">
}

interface RESTMutationProps<TData = unknown, TVariables = unknown, TError = Error>
  extends MutationModeProps<TData, TVariables, TError> {
  rest: Omit<RESTRequestConfig, "body">
}

interface GraphQLMutationProps<TData = unknown, TVariables = unknown, TError = Error>
  extends MutationModeProps<TData, TVariables, TError> {
  graphql: Omit<GraphQLRequestConfig, "variables">
}

export type AsyncFetchMutationProps<TData = unknown, TVariables = unknown, TError = Error> =
  | RESTMutationProps<TData, TVariables, TError>
  | GraphQLMutationProps<TData, TVariables, TError>

export function useAsyncFetchMutation<TData = unknown, TVariables = unknown, TError = Error>(
  props: AsyncFetchMutationProps<TData, TVariables, TError>,
) {
  let mutationFn: (variables: TVariables) => Promise<TData>

  if ("graphql" in props && props.graphql) {
    mutationFn = async (variables: TVariables) =>
      executeJsonRequest<TData>({
        kind: "graphql",
        ...props.graphql,
        variables: variables as Record<string, unknown>,
      })
  } else if ("rest" in props && props.rest) {
    mutationFn = async (variables: TVariables) =>
      executeJsonRequest<TData>({
        kind: "rest",
        ...props.rest,
        body: variables,
      })
  } else {
    throw new Error("useAsyncFetchMutation requires either `rest` or `graphql` configuration.")
  }

  return useMutation<TData, TError, TVariables>({ mutationFn, ...props.options })
}
