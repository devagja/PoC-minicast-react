import { memo, type ReactElement } from 'react'

interface PodcastEpisodesCountProps {
  count: number
}

function PodcastEpisodesCount ({
  count
}: PodcastEpisodesCountProps): ReactElement {
  return (
    <div className='w-full border border-base-200 bg-base-100 px-4 py-3 drop-shadow-lg  '>
      <span className=' text-xl font-bold'>Episodes: {count}</span>
    </div>
  )
}

export default memo(PodcastEpisodesCount)
