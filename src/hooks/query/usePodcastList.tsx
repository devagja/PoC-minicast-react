import {
  useQuery,
  type UseQueryOptions,
  type UseQueryResult
} from 'react-query'

import { type Entry } from '~/interfaces/PodcastList'
import getPodcastList from '~/services/itunes/getPodcastList'

export const podcastListQuery: UseQueryOptions<Entry[], Error> = {
  queryKey: 'podcastList',
  queryFn: getPodcastList
}

function usePodcastList(): UseQueryResult<Entry[], Error> {
  const query = useQuery<Entry[], Error>(podcastListQuery)
  return query
}

export default usePodcastList
