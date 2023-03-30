import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { renderHook, waitFor } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import usePodcastInfo from './usePodcastInfo'

describe('usePodcastInfo hook', () => {
  test('check works', async () => {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: Infinity,
          cacheTime: Infinity,
          retry: false
        }
      }
    })

    queryClient.setQueryData(
      [
        'podcastinfo',
        '1535809341',
        'https://feeds.megaphone.fm/this-little-light'
      ],
      { title: 'Bedouine' }
    )
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    )

    const { result } = renderHook(
      () =>
        usePodcastInfo(
          '1535809341',
          'https://feeds.megaphone.fm/this-little-light'
        ),
      { wrapper }
    )

    await waitFor(() => expect(result.current.isSuccess).toBe(true))

    expect(result.current.data).toHaveProperty('title', 'Bedouine')
  })
})
