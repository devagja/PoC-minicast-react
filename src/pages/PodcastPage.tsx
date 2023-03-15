import dayjs from 'dayjs'
import { memo, useCallback, useMemo } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'

import PodcastEpisodesCount from '~/components/atoms/PodcastEpisodesCount'
import InfoTable from '~/components/molecules/InfoTable'
import type { Channel } from '~/interfaces/PodcastInfo'

const intl = new Intl.DateTimeFormat('en-US')

function _PodcastPage(): React.ReactElement {
  const { podcastInfo } = useOutletContext<{
    podcastInfo: Channel | undefined
  }>()

  const nav = useNavigate()

  const handleSelected = useCallback(
    (guid: string) => {
      nav(`episode/${guid}`)
    },
    [nav]
  )

  const podcastInfoLength = useMemo(
    () => podcastInfo?.item.length ?? -1,
    [podcastInfo]
  )

  const InfoTableMemo = useMemo(
    () => (
      <InfoTable
        rows={podcastInfo?.item.map(episode => ({
          guid:
            typeof episode.guid === 'object' ? episode.guid.text : episode.guid,
          title: episode.title,
          date: intl.format(Date.parse(episode.pubDate)),
          duration:
            typeof episode.itunesDuration === 'number'
              ? dayjs.unix(episode.itunesDuration).format('HH:mm:ss')
              : episode.itunesDuration
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
    <div className='flex w-full flex-col gap-5'>
      {PodcastEpisodesCountMemo}
      <div className='w-full border border-base-200 bg-base-100 p-5 drop-shadow-lg'>
        {InfoTableMemo}
      </div>
    </div>
  )
}

const PodcastPage = memo(_PodcastPage)
export default PodcastPage
