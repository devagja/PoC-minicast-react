import { useMemo } from 'react'

interface InfoCardProps {
  image: React.ImgHTMLAttributes<HTMLImageElement>
  title: string
  author: string
}
function InfoCard({ image, title, author }: InfoCardProps): React.ReactElement {
  const ImgMemo = useMemo(
    () => <img {...image} className='mask mask-circle h-28 w-28' />,
    [image]
  )
  const TitleMemo = useMemo(
    () => <h2 className='card-title text-sm'>{title}</h2>,

    [title]
  )
  const AuthorMemo = useMemo(
    () => <p className=' text-sm'>Author: {author}</p>,
    [author]
  )

  return (
    <div className='card min-h-[176px] w-52 pt-14'>
      <figure className='absolute top-0 left-2/4 z-10 -translate-x-2/4'>
        {ImgMemo}
      </figure>
      <div className='card-body gap-3 border border-base-200 bg-base-100 px-5 py-1.5 pt-14 text-center drop-shadow-lg [&>*]:overflow-hidden [&>*]:text-ellipsis '>
        {TitleMemo}
        {AuthorMemo}
      </div>
    </div>
  )
}

export default InfoCard
