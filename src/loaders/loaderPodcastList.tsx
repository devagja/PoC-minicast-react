import type { QueryClient } from 'react-query'

import { podcastListQuery } from '~/hooks/query/usePodcastList'

const loaderPodcastList =
  (queryClient: QueryClient) => async (): Promise<string[]> => {
    // TODO fix type
    const query: any = podcastListQuery

    // ⬇️ return data or fetch it
    return await (queryClient.getQueryData(query.queryKey ?? '') ??
      (await queryClient.fetchQuery(query)))
  }

export default loaderPodcastList
