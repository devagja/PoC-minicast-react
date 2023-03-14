import {
  Fragment,
  type ImgHTMLAttributes,
  type ReactElement,
  type RefAttributes,
  useMemo
} from 'react'
import { Link, type LinkProps } from 'react-router-dom'

interface InfoCardProps {
  image?: ImgHTMLAttributes<HTMLImageElement>
  title?: string
  author?: string
  descriptionInnerHTML?: string
  link?: (LinkProps & RefAttributes<HTMLAnchorElement>) | null
}

function DetailsCard({
  image = {},
  title = '',
  author = '',
  descriptionInnerHTML = '',
  link
}: InfoCardProps): ReactElement {
  const LinkWrap = useMemo(
    () =>
      link != null
        ? { c: Link, p: { ...link, className: 'cursor-pointer' } }
        : { c: Fragment, p: null },
    [link]
  )

  return (
    <div className='top-8 flex h-fit w-full flex-col gap-11 border border-base-200 bg-base-100 px-3 pt-5 pb-16 drop-shadow-lg md:sticky md:max-w-[288px]'>
      <div className='avatar'>
        <div className='mx-auto w-44 rounded'>
          {/* @ts-expect-error */}
          <LinkWrap.c {...LinkWrap.p}>
            <img {...image} />
          </LinkWrap.c>
        </div>
      </div>
      {/* @ts-expect-error */}
      <LinkWrap.c {...LinkWrap.p}>
        <div className='flex flex-col gap-1 px-2'>
          <span className='font-bold'>{title}</span>
          <span className='text-sm italic'>by {author}</span>
        </div>
      </LinkWrap.c>
      <div className='flex flex-col gap-1'>
        <span className='text-sm font-bold'>Description</span>
        {descriptionInnerHTML !== '' ? (
          <span
            className='text-sm italic transition-all'
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
