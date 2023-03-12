import {
  useQuery,
  type UseQueryOptions,
  type UseQueryResult
} from '@tanstack/react-query'

import { getTrimmedPodcastList } from '~/services/itunes/getPodcastList'
import { type InfoCardListDataProperties } from '~/utils/formatToUseInComponents/transformPodcastListToInfoCardListProps'

export const podcastListQuery: UseQueryOptions<
  InfoCardListDataProperties[],
  Error
> = {
  queryKey: ['podcastList'],
  queryFn: getTrimmedPodcastList
}

function usePodcastList(): UseQueryResult<InfoCardListDataProperties[], Error> {
  const query = useQuery<InfoCardListDataProperties[], Error>(podcastListQuery)
  return query
}

export default usePodcastList
