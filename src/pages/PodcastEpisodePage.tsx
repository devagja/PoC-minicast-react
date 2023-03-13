import { useEffect, useState, type ReactElement } from 'react'
import { useParams } from 'react-router-dom'

import ContainerTransition from '~/components/routing/atoms/ContainerTransition'
import DetailsCard from '~/components/ui/molecules/DetailsCard'
import usePodcast from '~/hooks/query/usePodcast'
import usePodcastInfo from '~/hooks/query/usePodcastInfo'
import { type Item } from '~/interfaces/PodcastInfo'

function PodcastEpisodePage(): ReactElement {
  const params = useParams<{
    podcastId: string | undefined
    episodeId: string | undefined
  }>()

  const { data: podcast } = usePodcast(params.podcastId ?? '')

  const { data: podcastInfo } = usePodcastInfo(
    params.podcastId ?? '',
    podcast?.feedUrl ?? ''
  )

  const [episode, setEpisode] = useState<Item>()

  useEffect(() => {
    setEpisode(podcastInfo?.item.find(i => i.guid.text === params.episodeId))
  }, [podcastInfo?.item])

  return (
    <ContainerTransition className='container mx-auto flex w-full flex-col items-center gap-3 px-4 pt-8 pb-9 md:flex-row md:items-start lg:gap-24'>
      <DetailsCard
        image={{ src: podcast?.artworkUrl600, alt: podcast?.collectionName }}
        title={podcast?.collectionName}
        author={podcast?.artistName}
        description={podcastInfo?.itunesSummary}
      />
      <div className='flex w-full flex-col gap-5 border border-base-200 bg-base-100 p-5 drop-shadow-lg'>
        <span className=' text-xl font-bold'>{episode?.title}</span>
        <div
          className='flex flex-col gap-2'
          dangerouslySetInnerHTML={{ __html: episode?.contentEncoded ?? '' }}
        ></div>

        <audio
          className='w-full'
          src={episode?.enclosure?.url}
          controls
        ></audio>
      </div>
    </ContainerTransition>
  )
}

export default PodcastEpisodePage
