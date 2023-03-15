import {
  useQuery,
  type UseQueryOptions,
  type UseQueryResult
} from '@tanstack/react-query'

import type { Channel } from '~/interfaces/PodcastInfo'
import getPodcastInfo from '~/services/itunes/getPodcastInfo'

export const podcastInfoQuery = (
  podcastId: string,
  feedUrl: string
): UseQueryOptions<Channel, Error> => ({
  queryKey: ['podcastinfo', podcastId, feedUrl],
  queryFn: async () => await getPodcastInfo(feedUrl)
})

function usePodcastInfo(
  podcastId: string,
  feedUrl: string
): UseQueryResult<Channel, Error> {
  const query = useQuery<Channel, Error>(podcastInfoQuery(podcastId, feedUrl))
  return query
}

export default usePodcastInfo
