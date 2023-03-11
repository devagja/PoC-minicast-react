import type { ReactElement } from 'react'
import { useQuery, type UseQueryResult } from 'react-query'
import { useLoaderData } from 'react-router-dom'

import PodcastListHeaderPage from '~/components/navigation/atom/PodcastListHeaderPage'
import InfoCardList from '~/components/navigation/molecules/InfoCardList'
import usePodcastList from '~/hooks/query/usePodcastList'
import type { Entry } from '~/interfaces/PodcastList'
import type loaderPodcastList from '~/loaders/loaderPodcastList'
import transformPodcastListToInfoCardListProps from '~/utils/formatToUseInComponents/transformPodcastListToInfoCardListProps'

function PodcastListPage(): ReactElement {
  const initialData = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof loaderPodcastList>>
  >

  const { data: podcastList = [] }: UseQueryResult<Entry[]> = useQuery({
    ...usePodcastList(),
    initialData
  })

  return (
    <div className='flex flex-col mx-auto pb-7'>
      <PodcastListHeaderPage count={100} />
      <InfoCardList
        data={transformPodcastListToInfoCardListProps(podcastList)}
      />
    </div>
  )
}

export default PodcastListPage
