import { Fragment, useMemo } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import DOMPurify from 'dompurify'

interface InfoCardProps {
  image?: React.ImgHTMLAttributes<HTMLImageElement>
  title?: string
  author?: string
  children?: React.ReactNode
  isChildDangerousHTML?: boolean
  isLoading?: boolean
  link?: (LinkProps & React.RefAttributes<HTMLAnchorElement>) | null
}

function DetailsCard({
  image,
  title = '',
  author = '',
  children = '',
  isChildDangerousHTML = false,
  isLoading = false,
  link
}: InfoCardProps): React.ReactElement {
  const LinkWrap: any = useMemo(
    () =>
      link != null
        ? {
            c: Link,
            p: {
              ...link,
              className:
                'cursor-pointer before:content-["Back_to_Podcast"] before:transition-all  relative before:absolute before:top-0 before:opacity-0 before:left-0 before:w-full before:h-full before:bg-primary  hover:before:opacity-80 before:text-base-100 before:flex before:justify-center before:items-center'
            }
          }
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

  const ContentMemo = useMemo(() => {
    if (isLoading) {
      return LoadingMemo
    }
    if (!children) {
      return
    }
    if (isChildDangerousHTML && typeof children === 'string') {
      return (
        <div className='flex flex-col gap-1'>
          <span className='text-sm font-bold'>Description</span>
          <span
            className='text-sm italic transition-all [&>*]:overflow-hidden [&>*]:text-ellipsis'
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(children)
            }}
          />
        </div>
      )
    }
    return children
  }, [isLoading, children, LoadingMemo, isChildDangerousHTML])

  return (
    <div className='top-24 flex h-fit w-full flex-col gap-11 border border-base-200 bg-base-100 px-3 pt-5 pb-16 drop-shadow-lg md:sticky md:max-w-[288px]'>
      <div className='avatar'>
        <div className='mx-auto w-44 rounded'>
          <LinkWrap.c {...LinkWrap.p}>{ImageMemo}</LinkWrap.c>
        </div>
      </div>
      <LinkWrap.c {...LinkWrap.p}>
        <div className='flex flex-col gap-1 px-2 [&>*]:overflow-hidden [&>*]:text-ellipsis'>
          {TitleMemo}
          {AuthorMemo}
        </div>
      </LinkWrap.c>
      {ContentMemo}
    </div>
  )
}

export default DetailsCard
