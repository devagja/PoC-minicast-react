import { memo } from 'react'

interface PodcastEpisodesCountProps {
  count: number
}

function _PodcastEpisodesCount({
  count
}: PodcastEpisodesCountProps): React.ReactElement {
  return (
    <div className='w-full border border-base-200 bg-base-100 px-4 py-3 drop-shadow-lg  '>
      {count !== -1 ? (
        <span className=' text-xl font-bold'>Episodes: {count}</span>
      ) : (
        <span className=' text-xl font-bold'>
          Episodes:
          <span className='loading btn-ghost btn-sm btn transition-all'></span>
        </span>
      )}
    </div>
  )
}

const PodcastEpisodesCount = memo(_PodcastEpisodesCount)
export default PodcastEpisodesCount
