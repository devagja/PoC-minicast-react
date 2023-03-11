import type { ReactElement } from 'react'

import Badge from '~/components/ui/atoms/Badge'

interface PodcastListHeaderProps {
  count: number
}

function PodcastListHeaderPage({
  count
}: PodcastListHeaderProps): ReactElement {
  return (
    <div className='w-full flex justify-center container sticky top-0 pt-7 pb-8 backdrop-blur-md px-2 z-20 md:justify-end gap-4 items-center md:px-20'>
      <Badge>{count}</Badge>
      <div className='max-w-[291px] w-full h-10 relative'>
        <input
          type='text'
          placeholder='Search…'
          className='input input-bordered rounded-md input-primary w-full py-0 px-3 h-full'
        />
        <button className='rounded-md flex justify-center items-center active:opacity-0 focus:opacity-0 min-h-0 h-5 w-5 p-0 right-0 top-2/4 -translate-y-2/4 -translate-x-2/4 btn-ghost btn-primary absolute'>
          {/* <button className='btn btn-square p-0 h-10'> */}
          <svg
            className='h-4 w-4'
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 512 512'
          >
            <polygon points='400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49' />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default PodcastListHeaderPage
