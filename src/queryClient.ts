import { QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 86_400,
      cacheTime: 172_800
    }
  }
})
export default queryClient
