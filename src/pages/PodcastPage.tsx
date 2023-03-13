import dayjs from 'dayjs'
import { type ReactElement } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import DetailsCard from '~/components/ui/molecules/DetailsCard'
import InfoTable from '~/components/ui/molecules/InfoTable'
import usePodcast from '~/hooks/query/usePodcast'
import usePodcastInfo from '~/hooks/query/usePodcastInfo'

const intl = new Intl.DateTimeFormat('en-US')

function PodcastPage(): ReactElement {
  const nav = useNavigate()
  const params = useParams<{
    podcastId: string | undefined
  }>()

  const { data: podcast } = usePodcast(params.podcastId ?? '')

  const { data: podcastInfo } = usePodcastInfo(
    params.podcastId ?? '',
    podcast?.feedUrl ?? ''
  )

  const handleSelected = (guid: string) => () => {
    nav(`episode/${guid}`)
  }

  return (
    <div className='container w-full flex flex-col items-center md:items-start md:flex-row gap-3 lg:gap-24 mx-auto pt-8 pb-9 px-4'>
      <DetailsCard
        image={{ src: podcast?.artworkUrl600, alt: podcast?.collectionName }}
        title={podcast?.collectionName}
        author={podcast?.artistName}
        description={podcastInfo?.itunesSummary}
      />
      <div className='w-full flex flex-col gap-5'>
        <div className='px-4 py-3 w-full bg-base-100 drop-shadow-lg border border-base-200  '>
          <span className=' text-xl font-bold'>Episodes: 66</span>
        </div>
        <div className=' bg-base-100 drop-shadow-lg border border-base-200 p-5'>
          <InfoTable headers={['Title', 'Date', 'Duration']}>
            <tbody>
              {podcastInfo?.item.map(episode => (
                <tr
                  key={episode.title}
                  title={episode.title}
                  className='cursor-pointer'
                  onClick={handleSelected(episode.guid.text)}
                >
                  <td className='max-w-[15rem] text-ellipsis overflow-x-hidden lg:max-w-xs'>
                    {episode.title}
                  </td>
                  <td>{intl.format(Date.parse(episode?.pubDate))}</td>
                  <td>
                    {dayjs.unix(episode.itunesDuration).format('HH:mm:ss')}
                  </td>
                </tr>
              ))}
            </tbody>
          </InfoTable>
        </div>
      </div>
    </div>
  )
}

export default PodcastPage
