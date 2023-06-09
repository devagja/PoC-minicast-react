import { memo, useMemo } from 'react'
import { Outlet, useParams } from 'react-router-dom'

import ContainerTransition from '~/components/atoms/ContainerTransition'
import DetailsCard from '~/components/molecules/DetailsCard'
import usePodcast from '~/hooks/query/usePodcast'
import usePodcastInfo from '~/hooks/query/usePodcastInfo'

const DetailsLayout = memo(function _(): React.ReactElement {
  const { podcastId = '', episodeId = '' } = useParams<{
    podcastId: string | undefined
    episodeId: string | undefined
  }>()

  const { data: podcast } = usePodcast(podcastId)

  const { data: podcastInfo, isLoading } = usePodcastInfo(
    podcastId,
    podcast?.feedUrl ?? ''
  )

  const DetailsCardMemo = useMemo(
    () => (
      <DetailsCard
        {...(podcast != null && {
          title: podcast.collectionName,
          author: podcast.artistName,
          image: { src: podcast.artworkUrl600, alt: podcast.collectionName }
        })}
        {...(episodeId !== '' && { link: { to: `/podcast/${podcastId}` } })}
        isChildDangerousHTML
        isLoading={isLoading}
      >
        {podcastInfo?.description}
      </DetailsCard>
    ),
    [podcast, podcastInfo, episodeId, isLoading]
  )

  return (
    <ContainerTransition className='container mx-auto flex w-full flex-col items-center gap-3 px-4 pt-8 pb-9 md:flex-row md:items-start lg:gap-24'>
      {DetailsCardMemo}
      <Outlet context={{ podcast, podcastInfo, podcastId, episodeId }} />
    </ContainerTransition>
  )
})

export default DetailsLayout
