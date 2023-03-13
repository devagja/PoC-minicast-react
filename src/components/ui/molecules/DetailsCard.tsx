import type { ImgHTMLAttributes, ReactElement } from 'react'

interface InfoCardProps {
  image?: ImgHTMLAttributes<HTMLImageElement>
  title?: string
  author?: string
  descriptionInnerHTML?: string
}

function DetailsCard({
  image = {},
  title = '',
  author = '',
  descriptionInnerHTML = ''
}: InfoCardProps): ReactElement {
  return (
    <div className='top-8  flex h-fit w-full flex-col gap-11 border border-base-200 bg-base-100 px-3 pt-5 pb-16 drop-shadow-lg md:sticky md:max-w-[288px]'>
      <div className='avatar'>
        <div className='mx-auto w-44 rounded'>
          <img {...image} />
        </div>
      </div>
      <div className='flex flex-col gap-1 px-2'>
        <span className='font-bold'>{title}</span>
        <span className='text-sm italic'>by {author}</span>
      </div>
      <div className='flex flex-col gap-1'>
        <span className='font-bold text-sm'>Description</span>
        {descriptionInnerHTML !== '' ? (
          <span
            className='italic text-sm transition-all'
            dangerouslySetInnerHTML={{ __html: descriptionInnerHTML }}
          />
        ) : (
          <span className='loading btn-ghost btn-lg btn transition-all'></span>
        )}
      </div>
    </div>
  )
}

export default DetailsCard
