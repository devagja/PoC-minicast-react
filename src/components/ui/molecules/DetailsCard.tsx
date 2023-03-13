import type { ImgHTMLAttributes, ReactElement } from 'react'

interface InfoCardProps {
  image?: ImgHTMLAttributes<HTMLImageElement>
  title?: string
  author?: string
  description?: string
}

function DetailsCard({
  image = {},
  title = '',
  author = '',
  description = ''
}: InfoCardProps): ReactElement {
  return (
    <div className='w-full md:w-72 flex flex-col px-3 pt-5 h-fit md:sticky top-8 bg-base-100 drop-shadow-lg border border-base-200 gap-11 pb-16'>
      <div className='avatar'>
        <div className='w-44 mx-auto rounded'>
          <img {...image} />
        </div>
      </div>
      <div className='flex flex-col px-2 gap-1'>
        <span className='font-bold'>{title}</span>
        <span className='italic text-sm'>by {author}</span>
      </div>
      <div className='flex flex-col gap-1'>
        <span className='font-bold text-sm'>Description</span>
        <span className='italic text-sm'>{description}</span>
      </div>
    </div>
  )
}

export default DetailsCard
