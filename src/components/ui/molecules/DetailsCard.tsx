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
    <div className='w-full  md:max-w-[288px] flex flex-col px-3 pt-5 h-fit md:sticky top-8 bg-base-100 drop-shadow-lg border border-base-200 gap-11 pb-16'>
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
        {descriptionInnerHTML !== '' ? (
          <span
            className='italic text-sm transition-all'
            dangerouslySetInnerHTML={{ __html: descriptionInnerHTML }}
          />
        ) : (
          <span className='btn  btn-ghost loading btn-lg transition-all'></span>
        )}
      </div>
    </div>
  )
}

export default DetailsCard
