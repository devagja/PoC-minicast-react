import type { QueryClient } from '@tanstack/react-query'

import { podcastQuery } from '~/hooks/query/usePodcast'

const loaderPodcast =
  (queryClient: QueryClient) =>
  async ({ params }: any): Promise<string[]> => {
    // TODO fix type
    const query: any = podcastQuery(params.podcastId)

    // ⬇️ return data or fetch it
    return await (queryClient.getQueryData(query.queryKey ?? '') ??
      (await queryClient.fetchQuery(query)))
  }

export default loaderPodcast
