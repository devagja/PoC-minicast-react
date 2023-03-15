import { useMemo, Fragment } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

interface ButtonProperties
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

interface EmptyHeroProps {
  title: string
  description: string
  button: ButtonProperties
  link?: (LinkProps & React.RefAttributes<HTMLAnchorElement>) | null
}

function Hero({
  title,
  description,
  button,
  link
}: EmptyHeroProps): React.ReactElement {
  const LinkWrap = useMemo(
    () => (link != null ? { c: Link, p: link } : { c: Fragment, p: null }),
    [link]
  )

  const TitleMemo = useMemo(
    () => <h1 className='text-5xl font-bold'>{title}</h1>,
    [title]
  )

  const DescriptionMemo = useMemo(
    () => <p className='py-6'>{description}</p>,
    [description]
  )

  const ButtonMemo = useMemo(() => {
    const { label, ...buttonAttr } = button
    return (
      // @ts-expect-error
      <LinkWrap.c {...LinkWrap.p}>
        <button {...buttonAttr} className='btn-primary btn'>
          {label}
        </button>
      </LinkWrap.c>
    )
  }, [button])

  return (
    <div className='hero py-10'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          {TitleMemo}
          {DescriptionMemo}
          {ButtonMemo}
        </div>
      </div>
    </div>
  )
}

export default Hero
