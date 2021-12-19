import useSWR from 'swr'

export function useFetch<Data = any>(
  url: string,
  initial: RequestInit = { method: 'GET', mode: 'cors' }
) {
  const { data, error } = useSWR<Data>(
    url,
    async url => {
      const response = await fetch(url, initial)
      const data = await response.json()

      return data
    },
    {
      errorRetryCount: 3
    }
  )

  return { data, error }
}
