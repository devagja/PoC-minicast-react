import { type ReactElement, type ButtonHTMLAttributes, useMemo } from 'react'

interface ButtonProperties extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

interface EmptyHeroProps {
  title: string
  description: string
  button: ButtonProperties
}

function EmptyHero({
  title,
  description,
  button
}: EmptyHeroProps): ReactElement {
  const { label, ...buttonAttr } = button
  const ButtonMemo = useMemo(
    () => (
      <button {...buttonAttr} className='btn-primary btn'>
        {label}
      </button>
    ),
    [button]
  )

  return (
    <div className='hero py-10'>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>{title}</h1>
          <p className='py-6'>{description}</p>
          {ButtonMemo}
        </div>
      </div>
    </div>
  )
}

export default EmptyHero
