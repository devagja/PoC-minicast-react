import loadable from '@loadable/component'
import { atom, useAtom } from 'jotai'
import { memo, useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom'

import ContainerTransition from '~/components/routing/atoms/ContainerTransition'
import DetailsCard from '~/components/ui/molecules/DetailsCard'
import usePodcast from '~/hooks/query/usePodcast'
import usePodcastInfo from '~/hooks/query/usePodcastInfo'
import type { Item } from '~/interfaces/PodcastInfo'

export const episodeSelectedAtom = atom<Item | null>(null)
export const episodeNotFoundAtom = atom<boolean>(false)

function PodcastEpisodePage(): React.ReactElement {
  const { podcastId = '', episodeId = '' } = useParams<{
    podcastId: string | undefined
    episodeId: string | undefined
  }>()

  const { data: podcast } = usePodcast(podcastId)

  const { data: podcastInfo } = usePodcastInfo(
    podcastId,
    podcast?.feedUrl ?? ''
  )

  const [episode, setEpisode] = useAtom(episodeSelectedAtom)
  const [episodeNotFound, setEpisodeNotFoundAtom] = useAtom(episodeNotFoundAtom)

  useEffect(() => {
    const selected = podcastInfo?.item.find(
      i => (typeof i.guid === 'object' ? i.guid.text : i.guid) === episodeId
    )
    if (selected != null) {
      setEpisode(selected)
      setEpisodeNotFoundAtom(false)
    } else {
      setEpisodeNotFoundAtom(true)
    }
  }, [podcastInfo, episodeId])

  const DetailsCardMemo = useMemo(
    () => (
      <DetailsCard
        {...(podcast != null && {
          image: {
            src: podcast.artworkUrl600,
            alt: podcast.collectionName
          },
          title: podcast.collectionName,
          author: podcast.artistName
        })}
        link={{ to: `/podcast/${podcastId}` }}
        descriptionInnerHTML={podcastInfo?.description}
      />
    ),
    [podcast, podcastInfo]
  )

  const ContentLoadingMemo = useMemo(() => {
    return <span className='loading btn-ghost btn-lg btn transition-all'></span>
  }, [])

  const ContentMemo = useMemo(() => {
    return episode != null ? (
      <>
        <span className='overflow-hidden text-ellipsis text-xl font-bold'>
          {episode.title}
        </span>
        <div
          className='flex flex-col gap-2 [&>*]:overflow-hidden [&>*]:text-ellipsis'
          dangerouslySetInnerHTML={{ __html: episode.description }}
        ></div>
        <audio className='w-full' src={episode.enclosure.url} controls></audio>
      </>
    ) : (
      ContentLoadingMemo
    )
  }, [episode, ContentLoadingMemo])

  const EmptyHeroMemo = useMemo(() => {
    const LoadableEmptyHero = loadable(
      async () => await import('~/components/EmptyHero')
    )
    return (
      <LoadableEmptyHero
        title='Episode not found'
        description='We are sorry but your episode is not available'
        button={{
          label: 'Back to Podcast'
        }}
        link={{
          to: `/podcast/${podcastId}`
        }}
      />
    )
  }, [])

  const ContentFoundRenderMemo = useMemo(
    () => (episodeNotFound ? EmptyHeroMemo : ContentMemo),
    [episodeNotFound, EmptyHeroMemo, ContentMemo]
  )

  return (
    <ContainerTransition className='container mx-auto flex w-full flex-col items-center gap-3 px-4 pt-8 pb-9 md:flex-row md:items-start lg:gap-24'>
      {DetailsCardMemo}
      <div className='flex w-full flex-col gap-5 border border-base-200 bg-base-100 p-5 drop-shadow-lg'>
        {ContentFoundRenderMemo}
      </div>
    </ContainerTransition>
  )
}

export default memo(PodcastEpisodePage)
