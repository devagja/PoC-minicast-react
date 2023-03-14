import dayjs from 'dayjs'
import { memo, useCallback, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import ContainerTransition from '~/components/routing/atoms/ContainerTransition'
import PodcastEpisodesCount from '~/components/ui/atoms/PodcastEpisodesCount'
import DetailsCard from '~/components/ui/molecules/DetailsCard'
import InfoTable from '~/components/ui/molecules/InfoTable'
import usePodcast from '~/hooks/query/usePodcast'
import usePodcastInfo from '~/hooks/query/usePodcastInfo'

const intl = new Intl.DateTimeFormat('en-US')

function PodcastPage(): React.ReactElement {
  const nav = useNavigate()
  const { podcastId = '' } = useParams<{
    podcastId: string | undefined
  }>()

  const { data: podcast } = usePodcast(podcastId)

  const { data: podcastInfo } = usePodcastInfo(
    podcastId,
    podcast?.feedUrl ?? ''
  )

  const handleSelected = useCallback(
    (guid: string) => {
      nav(`episode/${guid}`)
    },
    [nav]
  )

  const podcastInfoLength = useMemo(
    () => podcastInfo?.item.length ?? 0,
    [podcastInfo]
  )

  const DetailsCardMemo = useMemo(
    () => (
      <DetailsCard
        {...(podcast != null && {
          title: podcast.collectionName,
          author: podcast.artistName,
          image: { src: podcast.artworkUrl600, alt: podcast.collectionName }
        })}
        descriptionInnerHTML={podcastInfo?.description}
      />
    ),
    [podcast, podcastInfo]
  )

  const InfoTableMemo = useMemo(
    () => (
      <InfoTable
        rows={podcastInfo?.item.map(episode => ({
          guid:
            typeof episode.guid === 'object' ? episode.guid.text : episode.guid,
          title: episode.title,
          date: intl.format(Date.parse(episode.pubDate)),
          duration: dayjs.unix(episode.itunesDuration).format('HH:mm:ss')
        }))}
        onItemClick={handleSelected}
      />
    ),
    [podcastInfo]
  )

  const PodcastEpisodesCountMemo = useMemo(
    () => <PodcastEpisodesCount count={podcastInfoLength} />,
    [podcastInfoLength]
  )

  return (
    <ContainerTransition className='container mx-auto flex w-full flex-col items-center gap-3 px-4 pt-8 pb-9 md:flex-row md:items-start lg:gap-24'>
      {DetailsCardMemo}
      <div className='flex w-full flex-col gap-5'>
        {PodcastEpisodesCountMemo}
        <div className='w-full border border-base-200 bg-base-100 p-5 drop-shadow-lg'>
          {InfoTableMemo}
        </div>
      </div>
    </ContainerTransition>
  )
}

export default memo(PodcastPage)
