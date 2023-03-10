import type { ImgHTMLAttributes, ReactElement } from 'react'

interface InfoCardProps {
  image: ImgHTMLAttributes<HTMLImageElement>
  title: string
  author: string
}
function InfoCard({ image, title, author }: InfoCardProps): ReactElement {
  return (
    <div className='card w-52 pt-14 min-h-[176px]'>
      <figure className='absolute top-0 left-2/4 -translate-x-2/4 z-10'>
        <img {...image} className='mask mask-circle w-28 h-28' />
      </figure>
      <div className='card-body gap-3 px-5 py-1.5 bg-base-100 pt-14 drop-shadow-lg border border-base-200 text-center'>
        <h2 className='card-title text-sm'>{title}</h2>
        <p className=' text-sm'>Author: {author}</p>
      </div>
    </div>
  )
}

export default InfoCard
