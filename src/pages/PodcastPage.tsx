import dayjs from 'dayjs'
import { useCallback, useMemo, type ReactElement } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import ContainerTransition from '~/components/routing/atoms/ContainerTransition'
import PodcastEpisodesCount from '~/components/ui/atoms/PodcastEpisodesCount'
import DetailsCard from '~/components/ui/molecules/DetailsCard'
import InfoTable from '~/components/ui/molecules/InfoTable'
import usePodcast from '~/hooks/query/usePodcast'
import usePodcastInfo from '~/hooks/query/usePodcastInfo'

const intl = new Intl.DateTimeFormat('en-US')

function PodcastPage (): ReactElement {
  const nav = useNavigate()
  const params = useParams<{
    podcastId: string | undefined
  }>()

  const { data: podcast } = usePodcast(params.podcastId ?? '')

  const { data: podcastInfo } = usePodcastInfo(
    params.podcastId ?? '',
    podcast?.feedUrl ?? ''
  )

  const handleSelected = useCallback(
    (guid: string) => () => {
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
        image={{ src: podcast?.artworkUrl600, alt: podcast?.collectionName }}
        title={podcast?.collectionName}
        author={podcast?.artistName}
        descriptionInnerHTML={podcastInfo?.description}
      />
    ),
    [podcast, podcastInfo]
  )
  const mockDataTableMemo = useMemo(
    () =>
      ['0', '1', '2', '3', '4', '5'].map(key => (
        <tr key={key}>
          <td className='max-w-[15rem] w-full overflow-x-hidden text-ellipsis lg:max-w-xs text-center'>
            <span className='btn btn-ghost loading btn-sm transition-all  '></span>
          </td>
          <td className='text-center '>
            <span className='btn btn-ghost loading btn-sm transition-all  '></span>
          </td>
          <td className='text-center '>
            <span className='btn btn-ghost loading btn-sm  transition-all  '></span>
          </td>
        </tr>
      )),
    []
  )

  return (
    <ContainerTransition className='container mx-auto flex w-full flex-col items-center gap-3 px-4 pt-8 pb-9 md:flex-row md:items-start lg:gap-24'>
      {DetailsCardMemo}
      <div className='flex w-full flex-col gap-5'>
        <PodcastEpisodesCount count={podcastInfoLength} />
        <div className='w-full border border-base-200 bg-base-100 p-5 drop-shadow-lg'>
          <InfoTable headers={['Title', 'Date', 'Duration']}>
            <tbody>
              {podcastInfo != null
                ? podcastInfo.item.map(episode => (
                    <tr
                      key={episode.title}
                      title={episode.title}
                      className='cursor-pointer'
                      onClick={handleSelected(
                        typeof episode.guid === 'object'
                          ? episode.guid.text
                          : episode.guid
                      )}
                    >
                      <td className='max-w-[15rem] overflow-x-hidden text-ellipsis lg:max-w-xs'>
                        {episode.title}
                      </td>
                      <td>{intl.format(Date.parse(episode?.pubDate))}</td>
                      <td>
                        {dayjs.unix(episode.itunesDuration).format('HH:mm:ss')}
                      </td>
                    </tr>
                  ))
                : mockDataTableMemo}
            </tbody>
          </InfoTable>
        </div>
      </div>
    </ContainerTransition>
  )
}

export default PodcastPage
