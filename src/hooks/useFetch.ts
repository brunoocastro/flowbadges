import useSWR from 'swr'

export function useFetch<Data = any>(
  url: string,
  initial: RequestInit = {},
  swrOptions = {}
) {
  const { data, error } = useSWR<Data>(
    url,
    async url => {
      const response = await fetch(url, {
        ...initial,
        method: 'GET',
        mode: 'cors'
      })
      const data = await response.json()

      return data
    },
    {
      ...swrOptions,
      errorRetryCount: 3
    }
  )

  return { data, error, isLoading: !error && !data }
}
