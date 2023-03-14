import { Fragment, useMemo } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

interface InfoCardProps {
  image?: React.ImgHTMLAttributes<HTMLImageElement>
  title?: string
  author?: string
  descriptionInnerHTML?: string
  link?: (LinkProps & React.RefAttributes<HTMLAnchorElement>) | null
}

function DetailsCard({
  image,
  title = '',
  author = '',
  descriptionInnerHTML = '',
  link
}: InfoCardProps): React.ReactElement {
  const LinkWrap = useMemo(
    () =>
      link != null
        ? { c: Link, p: { ...link, className: 'cursor-pointer' } }
        : { c: Fragment, p: null },
    [link]
  )
  const ImageMemo = useMemo(() => <img {...image} />, [image])

  const TitleMemo = useMemo(
    () => <span className='font-bold'>{title}</span>,
    [title]
  )

  const AuthorMemo = useMemo(
    () => <span className='text-sm italic'>by {author}</span>,
    [author]
  )

  const LoadingMemo = useMemo(
    () => <span className='loading btn-ghost btn-lg btn transition-all'></span>,
    []
  )

  const DescriptionMemo = useMemo(
    () =>
      descriptionInnerHTML !== '' ? (
        <span
          className='text-sm italic transition-all [&>*]:overflow-hidden [&>*]:text-ellipsis'
          dangerouslySetInnerHTML={{ __html: descriptionInnerHTML }}
        />
      ) : (
        LoadingMemo
      ),
    [descriptionInnerHTML, LoadingMemo]
  )

  return (
    <div className='top-8 flex h-fit w-full flex-col gap-11 border border-base-200 bg-base-100 px-3 pt-5 pb-16 drop-shadow-lg md:sticky md:max-w-[288px]'>
      <div className='avatar'>
        <div className='mx-auto w-44 rounded'>
          {/* @ts-expect-error */}
          <LinkWrap.c {...LinkWrap.p}>{ImageMemo}</LinkWrap.c>
        </div>
      </div>
      {/* @ts-expect-error */}
      <LinkWrap.c {...LinkWrap.p}>
        <div className='flex flex-col gap-1 px-2 [&>*]:overflow-hidden [&>*]:text-ellipsis'>
          {TitleMemo}
          {AuthorMemo}
        </div>
      </LinkWrap.c>
      <div className='flex flex-col gap-1'>
        <span className='text-sm font-bold'>Description</span>
        {DescriptionMemo}
      </div>
    </div>
  )
}

export default DetailsCard
