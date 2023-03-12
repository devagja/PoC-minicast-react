import {
  useQuery,
  type UseQueryOptions,
  type UseQueryResult
} from '@tanstack/react-query'

import type { PodcastData } from '~/interfaces/Podcast'
import getPodcast from '~/services/itunes/getPodcast'

export const podcastQuery = (
  podcastId: string
): UseQueryOptions<PodcastData, Error> => ({
  queryKey: ['podcast', podcastId],
  queryFn: async () => await getPodcast(podcastId)
})

function usePodcast(podcastId: string): UseQueryResult<PodcastData, Error> {
  const query = useQuery<PodcastData, Error>(podcastQuery(podcastId))
  return query
}

export default usePodcast
